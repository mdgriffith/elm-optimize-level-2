import * as Run from './run';

export async function run(options: {
  inputFilePath: string | undefined,
  outputFilePath: string,
  optimizeSpeed: boolean,
  processOpts: {
    stdio: [string, string, string],
  } | null,
}) {
  return Run.run(
    {
      ...options,
      verbose: false,
      processOpts: options.processOpts || { stdio: ['inherit', 'ignore', 'inherit'] },
    },
    () => { }
  );
}
