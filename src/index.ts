// tslint:disable-next-line no-require-imports no-var-requires
import program from 'commander';
import * as path from 'path';
import * as Transform from './transform';
import { toolDefaults, benchmarkDefaults, Browser} from './types';
import { compileToStringSync } from 'node-elm-compiler';
import * as fs from 'fs';
import chalk from 'chalk';
const { version } = require('../package.json');
import * as BenchInit from './benchmark/init'
import * as Benchmark from './benchmark/reporting';

program
  .version(version)
  .description(
    `${chalk.yellow('Elm Optimize Level 2!')}
    
This applies a second level of optimization to the javascript that Elm creates.

Make sure you're familiar with Elm's built-in optimization first: ${chalk.cyan(
      'https://guide.elm-lang.org/optimization/asset_size.html'
    )}

Give me an Elm file, I'll compile it behind the scenes using Elm 0.19.1, and then I'll make some more optimizations!`
  )
  .usage('[options] <src/Main.elm>')
  .option('--output <output>', 'the javascript file to create.', 'elm.js')
  .option('--init-benchmark <dir>', 'Generate some files to help run benchmarks')
  .option('--benchmark <dir>', 'Run the benchmark in the given directory.')
  .option('--replacements <dir>', 'Replace stuff')
  .parse(process.argv);

async function run(inputFilePath: string | undefined) {
  const dirname = process.cwd();
  let jsSource: string = '';
  let elmFilePath = undefined;

  const replacementDir = hasReplacements(process.argv)
  let replacements = null
  if (replacementDir){
     replacements = readFilesSync(replacementDir)
  }

  if (program.initBenchmark) {
    console.log(`Initializing benchmark ${program.initBenchmark}`)
    BenchInit.generate(program.initBenchmark)
    process.exit(0)
  }

  if (program.benchmark) {
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
          ],
          transforms: { ...benchmarkDefaults, ...{replacements: replacements} }
      };
      const report = await Benchmark.run(options, [
        {
          name: 'Benchmark',
          dir: program.benchmark,
          elmFile: 'V8/Benchmark.elm',
        }
      ]);
      const result = await report;
      console.log(Benchmark.terminal(result));
//       fs.writeFileSync('./results.markdown', Reporting.markdownTable(result));
      process.exit(0)

  }


  if (inputFilePath && inputFilePath.endsWith('.js')) {
    jsSource = fs.readFileSync(inputFilePath, 'utf8');
    console.log('Optimizing existing JS...');
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
    } else {
      process.exit(1)
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
      { ...toolDefaults, ...{replacements: replacements} }
    );

    // Make sure all the folders up to the output file exist, if not create them.
    // This mirrors elm make behavior.
    const outputDirectory = path.dirname(program.output);
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory, { recursive: true });
    }
    fs.writeFileSync(program.output, transformed);
    const fileName = path.basename(inputFilePath);
    console.log('Success!');
    console.log('');
    console.log(`   ${fileName} ───> ${program.output}`);
    console.log('');
  }
}


function hasReplacements(args: string[]){
    let flagged = false
    let dir = null
    for (const arg of args) {
        if (flagged) {
            dir = arg
            break
        } else {
            if (arg == "--replacements"){
                flagged = true
            }
        }
    }
    return dir
}


function readFilesSync(dir: string): {[key: string]: string} | null {
  let foundAnything = false
  const files: {[key: string]: string} = {};

  fs.readdirSync(dir).forEach(filename => {
    const name = path.parse(filename).name;
    const ext = path.parse(filename).ext;
    const filepath = path.resolve(dir, filename);
    const stat = fs.statSync(filepath);
    const isFile = stat.isFile();

    if (isFile) {
         const content = fs.readFileSync(path.join(dir, filename))
         files[name] = content.toString()
         foundAnything = true
    }
  });
  if (foundAnything) {
    return files;
  } else {
    return null
  }

}

run(program.args[0]).catch((e) => console.error(e));
