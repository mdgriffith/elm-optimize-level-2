(function () {
  "use strict";

  function $_1_sub(__2) {
    return $_0_root(1, 0, __2);
  }

  function $_0_root(__0, __1, __2) {
    return {
      $: __0,
      a: __1,
      b: __2
    };
  }

  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [0, false, false];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

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
  var _$7_Date = _$0_global.Date;
  var _$8_Date_46now = _$7_Date.now;
  var _$9_Math_46round = _$3_Math.round;
  var _$A_Math_46sqrt = _$3_Math.sqrt;
  var _$B_Math_46pow = _$3_Math.pow;
  var _$C_isNaN = _$0_global.isNaN;

  var _2f_F = function (arity, fun, wrapper) {
    wrapper.a = arity;
    wrapper.f = fun;
    return wrapper;
  };

  var _22__95Utils_95eq = function (x, y) {
    for (var pair, stack = [], isEqual = _37__95Utils_95eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _37__95Utils_95eqHelp(pair.a, pair.b, 0, stack)) {}

    return isEqual;
  };

  var _37__95Utils_95eqHelp = function (x, y, depth, stack) {
    if (x === y) {
      return true;
    }

    if (typeof x !== "object" || x === null || y === null) {
      typeof x === "function" && _s__95Debug_95crash(5);
      return false;
    }

    if (depth > 100) {
      stack.push(_x__95Utils_95Tuple2(x, y));
      return true;
    }
    /**_UNUSED/
            if (x.$ === 'Set_elm_builtin')
            {
                x = $elm$core$Set$toList(x);
                y = $elm$core$Set$toList(y);
            }
            if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
            {
                x = $elm$core$Dict$toList(x);
                y = $elm$core$Dict$toList(y);
            }
            //*/

    /**/


    if (x.$ < 0) {
      x = _3z__36elm_36core_36Dict_36toList(x);
      y = _3z__36elm_36core_36Dict_36toList(y);
    } //*/


    for (var key in x) {
      if (!_37__95Utils_95eqHelp(x[key], y[key], depth + 1, stack)) {
        return false;
      }
    }

    return true;
  };

  var _3W__95Utils_95cmp = function (x, y, ord) {
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
        return (ord = _3W__95Utils_95cmp(x.a, y.a)) ? ord : (ord = _3W__95Utils_95cmp(x.b, y.b)) ? ord : _3W__95Utils_95cmp(x.c, y.c);
      } // traverse conses until end of a list or a mismatch


    for (; x.b && y.b && !(ord = _3W__95Utils_95cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES


    return ord || (x.b ?
    /*GT*/
    1 : y.b ?
    /*LT*/
    -1 :
    /*EQ*/
    0);
  };

  var _5w__95Utils_95ap = function (xs, ys) {
    // append Strings
    if (typeof xs === "string") {
      return xs + ys;
    } // append Lists


    if (!xs.b) {
      return ys;
    }

    var root = _17__95List_95Cons(xs.a, ys);

    xs = xs.b;

    for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
    {
      curr = curr.b = _17__95List_95Cons(xs.a, ys);
    }

    return root;
  };

  var _2e__95List_95fromArray = function (arr) {
    var out = _O__95List_95Nil;

    for (var i = arr.length; i--;) {
      out = _17__95List_95Cons(arr[i], out);
    }

    return out;
  };

  var _6M__95List_95toArray = function (xs) {
    for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
    {
      out.push(xs.a);
    }

    return out;
  };

  var _s__95Debug_95crash = function (identifier) {
    throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
  };

  var _1S__95Json_95runHelp = function (decoder, value) {
    switch (decoder.$) {
      case 2:
        return decoder.b(value);

      case 5:
        return value === null ? _2B__36elm_36core_36Result_36Ok(decoder.c) : _2D__95Json_95expecting("null", value);

      case 3:
        if (!_2E__95Json_95isArray(value)) {
          return _2D__95Json_95expecting("a LIST", value);
        }

        return _2C__95Json_95runArrayDecoder(decoder.b, value, _2e__95List_95fromArray);

      case 4:
        if (!_2E__95Json_95isArray(value)) {
          return _2D__95Json_95expecting("an ARRAY", value);
        }

        return _2C__95Json_95runArrayDecoder(decoder.b, value, _2F__95Json_95toElmArray);

      case 6:
        var field = decoder.d;

        if (typeof value !== "object" || value === null || !(field in value)) {
          return _2D__95Json_95expecting("an OBJECT with a field named `" + field + "`", value);
        }

        var result = _1S__95Json_95runHelp(decoder.b, value[field]);

        return _v__36elm_36core_36Result_36isOk(result) ? result : _2G__36elm_36core_36Result_36Err(_2H__36elm_36json_36Json_36Decode_36Field_95raw(field, result.a));

      case 7:
        var index = decoder.e;

        if (!_2E__95Json_95isArray(value)) {
          return _2D__95Json_95expecting("an ARRAY", value);
        }

        if (index >= value.length) {
          return _2D__95Json_95expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
        }

        var result = _1S__95Json_95runHelp(decoder.b, value[index]);

        return _v__36elm_36core_36Result_36isOk(result) ? result : _2G__36elm_36core_36Result_36Err(_2I__36elm_36json_36Json_36Decode_36Index_95raw(index, result.a));

      case 8:
        if (typeof value !== "object" || value === null || _2E__95Json_95isArray(value)) {
          return _2D__95Json_95expecting("an OBJECT", value);
        }

        var keyValuePairs = _O__95List_95Nil; // TODO test perf of Object.keys and switch when support is good enough

        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _1S__95Json_95runHelp(decoder.b, value[key]);

            if (!_v__36elm_36core_36Result_36isOk(result)) {
              return _2G__36elm_36core_36Result_36Err(_2H__36elm_36json_36Json_36Decode_36Field_95raw(key, result.a));
            }

            keyValuePairs = _17__95List_95Cons(_x__95Utils_95Tuple2(key, result.a), keyValuePairs);
          }
        }

        return _2B__36elm_36core_36Result_36Ok(_2J__36elm_36core_36List_36reverse(keyValuePairs));

      case 9:
        var answer = decoder.f;
        var decoders = decoder.g;

        for (var i = 0; i < decoders.length; i++) {
          var result = _1S__95Json_95runHelp(decoders[i], value);

          if (!_v__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          answer = answer(result.a);
        }

        return _2B__36elm_36core_36Result_36Ok(answer);

      case 10:
        var result = _1S__95Json_95runHelp(decoder.b, value);

        return !_v__36elm_36core_36Result_36isOk(result) ? result : _1S__95Json_95runHelp(decoder.h(result.a), value);

      case 11:
        var errors = _O__95List_95Nil;

        for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
        {
          var result = _1S__95Json_95runHelp(temp.a, value);

          if (_v__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          errors = _17__95List_95Cons(result.a, errors);
        }

        return _2G__36elm_36core_36Result_36Err(_2K__36elm_36json_36Json_36Decode_36OneOf(_2J__36elm_36core_36List_36reverse(errors)));

      case 1:
        return _2G__36elm_36core_36Result_36Err(_2L__36elm_36json_36Json_36Decode_36Failure_95raw(decoder.a, _t__36elm_36json_36Json_36Encode_36string(value)));

      case 0:
        return _2B__36elm_36core_36Result_36Ok(decoder.a);
    }
  };

  var _2C__95Json_95runArrayDecoder = function (decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);

    for (var i = 0; i < len; i++) {
      var result = _1S__95Json_95runHelp(decoder, value[i]);

      if (!_v__36elm_36core_36Result_36isOk(result)) {
        return _2G__36elm_36core_36Result_36Err(_2I__36elm_36json_36Json_36Decode_36Index_95raw(i, result.a));
      }

      array[i] = result.a;
    }

    return _2B__36elm_36core_36Result_36Ok(toElmValue(array));
  };

  var _3v__95Json_95equality = function (x, y) {
    if (x === y) {
      return true;
    }

    if (x.$ !== y.$) {
      return false;
    }

    switch (x.$) {
      case 0:
      case 1:
        return x.a === y.a;

      case 2:
        return x.b === y.b;

      case 5:
        return x.c === y.c;

      case 3:
      case 4:
      case 8:
        return _3v__95Json_95equality(x.b, y.b);

      case 6:
        return x.d === y.d && _3v__95Json_95equality(x.b, y.b);

      case 7:
        return x.e === y.e && _3v__95Json_95equality(x.b, y.b);

      case 9:
        return x.f === y.f && _4h__95Json_95listEquality(x.g, y.g);

      case 10:
        return x.h === y.h && _3v__95Json_95equality(x.b, y.b);

      case 11:
        return _4h__95Json_95listEquality(x.g, y.g);
    }
  };

  var _4h__95Json_95listEquality = function (aDecoders, bDecoders) {
    var len = aDecoders.length;

    if (len !== bDecoders.length) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      if (!_3v__95Json_95equality(aDecoders[i], bDecoders[i])) {
        return false;
      }
    }

    return true;
  };

  var _2o__95Scheduler_95rawSpawn = function (task) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    var proc = {
      $: 0,
      e: __captured__scope_1_[0]++,
      f: task,
      g: null,
      h: []
    };

    _3l__95Scheduler_95enqueue(proc);

    return proc;
  };

  var _2s__95Scheduler_95rawSend = function (proc, msg) {
    proc.h.push(msg);

    _3l__95Scheduler_95enqueue(proc);
  };

  var _3l__95Scheduler_95enqueue = function (proc) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _3y__95Scheduler_95queue.push(proc);

    if (__captured__scope_1_[1]) {
      return;
    }

    __captured__scope_1_[1] = true;

    while (proc = _3y__95Scheduler_95queue.shift()) {
      _4Y__95Scheduler_95step(proc);
    }

    __captured__scope_1_[1] = false;
  };

  var _4Y__95Scheduler_95step = function (proc) {
    while (proc.f) {
      var rootTag = proc.f.$;

      if (rootTag === 0 || rootTag === 1) {
        while (proc.g && proc.g.$ !== rootTag) {
          proc.g = proc.g.i;
        }

        if (!proc.g) {
          return;
        }

        proc.f = proc.g.b(proc.f.a);
        proc.g = proc.g.i;
      } else if (rootTag === 2) {
        proc.f.c = proc.f.b(function (newRoot) {
          proc.f = newRoot;

          _3l__95Scheduler_95enqueue(proc);
        });
        return;
      } else if (rootTag === 5) {
        if (proc.h.length === 0) {
          return;
        }

        proc.f = proc.f.b(proc.h.shift());
      } else // if (rootTag === 3 || rootTag === 4)
        {
          proc.g = {
            $: rootTag === 3 ? 0 : 1,
            b: proc.f.b,
            i: proc.g
          };
          proc.f = proc.f.d;
        }
    }
  };

  var _T__95Platform_95initialize = function (flagDecoder, args, init, update, subscriptions, stepperBuilder) {
    var result = _r__95Json_95run_95raw(flagDecoder, _t__36elm_36json_36Json_36Encode_36string(args ? args["flags"] : undefined));

    _v__36elm_36core_36Result_36isOk(result) || _s__95Debug_95crash(2
    /**_UNUSED/, _Json_errorToString(result.a) /**/
    );
    var managers = {};
    var initPair = init(result.a);
    var model = initPair.a;
    var stepper = stepperBuilder(sendToApp, model);

    var ports = _13__95Platform_95setupEffects(managers, sendToApp);

    function sendToApp(msg, viewMetadata) {
      var pair = _w_A2(update, msg, model);

      stepper(model = pair.a, viewMetadata);

      _14__95Platform_95enqueueEffects(managers, pair.b, subscriptions(model));
    }

    _14__95Platform_95enqueueEffects(managers, initPair.b, subscriptions(model));

    return ports ? {
      ports: ports
    } : {};
  };

  var _13__95Platform_95setupEffects = function (managers, sendToApp) {
    var ports; // setup all necessary effect managers

    for (var key in _1H__95Platform_95effectManagers) {
      var manager = _1H__95Platform_95effectManagers[key];

      if (manager.a) {
        ports = ports || {};
        ports[key] = manager.a(key, sendToApp);
      }

      managers[key] = _1o__95Platform_95instantiateManager(manager, sendToApp);
    }

    return ports;
  };

  var _1o__95Platform_95instantiateManager = function (info, sendToApp) {
    var router = {
      g: sendToApp,
      h: undefined
    };
    var onEffects = info.c;
    var onSelfMsg = info.d;
    var cmdMap = info.e;
    var subMap = info.f;

    var loop = state => _2R__95Scheduler_95andThen_95raw(loop, _2q__95Scheduler_95receive(function (msg) {
      var value = msg.a;

      if (msg.$ === 0) {
        return _19_A3(onSelfMsg, router, value, state);
      }

      return cmdMap && subMap ? _2r_A4(onEffects, router, value.i, value.j, state) : _19_A3(onEffects, router, cmdMap ? value.i : value.j, state);
    }));

    return router.h = _2o__95Scheduler_95rawSpawn(_2R__95Scheduler_95andThen_95raw(loop, info.b));
  };

  var _14__95Platform_95enqueueEffects = function (managers, cmdBag, subBag) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _1N__95Platform_95effectsQueue.push({
      p: managers,
      q: cmdBag,
      r: subBag
    });

    if (__captured__scope_1_[2]) return;
    __captured__scope_1_[2] = true;

    for (var fx; fx = _1N__95Platform_95effectsQueue.shift();) {
      _1p__95Platform_95dispatchEffects(fx.p, fx.q, fx.r);
    }

    __captured__scope_1_[2] = false;
  };

  var _1p__95Platform_95dispatchEffects = function (managers, cmdBag, subBag) {
    var effectsDict = {};

    _2p__95Platform_95gatherEffects(true, cmdBag, effectsDict, null);

    _2p__95Platform_95gatherEffects(false, subBag, effectsDict, null);

    for (var home in managers) {
      _2s__95Scheduler_95rawSend(managers[home], {
        $: "fx",
        a: effectsDict[home] || {
          i: _O__95List_95Nil,
          j: _O__95List_95Nil
        }
      });
    }
  };

  var _2p__95Platform_95gatherEffects = function (isCmd, bag, effectsDict, taggers) {
    switch (bag.$) {
      case 1:
        var home = bag.k;

        var effect = _3m__95Platform_95toEffect(isCmd, home, taggers, bag.l);

        effectsDict[home] = _3u__95Platform_95insert(isCmd, effect, effectsDict[home]);
        return;

      case 2:
        for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
        {
          _2p__95Platform_95gatherEffects(isCmd, list.a, effectsDict, taggers);
        }

        return;

      case 3:
        _2p__95Platform_95gatherEffects(isCmd, bag.o, effectsDict, {
          s: bag.n,
          t: taggers
        });

        return;
    }
  };

  var _3m__95Platform_95toEffect = function (isCmd, home, taggers, value) {
    function applyTaggers(x) {
      for (var temp = taggers; temp; temp = temp.t) {
        x = temp.s(x);
      }

      return x;
    }

    var map = isCmd ? _1H__95Platform_95effectManagers[home].e : _1H__95Platform_95effectManagers[home].f;
    return _w_A2(map, applyTaggers, value);
  };

  var _3u__95Platform_95insert = function (isCmd, newEffect, effects) {
    effects = effects || {
      i: _O__95List_95Nil,
      j: _O__95List_95Nil
    };
    isCmd ? effects.i = _17__95List_95Cons(newEffect, effects.i) : effects.j = _17__95List_95Cons(newEffect, effects.j);
    return effects;
  };

  var _1n__95Platform_95setupOutgoingPort = function (name) {
    var subs = [];
    var converter = _1H__95Platform_95effectManagers[name].u; // CREATE MANAGER

    var init = _2S__36elm_36core_36Process_36sleep(0);

    _1H__95Platform_95effectManagers[name].b = init;
    _1H__95Platform_95effectManagers[name].c = _2n_F3(function (router, cmdList, state) {
      for (; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
      {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;

        var value = _1P__95Json_95unwrap(converter(cmdList.a));

        for (var i = 0; i < currentSubs.length; i++) {
          currentSubs[i](value);
        }
      }

      return init;
    }); // PUBLIC API

    function subscribe(callback) {
      subs.push(callback);
    }

    function unsubscribe(callback) {
      // copy subs into a new array in case unsubscribe is called within a
      // subscribed callback
      subs = subs.slice();
      var index = subs.indexOf(callback);

      if (index >= 0) {
        subs.splice(index, 1);
      }
    }

    return {
      subscribe: subscribe,
      unsubscribe: unsubscribe
    };
  };

  var _4B__95VirtualDom_95appendChild = function (parent, child) {
    parent.appendChild(child);
  };

  var _15__95VirtualDom_95organizeFacts = function (factList) {
    for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
    {
      var entry = factList.a;
      var tag = entry.$;
      var key = entry.n;
      var value = entry.o;

      if (tag === "a2") {
        key === "className" ? _1q__95VirtualDom_95addClass(facts, key, _1P__95Json_95unwrap(value)) : facts[key] = _1P__95Json_95unwrap(value);
        continue;
      }

      var subFacts = facts[tag] || (facts[tag] = {});
      tag === "a3" && key === "class" ? _1q__95VirtualDom_95addClass(subFacts, key, value) : subFacts[key] = value;
    }

    return facts;
  };

  var _1q__95VirtualDom_95addClass = function (object, key, newClass) {
    var classes = object[key];
    object[key] = classes ? classes + " " + newClass : newClass;
  };

  var _3L__95VirtualDom_95render = function (vNode, eventNode) {
    var tag = vNode.$;

    if (tag === 5) {
      return _3L__95VirtualDom_95render(vNode.k || (vNode.k = vNode.m()), eventNode);
    }

    if (tag === 0) {
      return _3n__95Browser_95doc.createTextNode(vNode.a);
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

      var domNode = _3L__95VirtualDom_95render(subNode, subEventRoot);

      domNode.elm_event_node_ref = subEventRoot;
      return domNode;
    }

    if (tag === 3) {
      var domNode = vNode.h(vNode.g);

      _3K__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

      return domNode;
    } // at this point `tag` must be 1 or 2


    var domNode = vNode.f ? _3n__95Browser_95doc.createElementNS(vNode.f, vNode.c) : _3n__95Browser_95doc.createElement(vNode.c);

    if (void 0) {
      domNode.addEventListener("click", (void 0)(domNode));
    }

    _3K__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

    for (var kids = vNode.e, i = 0; i < kids.length; i++) {
      _4B__95VirtualDom_95appendChild(domNode, _3L__95VirtualDom_95render(tag === 1 ? kids[i] : kids[i].b, eventNode));
    }

    return domNode;
  };

  var _3K__95VirtualDom_95applyFacts = function (domNode, eventNode, facts) {
    for (var key in facts) {
      var value = facts[key];
      key === "a1" ? _42__95VirtualDom_95applyStyles(domNode, value) : key === "a0" ? _43__95VirtualDom_95applyEvents(domNode, eventNode, value) : key === "a3" ? _44__95VirtualDom_95applyAttrs(domNode, value) : key === "a4" ? _45__95VirtualDom_95applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
    }
  };

  var _42__95VirtualDom_95applyStyles = function (domNode, styles) {
    var domNodeStyle = domNode.style;

    for (var key in styles) {
      domNodeStyle[key] = styles[key];
    }
  };

  var _44__95VirtualDom_95applyAttrs = function (domNode, attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
    }
  };

  var _45__95VirtualDom_95applyAttrsNS = function (domNode, nsAttrs) {
    for (var key in nsAttrs) {
      var pair = nsAttrs[key];
      var namespace = pair.f;
      var value = pair.o;
      typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
    }
  };

  var _43__95VirtualDom_95applyEvents = function (domNode, eventNode, events) {
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

      oldCallback = _4i__95VirtualDom_95makeCallback(eventNode, newHandler);
      domNode.addEventListener(key, oldCallback, void 0);
      allCallbacks[key] = oldCallback;
    }
  };

  var _4i__95VirtualDom_95makeCallback = function (eventNode, initialHandler) {
    function callback(event) {
      var handler = callback.q;

      var result = _1S__95Json_95runHelp(handler.a, event);

      if (!_v__36elm_36core_36Result_36isOk(result)) {
        return;
      }

      var tag = _4l__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt(handler); // 0 = Normal
      // 1 = MayStopPropagation
      // 2 = MayPreventDefault
      // 3 = Custom


      var value = result.a;
      var message = !tag ? value : tag < 3 ? value.a : value.L;
      var stopPropagation = tag == 1 ? value.b : tag == 3 && value.aT;
      var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.aO) && event.preventDefault(), eventNode);
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

  var _b__95VirtualDom_95diff = function (x, y) {
    var patches = [];

    _1C__95VirtualDom_95diffHelp(x, y, patches, 0);

    return patches;
  };

  var _1t__95VirtualDom_95pushPatch = function (patches, type, index, data) {
    var patch = {
      $: type,
      r: index,
      s: data,
      t: undefined,
      u: undefined
    };
    patches.push(patch);
    return patch;
  };

  var _1C__95VirtualDom_95diffHelp = function (x, y, patches, index) {
    if (x === y) {
      return;
    }

    var xType = x.$;
    var yType = y.$; // Bail if you run into different types of nodes. Implies that the
    // structure has changed significantly and it's not worth a diff.

    if (xType !== yType) {
      if (xType === 1 && yType === 2) {
        y = _1s__95VirtualDom_95dekey(y);
        yType = 1;
      } else {
        _1t__95VirtualDom_95pushPatch(patches, 0, index, y);

        return;
      }
    } // Now we know that both nodes are the same $.


    switch (yType) {
      case 5:
        var xRefs = x.l;
        var yRefs = y.l;
        var i = xRefs.length;
        var same = i === yRefs.length;

        while (same && i--) {
          same = xRefs[i] === yRefs[i];
        }

        if (same) {
          y.k = x.k;
          return;
        }

        y.k = y.m();
        var subPatches = [];

        _1C__95VirtualDom_95diffHelp(x.k, y.k, subPatches, 0);

        subPatches.length > 0 && _1t__95VirtualDom_95pushPatch(patches, 1, index, subPatches);
        return;

      case 4:
        // gather nested taggers
        var xTaggers = x.j;
        var yTaggers = y.j;
        var nesting = false;
        var xSubNode = x.k;

        while (xSubNode.$ === 4) {
          nesting = true;
          typeof xTaggers !== "object" ? xTaggers = [xTaggers, xSubNode.j] : xTaggers.push(xSubNode.j);
          xSubNode = xSubNode.k;
        }

        var ySubNode = y.k;

        while (ySubNode.$ === 4) {
          nesting = true;
          typeof yTaggers !== "object" ? yTaggers = [yTaggers, ySubNode.j] : yTaggers.push(ySubNode.j);
          ySubNode = ySubNode.k;
        } // Just bail if different numbers of taggers. This implies the
        // structure of the virtual DOM has changed.


        if (nesting && xTaggers.length !== yTaggers.length) {
          _1t__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        } // check if taggers are "the same"


        if (nesting ? !_1u__95VirtualDom_95pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
          _1t__95VirtualDom_95pushPatch(patches, 2, index, yTaggers);
        } // diff everything below the taggers


        _1C__95VirtualDom_95diffHelp(xSubNode, ySubNode, patches, index + 1);

        return;

      case 0:
        if (x.a !== y.a) {
          _1t__95VirtualDom_95pushPatch(patches, 3, index, y.a);
        }

        return;

      case 1:
        _1v__95VirtualDom_95diffNodes(x, y, patches, index, _1w__95VirtualDom_95diffKids);

        return;

      case 2:
        _1v__95VirtualDom_95diffNodes(x, y, patches, index, _1x__95VirtualDom_95diffKeyedKids);

        return;

      case 3:
        if (x.h !== y.h) {
          _1t__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        }

        var factsDiff = _1y__95VirtualDom_95diffFacts(x.d, y.d);

        factsDiff && _1t__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
        var patch = y.i(x.g, y.g);
        patch && _1t__95VirtualDom_95pushPatch(patches, 5, index, patch);
        return;
    }
  };

  var _1u__95VirtualDom_95pairwiseRefEqual = function (as, bs) {
    for (var i = 0; i < as.length; i++) {
      if (as[i] !== bs[i]) {
        return false;
      }
    }

    return true;
  };

  var _1v__95VirtualDom_95diffNodes = function (x, y, patches, index, diffKids) {
    // Bail if obvious indicators have changed. Implies more serious
    // structural changes such that it's not worth it to diff.
    if (x.c !== y.c || x.f !== y.f) {
      _1t__95VirtualDom_95pushPatch(patches, 0, index, y);

      return;
    }

    var factsDiff = _1y__95VirtualDom_95diffFacts(x.d, y.d);

    factsDiff && _1t__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
    diffKids(x, y, patches, index);
  };

  var _1y__95VirtualDom_95diffFacts = function (x, y, category) {
    var diff; // look for changes and removals

    for (var xKey in x) {
      if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
        var subDiff = _1y__95VirtualDom_95diffFacts(x[xKey], y[xKey] || {}, xKey);

        if (subDiff) {
          diff = diff || {};
          diff[xKey] = subDiff;
        }

        continue;
      } // remove if not in the new facts


      if (!(xKey in y)) {
        diff = diff || {};
        diff[xKey] = !category ? typeof x[xKey] === "string" ? "" : null : category === "a1" ? "" : category === "a0" || category === "a3" ? undefined : {
          f: x[xKey].f,
          o: undefined
        };
        continue;
      }

      var xValue = x[xKey];
      var yValue = y[xKey]; // reference equal, so don't worry about it

      if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _2v__95VirtualDom_95equalEvents(xValue, yValue)) {
        continue;
      }

      diff = diff || {};
      diff[xKey] = yValue;
    } // add new stuff


    for (var yKey in y) {
      if (!(yKey in x)) {
        diff = diff || {};
        diff[yKey] = y[yKey];
      }
    }

    return diff;
  };

  var _1w__95VirtualDom_95diffKids = function (xParent, yParent, patches, index) {
    var xKids = xParent.e;
    var yKids = yParent.e;
    var xLen = xKids.length;
    var yLen = yKids.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

    if (xLen > yLen) {
      _1t__95VirtualDom_95pushPatch(patches, 6, index, {
        v: yLen,
        i: xLen - yLen
      });
    } else if (xLen < yLen) {
      _1t__95VirtualDom_95pushPatch(patches, 7, index, {
        v: xLen,
        e: yKids
      });
    } // PAIRWISE DIFF EVERYTHING ELSE


    for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
      var xKid = xKids[i];

      _1C__95VirtualDom_95diffHelp(xKid, yKids[i], patches, ++index);

      index += xKid.b || 0;
    }
  };

  var _1x__95VirtualDom_95diffKeyedKids = function (xParent, yParent, patches, rootIndex) {
    var localPatches = [];
    var changes = {}; // Dict String Entry

    var inserts = []; // Array { index : Int, entry : Entry }
    // type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

    var xKids = xParent.e;
    var yKids = yParent.e;
    var xLen = xKids.length;
    var yLen = yKids.length;
    var xIndex = 0;
    var yIndex = 0;
    var index = rootIndex;

    while (xIndex < xLen && yIndex < yLen) {
      var x = xKids[xIndex];
      var y = yKids[yIndex];
      var xKey = x.a;
      var yKey = y.a;
      var xNode = x.b;
      var yNode = y.b;
      var newMatch = undefined;
      var oldMatch = undefined; // check if keys match

      if (xKey === yKey) {
        index++;

        _1C__95VirtualDom_95diffHelp(xNode, yNode, localPatches, index);

        index += xNode.b || 0;
        xIndex++;
        yIndex++;
        continue;
      } // look ahead 1 to detect insertions and removals.


      var xNext = xKids[xIndex + 1];
      var yNext = yKids[yIndex + 1];

      if (xNext) {
        var xNextKey = xNext.a;
        var xNextNode = xNext.b;
        oldMatch = yKey === xNextKey;
      }

      if (yNext) {
        var yNextKey = yNext.a;
        var yNextNode = yNext.b;
        newMatch = xKey === yNextKey;
      } // swap x and y


      if (newMatch && oldMatch) {
        index++;

        _1C__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        _2t__95VirtualDom_95insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _2u__95VirtualDom_95removeNode(changes, localPatches, xKey, xNextNode, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 2;
        continue;
      } // insert y


      if (newMatch) {
        index++;

        _2t__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        _1C__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        index += xNode.b || 0;
        xIndex += 1;
        yIndex += 2;
        continue;
      } // remove x


      if (oldMatch) {
        index++;

        _2u__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        index += xNode.b || 0;
        index++;

        _1C__95VirtualDom_95diffHelp(xNextNode, yNode, localPatches, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 1;
        continue;
      } // remove x, insert y


      if (xNext && xNextKey === yNextKey) {
        index++;

        _2u__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        _2t__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _1C__95VirtualDom_95diffHelp(xNextNode, yNextNode, localPatches, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 2;
        continue;
      }

      break;
    } // eat up any remaining nodes with removeNode and insertNode


    while (xIndex < xLen) {
      index++;
      var x = xKids[xIndex];
      var xNode = x.b;

      _2u__95VirtualDom_95removeNode(changes, localPatches, x.a, xNode, index);

      index += xNode.b || 0;
      xIndex++;
    }

    while (yIndex < yLen) {
      var endInserts = endInserts || [];
      var y = yKids[yIndex];

      _2t__95VirtualDom_95insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);

      yIndex++;
    }

    if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
      _1t__95VirtualDom_95pushPatch(patches, 8, rootIndex, {
        w: localPatches,
        x: inserts,
        y: endInserts
      });
    }
  };

  var _2t__95VirtualDom_95insertNode = function (changes, localPatches, key, vnode, yIndex, inserts) {
    var entry = changes[key]; // never seen this key before

    if (!entry) {
      entry = {
        c: 0,
        z: vnode,
        r: yIndex,
        s: undefined
      };
      inserts.push({
        r: yIndex,
        A: entry
      });
      changes[key] = entry;
      return;
    } // this key was removed earlier, a match!


    if (entry.c === 1) {
      inserts.push({
        r: yIndex,
        A: entry
      });
      entry.c = 2;
      var subPatches = [];

      _1C__95VirtualDom_95diffHelp(entry.z, vnode, subPatches, entry.r);

      entry.r = yIndex;
      entry.s.s = {
        w: subPatches,
        A: entry
      };
      return;
    } // this key has already been inserted or moved, a duplicate!


    _2t__95VirtualDom_95insertNode(changes, localPatches, key + "_elmW6BL", vnode, yIndex, inserts);
  };

  var _2u__95VirtualDom_95removeNode = function (changes, localPatches, key, vnode, index) {
    var entry = changes[key]; // never seen this key before

    if (!entry) {
      var patch = _1t__95VirtualDom_95pushPatch(localPatches, 9, index, undefined);

      changes[key] = {
        c: 1,
        z: vnode,
        r: index,
        s: patch
      };
      return;
    } // this key was inserted earlier, a match!


    if (entry.c === 0) {
      entry.c = 2;
      var subPatches = [];

      _1C__95VirtualDom_95diffHelp(vnode, entry.z, subPatches, index);

      _1t__95VirtualDom_95pushPatch(localPatches, 9, index, {
        w: subPatches,
        A: entry
      });

      return;
    } // this key has already been removed or moved, a duplicate!


    _2u__95VirtualDom_95removeNode(changes, localPatches, key + "_elmW6BL", vnode, index);
  };

  var _1D__95VirtualDom_95addDomNodes = function (domNode, vNode, patches, eventNode) {
    _1z__95VirtualDom_95addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
  };

  var _1z__95VirtualDom_95addDomNodesHelp = function (domNode, vNode, patches, i, low, high, eventNode) {
    var patch = patches[i];
    var index = patch.r;

    while (index === low) {
      var patchType = patch.$;

      if (patchType === 1) {
        _1D__95VirtualDom_95addDomNodes(domNode, vNode.k, patch.s, eventNode);
      } else if (patchType === 8) {
        patch.t = domNode;
        patch.u = eventNode;
        var subPatches = patch.s.w;

        if (subPatches.length > 0) {
          _1z__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
        }
      } else if (patchType === 9) {
        patch.t = domNode;
        patch.u = eventNode;
        var data = patch.s;

        if (data) {
          data.A.s = domNode;
          var subPatches = data.w;

          if (subPatches.length > 0) {
            _1z__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
          }
        }
      } else {
        patch.t = domNode;
        patch.u = eventNode;
      }

      i++;

      if (!(patch = patches[i]) || (index = patch.r) > high) {
        return i;
      }
    }

    var tag = vNode.$;

    if (tag === 4) {
      var subNode = vNode.k;

      while (subNode.$ === 4) {
        subNode = subNode.k;
      }

      return _1z__95VirtualDom_95addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
    } // tag must be 1 or 2 at this point


    var vKids = vNode.e;
    var childNodes = domNode.childNodes;

    for (var j = 0; j < vKids.length; j++) {
      low++;
      var vKid = tag === 1 ? vKids[j] : vKids[j].b;
      var nextLow = low + (vKid.b || 0);

      if (low <= index && index <= nextLow) {
        i = _1z__95VirtualDom_95addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);

        if (!(patch = patches[i]) || (index = patch.r) > high) {
          return i;
        }
      }

      low = nextLow;
    }

    return i;
  };

  var _c__95VirtualDom_95applyPatches = function (rootDomNode, oldVirtualNode, patches, eventNode) {
    if (patches.length === 0) {
      return rootDomNode;
    }

    _1D__95VirtualDom_95addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);

    return _1R__95VirtualDom_95applyPatchesHelp(rootDomNode, patches);
  };

  var _1R__95VirtualDom_95applyPatchesHelp = function (rootDomNode, patches) {
    for (var i = 0; i < patches.length; i++) {
      var patch = patches[i];
      var localDomNode = patch.t;

      var newNode = _28__95VirtualDom_95applyPatch(localDomNode, patch);

      if (localDomNode === rootDomNode) {
        rootDomNode = newNode;
      }
    }

    return rootDomNode;
  };

  var _28__95VirtualDom_95applyPatch = function (domNode, patch) {
    switch (patch.$) {
      case 0:
        return _3E__95VirtualDom_95applyPatchRedraw(domNode, patch.s, patch.u);

      case 4:
        _3K__95VirtualDom_95applyFacts(domNode, patch.u, patch.s);

        return domNode;

      case 3:
        domNode.replaceData(0, domNode.length, patch.s);
        return domNode;

      case 1:
        return _1R__95VirtualDom_95applyPatchesHelp(domNode, patch.s);

      case 2:
        if (domNode.elm_event_node_ref) {
          domNode.elm_event_node_ref.j = patch.s;
        } else {
          domNode.elm_event_node_ref = {
            j: patch.s,
            p: patch.u
          };
        }

        return domNode;

      case 6:
        var data = patch.s;

        for (var i = 0; i < data.i; i++) {
          domNode.removeChild(domNode.childNodes[data.v]);
        }

        return domNode;

      case 7:
        var data = patch.s;
        var kids = data.e;
        var i = data.v;
        var theEnd = domNode.childNodes[i];

        for (; i < kids.length; i++) {
          domNode.insertBefore(_3L__95VirtualDom_95render(kids[i], patch.u), theEnd);
        }

        return domNode;

      case 9:
        var data = patch.s;

        if (!data) {
          domNode.parentNode.removeChild(domNode);
          return domNode;
        }

        var entry = data.A;

        if (typeof entry.r !== "undefined") {
          domNode.parentNode.removeChild(domNode);
        }

        entry.s = _1R__95VirtualDom_95applyPatchesHelp(domNode, data.w);
        return domNode;

      case 8:
        return _3M__95VirtualDom_95applyPatchReorder(domNode, patch);

      case 5:
        return patch.s(domNode);

      default:
        _s__95Debug_95crash(10);

      // 'Ran into an unknown patch!'
    }
  };

  var _3E__95VirtualDom_95applyPatchRedraw = function (domNode, vNode, eventNode) {
    var parentNode = domNode.parentNode;

    var newNode = _3L__95VirtualDom_95render(vNode, eventNode);

    if (!newNode.elm_event_node_ref) {
      newNode.elm_event_node_ref = domNode.elm_event_node_ref;
    }

    if (parentNode && newNode !== domNode) {
      parentNode.replaceChild(newNode, domNode);
    }

    return newNode;
  };

  var _3M__95VirtualDom_95applyPatchReorder = function (domNode, patch) {
    var data = patch.s; // remove end inserts

    var frag = _4C__95VirtualDom_95applyPatchReorderEndInsertsHelp(data.y, patch); // removals


    domNode = _1R__95VirtualDom_95applyPatchesHelp(domNode, data.w); // inserts

    var inserts = data.x;

    for (var i = 0; i < inserts.length; i++) {
      var insert = inserts[i];
      var entry = insert.A;
      var node = entry.c === 2 ? entry.s : _3L__95VirtualDom_95render(entry.z, patch.u);
      domNode.insertBefore(node, domNode.childNodes[insert.r]);
    } // add end inserts


    if (frag) {
      _4B__95VirtualDom_95appendChild(domNode, frag);
    }

    return domNode;
  };

  var _4C__95VirtualDom_95applyPatchReorderEndInsertsHelp = function (endInserts, patch) {
    if (!endInserts) {
      return;
    }

    var frag = _3n__95Browser_95doc.createDocumentFragment();

    for (var i = 0; i < endInserts.length; i++) {
      var insert = endInserts[i];
      var entry = insert.A;

      _4B__95VirtualDom_95appendChild(frag, entry.c === 2 ? entry.s : _3L__95VirtualDom_95render(entry.z, patch.u));
    }

    return frag;
  };

  var _Z__95VirtualDom_95virtualize = function (node) {
    // TEXT NODES
    if (node.nodeType === 3) {
      return _n__36elm_36html_36Html_36text(node.textContent);
    } // WEIRD NODES


    if (node.nodeType !== 1) {
      return _n__36elm_36html_36Html_36text("");
    } // ELEMENT NODES


    var attrList = _O__95List_95Nil;
    var attrs = node.attributes;

    for (var i = attrs.length; i--;) {
      var attr = attrs[i];
      var name = attr.name;
      var value = attr.value;
      attrList = _17__95List_95Cons(_18__95VirtualDom_95attribute_95raw(name, value), attrList);
    }

    var tag = node.tagName.toLowerCase();
    var kidList = _O__95List_95Nil;
    var kids = node.childNodes;

    for (var i = kids.length; i--;) {
      kidList = _17__95List_95Cons(_Z__95VirtualDom_95virtualize(kids[i]), kidList);
    }

    return _19_A3(_1A__95VirtualDom_95node, tag, attrList, kidList);
  };

  var _1s__95VirtualDom_95dekey = function (keyedNode) {
    var keyedKids = keyedNode.e;
    var len = keyedKids.length;
    var kids = new Array(len);

    for (var i = 0; i < len; i++) {
      kids[i] = keyedKids[i].b;
    }

    return {
      $: 1,
      c: keyedNode.c,
      d: keyedNode.d,
      e: kids,
      f: keyedNode.f,
      b: keyedNode.b
    };
  };

  var _a__95Browser_95makeAnimator = function (model, draw) {
    draw(model);
    var state = 0;

    function updateIfNeeded() {
      state = state === 1 ? 0 : (_1B__95Browser_95requestAnimationFrame(updateIfNeeded), draw(model), 1);
    }

    return function (nextModel, isSync) {
      model = nextModel;
      isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _1B__95Browser_95requestAnimationFrame(updateIfNeeded), state = 2);
    };
  };

  var _5N__95Utils_95compare_95raw = function (x, y) {
    var n = _3W__95Utils_95cmp(x, y);

    return n < 0 ? 0 : n ? 2 : 1;
  };

  var _4s__95List_95map2_95raw = function (f, xs, ys) {
    for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
    {
      arr.push(_w_A2(f, xs.a, ys.a));
    }

    return _2e__95List_95fromArray(arr);
  };

  var _4E__95JsArray_95initialize_95raw = function (size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  };

  var _5l__95JsArray_95initializeFromList_95raw = function (max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _x__95Utils_95Tuple2(result, ls);
  };

  var _3c__95Basics_95modBy_95raw = function (modulus, x) {
    var answer = x % modulus;
    return modulus === 0 ? _s__95Debug_95crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
  };

  var _40__95Json_95addField_95raw = function (key, value, object) {
    object[key] = _1P__95Json_95unwrap(value);
    return object;
  };

  var _4g__36elm_36core_36Dict_36foldr_95raw = function (func, acc, t) {
    foldr: while (true) {
      if (t.$ === -2) {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;

        var $temp$func = func,
            $temp$acc = _19_A3(func, key, value, _4g__36elm_36core_36Dict_36foldr_95raw(func, acc, right)),
            $temp$t = left;

        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
  };

  var _3F__36elm_36core_36List_36foldl_95raw = function (func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;

        var $temp$func = func,
            $temp$acc = _w_A2(func, x, acc),
            $temp$list = xs;

        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  };

  var _5m__36elm_36core_36Array_36compressNodes_95raw = function (nodes, acc) {
    compressNodes: while (true) {
      var _v0 = _5l__95JsArray_95initializeFromList_95raw(32, nodes);

      var node = _v0.a;
      var remainingNodes = _v0.b;

      var newAcc = _17__95List_95Cons(_63__36elm_36core_36Array_36SubTree(node), acc);

      if (!remainingNodes.b) {
        return _2J__36elm_36core_36List_36reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
            $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  };

  var _5L__36elm_36core_36Array_36treeFromBuilder_95raw = function (nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = _5k__36elm_36core_36Basics_36ceiling(nodeListSize / 32);

      if (newNodeSize === 1) {
        return _5l__95JsArray_95initializeFromList_95raw(32, nodeList).a;
      } else {
        var $temp$nodeList = _5m__36elm_36core_36Array_36compressNodes_95raw(nodeList, _O__95List_95Nil),
            $temp$nodeListSize = newNodeSize;

        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  };

  var _4x__36elm_36core_36Array_36builderToArray_95raw = function (reverseNodeList, builder) {
    if (!builder.l) {
      return _5H__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_5I__36elm_36core_36Elm_36JsArray_36length(builder.n), 5, _3t__36elm_36core_36Elm_36JsArray_36empty, builder.n);
    } else {
      var treeLen = builder.l * 32;

      var depth = _4k__36elm_36core_36Basics_36floor(_5K__36elm_36core_36Basics_36logBase_95raw(32, treeLen - 1));

      var correctNodeList = reverseNodeList ? _2J__36elm_36core_36List_36reverse(builder.o) : builder.o;

      var tree = _5L__36elm_36core_36Array_36treeFromBuilder_95raw(correctNodeList, builder.l);

      return _5H__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_5I__36elm_36core_36Elm_36JsArray_36length(builder.n) + treeLen, _5M__36elm_36core_36Basics_36max_95raw(5, depth * 5), tree, builder.n);
    }
  };

  var _4F__36elm_36core_36Array_36initializeHelp_95raw = function (fn, fromIndex, len, nodeList, tail) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return _4x__36elm_36core_36Array_36builderToArray_95raw(false, {
          o: nodeList,
          l: len / 32 | 0,
          n: tail
        });
      } else {
        var leaf = _4y__36elm_36core_36Array_36Leaf(_4E__95JsArray_95initialize_95raw(32, fromIndex, fn));

        var $temp$fn = fn,
            $temp$fromIndex = fromIndex - 32,
            $temp$len = len,
            $temp$nodeList = _17__95List_95Cons(leaf, nodeList),
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

  var _3Q__36elm_36core_36Array_36initialize_95raw = function (len, fn) {
    if (len <= 0) {
      return _3p__36elm_36core_36Array_36empty;
    } else {
      var tailLen = len % 32;

      var tail = _4E__95JsArray_95initialize_95raw(tailLen, len - tailLen, fn);

      var initialFromIndex = len - tailLen - 32;
      return _4F__36elm_36core_36Array_36initializeHelp_95raw(fn, initialFromIndex, len, _O__95List_95Nil, tail);
    }
  };

  var _v__36elm_36core_36Result_36isOk = function (result) {
    if (!result.$) {
      return true;
    } else {
      return false;
    }
  };

  var _4l__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt = function (handler) {
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

  var _2d__36elm_36core_36List_36foldrHelper_95raw = function (fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;

      if (!r1.b) {
        return _w_A2(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;

        if (!r2.b) {
          return _w_A2(fn, a, _w_A2(fn, b, acc));
        } else {
          var c = r2.a;
          var r3 = r2.b;

          if (!r3.b) {
            return _w_A2(fn, a, _w_A2(fn, b, _w_A2(fn, c, acc)));
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res = ctr > 500 ? _3F__36elm_36core_36List_36foldl_95raw(fn, acc, _2J__36elm_36core_36List_36reverse(r4)) : _2d__36elm_36core_36List_36foldrHelper_95raw(fn, acc, ctr + 1, r4);
            return _w_A2(fn, a, _w_A2(fn, b, _w_A2(fn, c, _w_A2(fn, d, res))));
          }
        }
      }
    }
  };

  var _3j__36elm_36core_36Task_36spawnCmd_95raw = function (router, _v0) {
    var task = _v0;
    return _4V__95Scheduler_95spawn(_2R__95Scheduler_95andThen_95raw(_4W__36elm_36core_36Platform_36sendToApp(router), task));
  };

  var _25__36elm_36core_36Task_36cmdMap_95raw = function (tagger, _v0) {
    var task = _v0;
    return _2Q__36elm_36core_36Task_36map_95raw(tagger, task);
  };

  var _2i__36elm_36core_36List_36any_95raw = function (isOkay, list) {
    any: while (true) {
      if (!list.b) {
        return false;
      } else {
        var x = list.a;
        var xs = list.b;

        if (isOkay(x)) {
          return true;
        } else {
          var $temp$isOkay = isOkay,
              $temp$list = xs;
          isOkay = $temp$isOkay;
          list = $temp$list;
          continue any;
        }
      }
    }
  };

  var _3i__36elm_36core_36Dict_36foldl_95raw = function (func, acc, dict) {
    foldl: while (true) {
      if (dict.$ === -2) {
        return acc;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var $temp$func = func,
            $temp$acc = _19_A3(func, key, value, _3i__36elm_36core_36Dict_36foldl_95raw(func, acc, left)),
            $temp$dict = right;

        func = $temp$func;
        acc = $temp$acc;
        dict = $temp$dict;
        continue foldl;
      }
    }
  };

  var _2h__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count = function (_v0) {
    var samples = _v0;
    return _3i__36elm_36core_36Dict_36foldl_95raw(_2n_F3((_v1, times, acc) => _3k__36elm_36core_36List_36length(times) + acc), 0, samples);
  };

  var _1b__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress = function (status) {
    switch (status.$) {
      case 0:
        return 0;

      case 1:
        return 0;

      case 2:
        var samples = status.b;
        return _2g__36elm_36core_36Basics_36clamp_95raw(0, 1, _2h__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples) / (25 * 5));

      case 3:
        return 1;

      default:
        return 1;
    }
  };

  var _12__36elm_95explorations_36benchmark_36Benchmark_36done = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var status = benchmark_.c;
        return _1b__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status) === 1;

      case 1:
        var benchmarks = benchmark_.b;
        return _1c__36elm_36core_36List_36all_95raw(_1d__36elm_36core_36Basics_36eq(1), _z__36elm_36core_36List_36map_95raw(_1b__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress, _z__36elm_36core_36List_36map_95raw(function (_v1) {
          var status = _v1.c;
          return status;
        }, benchmarks)));

      default:
        var benchmarks = benchmark_.b;
        return _1c__36elm_36core_36List_36all_95raw(_12__36elm_95explorations_36benchmark_36Benchmark_36done, benchmarks);
    }
  };

  var _5n__36elm_36core_36Dict_36balance_95raw = function (color, key, value, left, right) {
    if (right.$ === -1 && !right.a) {
      var _v1 = right.a;
      var rK = right.b;
      var rV = right.c;
      var rLeft = right.d;
      var rRight = right.e;

      if (left.$ === -1 && !left.a) {
        var _v3 = left.a;
        var lK = left.b;
        var lV = left.c;
        var lLeft = left.d;
        var lRight = left.e;
        return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, lK, lV, lLeft, lRight), _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rLeft, rRight));
      } else {
        return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, rK, rV, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, left, rLeft), rRight);
      }
    } else {
      if (left.$ === -1 && !left.a && left.d.$ === -1 && !left.d.a) {
        var _v5 = left.a;
        var lK = left.b;
        var lV = left.c;
        var _v6 = left.d;
        var _v7 = _v6.a;
        var llK = _v6.b;
        var llV = _v6.c;
        var llLeft = _v6.d;
        var llRight = _v6.e;
        var lRight = left.e;
        return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, key, value, lRight, right));
      } else {
        return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, left, right);
      }
    }
  };

  var _5O__36elm_36core_36Dict_36insertHelp_95raw = function (key, value, dict) {
    if (dict.$ === -2) {
      return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty, _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty);
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;

      var _v1 = _5N__95Utils_95compare_95raw(key, nKey);

      switch (_v1) {
        case 0:
          return _5n__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _5O__36elm_36core_36Dict_36insertHelp_95raw(key, value, nLeft), nRight);

        case 1:
          return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(nColor, nKey, value, nLeft, nRight);

        default:
          return _5n__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, nLeft, _5O__36elm_36core_36Dict_36insertHelp_95raw(key, value, nRight));
      }
    }
  };

  var _54__36elm_36core_36Dict_36insert_95raw = function (key, value, dict) {
    var _v0 = _5O__36elm_36core_36Dict_36insertHelp_95raw(key, value, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _47__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0 = function (_v0) {
    var precalculated = _v0.a;
    return precalculated;
  };

  var _60__36elm_36core_36Dict_36map_95raw = function (func, dict) {
    if (dict.$ === -2) {
      return _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, _w_A2(func, key, value), _60__36elm_36core_36Dict_36map_95raw(func, left), _60__36elm_36core_36Dict_36map_95raw(func, right));
    }
  };

  var _5U__36elm_36core_36Result_36map_95raw = function (func, ra) {
    if (!ra.$) {
      var a = ra.a;
      return _2B__36elm_36core_36Result_36Ok(func(a));
    } else {
      var e = ra.a;
      return _2G__36elm_36core_36Result_36Err(e);
    }
  };

  var _61__36elm_36core_36List_36partition_95raw = function (pred, list) {
    var step = _1a_F2(function (x, _v0) {
      var trues = _v0.a;
      var falses = _v0.b;
      return pred(x) ? _x__95Utils_95Tuple2(_17__95List_95Cons(x, trues), falses) : _x__95Utils_95Tuple2(trues, _17__95List_95Cons(x, falses));
    });

    return _1Z__36elm_36core_36List_36foldr_95raw(step, _x__95Utils_95Tuple2(_O__95List_95Nil, _O__95List_95Nil), list);
  };

  var _5B__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw = function (_v0, x) {
    var slope = _v0.aQ;
    var intercept = _v0.aL;
    return slope * x + intercept;
  };

  var _6B__36elm_36core_36Result_36fromMaybe_95raw = function (err, maybe) {
    if (!maybe.$) {
      var v = maybe.a;
      return _2B__36elm_36core_36Result_36Ok(v);
    } else {
      return _2G__36elm_36core_36Result_36Err(err);
    }
  };

  var _6C__36elm_36core_36Maybe_36map3_95raw = function (func, ma, mb, mc) {
    if (ma.$ === 1) {
      return _4b__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _4b__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;

        if (mc.$ === 1) {
          return _4b__36elm_36core_36Maybe_36Nothing;
        } else {
          var c = mc.a;
          return _4Q__36elm_36core_36Maybe_36Just(_19_A3(func, a, b, c));
        }
      }
    }
  };

  var _6H__36elm_36core_36Maybe_36andThen_95raw = function (callback, maybeValue) {
    if (!maybeValue.$) {
      var value = maybeValue.a;
      return callback(value);
    } else {
      return _4b__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _6K__36elm_36core_36Maybe_36map_95raw = function (f, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return _4Q__36elm_36core_36Maybe_36Just(f(value));
    } else {
      return _4b__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _6L__36elm_36core_36Maybe_36map2_95raw = function (func, ma, mb) {
    if (ma.$ === 1) {
      return _4b__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _4b__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;
        return _4Q__36elm_36core_36Maybe_36Just(_w_A2(func, a, b));
      }
    }
  };

  var _6O__36elm_36core_36List_36drop_95raw = function (n, list) {
    drop: while (true) {
      if (n <= 0) {
        return list;
      } else {
        if (!list.b) {
          return list;
        } else {
          var x = list.a;
          var xs = list.b;
          var $temp$n = n - 1,
              $temp$list = xs;
          n = $temp$n;
          list = $temp$list;
          continue drop;
        }
      }
    }
  };

  var _6N__36elm_36core_36List_36head = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _4Q__36elm_36core_36Maybe_36Just(x);
    } else {
      return _4b__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean = function (numbers) {
    if (!numbers.b) {
      return _2G__36elm_36core_36Result_36Err(_5G__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(1));
    } else {
      return _2B__36elm_36core_36Result_36Ok(_4r__36elm_36core_36List_36sum(numbers) / _3k__36elm_36core_36List_36length(numbers));
    }
  };

  var _6T__36elm_36core_36List_36takeReverse_95raw = function (n, list, kept) {
    takeReverse: while (true) {
      if (n <= 0) {
        return kept;
      } else {
        if (!list.b) {
          return kept;
        } else {
          var x = list.a;
          var xs = list.b;

          var $temp$n = n - 1,
              $temp$list = xs,
              $temp$kept = _17__95List_95Cons(x, kept);

          n = $temp$n;
          list = $temp$list;
          kept = $temp$kept;
          continue takeReverse;
        }
      }
    }
  };

  var _6R__36elm_36core_36List_36takeFast_95raw = function (ctr, n, list) {
    if (n <= 0) {
      return _O__95List_95Nil;
    } else {
      var _v0 = _x__95Utils_95Tuple2(n, list);

      _v0$1: while (true) {
        _v0$5: while (true) {
          if (!_v0.b.b) {
            return list;
          } else {
            if (_v0.b.b.b) {
              switch (_v0.a) {
                case 1:
                  break _v0$1;

                case 2:
                  var _v2 = _v0.b;
                  var x = _v2.a;
                  var _v3 = _v2.b;
                  var y = _v3.a;
                  return {
                    $: 1,
                    a: x,
                    b: {
                      $: 1,
                      a: y,
                      b: _O__95List_95Nil
                    }
                  };

                case 3:
                  if (_v0.b.b.b.b) {
                    var _v4 = _v0.b;
                    var x = _v4.a;
                    var _v5 = _v4.b;
                    var y = _v5.a;
                    var _v6 = _v5.b;
                    var z = _v6.a;
                    return {
                      $: 1,
                      a: x,
                      b: {
                        $: 1,
                        a: y,
                        b: {
                          $: 1,
                          a: z,
                          b: _O__95List_95Nil
                        }
                      }
                    };
                  } else {
                    break _v0$5;
                  }

                default:
                  if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                    var _v7 = _v0.b;
                    var x = _v7.a;
                    var _v8 = _v7.b;
                    var y = _v8.a;
                    var _v9 = _v8.b;
                    var z = _v9.a;
                    var _v10 = _v9.b;
                    var w = _v10.a;
                    var tl = _v10.b;
                    return ctr > 1000 ? _17__95List_95Cons(x, _17__95List_95Cons(y, _17__95List_95Cons(z, _17__95List_95Cons(w, _6S__36elm_36core_36List_36takeTailRec_95raw(n - 4, tl))))) : _17__95List_95Cons(x, _17__95List_95Cons(y, _17__95List_95Cons(z, _17__95List_95Cons(w, _6R__36elm_36core_36List_36takeFast_95raw(ctr + 1, n - 4, tl)))));
                  } else {
                    break _v0$5;
                  }

              }
            } else {
              if (_v0.a === 1) {
                break _v0$1;
              } else {
                break _v0$5;
              }
            }
          }
        }

        return list;
      }

      var _v1 = _v0.b;
      var x = _v1.a;
      return {
        $: 1,
        a: x,
        b: _O__95List_95Nil
      };
    }
  };

  var _6P__36elm_36core_36Result_36toMaybe = function (result) {
    if (!result.$) {
      var v = result.a;
      return _4Q__36elm_36core_36Maybe_36Just(v);
    } else {
      return _4b__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _6G__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw = function (k, xs) {
    var index = _3k__36elm_36core_36List_36length(xs) * k;
    return !(index - _4k__36elm_36core_36Basics_36floor(index)) ? _6N__36elm_36core_36List_36head(_6O__36elm_36core_36List_36drop_95raw(_5k__36elm_36core_36Basics_36ceiling(index) - 1, xs)) : _6P__36elm_36core_36Result_36toMaybe(_4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_6Q__36elm_36core_36List_36take_95raw(2, _6O__36elm_36core_36List_36drop_95raw(_4k__36elm_36core_36Basics_36floor(index) - 1, xs))));
  };

  var _6E__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw = function (pct, slopes, points) {
    var slope = _6G__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(pct, slopes);

    var intercept = _6H__36elm_36core_36Maybe_36andThen_95raw(_6I__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile(pct), _6K__36elm_36core_36Maybe_36map_95raw(_67__36elm_36core_36List_36sort, _6K__36elm_36core_36Maybe_36map_95raw(m => _z__36elm_36core_36List_36map_95raw(function (_v0) {
      var x = _v0.a;
      var y = _v0.b;
      return y - m * x;
    }, points), slope)));

    return _6L__36elm_36core_36Maybe_36map2_95raw(_5X__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slope, intercept);
  };

  var _62__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust = function (values) {
    if (!values.b) {
      return _2G__36elm_36core_36Result_36Err(_5G__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _2G__36elm_36core_36Result_36Err(_5G__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var slopes = _67__36elm_36core_36List_36sort(_3F__36elm_36core_36List_36foldl_95raw(_1a_F2(function (_v1, acc1) {
          var x = _v1.a;
          var y = _v1.b;
          return _3F__36elm_36core_36List_36foldl_95raw(_1a_F2(function (_v2, acc2) {
            var x1 = _v2.a;
            var y1 = _v2.b;
            var res = (y - y1) / (x - x1);
            return _5u__36elm_36core_36Basics_36isNaN(res) ? acc2 : _17__95List_95Cons(res, acc2);
          }), acc1, values);
        }), _O__95List_95Nil, values));

        var finiteSlopes = _68__36elm_36core_36List_36filter_95raw(_w_A2(_2j__36elm_36core_36Basics_36composeL, _2l__36elm_36core_36Basics_36not, _69__36elm_36core_36Basics_36isInfinite), slopes);

        return _6B__36elm_36core_36Result_36fromMaybe_95raw(_5g__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros, _6C__36elm_36core_36Maybe_36map3_95raw(_2n_F3((trendLine, lower, upper) => _5V__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, _6D__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw(lower, upper))), _6E__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.5, finiteSlopes, values), _6E__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.975, slopes, values), _6E__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.025, slopes, values)));
      }
    }
  };

  var _4p__36elm_36core_36Result_36withDefault_95raw = function (def, result) {
    if (!result.$) {
      var a = result.a;
      return a;
    } else {
      return def;
    }
  };

  var _5c__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups = function (_v0) {
    var samples = _v0;
    return _4p__36elm_36core_36Result_36withDefault_95raw(_x__95Utils_95Tuple2(samples, _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty), _5U__36elm_36core_36Result_36map_95raw(_w_A2(_5y__36elm_36core_36Dict_36foldl, _2n_F3(function (key, _v1, _v2) {
      var good = _v1.a;
      var outliers = _v1.b;
      var accGood = _v2.a;
      var accOutliers = _v2.b;
      return _x__95Utils_95Tuple2(_54__36elm_36core_36Dict_36insert_95raw(key, good, accGood), _54__36elm_36core_36Dict_36insert_95raw(key, outliers, accOutliers));
    }), _x__95Utils_95Tuple2(_32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty, _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty)), _5U__36elm_36core_36Result_36map_95raw(line => _60__36elm_36core_36Dict_36map_95raw(_1a_F2(function (sampleSize, values) {
      var predicted = _5B__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(line, sampleSize);

      var upperBound = predicted * 1.1;
      var lowerBound = predicted / 1.1;
      return _61__36elm_36core_36List_36partition_95raw(v => _3W__95Utils_95cmp(lowerBound, v) < 0 && _3W__95Utils_95cmp(v, upperBound) < 0, values);
    }), samples), _5U__36elm_36core_36Result_36map_95raw(_47__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, _62__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust(_5a__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify(samples))))));
  };

  var _5b__36elm_36core_36Tuple_36mapFirst_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _x__95Utils_95Tuple2(func(x), y);
  };

  var _5Z__36elm_36core_36Tuple_36mapSecond_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _x__95Utils_95Tuple2(x, func(y));
  };

  var _5t__36elm_36core_36Result_36andThen_95raw = function (callback, result) {
    if (!result.$) {
      var value = result.a;
      return callback(value);
    } else {
      var msg = result.a;
      return _2G__36elm_36core_36Result_36Err(msg);
    }
  };

  var _5W__36elm_36core_36Result_36map2_95raw = function (func, ra, rb) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _2G__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _2G__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;
        return _2B__36elm_36core_36Result_36Ok(_w_A2(func, a, b));
      }
    }
  };

  var _5T__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev = function (numbers) {
    var helper = seriesMean => _5U__36elm_36core_36Result_36map_95raw(_5v__36elm_36core_36Basics_36sqrt, _4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_z__36elm_36core_36List_36map_95raw(n => _w_A2(_4t__36elm_36core_36Basics_36pow, n - seriesMean, 2), numbers)));

    return _5t__36elm_36core_36Result_36andThen_95raw(helper, _4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(numbers));
  };

  var _4m__36elm_36core_36List_36unzip = function (pairs) {
    var step_raw = function (_v0, _v1) {
      var x = _v0.a;
      var y = _v0.b;
      var xs = _v1.a;
      var ys = _v1.b;
      return _x__95Utils_95Tuple2(_17__95List_95Cons(x, xs), _17__95List_95Cons(y, ys));
    },
        step = _1a_F2(step_raw);

    return _1Z__36elm_36core_36List_36foldr_95raw(step, _x__95Utils_95Tuple2(_O__95List_95Nil, _O__95List_95Nil), pairs);
  };

  var _5S__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation = function (values) {
    if (!values.b) {
      return _2G__36elm_36core_36Result_36Err(_5G__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _2G__36elm_36core_36Result_36Err(_5G__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var standardize_raw = (meanResult, stddevResult, series) => _5W__36elm_36core_36Result_36map2_95raw(_1a_F2((meanValue, stddevValue) => _z__36elm_36core_36List_36map_95raw(point => (point - meanValue) / stddevValue, series)), meanResult, stddevResult),
            standardize = _2n_F3(standardize_raw);

        var _v1 = _4m__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var summedProduct = _5U__36elm_36core_36Result_36map_95raw(_4r__36elm_36core_36List_36sum, _5W__36elm_36core_36Result_36map2_95raw(_1a_F2((stdX, stdY) => _4s__95List_95map2_95raw(_5r__36elm_36core_36Basics_36mul, stdX, stdY)), standardize_raw(_4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs), _5T__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs), xs), standardize_raw(_4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), _5T__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), ys)));

        return _5t__36elm_36core_36Result_36andThen_95raw(val => _5u__36elm_36core_36Basics_36isNaN(val) ? _2G__36elm_36core_36Result_36Err(_5g__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros) : _2B__36elm_36core_36Result_36Ok(val), _5U__36elm_36core_36Result_36map_95raw(sum => sum / _3k__36elm_36core_36List_36length(values), summedProduct));
      }
    }
  };

  var _5R__36elm_36core_36Result_36map3_95raw = function (func, ra, rb, rc) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _2G__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _2G__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;

        if (rc.$ === 1) {
          var x = rc.a;
          return _2G__36elm_36core_36Result_36Err(x);
        } else {
          var c = rc.a;
          return _2B__36elm_36core_36Result_36Ok(_19_A3(func, a, b, c));
        }
      }
    }
  };

  var _56__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick = function (values) {
    if (!values.b) {
      return _2G__36elm_36core_36Result_36Err(_5G__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _2G__36elm_36core_36Result_36Err(_5G__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var _v1 = _4m__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var slopeResult = _5R__36elm_36core_36Result_36map3_95raw(_2n_F3((correl, stddevY, stddevX) => correl * stddevY / stddevX), _5S__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation(values), _5T__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), _5T__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs));

        var intercept = _5R__36elm_36core_36Result_36map3_95raw(_2n_F3((meanY, slope, meanX) => meanY - slope * meanX), _4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), slopeResult, _4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs));

        return _5U__36elm_36core_36Result_36map_95raw(trendLine => _5V__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, values), _5W__36elm_36core_36Result_36map2_95raw(_5X__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slopeResult, intercept));
      }
    }
  };

  var _3e__36elm_95explorations_36benchmark_36Benchmark_36finalize = function (samples) {
    var _v0 = _4R__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend(samples);

    if (!_v0.$) {
      var trend = _v0.a;
      return _4S__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw(samples, trend);
    } else {
      var err = _v0.a;
      return _3X__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure(_4T__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError(err));
    }
  };

  var _4K__36elm_36core_36List_36minimum = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _4Q__36elm_36core_36Maybe_36Just(_3F__36elm_36core_36List_36foldl_95raw(_4z__36elm_36core_36Basics_36min, x, xs));
    } else {
      return _4b__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _51__36elm_36core_36List_36repeatHelp_95raw = function (result, n, value) {
    repeatHelp: while (true) {
      if (n <= 0) {
        return result;
      } else {
        var $temp$result = _17__95List_95Cons(value, result),
            $temp$n = n - 1,
            $temp$value = value;

        result = $temp$result;
        n = $temp$n;
        value = $temp$value;
        continue repeatHelp;
      }
    }
  };

  var _4O__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize = function (sampleSize) {
    var helper_raw = function (rough, magnitude) {
      helper: while (true) {
        if (rough > 10) {
          var $temp$rough = _52__36elm_36core_36Basics_36round(rough / 10),
              $temp$magnitude = magnitude * 10;

          rough = $temp$rough;
          magnitude = $temp$magnitude;
          continue helper;
        } else {
          return rough * magnitude;
        }
      }
    },
        helper = _1a_F2(helper_raw);

    return helper_raw(sampleSize, 1);
  };

  var _4a__36elm_36core_36Maybe_36withDefault_95raw = function (_default, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  };

  var _3b__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw = function (minimumRuntime, operation_) {
    var sampleSize = i => i * 10;

    var resample = _1a_F2((iteration, total) => _3W__95Utils_95cmp(total, minimumRuntime) < 0 ? _2R__95Scheduler_95andThen_95raw(resample(iteration + 1), _2Q__36elm_36core_36Task_36map_95raw(_w_A2(_4I__36elm_36core_36Basics_36composeR, _4K__36elm_36core_36List_36minimum, _4L__36elm_36core_36Maybe_36withDefault(0)), _2Z__36elm_36core_36Task_36sequence(_4N__36elm_36core_36List_36repeat_95raw(3, _3f__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize(iteration), operation_))))) : _3A__36elm_36core_36Task_36succeed(sampleSize(iteration)));

    return _2Q__36elm_36core_36Task_36map_95raw(_4O__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize, _w_A2(resample, 1, 0));
  };

  var _53__36elm_36core_36Dict_36get_95raw = function (targetKey, dict) {
    get: while (true) {
      if (dict.$ === -2) {
        return _4b__36elm_36core_36Maybe_36Nothing;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var _v1 = _5N__95Utils_95compare_95raw(targetKey, key);

        switch (_v1) {
          case 0:
            var $temp$targetKey = targetKey,
                $temp$dict = left;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;

          case 1:
            return _4Q__36elm_36core_36Maybe_36Just(value);

          default:
            var $temp$targetKey = targetKey,
                $temp$dict = right;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;
        }
      }
    }
  };

  var _64__36elm_36core_36Dict_36getMin = function (dict) {
    getMin: while (true) {
      if (dict.$ === -1 && dict.d.$ === -1) {
        var left = dict.d;
        var $temp$dict = left;
        dict = $temp$dict;
        continue getMin;
      } else {
        return dict;
      }
    }
  };

  var _5o__36elm_36core_36Dict_36moveRedLeft = function (dict) {
    if (dict.$ === -1 && dict.d.$ === -1 && dict.e.$ === -1) {
      if (dict.e.d.$ === -1 && !dict.e.d.a) {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v1 = dict.d;
        var lClr = _v1.a;
        var lK = _v1.b;
        var lV = _v1.c;
        var lLeft = _v1.d;
        var lRight = _v1.e;
        var _v2 = dict.e;
        var rClr = _v2.a;
        var rK = _v2.b;
        var rV = _v2.c;
        var rLeft = _v2.d;
        var _v3 = rLeft.a;
        var rlK = rLeft.b;
        var rlV = rLeft.c;
        var rlL = rLeft.d;
        var rlR = rLeft.e;
        var rRight = _v2.e;
        return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rlK, rlV, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), rlL), _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rlR, rRight));
      } else {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v4 = dict.d;
        var lClr = _v4.a;
        var lK = _v4.b;
        var lV = _v4.c;
        var lLeft = _v4.d;
        var lRight = _v4.e;
        var _v5 = dict.e;
        var rClr = _v5.a;
        var rK = _v5.b;
        var rV = _v5.c;
        var rLeft = _v5.d;
        var rRight = _v5.e;

        if (clr === 1) {
          return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _66__36elm_36core_36Dict_36moveRedRight = function (dict) {
    if (dict.$ === -1 && dict.d.$ === -1 && dict.e.$ === -1) {
      if (dict.d.d.$ === -1 && !dict.d.d.a) {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v1 = dict.d;
        var lClr = _v1.a;
        var lK = _v1.b;
        var lV = _v1.c;
        var _v2 = _v1.d;
        var _v3 = _v2.a;
        var llK = _v2.b;
        var llV = _v2.c;
        var llLeft = _v2.d;
        var llRight = _v2.e;
        var lRight = _v1.e;
        var _v4 = dict.e;
        var rClr = _v4.a;
        var rK = _v4.b;
        var rV = _v4.c;
        var rLeft = _v4.d;
        var rRight = _v4.e;
        return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, lRight, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight)));
      } else {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v5 = dict.d;
        var lClr = _v5.a;
        var lK = _v5.b;
        var lV = _v5.c;
        var lLeft = _v5.d;
        var lRight = _v5.e;
        var _v6 = dict.e;
        var rClr = _v6.a;
        var rK = _v6.b;
        var rV = _v6.c;
        var rLeft = _v6.d;
        var rRight = _v6.e;

        if (clr === 1) {
          return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _5q__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw = function (targetKey, dict, color, key, value, left, right) {
    if (left.$ === -1 && !left.a) {
      var _v1 = left.a;
      var lK = left.b;
      var lV = left.c;
      var lLeft = left.d;
      var lRight = left.e;
      return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, lK, lV, lLeft, _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, lRight, right));
    } else {
      _v2$2: while (true) {
        if (right.$ === -1 && right.a === 1) {
          if (right.d.$ === -1) {
            if (right.d.a === 1) {
              var _v3 = right.a;
              var _v4 = right.d;
              var _v5 = _v4.a;
              return _66__36elm_36core_36Dict_36moveRedRight(dict);
            } else {
              break _v2$2;
            }
          } else {
            var _v6 = right.a;
            var _v7 = right.d;
            return _66__36elm_36core_36Dict_36moveRedRight(dict);
          }
        } else {
          break _v2$2;
        }
      }

      return dict;
    }
  };

  var _65__36elm_36core_36Dict_36removeMin = function (dict) {
    if (dict.$ === -1 && dict.d.$ === -1) {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var lColor = left.a;
      var lLeft = left.d;
      var right = dict.e;

      if (lColor === 1) {
        if (lLeft.$ === -1 && !lLeft.a) {
          var _v3 = lLeft.a;
          return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _65__36elm_36core_36Dict_36removeMin(left), right);
        } else {
          var _v4 = _5o__36elm_36core_36Dict_36moveRedLeft(dict);

          if (_v4.$ === -1) {
            var nColor = _v4.a;
            var nKey = _v4.b;
            var nValue = _v4.c;
            var nLeft = _v4.d;
            var nRight = _v4.e;
            return _5n__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _65__36elm_36core_36Dict_36removeMin(nLeft), nRight);
          } else {
            return _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
          }
        }
      } else {
        return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _65__36elm_36core_36Dict_36removeMin(left), right);
      }
    } else {
      return _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    }
  };

  var _5Q__36elm_36core_36Dict_36removeHelp_95raw = function (targetKey, dict) {
    if (dict.$ === -2) {
      return _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_3W__95Utils_95cmp(targetKey, key) < 0) {
        if (left.$ === -1 && left.a === 1) {
          var _v4 = left.a;
          var lLeft = left.d;

          if (lLeft.$ === -1 && !lLeft.a) {
            var _v6 = lLeft.a;
            return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _5Q__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
          } else {
            var _v7 = _5o__36elm_36core_36Dict_36moveRedLeft(dict);

            if (_v7.$ === -1) {
              var nColor = _v7.a;
              var nKey = _v7.b;
              var nValue = _v7.c;
              var nLeft = _v7.d;
              var nRight = _v7.e;
              return _5n__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _5Q__36elm_36core_36Dict_36removeHelp_95raw(targetKey, nLeft), nRight);
            } else {
              return _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
            }
          }
        } else {
          return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _5Q__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
        }
      } else {
        return _5p__36elm_36core_36Dict_36removeHelpEQGT_95raw(targetKey, _5q__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw(targetKey, dict, color, key, value, left, right));
      }
    }
  };

  var _5p__36elm_36core_36Dict_36removeHelpEQGT_95raw = function (targetKey, dict) {
    if (dict.$ === -1) {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_22__95Utils_95eq(targetKey, key)) {
        var _v1 = _64__36elm_36core_36Dict_36getMin(right);

        if (_v1.$ === -1) {
          var minKey = _v1.b;
          var minValue = _v1.c;
          return _5n__36elm_36core_36Dict_36balance_95raw(color, minKey, minValue, left, _65__36elm_36core_36Dict_36removeMin(right));
        } else {
          return _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
        }
      } else {
        return _5n__36elm_36core_36Dict_36balance_95raw(color, key, value, left, _5Q__36elm_36core_36Dict_36removeHelp_95raw(targetKey, right));
      }
    } else {
      return _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    }
  };

  var _55__36elm_36core_36Dict_36remove_95raw = function (key, dict) {
    var _v0 = _5Q__36elm_36core_36Dict_36removeHelp_95raw(key, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _4P__36elm_36core_36Dict_36update_95raw = function (targetKey, alter, dictionary) {
    var _v0 = alter(_53__36elm_36core_36Dict_36get_95raw(targetKey, dictionary));

    if (!_v0.$) {
      var value = _v0.a;
      return _54__36elm_36core_36Dict_36insert_95raw(targetKey, value, dictionary);
    } else {
      return _55__36elm_36core_36Dict_36remove_95raw(targetKey, dictionary);
    }
  };

  var _3d__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw = function (sampleSize, sample, _v0) {
    var samplesDict = _v0;
    return _4P__36elm_36core_36Dict_36update_95raw(sampleSize, function (value) {
      if (value.$ === 1) {
        return _4Q__36elm_36core_36Maybe_36Just({
          $: 1,
          a: sample,
          b: _O__95List_95Nil
        });
      } else {
        var samples_ = value.a;
        return _4Q__36elm_36core_36Maybe_36Just(_17__95List_95Cons(sample, samples_));
      }
    }, samplesDict);
  };

  var _3Z__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup = function (operation_) {
    var toCollect = 1000;
    var sampleSize = 10000;

    var helper = soFar => _3W__95Utils_95cmp(soFar, toCollect) > -1 ? _3A__36elm_36core_36Task_36succeed(0) : _2R__95Scheduler_95andThen_95raw(helper, _2Q__36elm_36core_36Task_36map_95raw(_4G__36elm_36core_36Basics_36add(soFar), _3f__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation_)));

    return helper(0);
  };

  var _2W__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw = function (operation, status) {
    switch (status.$) {
      case 0:
        return _3V__95Scheduler_95onError_95raw(_w_A2(_2j__36elm_36core_36Basics_36composeL, _w_A2(_2j__36elm_36core_36Basics_36composeL, _3A__36elm_36core_36Task_36succeed, _3X__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _3Y__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _2Q__36elm_36core_36Task_36map_95raw(_v1 => _30__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized, _3Z__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup(operation)));

      case 1:
        return _3V__95Scheduler_95onError_95raw(_w_A2(_2j__36elm_36core_36Basics_36composeL, _w_A2(_2j__36elm_36core_36Basics_36composeL, _3A__36elm_36core_36Task_36succeed, _3X__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _3Y__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _2Q__36elm_36core_36Task_36map_95raw(sampleSize => _3a__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(sampleSize, _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty), _3b__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw(1, operation)));

      case 2:
        var baseSampleSize = status.a;
        var samples = status.b;
        var sampleSize = baseSampleSize * (2 * _3c__95Basics_95modBy_95raw(25, _2h__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples)) + 1);
        return _3V__95Scheduler_95onError_95raw(_w_A2(_2j__36elm_36core_36Basics_36composeL, _w_A2(_2j__36elm_36core_36Basics_36composeL, _3A__36elm_36core_36Task_36succeed, _3X__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _3Y__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _2Q__36elm_36core_36Task_36map_95raw(function (newSample) {
          var newSamples = _3d__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw(sampleSize, newSample, samples);

          return _3W__95Utils_95cmp(_2h__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(newSamples), 25 * 5) > -1 ? _3e__36elm_95explorations_36benchmark_36Benchmark_36finalize(newSamples) : _3a__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(baseSampleSize, newSamples);
        }, _3f__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation)));

      default:
        return _3A__36elm_36core_36Task_36succeed(status);
    }
  };

  var _1Y__36elm_95explorations_36benchmark_36Benchmark_36step = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var name = benchmark_.a;
        var inner = benchmark_.b;
        var status = benchmark_.c;
        return _2Q__36elm_36core_36Task_36map_95raw(_w_A2(_2U__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single, name, inner), _2W__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));

      case 1:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _2Q__36elm_36core_36Task_36map_95raw(_2X__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series(name), _2Z__36elm_36core_36Task_36sequence(_z__36elm_36core_36List_36map_95raw(function (_v1) {
          var name_ = _v1.a;
          var inner = _v1.b;
          var status = _v1.c;
          return _2Q__36elm_36core_36Task_36map_95raw(status_ => _2a__95Utils_95Tuple3(name_, inner, status_), _2W__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));
        }, benchmarks)));

      default:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _2Q__36elm_36core_36Task_36map_95raw(_2b__36elm_95explorations_36benchmark_36Benchmark_36describe(name), _2Z__36elm_36core_36Task_36sequence(_z__36elm_36core_36List_36map_95raw(_1Y__36elm_95explorations_36benchmark_36Benchmark_36step, benchmarks)));
    }
  };

  var _4A__36BrianHicks_36elm_95trend_36Trend_36Linear_36goodnessOfFit = function (_v0) {
    var fit = _v0.a;
    var values = _v0.b;

    var _v1 = _4m__36elm_36core_36List_36unzip(values);

    var xs = _v1.a;
    var ys = _v1.b;

    var predictions = _z__36elm_36core_36List_36map_95raw(_4n__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY(fit), xs);

    var meanY = _4p__36elm_36core_36Result_36withDefault_95raw(0, _4q__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys));

    var sumSquareResiduals = _4r__36elm_36core_36List_36sum(_4s__95List_95map2_95raw(_1a_F2((actual, prediction) => _w_A2(_4t__36elm_36core_36Basics_36pow, actual - prediction, 2)), ys, predictions));

    var sumSquareTotal = _4r__36elm_36core_36List_36sum(_z__36elm_36core_36List_36map_95raw(y => _w_A2(_4t__36elm_36core_36Basics_36pow, y - meanY, 2), ys));

    return 1 - sumSquareResiduals / sumSquareTotal;
  };

  var _5F__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw = function (_v0, y) {
    var slope = _v0.aQ;
    var intercept = _v0.aL;
    return (y - intercept) / slope;
  };

  var _3J__36author_36project_36Benchmark_36Runner_36Json_36encodeStatus = function (status) {
    switch (status.$) {
      case 0:
        return _3I__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _x__95Utils_95Tuple2("status", _t__36elm_36json_36Json_36Encode_36string("cold")),
          b: _O__95List_95Nil
        });

      case 1:
        return _3I__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _x__95Utils_95Tuple2("status", _t__36elm_36json_36Json_36Encode_36string("unsized")),
          b: _O__95List_95Nil
        });

      case 2:
        var i = status.a;
        var samples = status.b;
        return _3I__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _x__95Utils_95Tuple2("status", _t__36elm_36json_36Json_36Encode_36string("pending")),
          b: {
            $: 1,
            a: _x__95Utils_95Tuple2("progress", _t__36elm_36json_36Json_36Encode_36string(_1b__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status))),
            b: _O__95List_95Nil
          }
        });

      case 3:
        var error = status.a;
        return _3I__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _x__95Utils_95Tuple2("status", _t__36elm_36json_36Json_36Encode_36string("failure")),
          b: _O__95List_95Nil
        });

      default:
        var samples = status.a;
        var quickTrend = status.b;
        return _3I__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _x__95Utils_95Tuple2("status", _t__36elm_36json_36Json_36Encode_36string("success")),
          b: {
            $: 1,
            a: _x__95Utils_95Tuple2("runsPerSecond", _t__36elm_36json_36Json_36Encode_36string(_46__36elm_36core_36Basics_36composeR_95raw(_47__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, _49__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a1, quickTrend))),
            b: {
              $: 1,
              a: _x__95Utils_95Tuple2("goodnessOfFit", _t__36elm_36json_36Json_36Encode_36string(_4A__36BrianHicks_36elm_95trend_36Trend_36Linear_36goodnessOfFit(quickTrend))),
              b: _O__95List_95Nil
            }
          }
        });
    }
  };

  var _29__36author_36project_36Benchmark_36Runner_36Json_36encodeResultItem = function (_v0) {
    var name = _v0.a;
    var status = _v0.b;
    return _3I__36elm_36json_36Json_36Encode_36object({
      $: 1,
      a: _x__95Utils_95Tuple2("name", _t__36elm_36json_36Json_36Encode_36string(name)),
      b: {
        $: 1,
        a: _x__95Utils_95Tuple2("status", _3J__36author_36project_36Benchmark_36Runner_36Json_36encodeStatus(status)),
        b: _O__95List_95Nil
      }
    });
  };

  var _5D__36elm_36core_36List_36append_95raw = function (xs, ys) {
    if (!ys.b) {
      return xs;
    } else {
      return _1Z__36elm_36core_36List_36foldr_95raw(_3S__36elm_36core_36List_36cons, ys, xs);
    }
  };

  var _3o__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw = function (group, report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _x__95Utils_95Tuple2(name, status),
          b: _O__95List_95Nil
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return _z__36elm_36core_36List_36map_95raw(function (_v1) {
          var tag = _v1.a;
          var val = _v1.b;
          return _x__95Utils_95Tuple2(group + (", " + (name + (", " + tag))), val);
        }, statuses);

      default:
        var name = report.a;
        var reports = report.b;
        return _3N__36elm_36core_36List_36concatMap_95raw(_3O__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup(group + (", " + (name + ", "))), reports);
    }
  };

  var _2A__36author_36project_36Benchmark_36Runner_36Json_36flattenReport = function (report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _x__95Utils_95Tuple2(name, status),
          b: _O__95List_95Nil
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return _z__36elm_36core_36List_36map_95raw(function (_v1) {
          var tag = _v1.a;
          var val = _v1.b;
          return _x__95Utils_95Tuple2(name + (", " + tag), val);
        }, statuses);

      default:
        var name = report.a;
        var reports = report.b;
        return _3N__36elm_36core_36List_36concatMap_95raw(_3O__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup(name), reports);
    }
  };

  var _1T__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark = function (internal) {
    switch (internal.$) {
      case 0:
        var name = internal.a;
        var status = internal.c;
        return _2M__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw(name, status);

      case 1:
        var name = internal.a;
        var benchmarks = internal.b;
        return _2N__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw(name, _z__36elm_36core_36List_36map_95raw(function (_v1) {
          var childName = _v1.a;
          var status = _v1.c;
          return _x__95Utils_95Tuple2(childName, status);
        }, benchmarks));

      default:
        var name = internal.a;
        var benchmarks = internal.b;
        return _2O__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw(name, _z__36elm_36core_36List_36map_95raw(_1T__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark, benchmarks));
    }
  };

  var _W__36author_36project_36Benchmark_36Runner_36Json_36update_95raw = function (sendReport, msg, model) {
    var benchmark = msg;
    return _12__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _x__95Utils_95Tuple2(benchmark, sendReport(_q__36author_36project_36Benchmark_36Runner_36Json_36encode(benchmark))) : _x__95Utils_95Tuple2(benchmark, _y__36author_36project_36Benchmark_36Runner_36Json_36next(benchmark));
  };

  var _Y__36elm_36html_36Html_36div_95raw = function (factList, kidList) {
    for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
    {
      var kid = kidList.a;
      descendantsCount += kid.b || 0;
      kids.push(kid);
    }

    descendantsCount += kids.length;
    return {
      $: 1,
      c: "div",
      d: _15__95VirtualDom_95organizeFacts(factList),
      e: kids,
      f: void 0,
      b: descendantsCount
    };
  };

  var _t__36elm_36json_36Json_36Encode_36string = value => {
    return value;
  };

  var _2B__36elm_36core_36Result_36Ok = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _2G__36elm_36core_36Result_36Err = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _17__95List_95Cons = (hd, tl) => {
    return {
      $: 1,
      a: hd,
      b: tl
    };
  };

  var _2D__95Json_95expecting = (type, value) => {
    return _2G__36elm_36core_36Result_36Err(_2L__36elm_36json_36Json_36Decode_36Failure_95raw("Expecting " + type, _t__36elm_36json_36Json_36Encode_36string(value)));
  };

  var _2E__95Json_95isArray = value => {
    return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
  };

  var _2L__36elm_36json_36Json_36Decode_36Failure_95raw = (a, b) => {
    return {
      $: 3,
      a: a,
      b: b
    };
  };

  var _2I__36elm_36json_36Json_36Decode_36Index_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _w_A2 = (fun, a, b) => {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Json_wrap", _$2_Object_46defineProperty(_t__36elm_36json_36Json_36Encode_36string, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _r__95Json_95run_95raw = (decoder, value) => {
    return _1S__95Json_95runHelp(decoder, _1P__95Json_95unwrap(value));
  };

  var _O__95List_95Nil = $_0_root(0, null, null);

  var _3t__36elm_36core_36Elm_36JsArray_36empty = [];

  var _x__95Utils_95Tuple2 = (a, b) => {
    return {
      a: a,
      b: b
    };
  };

  var _3p__36elm_36core_36Array_36empty = {
    $: 0,
    a: 0,
    b: 5,
    c: _3t__36elm_36core_36Elm_36JsArray_36empty,
    d: _3t__36elm_36core_36Elm_36JsArray_36empty
  };

  var _1P__95Json_95unwrap = value => {
    return value;
  };

  var _5H__36elm_36core_36Array_36Array_95elm_95builtin_95raw = (a, b, c, d) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _5I__36elm_36core_36Elm_36JsArray_36length = array => {
    return array.length;
  };

  var _z__36elm_36core_36List_36map_95raw = (f, xs) => {
    return _1Z__36elm_36core_36List_36foldr_95raw(_1a_F2((x, acc) => _17__95List_95Cons(f(x), acc)), _O__95List_95Nil, xs);
  };

  var _1Z__36elm_36core_36List_36foldr_95raw = (fn, acc, ls) => {
    return _2d__36elm_36core_36List_36foldrHelper_95raw(fn, acc, 0, ls);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_JsArray_length", _$2_Object_46defineProperty(_5I__36elm_36core_36Elm_36JsArray_36length, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _2F__95Json_95toElmArray = array => {
    return _3Q__36elm_36core_36Array_36initialize_95raw(array.length, i => array[i]);
  };

  var _1a_F2 = fun => {
    return _2f_F(2, fun, a => b => fun(a, b));
  };

  var _3S__36elm_36core_36List_36cons = a => {
    return b => _17__95List_95Cons(a, b);
  };

  var _2H__36elm_36json_36Json_36Decode_36Field_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _2J__36elm_36core_36List_36reverse = list => {
    return _3F__36elm_36core_36List_36foldl_95raw(_3S__36elm_36core_36List_36cons, _O__95List_95Nil, list);
  };

  var _4k__36elm_36core_36Basics_36floor = _$4_Math_46floor;

  var _2K__36elm_36json_36Json_36Decode_36OneOf = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _1f__36elm_36core_36Task_36onEffects = a => {
    return b => c => _23__36elm_36core_36Task_36onEffects_95raw(a, b, c);
  };

  var _23__36elm_36core_36Task_36onEffects_95raw = (router, commands, state) => {
    return _2Q__36elm_36core_36Task_36map_95raw(_v0 => 0, _2Z__36elm_36core_36Task_36sequence(_z__36elm_36core_36List_36map_95raw(_38__36elm_36core_36Task_36spawnCmd(router), commands)));
  };

  var _5j__95Basics_95log = _$5_Math_46log;

  var _1h__36elm_36core_36Task_36onSelfMsg = a => {
    return b => c => _24__36elm_36core_36Task_36onSelfMsg_95raw(a, b, c);
  };

  var _5K__36elm_36core_36Basics_36logBase_95raw = (base, number) => {
    return _5j__95Basics_95log(number) / _5j__95Basics_95log(base);
  };

  var _n__36elm_36html_36Html_36text = string => {
    return {
      $: 0,
      a: string
    };
  };

  var _24__36elm_36core_36Task_36onSelfMsg_95raw = (_v0, _v1, _v2) => {
    return _3A__36elm_36core_36Task_36succeed(0);
  };

  var _9_ = (impl, flagDecoder, debugMetadata, args) => {
    return _T__95Platform_95initialize(flagDecoder, args, impl.bP, impl.b3, impl.b1, function (sendToApp, initialModel) {
      var view = impl.b5;
      /**/

      var domNode = args["node"]; //*/

      /**_UNUSED/
              var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
              //*/

      var currNode = _Z__95VirtualDom_95virtualize(domNode);

      return _a__95Browser_95makeAnimator(initialModel, function (model) {
        var nextNode = view(model);

        var patches = _b__95VirtualDom_95diff(currNode, nextNode);

        domNode = _c__95VirtualDom_95applyPatches(domNode, currNode, patches, sendToApp);
        currNode = nextNode;
      });
    });
  };

  var _1j__36elm_36core_36Task_36cmdMap = a => {
    return b => _25__36elm_36core_36Task_36cmdMap_95raw(a, b);
  };

  var _1V__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick = x => {
    return x;
  };

  var _2R__95Scheduler_95andThen_95raw = (callback, task) => {
    return {
      $: 3,
      b: callback,
      d: task
    };
  };

  var _2Q__36elm_36core_36Task_36map_95raw = (func, taskA) => {
    return _2R__95Scheduler_95andThen_95raw(a => _3A__36elm_36core_36Task_36succeed(func(a)), taskA);
  };

  var _19_A3 = (fun, a, b, c) => {
    return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
  };

  var _3A__36elm_36core_36Task_36succeed = value => {
    return {
      $: 0,
      a: value
    };
  };

  var _18__95VirtualDom_95attribute_95raw = (key, value) => {
    return {
      $: "a3",
      n: key,
      o: value
    };
  };

  var _1l__95Platform_95outgoingPortMap = a => {
    return b => _26__95Platform_95outgoingPortMap_95raw(a, b);
  };

  var _1A__95VirtualDom_95node = b => {
    return _1r__95VirtualDom_95nodeNS_95raw(void 0, b);
  };

  var _1B__95Browser_95requestAnimationFrame = callback => {
    return setTimeout(callback, 1000 / 60);
  };

  var _4y__36elm_36core_36Array_36Leaf = a => {
    return {
      $: 1,
      a: a
    };
  };

  _3S__36elm_36core_36List_36cons.a = 2;

  var _26__95Platform_95outgoingPortMap_95raw = (tagger, value) => {
    return value;
  };

  var _2Z__36elm_36core_36Task_36sequence = tasks => {
    return _1Z__36elm_36core_36List_36foldr_95raw(_3g__36elm_36core_36Task_36map2(_3S__36elm_36core_36List_36cons), _3A__36elm_36core_36Task_36succeed(_O__95List_95Nil), tasks);
  };

  var _3g__36elm_36core_36Task_36map2 = a => {
    return b => c => _3x__36elm_36core_36Task_36map2_95raw(a, b, c);
  };

  var _3x__36elm_36core_36Task_36map2_95raw = (func, taskA, taskB) => {
    return _2R__95Scheduler_95andThen_95raw(a => _2R__95Scheduler_95andThen_95raw(b => _3A__36elm_36core_36Task_36succeed(_w_A2(func, a, b)), taskB), taskA);
  };

  var _3U__95Scheduler_95binding = callback => {
    return {
      $: 2,
      b: callback,
      c: null
    };
  };

  var _38__36elm_36core_36Task_36spawnCmd = a => {
    return b => _3j__36elm_36core_36Task_36spawnCmd_95raw(a, b);
  };

  var _1U__36elm_36core_36Task_36perform_95raw = (toMessage, task) => {
    return _2P__36elm_36core_36Task_36command(_2Q__36elm_36core_36Task_36map_95raw(toMessage, task));
  };

  var _1c__36elm_36core_36List_36all_95raw = (isOkay, list) => {
    return !_2i__36elm_36core_36List_36any_95raw(_w_A2(_2j__36elm_36core_36Basics_36composeL, _2l__36elm_36core_36Basics_36not, isOkay), list);
  };

  var _1X__36author_36project_36Benchmark_36Runner_36Json_36breakForRender = task => {
    return _2R__95Scheduler_95andThen_95raw(_v0 => task, _2S__36elm_36core_36Process_36sleep(0));
  };

  var _1d__36elm_36core_36Basics_36eq = a => {
    return b => _22__95Utils_95eq(a, b);
  };

  var _1r__95VirtualDom_95nodeNS_95raw = (namespace, tag) => {
    return _1a_F2(function (factList, kidList) {
      for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
        var kid = kidList.a;
        descendantsCount += kid.b || 0;
        kids.push(kid);
      }

      descendantsCount += kids.length;
      return {
        $: 1,
        c: tag,
        d: _15__95VirtualDom_95organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount
      };
    });
  };

  _3S__36elm_36core_36List_36cons.f = _17__95List_95Cons;
  var _5k__36elm_36core_36Basics_36ceiling = _$6_Math_46ceil;

  var _5M__36elm_36core_36Basics_36max_95raw = (x, y) => {
    return _3W__95Utils_95cmp(x, y) > 0 ? x : y;
  };

  var _4V__95Scheduler_95spawn = task => {
    return _3U__95Scheduler_95binding(function (callback) {
      callback(_3A__36elm_36core_36Task_36succeed(_2o__95Scheduler_95rawSpawn(task)));
    });
  };

  var _4W__36elm_36core_36Platform_36sendToApp = a => {
    return b => _4f__95Platform_95sendToApp_95raw(a, b);
  };

  var _4f__95Platform_95sendToApp_95raw = (router, msg) => {
    return _3U__95Scheduler_95binding(function (callback) {
      router.g(msg);
      callback(_3A__36elm_36core_36Task_36succeed(0));
    });
  };

  var _63__36elm_36core_36Array_36SubTree = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _1J__36elm_36core_36Task_36init = {
    $: 0,
    a: 0
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Scheduler_succeed", _$2_Object_46defineProperty(_3A__36elm_36core_36Task_36succeed, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _3g__36elm_36core_36Task_36map2.a = 3;

  var _2S__36elm_36core_36Process_36sleep = time => {
    return _3U__95Scheduler_95binding(function (callback) {
      var id = setTimeout(function () {
        callback(_3A__36elm_36core_36Task_36succeed(0));
      }, time);
      return function () {
        clearTimeout(id);
      };
    });
  };

  _3g__36elm_36core_36Task_36map2.f = _3x__36elm_36core_36Task_36map2_95raw;
  var _3y__95Scheduler_95queue = [];

  var _2n_F3 = fun => {
    return _2f_F(3, fun, a => b => c => fun(a, b, c));
  };

  _4W__36elm_36core_36Platform_36sendToApp.a = 2;
  _4W__36elm_36core_36Platform_36sendToApp.f = _4f__95Platform_95sendToApp_95raw;

  var _2q__95Scheduler_95receive = callback => {
    return {
      $: 5,
      b: callback
    };
  };

  var _2r_A4 = (fun, a, b, c, d) => {
    return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
  };

  var _2g__36elm_36core_36Basics_36clamp_95raw = (low, high, number) => {
    return _3W__95Utils_95cmp(number, low) < 0 ? low : _3W__95Utils_95cmp(number, high) > 0 ? high : number;
  };

  var _U__36author_36project_36Benchmark_36Runner_36Json_36init_95raw = (benchmark, _v0) => {
    return _x__95Utils_95Tuple2(benchmark, _y__36author_36project_36Benchmark_36Runner_36Json_36next(benchmark));
  };

  var _2j__36elm_36core_36Basics_36composeL = a => {
    return b => c => _3C__36elm_36core_36Basics_36composeL_95raw(a, b, c);
  };

  var _2P__36elm_36core_36Task_36command = value => {
    return {
      $: 1,
      k: "Task",
      l: value
    };
  };

  _38__36elm_36core_36Task_36spawnCmd.a = 2;
  _38__36elm_36core_36Task_36spawnCmd.f = _3j__36elm_36core_36Task_36spawnCmd_95raw;

  var _2l__36elm_36core_36Basics_36not = bool => {
    return !bool;
  };

  var _A_ = b => {
    return _U__36author_36project_36Benchmark_36Runner_36Json_36init_95raw(_E__36author_36project_36Main_36suite, b);
  };

  var _V_ = _v0 => {
    return _Y__36elm_36html_36Html_36div_95raw(_O__95List_95Nil, _z__36elm_36core_36List_36map_95raw(_10__36author_36project_36Main_36viewLevels(4), _d__36author_36project_36Main_36three));
  };

  var _B_ = _v0 => {
    return _R__36elm_36core_36Platform_36Sub_36none;
  };

  var _y__36author_36project_36Benchmark_36Runner_36Json_36next = benchmark => {
    return _12__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _1E__36elm_36core_36Platform_36Cmd_36none : _1U__36elm_36core_36Task_36perform_95raw(_1V__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, _1X__36author_36project_36Benchmark_36Runner_36Json_36breakForRender(_1Y__36elm_95explorations_36benchmark_36Benchmark_36step(benchmark)));
  };

  var _2U__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single = a => {
    return b => c => _2x__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw(a, b, c);
  };

  var _2v__95VirtualDom_95equalEvents = (x, y) => {
    return x.$ == y.$ && _3v__95Json_95equality(x.a, y.a);
  };

  _1f__36elm_36core_36Task_36onEffects.a = 3;
  _1f__36elm_36core_36Task_36onEffects.f = _23__36elm_36core_36Task_36onEffects_95raw;

  var _3_ = d => {
    return _9_(_4_, _5_, 0, d);
  };

  var _10__36author_36project_36Main_36viewLevels = a => {
    return b => _1G__36author_36project_36Main_36viewLevels_95raw(a, b);
  };

  var _C_ = b => {
    return c => _W__36author_36project_36Benchmark_36Runner_36Json_36update_95raw(_X__36author_36project_36Main_36reportResults, b, c);
  };

  var _D__36author_36project_36Benchmark_36Runner_36Json_36view = model => {
    return _Y__36elm_36html_36Html_36div_95raw({
      $: 1,
      a: _m__95VirtualDom_95style_95raw("white-space", "pre"),
      b: _O__95List_95Nil
    }, {
      $: 1,
      a: _n__36elm_36html_36Html_36text(_p__95Json_95encode_95raw(4, _q__36author_36project_36Benchmark_36Runner_36Json_36encode(model))),
      b: _O__95List_95Nil
    });
  };

  _1h__36elm_36core_36Task_36onSelfMsg.a = 3;

  var _3C__36elm_36core_36Basics_36composeL_95raw = (g, f, x) => {
    return g(f(x));
  };

  var _X__36author_36project_36Main_36reportResults = value => {
    return {
      $: 1,
      k: "reportResults",
      l: value
    };
  };

  var _m__95VirtualDom_95style_95raw = (key, value) => {
    return {
      $: "a1",
      n: key,
      o: value
    };
  };

  _1h__36elm_36core_36Task_36onSelfMsg.f = _24__36elm_36core_36Task_36onSelfMsg_95raw;

  var _p__95Json_95encode_95raw = (indentLevel, value) => {
    return JSON.stringify(_1P__95Json_95unwrap(value), null, indentLevel) + "";
  };

  var _q__36author_36project_36Benchmark_36Runner_36Json_36encode = benchmark => {
    return _1Q__36author_36project_36Benchmark_36Runner_36Json_36encodeReport(_1T__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark(benchmark));
  };

  _1j__36elm_36core_36Task_36cmdMap.a = 2;
  _1j__36elm_36core_36Task_36cmdMap.f = _25__36elm_36core_36Task_36cmdMap_95raw;

  var _1G__36author_36project_36Main_36viewLevels_95raw = (level, _v0) => {
    return !level ? _n__36elm_36html_36Html_36text("") : _Y__36elm_36html_36Html_36div_95raw(_O__95List_95Nil, _z__36elm_36core_36List_36map_95raw(_10__36author_36project_36Main_36viewLevels(level - 1), _d__36author_36project_36Main_36three));
  };

  var _2x__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  var _3k__36elm_36core_36List_36length = xs => {
    return _3F__36elm_36core_36List_36foldl_95raw(_1a_F2((_v0, i) => i + 1), 0, xs);
  };

  var _1I_ = {
    b: _1J__36elm_36core_36Task_36init,
    c: _1f__36elm_36core_36Task_36onEffects,
    d: _1h__36elm_36core_36Task_36onSelfMsg,
    e: _1j__36elm_36core_36Task_36cmdMap,
    f: void 0
  };
  _1l__95Platform_95outgoingPortMap.a = 2;
  _1l__95Platform_95outgoingPortMap.f = _26__95Platform_95outgoingPortMap_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$elm$core$Basics$identity", _$2_Object_46defineProperty(_1V__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _3z__36elm_36core_36Dict_36toList = dict => {
    return _4g__36elm_36core_36Dict_36foldr_95raw(_2n_F3((key, value, list) => _17__95List_95Cons(_x__95Utils_95Tuple2(key, value), list)), _O__95List_95Nil, dict);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Process_sleep", _$2_Object_46defineProperty(_2S__36elm_36core_36Process_36sleep, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _3V__95Scheduler_95onError_95raw = (callback, task) => {
    return {
      $: 4,
      b: callback,
      d: task
    };
  };

  var _3X__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _3Y__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _1Q__36author_36project_36Benchmark_36Runner_36Json_36encodeReport = report => {
    return _27__36elm_36json_36Json_36Encode_36list_95raw(_29__36author_36project_36Benchmark_36Runner_36Json_36encodeResultItem, _2A__36author_36project_36Benchmark_36Runner_36Json_36flattenReport(report));
  };

  var _1M_ = {
    e: _1l__95Platform_95outgoingPortMap,
    u: _1V__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick,
    a: _1n__95Platform_95setupOutgoingPort
  };
  var _1H__95Platform_95effectManagers = {
    Task: _1I_,
    reportResults: _1M_
  };
  var _1N__95Platform_95effectsQueue = [];
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_VirtualDom_text", _$2_Object_46defineProperty(_n__36elm_36html_36Html_36text, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  var _3n__95Browser_95doc = document;

  var _3a__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _3f__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw = (n, operation_) => {
    return _4U__95Benchmark_95sample_95raw(n, operation_);
  };

  var _4G__36elm_36core_36Basics_36add = a => {
    return b => _4Z__95Basics_95add_95raw(a, b);
  };

  _2j__36elm_36core_36Basics_36composeL.a = 3;

  var _27__36elm_36json_36Json_36Encode_36list_95raw = (func, entries) => {
    return _t__36elm_36json_36Json_36Encode_36string(_3F__36elm_36core_36List_36foldl_95raw(_3G__95Json_95addEntry(func), _3H__95Json_95emptyArray(0), entries));
  };

  _2j__36elm_36core_36Basics_36composeL.f = _3C__36elm_36core_36Basics_36composeL_95raw;

  var _4Z__95Basics_95add_95raw = (a, b) => {
    return a + b;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_not", _$2_Object_46defineProperty(_2l__36elm_36core_36Basics_36not, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _46__36elm_36core_36Basics_36composeR_95raw = (f, g, x) => {
    return g(f(x));
  };

  var _2X__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series = a => {
    return b => _2z__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw(a, b);
  };

  var _4U__95Benchmark_95sample_95raw = (n, fn) => {
    return _3U__95Scheduler_95binding(function (callback) {
      var start = _58__95Benchmark_95getTimestamp();

      try {
        for (var i = 0; i < n; i++) {
          fn();
        }
      } catch (error) {
        if (error instanceof RangeError) {
          callback(_59__95Scheduler_95fail(_4d__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow));
        } else {
          callback(_59__95Scheduler_95fail(_5A__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError(error.message)));
        }

        return;
      }

      var end = _58__95Benchmark_95getTimestamp();

      callback(_3A__36elm_36core_36Task_36succeed(end - start));
    });
  };

  var _4I__36elm_36core_36Basics_36composeR = a => {
    return b => c => _46__36elm_36core_36Basics_36composeR_95raw(a, b, c);
  };

  _1d__36elm_36core_36Basics_36eq.a = 2;

  var _2a__95Utils_95Tuple3 = (a, b, c) => {
    return {
      a: a,
      b: b,
      c: c
    };
  };

  var _2b__36elm_95explorations_36benchmark_36Benchmark_36describe = a => {
    return b => _36__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw(a, b);
  };

  _1d__36elm_36core_36Basics_36eq.f = _22__95Utils_95eq;

  var _4Q__36elm_36core_36Maybe_36Just = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _1E__36elm_36core_36Platform_36Cmd_36none = {
    $: 2,
    m: _O__95List_95Nil
  };
  _2U__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.a = 3;

  var _4L__36elm_36core_36Maybe_36withDefault = a => {
    return b => _4a__36elm_36core_36Maybe_36withDefault_95raw(a, b);
  };

  var _59__95Scheduler_95fail = error => {
    return {
      $: 1,
      a: error
    };
  };

  var _2M__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _2N__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _2O__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _2z__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  _2U__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.f = _2x__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw;

  var _4N__36elm_36core_36List_36repeat_95raw = (n, value) => {
    return _51__36elm_36core_36List_36repeatHelp_95raw(_O__95List_95Nil, n, value);
  };

  var _36__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _5A__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _30__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized = {
    $: 1
  };

  var _4z__36elm_36core_36Basics_36min = a => {
    return b => _5E__36elm_36core_36Basics_36min_95raw(a, b);
  };

  _4G__36elm_36core_36Basics_36add.a = 2;
  _4G__36elm_36core_36Basics_36add.f = _4Z__95Basics_95add_95raw;

  var _5E__36elm_36core_36Basics_36min_95raw = (x, y) => {
    return _3W__95Utils_95cmp(x, y) < 0 ? x : y;
  };

  var _58__95Benchmark_95getTimestamp = _$8_Date_46now;

  var _4r__36elm_36core_36List_36sum = numbers => {
    return _3F__36elm_36core_36List_36foldl_95raw(_4G__36elm_36core_36Basics_36add, 0, numbers);
  };

  var _4d__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow = {
    $: 0
  };
  var _32__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty = {
    $: -2
  };
  _4I__36elm_36core_36Basics_36composeR.a = 3;
  _4I__36elm_36core_36Basics_36composeR.f = _46__36elm_36core_36Basics_36composeR_95raw;

  var _3G__95Json_95addEntry = func => {
    return _1a_F2(function (entry, array) {
      array.push(_1P__95Json_95unwrap(func(entry)));
      return array;
    });
  };

  var _3H__95Json_95emptyArray = () => {
    return [];
  };

  var _3I__36elm_36json_36Json_36Encode_36object = pairs => {
    return _t__36elm_36json_36Json_36Encode_36string(_3F__36elm_36core_36List_36foldl_95raw(_1a_F2(function (_v0, obj) {
      var k = _v0.a;
      var v = _v0.b;
      return _40__95Json_95addField_95raw(k, v, obj);
    }), _41__95Json_95emptyObject(0), pairs));
  };

  var _4t__36elm_36core_36Basics_36pow = a => {
    return b => _5C_(a, b);
  };

  _4z__36elm_36core_36Basics_36min.a = 2;

  var _5G__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues = a => {
    return {
      $: 0,
      a: a
    };
  };

  _4z__36elm_36core_36Basics_36min.f = _5E__36elm_36core_36Basics_36min_95raw;

  var _3N__36elm_36core_36List_36concatMap_95raw = (f, list) => {
    return _4D__36elm_36core_36List_36concat(_z__36elm_36core_36List_36map_95raw(f, list));
  };

  var _3O__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup = a => {
    return b => _3o__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw(a, b);
  };

  var _4b__36elm_36core_36Maybe_36Nothing = {
    $: 1,
    a: null
  };
  _4L__36elm_36core_36Maybe_36withDefault.a = 2;

  var _4R__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend = samples => {
    return _56__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick(_57__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points(samples).a);
  };

  var _4S__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw = (a, b) => {
    return {
      $: 4,
      a: a,
      b: b
    };
  };

  var _4T__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError = a => {
    return {
      $: 1,
      a: a
    };
  };

  _4L__36elm_36core_36Maybe_36withDefault.f = _4a__36elm_36core_36Maybe_36withDefault_95raw;

  var _5P__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw = (a, b, c, d, e) => {
    return {
      $: -1,
      a: a,
      b: b,
      c: c,
      d: d,
      e: e
    };
  };

  var _41__95Json_95emptyObject = () => {
    return {};
  };

  var _5r__36elm_36core_36Basics_36mul = a => {
    return b => _5x__95Basics_95mul_95raw(a, b);
  };

  var _49__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a1 = c => {
    return _46__36elm_36core_36Basics_36composeR_95raw(_4j_, _4k__36elm_36core_36Basics_36floor, c);
  };

  var _5x__95Basics_95mul_95raw = (a, b) => {
    return a * b;
  };

  var _52__36elm_36core_36Basics_36round = _$9_Math_46round;
  _5r__36elm_36core_36Basics_36mul.a = 2;
  _5r__36elm_36core_36Basics_36mul.f = _5x__95Basics_95mul_95raw;

  var _4D__36elm_36core_36List_36concat = lists => {
    return _1Z__36elm_36core_36List_36foldr_95raw(_4v__36elm_36core_36List_36append, _O__95List_95Nil, lists);
  };

  var _5v__36elm_36core_36Basics_36sqrt = _$A_Math_46sqrt;
  var _5C_ = _$B_Math_46pow;

  var _57__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points = samples => {
    return _5Z__36elm_36core_36Tuple_36mapSecond_95raw(_5a__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _5b__36elm_36core_36Tuple_36mapFirst_95raw(_5a__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _5c__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups(samples)));
  };

  _4t__36elm_36core_36Basics_36pow.a = 2;

  var _5V__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _5X__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line = a => {
    return b => _5i__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw(a, b);
  };

  var _5i__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw = (slope, intercept) => {
    return {
      aL: intercept,
      aQ: slope
    };
  };

  _4t__36elm_36core_36Basics_36pow.f = _5C_;

  var _5a__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify = samples => {
    return _4g__36elm_36core_36Dict_36foldr_95raw(_2n_F3((sampleSize, values, acc) => _5w__95Utils_95ap(_z__36elm_36core_36List_36map_95raw(b => _x__95Utils_95Tuple2(sampleSize, b), values), acc)), _O__95List_95Nil, samples);
  };

  var _4j_ = a => {
    return _5F__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw(a, 1000);
  };

  var _4n__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY = a => {
    return b => _5B__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(a, b);
  };

  var _5u__36elm_36core_36Basics_36isNaN = _$C_isNaN;
  var _5g__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros = {
    $: 1
  };
  _5X__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.a = 2;

  var _5y__36elm_36core_36Dict_36foldl = a => {
    return b => c => _3i__36elm_36core_36Dict_36foldl_95raw(a, b, c);
  };

  var _4v__36elm_36core_36List_36append = a => {
    return b => _5D__36elm_36core_36List_36append_95raw(a, b);
  };

  _5X__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.f = _5i__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw;
  _5y__36elm_36core_36Dict_36foldl.a = 3;
  _5y__36elm_36core_36Dict_36foldl.f = _3i__36elm_36core_36Dict_36foldl_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$BrianHicks$elm_trend$Trend$Linear$line", _$2_Object_46defineProperty(_47__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _67__36elm_36core_36List_36sort = xs => {
    return _6F__95List_95sortBy_95raw(_1V__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, xs);
  };

  var _68__36elm_36core_36List_36filter_95raw = (isGood, list) => {
    return _1Z__36elm_36core_36List_36foldr_95raw(_1a_F2((x, xs) => isGood(x) ? _17__95List_95Cons(x, xs) : xs), _O__95List_95Nil, list);
  };

  var _69__36elm_36core_36Basics_36isInfinite = n => {
    return n === Infinity || n === -Infinity;
  };

  var _6F__95List_95sortBy_95raw = (f, xs) => {
    return _2e__95List_95fromArray(_6M__95List_95toArray(xs).sort((a, b) => _3W__95Utils_95cmp(f(a), f(b))));
  };

  var _6D__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_isInfinite", _$2_Object_46defineProperty(_69__36elm_36core_36Basics_36isInfinite, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _6I__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile = a => {
    return b => _6G__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(a, b);
  };

  var _6Q__36elm_36core_36List_36take_95raw = (n, list) => {
    return _6R__36elm_36core_36List_36takeFast_95raw(0, n, list);
  };

  var _6S__36elm_36core_36List_36takeTailRec_95raw = (n, list) => {
    return _2J__36elm_36core_36List_36reverse(_6T__36elm_36core_36List_36takeReverse_95raw(n, list, _O__95List_95Nil));
  };

  _6I__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.a = 2;
  _6I__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.f = _6G__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw;
  _2X__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.a = 2;
  _2X__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.f = _2z__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw;
  _2b__36elm_95explorations_36benchmark_36Benchmark_36describe.a = 2;
  _2b__36elm_95explorations_36benchmark_36Benchmark_36describe.f = _36__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw;

  var _i__36temp_36result = $_1_sub(_O__95List_95Nil);

  var _g__36temp_36result = $_1_sub(_i__36temp_36result);

  var _d__36author_36project_36Main_36three = $_1_sub(_g__36temp_36result);

  _10__36author_36project_36Main_36viewLevels.a = 2;
  _10__36author_36project_36Main_36viewLevels.f = _1G__36author_36project_36Main_36viewLevels_95raw;

  var _E__36author_36project_36Main_36suite = $_0_root(2, "HTML", {
    $: 1,
    a: {
      $: 0,
      a: "create a 4 level nested html tree",
      b: _V_,
      c: {
        $: 0
      }
    },
    b: _O__95List_95Nil
  });

  var _R__36elm_36core_36Platform_36Sub_36none = {
    $: 2,
    m: _O__95List_95Nil
  };
  _4n__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.a = 2;
  _4n__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.f = _5B__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw;
  _4v__36elm_36core_36List_36append.a = 2;
  _4v__36elm_36core_36List_36append.f = _5D__36elm_36core_36List_36append_95raw;
  _3O__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup.a = 2;
  _3O__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup.f = _3o__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw;
  var _4_ = {
    bP: _A_,
    b1: _B_,
    b3: _C_,
    b5: _D__36author_36project_36Benchmark_36Runner_36Json_36view
  };
  var _5_ = {
    $: 0,
    a: 0
  };
  _$0_global.Elm = {
    Main: {
      init: _3_
    }
  };
}).call(this);