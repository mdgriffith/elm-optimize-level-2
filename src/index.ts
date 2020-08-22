// tslint:disable-next-line no-require-imports no-var-requires
import program from 'commander';
import * as path from 'path';
import * as Transform from './transform';
import { toolDefaults } from './types';
import { compileToStringSync } from 'node-elm-compiler';
import * as fs from 'fs';
const { version } = require('../package.json');

program
  .version(version)
  .usage('[options] <src/Main.elm>')
  .option(
    '--output <output>',
    'The name of the javascript file to create.',
    'elm.js'
  )
  .parse(process.argv);

async function run(inputFilePath: string | undefined) {
  if (
    (!inputFilePath || !inputFilePath.endsWith('.elm')) &&
    !program.transformExistingJs
  ) {
    console.error('Please provide a path to an Elm file.');
    program.outputHelp();
    return;
  }
  const dirname = process.cwd();
  let jsSource: string = '';
  let elmFilePath = undefined;

  if (inputFilePath && inputFilePath.endsWith('.js')) {
    jsSource = fs.readFileSync(inputFilePath, 'utf8');
  } else if (inputFilePath && inputFilePath.endsWith('.elm')) {
    elmFilePath = inputFilePath;
    jsSource = compileToStringSync([inputFilePath], {
      output: 'output/elm.opt.js',
      cwd: dirname,
      optimize: true,
      processOpts:
        // ignore stdout
        {
          stdio: ['inherit', 'ignore', 'inherit'],
        },
    });
    if (jsSource != '') {
      console.log('Compiled, optimizing JS...');
    }
  } else {
    console.error('Please provide a path to an Elm file.');
    program.outputHelp();
    return;
  }
  if (jsSource != '') {
    const transformed = await Transform.transform(
      dirname,
      jsSource,
      elmFilePath,
      false,
      toolDefaults
    );
    fs.writeFileSync(program.output, transformed);
    const fileName = path.basename(inputFilePath);
    console.log('Success!');
    console.log('');
    console.log(`   ${fileName} ---> ${program.output}`);
    console.log('');
  }
}

run(program.args[0]).catch((e) => console.error(e));
