import ts from 'typescript';
import {parseAXFunction, parseFXFunction} from "./utils/ElmWrappers";

export type Pattern<T> = (node: ts.Node) => T | undefined;

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
  // Detects FX(...)
  if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
    const arity = parseFXFunction(node.expression.text);
    if (arity) {
      return {
        arity: arity,
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
