// tslint:disable-next-line no-require-imports no-var-requires
import program from 'commander';
import * as path from 'path';
import * as Transform from './transform';
import { ObjectUpdate, Transforms, InlineLists } from './types';
import { compileToStringSync } from 'node-elm-compiler';
import * as fs from 'fs';
const { version } = require('../package.json');

const defaultOptions: Transforms = {
  replaceVDomNode: false,
  variantShapes: true,
  inlineNumberToString: true,
  inlineEquality: true,
  inlineFunctions: true,
  listLiterals: false,
  passUnwrappedFunctions: true,
  arrowFns: false,
  objectUpdate: false,
  unusedValues: false,
};

program
  .version(version)
  .usage('[options] <src/Main.elm>')
  // .option(
  //   '-e --exclude-transforms <excludedTransforms>',
  //   'names of transforms that should be excluded (comma delimited). ' +
  //   'Names of available transforms:' +
  //   Object.keys(defaultOptions)
  //     .map(name => `'${name}'`)
  //     .join(', '),
  //   v => v.split(','),
  //   []
  // )
  // .option(
  //   '-m --modernize',
  //   'transform into a more modern JS to save size (es2018)',
  //   false
  // )
  .option(
    '--output',
    'The name of the javascript file to create.',
    'elm.js'
  )
  .parse(process.argv);

type CLIOptions = {
  modernize: boolean;
  excludeTransforms: string[];
};

async function run(filePath: string | undefined, options: CLIOptions) {
  if (!filePath || !filePath.endsWith('.elm')) {
    console.error('Please provide a path to an Elm file.');
    program.outputHelp();
    return;
  }

  // const { excludeTransforms, modernize } = options;
  // excludeTransforms;
  // modernize;

  const dirname = path.dirname(filePath);
  const fileName = path.basename(filePath);

  // const withExcluded: Transforms = Object.fromEntries(
  //   Object.entries(defaultOptions).map(([name, val]) =>
  //     excludeTransforms.includes(name) ? [name, false] : [name, val]
  //   )
  // ) as any;

  // const withCorrections = {
  //   ...withExcluded,
  //   arrowFns: modernize && withExcluded.arrowFns,
  //   objectUpdate: modernize && withExcluded.objectUpdate,
  //   passUnwrappedFunctions:
  //     withExcluded.inlineFunctions && withExcluded.passUnwrappedFunctions,
  // };


  const source: string = compileToStringSync([fileName], {
    output: 'output/elm.opt.js',
    cwd: dirname,
    optimize: true,
    processOpts:
    // ignore stdout
    {
      stdio: ['pipe', 'ignore', 'pipe']
    }
  });
  const transformed = await Transform.transform(
    dirname,
    fileName,
    source,
    false,
    defaultOptions
  )

  fs.writeFileSync(
    program.output,
    transformed
  );

}

run(program.args[0], program.opts() as any).catch(e => console.error(e));
