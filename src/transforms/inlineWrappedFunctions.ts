import ts from 'typescript';
import {parseAXFunction, parseFXFunction} from "./utils/ElmWrappers";

/*

Split out function definitions so that the raw version of the function can be called.

This only shows benefit with the `createFuncInlineTransformer`, which will detect when an F3 is being called with 3 arguments and skip the F3 call

initial

var $elm$core$String$join = F2(function (sep, chunks) {
  return A2(_String_join, sep, _List_toArray(chunks));
});


transformed

var $elm$core$String$join_fn = function (sep, chunks) {
  return A2(_String_join, sep, _List_toArray(chunks));
}, $elm$core$String$join = F2($elm$core$String$join_fn);


*/

export type PartialApplication = {
  split: FuncSplit;
  appliedArgs: string[];
  funcReturnsWrapper?: FunctionInfoThatReturnsWrappedFunc;
};

type FunctionInfoThatReturnsWrappedFunc = {
  arity: number;
  resultArity: number;
};

export type InlineContext = {
  functionsThatWrapFunctions: Map<string, FunctionInfoThatReturnsWrappedFunc>;
  splits: Map<string, FuncSplit>;
  partialApplications: Map<string, PartialApplication>;
  inlined: {
    fromAlias: number;
    fromRawFunc: number;
    fromWrapper: number;
    partialApplications: number;
  };
};

export type FuncSplit = {
  rawLambdaName: string;
  arity: number;
  type: 'alias' | 'raw_func' | 'returned_wrapper';
};

const deriveRawLambdaName = (wrappedName: string): string =>
  wrappedName + '_fn';

function reportInlinining(split: FuncSplit, { inlined }: InlineContext) {
  switch (split.type) {
    case 'alias': {
      inlined.fromAlias += 1;
      break;
    }
    case 'raw_func': {
      inlined.fromRawFunc += 1;
      break;
    }
    case 'returned_wrapper': {
      inlined.fromWrapper += 1;
      break;
    }
  }
}

export const createInlineContext = (): InlineContext => ({
  functionsThatWrapFunctions: new Map(),
  splits: new Map(),
  partialApplications: new Map(),
  inlined: {
    fromAlias: 0,
    fromRawFunc: 0,
    fromWrapper: 0,
    partialApplications: 0,
  },
});

function reportInlineTransformResult(ctx: InlineContext) {
  const { inlined } = ctx;

  console.log(`inlining ${inlined.fromRawFunc} function calls`);
}



export const createFunctionInlineTransformer = (
  logOverview: boolean,
  arityBasedFunctionNames: boolean,
  ignoreTopLevel?: 'for tests'
): ts.TransformerFactory<ts.SourceFile> => (context) => {
  return (sourceFile) => {
    const inlineContext: InlineContext = createInlineContext();

    // todo hack to only inline top level functions
    // const { topScope } = matchElmSource(sourceFile)!;
    const splitter = createSplitterVisitor(
      inlineContext,
      context,
      ignoreTopLevel === 'for tests',
      arityBasedFunctionNames
    );
    const splittedNode = ts.visitNode(sourceFile, splitter);

    const inliner = createInlinerVisitor(inlineContext, context);
    const result = ts.visitNode(splittedNode, inliner);

    if (logOverview) {
      reportInlineTransformResult(inlineContext);
    }

    return result;
  };
};

const isTopLevelScope = (path: ts.Node[]) => {
  const funcExpCount = path.reduce(
    (c, n) => (ts.isFunctionExpression(n) ? c + 1 : c),
    0
  );
  const funcDeclCount = path.reduce(
    (c, n) => (ts.isFunctionDeclaration(n) ? c + 1 : c),
    0
  );
  // meaning top level scope function body
  return funcExpCount === 1 && funcDeclCount === 0;
};

