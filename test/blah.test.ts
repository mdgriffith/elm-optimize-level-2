import ts from 'typescript';

import {
  createSplitFunctionDeclarationsTransformer,
  FuncSplit,
} from '../src/experiments/inlineWrappedFunctions';

const elmOutput = `

var $author$project$Main$Three = F3(
  function (a, b, c) {
      return {$: 'Three', a: a, b: b, c: c};
  });
`;

// this is for debugging only for now
// not a real test
test('blah', () => {
  const source = ts.createSourceFile(
    'elm.js',
    elmOutput,
    ts.ScriptTarget.ES2018
  );

  const printer = ts.createPrinter();

  const collectedSplits: FuncSplit[] = [];
  const splitTransformer = createSplitFunctionDeclarationsTransformer(split =>
    collectedSplits.push(split)
  );
  const [sourceWithSplittedFunctions] = ts.transform(source, [
    splitTransformer,
  ]).transformed;

  console.log(printer.printFile(sourceWithSplittedFunctions));
  console.log(collectedSplits);
  expect(1).toBe(1);
});
