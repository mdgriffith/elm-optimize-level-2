import ts from 'typescript';

/* Combine operations into one, such as successive List.map calls.

Indirectly inspired by https://hackage.haskell.org/package/stream-fusion-0.1.2.5/docs/Data-List-Stream.html
which can be a source of inspiration for more fusion transforms.

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

*/

// Potential improvements:
// - Should we support moving List.take and List.drop functions to before List.map (not before List.filter)?
// - Should we support combining `x |> List.take a |> List.take b` into `x |> List.take (Math.min a b)`?
// - Should we support combining `x |> List.drop a |> List.drop b` into `x |> List.drop (a + b)`?
// - Should we support combining `x |> Dict.map f |> Dict.map g` into `x |> Dict.map (\index a -> g index (f index a))`?



/* Notes on supporting this for custom functions by user and libraries.

For `elm-optimize-level-2`, users could specify a configuration for the tool where
they'd list which functions could support their optimization.

For the compiler, functions could include keywords in their documentation to indicate
what optimizations to apply.

{-| Maps from a to b.

@optimation fusion(map)

-- Or alternatively
@optimation fusion(filter)
@optimation fusion(filterMap)

-}
map : (a -> b) -> X a -> X b

and then the compiler could also apply this optimization for all of the chains that contain this function call.

The bigger question is how to make sure that the compiler doesn't blindly trust that this optimization can be applied.

map : (a -> b) -> X a -> X b
map fn (X a) =
  X { a
      | apply = a.apply >> fn
      , mapCount = a.mapCount + 1
    }

For instance fusing 2 applications of the function above would lead to different results than having them
applied multiple times (because `mapCount` would be incremented once instead of twice).

I don't know if there is a way for the compiler to prove or find out that `map f >> map g` is the same
as `map (f >> g)`. Maybe the compiler could try doing this and report an error when it could not
determine this to be true (or when it actively knows it's different).

*/

const COMPOSE_LEFT = "$elm$core$Basics$composeL";
const COMPOSE_RIGHT = "$elm$core$Basics$composeR";

const supportedFusions : Record<string, CompositionFn> = {
  "$elm$core$List$map": composeFunctions,
  "$elm$core$List$filterMap": filterMapComposition,
  "$elm$core$Set$map": composeFunctions,
  "$elm$core$Array$map": composeFunctions,
  "$elm$core$Maybe$map": composeFunctions,
  "$elm$core$Platform$Cmd$map": composeFunctions,
  "$elm$core$Platform$Sub$map": composeFunctions,
  "$elm$html$Html$map": composeFunctions,
  "$elm$json$Json$Decode$map": composeFunctions,
  "$elm$parser$Parser$map": composeFunctions,
  "$elm$parser$Parser$Advanced$map": composeFunctions,
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
