/*

TODO Docs

*/

import ts from 'typescript';
import {parseAXFunction} from "./utils/ElmWrappers";

export const supportArraysForHtmlReplacements = '/../replacements/virtual-dom';

export const supportArraysForHtml: ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const knownFunctionsToOptimize: Set<string> = new Set(['$elm$html$Html$node']);

    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isVariableDeclaration(node)
        && ts.isIdentifier(node.name)
        && node.initializer
        && ts.isCallExpression(node.initializer)
        && ts.isIdentifier(node.initializer.expression)
        && node.initializer.expression.text === '_VirtualDom_node'
      ) {
        knownFunctionsToOptimize.add(node.name.text);
        return ts.visitEachChild(node, visitor, context);
      }

      if (ts.isCallExpression(node)
        && ts.isIdentifier(node.expression)
        && node.arguments.length > 0
      ) {
        const arity = parseAXFunction(node.expression.text);
        const functionName = arity ? getName(node.arguments[0]) : node.expression.text;

        if (functionName && isOptimizableFunction(functionName, knownFunctionsToOptimize)) {
          node = ts.factory.updateCallExpression(
            node,
            node.expression,
            node.typeArguments,
            node.arguments.map(removeListFromArray)
          );
        }
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function removeListFromArray(node: ts.Expression): ts.Expression {
  if (ts.isCallExpression(node)
    && ts.isIdentifier(node.expression)
    && node.expression.text === '_List_fromArray'
  ) {
    return node.arguments[0];
  }

  if (ts.isIdentifier(node)
    && node.text === '_List_Nil'
  ) {
    return ts.factory.createArrayLiteralExpression([]);
  }

  return node;
}

function getName(expr: ts.Expression): string | null {
  if (ts.isIdentifier(expr)) {
    return expr.text;
  }
  return null;
}

function isOptimizableFunction(functionName: string, knownFunctionsToOptimize: Set<string>): boolean {
  return knownFunctionsToOptimize.has(functionName);
}