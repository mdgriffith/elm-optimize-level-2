/*

Compiles all the test cases and runs them via webdriver to summarize the results


*/

import { ObjectUpdate, Transforms } from './types';
import * as Reporting from './reporting';

const defaultOptions: Transforms = {
  prepack: true,
  variantShapes: true,
  inlineEquality: true,
  inlineFunctions: true,
  listLiterals: true,
  passUnwrappedFunctions: true,
  arrowFns: true,
  objectUpdate: null,
  unusedValues: true,
};

// const defaultOptions: Transforms = {
//   prepack: false,
//   variantShapes: false,
//   inlineEquality: false,
//   inlineFunctions: true,
//   passUnwrappedFunctions: true,
//   listLiterals: false,
//   arrowFns: false,
//   objectUpdate: null,
//   unusedValues: false,
// };
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
