import * as fs from 'fs';
import * as path from 'path';
import * as Compile from './compile-testcases';
import {
  Browser,
  Transforms,
  ObjectUpdate,
  RunTestcaseOptions,
  InlineLists,
} from './types';
import * as Visit from './visit';

export interface Stat {
  name: string;
  bytes: number;
}

// Asset Sizes
export const assetSizeStats = (dir: string): Stat[] => {
  let stats: Stat[] = [];
  fs.readdir(dir, function(err, files) {
    if (err) {
      console.log('Error getting directory information.');
    } else {
      files.forEach(function(file) {
        const stat = fs.statSync(path.join(dir, file));
        stats.push({
          name: path.basename(file),
          bytes: stat.size,
        });
      });
    }
  });
  return stats;
};

type Results = {
  assets: { [key: string]: Stat[] };
  benchmarks: any;
};

// Render results as markdown
export const markdown = (report: Results): string => {
  let buffer: string[] = [];

  buffer.push('# Benchmark results');
  buffer.push('');

  // List asset sizes
  for (let key in report.assets) {
    buffer.push('## ' + key + ' asset overview');
    buffer.push('');
    report.assets[key].forEach((item: Stat) => {
      buffer.push(
        '    ' +
          item.name.padEnd(40, ' ') +
          '' +
          humanizeNumber(
            roundToDecimal(1, item.bytes / Math.pow(2, 10))
          ).padStart(10, ' ') +
          'kb'
      );
    });
    buffer.push('');
  }
  buffer.push('');

  // List benchmarks
  for (let key in report.benchmarks) {
    buffer.push('## ' + key);
    buffer.push('');
    let base: number | null = null;
    report.benchmarks[key].forEach((item: any) => {
      if (item.status.status == 'success') {
        let tag = '';
        let delta: string = '';
        if (item.tag != null) {
          tag = ', ' + item.tag;
        }
        if (base == null) {
          base = item.status.runsPerSecond;
        } else {
          let percentChange = (item.status.runsPerSecond / base) * 100;
          delta = ' (' + Math.round(percentChange) + '%)';
        }

        const goodness =
          '(' + Math.round(item.status.goodnessOfFit * 100) + '%*)';

        const label = '   ' + item.browser + tag + goodness;
        const datapoint =
          humanizeNumber(item.status.runsPerSecond).padStart(10, ' ') +
          ' runs/sec ' +
          delta;
        buffer.push(label.padEnd(40, ' ') + datapoint);
      } else {
        console.log('FAILURE', item);
      }
    });
    buffer.push('');
    buffer.push('');
  }
  buffer.push('');
  buffer.push('');
  return buffer.join('\n');
};

/*
  Current shape
      { browser: 'chrome
      , tag: 'transformed'
      , results:  [
          name: 'sum 1000 entities in a list',
          status: {
              goodnessOfFit: 0.9924404521135742,
              runsPerSecond: 72127,
              status: 'success'
          }
          }
          {
          name: '1000 record updates',
          status: {
              goodnessOfFit: 0.9955251757469299,
              runsPerSecond: 2433,
              status: 'success'
          }
          }
      ]
  
  
  NewShape
      { test: 'sum 1000 entities in a list'
      , results: 
          [ { browser: 'chrome'
            , tag: 'transformed'
            , status: {
                  goodnessOfFit: 0.9955251757469299,
                  runsPerSecond: 2433,
                  status: 'success'
                }
            }
          ]
      }
  
  */
export function reformat(results: any): any {
  let reformed: any = {};
  results.forEach((item: any) => {
    item.results.forEach((result: any) => {
      const newItem = {
        browser: item.browser,
        tag: item.tag,
        status: result.status,
      };
      if (result.name in reformed) {
        reformed[result.name].push(newItem);
      } else {
        reformed[result.name] = [newItem];
      }
    });
  });
  return reformed;
}

