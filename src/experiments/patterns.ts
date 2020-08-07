import ts from 'typescript';
export type Pattern<T> = (node: ts.Node) => T | undefined;

const invocationRegex = /A(?<arity>[1-9]+[0-9]*)/;

const wrapperRegex = /F(?<arity>[1-9]+[0-9]*)/;

type WrappedInvocation = {
  args: ts.Expression[];
  calleeName: ts.Identifier;
  callExpression: ts.CallExpression;
  arity: number;
};

export const matchWrappedInvocation: Pattern<WrappedInvocation> = node => {
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

          return {
            args,
            calleeName: funcName,
            callExpression: node,
            arity,
          };
        }
      }
    }
  }
  return undefined;
};

type Wrapping = {
  wrappedExpression: ts.Expression;
  arity: number;
};

export const matchWrapping: Pattern<Wrapping> = node => {
  if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
    const maybeMatch = node.expression.text.match(wrapperRegex);

    if (maybeMatch && maybeMatch.groups) {
      return {
        arity: Number(maybeMatch.groups.arity),
        wrappedExpression: node.arguments[0],
      };
    }
  }

  return undefined;
};

// SourceFile;
//  ExpressionStatement;
//    ParenthesizedExpression;
//      CallExpression;
//        FunctionExpression;
//          Parameter;
//            Identifier;
//          Block; <==== that what we are looking
//    ThisKeyword;

export const matchElmSource = (
  source: ts.SourceFile
): { topScope: ts.Block } | undefined => {
  const expStatement = source.statements[0];
  console.log(expStatement);
  if (
    ts.isExpressionStatement(expStatement) &&
    ts.isParenthesizedExpression(expStatement.expression) &&
    ts.isCallExpression(expStatement.expression.expression) &&
    ts.isFunctionExpression(expStatement.expression.expression.expression)
  ) {
    return { topScope: expStatement.expression.expression.expression.body };
  }

  return undefined;
};
