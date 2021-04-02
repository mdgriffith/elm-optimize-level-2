import ts, { isIdentifier } from 'typescript';
import { ast } from './utils/create';

const $elm$core$String$join = `
var $elm$core$String$join = F2(function (sep, strs) {
  if (!strs.b) {
    return "";
  }
  var acc = strs.a;
  strs = strs.b;

  for (; strs.b; strs = strs.b) {
    acc = acc + sep + strs.a;
  }

  return acc;
};
`;


const replacements = {
  $elm$core$String$join,
};

export const replaceStringFunctions: ts.TransformerFactory<ts.SourceFile> = (
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
