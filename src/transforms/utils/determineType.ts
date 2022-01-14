import ts from 'typescript';

export type PossibleReturnType = "numbers" | "strings" | "lists" | "numbers-or-strings" | "strings-or-lists" | null;

const EMPTY_LIST = "_List_Nil";
const UTILS_AP = "_Utils_ap";

export function determineType(node : ts.Expression, currentEstimation : PossibleReturnType) : PossibleReturnType {
  if (currentEstimation === "numbers" || currentEstimation === "strings" || currentEstimation === "lists") {
    return currentEstimation;
  }

  if (ts.isParenthesizedExpression(node)) {
      return determineType(node.expression, currentEstimation);
  }

  if (ts.isNumericLiteral(node)) {
      return "numbers";
  }

  if (ts.isStringLiteral(node)) {
    return "strings";
  }

  if (ts.isIdentifier(node)) {
    if (node.text === EMPTY_LIST) {
      return "lists";
    }

    return currentEstimation;
  }

  if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === UTILS_AP) {
    return determineType(node.arguments[0], determineType(node.arguments[1], combineInformation(currentEstimation, "strings-or-lists")));
  }

  if (ts.isBinaryExpression(node)) {
    switch (node.operatorToken.kind) {
      case ts.SyntaxKind.PlusToken: {
        return determineType(node.right, determineType(node.left, combineInformation(currentEstimation, "numbers-or-strings")));
      }
      case ts.SyntaxKind.AsteriskToken:
      case ts.SyntaxKind.AsteriskAsteriskToken:
      case ts.SyntaxKind.MinusToken:
      case ts.SyntaxKind.SlashToken:
      case ts.SyntaxKind.PercentToken:
        return "numbers";
    }
  }

  if (ts.isPrefixUnaryExpression(node) && node.operator === ts.SyntaxKind.MinusToken) {
    return "numbers";
  }

  return currentEstimation;
}

function combineInformation(a : PossibleReturnType, b : PossibleReturnType) : PossibleReturnType {
  if (a === "strings-or-lists" && b === "numbers-or-strings") {
    return "strings";
  }
  if (b === "strings-or-lists" && a === "numbers-or-strings") {
    return "strings";
  }

  return a || b;
}
