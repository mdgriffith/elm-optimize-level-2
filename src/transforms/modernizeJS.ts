import ts from 'typescript';
import { ObjectUpdate } from '../types';
import {ast} from './utils/create';


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



const createReplaceUtilsUpdateWithObjectSpread = (
  kind: ObjectUpdate
): ts.TransformerFactory<ts.SourceFile> => (context) => {
  return (sourceFile) => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (
        ts.isFunctionDeclaration(node) &&
        node.name?.text === '_Utils_update'
      ) {
        switch (kind) {
          case ObjectUpdate.UseSpreadForUpdateAndOriginalRecord:
            return ast(spreadForBoth);
          case ObjectUpdate.UseSpreadOnlyToMakeACopy:
            return ast(copyWithSpread);
          case ObjectUpdate.UseAssign:
            return ast(assign);
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
const OBJECT_UPDATE = '_Utils_update';

const inlineObjectAssign = (): ts.TransformerFactory<ts.SourceFile> => (
  context
) => {
  return (sourceFile) => {
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

const inlineObjectSpread = (): ts.TransformerFactory<ts.SourceFile> => (
  context
) => {
  return (sourceFile) => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (ts.isCallExpression(node)) {
        if (
          ts.isIdentifier(node.expression) &&
          node.expression.text === OBJECT_UPDATE
        ) {
          let props: any[] = [];
          node.arguments[1].forEachChild((child) => {
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

export const convertFunctionExpressionsToArrowFuncs: ts.TransformerFactory<ts.SourceFile> = (
  context
) => {
  return (sourceFile) => {
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

export const convertToObjectShorthandLiterals: ts.TransformerFactory<ts.SourceFile> = (
  context
) => {
  return (sourceFile) => {
    let shortenedCount = 0;

    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isObjectLiteralExpression(node)) {
        let hasAnyTransforms = false;
        const props: ts.ObjectLiteralElementLike[] = [];
        for (const prop of node.properties) {
          if (ts.isPropertyAssignment(prop)) {
            if (
              ts.isIdentifier(prop.name) &&
              ts.isIdentifier(prop.initializer) &&
              prop.name.text === prop.initializer.text
            ) {
              // bingo
              props.push(ts.createShorthandPropertyAssignment(prop.name.text));
              shortenedCount += 1;
              hasAnyTransforms = true;
            } else {
              const visitedAssignment = ts.visitNode(prop.initializer, visitor);
              if (visitedAssignment === prop.initializer) {
                // found nothing in initializer
                props.push(prop);
              } else {
                // initializer has some transforms too
                hasAnyTransforms = true;
                props.push(
                  ts.updatePropertyAssignment(
                    prop,
                    prop.name,
                    visitedAssignment
                  )
                );
              }
            }
          } else {
            props.push(prop);
          }
        }

        if (hasAnyTransforms) {
          return ts.updateObjectLiteral(node, props);
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    const res = ts.visitNode(sourceFile, visitor);

    console.log(
      'convertToObjectsShorthand -> shortened assignments:',
      shortenedCount
    );

    return res;
  };
};
