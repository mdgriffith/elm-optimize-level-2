/*

Compiles all the test cases and runs them via webdriver to summarize the results


*/

import { ObjectUpdate, Transforms, Browser, InlineLists } from './types';
import * as Reporting from './reporting';

const defaultOptions: Transforms = {
  prepack: true,
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
  prepack: false,
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
  gzip: false,
  minify: false,
  assetSizes: false,
  runBenchmark: [
    {
      browser: Browser.Chrome,
      headless: false,
    },
  ],
  transforms: defaultOptions,
};

async function go() {
  const report = await Reporting.run(options, [
    // Use `runWithBreakdown` if you want the breakdown
    // const report = await Reporting.runWithBreakdown([
    // { name: 'simple',
    //   dir: 'testcases/simple',
    //   elmFile: 'main',
    //
    // },
    {
      name: 'bench',
      dir: 'testcases/bench',
      elmFile: 'Main.elm',
    },
    // {
    //   name: 'html',
    //   dir: 'testcases/html',
    //   elmFile: 'Main.elm',
    //
    // },
    // {
    //   name: 'elm-ui',
    //   dir: 'testcases/elm-ui',
    //   elmFile: 'Main.elm',
    //
    // },
    // {
    //   name: 'elm-ui-2',
    //   dir: 'testcases/elm-ui-2',
    //   elmFile: 'Main.elm',
    // },
    // {
    //   name: 'elm-animator',
    //   dir: 'testcases/elm-animator',
    //   elmFile: 'Run.elm',
    // },
    // {
    //   name: 'elm-markdown',
    //   dir: 'testcases/elm-markdown',
    //   elmFile: 'Run.elm',
    //
    // },
    // {
    //   name: 'elm-markdown',
    //   dir: 'testcases/elm-markdown',
    //   elmFile: 'Run.elm',
    //   options: inlineEquality,
    // },
    // This one takes forever
    // {
    //   name: 'elm-obj-file',
    //   dir: 'testcases/elm-obj-file',
    //   elmFile: 'Run.elm',
    //
    // },
  ]);

  console.log(Reporting.markdown(await report));
}

go();
