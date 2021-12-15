import { transformCode } from './helpers/transformCode';
import { operationsFusion } from '../src/transforms/operationsFusion';


describe("Map fusion", () => {
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

  test('should fuse multiple consecutive List.map calls', () => {
    // Corresponds to: x |> List.map f1 |> List.map f2 |> List.map f3
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$List$map, f3, A2($elm$core$List$map, f2, A2($elm$core$List$map, f1, x)));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$List$map, A2($elm$core$Basics$composeR, A2($elm$core$Basics$composeR, f1, f2), f3), x);
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
  
  test('should fuse consecutive Array.map calls', () => {
    // Corresponds to: x |> Array.map f1 |> Array.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Array$map, f2, A2($elm$core$Array$map, f1, x));
      };
    })()
    `;
  
    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Array$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive Set.map calls', () => {
    // Corresponds to: x |> Set.map f1 |> Set.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Set$map, f2, A2($elm$core$Set$map, f1, x));
      };
    })()
    `;
  
    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Set$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse composed List.map functions (>>)', () => {
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

  test('should fuse consecutive Html.map calls', () => {
    // Corresponds to: x |> Html.map f1 |> Html.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$html$Html$map, f2, A2($elm$html$Html$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$html$Html$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse composed List.map functions (<<)', () => {
    // Corresponds to: List.map f2 << List.map f1
    const initialCode = `
    (function() {
      var fn = A2($elm$core$Basics$composeL, $elm$core$List$map(f2), $elm$core$List$map(f1));
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
});


describe("Filter fusion", () => {
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

  test('should fuse consecutive Array.filter calls', () => {
    // Corresponds to: x |> Array.filter f1 |> Array.filter f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Array$filter, f2, A2($elm$core$Array$filter, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Array$filter, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive Set.filter calls', () => {
    // Corresponds to: x |> Set.filter f1 |> Set.filter f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Set$filter, f2, A2($elm$core$Set$filter, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Set$filter, A2($elm$core$Basics$composeR, f1, f2), x);
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

test('should fuse consecutive List.filterMap calls', () => {
  // Corresponds to: x |> List.filter f1 |> List.filter f2
  const initialCode = `
  (function() {
    var fn = function (x) {
      return A2($elm$core$List$filterMap, f2, A2($elm$core$List$filterMap, f1, x));
    };
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = function (x) {
      return A2($elm$core$List$filterMap, A2($elm$core$Basics$composeR, f1, $elm$core$Maybe$andThen(f2)), x);
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
