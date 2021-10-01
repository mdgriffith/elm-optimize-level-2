// tslint:disable-next-line no-require-imports no-var-requires
import program from 'commander';
import * as path from 'path';
import * as Transform from './transform';
import { toolDefaults } from './types';
import { compileToStringSync } from 'node-elm-compiler';
import * as fs from 'fs';
import chalk from 'chalk';
const { version } = require('../package.json');
// import * as BenchInit from './benchmark/init'
// import * as Benchmark from './benchmark/benchmark';
// import * as Reporting from './benchmark/reporting';

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
  .option('-O3, --optimize-speed', 'Enable optimizations that likely increases asset size', false)
  // .option('--init-benchmark <dir>', 'Generate some files to help run benchmarks')
  // .option('--benchmark <dir>', 'Run the benchmark in the given directory.')
  // .option('--replacements <dir>', 'Replace stuff')
  .parse(process.argv);

async function run(inputFilePath: string | undefined, options: { output: string | null, optimizeSpeed: boolean }) {
  const dirname = process.cwd();
  let jsSource: string = '';
  let elmFilePath = undefined;

  const replacements = null;
  const o3Enabled = options.optimizeSpeed;

  // if (program.initBenchmark) {
  //   console.log(`Initializing benchmark ${program.initBenchmark}`)
  //   BenchInit.generate(program.initBenchmark)
  //   process.exit(0)
  // }

//   if (program.benchmark) {
//       const options = {
//           compile: true,
//           gzip: true,
//           minify: true,
//           verbose: true,
//           assetSizes: true,
//           runBenchmark: [
//               {
//                   browser: Browser.Chrome,
//                   headless: true,
//               }
//           ],
//           transforms: benchmarkDefaults(o3Enabled, replacements),
//       };
//       const report = await Benchmark.run(options, [
//         {
//           name: 'Benchmark',
//           dir: program.benchmark,
//           elmFile: 'V8/Benchmark.elm',
//         }
//       ]);
//       console.log(Reporting.terminal(report));
// //       fs.writeFileSync('./results.markdown', Reporting.markdownTable(result));
//       process.exit(0)
//   }

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
      toolDefaults(o3Enabled, replacements),
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

const { output, optimizeSpeed } = program.opts();
run(program.args[0], { output, optimizeSpeed }).catch((e) => console.error(e));
