
import ts, { isIdentifier } from 'typescript';
import { ast, astNodes } from './utils/create';
import { readFiles } from '../fs_util';

export const replace = (
  replacements: { [name: string]: string }
): ts.TransformerFactory<ts.SourceFile> => (context) => {
  return (sourceFile) => {
        const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
            if (ts.isVariableStatement(node)) {
              const name = node.declarationList.declarations[0]?.name;
              if (isIdentifier(name) && replacements.hasOwnProperty(name.text)) {
                const key = name.text as keyof typeof replacements;
                return ast(replacements[key]);
              }
              return node;
            } else if (ts.isFunctionDeclaration(node)) {
              const name = node.name;
              if (name && isIdentifier(name) && replacements.hasOwnProperty(name.text)) {
                const key = name.text as keyof typeof replacements;
                return astNodes(replacements[key]);
              }
              return node;
            }
            return ts.visitEachChild(node, visitor, context);
        };

        return ts.visitNode(sourceFile, visitor);
    };
};

export const fromFiles = async (existingReplacements: {[key: string]: string}, paths: string[]) : Promise<ts.TransformerFactory<ts.SourceFile>> => {
  const fileObjects = await Promise.all(paths.map(path => readFiles(__dirname + path)));

  const foundReplacements = fileObjects
      .reduce(
        (a, b) => Object.assign(a, b),
        Object.assign({}, existingReplacements)
      );

  return replace(foundReplacements);
}
