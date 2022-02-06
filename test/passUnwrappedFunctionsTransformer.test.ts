import { transformCode } from './helpers/transformCode';
import { createPassUnwrappedFunctionsTransformer } from '../src/transforms/passUnwrappedFunctions';
import { createInlineContext } from '../src/transforms/inlineWrappedFunctions';

test('it can unwrap lambdas in place ', () => {
  const initialCode = `
    var f = function(func, a, b) {
        return A2(func, a, b)
    };

    f(F2(function (a,b) {return a + b;}), 1, 2);
`;

  const expectedOutputCode = `
    var f = function(func, a, b) {
        return A2(func, a, b)
    }, f_unwrapped = function(func, a, b) {
        return func(a, b)
    };

    f_unwrapped(function (a,b) {return a + b;}, 1, 2);
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createPassUnwrappedFunctionsTransformer(() => undefined)
  );

  expect(actual).toBe(expected);
});

test('it can deal with nesting too', () => {
  const initialCode = `

     var f = function(func, a, b) {
        return A2(func, a, b)
    };

    var val = someFunc(
          f(F2(function (a,b) {
            return f(F2(function (c,d) {return  0} ), a, b)
          }), 1,2)
`;

  const expectedOutputCode = `

     var f = function(func, a, b) {
        return A2(func, a, b)
    }, f_unwrapped = function(func, a, b) {
        return func(a, b)
    };

    var val = someFunc(
          f_unwrapped(function (a,b) {
            return f_unwrapped(function (c,d) {return  0}, a, b)
          }, 1,2)
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createPassUnwrappedFunctionsTransformer(() => undefined)
  );

  expect(actual).toBe(expected);
});
test('it can unwrap lambdas in place ', () => {
  const initialCode = `
    var f = function(func, a, b) {
        return A2(func, a, b)
    };

    f(F2(function (a,b) {return a + b;}), 1, 2);
`;

  const expectedOutputCode = `
    var f = function(func, a, b) {
        return A2(func, a, b)
    }, f_unwrapped = function(func, a, b) {
        return func(a, b)
    };

    f_unwrapped(function (a,b) {return a + b;}, 1, 2);
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createPassUnwrappedFunctionsTransformer(() => undefined)
  );

  expect(actual).toBe(expected);
});

test('it properly replaces names in recursion and all uses of the passed function', () => {
  const initialCode = `
    var g = function(func) {
        return A2(func, 1, 1);
    };

    var f = function(func, a, b) {
        return f(func, A2(func, a, a), A2(func, b, b)) + g(func);
    };


    f(F2(function (a,b) {return a + b;}), 1, 2);
`;

  const expectedOutputCode = `
    var g = function(func) {
        return A2(func, 1, 1);
    }, g_unwrapped = function(func) {
        return func(1, 1);
    };

    var f = function(func, a, b) {
       return f(func, A2(func, a, a), A2(func, b, b)) + g(func);
    }, f_unwrapped = function(func, a, b) {
        return f_unwrapped(func, func(a, a), func(b, b)) + g_unwrapped(func);
    };

    f_unwrapped(function (a,b) {return a + b;}, 1, 2);
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createPassUnwrappedFunctionsTransformer(() => undefined)
  );

  expect(actual).toBe(expected);
});

test('it bails out if there is a call with different arity', () => {
  const initialCodeWithA = `
    var f = function(func, a, b) {
        A3(func, a, b, 1);
        A2(func, a, b);
    };

    f(F3(function (a,b,c) {return a + b + c;}), 1, 2);
    `;

  const initialCodeWithDirectCall = `
    var f = function(func, a, b) {
      A3(func, a, b, func(a));
    };
    
    f(F3(function (a,b,c) {return a + b + c;}), 1, 2);
  `;

  const resA = transformCode(
    initialCodeWithA,
    initialCodeWithA,
    createPassUnwrappedFunctionsTransformer(() => undefined)
  );

  expect(resA.actual).toBe(resA.expected);

  const resDirectCall = transformCode(
    initialCodeWithDirectCall,
    initialCodeWithDirectCall,
    createPassUnwrappedFunctionsTransformer(() => undefined)
  );

  expect(resDirectCall.actual).toBe(resDirectCall.expected);
});

// commented out for now
test('it can pass raw functions if there is one registered', () => {
  const initialCode = `
    var f = function(func, a, b) {
        return A2(func, a, b)
    };

    f(wrappedFunc, 1, 2);
`;

  const expectedOutputCode = `
    var f = function(func, a, b) {
        return A2(func, a, b)
    }, f_unwrapped = function(func, a, b) {
        return func(a, b)
    };

    f_unwrapped(wrappedFunc_fn, 1, 2);
  `;

  const inlineContext = createInlineContext();

  inlineContext.splits.set('wrappedFunc', {
    arity: 2,
    rawLambdaName: 'wrappedFunc_fn',
    type: 'raw_func',
  });

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createPassUnwrappedFunctionsTransformer(() => inlineContext)
  );

  expect(actual).toBe(expected);
});
