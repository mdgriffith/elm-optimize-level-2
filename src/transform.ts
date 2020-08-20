import * as fs from 'fs';
import { parseElm, parseDir, primitives } from './parseElm';
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
} from './transforms/modernizeJS';
import { createRemoveUnusedLocalsTransform } from './transforms/removeUnusedLocals';
import { createPassUnwrappedFunctionsTransformer } from './transforms/passUnwrappedFunctions';
import { replaceVDomNode } from './transforms/adjustVirtualDom';
import { inlineNumberToString } from './transforms/inlineNumberToString';

export type Options = {
  compile: boolean;
  minify: boolean;
  gzip: boolean;
  verbose: boolean;
};

export const transform = async (
  dir: string,
  jsSource: string,
  elmfile: string | undefined,
  verbose: boolean,
  transforms: Transforms
): Promise<string> => {
  let source = ts.createSourceFile('elm.js', jsSource, ts.ScriptTarget.ES2018);

  let parsedVariants = primitives;
  if (elmfile && transforms.variantShapes) {
    const elmSource = fs.readFileSync(elmfile, 'utf8');
    parsedVariants = parseElm({
      author: 'author',
      project: 'project',
      source: elmSource,
    })
      .concat(parsedVariants)

      .concat(parseDir('elm-packages'))
      .concat(parseDir(dir));
    // we dont care about types that have no slots on any variants
    parsedVariants = parsedVariants.filter((variant) => {
      return variant.totalTypeSlotCount != 0;
    });
  }

  const normalizeVariantShapes = createCustomTypesTransformer(
    parsedVariants,
    Mode.Prod
  );

  // We have to ensure that this transformation takes place before everything else
  if (transforms.replaceVDomNode) {
    const results = ts.transform(source, [replaceVDomNode()]);
    source = results.transformed[0];
  }

  let inlineCtx: InlineContext | undefined;
  const transformations: any[] = removeDisabled([
    [transforms.variantShapes, normalizeVariantShapes],
    [transforms.inlineFunctions, createFunctionInlineTransformer(verbose)],
    [transforms.inlineEquality, inlineEquality()],
    [transforms.inlineNumberToString, inlineNumberToString()],
    [
      transforms.listLiterals == InlineLists.AsObjects,
      createInlineListFromArrayTransformer(
        InlineMode.UsingLiteralObjects(Mode.Prod)
      ),
    ],
    [
      transforms.listLiterals == InlineLists.AsCons,
      createInlineListFromArrayTransformer(InlineMode.UsingConsFunc),
    ],
    [
      transforms.passUnwrappedFunctions,
      createPassUnwrappedFunctionsTransformer(() => inlineCtx),
    ],
    [
      !!transforms.objectUpdate,
      transforms.objectUpdate && objectUpdate(transforms.objectUpdate),
    ],
    [transforms.arrowFns, convertFunctionExpressionsToArrowFuncs],
    [transforms.unusedValues, createRemoveUnusedLocalsTransform()],
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
