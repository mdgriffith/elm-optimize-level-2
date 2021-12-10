import ts, { createIdentifier } from 'typescript';

/*

Split out function definitions so that the raw version of the function can be called.

This only shows benefit with the `createFuncInlineTransformer`, which will detect when an F3 is being called with 3 arguments and skip the F3 call

initial

var left = A2($elm$core$Basics$composeL, f1, f2);
var right = A2($elm$core$Basics$composeR, f1, f2);

transformed

var left = function (_a_1) { return f1(f2(_a_1)) };
var right = function (_a_1) { return f2(f1(_a_1)) };

*/

const COMPOSE_LEFT = "$elm$core$Basics$composeL";
const COMPOSE_RIGHT = "$elm$core$Basics$composeR";

const PREFIX_FOR_ARGUMENTS = "_param";
const PREFIX_FOR_DECLARATION = "_decl";

// Copied from inlineWrappedFunctions
// TODO Extract to module
const invocationRegex = /^A(?<arity>[1-9]+[0-9]*)$/;
const wrapperRegex = /^F(?<arity>[1-9]+[0-9]*)$/;

type Context = any;


export const lambdaifyFunctionComposition : ts.TransformerFactory<ts.SourceFile> = (context: Context) => {
  let paramCount = 1;
  let declCount = 1;
  const createUniqueParamName = () => ts.createIdentifier(PREFIX_FOR_ARGUMENTS + "_" + paramCount++);
  const createUniqueDeclarationName = () => ts.createIdentifier(PREFIX_FOR_DECLARATION + "_" + declCount++);
  const functionArityDict : Map<string, number> = new Map();

  let variablesToInsertStack: Array<Array<{identifier: ts.Identifier, value : ts.Expression }>> = [];

  function extractToVariableIfNecessary(value : ts.Expression) {
    if (ts.isCallExpression(value) || isANativeFunction(value)) {
      const identifier : ts.Identifier = createUniqueDeclarationName();
      variablesToInsertStack[variablesToInsertStack.length - 1].push({ identifier, value });
      return identifier;
    }
    return value;
  }

  return (sourceFile) => {
    const visitor = (originalNode: ts.Node): ts.VisitResult<ts.Node> => {
      // Register the arity, useful for createFunctionCall
      if (ts.isVariableDeclaration(originalNode)) {
        registerFunctionArity(functionArityDict, originalNode);
      }

      // Remove definitions of composeL and composeR
      if (ts.isVariableStatement(originalNode)) {
        if (ts.isIdentifier(originalNode.declarationList.declarations[0].name)
          && (originalNode.declarationList.declarations[0].name.text === COMPOSE_LEFT
            || originalNode.declarationList.declarations[0].name.text === COMPOSE_RIGHT
          )
        ) {
          return undefined;
        }
      }

      if (ts.isVariableDeclarationList(originalNode)) {
        variablesToInsertStack.push([]);
        const node = ts.visitEachChild(originalNode, visitor, context);
        const variablesToInsert = variablesToInsertStack.pop();
        if (variablesToInsert && variablesToInsert.length > 0) {
          const newDeclarations =
            variablesToInsert.map(({identifier, value}) =>
              ts.createVariableDeclaration(identifier, undefined, value)
            );
          return ts.updateVariableDeclarationList(
            node,
            newDeclarations.concat(node.declarations)
          );
        }
        return node;
      }

      if (ts.isReturnStatement(originalNode)) {
        variablesToInsertStack.push([]);
        const node = ts.visitEachChild(originalNode, visitor, context);
        const variablesToInsert = variablesToInsertStack.pop();
        if (variablesToInsert && variablesToInsert.length > 0) {
          const declarationsStatement : ts.Statement =
            ts.createVariableStatement(
              [],
              ts.createVariableDeclarationList(
                variablesToInsert.map(({identifier, value}) =>
                  ts.createVariableDeclaration(identifier, undefined, value)
                )
              )
            );
          return [declarationsStatement, node];
        }
        return node;
      }

      const node = ts.visitEachChild(originalNode, visitor, context);

      if (ts.isCallExpression(node)
        && ts.isIdentifier(node.expression)
        && (node.expression.text === "A2" || node.expression.text === "A3")
      ) {
        let [fn, firstArg, secondArg, value] = node.arguments;
        if (!ts.isIdentifier(fn)
          || !(fn.text === COMPOSE_LEFT || fn.text === COMPOSE_RIGHT)
        ) {
          return node;
        }

        let [functionToApplyFirst, functionToApplySecond] =
          fn.text === COMPOSE_RIGHT
            ? [firstArg, secondArg]
            : [secondArg, firstArg];

        if (node.expression.text === "A2") {
          functionToApplyFirst = extractToVariableIfNecessary(functionToApplyFirst);
          functionToApplySecond = extractToVariableIfNecessary(functionToApplySecond);

          if (ts.isFunctionExpression(functionToApplySecond)) {
            if (ts.isFunctionExpression(functionToApplyFirst)) {
              return mergeFunctionCalls(functionToApplyFirst, functionToApplySecond, context);
            }
            return insertFunctionCall(functionToApplyFirst, functionToApplySecond, context);
          }

          return createLambda(createUniqueParamName(), functionToApplyFirst, functionToApplySecond);
        }

        // A3 call
        return createCompositionCall(functionArityDict, functionToApplyFirst, functionToApplySecond, value);
      }
      return node;
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function registerFunctionArity(functionArityDict : Map<string, number>, declaration : ts.VariableDeclaration) : void {
  if (!declaration.initializer
    || !ts.isIdentifier(declaration.name)) {
    return;
  }

  const functionName = declaration.name.text;

  if (ts.isCallExpression(declaration.initializer)
    && ts.isIdentifier(declaration.initializer.expression)
  ) {
    const wrapperMatch = declaration.initializer.expression.text.match(wrapperRegex)
    if (wrapperMatch && wrapperMatch.groups) {
      const arity = Number(wrapperMatch.groups.arity);
      functionArityDict.set(functionName, arity);
    }
    return;
  }
}


function createLambda(lambdaArgName : ts.Identifier, functionToApplyFirst: ts.Expression, functionToApplySecond: ts.Expression) : ts.Expression {
  return ts.createFunctionExpression(
    undefined, //modifiers
    undefined, //asteriskToken
    undefined, //name
    undefined, //typeParameters
    [ts.createParameter(
      undefined,
      undefined,
      undefined,
      lambdaArgName,
      undefined,
      undefined,
      undefined
    )],
    undefined, //type
    ts.createBlock([
      ts.createReturn(
        ts.createCall(
          functionToApplySecond,
          undefined,
          [ts.createCall(
            functionToApplyFirst,
            undefined,
            [lambdaArgName]
          )]
        )
      )
    ])
  );
}

function createCompositionCall(functionArityDict : Map<string, number>, functionToApplyFirst : ts.Expression, functionToApplySecond : ts.Expression, value : ts.Expression) : ts.Expression {
  const argumentToSecondFunction = createFunctionCall(functionArityDict, functionToApplyFirst, value);
  return createFunctionCall(functionArityDict, functionToApplySecond, argumentToSecondFunction);
}

function createFunctionCall(functionArityDict : Map<string, number>, fn : ts.Expression, value : ts.Expression) : ts.Expression {
  if (!ts.isCallExpression(fn)) {
    return ts.createCall(
      fn,
      undefined,
      [value]
    );
  }

  if (ts.isIdentifier(fn.expression)) {
    const maybeMatch = fn.expression.text.match(invocationRegex);
    // detects A123(...)
    if (maybeMatch && maybeMatch.groups) {
      const arity = Number(maybeMatch.groups.arity);
      const functionToCall : ts.Expression = fn.arguments[0];
      const functionName = ts.isIdentifier(functionToCall) ? functionToCall.text : "";
      if (functionArityDict.get(functionName) !== arity && arity < 9) {
        return ts.createCall(
          ts.createIdentifier("A" + (arity + 1)),
          undefined,
          [...fn.arguments, value]
        );
      }

      return ts.createCall(
        fn,
        undefined,
        [value]
      );
    }
  }

  return ts.createCall(
    ts.createIdentifier("A2"),
    undefined,
    [fn.expression, ...fn.arguments, value]
  );
}


function insertFunctionCall(functionToApplyFirst: ts.Expression, functionToApplySecond: ts.Expression, context: Context) : ts.Node {
  const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
    if (ts.isReturnStatement(node) || ts.isFunctionExpression(node) || ts.isBlock(node)) {
      return ts.visitEachChild(node, visitor, context);
    }

    if (ts.isCallExpression(node)) {
      return ts.createCall(
        node.expression,
        undefined,
        [
          ...node.arguments.slice(0, -1),
          ...[ts.visitNode(node.arguments[node.arguments.length - 1], visitor, context)]
        ]
      );
    }

    if (ts.isIdentifier(node)) {
      return ts.createCall(
        functionToApplyFirst,
        undefined,
        [node]
      );
    }

    return node;
  };

  return ts.visitNode(functionToApplySecond, visitor, context);
}

function mergeFunctionCalls(functionToApplyFirst: ts.FunctionExpression, functionToApplySecond: ts.FunctionExpression, context: Context) : ts.Node {
  const extract1 = extractStatementsAndReturnValue(functionToApplyFirst);
  const extract2 = extractStatementsAndReturnValue(functionToApplySecond);

  const replaceParamVisitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
    if (ts.isIdentifier(node) && node.text.startsWith(PREFIX_FOR_ARGUMENTS)) {
      return extract1.returnValue;
    }
    return ts.visitEachChild(node, replaceParamVisitor, context);
  };
  const returnStatement = ts.createReturn(
    ts.visitNode(extract2.returnValue, replaceParamVisitor, context)
  );
  const body = ts.createBlock(
    extract1.statements.concat(extract2.statements).concat(returnStatement)
  )
  return ts.updateFunctionExpression(
    functionToApplyFirst,
    undefined,
    undefined,
    undefined,
    undefined,
    functionToApplyFirst.parameters,
    undefined,
    body
  );
}

function extractStatementsAndReturnValue(fn: ts.FunctionExpression) {
  const returnStatement = fn.body.statements[fn.body.statements.length - 1];
  const returnValue = (returnStatement as ts.ReturnStatement).expression;
  return {
    statements: fn.body.statements.slice(0, -1),
    returnValue
  };
}

/* Detects function expressions that were not introduced by this rule. */
function isANativeFunction(node : ts.Expression) {
  // detects "function(...) { [...] }
  if (ts.isFunctionExpression(node)) {
    const isFunctionWeCreated =
      node.parameters.length === 1
      && ts.isIdentifier(node.parameters[0].name)
      // detects "function(a) { [...] } where "a" is not a unique argument we created.
      && node.parameters[0].name.text.startsWith(PREFIX_FOR_ARGUMENTS);
    return !isFunctionWeCreated;
  }
  return false;
}