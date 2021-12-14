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

const LIST_MAP = "$elm$core$List$map";

type Context = any;


export const operationsFusion : ts.TransformerFactory<ts.SourceFile> = (context: Context) => {
  return (sourceFile) => {
    const visitor = (originalNode: ts.Node): ts.VisitResult<ts.Node> => {
      const node = ts.visitEachChild(originalNode, visitor, context);

      if (ts.isCallExpression(node)
        && ts.isIdentifier(node.expression)
        && node.expression.text === "A2"
      ) {
        const [fn, arg1, arg2] = node.arguments;
        if (ts.isIdentifier(fn)
          && fn.text === LIST_MAP
        ) {
          return node;
        }
      }

      return node;
    };

    return ts.visitNode(sourceFile, visitor);
  };
};


function extractMapCall(node: ts.Expression) : { fnArg : ts.Expression, dataArg : ts.Expression } | null {
  if (ts.isCallExpression(node)
    && ts.isIdentifier(node.expression)
    && node.expression.text === "A2"
    && ts.isIdentifier(node.arguments[0])
    && node.arguments[0].text === LIST_MAP
  ) {
    return {
      fnArg: node.arguments[1],
      dataArg: node.arguments[2]
    };
  }
  return null;
} 