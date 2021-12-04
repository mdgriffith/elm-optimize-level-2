import ts from 'typescript';
// import { createFunctionInlineTransformer } from './inlineWrappedFunctions';
import { matchWrappedInvocation, matchWrapping } from './patterns';
import { createProgramFromSource } from './createTSprogram';
import { InlineContext } from './inlineWrappedFunctions';

const deriveNewFuncName = (funcName: string) => funcName + '_unwrapped';

type WrappedUsage = {
  arity: number; // expected arity of the function being unwrapped inside
  funcDeclaration: ts.VariableDeclaration;
  funcName: string;
  parameterName: string;
  parameterPos: number;
  funcExpression: ts.FunctionExpression;
  callExpression: ts.CallExpression;
};

export const createPassUnwrappedFunctionsTransformer = (
  getCtx: () => InlineContext | undefined
): ts.TransformerFactory<ts.SourceFile> => (context) => {
  getCtx;
  return (sourceFile) => {
    const foundFunctions = new Map<string, WrappedUsage | 'bail_out'>();
    const [program, copiedSource] = createProgramFromSource(sourceFile);
    const typeChecker = program.getTypeChecker();

    const collectFunctions = (node: ts.Node): ts.VisitResult<ts.Node> => {
      const invocation = matchWrappedInvocation(node);

      if (invocation) {
        const { arity, callExpression, calleeName: funcName } = invocation;

        const symbol = typeChecker.getSymbolAtLocation(funcName);

        const [declaration] = symbol?.declarations || [];

        if (
          declaration &&
          ts.isParameter(declaration) &&
          ts.isIdentifier(declaration.name) &&
          ts.isFunctionExpression(declaration.parent) &&
          ts.isVariableDeclaration(declaration.parent.parent) &&
          ts.isIdentifier(declaration.parent.parent.name)
        ) {
          const funcDeclaration = declaration.parent.parent;
          const func = declaration.parent;
          const parameterPos = func.parameters.findIndex(
            (p) => p === declaration
          );
          const funcName = declaration.parent.parent.name.text;

          const existing = foundFunctions.get(funcName);

          if (!existing) {
            foundFunctions.set(funcName, {
              arity,
              callExpression,
              funcDeclaration: funcDeclaration,
              funcExpression: func,
              parameterPos,
              funcName,
              parameterName: declaration.name.text,
            });
          } else if (existing !== 'bail_out') {
            // it means that we already registered this function
            // we will need to bail out if:
            // 1. it is a different argument, we don't yet unwrap for two
            // 2. arity of the call doesn't match

            if (
              existing.parameterPos !== parameterPos ||
              existing.arity !== arity
            ) {
              foundFunctions.set(funcName, 'bail_out');
            }
          }
        }
      }

      return ts.visitEachChild(node, collectFunctions, context);
    };

    const addFunctionsWithoutUnwrapping = (
      node: ts.Node
    ): ts.VisitResult<ts.Node> => {
      if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
        const funcToModify = foundFunctions.get(node.name.text);

        if (funcToModify && funcToModify !== 'bail_out') {
          let bailOut = false;
          const modifyFunction = (
            nodeInModifyFunc: ts.Node
          ): ts.VisitResult<ts.Node> => {
            if (
              ts.isCallExpression(nodeInModifyFunc) &&
              ts.isIdentifier(nodeInModifyFunc.expression)
            ) {
              const match = matchWrappedInvocation(nodeInModifyFunc);
              if (
                match &&
                match.calleeName.text === funcToModify.parameterName &&
                match.arity === funcToModify.arity
              ) {
                // transforms A2(func, a,b) into func(a,b)
                return ts.createCall(
                  match.calleeName,
                  undefined,
                  // recursively transform all calls within a function
                  match.args.map((arg) => ts.visitNode(arg, modifyFunction))
                );
              }

              const calledFuncIdentifier = nodeInModifyFunc.expression;

              // can be a curried version of callee name in the same body
              // example: A2(func, a,b) and func(c)
              if (
                calledFuncIdentifier.text === funcToModify.parameterName &&
                nodeInModifyFunc.arguments.length === 1 &&
                funcToModify.arity !== 1
              ) {
                // means that we have an invocation that is not uniform with expected arity
                // therefore we cannot pass a raw function to it
                bailOut = true;
              }

              // recursive call to itself
              if (calledFuncIdentifier.text === funcToModify.funcName) {
                return ts.createCall(
                  ts.createIdentifier(deriveNewFuncName(funcToModify.funcName)),
                  undefined,
                  nodeInModifyFunc.arguments.map((arg) =>
                    ts.visitNode(arg, modifyFunction)
                  )
                );
              }

              // now it can be a call to another function but with passed in parameter
              // that is now unwrapped
              // thus check if we have an unwrapped version
              if (
                nodeInModifyFunc.arguments.some(
                  (arg) =>
                    ts.isIdentifier(arg) &&
                    arg.text === funcToModify.parameterName
                )
              ) {
                const existingUnwrappedFunc = foundFunctions.get(
                  calledFuncIdentifier.text
                );

                if (
                  // todo we need to bail out because we cannot find an unwrapped version
                  !existingUnwrappedFunc ||
                  existingUnwrappedFunc === 'bail_out' ||
                  // we need to make sure that arity matches
                  // TODO make sure that the position matches too, e.g. it is the same parameter
                  existingUnwrappedFunc.arity !== funcToModify.arity
                ) {
                  bailOut = true;
                }

                return ts.createCall(
                  ts.createIdentifier(
                    deriveNewFuncName(calledFuncIdentifier.text)
                  ),
                  undefined,
                  nodeInModifyFunc.arguments.map((arg) =>
                    ts.visitNode(arg, modifyFunction)
                  )
                );
              }
            }

            return ts.visitEachChild(
              nodeInModifyFunc,
              modifyFunction,
              context
            );
          };

          const newFuncExpression = ts.visitNode(
            funcToModify.funcExpression,
            modifyFunction
          );

          if (bailOut) {
            foundFunctions.delete(funcToModify.funcName);
          } else {
            return [
              node,
              ts.createVariableDeclaration(
                deriveNewFuncName(funcToModify.funcName),
                undefined,
                newFuncExpression
              ),
            ];
          }
        }
      }

      return ts.visitEachChild(node, addFunctionsWithoutUnwrapping, context);
    };

    const replaceUsagesWithUnwrappedVersion = (
      node: ts.Node
    ): ts.VisitResult<ts.Node> => {
      if (ts.isCallExpression(node)) {
        const { expression } = node;
        if (ts.isIdentifier(expression)) {
          // todo make it a map maybe?
          const funcToUnwrap = foundFunctions.get(expression.text);

          if (
            funcToUnwrap &&
            funcToUnwrap !== 'bail_out' &&
            // actually the same symbol
            typeChecker.getSymbolAtLocation(expression) ===
              typeChecker.getSymbolAtLocation(funcToUnwrap.funcDeclaration.name)
          ) {
            const args = node.arguments;
            const argPos = funcToUnwrap.parameterPos;
            const funcParameter: ts.Expression | undefined = args[argPos];

            if (funcParameter) {
              const match = matchWrapping(funcParameter);

              // it means that it is something like (..., F3(function (a,b,c) {...}), ...)
              if (match) {
                return ts.createCall(
                  ts.createIdentifier(deriveNewFuncName(expression.text)),
                  undefined,
                  [
                    ...args
                      .slice(0, funcToUnwrap.parameterPos)
                      .map((a) =>
                        ts.visitNode(a, replaceUsagesWithUnwrappedVersion)
                      ),
                    ts.visitNode(
                      match.wrappedExpression,
                      replaceUsagesWithUnwrappedVersion
                    ),
                    ...args
                      .slice(argPos + 1)
                      .map((a) =>
                        ts.visitNode(a, replaceUsagesWithUnwrappedVersion)
                      ),
                  ]
                );
              } else if (ts.isIdentifier(funcParameter)) {
                const existingSplit = getCtx()?.splits.get(funcParameter.text);
                // if (funcParameter.text)
                if (
                  existingSplit &&
                  existingSplit.arity === funcToUnwrap.arity
                ) {
                  return ts.createCall(
                    ts.createIdentifier(deriveNewFuncName(expression.text)),
                    undefined,
                    [
                      ...args
                        .slice(0, funcToUnwrap.parameterPos)
                        .map((a) =>
                          ts.visitNode(a, replaceUsagesWithUnwrappedVersion)
                        ),
                      ts.createIdentifier(existingSplit.rawLambdaName),
                      ...args
                        .slice(argPos + 1)
                        .map((a) =>
                          ts.visitNode(a, replaceUsagesWithUnwrappedVersion)
                        ),
                    ]
                  );
                }
              }
            }
          }
        }
      }

      return ts.visitEachChild(
        node,
        replaceUsagesWithUnwrappedVersion,
        context
      );
    };

    ts.visitNode(copiedSource, collectFunctions);

    const withUnwrappedFunctions = ts.visitNode(
      copiedSource,
      addFunctionsWithoutUnwrapping
    );

    const withInlinedCalls = ts.visitNode(
      withUnwrappedFunctions,
      replaceUsagesWithUnwrappedVersion
    );

    return withInlinedCalls;
  };
};
