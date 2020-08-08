import ts from 'typescript';

export const createRemoveUnusedLocalsTransform = (): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const printer = ts.createPrinter();
    const sourceCopy = ts.createSourceFile(
      'elm.js',
      printer.printFile(sourceFile),
      ts.ScriptTarget.ES2018
    );

    let unused = collectUnusedVariables(sourceCopy);

    console.log('found unused:', unused.length);

    let removedCount = 0;

    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (
        ts.isFunctionDeclaration(node) &&
        node.name &&
        isUnused(unused, node.name.pos, node.name.end)
      ) {
        removedCount++;
        return undefined;
      }

      if (ts.isVariableStatement(node)) {
        const declList = node.declarationList;
        const filteredDeclarations = declList.declarations.filter(
          decl => !isUnused(unused, decl.name.pos, decl.name.end)
        );

        if (filteredDeclarations.length !== declList.declarations.length) {
          if (filteredDeclarations.length === 0) {
            // means that there is nothing left, thus delete the entire thing
            removedCount += declList.declarations.length;
            return undefined;
          }

          // only update remove some of the declarations
          removedCount +=
            declList.declarations.length - filteredDeclarations.length;
          return ts.updateVariableStatement(
            node,
            undefined,
            ts.updateVariableDeclarationList(declList, filteredDeclarations)
          );
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    // TODO make this code pretty
    let result = ts.visitNode(sourceCopy, visitor);
    unused = collectUnusedVariables(result);

    while (unused.length > 0) {
      console.log('found unused nextRound:', unused.length);
      result = ts.visitNode(result, visitor);
      unused = collectUnusedVariables(result);
    }
    console.log('totalRemoveCount:', removedCount);
    return result;
  };
};

const defaultCompilerHost = ts.createCompilerHost({});

const cache = new Map<string, ts.SourceFile | undefined>();
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

function collectUnusedVariables(
  sourceFile: ts.SourceFile
): readonly ts.Diagnostic[] {
  const customCompilerHost: ts.CompilerHost = {
    getSourceFile: (name, languageVersion) => {
      // console.log(`getSourceFile ${name}`);

      if (name === 'elm.js') {
        return sourceFile;
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
    ['elm.js'],
    {
      allowJs: true,
      noUnusedLocals: true,
      checkJs: true,
      outDir: 'yo',
    },
    customCompilerHost
  );

  const res = ts.getPreEmitDiagnostics(program);
  return res.filter(d => d.reportsUnnecessary);
}

function isUnused(
  unused: readonly ts.Diagnostic[],
  start: number,
  end: number
) {
  return unused.some(d => {
    const dstart = d.start ?? -1;
    const dend = dstart + (d.length ?? -2);
    return (dstart < end && dend > start) || (start < dend && end > dstart);
  });
}
