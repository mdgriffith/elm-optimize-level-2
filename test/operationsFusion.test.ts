import { transformCode } from './helpers/transformCode';
import { operationsFusion } from '../src/transforms/operationsFusion';

test('should fuse consecutive List.map calls', () => {
  // Corresponds to: x |> List.map f1 |> List.map f2
  const initialCode = `
  (function() {
    var fn = function (x) {
      return A2($elm$core$List$map, f2, A2($elm$core$List$map, f1, x));
    };
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = function (x) {
      return A2($elm$core$List$map, A2($elm$core$Basics$composeR, f1, f2), x);
    };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    operationsFusion
  );

  expect(actual).toBe(expected);
});

test('should fuse consecutive List.filter calls', () => {
  // Corresponds to: x |> List.filter f1 |> List.filter f2
  const initialCode = `
  (function() {
    var fn = function (x) {
      return A2($elm$core$List$filter, f2, A2($elm$core$List$filter, f1, x));
    };
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = function (x) {
      return A2($elm$core$List$filter, A2($elm$core$Basics$composeR, f1, f2), x);
    };
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    operationsFusion
  );

  expect(actual).toBe(expected);
});

test('should not fuse consecutive List.filter then List.map calls', () => {
  // Corresponds to: x |> List.filter f1 |> List.map f2
  const code = `
  (function() {
    var fn = function (x) {
      return A2($elm$core$List$map, f2, A2($elm$core$List$filter, f1, x));
    };
  })()
  `;

  const { actual, expected } = transformCode(
    code,
    code,
    operationsFusion
  );

  expect(actual).toBe(expected);
});

test('should fuse composed List.map functions', () => {
  // Corresponds to: List.map f1 >> List.map f2
  const initialCode = `
  (function() {
    var fn = A2($elm$core$Basics$composeR, $elm$core$List$map(f1), $elm$core$List$map(f2));
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = $elm$core$List$map(A2($elm$core$Basics$composeR, f1, f2));
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    operationsFusion
  );

  expect(actual).toBe(expected);
});
