import ts from 'typescript';

import { createNativeListTransformer } from '../src/transforms/nativeListTransformer';

test('it can replace a List.map on a "_List_fromArray" by a native map', () => {
  const initialCode = `
  var $author$project$Api$someValue = A2(
    $elm$core$List$map,
    fn,
    _List_fromArray(
      ['1', '2']));
  `;

  const expectedOutputCode = `
  function _mutatingJsArrayMap(mapper, arr) {
    var len = arr.length;
    for (var i = 0; i
      < len; i++) {
        arr[i] = mapper(arr[i]);
    }
    return arr;
  }

  var $author$project$Api$someValue =
    _List_fromArray(
      _nativeMutatingMap(
        fn,
        ['1', '2']));
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createNativeListTransformer(true)
  );

  expect(actual).toBe(expected);
});

test('it can replace nested List.map on a "_List_fromArray" by nested native map', () => {
  const initialCode = `
  var $author$project$Api$someValue = A2(
    $elm$core$List$map,
    fn2,
    A2(
      $elm$core$List$map,
      fn1,
      _List_fromArray(
        ['1', '2'])));
  `;

  const expectedOutputCode = `
  function _mutatingJsArrayMap(mapper, arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        arr[i] = mapper(arr[i]);
    }
    return arr;
  }

  var $author$project$Api$someValue =
    _List_fromArray(
      _nativeMutatingMap(
        fn2,
        _nativeMutatingMap(
          fn1,
          ['1', '2'])));
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createNativeListTransformer(true)
  );

  expect(actual).toBe(expected);
});

test('it can replace a List.filter on a "_List_fromArray" by a native filter', () => {
  const initialCode = `
  var $author$project$Api$someValue = A2(
    $elm$core$List$filter,
    fn,
    _List_fromArray(
      ['1', '2']));
  `;

  const expectedOutputCode = `
  function _nativeJsArrayFilter(pred, arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (pred(arr[i])) {
        res.push(arr[i]);
      }
    }
    return res;
  }

  var $author$project$Api$someValue =
    _List_fromArray(
      _nativeJsArrayFilter(
        fn,
        ['1', '2']));
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createNativeListTransformer(true)
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
