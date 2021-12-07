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

// TODO Transform `(f << g) >> (h >> i)` to function(_a0) { return i(h(f(g(_a0)))); }
// TODO Transform `f >> .name` to `function(_a0) { return f(_a0).name; }
// TODO Transform `.name >> f` to `function(_a0) { return f(_a0.name); }
// TODO Transform `g << .name << f` to `function(_a0) { return g(f(_a0).name); }
// TODO Transform `g >> .name >> f` to `function(_a0) { return f(g(_a0).name); }
// TODO Support `a |> (f >> g)` (uses A3 instead of A2)


const COMPOSE_LEFT = "$elm$core$Basics$composeL";
const COMPOSE_RIGHT = "$elm$core$Basics$composeR";

type Context = any;


export const lambdaifyFunctionComposition : ts.TransformerFactory<ts.SourceFile> = (context: Context) => {
  let blocks : ts.Node[] = [];

  return (sourceFile) => {
    const visitor = (originalNode: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isBlock(originalNode)) {
        blocks.push(originalNode);
        const node = ts.visitEachChild(originalNode, visitor, context);
        return blocks.pop();
      }

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
                ? [firstArg, secondArg]
                : [secondArg, firstArg];

            if (ts.isFunctionExpression(functionToApplySecond)) {
              return insertFunctionCall(functionToApplyFirst, functionToApplySecond, context);
            }

            return createLambda(functionToApplyFirst, functionToApplySecond);
        }
      }
      return node;
    };

    return ts.visitNode(sourceFile, visitor);
  };
};


function createLambda(functionToApplyFirst: ts.Expression, functionToApplySecond: ts.Expression) : ts.Node {
  const lambdaArgName = ts.createUniqueName("_a");

  return ts.createFunctionExpression(
    undefined, //modifiers
    undefined, //asteriskToken
    undefined, //name
    undefined, //typeParameters
    [ts.createParameter(
      undefined,
      undefined,
      undefined,
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
            [lambdaArgName]
          )]
        )
      ),
    ])
  );
}


function insertFunctionCall(functionToApplyFirst: ts.Expression, functionToApplySecond: ts.Expression, context: Context) : ts.Node {
  // TODO Use ts.updateFunctionExpression instead?
  const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
    if (ts.isReturnStatement(node) || ts.isFunctionExpression(node) || ts.isBlock(node)) {
      return ts.visitEachChild(node, visitor, context);
    }

    if (ts.isCallExpression(node)) {
      return ts.createCall(
        node.expression,
        undefined,
        [
          ...node.arguments.slice(0, -1),
          ...[ts.visitNode(node.arguments[node.arguments.length - 1], visitor, context)]
        ]
      );
    }

    if (ts.isIdentifier(node)) {
      return ts.createCall(
        functionToApplyFirst,
        undefined,
        [node]
      );
    }

    return node;
  };

  return ts.visitNode(functionToApplySecond, visitor, context);
}