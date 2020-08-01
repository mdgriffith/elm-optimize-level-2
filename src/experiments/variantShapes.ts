/* # Variant Shapes


initial
```
var elm$core$Maybe$Just = function (a) {
    return {$: 0, a: a};
};

var elm$core$Maybe$Nothing = {$: 1};
```


after
```
var elm$core$Maybe$Just = function (a) {
    return {$: 0, a: a};
};

var elm$core$Maybe$Nothing = {$: 1, a: null};
```

The V8 engine is likely better able to optimize these objects if they have the same shape, even if they're stubbed in with `null`.

This does require information from the Elm code itself, which we're currently getting through `elm-tree-sitter`.

*/

import ts from 'typescript';
import { Mode, ElmVariant } from '../types';

// TODO fill a proper array
const argNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

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
      .map(arg => ts.createPropertyAssignment(arg, ts.createIdentifier(arg))),
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

  const funcExpression = ts.createFunctionExpression(
    undefined, // modifiers
    undefined, //asteriskToken
    undefined, //name
    undefined, //typeParameters
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
    undefined, //type
    ts.createBlock([
      ts.createReturn(createVariantObjectLiteral(replacement, mode)),
    ])
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
