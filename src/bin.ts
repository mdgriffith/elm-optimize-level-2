import program from 'commander';
import chalk from 'chalk';
import { run } from './run';
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
  .usage('[options] [src/Main.elm>]')
  .option('--output <output>', 'the javascript file to create.', 'elm.js')
  .option(
    '-O3, --optimize-speed',
    'Enable optimizations that likely increases asset size',
    false
  )
  .option(
    '--verbose',
    'Show more error details, useful to provide better bug reports',
    false
  )
  // .option('--init-benchmark <dir>', 'Generate some files to help run benchmarks')
  // .option('--benchmark <dir>', 'Run the benchmark in the given directory.')
  // .option('--replacements <dir>', 'Replace stuff')
  .parse(process.argv);

const { output, optimizeSpeed, verbose } = program.opts();
run(
  {
    inputFilePath: program.args,
    outputFilePath: output,
    optimizeSpeed,
    verbose,
    processOpts: { stdio: ['inherit', 'ignore', 'inherit'] },
  },
  program.helpInformation(),
  console.log.bind(console)
).catch((e) => {
  if (verbose) {
    console.error(e);
  } else {
    console.error(e.toString());
  }
  process.exit(1);
});
