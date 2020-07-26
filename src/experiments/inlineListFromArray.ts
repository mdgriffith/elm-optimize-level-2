import ts from 'typescript';

// `
//   var _List_Nil = { $: "[]" };

//   function _List_Cons(hd, tl) {
//     return { $: "::", a: hd, b: tl };
//   }

//   var _List_cons = F2(_List_Cons);

//   function _List_fromArray(arr) {
//     var out = _List_Nil;
//     for (var i = arr.length; i--; ) {
//       out = _List_Cons(arr[i], out);
//     }
//     return out;
//   }
// `;
// `
//       _List_fromArray([
//        "a",
//         "b",
//         "c",
//       ])
// `;

const LIST_FROM_ARRAY_F_NAME = '_List_fromArray';
const LIST_NIL_NAME = '_List_Nil';
const LIST_CONS_F_NAME = '_List_cons';

const listNil = ts.createIdentifier(LIST_NIL_NAME);
const listConsCall = ts.createIdentifier(LIST_CONS_F_NAME);

const appendToFront = (
  expression: ts.Expression,
  list: ts.Expression
): ts.Expression => {
  return ts.createCall(listConsCall, undefined, [expression, list]);
};

export const createInlineListFromArrayTransformer = (): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects [exp](..)
      if (ts.isCallExpression(node)) {
        const expression = node.expression;
        // detects _List_fromArray(..)
        if (
          ts.isIdentifier(expression) &&
          expression.text === LIST_FROM_ARRAY_F_NAME &&
          node.arguments.length === 1
        ) {
          const [arrayLiteral] = node.arguments;

          // detects _List_fromArray([..])
          if (ts.isArrayLiteralExpression(arrayLiteral)) {
            return arrayLiteral.elements.reduceRight(appendToFront, listNil);
          }
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
