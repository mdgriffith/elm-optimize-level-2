/*

TODO Docs

*/

import ts from 'typescript';


export const supportArraysForHtml : ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
