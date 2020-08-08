/*

Inline the creation of a list from an array:

// initial 
_List_fromArray(["a", "b", "c"]);

// with InlineMode.UsingConsFunc
_List_cons("a", _List_cons("b", _List_cons("c", _List_Nil)))

// with InlineMode.UsingLiteralObjects(Mode.Prod)
({ $: 1, a: "a", b: { $: 1, a: "b", b: { $: 1, a: "c", b: _List_Nil } } });

// with InlineMode.UsingLiteralObjects(Mode.Dev) 
({ $: "::", a: "a", b: { $: "::", a: "b", b: { $: "::", a: "c", b: _List_Nil } } });





*/

import ts from 'typescript';
import { Union, of } from 'ts-union';
import { Mode } from '../types';

// debug

// const f = () => {
//   var _List_Nil = { $: '[]' };

//   function _List_Cons<T>(hd: T, tl: T | typeof _List_Nil) {
//     return { $: '::', a: hd, b: tl };
//   }

//   // var _List_cons = F2(_List_Cons);

//   function _List_fromArray<T>(arr: T[]) {
//     var out = _List_Nil;
//     for (var i = arr.length; i--; ) {
//       out = _List_Cons(arr[i], out);
//     }
//     return out;
//   }

//   const res = _List_fromArray(['a', 'b', 'c']);

//   console.log(res);
// };

// f();

// prod

// var _List_Nil = { $: 0 };
// var _List_Nil_UNUSED = { $: '[]' };

// function _List_Cons(hd, tl) {
//   return { $: 1, a: hd, b: tl };
// }

const listElementMarker = (mode: Mode): ts.Expression =>
  mode === Mode.Dev
    ? ts.createStringLiteral('::')
    : ts.createNumericLiteral('1');

export const InlineMode = Union({
  UsingConsFunc: of(null),
  UsingLiteralObjects: of<Mode>(),
});

export type InlineMode = typeof InlineMode.T;

const LIST_FROM_ARRAY_F_NAME = '_List_fromArray';
const LIST_NIL_NAME = '_List_Nil';
const LIST_CONS_F_NAME = '_List_cons';

const listNil = ts.createIdentifier(LIST_NIL_NAME);
const listConsCall = ts.createIdentifier(LIST_CONS_F_NAME);

export const createInlineListFromArrayTransformer = (
  inlineMode: InlineMode
): ts.TransformerFactory<ts.SourceFile> => context => {
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
            return arrayLiteral.elements.reduceRight(
              (list: ts.Expression, element: ts.Expression): ts.Expression => {
                return InlineMode.match(inlineMode, {
                  UsingConsFunc: (): ts.Expression =>
                    ts.createCall(listConsCall, undefined, [
                      ts.visitNode(element, visitor),
                      list,
                    ]),

                  UsingLiteralObjects: mode =>
                    ts.createObjectLiteral([
                      ts.createPropertyAssignment('$', listElementMarker(mode)),
                      ts.createPropertyAssignment('a', element),
                      ts.createPropertyAssignment('b', list),
                    ]),
                });
              },
              listNil
            );
          }
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
