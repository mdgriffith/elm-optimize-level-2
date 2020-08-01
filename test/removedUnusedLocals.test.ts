import ts from 'typescript';
import { createRemoveUnusedLocalsTransform } from '../src/experiments/removeUnusedLocals';

test('it can process nested calls of A2 with non identifiers as the first arg ', () => {
  const initialCode = `
(function (){
  function f () {return 2;}
  const f2 = () => 1 + f();
  const test = 1 + 2, bla="bla";
  console.log(test);
})()
`;

  const expectedOutputCode = `
(function (){
  const test = 1 + 2;
  console.log(test);
})()
  `;

  const source = ts.createSourceFile(
    'elm.js',
    initialCode,
    ts.ScriptTarget.ES2018
  );

  const printer = ts.createPrinter();

  const [output] = ts.transform(source, [
    createRemoveUnusedLocalsTransform(),
  ]).transformed;

  const expectedOutput = printer.printFile(
    ts.createSourceFile('elm.js', expectedOutputCode, ts.ScriptTarget.ES2018)
  );

  const printedOutput = printer.printFile(output);

  expect(printedOutput).toBe(expectedOutput);
});
