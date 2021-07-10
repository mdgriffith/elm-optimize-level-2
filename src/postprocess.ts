/*
This handles functions for operations that this tool doesnt provide as a CLI, but we likely want to study when capturing metrics.
So
    - minification
    - gzip
    - running prepack


*/

import * as fs from 'fs';
import * as path from 'path';
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


export type Post = {
    minify: Boolean,
    gzip: Boolean,
}

export async function process(file: string, options: Post) {
    let pieces = file.split('.')
    let ext = pieces.pop()
    const base = pieces.join(".")
    if (options.minify){
        await minify( file, base + ".min." + ext );
    }

    if (options.minify && options.gzip) {
       await gzip(  base + ".min." + ext, base + ".min." + ext + ".gz" );
    }
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

const gzipOptions: Compress.ZopfliOptions = {
    verbose: false,
    verbose_more: false,
    numiterations: 15,
    blocksplitting: true,
    blocksplittingmax: 15,
};
export async function gzip(file: string, output: string) {
  // --keep = keep the original file
  // --force = overwrite the exisign gzip file if it's there
  // execSync('gzip --keep --force ' + file);
  const fileContents = fs.readFileSync(file, 'utf8');
  const promise = await Compress.gzipAsync(fileContents, gzipOptions).then(compressed => {
    fs.writeFileSync(output, compressed);
  });



}


export async function includeV8Helpers(output_dir: string){
  fs.copyFileSync("./src/transforms/utils/v8Helpers/v8-browser.js", path.join(output_dir, 'v8-browser.js'))
  fs.copyFileSync("./src/transforms/utils/v8Helpers/v8-node.js", path.join(output_dir, 'v8-node.js'))
  fs.copyFileSync("./src/transforms/utils/v8Helpers/v8-native-dummy.js", path.join(output_dir, 'v8-native-dummy.js'))
  fs.copyFileSync("./src/transforms/utils/v8Helpers/v8-native-calls.js", path.join(output_dir, 'v8-native-calls.js'))
}

export async function includeStubbedV8Helpers(output_dir: string){
  fs.copyFileSync("./src/transforms/utils/v8Helpers/v8-skip.js", path.join(output_dir, 'v8.js'))
}