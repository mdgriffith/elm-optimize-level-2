import ts from 'typescript';
import { createCustomTypesTransformer } from './experiments/variantShapes';
import {
  createSplitFunctionDeclarationsTransformer,
  FuncSplit,
  createFuncInlineTransformer,
} from './experiments/inlineWrappedFunctions';
import { Mode, ElmVariant } from './types';

import {
  createInlineListFromArrayTransformer,
  InlineMode,
} from './experiments/inlineListFromArray';

const elmOutput = `
var $elm$core$Maybe$Nothing = {$: 'Nothing'};

var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};

var $author$project$Main$Three = F3(
  function (a, b, c) {
      return {$: 'Three', a: a, b: b, c: c};
  });

var _v1 = A3($author$project$Main$Three, a, b, c);

_List_fromArray(['a', 'b', 'c']);
`;

const source = ts.createSourceFile('elm.js', elmOutput, ts.ScriptTarget.ES2018);

const replacements: ElmVariant[] = [
  {
    jsName: '$elm$core$Maybe$Nothing',
    typeName: 'Maybe',
    name: 'Nothing',
    slots: [],
    index: 1,
    totalTypeSlotCount: 2,
  },

  {
    jsName: '$elm$core$Maybe$Just',
    typeName: 'Maybe',
    name: 'Just',
    slots: [],
    index: 0,
    totalTypeSlotCount: 2,
  },
  {
    jsName: '$author$project$Main$Three',
    typeName: 'Bla',
    name: 'Three',
    slots: ['a', 'b', 'c'],
    index: 100500,
    totalTypeSlotCount: 4,
  },
];

const customTypeTransformer = createCustomTypesTransformer(
  replacements,
  Mode.Prod
);
const [newFile] = ts.transform(source, [customTypeTransformer]).transformed;

const printer = ts.createPrinter();
console.log('----------AFTER CUSTOM TYPE SHAPES TRANSFORM ----------------');
console.log(printer.printFile(source));
console.log(printer.printFile(newFile));
console.log('----------AFTER SPLIT TRANSFORM ----------------');

const collectedSplits: FuncSplit[] = [];
const splitTransformer = createSplitFunctionDeclarationsTransformer(split =>
  collectedSplits.push(split)
);
const [sourceWithSplittedFunctions] = ts.transform(newFile, [
  splitTransformer,
]).transformed;

console.log(printer.printFile(sourceWithSplittedFunctions));
console.log(collectedSplits);

console.log('----------AFTER INLINE A(n) TRANSFORM ----------------');
const funcInlineTransformer = createFuncInlineTransformer(collectedSplits);
const [sourceWithInlinedFuntioncs] = ts.transform(sourceWithSplittedFunctions, [
  funcInlineTransformer,
]).transformed;

console.log(printer.printFile(sourceWithInlinedFuntioncs));

console.log(
  '----------AFTER INLINE _List_fromArray TRANSFORM ----------------'
);
const inlineListFromArrayCalls = createInlineListFromArrayTransformer(
  InlineMode.UsingLiteralObjects(Mode.Prod)
  // InlineMode.UsingConsFunc
);
const [sourceWithInlinedListFromArr] = ts.transform(
  sourceWithInlinedFuntioncs,
  [inlineListFromArrayCalls]
).transformed;

console.log(printer.printFile(sourceWithInlinedListFromArr));
