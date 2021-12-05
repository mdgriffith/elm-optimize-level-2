import ts from 'typescript';

import { transformCode } from './helpers/transformCode';
import { lambdaifyFunctionComposition } from '../src/transforms/lambdaifyFunctionComposition';

test('it can replace a List.map on a "_List_fromArray" by a native map', () => {
  const initialCode = `
  var left = A2($elm$core$Basics$composeL, $f1, $f2);
  var right = A2($elm$core$Basics$composeR, $f1, $f2);
  `;

  const expectedOutputCode = `
  var left = function (_a0) { return $f2($f1(_a0)) };
  var right = function (_a0) { return $f1($f2(_a0)) };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});
