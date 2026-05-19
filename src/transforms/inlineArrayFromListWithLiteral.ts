import ts from 'typescript';
import { toArray } from './elmArray';

/* Pre-compute array constructed from a List literal, so that Arrays have no or little creation penalty.



initial

$elm$core$Array$fromList(
  _List_fromArray(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

transformed

{ $: 0, a: 10, b: 5, c: [], d: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };

---

initial

$elm$core$Array$fromList(_List_Nil);

transformed

$elm$core$Array$empty;

*/

const LIST_EMPTY = '_List_Nil';
const LIST_FROM_ARRAY_F_NAME = '_List_fromArray';
const ARRAY_EMPTY = '$elm$core$Array$empty';
const ARRAY_FROM_LIST = "$elm$core$Array$fromList";

export const createArrayFromLiteralTransformer : ts.TransformerFactory<ts.SourceFile> = (context) => {
  return (sourceFile) => {
    const visitor = (originalNode: ts.Node): ts.VisitResult<ts.Node> => {
      const node = ts.visitEachChild(originalNode, visitor, context);

      if (ts.isCallExpression(node)
        && ts.isIdentifier(node.expression)
        && node.expression.text == ARRAY_FROM_LIST
      ) {
        const [arg] = node.arguments;

        if (ts.isCallExpression(arg)
          && ts.isIdentifier(arg.expression)
          && arg.expression.text == LIST_FROM_ARRAY_F_NAME
          && ts.isArrayLiteralExpression(arg.arguments[0])
        ) {
            // @ts-ignore - Can't figure out why TypeScript is complaining here
            return arrayToAst(toArray(arg.arguments[0].elements));
        }
        else if (ts.isIdentifier(arg)
          && arg.text == LIST_EMPTY) {
            return ts.createIdentifier(ARRAY_EMPTY)
        }
      }
      return node;
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function arrayToAst(array: any) {
    return ts.createObjectLiteral([
        ts.createPropertyAssignment('$', ts.createLiteral(array.$)),
        ts.createPropertyAssignment('a', ts.createLiteral(array.a)),
        ts.createPropertyAssignment('b', ts.createLiteral(array.b)),
        ts.createPropertyAssignment('c', ts.createArrayLiteral(array.c.map(treeToAst))),
        ts.createPropertyAssignment('d', ts.createArrayLiteral(array.d)),
      ]);
}

function treeToAst(node: any) {
    const subElements =
        node.$ == 0
            ? ts.createArrayLiteral(node.a.map(treeToAst))
            : ts.createArrayLiteral(node.a);

    return ts.createObjectLiteral([
        ts.createPropertyAssignment('$', ts.createLiteral(node.$)),
        ts.createPropertyAssignment('a', subElements)
    ]);
}
