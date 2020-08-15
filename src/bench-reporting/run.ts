/*

Compiles all the test cases and runs them via webdriver to summarize the results


*/

import { ObjectUpdate, Transforms, Browser, InlineLists } from '../types';
import * as Reporting from './reporting';
import * as fs from 'fs';

const defaultOptions: Transforms = {
  replaceVDomNode: false,
  variantShapes: true,
  inlineNumberToString: true,
  inlineEquality: true,
  inlineFunctions: true,
  listLiterals: null,
  passUnwrappedFunctions: true,
  arrowFns: true,
  objectUpdate: ObjectUpdate.InlineSpread,
  unusedValues: false,
};

const test: Transforms = {
  replaceVDomNode: false,
  variantShapes: false,
  inlineNumberToString: false,
  inlineEquality: false,
  inlineFunctions: false,
  listLiterals: InlineLists.AsObjects,
  passUnwrappedFunctions: false,
  arrowFns: false,
  objectUpdate: null,
  unusedValues: false,
};

const options = {
  compile: true,
  gzip: true,
  minify: true,
  verbose: true,
  assetSizes: true,
  runBenchmark: [
    {
      browser: Browser.Chrome,
      headless: true,
    },
    {
      browser: Browser.Firefox,
      headless: true,
    },
  ],
  transforms: defaultOptions,
};

async function go() {
  const report = await Reporting.run(options, [
    // Use `runWithBreakdown` if you want the breakdown
    // const report = await Reporting.runWithKnockout(options, [
    // const report = await Reporting.runWithBreakdown(options, [
    // {
    //   name: 'Elm Core',
    //   dir: 'testcases/bench',
    //   elmFile: 'Main.elm',
    // },
    {
      name: 'Html',
      dir: 'testcases/html',
      elmFile: 'Main.elm',
    },
    // {
    //   name: 'Elm UI',
    //   dir: 'testcases/elm-ui',
    //   elmFile: 'Main.elm',
    // },
    // {
    //   name: 'Elm UI 2',
    //   dir: 'testcases/elm-ui-2',
    //   elmFile: 'Main.elm',
    // },
    // {
    //   name: 'elm-animator',
    //   dir: 'testcases/elm-animator',
    //   elmFile: 'Run.elm',
    // },
    // {
    //   name: 'Elm Markdown',
    //   dir: 'testcases/elm-markdown',
    //   elmFile: 'Run.elm',
    // },
    // This one takes forever
    // {
    //   name: 'elm-obj-file',
    //   dir: 'testcases/elm-obj-file',
    //   elmFile: 'Run.elm',
    //
    // },
  ]);
  const result = await report;
  console.log(Reporting.terminal(result));
  fs.writeFileSync('./results.markdown', Reporting.markdownTable(result));
}

go();
