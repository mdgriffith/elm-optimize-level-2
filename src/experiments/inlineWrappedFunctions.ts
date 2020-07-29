/*

*/

import ts from 'typescript';

export type FuncSplit = {
  rawLambdaName: string;
  arity: number;
};

const deriveRawLambdaName = (wrappedName: string): string =>
  wrappedName + '_raw';

const wrapperRegex = /F(?<arity>[1-9]+[0-9]*)/;

/*

Split out function definitions so that the raw version of the function can be called.

This only shows benefit with the `createFuncInlineTransformer`, which will detect when an F3 is being called with 3 arguments and skip the F3 call

initial

  var $elm$core$String$join = F2(function (sep, chunks) {
      return A2(_String_join, sep, _List_toArray(chunks));
  });


transformed

  var $elm$core$String$join_raw = function (sep, chunks) {
      return A2(_String_join, sep, _List_toArray(chunks));
  }, $elm$core$String$join = F2($elm$core$String$join_raw);


*/
export const createSplitFunctionDeclarationsTransformer = (
  splits: Map<string, FuncSplit>
): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects "var a"
      if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
        if (node.initializer && ts.isIdentifier(node.initializer)) {
          const existingSplit = splits.get(node.initializer.text);
          if (existingSplit) {
            splits.set(node.name.text, existingSplit);
          }
        }
        // detects "var a = [exp](..)"
        if (node.initializer && ts.isCallExpression(node.initializer)) {
          const callExpression = node.initializer.expression;
          // detects "var a = f(..)"
          if (ts.isIdentifier(callExpression)) {
            // detects "var a = F123(..)"
            const maybeMatch = callExpression.text.match(wrapperRegex);
            if (maybeMatch && maybeMatch.groups) {
              const args = node.initializer.arguments;
              // checks that it should be called with only one argument
              if (args.length === 1) {
                const [maybeFuncExpression] = args;

                const arity = Number(maybeMatch.groups.arity);
                const originalName = node.name.text;

                if (ts.isIdentifier(maybeFuncExpression)) {
                  splits.set(originalName, {
                    arity,
                    rawLambdaName: maybeFuncExpression.text,
                  });
                }

                // and it is a function
                // detects "var a = F123( function (a) {return a})"
                // or "var a = F123( a => a)"
                if (
                  ts.isArrowFunction(maybeFuncExpression) ||
                  ts.isFunctionExpression(maybeFuncExpression)
                ) {
                  // TODO typecheck?
                  const rawLambdaName = deriveRawLambdaName(originalName);

                  splits.set(originalName, {
                    arity,
                    rawLambdaName,
                  });

                  const lambdaDeclaration = ts.createVariableDeclaration(
                    rawLambdaName,
                    undefined,
                    maybeFuncExpression
                  );

                  const newDeclaration = ts.updateVariableDeclaration(
                    node,
                    node.name,
                    node.type,
                    ts.createCall(callExpression, undefined, [
                      ts.createIdentifier(rawLambdaName),
                    ])
                  );

                  return [lambdaDeclaration, newDeclaration];
                }
              }
            }
          }
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

const invocationRegex = /A(?<arity>[1-9]+[0-9]*)/;

export const createFuncInlineTransformer = (
  splits: Map<string, FuncSplit>
): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects [exp](..)
      if (ts.isCallExpression(node)) {
        const expression = node.expression;
        // detects f(..)
        if (ts.isIdentifier(expression)) {
          const maybeMatch = expression.text.match(invocationRegex);
          // detects A123(...)
          if (maybeMatch && maybeMatch.groups) {
            const arity = Number(maybeMatch.groups.arity);

            const allArgs = node.arguments;
            const [funcName, ...args] = allArgs;

            if (!ts.isIdentifier(funcName)) {
              throw new Error(
                `first argument of A${arity} call is not an identifier`
              );
            }

            if (args.length !== arity) {
              throw new Error(
                `something went wrong, expected number of arguments=${arity} but got ${args.length} for ${funcName.text}`
              );
            }

            const split = splits.get(funcName.text);

            if (split && split.arity === arity) {
              return ts.createCall(
                ts.createIdentifier(split.rawLambdaName),
                undefined,
                args.map(arg => ts.visitNode(arg, visitor))
              );
            }
          }
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
