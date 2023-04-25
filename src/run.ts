import * as path from 'path';
import * as Transform from './transform';
import { toolDefaults } from './types';
import { compileToStringSync } from 'node-elm-compiler';
import * as fs from 'fs';
// import * as BenchInit from './benchmark/init'
// import * as Benchmark from './benchmark/benchmark';
// import * as Reporting from './benchmark/reporting';

export async function run(
  options: {
    inputFilePath: string[];
    outputFilePath: string;
    optimizeSpeed: boolean;
    verbose: boolean;
    processOpts: { stdio: [string, string, string] };
  },
  helpInformation: string,
  log: (message?: any, ...optionalParams: any[]) => void
) {
  if (!options.outputFilePath) {
    throw new Error('Missing an output file path');
  }

  const dirname = process.cwd();
  let jsSource: string = '';
  let elmFilePath = undefined;

  const replacements = null;
  let inputFilePaths = options.inputFilePath;
  if (inputFilePaths[0] == 'make') {
    inputFilePaths.shift();
  }

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

  if (inputFilePaths.length === 1 && inputFilePaths[0].endsWith('.js')) {
    jsSource = fs.readFileSync(inputFilePaths[0], 'utf8');
    log('Optimizing existing JS...');
  } else if (
    inputFilePaths.every((inputFilePath) => inputFilePath.endsWith('.elm'))
  ) {
    elmFilePath = inputFilePaths;
    jsSource = compileToStringSync(inputFilePaths, {
      output: 'output/elm.opt.js',
      cwd: dirname,
      optimize: true,
      processOpts: options.processOpts,
    });
    if (jsSource != '') {
      log('Compiled, optimizing JS...');
    } else {
      throw new Error(
        'An error occurred when compiling your application with Elm 0.19.1.'
      );
    }
  } else {
    throw new Error(
      `Please provide a path to an Elm file.\n${helpInformation}`.trim()
    );
  }

  if (jsSource == '') {
    throw new Error('Target JS file is empty.');
  }

  const transformed = await Transform.transform(
    dirname,
    jsSource,
    elmFilePath,
    options.verbose,
    toolDefaults(o3Enabled, replacements)
  );

  // Make sure all the folders up to the output file exist, if not create them.
  // This mirrors elm make behavior.
  const outputDirectory = path.dirname(options.outputFilePath);
  if (
    inputFilePaths.every(
      (inputFilePath) => path.dirname(inputFilePath) !== outputDirectory
    ) &&
    !fs.existsSync(outputDirectory)
  ) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  fs.writeFileSync(options.outputFilePath, transformed);

  log('Success!');
  log('');
  if (inputFilePaths.length === 1) {
    const fileName = path.basename(inputFilePaths[0]);
    log(`   ${fileName} ───> ${options.outputFilePath}`);
  } else {
    const maxLength = inputFilePaths
      .map((inputFilePath) => path.basename(inputFilePath).length)
      .reduce((max, len) => Math.max(max, len), 0);
    const fill = maxLength + 4;
    let isFirst = true;
    for (const inputFilePath of inputFilePaths) {
      const fileName = path.basename(inputFilePath) + ' ';
      if (isFirst) {
        log(`   ${fileName.padEnd(fill, '-')}+──> ${options.outputFilePath}`);
        isFirst = false;
      } else {
        log(`   ${fileName.padEnd(fill, '-')}+`);
      }
    }
  }
  log('');
  return options.outputFilePath;
}
