/*

Compiles all the test cases and runs them via webdriver to summarize the results


*/

import { ObjectUpdate } from './types';
import * as Reporting from './reporting';

const defaultOptions = {
  prepack: true,
  variantShapes: true,
  inlineFunctions: true,
  listLiterals: true,
  arrowFns: true,
  objectUpdate: ObjectUpdate.UseSpreadOnlyToMakeACopy,
  unusedValues: false,
};

async function go() {
  const report = await Reporting.run([
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
  ]);

  console.log(Reporting.markdown(await report));
}

go();
