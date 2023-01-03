/*

TODO Docs

*/

import ts from 'typescript';
import {parseAXFunction} from "./utils/ElmWrappers";


export const supportArraysForHtml : ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isCallExpression(node)
        && ts.isIdentifier(node.expression)
        && node.arguments.length > 0
      ) {
        const callExpression = node.expression;
        const arity = parseAXFunction(callExpression.text);
        if (arity) {
        } else {
        }
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
