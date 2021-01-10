import ts, { isIdentifier } from 'typescript';
import { ast } from './utils/create';

const $elm$core$List$map = `
var $elm$core$List$map = F2(function(f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  while (xs.b) {
    end.b = _List_Cons(f(xs.a), _List_Nil);
    xs = xs.b;
    end = end.b;
  }
  return tmp.b;
});
`;

const replacements = {
  $elm$core$List$map,
};

export const replaceListFunctions: ts.TransformerFactory<ts.SourceFile> = (
  context
) => (sourceFile) => {
  const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
    if (ts.isVariableStatement(node)) {
      const name = node.declarationList.declarations[0]?.name;
      if (isIdentifier(name) && name.text in replacements) {
        const key = name.text as keyof typeof replacements;
        return ast(replacements[key]);
      }
    }
    return ts.visitEachChild(node, visitor, context);
  };

  return ts.visitNode(sourceFile, visitor);
};
