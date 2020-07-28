import { compile } from 'node-elm-compiler';
import * as fs from 'fs';
import * as path from 'path';
import { parseElm } from './parseElm';
import ts from 'typescript';
import { createCustomTypesTransformer } from './experiments/variantShapes';
import { Mode } from './types';
import {
  FuncSplit,
  createSplitFunctionDeclarationsTransformer,
  createFuncInlineTransformer,
} from './experiments/inlineWrappedFunctions';
import {
  InlineMode,
  createInlineListFromArrayTransformer,
} from './experiments/inlineListFromArray';

import {
  replaceUtilsUpdateWithObjectSpread,
  convertFunctionExpressionsToArrowFuncs,
} from './experiments/modernizeJS';

// Compile examples in `testcases/*` folder as js
// Run whatever transformations we want on them, saving steps as `elm.{transformation}.js`
compile(['Main.elm'], {
  output: 'output/elm.js',
  cwd: 'testcases/simple',
});

compile(['Main.elm'], {
  output: 'output/elm.opt.js',
  cwd: 'testcases/simple',
  optimize: true,
});

const pathInOutput = (p: string) => path.join('./testcases/simple/output', p);

const elmSource = fs.readFileSync('./testcases/simple/Main.elm', 'utf8');

const parsedVariants = parseElm({
  author: 'author',
  project: 'project',
  source: elmSource,
});

console.log('11', parsedVariants);
console.log('33', JSON.stringify(parsedVariants, null, 2));

const source = ts.createSourceFile(
  'elm.js',
  fs.readFileSync(pathInOutput('elm.opt.js'), 'utf-8'),
  ts.ScriptTarget.ES2018
);

const replacements = Object.values(parsedVariants).flat();

const customTypeTransformer = createCustomTypesTransformer(
  replacements,
  Mode.Prod
);

const collectedSplits = new Map<string, FuncSplit>();
const splitTransformer = createSplitFunctionDeclarationsTransformer(
  collectedSplits
);

const funcInlineTransformer = createFuncInlineTransformer(collectedSplits);

const inlineListFromArrayCalls = createInlineListFromArrayTransformer(
  InlineMode.UsingLiteralObjects(Mode.Prod)
);

const [result] = ts.transform(source, [
  customTypeTransformer,
  splitTransformer,
  funcInlineTransformer,
  inlineListFromArrayCalls,
  replaceUtilsUpdateWithObjectSpread,
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

console.log('done!');
