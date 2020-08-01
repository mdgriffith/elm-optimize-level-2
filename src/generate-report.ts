/*

Compiles all the test cases and runs them via webdriver to summarize the results


*/

import * as compile from './compile-testcases';
import * as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as path from 'path';
import * as fs from 'fs';

const visitBenchmark = async (tag: string | null, file: string) => {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeOptions(/* ... */)
    // .setFirefoxOptions(/* ... */)
    .build();

  // docs for selenium:
  // https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html
  let result = [];
  try {
    await driver.get('file://' + path.resolve(file));
    await driver.wait(webdriver.until.titleIs('done'), 60000);
    result = await driver.executeScript('return window.results;');
  } finally {
    await driver.quit();
  }
  return { tag: tag, browser: 'chrome', results: result };
};

export interface Stat {
  name: string;
  bytes: number;
}

const assetSizeStats = (dir: string): Stat[] => {
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

const run = async function() {
  compile.compileAndTransform('testcases/simple', 'Main.elm', {
    prepack: true,
  });
  compile.compileAndTransform('testcases/bench', 'Main.elm', {
    prepack: true,
  });

  const assets = {
    bench: assetSizeStats('testcases/bench/output'),
    simple: assetSizeStats('testcases/simple/output'),
  };

  let results = [];
  results.push(await visitBenchmark(null, 'testcases/bench/standard.html'));
  results.push(
    await visitBenchmark('transformed', 'testcases/bench/transformed.html')
  );

  console.log(markdownNewResults(assets, reformat(results)));
};

const markdownResults = (results: any): string => {
  let buffer: string[] = [];
  results.forEach((item: any) => {
    buffer.push('## ' + item.tag);
    buffer.push('*' + item.browser + '*');
    buffer.push('');
    item.results.forEach((result: any) => {
      buffer.push('    **' + result.name + '**');

      if (result.status.status == 'success') {
        buffer.push(
          '   ' +
            humanizeNumber(result.status.runsPerSecond).padStart(10, ' ') +
            ' runs/sec (' +
            Math.round(result.status.goodnessOfFit * 100) +
            '%*)'
        );
      } else {
        buffer.push('   problem running benchmark');
      }

      console.log(result);
    });
    buffer.push('');
    buffer.push('');
  });
  buffer.push('');
  buffer.push('');
  return buffer.join('\n');
};

const markdownNewResults = (
  assets: { [key: string]: Stat[] },
  results: any
): string => {
  let buffer: string[] = [];

  buffer.push('# Benchmark results');
  buffer.push('');

  // List asset sizes
  for (let key in assets) {
    buffer.push('## ' + key + ' asset overview');
    buffer.push('');
    assets[key].forEach((item: Stat) => {
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
  for (let key in results) {
    buffer.push('## ' + key);
    buffer.push('');
    let base: number | null = null;
    results[key].forEach((item: any) => {
      let tag = '';
      if (item.tag != null) {
        tag = ', ' + item.tag;
      }
      if (base == null) {
        base = item.status.runsPerSecond;
      } else {
        let percentChange = (item.status.runsPerSecond / base) * 100;
        tag = tag + ' (' + Math.round(percentChange) + '%)';
      }

      buffer.push(
        '   ' +
          humanizeNumber(item.status.runsPerSecond).padStart(10, ' ') +
          ' runs/sec (' +
          Math.round(item.status.goodnessOfFit * 100) +
          '%*), ' +
          item.browser +
          tag
      );
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
function reformat(results: any): any {
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

run();
