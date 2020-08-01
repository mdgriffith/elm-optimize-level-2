(function () {
  "use strict";

  function $_W_sub(__0, __2, __3, __4, __5) {
    return $_R_root(__0, 1, __2, __3, __4, __5);
  }

  function $_V_sub(__0, __2, __3, __4, __5) {
    return $_R_root(__0, 0, __2, __3, __4, __5);
  }

  function $_U_sub(__0, __3, __4, __5) {
    return $_R_root(__0, 1, "gt", __3, __4, __5);
  }

  function $_T_sub(__0, __2, __3, __4) {
    return $_R_root(__0, 1, __2, __3, __4, _3Y_nRight);
  }

  function $_S_sub(__0, __2, __3) {
    return $_R_root(__0, 0, __2, __3, _3Y_nRight, _3Y_nRight);
  }

  function $_R_root(__0, __1, __2, __3, __4, __5) {
    return {
      $: __0,
      a: __1,
      b: __2,
      c: __3,
      d: __4,
      e: __5
    };
  }

  function $_Q_sub() {
    return $_L_root(2);
  }

  function $_P_sub() {
    return $_L_root(7);
  }

  function $_O_sub() {
    return $_L_root(9);
  }

  function $_N_sub() {
    return $_L_root(0);
  }

  function $_M_sub() {
    return $_L_root(1);
  }

  function $_L_root(__0) {
    return {
      $: __0
    };
  }

  function $_K_sub(__1) {
    return $_E_root(8, __1);
  }

  function $_J_sub() {
    return $_E_root(12, "Expected one or more character");
  }

  function $_I_sub(__1) {
    return $_E_root(0, __1);
  }

  function $_H_sub() {
    return $_E_root(0, "end of input");
  }

  function $_G_sub(__1) {
    return $_E_root(1, __1);
  }

  function $_F_sub() {
    return $_E_root(0, 0);
  }

  function $_E_root(__0, __1) {
    return {
      $: __0,
      a: __1
    };
  }

  function $_D_sub(__1, __2) {
    return $_B_root(1, __1, __2);
  }

  function $_C_sub(__1, __2) {
    return $_B_root(0, __1, __2);
  }

  function $_B_root(__0, __1, __2) {
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

  var _4N_F = function (arity, fun, wrapper) {
    wrapper.a = arity;
    wrapper.f = fun;
    return wrapper;
  };

  var _2c__95Utils_95eq = function (x, y) {
    for (var pair, stack = [], isEqual = _3u__95Utils_95eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _3u__95Utils_95eqHelp(pair.a, pair.b, 0, stack)) {}

    return isEqual;
  };

  var _3u__95Utils_95eqHelp = function (x, y, depth, stack) {
    if (x === y) {
      return true;
    }

    if (typeof x !== "object" || x === null || y === null) {
      typeof x === "function" && _17__95Debug_95crash(5);
      return false;
    }

    if (depth > 100) {
      stack.push(_1B__95Utils_95Tuple2(x, y));
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
      x = _52__36elm_36core_36Dict_36toList(x);
      y = _52__36elm_36core_36Dict_36toList(y);
    } //*/


    for (var key in x) {
      if (!_3u__95Utils_95eqHelp(x[key], y[key], depth + 1, stack)) {
        return false;
      }
    }

    return true;
  };

  var _46__95Utils_95cmp = function (x, y, ord) {
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
        return (ord = _46__95Utils_95cmp(x.a, y.a)) ? ord : (ord = _46__95Utils_95cmp(x.b, y.b)) ? ord : _46__95Utils_95cmp(x.c, y.c);
      } // traverse conses until end of a list or a mismatch


    for (; x.b && y.b && !(ord = _46__95Utils_95cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES


    return ord || (x.b ?
    /*GT*/
    1 : y.b ?
    /*LT*/
    -1 :
    /*EQ*/
    0);
  };

  var _82__95Utils_95ap = function (xs, ys) {
    // append Strings
    if (typeof xs === "string") {
      return xs + ys;
    } // append Lists


    if (!xs.b) {
      return ys;
    }

    var root = _1I__95List_95Cons(xs.a, ys);

    xs = xs.b;

    for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
    {
      curr = curr.b = _1I__95List_95Cons(xs.a, ys);
    }

    return root;
  };

  var _32__95List_95fromArray = function (arr) {
    var out = _d_out;

    for (var i = arr.length; i--;) {
      out = _1I__95List_95Cons(arr[i], out);
    }

    return out;
  };

  var _7b__95List_95toArray = function (xs) {
    for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
    {
      out.push(xs.a);
    }

    return out;
  };

  var _17__95Debug_95crash = function (identifier) {
    throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
  };

  var _YT__36elm_36core_36String_36toInt = function (str) {
    var total = 0;
    var code0 = str.charCodeAt(0);
    var start = code0 == 43
    /* + */
    || code0 == 45
    /* - */
    ? 1 : 0;

    for (var i = start; i < str.length; ++i) {
      var code = str.charCodeAt(i);

      if (code < 48 || 57 < code) {
        return _4j__36elm_36core_36Maybe_36Nothing;
      }

      total = 10 * total + code - 48;
    }

    return i == start ? _4j__36elm_36core_36Maybe_36Nothing : _5D__36elm_36core_36Maybe_36Just(code0 == 45 ? -total : total);
  };

  var _a7__36elm_36core_36Char_36toCode = function (char) {
    var code = char.charCodeAt(0);

    if (55296 <= code && code <= 56319) {
      return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
    }

    return code;
  };

  var _1V__95Json_95runHelp = function (decoder, value) {
    switch (decoder.$) {
      case 2:
        return decoder.b(value);

      case 5:
        return value === null ? _1q__36elm_36core_36Result_36Ok(decoder.c) : _2T__95Json_95expecting("null", value);

      case 3:
        if (!_2U__95Json_95isArray(value)) {
          return _2T__95Json_95expecting("a LIST", value);
        }

        return _2S__95Json_95runArrayDecoder(decoder.b, value, _32__95List_95fromArray);

      case 4:
        if (!_2U__95Json_95isArray(value)) {
          return _2T__95Json_95expecting("an ARRAY", value);
        }

        return _2S__95Json_95runArrayDecoder(decoder.b, value, _2V__95Json_95toElmArray);

      case 6:
        var field = decoder.d;

        if (typeof value !== "object" || value === null || !(field in value)) {
          return _2T__95Json_95expecting("an OBJECT with a field named `" + field + "`", value);
        }

        var result = _1V__95Json_95runHelp(decoder.b, value[field]);

        return _1A__36elm_36core_36Result_36isOk(result) ? result : _1n__36elm_36core_36Result_36Err(_2W__36elm_36json_36Json_36Decode_36Field_95raw(field, result.a));

      case 7:
        var index = decoder.e;

        if (!_2U__95Json_95isArray(value)) {
          return _2T__95Json_95expecting("an ARRAY", value);
        }

        if (index >= value.length) {
          return _2T__95Json_95expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
        }

        var result = _1V__95Json_95runHelp(decoder.b, value[index]);

        return _1A__36elm_36core_36Result_36isOk(result) ? result : _1n__36elm_36core_36Result_36Err(_2X__36elm_36json_36Json_36Decode_36Index_95raw(index, result.a));

      case 8:
        if (typeof value !== "object" || value === null || _2U__95Json_95isArray(value)) {
          return _2T__95Json_95expecting("an OBJECT", value);
        }

        var keyValuePairs = _d_out; // TODO test perf of Object.keys and switch when support is good enough

        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _1V__95Json_95runHelp(decoder.b, value[key]);

            if (!_1A__36elm_36core_36Result_36isOk(result)) {
              return _1n__36elm_36core_36Result_36Err(_2W__36elm_36json_36Json_36Decode_36Field_95raw(key, result.a));
            }

            keyValuePairs = _1I__95List_95Cons(_1B__95Utils_95Tuple2(key, result.a), keyValuePairs);
          }
        }

        return _1q__36elm_36core_36Result_36Ok(_2Y__36elm_36core_36List_36reverse(keyValuePairs));

      case 9:
        var answer = decoder.f;
        var decoders = decoder.g;

        for (var i = 0; i < decoders.length; i++) {
          var result = _1V__95Json_95runHelp(decoders[i], value);

          if (!_1A__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          answer = answer(result.a);
        }

        return _1q__36elm_36core_36Result_36Ok(answer);

      case 10:
        var result = _1V__95Json_95runHelp(decoder.b, value);

        return !_1A__36elm_36core_36Result_36isOk(result) ? result : _1V__95Json_95runHelp(decoder.h(result.a), value);

      case 11:
        var errors = _d_out;

        for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
        {
          var result = _1V__95Json_95runHelp(temp.a, value);

          if (_1A__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          errors = _1I__95List_95Cons(result.a, errors);
        }

        return _1n__36elm_36core_36Result_36Err(_2Z__36elm_36json_36Json_36Decode_36OneOf(_2Y__36elm_36core_36List_36reverse(errors)));

      case 1:
        return _1n__36elm_36core_36Result_36Err(_2a__36elm_36json_36Json_36Decode_36Failure_95raw(decoder.a, _18__36elm_36json_36Json_36Encode_36string(value)));

      case 0:
        return _1q__36elm_36core_36Result_36Ok(decoder.a);
    }
  };

  var _2S__95Json_95runArrayDecoder = function (decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);

    for (var i = 0; i < len; i++) {
      var result = _1V__95Json_95runHelp(decoder, value[i]);

      if (!_1A__36elm_36core_36Result_36isOk(result)) {
        return _1n__36elm_36core_36Result_36Err(_2X__36elm_36json_36Json_36Decode_36Index_95raw(i, result.a));
      }

      array[i] = result.a;
    }

    return _1q__36elm_36core_36Result_36Ok(toElmValue(array));
  };

  var _4c__95Json_95equality = function (x, y) {
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
        return _4c__95Json_95equality(x.b, y.b);

      case 6:
        return x.d === y.d && _4c__95Json_95equality(x.b, y.b);

      case 7:
        return x.e === y.e && _4c__95Json_95equality(x.b, y.b);

      case 9:
        return x.f === y.f && _5m__95Json_95listEquality(x.g, y.g);

      case 10:
        return x.h === y.h && _4c__95Json_95equality(x.b, y.b);

      case 11:
        return _5m__95Json_95listEquality(x.g, y.g);
    }
  };

  var _5m__95Json_95listEquality = function (aDecoders, bDecoders) {
    var len = aDecoders.length;

    if (len !== bDecoders.length) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      if (!_4c__95Json_95equality(aDecoders[i], bDecoders[i])) {
        return false;
      }
    }

    return true;
  };

  var _3K__95Scheduler_95rawSpawn = function (task) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    var proc = {
      $: 0,
      e: __captured__scope_1_[0]++,
      f: task,
      g: null,
      h: []
    };

    _4Z__95Scheduler_95enqueue(proc);

    return proc;
  };

  var _3O__95Scheduler_95rawSend = function (proc, msg) {
    proc.h.push(msg);

    _4Z__95Scheduler_95enqueue(proc);
  };

  var _4Z__95Scheduler_95enqueue = function (proc) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _51__95Scheduler_95queue.push(proc);

    if (__captured__scope_1_[1]) {
      return;
    }

    __captured__scope_1_[1] = true;

    while (proc = _51__95Scheduler_95queue.shift()) {
      _5d__95Scheduler_95step(proc);
    }

    __captured__scope_1_[1] = false;
  };

  var _5d__95Scheduler_95step = function (proc) {
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

          _4Z__95Scheduler_95enqueue(proc);
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

  var _i__95Platform_95initialize = function (flagDecoder, args, init, update, subscriptions, stepperBuilder) {
    var result = _16__95Json_95run_95raw(flagDecoder, _18__36elm_36json_36Json_36Encode_36string(args ? args["flags"] : undefined));

    _1A__36elm_36core_36Result_36isOk(result) || _17__95Debug_95crash(2
    /**_UNUSED/, _Json_errorToString(result.a) /**/
    );
    var managers = {};
    var initPair = init(result.a);
    var model = initPair.a;
    var stepper = stepperBuilder(sendToApp, model);

    var ports = _1G__95Platform_95setupEffects(managers, sendToApp);

    function sendToApp(msg, viewMetadata) {
      var pair = _q_A2(update, msg, model);

      stepper(model = pair.a, viewMetadata);

      _1H__95Platform_95enqueueEffects(managers, pair.b, subscriptions(model));
    }

    _1H__95Platform_95enqueueEffects(managers, initPair.b, subscriptions(model));

    return ports ? {
      ports: ports
    } : {};
  };

  var _1G__95Platform_95setupEffects = function (managers, sendToApp) {
    var ports; // setup all necessary effect managers

    for (var key in _1X__95Platform_95effectManagers) {
      var manager = _1X__95Platform_95effectManagers[key];

      if (manager.a) {
        ports = ports || {};
        ports[key] = manager.a(key, sendToApp);
      }

      managers[key] = _28__95Platform_95instantiateManager(manager, sendToApp);
    }

    return ports;
  };

  var _28__95Platform_95instantiateManager = function (info, sendToApp) {
    var router = {
      g: sendToApp,
      h: undefined
    };
    var onEffects = info.c;
    var onSelfMsg = info.d;
    var cmdMap = info.e;
    var subMap = info.f;

    var loop = state => _2l__95Scheduler_95andThen_95raw(loop, _3M__95Scheduler_95receive(function (msg) {
      var value = msg.a;

      if (msg.$ === 0) {
        return _1K_A3(onSelfMsg, router, value, state);
      }

      return cmdMap && subMap ? _3N_A4(onEffects, router, value.i, value.j, state) : _1K_A3(onEffects, router, cmdMap ? value.i : value.j, state);
    }));

    return router.h = _3K__95Scheduler_95rawSpawn(_2l__95Scheduler_95andThen_95raw(loop, info.b));
  };

  var _1H__95Platform_95enqueueEffects = function (managers, cmdBag, subBag) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _1e__95Platform_95effectsQueue.push({
      p: managers,
      q: cmdBag,
      r: subBag
    });

    if (__captured__scope_1_[2]) return;
    __captured__scope_1_[2] = true;

    for (var fx; fx = _1e__95Platform_95effectsQueue.shift();) {
      _29__95Platform_95dispatchEffects(fx.p, fx.q, fx.r);
    }

    __captured__scope_1_[2] = false;
  };

  var _29__95Platform_95dispatchEffects = function (managers, cmdBag, subBag) {
    var effectsDict = {};

    _3L__95Platform_95gatherEffects(true, cmdBag, effectsDict, null);

    _3L__95Platform_95gatherEffects(false, subBag, effectsDict, null);

    for (var home in managers) {
      _3O__95Scheduler_95rawSend(managers[home], {
        $: "fx",
        a: effectsDict[home] || {
          i: _d_out,
          j: _d_out
        }
      });
    }
  };

  var _3L__95Platform_95gatherEffects = function (isCmd, bag, effectsDict, taggers) {
    switch (bag.$) {
      case 1:
        var home = bag.k;

        var effect = _4a__95Platform_95toEffect(isCmd, home, taggers, bag.l);

        effectsDict[home] = _4b__95Platform_95insert(isCmd, effect, effectsDict[home]);
        return;

      case 2:
        for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
        {
          _3L__95Platform_95gatherEffects(isCmd, list.a, effectsDict, taggers);
        }

        return;

      case 3:
        _3L__95Platform_95gatherEffects(isCmd, bag.o, effectsDict, {
          s: bag.n,
          t: taggers
        });

        return;
    }
  };

  var _4a__95Platform_95toEffect = function (isCmd, home, taggers, value) {
    function applyTaggers(x) {
      for (var temp = taggers; temp; temp = temp.t) {
        x = temp.s(x);
      }

      return x;
    }

    var map = isCmd ? _1X__95Platform_95effectManagers[home].e : _1X__95Platform_95effectManagers[home].f;
    return _q_A2(map, applyTaggers, value);
  };

  var _4b__95Platform_95insert = function (isCmd, newEffect, effects) {
    effects = effects || {
      i: _d_out,
      j: _d_out
    };
    isCmd ? effects.i = _1I__95List_95Cons(newEffect, effects.i) : effects.j = _1I__95List_95Cons(newEffect, effects.j);
    return effects;
  };

  var _27__95Platform_95setupOutgoingPort = function (name) {
    var subs = [];
    var converter = _1X__95Platform_95effectManagers[name].u; // CREATE MANAGER

    var init = _2m__36elm_36core_36Process_36sleep(0);

    _1X__95Platform_95effectManagers[name].b = init;
    _1X__95Platform_95effectManagers[name].c = _3J_F3(function (router, cmdList, state) {
      for (; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
      {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;

        var value = _1S__95Json_95unwrap(converter(cmdList.a));

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

  var _4w__95VirtualDom_95appendChild = function (parent, child) {
    parent.appendChild(child);
  };

  var _1t__95VirtualDom_95organizeFacts = function (factList) {
    for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
    {
      var entry = factList.a;
      var tag = entry.$;
      var key = entry.n;
      var value = entry.o;

      if (tag === "a2") {
        key === "className" ? _3C__95VirtualDom_95addClass(facts, key, _1S__95Json_95unwrap(value)) : facts[key] = _1S__95Json_95unwrap(value);
        continue;
      }

      var subFacts = facts[tag] || (facts[tag] = {});
      tag === "a3" && key === "class" ? _3C__95VirtualDom_95addClass(subFacts, key, value) : subFacts[key] = value;
    }

    return facts;
  };

  var _3C__95VirtualDom_95addClass = function (object, key, newClass) {
    var classes = object[key];
    object[key] = classes ? classes + " " + newClass : newClass;
  };

  var _3o__95VirtualDom_95render = function (vNode, eventNode) {
    var tag = vNode.$;

    if (tag === 5) {
      return _3o__95VirtualDom_95render(vNode.k || (vNode.k = vNode.m()), eventNode);
    }

    if (tag === 0) {
      return _4P__95VirtualDom_95doc.createTextNode(vNode.a);
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

      var domNode = _3o__95VirtualDom_95render(subNode, subEventRoot);

      domNode.elm_event_node_ref = subEventRoot;
      return domNode;
    }

    if (tag === 3) {
      var domNode = vNode.h(vNode.g);

      _3n__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

      return domNode;
    } // at this point `tag` must be 1 or 2


    var domNode = vNode.f ? _4P__95VirtualDom_95doc.createElementNS(vNode.f, vNode.c) : _4P__95VirtualDom_95doc.createElement(vNode.c);

    if (void 0) {
      domNode.addEventListener("click", (void 0)(domNode));
    }

    _3n__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

    for (var kids = vNode.e, i = 0; i < kids.length; i++) {
      _4w__95VirtualDom_95appendChild(domNode, _3o__95VirtualDom_95render(tag === 1 ? kids[i] : kids[i].b, eventNode));
    }

    return domNode;
  };

  var _3n__95VirtualDom_95applyFacts = function (domNode, eventNode, facts) {
    for (var key in facts) {
      var value = facts[key];
      key === "a1" ? _4n__95VirtualDom_95applyStyles(domNode, value) : key === "a0" ? _4o__95VirtualDom_95applyEvents(domNode, eventNode, value) : key === "a3" ? _4p__95VirtualDom_95applyAttrs(domNode, value) : key === "a4" ? _4q__95VirtualDom_95applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
    }
  };

  var _4n__95VirtualDom_95applyStyles = function (domNode, styles) {
    var domNodeStyle = domNode.style;

    for (var key in styles) {
      domNodeStyle[key] = styles[key];
    }
  };

  var _4p__95VirtualDom_95applyAttrs = function (domNode, attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
    }
  };

  var _4q__95VirtualDom_95applyAttrsNS = function (domNode, nsAttrs) {
    for (var key in nsAttrs) {
      var pair = nsAttrs[key];
      var namespace = pair.f;
      var value = pair.o;
      typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
    }
  };

  var _4o__95VirtualDom_95applyEvents = function (domNode, eventNode, events) {
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

      oldCallback = _5n__95VirtualDom_95makeCallback(eventNode, newHandler);
      domNode.addEventListener(key, oldCallback, void 0);
      allCallbacks[key] = oldCallback;
    }
  };

  var _5n__95VirtualDom_95makeCallback = function (eventNode, initialHandler) {
    function callback(event) {
      var handler = callback.q;

      var result = _1V__95Json_95runHelp(handler.a, event);

      if (!_1A__36elm_36core_36Result_36isOk(result)) {
        return;
      }

      var tag = _5q__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt(handler); // 0 = Normal
      // 1 = MayStopPropagation
      // 2 = MayPreventDefault
      // 3 = Custom


      var value = result.a;
      var message = !tag ? value : tag < 3 ? value.a : value.Y;
      var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bd;
      var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.ba) && event.preventDefault(), eventNode);
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

  var _t__95VirtualDom_95diff = function (x, y) {
    var patches = [];

    _1N__95VirtualDom_95diffHelp(x, y, patches, 0);

    return patches;
  };

  var _2C__95VirtualDom_95pushPatch = function (patches, type, index, data) {
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

  var _1N__95VirtualDom_95diffHelp = function (x, y, patches, index) {
    if (x === y) {
      return;
    }

    var xType = x.$;
    var yType = y.$; // Bail if you run into different types of nodes. Implies that the
    // structure has changed significantly and it's not worth a diff.

    if (xType !== yType) {
      if (xType === 1 && yType === 2) {
        y = _2B__95VirtualDom_95dekey(y);
        yType = 1;
      } else {
        _2C__95VirtualDom_95pushPatch(patches, 0, index, y);

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

        _1N__95VirtualDom_95diffHelp(x.k, y.k, subPatches, 0);

        subPatches.length > 0 && _2C__95VirtualDom_95pushPatch(patches, 1, index, subPatches);
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
          _2C__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        } // check if taggers are "the same"


        if (nesting ? !_2D__95VirtualDom_95pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
          _2C__95VirtualDom_95pushPatch(patches, 2, index, yTaggers);
        } // diff everything below the taggers


        _1N__95VirtualDom_95diffHelp(xSubNode, ySubNode, patches, index + 1);

        return;

      case 0:
        if (x.a !== y.a) {
          _2C__95VirtualDom_95pushPatch(patches, 3, index, y.a);
        }

        return;

      case 1:
        _2E__95VirtualDom_95diffNodes(x, y, patches, index, _2F__95VirtualDom_95diffKids);

        return;

      case 2:
        _2E__95VirtualDom_95diffNodes(x, y, patches, index, _2G__95VirtualDom_95diffKeyedKids);

        return;

      case 3:
        if (x.h !== y.h) {
          _2C__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        }

        var factsDiff = _2H__95VirtualDom_95diffFacts(x.d, y.d);

        factsDiff && _2C__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
        var patch = y.i(x.g, y.g);
        patch && _2C__95VirtualDom_95pushPatch(patches, 5, index, patch);
        return;
    }
  };

  var _2D__95VirtualDom_95pairwiseRefEqual = function (as, bs) {
    for (var i = 0; i < as.length; i++) {
      if (as[i] !== bs[i]) {
        return false;
      }
    }

    return true;
  };

  var _2E__95VirtualDom_95diffNodes = function (x, y, patches, index, diffKids) {
    // Bail if obvious indicators have changed. Implies more serious
    // structural changes such that it's not worth it to diff.
    if (x.c !== y.c || x.f !== y.f) {
      _2C__95VirtualDom_95pushPatch(patches, 0, index, y);

      return;
    }

    var factsDiff = _2H__95VirtualDom_95diffFacts(x.d, y.d);

    factsDiff && _2C__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
    diffKids(x, y, patches, index);
  };

  var _2H__95VirtualDom_95diffFacts = function (x, y, category) {
    var diff; // look for changes and removals

    for (var xKey in x) {
      if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
        var subDiff = _2H__95VirtualDom_95diffFacts(x[xKey], y[xKey] || {}, xKey);

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

      if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _3R__95VirtualDom_95equalEvents(xValue, yValue)) {
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

  var _2F__95VirtualDom_95diffKids = function (xParent, yParent, patches, index) {
    var xKids = xParent.e;
    var yKids = yParent.e;
    var xLen = xKids.length;
    var yLen = yKids.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

    if (xLen > yLen) {
      _2C__95VirtualDom_95pushPatch(patches, 6, index, {
        v: yLen,
        i: xLen - yLen
      });
    } else if (xLen < yLen) {
      _2C__95VirtualDom_95pushPatch(patches, 7, index, {
        v: xLen,
        e: yKids
      });
    } // PAIRWISE DIFF EVERYTHING ELSE


    for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
      var xKid = xKids[i];

      _1N__95VirtualDom_95diffHelp(xKid, yKids[i], patches, ++index);

      index += xKid.b || 0;
    }
  };

  var _2G__95VirtualDom_95diffKeyedKids = function (xParent, yParent, patches, rootIndex) {
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

        _1N__95VirtualDom_95diffHelp(xNode, yNode, localPatches, index);

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

        _1N__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        _3P__95VirtualDom_95insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _3Q__95VirtualDom_95removeNode(changes, localPatches, xKey, xNextNode, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 2;
        continue;
      } // insert y


      if (newMatch) {
        index++;

        _3P__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        _1N__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        index += xNode.b || 0;
        xIndex += 1;
        yIndex += 2;
        continue;
      } // remove x


      if (oldMatch) {
        index++;

        _3Q__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        index += xNode.b || 0;
        index++;

        _1N__95VirtualDom_95diffHelp(xNextNode, yNode, localPatches, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 1;
        continue;
      } // remove x, insert y


      if (xNext && xNextKey === yNextKey) {
        index++;

        _3Q__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        _3P__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _1N__95VirtualDom_95diffHelp(xNextNode, yNextNode, localPatches, index);

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

      _3Q__95VirtualDom_95removeNode(changes, localPatches, x.a, xNode, index);

      index += xNode.b || 0;
      xIndex++;
    }

    while (yIndex < yLen) {
      var endInserts = endInserts || [];
      var y = yKids[yIndex];

      _3P__95VirtualDom_95insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);

      yIndex++;
    }

    if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
      _2C__95VirtualDom_95pushPatch(patches, 8, rootIndex, {
        w: localPatches,
        x: inserts,
        y: endInserts
      });
    }
  };

  var _3P__95VirtualDom_95insertNode = function (changes, localPatches, key, vnode, yIndex, inserts) {
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

      _1N__95VirtualDom_95diffHelp(entry.z, vnode, subPatches, entry.r);

      entry.r = yIndex;
      entry.s.s = {
        w: subPatches,
        A: entry
      };
      return;
    } // this key has already been inserted or moved, a duplicate!


    _3P__95VirtualDom_95insertNode(changes, localPatches, key + "_elmW6BL", vnode, yIndex, inserts);
  };

  var _3Q__95VirtualDom_95removeNode = function (changes, localPatches, key, vnode, index) {
    var entry = changes[key]; // never seen this key before

    if (!entry) {
      var patch = _2C__95VirtualDom_95pushPatch(localPatches, 9, index, undefined);

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

      _1N__95VirtualDom_95diffHelp(vnode, entry.z, subPatches, index);

      _2C__95VirtualDom_95pushPatch(localPatches, 9, index, {
        w: subPatches,
        A: entry
      });

      return;
    } // this key has already been removed or moved, a duplicate!


    _3Q__95VirtualDom_95removeNode(changes, localPatches, key + "_elmW6BL", vnode, index);
  };

  var _1O__95VirtualDom_95addDomNodes = function (domNode, vNode, patches, eventNode) {
    _2I__95VirtualDom_95addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
  };

  var _2I__95VirtualDom_95addDomNodesHelp = function (domNode, vNode, patches, i, low, high, eventNode) {
    var patch = patches[i];
    var index = patch.r;

    while (index === low) {
      var patchType = patch.$;

      if (patchType === 1) {
        _1O__95VirtualDom_95addDomNodes(domNode, vNode.k, patch.s, eventNode);
      } else if (patchType === 8) {
        patch.t = domNode;
        patch.u = eventNode;
        var subPatches = patch.s.w;

        if (subPatches.length > 0) {
          _2I__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
        }
      } else if (patchType === 9) {
        patch.t = domNode;
        patch.u = eventNode;
        var data = patch.s;

        if (data) {
          data.A.s = domNode;
          var subPatches = data.w;

          if (subPatches.length > 0) {
            _2I__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
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

      return _2I__95VirtualDom_95addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
    } // tag must be 1 or 2 at this point


    var vKids = vNode.e;
    var childNodes = domNode.childNodes;

    for (var j = 0; j < vKids.length; j++) {
      low++;
      var vKid = tag === 1 ? vKids[j] : vKids[j].b;
      var nextLow = low + (vKid.b || 0);

      if (low <= index && index <= nextLow) {
        i = _2I__95VirtualDom_95addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);

        if (!(patch = patches[i]) || (index = patch.r) > high) {
          return i;
        }
      }

      low = nextLow;
    }

    return i;
  };

  var _u__95VirtualDom_95applyPatches = function (rootDomNode, oldVirtualNode, patches, eventNode) {
    if (patches.length === 0) {
      return rootDomNode;
    }

    _1O__95VirtualDom_95addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);

    return _1U__95VirtualDom_95applyPatchesHelp(rootDomNode, patches);
  };

  var _1U__95VirtualDom_95applyPatchesHelp = function (rootDomNode, patches) {
    for (var i = 0; i < patches.length; i++) {
      var patch = patches[i];
      var localDomNode = patch.t;

      var newNode = _2P__95VirtualDom_95applyPatch(localDomNode, patch);

      if (localDomNode === rootDomNode) {
        rootDomNode = newNode;
      }
    }

    return rootDomNode;
  };

  var _2P__95VirtualDom_95applyPatch = function (domNode, patch) {
    switch (patch.$) {
      case 0:
        return _3h__95VirtualDom_95applyPatchRedraw(domNode, patch.s, patch.u);

      case 4:
        _3n__95VirtualDom_95applyFacts(domNode, patch.u, patch.s);

        return domNode;

      case 3:
        domNode.replaceData(0, domNode.length, patch.s);
        return domNode;

      case 1:
        return _1U__95VirtualDom_95applyPatchesHelp(domNode, patch.s);

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
          domNode.insertBefore(_3o__95VirtualDom_95render(kids[i], patch.u), theEnd);
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

        entry.s = _1U__95VirtualDom_95applyPatchesHelp(domNode, data.w);
        return domNode;

      case 8:
        return _3p__95VirtualDom_95applyPatchReorder(domNode, patch);

      case 5:
        return patch.s(domNode);

      default:
        _17__95Debug_95crash(10);

      // 'Ran into an unknown patch!'
    }
  };

  var _3h__95VirtualDom_95applyPatchRedraw = function (domNode, vNode, eventNode) {
    var parentNode = domNode.parentNode;

    var newNode = _3o__95VirtualDom_95render(vNode, eventNode);

    if (!newNode.elm_event_node_ref) {
      newNode.elm_event_node_ref = domNode.elm_event_node_ref;
    }

    if (parentNode && newNode !== domNode) {
      parentNode.replaceChild(newNode, domNode);
    }

    return newNode;
  };

  var _3p__95VirtualDom_95applyPatchReorder = function (domNode, patch) {
    var data = patch.s; // remove end inserts

    var frag = _4x__95VirtualDom_95applyPatchReorderEndInsertsHelp(data.y, patch); // removals


    domNode = _1U__95VirtualDom_95applyPatchesHelp(domNode, data.w); // inserts

    var inserts = data.x;

    for (var i = 0; i < inserts.length; i++) {
      var insert = inserts[i];
      var entry = insert.A;
      var node = entry.c === 2 ? entry.s : _3o__95VirtualDom_95render(entry.z, patch.u);
      domNode.insertBefore(node, domNode.childNodes[insert.r]);
    } // add end inserts


    if (frag) {
      _4w__95VirtualDom_95appendChild(domNode, frag);
    }

    return domNode;
  };

  var _4x__95VirtualDom_95applyPatchReorderEndInsertsHelp = function (endInserts, patch) {
    if (!endInserts) {
      return;
    }

    var frag = _4P__95VirtualDom_95doc.createDocumentFragment();

    for (var i = 0; i < endInserts.length; i++) {
      var insert = endInserts[i];
      var entry = insert.A;

      _4w__95VirtualDom_95appendChild(frag, entry.c === 2 ? entry.s : _3o__95VirtualDom_95render(entry.z, patch.u));
    }

    return frag;
  };

  var _r__95VirtualDom_95virtualize = function (node) {
    // TEXT NODES
    if (node.nodeType === 3) {
      return _12__36elm_36html_36Html_36text(node.textContent);
    } // WEIRD NODES


    if (node.nodeType !== 1) {
      return _12__36elm_36html_36Html_36text("");
    } // ELEMENT NODES


    var attrList = _d_out;
    var attrs = node.attributes;

    for (var i = attrs.length; i--;) {
      var attr = attrs[i];
      var name = attr.name;
      var value = attr.value;
      attrList = _1I__95List_95Cons(_1J__95VirtualDom_95attribute_95raw(name, value), attrList);
    }

    var tag = node.tagName.toLowerCase();
    var kidList = _d_out;
    var kids = node.childNodes;

    for (var i = kids.length; i--;) {
      kidList = _1I__95List_95Cons(_r__95VirtualDom_95virtualize(kids[i]), kidList);
    }

    return _1K_A3(_1L__95VirtualDom_95node, tag, attrList, kidList);
  };

  var _2B__95VirtualDom_95dekey = function (keyedNode) {
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

  var _s__95Browser_95makeAnimator = function (model, draw) {
    draw(model);
    var state = 0;

    function updateIfNeeded() {
      state = state === 1 ? 0 : (_1M__95Browser_95requestAnimationFrame(updateIfNeeded), draw(model), 1);
    }

    return function (nextModel, isSync) {
      model = nextModel;
      isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _1M__95Browser_95requestAnimationFrame(updateIfNeeded), state = 2);
    };
  };

  var _bB__36elm_36url_36Url_36percentDecode = function (string) {
    try {
      return _5D__36elm_36core_36Maybe_36Just(decodeURIComponent(string));
    } catch (e) {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _76__95Utils_95compare_95raw = function (x, y) {
    var n = _46__95Utils_95cmp(x, y);

    return n < 0 ? 0 : n ? 2 : 1;
  };

  var _5x__95List_95map2_95raw = function (f, xs, ys) {
    for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
    {
      arr.push(_q_A2(f, xs.a, ys.a));
    }

    return _32__95List_95fromArray(arr);
  };

  var _4z__95JsArray_95initialize_95raw = function (size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  };

  var _7r__95JsArray_95initializeFromList_95raw = function (max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _1B__95Utils_95Tuple2(result, ls);
  };

  var _4C__95Basics_95modBy_95raw = function (modulus, x) {
    var answer = x % modulus;
    return modulus === 0 ? _17__95Debug_95crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
  };

  var _Xl__95String_95foldl_95raw = function (func, state, string) {
    var len = string.length;
    var i = 0;

    while (i < len) {
      var char = string[i];
      var word = string.charCodeAt(i);
      i++;

      if (55296 <= word && word <= 56319) {
        char += string[i];
        i++;
      }

      state = _q_A2(func, _ZQ__95Utils_95chr(char), state);
    }

    return state;
  };

  var _p8__95String_95foldr_95raw = function (func, state, string) {
    var i = string.length;

    while (i--) {
      var char = string[i];
      var word = string.charCodeAt(i);

      if (56320 <= word && word <= 57343) {
        i--;
        char = string[i] + char;
      }

      state = _q_A2(func, _ZQ__95Utils_95chr(char), state);
    }

    return state;
  };

  var _4l__95Json_95addField_95raw = function (key, value, object) {
    object[key] = _1S__95Json_95unwrap(value);
    return object;
  };

  var _Yj__95Parser_95isSubString_95raw = function (smallString, offset, row, col, bigString) {
    var smallLength = smallString.length;
    var isGood = offset + smallLength <= bigString.length;

    for (var i = 0; isGood && i < smallLength;) {
      var code = bigString.charCodeAt(offset);
      isGood = smallString[i++] === bigString[offset++] && (code === 10
      /* \n */
      ? (row++, col = 1) : (col++, (code & 63488) === 55296 ? smallString[i++] === bigString[offset++] : 1));
    }

    return _2u__95Utils_95Tuple3(isGood ? offset : -1, row, col);
  };

  var _YI__95Parser_95findSubString_95raw = function (smallString, offset, row, col, bigString) {
    var newOffset = bigString.indexOf(smallString, offset);
    var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

    while (offset < target) {
      var code = bigString.charCodeAt(offset++);
      code === 10
      /* \n */
      ? (col = 1, row++) : (col++, (code & 63488) === 55296 && offset++);
    }

    return _2u__95Utils_95Tuple3(newOffset, row, col);
  };

  var _AE__95Regex_95findAtMost_95raw = function (n, re, str) {
    var out = [];
    var number = 0;
    var string = str;
    var lastIndex = re.lastIndex;
    var prevLastIndex = -1;
    var result;

    while (number++ < n && (result = re.exec(string))) {
      if (prevLastIndex == re.lastIndex) break;
      var i = result.length - 1;
      var subs = new Array(i);

      while (i > 0) {
        var submatch = result[i];
        subs[--i] = submatch ? _5D__36elm_36core_36Maybe_36Just(submatch) : _4j__36elm_36core_36Maybe_36Nothing;
      }

      out.push(_BJ__36elm_36regex_36Regex_36Match_95raw(result[0], result.index, number, _32__95List_95fromArray(subs)));
      prevLastIndex = re.lastIndex;
    }

    re.lastIndex = lastIndex;
    return _32__95List_95fromArray(out);
  };

  var _Cq__95Regex_95replaceAtMost_95raw = function (n, re, replacer, string) {
    var count = 0;

    function jsReplacer(match) {
      if (count++ >= n) {
        return match;
      }

      var i = arguments.length - 3;
      var submatches = new Array(i);

      while (i > 0) {
        var submatch = arguments[i];
        submatches[--i] = submatch ? _5D__36elm_36core_36Maybe_36Just(submatch) : _4j__36elm_36core_36Maybe_36Nothing;
      }

      return replacer(_BJ__36elm_36regex_36Regex_36Match_95raw(match, arguments[arguments.length - 2], count, _32__95List_95fromArray(submatches)));
    }

    return string.replace(re, jsReplacer);
  };

  var _65__36elm_36core_36Dict_36foldr_95raw = function (func, acc, t) {
    foldr: while (true) {
      if (t.$ === -2) {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;

        var $temp$func = func,
            $temp$acc = _1K_A3(func, key, value, _65__36elm_36core_36Dict_36foldr_95raw(func, acc, right)),
            $temp$t = left;

        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
  };

  var _3i__36elm_36core_36List_36foldl_95raw = function (func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;

        var $temp$func = func,
            $temp$acc = _q_A2(func, x, acc),
            $temp$list = xs;

        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  };

  var _l3__36elm_36core_36Char_36isLower = function (_char) {
    var code = _a7__36elm_36core_36Char_36toCode(_char);

    return 97 <= code && code <= 122;
  };

  var _jY__36elm_36core_36Char_36isUpper = function (_char) {
    var code = _a7__36elm_36core_36Char_36toCode(_char);

    return code <= 90 && 65 <= code;
  };

  var _m9__36elm_36core_36Char_36isDigit = function (_char) {
    var code = _a7__36elm_36core_36Char_36toCode(_char);

    return code <= 57 && 48 <= code;
  };

  var _7s__36elm_36core_36Array_36compressNodes_95raw = function (nodes, acc) {
    compressNodes: while (true) {
      var _v0 = _7r__95JsArray_95initializeFromList_95raw(32, nodes);

      var node = _v0.a;
      var remainingNodes = _v0.b;

      var newAcc = _1I__95List_95Cons(_A1__36elm_36core_36Array_36SubTree(node), acc);

      if (!remainingNodes.b) {
        return _2Y__36elm_36core_36List_36reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
            $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  };

  var _74__36elm_36core_36Array_36treeFromBuilder_95raw = function (nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = _7q__36elm_36core_36Basics_36ceiling(nodeListSize / 32);

      if (newNodeSize === 1) {
        return _7r__95JsArray_95initializeFromList_95raw(32, nodeList).a;
      } else {
        var $temp$nodeList = _7s__36elm_36core_36Array_36compressNodes_95raw(nodeList, _d_out),
            $temp$nodeListSize = newNodeSize;

        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  };

  var _62__36elm_36core_36Array_36builderToArray_95raw = function (reverseNodeList, builder) {
    if (!builder.v) {
      return _70__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_71__36elm_36core_36Elm_36JsArray_36length(builder.x), 5, _4V__36elm_36core_36Elm_36JsArray_36empty, builder.x);
    } else {
      var treeLen = builder.v * 32;

      var depth = _5p__36elm_36core_36Basics_36floor(_73__36elm_36core_36Basics_36logBase_95raw(32, treeLen - 1));

      var correctNodeList = reverseNodeList ? _2Y__36elm_36core_36List_36reverse(builder.y) : builder.y;

      var tree = _74__36elm_36core_36Array_36treeFromBuilder_95raw(correctNodeList, builder.v);

      return _70__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_71__36elm_36core_36Elm_36JsArray_36length(builder.x) + treeLen, _75__36elm_36core_36Basics_36max_95raw(5, depth * 5), tree, builder.x);
    }
  };

  var _50__36elm_36core_36Array_36initializeHelp_95raw = function (fn, fromIndex, len, nodeList, tail) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return _62__36elm_36core_36Array_36builderToArray_95raw(false, {
          y: nodeList,
          v: len / 32 | 0,
          x: tail
        });
      } else {
        var leaf = _64__36elm_36core_36Array_36Leaf(_4z__95JsArray_95initialize_95raw(32, fromIndex, fn));

        var $temp$fn = fn,
            $temp$fromIndex = fromIndex - 32,
            $temp$len = len,
            $temp$nodeList = _1I__95List_95Cons(leaf, nodeList),
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

  var _3t__36elm_36core_36Array_36initialize_95raw = function (len, fn) {
    if (len <= 0) {
      return _4R__36elm_36core_36Array_36empty;
    } else {
      var tailLen = len % 32;

      var tail = _4z__95JsArray_95initialize_95raw(tailLen, len - tailLen, fn);

      var initialFromIndex = len - tailLen - 32;
      return _50__36elm_36core_36Array_36initializeHelp_95raw(fn, initialFromIndex, len, _d_out, tail);
    }
  };

  var _1A__36elm_36core_36Result_36isOk = function (result) {
    if (!result.$) {
      return true;
    } else {
      return false;
    }
  };

  var _5q__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt = function (handler) {
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

  var _4M__36elm_36core_36List_36foldrHelper_95raw = function (fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;

      if (!r1.b) {
        return _q_A2(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;

        if (!r2.b) {
          return _q_A2(fn, a, _q_A2(fn, b, acc));
        } else {
          var c = r2.a;
          var r3 = r2.b;

          if (!r3.b) {
            return _q_A2(fn, a, _q_A2(fn, b, _q_A2(fn, c, acc)));
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res = ctr > 500 ? _3i__36elm_36core_36List_36foldl_95raw(fn, acc, _2Y__36elm_36core_36List_36reverse(r4)) : _4M__36elm_36core_36List_36foldrHelper_95raw(fn, acc, ctr + 1, r4);
            return _q_A2(fn, a, _q_A2(fn, b, _q_A2(fn, c, _q_A2(fn, d, res))));
          }
        }
      }
    }
  };

  var _4X__36elm_36core_36Task_36spawnCmd_95raw = function (router, _v0) {
    var task = _v0;
    return _5a__95Scheduler_95spawn(_2l__95Scheduler_95andThen_95raw(_5b__36elm_36core_36Platform_36sendToApp(router), task));
  };

  var _2f__36elm_36core_36Task_36cmdMap_95raw = function (tagger, _v0) {
    var task = _v0;
    return _2k__36elm_36core_36Task_36map_95raw(tagger, task);
  };

  var _3E__36elm_36core_36List_36any_95raw = function (isOkay, list) {
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

  var _4O__36elm_36core_36Dict_36foldl_95raw = function (func, acc, dict) {
    foldl: while (true) {
      if (dict.$ === -2) {
        return acc;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var $temp$func = func,
            $temp$acc = _1K_A3(func, key, value, _4O__36elm_36core_36Dict_36foldl_95raw(func, acc, left)),
            $temp$dict = right;

        func = $temp$func;
        acc = $temp$acc;
        dict = $temp$dict;
        continue foldl;
      }
    }
  };

  var _3D__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count = function (_v0) {
    var samples = _v0;
    return _4O__36elm_36core_36Dict_36foldl_95raw(_3J_F3((_v1, times, acc) => _4Y__36elm_36core_36List_36length(times) + acc), 0, samples);
  };

  var _1s__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress = function (status) {
    switch (status.$) {
      case 0:
        return 0;

      case 1:
        return 0;

      case 2:
        var samples = status.b;
        return _3B__36elm_36core_36Basics_36clamp_95raw(0, 1, _3D__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples) / (25 * 5));

      case 3:
        return 1;

      default:
        return 1;
    }
  };

  var _1E__36elm_95explorations_36benchmark_36Benchmark_36done = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var status = benchmark_.c;
        return _1s__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status) === 1;

      case 1:
        var benchmarks = benchmark_.b;
        return _1v__36elm_36core_36List_36all_95raw(_1w__36elm_36core_36Basics_36eq(1), _1y__36elm_36core_36List_36map_95raw(_1s__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress, _1y__36elm_36core_36List_36map_95raw(function (_v1) {
          var status = _v1.c;
          return status;
        }, benchmarks)));

      default:
        var benchmarks = benchmark_.b;
        return _1v__36elm_36core_36List_36all_95raw(_1E__36elm_95explorations_36benchmark_36Benchmark_36done, benchmarks);
    }
  };

  var _7t__36elm_36core_36Dict_36balance_95raw = function (color, key, value, left, right) {
    if (right.$ === -1 && !right.a) {
      var rK = right.b;
      var rV = right.c;
      var rLeft = right.d;
      var rRight = right.e;

      if (left.$ === -1 && !left.a) {
        var lK = left.b;
        var lV = left.c;
        var lLeft = left.d;
        var lRight = left.e;
        return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, lK, lV, lLeft, lRight), _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rLeft, rRight));
      } else {
        return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, rK, rV, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, left, rLeft), rRight);
      }
    } else {
      if (left.$ === -1 && !left.a && left.d.$ === -1 && !left.d.a) {
        var lK = left.b;
        var lV = left.c;
        var _v6 = left.d;
        var llK = _v6.b;
        var llV = _v6.c;
        var llLeft = _v6.d;
        var llRight = _v6.e;
        var lRight = left.e;
        return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, key, value, lRight, right));
      } else {
        return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, left, right);
      }
    }
  };

  var _77__36elm_36core_36Dict_36insertHelp_95raw = function (key, value, dict) {
    if (dict.$ === -2) {
      return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _3Y_nRight, _3Y_nRight);
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;

      var _v1 = _76__95Utils_95compare_95raw(key, nKey);

      switch (_v1) {
        case 0:
          return _7t__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _77__36elm_36core_36Dict_36insertHelp_95raw(key, value, nLeft), nRight);

        case 1:
          return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(nColor, nKey, value, nLeft, nRight);

        default:
          return _7t__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, nLeft, _77__36elm_36core_36Dict_36insertHelp_95raw(key, value, nRight));
      }
    }
  };

  var _6B__36elm_36core_36Dict_36insert_95raw = function (key, value, dict) {
    var _v0 = _77__36elm_36core_36Dict_36insertHelp_95raw(key, value, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _4s__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0 = function (_v0) {
    var precalculated = _v0.a;
    return precalculated;
  };

  var _85__36elm_36core_36Dict_36map_95raw = function (func, dict) {
    if (dict.$ === -2) {
      return _3Y_nRight;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, _q_A2(func, key, value), _85__36elm_36core_36Dict_36map_95raw(func, left), _85__36elm_36core_36Dict_36map_95raw(func, right));
    }
  };

  var _7D__36elm_36core_36Result_36map_95raw = function (func, ra) {
    if (!ra.$) {
      var a = ra.a;
      return _1q__36elm_36core_36Result_36Ok(func(a));
    } else {
      var e = ra.a;
      return _1n__36elm_36core_36Result_36Err(e);
    }
  };

  var _86__36elm_36core_36List_36partition_95raw = function (pred, list) {
    var step = _3A_F2(function (x, _v0) {
      var trues = _v0.a;
      var falses = _v0.b;
      return pred(x) ? _1B__95Utils_95Tuple2(_1I__95List_95Cons(x, trues), falses) : _1B__95Utils_95Tuple2(trues, _1I__95List_95Cons(x, falses));
    });

    return _39__36elm_36core_36List_36foldr_95raw(step, _1B__95Utils_95Tuple2(_d_out, _d_out), list);
  };

  var _6h__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw = function (_v0, x) {
    var slope = _v0.bc;
    var intercept = _v0.a6;
    return slope * x + intercept;
  };

  var _A8__36elm_36core_36Result_36fromMaybe_95raw = function (err, maybe) {
    if (!maybe.$) {
      var v = maybe.a;
      return _1q__36elm_36core_36Result_36Ok(v);
    } else {
      return _1n__36elm_36core_36Result_36Err(err);
    }
  };

  var _A9__36elm_36core_36Maybe_36map3_95raw = function (func, ma, mb, mc) {
    if (ma.$ === 1) {
      return _4j__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _4j__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;

        if (mc.$ === 1) {
          return _4j__36elm_36core_36Maybe_36Nothing;
        } else {
          var c = mc.a;
          return _5D__36elm_36core_36Maybe_36Just(_1K_A3(func, a, b, c));
        }
      }
    }
  };

  var _BA__36elm_36core_36Maybe_36andThen_95raw = function (callback, maybeValue) {
    if (!maybeValue.$) {
      var value = maybeValue.a;
      return callback(value);
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _BD__36elm_36core_36Maybe_36map_95raw = function (f, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return _5D__36elm_36core_36Maybe_36Just(f(value));
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _BE__36elm_36core_36Maybe_36map2_95raw = function (func, ma, mb) {
    if (ma.$ === 1) {
      return _4j__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _4j__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;
        return _5D__36elm_36core_36Maybe_36Just(_q_A2(func, a, b));
      }
    }
  };

  var _Cm__36elm_36core_36List_36drop_95raw = function (n, list) {
    drop: while (true) {
      if (n <= 0) {
        return list;
      } else {
        if (!list.b) {
          return list;
        } else {
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

  var _Cl__36elm_36core_36List_36head = function (list) {
    if (list.b) {
      var x = list.a;
      return _5D__36elm_36core_36Maybe_36Just(x);
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean = function (numbers) {
    if (!numbers.b) {
      return _1n__36elm_36core_36Result_36Err(_6z__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(1));
    } else {
      return _1q__36elm_36core_36Result_36Ok(_5w__36elm_36core_36List_36sum(numbers) / _4Y__36elm_36core_36List_36length(numbers));
    }
  };

  var _bq__36elm_36core_36List_36takeReverse_95raw = function (n, list, kept) {
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
              $temp$kept = _1I__95List_95Cons(x, kept);

          n = $temp$n;
          list = $temp$list;
          kept = $temp$kept;
          continue takeReverse;
        }
      }
    }
  };

  var _YP__36elm_36core_36List_36takeFast_95raw = function (ctr, n, list) {
    if (n <= 0) {
      return _d_out;
    } else {
      var _v0 = _1B__95Utils_95Tuple2(n, list);

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
                      b: _d_out
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
                          b: _d_out
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
                    return ctr > 1000 ? _1I__95List_95Cons(x, _1I__95List_95Cons(y, _1I__95List_95Cons(z, _1I__95List_95Cons(w, _a3__36elm_36core_36List_36takeTailRec_95raw(n - 4, tl))))) : _1I__95List_95Cons(x, _1I__95List_95Cons(y, _1I__95List_95Cons(z, _1I__95List_95Cons(w, _YP__36elm_36core_36List_36takeFast_95raw(ctr + 1, n - 4, tl)))));
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
        b: _d_out
      };
    }
  };

  var _Cn__36elm_36core_36Result_36toMaybe = function (result) {
    if (!result.$) {
      var v = result.a;
      return _5D__36elm_36core_36Maybe_36Just(v);
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _B9__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw = function (k, xs) {
    var index = _4Y__36elm_36core_36List_36length(xs) * k;
    return !(index - _5p__36elm_36core_36Basics_36floor(index)) ? _Cl__36elm_36core_36List_36head(_Cm__36elm_36core_36List_36drop_95raw(_7q__36elm_36core_36Basics_36ceiling(index) - 1, xs)) : _Cn__36elm_36core_36Result_36toMaybe(_5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_Co__36elm_36core_36List_36take_95raw(2, _Cm__36elm_36core_36List_36drop_95raw(_5p__36elm_36core_36Basics_36floor(index) - 1, xs))));
  };

  var _AB__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw = function (pct, slopes, points) {
    var slope = _B9__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(pct, slopes);

    var intercept = _BA__36elm_36core_36Maybe_36andThen_95raw(_BB__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile(pct), _BD__36elm_36core_36Maybe_36map_95raw(_A5__36elm_36core_36List_36sort, _BD__36elm_36core_36Maybe_36map_95raw(m => _1y__36elm_36core_36List_36map_95raw(function (_v0) {
      var x = _v0.a;
      var y = _v0.b;
      return y - m * x;
    }, points), slope)));

    return _BE__36elm_36core_36Maybe_36map2_95raw(_7G__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slope, intercept);
  };

  var _87__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust = function (values) {
    if (!values.b) {
      return _1n__36elm_36core_36Result_36Err(_6z__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _1n__36elm_36core_36Result_36Err(_6z__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var slopes = _A5__36elm_36core_36List_36sort(_3i__36elm_36core_36List_36foldl_95raw(_3A_F2(function (_v1, acc1) {
          var x = _v1.a;
          var y = _v1.b;
          return _3i__36elm_36core_36List_36foldl_95raw(_3A_F2(function (_v2, acc2) {
            var x1 = _v2.a;
            var y1 = _v2.b;
            var res = (y - y1) / (x - x1);
            return _80__36elm_36core_36Basics_36isNaN(res) ? acc2 : _1I__95List_95Cons(res, acc2);
          }), acc1, values);
        }), _d_out, values));

        var finiteSlopes = _1r__36elm_36core_36List_36filter_95raw(_q_A2(_3F__36elm_36core_36Basics_36composeL, _3H__36elm_36core_36Basics_36not, _A6__36elm_36core_36Basics_36isInfinite), slopes);

        return _A8__36elm_36core_36Result_36fromMaybe_95raw(_7f__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros, _A9__36elm_36core_36Maybe_36map3_95raw(_3J_F3((trendLine, lower, upper) => _7E__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, _AA__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw(lower, upper))), _AB__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.5, finiteSlopes, values), _AB__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.975, slopes, values), _AB__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.025, slopes, values)));
      }
    }
  };

  var _5u__36elm_36core_36Result_36withDefault_95raw = function (def, result) {
    if (!result.$) {
      var a = result.a;
      return a;
    } else {
      return def;
    }
  };

  var _7K__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups = function (_v0) {
    var samples = _v0;
    return _5u__36elm_36core_36Result_36withDefault_95raw(_1B__95Utils_95Tuple2(samples, _3Y_nRight), _7D__36elm_36core_36Result_36map_95raw(_q_A2(_83__36elm_36core_36Dict_36foldl, _3J_F3(function (key, _v1, _v2) {
      var good = _v1.a;
      var outliers = _v1.b;
      var accGood = _v2.a;
      var accOutliers = _v2.b;
      return _1B__95Utils_95Tuple2(_6B__36elm_36core_36Dict_36insert_95raw(key, good, accGood), _6B__36elm_36core_36Dict_36insert_95raw(key, outliers, accOutliers));
    }), _1B__95Utils_95Tuple2(_3Y_nRight, _3Y_nRight)), _7D__36elm_36core_36Result_36map_95raw(line => _85__36elm_36core_36Dict_36map_95raw(_3A_F2(function (sampleSize, values) {
      var predicted = _6h__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(line, sampleSize);

      var upperBound = predicted * 1.1;
      var lowerBound = predicted / 1.1;
      return _86__36elm_36core_36List_36partition_95raw(v => _46__95Utils_95cmp(lowerBound, v) < 0 && _46__95Utils_95cmp(v, upperBound) < 0, values);
    }), samples), _7D__36elm_36core_36Result_36map_95raw(_4s__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, _87__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust(_7I__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify(samples))))));
  };

  var _7J__36elm_36core_36Tuple_36mapFirst_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _1B__95Utils_95Tuple2(func(x), y);
  };

  var _6m__36elm_36core_36Tuple_36mapSecond_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _1B__95Utils_95Tuple2(x, func(y));
  };

  var _7z__36elm_36core_36Result_36andThen_95raw = function (callback, result) {
    if (!result.$) {
      var value = result.a;
      return callback(value);
    } else {
      var msg = result.a;
      return _1n__36elm_36core_36Result_36Err(msg);
    }
  };

  var _7F__36elm_36core_36Result_36map2_95raw = function (func, ra, rb) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _1n__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _1n__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;
        return _1q__36elm_36core_36Result_36Ok(_q_A2(func, a, b));
      }
    }
  };

  var _7C__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev = function (numbers) {
    var helper = seriesMean => _7D__36elm_36core_36Result_36map_95raw(_81__36elm_36core_36Basics_36sqrt, _5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_1y__36elm_36core_36List_36map_95raw(n => _q_A2(_5y__36elm_36core_36Basics_36pow, n - seriesMean, 2), numbers)));

    return _7z__36elm_36core_36Result_36andThen_95raw(helper, _5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(numbers));
  };

  var _5r__36elm_36core_36List_36unzip = function (pairs) {
    var step_raw = function (_v0, _v1) {
      var x = _v0.a;
      var y = _v0.b;
      var xs = _v1.a;
      var ys = _v1.b;
      return _1B__95Utils_95Tuple2(_1I__95List_95Cons(x, xs), _1I__95List_95Cons(y, ys));
    },
        step = _3A_F2(step_raw);

    return _39__36elm_36core_36List_36foldr_95raw(step, _1B__95Utils_95Tuple2(_d_out, _d_out), pairs);
  };

  var _7B__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation = function (values) {
    if (!values.b) {
      return _1n__36elm_36core_36Result_36Err(_6z__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _1n__36elm_36core_36Result_36Err(_6z__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var standardize_raw = (meanResult, stddevResult, series) => _7F__36elm_36core_36Result_36map2_95raw(_3A_F2((meanValue, stddevValue) => _1y__36elm_36core_36List_36map_95raw(point => (point - meanValue) / stddevValue, series)), meanResult, stddevResult);

        var _v1 = _5r__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var summedProduct = _7D__36elm_36core_36Result_36map_95raw(_5w__36elm_36core_36List_36sum, _7F__36elm_36core_36Result_36map2_95raw(_3A_F2((stdX, stdY) => _5x__95List_95map2_95raw(_7x__36elm_36core_36Basics_36mul, stdX, stdY)), standardize_raw(_5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs), _7C__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs), xs), standardize_raw(_5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), _7C__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), ys)));

        return _7z__36elm_36core_36Result_36andThen_95raw(val => _80__36elm_36core_36Basics_36isNaN(val) ? _1n__36elm_36core_36Result_36Err(_7f__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros) : _1q__36elm_36core_36Result_36Ok(val), _7D__36elm_36core_36Result_36map_95raw(sum => sum / _4Y__36elm_36core_36List_36length(values), summedProduct));
      }
    }
  };

  var _7A__36elm_36core_36Result_36map3_95raw = function (func, ra, rb, rc) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _1n__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _1n__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;

        if (rc.$ === 1) {
          var x = rc.a;
          return _1n__36elm_36core_36Result_36Err(x);
        } else {
          var c = rc.a;
          return _1q__36elm_36core_36Result_36Ok(_1K_A3(func, a, b, c));
        }
      }
    }
  };

  var _6D__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick = function (values) {
    if (!values.b) {
      return _1n__36elm_36core_36Result_36Err(_6z__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _1n__36elm_36core_36Result_36Err(_6z__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var _v1 = _5r__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var slopeResult = _7A__36elm_36core_36Result_36map3_95raw(_3J_F3((correl, stddevY, stddevX) => correl * stddevY / stddevX), _7B__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation(values), _7C__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), _7C__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs));

        var intercept = _7A__36elm_36core_36Result_36map3_95raw(_3J_F3((meanY, slope, meanX) => meanY - slope * meanX), _5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), slopeResult, _5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs));

        return _7D__36elm_36core_36Result_36map_95raw(trendLine => _7E__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, values), _7F__36elm_36core_36Result_36map2_95raw(_7G__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slopeResult, intercept));
      }
    }
  };

  var _4E__36elm_95explorations_36benchmark_36Benchmark_36finalize = function (samples) {
    var _v0 = _5E__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend(samples);

    if (!_v0.$) {
      var trend = _v0.a;
      return _5F__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw(samples, trend);
    } else {
      var err = _v0.a;
      return _47__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure(_5G__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError(err));
    }
  };

  var _57__36elm_36core_36List_36minimum = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _5D__36elm_36core_36Maybe_36Just(_3i__36elm_36core_36List_36foldl_95raw(_66__36elm_36core_36Basics_36min, x, xs));
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _68__36elm_36core_36List_36repeatHelp_95raw = function (result, n, value) {
    repeatHelp: while (true) {
      if (n <= 0) {
        return result;
      } else {
        var $temp$result = _1I__95List_95Cons(value, result),
            $temp$n = n - 1,
            $temp$value = value;

        result = $temp$result;
        n = $temp$n;
        value = $temp$value;
        continue repeatHelp;
      }
    }
  };

  var _5B__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize = function (sampleSize) {
    var helper_raw = function (rough, magnitude) {
      helper: while (true) {
        if (rough > 10) {
          var $temp$rough = _69__36elm_36core_36Basics_36round(rough / 10),
              $temp$magnitude = magnitude * 10;

          rough = $temp$rough;
          magnitude = $temp$magnitude;
          continue helper;
        } else {
          return rough * magnitude;
        }
      }
    };

    return helper_raw(sampleSize, 1);
  };

  var _5f__36elm_36core_36Maybe_36withDefault_95raw = function (_default, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  };

  var _4B__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw = function (minimumRuntime, operation_) {
    var sampleSize = i => i * 10;

    var resample = _3A_F2((iteration, total) => _46__95Utils_95cmp(total, minimumRuntime) < 0 ? _2l__95Scheduler_95andThen_95raw(resample(iteration + 1), _2k__36elm_36core_36Task_36map_95raw(_q_A2(_55__36elm_36core_36Basics_36composeR, _57__36elm_36core_36List_36minimum, _58__36elm_36core_36Maybe_36withDefault(0)), _2t__36elm_36core_36Task_36sequence(_5A__36elm_36core_36List_36repeat_95raw(3, _4F__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize(iteration), operation_))))) : _40__36elm_36core_36Task_36succeed(sampleSize(iteration)));

    return _2k__36elm_36core_36Task_36map_95raw(_5B__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize, _q_A2(resample, 1, 0));
  };

  var _6A__36elm_36core_36Dict_36get_95raw = function (targetKey, dict) {
    get: while (true) {
      if (dict.$ === -2) {
        return _4j__36elm_36core_36Maybe_36Nothing;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var _v1 = _76__95Utils_95compare_95raw(targetKey, key);

        switch (_v1) {
          case 0:
            var $temp$targetKey = targetKey,
                $temp$dict = left;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;

          case 1:
            return _5D__36elm_36core_36Maybe_36Just(value);

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

  var _A2__36elm_36core_36Dict_36getMin = function (dict) {
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

  var _7u__36elm_36core_36Dict_36moveRedLeft = function (dict) {
    if (dict.$ === -1 && dict.d.$ === -1 && dict.e.$ === -1) {
      if (dict.e.d.$ === -1 && !dict.e.d.a) {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v1 = dict.d;
        var lK = _v1.b;
        var lV = _v1.c;
        var lLeft = _v1.d;
        var lRight = _v1.e;
        var _v2 = dict.e;
        var rK = _v2.b;
        var rV = _v2.c;
        var rLeft = _v2.d;
        var rlK = rLeft.b;
        var rlV = rLeft.c;
        var rlL = rLeft.d;
        var rlR = rLeft.e;
        var rRight = _v2.e;
        return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rlK, rlV, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), rlL), _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rlR, rRight));
      } else {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v4 = dict.d;
        var lK = _v4.b;
        var lV = _v4.c;
        var lLeft = _v4.d;
        var lRight = _v4.e;
        var _v5 = dict.e;
        var rK = _v5.b;
        var rV = _v5.c;
        var rLeft = _v5.d;
        var rRight = _v5.e;

        if (clr === 1) {
          return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _A4__36elm_36core_36Dict_36moveRedRight = function (dict) {
    if (dict.$ === -1 && dict.d.$ === -1 && dict.e.$ === -1) {
      if (dict.d.d.$ === -1 && !dict.d.d.a) {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v1 = dict.d;
        var lK = _v1.b;
        var lV = _v1.c;
        var _v2 = _v1.d;
        var llK = _v2.b;
        var llV = _v2.c;
        var llLeft = _v2.d;
        var llRight = _v2.e;
        var lRight = _v1.e;
        var _v4 = dict.e;
        var rK = _v4.b;
        var rV = _v4.c;
        var rLeft = _v4.d;
        var rRight = _v4.e;
        return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, lRight, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight)));
      } else {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v5 = dict.d;
        var lK = _v5.b;
        var lV = _v5.c;
        var lLeft = _v5.d;
        var lRight = _v5.e;
        var _v6 = dict.e;
        var rK = _v6.b;
        var rV = _v6.c;
        var rLeft = _v6.d;
        var rRight = _v6.e;

        if (clr === 1) {
          return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _7w__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw = function (targetKey, dict, color, key, value, left, right) {
    if (left.$ === -1 && !left.a) {
      var lK = left.b;
      var lV = left.c;
      var lLeft = left.d;
      var lRight = left.e;
      return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, lK, lV, lLeft, _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, lRight, right));
    } else {
      _v2$2: while (true) {
        if (right.$ === -1 && right.a === 1) {
          if (right.d.$ === -1) {
            if (right.d.a === 1) {
              return _A4__36elm_36core_36Dict_36moveRedRight(dict);
            } else {
              break _v2$2;
            }
          } else {
            return _A4__36elm_36core_36Dict_36moveRedRight(dict);
          }
        } else {
          break _v2$2;
        }
      }

      return dict;
    }
  };

  var _A3__36elm_36core_36Dict_36removeMin = function (dict) {
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
          return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _A3__36elm_36core_36Dict_36removeMin(left), right);
        } else {
          var _v4 = _7u__36elm_36core_36Dict_36moveRedLeft(dict);

          if (_v4.$ === -1) {
            var nColor = _v4.a;
            var nKey = _v4.b;
            var nValue = _v4.c;
            var nLeft = _v4.d;
            var nRight = _v4.e;
            return _7t__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _A3__36elm_36core_36Dict_36removeMin(nLeft), nRight);
          } else {
            return _3Y_nRight;
          }
        }
      } else {
        return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _A3__36elm_36core_36Dict_36removeMin(left), right);
      }
    } else {
      return _3Y_nRight;
    }
  };

  var _79__36elm_36core_36Dict_36removeHelp_95raw = function (targetKey, dict) {
    if (dict.$ === -2) {
      return _3Y_nRight;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_46__95Utils_95cmp(targetKey, key) < 0) {
        if (left.$ === -1 && left.a === 1) {
          var lLeft = left.d;

          if (lLeft.$ === -1 && !lLeft.a) {
            return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _79__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
          } else {
            var _v7 = _7u__36elm_36core_36Dict_36moveRedLeft(dict);

            if (_v7.$ === -1) {
              var nColor = _v7.a;
              var nKey = _v7.b;
              var nValue = _v7.c;
              var nLeft = _v7.d;
              var nRight = _v7.e;
              return _7t__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _79__36elm_36core_36Dict_36removeHelp_95raw(targetKey, nLeft), nRight);
            } else {
              return _3Y_nRight;
            }
          }
        } else {
          return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _79__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
        }
      } else {
        return _7v__36elm_36core_36Dict_36removeHelpEQGT_95raw(targetKey, _7w__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw(targetKey, dict, color, key, value, left, right));
      }
    }
  };

  var _7v__36elm_36core_36Dict_36removeHelpEQGT_95raw = function (targetKey, dict) {
    if (dict.$ === -1) {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_2c__95Utils_95eq(targetKey, key)) {
        var _v1 = _A2__36elm_36core_36Dict_36getMin(right);

        if (_v1.$ === -1) {
          var minKey = _v1.b;
          var minValue = _v1.c;
          return _7t__36elm_36core_36Dict_36balance_95raw(color, minKey, minValue, left, _A3__36elm_36core_36Dict_36removeMin(right));
        } else {
          return _3Y_nRight;
        }
      } else {
        return _7t__36elm_36core_36Dict_36balance_95raw(color, key, value, left, _79__36elm_36core_36Dict_36removeHelp_95raw(targetKey, right));
      }
    } else {
      return _3Y_nRight;
    }
  };

  var _6C__36elm_36core_36Dict_36remove_95raw = function (key, dict) {
    var _v0 = _79__36elm_36core_36Dict_36removeHelp_95raw(key, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _5C__36elm_36core_36Dict_36update_95raw = function (targetKey, alter, dictionary) {
    var _v0 = alter(_6A__36elm_36core_36Dict_36get_95raw(targetKey, dictionary));

    if (!_v0.$) {
      var value = _v0.a;
      return _6B__36elm_36core_36Dict_36insert_95raw(targetKey, value, dictionary);
    } else {
      return _6C__36elm_36core_36Dict_36remove_95raw(targetKey, dictionary);
    }
  };

  var _4D__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw = function (sampleSize, sample, _v0) {
    var samplesDict = _v0;
    return _5C__36elm_36core_36Dict_36update_95raw(sampleSize, function (value) {
      if (value.$ === 1) {
        return _5D__36elm_36core_36Maybe_36Just({
          $: 1,
          a: sample,
          b: _d_out
        });
      } else {
        var samples_ = value.a;
        return _5D__36elm_36core_36Maybe_36Just(_1I__95List_95Cons(sample, samples_));
      }
    }, samplesDict);
  };

  var _49__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup = function (operation_) {
    var toCollect = 1000;
    var sampleSize = 10000;

    var helper = soFar => _46__95Utils_95cmp(soFar, toCollect) > -1 ? _40__36elm_36core_36Task_36succeed(0) : _2l__95Scheduler_95andThen_95raw(helper, _2k__36elm_36core_36Task_36map_95raw(_53__36elm_36core_36Basics_36add(soFar), _4F__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation_)));

    return helper(0);
  };

  var _2q__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw = function (operation, status) {
    switch (status.$) {
      case 0:
        return _45__95Scheduler_95onError_95raw(_q_A2(_3F__36elm_36core_36Basics_36composeL, _q_A2(_3F__36elm_36core_36Basics_36composeL, _40__36elm_36core_36Task_36succeed, _47__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _48__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _2k__36elm_36core_36Task_36map_95raw(_v1 => _3W__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized, _49__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup(operation)));

      case 1:
        return _45__95Scheduler_95onError_95raw(_q_A2(_3F__36elm_36core_36Basics_36composeL, _q_A2(_3F__36elm_36core_36Basics_36composeL, _40__36elm_36core_36Task_36succeed, _47__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _48__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _2k__36elm_36core_36Task_36map_95raw(sampleSize => _4A__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(sampleSize, _3Y_nRight), _4B__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw(1, operation)));

      case 2:
        var baseSampleSize = status.a;
        var samples = status.b;
        var sampleSize = baseSampleSize * (2 * _4C__95Basics_95modBy_95raw(25, _3D__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples)) + 1);
        return _45__95Scheduler_95onError_95raw(_q_A2(_3F__36elm_36core_36Basics_36composeL, _q_A2(_3F__36elm_36core_36Basics_36composeL, _40__36elm_36core_36Task_36succeed, _47__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _48__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _2k__36elm_36core_36Task_36map_95raw(function (newSample) {
          var newSamples = _4D__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw(sampleSize, newSample, samples);

          return _46__95Utils_95cmp(_3D__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(newSamples), 25 * 5) > -1 ? _4E__36elm_95explorations_36benchmark_36Benchmark_36finalize(newSamples) : _4A__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(baseSampleSize, newSamples);
        }, _4F__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation)));

      default:
        return _40__36elm_36core_36Task_36succeed(status);
    }
  };

  var _1i__36elm_95explorations_36benchmark_36Benchmark_36step = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var name = benchmark_.a;
        var inner = benchmark_.b;
        var status = benchmark_.c;
        return _2k__36elm_36core_36Task_36map_95raw(_q_A2(_2o__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single, name, inner), _2q__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));

      case 1:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _2k__36elm_36core_36Task_36map_95raw(_2r__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series(name), _2t__36elm_36core_36Task_36sequence(_1y__36elm_36core_36List_36map_95raw(function (_v1) {
          var name_ = _v1.a;
          var inner = _v1.b;
          var status = _v1.c;
          return _2k__36elm_36core_36Task_36map_95raw(status_ => _2u__95Utils_95Tuple3(name_, inner, status_), _2q__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));
        }, benchmarks)));

      default:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _2k__36elm_36core_36Task_36map_95raw(_2v__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group(name), _2t__36elm_36core_36Task_36sequence(_1y__36elm_36core_36List_36map_95raw(_1i__36elm_95explorations_36benchmark_36Benchmark_36step, benchmarks)));
    }
  };

  var _4v__36BrianHicks_36elm_95trend_36Trend_36Linear_36goodnessOfFit = function (_v0) {
    var fit = _v0.a;
    var values = _v0.b;

    var _v1 = _5r__36elm_36core_36List_36unzip(values);

    var xs = _v1.a;
    var ys = _v1.b;

    var predictions = _1y__36elm_36core_36List_36map_95raw(_5s__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY(fit), xs);

    var meanY = _5u__36elm_36core_36Result_36withDefault_95raw(0, _5v__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys));

    var sumSquareResiduals = _5w__36elm_36core_36List_36sum(_5x__95List_95map2_95raw(_3A_F2((actual, prediction) => _q_A2(_5y__36elm_36core_36Basics_36pow, actual - prediction, 2)), ys, predictions));

    var sumSquareTotal = _5w__36elm_36core_36List_36sum(_1y__36elm_36core_36List_36map_95raw(y => _q_A2(_5y__36elm_36core_36Basics_36pow, y - meanY, 2), ys));

    return 1 - sumSquareResiduals / sumSquareTotal;
  };

  var _6y__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw = function (_v0, y) {
    var slope = _v0.bc;
    var intercept = _v0.a6;
    return (y - intercept) / slope;
  };

  var _3m__36author_36project_36Benchmark_36Runner_36Json_36encodeStatus = function (status) {
    switch (status.$) {
      case 0:
        return _3l__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _1B__95Utils_95Tuple2("status", _18__36elm_36json_36Json_36Encode_36string("cold")),
          b: _d_out
        });

      case 1:
        return _3l__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _1B__95Utils_95Tuple2("status", _18__36elm_36json_36Json_36Encode_36string("unsized")),
          b: _d_out
        });

      case 2:
        return _3l__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _1B__95Utils_95Tuple2("status", _18__36elm_36json_36Json_36Encode_36string("pending")),
          b: _d_out
        });

      case 3:
        return _3l__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _1B__95Utils_95Tuple2("status", _18__36elm_36json_36Json_36Encode_36string("failure")),
          b: _d_out
        });

      default:
        var quickTrend = status.b;
        return _3l__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _1B__95Utils_95Tuple2("status", _18__36elm_36json_36Json_36Encode_36string("success")),
          b: {
            $: 1,
            a: _1B__95Utils_95Tuple2("runsPerSecond", _18__36elm_36json_36Json_36Encode_36string(_4r__36elm_36core_36Basics_36composeR_95raw(_4s__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, _4u__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a1, quickTrend))),
            b: {
              $: 1,
              a: _1B__95Utils_95Tuple2("goodnessOfFit", _18__36elm_36json_36Json_36Encode_36string(_4v__36BrianHicks_36elm_95trend_36Trend_36Linear_36goodnessOfFit(quickTrend))),
              b: _d_out
            }
          }
        });
    }
  };

  var _2Q__36author_36project_36Benchmark_36Runner_36Json_36encodeResultItem = function (_v0) {
    var name = _v0.a;
    var status = _v0.b;
    return _3l__36elm_36json_36Json_36Encode_36object({
      $: 1,
      a: _1B__95Utils_95Tuple2("name", _18__36elm_36json_36Json_36Encode_36string(name)),
      b: {
        $: 1,
        a: _1B__95Utils_95Tuple2("status", _3m__36author_36project_36Benchmark_36Runner_36Json_36encodeStatus(status)),
        b: _d_out
      }
    });
  };

  var _6j__36elm_36core_36List_36append_95raw = function (xs, ys) {
    if (!ys.b) {
      return xs;
    } else {
      return _39__36elm_36core_36List_36foldr_95raw(_3w__36elm_36core_36List_36cons, ys, xs);
    }
  };

  var _4Q__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw = function (group, report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _1B__95Utils_95Tuple2(name, status),
          b: _d_out
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return _1y__36elm_36core_36List_36map_95raw(function (_v1) {
          var tag = _v1.a;
          var val = _v1.b;
          return _1B__95Utils_95Tuple2(group + (", " + (name + (", " + tag))), val);
        }, statuses);

      default:
        var name = report.a;
        var reports = report.b;
        return _3q__36elm_36core_36List_36concatMap_95raw(_3r__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup(group + (", " + (name + ", "))), reports);
    }
  };

  var _2R__36author_36project_36Benchmark_36Runner_36Json_36flattenReport = function (report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _1B__95Utils_95Tuple2(name, status),
          b: _d_out
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return _1y__36elm_36core_36List_36map_95raw(function (_v1) {
          var tag = _v1.a;
          var val = _v1.b;
          return _1B__95Utils_95Tuple2(name + (", " + tag), val);
        }, statuses);

      default:
        var name = report.a;
        var reports = report.b;
        return _3q__36elm_36core_36List_36concatMap_95raw(_3r__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup(name), reports);
    }
  };

  var _1W__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark = function (internal) {
    switch (internal.$) {
      case 0:
        var name = internal.a;
        var status = internal.c;
        return _2b__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw(name, status);

      case 1:
        var name = internal.a;
        var benchmarks = internal.b;
        return _2h__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw(name, _1y__36elm_36core_36List_36map_95raw(function (_v1) {
          var childName = _v1.a;
          var status = _v1.c;
          return _1B__95Utils_95Tuple2(childName, status);
        }, benchmarks));

      default:
        var name = internal.a;
        var benchmarks = internal.b;
        return _2i__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw(name, _1y__36elm_36core_36List_36map_95raw(_1W__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark, benchmarks));
    }
  };

  var _o__36author_36project_36Benchmark_36Runner_36Json_36update_95raw = function (sendReport, msg, model) {
    var benchmark = msg;
    return _1E__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _1B__95Utils_95Tuple2(benchmark, sendReport(_15__36author_36project_36Benchmark_36Runner_36Json_36encode(benchmark))) : _1B__95Utils_95Tuple2(benchmark, _1C__36author_36project_36Benchmark_36Runner_36Json_36next(benchmark));
  };

  var _1F_ = function (factList, kidList) {
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
      d: _1t__95VirtualDom_95organizeFacts(factList),
      e: kids,
      f: void 0,
      b: descendantsCount
    };
  };

  var _if__36elm_36parser_36Parser_36Advanced_36andThen_95raw = function (callback, _v0) {
    var parseA = _v0;
    return function (s0) {
      var _v1 = parseA(s0);

      if (_v1.$ === 1) {
        var p = _v1.a;
        var x = _v1.b;
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p, x);
      } else {
        var p1 = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;

        var _v2 = callback(a);

        var parseB = _v2;

        var _v3 = parseB(s1);

        if (_v3.$ === 1) {
          var p2 = _v3.a;
          var x = _v3.b;
          return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p1 || p2, x);
        } else {
          var p2 = _v3.a;
          var b = _v3.b;
          var s2 = _v3.c;
          return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p1 || p2, b, s2);
        }
      }
    };
  };

  var _hD__36elm_36parser_36Parser_36Advanced_36backtrackable = function (_v0) {
    var parse = _v0;
    return function (s0) {
      var _v1 = parse(s0);

      if (_v1.$ === 1) {
        var x = _v1.b;
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, x);
      } else {
        var a = _v1.b;
        var s1 = _v1.c;
        return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, a, s1);
      }
    };
  };

  var _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw = function (isGood, offset, row, col, s0) {
    chompWhileHelp: while (true) {
      var newOffset = _bH__95Parser_95isSubChar_95raw(isGood, offset, s0.b);

      if (_2c__95Utils_95eq(newOffset, -1)) {
        return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(_46__95Utils_95cmp(s0.h, offset) < 0, 0, {
          bl: col,
          l: s0.l,
          p: s0.p,
          h: offset,
          cE: row,
          b: s0.b
        });
      } else {
        if (_2c__95Utils_95eq(newOffset, -2)) {
          var $temp$isGood = isGood,
              $temp$offset = offset + 1,
              $temp$row = row + 1,
              $temp$col = 1,
              $temp$s0 = s0;
          isGood = $temp$isGood;
          offset = $temp$offset;
          row = $temp$row;
          col = $temp$col;
          s0 = $temp$s0;
          continue chompWhileHelp;
        } else {
          var $temp$isGood = isGood,
              $temp$offset = newOffset,
              $temp$row = row,
              $temp$col = col + 1,
              $temp$s0 = s0;
          isGood = $temp$isGood;
          offset = $temp$offset;
          row = $temp$row;
          col = $temp$col;
          s0 = $temp$s0;
          continue chompWhileHelp;
        }
      }
    }
  };

  var _2y__36elm_36parser_36Parser_36Advanced_36map2_95raw = function (func, _v0, _v1) {
    var parseA = _v0;
    var parseB = _v1;
    return function (s0) {
      var _v2 = parseA(s0);

      if (_v2.$ === 1) {
        var p = _v2.a;
        var x = _v2.b;
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p, x);
      } else {
        var p1 = _v2.a;
        var a = _v2.b;
        var s1 = _v2.c;

        var _v3 = parseB(s1);

        if (_v3.$ === 1) {
          var p2 = _v3.a;
          var x = _v3.b;
          return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p1 || p2, x);
        } else {
          var p2 = _v3.a;
          var b = _v3.b;
          var s2 = _v3.c;
          return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p1 || p2, _q_A2(func, a, b), s2);
        }
      }
    };
  };

  var _Za__36author_36project_36Helpers_36isSpaceOrTab = function (c) {
    switch (c) {
      case " ":
        return true;

      case "\t":
        return true;

      default:
        return false;
    }
  };

  var _5g__36elm_36parser_36Parser_36Advanced_36map_95raw = function (func, _v0) {
    var parse = _v0;
    return function (s0) {
      var _v1 = parse(s0);

      if (!_v1.$) {
        var p = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;
        return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p, func(a), s1);
      } else {
        var p = _v1.a;
        var x = _v1.b;
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p, x);
      }
    };
  };

  var _ab__36elm_36parser_36Parser_36Advanced_36symbol = function (_v0) {
    var str = _v0.a;
    var expecting = _v0.b;
    var progress = !_8O__36elm_36core_36String_36isEmpty(str);
    return function (s) {
      var _v1 = _Yj__95Parser_95isSubString_95raw(str, s.h, s.cE, s.bl, s.b);

      var newOffset = _v1.a;
      var newRow = _v1.b;
      var newCol = _v1.c;
      return _2c__95Utils_95eq(newOffset, -1) ? _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, expecting)) : _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(progress, 0, {
        bl: newCol,
        l: s.l,
        p: s.p,
        h: newOffset,
        cE: newRow,
        b: s.b
      });
    };
  };

  var $_1_factoryFunction = function (parse, s0) {
    var _v1 = parse(s0);

    if (_v1.$ === 1) {
      var x = _v1.b;
      return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, x);
    } else {
      var a = _v1.b;
      var s1 = _v1.c;
      return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, a, s1);
    }
  };

  var _7k_parse = function (s0) {
    return $_1_factoryFunction.call(this, _9d_parse, s0);
  };

  var _7l_parse = function (s0) {
    return $_1_factoryFunction.call(this, _9f_parse, s0);
  };

  var _7n_parse = function (s0) {
    return $_1_factoryFunction.call(this, _9f_parse, s0);
  };

  var _9n_ = function (s0) {
    return $_1_factoryFunction.call(this, _B2_parse, s0);
  };

  var _9y_ = function (s0) {
    return $_1_factoryFunction.call(this, _B2_parse, s0);
  };

  var _Ay_parse = function (s0) {
    return $_1_factoryFunction.call(this, _CS_parse, s0);
  };

  var _Az_parse = function (s0) {
    return $_1_factoryFunction.call(this, _CT_parse, s0);
  };

  var _B5_parse = function (s0) {
    return $_1_factoryFunction.call(this, _CS_parse, s0);
  };

  var _B7_parse = function (s0) {
    return $_1_factoryFunction.call(this, _CT_parse, s0);
  };

  var _CI_parseA = function (s0) {
    return $_1_factoryFunction.call(this, _Y0_parse, s0);
  };

  var _aJ_ = function (s0) {
    return $_1_factoryFunction.call(this, _by_parse, s0);
  };

  var _ay_parseA = function (s0) {
    return $_1_factoryFunction.call(this, _cp_parse, s0);
  };

  var _c3_parseA = function (s0) {
    return $_1_factoryFunction.call(this, _eK_parse, s0);
  };

  var _cD_parseA = function (s0) {
    return $_1_factoryFunction.call(this, _ee_parse, s0);
  };

  var _cJ_parseB = function (s0) {
    return $_1_factoryFunction.call(this, _el_parse, s0);
  };

  var _cK_parseA = function (s0) {
    return $_1_factoryFunction.call(this, _em_parse, s0);
  };

  var _cw_parseB = function (s0) {
    return $_1_factoryFunction.call(this, _f9_parseA, s0);
  };

  var _cx_parseA = function (s0) {
    return $_1_factoryFunction.call(this, _fA_parse, s0);
  };

  var _mQ_parseB = function (s0) {
    return $_1_factoryFunction.call(this, _nB_parse, s0);
  };

  var $_8_factoryFunction = function (str, expecting, s) {
    var _v1 = _Yj__95Parser_95isSubString_95raw(str, s.h, s.cE, s.bl, s.b);

    var newOffset = _v1.a;
    var newRow = _v1.b;
    var newCol = _v1.c;
    return _2c__95Utils_95eq(newOffset, -1) ? _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, expecting)) : _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(true, 0, {
      bl: newCol,
      l: s.l,
      p: s.p,
      h: newOffset,
      cE: newRow,
      b: s.b
    });
  };

  var _DJ_ = function (s) {
    return $_8_factoryFunction.call(this, "\n", _Yk_expecting, s);
  };

  var _ZJ_ = function (s) {
    return $_8_factoryFunction.call(this, "\t", _av_expecting, s);
  };

  var _ZP_parseA = function (s) {
    return $_8_factoryFunction.call(this, "<", _b1_expecting, s);
  };

  var _aM_ = function (s) {
    return $_8_factoryFunction.call(this, ">", _c0_expecting, s);
  };

  var _ai_parseB = function (s) {
    return $_8_factoryFunction.call(this, "#", _cR_expecting, s);
  };

  var _am_parseB = function (s) {
    return $_8_factoryFunction.call(this, "<?", _ca_expecting, s);
  };

  var _ao_parseB = function (s) {
    return $_8_factoryFunction.call(this, "<!--", _ce_expecting, s);
  };

  var _as_parseB = function (s) {
    return $_8_factoryFunction.call(this, "<", _cm_expecting, s);
  };

  var _bg_parseB = function (s) {
    return $_8_factoryFunction.call(this, "?>", _dh_expecting, s);
  };

  var _bj_parseB = function (s) {
    return $_8_factoryFunction.call(this, "-->", _dk_expecting, s);
  };

  var _bl_parseB = function (s) {
    return $_8_factoryFunction.call(this, ">", _dr_expecting, s);
  };

  var _br_ = function (s) {
    return $_8_factoryFunction.call(this, " ", _e6_expecting, s);
  };

  var _bs_ = function (s) {
    return $_8_factoryFunction.call(this, ">", _e9_expecting, s);
  };

  var _cW_parseB = function (s) {
    return $_8_factoryFunction.call(this, "<![CDATA[", _ev_expecting, s);
  };

  var _ci_parseB = function (s) {
    return $_8_factoryFunction.call(this, "<!", _f0_expecting, s);
  };

  var _df_parseB = function (s) {
    return $_8_factoryFunction.call(this, "]]>", _fx_expecting, s);
  };

  var _e1_ = function (s) {
    return $_8_factoryFunction.call(this, "   ", _g6_expecting, s);
  };

  var _e2_ = function (s) {
    return $_8_factoryFunction.call(this, " \t", _g9_expecting, s);
  };

  var _e3_ = function (s) {
    return $_8_factoryFunction.call(this, "  \t", _gC_expecting, s);
  };

  var _eK_parse = function (s) {
    return $_8_factoryFunction.call(this, " ", _aT_expecting, s);
  };

  var _eV_ = function (s) {
    return $_8_factoryFunction.call(this, "\n", _gz_expecting, s);
  };

  var _eY_ = function (s) {
    return $_8_factoryFunction.call(this, "\n", _h3_expecting, s);
  };

  var _eb_ = function (s) {
    return $_8_factoryFunction.call(this, "\n", _h7_expecting, s);
  };

  var _fH_ = function (s) {
    return $_8_factoryFunction.call(this, ">", _hw_expecting, s);
  };

  var _fI_ = function (s) {
    return $_8_factoryFunction.call(this, " >", _hz_expecting, s);
  };

  var _fJ_ = function (s) {
    return $_8_factoryFunction.call(this, "  >", _i2_expecting, s);
  };

  var _fK_parseA = function (s) {
    return $_8_factoryFunction.call(this, "```", _i5_expecting, s);
  };

  var _fL_parseA = function (s) {
    return $_8_factoryFunction.call(this, "~~~", _i8_expecting, s);
  };

  var _gx_parseB = function (s) {
    return $_8_factoryFunction.call(this, "-", _jD_expecting, s);
  };

  var _h1_parseB = function (s) {
    return $_8_factoryFunction.call(this, "*", _jF_expecting, s);
  };

  var _h5_parseB = function (s) {
    return $_8_factoryFunction.call(this, "_", _jH_expecting, s);
  };

  var _hb_ = function (s) {
    return $_8_factoryFunction.call(this, ":", _jj_expecting, s);
  };

  var _hc_ = function (s) {
    return $_8_factoryFunction.call(this, "@", _jm_expecting, s);
  };

  var _hd_ = function (s) {
    return $_8_factoryFunction.call(this, "\\", _jp_expecting, s);
  };

  var _he_ = function (s) {
    return $_8_factoryFunction.call(this, "+", _js_expecting, s);
  };

  var _hf_ = function (s) {
    return $_8_factoryFunction.call(this, ".", _jv_expecting, s);
  };

  var _hk_parseB = function (s) {
    return $_8_factoryFunction.call(this, "<", _k1_expecting, s);
  };

  var _lV_parseB = function (s) {
    return $_8_factoryFunction.call(this, "[", _mG_expecting, s);
  };

  var _lv_parseB = function (s) {
    return $_8_factoryFunction.call(this, "]:", _md_expecting, s);
  };

  var _lw_parseB = function (s) {
    return $_8_factoryFunction.call(this, "\"", _mg_expecting, s);
  };

  var _ly_parseB = function (s) {
    return $_8_factoryFunction.call(this, "'", _mk_expecting, s);
  };

  var _m2_parseB = function (s) {
    return $_8_factoryFunction.call(this, "[x] ", _mr_expecting, s);
  };

  var _m4_parseB = function (s) {
    return $_8_factoryFunction.call(this, "[X] ", _mu_expecting, s);
  };

  var _m6_parseB = function (s) {
    return $_8_factoryFunction.call(this, "[ ] ", _mx_expecting, s);
  };

  var _nT_parseB = function (s) {
    return $_8_factoryFunction.call(this, "\"", _ns_expecting, s);
  };

  var _nV_parseB = function (s) {
    return $_8_factoryFunction.call(this, "'", _nv_expecting, s);
  };

  var _ng_parseB = function (s) {
    return $_8_factoryFunction.call(this, "\"", _o1_expecting, s);
  };

  var _nj_parseB = function (s) {
    return $_8_factoryFunction.call(this, "'", _o4_expecting, s);
  };

  var _oD_parseB = function (s) {
    return $_8_factoryFunction.call(this, "&", _oK_expecting, s);
  };

  var _oJ_parseB = function (s) {
    return $_8_factoryFunction.call(this, ";", _oQ_expecting, s);
  };

  var $_4_factoryFunction = function (parseA, parseB, func, s0) {
    var _v2 = parseA(s0);

    if (_v2.$ === 1) {
      var p = _v2.a;
      var x = _v2.b;
      return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p, x);
    } else {
      var p1 = _v2.a;
      var a = _v2.b;
      var s1 = _v2.c;

      var _v3 = parseB(s1);

      if (_v3.$ === 1) {
        var p2 = _v3.a;
        var x = _v3.b;
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p1 || p2, x);
      } else {
        var p2 = _v3.a;
        var b = _v3.b;
        var s2 = _v3.c;
        return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p1 || p2, _q_A2(func, a, b), s2);
      }
    }
  };

  var _9i__36author_36project_36Markdown_36Parser_36blockQuote = function (s0) {
    return $_4_factoryFunction.call(this, _Ax_parseA, _BZ_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _9p__36author_36project_36Markdown_36Parser_36plainLine = function (s0) {
    return $_4_factoryFunction.call(this, _B4_parseA, _Br_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _9v__36author_36project_36Markdown_36Parser_36indentedCodeBlock = function (s0) {
    return $_4_factoryFunction.call(this, _B6_parseA, _Bs_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Ao_parse = function (s0) {
    return $_4_factoryFunction.call(this, _CC_parseA, _Br_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Aq_parse = function (s0) {
    return $_4_factoryFunction.call(this, _CH_parseA, _Cz_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Av_parse = function (s0) {
    return $_4_factoryFunction.call(this, _CI_parseA, _D0_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Ax_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _CQ_parseA, _D3_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _B2_parse = function (s0) {
    return $_4_factoryFunction.call(this, _CY_parseA, _DC_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _B6_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Cj_parseA, _DK_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _BZ_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _D4_parseA, _Br_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Bs_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _DL_parseA, _Br_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _CC_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Xq_parseA, _Yb_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _CH_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Xz_parseA, _Yd_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _CQ_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Y2_parseA, _Yo_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _CW_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _YA_parseA, _Z8_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _CX_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _YB_parseA, _ZA_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _CY_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _YC_parseA, _ZB_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Ca__36author_36project_36HtmlParser_36processingInstruction = function (s0) {
    return $_4_factoryFunction.call(this, _YE_parseA, _ZE_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Cb__36author_36project_36HtmlParser_36comment = function (s0) {
    return $_4_factoryFunction.call(this, _YF_parseA, _ZF_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Cc__36author_36project_36HtmlParser_36docType = function (s0) {
    return $_4_factoryFunction.call(this, _YG_parseA, _ZG_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Cd_ = function (s0) {
    return $_4_factoryFunction.call(this, _YH_parseA, _ZH_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Ck_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _YO_parseA, _ZM_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Xq_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _ZP_parseA, _aF_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Xz_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _ZT_parseA, _aG_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Y8_ = function (s0) {
    return $_4_factoryFunction.call(this, _Zl_parseA, _Y9_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _YA_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Zp_parseA, _aW_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _YB_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Zq_parseA, _ag_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _YC_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Zr_parseA, _ai_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _YD_parse = function (s0) {
    return $_4_factoryFunction.call(this, _Zv_parseA, _al_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _YE_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Zw_parseA, _am_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _YF_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Zx_parseA, _ao_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _YG_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Zy_parseA, _aq_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _YH_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _Zz_parseA, _as_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _YO_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _a2_parseA, _az_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Z8_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _aX_parseA, _bW_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _ZA_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _ah_parseA, _bY_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ZE_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _an_parseA, _bg_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ZF_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _ap_parseA, _bj_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ZG_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _ar_parseA, _bl_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ZK_ = function (s0) {
    return $_4_factoryFunction.call(this, _ay_parseA, _bo_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ZM_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _b0_parseA, _bY_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ZT_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _bA_parseA, _bu_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Zl_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _bL_parseA, _c8_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Zm_ = function (s0) {
    return $_4_factoryFunction.call(this, _bM_parseA, _c9_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Zn_ = function (s0) {
    return $_4_factoryFunction.call(this, _bN_parseA, _cA_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Zo_ = function (s0) {
    return $_4_factoryFunction.call(this, _bO_parseA, _cB_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Zq_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _bX_parseA, _cJ_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _Zv_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _bd_parseA, _cW_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _Zy_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _bk_parseA, _ci_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _a2_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _bp_parseA, _cw_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _aG_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _bv_parseA, _d7_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _aK_ = function (s0) {
    return $_4_factoryFunction.call(this, _bz_parseA, _d8_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _aN_ = function (s0) {
    return $_4_factoryFunction.call(this, _c3_parseA, _d9_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _aW_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _cD_parseA, _dW_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ag_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _cK_parseA, _da_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _al_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _cX_parseA, _df_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _aq_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _cj_parseA, _dp_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _az_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _cx_parseA, _e4_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bL_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _dC_parseA, _eR_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bM_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _dH_parseA, _eU_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bN_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _dM_parseA, _eX_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bO_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _dR_parseA, _ea_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bW_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _dX_parseA, _Br_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bt_ = function (s0) {
    return $_4_factoryFunction.call(this, _eC_parseA, _fB_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bv_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _eG_parseA, _fD_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bw_ = function (s0) {
    return $_4_factoryFunction.call(this, _eH_parseA, _fE_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _by_parse = function (s0) {
    return $_4_factoryFunction.call(this, _eJ_parseA, _fF_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _cF_ = function (s0) {
    return $_4_factoryFunction.call(this, _ei_parseA, _fp_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _co_parse = function (s0) {
    return $_4_factoryFunction.call(this, _f3_parseA, _g0_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _d8_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _fG_parseA, _gk_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dA_parse = function (s0) {
    return $_4_factoryFunction.call(this, _fK_parseA, _gp_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dB_parse = function (s0) {
    return $_4_factoryFunction.call(this, _fL_parseA, _gr_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dC_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _fM_parseA, _eS_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dH_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _fS_parseA, _gx_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dM_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _fX_parseA, _h1_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dR_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _fc_parseA, _h5_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dW_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _fo_parseA, _hC_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _da_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _fv_parseA, _hN_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dp_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _fz_parseA, _hP_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _e4_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _gJ_parseA, _hZ_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _eC_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _gK_parseA, _ha_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _eE_ = function (s0) {
    return $_4_factoryFunction.call(this, _gV_parseA, _hg_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _eG_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _gW_parseA, _hh_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _eH_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _gb_parseA, _hk_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _eI_parse = function (s0) {
    return $_4_factoryFunction.call(this, _gc_parseA, _hm_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _eJ_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _gd_parseA, _hn_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _f2_parse = function (s0) {
    return $_4_factoryFunction.call(this, _hO_parseA, _iZ_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _fE_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _hl_parseA, _j3_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _fS_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _iC_parseA, _jC_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _fX_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _iF_parseA, _jC_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _fc_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _iI_parseA, _jC_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _fp_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _iT_parseA, _jU_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _gV_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _iv_parseA, _jy_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _gW_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _j0_parseA, _k0_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _h9_ = function (s0) {
    return $_4_factoryFunction.call(this, _jJ_parseA, _kM_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _hA_ = function (s0) {
    return $_4_factoryFunction.call(this, _jK_parseA, _kT_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _hB_ = function (s0) {
    return $_4_factoryFunction.call(this, _jL_parseA, _ka_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _hL_ = function (s0) {
    return $_4_factoryFunction.call(this, _jV_parseA, _ko_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _hM_ = function (s0) {
    return $_4_factoryFunction.call(this, _jX_parseA, _kv_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _hX_ = function (s0) {
    return $_4_factoryFunction.call(this, _jg_parseA, _kz_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _hY_ = function (s0) {
    return $_4_factoryFunction.call(this, _jh_parseA, _l0_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _hn_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _k6_parseA, _lG_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ho_inDoubleQuotes = function (s0) {
    return $_4_factoryFunction.call(this, _k7_parseA, _lH_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _hp_inSingleQuotes = function (s0) {
    return $_4_factoryFunction.call(this, _k8_parseA, _lI_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _iC_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _kD_parseA, _gx_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _iF_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _kE_parseA, _h1_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _iI_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _kF_parseA, _h5_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _j0_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _lC_parseA, _lV_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _jM_ = function (s0) {
    return $_4_factoryFunction.call(this, _lJ_parseA, _Z8_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _jN_ = function (s0) {
    return $_4_factoryFunction.call(this, _lK_parseA, _li_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _jf_parse = function (s0) {
    return $_4_factoryFunction.call(this, _lN_parseA, _lr_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _k0_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _lW_parseA, _lv_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _k7_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _la_parseA, _lw_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _k8_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _lb_parseA, _ly_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _kD_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _lc_parseA, _jC_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _kE_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _ld_parseA, _jC_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _kF_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _le_parseA, _jC_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _kb_ = function (s0) {
    return $_4_factoryFunction.call(this, _lj_parseA, _m2_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _kc_ = function (s0) {
    return $_4_factoryFunction.call(this, _lk_parseA, _m4_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _kd_ = function (s0) {
    return $_4_factoryFunction.call(this, _ll_parseA, _m6_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _lH_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _lx_parseA, _d8_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _lI_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _lz_parseA, _d8_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _lJ_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _m0_parseA, _mQ_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _lL_ = function (s0) {
    return $_4_factoryFunction.call(this, _m7_parseA, _mU_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _lM_ = function (s0) {
    return $_4_factoryFunction.call(this, _m8_parseA, _bY_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _lc_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _mN_parseA, _gx_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ld_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _mO_parseA, _h1_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _le_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _mP_parseA, _h5_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _lx_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _mj_parseA, _n9_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _lz_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _mn_parseA, _nA_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _m7_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _n0_parseA, _nC_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _mD_ = function (s0) {
    return $_4_factoryFunction.call(this, _n1_parseA, _nE_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _mE_ = function (s0) {
    return $_4_factoryFunction.call(this, _n2_parseA, _nF_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _mU_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _nD_parseA, _bY_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _n1_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _nL_parseA, _nT_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _n2_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _nM_parseA, _nV_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nB_parse = function (s0) {
    return $_4_factoryFunction.call(this, _nQ_parseA, _nb_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nC_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _nR_parseA, _nc_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nE_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _nU_parseA, _ng_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nF_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _nW_parseA, _nj_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nN_parse = function (s0) {
    return $_4_factoryFunction.call(this, _nk_parseA, _ny_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nO_parse = function (s0) {
    return $_4_factoryFunction.call(this, _nl_parseA, _nz_parseB, _Ba__36elm_36core_36Basics_36apL, s0);
  };

  var _nl_parseA = function (s0) {
    return $_4_factoryFunction.call(this, _oA_parseA, _oD_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nz_parseB = function (s0) {
    return $_4_factoryFunction.call(this, _oE_parseA, _oJ_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _oS_parse = function (s0) {
    return $_4_factoryFunction.call(this, _oU_parseA, _ov_parseB, _2z__36elm_36core_36Basics_36always, s0);
  };

  var $_0_factoryFunction = function (parse, func, s0) {
    var _v1 = parse(s0);

    if (!_v1.$) {
      var p = _v1.a;
      var a = _v1.b;
      var s1 = _v1.c;
      return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p, func(a), s1);
    } else {
      var p = _v1.a;
      var x = _v1.b;
      return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p, x);
    }
  };

  var _6q_ = function (s0) {
    return $_0_factoryFunction.call(this, _1m_parse, _8V_, s0);
  };

  var _6r_ = function (s0) {
    return $_0_factoryFunction.call(this, _7k_parse, _8X_, s0);
  };

  var _6s_ = function (s0) {
    return $_0_factoryFunction.call(this, _7l_parse, _8Z_, s0);
  };

  var _6t_ = function (s0) {
    return $_0_factoryFunction.call(this, _7m_parse, _8t_, s0);
  };

  var _6u_ = function (s0) {
    return $_0_factoryFunction.call(this, _1m_parse, _8v_, s0);
  };

  var _6v_ = function (s0) {
    return $_0_factoryFunction.call(this, _7k_parse, _8x_, s0);
  };

  var _6w_ = function (s0) {
    return $_0_factoryFunction.call(this, _7n_parse, _8z_, s0);
  };

  var _6x_ = function (s0) {
    return $_0_factoryFunction.call(this, _7o_parse, _9L_, s0);
  };

  var _9h__36author_36project_36Markdown_36Parser_36blankLine = function (s0) {
    return $_0_factoryFunction.call(this, _Av_parse, _BY_, s0);
  };

  var _9j_ = function (s0) {
    return $_0_factoryFunction.call(this, _Ay_parse, _Bc__36author_36project_36Markdown_36RawBlock_36CodeBlock, s0);
  };

  var _9k_ = function (s0) {
    return $_0_factoryFunction.call(this, _Az_parse, _Bd_, s0);
  };

  var _9l__36author_36project_36Markdown_36Parser_36unorderedListBlock = function (s0) {
    return $_0_factoryFunction.call(this, _B0_parse, _Be_, s0);
  };

  var _9m_ = function (s0) {
    return $_0_factoryFunction.call(this, _B1_parse, _Bf_, s0);
  };

  var _9u_ = function (s0) {
    return $_0_factoryFunction.call(this, _B5_parse, _Bc__36author_36project_36Markdown_36RawBlock_36CodeBlock, s0);
  };

  var _9w_ = function (s0) {
    return $_0_factoryFunction.call(this, _B7_parse, _Bt_, s0);
  };

  var _9x_ = function (s0) {
    return $_0_factoryFunction.call(this, _B8_parse, _Bu_, s0);
  };

  var _CZ_ = function (s0) {
    return $_0_factoryFunction.call(this, _YD_parse, _ZD__36author_36project_36HtmlParser_36Cdata, s0);
  };

  var _Zj_ = function (s0) {
    return $_0_factoryFunction.call(this, _bJ_parse, _c6_, s0);
  };

  var _Zk_ = function (s0) {
    return $_0_factoryFunction.call(this, _bK_parse, _c7_, s0);
  };

  var _dy__36author_36project_36HtmlParser_36attributes = function (s0) {
    return $_0_factoryFunction.call(this, _g2_parse, _hU_, s0);
  };

  var _n3_ = function (s0) {
    return $_0_factoryFunction.call(this, _nN_parse, _nX_, s0);
  };

  var _n4_ = function (s0) {
    return $_0_factoryFunction.call(this, _nO_parse, _nY_, s0);
  };

  var _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw = function (s0, bag, parsers) {
    oneOfHelp: while (true) {
      if (!parsers.b) {
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, bag);
      } else {
        var parse = parsers.a;
        var remainingParsers = parsers.b;

        var _v1 = parse(s0);

        if (!_v1.$) {
          var step = _v1;
          return step;
        } else {
          var step = _v1;
          var p = step.a;
          var x = step.b;

          if (p) {
            return step;
          } else {
            var $temp$s0 = s0,
                $temp$bag = _7j__36elm_36parser_36Parser_36Advanced_36Append_95raw(bag, x),
                $temp$parsers = remainingParsers;

            s0 = $temp$s0;
            bag = $temp$bag;
            parsers = $temp$parsers;
            continue oneOfHelp;
          }
        }
      }
    }
  };

  var _cH__36elm_36parser_36Parser_36Advanced_36mapChompedString_95raw = function (func, _v0) {
    var parse = _v0;
    return function (s0) {
      var _v1 = parse(s0);

      if (_v1.$ === 1) {
        var p = _v1.a;
        var x = _v1.b;
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p, x);
      } else {
        var p = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;
        return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p, _q_A2(func, _AU__95String_95slice_95raw(s0.h, s1.h, s0.b), a), s1);
      }
    };
  };

  var $_7_factoryFunction = function (str, s) {
    var _v0 = _YI__95Parser_95findSubString_95raw(str, s.h, s.cE, s.bl, s.b);

    var newOffset = _v0.a;
    var newRow = _v0.b;
    var newCol = _v0.c;
    var adjustedOffset = newOffset < 0 ? _33__36elm_36core_36String_36length(s.b) : newOffset;
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(_46__95Utils_95cmp(s.h, adjustedOffset) < 0, 0, {
      bl: newCol,
      l: s.l,
      p: s.p,
      h: adjustedOffset,
      cE: newRow,
      b: s.b
    });
  };

  var $_2_factoryFunction = function (parse, func, s0) {
    var _v1 = parse(s0);

    if (_v1.$ === 1) {
      var p = _v1.a;
      var x = _v1.b;
      return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p, x);
    } else {
      var p = _v1.a;
      var a = _v1.b;
      var s1 = _v1.c;
      return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p, _q_A2(func, _AU__95String_95slice_95raw(s0.h, s1.h, s0.b), a), s1);
    }
  };

  var _9d_parse = function (s0) {
    return $_2_factoryFunction.call(this, _Ao_parse, _BW_, s0);
  };

  var _B4_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _Ce_parse, _DF_, s0);
  };

  var _D4_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _Yw_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _DC_parseB = function (s0) {
    return $_2_factoryFunction.call(this, _ZC_parse, _Zt_, s0);
  };

  var _DL_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _ZL_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ah_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _cL_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _aj_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _cU_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _an_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _cc_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ap_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _cg_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ar_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _ck_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _at_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _co_parse, _dt_, s0);
  };

  var _b0_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _cy_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bJ_parse = function (s0) {
    return $_2_factoryFunction.call(this, _dA_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bK_parse = function (s0) {
    return $_2_factoryFunction.call(this, _dB_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _bx_ = function (s0) {
    return $_2_factoryFunction.call(this, _eI_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _cX_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _ex_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _cj_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _f2_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _dX_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _fq_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _hW_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _jf_parse, _kx_, s0);
  };

  var _hl_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _k4_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _ih__36author_36project_36HtmlParser_36textNodeString = function (s0) {
    return $_2_factoryFunction.call(this, _l2_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _lW_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _mJ_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nD_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _nS_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nJ_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _nZ_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _nK_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _na_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _oM_parseA = function (s0) {
    return $_2_factoryFunction.call(this, _oS_parse, _2z__36elm_36core_36Basics_36always, s0);
  };

  var _7i__36author_36project_36Markdown_36Parser_36problemToString = function (problem) {
    switch (problem.$) {
      case 0:
        var string = problem.a;
        return "Expecting " + string;

      case 1:
        return "Expecting int";

      case 2:
        return "Expecting hex";

      case 3:
        return "Expecting octal";

      case 4:
        return "Expecting binary";

      case 5:
        return "Expecting float";

      case 6:
        return "Expecting number";

      case 7:
        return "Expecting variable";

      case 8:
        var string = problem.a;
        return "Expecting symbol " + string;

      case 9:
        var string = problem.a;
        return "Expecting keyword " + string;

      case 10:
        return "Expecting keyword end";

      case 11:
        return "Unexpected char";

      case 12:
        var problemDescription = problem.a;
        return problemDescription;

      default:
        return "Bad repeat";
    }
  };

  var _eq__36author_36project_36Markdown_36Parser_36isHash = function (c) {
    if ("#" === c) {
      return true;
    } else {
      return false;
    }
  };

  var _bc_ = function (additionalHashes) {
    var level = _33__36elm_36core_36String_36length(additionalHashes) + 1;
    return level >= 7 ? _1p__36elm_36parser_36Parser_36Advanced_36problem(_6I__36elm_36parser_36Parser_36Expecting("heading with < 7 #'s")) : _DD__36elm_36parser_36Parser_36Advanced_36succeed(level);
  };

  var $_5_factoryFunction = function (parseA, callback, s0) {
    var _v1 = parseA(s0);

    if (_v1.$ === 1) {
      var p = _v1.a;
      var x = _v1.b;
      return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p, x);
    } else {
      var p1 = _v1.a;
      var a = _v1.b;
      var s1 = _v1.c;

      var _v2 = callback(a);

      var parseB = _v2;

      var _v3 = parseB(s1);

      if (_v3.$ === 1) {
        var p2 = _v3.a;
        var x = _v3.b;
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p1 || p2, x);
      } else {
        var p2 = _v3.a;
        var b = _v3.b;
        var s2 = _v3.c;
        return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p1 || p2, b, s2);
      }
    }
  };

  var _9o_ = function (s0) {
    return $_5_factoryFunction.call(this, _B3_parseA, _Bq__36author_36project_36Markdown_36Parser_36xmlNodeToHtmlNode, s0);
  };

  var _9z_ = function (s0) {
    return $_5_factoryFunction.call(this, _B3_parseA, _Bq__36author_36project_36Markdown_36Parser_36xmlNodeToHtmlNode, s0);
  };

  var _B0_parse = function (s0) {
    return $_5_factoryFunction.call(this, _CW_parseA, _1g__36elm_36core_36Basics_36identity, s0);
  };

  var _B1_parse = function (s0) {
    return $_5_factoryFunction.call(this, _CX_parseA, _1g__36elm_36core_36Basics_36identity, s0);
  };

  var _B8_parse = function (s0) {
    return $_5_factoryFunction.call(this, _Ck_parseA, _1g__36elm_36core_36Basics_36identity, s0);
  };

  var _CS_parse = function (s0) {
    return $_5_factoryFunction.call(this, _Y7_parseA, _Z1_, s0);
  };

  var _ZB_parseB = function (s0) {
    return $_5_factoryFunction.call(this, _aj_parseA, _bc_, s0);
  };

  var _ZH_parseB = function (s0) {
    return $_5_factoryFunction.call(this, _at_parseA, _bn__36author_36project_36HtmlParser_36elementContinuation, s0);
  };

  var _el_parse = function (s0) {
    return $_5_factoryFunction.call(this, _f9_parseA, _iV__36author_36project_36Markdown_36OrderedList_36validateStartsWith1, s0);
  };

  var _f9_parseA = function (s0) {
    return $_5_factoryFunction.call(this, _hW_parseA, _id_, s0);
  };

  var _mj_parseA = function (s0) {
    return $_5_factoryFunction.call(this, _nJ_parseA, _nP__36author_36project_36Markdown_36LinkReferenceDefinition_36hasNoBlankLine, s0);
  };

  var _mn_parseA = function (s0) {
    return $_5_factoryFunction.call(this, _nK_parseA, _nP__36author_36project_36Markdown_36LinkReferenceDefinition_36hasNoBlankLine, s0);
  };

  var _oE_parseA = function (s0) {
    return $_5_factoryFunction.call(this, _oM_parseA, _oO_process, s0);
  };

  var _hQ__36author_36project_36HtmlParser_36tagNameCharacter = function (c) {
    switch (c) {
      case " ":
        return false;

      case "\r":
        return false;

      case "\n":
        return false;

      case "\t":
        return false;

      case "/":
        return false;

      case "<":
        return false;

      case ">":
        return false;

      case "\"":
        return false;

      case "'":
        return false;

      case "=":
        return false;

      default:
        return true;
    }
  };

  var $_9_factoryFunction = function (isGood, expecting, s) {
    var newOffset = _bH__95Parser_95isSubChar_95raw(isGood, s.h, s.b);

    return _2c__95Utils_95eq(newOffset, -1) ? _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, expecting)) : _2c__95Utils_95eq(newOffset, -2) ? _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(true, 0, {
      bl: 1,
      l: s.l,
      p: s.p,
      h: s.h + 1,
      cE: s.cE + 1,
      b: s.b
    }) : _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(true, 0, {
      bl: s.bl + 1,
      l: s.l,
      p: s.p,
      h: newOffset,
      cE: s.cE,
      b: s.b
    });
  };

  var _eS_parseB = function (s) {
    return $_9_factoryFunction.call(this, _gt__36author_36project_36ThematicBreak_36isSpace, _gu_, s);
  };

  var _f3_parseA = function (s) {
    return $_9_factoryFunction.call(this, _hQ__36author_36project_36HtmlParser_36tagNameCharacter, _hR__36author_36project_36HtmlParser_36expectTagNameCharacter, s);
  };

  var _fo_parseA = function (s) {
    return $_9_factoryFunction.call(this, _Za__36author_36project_36Helpers_36isSpaceOrTab, _iL_, s);
  };

  var _fv_parseA = function (s) {
    return $_9_factoryFunction.call(this, _Za__36author_36project_36Helpers_36isSpaceOrTab, _iW_, s);
  };

  var _fz_parseA = function (s) {
    return $_9_factoryFunction.call(this, _g1__36author_36project_36HtmlParser_36isWhitespace, _ia_, s);
  };

  var _gJ_parseA = function (s) {
    return $_9_factoryFunction.call(this, _Za__36author_36project_36Helpers_36isSpaceOrTab, _ij_, s);
  };

  var _gK_parseA = function (s) {
    return $_9_factoryFunction.call(this, _im__36elm_36core_36Char_36isAlpha, _in_, s);
  };

  var _gc_parseA = function (s) {
    return $_9_factoryFunction.call(this, _j4_, _j5_, s);
  };

  var _hO_parseA = function (s) {
    return $_9_factoryFunction.call(this, _jY__36elm_36core_36Char_36isUpper, _jZ__36author_36project_36HtmlParser_36expectUppercaseCharacter, s);
  };

  var _iv_parseA = function (s) {
    return $_9_factoryFunction.call(this, _Za__36author_36project_36Helpers_36isSpaceOrTab, _l4_, s);
  };

  var _k6_parseA = function (s) {
    return $_9_factoryFunction.call(this, _k9__36author_36project_36Helpers_36isGfmWhitespace, _lX_, s);
  };

  var _lN_parseA = function (s) {
    return $_9_factoryFunction.call(this, _m9__36elm_36core_36Char_36isDigit, _mA_, s);
  };

  var _nQ_parseA = function (s) {
    return $_9_factoryFunction.call(this, _Za__36author_36project_36Helpers_36isSpaceOrTab, _nm_, s);
  };

  var _nR_parseA = function (s) {
    return $_9_factoryFunction.call(this, _Za__36author_36project_36Helpers_36isSpaceOrTab, _np_, s);
  };

  var _nk_parseA = function (s) {
    return $_9_factoryFunction.call(this, _o6__36author_36project_36HtmlParser_36isNotTextNodeIgnoreChar, _o7_, s);
  };

  var _oU_parseA = function (s) {
    return $_9_factoryFunction.call(this, _oz_isEntityChar, _p0_, s);
  };

  var _4I__36elm_36parser_36Parser_36Advanced_36loopHelp_95raw = function (p, state, callback, s0) {
    loopHelp: while (true) {
      var _v0 = callback(state);

      var parse = _v0;

      var _v1 = parse(s0);

      if (!_v1.$) {
        var p1 = _v1.a;
        var step = _v1.b;
        var s1 = _v1.c;

        if (!step.$) {
          var newState = step.a;
          var $temp$p = p || p1,
              $temp$state = newState,
              $temp$callback = callback,
              $temp$s0 = s1;
          p = $temp$p;
          state = $temp$state;
          callback = $temp$callback;
          s0 = $temp$s0;
          continue loopHelp;
        } else {
          var result = step.a;
          return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p || p1, result, s1);
        }
      } else {
        var p1 = _v1.a;
        var x = _v1.b;
        return _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(p || p1, x);
      }
    }
  };

  var _p7__36rtfeldman_36elm_95hex_36Hex_36fromStringHelp_95raw = function (position, chars, accumulated) {
    fromStringHelp: while (true) {
      if (!chars.b) {
        return _1q__36elm_36core_36Result_36Ok(accumulated);
      } else {
        var _char = chars.a;
        var rest = chars.b;

        switch (_char) {
          case "0":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated;
            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "1":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "2":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 2 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "3":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 3 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "4":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 4 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "5":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 5 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "6":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 6 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "7":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 7 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "8":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 8 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "9":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 9 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "a":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 10 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "b":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 11 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "c":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 12 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "d":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 13 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "e":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 14 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          case "f":
            var $temp$position = position - 1,
                $temp$chars = rest,
                $temp$accumulated = accumulated + 15 * _q_A2(_5y__36elm_36core_36Basics_36pow, 16, position);

            position = $temp$position;
            chars = $temp$chars;
            accumulated = $temp$accumulated;
            continue fromStringHelp;

          default:
            var nonHex = _char;
            return _1n__36elm_36core_36Result_36Err(_YV__36elm_36core_36String_36fromChar(nonHex) + " is not a valid hexadecimal character.");
        }
      }
    }
  };

  var _ox__36elm_36core_36Result_36mapError_95raw = function (f, result) {
    if (!result.$) {
      var v = result.a;
      return _1q__36elm_36core_36Result_36Ok(v);
    } else {
      var e = result.a;
      return _1n__36elm_36core_36Result_36Err(f(e));
    }
  };

  var _p4__36elm_36core_36List_36tail = function (list) {
    if (list.b) {
      var xs = list.b;
      return _5D__36elm_36core_36Maybe_36Just(xs);
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _oy__36rtfeldman_36elm_95hex_36Hex_36fromString = function (str) {
    if (_8O__36elm_36core_36String_36isEmpty(str)) {
      return _1n__36elm_36core_36Result_36Err("Empty strings are not valid hexadecimal strings.");
    } else {
      var result = function () {
        if (_ow__95String_95startsWith_95raw("-", str)) {
          var list = _5f__36elm_36core_36Maybe_36withDefault_95raw(_d_out, _p4__36elm_36core_36List_36tail(_p5__36elm_36core_36String_36toList(str)));

          return _7D__36elm_36core_36Result_36map_95raw(_p6__36elm_36core_36Basics_36negate, _p7__36rtfeldman_36elm_95hex_36Hex_36fromStringHelp_95raw(_4Y__36elm_36core_36List_36length(list) - 1, list, 0));
        } else {
          return _p7__36rtfeldman_36elm_95hex_36Hex_36fromStringHelp_95raw(_33__36elm_36core_36String_36length(str) - 1, _p5__36elm_36core_36String_36toList(str), 0);
        }
      }();

      var formatError = err => _6Q__36elm_36core_36String_36join_95raw(" ", {
        $: 1,
        a: "\"" + (str + "\""),
        b: {
          $: 1,
          a: "is not a valid hexadecimal string because",
          b: {
            $: 1,
            a: err,
            b: _d_out
          }
        }
      });

      return _ox__36elm_36core_36Result_36mapError_95raw(formatError, result);
    }
  };

  var _oP__36author_36project_36HtmlParser_36escapedChar = function (end_) {
    var process = function (entityStr) {
      var _v0 = _oT__36author_36project_36HtmlParser_36decodeEscape(entityStr);

      if (!_v0.$) {
        var c = _v0.a;
        return _DD__36elm_36parser_36Parser_36Advanced_36succeed(c);
      } else {
        var e = _v0.a;
        return _1p__36elm_36parser_36Parser_36Advanced_36problem(e);
      }
    };

    var isEntityChar = c => !_2c__95Utils_95eq(c, end_) && c !== ";";

    return _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_DD__36elm_36parser_36Parser_36Advanced_36succeed(_1g__36elm_36core_36Basics_36identity), _dz__36author_36project_36HtmlParser_36symbol("&")), _1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_if__36elm_36parser_36Parser_36Advanced_36andThen_95raw(process, _aY__36elm_36parser_36Parser_36Advanced_36getChompedString(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_oV__36elm_36parser_36Parser_36Advanced_36chompIf_95raw(isEntityChar, _6I__36elm_36parser_36Parser_36Expecting("an entity character")), _af__36elm_36parser_36Parser_36Advanced_36chompWhile(isEntityChar)))), _dz__36author_36project_36HtmlParser_36symbol(";")));
  };

  var _lm__36author_36project_36HtmlParser_36keepOldest_95raw = function (_new, mValue) {
    if (!mValue.$) {
      var v = mValue.a;
      return _5D__36elm_36core_36Maybe_36Just(v);
    } else {
      return _5D__36elm_36core_36Maybe_36Just(_new);
    }
  };

  var _g1__36author_36project_36HtmlParser_36isWhitespace = function (c) {
    switch (c) {
      case " ":
        return true;

      case "\r":
        return true;

      case "\n":
        return true;

      case "\t":
        return true;

      default:
        return false;
    }
  };

  var _jc__36author_36project_36HtmlParser_36attributesStep = function (attrs) {
    var process_raw = (name, value) => _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_5C__36elm_36core_36Dict_36update_95raw(_a9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a1(name), _lO__36author_36project_36HtmlParser_36keepOldest(value), attrs)),
        process = _3A_F2(process_raw);

    return _5j__36elm_36parser_36Parser_36Advanced_36oneOf({
      $: 1,
      a: _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_DD__36elm_36parser_36Parser_36Advanced_36succeed(process), _1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_at_parseA, _dx__36author_36project_36HtmlParser_36whiteSpace), _dz__36author_36project_36HtmlParser_36symbol("=")), _dx__36author_36project_36HtmlParser_36whiteSpace)), _1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_lQ__36author_36project_36HtmlParser_36attributeValue, _dx__36author_36project_36HtmlParser_36whiteSpace)),
      b: {
        $: 1,
        a: _DD__36elm_36parser_36Parser_36Advanced_36succeed(_An__36elm_36parser_36Parser_36Advanced_36Done(attrs)),
        b: _d_out
      }
    });
  };

  var _ie__36author_36project_36HtmlParser_36closingTag = function (startTagName) {
    var closingTagName = _if__36elm_36parser_36Parser_36Advanced_36andThen_95raw(endTagName => _2c__95Utils_95eq(startTagName, endTagName) ? _DD__36elm_36parser_36Parser_36Advanced_36succeed(0) : _l1__36author_36project_36HtmlParser_36fail("tag name mismatch: " + (startTagName + (" and " + endTagName))), _at_parseA);

    return _1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_dz__36author_36project_36HtmlParser_36symbol("</"), _dx__36author_36project_36HtmlParser_36whiteSpace), closingTagName), _dx__36author_36project_36HtmlParser_36whiteSpace), _dz__36author_36project_36HtmlParser_36symbol(">"));
  };

  var _o6__36author_36project_36HtmlParser_36isNotTextNodeIgnoreChar = function (c) {
    switch (c) {
      case "<":
        return false;

      case "&":
        return false;

      default:
        return true;
    }
  };

  var _oO_process = function (entityStr) {
    var _v0 = _oT__36author_36project_36HtmlParser_36decodeEscape(entityStr);

    if (!_v0.$) {
      var c = _v0.a;
      return _DD__36elm_36parser_36Parser_36Advanced_36succeed(c);
    } else {
      var e = _v0.a;
      return _1p__36elm_36parser_36Parser_36Advanced_36problem(e);
    }
  };

  var _iV__36author_36project_36Markdown_36OrderedList_36validateStartsWith1 = function (parsed) {
    if (parsed === 1) {
      return _DD__36elm_36parser_36Parser_36Advanced_36succeed(parsed);
    } else {
      return _1p__36elm_36parser_36Parser_36Advanced_36problem(_5X__36elm_36parser_36Parser_36Problem("Lists inside a paragraph or after a paragraph without a blank line must start with 1"));
    }
  };

  var _8N__36author_36project_36Markdown_36InlineParser_36matchToInline = function (_v0) {
    var match = _v0;
    var _v1 = match.u;

    switch (_v1.$) {
      case 0:
        return _AN__36author_36project_36Markdown_36Inline_36Text(match.t);

      case 1:
        return _9Y__36author_36project_36Markdown_36Inline_36HardLineBreak;

      case 2:
        return _AO__36author_36project_36Markdown_36Inline_36CodeInline(match.t);

      case 3:
        var _v2 = _v1.a;
        var text = _v2.a;
        var url = _v2.b;
        return _AP__36author_36project_36Markdown_36Inline_36Link_95raw(url, _4j__36elm_36core_36Maybe_36Nothing, {
          $: 1,
          a: _AN__36author_36project_36Markdown_36Inline_36Text(text),
          b: _d_out
        });

      case 4:
        var _v3 = _v1.a;
        var url = _v3.a;
        var maybeTitle = _v3.b;
        return _AP__36author_36project_36Markdown_36Inline_36Link_95raw(url, maybeTitle, _7W__36author_36project_36Markdown_36InlineParser_36matchesToInlines(match.A));

      case 5:
        var _v4 = _v1.a;
        var url = _v4.a;
        var maybeTitle = _v4.b;
        return _AQ__36author_36project_36Markdown_36Inline_36Image_95raw(url, maybeTitle, _7W__36author_36project_36Markdown_36InlineParser_36matchesToInlines(match.A));

      case 6:
        var model = _v1.a;
        return _AR__36author_36project_36Markdown_36Inline_36HtmlInline(model);

      default:
        var length = _v1.a;
        return _AS__36author_36project_36Markdown_36Inline_36Emphasis_95raw(length, _7W__36author_36project_36Markdown_36InlineParser_36matchesToInlines(match.A));
    }
  };

  var _AW__36author_36project_36Markdown_36InlineParser_36organizeChildren = function (_v4) {
    var match = _v4;
    return {
      o: match.o,
      A: _7Y__36author_36project_36Markdown_36InlineParser_36organizeMatches(match.A),
      s: match.s,
      t: match.t,
      I: match.I,
      z: match.z,
      u: match.u
    };
  };

  var _7Y__36author_36project_36Markdown_36InlineParser_36organizeMatches = function (matches) {
    var _v2 = _8S__95List_95sortBy_95raw(function (_v3) {
      var match = _v3;
      return match.s;
    }, matches);

    if (!_v2.b) {
      return _d_out;
    } else {
      var first = _v2.a;
      var rest = _v2.b;
      return _8T__36author_36project_36Markdown_36InlineParser_36organizeMatchesHelp_95raw(rest, first, _d_out);
    }
  };

  var _8T__36author_36project_36Markdown_36InlineParser_36organizeMatchesHelp_95raw = function (remaining, _v0, matchesTail) {
    organizeMatchesHelp: while (true) {
      var prevMatch = _v0;

      if (!remaining.b) {
        return _1I__95List_95Cons(_AW__36author_36project_36Markdown_36InlineParser_36organizeChildren(prevMatch), matchesTail);
      } else {
        var match = remaining.a;
        var rest = remaining.b;

        if (_46__95Utils_95cmp(prevMatch.o, match.s) < 1) {
          var $temp$remaining = rest,
              $temp$_v0 = match,
              $temp$matchesTail = _1I__95List_95Cons(_AW__36author_36project_36Markdown_36InlineParser_36organizeChildren(prevMatch), matchesTail);

          remaining = $temp$remaining;
          _v0 = $temp$_v0;
          matchesTail = $temp$matchesTail;
          continue organizeMatchesHelp;
        } else {
          if (_46__95Utils_95cmp(prevMatch.s, match.s) < 0 && _46__95Utils_95cmp(prevMatch.o, match.o) > 0) {
            var $temp$remaining = rest,
                $temp$_v0 = _AX__36author_36project_36Markdown_36InlineParser_36addChild_95raw(prevMatch, match),
                $temp$matchesTail = matchesTail;

            remaining = $temp$remaining;
            _v0 = $temp$_v0;
            matchesTail = $temp$matchesTail;
            continue organizeMatchesHelp;
          } else {
            var $temp$remaining = rest,
                $temp$_v0 = prevMatch,
                $temp$matchesTail = matchesTail;
            remaining = $temp$remaining;
            _v0 = $temp$_v0;
            matchesTail = $temp$matchesTail;
            continue organizeMatchesHelp;
          }
        }
      }
    }
  };

  var _a6__36author_36project_36Markdown_36Entity_36isBadEndUnicode = function (_int) {
    var remain_ = _4C__95Basics_95modBy_95raw(16, _int);

    var remain = _4C__95Basics_95modBy_95raw(131070, _int);

    return _int >= 131070 && (0 <= remain && remain <= 15 || 65536 <= remain && remain <= 65551) && (remain_ === 14 || remain_ === 15);
  };

  var _Cu__36author_36project_36Markdown_36Entity_36replaceDecimal = function (match) {
    var _v0 = match.be;

    if (_v0.b && !_v0.a.$) {
      var first = _v0.a.a;

      var _v1 = _YT__36elm_36core_36String_36toInt(first);

      if (!_v1.$) {
        var v = _v1.a;
        return _YR__36author_36project_36Markdown_36Entity_36validUnicode(v);
      } else {
        return match.aG;
      }
    } else {
      return match.aG;
    }
  };

  var _Cv__36author_36project_36Markdown_36Entity_36replaceEntity = function (match) {
    var _v0 = match.be;

    if (_v0.b && !_v0.a.$) {
      var first = _v0.a.a;

      var _v1 = _6A__36elm_36core_36Dict_36get_95raw(first, _DM__36author_36project_36Markdown_36Entity_36entities);

      if (!_v1.$) {
        var code = _v1.a;
        return _YV__36elm_36core_36String_36fromChar(_YW__36elm_36core_36Char_36fromCode(code));
      } else {
        return match.aG;
      }
    } else {
      return match.aG;
    }
  };

  var _Cr_ = function (regexMatch) {
    var _v0 = regexMatch.be;

    if (_v0.b && !_v0.a.$ && _v0.b.b && !_v0.b.a.$) {
      var backslashes = _v0.a.a;
      var _v1 = _v0.b;
      var escapedStr = _v1.a.a;
      return _82__95Utils_95ap(_YQ__36elm_36core_36String_36repeat_95raw(_33__36elm_36core_36String_36length(backslashes) / 2 | 0, "\\"), escapedStr);
    } else {
      return regexMatch.aG;
    }
  };

  var _YS__36author_36project_36Markdown_36Entity_36hexToInt = function (string) {
    var folder_raw = (hexDigit, _int) => _int * 16 + _4C__95Basics_95modBy_95raw(39, _a7__36elm_36core_36Char_36toCode(hexDigit)) - 9,
        folder = _3A_F2(folder_raw);

    return _Xl__95String_95foldl_95raw(folder, 0, _a9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a1(string));
  };

  var _Ct__36author_36project_36Markdown_36Entity_36replaceHexadecimal = function (match) {
    var _v0 = match.be;

    if (_v0.b && !_v0.a.$) {
      var first = _v0.a.a;
      return _YR__36author_36project_36Markdown_36Entity_36validUnicode(_YS__36author_36project_36Markdown_36Entity_36hexToInt(first));
    } else {
      return match.aG;
    }
  };

  var _AT__36author_36project_36Markdown_36Helpers_36formatStr = function (str) {
    var withEscapes = _BM__36author_36project_36Markdown_36Helpers_36replaceEscapable(str);

    return _BN__36author_36project_36Markdown_36Helpers_36containsAmpersand(withEscapes) ? _BO__36author_36project_36Markdown_36Entity_36replaceHexadecimals(_BP__36author_36project_36Markdown_36Entity_36replaceDecimals(_BQ__36author_36project_36Markdown_36Entity_36replaceEntities(withEscapes))) : withEscapes;
  };

  var _8R__36author_36project_36Markdown_36InlineParser_36parseTextMatch_95raw = function (rawText, _v2, parsedMatches) {
    var matchModel = _v2;
    var updtMatch = {
      o: matchModel.o,
      A: _7X__36author_36project_36Markdown_36InlineParser_36parseTextMatches_95raw(matchModel.t, _d_out, matchModel.A),
      s: matchModel.s,
      t: matchModel.t,
      I: matchModel.I,
      z: matchModel.z,
      u: matchModel.u
    };

    if (!parsedMatches.b) {
      var finalStr = _AV__36elm_36core_36String_36dropLeft_95raw(matchModel.o, rawText);

      return _8O__36elm_36core_36String_36isEmpty(finalStr) ? {
        $: 1,
        a: updtMatch,
        b: _d_out
      } : {
        $: 1,
        a: updtMatch,
        b: {
          $: 1,
          a: _8P__36author_36project_36Markdown_36InlineParser_36normalMatch(finalStr),
          b: _d_out
        }
      };
    } else {
      var matchHead = parsedMatches.a;
      var _v4 = matchHead.u;

      if (!_v4.$) {
        return _1I__95List_95Cons(updtMatch, parsedMatches);
      } else {
        return _2c__95Utils_95eq(matchModel.o, matchHead.s) ? _1I__95List_95Cons(updtMatch, parsedMatches) : _46__95Utils_95cmp(matchModel.o, matchHead.s) < 0 ? _1I__95List_95Cons(updtMatch, _1I__95List_95Cons(_8P__36author_36project_36Markdown_36InlineParser_36normalMatch(_AU__95String_95slice_95raw(matchModel.o, matchHead.s, rawText)), parsedMatches)) : parsedMatches;
      }
    }
  };

  var _7X__36author_36project_36Markdown_36InlineParser_36parseTextMatches_95raw = function (rawText, parsedMatches, matches) {
    parseTextMatches: while (true) {
      if (!matches.b) {
        if (!parsedMatches.b) {
          return _8O__36elm_36core_36String_36isEmpty(rawText) ? _d_out : {
            $: 1,
            a: _8P__36author_36project_36Markdown_36InlineParser_36normalMatch(rawText),
            b: _d_out
          };
        } else {
          var matchModel = parsedMatches.a;
          return matchModel.s > 0 ? _1I__95List_95Cons(_8P__36author_36project_36Markdown_36InlineParser_36normalMatch(_8Q__36elm_36core_36String_36left_95raw(matchModel.s, rawText)), parsedMatches) : parsedMatches;
        }
      } else {
        var match = matches.a;
        var matchesTail = matches.b;

        var $temp$rawText = rawText,
            $temp$parsedMatches = _8R__36author_36project_36Markdown_36InlineParser_36parseTextMatch_95raw(rawText, match, parsedMatches),
            $temp$matches = matchesTail;

        rawText = $temp$rawText;
        parsedMatches = $temp$parsedMatches;
        matches = $temp$matches;
        continue parseTextMatches;
      }
    }
  };

  var _Bv__36elm_36core_36List_36maybeCons_95raw = function (f, mx, xs) {
    var _v0 = f(mx);

    if (!_v0.$) {
      var x = _v0.a;
      return _1I__95List_95Cons(x, xs);
    } else {
      return xs;
    }
  };

  var _AF__36author_36project_36Markdown_36InlineParser_36regMatchToAngleBracketLToken = function (regMatch) {
    var _v0 = regMatch.be;

    if (_v0.b && _v0.b.b && !_v0.b.a.$) {
      var maybeBackslashes = _v0.a;

      var backslashesLength = _5f__36elm_36core_36Maybe_36withDefault_95raw(0, _BD__36elm_36core_36Maybe_36map_95raw(_33__36elm_36core_36String_36length, maybeBackslashes));

      return _BH__36author_36project_36Markdown_36Helpers_36isEven(backslashesLength) ? _5D__36elm_36core_36Maybe_36Just({
        c: regMatch.c + backslashesLength,
        i: 1,
        n: _AZ__36author_36project_36Markdown_36InlineParser_36AngleBracketOpen
      }) : _4j__36elm_36core_36Maybe_36Nothing;
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _AD__36author_36project_36Markdown_36InlineParser_36regMatchToAngleBracketRToken = function (regMatch) {
    var _v0 = regMatch.be;

    if (_v0.b && _v0.b.b && !_v0.b.a.$) {
      var maybeBackslashes = _v0.a;

      var backslashesLength = _5f__36elm_36core_36Maybe_36withDefault_95raw(0, _BD__36elm_36core_36Maybe_36map_95raw(_33__36elm_36core_36String_36length, maybeBackslashes));

      return _5D__36elm_36core_36Maybe_36Just({
        c: regMatch.c + backslashesLength,
        i: 1,
        n: _BH__36author_36project_36Markdown_36Helpers_36isEven(backslashesLength) ? _BI__36author_36project_36Markdown_36InlineParser_36AngleBracketClose(1) : _BI__36author_36project_36Markdown_36InlineParser_36AngleBracketClose(0)
      });
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _aD__36author_36project_36Markdown_36InlineParser_36isPunctuation = function (c) {
    switch (c) {
      case "!":
        return true;

      case "\"":
        return true;

      case "#":
        return true;

      case "%":
        return true;

      case "&":
        return true;

      case "'":
        return true;

      case "(":
        return true;

      case ")":
        return true;

      case "*":
        return true;

      case ",":
        return true;

      case "-":
        return true;

      case ".":
        return true;

      case "/":
        return true;

      case ":":
        return true;

      case ";":
        return true;

      case "?":
        return true;

      case "@":
        return true;

      case "[":
        return true;

      case "]":
        return true;

      case "_":
        return true;

      case "{":
        return true;

      case "}":
        return true;

      default:
        return false;
    }
  };

  var _aC__36author_36project_36Markdown_36InlineParser_36isWhitespace = function (c) {
    switch (c) {
      case " ":
        return true;

      case "\f":
        return true;

      case "\n":
        return true;

      case "\r":
        return true;

      case "\t":
        return true;

      case "\v":
        return true;

      case "\u00A0":
        return true;

      case "\u2028":
        return true;

      case "\u2029":
        return true;

      default:
        return false;
    }
  };

  var _C1__36author_36project_36Markdown_36InlineParser_36getFringeRank = function (mstring) {
    if (!mstring.$) {
      var string = mstring.a;
      return _8O__36elm_36core_36String_36isEmpty(string) || _Xl__95String_95foldl_95raw(_Xm__36author_36project_36Markdown_36InlineParser_36containSpace_95a0, false, string) ? 0 : _Xl__95String_95foldl_95raw(_Xo__36author_36project_36Markdown_36InlineParser_36containPunctuation_95a0, false, string) ? 1 : 2;
    } else {
      return 0;
    }
  };

  var _Af__36author_36project_36Markdown_36InlineParser_36regMatchToEmphasisToken_95raw = function (_char, rawText, regMatch) {
    var _v0 = regMatch.be;

    if (_v0.b && _v0.b.b && _v0.b.b.b && !_v0.b.b.a.$ && _v0.b.b.b.b) {
      var maybeBackslashes = _v0.a;
      var _v1 = _v0.b;
      var maybeLeftFringe = _v1.a;
      var _v2 = _v1.b;
      var delimiter = _v2.a.a;
      var _v3 = _v2.b;
      var maybeRightFringe = _v3.a;

      var rFringeRank = _C1__36author_36project_36Markdown_36InlineParser_36getFringeRank(maybeRightFringe);

      var leftFringeLength = function () {
        if (!maybeLeftFringe.$) {
          var left = maybeLeftFringe.a;
          return _33__36elm_36core_36String_36length(left);
        } else {
          return 0;
        }
      }();

      var mLeftFringe = !!regMatch.c && !leftFringeLength ? _5D__36elm_36core_36Maybe_36Just(_AU__95String_95slice_95raw(regMatch.c - 1, regMatch.c, rawText)) : maybeLeftFringe;

      var backslashesLength = function () {
        if (!maybeBackslashes.$) {
          var backslashes = maybeBackslashes.a;
          return _33__36elm_36core_36String_36length(backslashes);
        } else {
          return 0;
        }
      }();

      var isEscaped = !_BH__36author_36project_36Markdown_36Helpers_36isEven(backslashesLength) && !leftFringeLength || function () {
        if (!mLeftFringe.$ && mLeftFringe.a === "\\") {
          return true;
        } else {
          return false;
        }
      }();

      var delimiterLength = isEscaped ? _33__36elm_36core_36String_36length(delimiter) - 1 : _33__36elm_36core_36String_36length(delimiter);
      var lFringeRank = isEscaped ? 1 : _C1__36author_36project_36Markdown_36InlineParser_36getFringeRank(mLeftFringe);

      if (delimiterLength <= 0 || _char === "_" && lFringeRank === 2 && rFringeRank === 2) {
        return _4j__36elm_36core_36Maybe_36Nothing;
      } else {
        var index = regMatch.c + backslashesLength + leftFringeLength + (isEscaped ? 1 : 0);
        return _5D__36elm_36core_36Maybe_36Just({
          c: index,
          i: delimiterLength,
          n: _C6__36author_36project_36Markdown_36InlineParser_36EmphasisToken_95raw(_char, {
            aU: lFringeRank,
            a_: rFringeRank
          })
        });
      }
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _AM__36author_36project_36Markdown_36InlineParser_36regMatchToCodeToken = function (regMatch) {
    var _v0 = regMatch.be;

    if (_v0.b && _v0.b.b && !_v0.b.a.$) {
      var maybeBackslashes = _v0.a;
      var _v1 = _v0.b;
      var backtick = _v1.a.a;

      var backslashesLength = _5f__36elm_36core_36Maybe_36withDefault_95raw(0, _BD__36elm_36core_36Maybe_36map_95raw(_33__36elm_36core_36String_36length, maybeBackslashes));

      return _5D__36elm_36core_36Maybe_36Just({
        c: regMatch.c + backslashesLength,
        i: _33__36elm_36core_36String_36length(backtick),
        n: _BH__36author_36project_36Markdown_36Helpers_36isEven(backslashesLength) ? _BL__36author_36project_36Markdown_36InlineParser_36CodeToken(1) : _BL__36author_36project_36Markdown_36InlineParser_36CodeToken(0)
      });
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _AH__36author_36project_36Markdown_36InlineParser_36regMatchToHardBreakToken = function (regMatch) {
    var _v0 = regMatch.be;

    _v0$2: while (true) {
      if (_v0.b) {
        if (!_v0.a.$) {
          var backslashes = _v0.a.a;

          var backslashesLength = _33__36elm_36core_36String_36length(backslashes);

          return !_BH__36author_36project_36Markdown_36Helpers_36isEven(backslashesLength) ? _5D__36elm_36core_36Maybe_36Just({
            c: regMatch.c + backslashesLength - 1,
            i: 2,
            n: _Ab__36author_36project_36Markdown_36InlineParser_36HardLineBreakToken
          }) : _4j__36elm_36core_36Maybe_36Nothing;
        } else {
          if (_v0.b.b && !_v0.b.a.$) {
            return _5D__36elm_36core_36Maybe_36Just({
              c: regMatch.c,
              i: _33__36elm_36core_36String_36length(regMatch.aG),
              n: _Ab__36author_36project_36Markdown_36InlineParser_36HardLineBreakToken
            });
          } else {
            break _v0$2;
          }
        }
      } else {
        break _v0$2;
      }
    }

    return _4j__36elm_36core_36Maybe_36Nothing;
  };

  var _AG__36author_36project_36Markdown_36InlineParser_36regMatchToSoftHardBreakToken = function (regMatch) {
    var _v0 = regMatch.be;

    _v0$2: while (true) {
      if (_v0.b) {
        if (!_v0.a.$) {
          var backslashes = _v0.a.a;

          var backslashesLength = _33__36elm_36core_36String_36length(backslashes);

          return _BH__36author_36project_36Markdown_36Helpers_36isEven(backslashesLength) ? _5D__36elm_36core_36Maybe_36Just({
            c: regMatch.c + backslashesLength,
            i: 1,
            n: _Ab__36author_36project_36Markdown_36InlineParser_36HardLineBreakToken
          }) : _5D__36elm_36core_36Maybe_36Just({
            c: regMatch.c + backslashesLength - 1,
            i: 2,
            n: _Ab__36author_36project_36Markdown_36InlineParser_36HardLineBreakToken
          });
        } else {
          if (_v0.b.b) {
            return _5D__36elm_36core_36Maybe_36Just({
              c: regMatch.c,
              i: _33__36elm_36core_36String_36length(regMatch.aG),
              n: _Ab__36author_36project_36Markdown_36InlineParser_36HardLineBreakToken
            });
          } else {
            break _v0$2;
          }
        }
      } else {
        break _v0$2;
      }
    }

    return _4j__36elm_36core_36Maybe_36Nothing;
  };

  var _AI__36author_36project_36Markdown_36InlineParser_36regMatchToLinkImageCloseToken = function (regMatch) {
    var _v0 = regMatch.be;

    if (_v0.b && _v0.b.b && !_v0.b.a.$) {
      var maybeBackslashes = _v0.a;

      var backslashesLength = _5f__36elm_36core_36Maybe_36withDefault_95raw(0, _BD__36elm_36core_36Maybe_36map_95raw(_33__36elm_36core_36String_36length, maybeBackslashes));

      return _BH__36author_36project_36Markdown_36Helpers_36isEven(backslashesLength) ? _5D__36elm_36core_36Maybe_36Just({
        c: regMatch.c + backslashesLength,
        i: 1,
        n: _Ad__36author_36project_36Markdown_36InlineParser_36SquareBracketClose
      }) : _4j__36elm_36core_36Maybe_36Nothing;
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _AJ__36author_36project_36Markdown_36InlineParser_36regMatchToLinkImageOpenToken = function (regMatch) {
    var _v0 = regMatch.be;

    if (_v0.b && _v0.b.b && _v0.b.b.b && !_v0.b.b.a.$) {
      var maybeBackslashes = _v0.a;
      var _v1 = _v0.b;
      var maybeImageOpen = _v1.a;

      var backslashesLength = _5f__36elm_36core_36Maybe_36withDefault_95raw(0, _BD__36elm_36core_36Maybe_36map_95raw(_33__36elm_36core_36String_36length, maybeBackslashes));

      var isEscaped = !_BH__36author_36project_36Markdown_36Helpers_36isEven(backslashesLength);
      var index = isEscaped ? regMatch.c + backslashesLength + 1 : regMatch.c + backslashesLength;

      if (isEscaped) {
        if (!maybeImageOpen.$) {
          return _5D__36elm_36core_36Maybe_36Just({
            c: index,
            i: 1,
            n: _BK__36author_36project_36Markdown_36InlineParser_36LinkOpenToken(0)
          });
        } else {
          return _4j__36elm_36core_36Maybe_36Nothing;
        }
      } else {
        if (!maybeImageOpen.$) {
          return _5D__36elm_36core_36Maybe_36Just({
            c: index,
            i: 2,
            n: _Ag__36author_36project_36Markdown_36InlineParser_36ImageOpenToken
          });
        } else {
          return _5D__36elm_36core_36Maybe_36Just({
            c: index,
            i: 1,
            n: _BK__36author_36project_36Markdown_36InlineParser_36LinkOpenToken(0)
          });
        }
      }
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw = function (left, right) {
    if (left.b) {
      var lfirst = left.a;
      var lrest = left.b;

      if (right.b) {
        var rfirst = right.a;
        var rrest = right.b;
        return _46__95Utils_95cmp(lfirst.c, rfirst.c) < 0 ? _1I__95List_95Cons(lfirst, _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(lrest, right)) : _1I__95List_95Cons(rfirst, _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(left, rrest));
      } else {
        return left;
      }
    } else {
      return right;
    }
  };

  var _CE__36author_36project_36Markdown_36InlineParser_36autolinkToMatch = function (_v0) {
    var match = _v0;
    return _Xr__95Regex_95contains_95raw(_Cy__36author_36project_36Markdown_36InlineParser_36urlRegex, match.t) ? _1q__36elm_36core_36Result_36Ok(_C8_(match, {
      u: _Xs__36author_36project_36Markdown_36InlineParser_36AutolinkType(_1B__95Utils_95Tuple2(match.t, _4r__36elm_36core_36Basics_36composeR_95raw(_Xt__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a0, _Xv__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a1, match.t)))
    })) : _1n__36elm_36core_36Result_36Err(match);
  };

  var _cE__36author_36project_36Markdown_36InlineParser_36refRegexToMatch_95raw = function (matchModel, references, maybeRegexMatch) {
    var refLabel = (str => _8O__36elm_36core_36String_36isEmpty(str) ? matchModel.t : str)(_5f__36elm_36core_36Maybe_36withDefault_95raw(matchModel.t, _5f__36elm_36core_36Maybe_36withDefault_95raw(_4j__36elm_36core_36Maybe_36Nothing, _BA__36elm_36core_36Maybe_36andThen_95raw(_q_A2(_55__36elm_36core_36Basics_36composeR, $ => $.be, _Cl__36elm_36core_36List_36head), maybeRegexMatch))));

    var _v0 = _6A__36elm_36core_36Dict_36get_95raw(_4r__36elm_36core_36Basics_36composeR_95raw(_C9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a0, _a9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a1, refLabel), references);

    if (_v0.$ === 1) {
      return _4j__36elm_36core_36Maybe_36Nothing;
    } else {
      var _v1 = _v0.a;
      var rawUrl = _v1.a;
      var maybeTitle = _v1.b;

      var type_ = function () {
        var _v3 = matchModel.u;

        if (_v3.$ === 5) {
          return _Yq__36author_36project_36Markdown_36InlineParser_36ImageType(_c5__36author_36project_36Markdown_36InlineParser_36prepareUrlAndTitle_95raw(rawUrl, maybeTitle));
        } else {
          return _Yp__36author_36project_36Markdown_36InlineParser_36LinkType(_c5__36author_36project_36Markdown_36InlineParser_36prepareUrlAndTitle_95raw(rawUrl, maybeTitle));
        }
      }();

      var regexMatchLength = function () {
        if (!maybeRegexMatch.$) {
          var match = maybeRegexMatch.a.aG;
          return _33__36elm_36core_36String_36length(match);
        } else {
          return 0;
        }
      }();

      return _5D__36elm_36core_36Maybe_36Just(_C8_(matchModel, {
        o: matchModel.o + regexMatchLength,
        u: type_
      }));
    }
  };

  var _aP__36author_36project_36Markdown_36InlineParser_36checkForInlineReferences_95raw = function (remainText, _v0, references) {
    var tempMatch = _v0;

    var matches = _AE__95Regex_95findAtMost_95raw(1, _bR__36author_36project_36Markdown_36InlineParser_36refLabelRegex, remainText);

    return _cE__36author_36project_36Markdown_36InlineParser_36refRegexToMatch_95raw(tempMatch, references, _Cl__36elm_36core_36List_36head(matches));
  };

  var _c4__36author_36project_36Markdown_36Helpers_36returnFirstJust = function (maybes) {
    var process_raw = function (a, maybeFound) {
      if (!maybeFound.$) {
        var found = maybeFound.a;
        return _5D__36elm_36core_36Maybe_36Just(found);
      } else {
        return a;
      }
    },
        process = _3A_F2(process_raw);

    return _3i__36elm_36core_36List_36foldl_95raw(process, _4j__36elm_36core_36Maybe_36Nothing, maybes);
  };

  var _aO__36author_36project_36Markdown_36InlineParser_36inlineLinkTypeOrImageTypeRegexToMatch_95raw = function (matchModel, regexMatch) {
    var _v0 = regexMatch.be;

    if (_v0.b && _v0.b.b && _v0.b.b.b && _v0.b.b.b.b && _v0.b.b.b.b.b) {
      var maybeRawUrlAngleBrackets = _v0.a;
      var _v1 = _v0.b;
      var maybeRawUrlWithoutBrackets = _v1.a;
      var _v2 = _v1.b;
      var maybeTitleSingleQuotes = _v2.a;
      var _v3 = _v2.b;
      var maybeTitleDoubleQuotes = _v3.a;
      var _v4 = _v3.b;
      var maybeTitleParenthesis = _v4.a;

      var maybeTitle = _c4__36author_36project_36Markdown_36Helpers_36returnFirstJust({
        $: 1,
        a: maybeTitleSingleQuotes,
        b: {
          $: 1,
          a: maybeTitleDoubleQuotes,
          b: {
            $: 1,
            a: maybeTitleParenthesis,
            b: _d_out
          }
        }
      });

      var toMatch = rawUrl => _C8_(matchModel, {
        o: matchModel.o + _33__36elm_36core_36String_36length(regexMatch.aG),
        u: function () {
          var _v5 = matchModel.u;

          if (_v5.$ === 5) {
            return _Yq__36author_36project_36Markdown_36InlineParser_36ImageType;
          } else {
            return _Yp__36author_36project_36Markdown_36InlineParser_36LinkType;
          }
        }()(_c5__36author_36project_36Markdown_36InlineParser_36prepareUrlAndTitle_95raw(rawUrl, maybeTitle))
      });

      var maybeRawUrl = _c4__36author_36project_36Markdown_36Helpers_36returnFirstJust({
        $: 1,
        a: maybeRawUrlAngleBrackets,
        b: {
          $: 1,
          a: maybeRawUrlWithoutBrackets,
          b: _d_out
        }
      });

      return _5D__36elm_36core_36Maybe_36Just(toMatch(_5f__36elm_36core_36Maybe_36withDefault_95raw("", maybeRawUrl)));
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _Yr__36author_36project_36Markdown_36InlineParser_36checkForInlineLinkTypeOrImageType_95raw = function (remainText, _v0, refs) {
    var tempMatch = _v0;

    var _v1 = _AE__95Regex_95findAtMost_95raw(1, _Zf__36author_36project_36Markdown_36InlineParser_36inlineLinkTypeOrImageTypeRegex, remainText);

    if (_v1.b) {
      var first = _v1.a;

      var _v2 = _aO__36author_36project_36Markdown_36InlineParser_36inlineLinkTypeOrImageTypeRegexToMatch_95raw(tempMatch, first);

      if (!_v2.$) {
        var match = _v2.a;
        return _5D__36elm_36core_36Maybe_36Just(match);
      } else {
        return _aP__36author_36project_36Markdown_36InlineParser_36checkForInlineReferences_95raw(remainText, tempMatch, refs);
      }
    } else {
      return _aP__36author_36project_36Markdown_36InlineParser_36checkForInlineReferences_95raw(remainText, tempMatch, refs);
    }
  };

  var _aS__36elm_36core_36List_36isEmpty = function (xs) {
    if (!xs.b) {
      return true;
    } else {
      return false;
    }
  };

  var _Ys__36author_36project_36Markdown_36InlineParser_36checkParsedAheadOverlapping_95raw = function (_v0, remainMatches) {
    var match = _v0;

    var overlappingMatches = _aQ__36elm_36core_36List_36filter(function (_v1) {
      var testMatch = _v1;
      return _46__95Utils_95cmp(match.o, testMatch.s) > 0 && _46__95Utils_95cmp(match.o, testMatch.o) < 0;
    });

    return _aS__36elm_36core_36List_36isEmpty(remainMatches) || _aS__36elm_36core_36List_36isEmpty(overlappingMatches(remainMatches)) ? _5D__36elm_36core_36Maybe_36Just(_1I__95List_95Cons(match, remainMatches)) : _4j__36elm_36core_36Maybe_36Nothing;
  };

  var _CD__36author_36project_36Markdown_36InlineParser_36emailAutolinkTypeToMatch = function (_v0) {
    var match = _v0;
    return _Xr__95Regex_95contains_95raw(_Cx__36author_36project_36Markdown_36InlineParser_36emailRegex, match.t) ? _1q__36elm_36core_36Result_36Ok(_C8_(match, {
      u: _Xs__36author_36project_36Markdown_36InlineParser_36AutolinkType(_1B__95Utils_95Tuple2(match.t, "mailto:" + _4r__36elm_36core_36Basics_36composeR_95raw(_Xt__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a0, _Xv__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a1, match.t)))
    })) : _1n__36elm_36core_36Result_36Err(match);
  };

  var _C7__36author_36project_36Markdown_36InlineParser_36findTokenHelp_95raw = function (innerTokens, isToken, tokens) {
    findTokenHelp: while (true) {
      if (!tokens.b) {
        return _4j__36elm_36core_36Maybe_36Nothing;
      } else {
        var nextToken = tokens.a;
        var remainingTokens = tokens.b;

        if (isToken(nextToken)) {
          return _5D__36elm_36core_36Maybe_36Just(_2u__95Utils_95Tuple3(nextToken, _2Y__36elm_36core_36List_36reverse(innerTokens), remainingTokens));
        } else {
          var $temp$innerTokens = _1I__95List_95Cons(nextToken, innerTokens),
              $temp$isToken = isToken,
              $temp$tokens = remainingTokens;

          innerTokens = $temp$innerTokens;
          isToken = $temp$isToken;
          tokens = $temp$tokens;
          continue findTokenHelp;
        }
      }
    }
  };

  var _2x__36elm_36parser_36Parser_36Advanced_36bagToList_95raw = function (bag, list) {
    bagToList: while (true) {
      switch (bag.$) {
        case 0:
          return list;

        case 1:
          var bag1 = bag.a;
          var x = bag.b;

          var $temp$bag = bag1,
              $temp$list = _1I__95List_95Cons(x, list);

          bag = $temp$bag;
          list = $temp$list;
          continue bagToList;

        default:
          var bag1 = bag.a;
          var bag2 = bag.b;

          var $temp$bag = bag1,
              $temp$list = _2x__36elm_36parser_36Parser_36Advanced_36bagToList_95raw(bag2, list);

          bag = $temp$bag;
          list = $temp$list;
          continue bagToList;
      }
    }
  };

  var _1j__36elm_36parser_36Parser_36Advanced_36run_95raw = function (_v0, src) {
    var parse = _v0;

    var _v1 = parse({
      bl: 1,
      l: _d_out,
      p: 1,
      h: 0,
      cE: 1,
      b: src
    });

    if (!_v1.$) {
      var value = _v1.b;
      return _1q__36elm_36core_36Result_36Ok(value);
    } else {
      var bag = _v1.b;
      return _1n__36elm_36core_36Result_36Err(_2x__36elm_36parser_36Parser_36Advanced_36bagToList_95raw(bag, _d_out));
    }
  };

  var _CF__36author_36project_36Markdown_36InlineParser_36htmlToToken_95raw = function (rawText, _v0) {
    var match = _v0;

    var consumedCharacters = _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_DD__36elm_36parser_36Parser_36Advanced_36succeed(_3J_F3((startOffset, htmlTag, endOffset) => ({
      bv: htmlTag,
      i: endOffset - startOffset
    }))), _Xx__36elm_36parser_36Parser_36Advanced_36getOffset), _B3_parseA), _Xx__36elm_36parser_36Parser_36Advanced_36getOffset);

    var parsed = _1j__36elm_36parser_36Parser_36Advanced_36run_95raw(consumedCharacters, _AV__36elm_36core_36String_36dropLeft_95raw(match.s, rawText));

    if (!parsed.$) {
      var htmlTag = parsed.a.bv;
      var length = parsed.a.i;

      var htmlToken = _Xy__36author_36project_36Markdown_36InlineParser_36HtmlToken_95raw(1, htmlTag);

      return _5D__36elm_36core_36Maybe_36Just({
        c: match.s,
        i: length,
        n: htmlToken
      });
    } else {
      return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _CB__36author_36project_36Markdown_36Helpers_36ifError_95raw = function (_function, result) {
    if (!result.$) {
      return result;
    } else {
      var err = result.a;
      return _function(err);
    }
  };

  var _BT__36author_36project_36Markdown_36InlineParser_36isCodeTokenPair_95raw = function (closeToken, openToken) {
    var _v0 = openToken.n;

    if (!_v0.$) {
      if (!_v0.a) {
        return _2c__95Utils_95eq(openToken.i - 1, closeToken.i);
      } else {
        return _2c__95Utils_95eq(openToken.i, closeToken.i);
      }
    } else {
      return false;
    }
  };

  var _D1__36author_36project_36Markdown_36InlineParser_36isLinkTypeOrImageOpenToken = function (token) {
    var _v0 = token.n;

    switch (_v0.$) {
      case 1:
        return true;

      case 2:
        return true;

      default:
        return false;
    }
  };

  var _ZY__36author_36project_36Markdown_36InlineParser_36isOpenEmphasisToken_95raw = function (closeToken, openToken) {
    var _v0 = openToken.n;

    if (_v0.$ === 7) {
      var openChar = _v0.a;
      var open = _v0.b;
      var _v1 = closeToken.n;

      if (_v1.$ === 7) {
        var closeChar = _v1.a;
        var close = _v1.b;
        return _2c__95Utils_95eq(openChar, closeChar) ? _2c__95Utils_95eq(open.aU, open.a_) || _2c__95Utils_95eq(close.aU, close.a_) ? !!_4C__95Basics_95modBy_95raw(3, closeToken.i + openToken.i) : true : false;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  var _YY__36author_36project_36Markdown_36InlineParser_36lineBreakTTM_95raw = function (remaining, tokens, matches, refs, rawText) {
    lineBreakTTM: while (true) {
      if (!remaining.b) {
        return matches;
      } else {
        var token = remaining.a;
        var tokensTail = remaining.b;
        var _v1 = token.n;

        if (_v1.$ === 9) {
          var $temp$remaining = tokensTail,
              $temp$tokens = tokens,
              $temp$matches = _1I__95List_95Cons(_Bw__36author_36project_36Markdown_36InlineParser_36tokenToMatch_95raw(token, _ZN__36author_36project_36Markdown_36InlineParser_36HardLineBreakType), matches),
              $temp$refs = refs,
              $temp$rawText = rawText;

          remaining = $temp$remaining;
          tokens = $temp$tokens;
          matches = $temp$matches;
          refs = $temp$refs;
          rawText = $temp$rawText;
          continue lineBreakTTM;
        } else {
          var $temp$remaining = tokensTail,
              $temp$tokens = _1I__95List_95Cons(token, tokens),
              $temp$matches = matches,
              $temp$refs = refs,
              $temp$rawText = rawText;

          remaining = $temp$remaining;
          tokens = $temp$tokens;
          matches = $temp$matches;
          refs = $temp$refs;
          rawText = $temp$rawText;
          continue lineBreakTTM;
        }
      }
    }
  };

  var _Yt__36author_36project_36Markdown_36InlineParser_36removeParsedAheadTokens_95raw = function (_v0, tokensTail) {
    var match = _v0;
    return _1r__36elm_36core_36List_36filter_95raw(token => _46__95Utils_95cmp(token.c, match.o) > -1, tokensTail);
  };

  var _Am__36author_36project_36Markdown_36InlineParser_36angleBracketsToMatch_95raw = function (closeToken, escaped, matches, references, rawText, _v39) {
    var openToken = _v39.a;
    var remainTokens = _v39.c;

    var result = _CB__36author_36project_36Markdown_36Helpers_36ifError_95raw(_CD__36author_36project_36Markdown_36InlineParser_36emailAutolinkTypeToMatch, _CE__36author_36project_36Markdown_36InlineParser_36autolinkToMatch(_C0__36author_36project_36Markdown_36InlineParser_36tokenPairToMatch_95raw(references, rawText, s => s, _BU__36author_36project_36Markdown_36InlineParser_36CodeType, openToken, closeToken, _d_out)));

    if (result.$ === 1) {
      var tempMatch = result.a;

      if (escaped === 1) {
        var _v42 = _CF__36author_36project_36Markdown_36InlineParser_36htmlToToken_95raw(rawText, tempMatch);

        if (!_v42.$) {
          var newToken = _v42.a;
          return _5D__36elm_36core_36Maybe_36Just(_1B__95Utils_95Tuple2(_1I__95List_95Cons(newToken, remainTokens), matches));
        } else {
          return _4j__36elm_36core_36Maybe_36Nothing;
        }
      } else {
        return _4j__36elm_36core_36Maybe_36Nothing;
      }
    } else {
      var newMatch = result.a;
      return _5D__36elm_36core_36Maybe_36Just(_1B__95Utils_95Tuple2(remainTokens, _1I__95List_95Cons(newMatch, matches)));
    }
  };

  var _8U__36author_36project_36Markdown_36InlineParser_36codeAutolinkTypeHtmlTagTTM_95raw = function (remaining, tokens, matches, references, rawText) {
    codeAutolinkTypeHtmlTagTTM: while (true) {
      if (!remaining.b) {
        return _AY__36author_36project_36Markdown_36InlineParser_36htmlElementTTM_95raw(_2Y__36elm_36core_36List_36reverse(tokens), _d_out, matches, references, rawText);
      } else {
        var token = remaining.a;
        var tokensTail = remaining.b;
        var _v31 = token.n;

        switch (_v31.$) {
          case 0:
            var isEscaped = _v31.a;

            var _v32 = _Ai__36author_36project_36Markdown_36InlineParser_36findToken_95raw(_Aj__36author_36project_36Markdown_36InlineParser_36isCodeTokenPair(token), tokens);

            if (!_v32.$) {
              var code = _v32.a;

              var _v33 = _Al__36author_36project_36Markdown_36InlineParser_36codeToMatch_95raw(token, matches, references, rawText, code);

              var newTokens = _v33.a;
              var newMatches = _v33.b;
              var $temp$remaining = tokensTail,
                  $temp$tokens = newTokens,
                  $temp$matches = newMatches,
                  $temp$references = references,
                  $temp$rawText = rawText;
              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue codeAutolinkTypeHtmlTagTTM;
            } else {
              var $temp$remaining = tokensTail,
                  $temp$tokens = _1I__95List_95Cons(token, tokens),
                  $temp$matches = matches,
                  $temp$references = references,
                  $temp$rawText = rawText;

              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue codeAutolinkTypeHtmlTagTTM;
            }

          case 5:
            var isEscaped = _v31.a;

            var isAngleBracketOpen = function (_v38) {
              var meaning = _v38.n;

              if (meaning.$ === 4) {
                return true;
              } else {
                return false;
              }
            };

            var _v34 = _Ai__36author_36project_36Markdown_36InlineParser_36findToken_95raw(isAngleBracketOpen, tokens);

            if (!_v34.$) {
              var found = _v34.a;

              var _v35 = _Am__36author_36project_36Markdown_36InlineParser_36angleBracketsToMatch_95raw(token, isEscaped, matches, references, rawText, found);

              if (!_v35.$) {
                var _v36 = _v35.a;
                var newTokens = _v36.a;
                var newMatches = _v36.b;

                var $temp$remaining = tokensTail,
                    $temp$tokens = _1r__36elm_36core_36List_36filter_95raw(_q_A2(_3F__36elm_36core_36Basics_36composeL, _3H__36elm_36core_36Basics_36not, isAngleBracketOpen), newTokens),
                    $temp$matches = newMatches,
                    $temp$references = references,
                    $temp$rawText = rawText;

                remaining = $temp$remaining;
                tokens = $temp$tokens;
                matches = $temp$matches;
                references = $temp$references;
                rawText = $temp$rawText;
                continue codeAutolinkTypeHtmlTagTTM;
              } else {
                var $temp$remaining = tokensTail,
                    $temp$tokens = _1r__36elm_36core_36List_36filter_95raw(_q_A2(_3F__36elm_36core_36Basics_36composeL, _3H__36elm_36core_36Basics_36not, isAngleBracketOpen), tokens),
                    $temp$matches = matches,
                    $temp$references = references,
                    $temp$rawText = rawText;

                remaining = $temp$remaining;
                tokens = $temp$tokens;
                matches = $temp$matches;
                references = $temp$references;
                rawText = $temp$rawText;
                continue codeAutolinkTypeHtmlTagTTM;
              }
            } else {
              var $temp$remaining = tokensTail,
                  $temp$tokens = _1r__36elm_36core_36List_36filter_95raw(_q_A2(_3F__36elm_36core_36Basics_36composeL, _3H__36elm_36core_36Basics_36not, isAngleBracketOpen), tokens),
                  $temp$matches = matches,
                  $temp$references = references,
                  $temp$rawText = rawText;

              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue codeAutolinkTypeHtmlTagTTM;
            }

          default:
            var $temp$remaining = tokensTail,
                $temp$tokens = _1I__95List_95Cons(token, tokens),
                $temp$matches = matches,
                $temp$references = references,
                $temp$rawText = rawText;

            remaining = $temp$remaining;
            tokens = $temp$tokens;
            matches = $temp$matches;
            references = $temp$references;
            rawText = $temp$rawText;
            continue codeAutolinkTypeHtmlTagTTM;
        }
      }
    }
  };

  var _Al__36author_36project_36Markdown_36InlineParser_36codeToMatch_95raw = function (closeToken, matches, references, rawText, _v27) {
    var openToken = _v27.a;
    var remainTokens = _v27.c;

    var updatedOpenToken = function () {
      var _v28 = openToken.n;

      if (!_v28.$ && !_v28.a) {
        return _C8_(openToken, {
          c: openToken.c + 1,
          i: openToken.i - 1
        });
      } else {
        return openToken;
      }
    }();

    var match = _C0__36author_36project_36Markdown_36InlineParser_36tokenPairToMatch_95raw(references, rawText, _C9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a0, _BU__36author_36project_36Markdown_36InlineParser_36CodeType, updatedOpenToken, closeToken, _d_out);

    return _1B__95Utils_95Tuple2(remainTokens, _1I__95List_95Cons(match, matches));
  };

  var _Cw__36author_36project_36Markdown_36InlineParser_36emphasisTTM_95raw = function (remaining, tokens, matches, references, rawText) {
    emphasisTTM: while (true) {
      if (!remaining.b) {
        return _YY__36author_36project_36Markdown_36InlineParser_36lineBreakTTM_95raw(_2Y__36elm_36core_36List_36reverse(tokens), _d_out, matches, references, rawText);
      } else {
        var token = remaining.a;
        var tokensTail = remaining.b;
        var _v22 = token.n;

        if (_v22.$ === 7) {
          var _char = _v22.a;
          var leftFringeRank = _v22.b.aU;
          var rightFringeRank = _v22.b.a_;

          if (_2c__95Utils_95eq(leftFringeRank, rightFringeRank)) {
            if (!!rightFringeRank && (_char !== "_" || rightFringeRank === 1)) {
              var _v23 = _Ai__36author_36project_36Markdown_36InlineParser_36findToken_95raw(_Yf__36author_36project_36Markdown_36InlineParser_36isOpenEmphasisToken(token), tokens);

              if (!_v23.$) {
                var found = _v23.a;

                var _v24 = _Yh__36author_36project_36Markdown_36InlineParser_36emphasisToMatch_95raw(references, rawText, token, tokensTail, found);

                var newRemaining = _v24.a;
                var match = _v24.b;
                var newTokens = _v24.c;

                var $temp$remaining = newRemaining,
                    $temp$tokens = newTokens,
                    $temp$matches = _1I__95List_95Cons(match, matches),
                    $temp$references = references,
                    $temp$rawText = rawText;

                remaining = $temp$remaining;
                tokens = $temp$tokens;
                matches = $temp$matches;
                references = $temp$references;
                rawText = $temp$rawText;
                continue emphasisTTM;
              } else {
                var $temp$remaining = tokensTail,
                    $temp$tokens = _1I__95List_95Cons(token, tokens),
                    $temp$matches = matches,
                    $temp$references = references,
                    $temp$rawText = rawText;

                remaining = $temp$remaining;
                tokens = $temp$tokens;
                matches = $temp$matches;
                references = $temp$references;
                rawText = $temp$rawText;
                continue emphasisTTM;
              }
            } else {
              var $temp$remaining = tokensTail,
                  $temp$tokens = tokens,
                  $temp$matches = matches,
                  $temp$references = references,
                  $temp$rawText = rawText;
              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue emphasisTTM;
            }
          } else {
            if (_46__95Utils_95cmp(leftFringeRank, rightFringeRank) < 0) {
              var $temp$remaining = tokensTail,
                  $temp$tokens = _1I__95List_95Cons(token, tokens),
                  $temp$matches = matches,
                  $temp$references = references,
                  $temp$rawText = rawText;

              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue emphasisTTM;
            } else {
              var _v25 = _Ai__36author_36project_36Markdown_36InlineParser_36findToken_95raw(_Yf__36author_36project_36Markdown_36InlineParser_36isOpenEmphasisToken(token), tokens);

              if (!_v25.$) {
                var found = _v25.a;

                var _v26 = _Yh__36author_36project_36Markdown_36InlineParser_36emphasisToMatch_95raw(references, rawText, token, tokensTail, found);

                var newRemaining = _v26.a;
                var match = _v26.b;
                var newTokens = _v26.c;

                var $temp$remaining = newRemaining,
                    $temp$tokens = newTokens,
                    $temp$matches = _1I__95List_95Cons(match, matches),
                    $temp$references = references,
                    $temp$rawText = rawText;

                remaining = $temp$remaining;
                tokens = $temp$tokens;
                matches = $temp$matches;
                references = $temp$references;
                rawText = $temp$rawText;
                continue emphasisTTM;
              } else {
                var $temp$remaining = tokensTail,
                    $temp$tokens = tokens,
                    $temp$matches = matches,
                    $temp$references = references,
                    $temp$rawText = rawText;
                remaining = $temp$remaining;
                tokens = $temp$tokens;
                matches = $temp$matches;
                references = $temp$references;
                rawText = $temp$rawText;
                continue emphasisTTM;
              }
            }
          }
        } else {
          var $temp$remaining = tokensTail,
              $temp$tokens = _1I__95List_95Cons(token, tokens),
              $temp$matches = matches,
              $temp$references = references,
              $temp$rawText = rawText;

          remaining = $temp$remaining;
          tokens = $temp$tokens;
          matches = $temp$matches;
          references = $temp$references;
          rawText = $temp$rawText;
          continue emphasisTTM;
        }
      }
    }
  };

  var _Yh__36author_36project_36Markdown_36InlineParser_36emphasisToMatch_95raw = function (references, rawText, closeToken, tokensTail, _v20) {
    var openToken = _v20.a;
    var innerTokens = _v20.b;
    var remainTokens = _v20.c;
    var remainLength = openToken.i - closeToken.i;
    var updt = !remainLength ? {
      aR: closeToken,
      aH: openToken,
      aZ: remainTokens,
      a2: tokensTail
    } : remainLength > 0 ? {
      aR: closeToken,
      aH: _C8_(openToken, {
        c: openToken.c + remainLength,
        i: closeToken.i
      }),
      aZ: _1I__95List_95Cons(_C8_(openToken, {
        i: remainLength
      }), remainTokens),
      a2: tokensTail
    } : {
      aR: _C8_(closeToken, {
        i: openToken.i
      }),
      aH: openToken,
      aZ: remainTokens,
      a2: _1I__95List_95Cons(_C8_(closeToken, {
        c: closeToken.c + openToken.i,
        i: -remainLength
      }), tokensTail)
    };

    var match = _C0__36author_36project_36Markdown_36InlineParser_36tokenPairToMatch_95raw(references, rawText, s => s, _aL__36author_36project_36Markdown_36InlineParser_36EmphasisType(updt.aH.i), updt.aH, updt.aR, _2Y__36elm_36core_36List_36reverse(innerTokens));

    return _2u__95Utils_95Tuple3(updt.a2, match, updt.aZ);
  };

  var _AY__36author_36project_36Markdown_36InlineParser_36htmlElementTTM_95raw = function (remaining, tokens, matches, references, rawText) {
    htmlElementTTM: while (true) {
      if (!remaining.b) {
        return _BS__36author_36project_36Markdown_36InlineParser_36linkImageTypeTTM_95raw(_2Y__36elm_36core_36List_36reverse(tokens), _d_out, matches, references, rawText);
      } else {
        var token = remaining.a;
        var tokensTail = remaining.b;
        var _v16 = token.n;

        if (_v16.$ === 6) {
          var isOpen = _v16.a;
          var htmlModel = _v16.b;

          if (isOpen === 1) {
            var $temp$remaining = tokensTail,
                $temp$tokens = tokens,
                $temp$matches = _1I__95List_95Cons(_Bw__36author_36project_36Markdown_36InlineParser_36tokenToMatch_95raw(token, _Bx__36author_36project_36Markdown_36InlineParser_36HtmlType(htmlModel)), matches),
                $temp$references = references,
                $temp$rawText = rawText;

            remaining = $temp$remaining;
            tokens = $temp$tokens;
            matches = $temp$matches;
            references = $temp$references;
            rawText = $temp$rawText;
            continue htmlElementTTM;
          } else {
            var _v18 = _Ai__36author_36project_36Markdown_36InlineParser_36findToken_95raw(_By__36author_36project_36Markdown_36InlineParser_36isCloseToken(htmlModel), tokensTail);

            if (_v18.$ === 1) {
              var $temp$remaining = tokensTail,
                  $temp$tokens = tokens,
                  $temp$matches = _1I__95List_95Cons(_Bw__36author_36project_36Markdown_36InlineParser_36tokenToMatch_95raw(token, _Bx__36author_36project_36Markdown_36InlineParser_36HtmlType(htmlModel)), matches),
                  $temp$references = references,
                  $temp$rawText = rawText;

              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue htmlElementTTM;
            } else {
              var _v19 = _v18.a;
              var closeToken = _v19.a;
              var innerTokens = _v19.b;
              var newTail = _v19.c;

              var newMatch = _C0__36author_36project_36Markdown_36InlineParser_36tokenPairToMatch_95raw(references, rawText, s => s, _Bx__36author_36project_36Markdown_36InlineParser_36HtmlType(htmlModel), token, closeToken, innerTokens);

              var $temp$remaining = newTail,
                  $temp$tokens = tokens,
                  $temp$matches = _1I__95List_95Cons(newMatch, matches),
                  $temp$references = references,
                  $temp$rawText = rawText;

              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue htmlElementTTM;
            }
          }
        } else {
          var $temp$remaining = tokensTail,
              $temp$tokens = _1I__95List_95Cons(token, tokens),
              $temp$matches = matches,
              $temp$references = references,
              $temp$rawText = rawText;

          remaining = $temp$remaining;
          tokens = $temp$tokens;
          matches = $temp$matches;
          references = $temp$references;
          rawText = $temp$rawText;
          continue htmlElementTTM;
        }
      }
    }
  };

  var _BS__36author_36project_36Markdown_36InlineParser_36linkImageTypeTTM_95raw = function (remaining, tokens, matches, references, rawText) {
    linkImageTypeTTM: while (true) {
      if (!remaining.b) {
        return _Cw__36author_36project_36Markdown_36InlineParser_36emphasisTTM_95raw(_2Y__36elm_36core_36List_36reverse(tokens), _d_out, matches, references, rawText);
      } else {
        var token = remaining.a;
        var tokensTail = remaining.b;
        var _v11 = token.n;

        if (_v11.$ === 3) {
          var _v12 = _Ai__36author_36project_36Markdown_36InlineParser_36findToken_95raw(_D1__36author_36project_36Markdown_36InlineParser_36isLinkTypeOrImageOpenToken, tokens);

          if (!_v12.$) {
            var found = _v12.a;

            var _v13 = _D2__36author_36project_36Markdown_36InlineParser_36linkOrImageTypeToMatch_95raw(token, tokensTail, matches, references, rawText, found);

            if (!_v13.$) {
              var _v14 = _v13.a;
              var x = _v14.a;
              var newMatches = _v14.b;
              var newTokens = _v14.c;
              var $temp$remaining = x,
                  $temp$tokens = newTokens,
                  $temp$matches = newMatches,
                  $temp$references = references,
                  $temp$rawText = rawText;
              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue linkImageTypeTTM;
            } else {
              var $temp$remaining = tokensTail,
                  $temp$tokens = tokens,
                  $temp$matches = matches,
                  $temp$references = references,
                  $temp$rawText = rawText;
              remaining = $temp$remaining;
              tokens = $temp$tokens;
              matches = $temp$matches;
              references = $temp$references;
              rawText = $temp$rawText;
              continue linkImageTypeTTM;
            }
          } else {
            var $temp$remaining = tokensTail,
                $temp$tokens = tokens,
                $temp$matches = matches,
                $temp$references = references,
                $temp$rawText = rawText;
            remaining = $temp$remaining;
            tokens = $temp$tokens;
            matches = $temp$matches;
            references = $temp$references;
            rawText = $temp$rawText;
            continue linkImageTypeTTM;
          }
        } else {
          var $temp$remaining = tokensTail,
              $temp$tokens = _1I__95List_95Cons(token, tokens),
              $temp$matches = matches,
              $temp$references = references,
              $temp$rawText = rawText;

          remaining = $temp$remaining;
          tokens = $temp$tokens;
          matches = $temp$matches;
          references = $temp$references;
          rawText = $temp$rawText;
          continue linkImageTypeTTM;
        }
      }
    }
  };

  var _D2__36author_36project_36Markdown_36InlineParser_36linkOrImageTypeToMatch_95raw = function (closeToken, tokensTail, oldMatches, references, rawText, _v1) {
    var openToken = _v1.a;
    var innerTokens = _v1.b;
    var remainTokens = _v1.c;

    var removeOpenToken = _2u__95Utils_95Tuple3(tokensTail, oldMatches, _82__95Utils_95ap(innerTokens, remainTokens));

    var remainText = _AV__36elm_36core_36String_36dropLeft_95raw(closeToken.c + 1, rawText);

    var inactivateLinkOpenToken = function (token) {
      var _v9 = token.n;

      if (_v9.$ === 1) {
        return _C8_(token, {
          n: _BK__36author_36project_36Markdown_36InlineParser_36LinkOpenToken(1)
        });
      } else {
        return token;
      }
    };

    var findTempMatch = isLinkType => _C0__36author_36project_36Markdown_36InlineParser_36tokenPairToMatch_95raw(references, rawText, s => s, isLinkType ? _Yp__36author_36project_36Markdown_36InlineParser_36LinkType(_1B__95Utils_95Tuple2("", _4j__36elm_36core_36Maybe_36Nothing)) : _Yq__36author_36project_36Markdown_36InlineParser_36ImageType(_1B__95Utils_95Tuple2("", _4j__36elm_36core_36Maybe_36Nothing)), openToken, closeToken, _2Y__36elm_36core_36List_36reverse(innerTokens));

    var _v2 = openToken.n;

    switch (_v2.$) {
      case 2:
        var tempMatch = findTempMatch(false);

        var _v3 = _Yr__36author_36project_36Markdown_36InlineParser_36checkForInlineLinkTypeOrImageType_95raw(remainText, tempMatch, references);

        if (_v3.$ === 1) {
          return _5D__36elm_36core_36Maybe_36Just(removeOpenToken);
        } else {
          var match = _v3.a;

          var _v4 = _Ys__36author_36project_36Markdown_36InlineParser_36checkParsedAheadOverlapping_95raw(match, oldMatches);

          if (!_v4.$) {
            var matches = _v4.a;
            return _5D__36elm_36core_36Maybe_36Just(_2u__95Utils_95Tuple3(_Yt__36author_36project_36Markdown_36InlineParser_36removeParsedAheadTokens_95raw(match, tokensTail), matches, remainTokens));
          } else {
            return _5D__36elm_36core_36Maybe_36Just(removeOpenToken);
          }
        }

      case 1:
        if (!_v2.a) {
          var tempMatch = findTempMatch(true);

          var _v6 = _Yr__36author_36project_36Markdown_36InlineParser_36checkForInlineLinkTypeOrImageType_95raw(remainText, tempMatch, references);

          if (_v6.$ === 1) {
            return _5D__36elm_36core_36Maybe_36Just(removeOpenToken);
          } else {
            var match = _v6.a;

            var _v7 = _Ys__36author_36project_36Markdown_36InlineParser_36checkParsedAheadOverlapping_95raw(match, oldMatches);

            if (!_v7.$) {
              var matches = _v7.a;
              return _5D__36elm_36core_36Maybe_36Just(_2u__95Utils_95Tuple3(_Yt__36author_36project_36Markdown_36InlineParser_36removeParsedAheadTokens_95raw(match, tokensTail), matches, _1y__36elm_36core_36List_36map_95raw(inactivateLinkOpenToken, remainTokens)));
            } else {
              return _5D__36elm_36core_36Maybe_36Just(removeOpenToken);
            }
          }
        } else {
          return _5D__36elm_36core_36Maybe_36Just(removeOpenToken);
        }

      default:
        return _4j__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _C0__36author_36project_36Markdown_36InlineParser_36tokenPairToMatch_95raw = function (references, rawText, processText, type_, openToken, closeToken, innerTokens) {
    var textStart = openToken.c + openToken.i;
    var textEnd = closeToken.c;
    var text = processText(_AU__95String_95slice_95raw(textStart, textEnd, rawText));
    var start = openToken.c;
    var end = closeToken.c + closeToken.i;
    var match = {
      o: end,
      A: _d_out,
      s: start,
      t: text,
      I: textEnd,
      z: textStart,
      u: type_
    };

    var matches = _1y__36elm_36core_36List_36map_95raw(function (_v0) {
      var matchModel = _v0;
      return _BR__36author_36project_36Markdown_36InlineParser_36prepareChildMatch_95raw(match, matchModel);
    }, _7Z__36author_36project_36Markdown_36InlineParser_36tokensToMatches_95raw(innerTokens, _d_out, references, rawText));

    return {
      o: end,
      A: matches,
      s: start,
      t: text,
      I: textEnd,
      z: textStart,
      u: type_
    };
  };

  var _6P__36author_36project_36Markdown_36InlineParser_36parse_95raw = function (refs, rawText_) {
    var rawText = _7T__36elm_36core_36String_36trim(rawText_);

    var tokens = _7V__36author_36project_36Markdown_36InlineParser_36tokenize(rawText);

    return _7W__36author_36project_36Markdown_36InlineParser_36matchesToInlines(_7X__36author_36project_36Markdown_36InlineParser_36parseTextMatches_95raw(rawText, _d_out, _7Y__36author_36project_36Markdown_36InlineParser_36organizeMatches(_7Z__36author_36project_36Markdown_36InlineParser_36tokensToMatches_95raw(tokens, _d_out, refs, rawText))));
  };

  var _aZ__36elm_36parser_36Parser_36Advanced_36chompUntil = function (_v0) {
    var str = _v0.a;
    var expecting = _v0.b;
    return function (s) {
      var _v1 = _YI__95Parser_95findSubString_95raw(str, s.h, s.cE, s.bl, s.b);

      var newOffset = _v1.a;
      var newRow = _v1.b;
      var newCol = _v1.c;
      return _2c__95Utils_95eq(newOffset, -1) ? _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _cI__36elm_36parser_36Parser_36Advanced_36fromInfo_95raw(newRow, newCol, expecting, s.l)) : _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(_46__95Utils_95cmp(s.h, newOffset) < 0, 0, {
        bl: newCol,
        l: s.l,
        p: s.p,
        h: newOffset,
        cE: newRow,
        b: s.b
      });
    };
  };

  var _Z1_ = function (_v0) {
    var _char = _v0.a;
    var delimiter = _v0.b;
    return _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_DD__36elm_36parser_36Parser_36Advanced_36succeed(_3A_F2((language, body) => ({
      b6: body,
      bB: _8O__36elm_36core_36String_36isEmpty(language) ? _4j__36elm_36core_36Maybe_36Nothing : _5D__36elm_36core_36Maybe_36Just(language)
    }))), _1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_aY__36elm_36parser_36Parser_36Advanced_36getChompedString(_aZ__36elm_36parser_36Parser_36Advanced_36chompUntil(_aa__36elm_36parser_36Parser_36Advanced_36Token_95raw("\n", _5X__36elm_36parser_36Parser_36Problem("Expecting newline")))), _ab__36elm_36parser_36Parser_36Advanced_36symbol(_aa__36elm_36parser_36Parser_36Advanced_36Token_95raw("\n", _ad__36elm_36parser_36Parser_36ExpectingSymbol("\n"))))), _1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_aY__36elm_36parser_36Parser_36Advanced_36getChompedString(_ae__36elm_36parser_36Parser_36Advanced_36chompUntilEndOr("\n" + delimiter)), _ab__36elm_36parser_36Parser_36Advanced_36symbol(_aa__36elm_36parser_36Parser_36Advanced_36Token_95raw("\n" + delimiter, _ad__36elm_36parser_36Parser_36ExpectingSymbol(delimiter)))), _af__36elm_36parser_36Parser_36Advanced_36chompWhile(c => _2c__95Utils_95eq(c, _char))));
  };

  var _k9__36author_36project_36Helpers_36isGfmWhitespace = function (_char) {
    switch (_char) {
      case " ":
        return true;

      case "\n":
        return true;

      case "\t":
        return true;

      case "\v":
        return true;

      case "\f":
        return true;

      case "\r":
        return true;

      default:
        return false;
    }
  };

  var $_A_factoryFunction = function (str, expecting, s) {
    var _v1 = _YI__95Parser_95findSubString_95raw(str, s.h, s.cE, s.bl, s.b);

    var newOffset = _v1.a;
    var newRow = _v1.b;
    var newCol = _v1.c;
    return _2c__95Utils_95eq(newOffset, -1) ? _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _cI__36elm_36parser_36Parser_36Advanced_36fromInfo_95raw(newRow, newCol, expecting, s.l)) : _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(_46__95Utils_95cmp(s.h, newOffset) < 0, 0, {
      bl: newCol,
      l: s.l,
      p: s.p,
      h: newOffset,
      cE: newRow,
      b: s.b
    });
  };

  var _k4_parse = function (s) {
    return $_A_factoryFunction.call(this, ">", _lD_expecting, s);
  };

  var _mJ_parse = function (s) {
    return $_A_factoryFunction.call(this, "]", _n6_expecting, s);
  };

  var $_3_factoryFunction = function (parse, context, s0) {
    var _v1 = parse(_As__36elm_36parser_36Parser_36Advanced_36changeContext_95raw(_1I__95List_95Cons(_Au__36elm_36parser_36Parser_36Advanced_36Located_95raw(s0.cE, s0.bl, context), s0.l), s0));

    if (!_v1.$) {
      var p = _v1.a;
      var a = _v1.b;
      var s1 = _v1.c;
      return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(p, a, _As__36elm_36parser_36Parser_36Advanced_36changeContext_95raw(s0.l, s1));
    } else {
      var step = _v1;
      return step;
    }
  };

  var _9f_parse = function (s0) {
    return $_3_factoryFunction.call(this, _Aq_parse, "link reference definition", s0);
  };

  var _Cz_parseB = function (s0) {
    return $_3_factoryFunction.call(this, _Ye_parse, "title", s0);
  };

  var _Yd_parseB = function (s0) {
    return $_3_factoryFunction.call(this, _aH_parse, "link destination", s0);
  };

  var _gt__36author_36project_36ThematicBreak_36isSpace = function (c) {
    switch (c) {
      case " ":
        return true;

      case "\t":
        return true;

      default:
        return false;
    }
  };

  var _CM__36author_36project_36Markdown_36Parser_36joinRawStringsWith_95raw = function (joinWith, string1, string2) {
    var _v0 = _1B__95Utils_95Tuple2(string1, string2);

    if (_v0.a === "") {
      return string2;
    } else {
      if (_v0.b === "") {
        return string1;
      } else {
        return _82__95Utils_95ap(string1, _82__95Utils_95ap(joinWith, string2));
      }
    }
  };

  var _5I__36author_36project_36Markdown_36Parser_36toHeading = function (level) {
    switch (level) {
      case 1:
        return _1q__36elm_36core_36Result_36Ok(0);

      case 2:
        return _1q__36elm_36core_36Result_36Ok(1);

      case 3:
        return _1q__36elm_36core_36Result_36Ok(2);

      case 4:
        return _1q__36elm_36core_36Result_36Ok(3);

      case 5:
        return _1q__36elm_36core_36Result_36Ok(4);

      case 6:
        return _1q__36elm_36core_36Result_36Ok(5);

      default:
        return _1n__36elm_36core_36Result_36Err(_6I__36elm_36parser_36Parser_36Expecting("A heading with 1 to 6 #'s, but found " + _6J__36elm_36core_36String_36fromInt(level)));
    }
  };

  var _Z9_parseListItem = function (unparsedListItem) {
    if (!unparsedListItem.$) {
      var completion = unparsedListItem.a;
      var body = unparsedListItem.b;
      return {
        b6: body,
        bf: _5D__36elm_36core_36Maybe_36Just(function () {
          if (completion === 1) {
            return true;
          } else {
            return false;
          }
        }())
      };
    } else {
      var body = unparsedListItem.a;
      return {
        b6: body,
        bf: _4j__36elm_36core_36Maybe_36Nothing
      };
    }
  };

  var _au__36author_36project_36Markdown_36Parser_36childToBlocks_95raw = function (node, blocks) {
    switch (node.$) {
      case 0:
        var tag = node.a;
        var attributes = node.b;
        var children = node.c;

        var _v28 = _DH__36author_36project_36Markdown_36Parser_36nodesToBlocks(children);

        if (!_v28.$) {
          var childrenAsBlocks = _v28.a;

          var block = _5O__36author_36project_36Markdown_36Block_36HtmlBlock(_8A__36author_36project_36Markdown_36Block_36HtmlElement_95raw(tag, attributes, childrenAsBlocks));

          return _1q__36elm_36core_36Result_36Ok(_1I__95List_95Cons(block, blocks));
        } else {
          var err = _v28.a;
          return _1n__36elm_36core_36Result_36Err(err);
        }

      case 1:
        var innerText = node.a;

        var _v29 = _1D__36author_36project_36Markdown_36Parser_36parse(innerText);

        if (!_v29.$) {
          var value = _v29.a;
          return _1q__36elm_36core_36Result_36Ok(_82__95Utils_95ap(_2Y__36elm_36core_36List_36reverse(value), blocks));
        } else {
          var error = _v29.a;
          return _1n__36elm_36core_36Result_36Err(_6I__36elm_36parser_36Parser_36Expecting(_6Q__36elm_36core_36String_36join_95raw("\n", _1y__36elm_36core_36List_36map_95raw(_6k__36author_36project_36Markdown_36Parser_36deadEndToString, error))));
        }

      case 2:
        var string = node.a;
        return _1q__36elm_36core_36Result_36Ok(_1I__95List_95Cons(_5O__36author_36project_36Markdown_36Block_36HtmlBlock(_88__36author_36project_36Markdown_36Block_36HtmlComment(string)), blocks));

      case 3:
        var string = node.a;
        return _1q__36elm_36core_36Result_36Ok(_1I__95List_95Cons(_5O__36author_36project_36Markdown_36Block_36HtmlBlock(_8B__36author_36project_36Markdown_36Block_36Cdata(string)), blocks));

      case 4:
        var string = node.a;
        return _1q__36elm_36core_36Result_36Ok(_1I__95List_95Cons(_5O__36author_36project_36Markdown_36Block_36HtmlBlock(_8C__36author_36project_36Markdown_36Block_36ProcessingInstruction(string)), blocks));

      default:
        var declarationType = node.a;
        var content = node.b;
        return _1q__36elm_36core_36Result_36Ok(_1I__95List_95Cons(_5O__36author_36project_36Markdown_36Block_36HtmlBlock(_8D__36author_36project_36Markdown_36Block_36HtmlDeclaration_95raw(declarationType, content)), blocks));
    }
  };

  var _5L__36author_36project_36Markdown_36Parser_36inlineParseHelper_95raw = function (referencesDict, _v21) {
    var unparsedInlines = _v21;

    var referencesDict2 = _6L__36elm_36core_36Dict_36fromList(_1y__36elm_36core_36List_36map_95raw(_6M__36elm_36core_36Tuple_36mapSecond(function (_v22) {
      var destination = _v22.cg;
      var title = _v22.cK;
      return _1B__95Utils_95Tuple2(destination, title);
    }), referencesDict));

    return _1y__36elm_36core_36List_36map_95raw(_6O__36author_36project_36Markdown_36Parser_36mapInline, _6P__36author_36project_36Markdown_36InlineParser_36parse_95raw(referencesDict2, unparsedInlines));
  };

  var _6O__36author_36project_36Markdown_36Parser_36mapInline = function (inline) {
    switch (inline.$) {
      case 0:
        var string = inline.a;
        return _7L__36author_36project_36Markdown_36Block_36Text(string);

      case 1:
        return _6n__36author_36project_36Markdown_36Block_36HardLineBreak;

      case 2:
        var string = inline.a;
        return _7M__36author_36project_36Markdown_36Block_36CodeSpan(string);

      case 3:
        var string = inline.a;
        var maybeString = inline.b;
        var inlines = inline.c;
        return _7N__36author_36project_36Markdown_36Block_36Link_95raw(string, maybeString, _1y__36elm_36core_36List_36map_95raw(_6O__36author_36project_36Markdown_36Parser_36mapInline, inlines));

      case 4:
        var string = inline.a;
        var maybeString = inline.b;
        var inlines = inline.c;
        return _7O__36author_36project_36Markdown_36Block_36Image_95raw(string, maybeString, _1y__36elm_36core_36List_36map_95raw(_6O__36author_36project_36Markdown_36Parser_36mapInline, inlines));

      case 5:
        var node = inline.a;
        return _7P__36author_36project_36Markdown_36Block_36HtmlInline(_7Q__36author_36project_36Markdown_36Parser_36nodeToRawBlock(node));

      default:
        var level = inline.a;
        var inlines = inline.b;

        switch (level) {
          case 1:
            return _7R__36author_36project_36Markdown_36Block_36Emphasis(_1y__36elm_36core_36List_36map_95raw(_6O__36author_36project_36Markdown_36Parser_36mapInline, inlines));

          case 2:
            return _7S__36author_36project_36Markdown_36Block_36Strong(_1y__36elm_36core_36List_36map_95raw(_6O__36author_36project_36Markdown_36Parser_36mapInline, inlines));

          default:
            return _7S__36author_36project_36Markdown_36Block_36Strong(_1y__36elm_36core_36List_36map_95raw(_6O__36author_36project_36Markdown_36Parser_36mapInline, inlines));
        }

    }
  };

  var _7Q__36author_36project_36Markdown_36Parser_36nodeToRawBlock = function (node) {
    switch (node.$) {
      case 1:
        return _88__36author_36project_36Markdown_36Block_36HtmlComment("TODO this never happens, but use types to drop this case.");

      case 0:
        var tag = node.a;
        var attributes = node.b;
        var children = node.c;

        var parseChild = function (child) {
          if (child.$ === 1) {
            var text = child.a;
            return _89__36author_36project_36Markdown_36Parser_36textNodeToBlocks(text);
          } else {
            return {
              $: 1,
              a: _5O__36author_36project_36Markdown_36Block_36HtmlBlock(_7Q__36author_36project_36Markdown_36Parser_36nodeToRawBlock(child)),
              b: _d_out
            };
          }
        };

        return _8A__36author_36project_36Markdown_36Block_36HtmlElement_95raw(tag, attributes, _3q__36elm_36core_36List_36concatMap_95raw(parseChild, children));

      case 2:
        var string = node.a;
        return _88__36author_36project_36Markdown_36Block_36HtmlComment(string);

      case 3:
        var string = node.a;
        return _8B__36author_36project_36Markdown_36Block_36Cdata(string);

      case 4:
        var string = node.a;
        return _8C__36author_36project_36Markdown_36Block_36ProcessingInstruction(string);

      default:
        var declarationType = node.a;
        var content = node.b;
        return _8D__36author_36project_36Markdown_36Block_36HtmlDeclaration_95raw(declarationType, content);
    }
  };

  var _ZI__36author_36project_36Markdown_36Parser_36nodesToBlocksHelp_95raw = function (remaining, soFar) {
    nodesToBlocksHelp: while (true) {
      if (remaining.b) {
        var node = remaining.a;
        var rest = remaining.b;

        var _v16 = _au__36author_36project_36Markdown_36Parser_36childToBlocks_95raw(node, soFar);

        if (!_v16.$) {
          var newSoFar = _v16.a;
          var $temp$remaining = rest,
              $temp$soFar = newSoFar;
          remaining = $temp$remaining;
          soFar = $temp$soFar;
          continue nodesToBlocksHelp;
        } else {
          var e = _v16.a;
          return _1n__36elm_36core_36Result_36Err(e);
        }
      } else {
        return _1q__36elm_36core_36Result_36Ok(_2Y__36elm_36core_36List_36reverse(soFar));
      }
    }
  };

  var _1D__36author_36project_36Markdown_36Parser_36parse = function (input) {
    var _v12 = _1j__36elm_36parser_36Parser_36Advanced_36run_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_1l_(), _1m_parse), input);

    if (_v12.$ === 1) {
      var e = _v12.a;
      return _1n__36elm_36core_36Result_36Err(e);
    } else {
      var v = _v12.a;

      var _v13 = _1o__36author_36project_36Markdown_36Parser_36parseAllInlines(v);

      if (_v13.$ === 1) {
        var e = _v13.a;
        return _1j__36elm_36parser_36Parser_36Advanced_36run_95raw(_1p__36elm_36parser_36Parser_36Advanced_36problem(e), "");
      } else {
        var blocks = _v13.a;

        var isNotEmptyParagraph = function (block) {
          if (block.$ === 5 && !block.a.b) {
            return false;
          } else {
            return true;
          }
        };

        return _1q__36elm_36core_36Result_36Ok(_1r__36elm_36core_36List_36filter_95raw(isNotEmptyParagraph, blocks));
      }
    }
  };

  var _38__36author_36project_36Markdown_36Parser_36parseAllInlinesHelp_95raw = function (state, rawBlocks, parsedBlocks) {
    parseAllInlinesHelp: while (true) {
      if (rawBlocks.b) {
        var rawBlock = rawBlocks.a;
        var rest = rawBlocks.b;

        var _v11 = _4L__36author_36project_36Markdown_36Parser_36parseInlines_95raw(state.af, rawBlock);

        switch (_v11.$) {
          case 1:
            var newParsedBlock = _v11.a;

            var $temp$state = state,
                $temp$rawBlocks = rest,
                $temp$parsedBlocks = _1I__95List_95Cons(newParsedBlock, parsedBlocks);

            state = $temp$state;
            rawBlocks = $temp$rawBlocks;
            parsedBlocks = $temp$parsedBlocks;
            continue parseAllInlinesHelp;

          case 0:
            var $temp$state = state,
                $temp$rawBlocks = rest,
                $temp$parsedBlocks = parsedBlocks;
            state = $temp$state;
            rawBlocks = $temp$rawBlocks;
            parsedBlocks = $temp$parsedBlocks;
            continue parseAllInlinesHelp;

          default:
            var e = _v11.a;
            return _1n__36elm_36core_36Result_36Err(e);
        }
      } else {
        return _1q__36elm_36core_36Result_36Ok(parsedBlocks);
      }
    }
  };

  var _4L__36author_36project_36Markdown_36Parser_36parseInlines_95raw = function (linkReferences, rawBlock) {
    switch (rawBlock.$) {
      case 0:
        var level = rawBlock.a;
        var unparsedInlines = rawBlock.b;

        var _v4 = _5I__36author_36project_36Markdown_36Parser_36toHeading(level);

        if (!_v4.$) {
          var parsedLevel = _v4.a;
          return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5K__36author_36project_36Markdown_36Block_36Heading_95raw(parsedLevel, _5L__36author_36project_36Markdown_36Parser_36inlineParseHelper_95raw(linkReferences, unparsedInlines)));
        } else {
          var e = _v4.a;
          return _5M__36author_36project_36Markdown_36Parser_36InlineProblem(e);
        }

      case 1:
        var unparsedInlines = rawBlock.a;
        return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5N__36author_36project_36Markdown_36Block_36Paragraph(_5L__36author_36project_36Markdown_36Parser_36inlineParseHelper_95raw(linkReferences, unparsedInlines)));

      case 2:
        var html = rawBlock.a;
        return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5O__36author_36project_36Markdown_36Block_36HtmlBlock(html));

      case 3:
        var unparsedItems = rawBlock.a;

        var parseItem = function (unparsed) {
          var task = function () {
            var _v5 = unparsed.bf;

            if (!_v5.$) {
              if (!_v5.a) {
                return 1;
              } else {
                return 2;
              }
            } else {
              return 0;
            }
          }();

          var parsedInlines = _5P__36author_36project_36Markdown_36Parser_36parseRawInline_95raw(linkReferences, _1g__36elm_36core_36Basics_36identity, unparsed.b6);

          return _5Q__36author_36project_36Markdown_36Block_36ListItem_95raw(task, parsedInlines);
        };

        return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5R__36author_36project_36Markdown_36Block_36UnorderedList(_1y__36elm_36core_36List_36map_95raw(parseItem, unparsedItems)));

      case 4:
        var startingIndex = rawBlock.a;
        var unparsedInlines = rawBlock.b;
        return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5S__36author_36project_36Markdown_36Block_36OrderedList_95raw(startingIndex, _1y__36elm_36core_36List_36map_95raw(_q_A2(_5T__36author_36project_36Markdown_36Parser_36parseRawInline, linkReferences, _1g__36elm_36core_36Basics_36identity), unparsedInlines)));

      case 5:
        var codeBlock = rawBlock.a;
        return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5V__36author_36project_36Markdown_36Block_36CodeBlock(codeBlock));

      case 7:
        return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_4f__36author_36project_36Markdown_36Block_36ThematicBreak);

      case 9:
        return _4h__36author_36project_36Markdown_36Parser_36EmptyBlock;

      case 10:
        var rawBlocks = rawBlock.a;

        var _v6 = _1j__36elm_36parser_36Parser_36Advanced_36run_95raw(_1l_(), rawBlocks);

        if (!_v6.$) {
          var value = _v6.a;

          var _v7 = _1o__36author_36project_36Markdown_36Parser_36parseAllInlines(value);

          if (!_v7.$) {
            var parsedBlocks = _v7.a;
            return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5W__36author_36project_36Markdown_36Block_36BlockQuote(parsedBlocks));
          } else {
            var e = _v7.a;
            return _5M__36author_36project_36Markdown_36Parser_36InlineProblem(e);
          }
        } else {
          var error = _v6.a;
          return _5M__36author_36project_36Markdown_36Parser_36InlineProblem(_5X__36elm_36parser_36Parser_36Problem(_5Y__36author_36project_36Markdown_36Parser_36deadEndsToString(error)));
        }

      case 6:
        var codeBlockBody = rawBlock.a;
        return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5V__36author_36project_36Markdown_36Block_36CodeBlock({
          b6: codeBlockBody,
          bB: _4j__36elm_36core_36Maybe_36Nothing
        }));

      default:
        var _v8 = rawBlock.a;
        var header = _v8.a;

        var parseHeader = function (_v9) {
          var label = _v9.aE;
          var alignment = _v9.aQ;

          var wrap = parsedHeaderLabel => ({
            aQ: alignment,
            aE: parsedHeaderLabel
          });

          return _5P__36author_36project_36Markdown_36Parser_36parseRawInline_95raw(linkReferences, wrap, label);
        };

        return _5J__36author_36project_36Markdown_36Parser_36ParsedBlock(_5Z__36author_36project_36Markdown_36Block_36Table_95raw(_1y__36elm_36core_36List_36map_95raw(parseHeader, header), _d_out));
    }
  };

  var _4e__36author_36project_36Markdown_36Parser_36stepRawBlock = function (revStmts) {
    var _v2 = revStmts.T;

    if (_v2.b && _v2.a.$ === 1) {
      return _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(f => f(revStmts), _5j__36elm_36parser_36Parser_36Advanced_36oneOf(_5k_()));
    } else {
      return _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(f => f(revStmts), _5j__36elm_36parser_36Parser_36Advanced_36oneOf(_5l_()));
    }
  };

  var _Bq__36author_36project_36Markdown_36Parser_36xmlNodeToHtmlNode = function (xmlNode) {
    switch (xmlNode.$) {
      case 1:
        var innerText = xmlNode.a;
        return _DD__36elm_36parser_36Parser_36Advanced_36succeed(_CN__36author_36project_36Markdown_36RawBlock_36Body(innerText));

      case 0:
        var tag = xmlNode.a;
        var attributes = xmlNode.b;
        var children = xmlNode.c;

        var _v1 = _DH__36author_36project_36Markdown_36Parser_36nodesToBlocks(children);

        if (!_v1.$) {
          var parsedChildren = _v1.a;
          return _DD__36elm_36parser_36Parser_36Advanced_36succeed(_DI__36author_36project_36Markdown_36RawBlock_36Html(_8A__36author_36project_36Markdown_36Block_36HtmlElement_95raw(tag, attributes, parsedChildren)));
        } else {
          var err = _v1.a;
          return _1p__36elm_36parser_36Parser_36Advanced_36problem(err);
        }

      case 2:
        var string = xmlNode.a;
        return _DD__36elm_36parser_36Parser_36Advanced_36succeed(_DI__36author_36project_36Markdown_36RawBlock_36Html(_88__36author_36project_36Markdown_36Block_36HtmlComment(string)));

      case 3:
        var string = xmlNode.a;
        return _DD__36elm_36parser_36Parser_36Advanced_36succeed(_DI__36author_36project_36Markdown_36RawBlock_36Html(_8B__36author_36project_36Markdown_36Block_36Cdata(string)));

      case 4:
        var string = xmlNode.a;
        return _DD__36elm_36parser_36Parser_36Advanced_36succeed(_DI__36author_36project_36Markdown_36RawBlock_36Html(_8C__36author_36project_36Markdown_36Block_36ProcessingInstruction(string)));

      default:
        var declarationType = xmlNode.a;
        var content = xmlNode.b;
        return _DD__36elm_36parser_36Parser_36Advanced_36succeed(_DI__36author_36project_36Markdown_36RawBlock_36Html(_8D__36author_36project_36Markdown_36Block_36HtmlDeclaration_95raw(declarationType, content)));
    }
  };

  var $_6_factoryFunction = function (_v0) {
    var startingIndex = _v0.a;
    var unparsedLines = _v0.b;
    return _DB__36author_36project_36Markdown_36RawBlock_36OrderedListBlock_95raw(startingIndex, _1y__36elm_36core_36List_36map_95raw(_1g__36elm_36core_36Basics_36identity, unparsedLines));
  };

  var _18__36elm_36json_36Json_36Encode_36string = value => {
    return value;
  };

  var _1n__36elm_36core_36Result_36Err = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _1q__36elm_36core_36Result_36Ok = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _1I__95List_95Cons = (hd, tl) => {
    return {
      $: 1,
      a: hd,
      b: tl
    };
  };

  var _2a__36elm_36json_36Json_36Decode_36Failure_95raw = (a, b) => {
    return {
      $: 3,
      a: a,
      b: b
    };
  };

  var _2T__95Json_95expecting = (type, value) => {
    return _1n__36elm_36core_36Result_36Err(_2a__36elm_36json_36Json_36Decode_36Failure_95raw("Expecting " + type, _18__36elm_36json_36Json_36Encode_36string(value)));
  };

  var _2U__95Json_95isArray = value => {
    return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
  };

  var _q_A2 = (fun, a, b) => {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  };

  var _2X__36elm_36json_36Json_36Decode_36Index_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Json_wrap", _$2_Object_46defineProperty(_18__36elm_36json_36Json_36Encode_36string, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _d_out = $_C_sub(null, null);

  var _16__95Json_95run_95raw = (decoder, value) => {
    return _1V__95Json_95runHelp(decoder, _1S__95Json_95unwrap(value));
  };

  var _4V__36elm_36core_36Elm_36JsArray_36empty = [];

  var _1B__95Utils_95Tuple2 = (a, b) => {
    return {
      a: a,
      b: b
    };
  };

  var _4R__36elm_36core_36Array_36empty = {
    $: 0,
    a: 0,
    b: 5,
    c: _4V__36elm_36core_36Elm_36JsArray_36empty,
    d: _4V__36elm_36core_36Elm_36JsArray_36empty
  };

  var _1S__95Json_95unwrap = value => {
    return value;
  };

  var _70__36elm_36core_36Array_36Array_95elm_95builtin_95raw = (a, b, c, d) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _71__36elm_36core_36Elm_36JsArray_36length = array => {
    return array.length;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_JsArray_length", _$2_Object_46defineProperty(_71__36elm_36core_36Elm_36JsArray_36length, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _3w__36elm_36core_36List_36cons = a => {
    return b => _1I__95List_95Cons(a, b);
  };

  var _2V__95Json_95toElmArray = array => {
    return _3t__36elm_36core_36Array_36initialize_95raw(array.length, i => array[i]);
  };

  var _2W__36elm_36json_36Json_36Decode_36Field_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _1y__36elm_36core_36List_36map_95raw = (f, xs) => {
    return _39__36elm_36core_36List_36foldr_95raw(_3A_F2((x, acc) => _1I__95List_95Cons(f(x), acc)), _d_out, xs);
  };

  var _2Y__36elm_36core_36List_36reverse = list => {
    return _3i__36elm_36core_36List_36foldl_95raw(_3w__36elm_36core_36List_36cons, _d_out, list);
  };

  var _5p__36elm_36core_36Basics_36floor = _$4_Math_46floor;

  var _2Z__36elm_36json_36Json_36Decode_36OneOf = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _7p__95Basics_95log = _$5_Math_46log;

  var _73__36elm_36core_36Basics_36logBase_95raw = (base, number) => {
    return _7p__95Basics_95log(number) / _7p__95Basics_95log(base);
  };

  var _1z__36elm_36core_36Task_36onEffects = a => {
    return b => c => _2d__36elm_36core_36Task_36onEffects_95raw(a, b, c);
  };

  var _2l__95Scheduler_95andThen_95raw = (callback, task) => {
    return {
      $: 3,
      b: callback,
      d: task
    };
  };

  var _2k__36elm_36core_36Task_36map_95raw = (func, taskA) => {
    return _2l__95Scheduler_95andThen_95raw(a => _40__36elm_36core_36Task_36succeed(func(a)), taskA);
  };

  var _21__36elm_36core_36Task_36onSelfMsg = a => {
    return b => c => _2e__36elm_36core_36Task_36onSelfMsg_95raw(a, b, c);
  };

  var _64__36elm_36core_36Array_36Leaf = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _12__36elm_36html_36Html_36text = string => {
    return {
      $: 0,
      a: string
    };
  };

  var _9_ = (impl, flagDecoder, debugMetadata, args) => {
    return _i__95Platform_95initialize(flagDecoder, args, impl.cs, impl.cL, impl.cI, function (sendToApp, initialModel) {
      var view = impl.cN;
      /**/

      var domNode = args["node"]; //*/

      /**_UNUSED/
              var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
              //*/

      var currNode = _r__95VirtualDom_95virtualize(domNode);

      return _s__95Browser_95makeAnimator(initialModel, function (model) {
        var nextNode = view(model);

        var patches = _t__95VirtualDom_95diff(currNode, nextNode);

        domNode = _u__95VirtualDom_95applyPatches(domNode, currNode, patches, sendToApp);
        currNode = nextNode;
      });
    });
  };

  var _39__36elm_36core_36List_36foldr_95raw = (fn, acc, ls) => {
    return _4M__36elm_36core_36List_36foldrHelper_95raw(fn, acc, 0, ls);
  };

  var _1g__36elm_36core_36Basics_36identity = x => {
    return x;
  };

  var _23__36elm_36core_36Task_36cmdMap = a => {
    return b => _2f__36elm_36core_36Task_36cmdMap_95raw(a, b);
  };

  var _1K_A3 = (fun, a, b, c) => {
    return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
  };

  var _40__36elm_36core_36Task_36succeed = value => {
    return {
      $: 0,
      a: value
    };
  };

  var _1J__95VirtualDom_95attribute_95raw = (key, value) => {
    return {
      $: "a3",
      n: key,
      o: value
    };
  };

  var _2t__36elm_36core_36Task_36sequence = tasks => {
    return _39__36elm_36core_36List_36foldr_95raw(_4G__36elm_36core_36Task_36map2(_3w__36elm_36core_36List_36cons), _40__36elm_36core_36Task_36succeed(_d_out), tasks);
  };

  var _1L__95VirtualDom_95node = b => {
    return _2A__95VirtualDom_95nodeNS_95raw(void 0, b);
  };

  var _1M__95Browser_95requestAnimationFrame = callback => {
    return setTimeout(callback, 1000 / 60);
  };

  _3w__36elm_36core_36List_36cons.a = 2;

  var _25__95Platform_95outgoingPortMap = a => {
    return b => _2g__95Platform_95outgoingPortMap_95raw(a, b);
  };

  var _3A_F2 = fun => {
    return _4N_F(2, fun, a => b => fun(a, b));
  };

  var _2d__36elm_36core_36Task_36onEffects_95raw = (router, commands, state) => {
    return _2k__36elm_36core_36Task_36map_95raw(_v0 => 0, _2t__36elm_36core_36Task_36sequence(_1y__36elm_36core_36List_36map_95raw(_3y__36elm_36core_36Task_36spawnCmd(router), commands)));
  };

  var _4G__36elm_36core_36Task_36map2 = a => {
    return b => c => _4d__36elm_36core_36Task_36map2_95raw(a, b, c);
  };

  var _4d__36elm_36core_36Task_36map2_95raw = (func, taskA, taskB) => {
    return _2l__95Scheduler_95andThen_95raw(a => _2l__95Scheduler_95andThen_95raw(b => _40__36elm_36core_36Task_36succeed(_q_A2(func, a, b)), taskB), taskA);
  };

  var _2e__36elm_36core_36Task_36onSelfMsg_95raw = (_v0, _v1, _v2) => {
    return _40__36elm_36core_36Task_36succeed(0);
  };

  var _44__95Scheduler_95binding = callback => {
    return {
      $: 2,
      b: callback,
      c: null
    };
  };

  var _1f__36elm_36core_36Task_36perform_95raw = (toMessage, task) => {
    return _2j__36elm_36core_36Task_36command(_2k__36elm_36core_36Task_36map_95raw(toMessage, task));
  };

  var _1v__36elm_36core_36List_36all_95raw = (isOkay, list) => {
    return !_3E__36elm_36core_36List_36any_95raw(_q_A2(_3F__36elm_36core_36Basics_36composeL, _3H__36elm_36core_36Basics_36not, isOkay), list);
  };

  var _1h__36author_36project_36Benchmark_36Runner_36Json_36breakForRender = task => {
    return _2l__95Scheduler_95andThen_95raw(_v0 => task, _2m__36elm_36core_36Process_36sleep(0));
  };

  var _1w__36elm_36core_36Basics_36eq = a => {
    return b => _2c__95Utils_95eq(a, b);
  };

  _3w__36elm_36core_36List_36cons.f = _1I__95List_95Cons;

  var _2A__95VirtualDom_95nodeNS_95raw = (namespace, tag) => {
    return _3A_F2(function (factList, kidList) {
      for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
        var kid = kidList.a;
        descendantsCount += kid.b || 0;
        kids.push(kid);
      }

      descendantsCount += kids.length;
      return {
        $: 1,
        c: tag,
        d: _1t__95VirtualDom_95organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount
      };
    });
  };

  var _3y__36elm_36core_36Task_36spawnCmd = a => {
    return b => _4X__36elm_36core_36Task_36spawnCmd_95raw(a, b);
  };

  var _7q__36elm_36core_36Basics_36ceiling = _$6_Math_46ceil;

  var _75__36elm_36core_36Basics_36max_95raw = (x, y) => {
    return _46__95Utils_95cmp(x, y) > 0 ? x : y;
  };

  var _2g__95Platform_95outgoingPortMap_95raw = (tagger, value) => {
    return value;
  };

  var _5a__95Scheduler_95spawn = task => {
    return _44__95Scheduler_95binding(function (callback) {
      callback(_40__36elm_36core_36Task_36succeed(_3K__95Scheduler_95rawSpawn(task)));
    });
  };

  var _5b__36elm_36core_36Platform_36sendToApp = a => {
    return b => _63__95Platform_95sendToApp_95raw(a, b);
  };

  var _63__95Platform_95sendToApp_95raw = (router, msg) => {
    return _44__95Scheduler_95binding(function (callback) {
      router.g(msg);
      callback(_40__36elm_36core_36Task_36succeed(0));
    });
  };

  var _A1__36elm_36core_36Array_36SubTree = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _2m__36elm_36core_36Process_36sleep = time => {
    return _44__95Scheduler_95binding(function (callback) {
      var id = setTimeout(function () {
        callback(_40__36elm_36core_36Task_36succeed(0));
      }, time);
      return function () {
        clearTimeout(id);
      };
    });
  };

  var _1Z__36elm_36core_36Task_36init = $_F_sub();

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Scheduler_succeed", _$2_Object_46defineProperty(_40__36elm_36core_36Task_36succeed, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _4G__36elm_36core_36Task_36map2.a = 3;
  _4G__36elm_36core_36Task_36map2.f = _4d__36elm_36core_36Task_36map2_95raw;

  var _3J_F3 = fun => {
    return _4N_F(3, fun, a => b => c => fun(a, b, c));
  };

  var _51__95Scheduler_95queue = [];
  _5b__36elm_36core_36Platform_36sendToApp.a = 2;

  var _3M__95Scheduler_95receive = callback => {
    return {
      $: 5,
      b: callback
    };
  };

  var _3N_A4 = (fun, a, b, c, d) => {
    return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
  };

  var _2j__36elm_36core_36Task_36command = value => {
    return {
      $: 1,
      k: "Task",
      l: value
    };
  };

  var _j__36author_36project_36Benchmark_36Runner_36Json_36init_95raw = (benchmark, _v0) => {
    return _1B__95Utils_95Tuple2(benchmark, _1C__36author_36project_36Benchmark_36Runner_36Json_36next(benchmark));
  };

  var _3B__36elm_36core_36Basics_36clamp_95raw = (low, high, number) => {
    return _46__95Utils_95cmp(number, low) < 0 ? low : _46__95Utils_95cmp(number, high) > 0 ? high : number;
  };

  var _3F__36elm_36core_36Basics_36composeL = a => {
    return b => c => _3v__36elm_36core_36Basics_36composeL_95raw(a, b, c);
  };

  _5b__36elm_36core_36Platform_36sendToApp.f = _63__95Platform_95sendToApp_95raw;

  var _2o__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single = a => {
    return b => c => _3T__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw(a, b, c);
  };

  _3y__36elm_36core_36Task_36spawnCmd.a = 2;

  var _1C__36author_36project_36Benchmark_36Runner_36Json_36next = benchmark => {
    return _1E__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _1P__36elm_36core_36Platform_36Cmd_36none : _1f__36elm_36core_36Task_36perform_95raw(_1g__36elm_36core_36Basics_36identity, _1h__36author_36project_36Benchmark_36Runner_36Json_36breakForRender(_1i__36elm_95explorations_36benchmark_36Benchmark_36step(benchmark)));
  };

  var _3H__36elm_36core_36Basics_36not = bool => {
    return !bool;
  };

  var _3R__95VirtualDom_95equalEvents = (x, y) => {
    return x.$ == y.$ && _4c__95Json_95equality(x.a, y.a);
  };

  _3y__36elm_36core_36Task_36spawnCmd.f = _4X__36elm_36core_36Task_36spawnCmd_95raw;

  var _3v__36elm_36core_36Basics_36composeL_95raw = (g, f, x) => {
    return g(f(x));
  };

  var _1r__36elm_36core_36List_36filter_95raw = (isGood, list) => {
    return _39__36elm_36core_36List_36foldr_95raw(_3A_F2((x, xs) => isGood(x) ? _1I__95List_95Cons(x, xs) : xs), _d_out, list);
  };

  _1z__36elm_36core_36Task_36onEffects.a = 3;
  _1z__36elm_36core_36Task_36onEffects.f = _2d__36elm_36core_36Task_36onEffects_95raw;
  _21__36elm_36core_36Task_36onSelfMsg.a = 3;
  _21__36elm_36core_36Task_36onSelfMsg.f = _2e__36elm_36core_36Task_36onSelfMsg_95raw;
  _23__36elm_36core_36Task_36cmdMap.a = 2;

  var _3T__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  var _1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw = (keepParser, ignoreParser) => {
    return _2y__36elm_36parser_36Parser_36Advanced_36map2_95raw(_2z__36elm_36core_36Basics_36always, keepParser, ignoreParser);
  };

  var _4Y__36elm_36core_36List_36length = xs => {
    return _3i__36elm_36core_36List_36foldl_95raw(_3A_F2((_v0, i) => i + 1), 0, xs);
  };

  _23__36elm_36core_36Task_36cmdMap.f = _2f__36elm_36core_36Task_36cmdMap_95raw;
  var _1Y_ = {
    b: _1Z__36elm_36core_36Task_36init,
    c: _1z__36elm_36core_36Task_36onEffects,
    d: _21__36elm_36core_36Task_36onSelfMsg,
    e: _23__36elm_36core_36Task_36cmdMap,
    f: void 0
  };
  _25__95Platform_95outgoingPortMap.a = 2;

  var _1m_parse = s => {
    return _2c__95Utils_95eq(_33__36elm_36core_36String_36length(s.b), s.h) ? _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s) : _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, _2J_));
  };

  _25__95Platform_95outgoingPortMap.f = _2g__95Platform_95outgoingPortMap_95raw;

  var _52__36elm_36core_36Dict_36toList = dict => {
    return _65__36elm_36core_36Dict_36foldr_95raw(_3J_F3((key, value, list) => _1I__95List_95Cons(_1B__95Utils_95Tuple2(key, value), list)), _d_out, dict);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Process_sleep", _$2_Object_46defineProperty(_2m__36elm_36core_36Process_36sleep, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _45__95Scheduler_95onError_95raw = (callback, task) => {
    return {
      $: 4,
      b: callback,
      d: task
    };
  };

  var _47__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _48__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _1d_ = {
    e: _25__95Platform_95outgoingPortMap,
    u: _1g__36elm_36core_36Basics_36identity,
    a: _27__95Platform_95setupOutgoingPort
  };
  var _1X__95Platform_95effectManagers = {
    Task: _1Y_,
    reportResults: _1d_
  };
  var _1e__95Platform_95effectsQueue = [];
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_VirtualDom_text", _$2_Object_46defineProperty(_12__36elm_36html_36Html_36text, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  var _4P__95VirtualDom_95doc = document;

  var _4A__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _4F__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw = (n, operation_) => {
    return _5H__95Benchmark_95sample_95raw(n, operation_);
  };

  var _53__36elm_36core_36Basics_36add = a => {
    return b => _5e__95Basics_95add_95raw(a, b);
  };

  _3F__36elm_36core_36Basics_36composeL.a = 3;
  _3F__36elm_36core_36Basics_36composeL.f = _3v__36elm_36core_36Basics_36composeL_95raw;

  var _5e__95Basics_95add_95raw = (a, b) => {
    return a + b;
  };

  var _2r__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series = a => {
    return b => _3V__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw(a, b);
  };

  var _4r__36elm_36core_36Basics_36composeR_95raw = (f, g, x) => {
    return g(f(x));
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_not", _$2_Object_46defineProperty(_3H__36elm_36core_36Basics_36not, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _5H__95Benchmark_95sample_95raw = (n, fn) => {
    return _44__95Scheduler_95binding(function (callback) {
      var start = _6F__95Benchmark_95getTimestamp();

      try {
        for (var i = 0; i < n; i++) {
          fn();
        }
      } catch (error) {
        if (error instanceof RangeError) {
          callback(_6G__95Scheduler_95fail(_5h__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow));
        } else {
          callback(_6G__95Scheduler_95fail(_6H__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError(error.message)));
        }

        return;
      }

      var end = _6F__95Benchmark_95getTimestamp();

      callback(_40__36elm_36core_36Task_36succeed(end - start));
    });
  };

  var _2u__95Utils_95Tuple3 = (a, b, c) => {
    return {
      a: a,
      b: b,
      c: c
    };
  };

  var _2v__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group = a => {
    return b => _3c__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw(a, b);
  };

  var _55__36elm_36core_36Basics_36composeR = a => {
    return b => c => _4r__36elm_36core_36Basics_36composeR_95raw(a, b, c);
  };

  _1w__36elm_36core_36Basics_36eq.a = 2;

  var _2z__36elm_36core_36Basics_36always = a => {
    return b => _3d__36elm_36core_36Basics_36always_95raw(a, b);
  };

  var _35__36elm_36parser_36Parser_36Advanced_36Good_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  var _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  _1w__36elm_36core_36Basics_36eq.f = _2c__95Utils_95eq;

  var _5D__36elm_36core_36Maybe_36Just = a => {
    return {
      $: 0,
      a
    };
  };

  var _33__36elm_36core_36String_36length = str => {
    return str.length;
  };

  var _1P__36elm_36core_36Platform_36Cmd_36none = {
    $: 2,
    m: _d_out
  };
  _2o__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.a = 3;

  var _58__36elm_36core_36Maybe_36withDefault = a => {
    return b => _5f__36elm_36core_36Maybe_36withDefault_95raw(a, b);
  };

  var _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw = (s, x) => {
    return _4J__36elm_36parser_36Parser_36Advanced_36AddRight_95raw(_3f__36elm_36parser_36Parser_36Advanced_36Empty, _4K__36elm_36parser_36Parser_36Advanced_36DeadEnd_95raw(s.cE, s.bl, x, s.l));
  };

  var _6G__95Scheduler_95fail = error => {
    return {
      $: 1,
      a: error
    };
  };

  var _3V__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  _2o__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.f = _3T__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw;

  var _5A__36elm_36core_36List_36repeat_95raw = (n, value) => {
    return _68__36elm_36core_36List_36repeatHelp_95raw(_d_out, n, value);
  };

  var _3c__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _6H__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _3W__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized = $_M_sub();

  var _1p__36elm_36parser_36Parser_36Advanced_36problem = x => {
    return s => _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, x));
  };

  var _3d__36elm_36core_36Basics_36always_95raw = (a, _v0) => {
    return a;
  };

  var _66__36elm_36core_36Basics_36min = a => {
    return b => _6l__36elm_36core_36Basics_36min_95raw(a, b);
  };

  _53__36elm_36core_36Basics_36add.a = 2;
  _53__36elm_36core_36Basics_36add.f = _5e__95Basics_95add_95raw;

  var _6l__36elm_36core_36Basics_36min_95raw = (x, y) => {
    return _46__95Utils_95cmp(x, y) < 0 ? x : y;
  };

  var _5w__36elm_36core_36List_36sum = numbers => {
    return _3i__36elm_36core_36List_36foldl_95raw(_53__36elm_36core_36Basics_36add, 0, numbers);
  };

  var _6F__95Benchmark_95getTimestamp = _$8_Date_46now;

  var _5h__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow = $_N_sub();

  var _3Y_nRight = $_L_root(-2);

  _55__36elm_36core_36Basics_36composeR.a = 3;

  var _5y__36elm_36core_36Basics_36pow = a => {
    return b => _6i_(a, b);
  };

  _55__36elm_36core_36Basics_36composeR.f = _4r__36elm_36core_36Basics_36composeR_95raw;
  _66__36elm_36core_36Basics_36min.a = 2;

  var _6z__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues = a => {
    return {
      $: 0,
      a: a
    };
  };

  _66__36elm_36core_36Basics_36min.f = _6l__36elm_36core_36Basics_36min_95raw;

  var _4j__36elm_36core_36Maybe_36Nothing = $_G_sub(null);

  _58__36elm_36core_36Maybe_36withDefault.a = 2;

  var _4J__36elm_36parser_36Parser_36Advanced_36AddRight_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _4K__36elm_36parser_36Parser_36Advanced_36DeadEnd_95raw = (row, col, problem, contextStack) => {
    return {
      bl: col,
      cc: contextStack,
      cC: problem,
      cE: row
    };
  };

  var _5E__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend = samples => {
    return _6D__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick(_6E__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points(samples).a);
  };

  var _5F__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw = (a, b) => {
    return {
      $: 4,
      a: a,
      b: b
    };
  };

  var _5G__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError = a => {
    return {
      $: 1,
      a: a
    };
  };

  _58__36elm_36core_36Maybe_36withDefault.f = _5f__36elm_36core_36Maybe_36withDefault_95raw;

  var _78__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw = (a, b, c, d, e) => {
    return {
      $: -1,
      a: a,
      b: b,
      c: c,
      d: d,
      e: e
    };
  };

  var _7x__36elm_36core_36Basics_36mul = a => {
    return b => _9N__95Basics_95mul_95raw(a, b);
  };

  var _9N__95Basics_95mul_95raw = (a, b) => {
    return a * b;
  };

  var _69__36elm_36core_36Basics_36round = _$9_Math_46round;
  _7x__36elm_36core_36Basics_36mul.a = 2;
  _7x__36elm_36core_36Basics_36mul.f = _9N__95Basics_95mul_95raw;
  var _81__36elm_36core_36Basics_36sqrt = _$A_Math_46sqrt;
  var _6i_ = _$B_Math_46pow;

  var _6E__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points = samples => {
    return _6m__36elm_36core_36Tuple_36mapSecond_95raw(_7I__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _7J__36elm_36core_36Tuple_36mapFirst_95raw(_7I__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _7K__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups(samples)));
  };

  _5y__36elm_36core_36Basics_36pow.a = 2;

  var _7E__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _5j__36elm_36parser_36Parser_36Advanced_36oneOf = parsers => {
    return s => _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, parsers);
  };

  var _7G__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line = a => {
    return b => _7h__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw(a, b);
  };

  var _7h__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw = (slope, intercept) => {
    return {
      a6: intercept,
      bc: slope
    };
  };

  _5y__36elm_36core_36Basics_36pow.f = _6i_;

  var _7I__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify = samples => {
    return _65__36elm_36core_36Dict_36foldr_95raw(_3J_F3((sampleSize, values, acc) => _82__95Utils_95ap(_1y__36elm_36core_36List_36map_95raw(b => _1B__95Utils_95Tuple2(sampleSize, b), values), acc)), _d_out, samples);
  };

  var _80__36elm_36core_36Basics_36isNaN = _$C_isNaN;

  var _7f__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros = $_M_sub();

  var _83__36elm_36core_36Dict_36foldl = a => {
    return b => c => _4O__36elm_36core_36Dict_36foldl_95raw(a, b, c);
  };

  _7G__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.a = 2;
  _7G__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.f = _7h__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw;
  _83__36elm_36core_36Dict_36foldl.a = 3;

  var _8S__95List_95sortBy_95raw = (f, xs) => {
    return _32__95List_95fromArray(_7b__95List_95toArray(xs).sort((a, b) => _46__95Utils_95cmp(f(a), f(b))));
  };

  _83__36elm_36core_36Dict_36foldl.f = _4O__36elm_36core_36Dict_36foldl_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$BrianHicks$elm_trend$Trend$Linear$line", _$2_Object_46defineProperty(_4s__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _A5__36elm_36core_36List_36sort = xs => {
    return _8S__95List_95sortBy_95raw(_1g__36elm_36core_36Basics_36identity, xs);
  };

  var _A6__36elm_36core_36Basics_36isInfinite = n => {
    return n === Infinity || n === -Infinity;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_isInfinite", _$2_Object_46defineProperty(_A6__36elm_36core_36Basics_36isInfinite, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _AA__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _BB__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile = a => {
    return b => _B9__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(a, b);
  };

  var _7j__36elm_36parser_36Parser_36Advanced_36Append_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _Co__36elm_36core_36List_36take_95raw = (n, list) => {
    return _YP__36elm_36core_36List_36takeFast_95raw(0, n, list);
  };

  var _a3__36elm_36core_36List_36takeTailRec_95raw = (n, list) => {
    return _2Y__36elm_36core_36List_36reverse(_bq__36elm_36core_36List_36takeReverse_95raw(n, list, _d_out));
  };

  _BB__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.a = 2;
  _BB__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.f = _B9__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw;
  _2r__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.a = 2;
  _2r__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.f = _3V__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw;

  var _8V_ = a => {
    return b => _9c_(a, b);
  };

  _2v__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group.a = 2;

  var _9c_ = (_v23, revStmts) => {
    return _An__36elm_36parser_36Parser_36Advanced_36Done(revStmts);
  };

  _2v__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group.f = _3c__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw;
  _2z__36elm_36core_36Basics_36always.a = 2;
  _2z__36elm_36core_36Basics_36always.f = _3d__36elm_36core_36Basics_36always_95raw;
  var _3e_ = {
    af: _d_out,
    T: _d_out
  };

  var _An__36elm_36parser_36Parser_36Advanced_36Done = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _3f__36elm_36parser_36Parser_36Advanced_36Empty = $_N_sub();

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_length", _$2_Object_46defineProperty(_33__36elm_36core_36String_36length, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _2J_ = $_H_sub();

  _8V_.a = 2;
  _8V_.f = _9c_;

  var _b1_expecting = $_I_sub("<");

  var _e6_expecting = $_I_sub(" ");

  var _ZQ__95Utils_95chr = c => {
    return c;
  };

  var _e9_expecting = $_I_sub(">");

  var _bH__95Parser_95isSubChar_95raw = (predicate, offset, string) => {
    return string.length <= offset ? -1 : (string.charCodeAt(offset) & 63488) === 55296 ? predicate(_ZQ__95Utils_95chr(string.substr(offset, 2))) ? offset + 2 : -1 : predicate(_ZQ__95Utils_95chr(string[offset])) ? string[offset] === "\n" ? -2 : offset + 1 : -1;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Char_toCode", _$2_Object_46defineProperty(_a7__36elm_36core_36Char_36toCode, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _8X_ = a => {
    return b => _9e_(a, b);
  };

  var _im__36elm_36core_36Char_36isAlpha = _char => {
    return _l3__36elm_36core_36Char_36isLower(_char) || _jY__36elm_36core_36Char_36isUpper(_char);
  };

  var _ha_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_ji_, s.h, s.cE, s.bl, s);
  };

  var _9e_ = (block, revStmts) => {
    return _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_Ar__36author_36project_36Markdown_36Parser_36possiblyMergeBlocks_95raw(revStmts, block));
  };

  var _in_ = $_I_sub("Alpha");

  var _ji_ = c => {
    return _lT__36elm_36core_36Char_36isAlphaNum(c) || c === "-";
  };

  var _lT__36elm_36core_36Char_36isAlphaNum = _char => {
    return _l3__36elm_36core_36Char_36isLower(_char) || _jY__36elm_36core_36Char_36isUpper(_char) || _m9__36elm_36core_36Char_36isDigit(_char);
  };

  var _6I__36elm_36parser_36Parser_36Expecting = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _Yb_parseB = $_7_factoryFunction.bind(null, "\n");

  var _AU__95String_95slice_95raw = (start, end, str) => {
    return str.slice(start, end);
  };

  var _BW_ = a => {
    return b => _CG_(a, b);
  };

  var _Ap__36elm_36parser_36Parser_36Advanced_36Loop = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _Ar__36author_36project_36Markdown_36Parser_36possiblyMergeBlocks_95raw = (state, newRawBlock) => {
    return {
      af: state.af,
      T: function () {
        var _v0 = _1B__95Utils_95Tuple2(newRawBlock, state.T);

        _v0$5: while (true) {
          if (_v0.b.b) {
            switch (_v0.a.$) {
              case 5:
                if (_v0.b.a.$ === 5) {
                  var block1 = _v0.a.a;
                  var _v1 = _v0.b;
                  var block2 = _v1.a.a;
                  var rest = _v1.b;
                  return _1I__95List_95Cons(_Bc__36author_36project_36Markdown_36RawBlock_36CodeBlock({
                    b6: _CJ__36author_36project_36Markdown_36Parser_36joinStringsPreserveAll_95raw(block2.b6, block1.b6),
                    bB: _4j__36elm_36core_36Maybe_36Nothing
                  }), rest);
                } else {
                  break _v0$5;
                }

              case 6:
                if (_v0.b.a.$ === 6) {
                  var block1 = _v0.a.a;
                  var _v2 = _v0.b;
                  var block2 = _v2.a.a;
                  var rest = _v2.b;
                  return _1I__95List_95Cons(_CK__36author_36project_36Markdown_36RawBlock_36IndentedCodeBlock(_CJ__36author_36project_36Markdown_36Parser_36joinStringsPreserveAll_95raw(block2, block1)), rest);
                } else {
                  break _v0$5;
                }

              case 10:
                if (_v0.b.a.$ === 10) {
                  var body1 = _v0.a.a;
                  var _v4 = _v0.b;
                  var body2 = _v4.a.a;
                  var rest = _v4.b;
                  return _1I__95List_95Cons(_CL__36author_36project_36Markdown_36RawBlock_36BlockQuote(_CJ__36author_36project_36Markdown_36Parser_36joinStringsPreserveAll_95raw(body2, body1)), rest);
                } else {
                  break _v0$5;
                }

              case 1:
                switch (_v0.b.a.$) {
                  case 10:
                    var body1 = _v0.a.a;
                    var _v3 = _v0.b;
                    var body2 = _v3.a.a;
                    var rest = _v3.b;
                    return _1I__95List_95Cons(_CL__36author_36project_36Markdown_36RawBlock_36BlockQuote(_CM__36author_36project_36Markdown_36Parser_36joinRawStringsWith_95raw("\n", body2, body1)), rest);

                  case 1:
                    var body1 = _v0.a.a;
                    var _v5 = _v0.b;
                    var body2 = _v5.a.a;
                    var rest = _v5.b;
                    return _1I__95List_95Cons(_CN__36author_36project_36Markdown_36RawBlock_36Body(_CM__36author_36project_36Markdown_36Parser_36joinRawStringsWith_95raw("\n", body2, body1)), rest);

                  default:
                    break _v0$5;
                }

              default:
                break _v0$5;
            }
          } else {
            break _v0$5;
          }
        }

        return _1I__95List_95Cons(newRawBlock, state.T);
      }()
    };
  };

  var _Br_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _Cf_);
  };

  var _5X__36elm_36parser_36Parser_36Problem = a => {
    return {
      $: 12,
      a: a
    };
  };

  var _CG_ = (rawLine, _v0) => {
    return _CN__36author_36project_36Markdown_36RawBlock_36Body(rawLine);
  };

  var _Bc__36author_36project_36Markdown_36RawBlock_36CodeBlock = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _CN__36author_36project_36Markdown_36RawBlock_36Body = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _jj_expecting = $_I_sub(":");

  var _CJ__36author_36project_36Markdown_36Parser_36joinStringsPreserveAll_95raw = (string1, string2) => {
    return string1 + ("\n" + string2);
  };

  var _CK__36author_36project_36Markdown_36RawBlock_36IndentedCodeBlock = a => {
    return {
      $: 6,
      a: a
    };
  };

  var _CL__36author_36project_36Markdown_36RawBlock_36BlockQuote = a => {
    return {
      $: 10,
      a: a
    };
  };

  var _jm_expecting = $_I_sub("@");

  var _aF_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _b4_);
  };

  var _fB_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _gL_);
  };

  var _jp_expecting = $_I_sub("\\");

  var _C9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a0 = original => {
    return original;
  };

  var _js_expecting = $_I_sub("+");

  var _jv_expecting = $_I_sub(".");

  var _Ba__36elm_36core_36Basics_36apL = a => {
    return b => _CR__36elm_36core_36Basics_36apL_95raw(a, b);
  };

  var _gL_ = $_D_sub(_hb_, {
    $: 1,
    a: _hc_,
    b: {
      $: 1,
      a: _hd_,
      b: {
        $: 1,
        a: _he_,
        b: {
          $: 1,
          a: _hf_,
          b: _d_out
        }
      }
    }
  });

  var _8Z_ = a => {
    return b => _9g_(a, b);
  };

  var _b4_ = $_D_sub(_br_, {
    $: 1,
    a: _bs_,
    b: {
      $: 1,
      a: _bt_,
      b: _d_out
    }
  });

  var _Yk_expecting = $_I_sub("a newline");

  var _d1_ = a => {
    return b => c => _eD_(a, b, c);
  };

  var _9g_ = (reference, revStmts) => {
    return _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_Aw__36author_36project_36Markdown_36Parser_36addReference_95raw(revStmts, reference));
  };

  var _bA_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _d1_, s);
  };

  var _As__36elm_36parser_36Parser_36Advanced_36changeContext_95raw = (newContext, s) => {
    return {
      bl: s.bl,
      l: newContext,
      p: s.p,
      h: s.h,
      cE: s.cE,
      b: s.b
    };
  };

  var _Au__36elm_36parser_36Parser_36Advanced_36Located_95raw = (row, col, context) => {
    return {
      bl: col,
      l: context,
      cE: row
    };
  };

  var _eD_ = (label, destination, title) => {
    return _1B__95Utils_95Tuple2(label, {
      cg: destination,
      cK: title
    });
  };

  var _Cf_ = $_D_sub(_DJ_, {
    $: 1,
    a: _1m_parse,
    b: _d_out
  });

  _BW_.a = 2;

  var _8O__36elm_36core_36String_36isEmpty = string => {
    return string === "";
  };

  var _CR__36elm_36core_36Basics_36apL_95raw = (f, x) => {
    return f(x);
  };

  var _a9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a1 = str => {
    return str.toLowerCase();
  };

  _BW_.f = _CG_;
  _8X_.a = 2;

  var _Aw__36author_36project_36Markdown_36Parser_36addReference_95raw = (state, linkRef) => {
    return {
      af: _1I__95List_95Cons(linkRef, state.af),
      T: state.T
    };
  };

  var _bu_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _d3_);
  };

  var _Xt__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a0 = string => {
    return encodeURIComponent(string);
  };

  _8X_.f = _9e_;

  var _eF_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  _d1_.a = 3;

  var _BY_ = _v0 => {
    return _CO__36author_36project_36Markdown_36RawBlock_36BlankLine;
  };

  var _cI__36elm_36parser_36Parser_36Advanced_36fromInfo_95raw = (row, col, x, context) => {
    return _4J__36elm_36parser_36Parser_36Advanced_36AddRight_95raw(_3f__36elm_36parser_36Parser_36Advanced_36Empty, _4K__36elm_36parser_36Parser_36Advanced_36DeadEnd_95raw(row, col, x, context));
  };

  _d1_.f = _eD_;

  var _hg_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _iw_);
  };

  var _Cs__95String_95contains_95raw = (sub, str) => {
    return str.indexOf(sub) > -1;
  };

  var _DD__36elm_36parser_36Parser_36Advanced_36succeed = a => {
    return s => _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, a, s);
  };

  var _l4_ = $_I_sub("space or tab");

  var _jy_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _l7_);
  };

  var _jz_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _lU_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _aH_parse = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _bD_);
  };

  var _d7_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  var _D0_parseB = $_8_factoryFunction.bind(null, "\n", _Yk_expecting);

  var _l7_ = $_D_sub(_iv_parseA, {
    $: 1,
    a: _lU_,
    b: _d_out
  });

  var _Ye_parse = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _ZU_);
  };

  var _Y0_parse = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  var _iw_ = $_D_sub(_iv_parseA, {
    $: 1,
    a: _jz_,
    b: _d_out
  });

  var _Y2_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _CL__36author_36project_36Markdown_36RawBlock_36BlockQuote, s);
  };

  var _d3_ = $_D_sub(_eE_, {
    $: 1,
    a: _eF_,
    b: _d_out
  });

  var _fD_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _gX_);
  };

  var _lC_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _lt__36author_36project_36Markdown_36Helpers_36prepareRefLabel, s);
  };

  var _gb_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _Xt__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a0, s);
  };

  var _D3_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _Y3_);
  };

  var _hh_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  var _hi_ = $_8_factoryFunction.bind(null, "\n", _Yk_expecting);

  var _1l_ = () => {
    return _31__36author_36project_36Markdown_36Parser_36rawBlockParser;
  };

  var _bz_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _4j__36elm_36core_36Maybe_36Nothing, s);
  };

  var _hj_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$author$project$Markdown$Helpers$cleanWhitespaces", _$2_Object_46defineProperty(_C9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a0, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw = (parseFunc, parseArg) => {
    return _2y__36elm_36parser_36Parser_36Advanced_36map2_95raw(_Ba__36elm_36core_36Basics_36apL, parseFunc, parseArg);
  };

  var _Yo_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _Zb__36author_36project_36Markdown_36Parser_36blockQuoteStarts);
  };

  var _Yu_ = $_8_factoryFunction.bind(null, " ", _aT_expecting);

  var _Y7_parseA = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _Yx_);
  };

  var _Yv_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _Bd_ = _v24 => {
    return _CU__36author_36project_36Markdown_36RawBlock_36ThematicBreak;
  };

  var _gd_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  var _Yw_parse = $_7_factoryFunction.bind(null, "\n");

  var _fG_parseA = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_hr_, s.h, s.cE, s.bl, s);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_toLower", _$2_Object_46defineProperty(_a9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a1, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _lt__36author_36project_36Markdown_36Helpers_36prepareRefLabel = c => {
    return _4r__36elm_36core_36Basics_36composeR_95raw(_C9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a0, _a9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a1, c);
  };

  var _mG_expecting = $_I_sub("a `[`");

  var _fF_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _ge_);
  };

  var _CT_parse = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _D5_);
  };

  var _n6_expecting = $_I_sub("a `]`");

  var _gk_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _hs_);
  };

  var _hm_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_j4_, s.h, s.cE, s.bl, s);
  };

  var _aY__36elm_36parser_36Parser_36Advanced_36getChompedString = parser => {
    return _cH__36elm_36parser_36Parser_36Advanced_36mapChompedString_95raw(_2z__36elm_36core_36Basics_36always, parser);
  };

  var _aa__36elm_36parser_36Parser_36Advanced_36Token_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _j3_parseB = $_8_factoryFunction.bind(null, ">", _lD_expecting);

  var _ad__36elm_36parser_36Parser_36ExpectingSymbol = a => {
    return {
      $: 8,
      a: a
    };
  };

  var _ae__36elm_36parser_36Parser_36Advanced_36chompUntilEndOr = str => {
    return function (s) {
      var _v0 = _YI__95Parser_95findSubString_95raw(str, s.h, s.cE, s.bl, s.b);

      var newOffset = _v0.a;
      var newRow = _v0.b;
      var newCol = _v0.c;
      var adjustedOffset = newOffset < 0 ? _33__36elm_36core_36String_36length(s.b) : newOffset;
      return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(_46__95Utils_95cmp(s.h, adjustedOffset) < 0, 0, {
        bl: newCol,
        l: s.l,
        p: s.p,
        h: adjustedOffset,
        cE: newRow,
        b: s.b
      });
    };
  };

  var _af__36elm_36parser_36Parser_36Advanced_36chompWhile = isGood => {
    return s => _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(isGood, s.h, s.cE, s.bl, s);
  };

  var _Y9_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _Z2_);
  };

  var _j4_ = c => {
    return !_k9__36author_36project_36Helpers_36isGfmWhitespace(c);
  };

  var _c6_ = delimiter => {
    return _1B__95Utils_95Tuple2("`", delimiter);
  };

  var _d9_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _eL_);
  };

  var _c7_ = delimiter => {
    return _1B__95Utils_95Tuple2("~", delimiter);
  };

  var _Be_ = c => {
    return _4r__36elm_36core_36Basics_36composeR_95raw(_D9_, _DA__36author_36project_36Markdown_36RawBlock_36UnorderedListBlock, c);
  };

  var _md_expecting = $_I_sub("]:");

  var _hr_ = c => {
    return c !== "\n" && _k9__36author_36project_36Helpers_36isGfmWhitespace(c);
  };

  var _31__36author_36project_36Markdown_36Parser_36rawBlockParser = s => {
    return _4I__36elm_36parser_36Parser_36Advanced_36loopHelp_95raw(false, _3e_, _4e__36author_36project_36Markdown_36Parser_36stepRawBlock, s);
  };

  _Ba__36elm_36core_36Basics_36apL.a = 2;
  _Ba__36elm_36core_36Basics_36apL.f = _CR__36elm_36core_36Basics_36apL_95raw;

  var _hq_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _4j__36elm_36core_36Maybe_36Nothing, s);
  };

  var _c8_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _dD_);
  };

  var _6Q__36elm_36core_36String_36join_95raw = (sep, chunks) => {
    return _7a__95String_95join_95raw(sep, _7b__95List_95toArray(chunks));
  };

  var _gX_ = $_D_sub(_hi_, {
    $: 1,
    a: _hj_,
    b: _d_out
  });

  var _j8_ = $_8_factoryFunction.bind(null, "\n", _Yk_expecting);

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Url_percentEncode", _$2_Object_46defineProperty(_Xt__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a0, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _j9_ = s => {
    return _2c__95Utils_95eq(_33__36elm_36core_36String_36length(s.b), s.h) ? _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s) : _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, _kA_));
  };

  var _c9_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _dI_);
  };

  var _k1_expecting = $_I_sub("a `<`");

  var _eR_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _fN_);
  };

  var _5O__36author_36project_36Markdown_36Block_36HtmlBlock = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _D9_ = b => {
    return _1y__36elm_36core_36List_36map_95raw(_Z9_parseListItem, b);
  };

  var _DA__36author_36project_36Markdown_36RawBlock_36UnorderedListBlock = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _eT_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _7a__95String_95join_95raw = (sep, strs) => {
    return strs.join(sep);
  };

  var _lD_expecting = $_I_sub("a `>`");

  var _cA_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _dN_);
  };

  var _Bf_ = $_6_factoryFunction.bind(null);

  var _lG_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_k9__36author_36project_36Helpers_36isGfmWhitespace, s.h, s.cE, s.bl, s);
  };

  var _eU_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_gy_, s.h, s.cE, s.bl, s);
  };

  var _3q__36elm_36core_36List_36concatMap_95raw = (f, list) => {
    return _4y__36elm_36core_36List_36concat(_1y__36elm_36core_36List_36map_95raw(f, list));
  };

  var _fM_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  var _Zp_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _bP_parseSubsequentItems, s);
  };

  var _aX_parseA = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _bS_);
  };

  var _gp_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_jA_, s.h, s.cE, s.bl, s);
  };

  var _cB_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _dS_);
  };

  var _6J__36elm_36core_36String_36fromInt = number => {
    return number + "";
  };

  var _5k_ = () => {
    return _6R__36author_36project_36Markdown_36Parser_36whenPreviousWasBody;
  };

  var _eW_ = s => {
    return _2c__95Utils_95eq(_33__36elm_36core_36String_36length(s.b), s.h) ? _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s) : _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, _fU_));
  };

  var _j5_ = $_J_sub();

  var _6k__36author_36project_36Markdown_36Parser_36deadEndToString = deadEnd => {
    return "Problem at row " + (_6J__36elm_36core_36String_36fromInt(deadEnd.cE) + ("\n" + _7i__36author_36project_36Markdown_36Parser_36problemToString(deadEnd.cC)));
  };

  var _gr_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_jB_, s.h, s.cE, s.bl, s);
  };

  var _eX_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_h2_, s.h, s.cE, s.bl, s);
  };

  var _bD_ = $_D_sub(_bw_, {
    $: 1,
    a: _bx_,
    b: _d_out
  });

  var _la_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _5D__36elm_36core_36Maybe_36Just, s);
  };

  var _eZ_ = s => {
    return _2c__95Utils_95eq(_33__36elm_36core_36String_36length(s.b), s.h) ? _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s) : _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, _fZ_));
  };

  var _bP_parseSubsequentItems = a => {
    return b => _cC_parseSubsequentItems_95raw(a, b);
  };

  var _4y__36elm_36core_36List_36concat = lists => {
    return _39__36elm_36core_36List_36foldr_95raw(_60__36elm_36core_36List_36append, _d_out, lists);
  };

  var _AV__36elm_36core_36String_36dropLeft_95raw = (n, string) => {
    return n < 1 ? string : _AU__95String_95slice_95raw(n, _33__36elm_36core_36String_36length(string), string);
  };

  var _DB__36author_36project_36Markdown_36RawBlock_36OrderedListBlock_95raw = (a, b) => {
    return {
      $: 4,
      a: a,
      b: b
    };
  };

  var _lX_ = $_I_sub("gfm whitespace");

  var _gs_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _ea_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_h6_, s.h, s.cE, s.bl, s);
  };

  var _5J__36author_36project_36Markdown_36Parser_36ParsedBlock = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _5K__36author_36project_36Markdown_36Block_36Heading_95raw = (a, b) => {
    return {
      $: 4,
      a: a,
      b: b
    };
  };

  var _mg_expecting = $_I_sub("a double quote");

  var _n9_parseB = $_8_factoryFunction.bind(null, "\"", _mg_expecting);

  var _cG_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _ej__36author_36project_36Markdown_36ListItem_36PlainItem, s);
  };

  var _8A__36author_36project_36Markdown_36Block_36HtmlElement_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  var _88__36author_36project_36Markdown_36Block_36HtmlComment = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _7m_parse = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _8b_);
  };

  var _ec_ = s => {
    return _2c__95Utils_95eq(_33__36elm_36core_36String_36length(s.b), s.h) ? _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s) : _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, _fe_));
  };

  var _5l_ = () => {
    return _6Z__36author_36project_36Markdown_36Parser_36whenPreviousWasNotBody;
  };

  var _8B__36author_36project_36Markdown_36Block_36Cdata = a => {
    return {
      $: 4,
      a: a
    };
  };

  var _8C__36author_36project_36Markdown_36Block_36ProcessingInstruction = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _8D__36author_36project_36Markdown_36Block_36HtmlDeclaration_95raw = (a, b) => {
    return {
      $: 3,
      a: a,
      b: b
    };
  };

  var _lb_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _5D__36elm_36core_36Maybe_36Just, s);
  };

  var _cC_parseSubsequentItems_95raw = (listMarker, firstItem) => {
    return _ed__36elm_36parser_36Parser_36Advanced_36loop_95raw(_d_out, _q_A2(_ef__36author_36project_36Markdown_36UnorderedList_36statementsHelp, _eh__36author_36project_36Markdown_36UnorderedList_36singleItemParser(listMarker), firstItem));
  };

  var _60__36elm_36core_36List_36append = a => {
    return b => _6j__36elm_36core_36List_36append_95raw(a, b);
  };

  var _gy_ = c => {
    return _2c__95Utils_95eq(c, "-") || _gt__36author_36project_36ThematicBreak_36isSpace(c);
  };

  var _nP__36author_36project_36Markdown_36LinkReferenceDefinition_36hasNoBlankLine = str => {
    return _Cs__95String_95contains_95raw("\n\n", str) ? _1p__36elm_36parser_36Parser_36Advanced_36problem(_6I__36elm_36parser_36Parser_36Expecting("no blank line")) : _DD__36elm_36parser_36Parser_36Advanced_36succeed(str);
  };

  var _nZ_parse = $_A_factoryFunction.bind(null, "\"", _mg_expecting);

  var _ed__36elm_36parser_36Parser_36Advanced_36loop_95raw = (state, callback) => {
    return s => _4I__36elm_36parser_36Parser_36Advanced_36loopHelp_95raw(false, state, callback, s);
  };

  var _ef__36author_36project_36Markdown_36UnorderedList_36statementsHelp = a => {
    return b => c => _fn__36author_36project_36Markdown_36UnorderedList_36statementsHelp_95raw(a, b, c);
  };

  var _6L__36elm_36core_36Dict_36fromList = assocs => {
    return _3i__36elm_36core_36List_36foldl_95raw(_3A_F2(function (_v0, dict) {
      var key = _v0.a;
      var value = _v0.b;
      return _6B__36elm_36core_36Dict_36insert_95raw(key, value, dict);
    }), _3Y_nRight, assocs);
  };

  var _6M__36elm_36core_36Tuple_36mapSecond = a => {
    return b => _6m__36elm_36core_36Tuple_36mapSecond_95raw(a, b);
  };

  var _kA_ = $_I_sub("end of file");

  var _8t_ = a => {
    return b => _9q_(a, b);
  };

  var _nA_parseB = $_8_factoryFunction.bind(null, "'", _mk_expecting);

  var _ZC_parse = $_7_factoryFunction.bind(null, "\n");

  var _h2_ = c => {
    return _2c__95Utils_95eq(c, "*") || _gt__36author_36project_36ThematicBreak_36isSpace(c);
  };

  var _Zr_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _bZ__36author_36project_36Markdown_36RawBlock_36Heading, s);
  };

  var _9q_ = (block, revStmts) => {
    return _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_Ar__36author_36project_36Markdown_36Parser_36possiblyMergeBlocks_95raw(revStmts, block));
  };

  var _hs_ = $_D_sub(_j8_, {
    $: 1,
    a: _j9_,
    b: _d_out
  });

  var _8v_ = a => {
    return b => _9r_(a, b);
  };

  var _mk_expecting = $_I_sub("a single quote");

  var _7o_parse = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _91_);
  };

  var _bY_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _cM_);
  };

  var _8x_ = a => {
    return b => _9s_(a, b);
  };

  var _Zt_ = a => {
    return b => _ak_(a, b);
  };

  var _7L__36author_36project_36Markdown_36Block_36Text = a => {
    return {
      $: 6,
      a: a
    };
  };

  var _ZD__36author_36project_36HtmlParser_36Cdata = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _7M__36author_36project_36Markdown_36Block_36CodeSpan = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _7N__36author_36project_36Markdown_36Block_36Link_95raw = (a, b, c) => {
    return {
      $: 1,
      a: a,
      b: b,
      c: c
    };
  };

  var _7O__36author_36project_36Markdown_36Block_36Image_95raw = (a, b, c) => {
    return {
      $: 2,
      a: a,
      b: b,
      c: c
    };
  };

  var _7P__36author_36project_36Markdown_36Block_36HtmlInline = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _8z_ = a => {
    return b => _9t_(a, b);
  };

  var _ei_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _hF__36author_36project_36Markdown_36ListItem_36TaskItem, s);
  };

  var _7R__36author_36project_36Markdown_36Block_36Emphasis = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _7S__36author_36project_36Markdown_36Block_36Strong = a => {
    return {
      $: 4,
      a: a
    };
  };

  var _7T__36elm_36core_36String_36trim = str => {
    return str.trim();
  };

  var _9r_ = (_v25, revStmts) => {
    return _An__36elm_36parser_36Parser_36Advanced_36Done(revStmts);
  };

  var _fn__36author_36project_36Markdown_36UnorderedList_36statementsHelp_95raw = (itemParser, firstItem, revStmts) => {
    return _5j__36elm_36parser_36Parser_36Advanced_36oneOf({
      $: 1,
      a: _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(stmt => _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_1I__95List_95Cons(stmt, revStmts)), itemParser),
      b: {
        $: 1,
        a: _DD__36elm_36parser_36Parser_36Advanced_36succeed(_An__36elm_36parser_36Parser_36Advanced_36Done(_1I__95List_95Cons(firstItem, _2Y__36elm_36core_36List_36reverse(revStmts)))),
        b: _d_out
      }
    });
  };

  var _bX_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _dY__36author_36project_36Markdown_36OrderedList_36parseSubsequentItems, s);
  };

  var _9s_ = (block, revStmts) => {
    return _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_Ar__36author_36project_36Markdown_36Parser_36possiblyMergeBlocks_95raw(revStmts, block));
  };

  var _B3_parseA = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _Bg_);
  };

  var _jA_ = c => {
    return c === "`";
  };

  var _89__36author_36project_36Markdown_36Parser_36textNodeToBlocks = textNodeValue => {
    return _5u__36elm_36core_36Result_36withDefault_95raw(_d_out, _1D__36author_36project_36Markdown_36Parser_36parse(textNodeValue));
  };

  var _9t_ = (reference, revStmts) => {
    return _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_Aw__36author_36project_36Markdown_36Parser_36addReference_95raw(revStmts, reference));
  };

  var _Zw_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _be__36author_36project_36HtmlParser_36ProcessingInstruction, s);
  };

  var _na_parse = $_A_factoryFunction.bind(null, "'", _mk_expecting);

  var _h6_ = c => {
    return _2c__95Utils_95eq(c, "_") || _gt__36author_36project_36ThematicBreak_36isSpace(c);
  };

  var _9L_ = a => {
    return b => _A0_(a, b);
  };

  var _Zx_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _bh__36author_36project_36HtmlParser_36Comment, s);
  };

  var _ej__36author_36project_36Markdown_36ListItem_36PlainItem = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _jB_ = c => {
    return c === "~";
  };

  var _eh__36author_36project_36Markdown_36UnorderedList_36singleItemParser = listMarker => {
    return _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_DD__36elm_36parser_36Parser_36Advanced_36succeed(_1g__36elm_36core_36Basics_36identity), _hD__36elm_36parser_36Parser_36Advanced_36backtrackable(_ab__36elm_36parser_36Parser_36Advanced_36symbol(listMarker))), _hE__36author_36project_36Markdown_36UnorderedList_36itemBody);
  };

  var _YV__36elm_36core_36String_36fromChar = _char => {
    return _aB__95String_95cons_95raw(_char, "");
  };

  var _8F__36author_36project_36Markdown_36InlineParser_36findAngleBracketRTokens = str => {
    return _AC__36elm_36core_36List_36filterMap_95raw(_AD__36author_36project_36Markdown_36InlineParser_36regMatchToAngleBracketRToken, _AE__95Regex_95findAtMost_95raw(1 / 0, _9P__36author_36project_36Markdown_36InlineParser_36angleBracketRTokenRegex, str));
  };

  var _YW__36elm_36core_36Char_36fromCode = code => {
    return _ZQ__95Utils_95chr(code < 0 || 1114111 < code ? "\uFFFD" : code <= 65535 ? String.fromCharCode(code) : (code -= 65536, String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
  };

  var _ge_ = $_D_sub(_ho_inDoubleQuotes, {
    $: 1,
    a: _hp_inSingleQuotes,
    b: {
      $: 1,
      a: _hq_,
      b: _d_out
    }
  });

  var _8G__36author_36project_36Markdown_36InlineParser_36findAngleBracketLTokens = str => {
    return _AC__36elm_36core_36List_36filterMap_95raw(_AF__36author_36project_36Markdown_36InlineParser_36regMatchToAngleBracketLToken, _AE__95Regex_95findAtMost_95raw(1 / 0, _9Q__36author_36project_36Markdown_36InlineParser_36angleBracketLTokenRegex, str));
  };

  var _ak_ = (headingText, _v0) => {
    return _cV__36author_36project_36Markdown_36Parser_36dropTrailingHashes(_cY__36elm_36core_36String_36trimLeft(headingText));
  };

  var _7V__36author_36project_36Markdown_36InlineParser_36tokenize = rawText => {
    return _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(_8F__36author_36project_36Markdown_36InlineParser_36findAngleBracketRTokens(rawText), _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(_8G__36author_36project_36Markdown_36InlineParser_36findAngleBracketLTokens(rawText), _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(_8H__36author_36project_36Markdown_36InlineParser_36findHardBreakTokens(rawText), _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(_8I__36author_36project_36Markdown_36InlineParser_36findLinkImageCloseTokens(rawText), _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(_8J__36author_36project_36Markdown_36InlineParser_36findLinkImageOpenTokens(rawText), _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(_8K__36author_36project_36Markdown_36InlineParser_36findUnderlineEmphasisTokens(rawText), _8E__36author_36project_36Markdown_36InlineParser_36mergeByIndex_95raw(_8L__36author_36project_36Markdown_36InlineParser_36findAsteriskEmphasisTokens(rawText), _8M__36author_36project_36Markdown_36InlineParser_36findCodeTokens(rawText))))))));
  };

  var _A0_ = (block, revStmts) => {
    return _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_Ar__36author_36project_36Markdown_36Parser_36possiblyMergeBlocks_95raw(revStmts, block));
  };

  var _7W__36author_36project_36Markdown_36InlineParser_36matchesToInlines = matches => {
    return _1y__36elm_36core_36List_36map_95raw(_8N__36author_36project_36Markdown_36InlineParser_36matchToInline, matches);
  };

  var _bZ__36author_36project_36Markdown_36RawBlock_36Heading = a => {
    return b => _cQ__36author_36project_36Markdown_36RawBlock_36Heading_95raw(a, b);
  };

  var _8H__36author_36project_36Markdown_36InlineParser_36findHardBreakTokens = str => {
    return _AC__36elm_36core_36List_36filterMap_95raw(_AH__36author_36project_36Markdown_36InlineParser_36regMatchToHardBreakToken, _AE__95Regex_95findAtMost_95raw(1 / 0, _9S__36author_36project_36Markdown_36InlineParser_36hardBreakTokenRegex, str));
  };

  var _ZU_ = $_D_sub(_aJ_, {
    $: 1,
    a: _aK_,
    b: _d_out
  });

  _8Z_.a = 2;

  var _8I__36author_36project_36Markdown_36InlineParser_36findLinkImageCloseTokens = str => {
    return _AC__36elm_36core_36List_36filterMap_95raw(_AI__36author_36project_36Markdown_36InlineParser_36regMatchToLinkImageCloseToken, _AE__95Regex_95findAtMost_95raw(1 / 0, _9T__36author_36project_36Markdown_36InlineParser_36linkImageCloseTokenRegex, str));
  };

  var _Zz_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  _8Z_.f = _9g_;

  var _8J__36author_36project_36Markdown_36InlineParser_36findLinkImageOpenTokens = str => {
    return _AC__36elm_36core_36List_36filterMap_95raw(_AJ__36author_36project_36Markdown_36InlineParser_36regMatchToLinkImageOpenToken, _AE__95Regex_95findAtMost_95raw(1 / 0, _9U__36author_36project_36Markdown_36InlineParser_36linkImageOpenTokenRegex, str));
  };

  var _dc_ = $_8_factoryFunction.bind(null, "\n", _Yk_expecting);

  var _Ce_parse = $_7_factoryFunction.bind(null, "\n");

  var _CO__36author_36project_36Markdown_36RawBlock_36BlankLine = $_O_sub();

  var _dd_ = s => {
    return _2c__95Utils_95eq(_33__36elm_36core_36String_36length(s.b), s.h) ? _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s) : _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, _en_));
  };

  var _dY__36author_36project_36Markdown_36OrderedList_36parseSubsequentItems = a => {
    return b => c => _ek__36author_36project_36Markdown_36OrderedList_36parseSubsequentItems_95raw(a, b, c);
  };

  var _bd_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  var _c0_expecting = $_I_sub(">");

  var _8K__36author_36project_36Markdown_36InlineParser_36findUnderlineEmphasisTokens = str => {
    return _AC__36elm_36core_36List_36filterMap_95raw(_q_A2(_AK__36author_36project_36Markdown_36InlineParser_36regMatchToEmphasisToken, "_", str), _AE__95Regex_95findAtMost_95raw(1 / 0, _9V__36author_36project_36Markdown_36InlineParser_36underlineEmphasisTokenRegex, str));
  };

  var _fq_parse = $_7_factoryFunction.bind(null, "\n");

  var _8L__36author_36project_36Markdown_36InlineParser_36findAsteriskEmphasisTokens = str => {
    return _AC__36elm_36core_36List_36filterMap_95raw(_q_A2(_AK__36author_36project_36Markdown_36InlineParser_36regMatchToEmphasisToken, "*", str), _AE__95Regex_95findAtMost_95raw(1 / 0, _9W__36author_36project_36Markdown_36InlineParser_36asteriskEmphasisTokenRegex, str));
  };

  var _be__36author_36project_36HtmlParser_36ProcessingInstruction = a => {
    return {
      $: 4,
      a: a
    };
  };

  var _8M__36author_36project_36Markdown_36InlineParser_36findCodeTokens = str => {
    return _AC__36elm_36core_36List_36filterMap_95raw(_AM__36author_36project_36Markdown_36InlineParser_36regMatchToCodeToken, _AE__95Regex_95findAtMost_95raw(1 / 0, _9X__36author_36project_36Markdown_36InlineParser_36codeTokenRegex, str));
  };

  var _ee_parse = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _fh_);
  };

  var _DF_ = a => {
    return b => _YJ_(a, b);
  };

  var _DH__36author_36project_36Markdown_36Parser_36nodesToBlocks = children => {
    return _ZI__36author_36project_36Markdown_36Parser_36nodesToBlocksHelp_95raw(children, _d_out);
  };

  var _DI__36author_36project_36Markdown_36RawBlock_36Html = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _AC__36elm_36core_36List_36filterMap_95raw = (f, xs) => {
    return _39__36elm_36core_36List_36foldr_95raw(_BF__36elm_36core_36List_36maybeCons(f), _d_out, xs);
  };

  var _jC_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_gt__36author_36project_36ThematicBreak_36isSpace, s.h, s.cE, s.bl, s);
  };

  var _Bt_ = _v26 => {
    return _CU__36author_36project_36Markdown_36RawBlock_36ThematicBreak;
  };

  var _aB__95String_95cons_95raw = (chr, str) => {
    return chr + str;
  };

  var _bh__36author_36project_36HtmlParser_36Comment = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _Bu_ = $_6_factoryFunction.bind(null);

  var _cL_parse = $_7_factoryFunction.bind(null, "\n");

  var _Cj_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _CK__36author_36project_36Markdown_36RawBlock_36IndentedCodeBlock, s);
  };

  var _cQ__36author_36project_36Markdown_36RawBlock_36Heading_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _BF__36elm_36core_36List_36maybeCons = a => {
    return b => c => _Bv__36elm_36core_36List_36maybeCons_95raw(a, b, c);
  };

  var _aT_expecting = $_I_sub("a space");

  var _YJ_ = (rawLine, _v0) => {
    return _CN__36author_36project_36Markdown_36RawBlock_36Body(rawLine);
  };

  var _BH__36author_36project_36Markdown_36Helpers_36isEven = _int => {
    return !_4C__95Basics_95modBy_95raw(2, _int);
  };

  var _BI__36author_36project_36Markdown_36InlineParser_36AngleBracketClose = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _BJ__36elm_36regex_36Regex_36Match_95raw = (match, index, number, submatches) => {
    return {
      c: index,
      aG: match,
      cy: number,
      be: submatches
    };
  };

  var _AK__36author_36project_36Markdown_36InlineParser_36regMatchToEmphasisToken = a => {
    return b => c => _Af__36author_36project_36Markdown_36InlineParser_36regMatchToEmphasisToken_95raw(a, b, c);
  };

  var _hF__36author_36project_36Markdown_36ListItem_36TaskItem = a => {
    return b => _iS__36author_36project_36Markdown_36ListItem_36TaskItem_95raw(a, b);
  };

  var _bk_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _dm__36author_36project_36HtmlParser_36Declaration, s);
  };

  var _hw_expecting = $_I_sub(" >");

  var _cU_parse = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_eq__36author_36project_36Markdown_36Parser_36isHash, s.h, s.cE, s.bl, s);
  };

  var _hz_expecting = $_I_sub("  >");

  var _AN__36author_36project_36Markdown_36Inline_36Text = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _cV__36author_36project_36Markdown_36Parser_36dropTrailingHashes = headingString => {
    return _er__95String_95endsWith_95raw("#", headingString) ? _cV__36author_36project_36Markdown_36Parser_36dropTrailingHashes(_es__36elm_36core_36String_36trimRight(_eu__36elm_36core_36String_36dropRight_95raw(1, headingString))) : headingString;
  };

  var _AO__36author_36project_36Markdown_36Inline_36CodeInline = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _AP__36author_36project_36Markdown_36Inline_36Link_95raw = (a, b, c) => {
    return {
      $: 3,
      a: a,
      b: b,
      c: c
    };
  };

  var _AQ__36author_36project_36Markdown_36Inline_36Image_95raw = (a, b, c) => {
    return {
      $: 4,
      a: a,
      b: b,
      c: c
    };
  };

  var _AR__36author_36project_36Markdown_36Inline_36HtmlInline = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _AS__36author_36project_36Markdown_36Inline_36Emphasis_95raw = (a, b) => {
    return {
      $: 6,
      a: a,
      b: b
    };
  };

  var _cY__36elm_36core_36String_36trimLeft = str => {
    return str.replace(/^\s+/, "");
  };

  var _i2_expecting = $_I_sub("   >");

  var _BK__36author_36project_36Markdown_36InlineParser_36LinkOpenToken = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _eL_ = $_D_sub(_fH_, {
    $: 1,
    a: _fI_,
    b: {
      $: 1,
      a: _fJ_,
      b: _d_out
    }
  });

  var _Zb__36author_36project_36Markdown_36Parser_36blockQuoteStarts = $_D_sub(_aM_, {
    $: 1,
    a: _aN_,
    b: _d_out
  });

  var _Y3_ = $_D_sub(_Yu_, {
    $: 1,
    a: _Yv_,
    b: _d_out
  });

  var _i5_expecting = $_K_sub("```");

  var _i8_expecting = $_K_sub("~~~");

  var _cc_parse = $_7_factoryFunction.bind(null, "?>");

  var _DK_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _YK_);
  };

  var _hE__36author_36project_36Markdown_36UnorderedList_36itemBody = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _iO_);
  };

  var _iS__36author_36project_36Markdown_36ListItem_36TaskItem_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _cg_parse = $_7_factoryFunction.bind(null, "-->");

  var _BL__36author_36project_36Markdown_36InlineParser_36CodeToken = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _mN_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _Yx_ = $_D_sub(_Zj_, {
    $: 1,
    a: _Zk_,
    b: _d_out
  });

  var _ek__36author_36project_36Markdown_36OrderedList_36parseSubsequentItems_95raw = (startingIndex, listMarker, firstItem) => {
    return _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(items => _1B__95Utils_95Tuple2(startingIndex, _1I__95List_95Cons(firstItem, items)), _ed__36elm_36parser_36Parser_36Advanced_36loop_95raw(_d_out, _hI__36author_36project_36Markdown_36OrderedList_36statementsHelp(_hK__36author_36project_36Markdown_36OrderedList_36singleItemParser(listMarker))));
  };

  var _BM__36author_36project_36Markdown_36Helpers_36replaceEscapable = d => {
    return _Cq__95Regex_95replaceAtMost_95raw(1 / 0, _C2__36author_36project_36Markdown_36Helpers_36escapableRegex, _Cr_, d);
  };

  var _BN__36author_36project_36Markdown_36Helpers_36containsAmpersand = string => {
    return _Cs__95String_95contains_95raw("&", string);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$elm$parser$Parser$Advanced$token", _$2_Object_46defineProperty(_ab__36elm_36parser_36Parser_36Advanced_36symbol, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _BO__36author_36project_36Markdown_36Entity_36replaceHexadecimals = d => {
    return _Cq__95Regex_95replaceAtMost_95raw(1 / 0, _C3__36author_36project_36Markdown_36Entity_36hexadecimalRegex, _Ct__36author_36project_36Markdown_36Entity_36replaceHexadecimal, d);
  };

  var _gu_ = $_I_sub("Space");

  var _BP__36author_36project_36Markdown_36Entity_36replaceDecimals = d => {
    return _Cq__95Regex_95replaceAtMost_95raw(1 / 0, _C4__36author_36project_36Markdown_36Entity_36decimalRegex, _Cu__36author_36project_36Markdown_36Entity_36replaceDecimal, d);
  };

  var _fN_ = $_D_sub(_eS_parseB, {
    $: 1,
    a: _gs_,
    b: _d_out
  });

  var _C6__36author_36project_36Markdown_36InlineParser_36EmphasisToken_95raw = (a, b) => {
    return {
      $: 7,
      a: a,
      b: b
    };
  };

  var _ck_parse = $_7_factoryFunction.bind(null, ">");

  var _mO_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _dm__36author_36project_36HtmlParser_36Declaration = a => {
    return b => _ez__36author_36project_36HtmlParser_36Declaration_95raw(a, b);
  };

  var _iT_parseA = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _jO_);
  };

  var _dD_ = $_D_sub(_eS_parseB, {
    $: 1,
    a: _eT_,
    b: _d_out
  });

  var _hC_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  var _em_parse = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _fr_);
  };

  var _jD_expecting = $_I_sub("-");

  var _ZL_parse = $_7_factoryFunction.bind(null, "\n");

  var _gz_expecting = $_I_sub("\n");

  var _hI__36author_36project_36Markdown_36OrderedList_36statementsHelp = a => {
    return b => _iU__36author_36project_36Markdown_36OrderedList_36statementsHelp_95raw(a, b);
  };

  var _fU_ = $_I_sub("end");

  var _dt_ = a => {
    return b => _f4_(a, b);
  };

  var _er__95String_95endsWith_95raw = (sub, str) => {
    return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
  };

  var _es__36elm_36core_36String_36trimRight = str => {
    return str.replace(/\s+$/, "");
  };

  var _bn__36author_36project_36HtmlParser_36elementContinuation = startTagName => {
    return _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_DD__36elm_36parser_36Parser_36Advanced_36succeed(_dv__36author_36project_36HtmlParser_36Element(startTagName)), _dx__36author_36project_36HtmlParser_36whiteSpace), _1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_dy__36author_36project_36HtmlParser_36attributes, _dx__36author_36project_36HtmlParser_36whiteSpace)), _5j__36elm_36parser_36Parser_36Advanced_36oneOf({
      $: 1,
      a: _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(_v0 => _d_out, _dz__36author_36project_36HtmlParser_36symbol("/>")),
      b: {
        $: 1,
        a: _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_DD__36elm_36parser_36Parser_36Advanced_36succeed(_1g__36elm_36core_36Basics_36identity), _dz__36author_36project_36HtmlParser_36symbol(">")), _e0__36author_36project_36HtmlParser_36children(startTagName)),
        b: _d_out
      }
    }));
  };

  var _dv__36author_36project_36HtmlParser_36Element = a => {
    return b => c => _f5__36author_36project_36HtmlParser_36Element_95raw(a, b, c);
  };

  var _mP_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _Xm__36author_36project_36Markdown_36InlineParser_36containSpace_95a0 = a => {
    return b => _YZ_(a, b);
  };

  var _eu__36elm_36core_36String_36dropRight_95raw = (n, string) => {
    return n < 1 ? string : _AU__95String_95slice_95raw(0, -n, string);
  };

  var _dx__36author_36project_36HtmlParser_36whiteSpace = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_g1__36author_36project_36HtmlParser_36isWhitespace, s.h, s.cE, s.bl, s);
  };

  var _Xo__36author_36project_36Markdown_36InlineParser_36containPunctuation_95a0 = a => {
    return b => _Ya_(a, b);
  };

  var _dI_ = $_D_sub(_eV_, {
    $: 1,
    a: _eW_,
    b: _d_out
  });

  var _jF_expecting = $_I_sub("*");

  var _dz__36author_36project_36HtmlParser_36symbol = str => {
    return _ab__36elm_36parser_36Parser_36Advanced_36symbol(_aa__36elm_36parser_36Parser_36Advanced_36Token_95raw(str, _ad__36elm_36parser_36Parser_36ExpectingSymbol(str)));
  };

  var _h3_expecting = $_I_sub("\n");

  var _jU_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  var _ex_parse = $_7_factoryFunction.bind(null, "]]>");

  var _fZ_ = $_I_sub("end");

  var _YZ_ = (c, accum) => {
    return accum || _aC__36author_36project_36Markdown_36InlineParser_36isWhitespace(c);
  };

  var _dN_ = $_D_sub(_eY_, {
    $: 1,
    a: _eZ_,
    b: _d_out
  });

  var _jH_expecting = $_I_sub("_");

  var _Ya_ = (c, accum) => {
    return accum || _aD__36author_36project_36Markdown_36InlineParser_36isPunctuation(c);
  };

  var _m0_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  var _hK__36author_36project_36Markdown_36OrderedList_36singleItemParser = listMarker => {
    return _Xw__36elm_36parser_36Parser_36Advanced_36keeper_95raw(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_DD__36elm_36parser_36Parser_36Advanced_36succeed(_1g__36elm_36core_36Basics_36identity), _hD__36elm_36parser_36Parser_36Advanced_36backtrackable(_1k__36elm_36parser_36Parser_36Advanced_36ignorer_95raw(_hW_parseA, _ab__36elm_36parser_36Parser_36Advanced_36symbol(listMarker)))), _jW__36author_36project_36Markdown_36OrderedList_36itemBody);
  };

  var _ez__36author_36project_36HtmlParser_36Declaration_95raw = (a, b) => {
    return {
      $: 5,
      a: a,
      b: b
    };
  };

  var _iU__36author_36project_36Markdown_36OrderedList_36statementsHelp_95raw = (itemParser, revStmts) => {
    return _5j__36elm_36parser_36Parser_36Advanced_36oneOf({
      $: 1,
      a: _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(stmt => _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_1I__95List_95Cons(stmt, revStmts)), itemParser),
      b: {
        $: 1,
        a: _DD__36elm_36parser_36Parser_36Advanced_36succeed(_An__36elm_36parser_36Parser_36Advanced_36Done(_2Y__36elm_36core_36List_36reverse(revStmts))),
        b: _d_out
      }
    });
  };

  var _h7_expecting = $_I_sub("\n");

  var _YQ__36elm_36core_36String_36repeat_95raw = (n, chunk) => {
    return _a4__36elm_36core_36String_36repeatHelp_95raw(n, chunk, "");
  };

  var _lj_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 1, s);
  };

  var _YR__36author_36project_36Markdown_36Entity_36validUnicode = _int => {
    return _a5__36author_36project_36Markdown_36Entity_36isValidUnicode(_int) && !_a6__36author_36project_36Markdown_36Entity_36isBadEndUnicode(_int) ? _YV__36elm_36core_36String_36fromChar(_YW__36elm_36core_36Char_36fromCode(_int)) : _YV__36elm_36core_36String_36fromChar(_YW__36elm_36core_36Char_36fromCode(65533));
  };

  var _jJ_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _kG__36author_36project_36Parser_36Token_36minus, s);
  };

  var _fe_ = $_I_sub("end");

  var _lK_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _lf_, s);
  };

  var _bo_parseB = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _cq_);
  };

  var _jK_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _kN__36author_36project_36Parser_36Token_36plus, s);
  };

  var _bp_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _dY__36author_36project_36Markdown_36OrderedList_36parseSubsequentItems, s);
  };

  var _lk_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 1, s);
  };

  var _f4_ = (name, _v0) => {
    return _a9__36author_36project_36Markdown_36Helpers_36prepareRefLabel_95a1(name);
  };

  var _hN_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  var _dS_ = $_D_sub(_eb_, {
    $: 1,
    a: _ec_,
    b: _d_out
  });

  var _f5__36author_36project_36HtmlParser_36Element_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  var _jL_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _kU__36author_36project_36Parser_36Token_36asterisk, s);
  };

  var _kM_parseB = $_8_factoryFunction.bind(null, "-", _kJ_expecting);

  var _e0__36author_36project_36HtmlParser_36children = startTagName => {
    return _ed__36elm_36parser_36Parser_36Advanced_36loop_95raw(_d_out, _g3__36author_36project_36HtmlParser_36childrenStep(_g5__36author_36project_36HtmlParser_36childrenStepOptions(startTagName)));
  };

  var _ll_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, 0, s);
  };

  var _Z2_ = $_D_sub(_Zm_, {
    $: 1,
    a: _Zn_,
    b: {
      $: 1,
      a: _Zo_,
      b: _d_out
    }
  });

  var _id_ = parsed => {
    return parsed <= 999999999 ? _DD__36elm_36parser_36Parser_36Advanced_36succeed(parsed) : _1p__36elm_36parser_36Parser_36Advanced_36problem(_5X__36elm_36parser_36Parser_36Problem("Starting numbers must be nine digits or less."));
  };

  var _g0_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_hQ__36author_36project_36HtmlParser_36tagNameCharacter, s.h, s.cE, s.bl, s);
  };

  var _k_ = _v0 => {
    return _1D__36author_36project_36Markdown_36Parser_36parse("# This is a heading");
  };

  var _A_ = b => {
    return _j__36author_36project_36Benchmark_36Runner_36Json_36init_95raw(_E__36author_36project_36Benchmarks_36suite, b);
  };

  var _kT_parseB = $_8_factoryFunction.bind(null, "+", _kQ_expecting);

  var _B_ = _v0 => {
    return _g__36elm_36core_36Platform_36Sub_36none;
  };

  var _l_ = _v0 => {
    return _1D__36author_36project_36Markdown_36Parser_36parse("# elm-markdown\n\n## Level 2 heading\n\n### Level 3 heading\n\n");
  };

  var _m_ = _v0 => {
    return _1D__36author_36project_36Markdown_36Parser_36parse("# elm-markdown\n\n- Item 1 \n- Item 2 \n- Item 3 \n\n## Level 2 heading\n\n- [Google](https://google.com)\n- [Bing](https://bing.com)\n- [DuckDuckGo](https://duckduckgo.com)\n\n### Level 3 heading\n\n- Item 1\n- Item 2\n- Item 3\n");
  };

  var _n_ = _v0 => {
    return _1D__36author_36project_36Markdown_36Parser_36parse("# elm-markdown\n\n- Item 1 \n- Item 2 \n- Item 3 \n\n## Level 2 heading\n\n<SearchEnginesBox>\n- [Google](https://google.com)\n- [Bing](https://bing.com)\n- [DuckDuckGo](https://duckduckgo.com)\n</SearchEnginesBox>\n\n<MyCustomHtmlTag></MyCustomHtmlTag>\n\n<Nested>\n<Inner>\n## This is a sub-heading\n\n**This is bold**\n</Inner>\n</Nested>\n\n### Level 3 heading\n\n- Item 1\n- Item 2\n- Item 3\n");
  };

  var _li_parseB = $_8_factoryFunction.bind(null, "\n", _Yk_expecting);

  var _C_ = b => {
    return c => _o__36author_36project_36Benchmark_36Runner_36Json_36update_95raw(_p__36author_36project_36Run_36reportResults, b, c);
  };

  var _3_ = d => {
    return _9_(_4_, _5_, 0, d);
  };

  var _a4__36elm_36core_36String_36repeatHelp_95raw = (n, chunk, result) => {
    return n <= 0 ? result : _a4__36elm_36core_36String_36repeatHelp_95raw(n >> 1, _82__95Utils_95ap(chunk, chunk), !(n & 1) ? result : _82__95Utils_95ap(result, chunk));
  };

  var _cp_parse = $_8_factoryFunction.bind(null, " ", _aT_expecting);

  var _D__36author_36project_36Benchmark_36Runner_36Json_36view = model => {
    return _q_A2(_10__36elm_36html_36Html_36div, _d_out, {
      $: 1,
      a: _12__36elm_36html_36Html_36text(_14__95Json_95encode_95raw(4, _15__36author_36project_36Benchmark_36Runner_36Json_36encode(model))),
      b: _d_out
    });
  };

  var _a5__36author_36project_36Markdown_36Entity_36isValidUnicode = _int => {
    return _int === 9 || _int === 10 || _int === 13 || _int === 133 || 32 <= _int && _int <= 126 || 160 <= _int && _int <= 55295 || 57344 <= _int && _int <= 64975 || 65008 <= _int && _int <= 65533 || 65536 <= _int && _int <= 1114109;
  };

  var _D5_ = $_D_sub(_Y8_, {
    $: 1,
    a: _Y9_parseB,
    b: _d_out
  });

  var _ka_parseB = $_8_factoryFunction.bind(null, "*", _kX_expecting);

  var _p__36author_36project_36Run_36reportResults = value => {
    return {
      $: 1,
      k: "reportResults",
      l: value
    };
  };

  var _CU__36author_36project_36Markdown_36RawBlock_36ThematicBreak = $_P_sub();

  var _10__36elm_36html_36Html_36div = a => {
    return b => _1F_(a, b);
  };

  _ef__36author_36project_36Markdown_36UnorderedList_36statementsHelp.a = 3;

  var _15__36author_36project_36Benchmark_36Runner_36Json_36encode = benchmark => {
    return _1T__36author_36project_36Benchmark_36Runner_36Json_36encodeReport(_1W__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark(benchmark));
  };

  _ef__36author_36project_36Markdown_36UnorderedList_36statementsHelp.f = _fn__36author_36project_36Markdown_36UnorderedList_36statementsHelp_95raw;

  var _14__95Json_95encode_95raw = (indentLevel, value) => {
    return JSON.stringify(_1S__95Json_95unwrap(value), null, indentLevel) + "";
  };

  var _nm_ = $_J_sub();

  var _nb_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  var _cy_parse = $_7_factoryFunction.bind(null, "\n");

  _hF__36author_36project_36Markdown_36ListItem_36TaskItem.a = 2;

  var _jW__36author_36project_36Markdown_36OrderedList_36itemBody = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _kk_);
  };

  var _kx_ = a => {
    return b => _lR_(a, b);
  };

  var _hP_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_g1__36author_36project_36HtmlParser_36isWhitespace, s.h, s.cE, s.bl, s);
  };

  _hF__36author_36project_36Markdown_36ListItem_36TaskItem.f = _iS__36author_36project_36Markdown_36ListItem_36TaskItem_95raw;

  var _mr_expecting = $_K_sub("[x] ");

  var _1T__36author_36project_36Benchmark_36Runner_36Json_36encodeReport = report => {
    return _2O__36elm_36json_36Json_36Encode_36list_95raw(_2Q__36author_36project_36Benchmark_36Runner_36Json_36encodeResultItem, _2R__36author_36project_36Benchmark_36Runner_36Json_36flattenReport(report));
  };

  var _1o__36author_36project_36Markdown_36Parser_36parseAllInlines = state => {
    return _38__36author_36project_36Markdown_36Parser_36parseAllInlinesHelp_95raw(state, state.T, _d_out);
  };

  var _jV_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _ke__36author_36project_36Parser_36Token_36dot, s);
  };

  var _mu_expecting = $_K_sub("[X] ");

  var _g2_parse = s => {
    return _4I__36elm_36parser_36Parser_36Advanced_36loopHelp_95raw(false, _3Y_nRight, _jc__36author_36project_36HtmlParser_36attributesStep, s);
  };

  var _lR_ = (str, _v0) => {
    return _5f__36elm_36core_36Maybe_36withDefault_95raw(0, _YT__36elm_36core_36String_36toInt(str));
  };

  var _mx_expecting = $_K_sub("[ ] ");

  var _g3__36author_36project_36HtmlParser_36childrenStep = a => {
    return b => _hV__36author_36project_36HtmlParser_36childrenStep_95raw(a, b);
  };

  var _jX_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _kp__36author_36project_36Parser_36Token_36closingParen, s);
  };

  var _jO_ = $_D_sub(_kb_, {
    $: 1,
    a: _kc_,
    b: {
      $: 1,
      a: _kd_,
      b: _d_out
    }
  });

  var _bS_ = $_D_sub(_cF_, {
    $: 1,
    a: _cG_,
    b: _d_out
  });

  var _lf_ = $_G_sub("");

  var _iZ_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_jY__36elm_36core_36Char_36isUpper, s.h, s.cE, s.bl, s);
  };

  var _iO_ = $_D_sub(_jM_, {
    $: 1,
    a: _jN_,
    b: _d_out
  });

  var _ko_parseB = $_8_factoryFunction.bind(null, ".", _kh_expecting);

  _bP_parseSubsequentItems.a = 2;

  var _2O__36elm_36json_36Json_36Encode_36list_95raw = (func, entries) => {
    return _18__36elm_36json_36Json_36Encode_36string(_3i__36elm_36core_36List_36foldl_95raw(_3j__95Json_95addEntry(func), _3k__95Json_95emptyArray(0), entries));
  };

  _bP_parseSubsequentItems.f = _cC_parseSubsequentItems_95raw;

  var _kv_parseB = $_8_factoryFunction.bind(null, ")", _ks_expecting);

  var _g5__36author_36project_36HtmlParser_36childrenStepOptions = startTagName => {
    return {
      $: 1,
      a: _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(_3A_F2((_v1, accum) => _An__36elm_36parser_36Parser_36Advanced_36Done(_2Y__36elm_36core_36List_36reverse(accum))), _ie__36author_36project_36HtmlParser_36closingTag(startTagName)),
      b: {
        $: 1,
        a: _if__36elm_36parser_36Parser_36Advanced_36andThen_95raw(text => _8O__36elm_36core_36String_36isEmpty(text) ? _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(_3A_F2((_v2, accum) => _An__36elm_36parser_36Parser_36Advanced_36Done(_2Y__36elm_36core_36List_36reverse(accum))), _ie__36author_36project_36HtmlParser_36closingTag(startTagName)) : _DD__36elm_36parser_36Parser_36Advanced_36succeed(accum => _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_1I__95List_95Cons(_ig__36author_36project_36HtmlParser_36Text(text), accum))), _ih__36author_36project_36HtmlParser_36textNodeString),
        b: {
          $: 1,
          a: _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(_3A_F2((_new, accum) => _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_1I__95List_95Cons(_new, accum))), _ii_()),
          b: _d_out
        }
      }
    };
  };

  var _lr_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_m9__36elm_36core_36Char_36isDigit, s.h, s.cE, s.bl, s);
  };

  var _kJ_expecting = $_I_sub("a `-`");

  var _kG__36author_36project_36Parser_36Token_36minus = $_C_sub("-", _kJ_expecting);

  var _kQ_expecting = $_I_sub("a `+`");

  var _kN__36author_36project_36Parser_36Token_36plus = $_C_sub("+", _kQ_expecting);

  var _kX_expecting = $_I_sub("a `*`");

  var _hU_ = c => {
    return _4O__36elm_36core_36Dict_36foldl_95raw(_jd_, _d_out, c);
  };

  var _hV__36author_36project_36HtmlParser_36childrenStep_95raw = (options, accum) => {
    return _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(f => f(accum), _5j__36elm_36parser_36Parser_36Advanced_36oneOf(options));
  };

  var _kU__36author_36project_36Parser_36Token_36asterisk = $_C_sub("*", _kX_expecting);

  var _2b__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _fh_ = $_D_sub(_h9_, {
    $: 1,
    a: _hA_,
    b: {
      $: 1,
      a: _hB_,
      b: _d_out
    }
  });

  var _iL_ = $_J_sub();

  var _m8_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, "", s);
  };

  var _2h__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _2i__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _n0_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  var _fA_parse = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _gF_);
  };

  _hI__36author_36project_36Markdown_36OrderedList_36statementsHelp.a = 2;
  _hI__36author_36project_36Markdown_36OrderedList_36statementsHelp.f = _iU__36author_36project_36Markdown_36OrderedList_36statementsHelp_95raw;

  var _mA_ = $_J_sub();

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_toInt", _$2_Object_46defineProperty(_YT__36elm_36core_36String_36toInt, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _nS_parse = $_7_factoryFunction.bind(null, "\n");

  _kx_.a = 2;
  _kx_.f = _lR_;

  var _np_ = $_J_sub();

  var _nc_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  var _en_ = $_H_sub();

  var _ig__36author_36project_36HtmlParser_36Text = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _cM_ = $_D_sub(_dc_, {
    $: 1,
    a: _dd_,
    b: _d_out
  });

  var _kk_ = $_D_sub(_lL_, {
    $: 1,
    a: _lM_,
    b: _d_out
  });

  _dY__36author_36project_36Markdown_36OrderedList_36parseSubsequentItems.a = 3;
  _dY__36author_36project_36Markdown_36OrderedList_36parseSubsequentItems.f = _ek__36author_36project_36Markdown_36OrderedList_36parseSubsequentItems_95raw;

  var _kh_expecting = $_I_sub("a `.`");

  var _ke__36author_36project_36Parser_36Token_36dot = $_C_sub(".", _kh_expecting);

  var _ks_expecting = $_I_sub("a `)`");

  var _kp__36author_36project_36Parser_36Token_36closingParen = $_C_sub(")", _ks_expecting);

  var _ii_ = () => {
    return _B3_parseA;
  };

  var _fr_ = $_D_sub(_hL_, {
    $: 1,
    a: _hM_,
    b: _d_out
  });

  var _iW_ = $_J_sub();

  var _3j__95Json_95addEntry = func => {
    return _3A_F2(function (entry, array) {
      array.push(_1S__95Json_95unwrap(func(entry)));
      return array;
    });
  };

  var _3k__95Json_95emptyArray = () => {
    return [];
  };

  var _3l__36elm_36json_36Json_36Encode_36object = pairs => {
    return _18__36elm_36json_36Json_36Encode_36string(_3i__36elm_36core_36List_36foldl_95raw(_3A_F2(function (_v0, obj) {
      var k = _v0.a;
      var v = _v0.b;
      return _4l__95Json_95addField_95raw(k, v, obj);
    }), _4m__95Json_95emptyObject(0), pairs));
  };

  var _lO__36author_36project_36HtmlParser_36keepOldest = a => {
    return b => _lm__36author_36project_36HtmlParser_36keepOldest_95raw(a, b);
  };

  var _jd_ = a => {
    return b => c => _kw_(a, b, c);
  };

  _bZ__36author_36project_36Markdown_36RawBlock_36Heading.a = 2;

  var _3r__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup = a => {
    return b => _4Q__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw(a, b);
  };

  _bZ__36author_36project_36Markdown_36RawBlock_36Heading.f = _cQ__36author_36project_36Markdown_36RawBlock_36Heading_95raw;

  var _cR_expecting = $_I_sub("a `#`");

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_trimRight", _$2_Object_46defineProperty(_es__36elm_36core_36String_36trimRight, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_trimLeft", _$2_Object_46defineProperty(_cY__36elm_36core_36String_36trimLeft, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _Zt_.a = 2;

  var _hZ_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_Za__36author_36project_36Helpers_36isSpaceOrTab, s.h, s.cE, s.bl, s);
  };

  _Zt_.f = _ak_;

  var _ev_expecting = $_K_sub("<![CDATA[");

  var _kw_ = (key, value, accum) => {
    return _1I__95List_95Cons({
      a8: key,
      bg: value
    }, accum);
  };

  var _fx_expecting = $_K_sub("]]>");

  var _ca_expecting = $_K_sub("<?");

  var _dh_expecting = $_K_sub("?>");

  var _ce_expecting = $_I_sub("<!--");

  var _4m__95Json_95emptyObject = () => {
    return {};
  };

  var _dk_expecting = $_I_sub("-->");

  var _4u__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a1 = c => {
    return _4r__36elm_36core_36Basics_36composeR_95raw(_5o_, _5p__36elm_36core_36Basics_36floor, c);
  };

  var _l1__36author_36project_36HtmlParser_36fail = str => {
    return _1p__36elm_36parser_36Parser_36Advanced_36problem(_5X__36elm_36parser_36Parser_36Problem(str));
  };

  var _lQ__36author_36project_36HtmlParser_36attributeValue = s => {
    return _6p__36elm_36parser_36Parser_36Advanced_36oneOfHelp_95raw(s, _3f__36elm_36parser_36Parser_36Advanced_36Empty, _ln_);
  };

  _dm__36author_36project_36HtmlParser_36Declaration.a = 2;
  _dm__36author_36project_36HtmlParser_36Declaration.f = _ez__36author_36project_36HtmlParser_36Declaration_95raw;

  var _f0_expecting = $_K_sub("<!");

  var _jZ__36author_36project_36HtmlParser_36expectUppercaseCharacter = $_I_sub("at least 1 uppercase character");

  var _5M__36author_36project_36Markdown_36Parser_36InlineProblem = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _5N__36author_36project_36Markdown_36Block_36Paragraph = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _ia_ = $_I_sub("at least one whitespace");

  var _5P__36author_36project_36Markdown_36Parser_36parseRawInline_95raw = (linkReferences, wrap, unparsedInlines) => {
    return wrap(_5L__36author_36project_36Markdown_36Parser_36inlineParseHelper_95raw(linkReferences, unparsedInlines));
  };

  var _5Q__36author_36project_36Markdown_36Block_36ListItem_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _5R__36author_36project_36Markdown_36Block_36UnorderedList = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _5S__36author_36project_36Markdown_36Block_36OrderedList_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _5T__36author_36project_36Markdown_36Parser_36parseRawInline = a => {
    return b => c => _5P__36author_36project_36Markdown_36Parser_36parseRawInline_95raw(a, b, c);
  };

  var _dr_expecting = $_K_sub(">");

  var _cm_expecting = $_K_sub("<");

  var _5V__36author_36project_36Markdown_36Block_36CodeBlock = a => {
    return {
      $: 7,
      a: a
    };
  };

  var _l2_parse = s => {
    return _4I__36elm_36parser_36Parser_36Advanced_36loopHelp_95raw(false, 0, _mF__36author_36project_36HtmlParser_36textNodeStringStep, s);
  };

  var _hR__36author_36project_36HtmlParser_36expectTagNameCharacter = $_I_sub("at least 1 tag name character");

  var _5W__36author_36project_36Markdown_36Block_36BlockQuote = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _nL_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  var _5Y__36author_36project_36Markdown_36Parser_36deadEndsToString = deadEnds => {
    return _6Q__36elm_36core_36String_36join_95raw("\n", _1y__36elm_36core_36List_36map_95raw(_6k__36author_36project_36Markdown_36Parser_36deadEndToString, deadEnds));
  };

  var _5Z__36author_36project_36Markdown_36Block_36Table_95raw = (a, b) => {
    return {
      $: 6,
      a: a,
      b: b
    };
  };

  _dt_.a = 2;
  _dt_.f = _f4_;
  _dv__36author_36project_36HtmlParser_36Element.a = 3;
  _dv__36author_36project_36HtmlParser_36Element.f = _f5__36author_36project_36HtmlParser_36Element_95raw;
  _lO__36author_36project_36HtmlParser_36keepOldest.a = 2;
  _lO__36author_36project_36HtmlParser_36keepOldest.f = _lm__36author_36project_36HtmlParser_36keepOldest_95raw;

  var _ns_expecting = $_K_sub("\"");

  var _ow__95String_95startsWith_95raw = (sub, str) => {
    return str.indexOf(sub) === 0;
  };

  var _nM_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  var _5o_ = a => {
    return _6y__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw(a, 1000);
  };

  var _5s__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY = a => {
    return b => _6h__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(a, b);
  };

  var _jg_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _ke__36author_36project_36Parser_36Token_36dot, s);
  };

  var _jh_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _kp__36author_36project_36Parser_36Token_36closingParen, s);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Char_fromCode", _$2_Object_46defineProperty(_YW__36elm_36core_36Char_36fromCode, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _nU_parseA = s => {
    return _4I__36elm_36parser_36Parser_36Advanced_36loopHelp_95raw(false, "", _o0_, s);
  };

  var _p5__36elm_36core_36String_36toList = string => {
    return _p8__95String_95foldr_95raw(_3w__36elm_36core_36List_36cons, _d_out, string);
  };

  var _p6__36elm_36core_36Basics_36negate = n => {
    return -n;
  };

  var _nW_parseA = s => {
    return _4I__36elm_36parser_36Parser_36Advanced_36loopHelp_95raw(false, "", _o3_, s);
  };

  var _og_ = $_S_sub(-1, "amp", "&");

  var _ob_nLeft = $_T_sub(-1, "apos", "'", _og_);

  var _mF__36author_36project_36HtmlParser_36textNodeStringStep = _v0 => {
    return _5j__36elm_36parser_36Parser_36Advanced_36oneOf(_mW__36author_36project_36HtmlParser_36textNodeStringStepOptions);
  };

  var _o0_ = c => {
    return _oF__36author_36project_36HtmlParser_36textStringStep_95raw("\"", _oG_predicate, c);
  };

  var _n5_ = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _nG_, s);
  };

  var _kz_parseB = $_8_factoryFunction.bind(null, ".", _kh_expecting);

  var _l0_parseB = $_8_factoryFunction.bind(null, ")", _ks_expecting);

  var _oF__36author_36project_36HtmlParser_36textStringStep_95raw = (closingChar, predicate, accum) => {
    return _if__36elm_36parser_36Parser_36Advanced_36andThen_95raw(soFar => _5j__36elm_36parser_36Parser_36Advanced_36oneOf({
      $: 1,
      a: _5g__36elm_36parser_36Parser_36Advanced_36map_95raw(escaped => _Ap__36elm_36parser_36Parser_36Advanced_36Loop(_82__95Utils_95ap(accum, _82__95Utils_95ap(soFar, _YV__36elm_36core_36String_36fromChar(escaped)))), _oP__36author_36project_36HtmlParser_36escapedChar(closingChar)),
      b: {
        $: 1,
        a: _DD__36elm_36parser_36Parser_36Advanced_36succeed(_An__36elm_36parser_36Parser_36Advanced_36Done(_82__95Utils_95ap(accum, soFar))),
        b: _d_out
      }
    }), _aY__36elm_36parser_36Parser_36Advanced_36getChompedString(_af__36elm_36parser_36Parser_36Advanced_36chompWhile(predicate)));
  };

  var _oG_predicate = c => {
    return !_2c__95Utils_95eq(c, "\"") && c !== "&";
  };

  var _o3_ = c => {
    return _oF__36author_36project_36HtmlParser_36textStringStep_95raw("'", _oH_predicate, c);
  };

  var _oT__36author_36project_36HtmlParser_36decodeEscape = s => {
    return _ow__95String_95startsWith_95raw("#x", s) ? _ox__36elm_36core_36Result_36mapError_95raw(_5X__36elm_36parser_36Parser_36Problem, _7D__36elm_36core_36Result_36map_95raw(_YW__36elm_36core_36Char_36fromCode, _oy__36rtfeldman_36elm_95hex_36Hex_36fromString(_AV__36elm_36core_36String_36dropLeft_95raw(2, s)))) : _ow__95String_95startsWith_95raw("#", s) ? _A8__36elm_36core_36Result_36fromMaybe_95raw(_5X__36elm_36parser_36Parser_36Problem("Invalid escaped character: " + s), _BD__36elm_36core_36Maybe_36map_95raw(_YW__36elm_36core_36Char_36fromCode, _YT__36elm_36core_36String_36toInt(_AV__36elm_36core_36String_36dropLeft_95raw(1, s)))) : _A8__36elm_36core_36Result_36fromMaybe_95raw(_5X__36elm_36parser_36Parser_36Problem("No entity named \"&" + (s + ";\" found.")), _6A__36elm_36core_36Dict_36get_95raw(s, _oW__36author_36project_36HtmlParser_36entities));
  };

  var _nX_ = _v0 => {
    return _Ap__36elm_36parser_36Parser_36Advanced_36Loop(0);
  };

  var _oV__36elm_36parser_36Parser_36Advanced_36chompIf_95raw = (isGood, expecting) => {
    return function (s) {
      var newOffset = _bH__95Parser_95isSubChar_95raw(isGood, s.h, s.b);

      return _2c__95Utils_95eq(newOffset, -1) ? _36__36elm_36parser_36Parser_36Advanced_36Bad_95raw(false, _37__36elm_36parser_36Parser_36Advanced_36fromState_95raw(s, expecting)) : _2c__95Utils_95eq(newOffset, -2) ? _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(true, 0, {
        bl: 1,
        l: s.l,
        p: s.p,
        h: s.h + 1,
        cE: s.cE + 1,
        b: s.b
      }) : _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(true, 0, {
        bl: s.bl + 1,
        l: s.l,
        p: s.p,
        h: newOffset,
        cE: s.cE,
        b: s.b
      });
    };
  };

  var _oH_predicate = c => {
    return !_2c__95Utils_95eq(c, "'") && c !== "&";
  };

  var _oq_ = $_S_sub(-1, "lt", "<");

  var _nY_ = _v1 => {
    return _Ap__36elm_36parser_36Parser_36Advanced_36Loop(0);
  };

  var _ol_ = $_T_sub(-1, "quot", "\"", _oq_);

  var _ny_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_o6__36author_36project_36HtmlParser_36isNotTextNodeIgnoreChar, s.h, s.cE, s.bl, s);
  };

  var _oW__36author_36project_36HtmlParser_36entities = $_U_sub(-1, ">", _ob_nLeft, _ol_);

  var _o1_expecting = $_K_sub("\"");

  var _oA_parseA = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, _1g__36elm_36core_36Basics_36identity, s);
  };

  var _7Z__36author_36project_36Markdown_36InlineParser_36tokensToMatches_95raw = (tokens, matches, references, rawText) => {
    return _8U__36author_36project_36Markdown_36InlineParser_36codeAutolinkTypeHtmlTagTTM_95raw(tokens, _d_out, matches, references, rawText);
  };

  var _nv_expecting = $_K_sub("'");

  var _o4_expecting = $_K_sub("'");

  var _ln_ = $_D_sub(_mD_, {
    $: 1,
    a: _mE_,
    b: _d_out
  });

  _jd_.a = 3;
  _jd_.f = _kw_;
  _g3__36author_36project_36HtmlParser_36childrenStep.a = 2;

  var _8P__36author_36project_36Markdown_36InlineParser_36normalMatch = text => {
    return {
      o: 0,
      A: _d_out,
      s: 0,
      t: _AT__36author_36project_36Markdown_36Helpers_36formatStr(text),
      I: 0,
      z: 0,
      u: _9a__36author_36project_36Markdown_36InlineParser_36NormalType
    };
  };

  var _8Q__36elm_36core_36String_36left_95raw = (n, string) => {
    return n < 1 ? "" : _AU__95String_95slice_95raw(0, n, string);
  };

  _g3__36author_36project_36HtmlParser_36childrenStep.f = _hV__36author_36project_36HtmlParser_36childrenStep_95raw;

  var _ov_parseB = s => {
    return _ZZ__36elm_36parser_36Parser_36Advanced_36chompWhileHelp_95raw(_oz_isEntityChar, s.h, s.cE, s.bl, s);
  };

  var _oz_isEntityChar = c => {
    return !_2c__95Utils_95eq(c, "<") && c !== ";";
  };

  var _o7_ = $_I_sub("is not & or <");

  var _oK_expecting = $_K_sub("&");

  var _p0_ = $_I_sub("an entity character");

  var _oQ_expecting = $_K_sub(";");

  var _nG_ = $_G_sub(0);

  var _ma_ = $_D_sub(_n5_, _d_out);

  var _mY_ = $_D_sub(_n4_, _ma_);

  var _mW__36author_36project_36HtmlParser_36textNodeStringStepOptions = $_D_sub(_n3_, _mY_);

  var _Bg_ = $_D_sub(_CZ_, {
    $: 1,
    a: _Ca__36author_36project_36HtmlParser_36processingInstruction,
    b: {
      $: 1,
      a: _Cb__36author_36project_36HtmlParser_36comment,
      b: {
        $: 1,
        a: _Cc__36author_36project_36HtmlParser_36docType,
        b: {
          $: 1,
          a: _Cd_,
          b: _d_out
        }
      }
    }
  });

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_fromNumber", _$2_Object_46defineProperty(_6J__36elm_36core_36String_36fromInt, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _DF_.a = 2;
  _DF_.f = _YJ_;

  var _8b_ = $_D_sub(_9h__36author_36project_36Markdown_36Parser_36blankLine, {
    $: 1,
    a: _9i__36author_36project_36Markdown_36Parser_36blockQuote,
    b: {
      $: 1,
      a: _9j_,
      b: {
        $: 1,
        a: _9k_,
        b: {
          $: 1,
          a: _9l__36author_36project_36Markdown_36Parser_36unorderedListBlock,
          b: {
            $: 1,
            a: _9m_,
            b: {
              $: 1,
              a: _9n_,
              b: {
                $: 1,
                a: _9o_,
                b: {
                  $: 1,
                  a: _9p__36author_36project_36Markdown_36Parser_36plainLine,
                  b: _d_out
                }
              }
            }
          }
        }
      }
    }
  });

  _8t_.a = 2;
  _8t_.f = _9q_;

  var _6X_ = $_D_sub(_6t_, _d_out);

  var _6V_ = $_D_sub(_6s_, _6X_);

  var _6T_ = $_D_sub(_6r_, _6V_);

  var _6R__36author_36project_36Markdown_36Parser_36whenPreviousWasBody = $_D_sub(_6q_, _6T_);

  _8v_.a = 2;
  _8v_.f = _9r_;
  _8x_.a = 2;
  _8x_.f = _9s_;
  _8z_.a = 2;
  _8z_.f = _9t_;

  var _av_expecting = $_I_sub("a tab");

  var _g6_expecting = $_K_sub("Indentation");

  var _g9_expecting = $_K_sub("Indentation");

  var _gC_expecting = $_K_sub("Indentation");

  var _AX__36author_36project_36Markdown_36InlineParser_36addChild_95raw = (parentMatch, childMatch) => {
    return {
      o: parentMatch.o,
      A: _1I__95List_95Cons(_BR__36author_36project_36Markdown_36InlineParser_36prepareChildMatch_95raw(parentMatch, childMatch), parentMatch.A),
      s: parentMatch.s,
      t: parentMatch.t,
      I: parentMatch.I,
      z: parentMatch.z,
      u: parentMatch.u
    };
  };

  var _cq_ = $_D_sub(_e1_, {
    $: 1,
    a: _e2_,
    b: {
      $: 1,
      a: _e3_,
      b: _d_out
    }
  });

  var _Ai__36author_36project_36Markdown_36InlineParser_36findToken_95raw = (isToken, tokens) => {
    return _C7__36author_36project_36Markdown_36InlineParser_36findTokenHelp_95raw(_d_out, isToken, tokens);
  };

  var _YK_ = $_D_sub(_ZJ_, {
    $: 1,
    a: _ZK_,
    b: _d_out
  });

  var _gF_ = $_D_sub(_hX_, {
    $: 1,
    a: _hY_,
    b: _d_out
  });

  var _ij_ = $_J_sub();

  var _91_ = $_D_sub(_9h__36author_36project_36Markdown_36Parser_36blankLine, {
    $: 1,
    a: _9i__36author_36project_36Markdown_36Parser_36blockQuote,
    b: {
      $: 1,
      a: _9u_,
      b: {
        $: 1,
        a: _9v__36author_36project_36Markdown_36Parser_36indentedCodeBlock,
        b: {
          $: 1,
          a: _9w_,
          b: {
            $: 1,
            a: _9l__36author_36project_36Markdown_36Parser_36unorderedListBlock,
            b: {
              $: 1,
              a: _9x_,
              b: {
                $: 1,
                a: _9y_,
                b: {
                  $: 1,
                  a: _9z_,
                  b: {
                    $: 1,
                    a: _9p__36author_36project_36Markdown_36Parser_36plainLine,
                    b: _d_out
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  _9L_.a = 2;
  _9L_.f = _A0_;

  var _6f_ = $_D_sub(_6x_, _d_out);

  var _6d_ = $_D_sub(_6w_, _6f_);

  var _6b_ = $_D_sub(_6v_, _6d_);

  var _6Z__36author_36project_36Markdown_36Parser_36whenPreviousWasNotBody = $_D_sub(_6u_, _6b_);

  var _Aj__36author_36project_36Markdown_36InlineParser_36isCodeTokenPair = a => {
    return b => _BT__36author_36project_36Markdown_36InlineParser_36isCodeTokenPair_95raw(a, b);
  };

  _6M__36elm_36core_36Tuple_36mapSecond.a = 2;
  _6M__36elm_36core_36Tuple_36mapSecond.f = _6m__36elm_36core_36Tuple_36mapSecond_95raw;

  var _6n__36author_36project_36Markdown_36Block_36HardLineBreak = $_P_sub();

  _60__36elm_36core_36List_36append.a = 2;
  _60__36elm_36core_36List_36append.f = _6j__36elm_36core_36List_36append_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_trim", _$2_Object_46defineProperty(_7T__36elm_36core_36String_36trim, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _BQ__36author_36project_36Markdown_36Entity_36replaceEntities = d => {
    return _Cq__95Regex_95replaceAtMost_95raw(1 / 0, _C5__36author_36project_36Markdown_36Entity_36entitiesRegex, _Cv__36author_36project_36Markdown_36Entity_36replaceEntity, d);
  };

  _BF__36elm_36core_36List_36maybeCons.a = 3;

  var _BR__36author_36project_36Markdown_36InlineParser_36prepareChildMatch_95raw = (parentMatch, childMatch) => {
    return {
      o: childMatch.o - parentMatch.z,
      A: childMatch.A,
      s: childMatch.s - parentMatch.z,
      t: childMatch.t,
      I: childMatch.I - parentMatch.z,
      z: childMatch.z - parentMatch.z,
      u: childMatch.u
    };
  };

  _BF__36elm_36core_36List_36maybeCons.f = _Bv__36elm_36core_36List_36maybeCons_95raw;
  var _9P__36author_36project_36Markdown_36InlineParser_36angleBracketRTokenRegex = /(\\*)(\>)/g;

  var _AZ__36author_36project_36Markdown_36InlineParser_36AngleBracketOpen = $_L_root(4);

  var _9Q__36author_36project_36Markdown_36InlineParser_36angleBracketLTokenRegex = /(\\*)(\<)/g;

  var _Ab__36author_36project_36Markdown_36InlineParser_36HardLineBreakToken = $_O_sub();

  var _9R__36author_36project_36Markdown_36InlineParser_36softAsHardLineBreakTokenRegex = /(?:(\\+)|( *))\n/g;
  var _9S__36author_36project_36Markdown_36InlineParser_36hardBreakTokenRegex = /(?:(\\+)|( {2,}))\n/g;

  var _Ad__36author_36project_36Markdown_36InlineParser_36SquareBracketClose = $_L_root(3);

  var _9T__36author_36project_36Markdown_36InlineParser_36linkImageCloseTokenRegex = /(\\*)(\])/g;

  var _Ag__36author_36project_36Markdown_36InlineParser_36ImageOpenToken = $_Q_sub();

  var _Bw__36author_36project_36Markdown_36InlineParser_36tokenToMatch_95raw = (token, type_) => {
    return {
      o: token.c + token.i,
      A: _d_out,
      s: token.c,
      t: "",
      I: 0,
      z: 0,
      u: type_
    };
  };

  var _9U__36author_36project_36Markdown_36InlineParser_36linkImageOpenTokenRegex = /(\\*)(\!)?(\[)/g;
  _Xm__36author_36project_36Markdown_36InlineParser_36containSpace_95a0.a = 2;
  _Xm__36author_36project_36Markdown_36InlineParser_36containSpace_95a0.f = _YZ_;
  _Xo__36author_36project_36Markdown_36InlineParser_36containPunctuation_95a0.a = 2;

  var _C8_ = (oldRecord, updatedFields) => {
    return { ...oldRecord,
      ...updatedFields
    };
  };

  _Xo__36author_36project_36Markdown_36InlineParser_36containPunctuation_95a0.f = _Ya_;
  _AK__36author_36project_36Markdown_36InlineParser_36regMatchToEmphasisToken.a = 3;
  _AK__36author_36project_36Markdown_36InlineParser_36regMatchToEmphasisToken.f = _Af__36author_36project_36Markdown_36InlineParser_36regMatchToEmphasisToken_95raw;
  var _9V__36author_36project_36Markdown_36InlineParser_36underlineEmphasisTokenRegex = /(\\*)([^_])?(\_+)([^_])?/g;

  var _Bx__36author_36project_36Markdown_36InlineParser_36HtmlType = a => {
    return {
      $: 6,
      a: a
    };
  };

  var _By__36author_36project_36Markdown_36InlineParser_36isCloseToken = a => {
    return b => _Cp__36author_36project_36Markdown_36InlineParser_36isCloseToken_95raw(a, b);
  };

  var _9W__36author_36project_36Markdown_36InlineParser_36asteriskEmphasisTokenRegex = /(\\*)([^*])?(\*+)([^*])?/g;
  var _9X__36author_36project_36Markdown_36InlineParser_36codeTokenRegex = /(\\*)(\`+)/g;

  var _9Y__36author_36project_36Markdown_36Inline_36HardLineBreak = $_M_sub();

  var _C2__36author_36project_36Markdown_36Helpers_36escapableRegex = /(\\+)([!"#$%&\'()*+,.\/:;<=>?@[\\\]^_`{|}~-])/g;
  var _C3__36author_36project_36Markdown_36Entity_36hexadecimalRegex = /&#[Xx]([0-9a-fA-F]{1,8});/g;
  var _C4__36author_36project_36Markdown_36Entity_36decimalRegex = /&#([0-9]{1,8});/g;
  var _C5__36author_36project_36Markdown_36Entity_36entitiesRegex = /&([0-9a-zA-Z]+);/g;

  var _E5_ = $_S_sub(-1, "AElig", 198);

  var _E0_nLeft = $_T_sub(-1, "Aacute", 193, _E5_);

  var _EA_rLeft = $_T_sub(-1, "Agrave", 192, _3Y_nRight);

  var _Dv_ = $_V_sub(-1, "Acirc", 194, _E0_nLeft, _EA_rLeft);

  var _EF_rRight = $_T_sub(-1, "Aring", 197, _3Y_nRight);

  var _Dq_nLeft = $_W_sub(-1, "Alpha", 913, _Dv_, _EF_rRight);

  var _Cp__36author_36project_36Markdown_36InlineParser_36isCloseToken_95raw = (htmlModel, token) => {
    return false;
  };

  var _EU_ = $_S_sub(-1, "Auml", 196);

  var _EP_llLeft = $_T_sub(-1, "Beta", 914, _EU_);

  var _EZ_llRight = $_T_sub(-1, "Chi", 935, _3Y_nRight);

  var _EK_rLeft = $_W_sub(-1, "Ccedil", 199, _EP_llLeft, _EZ_llRight);

  var _Dl_ = $_V_sub(-1, "Atilde", 195, _Dq_nLeft, _EK_rLeft);

  var _Ej_lRight = $_T_sub(-1, "Delta", 916, _3Y_nRight);

  var _Eo_nRight = $_T_sub(-1, "Eacute", 201, _3Y_nRight);

  var _Ee_rRight = $_W_sub(-1, "ETH", 208, _Ej_lRight, _Eo_nRight);

  var _Dg_ = $_W_sub(-1, "Dagger", 8225, _Dl_, _Ee_rRight);

  var _FD_ = $_T_sub(-1, "Egrave", 200, _3Y_nRight);

  var _FI_ = $_T_sub(-1, "Eta", 919, _3Y_nRight);

  var _Xv__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a1 = d => {
    return _Cq__95Regex_95replaceAtMost_95raw(1 / 0, _Yc__36author_36project_36Markdown_36InlineParser_36decodeUrlRegex, _ZS_, d);
  };

  var _F8_ = $_V_sub(-1, "Epsilon", 917, _FD_, _FI_);

  var _FS_ = $_S_sub(-1, "Gamma", 915);

  var _FN_nRight = $_T_sub(-1, "Iacute", 205, _FS_);

  var _F3_nLeft = $_W_sub(-1, "Euml", 203, _F8_, _FN_nRight);

  var _Fh_ = $_S_sub(-1, "Igrave", 204);

  var _Fc_llLeft = $_T_sub(-1, "Iota", 921, _Fh_);

  var _Xr__95Regex_95contains_95raw = (re, string) => {
    return string.match(re) !== null;
  };

  var _Fm_llRight = $_T_sub(-1, "Kappa", 922, _3Y_nRight);

  var _Xs__36author_36project_36Markdown_36InlineParser_36AutolinkType = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _FX_rLeft = $_W_sub(-1, "Iuml", 207, _Fc_llLeft, _Fm_llRight);

  var _Ey_nLeft = $_V_sub(-1, "Icirc", 206, _F3_nLeft, _FX_rLeft);

  var _Yf__36author_36project_36Markdown_36InlineParser_36isOpenEmphasisToken = a => {
    return b => _ZY__36author_36project_36Markdown_36InlineParser_36isOpenEmphasisToken_95raw(a, b);
  };

  var _Fw_nLeft = $_T_sub(-1, "Mu", 924, _3Y_nRight);

  var _Xx__36elm_36parser_36Parser_36Advanced_36getOffset = s => {
    return _35__36elm_36parser_36Parser_36Advanced_36Good_95raw(false, s.h, s);
  };

  var _Xy__36author_36project_36Markdown_36InlineParser_36HtmlToken_95raw = (a, b) => {
    return {
      $: 6,
      a: a,
      b: b
    };
  };

  var _G6_ = $_S_sub(-1, "Nu", 925);

  var _G1_ = $_T_sub(-1, "OElig", 338, _G6_);

  var _Yp__36author_36project_36Markdown_36InlineParser_36LinkType = a => {
    return {
      $: 4,
      a: a
    };
  };

  var _Yq__36author_36project_36Markdown_36InlineParser_36ImageType = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _Fr_ = $_W_sub(-1, "Ntilde", 209, _Fw_nLeft, _G1_);

  var _Et_nRight = $_W_sub(-1, "Lambda", 923, _Ey_nLeft, _Fr_);

  var _Db_nLeft = $_W_sub(-1, "Ecirc", 202, _Dg_, _Et_nRight);

  var _GV_nLeft = $_T_sub(-1, "Ocirc", 212, _3Y_nRight);

  var _Ga_rLeft = $_T_sub(-1, "Omega", 937, _3Y_nRight);

  var _GQ_ = $_V_sub(-1, "Ograve", 210, _GV_nLeft, _Ga_rLeft);

  var _Gf_rRight = $_T_sub(-1, "Oslash", 216, _3Y_nRight);

  var _GL_nLeft = $_W_sub(-1, "Omicron", 927, _GQ_, _Gf_rRight);

  var _Gz_ = $_S_sub(-1, "Ouml", 214);

  var _Gu_nLeft = $_T_sub(-1, "Phi", 934, _Gz_);

  var _ZS_ = match => {
    return _5f__36elm_36core_36Maybe_36withDefault_95raw(match.aG, _bB__36elm_36url_36Url_36percentDecode(match.aG));
  };

  var _H4_rLeft = $_T_sub(-1, "Prime", 8243, _3Y_nRight);

  var _Gp_ = $_V_sub(-1, "Pi", 928, _Gu_nLeft, _H4_rLeft);

  var _H9_rRight = $_T_sub(-1, "Rho", 929, _3Y_nRight);

  var _Gk_ = $_W_sub(-1, "Psi", 936, _Gp_, _H9_rRight);

  var _GG_ = $_W_sub(-1, "Otilde", 213, _GL_nLeft, _Gk_);

  var _HY_nLeft = $_T_sub(-1, "Sigma", 931, _3Y_nRight);

  var _Hi_ = $_S_sub(-1, "Tau", 932);

  var _Hd_ = $_T_sub(-1, "Theta", 920, _Hi_);

  var _HT_ = $_V_sub(-1, "THORN", 222, _HY_nLeft, _Hd_);

  var _Hn_nRight = $_T_sub(-1, "Ucirc", 219, _3Y_nRight);

  var _aL__36author_36project_36Markdown_36InlineParser_36EmphasisType = a => {
    return {
      $: 7,
      a: a
    };
  };

  var _HO_nLeft = $_W_sub(-1, "Uacute", 218, _HT_, _Hn_nRight);

  var _Hx_llLeft = $_T_sub(-1, "Upsilon", 933, _3Y_nRight);

  var _I2_llRight = $_T_sub(-1, "Xi", 926, _3Y_nRight);

  var _Hs_rLeft = $_W_sub(-1, "Uuml", 220, _Hx_llLeft, _I2_llRight);

  var _aQ__36elm_36core_36List_36filter = a => {
    return b => _1r__36elm_36core_36List_36filter_95raw(a, b);
  };

  var _HJ_ = $_V_sub(-1, "Ugrave", 217, _HO_nLeft, _Hs_rLeft);

  var _IH_ = $_S_sub(-1, "Yuml", 376);

  var _IC_lRight = $_T_sub(-1, "Zeta", 918, _IH_);

  var _IM_nRight = $_T_sub(-1, "acirc", 226, _3Y_nRight);

  var _I7_rRight = $_W_sub(-1, "aacute", 225, _IC_lRight, _IM_nRight);

  var _HE_nRight = $_W_sub(-1, "Yacute", 221, _HJ_, _I7_rRight);

  var _GB_ = $_W_sub(-1, "Scaron", 352, _GG_, _HE_nRight);

  var _DW_nLeft = $_W_sub(-1, "Oacute", 211, _Db_nLeft, _GB_);

  var _Iq_llLeft = $_T_sub(-1, "aelig", 230, _3Y_nRight);

  var _Iv_llRight = $_T_sub(-1, "alefsym", 8501, _3Y_nRight);

  var _Il_nLeft = $_W_sub(-1, "agrave", 224, _Iq_llLeft, _Iv_llRight);

  var _JA_ = $_T_sub(-1, "amp", 38, _3Y_nRight);

  var _JF_ = $_T_sub(-1, "ang", 8736, _3Y_nRight);

  var _J5_nLeft = $_V_sub(-1, "and", 8743, _JA_, _JF_);

  var _JP_ = $_S_sub(-1, "aring", 229);

  var _JK_ = $_T_sub(-1, "asymp", 8776, _JP_);

  var _J0_ = $_W_sub(-1, "apos", 39, _J5_nLeft, _JK_);

  var _Ig_ = $_W_sub(-1, "alpha", 945, _Il_nLeft, _J0_);

  var _Je_lLeft = $_T_sub(-1, "auml", 228, _3Y_nRight);

  var _Jj_lRight = $_T_sub(-1, "beta", 946, _3Y_nRight);

  var _JZ_nLeft = $_W_sub(-1, "bdquo", 8222, _Je_lLeft, _Jj_lRight);

  var _c5__36author_36project_36Markdown_36InlineParser_36prepareUrlAndTitle_95raw = (rawUrl, maybeTitle) => {
    return _1B__95Utils_95Tuple2(_4r__36elm_36core_36Basics_36composeR_95raw(_Xt__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a0, _Xv__36author_36project_36Markdown_36InlineParser_36encodeUrl_95a1, _AT__36author_36project_36Markdown_36Helpers_36formatStr(rawUrl)), _BD__36elm_36core_36Maybe_36map_95raw(_AT__36author_36project_36Markdown_36Helpers_36formatStr, maybeTitle));
  };

  var _Jy_ = $_S_sub(-1, "bull", 8226);

  var _Jt_ = $_T_sub(-1, "cap", 8745, _Jy_);

  var _K3_nRight = $_T_sub(-1, "cedil", 184, _3Y_nRight);

  var _Jo_ = $_W_sub(-1, "ccedil", 231, _Jt_, _K3_nRight);

  var _JU_nRight = $_W_sub(-1, "brvbar", 166, _JZ_nLeft, _Jo_);

  var _Ib_nLeft = $_W_sub(-1, "atilde", 227, _Ig_, _JU_nRight);

  var _KX_llLeft = $_T_sub(-1, "chi", 967, _3Y_nRight);

  var _Kc_llRight = $_T_sub(-1, "clubs", 9827, _3Y_nRight);

  var _KS_ = $_W_sub(-1, "circ", 710, _KX_llLeft, _Kc_llRight);

  var _Km_lRight = $_T_sub(-1, "copy", 169, _3Y_nRight);

  var _Kr_nRight = $_T_sub(-1, "cup", 8746, _3Y_nRight);

  var _Kh_ = $_W_sub(-1, "crarr", 8629, _Km_lRight, _Kr_nRight);

  var _KN_nLeft = $_V_sub(-1, "cong", 8773, _KS_, _Kh_);

  var _LB_ = $_S_sub(-1, "dArr", 8659);

  var _L6_ = $_T_sub(-1, "dagger", 8224, _LB_);

  var _LG_nRight = $_T_sub(-1, "deg", 176, _3Y_nRight);

  var _L1_nLeft = $_V_sub(-1, "darr", 8595, _L6_, _LG_nRight);

  var _LQ_ = $_S_sub(-1, "diams", 9830);

  var _LL_ = $_T_sub(-1, "divide", 247, _LQ_);

  var _Kw_ = $_W_sub(-1, "delta", 948, _L1_nLeft, _LL_);

  var _KI_ = $_W_sub(-1, "curren", 164, _KN_nLeft, _Kw_);

  var _Lf_nLeft = $_T_sub(-1, "ecirc", 234, _3Y_nRight);

  var _Lp_ = $_S_sub(-1, "empty", 8709);

  var _Lk_ = $_T_sub(-1, "emsp", 8195, _Lp_);

  var _La_nLeft = $_W_sub(-1, "egrave", 232, _Lf_nLeft, _Lk_);

  var _M4_ = $_S_sub(-1, "epsilon", 949);

  var _Lz_ = $_T_sub(-1, "equiv", 8801, _M4_);

  var _M9_nRight = $_T_sub(-1, "eth", 240, _3Y_nRight);

  var _Lu_ = $_W_sub(-1, "eta", 951, _Lz_, _M9_nRight);

  var _LV_nRight = $_W_sub(-1, "ensp", 8194, _La_nLeft, _Lu_);

  var _KD_ = $_V_sub(-1, "eacute", 233, _KI_, _LV_nRight);

  var _MT_ = $_S_sub(-1, "euro", 8364);

  var _MO_ = $_T_sub(-1, "exist", 8707, _MT_);

  var _MY_nRight = $_T_sub(-1, "forall", 8704, _3Y_nRight);

  var _MJ_nLeft = $_W_sub(-1, "fnof", 402, _MO_, _MY_nRight);

  var _Mn_nLeft = $_T_sub(-1, "frac14", 188, _3Y_nRight);

  var _Ms_rLeft = $_T_sub(-1, "frasl", 8260, _3Y_nRight);

  var _Mi_ = $_V_sub(-1, "frac34", 190, _Mn_nLeft, _Ms_rLeft);

  var _Mx_rRight = $_T_sub(-1, "ge", 8805, _3Y_nRight);

  var _Md_ = $_W_sub(-1, "gamma", 947, _Mi_, _Mx_rRight);

  var _ME_nRight = $_W_sub(-1, "frac12", 189, _MJ_nLeft, _Md_);

  var _K8_ = $_W_sub(-1, "euml", 235, _KD_, _ME_nRight);

  var _IW_ = $_V_sub(-1, "cent", 162, _Ib_nLeft, _K8_);

  var _NM_nLeft = $_T_sub(-1, "hArr", 8660, _3Y_nRight);

  var _NW_ = $_S_sub(-1, "hearts", 9829);

  var _NR_ = $_T_sub(-1, "hellip", 8230, _NW_);

  var _NH_ = $_V_sub(-1, "harr", 8596, _NM_nLeft, _NR_);

  var _Nb_nRight = $_T_sub(-1, "icirc", 238, _3Y_nRight);

  var _NC_ = $_W_sub(-1, "iacute", 237, _NH_, _Nb_nRight);

  var _Nq_nLeft = $_T_sub(-1, "igrave", 236, _3Y_nRight);

  var _Nv_rLeft = $_T_sub(-1, "infin", 8734, _3Y_nRight);

  var _Nl_ = $_V_sub(-1, "image", 8465, _Nq_nLeft, _Nv_rLeft);

  var _O0_rRight = $_T_sub(-1, "iota", 953, _3Y_nRight);

  var _Ng_nRight = $_W_sub(-1, "int", 8747, _Nl_, _O0_rRight);

  var _N7_ = $_W_sub(-1, "iexcl", 161, _NC_, _Ng_nRight);

  var _OU_ = $_S_sub(-1, "isin", 8712);

  var _OP_nLeft = $_T_sub(-1, "iuml", 239, _OU_);

  var _OZ_rLeft = $_T_sub(-1, "lArr", 8656, _3Y_nRight);

  var _OK_ = $_V_sub(-1, "kappa", 954, _OP_nLeft, _OZ_rLeft);

  var _Oe_rRight = $_T_sub(-1, "lang", 9001, _3Y_nRight);

  var _OF_nLeft = $_W_sub(-1, "lambda", 955, _OK_, _Oe_rRight);

  var _Oy_ = $_S_sub(-1, "larr", 8592);

  var _Ot_nLeft = $_T_sub(-1, "lceil", 8968, _Oy_);

  var _P3_rLeft = $_T_sub(-1, "le", 8804, _3Y_nRight);

  var _Oo_nLeft = $_V_sub(-1, "ldquo", 8220, _Ot_nLeft, _P3_rLeft);

  var _PD_ = $_S_sub(-1, "lowast", 8727);

  var _P8_ = $_T_sub(-1, "loz", 9674, _PD_);

  var _Oj_ = $_W_sub(-1, "lfloor", 8970, _Oo_nLeft, _P8_);

  var _OA_ = $_V_sub(-1, "laquo", 171, _OF_nLeft, _Oj_);

  var _PS_ = $_S_sub(-1, "lsaquo", 8249);

  var _PN_lRight = $_T_sub(-1, "lsquo", 8216, _PS_);

  var _Pc_ = $_S_sub(-1, "macr", 175);

  var _PX_nRight = $_T_sub(-1, "mdash", 8212, _Pc_);

  var _PI_nRight = $_W_sub(-1, "lt", 60, _PN_lRight, _PX_nRight);

  var _O5_nRight = $_W_sub(-1, "lrm", 8206, _OA_, _PI_nRight);

  var _N2_nRight = $_W_sub(-1, "iquest", 191, _N7_, _O5_nRight);

  var _IR_ = $_U_sub(-1, 62, _IW_, _N2_nRight);

  var _DR_ = $_V_sub(-1, "acute", 180, _DW_nLeft, _IR_);

  var _QG_ = $_S_sub(-1, "middot", 183);

  var _QB_ = $_T_sub(-1, "minus", 8722, _QG_);

  var _QL_nRight = $_T_sub(-1, "nabla", 8711, _3Y_nRight);

  var _Q6_llLeft = $_W_sub(-1, "mu", 956, _QB_, _QL_nRight);

  var _QV_llLeft = $_T_sub(-1, "ndash", 8211, _3Y_nRight);

  var _Qa_llRight = $_T_sub(-1, "ni", 8715, _3Y_nRight);

  var _QQ_llRight = $_W_sub(-1, "ne", 8800, _QV_llLeft, _Qa_llRight);

  var _Q1_nLeft = $_W_sub(-1, "nbsp", 160, _Q6_llLeft, _QQ_llRight);

  var _Qz_ = $_S_sub(-1, "notin", 8713);

  var _Qu_ = $_T_sub(-1, "nsub", 8836, _Qz_);

  var _R4_nRight = $_T_sub(-1, "nu", 957, _3Y_nRight);

  var _Qp_nLeft = $_W_sub(-1, "ntilde", 241, _Qu_, _R4_nRight);

  var _RE_lLeft = $_T_sub(-1, "ocirc", 244, _3Y_nRight);

  var _RO_ = $_S_sub(-1, "ograve", 242);

  var _RJ_lRight = $_T_sub(-1, "oline", 8254, _RO_);

  var _R9_rLeft = $_W_sub(-1, "oelig", 339, _RE_lLeft, _RJ_lRight);

  var _Qk_ = $_V_sub(-1, "oacute", 243, _Qp_nLeft, _R9_rLeft);

  var _RY_rLeft = $_T_sub(-1, "omicron", 959, _3Y_nRight);

  var _Rd_rRight = $_T_sub(-1, "or", 8744, _3Y_nRight);

  var _RT_rRight = $_W_sub(-1, "oplus", 8853, _RY_rLeft, _Rd_rRight);

  var _Qf_ = $_W_sub(-1, "omega", 969, _Qk_, _RT_rRight);

  var _Pw_nLeft = $_V_sub(-1, "not", 172, _Q1_nLeft, _Qf_);

  var _Rx_ = $_S_sub(-1, "ordm", 186);

  var _Rs_nLeft = $_T_sub(-1, "oslash", 248, _Rx_);

  var _S7_ = $_S_sub(-1, "otimes", 8855);

  var _S2_ = $_T_sub(-1, "ouml", 246, _S7_);

  var _Rn_nLeft = $_W_sub(-1, "otilde", 245, _Rs_nLeft, _S2_);

  var _SM_nLeft = $_T_sub(-1, "part", 8706, _3Y_nRight);

  var _SW_ = $_S_sub(-1, "perp", 8869);

  var _SR_ = $_T_sub(-1, "phi", 966, _SW_);

  var _SH_ = $_V_sub(-1, "permil", 8240, _SM_nLeft, _SR_);

  var _Sg_ = $_S_sub(-1, "piv", 982);

  var _Sb_nRight = $_T_sub(-1, "plusmn", 177, _Sg_);

  var _SC_ = $_W_sub(-1, "pi", 960, _SH_, _Sb_nRight);

  var _Ri_ = $_W_sub(-1, "para", 182, _Rn_nLeft, _SC_);

  var _Pr_nLeft = $_W_sub(-1, "ordf", 170, _Pw_nLeft, _Ri_);

  var _T5_llLeft = $_T_sub(-1, "prime", 8242, _3Y_nRight);

  var _TA_llRight = $_T_sub(-1, "prop", 8733, _3Y_nRight);

  var _T0_nLeft = $_W_sub(-1, "prod", 8719, _T5_llLeft, _TA_llRight);

  var _TK_nLeft = $_T_sub(-1, "quot", 34, _3Y_nRight);

  var _TU_ = $_S_sub(-1, "radic", 8730);

  var _TP_ = $_T_sub(-1, "rang", 9002, _TU_);

  var _TF_ = $_W_sub(-1, "rArr", 8658, _TK_nLeft, _TP_);

  var _Sv_ = $_V_sub(-1, "psi", 968, _T0_nLeft, _TF_);

  var _Tj_ = $_T_sub(-1, "rarr", 8594, _3Y_nRight);

  var _To_ = $_T_sub(-1, "rdquo", 8221, _3Y_nRight);

  var _Te_nLeft = $_V_sub(-1, "rceil", 8969, _Tj_, _To_);

  var _Ty_ = $_S_sub(-1, "reg", 174);

  var _Tt_ = $_T_sub(-1, "rfloor", 8971, _Ty_);

  var _TZ_nRight = $_W_sub(-1, "real", 8476, _Te_nLeft, _Tt_);

  var _Sq_nLeft = $_W_sub(-1, "raquo", 187, _Sv_, _TZ_nRight);

  var _US_ = $_S_sub(-1, "rlm", 8207);

  var _UN_nLeft = $_T_sub(-1, "rsaquo", 8250, _US_);

  var _UX_rLeft = $_T_sub(-1, "sbquo", 8218, _3Y_nRight);

  var _UI_ = $_V_sub(-1, "rsquo", 8217, _UN_nLeft, _UX_rLeft);

  var _Uc_rRight = $_T_sub(-1, "sdot", 8901, _3Y_nRight);

  var _UD_nLeft = $_W_sub(-1, "scaron", 353, _UI_, _Uc_rRight);

  var _Ur_ = $_S_sub(-1, "shy", 173);

  var _Um_nLeft = $_T_sub(-1, "sigma", 963, _Ur_);

  var _V1_ = $_S_sub(-1, "sim", 8764);

  var _Uw_ = $_T_sub(-1, "spades", 9824, _V1_);

  var _Uh_ = $_W_sub(-1, "sigmaf", 962, _Um_nLeft, _Uw_);

  var _U8_ = $_V_sub(-1, "sect", 167, _UD_nLeft, _Uh_);

  var _VB_lRight = $_T_sub(-1, "sube", 8838, _3Y_nRight);

  var _VL_ = $_S_sub(-1, "sup", 8835);

  var _VG_nRight = $_T_sub(-1, "sup1", 185, _VL_);

  var _V6_nRight = $_W_sub(-1, "sum", 8721, _VB_lRight, _VG_nRight);

  var _U3_ = $_W_sub(-1, "sub", 8834, _U8_, _V6_nRight);

  var _Sl_ = $_W_sub(-1, "rho", 961, _Sq_nLeft, _U3_);

  var _Pm_ = $_V_sub(-1, "pound", 163, _Pr_nLeft, _Sl_);

  var _Vp_ = $_S_sub(-1, "sup3", 179);

  var _Vk_ = $_T_sub(-1, "supe", 8839, _Vp_);

  var _Vz_ = $_S_sub(-1, "tau", 964);

  var _Vu_nRight = $_T_sub(-1, "there4", 8756, _Vz_);

  var _Vf_ = $_W_sub(-1, "szlig", 223, _Vk_, _Vu_nRight);

  var _W9_lLeft = $_T_sub(-1, "thetasym", 977, _3Y_nRight);

  var _WE_lRight = $_T_sub(-1, "thorn", 254, _3Y_nRight);

  var _W4_nRight = $_W_sub(-1, "thinsp", 8201, _W9_lLeft, _WE_lRight);

  var _Va_ = $_V_sub(-1, "theta", 952, _Vf_, _W4_nRight);

  var _WO_rLeft = $_T_sub(-1, "times", 215, _3Y_nRight);

  var _WT_rRight = $_T_sub(-1, "uArr", 8657, _3Y_nRight);

  var _WJ_nRight = $_W_sub(-1, "trade", 8482, _WO_rLeft, _WT_rRight);

  var _VV_ = $_W_sub(-1, "tilde", 732, _Va_, _WJ_nRight);

  var _Wn_llLeft = $_T_sub(-1, "uarr", 8593, _3Y_nRight);

  var _Ws_llRight = $_T_sub(-1, "ugrave", 249, _3Y_nRight);

  var _Wi_ = $_W_sub(-1, "ucirc", 251, _Wn_llLeft, _Ws_llRight);

  var _X7_ = $_S_sub(-1, "upsih", 978);

  var _X2_lRight = $_T_sub(-1, "upsilon", 965, _X7_);

  var _XH_ = $_S_sub(-1, "weierp", 8472);

  var _XC_nRight = $_T_sub(-1, "xi", 958, _XH_);

  var _Wx_ = $_W_sub(-1, "uuml", 252, _X2_lRight, _XC_nRight);

  var _Wd_ = $_V_sub(-1, "uml", 168, _Wi_, _Wx_);

  var _XW_nLeft = $_T_sub(-1, "yen", 165, _3Y_nRight);

  var _Xb_rLeft = $_T_sub(-1, "zeta", 950, _3Y_nRight);

  var _XR_ = $_V_sub(-1, "yuml", 255, _XW_nLeft, _Xb_rLeft);

  var _Xg_rRight = $_T_sub(-1, "zwnj", 8204, _3Y_nRight);

  var _XM_nRight = $_W_sub(-1, "zwj", 8205, _XR_, _Xg_rRight);

  var _WY_nRight = $_W_sub(-1, "yacute", 253, _Wd_, _XM_nRight);

  var _VQ_nRight = $_W_sub(-1, "uacute", 250, _VV_, _WY_nRight);

  var _Ph_nRight = $_W_sub(-1, "sup2", 178, _Pm_, _VQ_nRight);

  var _DM__36author_36project_36Markdown_36Entity_36entities = $_W_sub(-1, "micro", 181, _DR_, _Ph_nRight);

  var _9a__36author_36project_36Markdown_36InlineParser_36NormalType = $_N_sub();

  var _ZN__36author_36project_36Markdown_36InlineParser_36HardLineBreakType = $_M_sub();

  _Yf__36author_36project_36Markdown_36InlineParser_36isOpenEmphasisToken.a = 2;
  _Yf__36author_36project_36Markdown_36InlineParser_36isOpenEmphasisToken.f = _ZY__36author_36project_36Markdown_36InlineParser_36isOpenEmphasisToken_95raw;
  var _Zf__36author_36project_36Markdown_36InlineParser_36inlineLinkTypeOrImageTypeRegex = /^\(\s*(?:<([^<>\f\v\r\n]*)>|([^ \t\f\v\r\n\(\)\\]*(?:\\.[^ \t\f\v\r\n\(\)\\]*)*))(?:[ \t\f\v\r\n]+(?:'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"|\(([^\)\\]*(?:\\.[^\)\\]*)*)\)))?\s*\)/g;
  var _Yc__36author_36project_36Markdown_36InlineParser_36decodeUrlRegex = /%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)/g;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Url_percentDecode", _$2_Object_46defineProperty(_bB__36elm_36url_36Url_36percentDecode, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  var _bR__36author_36project_36Markdown_36InlineParser_36refLabelRegex = /^\[\s*([^\[\]\\]*(?:\\.[^\[\]\\]*)*)\s*\]/g;
  _aQ__36elm_36core_36List_36filter.a = 2;
  _aQ__36elm_36core_36List_36filter.f = _1r__36elm_36core_36List_36filter_95raw;
  _By__36author_36project_36Markdown_36InlineParser_36isCloseToken.a = 2;
  _By__36author_36project_36Markdown_36InlineParser_36isCloseToken.f = _Cp__36author_36project_36Markdown_36InlineParser_36isCloseToken_95raw;
  _Aj__36author_36project_36Markdown_36InlineParser_36isCodeTokenPair.a = 2;
  _Aj__36author_36project_36Markdown_36InlineParser_36isCodeTokenPair.f = _BT__36author_36project_36Markdown_36InlineParser_36isCodeTokenPair_95raw;

  var _BU__36author_36project_36Markdown_36InlineParser_36CodeType = $_Q_sub();

  var _Cx__36author_36project_36Markdown_36InlineParser_36emailRegex = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*)$/g;
  var _Cy__36author_36project_36Markdown_36InlineParser_36urlRegex = /^([A-Za-z][A-Za-z0-9.+\-]{1,31}:[^<>\x00-\x20]*)$/g;
  _5T__36author_36project_36Markdown_36Parser_36parseRawInline.a = 3;
  _5T__36author_36project_36Markdown_36Parser_36parseRawInline.f = _5P__36author_36project_36Markdown_36Parser_36parseRawInline_95raw;

  var _4f__36author_36project_36Markdown_36Block_36ThematicBreak = $_L_root(8);

  var _4h__36author_36project_36Markdown_36Parser_36EmptyBlock = $_N_sub();

  var _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold = $_N_sub();

  var _E__36author_36project_36Benchmarks_36suite = $_B_root(2, "markdown parsing", {
    $: 1,
    a: {
      $: 0,
      a: "just a heading",
      b: _k_,
      c: _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold
    },
    b: {
      $: 1,
      a: {
        $: 0,
        a: "elm-explorations/markdown readme",
        b: _l_,
        c: _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold
      },
      b: {
        $: 1,
        a: {
          $: 0,
          a: "withHeadingsAndLists",
          b: _m_,
          c: _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold
        },
        b: {
          $: 1,
          a: {
            $: 0,
            a: "withHeadingsAndListsAndHtml",
            b: _n_,
            c: _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold
          },
          b: _d_out
        }
      }
    }
  });

  var _g__36elm_36core_36Platform_36Sub_36none = {
    $: 2,
    m: _d_out
  };
  _5s__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.a = 2;
  _5s__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.f = _6h__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw;
  _3r__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup.a = 2;
  _3r__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup.f = _4Q__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw;
  _10__36elm_36html_36Html_36div.a = 2;
  _10__36elm_36html_36Html_36div.f = _1F_;
  var _4_ = {
    cs: _A_,
    cI: _B_,
    cL: _C_,
    cN: _D__36author_36project_36Benchmark_36Runner_36Json_36view
  };

  var _5_ = $_F_sub();

  _$0_global.Elm = {
    Run: {
      init: _3_
    }
  };
}).call(this);