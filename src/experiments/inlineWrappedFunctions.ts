import ts from 'typescript';

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

export type PartialApplication = { split: FuncSplit; appliedArgs: string[] };

export type InlineContext = {
  splits: Map<string, FuncSplit>;
  partialApplications: Map<string, PartialApplication>;
  inlinedCount: number;
  inlinedPartialApplications: number;
};

export type FuncSplit = {
  rawLambdaName: string;
  arity: number;
};

const deriveRawLambdaName = (wrappedName: string): string =>
  wrappedName + '_raw';

const wrapperRegex = /F(?<arity>[1-9]+[0-9]*)/;

const invocationRegex = /A(?<arity>[1-9]+[0-9]*)/;

export const createFunctionInlineTransformer = (
  reportResult?: (res: InlineContext) => void
): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const inlineContext: InlineContext = {
      splits: new Map<string, FuncSplit>(),
      partialApplications: new Map<string, PartialApplication>(),
      inlinedCount: 0,
      inlinedPartialApplications: 0,
    };

    const splitter = createSplitterVisitor(inlineContext, context);
    const splittedNode = ts.visitNode(sourceFile, splitter);

    const inliner = createInlinerVisitor(inlineContext, context);
    const result = ts.visitNode(splittedNode, inliner);

    if (reportResult) {
      reportResult(inlineContext);
    }

    return result;
  };
};

const createSplitterVisitor = (
  { splits, partialApplications }: InlineContext,
  context: ts.TransformationContext
) => {
  const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
    // detects "var a"
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer
    ) {
      // detects an alias to existing split
      if (ts.isIdentifier(node.initializer)) {
        const existingSplit = splits.get(node.initializer.text);
        if (existingSplit) {
          splits.set(node.name.text, existingSplit);
        }
      }

      // detects "var a = [exp](..)"
      if (ts.isCallExpression(node.initializer)) {
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
                  undefined,
                  ts.createCall(callExpression, undefined, [
                    ts.createIdentifier(rawLambdaName),
                  ])
                );

                return [lambdaDeclaration, newDeclaration];
              }
            }
          } else {
            // assume that it is a raw invocation first like func(1)
            let appliedArgsNodes = node.initializer.arguments.slice();
            let funcName = callExpression.text;
            let isWrappedWithA = false;
            // but it can be also A2(func, 1,2) with larger number of args.
            const maybeMatch = callExpression.text.match(invocationRegex);
            if (maybeMatch && maybeMatch.groups) {
              const invocationArgs = node.initializer.arguments;
              const [funcIdentifier, ...restOfArgs] = invocationArgs;

              if (ts.isIdentifier(funcIdentifier)) {
                appliedArgsNodes = restOfArgs;
                funcName = funcIdentifier.text;
                isWrappedWithA = true;
              }
            }

            // it might be a partially applied version of existing thing
            const existingSplit = splits.get(funcName);

            if (existingSplit) {
              // that means something like
              // var partiallyApplied = func(1);
              // where number of arguments is less than arity

              // const appliedArgsNodes = node.initializer.arguments;

              // means that the number of args is less than arity, thus partially applied
              if (appliedArgsNodes.length < existingSplit.arity) {
                const partiallyAppliedFuncName = node.name.text;

                const nameOfArg = (i: number) =>
                  `${partiallyAppliedFuncName}_a${i}`;

                const appliedArgs = appliedArgsNodes.map((_, i) =>
                  nameOfArg(i)
                );

                partialApplications.set(partiallyAppliedFuncName, {
                  split: existingSplit,
                  appliedArgs,
                });

                const argsIdentifiers = appliedArgs.map(name =>
                  ts.createIdentifier(name)
                );

                return [
                  ...appliedArgsNodes.map((argExpression, i) =>
                    ts.createVariableDeclaration(
                      nameOfArg(i),
                      undefined,
                      argExpression
                    )
                  ),

                  ts.updateVariableDeclaration(
                    node,
                    node.name,
                    undefined,
                    ts.updateCall(
                      node.initializer,
                      callExpression,
                      undefined,
                      isWrappedWithA
                        ? [ts.createIdentifier(funcName), ...argsIdentifiers]
                        : argsIdentifiers
                    )
                  ),
                ];
              }
            }
          }
        }
      }
    }

    return ts.visitEachChild(node, visitor, context);
  };

  return visitor;
};

const createInlinerVisitor = (
  inlineContext: InlineContext,
  context: ts.TransformationContext
) => {
  const { splits, partialApplications } = inlineContext;
  const inliner = (node: ts.Node): ts.VisitResult<ts.Node> => {
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

          // detects A123(funcName, ...args)
          if (ts.isIdentifier(funcName)) {
            if (args.length !== arity) {
              throw new Error(
                `something went wrong, expected number of arguments=${arity} but got ${args.length} for ${funcName.text}`
              );
            }

            const split = splits.get(funcName.text);

            if (split && split.arity === arity) {
              inlineContext.inlinedCount += 1;
              return ts.createCall(
                ts.createIdentifier(split.rawLambdaName),
                undefined,
                args.map(arg => ts.visitNode(arg, inliner))
              );
            }

            let partialApplication = partialApplications.get(funcName.text);

            // means that that invocation covers all args
            if (
              partialApplication &&
              partialApplication.appliedArgs.length + arity ===
                partialApplication.split.arity
            ) {
              inlineContext.inlinedPartialApplications += 1;

              return ts.createCall(
                ts.createIdentifier(partialApplication.split.rawLambdaName),
                undefined,
                [
                  ...partialApplication.appliedArgs.map(name =>
                    ts.createIdentifier(name)
                  ),
                  ...args.map(arg => ts.visitNode(arg, inliner)),
                ]
              );
            }
          }
        } else {
          // it can be a raw call to a partially applied function
          let partialApplication = partialApplications.get(expression.text);
          if (
            // TODO it is a copypasted code from above
            partialApplication &&
            node.arguments.length === 1 &&
            partialApplication.appliedArgs.length ===
              partialApplication.split.arity - 1
          ) {
            inlineContext.inlinedPartialApplications += 1;

            return ts.createCall(
              ts.createIdentifier(partialApplication.split.rawLambdaName),
              undefined,
              [
                ...partialApplication.appliedArgs.map(name =>
                  ts.createIdentifier(name)
                ),
                ...node.arguments.map(arg => ts.visitNode(arg, inliner)),
              ]
            );
          }
        }
      }
    }

    return ts.visitEachChild(node, inliner, context);
  };

  return inliner;
};
