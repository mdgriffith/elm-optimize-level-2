import ts from 'typescript';

import { transformCode } from './helpers/transformCode';
import { lambdaifyFunctionComposition } from '../src/transforms/lambdaifyFunctionComposition';

test('it can replace << by an anonymous function', () => {
  // Corresponds to f1 << f2
  const initialCode = `
  var fn = A2($elm$core$Basics$composeL, f1, f2);
  `;

  const expectedOutputCode = `
  var fn = function (_a0) { return f1(f2(_a0)) };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test('it can replace >> by an anonymous function', () => {
  // Corresponds to f1 >> f2
  const initialCode = `
  var fn = A2($elm$core$Basics$composeR, f1, f2);
  `;

  const expectedOutputCode = `
  var fn = function (_a0) { return f2(f1(_a0)) };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test('it can replace nested function compositions', () => {
  // Corresponds to f1 >> f2 >> f3
  const initialCode = `
  var fn = A2($elm$core$Basics$composeR, f1, A2($elm$core$Basics$composeR, f2, f3));
  `;

  const expectedOutputCode = `
  var fn = function (_a0) { return f3(f2(f1(_a0))); };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});
