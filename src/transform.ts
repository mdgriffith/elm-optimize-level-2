import { primitives } from './parsing/primitives';
// import { parseElm } from './parsing/parseElm';
import ts from 'typescript';
import { createCustomTypesTransformer } from './transforms/variantShapes';
import { Mode, Transforms, InlineLists } from './types';
import {
  createFunctionInlineTransformer,
  InlineContext,
} from './transforms/inlineWrappedFunctions';
import {
  InlineMode,
  createInlineListFromArrayTransformer,
} from './transforms/inlineListFromArray';
import { inlineEquality } from './transforms/inlineEquality';

import {
  objectUpdate,
  convertFunctionExpressionsToArrowFuncs,
  convertToObjectShorthandLiterals,
} from './transforms/modernizeJS';
import { createRemoveUnusedLocalsTransform } from './transforms/removeUnusedLocals';
import { createPassUnwrappedFunctionsTransformer } from './transforms/passUnwrappedFunctions';
import { replaceVDomNode } from './transforms/adjustVirtualDom';
import { inlineNumberToString } from './transforms/inlineNumberToString';
import { reportFunctionStatusInBenchmarks, v8Debug } from './transforms/analyze';
import { recordUpdate } from './transforms/recordUpdate';
import * as Replace from './transforms/replace';
import { createTailCallRecursionTransformer } from './transforms/tailCallRecursion';

export type Options = {
  compile: boolean;
  minify: boolean;
  gzip: boolean;
  verbose: boolean;
};

export const transform = async (
  _dir: string,
  jsSource: string,
  elmfile: string | undefined,
  verbose: boolean,
  transforms: Transforms
): Promise<string> => {
  let source = ts.createSourceFile('elm.js', jsSource, ts.ScriptTarget.ES2018);

  let parsedVariants = primitives;
  if (elmfile && transforms.variantShapes) {
    // const elmSource = fs.readFileSync(elmfile, 'utf8');
    // parsedVariants = parseElm({
    //   author: 'author',
    //   project: 'project',
    //   source: elmSource,
    // }).concat(parsedVariants);
    // We have the ability to parse for more variant shapes,
    // Though I think we should include this once we understand the shapes a bit better.
    // There are also questions about 1. shipping a file with *all type* defined in elm-package
    // and 2. making it so that the parser is only parsing the user's intended project
    // and not scanning a dir like node_modules.
    // However, once we handle those, we can turn these back on!
    // .concat(parseDir('elm-packages'))
    // .concat(parseDir(dir));
    // we dont care about types that have no slots on any variants
    parsedVariants = parsedVariants.filter((variant) => {
      return variant.totalTypeSlotCount != 0;
    });
  }

  const normalizeVariantShapes = createCustomTypesTransformer(
    parsedVariants,
    Mode.Prod
  );
  if (verbose) {
    console.log('Reshaping ' + parsedVariants.length + ' variants');
  }

  // We have to ensure that this transformation takes place before everything else
  if (transforms.replaceVDomNode) {
    const results = ts.transform(source, [replaceVDomNode()]);
    source = results.transformed[0];
  }

  let replacementTransformer = inlineEquality()
  if (transforms.replacements != null){
    replacementTransformer = Replace.replace(transforms.replacements)
  }


  let inlineCtx: InlineContext | undefined;
  const transformations: any[] = removeDisabled([
    // [transforms.replacements != null, replacementTransformer ],
    [transforms.tailCallRecursion, createTailCallRecursionTransformer(false) ],
    // [transforms.fastCurriedFns, Replace.from_file('/../replacements/faster-function-wrappers') ],
    // [transforms.replaceListFunctions,  Replace.from_file('/../replacements/list') ],
    // [transforms.replaceStringFunctions, Replace.from_file('/../replacements/string') ],
    // [transforms.v8Analysis, v8Debug],
    // [transforms.variantShapes, normalizeVariantShapes],
    // [transforms.inlineFunctions, createFunctionInlineTransformer(verbose, transforms.fastCurriedFns)],
    // [transforms.inlineEquality, inlineEquality()],
    // [transforms.inlineNumberToString, inlineNumberToString()],
    // [
    //   transforms.listLiterals == InlineLists.AsObjects,
    //   createInlineListFromArrayTransformer(
    //     InlineMode.UsingLiteralObjects(Mode.Prod)
    //   ),
    // ],
    // [
    //   transforms.listLiterals == InlineLists.AsCons,
    //   createInlineListFromArrayTransformer(InlineMode.UsingConsFunc),
    // ],
    // [
    //   transforms.passUnwrappedFunctions,
    //   createPassUnwrappedFunctionsTransformer(() => inlineCtx),
    // ],
    // [
    //   !!transforms.objectUpdate,
    //   transforms.objectUpdate && objectUpdate(transforms.objectUpdate),
    // ],
    // [transforms.arrowFns, convertFunctionExpressionsToArrowFuncs],
    // [transforms.shorthandObjectLiterals, convertToObjectShorthandLiterals],
    // [transforms.unusedValues, createRemoveUnusedLocalsTransform()],
    // [transforms.recordUpdates, recordUpdate()],
    // [transforms.v8Analysis, reportFunctionStatusInBenchmarks],
  ]);

  const {
    transformed: [result],
  } = ts.transform(source, transformations);

  const printer = ts.createPrinter();

  return printer.printFile(result);
};

function removeDisabled<T>(list: [null | boolean | undefined, T][]): T[] {
  let newList: T[] = [];
  list.forEach(([cond, val]) => {
    if (![null, false, undefined].includes(cond)) {
      newList.push(val);
    }
  });

  return newList;
}
