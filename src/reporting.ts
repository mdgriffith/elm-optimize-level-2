import * as fs from 'fs';
import * as path from 'path';
import * as Compile from './compile-testcases';
import { Transforms, ObjectUpdate } from './types';
import * as Visit from './visit';

export interface Stat {
  name: string;
  bytes: number;
}

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
  options: Transforms;
};

export const run = async function(runnable: Testcase[]) {
  let results: any[] = [];
  let assets: any = {};

  for (let instance of runnable) {
    await Compile.compileAndTransform(
      instance.dir,
      instance.elmFile,
      instance.options
    );
    assets[instance.name] = assetSizeStats(path.join(instance.dir, 'output'));

    results.push(
      await Visit.benchmark(null, path.join(instance.dir, 'standard.html'))
    );
    results.push(
      await Visit.benchmark(
        'transformed',
        path.join(instance.dir, 'transformed.html')
      )
    );
  }

  return { assets: assets, benchmarks: reformat(results) };
};
