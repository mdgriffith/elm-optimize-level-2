import ts from 'typescript';

import { createFunctionInlineTransformer } from '../src/experiments/inlineWrappedFunctions';

test('it can process nested calls of A2 with non identifiers as the first arg ', () => {
  const initialCode = `
  var _VirtualDom_map = F2(function (tagger, node) {
      return {
          $: 4,
          j: tagger,
          k: node,
          b: 1 + (node.b || 0),
      };
  });
  
  var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
  
  A2($elm$virtual_dom$VirtualDom$map, fn, A2(styled.d9, add, context));
  `;

  const expectedOutputCode = `
    var _VirtualDom_map_raw = function (tagger, node) {
          return {
              $: 4,
              j: tagger,
              k: node,
              b: 1 + (node.b || 0),
          };
      }, _VirtualDom_map = F2(_VirtualDom_map_raw);
  
      var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
      _VirtualDom_map_raw(fn, A2(styled.d9, add, context));
  `;

  const source = ts.createSourceFile(
    'elm.js',
    initialCode,
    ts.ScriptTarget.ES2018
  );

  const printer = ts.createPrinter();

  const [output] = ts.transform(source, [
    createFunctionInlineTransformer(),
  ]).transformed;

  const expectedOutput = printer.printFile(
    ts.createSourceFile('elm.js', expectedOutputCode, ts.ScriptTarget.ES2018)
  );

  const printedOutput = printer.printFile(output);

  expect(printedOutput).toBe(expectedOutput);
});

test('it can process partial application inlining', () => {
  const initialCode = `
  var func = F3(function (a, b, c) {
      return a + b + c;
  });
  
  var partialFunc = func(1);
  var partialFunc2 = A2(func, 1, 2);
  
  var res = A2(partialFunc, 2, 3);
  var res2 = partialFunc2(3)
  `;

  const expectedOutputCode = `
  var func_raw = function (a, b, c) {
    return a + b + c;
  }, func = F3(func_raw);
  
  var partialFunc_a0 = 1,
  partialFunc = func(partialFunc_a0);
  
  var partialFunc2_a0 = 1,
  partialFunc2_a1 = 2,
  partialFunc2 = A2(func, partialFunc2_a0, partialFunc2_a1);
  
  var res = func_raw(partialFunc_a0, 2, 3);
  var res2 = func_raw(partialFunc2_a0, partialFunc2_a1, 3);
  `;

  const source = ts.createSourceFile(
    'elm.js',
    initialCode,
    ts.ScriptTarget.ES2018
  );

  const printer = ts.createPrinter();

  const [output] = ts.transform(source, [
    createFunctionInlineTransformer(),
  ]).transformed;

  const expectedOutput = printer.printFile(
    ts.createSourceFile('elm.js', expectedOutputCode, ts.ScriptTarget.ES2018)
  );

  const printedOutput = printer.printFile(output);

  expect(printedOutput).toBe(expectedOutput);
});
