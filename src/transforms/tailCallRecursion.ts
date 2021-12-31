import ts from 'typescript';

/*

Applies tail-call recursion when possible, where the compiler didn't.

This function gets tail-call optimized.

    tco : (a -> b) -> List a -> List b -> List b
    tco mapper list acc =
        case list of
            [] ->
                acc

            x :: xs ->
                tco mapper xs (mapper x :: acc)

but this version doesn't (because of the additional `<|`):

    nonTco : (a -> b) -> List a -> List b -> List b
    nonTco mapper list acc =
        case list of
            [] ->
                acc

            x :: xs ->
                nonTco mapper xs <| (mapper x :: acc)

*/

// TODO Enable TCO for code like `rec n = if ... then False else condition n && rec (n - 1)`, using `&&` or `||`
// TODO Enable TCO for other kinds of data constructors 
// TODO Enable TCO for let declarations

type Context = any;

export const createTailCallRecursionTransformer : ts.TransformerFactory<ts.SourceFile> = (context : Context) => {
  return (sourceFile) => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // Is `var x = FX(function(...) {})`
      if (ts.isVariableDeclaration(node)
        && ts.isIdentifier(node.name)
        && node.initializer
      ) {
          const foundFunction = findFunction(node.initializer);
          if (!foundFunction) {
            return ts.visitEachChild(node, visitor, context);
          }

          const recursionType : RecursionType = determineRecursionType(node.name.text, foundFunction.fn.body);
          if (recursionType === RecursionType.NotRecursive) {
            return ts.visitEachChild(node, visitor, context);
          }

          const parameterNames : Array<string> = foundFunction.fn.parameters.map(param => {
            return ts.isIdentifier(param.name) ? param.name.text : '';
          });
          const newBody = updateFunctionBody(recursionType, node.name.text, parameterNames, foundFunction.fn.body, context);

          return ts.updateVariableDeclaration(
            node,
            node.name,
            undefined,
            foundFunction.update(newBody)
          );
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function findFunction(node : ts.Node) {
  // Multiple-argument function wrapped in FX function
  if (ts.isCallExpression(node)) {
    var fn = extractFCall(node);
    if (!fn) {
      return null;
    }
    const {name, parameters, modifiers} = fn;

    return {
      fn: fn,
      update: (body : ts.Block) => {
        const newFn = ts.createFunctionExpression(
          modifiers,
          undefined,
          name,
          undefined,
          parameters,
          undefined,
          body
        );

        return ts.updateCall(
          node,
          node.expression,
          undefined,
          [newFn]
        );
      }
    }
  }

  // Single-argument function not wrapped in FX
  if (ts.isFunctionExpression(node)) {
    return {
      fn: node,
      update: (body : ts.Block) => {
        return ts.createFunctionExpression(
          node.modifiers,
          undefined,
          node.name,
          undefined,
          node.parameters,
          undefined,
          body
        );
      }
    }
  }

  return null;
}

function extractFCall(node: ts.CallExpression): ts.FunctionExpression | null {
  if (ts.isIdentifier(node.expression)
    && node.expression.text.startsWith('F')
    && node.arguments.length > 0
  ) {
    const fn = node.arguments[0];
    if (ts.isFunctionExpression(fn)) {
      return fn;
    }

    return null;
  }

  return null;
}

enum RecursionType {
  NotRecursive = 0,
  PlainRecursion = 1,
  ConsRecursion = 2,
};

type Recursion
  = { kind: RecursionType.NotRecursive }
  | { kind: RecursionType.PlainRecursion, arguments : Array<ts.Expression> }
  // Could hold a Recursion as data
  | { kind: RecursionType.ConsRecursion, elements : ts.Expression[], arguments : Array<ts.Expression> }

function determineRecursionType(functionName : string, body : ts.Node) : RecursionType {
  let recursionType : RecursionType = RecursionType.NotRecursive;
  let nodesToVisit : Array<ts.Node> = [body];
  let node : ts.Node | undefined;

  loop: while (recursionType <= 1 && (node = nodesToVisit.shift())) {
    if (ts.isBlock(node)) {
      nodesToVisit = [...node.statements, ...nodesToVisit];
      continue loop;
    }

    if (ts.isLabeledStatement(node)) {
      recursionType = RecursionType.PlainRecursion;
      nodesToVisit.unshift(node.statement);
      continue loop;
    }

    if (ts.isWhileStatement(node)) {
      recursionType = RecursionType.PlainRecursion;
      nodesToVisit.unshift(node.statement);
      continue loop;
    }

    if (ts.isIfStatement(node)) {
      if (node.elseStatement) {
        nodesToVisit.unshift(node.elseStatement);
      }
      nodesToVisit.unshift(node.thenStatement);
      continue loop;
    }

    if (ts.isReturnStatement(node)
      && node.expression
      && ts.isCallExpression(node.expression)
    ) {
      recursionType = Math.max(
        extractRecursionKindFromReturn(functionName, node.expression).kind,
        recursionType
      );
      continue loop;
    }
  }

  return recursionType;
}

const START = ts.createIdentifier("$start");
const END = ts.createIdentifier("$end");

const consDeclarations =
  [
    ts.createVariableStatement(
      undefined,
      [ts.createVariableDeclaration(
        START,
        undefined,
        ts.createCall(
          ts.createIdentifier("_List_Cons"),
          undefined,
          [
            ts.createIdentifier("undefined"),
            ts.createIdentifier("_List_Nil")
          ]
        )
      )]
    ),
    ts.createVariableStatement(
      undefined,
      [ ts.createVariableDeclaration(
          END,
          undefined,
          START
        )
      ]
    )
  ];

function updateFunctionBody(recursionType : RecursionType, functionName : string, parameterNames : Array<string>, body : ts.Block, context : Context) : ts.Block {
  const labelSplits = functionName.split("$");
  const label = labelSplits[labelSplits.length - 1] || functionName;
  const updatedBlock = ts.visitEachChild(body, updateRecursiveCallVisitor, context);

  function updateRecursiveCallVisitor(node: ts.Node): ts.VisitResult<ts.Node> {
    if (ts.isBlock(node) || ts.isLabeledStatement(node) || ts.isWhileStatement(node)) {
      return ts.visitEachChild(node, updateRecursiveCallVisitor, context);
    }

    if (ts.isIfStatement(node)) {
      return ts.updateIf(
        node,
        node.expression,
        ts.visitNode(node.thenStatement, updateRecursiveCallVisitor, context),
        ts.visitNode(node.elseStatement, updateRecursiveCallVisitor, context)
      )
    }

    if (ts.isReturnStatement(node)
      && node.expression
    ) {
      if (ts.isCallExpression(node.expression)) {
        const extract = extractRecursionKindFromReturn(functionName, node.expression);

        switch (extract.kind) {
          case RecursionType.NotRecursive: {
            return node;
          }

          case RecursionType.PlainRecursion: {
            return createContinuation(label, parameterNames, extract.arguments);
          }

          case RecursionType.ConsRecursion: {
            return createConsContinuation(label, parameterNames, extract.elements, extract.arguments);
          }
        }
      }

      if (recursionType === RecursionType.ConsRecursion) {
        const returnStatement = ts.createReturn(
          ts.createPropertyAccess(
            START,
            "b"
          )
        );

        if (ts.isIdentifier(node.expression) && node.expression.text === "_List_Nil") {
          return returnStatement;
        }

        return [
          ts.createExpressionStatement(
            ts.createAssignment(
              ts.createPropertyAccess(
                END,
                "b"
              ),
              node.expression
            )
          ),
          returnStatement
        ];
      }
    }

    return node;
  }

  if (recursionType === RecursionType.NotRecursive) {
    return body;
  }

  if (recursionType === RecursionType.PlainRecursion) {
    if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
      return ts.createBlock(
        [ts.createLabel(label, ts.createWhile(ts.createTrue(), updatedBlock))]
      );
    }

    return updatedBlock;
  }

  if (recursionType === RecursionType.ConsRecursion) {
    if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
      return ts.createBlock(
        [ ...consDeclarations
        , ts.createLabel(label, ts.createWhile(ts.createTrue(), updatedBlock))
        ]
      );
    }

    return ts.updateBlock(
      updatedBlock,
      [ ...consDeclarations
      , ...updatedBlock.statements
      ]
    );
  }

  return updatedBlock;
}

