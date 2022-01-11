import * as Run from './run';
import * as Transform from './transform'
import { toolDefaults, Transforms } from "./types";

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
    '',
    () => { }
  );
}

export async function transform(
  jsSource: string,
  elmFilePath: string | undefined,
  o3Enabled = true,
  transforms : Transforms | null = null,
  verbose = false,
): Promise<string> {
  const dirName = process.cwd();
  return Transform.transform(
    dirName,
    jsSource,
    elmFilePath,
    verbose,
    transforms || toolDefaults(o3Enabled, null)
  )
}

