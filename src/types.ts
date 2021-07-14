export enum Mode {
  Prod = 'prod',
  Dev = 'dev',
}

export interface ElmVariant {
  typeName: string;
  name: string;
  jsName: string;
  index: number;
  slots: string[];
  totalTypeSlotCount: number;
}

export type RunTestcaseOptions = {
  compile: boolean;
  gzip: boolean;
  minify: boolean;
  verbose: boolean;
  assetSizes: boolean;
  runBenchmark: BrowserOptions[];
  transforms: Transforms;
};

export type Transforms = {
  replaceVDomNode: boolean;
  variantShapes: boolean;
  inlineNumberToString: boolean;
  inlineEquality: boolean;
  inlineFunctions: boolean;
  passUnwrappedFunctions: boolean;
  listLiterals: InlineLists | false;
  arrowFns: boolean;
  shorthandObjectLiterals: boolean;
  objectUpdate: ObjectUpdate | false;
  unusedValues: boolean;
  replaceListFunctions: boolean;
  replaceStringFunctions: boolean;
  recordUpdates: boolean;
  v8Analysis: boolean;
  replacements: { [name: string]: string } | null
};

export enum InlineLists {
  AsObjects = 'list_as_objs',
  AsCons = 'list_as_cons',
}

export enum ObjectUpdate {
  UseSpreadForUpdateAndOriginalRecord = 'for_both',
  UseSpreadOnlyToMakeACopy = 'for_copy',
  UseAssign = 'use_assign',
  InlineAssign = 'inline_assign',
  InlineSpread = 'inline_spread',
}

export type BrowserOptions = {
  browser: Browser;
  headless: boolean;
};

export enum Browser {
  Chrome = 'chrome',
  Firefox = 'firefox',
  Safari = 'safari',
  IE = 'ie',
  Edge = 'edge',
  Node = 'node',
  V8JitLog = 'v8-jit-log'
}

export const unallowedChars = /[^A-Za-z0-9]/g;

export const toolDefaults: Transforms = {
  replaceVDomNode: false,
  variantShapes: false,
  inlineNumberToString: false,
  inlineEquality: false,
  inlineFunctions: false,
  listLiterals: false,
  passUnwrappedFunctions: false,
  arrowFns: false,
  shorthandObjectLiterals: false,
  objectUpdate: false,
  unusedValues: false,
  replaceListFunctions: false,
  replaceStringFunctions: false,
  recordUpdates: false,
  v8Analysis: false,
  replacements: null
};


export const benchmarkDefaults: Transforms = {
  replaceVDomNode: false,
  variantShapes: false,
  inlineNumberToString: false,
  inlineEquality: false,
  inlineFunctions: false,
  listLiterals: false,
  passUnwrappedFunctions: false,
  arrowFns: false,
  shorthandObjectLiterals: false,
  objectUpdate: false,
  unusedValues: false,
  replaceListFunctions: false,
  replaceStringFunctions: false,
  recordUpdates: true,
  v8Analysis: true,
  replacements: null
};