// adds commas to the number so its easier to read.
function humanizeNumber(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function roundToDecimal(level: number, num: number): number {
  let factor: number = Math.pow(10, level);
  return Math.round(num * factor) / factor;
}

type Testcase = {
  name: string;
  dir: string;
  elmFile: string;
};

// Run a list of testcases
export const run = async function(
  options: RunTestcaseOptions,
  runnable: Testcase[]
) {
  let results: any[] = [];
  let assets: any = {};

  for (let instance of runnable) {
    await Compile.compileAndTransform(
      instance.dir,
      instance.elmFile,
      {
        compile: options.compile,
        minify: options.minify,
        gzip: options.gzip,
      },
      options.transforms
    );
    if (options.assetSizes) {
      assets[instance.name] = assetSizeStats(path.join(instance.dir, 'output'));
    }

    for (let browser of options.runBenchmark) {
      results.push(
        await Visit.benchmark(
          browser,
          null,
          path.join(instance.dir, 'standard.html')
        )
      );
      results.push(
        await Visit.benchmark(
          browser,
          'transformed',
          path.join(instance.dir, 'transformed.html')
        )
      );
    }
  }

  return { assets: assets, benchmarks: reformat(results) };
};

const emptyOpts: Transforms = {
  prepack: false,
  replaceVDomNode: false,
  variantShapes: false,
  inlineNumberToString: false,
  inlineFunctions: false,
  inlineEquality: false,
  listLiterals: null,
  passUnwrappedFunctions: false,
  arrowFns: false,
  objectUpdate: null,
  unusedValues: false,
};

const breakdown = function(
  options: Transforms
): { name: string; options: Transforms }[] {
  let transforms: { name: string; options: Transforms }[] = [];

  let full: { name: string; include: boolean; options: Transforms }[] = [
    {
      include: options.variantShapes,
      name: 'variant shapes',
      options: Object.assign({}, emptyOpts, { variantShapes: true }),
    },
    {
      include: options.inlineFunctions,
      name: 'inline functions',
      options: Object.assign({}, emptyOpts, { inlineFunctions: true }),
    },
    {
      include: options.listLiterals == InlineLists.AsObjects,
      name: 'inline list literals as Objects',
      options: Object.assign({}, emptyOpts, {
        listLiterals: options.listLiterals,
      }),
    },
    {
      include: options.listLiterals == InlineLists.AsCons,
      name: 'inline list literals as Cons',
      options: Object.assign({}, emptyOpts, {
        listLiterals: options.listLiterals,
      }),
    },
    {
      include: options.inlineEquality,
      name: 'inline equality',
      options: Object.assign({}, emptyOpts, { inlineEquality: true }),
    },
    {
      include: options.inlineNumberToString,
      name: 'inline number-to-string',
      options: Object.assign({}, emptyOpts, { inlineNumberToString: true }),
    },
    {
      include: options.arrowFns,
      name: 'arrowize functions',
      options: Object.assign({}, emptyOpts, { arrowFns: true }),
    },
    {
      include: options.objectUpdate != null,
      name: 'object update',
      options: Object.assign({}, emptyOpts, {
        objectUpdate: options.objectUpdate,
      }),
    },
    {
      include: options.unusedValues,
      name: 'Thorough removal of unused values',
      options: Object.assign({}, emptyOpts, {
        unusedValues: options.unusedValues,
      }),
    },
  ];

  for (let i in full) {
    if (full[i].include) {
      transforms.push(full[i]);
    }
  }

  return transforms;
};

// Run a list of test cases
// But we'll run each transformation individually to see what the breakdown is.
// We'll also run a final case with all the requested transformations
export const runWithBreakdown = async function(
  options: RunTestcaseOptions,
  runnable: Testcase[]
) {
  let results: any[] = [];
  let assets: any = {};

  const opts = {
    browser: Browser.Chrome,
    headless: false,
  };

  for (let instance of runnable) {
    await Compile.compileAndTransform(
      instance.dir,
      instance.elmFile,
      {
        compile: options.compile,
        minify: options.minify,
        gzip: options.gzip,
      },
      options.transforms
    );
    assets[instance.name] = assetSizeStats(path.join(instance.dir, 'output'));

    for (let browser of options.runBenchmark) {
      results.push(
        await Visit.benchmark(
          browser,
          null,
          path.join(instance.dir, 'standard.html')
        )
      );
      results.push(
        await Visit.benchmark(
          browser,
          'transformed',
          path.join(instance.dir, 'transformed.html')
        )
      );
    }

    let steps = breakdown(options.transforms);
    for (let i in steps) {
      console.log('running', steps[i]);

      await Compile.compileAndTransform(
        instance.dir,
        instance.elmFile,
        {
          compile: false,
          minify: false,
          gzip: false,
        },
        steps[i].options
      );
      // TODO: figure out how to capture asset sizes for the breakdown
      // assets[instance.name] = assetSizeStats(path.join(instance.dir, 'output'));

      for (let browser of options.runBenchmark) {
        results.push(
          await Visit.benchmark(
            browser,
            steps[i].name,
            path.join(instance.dir, 'transformed.html')
          )
        );
      }
    }
  }

  return { assets: assets, benchmarks: reformat(results) };
};
