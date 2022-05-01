// @ts-nocheck

/* Taken from the compiled Array creation code from:
 * - Elm 0.19.1
 * - elm/core v1.0.5
 * - compiled by elm-optimize-level-2 v0.2.3
 * 
 * Changes made:
 * - Removed AX/FX wrapping
 * - Removed unused functions
 * - Replaced `$elm$core$Elm$JsArray$length(jsArray)` by `jsArray.length`
 * - Replaced call to and comparison with `_Utils_cmp` by a `<` operation
 */

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
var $elm$core$Array$branchFactor = 32;


var _JsArray_initializeFromList_fn = function (max, ls) {
  var result = new Array(max);
  for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
  }
  result.length = i;
  return _Utils_Tuple2(result, ls);
}

var $elm$core$Array$Array_elm_builtin_fn = function (a, b, c, d) {
  return { $: 0, a: a, b: b, c: c, d: d };
};
var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_log = Math.log;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Basics$logBase_fn = function (base, number) {
  return _Basics_log(number) / _Basics_log(base);
};
var $elm$core$Basics$max_fn = function (x, y) {
  return x > y ? x : y;
}

var _List_Nil = { $: 0, a: null, b: null };
function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
var _List_cons = _List_Cons;
var $elm$core$List$cons = _List_cons;
function _List_fromArray(arr) {
  var out = _List_Nil;
  for (var i = arr.length; i--;) {
      out = _List_Cons(arr[i], out);
  }
  return out;
}
var $elm$core$List$foldl_fn = function (func, acc, list) {
  foldl: while (true) {
      if (!list.b) {
          return acc;
      }
      else {
          var x = list.a;
          var xs = list.b;
          var $temp$func = func, $temp$acc = func(x, acc), $temp$list = xs;
          func = $temp$func;
          acc = $temp$acc;
          list = $temp$list;
          continue foldl;
      }
  }
}
var $elm$core$List$reverse = function (list) {
    return $elm$core$List$foldl_fn($elm$core$List$cons, _List_Nil, list);
};

var _JsArray_empty = [];
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling($elm$core$Basics$logBase_fn(2, $elm$core$Array$branchFactor));
var $elm$core$Array$SubTree = function (a) {
  return { $: 0, a: a };
}
var $elm$core$Array$Leaf = function (a) {
  return { $: 1, a: a };
}
var $elm$core$Array$compressNodes_fn = function (nodes, acc) {
  compressNodes: while (true) {
      var _v0 = _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodes);
      var node = _v0.a;
      var remainingNodes = _v0.b;
      var newAcc = _List_Cons($elm$core$Array$SubTree(node), acc);
      if (!remainingNodes.b) {
          return $elm$core$List$reverse(newAcc);
      }
      else {
          var $temp$nodes = remainingNodes, $temp$acc = newAcc;
          nodes = $temp$nodes;
          acc = $temp$acc;
          continue compressNodes;
      }
  }
}
var $elm$core$Array$treeFromBuilder_fn = function (nodeList, nodeListSize) {
  treeFromBuilder: while (true) {
      var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
      if (newNodeSize === 1) {
          return _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodeList).a;
      }
      else {
          var $temp$nodeList = $elm$core$Array$compressNodes_fn(nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
          nodeList = $temp$nodeList;
          nodeListSize = $temp$nodeListSize;
          continue treeFromBuilder;
      }
  }
}
var $elm$core$Array$builderToArray_fn = function (reverseNodeList, builder) {
  if (!builder.k) {
      return $elm$core$Array$Array_elm_builtin_fn(builder.n.length, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.n);
  }
  else {
      var treeLen = builder.k * $elm$core$Array$branchFactor;
      var depth = $elm$core$Basics$floor($elm$core$Basics$logBase_fn($elm$core$Array$branchFactor, treeLen - 1));
      var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.o) : builder.o;
      var tree = $elm$core$Array$treeFromBuilder_fn(correctNodeList, builder.k);
      return $elm$core$Array$Array_elm_builtin_fn(builder.n.length + treeLen, $elm$core$Basics$max_fn(5, depth * $elm$core$Array$shiftStep), tree, builder.n);
  }
}

var $elm$core$Array$fromListHelp_fn = function (list, nodeList, nodeListSize) {
  fromListHelp: while (true) {
      var _v0 = _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, list);
      var jsArray = _v0.a;
      var remainingItems = _v0.b;
      if (jsArray.length < $elm$core$Array$branchFactor) {
          return $elm$core$Array$builderToArray_fn(true, { o: nodeList, k: nodeListSize, n: jsArray });
      }
      else {
          var $temp$list = remainingItems, $temp$nodeList = _List_Cons($elm$core$Array$Leaf(jsArray), nodeList), $temp$nodeListSize = nodeListSize + 1;
          list = $temp$list;
          nodeList = $temp$nodeList;
          nodeListSize = $temp$nodeListSize;
          continue fromListHelp;
      }
  }
};
var $elm$core$Array$empty = $elm$core$Array$Array_elm_builtin_fn(0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Array$fromList = function (list) {
  if (!list.b) {
      return $elm$core$Array$empty;
  }
  else {
      return $elm$core$Array$fromListHelp_fn(list, _List_Nil, 0);
  }
};

/** End of copied code **/

export function toArray(list) {
  return $elm$core$Array$fromList(_List_fromArray(list));
}