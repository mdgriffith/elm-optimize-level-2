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

test('should optimize a function that wraps the result in a constructor', () => {
  // Corresponds to the following Elm code
  // type Pairs
  //   = Nil
  //   | Cons Int Int Pairs
  //
  // swap : Pairs -> Pairs
  // swap pairs =
  //   case pairs of
  //       Nil ->
  //           Nil
  //
  //       Cons x y ps ->
  //           Cons y x (swap ps)
  const initialCode = `
  var $something$Nil = {$: 0};
  var $something$Cons = F3(
    function (a, b, c) {
      return {$: 1, a: a, b: b, c: c};
    });

  var $something$swap = function (pairs) {
    if (!pairs.$) {
      return $something$Nil;
    } else {
      var x = pairs.a;
      var y = pairs.b;
      var ps = pairs.c;
      return A3(
        $something$Cons,
        y,
        x,
        $something$swap(ps));
    }
  };
  `;

  const expectedOutputCode = `
  var $something$Nil = {$: 0};
  var $something$Cons = F3(
    function (a, b, c) {
      return {$: 1, a: a, b: b, c: c};
    });

  var $something$swap = function (pairs) {
    var $start = { c: null };
    var $end = $start;
    swap:
    while (true) {
      if (!pairs.$) {
        $end.c = $something$Nil;
        return $start.c;
      } else {
        var x = pairs.a;
        var y = pairs.b;
        var ps = pairs.c;
        $end.c = A3($something$Cons, y, x, null);
        $end = $end.c;
        pairs = ps;
        continue swap;
      }
    }
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that wraps the result in a constructors with different properties', () => {
  // Corresponds to the following Elm code
  // type Tree
  //   = Node Int
  //   | SingleChild Tree Int
  //   | TwoChildren Int Tree Tree
  //
  // map : (Int -> Int) -> Tree -> Tree
  // map fn tree =
  //   case tree of
  //       Node value ->
  //           Node (fn value)
  //
  //       SingleChild value subTree ->
  //           SingleChild (fn value) (map fn subTree)
  //
  //       TwoChildren left right value ->
  //           TwoChildren (map fn left) (map fn right) (fn value)
  const initialCode = `
  var $something$TreeWrapping$Node = function (a) {
    return {$: 0, a: a};
  };
  var $something$TreeWrapping$SingleChild = F2(
    function (a, b) {
      return {$: 1, a: a, b: b};
    });
  var $something$TreeWrapping$TwoChildren = F3(
    function (a, b, c) {
      return {$: 2, a: a, b: b, c: c};
    });

  var $something$TreeWrapping$map = F2(
    function (fn, tree) {
      switch (tree.$) {
        case 0:
          var value = tree.a;
          return $something$TreeWrapping$Node(
            fn(value));
        case 1:
          var subTree = tree.a;
          var value = tree.b;
          return A2(
            $something$TreeWrapping$SingleChild,
            A2($something$TreeWrapping$map, fn, subTree),
            fn(value));
        default:
          var value = tree.a;
          var left = tree.b;
          var right = tree.c;
          return A3(
            $something$TreeWrapping$TwoChildren,
            fn(value),
            A2($something$TreeWrapping$map, fn, left),
            A2($something$TreeWrapping$map, fn, right));
      }
    });
  `;

  const expectedOutputCode = `
  var $something$TreeWrapping$Node = function (a) {
    return {$: 0, a: a};
  };
  var $something$TreeWrapping$SingleChild = F2(
    function (a, b) {
      return {$: 1, a: a, b: b};
    });
  var $something$TreeWrapping$TwoChildren = F3(
    function (a, b, c) {
      return {$: 2, a: a, b: b, c: c};
    });

  var $something$TreeWrapping$map = F2(
    function (fn, tree) {
      var $start = { a: null };
      var $end = $start;
      var $field = 'a';
      map:
      while (true) {
        switch (tree.$) {
          case 0:
            var value = tree.a;
            $end[$field] = $something$TreeWrapping$Node(
              fn(value));
            return $start.a;
          case 1:
            var subTree = tree.a;
            var value = tree.b;
            $end[$field] = A2(
              $something$TreeWrapping$SingleChild,
              null,
              fn(value));
            $end = $end[$field];
            $field = 'a';
            tree = subTree;
            continue map;
          default:
            var value = tree.a;
            var left = tree.b;
            var right = tree.c;
            $end[$field] = A3(
              $something$TreeWrapping$TwoChildren,
              fn(value),
              null,
              A2($something$TreeWrapping$map, fn, right));
            $end = $end[$field];
            $field = 'b';
            tree = left;
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

test('should optimize a function that wraps the result in a constructors with different properties', () => {
  // Corresponds to the following Elm code (from elm/core Dict)
  // removeMin : Dict k v -> Dict k v
  // removeMin dict =
  //   case dict of
  //     RBNode_elm_builtin color key value ((RBNode_elm_builtin lColor _ _ lLeft _) as left) right ->
  //       case lColor of
  //         Black ->
  //           case lLeft of
  //             RBNode_elm_builtin Red _ _ _ _ ->
  //               RBNode_elm_builtin color key value (removeMin left) right
  //             _ ->
  //               case moveRedLeft dict of
  //                 RBNode_elm_builtin nColor nKey nValue nLeft nRight ->
  //                   balance nColor nKey nValue (removeMin nLeft) nRight
  //                 RBEmpty_elm_builtin ->
  //                   RBEmpty_elm_builtin
  //         _ ->
  //           RBNode_elm_builtin color key value (removeMin left) right
  //     _ ->
  //       RBEmpty_elm_builtin
  const initialCode = `
  var $elm$core$Dict$removeMin = function (dict) {
    if ((dict.$ === -1) && (dict.d.$ === -1)) {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var lColor = left.a;
      var lLeft = left.d;
      var right = dict.e;
      if (lColor === 1) {
        if ((lLeft.$ === -1) && (!lLeft.a)) {
          var _v3 = lLeft.a;
          return A5(
            $elm$core$Dict$RBNode_elm_builtin,
            color,
            key,
            value,
            $elm$core$Dict$removeMin(left),
            right);
        } else {
          var _v4 = $elm$core$Dict$moveRedLeft(dict);
          if (_v4.$ === -1) {
            var nColor = _v4.a;
            var nKey = _v4.b;
            var nValue = _v4.c;
            var nLeft = _v4.d;
            var nRight = _v4.e;
            return A5(
              $elm$core$Dict$balance,
              nColor,
              nKey,
              nValue,
              $elm$core$Dict$removeMin(nLeft),
              nRight);
          } else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
          }
        }
      } else {
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          color,
          key,
          value,
          $elm$core$Dict$removeMin(left),
          right);
      }
    } else {
      return $elm$core$Dict$RBEmpty_elm_builtin;
    }
  };
  `;

  const expectedOutputCode = `
  var $elm$core$Dict$removeMin = function (dict) {
    var $start = { d: null };
    var $end = $start;
    removeMin: while (true) {
      if ((dict.$ === -1) && (dict.d.$ === -1)) {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var lColor = left.a;
          var lLeft = left.d;
          var right = dict.e;
          if (lColor === 1) {
              if ((lLeft.$ === -1) && (!lLeft.a)) {
                  var _v3 = lLeft.a;
                  $end.d = A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, null, right);
                  $end = $end.d;
                  dict = left;
                  continue removeMin;
              }
              else {
                  var _v4 = $elm$core$Dict$moveRedLeft(dict);
                  if (_v4.$ === -1) {
                      var nColor = _v4.a;
                      var nKey = _v4.b;
                      var nValue = _v4.c;
                      var nLeft = _v4.d;
                      var nRight = _v4.e;
                      $end.d = A5($elm$core$Dict$balance, nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
                      return $start.d;
                  }
                  else {
                      $end.d = $elm$core$Dict$RBEmpty_elm_builtin;
                      return $start.d;
                  }
              }
          }
          else {
              $end.d = A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, null, right);
              $end = $end.d;
              dict = left;
              continue removeMin;
          }
      }
      else {
          $end.d = $elm$core$Dict$RBEmpty_elm_builtin;
          return $start.d;
      }
    }
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that adds values to the result of recursive calls (List.sum-like)', () => {
  // Corresponds to the following Elm code
  // sumPlus1 : List number -> number
  // sumPlus1 list =
  //     case list of
  //         [] ->
  //             1
  //         x :: xs ->
  //             x + sumPlus1 xs
  const initialCode = `
  var $something$sumPlus1 = function (list) {
    if (!list.b) {
      return 1;
    } else {
      var x = list.a;
      var xs = list.b;
      return x + $something$sumPlus1(xs);
    }
  };
  `;

  const expectedOutputCode = `
  var $something$sumPlus1 = function (list) {
    var $result = 0;
    sumPlus1: while (true) {
      if (!list.b) {
        return $result + 1;
      } else {
        var x = list.a;
        var xs = list.b;
        $result += x;
        list = xs;
        continue sumPlus1;
      }
    }
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should skip the final addition with 0 for a recursive addition', () => {
  // Corresponds to the following Elm code
  // sum : List number -> number
  // sum list =
  //     case list of
  //         [] ->
  //             0
  //         x :: xs ->
  //             x + sum xs
  const initialCode = `
  var $something$sum = function (list) {
    if (!list.b) {
      return 0;
    } else {
      var x = list.a;
      var xs = list.b;
      return x + $something$sum(xs);
    }
  };
  `;

  const expectedOutputCode = `
  var $something$sum = function (list) {
    var $result = 0;
    sum: while (true) {
      if (!list.b) {
        return $result;
      } else {
        var x = list.a;
        var xs = list.b;
        $result += x;
        list = xs;
        continue sum;
      }
    }
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that multiplies values to the result of recursive calls (List.product-like)', () => {
  // Corresponds to the following Elm code
  // naiveProduct : List number -> number
  // naiveProduct list =
  //     case list of
  //         [] ->
  //             2
  //         x :: xs ->
  //             x * naiveProduct xs
  const initialCode = `
  var $something$product = function (list) {
    if (!list.b) {
      return 2;
    } else {
      var x = list.a;
      var xs = list.b;
      return x * $something$product(xs);
    }
  };
  `;

  const expectedOutputCode = `
  var $something$product = function (list) {
    var $result = 1;
    product: while (true) {
      if (!list.b) {
        return $result * 2;
      } else {
        var x = list.a;
        var xs = list.b;
        $result *= x;
        list = xs;
        continue product;
      }
    }
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should skip the final multiplication by 1 for a recursive multiplication', () => {
  // Corresponds to the following Elm code
  // naiveProduct : List number -> number
  // naiveProduct list =
  //     case list of
  //         [] ->
  //             1
  //         x :: xs ->
  //             x * naiveProduct xs
  const initialCode = `
  var $something$product = function (list) {
    if (!list.b) {
      return 1;
    } else {
      var x = list.a;
      var xs = list.b;
      return x * $something$product(xs);
    }
  };
  `;

  const expectedOutputCode = `
  var $something$product = function (list) {
    var $result = 1;
    product: while (true) {
      if (!list.b) {
        return $result;
      } else {
        var x = list.a;
        var xs = list.b;
        $result *= x;
        list = xs;
        continue product;
      }
    }
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should support arithmetic operations on the right side of the recursive call', () => {
  // Corresponds to the following Elm code
  // naiveProduct : List number -> number
  // naiveProduct list =
  //     case list of
  //         [] ->
  //             1
  //         x :: xs ->
  //             naiveProduct xs * x
  const initialCode = `
  var $something$product = function (list) {
    if (!list.b) {
      return 1;
    } else {
      var x = list.a;
      var xs = list.b;
      return $something$product(xs) * x;
    }
  };
  `;

  const expectedOutputCode = `
  var $something$product = function (list) {
    var $result = 1;
    product: while (true) {
      if (!list.b) {
        return $result;
      } else {
        var x = list.a;
        var xs = list.b;
        $result *= x;
        list = xs;
        continue product;
      }
    }
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that multiplies values to the result of recursive calls (factorial using if condition)', () => {
  // Corresponds to the following Elm code
  // factorial : Int -> Int
  // factorial n =
  //     if n <= 1 then
  //         1
  //     else
  //         -- insert a let declaration here to force an if condition
  //         n * factorial (n - 1)
  const initialCode = `
  var $something$factorial = function (n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * $something$factorial(n - 1);
    }
  };
  `;

  const expectedOutputCode = `
  var $something$factorial = function (n) {
    var $result = 1;
    factorial: while (true) {
      if (n <= 1) {
        return $result;
      } else {
        $result *= n;
        n = n - 1;
        continue factorial;
      }
    }
  };
  `;

  const { actual, expected } = transformCode(
    initialCode,
    expectedOutputCode,
    createTailCallRecursionTransformer
  );

  expect(actual).toBe(expected);
});

test('should optimize a function that concatenates strings to the result of recursive calls (String.repeat-like)', () => {
  // Corresponds to the following Elm code
  // repeat : Int -> String -> String
  // repeat n str =
  //     if n <= 0 then
  //         "suffix"
  //     else
  //         "" ++ str ++ repeat (n - 1) str
  const initialCode = `
  var $something$repeat = F2(
    function (n, str) {
      return (n <= 0) ? 'suffix' : ('' + (str + A2($something$repeat, n - 1, str)));
    });
  `;

  const expectedOutputCode = `
  var $something$repeat = F2(
    function (n, str) {
      var $left = "";
      repeat: while (true) {
        if ((n <= 0)) {
          return $left + 'suffix';
        } else {
          $left += '' + str;
          n = n - 1;
          continue repeat;
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

test('should optimize a function that concatenates strings on both sides of the result of recursive calls (String.pad-like)', () => {
  // Corresponds to the following Elm code
  // pad : Int -> String
  // pad n =
  //     if n <= 0 then
  //         ""
  //     else
  //         "prefix " ++ pad (n - 1) ++ " suffix"
  const initialCode = `
  var $something$pad = function (n) {
    return (n <= 0) ? '' : ('prefix ' + ($something$pad(n - 1) + ' suffix'));
  };
  `;

  const expectedOutputCode = `
  var $something$pad = function (n) {
    var $left = "", $right = "";
    pad: while (true) {
      if ((n <= 0)) {
        return $left + $right;
      } else {
        $left += 'prefix ';
        $right = ' suffix' + $right;
        n = n - 1;
        continue pad;
      }
    }
  };
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
