import ts from 'typescript';

export type VariantReplacement = {
  symbolName: string;
  variantName: string;
  maximumNumberOfArgs: number;
  numberOfArgs: number;
};

// TODO fill a proper array
const argNames = ['a', 'b', 'c', 'd', 'e'];

const createVariantObjectLiteral = ({
  variantName,
  maximumNumberOfArgs,
  numberOfArgs,
}: {
  variantName: string;
  maximumNumberOfArgs: number;
  numberOfArgs: number;
}): ts.ObjectLiteralExpression => {
  return ts.createObjectLiteral([
    ts.createPropertyAssignment('$', ts.createStringLiteral(variantName)),
    // existing arguments
    ...argNames
      .slice(0, numberOfArgs)
      .map(arg => ts.createShorthandPropertyAssignment(arg)),
    // fillings with nulls for the rest
    ...argNames
      .slice(numberOfArgs, maximumNumberOfArgs)
      .map(arg => ts.createPropertyAssignment(arg, ts.createNull())),
  ]);
};

const createCtorVariant = ({
  variantName,
  maximumNumberOfArgs,
  numberOfArgs,
}: VariantReplacement): ts.Expression => {
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
    createVariantObjectLiteral({
      variantName,
      maximumNumberOfArgs,
      numberOfArgs,
    })
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
  replacements: VariantReplacement[]
): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.Node => {
      if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
        for (const replacement of replacements) {
          if (node.name.text === replacement.symbolName) {
            if (replacement.numberOfArgs === 0) {
              const { variantName, maximumNumberOfArgs } = replacement;
              return ts.updateVariableDeclaration(
                node,
                node.name,
                node.type,
                createVariantObjectLiteral({
                  variantName,
                  maximumNumberOfArgs,
                  numberOfArgs: 0,
                })
              );
            }

            return ts.updateVariableDeclaration(
              node,
              node.name,
              node.type,
              createCtorVariant(replacement)
            );
          }
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
