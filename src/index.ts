import ts from 'typescript';

const filename = 'test.js';
const code = `
(function (){
  function f () {}
  const f2 = () => 1;
  const test = 1 + 2;
  console.log(test);
})()
`;
// (function() {
//   function f() {}
//   const f2 = () => 1;
//   const test: number = 1 + 2;
// })();

const sourceFile = ts.createSourceFile(filename, code, ts.ScriptTarget.Latest);

const defaultCompilerHost = ts.createCompilerHost({});

const customCompilerHost: ts.CompilerHost = {
  getSourceFile: (name, languageVersion) => {
    console.log(`getSourceFile ${name}`);

    if (name === filename) {
      return sourceFile;
    } else {
      return defaultCompilerHost.getSourceFile(name, languageVersion);
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
  [filename],
  { allowJs: true, noUnusedLocals: true, outDir: 'yo', checkJs: true },
  customCompilerHost
);

const diagnostics = ts.getPreEmitDiagnostics(program);

for (const diagnostic of diagnostics) {
  const message = diagnostic.messageText;
  const file = diagnostic.file;
  const filename = file!.fileName;

  const lineAndChar = file!.getLineAndCharacterOfPosition(diagnostic!.start!);

  const line = lineAndChar.line + 1;
  const character = lineAndChar.character + 1;

  console.log(message);
  console.log(
    `(${filename}:${line}:${character}), pos = (${
      diagnostic?.start
    },${(diagnostic?.start || 0) + (diagnostic?.length || 0)})`
  );
}

console.log('--------A--------------');
const typeChecker = program.getTypeChecker();

function recursivelyPrintVariableDeclarations(
  node: ts.Node,
  sourceFile: ts.SourceFile
) {
  if (ts.isVariableDeclaration(node)) {
    const nodeText = node.getText(sourceFile);
    const type = typeChecker.getTypeAtLocation(node);
    const typeName = typeChecker.typeToString(type, node);

    console.log(nodeText);
    console.log(`(${typeName})`);
  }

  node.forEachChild(child =>
    recursivelyPrintVariableDeclarations(child, sourceFile)
  );
}

recursivelyPrintVariableDeclarations(sourceFile, sourceFile);

console.log('--------B--------------');
function printRecursiveFrom(
  node: ts.Node,
  indentLevel: number,
  sourceFile: ts.SourceFile
) {
  const indentation = '-'.repeat(indentLevel);
  const syntaxKind = ts.SyntaxKind[node.kind];
  const nodeText = node.getText(sourceFile);
  console.log(`${indentation}${syntaxKind}: ${nodeText}`);
  console.log(`pos: (${node.pos}, ${node.end})`);

  node.forEachChild(child =>
    printRecursiveFrom(child, indentLevel + 1, sourceFile)
  );
}

printRecursiveFrom(sourceFile, 0, sourceFile);
