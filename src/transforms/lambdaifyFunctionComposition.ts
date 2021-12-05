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

const COMPOSE_LEFT = "$elm$core$Basics$composeL";
const COMPOSE_RIGHT = "$elm$core$Basics$composeR";

export const lambdaifyFunctionComposition : ts.TransformerFactory<ts.SourceFile> = (context) => {
  return (sourceFile) => {
    const visitor = (originalNode: ts.Node): ts.VisitResult<ts.Node> => {
      const node = ts.visitEachChild(originalNode, visitor, context);
      if (ts.isCallExpression(node)
        && ts.isIdentifier(node.expression)
        && node.expression.text === "A2"
      ) {
        let [fn, firstArg, secondArg] = node.arguments;
        if (ts.isIdentifier(fn)
          && (fn.text === COMPOSE_LEFT || fn.text === COMPOSE_RIGHT)
        ) {
            const [functionToApplyFirst, functionToApplySecond] =
              fn.text === COMPOSE_RIGHT
                ? [secondArg, firstArg]
                : [firstArg, secondArg];

            return createLambda(functionToApplySecond, functionToApplyFirst);
        }
      }
      return node;
    };

    return ts.visitNode(sourceFile, visitor);
  };
};


function createLambda(functionToApplyFirst: ts.Expression, functionToApplySecond: ts.Expression) : ts.Node {
  const lambdaArgName = "_a0";
  return ts.createFunctionExpression(
    undefined, //modifiers
    undefined, //asteriskToken
    undefined, //name
    undefined, //typeParameters
    [ts.createParameter(
      undefined,
      undefined,
      undefined,
      // TODO Increment counter as necessary
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
            [ts.createIdentifier(lambdaArgName)]
          )]
        )
      ),
    ])
  );
}