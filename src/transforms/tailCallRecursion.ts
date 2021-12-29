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

// TODO Enable TCO when it should have been enabled but not triggered because of `<|` or `|>`
// TODO Re-use the existing loop and goto label if there is already one
// TODO Enable TCO for tail recursion modulo cons
// TODO Enable TCO for code like `rec n = if ... then False else condition n && rec (n - 1)`, using `&&` or `||`
// TODO Enable TCO for other kinds of data constructors 

export const createTailCallRecursionTransformer = (forTests: boolean): ts.TransformerFactory<ts.SourceFile> => (context) => {
  return (sourceFile) => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isVariableDeclaration(node)
        && ts.isIdentifier(node.name)
        && node.initializer
        && ts.isCallExpression(node.initializer)) {
          const fn = isFCall(node.initializer);
          if (fn) {
            const newBody = updateFunctionBody(node.name.text, fn.body);
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
      }
      return ts.visitEachChild(node, visitor, context);
    };
    console.log(forTests);

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

function updateFunctionBody(functionName : string, body : ts.Block) : ts.Block {
  const labelSplits = functionName.split("$");
  const label = labelSplits[labelSplits.length - 1] || functionName;
  return ts.createBlock(
    [ts.createLabel(label, ts.createWhile(ts.createTrue(), updateRecursiveCalls(body)))]
  );
}

function updateRecursiveCalls(node : ts.Statement) : ts.Statement {
  return node;
}