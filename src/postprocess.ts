/*
This handles functions for operations that this tool doesnt provide as a CLI, but we likely want to study when capturing metrics.
So
    - minification
    - gzip
    - running prepack


*/

import * as fs from 'fs';
import { prepackFileSync } from 'prepack';
import * as Terser from 'terser';
import * as Compress from '@gfx/zopfli';

export function prepack(input: string): string {
  const { code } = prepackFileSync([input], {
    debugNames: true,
    inlineExpressions: true,
    maxStackDepth: 1200, // that didn't help
  });
  return code;
}

export async function minify(inputFilename: string, outputFilename: string) {
  const compress = {
    toplevel: true,
    mangle: false,
    compress: {
      pure_getters: true,
      keep_fargs: false,
      unsafe_comps: true,
      unsafe: true,
      pure_funcs: [
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'F7',
        'F8',
        'F9',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'A7',
        'A8',
        'A9',
      ],
    },
  };
  const mangle = {
    mangle: true,
    compress: false,
  };
  const input = fs.readFileSync(inputFilename, 'utf8');
  const compressed = await Terser.minify(input, compress);

  let mangled = null;
  if (compressed && compressed.code) {
    mangled = await Terser.minify(compressed.code, mangle);
  } else {
    console.log('Error compressing with Terser');
  }
  // console.log('mangled', mangled.error);
  if (mangled && mangled.code) {
    fs.writeFileSync(outputFilename, mangled.code);
  } else {
    console.log('Error mangling with Terser');
  }
}
export async function gzip(file: string, output: string) {
  // --keep = keep the original file
  // --force = overwrite the exisign gzip file if it's there
  // execSync('gzip --keep --force ' + file);
  const fileContents = fs.readFileSync(file, 'utf8');
  const promise = Compress.gzipAsync(fileContents, {}).then(compressed => {
    fs.writeFileSync(output, compressed);
  });

  await promise;
}
