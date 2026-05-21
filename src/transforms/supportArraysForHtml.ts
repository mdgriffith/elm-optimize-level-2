/*

## Goal

This transformer aims to avoid unnecessary Elm List to JavaScript Array conversions when it comes to `elm/html` functions.

Here is a small example:

```elm
Html.div [ Html.Attributes.class "some", Html.Attributes.class "class" ] [ a, b, c ]
```
gets compiled to
```js
A2(
  $elm$html$Html$div,
  _List_fromArray([
      $elm$html$Html$Attributes$class("some"),
      $elm$html$Html$Attributes$class("class")
  ]),
  _List_fromArray([a, b, c])
);
```

Through `_List_fromArray`, the attributes and children are converted from JavaScript Arrays to Elm Lists.
This conversion has a runtime cost, and Elm lists are slower to iterate through as well.

The idea behind this transformer is to remove these `_List_fromArray` calls and to keep the JavaScript Arrays as such,
and to have the underlying functions able to iterate through JavaScript Arrays as well. Taking the example from before,
the result would end up being:
```js
A2(
  $elm$html$Html$div,
  [
      $elm$html$Html$Attributes$class("some"),
      $elm$html$Html$Attributes$class("class")
  ],
  [a, b, c]
);
```

This change will only be applied when the arguments are literal lists, not when they are variables or more complex expressions.
Further work could potentially increase the number of cases that we apply this change.

Elm Lists will have to be supported still, because this transformer will not be able to replace all attributes and children.

## Explanation of the transformer

1. When this transformer is enabled, replacements for `_VirtualDom_nodeNS` and `_VirtualDom_organizeFacts` are introduced.
   These replacements will make the 2 functions (which are at the root of the VirtualDom functions) support JavaScript Arrays.
   More replacements should probably be added to support SVG and custom nodes.
2. Detect which functions can benefit from this optimization. Currently, it's only the functions that call `_VirtualDom_node`,
   but we could extend this further with a bit more analysis.
3. Remove `_List_fromArray` from the arguments from the functions detected in 2.

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