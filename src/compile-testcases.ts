import { compile } from 'node-elm-compiler';
import Parser from 'tree-sitter';
import Elm from 'tree-sitter-elm';
import * as fs from 'fs';
// Compile examples in `testcases/*` folder as js
// Run whatever transformations we want on them, saving steps as `elm.{transformation}.js`
compile(['Main.elm'], {
  output: 'output/elm.js',
  cwd: 'testcases/simple',
});
compile(['Main.elm'], {
  output: 'output/elm.opt.js',
  cwd: 'testcases/simple',
  optimize: true,
});

// Parse the elm file using tree sitter
const elmParser = new Parser();
elmParser.setLanguage(Elm);

const parseElm = (filename: string) => {
  const source = fs.readFileSync(filename, 'utf8');
  console.log(source);
  const tree = elmParser.parse(source);
  console.log(tree);
};

const result = parseElm('./testcases/simple/Main.elm');

console.log(result);
