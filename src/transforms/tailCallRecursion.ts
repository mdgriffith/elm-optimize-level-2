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

// TODO Enable TCO for tail recursion modulo cons
// TODO Enable TCO for code like `rec n = if ... then False else condition n && rec (n - 1)`, using `&&` or `||`
// TODO Enable TCO for other kinds of data constructors 
// TODO Enable TCO for let declarations

type Context = any;

export const createTailCallRecursionTransformer : ts.TransformerFactory<ts.SourceFile> = (context : Context) => {
  return (sourceFile) => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isVariableDeclaration(node)
        && ts.isIdentifier(node.name)
        && node.initializer
        && ts.isCallExpression(node.initializer)) {
          const fn = isFCall(node.initializer);
          if (!fn) {
            return ts.visitEachChild(node, visitor, context);
          }
          const recursionType : RecursionType = determineRecursionType(node.name.text, fn.body);
          if (recursionType === RecursionType.NotRecursive) {
            return ts.visitEachChild(node, visitor, context);
          }

          const parameterNames : Array<string> = fn.parameters.map(param => {
            return ts.isIdentifier(param.name) ? param.name.text : '';
          });
          const newBody = updateFunctionBody(recursionType, node.name.text, parameterNames, fn.body, context);

          const newFn = ts.createFunctionExpression(
            fn.modifiers,
            undefined,
            fn.name,
            undefined,
            fn.parameters,
            undefined,
            newBody
          );

          const initializer = ts.updateCall(
            node.initializer,
            node.initializer.expression,
            undefined,
            [newFn]
          );

          return ts.updateVariableDeclaration(
            node,
            node.name,
            undefined,
            initializer
          );
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function isFCall(node: ts.CallExpression): ts.FunctionExpression | null {
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
  | { kind: RecursionType.ConsRecursion, element : ts.Expression, arguments : Array<ts.Expression> }

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
      nodesToVisit.unshift(node.expression);
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

const consDeclarations =
  [
    ts.createVariableStatement(
      undefined,
      [ts.createVariableDeclaration(
        "tmp",
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
          "end",
          undefined,
          ts.createIdentifier("tmp")
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
      && ts.isCallExpression(node.expression)
    ) {
      const extract = extractRecursionKindFromReturn(functionName, node.expression);

      switch (extract.kind) {
        case RecursionType.NotRecursive: {
          return node;
        }

        case RecursionType.PlainRecursion: {
          return createContinuation(label, parameterNames, extract.arguments);
        }

        case RecursionType.ConsRecursion: {
          return createConsContinuation(label, parameterNames, extract.element, extract.arguments);
        }
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

    return ts.createBlock(
      [ ...consDeclarations
      , updatedBlock
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
      // TODO Support multiple conses
      return {
        kind: RecursionType.ConsRecursion,
        element: secondArg,
        arguments: thirdArgExtract.arguments
      };
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

function createConsContinuation(label : string, parameterNames : Array<string>, element : ts.Expression, newArguments : Array<ts.Expression>) : Array<ts.Node> {
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
    addToEnd(element),
    ts.createExpressionStatement(
      ts.createAssignment(
        ts.createIdentifier("end"),
        ts.createPropertyAccess(
          ts.createIdentifier("end"),
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
        ts.createIdentifier("end"),
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