import ts from 'typescript';

export const replaceUtilsUpdateWithObjectSpread: ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (
        ts.isFunctionDeclaration(node) &&
        node.name?.text === '_Utils_update'
      ) {
        return ts.createVariableStatement(
          undefined,
          ts.createVariableDeclarationList(
            [
              ts.createVariableDeclaration(
                ts.createIdentifier('_Utils_update'),
                undefined,
                ts.createArrowFunction(
                  undefined,
                  undefined,
                  [
                    ts.createParameter(
                      undefined,
                      undefined,
                      undefined,
                      ts.createIdentifier('oldRecord'),
                      undefined,
                      undefined,
                      undefined
                    ),
                    ts.createParameter(
                      undefined,
                      undefined,
                      undefined,
                      ts.createIdentifier('updatedFields'),
                      undefined,
                      undefined,
                      undefined
                    ),
                  ],
                  undefined,
                  undefined,

                  ts.createObjectLiteral(
                    [
                      ts.createSpreadAssignment(
                        ts.createIdentifier('oldRecord')
                      ),
                      ts.createSpreadAssignment(
                        ts.createIdentifier('updatedFields')
                      ),
                    ],
                    false
                  )
                )
              ),
            ],
            ts.NodeFlags.Const
          )
        );
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

export const convertFunctionExpressionsToArrowFuncs: ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      //   console.log(
      //     `Visiting: ${ts.SyntaxKind[node.kind]} with name ${
      //       (node as any).name?.text
      //     }`
      //   );
      if (
        ts.isFunctionExpression(node) &&
        node.name === undefined &&
        node.body.statements.length === 1
      ) {
        // console.log('$$body', node.body.getText());
        const [returnStatement] = node.body.statements;
        if (
          ts.isReturnStatement(returnStatement) &&
          returnStatement.expression !== undefined
        ) {
          return ts.createArrowFunction(
            undefined,
            undefined,
            node.parameters,
            undefined,
            undefined,
            ts.visitNode(returnStatement.expression, visitor)
            // returnStatement.expression
          );
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
