import ts from 'typescript';
import { invocationRegex, wrapperRegex } from './utils/wrappers';

/* Combine operations into one, such as successive List.map calls.

```js
// Elm
x |> List.map f1 |> List.map f2
// JS code
A2($elm$core$List$map, f2, A2($elm$core$List$map, f1, x))
```
This transforms changes the JS code to
```elm
// JS code
A2($elm$core$List$map, A2($elm$core$Basics$composeR, f1, f2), x)
// so that it becomes equivalent to the following Elm code
x |> List.map (f1 >> f2)
```


It supports compositions of composed functions:

```js
// Elm: List.map f1 >> List.map f2
// Before
A2($elm$core$Basics$composeR, $elm$core$List$map(f1), $elm$core$List$map(f2))
// After
$elm$core$List$map(A2($elm$core$Basics$composeR, f1, f2))
```

---

The list of functions that are currently supported are:
- List.map

*/

const COMPOSE_LEFT = "$elm$core$Basics$composeL";
const COMPOSE_RIGHT = "$elm$core$Basics$composeR";

const supportedFusions = [
  "$elm$core$List$map",
  "$elm$core$List$filter",
];

export const operationsFusion : ts.TransformerFactory<ts.SourceFile> = (context: any) => {
  return (sourceFile) => {
    const visitor = (originalNode: ts.Node): ts.VisitResult<ts.Node> => {
      const node = ts.visitEachChild(originalNode, visitor, context);

      if (!ts.isCallExpression(node)) { return node; }

      return fuse(node)
        || extractComposition(node)
        || node;
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function fuse(node: ts.CallExpression) : ts.CallExpression | null {
  const outerCallExtract = extractCall(node);
  if (!outerCallExtract) { return null; }

  const innerCallExtract = extractCall(outerCallExtract.dataArg);
  if (!innerCallExtract
    || outerCallExtract.operation.text !== innerCallExtract.operation.text
  ) {
    return null;
  }

  return ts.createCall(
    ts.createIdentifier("A2"),
    undefined,
    [
      innerCallExtract.operation,
      ts.createCall(
        node.expression,
        undefined,
        [
          ts.createIdentifier(COMPOSE_RIGHT),
          innerCallExtract.fnArg,
          outerCallExtract.fnArg
        ]
      ),
      innerCallExtract.dataArg
    ]
  );
}


function extractCall(node: ts.Expression) : { operation: ts.Identifier, fnArg : ts.Expression, dataArg : ts.Expression } | null {
  if (ts.isCallExpression(node)
    && ts.isIdentifier(node.expression)
    && node.expression.text === "A2"
  ) {
    const [operation, fnArg, dataArg] = node.arguments;
    if (ts.isIdentifier(operation)
      && supportedFusions.includes(operation.text)
    ) {
      return {
        operation,
        fnArg,
        dataArg
      };
    }
  }

  return null;
}


function extractComposition(node: ts.CallExpression) : ts.CallExpression | null {
  if (ts.isCallExpression(node)
    && ts.isIdentifier(node.expression)
    && node.expression.text === "A2"
  ) {
    const [fn, firstArg, secondArg] = node.arguments;
    if (!ts.isIdentifier(fn)
      || !(fn.text === COMPOSE_LEFT || fn.text === COMPOSE_RIGHT)
    ) {
      return node;
    }

    const [fn1, fn2] =
      fn.text === COMPOSE_RIGHT
        ? [firstArg, secondArg]
        : [secondArg, firstArg];

    const firstArgExtract = extractCompositionCall(fn1);
    if (!firstArgExtract) { return null; }

    const secondArgExtract = extractCompositionCall(fn2);
    if (!secondArgExtract || firstArgExtract.operation !== secondArgExtract.operation) {
      return null;
    }

    return ts.createCall(
      ts.createIdentifier(secondArgExtract.operation),
      undefined,
      [
        ts.createCall(
          ts.createIdentifier("A2"),
          undefined,
          [
            ts.createIdentifier(COMPOSE_RIGHT),
            firstArgExtract.arg,
            secondArgExtract.arg
          ]
        ),
      ]
    );
  }
  return null;
}


function extractCompositionCall(node: ts.Expression) : { operation: string, arg : ts.Expression } | null {
  if (ts.isCallExpression(node)
    && ts.isIdentifier(node.expression)
    && supportedFusions.includes(node.expression.text)
  ) {
    return {
      operation: node.expression.text,
      arg: node.arguments[0]
    };
  }

  return null;
}
