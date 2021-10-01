import * as Run from './run';

export async function run(options: {
  inputFilePath: string | undefined,
  outputFilePath: string | null,
  optimizeSpeed: boolean
}) {
  return Run.run(
    options,
    () => { }
  );
}
