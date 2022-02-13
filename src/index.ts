import * as Run from './run';
import * as Transform from './transform';
import { toolDefaults } from './types';

export async function run(options: {
  inputFilePath: string[];
  outputFilePath: string;
  optimizeSpeed: boolean;
  processOpts: {
    stdio: [string, string, string];
  } | null;
}) {
  return Run.run(
    {
      ...options,
      verbose: false,
      processOpts: options.processOpts || {
        stdio: ['inherit', 'ignore', 'inherit'],
      },
    },
    '',
    () => {}
  );
}

/**
 * Transform JS source (compiled output of `elm make`)
 * Handy for making build tool plugins (e.g, parcel, snowpack, webpack, etc.)
 */
export async function transform(
  jsSource: string,
  o3Enabled = false
): Promise<string> {
  if (jsSource == '') {
    throw new Error('elm-optimize-level-2: JS source is empty.');
  }

  return Transform.transform(
    'unused dirName param',
    jsSource,
    undefined,
    false,
    toolDefaults(o3Enabled, null)
  );
}
