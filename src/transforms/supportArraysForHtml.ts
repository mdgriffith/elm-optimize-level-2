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
        const arity = parseAXFunction(node.expression.text);
        const functionName = arity ? getName(node.arguments[0]) : node.expression.text;

        if (functionName && isOptimizableFunction(functionName)) {
          node = ts.factory.updateCallExpression(
            node,
            node.expression,
            node.typeArguments,
            node.arguments.map(removeListFromArray)
          );
        }
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function removeListFromArray(node: ts.Expression): ts.Expression {
  if (ts.isCallExpression(node)
    && ts.isIdentifier(node.expression)
    && node.expression.text === '_List_fromArray'
  ) {
    return node.arguments[0];
  }

  return node;
}

function getName(expr: ts.Expression): string | null {
  if (ts.isIdentifier(expr)) {
    return expr.text;
  }
  return null;
}

function isOptimizableFunction(_functionName: string): boolean {
  return true;
}