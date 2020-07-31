import { compileSync } from 'node-elm-compiler';
import * as fs from 'fs';
import * as path from 'path';
import { parseElm } from './parseElm';
import ts from 'typescript';
import { createCustomTypesTransformer } from './experiments/variantShapes';
import { Mode } from './types';
import {
  createFunctionInlineTransformer,
  InlineContext,
} from './experiments/inlineWrappedFunctions';
import {
  InlineMode,
  createInlineListFromArrayTransformer,
} from './experiments/inlineListFromArray';

import { prepackFileSync } from 'prepack';

import {
  createReplaceUtilsUpdateWithObjectSpread,
  convertFunctionExpressionsToArrowFuncs,
  NativeSpread,
} from './experiments/modernizeJS';

type TransformOptions = {
  prepack: boolean;
};

export const compileAndTransform = (
  dir: string,
  file: string,
  options?: TransformOptions
): {} => {
  // Compile examples in `testcases/*` folder as js
  // Run whatever transformations we want on them, saving steps as `elm.{transformation}.js`
  compileSync([file], {
    output: 'output/elm.js',
    cwd: dir,
  });

  compileSync([file], {
    output: 'output/elm.opt.js',
    cwd: dir,
    optimize: true,
  });

  const pathInOutput = (p: string) => path.join(dir, 'output', p);

  const elmSource = fs.readFileSync(path.join(dir, file), 'utf8');
  const parsedVariants = parseElm({
    author: 'author',
    project: 'project',
    source: elmSource,
  });

  // console.log('11', parsedVariants);
  // console.log('33', JSON.stringify(parsedVariants, null, 2));

  const source = ts.createSourceFile(
    'elm.js',
    fs.readFileSync(pathInOutput('elm.opt.js'), 'utf-8'),
    ts.ScriptTarget.ES2018
  );

  const replacements = Object.values(parsedVariants).flat();

  const normalizeVariantShapes = createCustomTypesTransformer(
    replacements,
    Mode.Prod
  );

  const inlineListFromArrayCalls = createInlineListFromArrayTransformer(
    InlineMode.UsingLiteralObjects(Mode.Prod)
  );

  const [result] = ts.transform(source, [
    normalizeVariantShapes,
    createFunctionInlineTransformer(reportInlineTransformResult),
    inlineListFromArrayCalls,
    createReplaceUtilsUpdateWithObjectSpread(
      NativeSpread.UseSpreadOnlyToMakeACopy
    ),

    // Arrow functions are disabled because somethings not quite right with them.
    convertFunctionExpressionsToArrowFuncs,
  ]).transformed;

  const printer = ts.createPrinter();

  fs.writeFileSync(
    pathInOutput('elm.opt.transformed.js'),
    printer.printFile(result)
  );

  const initialJs = ts.createSourceFile(
    'elm.js',
    fs.readFileSync(pathInOutput('elm.opt.js'), 'utf-8'),
    ts.ScriptTarget.ES2018
  );

  fs.writeFileSync(pathInOutput('elm.opt.js'), printer.printFile(initialJs));

  if (options?.prepack) {
    console.log('here');
    const { code } = prepackFileSync([pathInOutput('elm.opt.transformed.js')], {
      debugNames: true,
      inlineExpressions: true,
      maxStackDepth: 1200, // that didn't help
    });
    console.log('there', code.length);

    fs.writeFileSync(pathInOutput('elm.opt.prepack.js'), code);
  }

  return {};
};

function reportInlineTransformResult(ctx: InlineContext) {
  const {
    splits,
    partialApplications,
    inlinedCount,
    inlinedPartialApplications,
  } = ctx;

  console.log(
    `functionInlineTransformer: splitCount=${splits.size}, partialApplicationCount=${partialApplications.size}, inlined=${inlinedCount}, inlinedPartialApplications=${inlinedPartialApplications}`
  );
}