function extractRecursionKindFromReturn(functionName : string, node : ts.CallExpression) : Recursion {
  if (!ts.isIdentifier(node.expression)) {
    return { kind: RecursionType.NotRecursive };
  }

  // Is "fn(...)"
  if (node.expression.text === functionName) {
    return {
      kind: RecursionType.PlainRecursion,
      arguments: [...node.arguments]
    };
  }

  // Is "AX(fn, ...)"
  const [firstArg, secondArg, thirdArg] = node.arguments;
  if (!node.expression.text.startsWith("A")
    || !ts.isIdentifier(firstArg)
  ) {
    return { kind: RecursionType.NotRecursive };
  }

  if (firstArg.text === functionName) {
    return {
      kind: RecursionType.PlainRecursion,
      arguments: node.arguments.slice(1)
    };
  }

  // Elm: Is x :: <recursive call>
  // JS: Is A2($elm$core$List$cons, x, <recursive call>)
  if (firstArg.text === "$elm$core$List$cons" && ts.isCallExpression(thirdArg)) {
    const thirdArgExtract = extractRecursionKindFromReturn(functionName, thirdArg);
    if (thirdArgExtract.kind === RecursionType.PlainRecursion) {
      return {
        kind: RecursionType.ConsRecursion,
        elements: [secondArg],
        arguments: thirdArgExtract.arguments
      };
    }

    if (thirdArgExtract.kind === RecursionType.ConsRecursion) {
      thirdArgExtract.elements.push(secondArg);
      return thirdArgExtract;
    }
  }

  return { kind: RecursionType.NotRecursive };
}

