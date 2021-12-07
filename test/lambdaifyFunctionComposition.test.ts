import ts from 'typescript';

import { transformCode } from './helpers/transformCode';
import { lambdaifyFunctionComposition } from '../src/transforms/lambdaifyFunctionComposition';

test('it can replace << by an anonymous function', () => {
  // Corresponds to: f1 << f2
  const initialCode = `
  (function() {
    var fn = A2($elm$core$Basics$composeL, f1, f2);
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = function (_a_1) { return f1(f2(_a_1)) };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test('it can replace >> by an anonymous function', () => {
  // Corresponds to: f1 >> f2
  const initialCode = `
  (function() {
    var fn = A2($elm$core$Basics$composeR, f1, f2);
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = function (_a_1) { return f2(f1(_a_1)) };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test('it can replace nested function compositions with >>', () => {
  // Corresponds to: f1 >> f2 >> f3
  const initialCode = `
  (function() {
    var fn = A2($elm$core$Basics$composeR, f1, A2($elm$core$Basics$composeR, f2, f3));
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = function (_a_1) { return f3(f2(f1(_a_1))); };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test('it can replace nested function compositions with <<', () => {
  // Corresponds to: f3 << f2 << f1
  const initialCode = `
  (function() {
  var fn = A2(
		$elm$core$Basics$composeL,
		A2($elm$core$Basics$composeL, f3, f2),
		f1);
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = function (_a_1) { return f3(f2(f1(_a_1))); };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test("When multiple new variables are introduced, they don't share the same name", () => {
  // Corresponds to: f1 >> (\f2 -> f2 >> f3)
  const initialCode = `
  (function() {
    var fn = A2(
      $elm$core$Basics$composeR,
      f1,
      function (f2) {
        return A2($elm$core$Basics$composeR, f2, f3);
      });
    })()
    `;
    
  // TODO This is not what want
  const expectedOutputCode = `
  (function() {
      var fn = function (f2) {
          return function (_a_1) { return f3(f2(f1(_a_1))); };
      };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test("When multiple new variables are introduced, they don't share the same name", () => {
  // Corresponds to: f1 >> List.map (f2 >> f3)
  const initialCode = `
  (function() {
    var fn = A2(
      $elm$core$Basics$composeR,
      f1,
      $elm$core$List$map(
        A2($elm$core$Basics$composeR, f2, f3)));
  })()
  `;

  /* The reason we want to extract the expression to its own variable
  is because we may have code like this:

      fn = f1 >> expensiveFunction 1

      expensiveFunction n =
        let x = <super expensive function> n
        in
        \y -> x + y

  In this case, if we changed the code to

      var fn = function (_a_1) { return A2(expensiveFunction, 1, f1(_a_2)); };

  then we would be paying the penalty of computive the expensive part multiple times,
  and that might not be what the developer expects either.

  An optimization would be to check whether `expensiveFunction` is defined as a FX function where X
  is bigger than the number of arguments we are passing to it, in which case, we could use the AX functions.
  */
  const expectedOutputCode = `
  (function() {
    var _b_1 = $elm$core$List$map(function (_a_1) { return f3(f2(_a_1)); });
    var fn = function (_a_2) { return _b_1(f1(_a_2)); };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});
