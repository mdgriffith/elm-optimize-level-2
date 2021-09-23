import * as Visit from './visit';
import chalk from 'chalk';

export interface Stat {
  name: string;
  bytes: number;
}


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
                     buffer.push("       " + mem.name + "\n          " + mem.representation.join("\n          "))
                     buffer.push("")
                }
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

function v8MemoryDescription(representation: Visit.Memory): string[] {
    let descriptors = []
    for (const key in representation){
        if (representation[key]) {
            descriptors.push(key)
        }
    }
    return descriptors
}


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



