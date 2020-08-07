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

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createFunctionInlineTransformer()
  );

  expect(actual).toBe(expected);
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

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createFunctionInlineTransformer()
  );

  expect(actual).toBe(expected);
});

test('it can inline functions that were wrapped by other functions', () => {
  const initialCode = `
  var func = F2(function (a, b) {
      return F2( function (c, d) {  a + b + c + d});
  });
  
  var fullyApplied = A2(func, 1, 2);
  
  var res = A2(fullyApplied, 3, 4);
  `;

  const expectedOutputCode = `
  var func_raw = function (a, b) {
    return F2(function (c, d) {  a + b + c + d});
  }, func = F2(func_raw);
  
  var fullyApplied = func_raw(1, 2), fullyApplied_raw = fullyApplied.f;
  
  var res = fullyApplied_raw(3, 4);
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createFunctionInlineTransformer()
  );

  expect(actual).toBe(expected);
});

test('it can inline functions that were wrapped by other functions even if they are defined separately', () => {
  const initialCode = `
  var raw = function (a, b) {
      return F2( function (c, d) {  a + b + c + d});
  }

  var func = F2(raw);
  
  var fullyApplied = A2(func, 1, 2);
  
  var res = A2(fullyApplied, 3, 4);
  `;

  const expectedOutputCode = `
    var raw = function (a, b) {
      return F2( function (c, d) {  a + b + c + d});
    }

    var func = F2(raw);
  
    var fullyApplied = raw(1, 2),
     fullyApplied_raw = fullyApplied.f;
  
    var res = fullyApplied_raw(3, 4);
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createFunctionInlineTransformer()
  );

  expect(actual).toBe(expected);
});

test('it can inline functions that were wrapped by other functions even if they are partially applied', () => {
  const initialCode = `
 
  var func = F2(function (a, b) {
      return F2( function (c, d) {  a + b + c + d});
  });
 
  var partiallyApplied = func(1);
  var fullyApplied = partiallyApplied(2);
  
  var res = A2(fullyApplied, 3, 4);
  `;

  const expectedOutputCode = `
  var func_raw = function (a, b) {
    return F2(function (c, d) {  a + b + c + d});
  }, func = F2(func_raw);

  var partiallyApplied_a0 = 1,
    partiallyApplied = func(partiallyApplied_a0);
  
  var fullyApplied = func_raw(partiallyApplied_a0, 2),
     fullyApplied_raw = fullyApplied.f;
  
  var res = fullyApplied_raw(3, 4);
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createFunctionInlineTransformer()
  );

  expect(actual).toBe(expected);
});

test('it can inline functions declared not via an identifier or lambda', () => {
  const initialCode = `
  var pow = F2(Math.pow);

  var res = A2(pow, 2, 3);
  `;

  const expectedOutputCode = `
  var pow_raw = Math.pow,  pow = F2(pow_raw);
  
  var res = pow_raw(2, 3);
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createFunctionInlineTransformer()
  );

  expect(actual).toBe(expected);
});
export function transformCode(
  initialCode: string,
  expectedCode: string,
  transformer: ts.TransformerFactory<ts.SourceFile>
): {
  actual: string;
  expected: string;
} {
  const source = ts.createSourceFile(
    'elm.js',
    initialCode,
    ts.ScriptTarget.ES2018
  );

  const printer = ts.createPrinter();

  const [output] = ts.transform(source, [transformer]).transformed;

  const expectedOutput = printer.printFile(
    ts.createSourceFile('elm.js', expectedCode, ts.ScriptTarget.ES2018)
  );

  const printedOutput = printer.printFile(output);

  return {
    actual: printedOutput,
    expected: expectedOutput,
  };
}