const createSplitterVisitor = (
  { splits, partialApplications, functionsThatWrapFunctions }: InlineContext,
  context: ts.TransformationContext,
  ignoreTopLevel: boolean,
  arityBasedFunctionNames: boolean
) => {
  const visitor = (path: ts.Node[]) => (
    node: ts.Node
  ): ts.VisitResult<ts.Node> => {
    // detects "var a"
    if (
      ts.isVariableDeclaration(node) &&
      // todo this is basically a hack to only be able to inline top level functions
      ts.isIdentifier(node.name) &&
      node.initializer &&
      (ignoreTopLevel || isTopLevelScope(path))
    ) {
      // detects an alias to existing split
      if (ts.isIdentifier(node.initializer)) {
        const existingSplit = splits.get(node.initializer.text);
        if (existingSplit) {
          splits.set(node.name.text, { ...existingSplit, type: 'alias' });
        }
      }

      if (
        ts.isArrowFunction(node.initializer) ||
        ts.isFunctionExpression(node.initializer)
      ) {
        const maybeWrapper = checkIfFunctionReturnsWrappedFunction(
          node.initializer
        );

        if (maybeWrapper) {
          functionsThatWrapFunctions.set(node.name.text, maybeWrapper);
        }
      }

      if (ts.isCallExpression(node.initializer)) {
        // detects "var a = [exp](..)"
        const callExpression = node.initializer.expression;
        // detects "var a = f(..)"
        if (ts.isIdentifier(callExpression)) {
          // detects "var a = F123(..)"
          const arity = parseFXFunction(callExpression.text);
          if (arity) {
            const args = node.initializer.arguments;
            // checks that it should be called with only one argument
            if (args.length === 1) {
              const [maybeFuncExpression] = args;
              const originalName = node.name.text;

              // detects var a = F123(innerFunc)
              if (ts.isIdentifier(maybeFuncExpression)) {
                splits.set(originalName, {
                  arity,
                  rawLambdaName: maybeFuncExpression.text,
                  type: 'raw_func',
                });

                // check if the inner functions was marked as the func that returns a wrapper
                // example
                // var inner = (a,b) => F2((c, d) =>  a + b + c + d)
                // var wrapped = F2(inner)
                // in that case we mark "wrapped" functions as a functions that returns a wrapper too
                const maybeWrapper = functionsThatWrapFunctions.get(
                  maybeFuncExpression.text
                );

                if (maybeWrapper) {
                  functionsThatWrapFunctions.set(node.name.text, maybeWrapper);
                }
              } else {
                // it can be either a function expression:
                // "var a = F123( function (a) {return a})"
                // "var a = F123( a => a)"
                // something like
                // var a = F2(Math.pow)
                const rawLambdaName = deriveRawLambdaName(originalName);

                splits.set(originalName, {
                  arity,
                  rawLambdaName,
                  type: 'raw_func',
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

                // if it is a function expression check if we need an unwrapped version of it
                if (
                  ts.isArrowFunction(maybeFuncExpression) ||
                  ts.isFunctionExpression(maybeFuncExpression)
                ) {
                  const maybeWrapper = checkIfFunctionReturnsWrappedFunction(
                    maybeFuncExpression
                  );

                  if (maybeWrapper) {
                    functionsThatWrapFunctions.set(
                      node.name.text,
                      maybeWrapper
                    );
                  }
                }

                return [lambdaDeclaration, newDeclaration];
              }
            }
          } else {
            // assume that it is a raw invocation first like func(1)
            let appliedArgsNodes = node.initializer.arguments.slice();
            let funcName = callExpression.text;
            let isWrappedWithA = false;
            // but it can be also A2(func, 1,2) with larger number of args.
            if (parseAXFunction(callExpression.text)) {
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

            // that means something like
            // var partiallyApplied = func(1);
            // where number of arguments is less than arity

            // const appliedArgsNodes = node.initializer.arguments;

            // means that the number of args is less than arity, thus partially applied
            if (
              existingSplit &&
              appliedArgsNodes.length < existingSplit.arity
            ) {
              const partiallyAppliedFuncName = node.name.text;

              const nameOfArg = (i: number) =>
                `${partiallyAppliedFuncName}_a${i}`;

              const appliedArgs = appliedArgsNodes.map((_, i) => nameOfArg(i));

              const funcWrapper = functionsThatWrapFunctions.get(funcName);

              partialApplications.set(partiallyAppliedFuncName, {
                split: existingSplit,
                appliedArgs,
                funcReturnsWrapper: funcWrapper,
              });

              const argsIdentifiers = appliedArgs.map((name) =>
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

            // console.log('checking', node.name.text, 'with', funcName);

            const partialApplication = partialApplications.get(funcName);

            // can either be a direct call
            const wrapperFunc = functionsThatWrapFunctions.get(funcName);

            // that means that result is another function wrapped in F(n)
            if (
              (wrapperFunc && appliedArgsNodes.length === wrapperFunc.arity) ||
              (partialApplication &&
                partialApplication.funcReturnsWrapper &&
                partialApplication.appliedArgs.length +
                  appliedArgsNodes.length ===
                  partialApplication.split.arity)
            ) {
              const rawFunName = deriveRawLambdaName(node.name.text);

              splits.set(node.name.text, {
                arity:
                  wrapperFunc?.resultArity ??
                  partialApplication?.funcReturnsWrapper?.resultArity ??
                  0,
                rawLambdaName: rawFunName,
                type: 'returned_wrapper',
              });

              // console.log('!!', node.name.text);

              // var f = A2(g, a,b);  where g returns F2
              // splits into
              // var f = A2(g, a,b);
              // var f_fn = f.f;
              let inner_fn_name = 'f'


              // arityBasedFunctionNames
              // Normally the internal function is stored at `.f`
              // However, when using fastCurriedFns, the internal function is stored at `.a{arity}`
              if (arityBasedFunctionNames && partialApplication && partialApplication.funcReturnsWrapper && partialApplication.funcReturnsWrapper.resultArity != 1) {
                inner_fn_name = 'a' + (partialApplication.funcReturnsWrapper.resultArity)
              }
                

              return [
                node,
                ts.createVariableDeclaration(
                  ts.createIdentifier(rawFunName),
                  undefined,
                  ts.createPropertyAccess(node.name, ts.createIdentifier(inner_fn_name))
                ),
              ];
            }
          }
        }
      }
    }

    return ts.visitEachChild(node, visitor(path.concat(node)), context);
  };

  return visitor([]);
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
        // detects A123(...)
        const arity = parseAXFunction(expression.text);
        if (arity) {
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
              reportInlinining(split, inlineContext);
              return ts.createCall(
                ts.createIdentifier(split.rawLambdaName),
                undefined,
                args.map((arg) => ts.visitNode(arg, inliner))
              );
            }

            let partialApplication = partialApplications.get(funcName.text);

            // means that that invocation covers all args
            if (
              partialApplication &&
              partialApplication.appliedArgs.length + arity ===
                partialApplication.split.arity
            ) {
              inlineContext.inlined.partialApplications += 1;

              return ts.createCall(
                ts.createIdentifier(partialApplication.split.rawLambdaName),
                undefined,
                [
                  ...partialApplication.appliedArgs.map((name) =>
                    ts.createIdentifier(name)
                  ),
                  ...args.map((arg) => ts.visitNode(arg, inliner)),
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
            inlineContext.inlined.partialApplications += 1;

            return ts.createCall(
              ts.createIdentifier(partialApplication.split.rawLambdaName),
              undefined,
              [
                ...partialApplication.appliedArgs.map((name) =>
                  ts.createIdentifier(name)
                ),
                ...node.arguments.map((arg) => ts.visitNode(arg, inliner)),
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
function checkIfFunctionReturnsWrappedFunction(
  func: ts.ArrowFunction | ts.FunctionExpression
): FunctionInfoThatReturnsWrappedFunc | undefined {
  let returnExpression: ts.Expression | undefined;

  if (ts.isFunctionExpression(func) && func.body.statements.length === 1) {
    // console.log('$$body', node.body.getText());
    const [returnStatement] = func.body.statements;

    if (
      ts.isReturnStatement(returnStatement) &&
      returnStatement.expression !== undefined
    ) {
      returnExpression = returnStatement.expression;
    }
  } else if (ts.isArrowFunction(func) && !ts.isBlock(func.body)) {
    returnExpression = func.body;
  }

  const arity = func.parameters.length;

  // matches
  // function (...) { return F2(...) }
  // or
  // (...) => F2(...)
  if (
    returnExpression &&
    ts.isCallExpression(returnExpression) &&
    ts.isIdentifier(returnExpression.expression)
  ) {
    const resultArity = parseFXFunction(returnExpression.expression.text);
    if (resultArity) {
      return {
        arity,
        resultArity: resultArity,
      };
    }
  }

  return undefined;
}
