import { compile } from 'node-elm-compiler';

// - Compile examples in `testcases/*` folder as js
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
