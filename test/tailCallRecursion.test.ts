import ts from 'typescript';

import { createTailCallRecursionTransformer } from '../src/transforms/tailCallRecursion';

test("it doesn't affect functions that are not recursive", () => {
  const initialCode = `
  var $elm$core$Basics$identity = function (x) {
	return x;
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    initialCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test("it doesn't affect functions that are not tail-call recursive", () => {
  const initialCode = `
  var factorial = function (n) {
	return mult(n, factorial(n - 1));
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    initialCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('it can turn a function that is tail-call recursive into a while loop', () => {
  // Corresponds to the following Elm code
  // recursiveFunction : (a -> b) -> List a -> List b -> List b
  // recursiveFunction mapper list acc =
  //     case list of
  //         [] ->
  //             acc
  //         x :: xs ->
  //             recursiveFunction mapper xs <| (mapper x :: acc)
  const initialCode = `
  var something$recursiveFunction = F3(
	function (mapper, list, acc) {
		if (!list.b) {
			return acc;
		} else {
			var x = list.a;
			var xs = list.b;
			return A3(
				something$recursiveFunction,
				mapper,
				xs,
				A2(
					$elm$core$List$cons,
					mapper(x),
					acc));
		}
	});
  `;

  // Corresponds to the following TCO-ed Elm code
  // recursiveFunction : (a -> b) -> List a -> List b -> List b
  // recursiveFunction mapper list acc =
  //     case list of
  //         [] ->
  //             acc
  //         x :: xs ->
  //             recursiveFunction mapper xs (mapper x :: acc)
  const expectedOutputCode = `
  var something$recursiveFunction = F3(
	function (mapper, list, acc) {
		recursiveFunction:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$list = xs,
					$temp$acc = A2(
					$elm$core$List$cons,
					mapper(x),
					acc);
				list = $temp$list;
				acc = $temp$acc;
				continue recursiveFunction;
			}
		}
	});
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should re-use the label and while loop if there already is one', () => {
  // Corresponds to the following Elm code
  // recursiveFunction : (a -> b) -> List a -> List b -> List b
  // recursiveFunction mapper list acc =
  //     case list of
  //         [] ->
  //             acc
  //         x :: xs ->
  //             if cond then
  //                recursiveFunction mapper xs (mapper x :: acc)
  //             else
  //                recursiveFunction mapper xs <| (mapper x :: acc)
  const initialCode = `
  var something$recursiveFunction = F3(
  function (mapper, list, acc) {
    recursiveFunction:
    while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;
        if (cond) {
          var x = list.a;
          var xs = list.b;
          var $temp$mapper = mapper,
            $temp$list = xs,
            $temp$acc = A2(
              $elm$core$List$cons,
              mapper(x),
              acc);
          mapper = $temp$mapper;
          list = $temp$list;
          acc = $temp$acc;
          continue recursiveFunction;
        } else {
          return A3(
            something$recursiveFunction,
            mapper,
            xs,
            A2(
              $elm$core$List$cons,
              mapper(x),
              acc));
        }
      }
    }
  });
  `;

  // Corresponds to the following TCO-ed Elm code
  // recursiveFunction : (a -> b) -> List a -> List b -> List b
  // recursiveFunction mapper list acc =
  //     case list of
  //         [] ->
  //             acc
  //         x :: xs ->
  //             recursiveFunction mapper xs (mapper x :: acc)
  const expectedOutputCode = `
  var something$recursiveFunction = F3(
  function (mapper, list, acc) {
    recursiveFunction:
    while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;
        if (cond) {
          var x = list.a;
          var xs = list.b;
          var $temp$mapper = mapper,
            $temp$list = xs,
            $temp$acc = A2(
            $elm$core$List$cons,
            mapper(x),
            acc);
          mapper = $temp$mapper;
          list = $temp$list;
          acc = $temp$acc;
          continue recursiveFunction;
        } else {
          var $temp$list = xs,
            $temp$acc = A2(
            $elm$core$List$cons,
            mapper(x),
            acc);
          list = $temp$list;
          acc = $temp$acc;
          continue recursiveFunction;
        }
      }
    }
  });
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should not change non-recursive functions', () => {
  const initialCode = `
  var something$recursiveFunction = F3(
	function (mapper, list, acc) {
		if (!list.b) {
			return acc;
		} else {
			var x = list.a;
			var xs = list.b;
			return A3(
				something$else,
				mapper,
				xs,
				A2(
					$elm$core$List$cons,
					mapper(x),
					acc));
		}
	});
  `;

  const { actual, expected } = transformCode(
    initialCode,
    initialCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that cons (::) on the result of recursive calls (List.map)', () => {
  // Corresponds to the following Elm code
  // map fn list =
  //     case list of
  //         [] -> []
  //         x :: xs ->
  //             fn x :: map fn xs
  const initialCode = `
  var $something$map = F2(
	function (fn, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return A2(
				$elm$core$List$cons,
				fn(x),
				A2($something$map, fn, xs));
		}
	});
  `;

  const expectedOutputCode = `
  var $something$map = F2(
	function (fn, list) {
        var $start = _List_Cons(undefined, _List_Nil);
        var $end = $start;
		map:
		while (true) {
			if (!list.b) {
				return $start.b;
			} else {
				var x = list.a;
				var xs = list.b;
                $end.b = _List_Cons(fn(x), _List_Nil);
                $end = $end.b;
				list = xs;
				continue map;
			}
		}
	});
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that cons (::) on the result of recursive calls (List.filter)', () => {
  // Corresponds to the following Elm code
  // filter : (a -> Bool) -> List a -> List a
  // filter predicate list =
  //     case list of
  //         [] ->
  //             something 0
  //
  //         x :: xs ->
  //             if predicate x then
  //                 x :: filter predicate xs
  //
  //             else
  //                 filter predicate xs
  const initialCode = `
  var $something$filter = F2(
	function (predicate, list) {
		filter:
		while (true) {
			if (!list.b) {
				return something(0);
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return A2(
						$elm$core$List$cons,
						x,
						A2($something$filter, predicate, xs));
				} else {
					var $temp$list = xs;
					list = $temp$list;
					continue filter;
				}
			}
		}
	});
  `;

  const expectedOutputCode = `
  var $something$filter = F2(
  function (predicate, list) {
    var $start = _List_Cons(undefined, _List_Nil);
    var $end = $start;
    filter:
    while (true) {
      if (!list.b) {
        $end.b = something(0);
        return $start.b;
      } else {
        var x = list.a;
        var xs = list.b;
        if (predicate(x)) {
          $end.b = _List_Cons(x, _List_Nil);
          $end = $end.b;
          list = xs;
          continue filter;
        } else {
          var $temp$list = xs;
          list = $temp$list;
          continue filter;
        }
      }
    }
  });
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that does "x || <recursive call>"', () => {
  // Corresponds to the following Elm code
  //  naiveAny : (a -> Bool) -> List a -> Bool
  //  naiveAny isOkay list =
  //      case list of
  //          [] ->
  //              False
  //
  //          x :: xs ->
  //              isOkay x || False || naiveAny isOkay xs
  const initialCode = `
  var $something$naiveAny = F2(
	function (isOkay, list) {
		if (!list.b) {
			return false;
		} else {
			var x = list.a;
			var xs = list.b;
			return isOkay(x) || (false || A2($something$naiveAny, isOkay, xs));
		}
	});
  `;

  const expectedOutputCode = `
  var $something$naiveAny = F2(
	function (isOkay, list) {
		naiveAny:
		while (true) {
			if (!list.b) {
				return false;
			} else {
        var x = list.a;
        var xs = list.b;
        if (isOkay(x) || false) {
          return true;
        }
        list = xs;
        continue naiveAny;
			}
		}
	});
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that does "x && <recursive call>"', () => {
  // Corresponds to the following Elm code
  //  naiveAll : (a -> Bool) -> List a -> Bool
  //  naiveAll isOkay list =
  //      case list of
  //          [] ->
  //              True
  //
  //          x :: xs ->
  //              isOkay x && True && naiveAll isOkay xs
  const initialCode = `
  var $something$naiveAll = F2(
    function (isOkay, list) {
      if (!list.b) {
        return true;
      } else {
        var x = list.a;
        var xs = list.b;
        return isOkay(x) && (true && A2($something$naiveAll, isOkay, xs));
      }
    });
  `;

  const expectedOutputCode = `
  var $something$naiveAll = F2(
	function (isOkay, list) {
		naiveAll:
		while (true) {
			if (!list.b) {
				return true;
			} else {
        var x = list.a;
        var xs = list.b;
        if (!(isOkay(x) && true)) {
          return false;
        }
        list = xs;
        continue naiveAll;
			}
		}
	});
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
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
