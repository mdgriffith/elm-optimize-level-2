import { compileSync } from 'node-elm-compiler';
import * as fs from 'fs';
import * as path from 'path';
import { parseElm, parseDir, primitives } from './parseElm';
import ts from 'typescript';
import { createCustomTypesTransformer } from './experiments/variantShapes';
import { Mode, Transforms, ObjectUpdate } from './types';
import {
  createFunctionInlineTransformer,
  InlineContext,
} from './experiments/inlineWrappedFunctions';
import {
  InlineMode,
  createInlineListFromArrayTransformer,
} from './experiments/inlineListFromArray';
import { prepackFileSync } from 'prepack';
import * as Terser from 'terser';
import { execSync } from 'child_process';
import { inlineEquality } from './experiments/inlineEquality';

import {
  objectUpdate,
  convertFunctionExpressionsToArrowFuncs,
} from './experiments/modernizeJS';
import { createRemoveUnusedLocalsTransform } from './experiments/removeUnusedLocals';
import { createPassUnwrappedFunctionsTransformer } from './experiments/passUnwrappedFunctions';
import { replaceVDomNode } from './experiments/correctVirtualDom';
import { inlineNumberToString } from './experiments/inlineNumberToString';


type Options = {
  compile: boolean,
  minify: boolean,
  gzip: boolean
}

export const compileAndTransform = async (
  dir: string,
  file: string,
  options: Options,
  transforms: Transforms
): Promise<{}> => {
  // Compile examples in `testcases/*` folder as js
  // Run whatever transformations we want on them, saving steps as `elm.{transformation}.js`

  if (options.compile) {
    compileSync([file], {
      output: 'output/elm.js',
      cwd: dir,
    });

    compileSync([file], {
      output: 'output/elm.opt.js',
      cwd: dir,
      optimize: true,
    });
  }


  const pathInOutput = (p: string) => path.join(dir, 'output', p);

  const elmSource = fs.readFileSync(path.join(dir, file), 'utf8');
  let parsedVariants = parseElm({
    author: 'author',
    project: 'project',
    source: elmSource,
  }).concat(primitives);

  let parsed = parseDir('elm-packages');
  parsedVariants = parsedVariants.concat(parsed);
  let source = ts.createSourceFile(
    'elm.js',
    fs.readFileSync(pathInOutput('elm.opt.js'), 'utf-8'),
    ts.ScriptTarget.ES2018
  );

  const normalizeVariantShapes = createCustomTypesTransformer(
    parsedVariants,
    Mode.Prod
  );

  // We have to ensure that this transformation takes place before everything else
  if (transforms.replaceVDomNode) {
    const results = ts.transform(source, [replaceVDomNode()]);
    source = results.transformed[0];
  }

  let inlineCtx: InlineContext | undefined;
  const transformations: any[] = removeDisabled([
    // [transforms.replaceVDomNode, replaceVDomNode()],

    [transforms.variantShapes, normalizeVariantShapes],
    [
      transforms.inlineFunctions,
      createFunctionInlineTransformer(ctx => {
        inlineCtx = ctx;
        reportInlineTransformResult(ctx);
      }),
    ],
    [transforms.inlineEquality, inlineEquality()],
    [transforms.inlineNumberToString, inlineNumberToString()],
    [
      transforms.listLiterals,
      createInlineListFromArrayTransformer(
        InlineMode.UsingLiteralObjects(Mode.Prod)
      ),
    ],
    [
      transforms.passUnwrappedFunctions,
      createPassUnwrappedFunctionsTransformer(() => inlineCtx),
    ],
    includeObjectUpdate(transforms.objectUpdate),
    [transforms.arrowFns, convertFunctionExpressionsToArrowFuncs],
    [transforms.unusedValues, createRemoveUnusedLocalsTransform()],
  ]);

  const {
    transformed: [result],
    diagnostics,
  } = ts.transform(source, transformations);

  const printer = ts.createPrinter();

  fs.writeFileSync(
    pathInOutput('elm.opt.transformed.js'),
    printer.printFile(result)
  );

  const initialJs = ts.createSourceFile(
    'elm.js',
    fs.readFileSync(pathInOutput('elm.opt.js'), 'utf-8'),
    ts.ScriptTarget.ES2018
  );

  fs.writeFileSync(pathInOutput('elm.opt.js'), printer.printFile(initialJs));

  // Prepack, minify, and gzip
  if (transforms.prepack) {
    const { code } = prepackFileSync([pathInOutput('elm.opt.transformed.js')], {
      debugNames: true,
      inlineExpressions: true,
      maxStackDepth: 1200, // that didn't help
    });

    fs.writeFileSync(pathInOutput('elm.opt.prepack.js'), code);
    if (options.minify) {
      await minify(
        pathInOutput('elm.opt.prepack.js'),
        pathInOutput('elm.opt.prepack.min.js')
      );
    }
    if (options.gzip) {
      gzip(pathInOutput('elm.opt.prepack.min.js'));
    }
  }

  if (options.minify) {
    await minify(pathInOutput('elm.opt.js'), pathInOutput('elm.opt.min.js'));
    await minify(
      pathInOutput('elm.opt.transformed.js'),
      pathInOutput('elm.opt.transformed.min.js')
    );
  }
  if (options.gzip) {
    gzip(pathInOutput('elm.opt.min.js'));
    gzip(pathInOutput('elm.opt.transformed.min.js'));
  }

  return {};
};

function includeObjectUpdate(kind: ObjectUpdate | null): any {
  if (kind != null) {
    return [true, objectUpdate(kind)];
  } else {
    return [];
  }
}

function removeDisabled(list: any[]) {
  let newList: any[] = [];
  list.forEach(item => {
    if (item != 0 && item[0]) {
      newList.push(item[1]);
    }
  });

  return newList;
}

async function minify(inputFilename: string, outputFilename: string) {
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
async function gzip(file: string) {
  // --keep = keep the original file
  // --force = overwrite the exisign gzip file if it's there
  execSync('gzip --keep --force ' + file);
}

function reportInlineTransformResult(ctx: InlineContext) {
  const { splits, partialApplications, inlined } = ctx;

  console.log(
    `functionInlineTransformer: splitCount=${splits.size}, partialApplicationCount=${partialApplications.size}`,
    inlined
    // splits
  );
}
