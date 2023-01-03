/*

TODO Docs

*/

import ts from 'typescript';
import {parseAXFunction} from "./utils/ElmWrappers";


export const supportArraysForHtml: ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isCallExpression(node)
        && ts.isIdentifier(node.expression)
        && node.arguments.length > 0
      ) {
        const callExpression = node.expression;
        const arity = parseAXFunction(callExpression.text);
        const {functionName, args} =
          arity
            ? {functionName: getName(node.arguments[0]), args: node.arguments.slice(1)}
            : {functionName: callExpression.text, args: node.arguments};
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function getName(expr: ts.Expression): string | null {
  if (ts.isIdentifier(expr)) {
    return expr.text;
  }
  return null;
}
