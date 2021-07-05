import * as fs from 'fs';
import * as path from 'path';
import { Transforms, RunTestcaseOptions, InlineLists, BrowserOptions } from '../types';
import * as Visit from './visit';
import chalk from 'chalk';
import * as Transform from '../transform';
import { compileToStringSync } from 'node-elm-compiler';
import * as Post from '../postprocess';
export interface Stat {
  name: string;
  bytes: number;
}

// Asset Sizes
export const assetSizeStats = (dir: string): Stat[] => {
  const stats: Stat[] = [];
  const files = fs.readdirSync(dir);

  for (let i in files) {
    const file = files[i];
    const stat = fs.statSync(path.join(dir, file));
    stats.push({
      name: path.basename(file),
      bytes: stat.size,
    });
  }
  return stats;
};

type Results = {
  assets: { [key: string]: Stat[] };
  benchmarks: any;
};

// Render results as markdown
export const terminal = (report: Results): string => {
  let buffer: string[] = [];

  // List asset sizes
  for (let key in report.assets) {
    buffer.push(chalk.green(key + ' asset overview'));
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
  for (let project in report.benchmarks) {
    buffer.push(chalk.green(project));
    buffer.push('');
    for (let benchKey in report.benchmarks[project]) {
      let bench = report.benchmarks[project][benchKey];
      let base: number | null = null;
      let browser: string | null = null;

      buffer.push(chalk.cyan(benchKey));
      bench.forEach((item: any) => {
        if (item.status.status == 'success') {
          let tag = '';
          let delta: string = '';
          if (item.tag != null) {
            tag = ', ' + item.tag;
          }
          if (base == null) {
            base = item.status.runsPerSecond;
            browser = item.browser;
          } else if (browser != item.browser) {
            base = item.status.runsPerSecond;
            browser = item.browser;
          } else {
            let percentChange = (item.status.runsPerSecond / base) * 100;
            if (percentChange > 105) {
              delta = ' (' + chalk.green(Math.round(percentChange)) + '%)';
            } else if (percentChange < 97) {
              delta = ' (' + chalk.red(Math.round(percentChange)) + '%)';
            } else {
              delta = ' (' + Math.round(percentChange) + '%)';
            }
          }

          const goodness = chalk.grey(
            '(' + Math.round(item.status.goodnessOfFit * 100) + '%*)'
          );

          const label = '   ' + item.browser + tag + goodness;
          const datapoint =
            chalk.yellow(
              humanizeNumber(item.status.runsPerSecond).padStart(10, ' ')
            ) +
            ' runs/sec ' +
            delta;
          buffer.push(label.padEnd(60, ' ') + datapoint);

          if (item.v8) {
            if (item.v8.uncalled.length + item.v8.interpreted.length + item.v8.optimized.length + item.v8.other.length + item.v8.memory.length > 0) {
                buffer.push("")
            }


            if (item.v8.interpreted.length > 0){
                buffer.push("   " + chalk.yellow("Interpreted"))

                buffer.push("       " + item.v8.interpreted.join("\n       ")  )
                buffer.push("")
            }
            if (item.v8.optimized.length > 0){
                buffer.push("   " + chalk.green("Optimized"))

                buffer.push("       " + item.v8.optimized.join("\n       ") )
                buffer.push("")
            }
            if (item.v8.other.length > 0){
                buffer.push("   " + chalk.green("Unknown status"))
                for (const func of item.v8.other){
                     buffer.push("        " + func.name + ", status: " + func.status )
                }
            }

             if (item.v8.uncalled.length > 0){
                buffer.push("   " + chalk.yellow("Uncalled"))
                buffer.push("       " + item.v8.uncalled.join("\n       ") )
                buffer.push("")
            }

             if (item.v8.memory.length > 0){
                buffer.push("   " + chalk.yellow("Memory representation"))
                for (const mem of item.v8.memory){
                     buffer.push("        " + mem.name + "\n" + indent(8, JSON.stringify(mem.representation,null, 4)) )
                }
                buffer.push("")
             }

          }


        } else {
          console.log('FAILURE', item);
        }
      });
      buffer.push('');
      buffer.push('');
    }

    buffer.push('');
    buffer.push('');
  }

  return buffer.join('\n');
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
  for (let project in report.benchmarks) {
    buffer.push('## ' + project);
    buffer.push('');
    for (let benchKey in report.benchmarks[project]) {
      let bench = report.benchmarks[project][benchKey];
      let base: number | null = null;
      let browser: string | null = null;

      buffer.push('-> ' + benchKey);
      bench.forEach((item: any) => {
        if (item.status.status == 'success') {
          let tag = '';
          let delta: string = '';
          if (item.tag != null) {
            tag = ', ' + item.tag;
          }
          if (base == null) {
            base = item.status.runsPerSecond;
            browser = item.browser;
          } else if (browser != item.browser) {
            base = item.status.runsPerSecond;
            browser = item.browser;
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
  }
  buffer.push('');
  buffer.push('');
  return buffer.join('\n');
};

export const markdownTable = (report: Results): string => {
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
  for (let project in report.benchmarks) {
    buffer.push('## ' + project);
    buffer.push('');
    buffer.push(
      '|' +
        [
          'Name'.padEnd(40, ' '),
          'Transformtions'.padEnd(30, ' '),
          'Browser'.padEnd(10, ' '),
          'Ops/Second'.padEnd(14, ' '),
          '% Change'.padEnd(8, ' '),
        ].join('|') +
        '|'
    );
    buffer.push(
      '|' +
        [
          ''.padEnd(40, '-'),
          ''.padEnd(30, '-'),
          ''.padEnd(10, '-'),
          ''.padEnd(14, '-'),
          ''.padEnd(8, '-'),
        ].join('|') +
        '|'
    );

    for (let benchKey in report.benchmarks[project]) {
      let bench = report.benchmarks[project][benchKey];
      let base: number | null = null;
      let browser: string | null = null;

      bench.forEach((item: any) => {
        if (item.status.status == 'success') {
          let delta: string = '';
          if (base == null) {
            base = item.status.runsPerSecond;
            browser = item.browser;
          } else if (browser != item.browser) {
            base = item.status.runsPerSecond;
            browser = item.browser;
          } else {
            let percentChange = (item.status.runsPerSecond / base) * 100;
            delta = ' (' + Math.round(percentChange) + '%)';
          }

          let tag = '';
          if (item.tag != null) {
            tag = item.tag;
          }

          const goodness =
            '(' + Math.round(item.status.goodnessOfFit * 100) + '%*)';

          let line: [string] = [benchKey.padEnd(40, ' ')];
          line.push(tag.padEnd(30, ' '));
          line.push(item.browser.padEnd(10, ' '));
          line.push(
            humanizeNumber(item.status.runsPerSecond).padStart(14, ' ')
          );
          line.push(delta.padStart(8, ' '));
          buffer.push('| ' + line.join('|') + ' |');
        } else {
          console.log('FAILURE', item);
        }
      });
      // buffer.push('');
      // buffer.push('');
    }

    buffer.push('');
    buffer.push('');
  }
  buffer.push('');
  buffer.push('');
  return buffer.join('\n');
};

/*
  Current shape
      { name: 'Core benchmarks'
      , browser: 'chrome
      , tag: 'transformed'
      , results:  [
          name: 'sum 1000 entities in a list',
          tags: ['Basics'],
          status: {
              goodnessOfFit: 0.9924404521135742,
              runsPerSecond: 72127,
              status: 'success'
          }
          }
          {
          name: '1000 record updates',
          tags: ['Basics'],
          status: {
              goodnessOfFit: 0.9955251757469299,
              runsPerSecond: 2433,
              status: 'success'
          }
          }
      ]
  
  
  NewShape
      { 'Elm Core':
        [ {'sum 1000 entities in a list': 
            [ { browser: 'chrome'
              , tag: 'transformed'
              , benchTags: ['Basics' ]
              , status: {
                    goodnessOfFit: 0.9955251757469299,
                    runsPerSecond: 2433,
                    status: 'success'
                  }
              }
            ]
          }
        ]
      }
  
  
  */
export function reformat(results: any): any {
  let project: string = 'Unknown';
  let reformed: any = {};
  results.forEach((item: any) => {
    project = item.name;
    item.results.forEach((result: any) => {
      const newItem = {
        browser: item.browser,
        tag: item.tag,
        benchTags: result.tags,
        status: result.status,
        v8: reformatV8(item.v8)
      };
      if (project in reformed) {
        if (result.name in reformed[project]) {
          reformed[project][result.name].push(newItem);
        } else {
          reformed[project][result.name] = [newItem];
        }
      } else {
        reformed[project] = {};
        reformed[project][result.name] = [newItem];
      }
    });

    for (const [key, value] of Object.entries(reformed[project])) {
      reformed[project][key].sort(sortResults);
    }
  });
  return reformed;
}



function reformatV8(val: any){
    console.log(val)
    let gathered = {uncalled: [], optimized: [], interpreted: [], other: [], memory: []}
    if (val == null) {
        return gathered
    }
    for (const key in val.fns){
        if (key.startsWith("$elm_explorations$benchmark$Benchmark$") || key == "_Benchmark_operation"){
            continue
        }
        const status: string = val.fns[key].status
        if (status in gathered) {
            gathered[status].push(key)
        } else {
            gathered.other.push( {status: status, name: key} )
        }
    }
    for (const key in val.memory){
        gathered.memory.push({name: key, representation: val.memory[key] })
    }
    return gathered
}


function sortResults(a: any, b: any) {
  if (a.browser == b.browser) {
    if (a.tag == null) {
      return -1;
    } else if (b.tag == null) {
      return 1;
    } else if (a.tag == 'final') {
      return -1;
    } else if (b.tag == 'final') {
      return 1;
    } else {
      return a.tag > b.tag ? 1 : -1;
    }
  } else {
    return a.browser < b.browser ? 1 : -1;
  }
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
export const run = async function (
  options: RunTestcaseOptions,
  runnable: Testcase[]
) {
  let results: any[] = [];
  let assets: any = {};

  for (let instance of runnable) {
    const source: string = compileToStringSync([instance.elmFile], {
      output: 'output/elm.opt.js',
      cwd: instance.dir,
      optimize: true,
//       processOpts:
//         // ignore stdout
//         {
//           stdio: ['pipe', 'pipe', 'pipe'],
//         },
    });

    const transformed = await Transform.transform(
      instance.dir,
      source,
      path.join(instance.dir, instance.elmFile),
      options.verbose,
      options.transforms
    );
    fs.writeFileSync(path.join(instance.dir, 'output', 'elm.opt.js'), source);
    fs.writeFileSync(
      path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
      transformed
    );
    if (options.minify) {
      await Post.minify(
        path.join(instance.dir, 'output', 'elm.opt.js'),
        path.join(instance.dir, 'output', 'elm.opt.min.js')
      );
      await Post.minify(
        path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js')
      );
    }
    if (options.minify && options.gzip) {
      await Post.gzip(
        path.join(instance.dir, 'output', 'elm.opt.min.js'),
        path.join(instance.dir, 'output', 'elm.opt.min.js.gz')
      );
      await Post.gzip(
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js'),
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js.gz')
      );
    }

    if (options.assetSizes) {
      assets[instance.name] = assetSizeStats(path.join(instance.dir, 'output'));
    }

    for (let browser of options.runBenchmark) {
      results.push(
            await prepare_boilerplate(
                  browser,
                  instance.name,
                  null,
                  instance.dir,
                  source
                )
                );

      results.push(
            await prepare_boilerplate(
                  browser,
                  instance.name,
                  'final',
                  instance.dir,
                  transformed
                )
                );
      }
  }
  console.log(results)

  return { assets: assets, benchmarks: reformat(results) };
};





const emptyOpts: Transforms = {
  replaceVDomNode: false,
  variantShapes: false,
  inlineNumberToString: false,
  inlineFunctions: false,
  inlineEquality: false,
  listLiterals: false,
  passUnwrappedFunctions: false,
  arrowFns: false,
  shorthandObjectLiterals: false,
  objectUpdate: false,
  unusedValues: false,
  replaceListFunctions: false,
  replaceStringFunctions: false,
  v8Analysis: false,
  replacements: null
};

const breakdown = function (
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
      include: options.replaceVDomNode,
      name: 'virtualDom corrections',
      options: Object.assign({}, emptyOpts, { replaceVDomNode: true }),
    },
    {
      include: options.inlineFunctions,
      name: 'inline functions',
      options: Object.assign({}, emptyOpts, { inlineFunctions: true }),
    },
    {
      include: options.passUnwrappedFunctions,
      name: 'pass unwrapped functions',
      options: Object.assign({}, emptyOpts, { passUnwrappedFunctions: true }),
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
      include: options.objectUpdate != false,
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
export const runWithBreakdown = async function (
  options: RunTestcaseOptions,
  runnable: Testcase[]
) {
  let results: any[] = [];
  let assets: any = {};

  for (let instance of runnable) {
    const source: string = compileToStringSync([instance.elmFile], {
      output: 'output/elm.opt.js',
      cwd: instance.dir,
      optimize: true,
      processOpts:
        // ignore stdout
        {
          stdio: ['pipe', 'ignore', 'pipe'],
        },
    });
    fs.writeFileSync(path.join(instance.dir, 'output', 'elm.opt.js'), source);

    const final = await Transform.transform(
      instance.dir,
      source,
      path.join(instance.dir, instance.elmFile),
      options.verbose,
      options.transforms
    );

    fs.writeFileSync(
      path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
      final
    );

    for (let browser of options.runBenchmark) {
      results.push(
        await Visit.benchmark(
          browser,
          instance.name,
          null,
          path.join(instance.dir, 'standard.html')
        )
      );
      results.push(
        await Visit.benchmark(
          browser,
          instance.name,
          'final',
          path.join(instance.dir, 'transformed.html')
        )
      );
    }


    let steps = breakdown(options.transforms);
    for (let i in steps) {
      const intermediate = await Transform.transform(
        instance.dir,
        source,
        path.join(instance.dir, instance.elmFile),
        options.verbose,
        steps[i].options
      );
      fs.writeFileSync(
        path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
        intermediate
      );

      const dashedLabel = steps[i].name.replace(unallowedChars, '-');

      if (options.minify) {
        await Post.minify(
          path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
          path.join(instance.dir, 'output', `elm.opt.${dashedLabel}.min.js`)
        );
      }
      if (options.minify && options.gzip) {
        await Post.gzip(
          path.join(instance.dir, 'output', `elm.opt.${dashedLabel}.min.js`),
          path.join(instance.dir, 'output', `elm.opt.${dashedLabel}.min.js.gz`)
        );
      }

      for (let browser of options.runBenchmark) {
        results.push(
          await Visit.benchmark(
            browser,
            instance.name,
            steps[i].name,
            path.join(instance.dir, 'transformed.html')
          )
        );
      }
    }

    fs.writeFileSync(
      path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
      final
    );

    if (options.minify) {
      await Post.minify(
        path.join(instance.dir, 'output', 'elm.opt.js'),
        path.join(instance.dir, 'output', 'elm.opt.min.js')
      );
      await Post.minify(
        path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js')
      );
    }
    if (options.minify && options.gzip) {
      await Post.gzip(
        path.join(instance.dir, 'output', 'elm.opt.min.js'),
        path.join(instance.dir, 'output', 'elm.opt.min.js.gz')
      );
      await Post.gzip(
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js'),
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js.gz')
      );
    }
    if (options.assetSizes) {
      assets[instance.name] = assetSizeStats(path.join(instance.dir, 'output'));
    }
  }

  return { assets: assets, benchmarks: reformat(results) };
};

const unallowedChars = /[^A-Za-z0-9]/g;

// Run a list of test cases
// But we'll knock out each transformation individually to see if that has an effect
// We'll also run a final case with all the requested transformations
export const runWithKnockout = async function (
  options: RunTestcaseOptions,
  runnable: Testcase[]
) {
  let results: any[] = [];
  let assets: any = {};

  for (let instance of runnable) {
    const source: string = compileToStringSync([instance.elmFile], {
      output: 'output/elm.opt.js',
      cwd: instance.dir,
      optimize: true,
      processOpts:
        // ignore stdout
        {
          stdio: ['pipe', 'ignore', 'pipe'],
        },
    });

    fs.writeFileSync(path.join(instance.dir, 'output', 'elm.opt.js'), source);

    const final = await Transform.transform(
      instance.dir,
      source,
      path.join(instance.dir, instance.elmFile),
      options.verbose,
      options.transforms
    );

    fs.writeFileSync(
      path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
      final
    );

    for (let browser of options.runBenchmark) {
      results.push(
        await Visit.benchmark(
          browser,
          instance.name,
          null,
          path.join(instance.dir, 'standard.html')
        )
      );
      results.push(
        await Visit.benchmark(
          browser,
          instance.name,
          'final',
          path.join(instance.dir, 'transformed.html')
        )
      );
    }

    let steps = knockout(options.transforms);
    for (let i in steps) {
      const intermediate = await Transform.transform(
        instance.dir,
        source,
        path.join(instance.dir, instance.elmFile),
        options.verbose,
        steps[i].options
      );
      fs.writeFileSync(
        path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
        intermediate
      );

      const dashedLabel = steps[i].name.replace(unallowedChars, '-');

      if (options.minify) {
        await Post.minify(
          path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
          path.join(
            instance.dir,
            'output',
            `elm.opt.minus-${dashedLabel}.min.js`
          )
        );
      }
      if (options.minify && options.gzip) {
        await Post.gzip(
          path.join(
            instance.dir,
            'output',
            `elm.opt.minus-${dashedLabel}.min.js`
          ),
          path.join(
            instance.dir,
            'output',
            `elm.opt.minus-${dashedLabel}.min.js.gz`
          )
        );
      }

      for (let browser of options.runBenchmark) {
        results.push(
          await Visit.benchmark(
            browser,
            instance.name,
            steps[i].name,
            path.join(instance.dir, 'transformed.html')
          )
        );
      }
    }

    fs.writeFileSync(
      path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
      final
    );
    if (options.minify) {
      await Post.minify(
        path.join(instance.dir, 'output', 'elm.opt.js'),
        path.join(instance.dir, 'output', 'elm.opt.min.js')
      );
      await Post.minify(
        path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js')
      );
    }
    if (options.minify && options.gzip) {
      await Post.gzip(
        path.join(instance.dir, 'output', 'elm.opt.min.js'),
        path.join(instance.dir, 'output', 'elm.opt.min.js.gz')
      );
      await Post.gzip(
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js'),
        path.join(instance.dir, 'output', 'elm.opt.transformed.min.js.gz')
      );
    }

    assets[instance.name] = assetSizeStats(path.join(instance.dir, 'output'));
  }

  return { assets: assets, benchmarks: reformat(results) };
};

const knockout = function (
  options: Transforms
): { name: string; options: Transforms }[] {
  let transforms: { name: string; options: Transforms }[] = [];

  let full: { name: string; include: boolean; options: Transforms }[] = [
    {
      include: options.variantShapes,
      name: 'without variant shapes',
      options: Object.assign({}, options, { variantShapes: false }),
    },
    {
      include: options.replaceVDomNode,
      name: 'without virtualDom corrections',
      options: Object.assign({}, options, { replaceVDomNode: false }),
    },
    {
      include: options.inlineFunctions,
      name: 'without inline functions',
      options: Object.assign({}, options, { inlineFunctions: false }),
    },
    {
      include: options.passUnwrappedFunctions,
      name: 'without passing unwrapped functions',
      options: Object.assign({}, options, { passUnwrappedFunctions: false }),
    },
    {
      include: options.listLiterals != false,
      name: 'without inline list literals',
      options: Object.assign({}, options, {
        listLiterals: false,
      }),
    },
    {
      include: options.inlineEquality,
      name: 'without inline equality',
      options: Object.assign({}, options, { inlineEquality: false }),
    },
    {
      include: options.inlineNumberToString,
      name: 'without inline number-to-string',
      options: Object.assign({}, options, { inlineNumberToString: false }),
    },
    {
      include: options.arrowFns,
      name: 'without arrowize functions',
      options: Object.assign({}, options, { arrowFns: false }),
    },
    {
      include: options.objectUpdate != false,
      name: 'without object update',
      options: Object.assign({}, options, {
        objectUpdate: false,
      }),
    },
    {
      include: options.unusedValues,
      name: 'without thorough removal of unused values',
      options: Object.assign({}, options, {
        unusedValues: false,
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



// BOILERPLATE MANAGEMENT



const htmlTemplate = `
<html>
  <head>
    <meta charset="UTF-8" />
    <title>V8 Benchmark</title>
    <script src="elm.opt.transformed.js"></script>
  </head>
  <body>
    <div id="myapp"></div>
    <script>
      function start() {
        var app = Elm.V8.Benchmark.init({
          node: document.getElementById('myapp'),
        });
        window.results = [];
        app.ports.reportResults.subscribe(function (message) {
          window.results = message;
          document.title = 'done';
        });
      }
    </script>
    <script src="v8-browser.js" onload="waitForV8(start)"></script>
  </body>
</html>
`


/*

    elmFile -> the elm file that has the harness for running the benchmark


    Steps
    1. compile elmFile into js in elm-stuff/elm-optimize-level-2
    2. copy htmlTemplate into elm-stuff if it doesn't exist.  (names are hardcoded)
    3. Visit.benchmark


*/


async function prepare_boilerplate(
    browser: BrowserOptions,
    name:string,
    tag: string | null,
    dir: string,
    js: string
    ) {

    const base = path.join(dir, 'elm-stuff', 'elm-optimize-level-2')
    const htmlPath =  path.join(base, 'run.html')

    fs.mkdirSync(base, {recursive: true})
    fs.writeFileSync(htmlPath, htmlTemplate)
    fs.writeFileSync(path.join(base, 'elm.opt.transformed.js'), js)
    await Post.includeV8Helpers(path.join(base))
    return await Visit.benchmark(
          browser,
          name,
          tag,
          htmlPath
        )
}



function indent(level, str) {
    return " ".repeat(level) + str.split("\n").join("\n" + " ".repeat(level))
}