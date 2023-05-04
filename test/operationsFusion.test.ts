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

  test('should fuse consecutive Maybe.map calls', () => {
    // Corresponds to: x |> Maybe.map f1 |> Maybe.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Maybe$map, f2, A2($elm$core$Maybe$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive Result.map calls', () => {
    // Corresponds to: x |> Result.map f1 |> Result.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Result$map, f2, A2($elm$core$Result$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Result$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive Task.map calls', () => {
    // Corresponds to: x |> Task.map f1 |> Task.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Task$map, f2, A2($elm$core$Task$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Task$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive String.map calls', () => {
    // Corresponds to: x |> String.map f1 |> String.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$String$map, f2, A2($elm$core$String$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$String$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive Cmd.map calls', () => {
    // Corresponds to: x |> Cmd.map f1 |> Cmd.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Platform$Cmd$map, f2, A2($elm$core$Platform$Cmd$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Platform$Cmd$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive Sub.map calls', () => {
    // Corresponds to: x |> Sub.map f1 |> Sub.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Platform$Sub$map, f2, A2($elm$core$Platform$Sub$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$core$Platform$Sub$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive elm/json Json.Decode.map calls', () => {
    // Corresponds to: x |> Json.Decode.map f1 |> Json.Decode.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$json$Json$Decode$map, f2, A2($elm$json$Json$Decode$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$json$Json$Decode$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive elm/bytes Bytes.Decode.map calls', () => {
    // Corresponds to: x |> Bytes.Decode.map f1 |> Bytes.Decode.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$bytes$Bytes$Decode$map, f2, A2($elm$bytes$Bytes$Decode$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$bytes$Bytes$Decode$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive elm/parser Parser.map calls', () => {
    // Corresponds to: x |> Parser.map f1 |> Parser.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$parser$Parser$map, f2, A2($elm$parser$Parser$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$parser$Parser$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive elm/parser Parser.Advanced.map calls', () => {
    // Corresponds to: x |> Parser.Advanced.map f1 |> Parser.Advanced.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$parser$Parser$Advanced$map, f2, A2($elm$parser$Parser$Advanced$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$parser$Parser$Advanced$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse consecutive Html.Attributes.map calls', () => {
    // Corresponds to: x |> Html.Attributes.map f1 |> Html.Attributes.map f2
    const initialCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$html$Html$Attributes$map, f2, A2($elm$html$Html$Attributes$map, f1, x));
      };
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = function (x) {
        return A2($elm$html$Html$Attributes$map, A2($elm$core$Basics$composeR, f1, f2), x);
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

  test('should fuse multiple composed List.map functions (>>)', () => {
    // Corresponds to: List.map f1 >> List.map f2 >> List.map f3
    const initialCode = `
    (function() {
      var fn = A2($elm$core$Basics$composeR, $elm$core$List$map(f1), A2($elm$core$Basics$composeR, $elm$core$List$map(f2), $elm$core$List$map(f3)));
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = $elm$core$List$map(A2($elm$core$Basics$composeR, f1, A2($elm$core$Basics$composeR, f2, f3)));
    })()
    `;

    const { actual, expected } = transformCode(
      initialCode,
      expectedOutputCode,
      operationsFusion
    );

    expect(actual).toBe(expected);
  });

  test('should fuse multiple composed List.map functions (<<)', () => {
    // Corresponds to: List.map f3 << List.map f2 << List.map f1
    const initialCode = `
    (function() {
      var fn = A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$List$map(f3), $elm$core$List$map(f2)), $elm$core$List$map(f1))
    })()
    `;

    const expectedOutputCode = `
    (function() {
      var fn = $elm$core$List$map(A2($elm$core$Basics$composeR, f1, A2($elm$core$Basics$composeR, f2, f3)));
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

test('should fuse consecutive List.filterMap calls', () => {
  // Corresponds to: x |> List.filterMap f1 |> List.filterMap f2
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

test('should fuse combined List.filterMap functions', () => {
  // Corresponds to: List.filterMap f1 >> List.filterMap f2 >> List.filterMap f3
  const initialCode = `
  (function() {
    var fn = A2($elm$core$Basics$composeR, $elm$core$List$filterMap(f1), A2($elm$core$Basics$composeR, $elm$core$List$filterMap(f2), $elm$core$List$filterMap(f3)));
  })()
  `;

  const expectedOutputCode = `
  (function() {
    var fn = $elm$core$List$filterMap(A2($elm$core$Basics$composeR, f1, $elm$core$Maybe$andThen(A2($elm$core$Basics$composeR, f2, $elm$core$Maybe$andThen(f3)))));
  })()
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    operationsFusion
  );

  expect(actual).toBe(expected);
});

test('should not fuse consecutive List.filterMap then List.map calls', () => {
  // Corresponds to: x |> List.filterMap f1 |> List.map f2
  const code = `
  (function() {
    var fn = function (x) {
      return A2($elm$core$List$map, f2, A2($elm$core$List$filterMap, f1, x));
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
