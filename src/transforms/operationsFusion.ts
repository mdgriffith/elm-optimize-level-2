import ts from 'typescript';

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
- List.filter
- List.filterMap

*/

const COMPOSE_LEFT = "$elm$core$Basics$composeL";
const COMPOSE_RIGHT = "$elm$core$Basics$composeR";

const supportedFusions : Record<string, CompositionFn> = {
  "$elm$core$List$map": composeFunctions,
  "$elm$core$List$filter": composeFunctions,
  "$elm$core$List$filterMap": filterMapComposition,
  "$elm$core$Set$map": composeFunctions,
};

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
      outerCallExtract.compositionFn(innerCallExtract.fnArg, outerCallExtract.fnArg),
      innerCallExtract.dataArg
    ]
  );
}

function extractCall(node: ts.Expression) : { compositionFn : CompositionFn, operation: ts.Identifier, fnArg : ts.Expression, dataArg : ts.Expression } | null {
  if (ts.isCallExpression(node)
    && ts.isIdentifier(node.expression)
    && node.expression.text === "A2"
  ) {
    const [operation, fnArg, dataArg] = node.arguments;
    if (ts.isIdentifier(operation)
      && supportedFusions.hasOwnProperty(operation.text)
    ) {
      return {
        compositionFn: supportedFusions[operation.text],
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
      [ secondArgExtract.compositionFn(firstArgExtract.arg, secondArgExtract.arg) ]
    );
  }
  return null;
}


function extractCompositionCall(node: ts.Expression) : { compositionFn : CompositionFn, operation: string, arg : ts.Expression } | null {
  if (ts.isCallExpression(node)
    && ts.isIdentifier(node.expression)
    && supportedFusions.hasOwnProperty(node.expression.text)
  ) {
    return {
      compositionFn: supportedFusions[node.expression.text],
      operation: node.expression.text,
      arg: node.arguments[0]
    };
  }

  return null;
}

type CompositionFn = (x: ts.Expression, y: ts.Expression) => ts.CallExpression;

function composeFunctions(functionToApplyFirst : ts.Expression, functionToApplySecond : ts.Expression) : ts.CallExpression {
  return ts.createCall(
    ts.createIdentifier("A2"),
    undefined,
    [
      ts.createIdentifier(COMPOSE_RIGHT),
      functionToApplyFirst,
      functionToApplySecond
    ]
  );
}
function filterMapComposition(functionToApplyFirst : ts.Expression, functionToApplySecond : ts.Expression) : ts.CallExpression {
  return ts.createCall(
    ts.createIdentifier("A2"),
    undefined,
    [
      ts.createIdentifier(COMPOSE_RIGHT),
      functionToApplyFirst,
      ts.createCall(
        ts.createIdentifier("$elm$core$Maybe$andThen"),
        undefined,
        [functionToApplySecond]
      )
    ]
  );
}
