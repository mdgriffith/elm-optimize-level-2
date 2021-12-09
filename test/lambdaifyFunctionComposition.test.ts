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
    var fn = function (_param_1) { return f1(f2(_param_1)) };
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
    var fn = function (_param_1) { return f2(f1(_param_1)) };
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
    var fn = function (_param_1) { return f3(f2(f1(_param_1))); };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test('it can replace nested function compositions with << 2', () => {
  // Corresponds to: (f2 << f1) >> (f3 >> f4)
  const initialCode = `
  (function() {
  var fn = A2(
    $elm$core$Basics$composeR,
    A2($elm$core$Basics$composeL, f2, f1),
    A2($elm$core$Basics$composeR, f3, f4));
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = function (_param_1) { return f4(f3(f2(f1(_param_1)))); };
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
    var fn = function (_param_1) { return f3(f2(f1(_param_1))); };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test("should extract function calls to variables (first arg)", () => {
  // Corresponds to: f2 x >> f1
  const initialCode = `
  (function() {
    var fn = A2(
      $elm$core$Basics$composeR,
      f2(x),
      f1);
  })()
  `;

  /* The reason we want to extract the expression to its own variable
  is because we may have code like this:

      fn = expensiveFunction 1 >> f1

      expensiveFunction n =
        let x = <super expensive function> n
        in
        \y -> x + y

  In this case, if we changed the code to

      var fn = function (_param_1) { return f1(A2(expensiveFunction, 1, _param_2)); };

  then we would be paying the penalty of computive the expensive part multiple times,
  and that might not be what the developer expects either.

  An optimization would be to check whether `expensiveFunction` is defined as a FX function where X
  is bigger than the number of arguments we are passing to it, in which case, we could use the AX functions.
  */
  const expectedOutputCode = `
  (function() {
    var _decl_1 = f2(x),
        fn = function (_param_1) { return f1(_decl_1(_param_1)); };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});


test("should extract function calls to variables (second arg)", () => {
  // Corresponds to: f1 >> f2 x
  const initialCode = `
  (function() {
    var fn = A2(
      $elm$core$Basics$composeR,
      f1,
      f2(x));
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var _decl_1 = f2(x),
        fn = function (_param_1) { return _decl_1(f1(_param_1)); };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test("should extract function calls (not from this transformation) to variables", () => {
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

  const expectedOutputCode = `
  (function() {
    var _decl_1 = function (f2) {
      return function (_param_1) { return f3(f2(_param_1)); };
    },
        fn = function (_param_2) { return _decl_1(f1(_param_2)); };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test("should extract function calls to the closest parent block", () => {
  /* Corresponds to:

  let
      forSpacing =
          (\x -> x /= Nothing) << findSpacing

      clearfix allAttrs =
          case layout of
              Internal.TextLayout _ ->
                  1

              _ ->
                  0
  in
  ...
  */
  const initialCode = `
  (function() {
    var forSpacing = A2(
      $elm$core$Basics$composeL,
      function (x) {
        return !_Utils_eq(x, $elm$core$Maybe$Nothing);
      },
      findSpacing);
    var clearfix = function (allAttrs) {
      if (!layout.$) {
        return 1;
      } else {
        return 0;
      }
    };
    })()
    `;

  const expectedOutputCode = `
  (function() {
    var _decl_1 = function (x) {
        return !_Utils_eq(x, $elm$core$Maybe$Nothing);
    }, forSpacing = function (_param_1) { return _decl_1(findSpacing(_param_1)); };
    
    var clearfix = function (allAttrs) {
        if (!layout.$) {
            return 1;
        }
        else {
            return 0;
        }
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


test("should extract function calls to the closest parent block", () => {
  /* Corresponds to:

    fn arg =
        f2 arg << f1

  */
  const initialCode = `
  (function() {
    var fn = function (arg) {
      return A2(
        $elm$core$Basics$composeL,
        f2(arg),
        f1);
    };
    })()
    `;

  const expectedOutputCode = `
  (function() {
    var fn = function (arg) {
      var _decl_1 = f2(arg);
      return function (_param_1) { return _decl_1(f1(_param_1)); };
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

test("should extract function calls even if they have multiple arguments", () => {
  /* Corresponds to:

    fn arg1 =
        f2 arg1 arg2 << f1

  */
  const initialCode = `
  (function() {
    var fn = F2(function (arg1, arg2) {
      return A2(
        $elm$core$Basics$composeL,
        A2(f2, arg1, arg2),
        f1);
    });
    })()
    `;

  const expectedOutputCode = `
  (function() {
    var fn = F2(function (arg1, arg2) {
      var _decl_1 = A2(f2, arg1, arg2);
      return function (_param_1) { return _decl_1(f1(_param_1)); };
    });
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test("should extract function calls on a property access", () => {
  /* Corresponds to:

    fn arg =
        x.f2 arg << f1

  */
  const initialCode = `
  (function() {
    var fn = function (arg) {
      return A2(
        $elm$core$Basics$composeL,
        x.f2(arg),
        f1);
    };
  })()
    `;

  const expectedOutputCode = `
  (function() {
    var fn = function (arg) {
      var _decl_1 = x.f2(arg);
      return function (_param_1) { return _decl_1(f1(_param_1)); };
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

test('it can replace A3 calls by the expression without compose (>>)', () => {
  // Corresponds to: x |> (f1 >> f2)
  const initialCode = `
  (function() {
    var value = A3($elm$core$Basics$composeR, f1, f2, x);
  })()
  `;
  
  const expectedOutputCode = `
  (function() {
    var value = f2(f1(x));
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test('it can replace A3 calls by the expression without compose (<<)', () => {
  // Corresponds to: x |> (f2 << f1)
  const initialCode = `
  (function() {
    var value = A3($elm$core$Basics$composeL, f2, f1, x);
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var value = f2(f1(x));
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});

test('it can replace A3 calls when one of the functions is a function call expression', () => {
  // Corresponds to: x |> (f1 1 >> f2)
  const initialCode = `
  (function() {
    var value = A3(
      $elm$core$Basics$composeR,
      f1(1),
      f2,
      x);
  })()
  `;
  
  const expectedOutputCode = `
  (function() {
    var value = f2(A2(f1, 1, x));
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    lambdaifyFunctionComposition
  );

  expect(actual).toBe(expected);
});