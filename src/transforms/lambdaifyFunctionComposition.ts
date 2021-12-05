import ts, { SourceFile } from 'typescript';
import { ast } from './utils/create';

/*

Split out function definitions so that the raw version of the function can be called.

This only shows benefit with the `createFuncInlineTransformer`, which will detect when an F3 is being called with 3 arguments and skip the F3 call

initial

var left = A2($elm$core$Basics$composeL, $f1, $f2);
var right = A2($elm$core$Basics$composeR, $f1, $f2);

transformed

var left = function(_a1) { return } A2($f1, $f2);
var right = A2($elm$core$Basics$composeR, $f1, $f2);

*/

export const lambdaifyFunctionComposition : ts.TransformerFactory<ts.SourceFile> = (context) => {
  return (sourceFile) => {
    const visitor = (originalNode: ts.Node): ts.VisitResult<ts.Node> => {
      return ts.visitEachChild(originalNode, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
