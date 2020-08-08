/*

If we see `String$fromFloat(val)`, replace it with `val + ""`
*/

import ts from 'typescript';

const FLOAT_2_STRING = '$elm$core$String$fromFloat';
const INT_2_STRING = '$elm$core$String$fromInt';

export const inlineNumberToString = (): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isCallExpression(node)) {
        const expression = node.expression;
        if (
          ts.isIdentifier(expression) &&
          (expression.text === FLOAT_2_STRING ||
            expression.text === INT_2_STRING) &&
          node.arguments.length == 1
        ) {
          return ts.createAdd(node.arguments[0], ts.createIdentifier('""'));
        }
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
