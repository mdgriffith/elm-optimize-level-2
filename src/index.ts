import ts from 'typescript';
import {
  VariantReplacement,
  createCustomTypesTransformer,
} from './experiments/variantShapes';
import {
  createSplitFunctionDeclarationsTransformer,
  FuncSplit,
  createFuncInlineTransformer,
} from './experiments/inlineWrappedFunctions';
import { Mode } from './experiments/types';

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

const replacements: VariantReplacement[] = [
  {
    symbolName: '$elm$core$Maybe$Nothing',
    variantName: 'Nothing',
    maximumNumberOfArgs: 1,
    variantIndex: 1,
    numberOfArgs: 0,
  },

  {
    symbolName: '$elm$core$Maybe$Just',
    variantName: 'Just',
    numberOfArgs: 1,
    variantIndex: 0,
    maximumNumberOfArgs: 2,
  },
  {
    symbolName: '$author$project$Main$Three',
    variantName: 'Three',
    numberOfArgs: 3,
    variantIndex: 100500,
    maximumNumberOfArgs: 4,
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
