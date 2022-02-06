import * as fs from 'fs';
import * as path from 'path';
import { Transforms, RunTestcaseOptions, InlineLists, BrowserOptions, Browser, emptyOpts } from '../types';
import * as Visit from './visit';
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

type BenchRunFormatted = {
    [key: string]:
        {[key: string]:
            { browser: Browser
            , tag: string | null
            , benchTags: string[]
            , status: {runsPerSecond: number, goodnessOfFit: number}
            , v8: V8FormattedData
            }
         }
}

export function reformat(results: Visit.BenchRun[]): any {
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

type V8FormattedData = {
    uncalled: string[],
    optimized: string[],
    interpreted: string[],
    other: {status: string, name: string}[]
    memory: {name: string, representation: string[]}[]
}

function reformatV8(val: Visit.V8Data | null): V8FormattedData {
    let gathered: V8FormattedData = {uncalled: [], optimized: [], interpreted: [], other: [], memory: []}
    if (val == null) {
        return gathered
    }
    for (const key in val.fns){
        if (key.startsWith("$elm_explorations$benchmark$Benchmark$") || key == "_Benchmark_operation"){
            continue
        }
        const status: string = val.fns[key].status

        switch(status) {
           case 'uncalled': {
              gathered.uncalled.push(key)
              break;
           }
           case 'optimized': {
              gathered.optimized.push(key)
              break;
           }
           case 'interpreted': {
              gathered.interpreted.push(key)
              break;
           }
           default: {
              gathered.other.push( {status: status, name: key} )
              break;
           }
        }

    }
    for (const key in val.memory){
        gathered.memory.push({name: key, representation: v8MemoryDescription(val.memory[key]) })
    }
    return gathered
}

function v8MemoryDescription(representation: Visit.Memory): string[] {
    let descriptors = []
    for (const key in representation){
        if (representation[key]) {
            descriptors.push(key)
        }
    }
    return descriptors
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
    removeFilesFromDir(path.join(instance.dir, 'output'))
    fs.writeFileSync(
      path.join(instance.dir, 'output', '.keep'),
      ""
    );
    fs.writeFileSync(path.join(instance.dir, 'output', 'elm.opt.js'), source);
    fs.writeFileSync(
      path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
      transformed
    );

    await Post.process(
        path.join(instance.dir, 'output', 'elm.opt.js'),
        { minify: options.minify
        , gzip: options.gzip
        }
    )

    await Post.process(
        path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
        { minify: options.minify
        , gzip: options.gzip
        }
    )

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
  return { assets: assets, benchmarks: reformat(results) };
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
    await Post.process(
        path.join(instance.dir, 'output', 'elm.opt.js'),
        { minify: options.minify
        , gzip: options.gzip
        }
    )
    const transformed = await Transform.transform(
      instance.dir,
      source,
      path.join(instance.dir, instance.elmFile),
      options.verbose,
      options.transforms
    );

    fs.writeFileSync(
      path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
      transformed
    );
    await Post.process(
        path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
        { minify: options.minify
        , gzip: options.gzip
        }
    )

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


    let steps = breakdown(options.transforms);
    for (let i in steps) {
      const intermediate = await Transform.transform(
        instance.dir,
        source,
        path.join(instance.dir, instance.elmFile),
        options.verbose,
        steps[i].options
      );
      const dashedLabel = steps[i].name.replace(unallowedChars, '-');
      fs.writeFileSync(
        path.join(instance.dir, 'output', `elm.opt.${dashedLabel}.js`),
        intermediate
      );

      await Post.process(
        path.join(instance.dir, 'output', `elm.opt.${dashedLabel}.js`),
        { minify: options.minify
        , gzip: options.gzip
        }
      )

      for (let browser of options.runBenchmark) {
        results.push(
            await prepare_boilerplate(
                  browser,
                  instance.name,
                  steps[i].name,
                  instance.dir,
                  intermediate
                )
                );
      }
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

    const transformed = await Transform.transform(
      instance.dir,
      source,
      path.join(instance.dir, instance.elmFile),
      options.verbose,
      options.transforms
    );

    removeFilesFromDir(path.join(instance.dir, 'output'))

    fs.writeFileSync(
      path.join(instance.dir, 'output', '.keep'),
      ""
    );
    fs.writeFileSync(
      path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
      transformed
    );
    await Post.process(
        path.join(instance.dir, 'output', 'elm.opt.transformed.js'),
        { minify: options.minify
        , gzip: options.gzip
        }
    )

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

    let steps = knockout(options.transforms);
    for (let i in steps) {
      const intermediate = await Transform.transform(
        instance.dir,
        source,
        path.join(instance.dir, instance.elmFile),
        options.verbose,
        steps[i].options
      );
      const dashedLabel = steps[i].name.replace(unallowedChars, '-');
      fs.writeFileSync(
        path.join(instance.dir, 'output', `elm.opt.minus-${dashedLabel}.js`),
        intermediate
      );
      await Post.process(
        path.join(instance.dir, 'output', `elm.opt.minus-${dashedLabel}.js`),
        { minify: options.minify
        , gzip: options.gzip
        }
      )

      for (let browser of options.runBenchmark) {
        results.push(
            await prepare_boilerplate(
                  browser,
                  instance.name,
                  steps[i].name,
                  instance.dir,
                  intermediate
                )
                );
      }
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
      window.memoryCheckReady = false
      window.memory = {}
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

const jsTemplate = `const { Elm } = require("./elm.opt.transformed.js")
globalThis["v8"] = require('./v8-node.js');
globalThis["window"] = {memoryCheckReady: false, memory: {}}
const main = () =>
  new Promise((resolve, reject) => {
    const app = Elm.V8.Benchmark.init({ flags: {  } })
    app.ports.reportResults.subscribe(resolve)
  })
    .then((report) => {
        console.log(JSON.stringify(report))
    })

main()`



/*

    elmFile -> the elm file that has the harness for running the benchmark


    Steps
    1. compile elmFile into js in elm-stuff/elm-optimize-level-2
    2. copy htmlTemplate into elm-stuff if it doesn't exist.  (names are hardcoded)
    3. Visit.benchmark


*/


function removeFilesFromDir(dir: string){
    const files = fs.readdirSync(dir)
    for (const file of files) {
        fs.unlinkSync(path.join(dir, file));
    }
}

async function prepare_boilerplate(
    browser: BrowserOptions,
    name:string,
    tag: string | null,
    dir: string,
    js: string
    ) {

    const base = path.join(dir, 'elm-stuff', 'elm-optimize-level-2')
    const htmlPath =  path.join(base, 'run.html')
    const jsPath =  path.join(base, 'run.js')

    const nonNulltag = tag ? '.' + tag.replace(unallowedChars, '-') : ''
    const jitLogPath = path.join(dir, 'output', `elm.opt${nonNulltag}.jitlog`)

    fs.mkdirSync(base, {recursive: true})
    fs.writeFileSync(htmlPath, htmlTemplate)
    fs.writeFileSync(jsPath, jsTemplate)
    fs.writeFileSync(path.join(base, 'elm.opt.transformed.js'), js)
    await Post.includeV8Helpers(path.join(base))
    return await Visit.benchmark(
          browser,
          name,
          tag,
          htmlPath,
          jsPath,
          jitLogPath
        )

}

