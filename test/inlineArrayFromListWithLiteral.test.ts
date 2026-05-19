import ts from 'typescript';

import { createArrayFromLiteralTransformer } from '../src/transforms/inlineArrayFromListWithLiteral';

test('it can replace an Array created with a literal List with a pre-computed array (10 items)', () => {
  const initialCode = `
  var $author$project$Api$someValue = $elm$core$Array$fromList(_List_fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  `;

  const expectedOutputCode = `
  var $author$project$Api$someValue = { $: 0, a: 10, b: 5, c: [], d: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createArrayFromLiteralTransformer
  );

  expect(actual).toBe(expected);
});

test('it can replace an Array created with a literal List with a pre-computed array (40 items, above the 32 limit)', () => {
  const initialCode = `
  var $author$project$Api$someValue = $elm$core$Array$fromList(_List_fromArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]));
  `;

  const expectedOutputCode = `
  var $author$project$Api$someValue = { $: 0, a: 40, b: 5, c: [{ $: 1, a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32] }], d: [33, 34, 35, 36, 37, 38, 39, 40] };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createArrayFromLiteralTransformer
  );

  expect(actual).toBe(expected);
});

test('it can replace an Array created with a literal List with a pre-computed array (100 items, multiple levels)', () => {
  const initialCode = `
  var $author$project$Api$someValue = $elm$core$Array$fromList(_List_fromArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]));
  `;

  const expectedOutputCode = `
  var $author$project$Api$someValue = { $: 0, a: 100, b: 5, c: [{ $: 1, a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32] }, { $: 1, a: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64] }, { $: 1, a: [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96] }], d: [97, 98, 99, 100] };`;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createArrayFromLiteralTransformer
  );

  expect(actual).toBe(expected);
});

test('it can replace an Array on empty list by an empty array', () => {
  const initialCode = `
  var $author$project$Api$someValue = $elm$core$Array$fromList(_List_Nil);
  `;

  const expectedOutputCode = `
  var $author$project$Api$someValue = $elm$core$Array$empty`;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createArrayFromLiteralTransformer
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