function createContinuation(label : string, parameterNames : Array<string>, newArguments : Array<ts.Expression>) : Array<ts.Node> {
  let assignments : Array<ts.VariableDeclaration> = [];
  let reassignments : Array<ts.BinaryExpression> = [];

  parameterNames.forEach((name, index) => {
    const correspondingArg : ts.Expression = newArguments[index];
    if (ts.isIdentifier(correspondingArg)
      && name === correspondingArg.text
    ) {
      return;
    }
    const tempName = `$temp$${name}`;
    assignments.push(
      ts.createVariableDeclaration(
        tempName,
        undefined,
        newArguments[index]
      )
    );
    reassignments.push(
      ts.createAssignment(
        ts.createIdentifier(name),
        ts.createIdentifier(tempName)
      )
    );
  });

  return [
    ts.createVariableDeclarationList(assignments),
    ...reassignments,
    ts.createContinue(label)
  ];
}

function createConsContinuation(label : string, parameterNames : Array<string>, elements : ts.Expression[], newArguments : Array<ts.Expression>) : Array<ts.Node> {
  let assignments : Array<ts.VariableDeclaration> = [];
  let reassignments : Array<ts.ExpressionStatement> = [];

  parameterNames.forEach((name, index) => {
    const correspondingArg : ts.Expression = newArguments[index];
    if (ts.isIdentifier(correspondingArg)
      && name === correspondingArg.text
    ) {
      return;
    }
    const tempName = `$temp$${name}`;
    assignments.push(
      ts.createVariableDeclaration(
        tempName,
        undefined,
        newArguments[index]
      )
    );
    reassignments.push(
      ts.createExpressionStatement(
        ts.createAssignment(
          ts.createIdentifier(name),
          ts.createIdentifier(tempName)
        )
      )
    );
  });

  return [
    ...elements.map(addToEnd),
    ts.createExpressionStatement(
      ts.createAssignment(
        END,
        ts.createPropertyAccess(
          END,
          "b"
        )
      )
    ),
    ts.createVariableDeclarationList(assignments),
    ...reassignments,
    ts.createContinue(label)
  ];
}

function addToEnd(element : ts.Expression) : ts.Statement {
  return ts.createExpressionStatement(
    ts.createAssignment(
      ts.createPropertyAccess(
        END,
        "b"
      ),
      ts.createCall(
        ts.createIdentifier("_List_Cons"),
        undefined,
        [
          element,
          ts.createIdentifier("_List_Nil")
        ]
      )
    )
  );
}