import ts from 'typescript';
import { ObjectUpdate } from './../types';

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

const assign = `
const _Utils_update = (oldRecord, updatedFields) => (Object.assign({}, oldRecord, updatedFields));
}
`;

export const objectUpdate = (
  kind: ObjectUpdate
): ts.TransformerFactory<ts.SourceFile> => {
  switch (kind) {
    case ObjectUpdate.UseSpreadForUpdateAndOriginalRecord:
      return createReplaceUtilsUpdateWithObjectSpread(kind);
    case ObjectUpdate.UseSpreadOnlyToMakeACopy:
      return createReplaceUtilsUpdateWithObjectSpread(kind);
    case ObjectUpdate.UseAssign:
      return createReplaceUtilsUpdateWithObjectSpread(kind);
    case ObjectUpdate.InlineAssign:
      return inlineObjectAssign();
    case ObjectUpdate.InlineSpread:
      return inlineObjectSpread();
  }
};

export const extractAstFromCode = (sourceText: string): ts.Node => {
  const source = ts.createSourceFile('bla', sourceText, ts.ScriptTarget.ES2018);
  return source.statements[0];
};

const createReplaceUtilsUpdateWithObjectSpread = (
  kind: ObjectUpdate
): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (
        ts.isFunctionDeclaration(node) &&
        node.name?.text === '_Utils_update'
      ) {
        switch (kind) {
          case ObjectUpdate.UseSpreadForUpdateAndOriginalRecord:
            return extractAstFromCode(spreadForBoth);
          case ObjectUpdate.UseSpreadOnlyToMakeACopy:
            return extractAstFromCode(copyWithSpread);
          case ObjectUpdate.UseAssign:
            return extractAstFromCode(assign);
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
const OBJECT_UPDATE = '_Utils_update';

const inlineObjectAssign = (): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (ts.isCallExpression(node)) {
        if (
          ts.isIdentifier(node.expression) &&
          node.expression.text === OBJECT_UPDATE
        ) {
          return ts.createCall(
            ts.createIdentifier('Object.assign'),
            undefined,
            [ts.createObjectLiteral(), node.arguments[0], node.arguments[1]]
          );
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };
    return ts.visitNode(sourceFile, visitor);
  };
};

const inlineObjectSpread = (): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (ts.isCallExpression(node)) {
        if (
          ts.isIdentifier(node.expression) &&
          node.expression.text === OBJECT_UPDATE
        ) {
          let props: any[] = [];
          node.arguments[1].forEachChild(child => {
            if (ts.isPropertyAssignment(child)) {
              props.push(
                ts.createPropertyAssignment(child.name, child.initializer)
              );
            }
          });

          return ts.createObjectLiteral(
            [ts.createSpreadAssignment(node.arguments[0])].concat(props)
          );
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
