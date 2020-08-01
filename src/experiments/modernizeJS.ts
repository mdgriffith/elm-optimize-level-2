import ts from 'typescript';

const copyWithSpread = `
const _Utils_update = (oldRecord, updatedFields) => {
    var newRecord = {...oldRecord};
    
    for (var key in updatedFields) {
        newRecord[key] = updatedFields[key];
    }
    return newRecord;
}
`;

const spreadForBoth = `
const _Utils_update = (oldRecord, updatedFields) => ({...oldRecord, ...updatedFields});
}
`;

const extractBody = (sourceText: string): ts.Node => {
  const source = ts.createSourceFile('bla', sourceText, ts.ScriptTarget.ES2018);
  return source.statements[0];
};

export enum NativeSpread {
  UseSpreadForUpdateAndOriginalRecord = 'for_both',
  UseSpreadOnlyToMakeACopy = 'for_copy',
}

export const createReplaceUtilsUpdateWithObjectSpread = (
  kind: NativeSpread
): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (
        ts.isFunctionDeclaration(node) &&
        node.name?.text === '_Utils_update'
      ) {
        switch (kind) {
          case NativeSpread.UseSpreadForUpdateAndOriginalRecord:
            return extractBody(spreadForBoth);
          case NativeSpread.UseSpreadOnlyToMakeACopy:
            return extractBody(copyWithSpread);
        }
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

      if (
        ts.isFunctionDeclaration(node) &&
        node.name !== undefined &&
        node.body !== undefined &&
        node.body.statements.length === 1
      ) {
        // console.log('$$body', node.body.getText());
        const [returnStatement] = node.body.statements;
        if (
          ts.isReturnStatement(returnStatement) &&
          returnStatement.expression !== undefined
        ) {
          return ts.createVariableStatement(
            undefined,
            ts.createVariableDeclarationList(
              [
                ts.createVariableDeclaration(
                  node.name,
                  undefined,
                  ts.createArrowFunction(
                    undefined,
                    undefined,
                    node.parameters,
                    undefined,
                    undefined,
                    ts.visitNode(returnStatement.expression, visitor)
                  )
                ),
              ]
              // ts.NodeFlags.Const
            )
          );
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
