(function () {
  "use strict";

  var $$0_enumerable_58false_44configurable_58true_44writable_58false = {
    enumerable: false,
    configurable: true,
    writable: false
  };

  var _$0_global = this;

  var _$1_Object = _$0_global.Object;
  var _$2_Object_46defineProperty = _$1_Object.defineProperty;
  var _$3_Math = _$0_global.Math;
  var _$4_Math_46floor = _$3_Math.floor;
  var _$5_Math_46log = _$3_Math.log;
  var _$6_Math_46ceil = _$3_Math.ceil;

  var _13__95Utils_95cmp = function (x, y, ord) {
    if (typeof x !== "object") {
      return x === y ?
      /*EQ*/
      0 : x < y ?
      /*LT*/
      -1 :
      /*GT*/
      1;
    }
    /**_UNUSED/
            if (x instanceof String)
            {
                var a = x.valueOf();
                var b = y.valueOf();
                return a === b ? 0 : a < b ? -1 : 1;
            }
            //*/

    /**/


    if (typeof x.$ === "undefined") //*/

      /**_UNUSED/
              if (x.$[0] === '#')
              //*/
      {
        return (ord = _13__95Utils_95cmp(x.a, y.a)) ? ord : (ord = _13__95Utils_95cmp(x.b, y.b)) ? ord : _13__95Utils_95cmp(x.c, y.c);
      } // traverse conses until end of a list or a mismatch


    for (; x.b && y.b && !(ord = _13__95Utils_95cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES


    return ord || (x.b ?
    /*GT*/
    1 : y.b ?
    /*LT*/
    -1 :
    /*EQ*/
    0);
  };

  var _U__95List_95fromArray = function (arr) {
    var out = _P__36temp_36list;

    for (var i = arr.length; i--;) {
      out = _Z_(arr[i], out);
    }

    return out;
  };

  var _L__95Json_95runHelp = function (decoder, value) {
    switch (decoder.$) {
      case 2:
        return decoder.b(value);

      case 5:
        return value === null ? _N__36elm_36core_36Result_36Ok(decoder.c) : _O_("null", value);

      case 3:
        if (!_S_(value)) {
          return _O_("a LIST", value);
        }

        return _T__95Json_95runArrayDecoder(decoder.b, value, _U__95List_95fromArray);

      case 4:
        if (!_S_(value)) {
          return _O_("an ARRAY", value);
        }

        return _T__95Json_95runArrayDecoder(decoder.b, value, _V_);

      case 6:
        var field = decoder.d;

        if (typeof value !== "object" || value === null || !(field in value)) {
          return _O_("an OBJECT with a field named `" + field + "`", value);
        }

        var result = _L__95Json_95runHelp(decoder.b, value[field]);

        return _M__36elm_36core_36Result_36isOk(result) ? result : _W__36elm_36core_36Result_36Err(_X__36elm_36json_36Json_36Decode_36Field_95raw(field, result.a));

      case 7:
        var index = decoder.e;

        if (!_S_(value)) {
          return _O_("an ARRAY", value);
        }

        if (index >= value.length) {
          return _O_("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
        }

        var result = _L__95Json_95runHelp(decoder.b, value[index]);

        return _M__36elm_36core_36Result_36isOk(result) ? result : _W__36elm_36core_36Result_36Err(_Y__36elm_36json_36Json_36Decode_36Index_95raw(index, result.a));

      case 8:
        if (typeof value !== "object" || value === null || _S_(value)) {
          return _O_("an OBJECT", value);
        }

        var keyValuePairs = _P__36temp_36list; // TODO test perf of Object.keys and switch when support is good enough

        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _L__95Json_95runHelp(decoder.b, value[key]);

            if (!_M__36elm_36core_36Result_36isOk(result)) {
              return _W__36elm_36core_36Result_36Err(_X__36elm_36json_36Json_36Decode_36Field_95raw(key, result.a));
            }

            keyValuePairs = _Z_(_a_(key, result.a), keyValuePairs);
          }
        }

        return _N__36elm_36core_36Result_36Ok(_b__36elm_36core_36List_36reverse(keyValuePairs));

      case 9:
        var answer = decoder.f;
        var decoders = decoder.g;

        for (var i = 0; i < decoders.length; i++) {
          var result = _L__95Json_95runHelp(decoders[i], value);

          if (!_M__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          answer = answer(result.a);
        }

        return _N__36elm_36core_36Result_36Ok(answer);

      case 10:
        var result = _L__95Json_95runHelp(decoder.b, value);

        return !_M__36elm_36core_36Result_36isOk(result) ? result : _L__95Json_95runHelp(decoder.h(result.a), value);

      case 11:
        var errors = _P__36temp_36list;

        for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
        {
          var result = _L__95Json_95runHelp(temp.a, value);

          if (_M__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          errors = _Z_(result.a, errors);
        }

        return _W__36elm_36core_36Result_36Err(_c__36elm_36json_36Json_36Decode_36OneOf(_b__36elm_36core_36List_36reverse(errors)));

      case 1:
        return _W__36elm_36core_36Result_36Err(_d__36elm_36json_36Json_36Decode_36Failure_95raw(decoder.a, _e_(value)));

      case 0:
        return _N__36elm_36core_36Result_36Ok(decoder.a);
    }
  };

  var _T__95Json_95runArrayDecoder = function (decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);

    for (var i = 0; i < len; i++) {
      var result = _L__95Json_95runHelp(decoder, value[i]);

      if (!_M__36elm_36core_36Result_36isOk(result)) {
        return _W__36elm_36core_36Result_36Err(_Y__36elm_36json_36Json_36Decode_36Index_95raw(i, result.a));
      }

      array[i] = result.a;
    }

    return _N__36elm_36core_36Result_36Ok(toElmValue(array));
  };

  var _E__95VirtualDom_95appendChild = function (parent, child) {
    parent.appendChild(child);
  };

  var _A__95VirtualDom_95render = function (vNode, eventNode) {
    var tag = vNode.$;

    if (tag === 5) {
      return _A__95VirtualDom_95render(vNode.k || (vNode.k = vNode.m()), eventNode);
    }

    if (tag === 0) {
      return _B__95VirtualDom_95doc.createTextNode(vNode.a);
    }

    if (tag === 4) {
      var subNode = vNode.k;
      var tagger = vNode.j;

      while (subNode.$ === 4) {
        typeof tagger !== "object" ? tagger = [tagger, subNode.j] : tagger.push(subNode.j);
        subNode = subNode.k;
      }

      var subEventRoot = {
        j: tagger,
        p: eventNode
      };

      var domNode = _A__95VirtualDom_95render(subNode, subEventRoot);

      domNode.elm_event_node_ref = subEventRoot;
      return domNode;
    }

    if (tag === 3) {
      var domNode = vNode.h(vNode.g);

      _D__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

      return domNode;
    } // at this point `tag` must be 1 or 2


    var domNode = vNode.f ? _B__95VirtualDom_95doc.createElementNS(vNode.f, vNode.c) : _B__95VirtualDom_95doc.createElement(vNode.c);

    if (void 0) {
      domNode.addEventListener("click", (void 0)(domNode));
    }

    _D__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

    for (var kids = vNode.e, i = 0; i < kids.length; i++) {
      _E__95VirtualDom_95appendChild(domNode, _A__95VirtualDom_95render(tag === 1 ? kids[i] : kids[i].b, eventNode));
    }

    return domNode;
  };

  var _D__95VirtualDom_95applyFacts = function (domNode, eventNode, facts) {
    for (var key in facts) {
      var value = facts[key];
      key === "a1" ? _F__95VirtualDom_95applyStyles(domNode, value) : key === "a0" ? _G__95VirtualDom_95applyEvents(domNode, eventNode, value) : key === "a3" ? _H__95VirtualDom_95applyAttrs(domNode, value) : key === "a4" ? _I__95VirtualDom_95applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
    }
  };

  var _F__95VirtualDom_95applyStyles = function (domNode, styles) {
    var domNodeStyle = domNode.style;

    for (var key in styles) {
      domNodeStyle[key] = styles[key];
    }
  };

  var _H__95VirtualDom_95applyAttrs = function (domNode, attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
    }
  };

  var _I__95VirtualDom_95applyAttrsNS = function (domNode, nsAttrs) {
    for (var key in nsAttrs) {
      var pair = nsAttrs[key];
      var namespace = pair.f;
      var value = pair.o;
      typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
    }
  };

  var _G__95VirtualDom_95applyEvents = function (domNode, eventNode, events) {
    var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

    for (var key in events) {
      var newHandler = events[key];
      var oldCallback = allCallbacks[key];

      if (!newHandler) {
        domNode.removeEventListener(key, oldCallback);
        allCallbacks[key] = undefined;
        continue;
      }

      if (oldCallback) {
        var oldHandler = oldCallback.q;

        if (oldHandler.$ === newHandler.$) {
          oldCallback.q = newHandler;
          continue;
        }

        domNode.removeEventListener(key, oldCallback);
      }

      oldCallback = _J__95VirtualDom_95makeCallback(eventNode, newHandler);
      domNode.addEventListener(key, oldCallback, void 0);
      allCallbacks[key] = oldCallback;
    }
  };

  var _J__95VirtualDom_95makeCallback = function (eventNode, initialHandler) {
    function callback(event) {
      var handler = callback.q;

      var result = _L__95Json_95runHelp(handler.a, event);

      if (!_M__36elm_36core_36Result_36isOk(result)) {
        return;
      }

      var tag = _K__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt(handler); // 0 = Normal
      // 1 = MayStopPropagation
      // 2 = MayPreventDefault
      // 3 = Custom


      var value = result.a;
      var message = !tag ? value : tag < 3 ? value.a : value.o;
      var stopPropagation = tag == 1 ? value.b : tag == 3 && value.J;
      var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.G) && event.preventDefault(), eventNode);
      var tagger;
      var i;

      while (tagger = currentEventNode.j) {
        if (typeof tagger == "function") {
          message = tagger(message);
        } else {
          for (var i = tagger.length; i--;) {
            message = tagger[i](message);
          }
        }

        currentEventNode = currentEventNode.p;
      }

      currentEventNode(message, stopPropagation); // stopPropagation implies isSync
    }

    callback.q = initialHandler;
    return callback;
  };

  var _q__95JsArray_95initialize_95raw = function (size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  };

  var _14__95JsArray_95initializeFromList_95raw = function (max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _a_(result, ls);
  };

  var _9__95VirtualDom_95init_95raw = function (virtualNode, flagDecoder, debugMetadata, args) {
    // NOTE: this function needs _Platform_export available to work

    /**/
    var node = args["node"]; //*/

    /**_UNUSED/
            var node = args && args['node'] ? args['node'] : _Debug_crash(0);
            //*/

    node.parentNode.replaceChild(_A__95VirtualDom_95render(virtualNode, function () {}), node);
    return {};
  };

  var _g__36elm_36core_36List_36foldl_95raw = function (func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;

        var $temp$func = func,
            $temp$acc = _p_(func, x, acc),
            $temp$list = xs;

        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  };

  var _15__36elm_36core_36Array_36compressNodes_95raw = function (nodes, acc) {
    compressNodes: while (true) {
      var _v0 = _14__95JsArray_95initializeFromList_95raw(32, nodes);

      var node = _v0.a;
      var remainingNodes = _v0.b;

      var newAcc = _Z_(_16__36elm_36core_36Array_36SubTree(node), acc);

      if (!remainingNodes.b) {
        return _b__36elm_36core_36List_36reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
            $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  };

  var _z__36elm_36core_36Array_36treeFromBuilder_95raw = function (nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = _12__36elm_36core_36Basics_36ceiling(nodeListSize / 32);

      if (newNodeSize === 1) {
        return _14__95JsArray_95initializeFromList_95raw(32, nodeList).a;
      } else {
        var $temp$nodeList = _15__36elm_36core_36Array_36compressNodes_95raw(nodeList, _P__36temp_36list),
            $temp$nodeListSize = newNodeSize;

        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  };

  var _s__36elm_36core_36Array_36builderToArray_95raw = function (reverseNodeList, builder) {
    if (!builder.a) {
      return _u__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_v__36elm_36core_36Elm_36JsArray_36length(builder.c), 5, _l__36elm_36core_36Elm_36JsArray_36empty, builder.c);
    } else {
      var treeLen = builder.a * 32;

      var depth = _x__36elm_36core_36Basics_36floor(_y__36elm_36core_36Basics_36logBase_95raw(32, treeLen - 1));

      var correctNodeList = reverseNodeList ? _b__36elm_36core_36List_36reverse(builder.d) : builder.d;

      var tree = _z__36elm_36core_36Array_36treeFromBuilder_95raw(correctNodeList, builder.a);

      return _u__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_v__36elm_36core_36Elm_36JsArray_36length(builder.c) + treeLen, _10__36elm_36core_36Basics_36max_95raw(5, depth * 5), tree, builder.c);
    }
  };

  var _r__36elm_36core_36Array_36initializeHelp_95raw = function (fn, fromIndex, len, nodeList, tail) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return _s__36elm_36core_36Array_36builderToArray_95raw(false, {
          d: nodeList,
          a: len / 32 | 0,
          c: tail
        });
      } else {
        var leaf = _t__36elm_36core_36Array_36Leaf(_q__95JsArray_95initialize_95raw(32, fromIndex, fn));

        var $temp$fn = fn,
            $temp$fromIndex = fromIndex - 32,
            $temp$len = len,
            $temp$nodeList = _Z_(leaf, nodeList),
            $temp$tail = tail;

        fn = $temp$fn;
        fromIndex = $temp$fromIndex;
        len = $temp$len;
        nodeList = $temp$nodeList;
        tail = $temp$tail;
        continue initializeHelp;
      }
    }
  };

  var _f__36elm_36core_36Array_36initialize_95raw = function (len, fn) {
    if (len <= 0) {
      return _h__36elm_36core_36Array_36empty;
    } else {
      var tailLen = len % 32;

      var tail = _q__95JsArray_95initialize_95raw(tailLen, len - tailLen, fn);

      var initialFromIndex = len - tailLen - 32;
      return _r__36elm_36core_36Array_36initializeHelp_95raw(fn, initialFromIndex, len, _P__36temp_36list, tail);
    }
  };

  var _M__36elm_36core_36Result_36isOk = function (result) {
    if (!result.$) {
      return true;
    } else {
      return false;
    }
  };

  var _K__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt = function (handler) {
    switch (handler.$) {
      case 0:
        return 0;

      case 1:
        return 1;

      case 2:
        return 2;

      default:
        return 3;
    }
  };

  var _B__95VirtualDom_95doc = document;

  var _N__36elm_36core_36Result_36Ok = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _O_ = (type, value) => {
    return _W__36elm_36core_36Result_36Err(_d__36elm_36json_36Json_36Decode_36Failure_95raw("Expecting " + type, _e_(value)));
  };

  var _S_ = value => {
    return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
  };

  var _W__36elm_36core_36Result_36Err = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Y__36elm_36json_36Json_36Decode_36Index_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _d__36elm_36json_36Json_36Decode_36Failure_95raw = (a, b) => {
    return {
      $: 3,
      a: a,
      b: b
    };
  };

  var _Z_ = (hd, tl) => {
    return {
      $: 1,
      a: hd,
      b: tl
    };
  };

  var _e_ = value => {
    return value;
  };

  var _P__36temp_36list = {
    $: 0,
    a: null,
    b: null
  };
  var _l__36elm_36core_36Elm_36JsArray_36empty = [];

  var _3_ = d => {
    return _9__95VirtualDom_95init_95raw(_4__36author_36project_36Main_36main, 0, 0, d);
  };

  var _h__36elm_36core_36Array_36empty = {
    $: 0,
    a: 0,
    b: 5,
    c: _l__36elm_36core_36Elm_36JsArray_36empty,
    d: _l__36elm_36core_36Elm_36JsArray_36empty
  };

  var _u__36elm_36core_36Array_36Array_95elm_95builtin_95raw = (a, b, c, d) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _V_ = array => {
    return _f__36elm_36core_36Array_36initialize_95raw(array.length, i => array[i]);
  };

  var _v__36elm_36core_36Elm_36JsArray_36length = array => {
    return array.length;
  };

  var _X__36elm_36json_36Json_36Decode_36Field_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_JsArray_length", _$2_Object_46defineProperty(_v__36elm_36core_36Elm_36JsArray_36length, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _b__36elm_36core_36List_36reverse = list => {
    return _g__36elm_36core_36List_36foldl_95raw(_m__36elm_36core_36List_36cons, _P__36temp_36list, list);
  };

  var _a_ = (a, b) => {
    return {
      a: a,
      b: b
    };
  };

  var _m__36elm_36core_36List_36cons = a => {
    return b => _Z_(a, b);
  };

  var _c__36elm_36json_36Json_36Decode_36OneOf = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _p_ = (fun, a, b) => {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  };

  var _x__36elm_36core_36Basics_36floor = _$4_Math_46floor;
  var _11__95Basics_95log = _$5_Math_46log;

  var _y__36elm_36core_36Basics_36logBase_95raw = (base, number) => {
    return _11__95Basics_95log(number) / _11__95Basics_95log(base);
  };

  var _t__36elm_36core_36Array_36Leaf = a => {
    return {
      $: 1,
      a: a
    };
  };

  _m__36elm_36core_36List_36cons.a = 2;
  _m__36elm_36core_36List_36cons.f = _Z_;
  var _12__36elm_36core_36Basics_36ceiling = _$6_Math_46ceil;

  var _10__36elm_36core_36Basics_36max_95raw = (x, y) => {
    return _13__95Utils_95cmp(x, y) > 0 ? x : y;
  };

  var _16__36elm_36core_36Array_36SubTree = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _4__36author_36project_36Main_36main = {
    $: 0,
    a: "500"
  };
  _$0_global.Elm = {
    Main: {
      init: _3_
    }
  };
}).call(this);