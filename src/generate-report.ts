/*

Compiles all the test cases and runs them via webdriver to summarize the results


*/

import { ObjectUpdate } from './types';
import * as Reporting from './reporting';

const defaultOptions = {
  prepack: true,
  variantShapes: true,
  inlineEquality: true,
  inlineFunctions: true,
  listLiterals: true,
  arrowFns: true,
  objectUpdate: null,
  unusedValues: false,
};

const inlineEquality = {
  prepack: false,
  variantShapes: false,
  inlineEquality: true,
  inlineFunctions: false,
  listLiterals: false,
  arrowFns: false,
  objectUpdate: null,
  unusedValues: false,
};
async function go() {
  const report = await Reporting.run([
    // Use `runWithBreakdown` if you want the breakdown
    // const report = await Reporting.runWithBreakdown([
    // { name: 'simple',
    //   dir: 'testcases/simple',
    //   elmFile: 'main',
    //   options: defaultOptions,
    // },
    {
      name: 'bench',
      dir: 'testcases/bench',
      elmFile: 'Main.elm',
      options: defaultOptions,
    },
    {
      name: 'html',
      dir: 'testcases/html',
      elmFile: 'Main.elm',
      options: defaultOptions,
    },
    {
      name: 'elm-ui',
      dir: 'testcases/elm-ui',
      elmFile: 'Main.elm',
      options: defaultOptions,
    },
    {
      name: 'elm-markdown',
      dir: 'testcases/elm-markdown',
      elmFile: 'Run.elm',
      options: defaultOptions,
    },
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
    //   options: defaultOptions,
    // },
  ]);

  console.log(Reporting.markdown(await report));
}

go();
