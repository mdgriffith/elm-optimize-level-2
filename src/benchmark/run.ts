/*

Compiles all the test cases and runs them via webdriver to summarize the results


*/

import {
  ObjectUpdate,
  Transforms,
  Browser,
  InlineLists,
  toolDefaults,
} from '../types';
import * as Reporting from './reporting';
import * as fs from 'fs';

const defaultOptions: Transforms = {
  replaceVDomNode: false,
  variantShapes: true,
  inlineNumberToString: false,
  inlineEquality: false,
  inlineFunctions: false,
  listLiterals: false,
  passUnwrappedFunctions: false,
  arrowFns: false,
  objectUpdate: false,
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
      headless: false,
    },
    {
      browser: Browser.Firefox,
      headless: true,
    },
    {
      browser: Browser.Safari,
      headless: true,
    },
  ],
  transforms: toolDefaults, //defaultOptions,
};

async function go() {
  const report = await Reporting.run(options, [
    // Use `runWithBreakdown` if you want the breakdown
    // const report = await Reporting.runWithKnockout(options, [
    // const report = await Reporting.runWithBreakdown(options, [
    // {
    //   name: 'Elm Core',
    //   dir: 'testcases/core',
    //   elmFile: 'Main.elm',
    // },
    // {
    //   name: 'Elm CSS',
    //   dir: 'testcases/elm-css',
    //   elmFile: 'Main.elm',
    // },
    // {
    //   name: 'Html',
    //   dir: 'testcases/html',
    //   elmFile: 'Main.elm',
    // },
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
    // // // This one takes forever
    {
      name: 'elm-obj-file',
      dir: 'testcases/elm-obj-file',
      elmFile: 'Run.elm',
    },
  ]);
  const result = await report;

  console.log(Reporting.terminal(result));
  fs.writeFileSync('./results.markdown', Reporting.markdownTable(result));
}

go();
