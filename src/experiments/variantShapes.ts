/* # Variant Shapes

Currently the Elm compiler will generate objects that match the shape of a given type.

So, Maybe looks like this:

```
var elm$core$Maybe$Just = function (a) {
    return {$: 0, a: a};
};

var elm$core$Maybe$Nothing = {$: 1};
```

However, the V8 engine is likely better able to optimize these objects if they have the same shape.

So, this transformation fills out the rest of the variants with `field: null` so that they have the same shape.

```
var elm$core$Maybe$Just = function (a) {
    return {$: 0, a: a};
};

var elm$core$Maybe$Nothing = {$: 1, a: null};
```

This does require information from the Elm code itself, which we're currently getting through `elm-tree-sitter`.

*/

import ts from 'typescript';
import { Mode, ElmVariant } from '../types';

// TODO fill a proper array
const argNames = ['a', 'b', 'c', 'd', 'e'];

const createVariantObjectLiteral = (
  { name, totalTypeSlotCount, slots, index }: ElmVariant,
  mode: Mode
): ts.ObjectLiteralExpression => {
  return ts.createObjectLiteral([
    ts.createPropertyAssignment(
      '$',
      mode === Mode.Dev
        ? ts.createStringLiteral(name)
        : ts.createNumericLiteral(index.toString())
    ),
    // existing arguments
    ...argNames
      .slice(0, slots.length)
      .map(arg => ts.createShorthandPropertyAssignment(arg)),
    // fillings with nulls for the rest
    ...argNames
      .slice(slots.length, totalTypeSlotCount)
      .map(arg => ts.createPropertyAssignment(arg, ts.createNull())),
  ]);
};

const createCtorVariant = (
  replacement: ElmVariant,
  mode: Mode
): ts.Expression => {
  const { slots } = replacement;

  const numberOfArgs = slots.length;

  const funcExpression = ts.createArrowFunction(
    undefined,
    undefined,
    argNames
      .slice(0, numberOfArgs)
      .map(arg =>
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          arg,
          undefined,
          undefined,
          undefined
        )
      ),
    undefined,
    undefined,
    createVariantObjectLiteral(replacement, mode)
  );

  if (numberOfArgs > 1) {
    // wrap it in Fn
    return ts.createCall(
      ts.createIdentifier('F' + numberOfArgs.toString()),
      undefined,
      [funcExpression]
    );
  }

  return funcExpression;
};

export const createCustomTypesTransformer = (
  replacements: ElmVariant[],
  mode: Mode
): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.Node => {
      if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
        for (const replacement of replacements) {
          if (node.name.text === replacement.jsName) {
            if (replacement.slots.length === 0) {
              return ts.updateVariableDeclaration(
                node,
                node.name,
                node.type,
                createVariantObjectLiteral(replacement, mode)
              );
            }

            return ts.updateVariableDeclaration(
              node,
              node.name,
              node.type,
              createCtorVariant(replacement, mode)
            );
          }
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
