import ts from 'typescript';

const cache = new Map<string, ts.SourceFile | undefined>();
const defaultCompilerHost = ts.createCompilerHost({});

function serveLibFile(
  name: string,
  languageVersion: ts.ScriptTarget
): ts.SourceFile | undefined {
  const cached = cache.get(name);
  if (cached) return cached;

  const val = defaultCompilerHost.getSourceFile(name, languageVersion);
  cache.set(name, val);
  return val;
}

const printer = ts.createPrinter();

export const createProgramFromSource = (
  source: ts.SourceFile
): [ts.Program, ts.SourceFile] => {
  const sourceCopy = ts.createSourceFile(
    source.fileName,
    printer.printFile(source),
    ts.ScriptTarget.ES2018
  );

  const customCompilerHost: ts.CompilerHost = {
    getSourceFile: (name, languageVersion) => {
      // console.log(`getSourceFile ${name}`);

      if (name === sourceCopy.fileName) {
        return sourceCopy;
      } else {
        return serveLibFile(name, languageVersion);
      }
    },
    writeFile: () => {},
    getDefaultLibFileName: () =>
      'node_modules/typescript/lib/lib.es2018.full.d.ts',
    useCaseSensitiveFileNames: () => false,
    getCanonicalFileName: filename => filename,
    getCurrentDirectory: () => '',
    getNewLine: () => '\n',
    getDirectories: () => [],
    fileExists: () => true,
    readFile: () => '',
  };

  const program = ts.createProgram(
    [sourceCopy.fileName],
    {
      allowJs: true,
      noUnusedLocals: true,
      checkJs: true,
      outDir: 'yo',
    },
    customCompilerHost
  );

  return [program, sourceCopy];
};
