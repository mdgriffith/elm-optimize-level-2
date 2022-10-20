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
import { matchWrapping } from './patterns';

// TODO fill a proper array
const argNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const createVariantObjectLiteral = (
  { name, totalTypeSlotCount, index }: ElmVariant,
  slotsCount: number,
  mode: Mode
): ts.ObjectLiteralExpression => {
  return ts.factory.createObjectLiteralExpression([
    ts.factory.createPropertyAssignment(
      '$',
      mode === Mode.Dev
        ? ts.factory.createStringLiteral(name)
        : ts.factory.createNumericLiteral(index.toString())
    ),
    // existing arguments
    ...argNames
      .slice(0, slotsCount)
      .map((arg) =>
        ts.factory.createPropertyAssignment(
          arg,
          ts.factory.createIdentifier(arg)
        )
      ),
    // fillings with nulls for the rest
    ...argNames
      .slice(slotsCount, totalTypeSlotCount)
      .map((arg) =>
        ts.factory.createPropertyAssignment(arg, ts.factory.createNull())
      ),
  ]);
};

const createCtorVariant = (
  replacement: ElmVariant,
  slotsCount: number,
  mode: Mode
): ts.Expression => {
  const funcExpression = ts.factory.createFunctionExpression(
    undefined, // modifiers
    undefined, //asteriskToken
    undefined, //name
    undefined, //typeParameters
    argNames
      .slice(0, slotsCount)
      .map((arg) =>
        ts.factory.createParameterDeclaration(
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
    ts.factory.createBlock([
      ts.factory.createReturnStatement(
        createVariantObjectLiteral(replacement, slotsCount, mode)
      ),
    ])
  );

  if (slotsCount > 1) {
    // wrap it in Fn
    return ts.factory.createCallExpression(
      ts.factory.createIdentifier('F' + slotsCount.toString()),
      undefined,
      [funcExpression]
    );
  }

  return funcExpression;
};

const extractNumberOfSlots = (exp: ts.Expression): number => {
  if (ts.isFunctionExpression(exp)) {
    // should be just one
    if (exp.parameters.length !== 1) {
      throw new Error('expected a wrapped function expression');
    }

    return 1;
  }

  if (ts.isObjectLiteralExpression(exp)) {
    return 0;
  }

  // means that we are dealing with an arity > 1
  const match = matchWrapping(exp);
  if (match) {
    return match.arity;
  }

  throw new Error('unexpected expression');
};

export const createCustomTypesTransformer = (
  replacements: ElmVariant[],
  mode: Mode
): ts.TransformerFactory<ts.SourceFile> => (context) => {
  return (sourceFile) => {
    const visitor = (node: ts.Node): ts.Node => {
      if (
        ts.isVariableDeclaration(node) &&
        ts.isIdentifier(node.name) &&
        node.initializer
      ) {
        for (const replacement of replacements) {
          if (node.name.text === replacement.jsName) {
            const slotsCount = extractNumberOfSlots(node.initializer);
            if (slotsCount === 0) {
              return ts.factory.updateVariableDeclaration(
                node,
                node.name,
                undefined,
                node.type,
                createVariantObjectLiteral(replacement, slotsCount, mode)
              );
            }

            return ts.factory.updateVariableDeclaration(
              node,
              node.name,
              undefined,
              node.type,
              createCtorVariant(replacement, slotsCount, mode)
            );
          }
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
