(function () {
  "use strict";

  function $_U_sub() {
    return $_P_root(2);
  }

  function $_T_sub() {
    return $_P_root(4);
  }

  function $_S_sub() {
    return $_P_root(3);
  }

  function $_R_sub() {
    return $_P_root(0);
  }

  function $_Q_sub() {
    return $_P_root(1);
  }

  function $_P_root(__0) {
    return {
      $: __0
    };
  }

  function $_O_sub(__1) {
    return $_F_root(3, __1);
  }

  function $_N_sub() {
    return $_F_root(10, _2Q_shadows);
  }

  function $_M_sub(__1) {
    return $_F_root(2, __1);
  }

  function $_L_sub(__1) {
    return $_F_root(15, __1);
  }

  function $_K_sub(__1) {
    return $_F_root(5, __1);
  }

  function $_J_sub(__1) {
    return $_F_root(4, __1);
  }

  function $_I_sub(__1) {
    return $_F_root(0, __1);
  }

  function $_H_sub(__1) {
    return $_F_root(1, __1);
  }

  function $_G_sub() {
    return $_F_root(0, 0);
  }

  function $_F_root(__0, __1) {
    return {
      $: __0,
      a: __1
    };
  }

  function $_E_sub(__1, __2, __3, __4) {
    return $_D_root(0, __1, __2, __3, __4);
  }

  function $_D_root(__0, __1, __2, __3, __4) {
    return {
      $: __0,
      a: __1,
      b: __2,
      c: __3,
      d: __4
    };
  }

  function $_C_sub(__1, __2) {
    return $_1_root(6, __1, __2);
  }

  function $_B_sub() {
    return $_1_root(6, "text-align", "left");
  }

  function $_A_sub() {
    return $_1_root(6, "text-align", "center");
  }

  function $_9_sub(__2) {
    return $_1_root(6, "font-size", __2);
  }

  function $_8_sub() {
    return $_1_root(6, "font-size", "24px");
  }

  function $_7_sub(__1, __2) {
    return $_1_root(0, __1, __2);
  }

  function $_6_sub(__2) {
    return $_1_root(0, "background-color", __2);
  }

  function $_5_sub() {
    return $_1_root(0, "border-style", "solid");
  }

  function $_4_sub(__1, __2) {
    return $_1_root(2, __1, __2);
  }

  function $_3_sub(__1, __2) {
    return $_1_root(1, __1, __2);
  }

  function $_2_sub() {
    return $_1_root(0, null, null);
  }

  function $_1_root(__0, __1, __2) {
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

  var _LR_F = function (arity, fun, wrapper) {
    wrapper.a = arity;
    wrapper.f = fun;
    return wrapper;
  };

  var _JB__95Utils_95eq = function (x, y) {
    for (var pair, stack = [], isEqual = _KS__95Utils_95eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _KS__95Utils_95eqHelp(pair.a, pair.b, 0, stack)) {}

    return isEqual;
  };

  var _KS__95Utils_95eqHelp = function (x, y, depth, stack) {
    if (x === y) {
      return true;
    }

    if (typeof x !== "object" || x === null || y === null) {
      typeof x === "function" && _Hv__95Debug_95crash(5);
      return false;
    }

    if (depth > 100) {
      stack.push(_HX_(x, y));
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
      x = _NA__36elm_36core_36Dict_36toList(x);
      y = _NA__36elm_36core_36Dict_36toList(y);
    } //*/


    for (var key in x) {
      if (!_KS__95Utils_95eqHelp(x[key], y[key], depth + 1, stack)) {
        return false;
      }
    }

    return true;
  };

  var _L5__95Utils_95cmp = function (x, y, ord) {
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
        return (ord = _L5__95Utils_95cmp(x.a, y.a)) ? ord : (ord = _L5__95Utils_95cmp(x.b, y.b)) ? ord : _L5__95Utils_95cmp(x.c, y.c);
      } // traverse conses until end of a list or a mismatch


    for (; x.b && y.b && !(ord = _L5__95Utils_95cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES


    return ord || (x.b ?
    /*GT*/
    1 : y.b ?
    /*LT*/
    -1 :
    /*EQ*/
    0);
  };

  var _JC__95Utils_95ap = function (xs, ys) {
    // append Strings
    if (typeof xs === "string") {
      return xs + ys;
    } // append Lists


    if (!xs.b) {
      return ys;
    }

    var root = _IK_(xs.a, ys);

    xs = xs.b;

    for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
    {
      curr = curr.b = _IK_(xs.a, ys);
    }

    return root;
  };

  var _7h__95List_95fromArray = function (arr) {
    var out = _U_r3;

    for (var i = arr.length; i--;) {
      out = _IK_(arr[i], out);
    }

    return out;
  };

  var _QS__95List_95toArray = function (xs) {
    for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
    {
      out.push(xs.a);
    }

    return out;
  };

  var _Hv__95Debug_95crash = function (identifier) {
    throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
  };

  var _Tg__36elm_36core_36Char_36toCode = function (char) {
    var code = char.charCodeAt(0);

    if (55296 <= code && code <= 56319) {
      return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
    }

    return code;
  };

  var _JD__95Json_95runHelp = function (decoder, value) {
    switch (decoder.$) {
      case 2:
        return decoder.b(value);

      case 5:
        return value === null ? _KU__36elm_36core_36Result_36Ok(decoder.c) : _KV_("null", value);

      case 3:
        if (!_Kg_(value)) {
          return _KV_("a LIST", value);
        }

        return _Kh__95Json_95runArrayDecoder(decoder.b, value, _7h__95List_95fromArray);

      case 4:
        if (!_Kg_(value)) {
          return _KV_("an ARRAY", value);
        }

        return _Kh__95Json_95runArrayDecoder(decoder.b, value, _Ki_);

      case 6:
        var field = decoder.d;

        if (typeof value !== "object" || value === null || !(field in value)) {
          return _KV_("an OBJECT with a field named `" + field + "`", value);
        }

        var result = _JD__95Json_95runHelp(decoder.b, value[field]);

        return _Hz__36elm_36core_36Result_36isOk(result) ? result : _KW__36elm_36core_36Result_36Err(_KX__36elm_36json_36Json_36Decode_36Field_95raw(field, result.a));

      case 7:
        var index = decoder.e;

        if (!_Kg_(value)) {
          return _KV_("an ARRAY", value);
        }

        if (index >= value.length) {
          return _KV_("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
        }

        var result = _JD__95Json_95runHelp(decoder.b, value[index]);

        return _Hz__36elm_36core_36Result_36isOk(result) ? result : _KW__36elm_36core_36Result_36Err(_KY__36elm_36json_36Json_36Decode_36Index_95raw(index, result.a));

      case 8:
        if (typeof value !== "object" || value === null || _Kg_(value)) {
          return _KV_("an OBJECT", value);
        }

        var keyValuePairs = _U_r3; // TODO test perf of Object.keys and switch when support is good enough

        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _JD__95Json_95runHelp(decoder.b, value[key]);

            if (!_Hz__36elm_36core_36Result_36isOk(result)) {
              return _KW__36elm_36core_36Result_36Err(_KX__36elm_36json_36Json_36Decode_36Field_95raw(key, result.a));
            }

            keyValuePairs = _IK_(_HX_(key, result.a), keyValuePairs);
          }
        }

        return _KU__36elm_36core_36Result_36Ok(_K1__36elm_36core_36List_36reverse(keyValuePairs));

      case 9:
        var answer = decoder.f;
        var decoders = decoder.g;

        for (var i = 0; i < decoders.length; i++) {
          var result = _JD__95Json_95runHelp(decoders[i], value);

          if (!_Hz__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          answer = answer(result.a);
        }

        return _KU__36elm_36core_36Result_36Ok(answer);

      case 10:
        var result = _JD__95Json_95runHelp(decoder.b, value);

        return !_Hz__36elm_36core_36Result_36isOk(result) ? result : _JD__95Json_95runHelp(decoder.h(result.a), value);

      case 11:
        var errors = _U_r3;

        for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
        {
          var result = _JD__95Json_95runHelp(temp.a, value);

          if (_Hz__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          errors = _IK_(result.a, errors);
        }

        return _KW__36elm_36core_36Result_36Err(_KZ__36elm_36json_36Json_36Decode_36OneOf(_K1__36elm_36core_36List_36reverse(errors)));

      case 1:
        return _KW__36elm_36core_36Result_36Err(_Ka__36elm_36json_36Json_36Decode_36Failure_95raw(decoder.a, _Ht__36elm_36json_36Json_36Encode_36string(value)));

      case 0:
        return _KU__36elm_36core_36Result_36Ok(decoder.a);
    }
  };

  var _Kh__95Json_95runArrayDecoder = function (decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);

    for (var i = 0; i < len; i++) {
      var result = _JD__95Json_95runHelp(decoder, value[i]);

      if (!_Hz__36elm_36core_36Result_36isOk(result)) {
        return _KW__36elm_36core_36Result_36Err(_KY__36elm_36json_36Json_36Decode_36Index_95raw(i, result.a));
      }

      array[i] = result.a;
    }

    return _KU__36elm_36core_36Result_36Ok(toElmValue(array));
  };

  var _O0__95Json_95equality = function (x, y) {
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
        return _O0__95Json_95equality(x.b, y.b);

      case 6:
        return x.d === y.d && _O0__95Json_95equality(x.b, y.b);

      case 7:
        return x.e === y.e && _O0__95Json_95equality(x.b, y.b);

      case 9:
        return x.f === y.f && _QG__95Json_95listEquality(x.g, y.g);

      case 10:
        return x.h === y.h && _O0__95Json_95equality(x.b, y.b);

      case 11:
        return _QG__95Json_95listEquality(x.g, y.g);
    }
  };

  var _QG__95Json_95listEquality = function (aDecoders, bDecoders) {
    var len = aDecoders.length;

    if (len !== bDecoders.length) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      if (!_O0__95Json_95equality(aDecoders[i], bDecoders[i])) {
        return false;
      }
    }

    return true;
  };

  var _Ku__95Scheduler_95rawSpawn = function (task) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    var proc = {
      $: 0,
      e: __captured__scope_1_[0]++,
      f: task,
      g: null,
      h: []
    };

    _NR__95Scheduler_95enqueue(proc);

    return proc;
  };

  var _L0__95Scheduler_95rawSend = function (proc, msg) {
    proc.h.push(msg);

    _NR__95Scheduler_95enqueue(proc);
  };

  var _NR__95Scheduler_95enqueue = function (proc) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _O8__95Scheduler_95queue.push(proc);

    if (__captured__scope_1_[1]) {
      return;
    }

    __captured__scope_1_[1] = true;

    while (proc = _O8__95Scheduler_95queue.shift()) {
      _PX__95Scheduler_95step(proc);
    }

    __captured__scope_1_[1] = false;
  };

  var _PX__95Scheduler_95step = function (proc) {
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

          _NR__95Scheduler_95enqueue(proc);
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

  var _a__95Platform_95initialize = function (flagDecoder, args, init, update, subscriptions, stepperBuilder) {
    var result = _Hs__95Json_95run_95raw(flagDecoder, _Ht__36elm_36json_36Json_36Encode_36string(args ? args["flags"] : undefined));

    _Hz__36elm_36core_36Result_36isOk(result) || _Hv__95Debug_95crash(2
    /**_UNUSED/, _Json_errorToString(result.a) /**/
    );
    var managers = {};
    var initPair = init(result.a);
    var model = initPair.a;
    var stepper = stepperBuilder(sendToApp, model);

    var ports = _Hw__95Platform_95setupEffects(managers, sendToApp);

    function sendToApp(msg, viewMetadata) {
      var pair = _Hx_(update, msg, model);

      stepper(model = pair.a, viewMetadata);

      _Hy__95Platform_95enqueueEffects(managers, pair.b, subscriptions(model));
    }

    _Hy__95Platform_95enqueueEffects(managers, initPair.b, subscriptions(model));

    return ports ? {
      ports: ports
    } : {};
  };

  var _Hw__95Platform_95setupEffects = function (managers, sendToApp) {
    var ports; // setup all necessary effect managers

    for (var key in _IR__95Platform_95effectManagers) {
      var manager = _IR__95Platform_95effectManagers[key];

      if (manager.a) {
        ports = ports || {};
        ports[key] = manager.a(key, sendToApp);
      }

      managers[key] = _JO__95Platform_95instantiateManager(manager, sendToApp);
    }

    return ports;
  };

  var _JO__95Platform_95instantiateManager = function (info, sendToApp) {
    var router = {
      g: sendToApp,
      h: undefined
    };
    var onEffects = info.c;
    var onSelfMsg = info.d;
    var cmdMap = info.e;
    var subMap = info.f;

    const loop = state => _Kd__95Scheduler_95andThen_95raw(loop, _Ks_(function (msg) {
      var value = msg.a;

      if (msg.$ === 0) {
        return _IL_(onSelfMsg, router, value, state);
      }

      return cmdMap && subMap ? _Kt_(onEffects, router, value.i, value.j, state) : _IL_(onEffects, router, cmdMap ? value.i : value.j, state);
    }));

    return router.h = _Ku__95Scheduler_95rawSpawn(_Kd__95Scheduler_95andThen_95raw(loop, info.b));
  };

  var _Hy__95Platform_95enqueueEffects = function (managers, cmdBag, subBag) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _IX__95Platform_95effectsQueue.push({
      p: managers,
      q: cmdBag,
      r: subBag
    });

    if (__captured__scope_1_[2]) return;
    __captured__scope_1_[2] = true;

    for (var fx; fx = _IX__95Platform_95effectsQueue.shift();) {
      _JP__95Platform_95dispatchEffects(fx.p, fx.q, fx.r);
    }

    __captured__scope_1_[2] = false;
  };

  var _JP__95Platform_95dispatchEffects = function (managers, cmdBag, subBag) {
    var effectsDict = {};

    _Kv__95Platform_95gatherEffects(true, cmdBag, effectsDict, null);

    _Kv__95Platform_95gatherEffects(false, subBag, effectsDict, null);

    for (var home in managers) {
      _L0__95Scheduler_95rawSend(managers[home], {
        $: "fx",
        a: effectsDict[home] || {
          i: _U_r3,
          j: _U_r3
        }
      });
    }
  };

  var _Kv__95Platform_95gatherEffects = function (isCmd, bag, effectsDict, taggers) {
    switch (bag.$) {
      case 1:
        var home = bag.k;

        var effect = _NS__95Platform_95toEffect(isCmd, home, taggers, bag.l);

        effectsDict[home] = _NT__95Platform_95insert(isCmd, effect, effectsDict[home]);
        return;

      case 2:
        for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
        {
          _Kv__95Platform_95gatherEffects(isCmd, list.a, effectsDict, taggers);
        }

        return;

      case 3:
        _Kv__95Platform_95gatherEffects(isCmd, bag.o, effectsDict, {
          s: bag.n,
          t: taggers
        });

        return;
    }
  };

  var _NS__95Platform_95toEffect = function (isCmd, home, taggers, value) {
    function applyTaggers(x) {
      for (var temp = taggers; temp; temp = temp.t) {
        x = temp.s(x);
      }

      return x;
    }

    var map = isCmd ? _IR__95Platform_95effectManagers[home].e : _IR__95Platform_95effectManagers[home].f;
    return _Hx_(map, applyTaggers, value);
  };

  var _NT__95Platform_95insert = function (isCmd, newEffect, effects) {
    effects = effects || {
      i: _U_r3,
      j: _U_r3
    };
    isCmd ? effects.i = _IK_(newEffect, effects.i) : effects.j = _IK_(newEffect, effects.j);
    return effects;
  };

  var _OD__95VirtualDom_95appendChild = function (parent, child) {
    parent.appendChild(child);
  };

  var _Ny__95VirtualDom_95mapHandler = function (func, handler) {
    var tag = _Py__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt(handler); // 0 = Normal
    // 1 = MayStopPropagation
    // 2 = MayPreventDefault
    // 3 = Custom


    return {
      $: handler.$,
      a: !tag ? _Pz__95Json_95map1_95raw(func, handler.a) : _Q0__95Json_95map2_95raw(tag < 3 ? _Q1__95VirtualDom_95mapEventTuple : _Q3__95VirtualDom_95mapEventRecord, _Q5__36elm_36json_36Json_36Decode_36succeed(func), handler.a)
    };
  };

  var _L1__95VirtualDom_95organizeFacts = function (factList) {
    for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
    {
      var entry = factList.a;
      var tag = entry.$;
      var key = entry.n;
      var value = entry.o;

      if (tag === "a2") {
        key === "className" ? _Na__95VirtualDom_95addClass(facts, key, _JN_(value)) : facts[key] = _JN_(value);
        continue;
      }

      var subFacts = facts[tag] || (facts[tag] = {});
      tag === "a3" && key === "class" ? _Na__95VirtualDom_95addClass(subFacts, key, value) : subFacts[key] = value;
    }

    return facts;
  };

  var _Na__95VirtualDom_95addClass = function (object, key, newClass) {
    var classes = object[key];
    object[key] = classes ? classes + " " + newClass : newClass;
  };

  var _Lp__95VirtualDom_95render = function (vNode, eventNode) {
    var tag = vNode.$;

    if (tag === 5) {
      return _Lp__95VirtualDom_95render(vNode.k || (vNode.k = vNode.m()), eventNode);
    }

    if (tag === 0) {
      return _NV__95Browser_95doc.createTextNode(vNode.a);
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

      var domNode = _Lp__95VirtualDom_95render(subNode, subEventRoot);

      domNode.elm_event_node_ref = subEventRoot;
      return domNode;
    }

    if (tag === 3) {
      var domNode = vNode.h(vNode.g);

      _Lo__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

      return domNode;
    } // at this point `tag` must be 1 or 2


    var domNode = vNode.f ? _NV__95Browser_95doc.createElementNS(vNode.f, vNode.c) : _NV__95Browser_95doc.createElement(vNode.c);

    if (void 0) {
      domNode.addEventListener("click", (void 0)(domNode));
    }

    _Lo__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

    for (var kids = vNode.e, i = 0; i < kids.length; i++) {
      _OD__95VirtualDom_95appendChild(domNode, _Lp__95VirtualDom_95render(tag === 1 ? kids[i] : kids[i].b, eventNode));
    }

    return domNode;
  };

  var _Lo__95VirtualDom_95applyFacts = function (domNode, eventNode, facts) {
    for (var key in facts) {
      var value = facts[key];
      key === "a1" ? _O9__95VirtualDom_95applyStyles(domNode, value) : key === "a0" ? _OA__95VirtualDom_95applyEvents(domNode, eventNode, value) : key === "a3" ? _OB__95VirtualDom_95applyAttrs(domNode, value) : key === "a4" ? _OC__95VirtualDom_95applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
    }
  };

  var _O9__95VirtualDom_95applyStyles = function (domNode, styles) {
    var domNodeStyle = domNode.style;

    for (var key in styles) {
      domNodeStyle[key] = styles[key];
    }
  };

  var _OB__95VirtualDom_95applyAttrs = function (domNode, attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
    }
  };

  var _OC__95VirtualDom_95applyAttrsNS = function (domNode, nsAttrs) {
    for (var key in nsAttrs) {
      var pair = nsAttrs[key];
      var namespace = pair.f;
      var value = pair.o;
      typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
    }
  };

  var _OA__95VirtualDom_95applyEvents = function (domNode, eventNode, events) {
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

      oldCallback = _QH__95VirtualDom_95makeCallback(eventNode, newHandler);
      domNode.addEventListener(key, oldCallback, void 0);
      allCallbacks[key] = oldCallback;
    }
  };

  var _QH__95VirtualDom_95makeCallback = function (eventNode, initialHandler) {
    function callback(event) {
      var handler = callback.q;

      var result = _JD__95Json_95runHelp(handler.a, event);

      if (!_Hz__36elm_36core_36Result_36isOk(result)) {
        return;
      }

      var tag = _Py__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt(handler); // 0 = Normal
      // 1 = MayStopPropagation
      // 2 = MayPreventDefault
      // 3 = Custom


      var value = result.a;
      var message = !tag ? value : tag < 3 ? value.a : value.L;
      var stopPropagation = tag == 1 ? value.b : tag == 3 && value.aU;
      var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.aP) && event.preventDefault(), eventNode);
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

  var _7f__95VirtualDom_95diff = function (x, y) {
    var patches = [];

    _IM__95VirtualDom_95diffHelp(x, y, patches, 0);

    return patches;
  };

  var _Ji__95VirtualDom_95pushPatch = function (patches, type, index, data) {
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

  var _IM__95VirtualDom_95diffHelp = function (x, y, patches, index) {
    if (x === y) {
      return;
    }

    var xType = x.$;
    var yType = y.$; // Bail if you run into different types of nodes. Implies that the
    // structure has changed significantly and it's not worth a diff.

    if (xType !== yType) {
      if (xType === 1 && yType === 2) {
        y = _Jh__95VirtualDom_95dekey(y);
        yType = 1;
      } else {
        _Ji__95VirtualDom_95pushPatch(patches, 0, index, y);

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

        _IM__95VirtualDom_95diffHelp(x.k, y.k, subPatches, 0);

        subPatches.length > 0 && _Ji__95VirtualDom_95pushPatch(patches, 1, index, subPatches);
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
          _Ji__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        } // check if taggers are "the same"


        if (nesting ? !_Jj__95VirtualDom_95pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
          _Ji__95VirtualDom_95pushPatch(patches, 2, index, yTaggers);
        } // diff everything below the taggers


        _IM__95VirtualDom_95diffHelp(xSubNode, ySubNode, patches, index + 1);

        return;

      case 0:
        if (x.a !== y.a) {
          _Ji__95VirtualDom_95pushPatch(patches, 3, index, y.a);
        }

        return;

      case 1:
        _Jk__95VirtualDom_95diffNodes(x, y, patches, index, _Jl__95VirtualDom_95diffKids);

        return;

      case 2:
        _Jk__95VirtualDom_95diffNodes(x, y, patches, index, _Jm__95VirtualDom_95diffKeyedKids);

        return;

      case 3:
        if (x.h !== y.h) {
          _Ji__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        }

        var factsDiff = _Jn__95VirtualDom_95diffFacts(x.d, y.d);

        factsDiff && _Ji__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
        var patch = y.i(x.g, y.g);
        patch && _Ji__95VirtualDom_95pushPatch(patches, 5, index, patch);
        return;
    }
  };

  var _Jj__95VirtualDom_95pairwiseRefEqual = function (as, bs) {
    for (var i = 0; i < as.length; i++) {
      if (as[i] !== bs[i]) {
        return false;
      }
    }

    return true;
  };

  var _Jk__95VirtualDom_95diffNodes = function (x, y, patches, index, diffKids) {
    // Bail if obvious indicators have changed. Implies more serious
    // structural changes such that it's not worth it to diff.
    if (x.c !== y.c || x.f !== y.f) {
      _Ji__95VirtualDom_95pushPatch(patches, 0, index, y);

      return;
    }

    var factsDiff = _Jn__95VirtualDom_95diffFacts(x.d, y.d);

    factsDiff && _Ji__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
    diffKids(x, y, patches, index);
  };

  var _Jn__95VirtualDom_95diffFacts = function (x, y, category) {
    var diff; // look for changes and removals

    for (var xKey in x) {
      if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
        var subDiff = _Jn__95VirtualDom_95diffFacts(x[xKey], y[xKey] || {}, xKey);

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

      if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _LU_(xValue, yValue)) {
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

  var _Jl__95VirtualDom_95diffKids = function (xParent, yParent, patches, index) {
    var xKids = xParent.e;
    var yKids = yParent.e;
    var xLen = xKids.length;
    var yLen = yKids.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

    if (xLen > yLen) {
      _Ji__95VirtualDom_95pushPatch(patches, 6, index, {
        v: yLen,
        i: xLen - yLen
      });
    } else if (xLen < yLen) {
      _Ji__95VirtualDom_95pushPatch(patches, 7, index, {
        v: xLen,
        e: yKids
      });
    } // PAIRWISE DIFF EVERYTHING ELSE


    for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
      var xKid = xKids[i];

      _IM__95VirtualDom_95diffHelp(xKid, yKids[i], patches, ++index);

      index += xKid.b || 0;
    }
  };

  var _Jm__95VirtualDom_95diffKeyedKids = function (xParent, yParent, patches, rootIndex) {
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

        _IM__95VirtualDom_95diffHelp(xNode, yNode, localPatches, index);

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

        _IM__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        _LS__95VirtualDom_95insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _LT__95VirtualDom_95removeNode(changes, localPatches, xKey, xNextNode, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 2;
        continue;
      } // insert y


      if (newMatch) {
        index++;

        _LS__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        _IM__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        index += xNode.b || 0;
        xIndex += 1;
        yIndex += 2;
        continue;
      } // remove x


      if (oldMatch) {
        index++;

        _LT__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        index += xNode.b || 0;
        index++;

        _IM__95VirtualDom_95diffHelp(xNextNode, yNode, localPatches, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 1;
        continue;
      } // remove x, insert y


      if (xNext && xNextKey === yNextKey) {
        index++;

        _LT__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        _LS__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _IM__95VirtualDom_95diffHelp(xNextNode, yNextNode, localPatches, index);

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

      _LT__95VirtualDom_95removeNode(changes, localPatches, x.a, xNode, index);

      index += xNode.b || 0;
      xIndex++;
    }

    while (yIndex < yLen) {
      var endInserts = endInserts || [];
      var y = yKids[yIndex];

      _LS__95VirtualDom_95insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);

      yIndex++;
    }

    if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
      _Ji__95VirtualDom_95pushPatch(patches, 8, rootIndex, {
        w: localPatches,
        x: inserts,
        y: endInserts
      });
    }
  };

  var _LS__95VirtualDom_95insertNode = function (changes, localPatches, key, vnode, yIndex, inserts) {
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

      _IM__95VirtualDom_95diffHelp(entry.z, vnode, subPatches, entry.r);

      entry.r = yIndex;
      entry.s.s = {
        w: subPatches,
        A: entry
      };
      return;
    } // this key has already been inserted or moved, a duplicate!


    _LS__95VirtualDom_95insertNode(changes, localPatches, key + "_elmW6BL", vnode, yIndex, inserts);
  };

  var _LT__95VirtualDom_95removeNode = function (changes, localPatches, key, vnode, index) {
    var entry = changes[key]; // never seen this key before

    if (!entry) {
      var patch = _Ji__95VirtualDom_95pushPatch(localPatches, 9, index, undefined);

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

      _IM__95VirtualDom_95diffHelp(vnode, entry.z, subPatches, index);

      _Ji__95VirtualDom_95pushPatch(localPatches, 9, index, {
        w: subPatches,
        A: entry
      });

      return;
    } // this key has already been removed or moved, a duplicate!


    _LT__95VirtualDom_95removeNode(changes, localPatches, key + "_elmW6BL", vnode, index);
  };

  var _IN__95VirtualDom_95addDomNodes = function (domNode, vNode, patches, eventNode) {
    _Jo__95VirtualDom_95addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
  };

  var _Jo__95VirtualDom_95addDomNodesHelp = function (domNode, vNode, patches, i, low, high, eventNode) {
    var patch = patches[i];
    var index = patch.r;

    while (index === low) {
      var patchType = patch.$;

      if (patchType === 1) {
        _IN__95VirtualDom_95addDomNodes(domNode, vNode.k, patch.s, eventNode);
      } else if (patchType === 8) {
        patch.t = domNode;
        patch.u = eventNode;
        var subPatches = patch.s.w;

        if (subPatches.length > 0) {
          _Jo__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
        }
      } else if (patchType === 9) {
        patch.t = domNode;
        patch.u = eventNode;
        var data = patch.s;

        if (data) {
          data.A.s = domNode;
          var subPatches = data.w;

          if (subPatches.length > 0) {
            _Jo__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
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

      return _Jo__95VirtualDom_95addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
    } // tag must be 1 or 2 at this point


    var vKids = vNode.e;
    var childNodes = domNode.childNodes;

    for (var j = 0; j < vKids.length; j++) {
      low++;
      var vKid = tag === 1 ? vKids[j] : vKids[j].b;
      var nextLow = low + (vKid.b || 0);

      if (low <= index && index <= nextLow) {
        i = _Jo__95VirtualDom_95addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);

        if (!(patch = patches[i]) || (index = patch.r) > high) {
          return i;
        }
      }

      low = nextLow;
    }

    return i;
  };

  var _7g__95VirtualDom_95applyPatches = function (rootDomNode, oldVirtualNode, patches, eventNode) {
    if (patches.length === 0) {
      return rootDomNode;
    }

    _IN__95VirtualDom_95addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);

    return _IO__95VirtualDom_95applyPatchesHelp(rootDomNode, patches);
  };

  var _IO__95VirtualDom_95applyPatchesHelp = function (rootDomNode, patches) {
    for (var i = 0; i < patches.length; i++) {
      var patch = patches[i];
      var localDomNode = patch.t;

      var newNode = _Jp__95VirtualDom_95applyPatch(localDomNode, patch);

      if (localDomNode === rootDomNode) {
        rootDomNode = newNode;
      }
    }

    return rootDomNode;
  };

  var _Jp__95VirtualDom_95applyPatch = function (domNode, patch) {
    switch (patch.$) {
      case 0:
        return _LV__95VirtualDom_95applyPatchRedraw(domNode, patch.s, patch.u);

      case 4:
        _Lo__95VirtualDom_95applyFacts(domNode, patch.u, patch.s);

        return domNode;

      case 3:
        domNode.replaceData(0, domNode.length, patch.s);
        return domNode;

      case 1:
        return _IO__95VirtualDom_95applyPatchesHelp(domNode, patch.s);

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
          domNode.insertBefore(_Lp__95VirtualDom_95render(kids[i], patch.u), theEnd);
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

        entry.s = _IO__95VirtualDom_95applyPatchesHelp(domNode, data.w);
        return domNode;

      case 8:
        return _Lq__95VirtualDom_95applyPatchReorder(domNode, patch);

      case 5:
        return patch.s(domNode);

      default:
        _Hv__95Debug_95crash(10);

      // 'Ran into an unknown patch!'
    }
  };

  var _LV__95VirtualDom_95applyPatchRedraw = function (domNode, vNode, eventNode) {
    var parentNode = domNode.parentNode;

    var newNode = _Lp__95VirtualDom_95render(vNode, eventNode);

    if (!newNode.elm_event_node_ref) {
      newNode.elm_event_node_ref = domNode.elm_event_node_ref;
    }

    if (parentNode && newNode !== domNode) {
      parentNode.replaceChild(newNode, domNode);
    }

    return newNode;
  };

  var _Lq__95VirtualDom_95applyPatchReorder = function (domNode, patch) {
    var data = patch.s; // remove end inserts

    var frag = _OE__95VirtualDom_95applyPatchReorderEndInsertsHelp(data.y, patch); // removals


    domNode = _IO__95VirtualDom_95applyPatchesHelp(domNode, data.w); // inserts

    var inserts = data.x;

    for (var i = 0; i < inserts.length; i++) {
      var insert = inserts[i];
      var entry = insert.A;
      var node = entry.c === 2 ? entry.s : _Lp__95VirtualDom_95render(entry.z, patch.u);
      domNode.insertBefore(node, domNode.childNodes[insert.r]);
    } // add end inserts


    if (frag) {
      _OD__95VirtualDom_95appendChild(domNode, frag);
    }

    return domNode;
  };

  var _OE__95VirtualDom_95applyPatchReorderEndInsertsHelp = function (endInserts, patch) {
    if (!endInserts) {
      return;
    }

    var frag = _NV__95Browser_95doc.createDocumentFragment();

    for (var i = 0; i < endInserts.length; i++) {
      var insert = endInserts[i];
      var entry = insert.A;

      _OD__95VirtualDom_95appendChild(frag, entry.c === 2 ? entry.s : _Lp__95VirtualDom_95render(entry.z, patch.u));
    }

    return frag;
  };

  var _7d__95VirtualDom_95virtualize = function (node) {
    // TEXT NODES
    if (node.nodeType === 3) {
      return _IB__36elm_36html_36Html_36text(node.textContent);
    } // WEIRD NODES


    if (node.nodeType !== 1) {
      return _IB__36elm_36html_36Html_36text("");
    } // ELEMENT NODES


    var attrList = _U_r3;
    var attrs = node.attributes;

    for (var i = attrs.length; i--;) {
      var attr = attrs[i];
      var name = attr.name;
      var value = attr.value;
      attrList = _IK_(_IH__95VirtualDom_95attribute_95raw(name, value), attrList);
    }

    var tag = node.tagName.toLowerCase();
    var kidList = _U_r3;
    var kids = node.childNodes;

    for (var i = kids.length; i--;) {
      kidList = _IK_(_7d__95VirtualDom_95virtualize(kids[i]), kidList);
    }

    return _IL_(_II__95VirtualDom_95node, tag, attrList, kidList);
  };

  var _Jh__95VirtualDom_95dekey = function (keyedNode) {
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

  var _7e__95Browser_95makeAnimator = function (model, draw) {
    draw(model);
    var state = 0;

    function updateIfNeeded() {
      state = state === 1 ? 0 : (_IJ__95Browser_95requestAnimationFrame(updateIfNeeded), draw(model), 1);
    }

    return function (nextModel, isSync) {
      model = nextModel;
      isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _IJ__95Browser_95requestAnimationFrame(updateIfNeeded), state = 2);
    };
  };

  var _Rk__95Utils_95compare_95raw = function (x, y) {
    var n = _L5__95Utils_95cmp(x, y);

    return n < 0 ? 0 : n ? 2 : 1;
  };

  var _MF__95List_95map2_95raw = function (f, xs, ys) {
    for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
    {
      arr.push(_Hx_(f, xs.a, ys.a));
    }

    return _7h__95List_95fromArray(arr);
  };

  var _PH__95JsArray_95initialize_95raw = function (size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  };

  var _Sk__95JsArray_95initializeFromList_95raw = function (max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _HX_(result, ls);
  };

  var _NL__95Basics_95modBy_95raw = function (modulus, x) {
    var answer = x % modulus;
    return modulus === 0 ? _Hv__95Debug_95crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
  };

  var _T9__95String_95foldl_95raw = function (func, state, string) {
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

      state = _Hx_(func, _TE_(char), state);
    }

    return state;
  };

  var _ST__95String_95foldr_95raw = function (func, state, string) {
    var i = string.length;

    while (i--) {
      var char = string[i];
      var word = string.charCodeAt(i);

      if (56320 <= word && word <= 57343) {
        i--;
        char = string[i] + char;
      }

      state = _Hx_(func, _TE_(char), state);
    }

    return state;
  };

  var _Tk__95Regex_95fromStringWith_95raw = function (options, string) {
    var flags = "g";

    if (options.bZ) {
      flags += "m";
    }

    if (options.bF) {
      flags += "i";
    }

    try {
      return _J3__36elm_36core_36Maybe_36Just(new RegExp(string, flags));
    } catch (error) {
      return _I6__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _TV__95Regex_95replaceAtMost_95raw = function (n, re, replacer, string) {
    var count = 0;

    function jsReplacer(match) {
      if (count++ >= n) {
        return match;
      }

      var i = arguments.length - 3;
      var submatches = new Array(i);

      while (i > 0) {
        var submatch = arguments[i];
        submatches[--i] = submatch ? _J3__36elm_36core_36Maybe_36Just(submatch) : _I6__36elm_36core_36Maybe_36Nothing;
      }

      return replacer(_Tj__36elm_36regex_36Regex_36Match_95raw(match, arguments[arguments.length - 2], count, _7h__95List_95fromArray(submatches)));
    }

    return string.replace(re, jsReplacer);
  };

  var _PF__36elm_36core_36Dict_36foldr_95raw = function (func, acc, t) {
    foldr: while (true) {
      if (t.$ === -2) {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;

        var $temp$func = func,
            $temp$acc = _IL_(func, key, value, _PF__36elm_36core_36Dict_36foldr_95raw(func, acc, right)),
            $temp$t = left;

        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
  };

  var _PC__36elm_36core_36Set_36toList = function (_v0) {
    var dict = _v0;
    return _Qu__36elm_36core_36Dict_36keys(dict);
  };

  var _I0__36elm_36core_36List_36foldl_95raw = function (func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;

        var $temp$func = func,
            $temp$acc = _Hx_(func, x, acc),
            $temp$list = xs;

        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  };

  var _Qj__36elm_36core_36List_36rangeHelp_95raw = function (lo, hi, list) {
    rangeHelp: while (true) {
      if (_L5__95Utils_95cmp(lo, hi) < 1) {
        var $temp$lo = lo,
            $temp$hi = hi - 1,
            $temp$list = _IK_(hi, list);

        lo = $temp$lo;
        hi = $temp$hi;
        list = $temp$list;
        continue rangeHelp;
      } else {
        return list;
      }
    }
  };

  var _Sl__36elm_36core_36Array_36compressNodes_95raw = function (nodes, acc) {
    compressNodes: while (true) {
      var _v0 = _Sk__95JsArray_95initializeFromList_95raw(32, nodes);

      var node = _v0.a;
      var remainingNodes = _v0.b;

      var newAcc = _IK_(_TM__36elm_36core_36Array_36SubTree(node), acc);

      if (!remainingNodes.b) {
        return _K1__36elm_36core_36List_36reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
            $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  };

  var _N0__36elm_36core_36Tuple_36first = function (_v0) {
    var x = _v0.a;
    return x;
  };

  var _Ri__36elm_36core_36Array_36treeFromBuilder_95raw = function (nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = _Si__36elm_36core_36Basics_36ceiling(nodeListSize / 32);

      if (newNodeSize === 1) {
        return _Sk__95JsArray_95initializeFromList_95raw(32, nodeList).a;
      } else {
        var $temp$nodeList = _Sl__36elm_36core_36Array_36compressNodes_95raw(nodeList, _U_r3),
            $temp$nodeListSize = newNodeSize;

        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  };

  var _Qx__36elm_36core_36Array_36builderToArray_95raw = function (reverseNodeList, builder) {
    if (!builder.l) {
      return _Re__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_Rf__36elm_36core_36Elm_36JsArray_36length(builder.n), 5, _O5__36elm_36core_36Elm_36JsArray_36empty, builder.n);
    } else {
      var treeLen = builder.l * 32;

      var depth = _OH__36elm_36core_36Basics_36floor(_Rh__36elm_36core_36Basics_36logBase_95raw(32, treeLen - 1));

      var correctNodeList = reverseNodeList ? _K1__36elm_36core_36List_36reverse(builder.o) : builder.o;

      var tree = _Ri__36elm_36core_36Array_36treeFromBuilder_95raw(correctNodeList, builder.l);

      return _Re__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_Rf__36elm_36core_36Elm_36JsArray_36length(builder.n) + treeLen, _Rj__36elm_36core_36Basics_36max_95raw(5, depth * 5), tree, builder.n);
    }
  };

  var _PI__36elm_36core_36Array_36initializeHelp_95raw = function (fn, fromIndex, len, nodeList, tail) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return _Qx__36elm_36core_36Array_36builderToArray_95raw(false, {
          o: nodeList,
          l: len / 32 | 0,
          n: tail
        });
      } else {
        var leaf = _Qy__36elm_36core_36Array_36Leaf(_PH__95JsArray_95initialize_95raw(32, fromIndex, fn));

        var $temp$fn = fn,
            $temp$fromIndex = fromIndex - 32,
            $temp$len = len,
            $temp$nodeList = _IK_(leaf, nodeList),
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

  var _ND__36elm_36core_36Array_36initialize_95raw = function (len, fn) {
    if (len <= 0) {
      return _O1__36elm_36core_36Array_36empty;
    } else {
      var tailLen = len % 32;

      var tail = _PH__95JsArray_95initialize_95raw(tailLen, len - tailLen, fn);

      var initialFromIndex = len - tailLen - 32;
      return _PI__36elm_36core_36Array_36initializeHelp_95raw(fn, initialFromIndex, len, _U_r3, tail);
    }
  };

  var _Hz__36elm_36core_36Result_36isOk = function (result) {
    if (!result.$) {
      return true;
    } else {
      return false;
    }
  };

  var _Py__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt = function (handler) {
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

  var _LQ__36elm_36core_36List_36foldrHelper_95raw = function (fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;

      if (!r1.b) {
        return _Hx_(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;

        if (!r2.b) {
          return _Hx_(fn, a, _Hx_(fn, b, acc));
        } else {
          var c = r2.a;
          var r3 = r2.b;

          if (!r3.b) {
            return _Hx_(fn, a, _Hx_(fn, b, _Hx_(fn, c, acc)));
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res = ctr > 500 ? _I0__36elm_36core_36List_36foldl_95raw(fn, acc, _K1__36elm_36core_36List_36reverse(r4)) : _LQ__36elm_36core_36List_36foldrHelper_95raw(fn, acc, ctr + 1, r4);
            return _Hx_(fn, a, _Hx_(fn, b, _Hx_(fn, c, _Hx_(fn, d, res))));
          }
        }
      }
    }
  };

  var _NE__36elm_36core_36Task_36spawnCmd_95raw = function (router, _v0) {
    var task = _v0;
    return _PG_(_Kd__95Scheduler_95andThen_95raw(_PJ__36elm_36core_36Platform_36sendToApp(router), task));
  };

  var _Js__36elm_36core_36Task_36cmdMap_95raw = function (tagger, _v0) {
    var task = _v0;
    return _Kc__36elm_36core_36Task_36map_95raw(tagger, task);
  };

  var _JZ__36elm_36core_36List_36any_95raw = function (isOkay, list) {
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

  var _LN__36elm_36core_36Dict_36foldl_95raw = function (func, acc, dict) {
    foldl: while (true) {
      if (dict.$ === -2) {
        return acc;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var $temp$func = func,
            $temp$acc = _IL_(func, key, value, _LN__36elm_36core_36Dict_36foldl_95raw(func, acc, left)),
            $temp$dict = right;

        func = $temp$func;
        acc = $temp$acc;
        dict = $temp$dict;
        continue foldl;
      }
    }
  };

  var _JY__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count = function (_v0) {
    var samples = _v0;
    return _LN__36elm_36core_36Dict_36foldl_95raw(_LO_((_v1, times, acc) => _LP__36elm_36core_36List_36length(times) + acc), 0, samples);
  };

  var _IA__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress = function (status) {
    switch (status.$) {
      case 0:
        return 0;

      case 1:
        return 0;

      case 2:
        var samples = status.b;
        return _JX__36elm_36core_36Basics_36clamp_95raw(0, 1, _JY__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples) / (25 * 5));

      case 3:
        return 1;

      default:
        return 1;
    }
  };

  var _7c__36elm_95explorations_36benchmark_36Benchmark_36done = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var status = benchmark_.c;
        return _IA__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status) === 1;

      case 1:
        var benchmarks = benchmark_.b;
        return _ID__36elm_36core_36List_36all_95raw(_IE__36elm_36core_36Basics_36eq(1), _IG__36elm_36core_36List_36map_95raw(_IA__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress, _IG__36elm_36core_36List_36map_95raw(function (_v1) {
          var status = _v1.c;
          return status;
        }, benchmarks)));

      default:
        var benchmarks = benchmark_.b;
        return _ID__36elm_36core_36List_36all_95raw(_7c__36elm_95explorations_36benchmark_36Benchmark_36done, benchmarks);
    }
  };

  var _Sm__36elm_36core_36Dict_36balance_95raw = function (color, key, value, left, right) {
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
        return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, lK, lV, lLeft, lRight), _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rLeft, rRight));
      } else {
        return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, rK, rV, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, left, rLeft), rRight);
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
        return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, key, value, lRight, right));
      } else {
        return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, left, right);
      }
    }
  };

  var _Rl__36elm_36core_36Dict_36insertHelp_95raw = function (key, value, dict) {
    if (dict.$ === -2) {
      return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _Lg__36elm_36core_36Set_36empty, _Lg__36elm_36core_36Set_36empty);
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;

      var _v1 = _Rk__95Utils_95compare_95raw(key, nKey);

      switch (_v1) {
        case 0:
          return _Sm__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _Rl__36elm_36core_36Dict_36insertHelp_95raw(key, value, nLeft), nRight);

        case 1:
          return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(nColor, nKey, value, nLeft, nRight);

        default:
          return _Sm__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, nLeft, _Rl__36elm_36core_36Dict_36insertHelp_95raw(key, value, nRight));
      }
    }
  };

  var _R4__36elm_36core_36Dict_36insert_95raw = function (key, value, dict) {
    var _v0 = _Rl__36elm_36core_36Dict_36insertHelp_95raw(key, value, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _OF__36BrianHicks_36elm_95trend_36Trend_36Linear_36line = function (_v0) {
    var precalculated = _v0.a;
    return precalculated;
  };

  var _RZ__36elm_36core_36Dict_36map_95raw = function (func, dict) {
    if (dict.$ === -2) {
      return _Lg__36elm_36core_36Set_36empty;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, _Hx_(func, key, value), _RZ__36elm_36core_36Dict_36map_95raw(func, left), _RZ__36elm_36core_36Dict_36map_95raw(func, right));
    }
  };

  var _RW__36elm_36core_36Result_36map_95raw = function (func, ra) {
    if (!ra.$) {
      var a = ra.a;
      return _KU__36elm_36core_36Result_36Ok(func(a));
    } else {
      var e = ra.a;
      return _KW__36elm_36core_36Result_36Err(e);
    }
  };

  var _Mu__36elm_36core_36List_36partition_95raw = function (pred, list) {
    var step = _Jf_(function (x, _v0) {
      var trues = _v0.a;
      var falses = _v0.b;
      return pred(x) ? _HX_(_IK_(x, trues), falses) : _HX_(trues, _IK_(x, falses));
    });

    return _Je__36elm_36core_36List_36foldr_95raw(step, _HX_(_U_r3, _U_r3), list);
  };

  var _PY__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw = function (_v0, x) {
    var slope = _v0.aR;
    var intercept = _v0.aL;
    return slope * x + intercept;
  };

  var _SZ__36elm_36core_36Result_36fromMaybe_95raw = function (err, maybe) {
    if (!maybe.$) {
      var v = maybe.a;
      return _KU__36elm_36core_36Result_36Ok(v);
    } else {
      return _KW__36elm_36core_36Result_36Err(err);
    }
  };

  var _Sa__36elm_36core_36Maybe_36map3_95raw = function (func, ma, mb, mc) {
    if (ma.$ === 1) {
      return _I6__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _I6__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;

        if (mc.$ === 1) {
          return _I6__36elm_36core_36Maybe_36Nothing;
        } else {
          var c = mc.a;
          return _J3__36elm_36core_36Maybe_36Just(_IL_(func, a, b, c));
        }
      }
    }
  };

  var _TG__36elm_36core_36Maybe_36andThen_95raw = function (callback, maybeValue) {
    if (!maybeValue.$) {
      var value = maybeValue.a;
      return callback(value);
    } else {
      return _I6__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _Ic__36elm_36core_36Maybe_36map_95raw = function (f, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return _J3__36elm_36core_36Maybe_36Just(f(value));
    } else {
      return _I6__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _Lz__36elm_36core_36Maybe_36map2_95raw = function (func, ma, mb) {
    if (ma.$ === 1) {
      return _I6__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _I6__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;
        return _J3__36elm_36core_36Maybe_36Just(_Hx_(func, a, b));
      }
    }
  };

  var _MI__36elm_36core_36List_36drop_95raw = function (n, list) {
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

  var _Ms__36elm_36core_36List_36head = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _J3__36elm_36core_36Maybe_36Just(x);
    } else {
      return _I6__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean = function (numbers) {
    if (!numbers.b) {
      return _KW__36elm_36core_36Result_36Err(_QK__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(1));
    } else {
      return _KU__36elm_36core_36Result_36Ok(_OP__36elm_36core_36List_36sum(numbers) / _LP__36elm_36core_36List_36length(numbers));
    }
  };

  var _Tw__36elm_36core_36List_36takeReverse_95raw = function (n, list, kept) {
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
              $temp$kept = _IK_(x, kept);

          n = $temp$n;
          list = $temp$list;
          kept = $temp$kept;
          continue takeReverse;
        }
      }
    }
  };

  var _Tp__36elm_36core_36List_36takeFast_95raw = function (ctr, n, list) {
    if (n <= 0) {
      return _U_r3;
    } else {
      var _v0 = _HX_(n, list);

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
                      b: _U_r3
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
                          b: _U_r3
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
                    return ctr > 1000 ? _IK_(x, _IK_(y, _IK_(z, _IK_(w, _Tt__36elm_36core_36List_36takeTailRec_95raw(n - 4, tl))))) : _IK_(x, _IK_(y, _IK_(z, _IK_(w, _Tp__36elm_36core_36List_36takeFast_95raw(ctr + 1, n - 4, tl)))));
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
        b: _U_r3
      };
    }
  };

  var _Te__36elm_36core_36Result_36toMaybe = function (result) {
    if (!result.$) {
      var v = result.a;
      return _J3__36elm_36core_36Maybe_36Just(v);
    } else {
      return _I6__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _TF__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw = function (k, xs) {
    var index = _LP__36elm_36core_36List_36length(xs) * k;
    return !(index - _OH__36elm_36core_36Basics_36floor(index)) ? _Ms__36elm_36core_36List_36head(_MI__36elm_36core_36List_36drop_95raw(_Si__36elm_36core_36Basics_36ceiling(index) - 1, xs)) : _Te__36elm_36core_36Result_36toMaybe(_OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_Tf__36elm_36core_36List_36take_95raw(2, _MI__36elm_36core_36List_36drop_95raw(_OH__36elm_36core_36Basics_36floor(index) - 1, xs))));
  };

  var _Sc__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw = function (pct, slopes, points) {
    var slope = _TF__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(pct, slopes);

    var intercept = _TG__36elm_36core_36Maybe_36andThen_95raw(_TH__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile(pct), _Ic__36elm_36core_36Maybe_36map_95raw(_SV__36elm_36core_36List_36sort, _Ic__36elm_36core_36Maybe_36map_95raw(m => _IG__36elm_36core_36List_36map_95raw(function (_v0) {
      var x = _v0.a;
      var y = _v0.b;
      return y - m * x;
    }, points), slope)));

    return _Lz__36elm_36core_36Maybe_36map2_95raw(_Rt__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slope, intercept);
  };

  var _Ra__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust = function (values) {
    if (!values.b) {
      return _KW__36elm_36core_36Result_36Err(_QK__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _KW__36elm_36core_36Result_36Err(_QK__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var slopes = _SV__36elm_36core_36List_36sort(_I0__36elm_36core_36List_36foldl_95raw(_Jf_(function (_v1, acc1) {
          var x = _v1.a;
          var y = _v1.b;
          return _I0__36elm_36core_36List_36foldl_95raw(_Jf_(function (_v2, acc2) {
            var x1 = _v2.a;
            var y1 = _v2.b;
            var res = (y - y1) / (x - x1);
            return _SW__36elm_36core_36Basics_36isNaN(res) ? acc2 : _IK_(res, acc2);
          }), acc1, values);
        }), _U_r3, values));

        var finiteSlopes = _N1__36elm_36core_36List_36filter_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, _Jc__36elm_36core_36Basics_36not, _SX__36elm_36core_36Basics_36isInfinite), slopes);

        return _SZ__36elm_36core_36Result_36fromMaybe_95raw(_Ry__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros, _Sa__36elm_36core_36Maybe_36map3_95raw(_LO_((trendLine, lower, upper) => _Rr__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, _Sb__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw(lower, upper))), _Sc__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.5, finiteSlopes, values), _Sc__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.975, slopes, values), _Sc__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.025, slopes, values)));
      }
    }
  };

  var _ON__36elm_36core_36Result_36withDefault_95raw = function (def, result) {
    if (!result.$) {
      var a = result.a;
      return a;
    } else {
      return def;
    }
  };

  var _QQ__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups = function (_v0) {
    var samples = _v0;
    return _ON__36elm_36core_36Result_36withDefault_95raw(_HX_(samples, _Lg__36elm_36core_36Set_36empty), _RW__36elm_36core_36Result_36map_95raw(_Hx_(_RX__36elm_36core_36Dict_36foldl, _LO_(function (key, _v1, _v2) {
      var good = _v1.a;
      var outliers = _v1.b;
      var accGood = _v2.a;
      var accOutliers = _v2.b;
      return _HX_(_R4__36elm_36core_36Dict_36insert_95raw(key, good, accGood), _R4__36elm_36core_36Dict_36insert_95raw(key, outliers, accOutliers));
    }), _HX_(_Lg__36elm_36core_36Set_36empty, _Lg__36elm_36core_36Set_36empty)), _RW__36elm_36core_36Result_36map_95raw(line => _RZ__36elm_36core_36Dict_36map_95raw(_Jf_(function (sampleSize, values) {
      var predicted = _PY__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(line, sampleSize);

      var upperBound = predicted * 1.1;
      var lowerBound = predicted / 1.1;
      return _Mu__36elm_36core_36List_36partition_95raw(v => _L5__95Utils_95cmp(lowerBound, v) < 0 && _L5__95Utils_95cmp(v, upperBound) < 0, values);
    }), samples), _RW__36elm_36core_36Result_36map_95raw(_OF__36BrianHicks_36elm_95trend_36Trend_36Linear_36line, _Ra__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust(_QO__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify(samples))))));
  };

  var _QP__36elm_36core_36Tuple_36mapFirst_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _HX_(func(x), y);
  };

  var _Kx__36elm_36core_36Tuple_36mapSecond_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _HX_(x, func(y));
  };

  var _Ss__36elm_36core_36Result_36andThen_95raw = function (callback, result) {
    if (!result.$) {
      var value = result.a;
      return callback(value);
    } else {
      var msg = result.a;
      return _KW__36elm_36core_36Result_36Err(msg);
    }
  };

  var _Rs__36elm_36core_36Result_36map2_95raw = function (func, ra, rb) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _KW__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _KW__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;
        return _KU__36elm_36core_36Result_36Ok(_Hx_(func, a, b));
      }
    }
  };

  var _Rq__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev = function (numbers) {
    var helper = seriesMean => _RW__36elm_36core_36Result_36map_95raw(_St__36elm_36core_36Basics_36sqrt, _OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_IG__36elm_36core_36List_36map_95raw(n => _Hx_(_OQ__36elm_36core_36Basics_36pow, n - seriesMean, 2), numbers)));

    return _Ss__36elm_36core_36Result_36andThen_95raw(helper, _OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(numbers));
  };

  var _M6__36elm_36core_36List_36unzip = function (pairs) {
    var step_raw = function (_v0, _v1) {
      var x = _v0.a;
      var y = _v0.b;
      var xs = _v1.a;
      var ys = _v1.b;
      return _HX_(_IK_(x, xs), _IK_(y, ys));
    },
        step = _Jf_(step_raw);

    return _Je__36elm_36core_36List_36foldr_95raw(step, _HX_(_U_r3, _U_r3), pairs);
  };

  var _Rp__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation = function (values) {
    if (!values.b) {
      return _KW__36elm_36core_36Result_36Err(_QK__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _KW__36elm_36core_36Result_36Err(_QK__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var standardize_raw = (meanResult, stddevResult, series) => _Rs__36elm_36core_36Result_36map2_95raw(_Jf_((meanValue, stddevValue) => _IG__36elm_36core_36List_36map_95raw(point => (point - meanValue) / stddevValue, series)), meanResult, stddevResult),
            standardize = _LO_(standardize_raw);

        var _v1 = _M6__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var summedProduct = _RW__36elm_36core_36Result_36map_95raw(_OP__36elm_36core_36List_36sum, _Rs__36elm_36core_36Result_36map2_95raw(_Jf_((stdX, stdY) => _MF__95List_95map2_95raw(_Sq__36elm_36core_36Basics_36mul, stdX, stdY)), standardize_raw(_OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs), _Rq__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs), xs), standardize_raw(_OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), _Rq__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), ys)));

        return _Ss__36elm_36core_36Result_36andThen_95raw(val => _SW__36elm_36core_36Basics_36isNaN(val) ? _KW__36elm_36core_36Result_36Err(_Ry__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros) : _KU__36elm_36core_36Result_36Ok(val), _RW__36elm_36core_36Result_36map_95raw(sum => sum / _LP__36elm_36core_36List_36length(values), summedProduct));
      }
    }
  };

  var _Ro__36elm_36core_36Result_36map3_95raw = function (func, ra, rb, rc) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _KW__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _KW__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;

        if (rc.$ === 1) {
          var x = rc.a;
          return _KW__36elm_36core_36Result_36Err(x);
        } else {
          var c = rc.a;
          return _KU__36elm_36core_36Result_36Ok(_IL_(func, a, b, c));
        }
      }
    }
  };

  var _R6__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick = function (values) {
    if (!values.b) {
      return _KW__36elm_36core_36Result_36Err(_QK__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _KW__36elm_36core_36Result_36Err(_QK__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var _v1 = _M6__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var slopeResult = _Ro__36elm_36core_36Result_36map3_95raw(_LO_((correl, stddevY, stddevX) => correl * stddevY / stddevX), _Rp__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation(values), _Rq__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), _Rq__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs));

        var intercept = _Ro__36elm_36core_36Result_36map3_95raw(_LO_((meanY, slope, meanX) => meanY - slope * meanX), _OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), slopeResult, _OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs));

        return _RW__36elm_36core_36Result_36map_95raw(trendLine => _Rr__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, values), _Rs__36elm_36core_36Result_36map2_95raw(_Rt__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slopeResult, intercept));
      }
    }
  };

  var _NN__36elm_95explorations_36benchmark_36Benchmark_36finalize = function (samples) {
    var _v0 = _PT__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend(samples);

    if (!_v0.$) {
      var trend = _v0.a;
      return _PU__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw(samples, trend);
    } else {
      var err = _v0.a;
      return _NG__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure(_PV__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError(err));
    }
  };

  var _PN__36elm_36core_36List_36minimum = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _J3__36elm_36core_36Maybe_36Just(_I0__36elm_36core_36List_36foldl_95raw(_Qz__36elm_36core_36Basics_36min, x, xs));
    } else {
      return _I6__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _R1__36elm_36core_36List_36repeatHelp_95raw = function (result, n, value) {
    repeatHelp: while (true) {
      if (n <= 0) {
        return result;
      } else {
        var $temp$result = _IK_(value, result),
            $temp$n = n - 1,
            $temp$value = value;

        result = $temp$result;
        n = $temp$n;
        value = $temp$value;
        continue repeatHelp;
      }
    }
  };

  var _PR__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize = function (sampleSize) {
    var helper_raw = function (rough, magnitude) {
      helper: while (true) {
        if (rough > 10) {
          var $temp$rough = _R2__36elm_36core_36Basics_36round(rough / 10),
              $temp$magnitude = magnitude * 10;

          rough = $temp$rough;
          magnitude = $temp$magnitude;
          continue helper;
        } else {
          return rough * magnitude;
        }
      }
    },
        helper = _Jf_(helper_raw);

    return helper_raw(sampleSize, 1);
  };

  var _Ly__36elm_36core_36Maybe_36withDefault_95raw = function (_default, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  };

  var _NK__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw = function (minimumRuntime, operation_) {
    var sampleSize = i => i * 10;

    var resample = _Jf_((iteration, total) => _L5__95Utils_95cmp(total, minimumRuntime) < 0 ? _Kd__95Scheduler_95andThen_95raw(resample(iteration + 1), _Kc__36elm_36core_36Task_36map_95raw(_Hx_(_M9__36elm_36core_36Basics_36composeR, _PN__36elm_36core_36List_36minimum, _PO__36elm_36core_36Maybe_36withDefault(0)), _Ko__36elm_36core_36Task_36sequence(_PQ__36elm_36core_36List_36repeat_95raw(3, _NO__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize(iteration), operation_))))) : _La__36elm_36core_36Task_36succeed(sampleSize(iteration)));

    return _Kc__36elm_36core_36Task_36map_95raw(_PR__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize, _Hx_(resample, 1, 0));
  };

  var _R3__36elm_36core_36Dict_36get_95raw = function (targetKey, dict) {
    get: while (true) {
      if (dict.$ === -2) {
        return _I6__36elm_36core_36Maybe_36Nothing;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var _v1 = _Rk__95Utils_95compare_95raw(targetKey, key);

        switch (_v1) {
          case 0:
            var $temp$targetKey = targetKey,
                $temp$dict = left;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;

          case 1:
            return _J3__36elm_36core_36Maybe_36Just(value);

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

  var _TN__36elm_36core_36Dict_36getMin = function (dict) {
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

  var _Sn__36elm_36core_36Dict_36moveRedLeft = function (dict) {
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
        return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rlK, rlV, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), rlL), _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rlR, rRight));
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
          return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _TP__36elm_36core_36Dict_36moveRedRight = function (dict) {
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
        return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, lRight, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight)));
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
          return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _Sp__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw = function (targetKey, dict, color, key, value, left, right) {
    if (left.$ === -1 && !left.a) {
      var _v1 = left.a;
      var lK = left.b;
      var lV = left.c;
      var lLeft = left.d;
      var lRight = left.e;
      return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, lK, lV, lLeft, _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, lRight, right));
    } else {
      _v2$2: while (true) {
        if (right.$ === -1 && right.a === 1) {
          if (right.d.$ === -1) {
            if (right.d.a === 1) {
              var _v3 = right.a;
              var _v4 = right.d;
              var _v5 = _v4.a;
              return _TP__36elm_36core_36Dict_36moveRedRight(dict);
            } else {
              break _v2$2;
            }
          } else {
            var _v6 = right.a;
            var _v7 = right.d;
            return _TP__36elm_36core_36Dict_36moveRedRight(dict);
          }
        } else {
          break _v2$2;
        }
      }

      return dict;
    }
  };

  var _TO__36elm_36core_36Dict_36removeMin = function (dict) {
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
          return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _TO__36elm_36core_36Dict_36removeMin(left), right);
        } else {
          var _v4 = _Sn__36elm_36core_36Dict_36moveRedLeft(dict);

          if (_v4.$ === -1) {
            var nColor = _v4.a;
            var nKey = _v4.b;
            var nValue = _v4.c;
            var nLeft = _v4.d;
            var nRight = _v4.e;
            return _Sm__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _TO__36elm_36core_36Dict_36removeMin(nLeft), nRight);
          } else {
            return _Lg__36elm_36core_36Set_36empty;
          }
        }
      } else {
        return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _TO__36elm_36core_36Dict_36removeMin(left), right);
      }
    } else {
      return _Lg__36elm_36core_36Set_36empty;
    }
  };

  var _Rn__36elm_36core_36Dict_36removeHelp_95raw = function (targetKey, dict) {
    if (dict.$ === -2) {
      return _Lg__36elm_36core_36Set_36empty;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_L5__95Utils_95cmp(targetKey, key) < 0) {
        if (left.$ === -1 && left.a === 1) {
          var _v4 = left.a;
          var lLeft = left.d;

          if (lLeft.$ === -1 && !lLeft.a) {
            var _v6 = lLeft.a;
            return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _Rn__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
          } else {
            var _v7 = _Sn__36elm_36core_36Dict_36moveRedLeft(dict);

            if (_v7.$ === -1) {
              var nColor = _v7.a;
              var nKey = _v7.b;
              var nValue = _v7.c;
              var nLeft = _v7.d;
              var nRight = _v7.e;
              return _Sm__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _Rn__36elm_36core_36Dict_36removeHelp_95raw(targetKey, nLeft), nRight);
            } else {
              return _Lg__36elm_36core_36Set_36empty;
            }
          }
        } else {
          return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _Rn__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
        }
      } else {
        return _So__36elm_36core_36Dict_36removeHelpEQGT_95raw(targetKey, _Sp__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw(targetKey, dict, color, key, value, left, right));
      }
    }
  };

  var _So__36elm_36core_36Dict_36removeHelpEQGT_95raw = function (targetKey, dict) {
    if (dict.$ === -1) {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_JB__95Utils_95eq(targetKey, key)) {
        var _v1 = _TN__36elm_36core_36Dict_36getMin(right);

        if (_v1.$ === -1) {
          var minKey = _v1.b;
          var minValue = _v1.c;
          return _Sm__36elm_36core_36Dict_36balance_95raw(color, minKey, minValue, left, _TO__36elm_36core_36Dict_36removeMin(right));
        } else {
          return _Lg__36elm_36core_36Set_36empty;
        }
      } else {
        return _Sm__36elm_36core_36Dict_36balance_95raw(color, key, value, left, _Rn__36elm_36core_36Dict_36removeHelp_95raw(targetKey, right));
      }
    } else {
      return _Lg__36elm_36core_36Set_36empty;
    }
  };

  var _R5__36elm_36core_36Dict_36remove_95raw = function (key, dict) {
    var _v0 = _Rn__36elm_36core_36Dict_36removeHelp_95raw(key, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _PS__36elm_36core_36Dict_36update_95raw = function (targetKey, alter, dictionary) {
    var _v0 = alter(_R3__36elm_36core_36Dict_36get_95raw(targetKey, dictionary));

    if (!_v0.$) {
      var value = _v0.a;
      return _R4__36elm_36core_36Dict_36insert_95raw(targetKey, value, dictionary);
    } else {
      return _R5__36elm_36core_36Dict_36remove_95raw(targetKey, dictionary);
    }
  };

  var _NM__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw = function (sampleSize, sample, _v0) {
    var samplesDict = _v0;
    return _PS__36elm_36core_36Dict_36update_95raw(sampleSize, function (value) {
      if (value.$ === 1) {
        return _J3__36elm_36core_36Maybe_36Just({
          $: 1,
          a: sample,
          b: _U_r3
        });
      } else {
        var samples_ = value.a;
        return _J3__36elm_36core_36Maybe_36Just(_IK_(sample, samples_));
      }
    }, samplesDict);
  };

  var _NI__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup = function (operation_) {
    var toCollect = 1000;
    var sampleSize = 10000;

    var helper = soFar => _L5__95Utils_95cmp(soFar, toCollect) > -1 ? _La__36elm_36core_36Task_36succeed(0) : _Kd__95Scheduler_95andThen_95raw(helper, _Kc__36elm_36core_36Task_36map_95raw(_PL__36elm_36core_36Basics_36add(soFar), _NO__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation_)));

    return helper(0);
  };

  var _Kl__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw = function (operation, status) {
    switch (status.$) {
      case 0:
        return _NF__95Scheduler_95onError_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _La__36elm_36core_36Task_36succeed, _NG__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _NH__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _Kc__36elm_36core_36Task_36map_95raw(_v1 => _Le__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized, _NI__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup(operation)));

      case 1:
        return _NF__95Scheduler_95onError_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _La__36elm_36core_36Task_36succeed, _NG__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _NH__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _Kc__36elm_36core_36Task_36map_95raw(sampleSize => _NJ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(sampleSize, _Lg__36elm_36core_36Set_36empty), _NK__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw(1, operation)));

      case 2:
        var baseSampleSize = status.a;
        var samples = status.b;
        var sampleSize = baseSampleSize * (2 * _NL__95Basics_95modBy_95raw(25, _JY__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples)) + 1);
        return _NF__95Scheduler_95onError_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _La__36elm_36core_36Task_36succeed, _NG__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _NH__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _Kc__36elm_36core_36Task_36map_95raw(function (newSample) {
          var newSamples = _NM__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw(sampleSize, newSample, samples);

          return _L5__95Utils_95cmp(_JY__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(newSamples), 25 * 5) > -1 ? _NN__36elm_95explorations_36benchmark_36Benchmark_36finalize(newSamples) : _NJ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(baseSampleSize, newSamples);
        }, _NO__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation)));

      default:
        return _La__36elm_36core_36Task_36succeed(status);
    }
  };

  var _JG__36elm_95explorations_36benchmark_36Benchmark_36step = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var name = benchmark_.a;
        var inner = benchmark_.b;
        var status = benchmark_.c;
        return _Kc__36elm_36core_36Task_36map_95raw(_Hx_(_Kj__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single, name, inner), _Kl__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));

      case 1:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _Kc__36elm_36core_36Task_36map_95raw(_Km__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series(name), _Ko__36elm_36core_36Task_36sequence(_IG__36elm_36core_36List_36map_95raw(function (_v1) {
          var name_ = _v1.a;
          var inner = _v1.b;
          var status = _v1.c;
          return _Kc__36elm_36core_36Task_36map_95raw(status_ => _Kr_(name_, inner, status_), _Kl__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));
        }, benchmarks)));

      default:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _Kc__36elm_36core_36Task_36map_95raw(_Kp__36elm_95explorations_36benchmark_36Benchmark_36describe(name), _Ko__36elm_36core_36Task_36sequence(_IG__36elm_36core_36List_36map_95raw(_JG__36elm_95explorations_36benchmark_36Benchmark_36step, benchmarks)));
    }
  };

  var _Z__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36update_95raw = function (msg, model) {
    var benchmark = msg;
    return _HX_(benchmark, _Hr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36next(benchmark));
  };

  var _Hd__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark = function (internal) {
    switch (internal.$) {
      case 0:
        var name = internal.a;
        var status = internal.c;
        return _Ip__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw(name, status);

      case 1:
        var name = internal.a;
        var benchmarks = internal.b;
        return _Iq__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw(name, _IG__36elm_36core_36List_36map_95raw(function (_v1) {
          var childName = _v1.a;
          var status = _v1.c;
          return _HX_(childName, status);
        }, benchmarks));

      default:
        var name = internal.a;
        var benchmarks = internal.b;
        return _Ir__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw(name, _IG__36elm_36core_36List_36map_95raw(_Hd__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark, benchmarks));
    }
  };

  var _JQ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAllAttr_95raw = function (fnMsg, fnVar, attr) {
    switch (attr.$) {
      case 15:
        var htmlAttr = attr.a;
        return _Kw__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Event(_L6__95VirtualDom_95mapAttribute_95raw(fnMsg, htmlAttr));

      case 16:
        var htmlAttr = attr.a;
        return _L7__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36InputEvent(_L6__95VirtualDom_95mapAttribute_95raw(fnMsg, htmlAttr));

      case 17:
        var htmlAttr = attr.a;
        return _J4__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Attr(_L6__95VirtualDom_95mapAttribute_95raw(fnMsg, htmlAttr));

      case 0:
        var v = attr.a;
        var b = attr.b;
        return _L8__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Vary_95raw(fnVar(v), b);

      case 1:
        var len = attr.a;
        return _L9__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Height(len);

      case 2:
        var len = attr.a;
        return _Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(len);

      case 3:
        return _KM__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Inline;

      case 4:
        var align = attr.a;
        return _LA__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36HAlign(align);

      case 5:
        var align = attr.a;
        return _LB__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36VAlign(align);

      case 6:
        var x = attr.a;
        var y = attr.b;
        var z = attr.c;
        return _LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(x, y, z);

      case 7:
        var fr = attr.a;
        return _LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(fr);

      case 8:
        return _KO__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Hidden;

      case 9:
        var o = attr.a;
        return _LE__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Opacity(o);

      case 10:
        var x = attr.a;
        var y = attr.b;
        return _LF__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacing_95raw(x, y);

      case 11:
        var t = attr.a;
        var r = attr.b;
        var b = attr.c;
        var l = attr.d;
        return _LG__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Margin_95raw(t, r, b, l);

      case 12:
        return _KQ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Expand;

      case 13:
        var t = attr.a;
        var r = attr.b;
        var b = attr.c;
        var l = attr.d;
        return _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw(t, r, b, l);

      case 14:
        var t = attr.a;
        var r = attr.b;
        var b = attr.c;
        var l = attr.d;
        return _LH__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PhantomPadding_95raw(t, r, b, l);

      case 18:
        var str = attr.a;
        return _LI__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36GridArea(str);

      case 19:
        var pos = attr.a;
        return _LJ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36GridCoords(pos);

      case 20:
        var on = attr.a;
        return _LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(on);

      case 21:
        var i = attr.a;
        return _LL__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Shrink(i);

      default:
        var x = attr.a;
        return _LM__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Overflow(x);
    }
  };

  var _Ii__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapChildren_95raw = function (fn, children) {
    if (!children.$) {
      var c = children.a;
      return _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal(_IG__36elm_36core_36List_36map_95raw(fn, c));
    } else {
      var keyed = children.a;
      return _Jt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Keyed(_IG__36elm_36core_36List_36map_95raw(_Ju__36elm_36core_36Tuple_36mapSecond(fn), keyed));
    }
  };

  var _HY__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAll_95raw = function (onMsg, onStyle, onVariation, el) {
    switch (el.$) {
      case 0:
        return _I3__36mdgriffith_36style_95elements_36Element_36empty;

      case 1:
        var f = el.a;
        return _IZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacer(f);

      case 2:
        var dec = el.a;
        var str = el.b;
        return _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(dec, str);

      case 3:
        var elm = el.a;
        var attrs = elm.c;
        var child = elm.g;
        var absolutelyPositioned = elm.b;
        var style = elm.e;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
          b: _Ic__36elm_36core_36Maybe_36map_95raw(_Id__36elm_36core_36List_36map(childEl => _HY__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAll_95raw(onMsg, onStyle, onVariation, childEl)), absolutelyPositioned),
          c: _IG__36elm_36core_36List_36map_95raw(_Hx_(_If__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAllAttr, onMsg, onVariation), attrs),
          g: _HY__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAll_95raw(onMsg, onStyle, onVariation, child),
          d: elm.d,
          e: _Ic__36elm_36core_36Maybe_36map_95raw(onStyle, style)
        });

      case 4:
        var elm = el.a;
        var attrs = elm.c;
        var children = elm.t;
        var absolutelyPositioned = elm.b;
        var style = elm.e;
        return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
          b: _Ic__36elm_36core_36Maybe_36map_95raw(_Id__36elm_36core_36List_36map(child => _HY__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAll_95raw(onMsg, onStyle, onVariation, child)), absolutelyPositioned),
          c: _IG__36elm_36core_36List_36map_95raw(_Hx_(_If__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAllAttr, onMsg, onVariation), attrs),
          t: _Ii__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapChildren_95raw(child => _HY__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAll_95raw(onMsg, onStyle, onVariation, child), children),
          p: elm.p,
          d: elm.d,
          e: _Ic__36elm_36core_36Maybe_36map_95raw(onStyle, style)
        });

      default:
        var html = el.a;
        return _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw(_Ik__95VirtualDom_95map_95raw(onMsg, html));
    }
  };

  var _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length = function (l) {
    switch (l.$) {
      case 0:
        var x = l.a;
        return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px";

      case 1:
        var x = l.a;
        return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%";

      case 2:
        return "auto";

      case 3:
        var i = l.a;
        return "100%";

      default:
        var perc = l.a;
        var px = l.b;
        return "calc(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(perc) + ("% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(px) + "px)")));
    }
  };

  var _N2__36elm_36core_36Tuple_36second = function (_v0) {
    var y = _v0.b;
    return y;
  };

  var _Pr__36elm_36core_36List_36maybeCons_95raw = function (f, mx, xs) {
    var _v0 = f(mx);

    if (!_v0.$) {
      var x = _v0.a;
      return _IK_(x, xs);
    } else {
      return xs;
    }
  };

  var _N3__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36style_95raw = function (_class, elements) {
    var find = function (el) {
      if (!el.$) {
        var cls = el.a;
        var name = el.b;
        return _JB__95Utils_95eq(cls, _class) ? _J3__36elm_36core_36Maybe_36Just(name) : _I6__36elm_36core_36Maybe_36Nothing;
      } else {
        return _I6__36elm_36core_36Maybe_36Nothing;
      }
    };

    var found = _Ms__36elm_36core_36List_36head(_Mt__36elm_36core_36List_36filterMap_95raw(find, elements));

    if (found.$ === 1) {
      return "";
    } else {
      var cls = found.a;
      return cls;
    }
  };

  var _Mz__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36variation_95raw = function (_class, vary, elements) {
    var find = function (el) {
      if (el.$ === 1) {
        var cls = el.a;
        var _var = el.b;
        var name = el.c;
        return _JB__95Utils_95eq(_class, cls) && _JB__95Utils_95eq(_var, vary) ? _J3__36elm_36core_36Maybe_36Just(name) : _I6__36elm_36core_36Maybe_36Nothing;
      } else {
        return _I6__36elm_36core_36Maybe_36Nothing;
      }
    };

    var found = _Ms__36elm_36core_36List_36head(_Mt__36elm_36core_36List_36filterMap_95raw(find, elements));

    if (found.$ === 1) {
      return "";
    } else {
      var cls = found.a;
      return cls;
    }
  };

  var _KH__36mdgriffith_36style_95elements_36Style_36prepareSheet = function (_v0) {
    var css = _v0.bI;
    var findable = _v0.bR;

    var variations_raw = function (_class, vs) {
      var varys = _IG__36elm_36core_36List_36map_95raw(cls => _HX_(cls, true), _IG__36elm_36core_36List_36map_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, vary => _Mz__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36variation_95raw(_class, vary, findable), _N0__36elm_36core_36Tuple_36first), _N1__36elm_36core_36List_36filter_95raw(_N2__36elm_36core_36Tuple_36second, vs)));

      var parent = _N3__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36style_95raw(_class, findable);

      return _IK_(_HX_(parent, true), varys);
    },
        variations = _Jf_(variations_raw);

    return {
      bI: css,
      e: _class => _N3__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36style_95raw(_class, findable),
      X: _Jf_((_class, varys) => variations_raw(_class, varys))
    };
  };

  var _NZ__36elm_36core_36List_36append_95raw = function (xs, ys) {
    if (!ys.b) {
      return xs;
    } else {
      return _Je__36elm_36core_36List_36foldr_95raw(_M4__36elm_36core_36List_36cons, ys, xs);
    }
  };

  var _Qt__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36getFindable = function (find) {
    getFindable: while (true) {
      switch (find.$) {
        case 0:
          var findable = find.b;
          return {
            $: 1,
            a: findable,
            b: _U_r3
          };

        case 2:
          var selector = find.a;
          var $temp$find = selector;
          find = $temp$find;
          continue getFindable;

        case 4:
          var selectors = find.a;
          return _Ly__36elm_36core_36Maybe_36withDefault_95raw(_U_r3, _Ic__36elm_36core_36Maybe_36map_95raw(x => ({
            $: 1,
            a: x,
            b: _U_r3
          }), _Ms__36elm_36core_36List_36head(_K1__36elm_36core_36List_36reverse(_P1__36elm_36core_36List_36concatMap_95raw(_Qt__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36getFindable, selectors)))));

        default:
          return _U_r3;
      }
    }
  };

  var _P2__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asFindable = function (intermediate) {
    var findableProp = function (prop) {
      switch (prop.$) {
        case 1:
          var cls = prop.a;
          return _P2__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asFindable(cls);

        case 2:
          var cls = prop.b;
          return _P2__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asFindable(cls);

        default:
          return _U_r3;
      }
    };

    if (!intermediate.$) {
      var classRule = intermediate.a;
      return _JC__95Utils_95ap(_Qt__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36getFindable(classRule.B), _P1__36elm_36core_36List_36concatMap_95raw(findableProp, classRule.v));
    } else {
      return _U_r3;
    }
  };

  var _Qq__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36render_95raw = function (maybeGuard, selector) {
    var spacer = function (sel) {
      if (sel.$ === 1) {
        return "";
      } else {
        return " ";
      }
    };

    var renderAndSpace = _Jf_((i, sel) => !i ? _Qq__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36render_95raw(maybeGuard, sel) : _JC__95Utils_95ap(spacer(sel), _Qq__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36render_95raw(maybeGuard, sel)));

    var applyGuard = function (str) {
      if (maybeGuard.$ === 1) {
        return str;
      } else {
        var g = maybeGuard.a;
        return str + ("--" + g);
      }
    };

    switch (selector.$) {
      case 0:
        var single = selector.a;
        return ".style-elements ." + applyGuard(single);

      case 2:
        var selectChild = selector.a;
        return "> " + _Qq__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36render_95raw(maybeGuard, selectChild);

      case 3:
        var single = selector.a;
        return single;

      case 1:
        var psu = selector.a;
        return psu;

      default:
        var sels = selector.a;
        return _Rd__36elm_36core_36String_36concat(_Mv__36elm_36core_36List_36indexedMap_95raw(renderAndSpace, sels));
    }
  };

  var _P0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36makeRenderable = function (cls) {
    var renderableProps_raw = function (prop, _v4) {
      var rendered = _v4.a;
      var subEls = _v4.b;

      switch (prop.$) {
        case 0:
          var ps = prop.a;
          return _HX_(_JC__95Utils_95ap(rendered, ps), subEls);

        case 1:
          var embedded = prop.a;
          return _HX_(rendered, _JC__95Utils_95ap(subEls, _P0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36makeRenderable(embedded)));

        case 2:
          var ps = prop.a;
          var embedded = prop.b;
          return _HX_(_JC__95Utils_95ap(rendered, ps), _JC__95Utils_95ap(subEls, _P0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36makeRenderable(embedded)));

        default:
          return _HX_(rendered, subEls);
      }
    },
        renderableProps = _Jf_(renderableProps_raw);

    switch (cls.$) {
      case 0:
        var classRule = cls.a;

        var _v1 = _I0__36elm_36core_36List_36foldl_95raw(renderableProps, _HX_(_U_r3, _U_r3), classRule.v);

        var rendered = _v1.a;
        var subelements = _v1.b;
        return _IK_(_Qp__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36RenderableClass_95raw(_Qq__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36render_95raw(_I6__36elm_36core_36Maybe_36Nothing, classRule.B), rendered), subelements);

      case 1:
        var mediaRule = cls.a;

        var _v2 = _I0__36elm_36core_36List_36foldl_95raw(renderableProps, _HX_(_U_r3, _U_r3), mediaRule.v);

        var rendered = _v2.a;
        var subelements = _v2.b;
        return _IK_(_Qr__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36RenderableMedia_95raw(mediaRule.bi, _Qq__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36render_95raw(_I6__36elm_36core_36Maybe_36Nothing, mediaRule.B), rendered), subelements);

      default:
        var str = cls.a;
        return {
          $: 1,
          a: _Qs__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36RenderableFree(str),
          b: _U_r3
        };
    }
  };

  var _RM__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop_95raw = function (i, _v0) {
    var name = _v0.a;
    var value = _v0.b;
    return _Rc__36elm_36core_36String_36repeat_95raw(i, " ") + (name + (": " + (value + ";")));
  };

  var _Oz__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36render = function (renderable) {
    switch (renderable.$) {
      case 0:
        var selector = renderable.a;
        var styleProps = renderable.b;
        return selector + (_Qm__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36brace_95raw(0, _OT__36elm_36core_36String_36join_95raw("\n", _IG__36elm_36core_36List_36map_95raw(_Qn__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop(2), styleProps))) + "\n");

      case 1:
        var query = renderable.a;
        var selector = renderable.b;
        var styleProps = renderable.c;
        return _JC__95Utils_95ap(query, _Qm__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36brace_95raw(0, "  " + (selector + _Qm__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36brace_95raw(2, _OT__36elm_36core_36String_36join_95raw("\n", _IG__36elm_36core_36List_36map_95raw(_Qn__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop(4), styleProps))))));

      default:
        var str = renderable.a;
        return str;
    }
  };

  var _N4__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36finalize = function (intermediates) {
    var finalizeCss = cls => _OT__36elm_36core_36String_36join_95raw("\n", _IG__36elm_36core_36List_36map_95raw(_Oz__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36render, _P0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36makeRenderable(cls)));

    return {
      bI: _OT__36elm_36core_36String_36join_95raw("\n", _IG__36elm_36core_36List_36map_95raw(finalizeCss, intermediates)),
      bR: _P1__36elm_36core_36List_36concatMap_95raw(_P2__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asFindable, intermediates)
    };
  };

  var _OY__36elm_36core_36List_36isEmpty = function (xs) {
    if (!xs.b) {
      return true;
    } else {
      return false;
    }
  };

  var _N7__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36preprocess = function (style) {
    if (!style.$) {
      var className = style.a;
      var styleProps = style.b;

      var visible = function (prop) {
        if (prop.$ === 13) {
          return true;
        } else {
          return false;
        }
      };

      var shadows = function (prop) {
        if (prop.$ === 10) {
          return true;
        } else {
          return false;
        }
      };

      var prioritize_raw = function (isPriority, priorityProps) {
        var _v9 = _Mu__36elm_36core_36List_36partition_95raw(isPriority, priorityProps);

        var high = _v9.a;
        var low = _v9.b;
        return _JC__95Utils_95ap(low, high);
      },
          prioritize = _Jf_(prioritize_raw);

      var overridePrevious_raw = function (overridable, overrideProps) {
        var eliminatePrevious = _Jf_(function (prop, _v8) {
          var existing = _v8.a;
          var overridden = _v8.b;
          return overridable(prop) && overridden ? _HX_(existing, overridden) : overridable(prop) && !overridden ? _HX_(_IK_(prop, existing), true) : _HX_(_IK_(prop, existing), overridden);
        });

        return _Je__36elm_36core_36List_36foldr_95raw(eliminatePrevious, _HX_(_U_r3, false), overrideProps).a;
      },
          overridePrevious = _Jf_(overridePrevious_raw);

      var mergeTransforms = function (mergeableProps) {
        var setIfNothing_raw = function (x, maybeX) {
          if (maybeX.$ === 1) {
            return _J3__36elm_36core_36Maybe_36Just(x);
          } else {
            var a = maybeX;
            return a;
          }
        },
            setIfNothing = _Jf_(setIfNothing_raw);

        var gatherTransformStack_raw = function (transformation, gathered) {
          switch (transformation.$) {
            case 0:
              var x = transformation.a;
              var y = transformation.b;
              var z = transformation.c;
              return _KL_(gathered, {
                aI: setIfNothing_raw(_P3__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Translate_95raw(x, y, z), gathered.aI)
              });

            case 1:
              var a = transformation.a;
              return _KL_(gathered, {
                ai: setIfNothing_raw(_P4__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Rotate(a), gathered.ai)
              });

            case 2:
              var x = transformation.a;
              var y = transformation.b;
              var z = transformation.c;
              var angle = transformation.d;
              return _KL_(gathered, {
                ai: setIfNothing_raw(_P5__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36RotateAround_95raw(x, y, z, angle), gathered.ai)
              });

            default:
              var x = transformation.a;
              var y = transformation.b;
              var z = transformation.c;
              return _KL_(gathered, {
                aF: setIfNothing_raw(_P6__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Scale_95raw(x, y, z), gathered.aF)
              });
          }
        },
            gatherTransformStack = _Jf_(gatherTransformStack_raw);

        var gatherTransforms_raw = function (prop, _v5) {
          var transforms = _v5.a;
          var gatheredProps = _v5.b;

          if (prop.$ === 11) {
            var stack = prop.a;
            return _HX_(_Je__36elm_36core_36List_36foldr_95raw(gatherTransformStack, transforms, stack), gatheredProps);
          } else {
            return _HX_(transforms, _IK_(prop, gatheredProps));
          }
        },
            gatherTransforms = _Jf_(gatherTransforms_raw);

        var applyTransforms = function (_v3) {
          var rotate = _v3.a.ai;
          var scale = _v3.a.aF;
          var translate = _v3.a.aI;
          var gathered = _v3.b;

          var transformations = _Mt__36elm_36core_36List_36filterMap_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, {
            $: 1,
            a: translate,
            b: {
              $: 1,
              a: rotate,
              b: {
                $: 1,
                a: scale,
                b: _U_r3
              }
            }
          });

          return _OY__36elm_36core_36List_36isEmpty(transformations) ? gathered : _IK_(_P7__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Transform(transformations), gathered);
        };

        return applyTransforms(_Je__36elm_36core_36List_36foldr_95raw(gatherTransforms, _HX_({
          ai: _I6__36elm_36core_36Maybe_36Nothing,
          aF: _I6__36elm_36core_36Maybe_36Nothing,
          aI: _I6__36elm_36core_36Maybe_36Nothing
        }, _U_r3), mergeableProps));
      };

      var mergeShadowsAndFilters = function (shadowsAndFilters) {
        var gather_raw = function (prop, existing) {
          switch (prop.$) {
            case 12:
              var fs = prop.a;
              return _KL_(existing, {
                aA: _JC__95Utils_95ap(fs, existing.aA)
              });

            case 10:
              var ss = prop.a;
              return _KL_(existing, {
                aG: _JC__95Utils_95ap(ss, existing.aG)
              });

            default:
              return _KL_(existing, {
                aD: _IK_(prop, existing.aD)
              });
          }
        },
            gather = _Jf_(gather_raw);

        var combine = combineable => _IK_(_P8__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Filters(combineable.aA), _IK_(_P9__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Shadows(combineable.aG), combineable.aD));

        return combine(_Je__36elm_36core_36List_36foldr_95raw(gather, {
          aA: _U_r3,
          aD: _U_r3,
          aG: _U_r3
        }, shadowsAndFilters));
      };

      var processed = mergeTransforms(mergeShadowsAndFilters(overridePrevious_raw(shadows, prioritize_raw(shadows, overridePrevious_raw(visible, prioritize_raw(visible, styleProps))))));

      var dropShadow = function (_v1) {
        var shade = _v1;
        return shade.bX === "drop";
      };

      return _PA__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Style_95raw(className, processed);
    } else {
      return style;
    }
  };

  var _QA__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36class_95raw = function (name, props) {
    var renderedProps = _OT__36elm_36core_36String_36join_95raw("\n", _IG__36elm_36core_36List_36map_95raw(_Qn__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop(2), props));

    return "." + (name + _Qm__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36brace_95raw(0, renderedProps));
  };

  var _SR__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36guard_95raw = function (guardingString, selector) {
    var addGuard = str => str + ("g" + guardingString);

    var onFindable = function (findable) {
      if (!findable.$) {
        var _class = findable.a;
        var name = findable.b;
        return _RQ__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36Style_95raw(_class, addGuard(name));
      } else {
        var _class = findable.a;
        var variation = findable.b;
        var name = findable.c;
        return _T5__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36Variation_95raw(_class, variation, addGuard(name));
      }
    };

    var onSelector = function (sel) {
      switch (sel.$) {
        case 0:
          var rendered = sel.a;
          var findable = sel.b;
          return _RP__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Select_95raw(addGuard(rendered), onFindable(findable));

        case 2:
          var selectChild = sel.a;
          return _Sx__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36SelectChild(onSelector(selectChild));

        case 4:
          var selectors = sel.a;
          return _Sw__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Stack(_IG__36elm_36core_36List_36map_95raw(onSelector, selectors));

        default:
          var x = sel;
          return x;
      }
    };

    return onSelector(selector);
  };

  var _RR__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36applyGuard_95raw = function (guardString, _class) {
    var guardProp = function (prop) {
      if (prop.$ === 1) {
        var sc = prop.a;
        return _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass(_RR__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36applyGuard_95raw(guardString, sc));
      } else {
        var x = prop;
        return x;
      }
    };

    switch (_class.$) {
      case 0:
        var cls = _class.a;
        return _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class({
          v: _IG__36elm_36core_36List_36map_95raw(guardProp, cls.v),
          B: _SR__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36guard_95raw(guardString, cls.B)
        });

      case 1:
        var media = _class.a;
        return _S7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Media({
          v: _IG__36elm_36core_36List_36map_95raw(guardProp, media.v),
          bi: media.bi,
          B: _SR__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36guard_95raw(guardString, media.B)
        });

      default:
        var x = _class;
        return x;
    }
  };

  var _RT__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36calculateGuard = function (_class) {
    var propToString = function (_v2) {
      var x = _v2.a;
      var y = _v2.b;
      return _JC__95Utils_95ap(x, y);
    };

    var asString = function (prop) {
      switch (prop.$) {
        case 0:
          var ps = prop.a;
          return _Rd__36elm_36core_36String_36concat(_IG__36elm_36core_36List_36map_95raw(propToString, ps));

        case 1:
          var embedded = prop.a;
          return _RT__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36calculateGuard(embedded);

        case 2:
          var ps = prop.a;
          var embedded = prop.b;
          return _JC__95Utils_95ap(_Rd__36elm_36core_36String_36concat(_IG__36elm_36core_36List_36map_95raw(propToString, ps)), _RT__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36calculateGuard(embedded));

        default:
          return "";
      }
    };

    switch (_class.$) {
      case 0:
        var classRule = _class.a;
        return _Rd__36elm_36core_36String_36concat(_IG__36elm_36core_36List_36map_95raw(asString, classRule.v));

      case 1:
        var mediaRule = _class.a;
        return _Rd__36elm_36core_36String_36concat(_IG__36elm_36core_36List_36map_95raw(asString, mediaRule.v));

      default:
        return "";
    }
  };

  var _T6__36Skinney_36murmur3_36Murmur3_36finalize = function (data) {
    var acc = !!data.ab ? data.W ^ _Ta__36Skinney_36murmur3_36Murmur3_36multiplyBy_95raw(461845907, _Td__36Skinney_36murmur3_36Murmur3_36rotlBy_95raw(15, _Ta__36Skinney_36murmur3_36Murmur3_36multiplyBy_95raw(3432918353, data.ab))) : data.W;
    var h0 = acc ^ data.Z;

    var h1 = _Ta__36Skinney_36murmur3_36Murmur3_36multiplyBy_95raw(2246822507, h0 ^ h0 >>> 16);

    var h2 = _Ta__36Skinney_36murmur3_36Murmur3_36multiplyBy_95raw(3266489909, h1 ^ h1 >>> 13);

    return (h2 ^ h2 >>> 16) >>> 0;
  };

  var _TS__36Skinney_36murmur3_36Murmur3_36hashFold_95raw = function (c, data) {
    var res = data.ab | (255 & _Tg__36elm_36core_36Char_36toCode(c)) << data.aj;
    var _v0 = data.aj;

    if (_v0 === 24) {
      return {
        Z: data.Z + 1,
        ab: 0,
        W: _Ti__36Skinney_36murmur3_36Murmur3_36mix_95raw(data.W, res),
        aj: 0
      };
    } else {
      return {
        Z: data.Z + 1,
        ab: res,
        W: data.W,
        aj: data.aj + 8
      };
    }
  };

  var _Sf__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asMediaQuery_95raw = function (query, prop) {
    var classAsMediaQuery = function (cls) {
      if (!cls.$) {
        var classRule = cls.a;
        return _S7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Media({
          v: classRule.v,
          bi: query,
          B: classRule.B
        });
      } else {
        var x = cls;
        return x;
      }
    };

    switch (prop.$) {
      case 1:
        var cls = prop.a;
        return _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass(classAsMediaQuery(cls));

      case 2:
        var x = prop.a;
        var cls = prop.b;
        return _TL__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36PropsAndSub_95raw(x, classAsMediaQuery(cls));

      default:
        var x = prop;
        return x;
    }
  };

  var _SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color = function (_v0) {
    var red = _v0.a;
    var green = _v0.b;
    var blue = _v0.c;
    var alpha = _v0.d;
    return "rgba(" + _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(_R2__36elm_36core_36Basics_36round(red * 255)) + ("," + _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(_R2__36elm_36core_36Basics_36round(green * 255)) + ("," + _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(_R2__36elm_36core_36Basics_36round(blue * 255)) + ("," + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(alpha) + ")"))));
  };

  var _SE__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36background = function (prop) {
    var renderStep = function (step) {
      switch (step.$) {
        case 0:
          var color = step.a;
          return _SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color(color);

        case 1:
          var color = step.a;
          var percent = step.b;
          return _SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color(color) + (" " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(percent) + "%"));

        default:
          var color = step.a;
          var percent = step.b;
          return _SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color(color) + (" " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(percent) + "px"));
      }
    };

    var directionName = function (dir) {
      switch (dir.$) {
        case 0:
          return "to top";

        case 1:
          return "to bottom";

        case 2:
          return "to right";

        case 3:
          return "to top right";

        case 4:
          return "to bottom right";

        case 5:
          return "to left";

        case 6:
          return "to top left";

        case 7:
          return "to bottom left";

        default:
          var angle = dir.a;
          return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(angle) + "rad";
      }
    };

    switch (prop.$) {
      case 1:
        var name = prop.a;
        var val = prop.b;
        return {
          $: 1,
          a: _HX_(name, val),
          b: _U_r3
        };

      case 0:
        var image = prop.a;
        return {
          $: 1,
          a: _HX_("background-image", "url(" + (image.aS + ")")),
          b: {
            $: 1,
            a: _HX_("background-position", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(image.be.a) + ("px " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(image.be.b) + "px"))),
            b: {
              $: 1,
              a: _HX_("background-repeat", function () {
                var _v1 = image.bk;

                switch (_v1) {
                  case 0:
                    return "repeat-x";

                  case 1:
                    return "repeat-y";

                  case 2:
                    return "repeat";

                  case 3:
                    return "space";

                  case 4:
                    return "round";

                  default:
                    return "no-repeat";
                }
              }()),
              b: {
                $: 1,
                a: _HX_("background-size", function () {
                  var _v2 = image.b4;

                  switch (_v2.$) {
                    case 0:
                      return "contain";

                    case 1:
                      return "cover";

                    case 2:
                      var width = _v2.a;
                      return _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length(width) + " auto";

                    case 3:
                      var height = _v2.a;
                      return "auto " + _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length(height);

                    default:
                      var width = _v2.a.bw;
                      var height = _v2.a.a1;
                      return _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length(width) + (" " + _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length(height));
                  }
                }()),
                b: _U_r3
              }
            }
          }
        };

      default:
        var dir = prop.a;
        var steps = prop.b;
        return {
          $: 1,
          a: _HX_("background-image", "linear-gradient(" + (_OT__36elm_36core_36String_36join_95raw(", ", _IK_(directionName(dir), _IG__36elm_36core_36List_36map_95raw(renderStep, steps))) + ")")),
          b: _U_r3
        };
    }
  };

  var _T2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36shadow = function (_v0) {
    var shadowModel = _v0;
    return _OT__36elm_36core_36String_36join_95raw(" ", _Mt__36elm_36core_36List_36filterMap_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, {
      $: 1,
      a: shadowModel.bX === "inset" ? _J3__36elm_36core_36Maybe_36Just("inset") : _I6__36elm_36core_36Maybe_36Nothing,
      b: {
        $: 1,
        a: _J3__36elm_36core_36Maybe_36Just(_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(shadowModel.a7.a) + "px"),
        b: {
          $: 1,
          a: _J3__36elm_36core_36Maybe_36Just(_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(shadowModel.a7.b) + "px"),
          b: {
            $: 1,
            a: _J3__36elm_36core_36Maybe_36Just(_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(shadowModel.bC) + "px"),
            b: {
              $: 1,
              a: shadowModel.bX === "text" || shadowModel.bX === "drop" ? _I6__36elm_36core_36Maybe_36Nothing : _J3__36elm_36core_36Maybe_36Just(_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(shadowModel.b4) + "px"),
              b: {
                $: 1,
                a: _J3__36elm_36core_36Maybe_36Just(_SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color(shadowModel.bH)),
                b: _U_r3
              }
            }
          }
        }
      }
    }));
  };

  var _SH__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36filters = function (myFilters) {
    var filterName = function (filtr) {
      switch (filtr.$) {
        case 0:
          var url = filtr.a;
          return "url(" + (url + ")");

        case 1:
          var x = filtr.a;
          return "blur(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px)");

        case 2:
          var x = filtr.a;
          return "brightness(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%)");

        case 3:
          var x = filtr.a;
          return "contrast(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%)");

        case 4:
          var x = filtr.a;
          return "grayscale(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%)");

        case 5:
          var x = filtr.a;
          return "hueRotate(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "deg)");

        case 6:
          var x = filtr.a;
          return "invert(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%)");

        case 7:
          var x = filtr.a;
          return "opacity(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%)");

        case 8:
          var x = filtr.a;
          return "saturate(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%)");

        case 9:
          var x = filtr.a;
          return "sepia(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%)");

        default:
          var dropShadow = filtr.a;
          var shadowModel = {
            bC: dropShadow.bC,
            bH: dropShadow.bH,
            bX: "drop",
            a7: dropShadow.a7,
            b4: dropShadow.b4
          };
          return "drop-shadow(" + (_T2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36shadow(shadowModel) + ")");
      }
    };

    return !_LP__36elm_36core_36List_36length(myFilters) ? _U_r3 : {
      $: 1,
      a: _HX_("filter", _OT__36elm_36core_36String_36join_95raw(" ", _IG__36elm_36core_36List_36map_95raw(filterName, myFilters))),
      b: _U_r3
    };
  };

  var _S4__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36getProps = function (prop) {
    _v0$4: while (true) {
      switch (prop.$) {
        case 0:
          var rendered = prop.a;
          return rendered;

        case 1:
          if (!prop.a.$) {
            var myClass = prop.a.a;
            return _P1__36elm_36core_36List_36concatMap_95raw(_S4__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36getProps, myClass.v);
          } else {
            break _v0$4;
          }

        case 2:
          if (!prop.b.$) {
            var rendered = prop.a;
            var myClass = prop.b.a;
            return _JC__95Utils_95ap(rendered, _P1__36elm_36core_36List_36concatMap_95raw(_S4__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36getProps, myClass.v));
          } else {
            break _v0$4;
          }

        default:
          return _U_r3;
      }
    }

    return _U_r3;
  };

  var _QY__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36direction = function (dir) {
    switch (dir) {
      case 1:
        return _HX_("flex-direction", "row");

      case 3:
        return _HX_("flex-direction", "row-reverse");

      case 2:
        return _HX_("flex-direction", "column");

      default:
        return _HX_("flex-direction", "column-reverse");
    }
  };

  var _RE__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexbox_95raw = function (dir, el) {
    switch (el.$) {
      case 0:
        var wrap = el.a;
        return wrap ? _HX_("flex-wrap", "wrap") : _HX_("flex-wrap", "nowrap");

      case 1:
        var horizontal = el.a;

        switch (dir) {
          case 1:
            switch (horizontal.$) {
              case 3:
                if (!horizontal.a) {
                  var _v3 = horizontal.a;
                  return _HX_("justify-content", "flex-start");
                } else {
                  var _v4 = horizontal.a;
                  return _HX_("justify-content", "flex-end");
                }

              case 0:
                return _HX_("justify-content", "center");

              case 1:
                return _HX_("justify-content", "space-between");

              default:
                return _HX_("justify-content", "space-between");
            }

          case 3:
            switch (horizontal.$) {
              case 3:
                if (!horizontal.a) {
                  var _v6 = horizontal.a;
                  return _HX_("justify-content", "flex-end");
                } else {
                  var _v7 = horizontal.a;
                  return _HX_("justify-content", "flex-start");
                }

              case 0:
                return _HX_("justify-content", "center");

              case 1:
                return _HX_("justify-content", "space-between");

              default:
                return _HX_("justify-content", "space-between");
            }

          case 2:
            switch (horizontal.$) {
              case 3:
                if (!horizontal.a) {
                  var _v9 = horizontal.a;
                  return _HX_("align-items", "flex-start");
                } else {
                  var _v10 = horizontal.a;
                  return _HX_("align-items", "flex-end");
                }

              case 0:
                return _HX_("align-items", "center");

              case 1:
                return _HX_("align-items", "Justify");

              default:
                return _HX_("align-items", "Justify");
            }

          default:
            switch (horizontal.$) {
              case 3:
                if (!horizontal.a) {
                  var _v12 = horizontal.a;
                  return _HX_("align-items", "flex-start");
                } else {
                  var _v13 = horizontal.a;
                  return _HX_("align-items", "flex-end");
                }

              case 0:
                return _HX_("align-items", "center");

              case 1:
                return _HX_("align-items", "Justify");

              default:
                return _HX_("align-items", "Justify");
            }

        }

      default:
        var vertical = el.a;

        switch (dir) {
          case 1:
            switch (vertical.$) {
              case 3:
                if (!vertical.a) {
                  var _v16 = vertical.a;
                  return _HX_("align-items", "flex-start");
                } else {
                  var _v17 = vertical.a;
                  return _HX_("align-items", "flex-end");
                }

              case 0:
                return _HX_("align-items", "center");

              case 1:
                return _HX_("align-items", "Justify");

              default:
                return _HX_("align-items", "Justify");
            }

          case 3:
            switch (vertical.$) {
              case 3:
                if (!vertical.a) {
                  var _v19 = vertical.a;
                  return _HX_("align-items", "flex-start");
                } else {
                  var _v20 = vertical.a;
                  return _HX_("align-items", "flex-end");
                }

              case 0:
                return _HX_("align-items", "center");

              case 1:
                return _HX_("align-items", "Justify");

              default:
                return _HX_("align-items", "Justify");
            }

          case 2:
            switch (vertical.$) {
              case 3:
                if (!vertical.a) {
                  var _v22 = vertical.a;
                  return _HX_("justify-content", "flex-start");
                } else {
                  var _v23 = vertical.a;
                  return _HX_("justify-content", "flex-end");
                }

              case 0:
                return _HX_("justify-content", "center");

              case 1:
                return _HX_("justify-content", "space-between");

              default:
                return _HX_("align-items", "Justify");
            }

          default:
            switch (vertical.$) {
              case 3:
                if (!vertical.a) {
                  var _v25 = vertical.a;
                  return _HX_("justify-content", "flex-end");
                } else {
                  var _v26 = vertical.a;
                  return _HX_("justify-content", "flex-start");
                }

              case 0:
                return _HX_("justify-content", "center");

              case 1:
                return _HX_("justify-content", "space-between");

              default:
                return _HX_("align-items", "Justify");
            }

        }

    }
  };

  var _Qb__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36gridAlignment = function (align) {
    switch (align.$) {
      case 2:
        var row = align.a;
        var column = align.b;
        return _HX_("grid-gap", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(row) + ("px " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(column) + "px")));

      case 0:
        var horizontal = align.a;

        switch (horizontal.$) {
          case 3:
            if (!horizontal.a) {
              var _v2 = horizontal.a;
              return _HX_("justify-content", "start");
            } else {
              var _v3 = horizontal.a;
              return _HX_("justify-content", "end");
            }

          case 0:
            return _HX_("justify-content", "center");

          case 1:
            return _HX_("justify-content", "space-between");

          default:
            return _HX_("justify-content", "space-between");
        }

      default:
        var vertical = align.a;

        switch (vertical.$) {
          case 3:
            if (!vertical.a) {
              var _v5 = vertical.a;
              return _HX_("align-content", "start");
            } else {
              var _v6 = vertical.a;
              return _HX_("align-content", "end");
            }

          case 0:
            return _HX_("align-content", "center");

          case 1:
            return _HX_("align-content", "space-between");

          default:
            return _HX_("align-content", "space-between");
        }

    }
  };

  var _Om__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36layout_95raw = function (inline, lay) {
    switch (lay.$) {
      case 0:
        return {
          $: 1,
          a: _HX_("display", inline ? "inline-block" : "block"),
          b: _U_r3
        };

      case 1:
        var dir = lay.a;
        var flexProps = lay.b;
        return _IK_(_HX_("display", inline ? "inline-flex" : "flex"), _IK_(_QY__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36direction(dir), _IG__36elm_36core_36List_36map_95raw(_QZ__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexbox(dir), flexProps)));

      default:
        if (lay.a.$ === 1) {
          var rows = lay.a.a.V;
          var columns = lay.a.a.P;
          var options = lay.b;

          var renderLen = function (len) {
            switch (len.$) {
              case 0:
                var x = len.a;
                return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px";

              case 1:
                var x = len.a;
                return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%";

              case 2:
                return "auto";

              case 3:
                var i = len.a;
                return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(i) + "fr";

              default:
                var perc = len.a;
                var px = len.b;
                return "calc(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(perc) + ("% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(px) + "px)")));
            }
          };

          var grid = inline ? _HX_("display", "inline-grid") : _HX_("display", "grid");

          var areaSpan = function (_v3) {
            var span = _v3.a;
            var maybeName = _v3.b;

            var name = function () {
              if (maybeName.$ === 1) {
                return ".";
              } else {
                var str = maybeName.a;
                return str;
              }
            }();

            if (!span.$) {
              return _PQ__36elm_36core_36List_36repeat_95raw(_LP__36elm_36core_36List_36length(columns), name);
            } else {
              var i = span.a;
              return _PQ__36elm_36core_36List_36repeat_95raw(i, name);
            }
          };

          var areasInRow = function (areas) {
            var quote = str => "\"" + (str + "\"");

            var areaStrs = _P1__36elm_36core_36List_36concatMap_95raw(areaSpan, areas);

            return _L5__95Utils_95cmp(_LP__36elm_36core_36List_36length(areaStrs), _LP__36elm_36core_36List_36length(columns)) > 0 ? quote(_OT__36elm_36core_36String_36join_95raw(" ", areaStrs)) : _L5__95Utils_95cmp(_LP__36elm_36core_36List_36length(areaStrs), _LP__36elm_36core_36List_36length(columns)) < 0 ? quote(_OT__36elm_36core_36String_36join_95raw(" ", areaStrs)) : quote(_OT__36elm_36core_36String_36join_95raw(" ", areaStrs));
          };

          var alignment = _IG__36elm_36core_36List_36map_95raw(_Qb__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36gridAlignment, options);

          return _IK_(grid, _IK_(_HX_("grid-template-rows", _OT__36elm_36core_36String_36join_95raw(" ", _IG__36elm_36core_36List_36map_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, renderLen, _N0__36elm_36core_36Tuple_36first), rows))), _IK_(_HX_("grid-template-columns", _OT__36elm_36core_36String_36join_95raw(" ", _IG__36elm_36core_36List_36map_95raw(renderLen, columns))), _IK_(_HX_("grid-template-areas", _OT__36elm_36core_36String_36join_95raw("\n", _IG__36elm_36core_36List_36map_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, areasInRow, _N2__36elm_36core_36Tuple_36second), rows))), alignment))));
        } else {
          var rows = lay.a.a.V;
          var columns = lay.a.a.P;
          var options = lay.b;

          var renderLen = function (len) {
            switch (len.$) {
              case 0:
                var x = len.a;
                return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px";

              case 1:
                var x = len.a;
                return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%";

              case 2:
                return "auto";

              case 3:
                var i = len.a;
                return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(i) + "fr";

              default:
                var perc = len.a;
                var px = len.b;
                return "calc(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(perc) + ("% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(px) + "px)")));
            }
          };

          var grid = inline ? _HX_("display", "inline-grid") : _HX_("display", "grid");

          var alignment = _IG__36elm_36core_36List_36map_95raw(_Qb__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36gridAlignment, options);

          return _IK_(grid, _IK_(_HX_("grid-template-rows", _OT__36elm_36core_36String_36join_95raw(" ", _IG__36elm_36core_36List_36map_95raw(renderLen, rows))), _IK_(_HX_("grid-template-columns", _OT__36elm_36core_36String_36join_95raw(" ", _IG__36elm_36core_36List_36map_95raw(renderLen, columns))), alignment)));
        }

    }
  };

  var _SD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36position = function (posEls) {
    var renderPos = function (pos) {
      switch (pos.$) {
        case 0:
          switch (pos.a) {
            case 0:
              var _v1 = pos.a;
              return _HX_("position", "fixed");

            case 2:
              var _v2 = pos.a;
              return _HX_("position", "absolute");

            default:
              var _v3 = pos.a;
              return _HX_("position", "relative");
          }

        case 1:
          var x = pos.a;
          return _HX_("left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px");

        case 2:
          var x = pos.a;
          return _HX_("right", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px");

        case 3:
          var x = pos.a;
          return _HX_("top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px");

        case 4:
          var x = pos.a;
          return _HX_("bottom", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px");

        case 5:
          var i = pos.a;
          return _HX_("z-index", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(i));

        case 6:
          return _HX_("display", "inline-block");

        default:
          switch (pos.a) {
            case 0:
              var _v4 = pos.a;
              return _HX_("float", "left");

            case 1:
              var _v5 = pos.a;
              return _HX_("float", "right");

            case 2:
              var _v6 = pos.a;
              return _HX_("float", "left");

            default:
              var _v7 = pos.a;
              return _HX_("float", "right");
          }

      }
    };

    return _IG__36elm_36core_36List_36map_95raw(renderPos, posEls);
  };

  var _S6__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36pseudo_95raw = function (psu, sel) {
    switch (sel.$) {
      case 1:
        var existing = sel.a;
        return _Sy__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Pseudo(_JC__95Utils_95ap(existing, psu));

      case 0:
        var single = sel.a;
        var findable = sel.b;
        return _Sw__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Stack({
          $: 1,
          a: _RP__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Select_95raw(single, findable),
          b: {
            $: 1,
            a: _Sy__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Pseudo(psu),
            b: _U_r3
          }
        });

      case 2:
        var selectChild = sel.a;
        return _Sx__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36SelectChild(_S6__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36pseudo_95raw(psu, selectChild));

      case 3:
        var single = sel.a;
        return _T1__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Free(single);

      default:
        var sels = sel.a;

        var lastElem = _Ms__36elm_36core_36List_36head(_K1__36elm_36core_36List_36reverse(sels));

        var init = _K1__36elm_36core_36List_36reverse(_MI__36elm_36core_36List_36drop_95raw(1, _K1__36elm_36core_36List_36reverse(sels)));

        if (lastElem.$ === 1) {
          return _Sw__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Stack(sels);
        } else {
          var last = lastElem.a;
          return _Sw__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Stack(_JC__95Utils_95ap(init, {
            $: 1,
            a: _S6__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36pseudo_95raw(psu, last),
            b: _U_r3
          }));
        }

    }
  };

  var _SF__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36shadow = function (shadows) {
    var _v0 = _Mu__36elm_36core_36List_36partition_95raw(function (_v1) {
      var s = _v1;
      return s.bX === "text";
    }, shadows);

    var text = _v0.a;
    var boxShadow = _v0.b;

    var renderedBox = _OT__36elm_36core_36String_36join_95raw(", ", _IG__36elm_36core_36List_36map_95raw(_T2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36shadow, boxShadow));

    var renderedText = _OT__36elm_36core_36String_36join_95raw(", ", _IG__36elm_36core_36List_36map_95raw(_T2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36shadow, text));

    return _Mt__36elm_36core_36List_36filterMap_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, {
      $: 1,
      a: renderedBox === "" ? _I6__36elm_36core_36Maybe_36Nothing : _J3__36elm_36core_36Maybe_36Just(_HX_("box-shadow", renderedBox)),
      b: {
        $: 1,
        a: renderedText === "" ? _I6__36elm_36core_36Maybe_36Nothing : _J3__36elm_36core_36Maybe_36Just(_HX_("text-shadow", renderedText)),
        b: _U_r3
      }
    });
  };

  var _SG__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36transformations = function (transforms) {
    var transformToString = function (transform) {
      switch (transform.$) {
        case 0:
          var x = transform.a;
          var y = transform.b;
          var z = transform.c;
          return "translate3d(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + ("px, " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + ("px, " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(z) + "px)")))));

        case 2:
          var x = transform.a;
          var y = transform.b;
          var z = transform.c;
          var angle = transform.d;
          return "rotate3d(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + ("," + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + ("," + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(z) + ("," + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(angle) + "rad)")))))));

        case 1:
          var x = transform.a;
          return "rotate(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "rad)");

        default:
          var x = transform.a;
          var y = transform.b;
          var z = transform.c;
          return "scale3d(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + (", " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + (", " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(z) + ")")))));
      }
    };

    var transformString = _OT__36elm_36core_36String_36join_95raw(" ", _IG__36elm_36core_36List_36map_95raw(transformToString, transforms));

    var renderedTransforms = _T3__36elm_36core_36String_36length(transformString) > 0 ? {
      $: 1,
      a: _HX_("transform", transformString),
      b: _U_r3
    } : _U_r3;
    return !_LP__36elm_36core_36List_36length(transforms) ? _U_r3 : renderedTransforms;
  };

  var _SJ__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36transition = function (_v0) {
    var delay = _v0.bJ;
    var duration = _v0.bL;
    var easing = _v0.bM;
    var props = _v0.v;

    var formatTrans = prop => _OT__36elm_36core_36String_36join_95raw(" ", {
      $: 1,
      a: prop,
      b: {
        $: 1,
        a: _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(duration) + "ms",
        b: {
          $: 1,
          a: easing,
          b: {
            $: 1,
            a: _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(delay) + "ms",
            b: _U_r3
          }
        }
      }
    });

    return _OT__36elm_36core_36String_36join_95raw(", ", _IG__36elm_36core_36List_36map_95raw(formatTrans, props));
  };

  var _SK__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36typeface = function (families) {
    var renderFont = function (font) {
      switch (font.$) {
        case 0:
          return "serif";

        case 1:
          return "sans-serif";

        case 2:
          return "cursive";

        case 3:
          return "fantasy";

        case 4:
          return "monospace";

        case 5:
          var name = font.a;
          return "\"" + (name + "\"");

        default:
          var name = font.a;
          var url = font.b;
          return "\"" + (name + "\"");
      }
    };

    return _OT__36elm_36core_36String_36join_95raw(", ", _IG__36elm_36core_36List_36map_95raw(renderFont, families));
  };

  var _SC__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36visibility = function (vis) {
    switch (vis.$) {
      case 0:
        return {
          $: 1,
          a: _HX_("display", "none"),
          b: _U_r3
        };

      case 1:
        return {
          $: 1,
          a: _HX_("visibility", "hidden"),
          b: _U_r3
        };

      default:
        var x = vis.a;
        return {
          $: 1,
          a: _HX_("opacity", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x)),
          b: _U_r3
        };
    }
  };

  var _Se__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp_95raw = function (parentClass, prop) {
    switch (prop.$) {
      case 2:
        return _I6__36elm_36core_36Maybe_36Nothing;

      case 1:
        return _I6__36elm_36core_36Maybe_36Nothing;

      case 4:
        var cls = prop.a;
        var styleProps = prop.b;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _J3__36elm_36core_36Maybe_36Just, _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass), _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class)({
          v: _Mt__36elm_36core_36List_36filterMap_95raw(_S2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp(parentClass), styleProps),
          B: _S6__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36pseudo_95raw(cls, parentClass)
        });

      case 3:
        var query = prop.a;
        var styleProps = prop.b;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _J3__36elm_36core_36Maybe_36Just, _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass), _S7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Media)({
          v: _IG__36elm_36core_36List_36map_95raw(_S8__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asMediaQuery(query), _Mt__36elm_36core_36List_36filterMap_95raw(_S2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp(parentClass), styleProps)),
          bi: "@media " + query,
          B: parentClass
        });

      case 0:
        var name = prop.a;
        var val = prop.b;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props)({
          $: 1,
          a: _HX_(name, val),
          b: _U_r3
        });

      case 13:
        var vis = prop.a;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, _SC__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36visibility(vis));

      case 5:
        var pos = prop.a;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, _SD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36position(pos));

      case 6:
        var name = prop.a;
        var val = prop.b;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, {
          $: 1,
          a: _HX_(name, val),
          b: _U_r3
        });

      case 7:
        var fam = prop.a;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, {
          $: 1,
          a: _HX_("font-family", _SK__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36typeface(fam)),
          b: _U_r3
        });

      case 8:
        var lay = prop.a;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props)(_Om__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36layout_95raw(false, lay));

      case 9:
        var props = prop.a;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, _SE__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36background(props));

      case 10:
        var shadows = prop.a;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, _SF__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36shadow(shadows));

      case 11:
        var transformations = prop.a;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, _SG__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36transformations(transformations));

      case 12:
        var filters = prop.a;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, _SH__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36filters(filters));

      case 15:
        var color = prop.a;
        return _KT__36elm_36core_36Basics_36composeL_95raw(_J3__36elm_36core_36Maybe_36Just, _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, {
          $: 1,
          a: _HX_("color", _SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color(color)),
          b: _U_r3
        });

      case 14:
        var color = prop.a;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _J3__36elm_36core_36Maybe_36Just, _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass), _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class)({
          v: {
            $: 1,
            a: _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_7h__95List_95fromArray([_HX_("background-color", _SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color(color))])),
            b: _U_r3
          },
          B: _S6__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36pseudo_95raw("::selection", parentClass)
        });

      default:
        var trans = prop.a;
        return _J3__36elm_36core_36Maybe_36Just(_SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props({
          $: 1,
          a: _HX_("transition", _OT__36elm_36core_36String_36join_95raw(", ", _IG__36elm_36core_36List_36map_95raw(_SJ__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36transition, trans))),
          b: _U_r3
        }));
    }
  };

  var _TZ__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36uncapitalize = function (str) {
    var tail = _Tl__36elm_36core_36String_36dropLeft_95raw(1, str);

    var head = _TX__36elm_36core_36String_36toLower(_Tm__36elm_36core_36String_36left_95raw(1, str));

    return _JC__95Utils_95ap(head, tail);
  };

  var _T0__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36toVariation_95raw = function (_var, newName, element) {
    if (!element.$) {
      var _class = element.a;
      var name = element.b;
      return _T5__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36Variation_95raw(_class, _var, newName);
    } else {
      var _class = element.a;
      var name = element.c;
      return _T5__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36Variation_95raw(_class, _var, newName);
    }
  };

  var _S5__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36variant_95raw = function (sel, _var, name) {
    switch (sel.$) {
      case 1:
        var psu = sel.a;
        return _Sy__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Pseudo(psu);

      case 0:
        var single = sel.a;
        var findable = sel.b;
        return _RP__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Select_95raw(single + ("-" + _Sz__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36formatName(name)), _T0__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36toVariation_95raw(_var, single + ("-" + _Sz__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36formatName(name)), findable));

      case 2:
        var selectChild = sel.a;
        return _Sx__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36SelectChild(_S5__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36variant_95raw(selectChild, _var, name));

      case 3:
        var single = sel.a;
        return _T1__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Free(single);

      default:
        var sels = sel.a;

        var lastElem = _Ms__36elm_36core_36List_36head(_K1__36elm_36core_36List_36reverse(sels));

        var init = _K1__36elm_36core_36List_36reverse(_MI__36elm_36core_36List_36drop_95raw(1, _K1__36elm_36core_36List_36reverse(sels)));

        if (lastElem.$ === 1) {
          return _Sw__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Stack(sels);
        } else {
          var last = lastElem.a;
          return _Sw__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Stack(_JC__95Utils_95ap(init, {
            $: 1,
            a: _S5__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36variant_95raw(last, _var, name),
            b: _U_r3
          }));
        }

    }
  };

  var _R8__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp_95raw = function (parentClass, prop) {
    switch (prop.$) {
      case 2:
        var cls = prop.a;
        var styleProps = prop.b;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass, _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class)({
          v: _IG__36elm_36core_36List_36map_95raw(_QD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp(parentClass), styleProps),
          B: _S1__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36child_95raw(parentClass, _QB__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36select(cls))
        });

      case 1:
        var _var = prop.a;
        var styleProps = prop.b;

        var variationName = function () {
          var _v1 = _Mt__36elm_36core_36List_36filterMap_95raw(_S2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp(parentClass), styleProps);

          if (!_v1.b) {
            return "v";
          } else {
            var intermediates = _v1;
            return _Rd__36elm_36core_36String_36concat(_IG__36elm_36core_36List_36map_95raw(function (_v2) {
              var x = _v2.a;
              var y = _v2.b;
              return _JC__95Utils_95ap(x, y);
            }, _P1__36elm_36core_36List_36concatMap_95raw(_S4__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36getProps, intermediates)));
          }
        }();

        var selectVariation = _S5__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36variant_95raw(parentClass, _var, variationName);

        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass, _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class)({
          v: _Mt__36elm_36core_36List_36filterMap_95raw(_S2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp(selectVariation), styleProps),
          B: selectVariation
        });

      case 4:
        var cls = prop.a;
        var styleProps = prop.b;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass, _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class)({
          v: _IG__36elm_36core_36List_36map_95raw(_QD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp(parentClass), styleProps),
          B: _S6__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36pseudo_95raw(cls, parentClass)
        });

      case 3:
        var query = prop.a;
        var styleProps = prop.b;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass, _S7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Media)({
          v: _IG__36elm_36core_36List_36map_95raw(_S8__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asMediaQuery(query), _IG__36elm_36core_36List_36map_95raw(_QD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp(parentClass), styleProps)),
          bi: "@media " + query,
          B: parentClass
        });

      case 0:
        var name = prop.a;
        var val = prop.b;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props({
          $: 1,
          a: _HX_(name, val),
          b: _U_r3
        });

      case 13:
        var vis = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_SC__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36visibility(vis));

      case 5:
        var pos = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_SD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36position(pos));

      case 6:
        var name = prop.a;
        var val = prop.b;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props({
          $: 1,
          a: _HX_(name, val),
          b: _U_r3
        });

      case 8:
        var lay = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_Om__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36layout_95raw(false, lay));

      case 9:
        var props = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_SE__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36background(props));

      case 10:
        var shadows = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_SF__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36shadow(shadows));

      case 11:
        var transformations = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_SG__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36transformations(transformations));

      case 12:
        var filters = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_SH__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36filters(filters));

      case 14:
        var color = prop.a;
        return _Hx_(_Ja__36elm_36core_36Basics_36composeL, _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass, _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class)({
          v: {
            $: 1,
            a: _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props(_7h__95List_95fromArray([_HX_("background-color", _SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color(color))])),
            b: _U_r3
          },
          B: _S6__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36pseudo_95raw("::selection", parentClass)
        });

      case 15:
        var color = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props({
          $: 1,
          a: _HX_("color", _SI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36color(color)),
          b: _U_r3
        });

      case 16:
        var trans = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props({
          $: 1,
          a: _HX_("transition", _OT__36elm_36core_36String_36join_95raw(", ", _IG__36elm_36core_36List_36map_95raw(_SJ__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36transition, trans))),
          b: _U_r3
        });

      default:
        var fam = prop.a;
        return _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props({
          $: 1,
          a: _HX_("font-family", _SK__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36typeface(fam)),
          b: _U_r3
        });
    }
  };

  var _Nz__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderStyle_95raw = function (guarded, style) {
    switch (style.$) {
      case 3:
        var reset = style.a;
        return _Q7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Free(reset);

      case 2:
        var str = style.a;
        return _Q7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Free("@import " + (str + ";"));

      case 1:
        var cls = style.a;
        var styleProps = style.b;
        return _Q7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Free(_QA__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36class_95raw(cls, styleProps));

      default:
        var cls = style.a;
        var styleProps = style.b;

        var selector = _QB__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36select(cls);

        var inter = _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class({
          v: _IG__36elm_36core_36List_36map_95raw(_QD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp(selector), styleProps),
          B: selector
        });

        var guard = i => guarded ? _QF__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36guard(i) : i;

        return guard(inter);
    }
  };

  var _RN__36elm_36core_36Set_36insert_95raw = function (key, _v0) {
    var dict = _v0;
    return _R4__36elm_36core_36Dict_36insert_95raw(key, 0, dict);
  };

  var _N8__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36reorderImportAddReset_95raw = function (reset, styles) {
    var reorder = _Jf_(function (style, _v5) {
      var importStatements = _v5.a;
      var remainingStyles = _v5.b;

      if (style.$ === 2) {
        return _HX_(_IK_(style, importStatements), remainingStyles);
      } else {
        var x = style;
        return _HX_(importStatements, _IK_(style, remainingStyles));
      }
    });

    var getFontStyle = function (style) {
      if (!style.$) {
        var props = style.b;

        var forFont = function (prop) {
          if (prop.$ === 7) {
            var fams = prop.a;

            var forImport = function (font) {
              if (font.$ === 6) {
                var url = font.b;
                return _J3__36elm_36core_36Maybe_36Just(url);
              } else {
                return _I6__36elm_36core_36Maybe_36Nothing;
              }
            };

            return _Mt__36elm_36core_36List_36filterMap_95raw(forImport, fams);
          } else {
            return _U_r3;
          }
        };

        return _P1__36elm_36core_36List_36concatMap_95raw(forFont, props);
      } else {
        return _U_r3;
      }
    };

    var importedFonts = _IG__36elm_36core_36List_36map_95raw(uri => _PB__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Import("url('" + (uri + "')")), _KT__36elm_36core_36Basics_36composeL_95raw(_PC__36elm_36core_36Set_36toList, _PD__36elm_36core_36Set_36fromList, _P1__36elm_36core_36List_36concatMap_95raw(getFontStyle, styles)));

    var _v0 = _Je__36elm_36core_36List_36foldr_95raw(reorder, _HX_(_U_r3, _U_r3), styles);

    var imports = _v0.a;
    var allStyles = _v0.b;
    return _JC__95Utils_95ap(imports, _JC__95Utils_95ap(importedFonts, _JC__95Utils_95ap({
      $: 1,
      a: _PE__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Reset(reset),
      b: _U_r3
    }, allStyles)));
  };

  var _N9__36mdgriffith_36style_95elements_36Style_36Internal_36Batchable_36toList = function (batchables) {
    var flatten = function (batchToFlatten) {
      switch (batchToFlatten.$) {
        case 0:
          var thing = batchToFlatten.a;
          return {
            $: 1,
            a: thing,
            b: _U_r3
          };

        case 1:
          var things = batchToFlatten.a;
          return things;

        default:
          var embedded = batchToFlatten.a;
          return _N9__36mdgriffith_36style_95elements_36Style_36Internal_36Batchable_36toList(embedded);
      }
    };

    return _P1__36elm_36core_36List_36concatMap_95raw(flatten, batchables);
  };

  var _J0__36mdgriffith_36style_95elements_36Style_36styleSheetWith_95raw = function (options, styles) {
    var unguard = _JZ__36elm_36core_36List_36any_95raw(_IE__36elm_36core_36Basics_36eq(0), options);

    return _KH__36mdgriffith_36style_95elements_36Style_36prepareSheet(_KI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36stylesheet_95raw("", !unguard, styles));
  };

  var _NU__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setNode_95raw = function (node, el) {
    switch (el.$) {
      case 0:
        return _I3__36mdgriffith_36style_95elements_36Element_36empty;

      case 5:
        var h = el.a;
        return _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw(h);

      case 1:
        var x = el.a;
        return _IZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacer(x);

      case 4:
        var elm = el.a;
        return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(elm, {
          d: node
        }));

      case 3:
        var elm = el.a;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element(_KL_(elm, {
          d: node
        }));

      default:
        var dec = el.a;
        var content = el.b;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
          b: _I6__36elm_36core_36Maybe_36Nothing,
          c: _U_r3,
          g: _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(dec, content),
          d: node,
          e: _I6__36elm_36core_36Maybe_36Nothing
        });
    }
  };

  var _OX__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36caption_95raw = function (name, status) {
    var informativeStatus = function () {
      switch (status.$) {
        case 0:
          return "Warming JIT";

        case 1:
          return "Finding sample size";

        case 2:
          return "Collecting samples";

        case 3:
          return "Failed!";

        default:
          return "Finished";
      }
    }();

    return _Hi__36mdgriffith_36style_95elements_36Element_36row_95raw(_1u__95class, {
      $: 1,
      a: _Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Ho__36mdgriffith_36style_95elements_36Element_36Attributes_36px(500)),
      b: {
        $: 1,
        a: _Pj__36mdgriffith_36style_95elements_36Element_36Attributes_36spread,
        b: {
          $: 1,
          a: _7Z__36mdgriffith_36style_95elements_36Element_36Attributes_36verticalCenter,
          b: _U_r3
        }
      }
    }, {
      $: 1,
      a: _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, name),
      b: {
        $: 1,
        a: _Hm__36mdgriffith_36style_95elements_36Element_36el_95raw(_3L__95class, _U_r3, _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, informativeStatus)),
        b: _U_r3
      }
    });
  };

  var _QU__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr_95raw = function (prop, el) {
    switch (el.$) {
      case 0:
        return _I3__36mdgriffith_36style_95elements_36Element_36empty;

      case 5:
        var h = el.a;
        return _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw(h);

      case 1:
        var x = el.a;
        return _IZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacer(x);

      case 4:
        var elm = el.a;
        return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(elm, {
          c: _IK_(prop, elm.c)
        }));

      case 3:
        var elm = el.a;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element(_KL_(elm, {
          c: _IK_(prop, elm.c)
        }));

      default:
        var dec = el.a;
        var content = el.b;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
          b: _I6__36elm_36core_36Maybe_36Nothing,
          c: {
            $: 1,
            a: prop,
            b: _U_r3
          },
          g: _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(dec, content),
          d: "div",
          e: _I6__36elm_36core_36Maybe_36Nothing
        });
    }
  };

  var _QT__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addChild_95raw = function (parent, el) {
    switch (parent.$) {
      case 0:
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
          b: _J3__36elm_36core_36Maybe_36Just({
            $: 1,
            a: el,
            b: _U_r3
          }),
          c: _U_r3,
          g: _I3__36mdgriffith_36style_95elements_36Element_36empty,
          d: "div",
          e: _I6__36elm_36core_36Maybe_36Nothing
        });

      case 1:
        var x = parent.a;
        return _IZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacer(x);

      case 5:
        var h = parent.a;
        return _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw(h);

      case 4:
        var elm = parent.a;
        var absolutelyPositioned = elm.b;

        if (absolutelyPositioned.$ === 1) {
          return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(elm, {
            b: _J3__36elm_36core_36Maybe_36Just({
              $: 1,
              a: el,
              b: _U_r3
            })
          }));
        } else {
          var others = absolutelyPositioned.a;
          return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(elm, {
            b: _J3__36elm_36core_36Maybe_36Just(_IK_(el, others))
          }));
        }

      case 3:
        var elm = parent.a;
        var absolutelyPositioned = elm.b;

        if (absolutelyPositioned.$ === 1) {
          return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element(_KL_(elm, {
            b: _J3__36elm_36core_36Maybe_36Just({
              $: 1,
              a: el,
              b: _U_r3
            })
          }));
        } else {
          var others = absolutelyPositioned.a;
          return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element(_KL_(elm, {
            b: _J3__36elm_36core_36Maybe_36Just(_IK_(el, others))
          }));
        }

      default:
        var dec = parent.a;
        var content = parent.b;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
          b: _J3__36elm_36core_36Maybe_36Just({
            $: 1,
            a: el,
            b: _U_r3
          }),
          c: _U_r3,
          g: _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(dec, content),
          d: "div",
          e: _I6__36elm_36core_36Maybe_36Nothing
        });
    }
  };

  var _QV__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36wrapHtml = function (el) {
    if (el.$ === 5) {
      var h = el.a;
      return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
        b: _I6__36elm_36core_36Maybe_36Nothing,
        c: _U_r3,
        g: _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw(h),
        d: "div",
        e: _I6__36elm_36core_36Maybe_36Nothing
      });
    } else {
      var x = el;
      return x;
    }
  };

  var _OU__36mdgriffith_36style_95elements_36Element_36within_95raw = function (nearbys, parent) {
    var position = _Jf_((elem, p) => _QT__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addChild_95raw(p, _QU__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr_95raw(_LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Pt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Nearby(4)), _QV__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36wrapHtml(elem))));

    return _Je__36elm_36core_36List_36foldr_95raw(position, parent, nearbys);
  };

  var _It__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBars_95raw = function (reversedParents, report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _K6__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36barsWithPath_95raw(_K1__36elm_36core_36List_36reverse(reversedParents), _7h__95List_95fromArray([_HX_(name, status)])),
          b: _U_r3
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return {
          $: 1,
          a: _K6__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36barsWithPath_95raw(_K1__36elm_36core_36List_36reverse(_IK_(name, reversedParents)), statuses),
          b: _U_r3
        };

      default:
        var name = report.a;
        var reports = report.b;
        return _K3__36elm_36core_36List_36concat(_IG__36elm_36core_36List_36map_95raw(_K8__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBars(_IK_(name, reversedParents)), reports));
    }
  };

  var _Lu__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit_95a0 = function (_v0) {
    var fit = _v0.a;
    var values = _v0.b;

    var _v1 = _M6__36elm_36core_36List_36unzip(values);

    var xs = _v1.a;
    var ys = _v1.b;

    var predictions = _IG__36elm_36core_36List_36map_95raw(_OL__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY(fit), xs);

    var meanY = _ON__36elm_36core_36Result_36withDefault_95raw(0, _OO__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys));

    var sumSquareResiduals = _OP__36elm_36core_36List_36sum(_MF__95List_95map2_95raw(_Jf_((actual, prediction) => _Hx_(_OQ__36elm_36core_36Basics_36pow, actual - prediction, 2)), ys, predictions));

    var sumSquareTotal = _OP__36elm_36core_36List_36sum(_IG__36elm_36core_36List_36map_95raw(y => _Hx_(_OQ__36elm_36core_36Basics_36pow, y - meanY, 2), ys));

    return 1 - sumSquareResiduals / sumSquareTotal;
  };

  var _OG__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw = function (_v0, y) {
    var slope = _v0.aR;
    var intercept = _v0.aL;
    return (y - intercept) / slope;
  };

  var _NX__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36percentChange_95raw = function (old, _new) {
    var rps = _Hx_(_M9__36elm_36core_36Basics_36composeR, _OF__36BrianHicks_36elm_95trend_36Trend_36Linear_36line, a => _OG__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw(a, 1000));

    var change = (rps(_new) - rps(old)) / rps(old);
    var sign = change > 0 ? "+" : "";
    return _JB__95Utils_95eq(old, _new) ? _ME__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell_95raw(0, _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, "-")) : _ME__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell_95raw(0, _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, _JC__95Utils_95ap(sign, _Lt__36elm_36core_36Basics_36composeR_95raw(_Pb__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36percent_95a0, _Pc__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36percent_95a1, change))));
  };

  var _M3__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36pointsFromStatus = function (status) {
    if (status.$ === 4) {
      var samples = status.a;
      return _J3__36elm_36core_36Maybe_36Just(_OS__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points(samples));
    } else {
      return _I6__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _RF__36mdgriffith_36style_95elements_36Element_36cell = function (box) {
    var coords = {
      a1: box.a1,
      aT: box.aT,
      bw: box.bw
    };
    return _QU__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr_95raw(_LJ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36GridCoords(coords), box.aJ);
  };

  var _RG__36mdgriffith_36style_95elements_36Element_36grid_95raw = function (style, attrs, config) {
    var prepare = elem => _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal(_IG__36elm_36core_36List_36map_95raw(function (_v4) {
      var x = _v4;
      return x;
    }, elem));

    var forSpacing = function (attr) {
      if (attr.$ === 10) {
        return true;
      } else {
        return false;
      }
    };

    var _v0 = _Mu__36elm_36core_36List_36partition_95raw(forSpacing, attrs);

    var spacing = _v0.a;
    var notSpacingAttrs = _v0.b;

    var gridAttributes = function () {
      var _v1 = _Ms__36elm_36core_36List_36head(_K1__36elm_36core_36List_36reverse(spacing));

      if (_v1.$ === 1) {
        return _U_r3;
      } else {
        if (_v1.a.$ === 10) {
          var _v2 = _v1.a;
          var x = _v2.a;
          var y = _v2.b;
          return {
            $: 1,
            a: _SL__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridGap_95raw(x, y),
            b: _U_r3
          };
        } else {
          return _U_r3;
        }
      }
    }();

    return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
      b: _I6__36elm_36core_36Maybe_36Nothing,
      c: notSpacingAttrs,
      t: prepare(config.an),
      p: _Qi__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Grid_95raw(_SM__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridTemplate({
        P: config.P,
        V: config.V
      }), gridAttributes),
      d: "div",
      e: _J3__36elm_36core_36Maybe_36Just(style)
    });
  };

  var _Pa__36mdgriffith_36style_95elements_36Element_36table_95raw = function (style, attrs, rows) {
    var children = _K3__36elm_36core_36List_36concat(_Mv__36elm_36core_36List_36indexedMap_95raw(_Jf_((rowIndex, columns) => _Mv__36elm_36core_36List_36indexedMap_95raw(_Jf_((col, content) => _RF__36mdgriffith_36style_95elements_36Element_36cell({
      aJ: content,
      a1: 1,
      aT: _HX_(rowIndex, col),
      bw: 1
    })), columns)), rows));

    return _RG__36mdgriffith_36style_95elements_36Element_36grid_95raw(style, attrs, {
      an: children,
      P: _U_r3,
      V: _U_r3
    });
  };

  var _Tb__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36groupsOf_95raw = function (howMany, items) {
    var _v0 = _Tf__36elm_36core_36List_36take_95raw(howMany, items);

    if (!_v0.b) {
      return _U_r3;
    } else {
      var xs = _v0;
      return _IK_(xs, _Tb__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36groupsOf_95raw(howMany, _MI__36elm_36core_36List_36drop_95raw(howMany, items)));
    }
  };

  var _Lx__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendFromStatus = function (status) {
    if (status.$ === 4) {
      var trend = status.b;
      return _J3__36elm_36core_36Maybe_36Just(trend);
    } else {
      return _I6__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _K2__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36multiReport_95raw = function (parents, name, children) {
    var _v0 = _M6__36elm_36core_36List_36unzip(children);

    var names = _v0.a;
    var statuses = _v0.b;

    var allPoints = _Je__36elm_36core_36List_36foldr_95raw(_M7__36elm_36core_36Maybe_36map2(_M4__36elm_36core_36List_36cons), _J3__36elm_36core_36Maybe_36Just(_U_r3), _IG__36elm_36core_36List_36map_95raw(_M3__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36pointsFromStatus, statuses));

    var contents = _Ic__36elm_36core_36Maybe_36map_95raw(trends => ({
      $: 1,
      a: _IK_(_Lr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36header_95raw(1, "name"), _IG__36elm_36core_36List_36map_95raw(_Hx_(_M9__36elm_36core_36Basics_36composeR, _MB__36mdgriffith_36style_95elements_36Element_36text, _MC__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell(1)), names)),
      b: {
        $: 1,
        a: _IK_(_Lr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36header_95raw(0, "runs / second"), _IG__36elm_36core_36List_36map_95raw(_Ls__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36runsPerSecond(0), trends)),
        b: {
          $: 1,
          a: _IK_(_Lr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36header_95raw(0, "% change"), _IK_(_ME__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell_95raw(0, _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, "-")), _MF__95List_95map2_95raw(_MG__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36percentChange, trends, _MI__36elm_36core_36List_36drop_95raw(1, trends)))),
          b: {
            $: 1,
            a: _IK_(_Lr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36header_95raw(0, "goodness of fit"), _IG__36elm_36core_36List_36map_95raw(_MJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit, trends)),
            b: _U_r3
          }
        }
      }
    }), _Je__36elm_36core_36List_36foldr_95raw(_MK__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendsFromStatuses_95a0, _Ky__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendsFromStatuses_95a1, statuses));

    return _Ly__36elm_36core_36Maybe_36withDefault_95raw(_I3__36mdgriffith_36style_95elements_36Element_36empty, _Lz__36elm_36core_36Maybe_36map2_95raw(_Hx_(_M0__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36report, parents, name), allPoints, contents));
  };

  var _K0__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36singleReport_95raw = function (parents, name, status) {
    var contents = _Ic__36elm_36core_36Maybe_36map_95raw(trend => ({
      $: 1,
      a: _7h__95List_95fromArray([_Lr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36header_95raw(1, "runs / second"), _Hx_(_Ls__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36runsPerSecond, 1, trend)]),
      b: {
        $: 1,
        a: _7h__95List_95fromArray([_Lr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36header_95raw(0, "goodness of fit"), _Lt__36elm_36core_36Basics_36composeR_95raw(_Lu__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit_95a0, _Lw__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit_95a1, trend)]),
        b: _U_r3
      }
    }), _Lx__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendFromStatus(status));

    return _Ly__36elm_36core_36Maybe_36withDefault_95raw(_I3__36mdgriffith_36style_95elements_36Element_36empty, _Lz__36elm_36core_36Maybe_36map2_95raw(_Hx_(_M0__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36report, parents, name), _Ic__36elm_36core_36Maybe_36map_95raw(_M2__36elm_36core_36List_36singleton, _M3__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36pointsFromStatus(status)), contents));
  };

  var _Io__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36reports_95raw = function (reversedParents, report_) {
    switch (report_.$) {
      case 0:
        var name = report_.a;
        var status = report_.b;
        return {
          $: 1,
          a: _K0__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36singleReport_95raw(_K1__36elm_36core_36List_36reverse(reversedParents), name, status),
          b: _U_r3
        };

      case 1:
        var name = report_.a;
        var statuses = report_.b;
        return {
          $: 1,
          a: _K2__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36multiReport_95raw(_K1__36elm_36core_36List_36reverse(reversedParents), name, statuses),
          b: _U_r3
        };

      default:
        var name = report_.a;
        var children = report_.b;
        return _K3__36elm_36core_36List_36concat(_IG__36elm_36core_36List_36map_95raw(_K4__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36reports(_IK_(name, reversedParents)), children));
    }
  };

  var $_0_factoryFunction = function (tag, factList, kidList) {
    for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
    {
      var kid = kidList.a;
      descendantsCount += kid.b || 0;
      kids.push(kid);
    }

    descendantsCount += kids.length;
    return {
      $: 1,
      c: tag,
      d: _L1__95VirtualDom_95organizeFacts(factList),
      e: kids,
      f: void 0,
      b: descendantsCount
    };
  };

  var _MW__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36adjust_95raw = function (fn, parent, elemen) {
    var merge = _Jf_(function (el, current) {
      if (el.$ === 1) {
        return current;
      } else {
        var something = el.a;

        if (current.$ === 1) {
          return el;
        } else {
          var cur = current.a;
          return _J3__36elm_36core_36Maybe_36Just(_JC__95Utils_95ap(something, cur));
        }
      }
    });

    var maybeOnEmptyList = list => _OY__36elm_36core_36List_36isEmpty(list) ? _I6__36elm_36core_36Maybe_36Nothing : _J3__36elm_36core_36Maybe_36Just(list);

    switch (elemen.$) {
      case 3:
        var elm = elemen.a;
        var child = elm.g;
        var absolutelyPositioned = elm.b;

        var adjustAndMerge = _Jf_(function (el, _v8) {
          var adjustedAggregate = _v8.a;
          var dataAggregate = _v8.b;

          var _v6 = _MW__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36adjust_95raw(fn, _I6__36elm_36core_36Maybe_36Nothing, el);

          var adjusted = _v6.a;
          var data = _v6.b;

          if (data.$ === 1) {
            return _HX_(_IK_(adjusted, adjustedAggregate), dataAggregate);
          } else {
            var d = data.a;
            return _HX_(_IK_(adjusted, adjustedAggregate), _JC__95Utils_95ap(d, dataAggregate));
          }
        });

        var _v1 = function () {
          if (absolutelyPositioned.$ === 1) {
            return _HX_(_I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing);
          } else {
            var others = absolutelyPositioned.a;
            return function (_v3) {
              var children = _v3.a;
              var onScreen = _v3.b;
              return _HX_(maybeOnEmptyList(children), maybeOnEmptyList(onScreen));
            }(_Je__36elm_36core_36List_36foldr_95raw(adjustAndMerge, _HX_(_U_r3, _U_r3), others));
          }
        }();

        var adjustedOthers = _v1.a;
        var otherChildrenData = _v1.b;

        var _v4 = _MW__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36adjust_95raw(fn, _I6__36elm_36core_36Maybe_36Nothing, child);

        var adjustedChild = _v4.a;
        var childData = _v4.b;

        var _v5 = _Hx_(fn, parent, _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element(_KL_(elm, {
          b: adjustedOthers,
          g: adjustedChild
        })));

        var adjustedEl = _v5.a;
        var elData = _v5.b;
        return _HX_(adjustedEl, _Je__36elm_36core_36List_36foldr_95raw(merge, _I6__36elm_36core_36Maybe_36Nothing, {
          $: 1,
          a: childData,
          b: {
            $: 1,
            a: otherChildrenData,
            b: {
              $: 1,
              a: elData,
              b: _U_r3
            }
          }
        }));

      case 4:
        var elm = elemen.a;

        var adjustAndMergeKeyed = _LO_(function (usingParent, _v22, _v23) {
          var key = _v22.a;
          var el = _v22.b;
          var adjustedAggregate = _v23.a;
          var dataAggregate = _v23.b;

          var _v20 = _MW__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36adjust_95raw(fn, usingParent, el);

          var adjusted = _v20.a;
          var data = _v20.b;

          if (data.$ === 1) {
            return _HX_(_IK_(_HX_(key, adjusted), adjustedAggregate), dataAggregate);
          } else {
            var d = data.a;
            return _HX_(_IK_(_HX_(key, adjusted), adjustedAggregate), _JC__95Utils_95ap(d, dataAggregate));
          }
        });

        var adjustAndMerge = _LO_(function (usingParent, el, _v19) {
          var adjustedAggregate = _v19.a;
          var dataAggregate = _v19.b;

          var _v17 = _MW__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36adjust_95raw(fn, usingParent, el);

          var adjusted = _v17.a;
          var data = _v17.b;

          if (data.$ === 1) {
            return _HX_(_IK_(adjusted, adjustedAggregate), dataAggregate);
          } else {
            var d = data.a;
            return _HX_(_IK_(adjusted, adjustedAggregate), _JC__95Utils_95ap(d, dataAggregate));
          }
        });

        var _v9 = function () {
          var _v10 = elm.b;

          if (_v10.$ === 1) {
            return _HX_(_I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing);
          } else {
            var others = _v10.a;
            return function (_v11) {
              var children = _v11.a;
              var onScreen = _v11.b;
              return _HX_(maybeOnEmptyList(children), maybeOnEmptyList(onScreen));
            }(_Je__36elm_36core_36List_36foldr_95raw(adjustAndMerge(_I6__36elm_36core_36Maybe_36Nothing), _HX_(_U_r3, _U_r3), others));
          }
        }();

        var adjustedOthers = _v9.a;
        var otherChildrenData = _v9.b;

        var _v12 = function () {
          var _v13 = elm.t;

          if (!_v13.$) {
            var normalChildren = _v13.a;

            var _v14 = _Je__36elm_36core_36List_36foldr_95raw(adjustAndMerge(_J3__36elm_36core_36Maybe_36Just(elm.p)), _HX_(_U_r3, _U_r3), normalChildren);

            var adjusted = _v14.a;
            var data = _v14.b;
            return _HX_(_J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal(adjusted), maybeOnEmptyList(data));
          } else {
            var keyedChildren = _v13.a;

            var _v15 = _Je__36elm_36core_36List_36foldr_95raw(adjustAndMergeKeyed(_J3__36elm_36core_36Maybe_36Just(elm.p)), _HX_(_U_r3, _U_r3), keyedChildren);

            var adjusted = _v15.a;
            var data = _v15.b;
            return _HX_(_Jt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Keyed(adjusted), maybeOnEmptyList(data));
          }
        }();

        var adjustedChildren = _v12.a;
        var childrenData = _v12.b;

        var _v16 = _Hx_(fn, parent, _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(elm, {
          b: adjustedOthers,
          t: adjustedChildren
        })));

        var adjustedLayout = _v16.a;
        var layoutData = _v16.b;
        return _HX_(adjustedLayout, _Je__36elm_36core_36List_36foldr_95raw(merge, _I6__36elm_36core_36Maybe_36Nothing, {
          $: 1,
          a: layoutData,
          b: {
            $: 1,
            a: childrenData,
            b: {
              $: 1,
              a: otherChildrenData,
              b: _U_r3
            }
          }
        }));

      default:
        return _Hx_(fn, _I6__36elm_36core_36Maybe_36Nothing, elemen);
    }
  };

  var _MS__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36centerTextLayout = function (elm) {
    if (elm.$ === 4) {
      var layoutEl = elm.a;
      var attrs = layoutEl.c;
      var layout = layoutEl.p;

      var _v1 = _Mu__36elm_36core_36List_36partition_95raw(attr => _JB__95Utils_95eq(attr, _LA__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36HAlign(2)) || _JB__95Utils_95eq(attr, _LB__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36VAlign(2)), attrs);

      var centeredProps = _v1.a;
      var others = _v1.b;

      if (!layout.$) {
        return !_OY__36elm_36core_36List_36isEmpty(centeredProps) ? _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
          b: _I6__36elm_36core_36Maybe_36Nothing,
          c: _IK_(_OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("center-text"), _IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(false), centeredProps)),
          t: _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal({
            $: 1,
            a: _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(layoutEl, {
              c: _IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(true), others)
            })),
            b: _U_r3
          }),
          p: _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(1, _U_r3),
          d: "div",
          e: _I6__36elm_36core_36Maybe_36Nothing
        }) : elm;
      } else {
        return elm;
      }
    } else {
      return elm;
    }
  };

  var _MV__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36hoistFixedScreenElements = function (el) {
    var elementIsOnScreen = attrs => _JZ__36elm_36core_36List_36any_95raw(attr => _JB__95Utils_95eq(attr, _LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Ne__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Screen)), attrs);

    switch (el.$) {
      case 3:
        var attrs = el.a.c;
        return elementIsOnScreen(attrs) ? _HX_(_I3__36mdgriffith_36style_95elements_36Element_36empty, _J3__36elm_36core_36Maybe_36Just({
          $: 1,
          a: el,
          b: _U_r3
        })) : _HX_(el, _I6__36elm_36core_36Maybe_36Nothing);

      case 4:
        var attrs = el.a.c;
        return elementIsOnScreen(attrs) ? _HX_(_I3__36mdgriffith_36style_95elements_36Element_36empty, _J3__36elm_36core_36Maybe_36Just({
          $: 1,
          a: el,
          b: _U_r3
        })) : _HX_(el, _I6__36elm_36core_36Maybe_36Nothing);

      default:
        return _HX_(el, _I6__36elm_36core_36Maybe_36Nothing);
    }
  };

  var _Px__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttrList_95raw = function (props, el) {
    switch (el.$) {
      case 0:
        return _I3__36mdgriffith_36style_95elements_36Element_36empty;

      case 1:
        var x = el.a;
        return _IZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacer(x);

      case 5:
        var h = el.a;
        return _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw(h);

      case 4:
        var elm = el.a;
        return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(elm, {
          c: _JC__95Utils_95ap(props, elm.c)
        }));

      case 3:
        var elm = el.a;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element(_KL_(elm, {
          c: _JC__95Utils_95ap(props, elm.c)
        }));

      default:
        var dec = el.a;
        var content = el.b;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
          b: _I6__36elm_36core_36Maybe_36Nothing,
          c: props,
          g: _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(dec, content),
          d: "div",
          e: _I6__36elm_36core_36Maybe_36Nothing
        });
    }
  };

  var _Ps__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttrPriority_95raw = function (prop, el) {
    switch (el.$) {
      case 0:
        return _I3__36mdgriffith_36style_95elements_36Element_36empty;

      case 5:
        var h = el.a;
        return _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw(h);

      case 1:
        var x = el.a;
        return _IZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacer(x);

      case 4:
        var elm = el.a;
        return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(elm, {
          c: _JC__95Utils_95ap(elm.c, {
            $: 1,
            a: prop,
            b: _U_r3
          })
        }));

      case 3:
        var elm = el.a;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element(_KL_(elm, {
          c: _JC__95Utils_95ap(elm.c, {
            $: 1,
            a: prop,
            b: _U_r3
          })
        }));

      default:
        var dec = el.a;
        var content = el.b;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
          b: _I6__36elm_36core_36Maybe_36Nothing,
          c: {
            $: 1,
            a: prop,
            b: _U_r3
          },
          g: _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(dec, content),
          d: "div",
          e: _I6__36elm_36core_36Maybe_36Nothing
        });
    }
  };

  var _Pv__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36counterSpacing = function (elm) {
    if (elm.$ === 4) {
      var layoutEl = elm.a;
      var node = layoutEl.d;
      var layout = layoutEl.p;
      var style = layoutEl.e;
      var attrs = layoutEl.c;
      var children = layoutEl.t;
      var absolutelyPositioned = layoutEl.b;

      var forSpacing = function (posAttr) {
        if (posAttr.$ === 10) {
          var x = posAttr.a;
          var y = posAttr.b;
          return _J3__36elm_36core_36Maybe_36Just(_HX_(x, y));
        } else {
          return _I6__36elm_36core_36Maybe_36Nothing;
        }
      };

      var spacing = _Ms__36elm_36core_36List_36head(_K1__36elm_36core_36List_36reverse(_Mt__36elm_36core_36List_36filterMap_95raw(forSpacing, attrs)));

      var hasSpacing = function () {
        if (spacing.$ === 1) {
          return false;
        } else {
          return true;
        }
      }();

      var forPhantomPadding = function (posAttr) {
        if (posAttr.$ === 13) {
          var t = posAttr.a;
          var r = posAttr.b;
          var b = posAttr.c;
          var l = posAttr.d;
          return _J3__36elm_36core_36Maybe_36Just(_LH__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PhantomPadding_95raw(_Ly__36elm_36core_36Maybe_36withDefault_95raw(0, t), _Ly__36elm_36core_36Maybe_36withDefault_95raw(0, r), _Ly__36elm_36core_36Maybe_36withDefault_95raw(0, b), _Ly__36elm_36core_36Maybe_36withDefault_95raw(0, l)));
        } else {
          return _I6__36elm_36core_36Maybe_36Nothing;
        }
      };

      var phantomPadding = _Ly__36elm_36core_36Maybe_36withDefault_95raw(_LH__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PhantomPadding_95raw(0, 0, 0, 0), _Ms__36elm_36core_36List_36head(_K1__36elm_36core_36List_36reverse(_Mt__36elm_36core_36List_36filterMap_95raw(forPhantomPadding, attrs))));

      var _v1 = _Mu__36elm_36core_36List_36partition_95raw(attr => _JB__95Utils_95eq(attr, _LA__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36HAlign(2)) || _JB__95Utils_95eq(attr, _LB__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36VAlign(2)), attrs);

      var centeredProps = _v1.a;
      var others = _v1.b;

      if (layout.$ === 1) {
        if (hasSpacing) {
          var forAlignment = function (attr) {
            switch (attr.$) {
              case 4:
                return true;

              case 5:
                return true;

              default:
                return false;
            }
          };

          var _v3 = _Mu__36elm_36core_36List_36partition_95raw(forAlignment, attrs);

          var aligned = _v3.a;
          var unaligned = _v3.b;

          var _v4 = function () {
            if (spacing.$ === 1) {
              return _Kr_(_LG__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Margin_95raw(0, 0, 0, 0), _LF__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacing_95raw(0, 0), 0);
            } else {
              var _v6 = spacing.a;
              var x = _v6.a;
              var y = _v6.b;
              return _Kr_(_LG__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Margin_95raw(-1 * y, -1 * x, -1 * y, -1 * x), _LF__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacing_95raw(x, y), x);
            }
          }();

          var negativeMargin = _v4.a;
          var spacingAttr = _v4.b;
          var totalHSpacing = _v4.c;
          return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
            b: absolutelyPositioned,
            c: _IK_(_OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("counter-spacing-container"), _IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(true), unaligned)),
            t: _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal({
              $: 1,
              a: _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
                b: _I6__36elm_36core_36Maybe_36Nothing,
                c: _IK_(_OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("counter-spacing"), _IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(false), _IK_(phantomPadding, _IK_(negativeMargin, _IK_(spacingAttr, _IK_(_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_RI__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Calc_95raw(100, totalHSpacing)), _IK_(_LL__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Shrink(1), aligned))))))),
                t: function () {
                  if (!children.$) {
                    var childs = children.a;
                    return _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal(_IG__36elm_36core_36List_36map_95raw(_RJ__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(true)), childs));
                  } else {
                    var childs = children.a;
                    return _Jt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Keyed(_IG__36elm_36core_36List_36map_95raw(_Ju__36elm_36core_36Tuple_36mapSecond(_RJ__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(true))), childs));
                  }
                }(),
                p: layout,
                d: "div",
                e: _I6__36elm_36core_36Maybe_36Nothing
              }),
              b: _U_r3
            }),
            p: _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(1, _U_r3),
            d: node,
            e: style
          });
        } else {
          return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(layoutEl, {
            c: _IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(true), attrs)
          }));
        }
      } else {
        return elm;
      }
    } else {
      return elm;
    }
  };

  var _Pw__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setAttrs_95raw = function (props, el) {
    switch (el.$) {
      case 0:
        return _I3__36mdgriffith_36style_95elements_36Element_36empty;

      case 1:
        var x = el.a;
        return _IZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacer(x);

      case 5:
        var h = el.a;
        return _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw(h);

      case 4:
        var elm = el.a;
        return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout(_KL_(elm, {
          c: props
        }));

      case 3:
        var elm = el.a;
        return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element(_KL_(elm, {
          c: props
        }));

      default:
        var dec = el.a;
        var content = el.b;
        return _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(dec, content);
    }
  };

  var _Nd__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36positionNearby_95raw = function (parent, elm) {
    var setPosition = _LO_(function (nearbyPosition, _v24, el) {
      var aligned = _v24.a;
      var unaligned = _v24.b;

      var nearbyAlignment = function () {
        _v19$4: while (true) {
          if (!nearbyPosition.$ && nearbyPosition.a.$ === 3) {
            switch (nearbyPosition.a.a) {
              case 1:
                var _v20 = nearbyPosition.a.a;
                return {
                  $: 1,
                  a: _LB__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36VAlign(0),
                  b: _U_r3
                };

              case 0:
                var _v21 = nearbyPosition.a.a;
                return {
                  $: 1,
                  a: _LB__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36VAlign(1),
                  b: _U_r3
                };

              case 3:
                var _v22 = nearbyPosition.a.a;
                return {
                  $: 1,
                  a: _LA__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36HAlign(1),
                  b: _U_r3
                };

              case 2:
                var _v23 = nearbyPosition.a.a;
                return {
                  $: 1,
                  a: _LA__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36HAlign(0),
                  b: _U_r3
                };

              default:
                break _v19$4;
            }
          } else {
            break _v19$4;
          }
        }

        return _U_r3;
      }();

      var isLayout = function () {
        if (elm.$ === 4) {
          return true;
        } else {
          return false;
        }
      }();

      var framed = function () {
        if (nearbyPosition.$ === 1) {
          return false;
        } else {
          return true;
        }
      }();

      var forWidth = function (prop) {
        if (prop.$ === 2) {
          return true;
        } else {
          return false;
        }
      };

      var width = _Ms__36elm_36core_36List_36head(_K1__36elm_36core_36List_36reverse(_N1__36elm_36core_36List_36filter_95raw(forWidth, unaligned)));

      var forHeight = function (prop) {
        if (prop.$ === 1) {
          return true;
        } else {
          return false;
        }
      };

      var height = _Ms__36elm_36core_36List_36head(_K1__36elm_36core_36List_36reverse(_N1__36elm_36core_36List_36filter_95raw(forHeight, unaligned)));

      var adjustWidthHeight = function (elem) {
        var adjustWidth = function (element) {
          if (width.$ === 1) {
            return element;
          } else {
            if (width.a.$ === 2 && width.a.a.$ === 1) {
              var percent = width.a.a.a;
              return _Ps__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttrPriority_95raw(_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), element);
            } else {
              var x = width.a;
              return element;
            }
          }
        };

        var adjustHeight = function (element) {
          if (height.$ === 1) {
            return element;
          } else {
            if (height.a.$ === 1 && height.a.a.$ === 1) {
              var percent = height.a.a.a;
              return _Ps__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttrPriority_95raw(_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), element);
            } else {
              var x = height.a;
              return element;
            }
          }
        };

        return adjustHeight(adjustWidth(elem));
      };

      var addWidthHeight = function (attrs) {
        var _v8 = _HX_(width, height);

        if (_v8.a.$ === 1) {
          if (_v8.b.$ === 1) {
            var _v9 = _v8.a;
            var _v10 = _v8.b;
            return attrs;
          } else {
            var _v11 = _v8.a;
            var h = _v8.b.a;
            return _IK_(h, attrs);
          }
        } else {
          if (!_v8.b.$) {
            var w = _v8.a.a;
            var h = _v8.b.a;
            return _IK_(w, _IK_(h, attrs));
          } else {
            var w = _v8.a.a;
            var _v12 = _v8.b;
            return _IK_(w, attrs);
          }
        }
      };

      return _JB__95Utils_95eq(nearbyPosition, _J3__36elm_36core_36Maybe_36Just(_Pt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Nearby(1))) || _JB__95Utils_95eq(nearbyPosition, _J3__36elm_36core_36Maybe_36Just(_Pt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Nearby(0))) ? _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
        b: _I6__36elm_36core_36Maybe_36Nothing,
        c: _IK_(_OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("above-below-intermediate-parent"), _IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(false), _IK_(_L9__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Height(_Ho__36mdgriffith_36style_95elements_36Element_36Attributes_36px(0)), _IK_(_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), _IK_(_LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Pu__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Absolute(_JB__95Utils_95eq(nearbyPosition, _J3__36elm_36core_36Maybe_36Just(_Pt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Nearby(1))) ? 0 : 1)), _IK_(_LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), isLayout ? nearbyAlignment : _JC__95Utils_95ap(nearbyAlignment, aligned))))))),
        t: _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal({
          $: 1,
          a: _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
            b: _I6__36elm_36core_36Maybe_36Nothing,
            c: function () {
              var addWidth = attrs => isLayout ? _IK_(_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), attrs) : attrs;

              return addWidth(_7h__95List_95fromArray([_OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("above-below-intermediate"), _LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(false), _LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Pu__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Absolute(_JB__95Utils_95eq(nearbyPosition, _J3__36elm_36core_36Maybe_36Just(_Pt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Nearby(1))) ? 1 : 0)), _LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_I6__36elm_36core_36Maybe_36Nothing, _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), _LB__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36VAlign(1), _J4__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Attr(_Ix__95VirtualDom_95style_95raw("z-index", "10"))]));
            }(),
            g: _Pv__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36counterSpacing(_Pw__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setAttrs_95raw(_IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(true), _IK_(_LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Pu__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Absolute(0)), _IK_(_LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), unaligned))), el)),
            d: "div",
            e: _I6__36elm_36core_36Maybe_36Nothing
          }),
          b: _U_r3
        }),
        p: _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(1, _U_r3),
        d: "div",
        e: _I6__36elm_36core_36Maybe_36Nothing
      }) : framed ? _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
        b: _I6__36elm_36core_36Maybe_36Nothing,
        c: _IK_(_OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("nearby-intermediate-parent"), _IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(false), _IK_(_L9__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Height(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), _IK_(_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), _IK_(_LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Pu__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Absolute(0)), _IK_(_LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), isLayout ? nearbyAlignment : _JC__95Utils_95ap(nearbyAlignment, aligned))))))),
        t: _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal({
          $: 1,
          a: _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
            b: _I6__36elm_36core_36Maybe_36Nothing,
            c: addWidthHeight(_7h__95List_95fromArray([_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(false), _LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Nn__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Relative), _LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0)), _J4__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Attr(_Ix__95VirtualDom_95style_95raw("z-index", "10")), _OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("nearby-intermediate")])),
            g: _Pv__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36counterSpacing(adjustWidthHeight(_Px__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttrList_95raw(_IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(true), _IK_(_LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Pu__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Absolute(0)), _IK_(_LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), _U_r3))), el))),
            d: "div",
            e: _I6__36elm_36core_36Maybe_36Nothing
          }),
          b: _U_r3
        }),
        p: _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(1, _U_r3),
        d: "div",
        e: _I6__36elm_36core_36Maybe_36Nothing
      }) : !_OY__36elm_36core_36List_36isEmpty(aligned) ? _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
        b: _I6__36elm_36core_36Maybe_36Nothing,
        c: _IK_(_OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("nearby-aligned-intermediate-parent"), _IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(false), _IK_(_L9__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Height(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), _IK_(_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), _IK_(_LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Nn__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Relative), _IK_(_LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), isLayout ? nearbyAlignment : _JC__95Utils_95ap(nearbyAlignment, aligned))))))),
        t: _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal({
          $: 1,
          a: _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
            b: _I6__36elm_36core_36Maybe_36Nothing,
            c: addWidthHeight(_7h__95List_95fromArray([_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(false), _LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Nn__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Relative), _LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0)), _OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag("nearby-aligned-intermediate")])),
            g: _Pv__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36counterSpacing(adjustWidthHeight(_Px__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttrList_95raw(_IK_(_LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents(true), _IK_(_LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame(_Nn__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Relative), _IK_(_LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw(_J3__36elm_36core_36Maybe_36Just(0), _J3__36elm_36core_36Maybe_36Just(0), _I6__36elm_36core_36Maybe_36Nothing), _U_r3))), el))),
            d: "div",
            e: _I6__36elm_36core_36Maybe_36Nothing
          }),
          b: _U_r3
        }),
        p: _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(1, _U_r3),
        d: "div",
        e: _I6__36elm_36core_36Maybe_36Nothing
      }) : _Pv__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36counterSpacing(elm);
    });

    var forAlignment = function (attr) {
      switch (attr.$) {
        case 4:
          return true;

        case 5:
          return true;

        default:
          return false;
      }
    };

    var separateAlignment = attrs => _Mu__36elm_36core_36List_36partition_95raw(forAlignment, attrs);

    switch (elm.$) {
      case 3:
        var attrs = elm.a.c;

        var isFrame = function (attr) {
          if (attr.$ === 7) {
            var x = attr.a;
            return _J3__36elm_36core_36Maybe_36Just(x);
          } else {
            return _I6__36elm_36core_36Maybe_36Nothing;
          }
        };

        var frame = _Ms__36elm_36core_36List_36head(_Mt__36elm_36core_36List_36filterMap_95raw(isFrame, attrs));

        var _v1 = separateAlignment(attrs);

        var aligned = _v1.a;
        var unaligned = _v1.b;

        if (parent.$ === 1) {
          return _IL_(setPosition, frame, _HX_(aligned, unaligned), elm);
        } else {
          return elm;
        }

      case 4:
        var attrs = elm.a.c;

        var isFrame = function (attr) {
          if (attr.$ === 7) {
            var x = attr.a;
            return _J3__36elm_36core_36Maybe_36Just(x);
          } else {
            return _I6__36elm_36core_36Maybe_36Nothing;
          }
        };

        var frame = _Ms__36elm_36core_36List_36head(_Mt__36elm_36core_36List_36filterMap_95raw(isFrame, attrs));

        var _v4 = separateAlignment(attrs);

        var aligned = _v4.a;
        var unaligned = _v4.b;

        if (parent.$ === 1) {
          return _IL_(setPosition, frame, _HX_(aligned, unaligned), elm);
        } else {
          return _Pv__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36counterSpacing(elm);
        }

      default:
        return _Pv__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36counterSpacing(elm);
    }
  };

  var _KD__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36apply = function (root) {
    var stack_raw = (parent, el) => _Lt__36elm_36core_36Basics_36composeR_95raw(_MS__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36centerTextLayout, _Hx_(_M9__36elm_36core_36Basics_36composeR, _MT__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36positionNearby(parent), _MV__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36hoistFixedScreenElements), el),
        stack = _Jf_(stack_raw);

    return _MW__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36adjust_95raw(stack, _I6__36elm_36core_36Maybe_36Nothing, root);
  };

  var _Mq__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36defaultPadding_95raw = function (_v0, _v1) {
    var mW = _v0.a;
    var mX = _v0.b;
    var mY = _v0.c;
    var mZ = _v0.d;
    var w = _v1.a;
    var x = _v1.b;
    var y = _v1.c;
    var z = _v1.d;
    return _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(_Ly__36elm_36core_36Maybe_36withDefault_95raw(w, mW), _Ly__36elm_36core_36Maybe_36withDefault_95raw(x, mX), _Ly__36elm_36core_36Maybe_36withDefault_95raw(y, mY), _Ly__36elm_36core_36Maybe_36withDefault_95raw(z, mZ));
  };

  var _Mw__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36detectOrder_95raw = function (list, i) {
    var len = _LP__36elm_36core_36List_36length(list);

    return !i && len === 1 ? _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast : !i ? _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First : _JB__95Utils_95eq(i, len - 1) ? _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last : _Ox__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Middle(i);
  };

  var _RH__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36gridPosition = function (_v0) {
    var start = _v0.aT;
    var width = _v0.bw;
    var height = _v0.a1;
    var _v1 = start;
    var x = _v1.a;
    var y = _v1.b;

    var _v2 = _HX_(y + 1, y + 1 + height);

    var rowStart = _v2.a;
    var rowEnd = _v2.b;

    var _v3 = _HX_(x + 1, x + 1 + width);

    var colStart = _v3.a;
    var colEnd = _v3.b;
    return !width || !height ? _I6__36elm_36core_36Maybe_36Nothing : _J3__36elm_36core_36Maybe_36Just(_OT__36elm_36core_36String_36join_95raw(" / ", {
      $: 1,
      a: _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(rowStart),
      b: {
        $: 1,
        a: _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(colStart),
        b: {
          $: 1,
          a: _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(rowEnd),
          b: {
            $: 1,
            a: _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(colEnd),
            b: _U_r3
          }
        }
      }
    }));
  };

  var _Pq__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36makePositionable_95raw = function (attribute, pos) {
    switch (attribute.$) {
      case 22:
        var x = attribute.a;
        return _KL_(pos, {
          ag: _J3__36elm_36core_36Maybe_36Just(x)
        });

      case 21:
        var i = attribute.a;
        return _KL_(pos, {
          aH: _J3__36elm_36core_36Maybe_36Just(i)
        });

      case 3:
        return _KL_(pos, {
          S: true
        });

      case 12:
        return _KL_(pos, {
          az: true
        });

      case 0:
        var vary = attribute.a;
        var on = attribute.b;
        return _KL_(pos, {
          X: _IK_(_HX_(vary, on), pos.X)
        });

      case 1:
        var len = attribute.a;
        return _KL_(pos, {
          a1: _J3__36elm_36core_36Maybe_36Just(len)
        });

      case 2:
        var len = attribute.a;
        return _KL_(pos, {
          bw: _J3__36elm_36core_36Maybe_36Just(len)
        });

      case 6:
        var x = attribute.a;
        var y = attribute.b;
        var z = attribute.c;
        var _v1 = pos.as;
        var currentX = _v1.a;
        var currentY = _v1.b;
        var currentZ = _v1.c;

        var newX = function () {
          if (x.$ === 1) {
            return currentX;
          } else {
            var a = x.a;
            return _J3__36elm_36core_36Maybe_36Just(a);
          }
        }();

        var newY = function () {
          if (y.$ === 1) {
            return currentY;
          } else {
            var a = y.a;
            return _J3__36elm_36core_36Maybe_36Just(a);
          }
        }();

        var newZ = function () {
          if (z.$ === 1) {
            return currentZ;
          } else {
            var a = z.a;
            return _J3__36elm_36core_36Maybe_36Just(a);
          }
        }();

        return _KL_(pos, {
          as: _Kr_(newX, newY, newZ)
        });

      case 7:
        var frame = attribute.a;
        return _KL_(pos, {
          I: _J3__36elm_36core_36Maybe_36Just(frame)
        });

      case 4:
        var alignment = attribute.a;
        return _KL_(pos, {
          ac: _J3__36elm_36core_36Maybe_36Just(alignment)
        });

      case 5:
        var alignment = attribute.a;
        return _KL_(pos, {
          ay: _J3__36elm_36core_36Maybe_36Just(alignment)
        });

      case 10:
        var spaceX = attribute.a;
        var spaceY = attribute.b;
        return pos;

      case 11:
        var t = attribute.a;
        var r = attribute.b;
        var b = attribute.c;
        var l = attribute.d;
        return _KL_(pos, {
          aB: _J3__36elm_36core_36Maybe_36Just(_MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(t, r, b, l))
        });

      case 14:
        return pos;

      case 13:
        var top = attribute.a;
        var right = attribute.b;
        var bottom = attribute.c;
        var left = attribute.d;
        var _v5 = pos.ah;
        var currentTop = _v5.a;
        var currentRight = _v5.b;
        var currentBottom = _v5.c;
        var currentLeft = _v5.d;

        var newBottom = function () {
          if (bottom.$ === 1) {
            return currentBottom;
          } else {
            var a = bottom.a;
            return _J3__36elm_36core_36Maybe_36Just(a);
          }
        }();

        var newLeft = function () {
          if (left.$ === 1) {
            return currentLeft;
          } else {
            var a = left.a;
            return _J3__36elm_36core_36Maybe_36Just(a);
          }
        }();

        var newRight = function () {
          if (right.$ === 1) {
            return currentRight;
          } else {
            var a = right.a;
            return _J3__36elm_36core_36Maybe_36Just(a);
          }
        }();

        var newTop = function () {
          if (top.$ === 1) {
            return currentTop;
          } else {
            var a = top.a;
            return _J3__36elm_36core_36Maybe_36Just(a);
          }
        }();

        return _KL_(pos, {
          ah: _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(newTop, newRight, newBottom, newLeft)
        });

      case 8:
        return _KL_(pos, {
          bS: true
        });

      case 9:
        var t = attribute.a;
        return _KL_(pos, {
          aC: _J3__36elm_36core_36Maybe_36Just(t)
        });

      case 15:
        var ev = attribute.a;
        return _KL_(pos, {
          c: _IK_(ev, pos.c)
        });

      case 16:
        var ev = attribute.a;
        return _KL_(pos, {
          c: _IK_(ev, pos.c)
        });

      case 17:
        var attr = attribute.a;
        return _KL_(pos, {
          c: _IK_(attr, pos.c)
        });

      case 20:
        var on = attribute.a;
        return _KL_(pos, {
          aE: _J3__36elm_36core_36Maybe_36Just(on)
        });

      case 18:
        var name = attribute.a;
        return _KL_(pos, {
          ap: _J3__36elm_36core_36Maybe_36Just(name)
        });

      default:
        var coords = attribute.a;

        var _v10 = _RH__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36gridPosition(coords);

        if (_v10.$ === 1) {
          return _KL_(pos, {
            bS: true
          });
        } else {
          var xy = _v10.a;
          return _KL_(pos, {
            ap: _J3__36elm_36core_36Maybe_36Just(xy)
          });
        }

    }
  };

  var _On__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36alignLayout_95raw = function (maybeHorizontal, maybeVertical, layout) {
    var alignGridVertical = function (align) {
      switch (align) {
        case 0:
          return _Qc__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridV(_Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other(0));

        case 1:
          return _Qc__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridV(_Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other(1));

        case 2:
          return _Qc__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridV(_Pm__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Center);

        default:
          return _Qc__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridV(_Po__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Justify);
      }
    };

    var alignGridHorizontal = function (align) {
      switch (align) {
        case 0:
          return _Qe__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridH(_Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other(0));

        case 1:
          return _Qe__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridH(_Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other(1));

        case 2:
          return _Qe__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridH(_Pm__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Center);

        default:
          return _Qe__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridH(_Po__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Justify);
      }
    };

    var alignFlexboxVertical = function (align) {
      switch (align) {
        case 0:
          return _Qf__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Vert(_Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other(0));

        case 1:
          return _Qf__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Vert(_Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other(1));

        case 2:
          return _Qf__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Vert(_Pm__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Center);

        default:
          return _Qf__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Vert(_Po__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Justify);
      }
    };

    var alignFlexboxHorizontal = function (align) {
      switch (align) {
        case 0:
          return _Qg__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Horz(_Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other(0));

        case 1:
          return _Qg__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Horz(_Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other(1));

        case 2:
          return _Qg__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Horz(_Pm__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Center);

        default:
          return _Qg__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Horz(_Po__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Justify);
      }
    };

    switch (layout.$) {
      case 0:
        var clearfix = layout.a;
        return _Qh__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36TextLayout(clearfix);

      case 1:
        var dir = layout.a;
        var els = layout.b;

        var _v1 = _HX_(maybeHorizontal, maybeVertical);

        if (_v1.a.$ === 1) {
          if (_v1.b.$ === 1) {
            var _v2 = _v1.a;
            var _v3 = _v1.b;
            return _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(dir, els);
          } else {
            var _v5 = _v1.a;
            var v = _v1.b.a;
            return _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(dir, _IK_(alignFlexboxVertical(v), els));
          }
        } else {
          if (_v1.b.$ === 1) {
            var h = _v1.a.a;
            var _v4 = _v1.b;
            return _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(dir, _IK_(alignFlexboxHorizontal(h), els));
          } else {
            var h = _v1.a.a;
            var v = _v1.b.a;
            return _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(dir, _IK_(alignFlexboxHorizontal(h), _IK_(alignFlexboxVertical(v), els)));
          }
        }

      default:
        var template = layout.a;
        var els = layout.b;

        var _v6 = _HX_(maybeHorizontal, maybeVertical);

        if (_v6.a.$ === 1) {
          if (_v6.b.$ === 1) {
            var _v7 = _v6.a;
            var _v8 = _v6.b;
            return _Qi__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Grid_95raw(template, els);
          } else {
            var _v10 = _v6.a;
            var v = _v6.b.a;
            return _Qi__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Grid_95raw(template, _IK_(alignGridVertical(v), els));
          }
        } else {
          if (_v6.b.$ === 1) {
            var h = _v6.a.a;
            var _v9 = _v6.b;
            return _Qi__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Grid_95raw(template, _IK_(alignGridHorizontal(h), els));
          } else {
            var h = _v6.a.a;
            var v = _v6.b.a;
            return _Qi__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Grid_95raw(template, _IK_(alignGridHorizontal(h), _IK_(alignGridVertical(v), els)));
          }
        }

    }
  };

  var _Or__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36box = function (_v0) {
    var a = _v0.a;
    var b = _v0.b;
    var c = _v0.c;
    var d = _v0.d;
    return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(a) + ("px " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(b) + ("px " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(c) + ("px " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(d) + "px"))))));
  };

  var _Ok__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36calcPosition_95raw = function (frame, _v0) {
    var mx = _v0.a;
    var my = _v0.b;
    var mz = _v0.c;

    var z = _Ly__36elm_36core_36Maybe_36withDefault_95raw(0, mz);

    var y = _Ly__36elm_36core_36Maybe_36withDefault_95raw(0, my);

    var x = _Ly__36elm_36core_36Maybe_36withDefault_95raw(0, mx);

    switch (frame.$) {
      case 1:
        return {
          $: 1,
          a: _HX_("position", "relative"),
          b: {
            $: 1,
            a: _HX_("left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px"),
            b: {
              $: 1,
              a: _HX_("top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + "px"),
              b: _U_r3
            }
          }
        };

      case 0:
        return {
          $: 1,
          a: _HX_("position", "fixed"),
          b: {
            $: 1,
            a: _HX_("left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px"),
            b: {
              $: 1,
              a: _HX_("top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + "px"),
              b: {
                $: 1,
                a: _HX_("z-index", "1000"),
                b: _U_r3
              }
            }
          }
        };

      case 2:
        if (!frame.a) {
          var _v2 = frame.a;
          return _Mt__36elm_36core_36List_36filterMap_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, {
            $: 1,
            a: _J3__36elm_36core_36Maybe_36Just(_HX_("position", "absolute")),
            b: {
              $: 1,
              a: function () {
                if (!mx.$) {
                  var xVal = mx.a;
                  return _J3__36elm_36core_36Maybe_36Just(_HX_("left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(xVal) + "px"));
                } else {
                  return _I6__36elm_36core_36Maybe_36Nothing;
                }
              }(),
              b: {
                $: 1,
                a: function () {
                  if (!my.$) {
                    var yVal = my.a;
                    return _J3__36elm_36core_36Maybe_36Just(_HX_("top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(yVal) + "px"));
                  } else {
                    return _I6__36elm_36core_36Maybe_36Nothing;
                  }
                }(),
                b: _U_r3
              }
            }
          });
        } else {
          var _v5 = frame.a;
          return _Mt__36elm_36core_36List_36filterMap_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, {
            $: 1,
            a: _J3__36elm_36core_36Maybe_36Just(_HX_("position", "absolute")),
            b: {
              $: 1,
              a: function () {
                if (!mx.$) {
                  var xVal = mx.a;
                  return _J3__36elm_36core_36Maybe_36Just(_HX_("left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(xVal) + "px"));
                } else {
                  return _I6__36elm_36core_36Maybe_36Nothing;
                }
              }(),
              b: {
                $: 1,
                a: function () {
                  if (!my.$) {
                    var yVal = my.a;
                    return _J3__36elm_36core_36Maybe_36Just(_HX_("bottom", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(yVal) + "px"));
                  } else {
                    return _I6__36elm_36core_36Maybe_36Nothing;
                  }
                }(),
                b: _U_r3
              }
            }
          });
        }

      default:
        switch (frame.a) {
          case 4:
            var _v8 = frame.a;
            return {
              $: 1,
              a: _HX_("position", "relative"),
              b: {
                $: 1,
                a: _HX_("top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + "px"),
                b: {
                  $: 1,
                  a: _HX_("left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px"),
                  b: _U_r3
                }
              }
            };

          case 1:
            var _v9 = frame.a;
            return {
              $: 1,
              a: _HX_("position", "relative"),
              b: {
                $: 1,
                a: _HX_("top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + "px"),
                b: {
                  $: 1,
                  a: _HX_("left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px"),
                  b: _U_r3
                }
              }
            };

          case 0:
            var _v10 = frame.a;
            return {
              $: 1,
              a: _HX_("position", "relative"),
              b: {
                $: 1,
                a: _HX_("top", "calc(100% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + "px)")),
                b: {
                  $: 1,
                  a: _HX_("left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px"),
                  b: _U_r3
                }
              }
            };

          case 2:
            var _v11 = frame.a;
            return {
              $: 1,
              a: _HX_("position", "relative"),
              b: {
                $: 1,
                a: _HX_("right", "calc(100% - " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px)")),
                b: {
                  $: 1,
                  a: _HX_("top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + "px"),
                  b: _U_r3
                }
              }
            };

          default:
            var _v12 = frame.a;
            return {
              $: 1,
              a: _HX_("position", "relative"),
              b: {
                $: 1,
                a: _HX_("left", "calc(100% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px)")),
                b: {
                  $: 1,
                  a: _HX_("top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(y) + "px"),
                  b: _U_r3
                }
              }
            };
        }

    }
  };

  var _Op__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexHeight = function (l) {
    switch (l.$) {
      case 0:
        var x = l.a;
        return {
          $: 1,
          a: _HX_("height", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px"),
          b: _U_r3
        };

      case 1:
        var x = l.a;
        return {
          $: 1,
          a: _HX_("height", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "%"),
          b: _U_r3
        };

      case 2:
        return {
          $: 1,
          a: _HX_("height", "auto"),
          b: _U_r3
        };

      case 3:
        var i = l.a;
        return {
          $: 1,
          a: _HX_("flex-grow", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(i)),
          b: {
            $: 1,
            a: _HX_("flex-basis", "0"),
            b: _U_r3
          }
        };

      default:
        var perc = l.a;
        var px = l.b;
        return {
          $: 1,
          a: _HX_("height", "calc(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(perc) + ("% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(px) + "px)")))),
          b: _U_r3
        };
    }
  };

  var _Oh__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexWidth_95raw = function (len, adjustment) {
    switch (len.$) {
      case 0:
        var x = len.a;
        return {
          $: 1,
          a: _HX_("width", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px"),
          b: _U_r3
        };

      case 1:
        var x = len.a;
        return {
          $: 1,
          a: _HX_("width", "calc(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + ("% - " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(adjustment) + "px)")))),
          b: _U_r3
        };

      case 2:
        return {
          $: 1,
          a: _HX_("width", "auto"),
          b: _U_r3
        };

      case 3:
        var i = len.a;
        return {
          $: 1,
          a: _HX_("flex-grow", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(i)),
          b: {
            $: 1,
            a: _HX_("flex-basis", "0"),
            b: _U_r3
          }
        };

      default:
        var perc = len.a;
        var px = len.b;
        return {
          $: 1,
          a: _HX_("width", "calc(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(perc) + ("% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(px) + "px)")))),
          b: _U_r3
        };
    }
  };

  var _Oo__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36flexboxHorizontalIndividualAlignment_95raw = function (direction, alignment) {
    switch (direction) {
      case 1:
        switch (alignment) {
          case 0:
            return _I6__36elm_36core_36Maybe_36Nothing;

          case 1:
            return _I6__36elm_36core_36Maybe_36Nothing;

          case 2:
            return _I6__36elm_36core_36Maybe_36Nothing;

          default:
            return _I6__36elm_36core_36Maybe_36Nothing;
        }

      case 3:
        switch (alignment) {
          case 0:
            return _I6__36elm_36core_36Maybe_36Nothing;

          case 1:
            return _I6__36elm_36core_36Maybe_36Nothing;

          case 2:
            return _I6__36elm_36core_36Maybe_36Nothing;

          default:
            return _I6__36elm_36core_36Maybe_36Nothing;
        }

      case 2:
        switch (alignment) {
          case 0:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "flex-start"));

          case 1:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "flex-end"));

          case 2:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "center"));

          default:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "stretch"));
        }

      default:
        switch (alignment) {
          case 0:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "flex-start"));

          case 1:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "flex-end"));

          case 2:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "center"));

          default:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "stretch"));
        }

    }
  };

  var _Oj__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36flexboxVerticalIndividualAlignment_95raw = function (direction, alignment) {
    switch (direction) {
      case 1:
        switch (alignment) {
          case 0:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "flex-start"));

          case 1:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "flex-end"));

          case 2:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "center"));

          default:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "center"));
        }

      case 3:
        switch (alignment) {
          case 0:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "flex-start"));

          case 1:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "flex-end"));

          case 2:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "center"));

          default:
            return _J3__36elm_36core_36Maybe_36Just(_HX_("align-self", "center"));
        }

      case 2:
        switch (alignment) {
          case 0:
            return _I6__36elm_36core_36Maybe_36Nothing;

          case 1:
            return _I6__36elm_36core_36Maybe_36Nothing;

          case 2:
            return _I6__36elm_36core_36Maybe_36Nothing;

          default:
            return _I6__36elm_36core_36Maybe_36Nothing;
        }

      default:
        switch (alignment) {
          case 0:
            return _I6__36elm_36core_36Maybe_36Nothing;

          case 1:
            return _I6__36elm_36core_36Maybe_36Nothing;

          case 2:
            return _I6__36elm_36core_36Maybe_36Nothing;

          default:
            return _I6__36elm_36core_36Maybe_36Nothing;
        }

    }
  };

  var _Oi__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36parentAdjustedLength_95raw = function (len, adjustment) {
    switch (len.$) {
      case 0:
        var x = len.a;
        return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px";

      case 1:
        var x = len.a;
        return "calc(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + ("% - " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(adjustment) + "px)")));

      case 2:
        return "auto";

      case 3:
        var i = len.a;
        return "calc(100% - " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(adjustment) + "px)");

      default:
        var perc = len.a;
        var px = len.b;
        return "calc(" + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(perc) + ("% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(px) + "px)")));
    }
  };

  var _Ol__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderPadding = function (_v0) {
    var top = _v0.a;
    var right = _v0.b;
    var bottom = _v0.c;
    var left = _v0.d;

    var format_raw = (name, x) => _HX_(name, _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x) + "px"),
        format = _Jf_(format_raw);

    return _Mt__36elm_36core_36List_36filterMap_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, {
      $: 1,
      a: _Ic__36elm_36core_36Maybe_36map_95raw(format("padding-top"), top),
      b: {
        $: 1,
        a: _Ic__36elm_36core_36Maybe_36map_95raw(format("padding-bottom"), bottom),
        b: {
          $: 1,
          a: _Ic__36elm_36core_36Maybe_36map_95raw(format("padding-left"), left),
          b: {
            $: 1,
            a: _Ic__36elm_36core_36Maybe_36map_95raw(format("padding-right"), right),
            b: _U_r3
          }
        }
      }
    });
  };

  var _Mo__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderAttributes_95raw = function (elType, order, maybeElemID, parent, stylesheet, elem) {
    var width = function (attrs) {
      var _v62 = elem.bw;

      if (_v62.$ === 1) {
        return attrs;
      } else {
        var len = _v62.a;

        if (!parent.$) {
          var parentEl = parent.a;

          var _v64 = _Ly__36elm_36core_36Maybe_36withDefault_95raw(_MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0), parentEl.M);

          var rightPad = _v64.b;
          var leftPad = _v64.d;
          var paddingAdjustment = (rightPad + leftPad) / 2;
          var _v65 = parentEl.p;

          _v65$2: while (true) {
            if (_v65.$ === 1) {
              switch (_v65.a) {
                case 1:
                  var _v66 = _v65.a;
                  return _JC__95Utils_95ap(_Oh__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexWidth_95raw(len, paddingAdjustment), attrs);

                case 3:
                  var _v67 = _v65.a;
                  return _JC__95Utils_95ap(_Oh__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexWidth_95raw(len, paddingAdjustment), attrs);

                default:
                  break _v65$2;
              }
            } else {
              break _v65$2;
            }
          }

          return _IK_(_HX_("width", _Oi__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36parentAdjustedLength_95raw(len, paddingAdjustment)), attrs);
        } else {
          return _IK_(_HX_("width", _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length(len)), attrs);
        }
      }
    };

    var vertical = function (attrs) {
      var _v57 = elem.ay;

      if (_v57.$ === 1) {
        return attrs;
      } else {
        var align = _v57.a;

        if (elem.S && _JB__95Utils_95eq(elType, _L3__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Single)) {
          return attrs;
        } else {
          if (elem.S) {
            return attrs;
          } else {
            if (!_JB__95Utils_95eq(elem.I, _I6__36elm_36core_36Maybe_36Nothing)) {
              switch (align) {
                case 0:
                  return _IK_(_HX_("top", "0"), attrs);

                case 1:
                  return _IK_(_HX_("bottom", "0"), attrs);

                case 2:
                  return attrs;

                default:
                  return attrs;
              }
            } else {
              if (parent.$ === 1) {
                return attrs;
              } else {
                var parentEl = parent.a;
                var _v60 = parentEl.p;

                if (_v60.$ === 1) {
                  var dir = _v60.a;

                  var _v61 = _Oj__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36flexboxVerticalIndividualAlignment_95raw(dir, align);

                  if (_v61.$ === 1) {
                    return attrs;
                  } else {
                    var a = _v61.a;
                    return _IK_(a, attrs);
                  }
                } else {
                  return attrs;
                }
              }
            }
          }
        }
      }
    };

    var shrink = function (attrs) {
      var _v41 = elem.aH;

      if (!_v41.$) {
        var i = _v41.a;
        return _IK_(_HX_("flex-shrink", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(i)), attrs);
      } else {
        if (parent.$ === 1) {
          return attrs;
        } else {
          var parentEl = parent.a;

          var verticalOverflow = function () {
            var _v53 = elem.ag;

            if (!_v53.$) {
              switch (_v53.a) {
                case 0:
                  var _v54 = _v53.a;
                  return false;

                case 1:
                  var _v55 = _v53.a;
                  return true;

                default:
                  var _v56 = _v53.a;
                  return true;
              }
            } else {
              return false;
            }
          }();

          var isVertical = function (dir) {
            switch (dir) {
              case 0:
                return true;

              case 2:
                return true;

              default:
                return false;
            }
          };

          var isPx = function (x) {
            if (!x.$ && !x.a.$) {
              return true;
            } else {
              return false;
            }
          };

          var isPercent = function (x) {
            if (!x.$ && x.a.$ === 1) {
              return true;
            } else {
              return false;
            }
          };

          var isHorizontal = function (dir) {
            switch (dir) {
              case 1:
                return true;

              case 3:
                return true;

              default:
                return false;
            }
          };

          var horizontalOverflow = function () {
            var _v45 = elem.ag;

            if (!_v45.$) {
              switch (_v45.a) {
                case 0:
                  var _v46 = _v45.a;
                  return true;

                case 1:
                  var _v47 = _v45.a;
                  return false;

                default:
                  var _v48 = _v45.a;
                  return true;
              }
            } else {
              return false;
            }
          }();

          var _v43 = parentEl.p;

          if (_v43.$ === 1) {
            var dir = _v43.a;

            if (isHorizontal(dir) && isPx(elem.bw)) {
              return _IK_(_HX_("flex-shrink", "0"), attrs);
            } else {
              if (isHorizontal(dir) && isPercent(elem.bw)) {
                return _IK_(_HX_("flex-shrink", "0"), attrs);
              } else {
                if (isHorizontal(dir) && !_JB__95Utils_95eq(elem.bw, _I6__36elm_36core_36Maybe_36Nothing)) {
                  return _IK_(_HX_("flex-shrink", "1"), attrs);
                } else {
                  if (isHorizontal(dir) && horizontalOverflow) {
                    return _IK_(_HX_("flex-shrink", "1"), attrs);
                  } else {
                    if (isVertical(dir) && isPx(elem.a1)) {
                      return _IK_(_HX_("flex-shrink", "0"), attrs);
                    } else {
                      if (isVertical(dir) && isPercent(elem.a1)) {
                        return _IK_(_HX_("flex-shrink", "0"), attrs);
                      } else {
                        if (isVertical(dir) && !_JB__95Utils_95eq(elem.a1, _I6__36elm_36core_36Maybe_36Nothing)) {
                          return _IK_(_HX_("flex-shrink", "1"), attrs);
                        } else {
                          if (isVertical(dir) && verticalOverflow) {
                            return _IK_(_HX_("flex-shrink", "1"), attrs);
                          } else {
                            if (isHorizontal(dir) && _JB__95Utils_95eq(elem.bw, _I6__36elm_36core_36Maybe_36Nothing)) {
                              return _IK_(_HX_("flex-shrink", "1"), attrs);
                            } else {
                              if (isVertical(dir) && _JB__95Utils_95eq(elem.a1, _I6__36elm_36core_36Maybe_36Nothing)) {
                                if (!elType.$) {
                                  return _IK_(_HX_("flex-shrink", "1"), attrs);
                                } else {
                                  var elLayout = elType.a;
                                  return _IK_(_HX_("flex-shrink", "0"), attrs);
                                }
                              } else {
                                return _IK_(_HX_("flex-shrink", "0"), attrs);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            return attrs;
          }
        }
      }
    };

    var position = attrs => _JC__95Utils_95ap(_Ok__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36calcPosition_95raw(_Ly__36elm_36core_36Maybe_36withDefault_95raw(_Nn__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Relative, elem.I), elem.as), attrs);

    var passthrough = function (attrs) {
      var _v40 = elem.aE;

      if (_v40.$ === 1) {
        return attrs;
      } else {
        if (!_v40.a) {
          return _IK_(_HX_("pointer-events", "none"), attrs);
        } else {
          return _IK_(_HX_("pointer-events", "auto"), attrs);
        }
      }
    };

    var padding = function (attrs) {
      var paddings = _Ol__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderPadding(elem.ah);

      return _LP__36elm_36core_36List_36length(paddings) > 0 ? _JC__95Utils_95ap(paddings, attrs) : attrs;
    };

    var overflow = function (attrs) {
      var _v38 = elem.ag;

      if (_v38.$ === 1) {
        return attrs;
      } else {
        var o = _v38.a;

        switch (o) {
          case 0:
            return _IK_(_HX_("overflow-x", "auto"), attrs);

          case 1:
            return _IK_(_HX_("overflow-y", "auto"), attrs);

          default:
            return _IK_(_HX_("overflow", "auto"), attrs);
        }
      }
    };

    var opacity = function (attrs) {
      var _v37 = elem.aC;

      if (_v37.$ === 1) {
        return attrs;
      } else {
        var o = _v37.a;
        return _IK_(_HX_("opacity", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(o)), attrs);
      }
    };

    var layout = function (attrs) {
      if (!elType.$) {
        return elem.S ? _IK_(_HX_("display", "inline"), attrs) : _IK_(_HX_("display", "block"), attrs);
      } else {
        var lay = elType.a;
        return _JC__95Utils_95ap(_Om__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36layout_95raw(elem.S, _On__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36alignLayout_95raw(elem.ac, elem.ay, lay)), attrs);
      }
    };

    var horizontal = function (attrs) {
      var _v28 = elem.ac;

      if (_v28.$ === 1) {
        return attrs;
      } else {
        var align = _v28.a;

        if (elem.S && _JB__95Utils_95eq(elType, _L3__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Single)) {
          switch (align) {
            case 0:
              return _IK_(_HX_("z-index", "1"), _IK_(_HX_("float", "left"), attrs));

            case 1:
              return _IK_(_HX_("z-index", "1"), _IK_(_HX_("float", "right"), attrs));

            case 2:
              return attrs;

            default:
              return attrs;
          }
        } else {
          if (elem.S) {
            return attrs;
          } else {
            if (!_JB__95Utils_95eq(elem.I, _I6__36elm_36core_36Maybe_36Nothing)) {
              switch (align) {
                case 0:
                  return _IK_(_HX_("left", "0"), attrs);

                case 1:
                  return _IK_(_HX_("right", "0"), attrs);

                case 2:
                  return attrs;

                default:
                  return attrs;
              }
            } else {
              if (elType.$ === 1) {
                return attrs;
              } else {
                if (parent.$ === 1) {
                  return attrs;
                } else {
                  var parentEl = parent.a;
                  var _v33 = parentEl.p;

                  switch (_v33.$) {
                    case 0:
                      switch (align) {
                        case 0:
                          return _IK_(_HX_("z-index", "1"), _IK_(_HX_("float", "left"), attrs));

                        case 1:
                          return _IK_(_HX_("z-index", "1"), _IK_(_HX_("float", "right"), attrs));

                        case 2:
                          return attrs;

                        default:
                          return attrs;
                      }

                    case 1:
                      var dir = _v33.a;

                      var _v35 = _Oo__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36flexboxHorizontalIndividualAlignment_95raw(dir, align);

                      if (_v35.$ === 1) {
                        return attrs;
                      } else {
                        var a = _v35.a;
                        return _IK_(a, attrs);
                      }

                    default:
                      return attrs;
                  }
                }
              }
            }
          }
        }
      }
    };

    var height = function (attrs) {
      var _v19 = elem.a1;

      if (_v19.$ === 1) {
        return attrs;
      } else {
        var len = _v19.a;

        if (!parent.$) {
          var parentEl = parent.a;

          var hundredPercentOrFill = function (x) {
            switch (x.$) {
              case 1:
                var p = x.a;
                return p === 100;

              case 3:
                return true;

              case 4:
                var perc = x.a;
                return perc === 100;

              default:
                return false;
            }
          };

          var _v21 = _Ly__36elm_36core_36Maybe_36withDefault_95raw(_MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0), parentEl.M);

          var topPad = _v21.a;
          var bottomPad = _v21.c;
          var paddingAdjustment = (topPad + bottomPad) / 2;
          var _v22 = parentEl.p;

          if (_v22.$ === 1) {
            switch (_v22.a) {
              case 2:
                var _v23 = _v22.a;
                return _JC__95Utils_95ap(_Op__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexHeight(len), attrs);

              case 0:
                var _v24 = _v22.a;
                return _JC__95Utils_95ap(_Op__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexHeight(len), attrs);

              case 1:
                var _v25 = _v22.a;
                return hundredPercentOrFill(len) ? _IK_(_HX_("height", "auto"), attrs) : _IK_(_HX_("height", _Oi__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36parentAdjustedLength_95raw(len, paddingAdjustment)), attrs);

              default:
                var _v26 = _v22.a;
                return hundredPercentOrFill(len) ? _IK_(_HX_("height", "auto"), attrs) : _IK_(_HX_("height", _Oi__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36parentAdjustedLength_95raw(len, paddingAdjustment)), attrs);
            }
          } else {
            return _IK_(_HX_("height", _Oi__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36parentAdjustedLength_95raw(len, paddingAdjustment)), attrs);
          }
        } else {
          return _IK_(_HX_("height", _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length(len)), attrs);
        }
      }
    };

    var gridPos = function (attrs) {
      var _v18 = elem.ap;

      if (_v18.$ === 1) {
        return attrs;
      } else {
        var area = _v18.a;
        return _IK_(_HX_("grid-area", area), attrs);
      }
    };

    var defaults = {
      $: 1,
      a: _HX_("box-sizing", "border-box"),
      b: _U_r3
    };

    var attributes = function () {
      if (maybeElemID.$ === 1) {
        return elem.c;
      } else {
        var elemID = maybeElemID.a;
        return _LP__36elm_36core_36List_36length(elem.X) > 0 ? _IK_(_Oq__36elm_36html_36Html_36Attributes_36classList(_Hx_(stylesheet.X, elemID, elem.X)), elem.c) : _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", stylesheet.e(elemID)), elem.c);
      }
    }();

    var adjustspacing = function (_v16) {
      var top = _v16.a;
      var right = _v16.b;
      var bottom = _v16.c;
      var left = _v16.d;

      var onScreen = function () {
        var _v14 = elem.I;

        if (!_v14.$ && !_v14.a.$) {
          var _v15 = _v14.a;
          return true;
        } else {
          return false;
        }
      }();

      var halved = _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(top / 2, right / 2, bottom / 2, left / 2);

      if (onScreen) {
        return _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0);
      } else {
        if (parent.$ === 1) {
          return _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(top, right, bottom, left);
        } else {
          var parentEl = parent.a;
          var _v11 = parentEl.p;

          if (!_v11.$) {
            var _v12 = elem.ac;

            if (_v12.$ === 1) {
              return _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0) : elem.S ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, right, 0, 0) : _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, bottom, 0);
            } else {
              var align = _v12.a;

              if (!elem.S && _JB__95Utils_95eq(elem.I, _I6__36elm_36core_36Maybe_36Nothing)) {
                switch (align) {
                  case 0:
                    return _JB__95Utils_95eq(order, _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First) ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, right, bottom, 0) : _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, right, 0, 0) : _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, right, 0, 0) : _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, right, bottom, 0);

                  case 1:
                    return _JB__95Utils_95eq(order, _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First) ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, bottom, left) : _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, left) : _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, left) : _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, bottom, left);

                  default:
                    return _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0) : _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, bottom, 0);
                }
              } else {
                return _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(top, right, bottom, left);
              }
            }
          } else {
            return halved;
          }
        }
      }
    };

    var spacing = function (attrs) {
      var _v9 = elem.aB;

      if (_v9.$ === 1) {
        return attrs;
      } else {
        var space = _v9.a;
        return _IK_(_HX_("margin", _Or__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36box(adjustspacing(space))), attrs);
      }
    };

    if (elem.bS) {
      return _IK_(_Ix__95VirtualDom_95style_95raw("display", "none"), attributes);
    } else {
      if (elem.az) {
        var expandedProps = function () {
          if (parent.$ === 1) {
            return {
              $: 1,
              a: _HX_("width", "100%"),
              b: {
                $: 1,
                a: _HX_("height", "100%"),
                b: {
                  $: 1,
                  a: _HX_("margin", "0"),
                  b: _U_r3
                }
              }
            };
          } else {
            var parentEl = parent.a;
            var _v2 = parentEl.p;

            switch (_v2.$) {
              case 0:
                var borders = _K3__36elm_36core_36List_36concat({
                  $: 1,
                  a: _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) ? _7h__95List_95fromArray([_HX_("border-top-right-radius", "0"), _HX_("border-top-left-radius", "0")]) : _JB__95Utils_95eq(order, _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First) ? _7h__95List_95fromArray([_HX_("border-bottom-right-radius", "0"), _HX_("border-bottom-left-radius", "0")]) : _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _7h__95List_95fromArray([_HX_("border-top-right-radius", "0"), _HX_("border-top-left-radius", "0"), _HX_("border-bottom-right-radius", "0"), _HX_("border-bottom-left-radius", "0")]) : _U_r3,
                  b: _U_r3
                });

                var _v3 = parentEl.ar;
                var top = _v3.a;
                var right = _v3.b;
                var bottom = _v3.c;
                var left = _v3.d;
                return _JC__95Utils_95ap({
                  $: 1,
                  a: _HX_("width", "calc(100% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(right + left) + "px")),
                  b: {
                    $: 1,
                    a: _HX_("margin", "0"),
                    b: {
                      $: 1,
                      a: _HX_("margin-left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * left) + "px"),
                      b: {
                        $: 1,
                        a: _JB__95Utils_95eq(order, _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * top) + "px") : _HX_("margin-top", "0"),
                        b: {
                          $: 1,
                          a: _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-bottom", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * bottom) + "px") : _HX_("margin-bottom", "0"),
                          b: {
                            $: 1,
                            a: _HX_("padding", _Or__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36box(_Mq__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36defaultPadding_95raw(elem.ah, parentEl.ar))),
                            b: _U_r3
                          }
                        }
                      }
                    }
                  }
                }, borders);

              case 1:
                var dir = _v2.a;
                var flex = _v2.b;

                var _v4 = function () {
                  var _v5 = parentEl.M;

                  if (_v5.$ === 1) {
                    return _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0);
                  } else {
                    var p = _v5.a;
                    return p;
                  }
                }();

                var parentSpaceTop = _v4.a;
                var parentSpaceRight = _v4.b;
                var parentSpaceBottom = _v4.c;
                var parentSpaceLeft = _v4.d;
                var _v6 = parentEl.ar;
                var top = _v6.a;
                var right = _v6.b;
                var bottom = _v6.c;
                var left = _v6.d;

                switch (dir) {
                  case 1:
                    return width({
                      $: 1,
                      a: _HX_("height", "calc(100% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(top + bottom - (parentSpaceTop + parentSpaceBottom) / 2) + "px")),
                      b: {
                        $: 1,
                        a: _HX_("margin", "0"),
                        b: {
                          $: 1,
                          a: _HX_("margin-top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * top + parentSpaceTop / 2) + "px"),
                          b: {
                            $: 1,
                            a: _JB__95Utils_95eq(order, _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * left) + "px") : _HX_("margin-left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(parentSpaceLeft / 2) + "px"),
                            b: {
                              $: 1,
                              a: _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-right", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * right) + "px") : _HX_("margin-right", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(parentSpaceRight / 2) + "px"),
                              b: _U_r3
                            }
                          }
                        }
                      }
                    });

                  case 3:
                    return width({
                      $: 1,
                      a: _HX_("height", "calc(100% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(top + bottom - (parentSpaceTop + parentSpaceBottom) / 2) + "px")),
                      b: {
                        $: 1,
                        a: _HX_("margin", "0"),
                        b: {
                          $: 1,
                          a: _HX_("margin-top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * top + parentSpaceTop / 2) + "px"),
                          b: {
                            $: 1,
                            a: _JB__95Utils_95eq(order, _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-right", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * right) + "px") : _HX_("margin-right", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(parentSpaceRight / 2) + "px"),
                            b: {
                              $: 1,
                              a: _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * left) + "px") : _HX_("margin-left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(parentSpaceLeft / 2) + "px"),
                              b: _U_r3
                            }
                          }
                        }
                      }
                    });

                  case 0:
                    return height({
                      $: 1,
                      a: _HX_("width", "calc(100% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(left + right - (parentSpaceLeft + parentSpaceRight) / 2) + "px")),
                      b: {
                        $: 1,
                        a: _HX_("margin", "0"),
                        b: {
                          $: 1,
                          a: _HX_("margin-left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * left + parentSpaceLeft / 2) + "px"),
                          b: {
                            $: 1,
                            a: _JB__95Utils_95eq(order, _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-bottom", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * top) + "px") : _HX_("margin-bottom", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(parentSpaceBottom / 2) + "px"),
                            b: {
                              $: 1,
                              a: _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * bottom) + "px") : _HX_("margin-top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(parentSpaceTop / 2) + "px"),
                              b: _U_r3
                            }
                          }
                        }
                      }
                    });

                  default:
                    return height({
                      $: 1,
                      a: _HX_("width", "calc(100% + " + (_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(left + right - (parentSpaceLeft + parentSpaceRight) / 2) + "px")),
                      b: {
                        $: 1,
                        a: _HX_("margin", "0"),
                        b: {
                          $: 1,
                          a: _HX_("margin-left", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * left + parentSpaceLeft / 2) + "px"),
                          b: {
                            $: 1,
                            a: _JB__95Utils_95eq(order, _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * top) + "px") : _HX_("margin-top", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(parentSpaceTop / 2) + "px"),
                            b: {
                              $: 1,
                              a: _JB__95Utils_95eq(order, _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last) || _JB__95Utils_95eq(order, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast) ? _HX_("margin-bottom", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(-1 * bottom) + "px") : _HX_("margin-bottom", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(parentSpaceBottom / 2) + "px"),
                              b: _U_r3
                            }
                          }
                        }
                      }
                    });
                }

              default:
                return _U_r3;
            }
          }
        }();

        return _JC__95Utils_95ap(_IG__36elm_36core_36List_36map_95raw(function (_v0) {
          var name = _v0.a;
          var val = _v0.b;
          return _Ix__95VirtualDom_95style_95raw(name, val);
        }, _JC__95Utils_95ap(defaults, _KT__36elm_36core_36Basics_36composeL_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, passthrough, gridPos), layout), spacing), opacity), shrink), padding), position), overflow, expandedProps))), attributes);
      } else {
        return _JC__95Utils_95ap(_IG__36elm_36core_36List_36map_95raw(function (_v8) {
          var name = _v8.a;
          var val = _v8.b;
          return _Ix__95VirtualDom_95style_95raw(name, val);
        }, _KT__36elm_36core_36Basics_36composeL_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, _Hx_(_Ja__36elm_36core_36Basics_36composeL, passthrough, gridPos), layout), spacing), opacity), shrink), width), height), padding), horizontal), vertical), position), overflow, defaults)), attributes);
      }
    }
  };

  var _Mn__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36spacingToMargin = function (attrs) {
    var spaceToMarg = function (a) {
      if (a.$ === 10) {
        var x = a.a;
        var y = a.b;
        return _LG__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Margin_95raw(y, x, y, x);
      } else {
        var other = a;
        return other;
      }
    };

    return _IG__36elm_36core_36List_36map_95raw(spaceToMarg, attrs);
  };

  var _KG__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement_95raw = function (parent, stylesheet, order, elm) {
    switch (elm.$) {
      case 0:
        return _IB__36elm_36html_36Html_36text("");

      case 5:
        var html = elm.a;
        return html;

      case 1:
        var x = elm.a;

        var forSpacing = function (posAttr) {
          if (posAttr.$ === 10) {
            var spaceX = posAttr.a;
            var spaceY = posAttr.b;
            return _J3__36elm_36core_36Maybe_36Just(_HX_(spaceX, spaceY));
          } else {
            return _I6__36elm_36core_36Maybe_36Nothing;
          }
        };

        var _v1 = function () {
          if (!parent.$) {
            var ctxt = parent.a;
            return _Ly__36elm_36core_36Maybe_36withDefault_95raw(_MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0), ctxt.M);
          } else {
            return _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0);
          }
        }();

        var spacingX = _v1.a;
        var spacingY = _v1.b;
        var inline = {
          $: 1,
          a: _HX_("width", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x * spacingX) + "px"),
          b: {
            $: 1,
            a: _HX_("height", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(x * spacingY) + "px"),
            b: {
              $: 1,
              a: _HX_("visibility", "hidden"),
              b: _U_r3
            }
          }
        };
        return _Hx_(_Iu__36elm_36html_36Html_36div, _MY__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderSyleAttributes(inline), _U_r3);

      case 2:
        var decoration = elm.a.Q;
        var inline = elm.a.S;
        var str = elm.b;
        var attrs = inline ? _MY__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderSyleAttributes({
          $: 1,
          a: _HX_("display", "inline"),
          b: _U_r3
        }) : _MY__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderSyleAttributes({
          $: 1,
          a: _HX_("white-space", "pre"),
          b: {
            $: 1,
            a: _HX_("text-overflow", "ellipsis"),
            b: {
              $: 1,
              a: _HX_("overflow", "hidden"),
              b: {
                $: 1,
                a: _HX_("display", "block"),
                b: _U_r3
              }
            }
          }
        });

        switch (decoration) {
          case 0:
            return _Hx_(_MZ__36elm_36html_36Html_36span, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), attrs), {
              $: 1,
              a: _IB__36elm_36html_36Html_36text(str),
              b: _U_r3
            });

          case 1:
            return _IB__36elm_36html_36Html_36text(str);

          case 2:
            return _Hx_(_Mb__36elm_36html_36Html_36strong, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), attrs), {
              $: 1,
              a: _IB__36elm_36html_36Html_36text(str),
              b: _U_r3
            });

          case 3:
            return _Hx_(_Md__36elm_36html_36Html_36em, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), attrs), {
              $: 1,
              a: _IB__36elm_36html_36Html_36text(str),
              b: _U_r3
            });

          case 4:
            return _Hx_(_Mf__36elm_36html_36Html_36u, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), attrs), {
              $: 1,
              a: _IB__36elm_36html_36Html_36text(str),
              b: _U_r3
            });

          case 5:
            return _Hx_(_Mh__36elm_36html_36Html_36s, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), attrs), {
              $: 1,
              a: _IB__36elm_36html_36Html_36text(str),
              b: _U_r3
            });

          case 6:
            return _Hx_(_Mj__36elm_36html_36Html_36sup, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), attrs), {
              $: 1,
              a: _IB__36elm_36html_36Html_36text(str),
              b: _U_r3
            });

          default:
            return _Hx_(_Ml__36elm_36html_36Html_36sub, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), attrs), {
              $: 1,
              a: _IB__36elm_36html_36Html_36text(str),
              b: _U_r3
            });
        }

      case 3:
        var node = elm.a.d;
        var style = elm.a.e;
        var attrs = elm.a.c;
        var child = elm.a.g;
        var absolutelyPositioned = elm.a.b;

        var parentTextLayout = function (layout) {
          if (!layout.$) {
            return true;
          } else {
            return false;
          }
        };

        var childHtml = function () {
          if (absolutelyPositioned.$ === 1) {
            return {
              $: 1,
              a: _KG__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement_95raw(_I6__36elm_36core_36Maybe_36Nothing, stylesheet, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast, child),
              b: _U_r3
            };
          } else {
            var absol = absolutelyPositioned.a;
            return _IG__36elm_36core_36List_36map_95raw(_IL_(_KE__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement, _I6__36elm_36core_36Maybe_36Nothing, stylesheet, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast), _IK_(child, absol));
          }
        }();

        var attributes = function () {
          if (parent.$ === 1) {
            return _Mn__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36spacingToMargin(attrs);
          } else {
            var ctxt = parent.a;
            var _v6 = ctxt.M;

            if (_v6.$ === 1) {
              return parentTextLayout(ctxt.p) || _JZ__36elm_36core_36List_36any_95raw(_IE__36elm_36core_36Basics_36eq(_KM__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Inline), attrs) ? _Mn__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36spacingToMargin(attrs) : attrs;
            } else {
              var _v7 = _v6.a;
              var top = _v7.a;
              var right = _v7.b;
              var bottom = _v7.c;
              var left = _v7.d;
              return parentTextLayout(ctxt.p) || _JZ__36elm_36core_36List_36any_95raw(_IE__36elm_36core_36Basics_36eq(_KM__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Inline), attrs) ? _IK_(_LG__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Margin_95raw(top, right, bottom, left), _Mn__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36spacingToMargin(attrs)) : _IK_(_LG__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Margin_95raw(top, right, bottom, left), attrs);
            }
          }
        }();

        var htmlAttrs = _Mo__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderAttributes_95raw(_L3__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Single, order, style, parent, stylesheet, _Mp__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36gather(attributes));

        return _IL_(_KB__36elm_36html_36Html_36node, node, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), htmlAttrs), childHtml);

      default:
        var node = elm.a.d;
        var layout = elm.a.p;
        var style = elm.a.e;
        var attrs = elm.a.c;
        var children = elm.a.t;
        var absolutelyPositioned = elm.a.b;

        var isFlexbox = function (layoutType) {
          if (layoutType.$ === 1) {
            return true;
          } else {
            return false;
          }
        };

        var forPadding = function (posAttr) {
          switch (posAttr.$) {
            case 13:
              var t = posAttr.a;
              var r = posAttr.b;
              var b = posAttr.c;
              var l = posAttr.d;
              return _J3__36elm_36core_36Maybe_36Just(_Mq__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36defaultPadding_95raw(_MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(t, r, b, l), _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0)));

            case 14:
              var t = posAttr.a;
              var r = posAttr.b;
              var b = posAttr.c;
              var l = posAttr.d;
              return _J3__36elm_36core_36Maybe_36Just(_MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(t, r, b, l));

            default:
              return _I6__36elm_36core_36Maybe_36Nothing;
          }
        };

        var findSpacing = function (posAttr) {
          if (posAttr.$ === 10) {
            var x = posAttr.a;
            var y = posAttr.b;
            return _J3__36elm_36core_36Maybe_36Just(_MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(y, x, y, x));
          } else {
            return _I6__36elm_36core_36Maybe_36Nothing;
          }
        };

        var forSpacing = _Hx_(_Ja__36elm_36core_36Basics_36composeL, x => !_JB__95Utils_95eq(x, _I6__36elm_36core_36Maybe_36Nothing), findSpacing);

        var clearfix = function (allAttrs) {
          if (!layout.$) {
            var fix = layout.a;
            return fix ? _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "clearfix"), allAttrs) : allAttrs;
          } else {
            return allAttrs;
          }
        };

        var attributes = function () {
          if (parent.$ === 1) {
            return attrs;
          } else {
            var ctxt = parent.a;
            var _v18 = ctxt.M;

            if (_v18.$ === 1) {
              return attrs;
            } else {
              var _v19 = _v18.a;
              var t = _v19.a;
              var r = _v19.b;
              var b = _v19.c;
              var l = _v19.d;
              return _IK_(_LG__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Margin_95raw(t, r, b, l), attrs);
            }
          }
        }();

        var htmlAttrs = clearfix(_Mo__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderAttributes_95raw(_Mr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36LayoutElement(layout), order, style, parent, stylesheet, _Mp__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36gather(attributes)));

        var padding = function () {
          var _v16 = _Ms__36elm_36core_36List_36head(_Mt__36elm_36core_36List_36filterMap_95raw(forPadding, attributes));

          if (_v16.$ === 1) {
            return _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw(0, 0, 0, 0);
          } else {
            var pad = _v16.a;
            return pad;
          }
        }();

        var inherit = {
          p: layout,
          ar: padding,
          M: _Ms__36elm_36core_36List_36head(_Mt__36elm_36core_36List_36filterMap_95raw(findSpacing, attrs))
        };

        var adjacentFlexboxCorrection = function (htmlNode) {
          if (parent.$ === 1) {
            return htmlNode;
          } else {
            var p = parent.a;
            return isFlexbox(p.p) && isFlexbox(layout) ? htmlNode : htmlNode;
          }
        };

        var _v10 = _Mu__36elm_36core_36List_36partition_95raw(forSpacing, attrs);

        var spacingAttr = _v10.a;

        var _v11 = _Mu__36elm_36core_36List_36partition_95raw(attr => _JB__95Utils_95eq(attr, _LA__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36HAlign(2)) || _JB__95Utils_95eq(attr, _LB__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36VAlign(2)), attrs);

        var centeredProps = _v11.a;
        var others = _v11.b;

        if (!children.$) {
          var childList = children.a;

          var childHtml = _Mv__36elm_36core_36List_36indexedMap_95raw(_Jf_((i, child) => _KG__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement_95raw(_J3__36elm_36core_36Maybe_36Just(inherit), stylesheet, _Mw__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36detectOrder_95raw(childList, i), child)), childList);

          var allChildren = function () {
            if (absolutelyPositioned.$ === 1) {
              return childHtml;
            } else {
              var absol = absolutelyPositioned.a;
              return _JC__95Utils_95ap(childHtml, _IG__36elm_36core_36List_36map_95raw(_IL_(_KE__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement, _I6__36elm_36core_36Maybe_36Nothing, stylesheet, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast), absol));
            }
          }();

          return adjacentFlexboxCorrection(_IL_(_KB__36elm_36html_36Html_36node, node, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), htmlAttrs), allChildren));
        } else {
          var keyed = children.a;

          var childHtml = _Mv__36elm_36core_36List_36indexedMap_95raw(_Jf_(function (i, _v14) {
            var key = _v14.a;
            var child = _v14.b;
            return _HX_(key, _KG__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement_95raw(_J3__36elm_36core_36Maybe_36Just(inherit), stylesheet, _Mw__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36detectOrder_95raw(keyed, i), child));
          }), keyed);

          return adjacentFlexboxCorrection(_IL_(_Mx__36elm_36html_36Html_36Keyed_36node, node, _IK_(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "el"), htmlAttrs), childHtml));
        }

    }
  };

  var _Iz__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36render_95raw = function (stylesheet, elm) {
    var _v0 = _KD__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36apply(elm);

    var adjusted = _v0.a;
    var onScreen = _v0.b;

    var fixedScreenElements = function () {
      if (onScreen.$ === 1) {
        return _U_r3;
      } else {
        var screenEls = onScreen.a;
        return _IG__36elm_36core_36List_36map_95raw(_IL_(_KE__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement, _I6__36elm_36core_36Maybe_36Nothing, stylesheet, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast), screenEls);
      }
    }();

    return _IK_(_KG__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement_95raw(_I6__36elm_36core_36Maybe_36Nothing, stylesheet, _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast, adjusted), fixedScreenElements);
  };

  var _E__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36view = function (model) {
    var body = _7c__36elm_95explorations_36benchmark_36Benchmark_36done(model) ? _HY__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAll_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, _Hb__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36ReportClass, _HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, _Hc__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36view(_Hd__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark(model))) : _HY__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAll_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, _He__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36InProgressClass, _HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, _Hf__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36view(_Hd__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark(model)));
    return _Hg__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36viewport_95raw(_Hh__36mdgriffith_36style_95elements_36Style_36styleSheet(_f__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36styles), _Hi__36mdgriffith_36style_95elements_36Element_36row_95raw(_l__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36Page, {
      $: 1,
      a: _Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_7T__36mdgriffith_36style_95elements_36Element_36Attributes_36fill),
      b: {
        $: 1,
        a: _Hl__36mdgriffith_36style_95elements_36Element_36Attributes_36minHeight(_7T__36mdgriffith_36style_95elements_36Element_36Attributes_36fill),
        b: {
          $: 1,
          a: _7W__36mdgriffith_36style_95elements_36Element_36Attributes_36center,
          b: {
            $: 1,
            a: _7Z__36mdgriffith_36style_95elements_36Element_36Attributes_36verticalCenter,
            b: _U_r3
          }
        }
      }
    }, {
      $: 1,
      a: _Hm__36mdgriffith_36style_95elements_36Element_36el_95raw(_1c__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36Wrapper, _7h__95List_95fromArray([_Hn__36mdgriffith_36style_95elements_36Element_36Attributes_36maxWidth(_Ho__36mdgriffith_36style_95elements_36Element_36Attributes_36px(800)), _Hq__36mdgriffith_36style_95elements_36Element_36Attributes_36padding(60)]), body),
      b: _U_r3
    }));
  };

  var _IY__36author_36project_36Main_36addMyType_95raw = function (mine, sum) {
    switch (mine.$) {
      case 0:
        return sum;

      case 1:
        var i = mine.a;
        return i + sum;

      default:
        return sum;
    }
  };

  var _Ht__36elm_36json_36Json_36Encode_36string = value => {
    return value;
  };

  var _KU__36elm_36core_36Result_36Ok = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _KW__36elm_36core_36Result_36Err = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _IK_ = (hd, tl) => {
    return {
      $: 1,
      a: hd,
      b: tl
    };
  };

  var _KV_ = (type, value) => {
    return _KW__36elm_36core_36Result_36Err(_Ka__36elm_36json_36Json_36Decode_36Failure_95raw("Expecting " + type, _Ht__36elm_36json_36Json_36Encode_36string(value)));
  };

  var _Ka__36elm_36json_36Json_36Decode_36Failure_95raw = (a, b) => {
    return {
      $: 3,
      a: a,
      b: b
    };
  };

  var _KY__36elm_36json_36Json_36Decode_36Index_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Json_wrap", _$2_Object_46defineProperty(_Ht__36elm_36json_36Json_36Encode_36string, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Hx_ = (fun, a, b) => {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  };

  var _Kg_ = value => {
    return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
  };

  var _HX_ = (a, b) => {
    return {
      a: a,
      b: b
    };
  };

  var _Hs__95Json_95run_95raw = (decoder, value) => {
    return _JD__95Json_95runHelp(decoder, _JN_(value));
  };

  var _U_r3 = $_2_sub();

  var _O5__36elm_36core_36Elm_36JsArray_36empty = [];

  var _K1__36elm_36core_36List_36reverse = list => {
    return _I0__36elm_36core_36List_36foldl_95raw(_M4__36elm_36core_36List_36cons, _U_r3, list);
  };

  var _JN_ = value => {
    return value;
  };

  var _O1__36elm_36core_36Array_36empty = $_E_sub(0, 5, _O5__36elm_36core_36Elm_36JsArray_36empty, _O5__36elm_36core_36Elm_36JsArray_36empty);

  var _Re__36elm_36core_36Array_36Array_95elm_95builtin_95raw = (a, b, c, d) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _IG__36elm_36core_36List_36map_95raw = (f, xs) => {
    return _Je__36elm_36core_36List_36foldr_95raw(_Jf_((x, acc) => _IK_(f(x), acc)), _U_r3, xs);
  };

  var _Je__36elm_36core_36List_36foldr_95raw = (fn, acc, ls) => {
    return _LQ__36elm_36core_36List_36foldrHelper_95raw(fn, acc, 0, ls);
  };

  var _Rf__36elm_36core_36Elm_36JsArray_36length = array => {
    return array.length;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_JsArray_length", _$2_Object_46defineProperty(_Rf__36elm_36core_36Elm_36JsArray_36length, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Jf_ = fun => {
    return _LR_F(2, fun, a => b => fun(a, b));
  };

  var _KX__36elm_36json_36Json_36Decode_36Field_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _M4__36elm_36core_36List_36cons = a => {
    return b => _IK_(a, b);
  };

  var _JH__36elm_36core_36Task_36onEffects = a => {
    return b => c => _Jq__36elm_36core_36Task_36onEffects_95raw(a, b, c);
  };

  var _KZ__36elm_36json_36Json_36Decode_36OneOf = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _OH__36elm_36core_36Basics_36floor = _$4_Math_46floor;

  var _JJ__36elm_36core_36Task_36onSelfMsg = a => {
    return b => c => _Jr__36elm_36core_36Task_36onSelfMsg_95raw(a, b, c);
  };

  var _Sh__95Basics_95log = _$5_Math_46log;

  var _9_ = (impl, flagDecoder, debugMetadata, args) => {
    return _a__95Platform_95initialize(flagDecoder, args, impl.a4, impl.bt, impl.b6, function (sendToApp, initialModel) {
      var view = impl.bu;
      /**/

      var domNode = args["node"]; //*/

      /**_UNUSED/
              var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
              //*/

      var currNode = _7d__95VirtualDom_95virtualize(domNode);

      return _7e__95Browser_95makeAnimator(initialModel, function (model) {
        var nextNode = view(model);

        var patches = _7f__95VirtualDom_95diff(currNode, nextNode);

        domNode = _7g__95VirtualDom_95applyPatches(domNode, currNode, patches, sendToApp);
        currNode = nextNode;
      });
    });
  };

  var _Jq__36elm_36core_36Task_36onEffects_95raw = (router, commands, state) => {
    return _Kc__36elm_36core_36Task_36map_95raw(_v0 => 0, _Ko__36elm_36core_36Task_36sequence(_IG__36elm_36core_36List_36map_95raw(_LY__36elm_36core_36Task_36spawnCmd(router), commands)));
  };

  var _JL__36elm_36core_36Task_36cmdMap = a => {
    return b => _Js__36elm_36core_36Task_36cmdMap_95raw(a, b);
  };

  var _IB__36elm_36html_36Html_36text = string => {
    return {
      $: 0,
      a: string
    };
  };

  var _Kd__95Scheduler_95andThen_95raw = (callback, task) => {
    return {
      $: 3,
      b: callback,
      d: task
    };
  };

  var _IL_ = (fun, a, b, c) => {
    return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
  };

  var _IH__95VirtualDom_95attribute_95raw = (key, value) => {
    return {
      $: "a3",
      n: key,
      o: value
    };
  };

  var _II__95VirtualDom_95node = b => {
    return _Jg__95VirtualDom_95nodeNS_95raw(void 0, b);
  };

  var _HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid = x => {
    return x;
  };

  var _IJ__95Browser_95requestAnimationFrame = callback => {
    return setTimeout(callback, 1000 / 60);
  };

  var _ID__36elm_36core_36List_36all_95raw = (isOkay, list) => {
    return !_JZ__36elm_36core_36List_36any_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, _Jc__36elm_36core_36Basics_36not, isOkay), list);
  };

  var _IE__36elm_36core_36Basics_36eq = a => {
    return b => _JB__95Utils_95eq(a, b);
  };

  var _Kc__36elm_36core_36Task_36map_95raw = (func, taskA) => {
    return _Kd__95Scheduler_95andThen_95raw(a => _La__36elm_36core_36Task_36succeed(func(a)), taskA);
  };

  var _Jr__36elm_36core_36Task_36onSelfMsg_95raw = (_v0, _v1, _v2) => {
    return _La__36elm_36core_36Task_36succeed(0);
  };

  var _Ki_ = array => {
    return _ND__36elm_36core_36Array_36initialize_95raw(array.length, i => array[i]);
  };

  var _Rh__36elm_36core_36Basics_36logBase_95raw = (base, number) => {
    return _Sh__95Basics_95log(number) / _Sh__95Basics_95log(base);
  };

  var _La__36elm_36core_36Task_36succeed = value => {
    return {
      $: 0,
      a: value
    };
  };

  var _Qy__36elm_36core_36Array_36Leaf = a => {
    return {
      $: 1,
      a: a
    };
  };

  _M4__36elm_36core_36List_36cons.a = 2;

  var _JX__36elm_36core_36Basics_36clamp_95raw = (low, high, number) => {
    return _L5__95Utils_95cmp(number, low) < 0 ? low : _L5__95Utils_95cmp(number, high) > 0 ? high : number;
  };

  var _Ja__36elm_36core_36Basics_36composeL = a => {
    return b => c => _KT__36elm_36core_36Basics_36composeL_95raw(a, b, c);
  };

  var _JE__36elm_36core_36Task_36perform_95raw = (toMessage, task) => {
    return _Kb__36elm_36core_36Task_36command(_Kc__36elm_36core_36Task_36map_95raw(toMessage, task));
  };

  var _Ko__36elm_36core_36Task_36sequence = tasks => {
    return _Je__36elm_36core_36List_36foldr_95raw(_NP__36elm_36core_36Task_36map2(_M4__36elm_36core_36List_36cons), _La__36elm_36core_36Task_36succeed(_U_r3), tasks);
  };

  var _Jg__95VirtualDom_95nodeNS_95raw = (namespace, tag) => {
    return _Jf_(function (factList, kidList) {
      for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
        var kid = kidList.a;
        descendantsCount += kid.b || 0;
        kids.push(kid);
      }

      descendantsCount += kids.length;
      return {
        $: 1,
        c: tag,
        d: _L1__95VirtualDom_95organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount
      };
    });
  };

  var _JF__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36breakForRender = task => {
    return _Kd__95Scheduler_95andThen_95raw(_v0 => task, _Ke__36elm_36core_36Process_36sleep(0));
  };

  var _Jc__36elm_36core_36Basics_36not = bool => {
    return !bool;
  };

  var _NP__36elm_36core_36Task_36map2 = a => {
    return b => c => _O7__36elm_36core_36Task_36map2_95raw(a, b, c);
  };

  var _O7__36elm_36core_36Task_36map2_95raw = (func, taskA, taskB) => {
    return _Kd__95Scheduler_95andThen_95raw(a => _Kd__95Scheduler_95andThen_95raw(b => _La__36elm_36core_36Task_36succeed(_Hx_(func, a, b)), taskB), taskA);
  };

  var _NC_ = callback => {
    return {
      $: 2,
      b: callback,
      c: null
    };
  };

  var _LY__36elm_36core_36Task_36spawnCmd = a => {
    return b => _NE__36elm_36core_36Task_36spawnCmd_95raw(a, b);
  };

  var _KT__36elm_36core_36Basics_36composeL_95raw = (g, f, x) => {
    return g(f(x));
  };

  _M4__36elm_36core_36List_36cons.f = _IK_;
  var _Si__36elm_36core_36Basics_36ceiling = _$6_Math_46ceil;

  var _J3__36elm_36core_36Maybe_36Just = a => {
    return {
      $: 0,
      a
    };
  };

  var _Rj__36elm_36core_36Basics_36max_95raw = (x, y) => {
    return _L5__95Utils_95cmp(x, y) > 0 ? x : y;
  };

  var _PG_ = task => {
    return _NC_(function (callback) {
      callback(_La__36elm_36core_36Task_36succeed(_Ku__95Scheduler_95rawSpawn(task)));
    });
  };

  var _PJ__36elm_36core_36Platform_36sendToApp = a => {
    return b => _Q8__95Platform_95sendToApp_95raw(a, b);
  };

  var _Q8__95Platform_95sendToApp_95raw = (router, msg) => {
    return _NC_(function (callback) {
      router.g(msg);
      callback(_La__36elm_36core_36Task_36succeed(0));
    });
  };

  var _TM__36elm_36core_36Array_36SubTree = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _IT__36elm_36core_36Task_36init = $_G_sub();

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Scheduler_succeed", _$2_Object_46defineProperty(_La__36elm_36core_36Task_36succeed, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Ks_ = callback => {
    return {
      $: 5,
      b: callback
    };
  };

  var _Kt_ = (fun, a, b, c, d) => {
    return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
  };

  _NP__36elm_36core_36Task_36map2.a = 3;

  var _b__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36init_95raw = (benchmark, _v0) => {
    return _HX_(benchmark, _Hr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36next(benchmark));
  };

  _NP__36elm_36core_36Task_36map2.f = _O7__36elm_36core_36Task_36map2_95raw;

  var _Kb__36elm_36core_36Task_36command = value => {
    return {
      $: 1,
      k: "Task",
      l: value
    };
  };

  var _Hr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36next = benchmark => {
    return _7c__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _IP__36elm_36core_36Platform_36Cmd_36none : _JE__36elm_36core_36Task_36perform_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, _JF__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36breakForRender(_JG__36elm_95explorations_36benchmark_36Benchmark_36step(benchmark)));
  };

  var _LU_ = (x, y) => {
    return x.$ == y.$ && _O0__95Json_95equality(x.a, y.a);
  };

  var _LO_ = fun => {
    return _LR_F(3, fun, a => b => c => fun(a, b, c));
  };

  var _LP__36elm_36core_36List_36length = xs => {
    return _I0__36elm_36core_36List_36foldl_95raw(_Jf_((_v0, i) => i + 1), 0, xs);
  };

  var _I1__36author_36project_36Main_36addMyType = a => {
    return b => _IY__36author_36project_36Main_36addMyType_95raw(a, b);
  };

  var _Ke__36elm_36core_36Process_36sleep = time => {
    return _NC_(function (callback) {
      var id = setTimeout(function () {
        callback(_La__36elm_36core_36Task_36succeed(0));
      }, time);
      return function () {
        clearTimeout(id);
      };
    });
  };

  var _O8__95Scheduler_95queue = [];
  _PJ__36elm_36core_36Platform_36sendToApp.a = 2;
  _PJ__36elm_36core_36Platform_36sendToApp.f = _Q8__95Platform_95sendToApp_95raw;

  var _Kj__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single = a => {
    return b => c => _Lc__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw(a, b, c);
  };

  _LY__36elm_36core_36Task_36spawnCmd.a = 2;
  _LY__36elm_36core_36Task_36spawnCmd.f = _NE__36elm_36core_36Task_36spawnCmd_95raw;
  _JH__36elm_36core_36Task_36onEffects.a = 3;
  _JH__36elm_36core_36Task_36onEffects.f = _Jq__36elm_36core_36Task_36onEffects_95raw;

  var _NA__36elm_36core_36Dict_36toList = dict => {
    return _PF__36elm_36core_36Dict_36foldr_95raw(_LO_((key, value, list) => _IK_(_HX_(key, value), list)), _U_r3, dict);
  };

  _JJ__36elm_36core_36Task_36onSelfMsg.a = 3;
  _JJ__36elm_36core_36Task_36onSelfMsg.f = _Jr__36elm_36core_36Task_36onSelfMsg_95raw;
  _JL__36elm_36core_36Task_36cmdMap.a = 2;

  var _Lc__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  _JL__36elm_36core_36Task_36cmdMap.f = _Js__36elm_36core_36Task_36cmdMap_95raw;
  var _IS_ = {
    b: _IT__36elm_36core_36Task_36init,
    c: _JH__36elm_36core_36Task_36onEffects,
    d: _JJ__36elm_36core_36Task_36onSelfMsg,
    e: _JL__36elm_36core_36Task_36cmdMap,
    f: void 0
  };
  var _IR__95Platform_95effectManagers = {
    Task: _IS_
  };
  var _IX__95Platform_95effectsQueue = [];
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_VirtualDom_text", _$2_Object_46defineProperty(_IB__36elm_36html_36Html_36text, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _NF__95Scheduler_95onError_95raw = (callback, task) => {
    return {
      $: 4,
      b: callback,
      d: task
    };
  };

  var _NG__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _NH__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _Lt__36elm_36core_36Basics_36composeR_95raw = (f, g, x) => {
    return g(f(x));
  };

  var _NV__95Browser_95doc = document;

  var _M9__36elm_36core_36Basics_36composeR = a => {
    return b => c => _Lt__36elm_36core_36Basics_36composeR_95raw(a, b, c);
  };

  _Ja__36elm_36core_36Basics_36composeL.a = 3;
  _Ja__36elm_36core_36Basics_36composeL.f = _KT__36elm_36core_36Basics_36composeL_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_not", _$2_Object_46defineProperty(_Jc__36elm_36core_36Basics_36not, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _IE__36elm_36core_36Basics_36eq.a = 2;

  var _NJ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _NO__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw = (n, operation_) => {
    return _PW__95Benchmark_95sample_95raw(n, operation_);
  };

  var _PL__36elm_36core_36Basics_36add = a => {
    return b => _Q9__95Basics_95add_95raw(a, b);
  };

  _IE__36elm_36core_36Basics_36eq.f = _JB__95Utils_95eq;

  var _Q9__95Basics_95add_95raw = (a, b) => {
    return a + b;
  };

  var _IP__36elm_36core_36Platform_36Cmd_36none = {
    $: 2,
    m: _U_r3
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$elm$core$Basics$identity", _$2_Object_46defineProperty(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Km__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series = a => {
    return b => _Ld__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw(a, b);
  };

  var _PW__95Benchmark_95sample_95raw = (n, fn) => {
    return _NC_(function (callback) {
      var start = _R7__95Benchmark_95getTimestamp();

      try {
        for (var i = 0; i < n; i++) {
          fn();
        }
      } catch (error) {
        if (error instanceof RangeError) {
          callback(_R9_(_QL__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow));
        } else {
          callback(_R9_(_RB__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError(error.message)));
        }

        return;
      }

      var end = _R7__95Benchmark_95getTimestamp();

      callback(_La__36elm_36core_36Task_36succeed(end - start));
    });
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Process_sleep", _$2_Object_46defineProperty(_Ke__36elm_36core_36Process_36sleep, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _Kj__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.a = 3;

  var _Kp__36elm_95explorations_36benchmark_36Benchmark_36describe = a => {
    return b => _Lk__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw(a, b);
  };

  var _Kr_ = (a, b, c) => {
    return {
      a: a,
      b: b,
      c: c
    };
  };

  var _R9_ = error => {
    return {
      $: 1,
      a: error
    };
  };

  _Kj__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.f = _Lc__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw;

  var _RB__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _OP__36elm_36core_36List_36sum = numbers => {
    return _I0__36elm_36core_36List_36foldl_95raw(_PL__36elm_36core_36Basics_36add, 0, numbers);
  };

  var _PO__36elm_36core_36Maybe_36withDefault = a => {
    return b => _Ly__36elm_36core_36Maybe_36withDefault_95raw(a, b);
  };

  var _Le__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized = $_Q_sub();

  var _Ld__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _N1__36elm_36core_36List_36filter_95raw = (isGood, list) => {
    return _Je__36elm_36core_36List_36foldr_95raw(_Jf_((x, xs) => isGood(x) ? _IK_(x, xs) : xs), _U_r3, list);
  };

  var _Qz__36elm_36core_36Basics_36min = a => {
    return b => _RO__36elm_36core_36Basics_36min_95raw(a, b);
  };

  var _Lk__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _PQ__36elm_36core_36List_36repeat_95raw = (n, value) => {
    return _R1__36elm_36core_36List_36repeatHelp_95raw(_U_r3, n, value);
  };

  var _OQ__36elm_36core_36Basics_36pow = a => {
    return b => _PZ_(a, b);
  };

  _PL__36elm_36core_36Basics_36add.a = 2;
  _PL__36elm_36core_36Basics_36add.f = _Q9__95Basics_95add_95raw;

  var _RO__36elm_36core_36Basics_36min_95raw = (x, y) => {
    return _L5__95Utils_95cmp(x, y) < 0 ? x : y;
  };

  var _R7__95Benchmark_95getTimestamp = _$8_Date_46now;

  var _QK__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _QL__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow = $_R_sub();

  var _Lg__36elm_36core_36Set_36empty = $_P_root(-2);

  _M9__36elm_36core_36Basics_36composeR.a = 3;
  _M9__36elm_36core_36Basics_36composeR.f = _Lt__36elm_36core_36Basics_36composeR_95raw;

  var _RC__95Basics_95mul_95raw = (a, b) => {
    return a * b;
  };

  _Qz__36elm_36core_36Basics_36min.a = 2;

  var _OS__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points = samples => {
    return _Kx__36elm_36core_36Tuple_36mapSecond_95raw(_QO__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _QP__36elm_36core_36Tuple_36mapFirst_95raw(_QO__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _QQ__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups(samples)));
  };

  _Qz__36elm_36core_36Basics_36min.f = _RO__36elm_36core_36Basics_36min_95raw;

  var _I6__36elm_36core_36Maybe_36Nothing = $_H_sub(null);

  _PO__36elm_36core_36Maybe_36withDefault.a = 2;
  _PO__36elm_36core_36Maybe_36withDefault.f = _Ly__36elm_36core_36Maybe_36withDefault_95raw;

  var _QO__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify = samples => {
    return _PF__36elm_36core_36Dict_36foldr_95raw(_LO_((sampleSize, values, acc) => _JC__95Utils_95ap(_IG__36elm_36core_36List_36map_95raw(b => _HX_(sampleSize, b), values), acc)), _U_r3, samples);
  };

  var _PT__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend = samples => {
    return _R6__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick(_OS__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points(samples).a);
  };

  var _PU__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw = (a, b) => {
    return {
      $: 4,
      a: a,
      b: b
    };
  };

  var _PV__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Rm__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw = (a, b, c, d, e) => {
    return {
      $: -1,
      a: a,
      b: b,
      c: c,
      d: d,
      e: e
    };
  };

  var _Sq__36elm_36core_36Basics_36mul = a => {
    return b => _RC__95Basics_95mul_95raw(a, b);
  };

  var _R2__36elm_36core_36Basics_36round = _$9_Math_46round;
  _Sq__36elm_36core_36Basics_36mul.a = 2;
  _Sq__36elm_36core_36Basics_36mul.f = _RC__95Basics_95mul_95raw;
  var _St__36elm_36core_36Basics_36sqrt = _$A_Math_46sqrt;

  var _RX__36elm_36core_36Dict_36foldl = a => {
    return b => c => _LN__36elm_36core_36Dict_36foldl_95raw(a, b, c);
  };

  var _PZ_ = _$B_Math_46pow;
  _OQ__36elm_36core_36Basics_36pow.a = 2;
  _OQ__36elm_36core_36Basics_36pow.f = _PZ_;

  var _Rr__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _Rt__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line = a => {
    return b => _SQ__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw(a, b);
  };

  var _SQ__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw = (slope, intercept) => {
    return {
      aL: intercept,
      aR: slope
    };
  };

  var _SW__36elm_36core_36Basics_36isNaN = _$C_isNaN;

  var _Ry__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros = $_Q_sub();

  _Rt__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.a = 2;
  _Rt__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.f = _SQ__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw;

  var _SV__36elm_36core_36List_36sort = xs => {
    return _TD__95List_95sortBy_95raw(_HZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36OnGrid, xs);
  };

  var _SX__36elm_36core_36Basics_36isInfinite = n => {
    return n === Infinity || n === -Infinity;
  };

  _RX__36elm_36core_36Dict_36foldl.a = 3;

  var _Sb__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _TD__95List_95sortBy_95raw = (f, xs) => {
    return _7h__95List_95fromArray(_QS__95List_95toArray(xs).sort((a, b) => _L5__95Utils_95cmp(f(a), f(b))));
  };

  _RX__36elm_36core_36Dict_36foldl.f = _LN__36elm_36core_36Dict_36foldl_95raw;

  var _TH__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile = a => {
    return b => _TF__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(a, b);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_isInfinite", _$2_Object_46defineProperty(_SX__36elm_36core_36Basics_36isInfinite, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Tf__36elm_36core_36List_36take_95raw = (n, list) => {
    return _Tp__36elm_36core_36List_36takeFast_95raw(0, n, list);
  };

  var _Tt__36elm_36core_36List_36takeTailRec_95raw = (n, list) => {
    return _K1__36elm_36core_36List_36reverse(_Tw__36elm_36core_36List_36takeReverse_95raw(n, list, _U_r3));
  };

  _TH__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.a = 2;
  _TH__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.f = _TF__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw;
  _Km__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.a = 2;
  _Km__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.f = _Ld__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw;
  _Kp__36elm_95explorations_36benchmark_36Benchmark_36describe.a = 2;
  _Kp__36elm_95explorations_36benchmark_36Benchmark_36describe.f = _Lk__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw;
  _I1__36author_36project_36Main_36addMyType.a = 2;
  _I1__36author_36project_36Main_36addMyType.f = _IY__36author_36project_36Main_36addMyType_95raw;

  var _7k_a = $_2_sub();

  var _7o_b = $_3_sub(5, null);

  var _7t_c = $_4_sub("Two", "two");

  var _HV_r2 = $_3_sub(_7t_c, _U_r3);

  var _HT_r1 = $_3_sub(_7o_b, _HV_r2);

  var _HR_d = $_3_sub(_7k_a, _HT_r1);

  var _HP_ = $_3_sub(_7t_c, _HR_d);

  var _HN_ = $_3_sub(_7o_b, _HP_);

  var _HL_ = $_3_sub(_7k_a, _HN_);

  var _HJ_ = $_3_sub(_7t_c, _HL_);

  var _HH_ = $_3_sub(_7o_b, _HJ_);

  var _HF_ = $_3_sub(_7k_a, _HH_);

  var _HD_ = $_3_sub(_7t_c, _HF_);

  var _HB_ = $_3_sub(_7o_b, _HD_);

  var _H9_res = $_3_sub(_7k_a, _HB_);

  var _H7_ = $_3_sub(_7t_c, _H9_res);

  var _H5_ = $_3_sub(_7o_b, _H7_);

  var _H3_ = $_3_sub(_7k_a, _H5_);

  var _H1_ = $_3_sub(_7t_c, _H3_);

  var _Gz_ = $_3_sub(_7o_b, _H1_);

  var _Gx_ = $_3_sub(_7k_a, _Gz_);

  var _Gv_ = $_3_sub(_7t_c, _Gx_);

  var _Gt_ = $_3_sub(_7o_b, _Gv_);

  var _Gr_ = $_3_sub(_7k_a, _Gt_);

  var _Gp_ = $_3_sub(_7t_c, _Gr_);

  var _Gn_ = $_3_sub(_7o_b, _Gp_);

  var _Gl_res = $_3_sub(_7k_a, _Gn_);

  var _Gj_ = $_3_sub(_7t_c, _Gl_res);

  var _Gh_ = $_3_sub(_7o_b, _Gj_);

  var _Gf_ = $_3_sub(_7k_a, _Gh_);

  var _Gd_ = $_3_sub(_7t_c, _Gf_);

  var _Gb_ = $_3_sub(_7o_b, _Gd_);

  var _GZ_ = $_3_sub(_7k_a, _Gb_);

  var _GX_ = $_3_sub(_7t_c, _GZ_);

  var _GV_ = $_3_sub(_7o_b, _GX_);

  var _GT_ = $_3_sub(_7k_a, _GV_);

  var _GR_ = $_3_sub(_7t_c, _GT_);

  var _GP_ = $_3_sub(_7o_b, _GR_);

  var _GN_res = $_3_sub(_7k_a, _GP_);

  var _GL_ = $_3_sub(_7t_c, _GN_res);

  var _GJ_ = $_3_sub(_7o_b, _GL_);

  var _GH_ = $_3_sub(_7k_a, _GJ_);

  var _GF_ = $_3_sub(_7t_c, _GH_);

  var _GD_ = $_3_sub(_7o_b, _GF_);

  var _GB_ = $_3_sub(_7k_a, _GD_);

  var _G9_ = $_3_sub(_7t_c, _GB_);

  var _G7_ = $_3_sub(_7o_b, _G9_);

  var _G5_ = $_3_sub(_7k_a, _G7_);

  var _G3_ = $_3_sub(_7t_c, _G5_);

  var _G1_ = $_3_sub(_7o_b, _G3_);

  var _Fz_res = $_3_sub(_7k_a, _G1_);

  var _Fx_ = $_3_sub(_7t_c, _Fz_res);

  var _Fv_ = $_3_sub(_7o_b, _Fx_);

  var _Ft_ = $_3_sub(_7k_a, _Fv_);

  var _Fr_ = $_3_sub(_7t_c, _Ft_);

  var _Fp_ = $_3_sub(_7o_b, _Fr_);

  var _Fn_ = $_3_sub(_7k_a, _Fp_);

  var _Fl_ = $_3_sub(_7t_c, _Fn_);

  var _Fj_ = $_3_sub(_7o_b, _Fl_);

  var _Fh_ = $_3_sub(_7k_a, _Fj_);

  var _Ff_ = $_3_sub(_7t_c, _Fh_);

  var _Fd_ = $_3_sub(_7o_b, _Ff_);

  var _Fb_res = $_3_sub(_7k_a, _Fd_);

  var _FZ_ = $_3_sub(_7t_c, _Fb_res);

  var _FX_ = $_3_sub(_7o_b, _FZ_);

  var _FV_ = $_3_sub(_7k_a, _FX_);

  var _FT_ = $_3_sub(_7t_c, _FV_);

  var _FR_ = $_3_sub(_7o_b, _FT_);

  var _FP_ = $_3_sub(_7k_a, _FR_);

  var _FN_ = $_3_sub(_7t_c, _FP_);

  var _FL_ = $_3_sub(_7o_b, _FN_);

  var _FJ_ = $_3_sub(_7k_a, _FL_);

  var _FH_ = $_3_sub(_7t_c, _FJ_);

  var _FF_ = $_3_sub(_7o_b, _FH_);

  var _FD_res = $_3_sub(_7k_a, _FF_);

  var _FB_ = $_3_sub(_7t_c, _FD_res);

  var _F9_ = $_3_sub(_7o_b, _FB_);

  var _F7_ = $_3_sub(_7k_a, _F9_);

  var _F5_ = $_3_sub(_7t_c, _F7_);

  var _F3_ = $_3_sub(_7o_b, _F5_);

  var _F1_ = $_3_sub(_7k_a, _F3_);

  var _Ez_ = $_3_sub(_7t_c, _F1_);

  var _Ex_ = $_3_sub(_7o_b, _Ez_);

  var _Ev_ = $_3_sub(_7k_a, _Ex_);

  var _Et_ = $_3_sub(_7t_c, _Ev_);

  var _Er_ = $_3_sub(_7o_b, _Et_);

  var _Ep_res = $_3_sub(_7k_a, _Er_);

  var _En_ = $_3_sub(_7t_c, _Ep_res);

  var _El_ = $_3_sub(_7o_b, _En_);

  var _Ej_ = $_3_sub(_7k_a, _El_);

  var _Eh_ = $_3_sub(_7t_c, _Ej_);

  var _Ef_ = $_3_sub(_7o_b, _Eh_);

  var _Ed_ = $_3_sub(_7k_a, _Ef_);

  var _Eb_ = $_3_sub(_7t_c, _Ed_);

  var _EZ_ = $_3_sub(_7o_b, _Eb_);

  var _EX_ = $_3_sub(_7k_a, _EZ_);

  var _EV_ = $_3_sub(_7t_c, _EX_);

  var _ET_ = $_3_sub(_7o_b, _EV_);

  var _ER_res = $_3_sub(_7k_a, _ET_);

  var _EP_ = $_3_sub(_7t_c, _ER_res);

  var _EN_ = $_3_sub(_7o_b, _EP_);

  var _EL_ = $_3_sub(_7k_a, _EN_);

  var _EJ_ = $_3_sub(_7t_c, _EL_);

  var _EH_ = $_3_sub(_7o_b, _EJ_);

  var _EF_ = $_3_sub(_7k_a, _EH_);

  var _ED_ = $_3_sub(_7t_c, _EF_);

  var _EB_ = $_3_sub(_7o_b, _ED_);

  var _E9_ = $_3_sub(_7k_a, _EB_);

  var _E7_ = $_3_sub(_7t_c, _E9_);

  var _E5_ = $_3_sub(_7o_b, _E7_);

  var _E3_res = $_3_sub(_7k_a, _E5_);

  var _E1_ = $_3_sub(_7t_c, _E3_res);

  var _Dz_ = $_3_sub(_7o_b, _E1_);

  var _Dx_ = $_3_sub(_7k_a, _Dz_);

  var _Dv_ = $_3_sub(_7t_c, _Dx_);

  var _Dt_ = $_3_sub(_7o_b, _Dv_);

  var _Dr_ = $_3_sub(_7k_a, _Dt_);

  var _Dp_ = $_3_sub(_7t_c, _Dr_);

  var _Dn_ = $_3_sub(_7o_b, _Dp_);

  var _Dl_ = $_3_sub(_7k_a, _Dn_);

  var _Dj_ = $_3_sub(_7t_c, _Dl_);

  var _Dh_ = $_3_sub(_7o_b, _Dj_);

  var _Df_res = $_3_sub(_7k_a, _Dh_);

  var _Dd_ = $_3_sub(_7t_c, _Df_res);

  var _Db_ = $_3_sub(_7o_b, _Dd_);

  var _DZ_ = $_3_sub(_7k_a, _Db_);

  var _DX_ = $_3_sub(_7t_c, _DZ_);

  var _DV_ = $_3_sub(_7o_b, _DX_);

  var _DT_ = $_3_sub(_7k_a, _DV_);

  var _DR_ = $_3_sub(_7t_c, _DT_);

  var _DP_ = $_3_sub(_7o_b, _DR_);

  var _DN_ = $_3_sub(_7k_a, _DP_);

  var _DL_ = $_3_sub(_7t_c, _DN_);

  var _DJ_ = $_3_sub(_7o_b, _DL_);

  var _DH_res = $_3_sub(_7k_a, _DJ_);

  var _DF_ = $_3_sub(_7t_c, _DH_res);

  var _DD_ = $_3_sub(_7o_b, _DF_);

  var _DB_ = $_3_sub(_7k_a, _DD_);

  var _D9_ = $_3_sub(_7t_c, _DB_);

  var _D7_ = $_3_sub(_7o_b, _D9_);

  var _D5_ = $_3_sub(_7k_a, _D7_);

  var _D3_ = $_3_sub(_7t_c, _D5_);

  var _D1_ = $_3_sub(_7o_b, _D3_);

  var _Cz_ = $_3_sub(_7k_a, _D1_);

  var _Cx_ = $_3_sub(_7t_c, _Cz_);

  var _Cv_ = $_3_sub(_7o_b, _Cx_);

  var _Ct_res = $_3_sub(_7k_a, _Cv_);

  var _Cr_ = $_3_sub(_7t_c, _Ct_res);

  var _Cp_ = $_3_sub(_7o_b, _Cr_);

  var _Cn_ = $_3_sub(_7k_a, _Cp_);

  var _Cl_ = $_3_sub(_7t_c, _Cn_);

  var _Cj_ = $_3_sub(_7o_b, _Cl_);

  var _Ch_ = $_3_sub(_7k_a, _Cj_);

  var _Cf_ = $_3_sub(_7t_c, _Ch_);

  var _Cd_ = $_3_sub(_7o_b, _Cf_);

  var _Cb_ = $_3_sub(_7k_a, _Cd_);

  var _CZ_ = $_3_sub(_7t_c, _Cb_);

  var _CX_ = $_3_sub(_7o_b, _CZ_);

  var _CV_res = $_3_sub(_7k_a, _CX_);

  var _CT_ = $_3_sub(_7t_c, _CV_res);

  var _CR_ = $_3_sub(_7o_b, _CT_);

  var _CP_ = $_3_sub(_7k_a, _CR_);

  var _CN_ = $_3_sub(_7t_c, _CP_);

  var _CL_ = $_3_sub(_7o_b, _CN_);

  var _CJ_ = $_3_sub(_7k_a, _CL_);

  var _CH_ = $_3_sub(_7t_c, _CJ_);

  var _CF_ = $_3_sub(_7o_b, _CH_);

  var _CD_ = $_3_sub(_7k_a, _CF_);

  var _CB_ = $_3_sub(_7t_c, _CD_);

  var _C9_ = $_3_sub(_7o_b, _CB_);

  var _C7_res = $_3_sub(_7k_a, _C9_);

  var _C5_ = $_3_sub(_7t_c, _C7_res);

  var _C3_ = $_3_sub(_7o_b, _C5_);

  var _C1_ = $_3_sub(_7k_a, _C3_);

  var _Bz_ = $_3_sub(_7t_c, _C1_);

  var _Bx_ = $_3_sub(_7o_b, _Bz_);

  var _Bv_ = $_3_sub(_7k_a, _Bx_);

  var _Bt_ = $_3_sub(_7t_c, _Bv_);

  var _Br_ = $_3_sub(_7o_b, _Bt_);

  var _Bp_ = $_3_sub(_7k_a, _Br_);

  var _Bn_ = $_3_sub(_7t_c, _Bp_);

  var _Bl_ = $_3_sub(_7o_b, _Bn_);

  var _Bj_res = $_3_sub(_7k_a, _Bl_);

  var _Bh_ = $_3_sub(_7t_c, _Bj_res);

  var _Bf_ = $_3_sub(_7o_b, _Bh_);

  var _Bd_ = $_3_sub(_7k_a, _Bf_);

  var _Bb_ = $_3_sub(_7t_c, _Bd_);

  var _BZ_ = $_3_sub(_7o_b, _Bb_);

  var _BX_ = $_3_sub(_7k_a, _BZ_);

  var _c_ = _v0 => {
    return _I0__36elm_36core_36List_36foldl_95raw(_I1__36author_36project_36Main_36addMyType, 0, _7i__36author_36project_36Main_36many);
  };

  var _BV_ = $_3_sub(_7t_c, _BX_);

  var _BT_ = $_3_sub(_7o_b, _BV_);

  var _A_ = b => {
    return _b__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36init_95raw(_F__36author_36project_36Main_36suite, b);
  };

  var _BR_ = $_3_sub(_7k_a, _BT_);

  var _B_ = b => {
    return _e__36elm_36core_36Basics_36always_95raw(_X__36elm_36core_36Platform_36Sub_36none, b);
  };

  var _C__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36update = a => {
    return b => _Z__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36update_95raw(a, b);
  };

  var _d_ = _v1 => {
    return _I0__36elm_36core_36List_36foldl_95raw(_I8__36author_36project_36Main_36updateRecord, {
      aO: 1,
      br: 3,
      bs: 2
    }, _7i__36author_36project_36Main_36many);
  };

  var _BP_ = $_3_sub(_7t_c, _BR_);

  var _e__36elm_36core_36Basics_36always_95raw = (a, _v0) => {
    return a;
  };

  var _BN_ = $_3_sub(_7o_b, _BP_);

  var _BL_res = $_3_sub(_7k_a, _BN_);

  var _BJ_ = $_3_sub(_7t_c, _BL_res);

  var _BH_ = $_3_sub(_7o_b, _BJ_);

  var _I8__36author_36project_36Main_36updateRecord = a => {
    return b => _J7__36author_36project_36Main_36updateRecord_95raw(a, b);
  };

  var _BF_ = $_3_sub(_7k_a, _BH_);

  var _BD_ = $_3_sub(_7t_c, _BF_);

  var _BB_ = $_3_sub(_7o_b, _BD_);

  var _B9_ = $_3_sub(_7k_a, _BB_);

  var _B7_ = $_3_sub(_7t_c, _B9_);

  var _B5_ = $_3_sub(_7o_b, _B7_);

  var _B3_ = $_3_sub(_7k_a, _B5_);

  var _B1_ = $_3_sub(_7t_c, _B3_);

  var _Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _Az_ = $_3_sub(_7o_b, _B1_);

  var _Ax_res = $_3_sub(_7k_a, _Az_);

  var _J7__36author_36project_36Main_36updateRecord_95raw = (attr, record) => {
    return _KL_(record, {
      aO: 87
    });
  };

  var _Av_ = $_3_sub(_7t_c, _Ax_res);

  var _At_ = $_3_sub(_7o_b, _Av_);

  var _Ar_ = $_3_sub(_7k_a, _At_);

  var _Ap_ = $_3_sub(_7t_c, _Ar_);

  var _Hb__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36ReportClass = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _An_ = $_3_sub(_7o_b, _Ap_);

  var _IZ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacer = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _Hm__36mdgriffith_36style_95elements_36Element_36el_95raw = (style, attrs, child) => {
    return _Ib__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Element({
      b: _I6__36elm_36core_36Maybe_36Nothing,
      c: attrs,
      g: child,
      d: "div",
      e: _J3__36elm_36core_36Maybe_36Just(style)
    });
  };

  var _Id__36elm_36core_36List_36map = a => {
    return b => _IG__36elm_36core_36List_36map_95raw(a, b);
  };

  var _Al_ = $_3_sub(_7k_a, _An_);

  var _Aj_ = $_3_sub(_7t_c, _Al_);

  var _Ah_ = $_3_sub(_7o_b, _Aj_);

  var _Af_ = $_3_sub(_7k_a, _Ah_);

  var _Ad_ = $_3_sub(_7t_c, _Af_);

  var _Ab_ = $_3_sub(_7o_b, _Ad_);

  var _AZ_res = $_3_sub(_7k_a, _Ab_);

  var _AX_ = $_3_sub(_7t_c, _AZ_res);

  var _J4__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Attr = a => {
    return {
      $: 17,
      a: a
    };
  };

  var _AV_ = $_3_sub(_7o_b, _AX_);

  var _AT_ = $_3_sub(_7k_a, _AV_);

  var _If__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAllAttr = a => {
    return b => c => _JQ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAllAttr_95raw(a, b, c);
  };

  var _Ho__36mdgriffith_36style_95elements_36Element_36Attributes_36px = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _KL_ = (oldRecord, updatedFields) => {
    var newRecord = { ...oldRecord
    };

    for (var key in updatedFields) {
      newRecord[key] = updatedFields[key];
    }

    return newRecord;
  };

  var _AR_ = $_3_sub(_7t_c, _AT_);

  var _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout = a => {
    return {
      $: 4,
      a: a
    };
  };

  var _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw = (a, b, c, d) => {
    return {
      $: 13,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _Ij__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Raw = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _Ik__95VirtualDom_95map_95raw = (tagger, node) => {
    return {
      $: 4,
      j: tagger,
      k: node,
      b: 1 + (node.b || 0)
    };
  };

  var _Il__36mdgriffith_36style_95elements_36Element_36column_95raw = (style, attrs, children) => {
    return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
      b: _I6__36elm_36core_36Maybe_36Nothing,
      c: attrs,
      t: _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal(children),
      p: _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(2, _U_r3),
      d: "div",
      e: _J3__36elm_36core_36Maybe_36Just(style)
    });
  };

  var _AP_ = $_3_sub(_7o_b, _AR_);

  var _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _AN_ = $_3_sub(_7k_a, _AP_);

  var _AL_ = $_3_sub(_7t_c, _AN_);

  var _Hc__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36view = report_ => {
    return _Il__36mdgriffith_36style_95elements_36Element_36column_95raw(_4b__95class, _U_r3, _IK_(_Im__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Text_36hero_95raw(_In__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36TextClass, "Benchmark Report"), _Io__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36reports_95raw(_U_r3, report_)));
  };

  var _He__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36InProgressClass = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _AJ_ = $_3_sub(_7o_b, _AL_);

  var _Im__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Text_36hero_95raw = (_class, caption) => {
    return _Hx_(_Jw__36mdgriffith_36style_95elements_36Element_36node, "h1", _Hm__36mdgriffith_36style_95elements_36Element_36el_95raw(_class(0), {
      $: 1,
      a: _Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)),
      b: {
        $: 1,
        a: _Jz__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingBottom(20),
        b: _U_r3
      }
    }, _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, caption)));
  };

  var _In__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36TextClass = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _AH_ = $_3_sub(_7k_a, _AJ_);

  var _Hi__36mdgriffith_36style_95elements_36Element_36row_95raw = (style, attrs, children) => {
    return _Ih__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Layout({
      b: _I6__36elm_36core_36Maybe_36Nothing,
      c: attrs,
      t: _J1__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Normal(children),
      p: _J2__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36FlexLayout_95raw(1, _U_r3),
      d: "div",
      e: _J3__36elm_36core_36Maybe_36Just(style)
    });
  };

  var _AF_ = $_3_sub(_7t_c, _AH_);

  var _AD_ = $_3_sub(_7o_b, _AF_);

  var _AB_res = $_3_sub(_7k_a, _AD_);

  var _A9_ = $_3_sub(_7t_c, _AB_res);

  var _A7_ = $_3_sub(_7o_b, _A9_);

  var _Hf__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36view = report => {
    return _Il__36mdgriffith_36style_95elements_36Element_36column_95raw(_1u__95class, _U_r3, _IK_(_Im__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Text_36hero_95raw(_Is__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36TextClass, "Benchmarks Running"), _It__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBars_95raw(_U_r3, report)));
  };

  var _A5_ = $_3_sub(_7k_a, _A7_);

  var _A3_ = $_3_sub(_7t_c, _A5_);

  var _A1_ = $_3_sub(_7o_b, _A3_);

  var _9z_ = $_3_sub(_7k_a, _A1_);

  var _9x_ = $_3_sub(_7t_c, _9z_);

  var _9v_ = $_3_sub(_7o_b, _9x_);

  var _9t_ = $_3_sub(_7k_a, _9v_);

  var _Jt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Keyed = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Ju__36elm_36core_36Tuple_36mapSecond = a => {
    return b => _Kx__36elm_36core_36Tuple_36mapSecond_95raw(a, b);
  };

  var _9r_ = $_3_sub(_7t_c, _9t_);

  var _9p_ = $_3_sub(_7o_b, _9r_);

  var _9n_res = $_3_sub(_7k_a, _9p_);

  var _9l_ = $_3_sub(_7t_c, _9n_res);

  var _9j_ = $_3_sub(_7o_b, _9l_);

  var _Jw__36mdgriffith_36style_95elements_36Element_36node = str => {
    return _Lm__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setNode(str);
  };

  var _Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _9h_ = $_3_sub(_7k_a, _9j_);

  var _Jz__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingBottom = x => {
    return _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw(_I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing, _J3__36elm_36core_36Maybe_36Just(x), _I6__36elm_36core_36Maybe_36Nothing);
  };

  var _9f_ = $_3_sub(_7t_c, _9h_);

  var _9d_ = $_3_sub(_7o_b, _9f_);

  var _Ip__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _Iq__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _Ir__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _9b_ = $_3_sub(_7k_a, _9d_);

  var _Is__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36TextClass = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0 = number => {
    return number + "";
  };

  var _9Z_ = $_3_sub(_7t_c, _9b_);

  var _9X_ = $_3_sub(_7o_b, _9Z_);

  var _9V_ = $_3_sub(_7k_a, _9X_);

  var _Kw__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Event = a => {
    return {
      $: 15,
      a: a
    };
  };

  var _9T_ = $_3_sub(_7t_c, _9V_);

  var _9R_ = $_3_sub(_7o_b, _9T_);

  var _9P_res = $_3_sub(_7k_a, _9R_);

  var _9N_ = $_3_sub(_7t_c, _9P_res);

  var _Iu__36elm_36html_36Html_36div = a => {
    return b => _JT_(a, b);
  };

  var _9L_ = $_3_sub(_7o_b, _9N_);

  var _L6__95VirtualDom_95mapAttribute_95raw = (func, attr) => {
    return attr.$ === "a0" ? _Nx__95VirtualDom_95on_95raw(attr.n, _Ny__95VirtualDom_95mapHandler(func, attr.o)) : attr;
  };

  var _Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw = (key, string) => {
    return _KA__95VirtualDom_95property_95raw(key, _Ht__36elm_36json_36Json_36Encode_36string(string));
  };

  var _Ix__95VirtualDom_95style_95raw = (key, value) => {
    return {
      $: "a1",
      n: key,
      o: value
    };
  };

  var _L7__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36InputEvent = a => {
    return {
      $: 16,
      a: a
    };
  };

  var _Iy__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36embed_95raw = (full, stylesheet) => {
    return {
      $: 1,
      a: _IL_(_KB__36elm_36html_36Html_36node, "style", _U_r3, _7h__95List_95fromArray([_IB__36elm_36html_36Html_36text(full ? "html,body{width:100%;height:100%;}" + "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;padding:0;border:0}body{margin:0}.style-elements{display:block;position:relative;margin:0;padding:0;border:0;font-size:100%;font:inherit;box-sizing:border-box;line-height:1.2}.el{display:block;position:relative;margin:0;padding:0;border:0;border-style:solid;font-size:100%;font:inherit;box-sizing:border-box}em.el{font-style:italic}b.el,strong.el{font-weight:bolder}strike.el{text-decoration:line-through}u.el{text-decoration:underline}a.el{text-decoration:none;color:inherit}img.el{border-style:none}sub.el,sup.el{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.el{bottom:-0.25em}sup.el{top:-0.5em}\n\n.style-elements em.el {\n    padding: 0;\n    padding-left: 0.2em;\n}\n\n.style-elements button.button-focus:focus {\n   outline: none;\n   box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n   border-color: rgba(155,203,255,1.0);\n}\n\n.style-elements textarea:focus, .style-elements input:focus {\n   outline: none;\n   box-shadow: 0 0 2px 2px rgba(155,203,255,1.0);\n   border-color: rgba(155,203,255,1.0);\n}\n.style-elements input[type='checkbox'] {\n    border-radius: 3px;\n}\n.style-elements input[type='radio'] {\n    border-radius: 7px;\n}\n.style-elements input[type='radio']:focus {\n    border-radius: 7px;\n    box-shadow: 0 0 4px 4px rgba(155,203,255,1.0);\n}\n\n.style-elements select.focus-override:focus, .style-elements input.focus-override:focus {\n    outline: none;\n    box-shadow: none;\n    border-color:transparent;\n}\n.style-elements input.focus-override:focus ~ .alt-icon {\n    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n    border-color: rgba(155,203,255,1.0);\n}\n.style-elements select.focus-override:focus ~ .alt-icon {\n    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n    border-color: rgba(155,203,255,1.0);\n}\n.style-elements .arrows {\n    display:block;\n    position: relative;\n    height: 10px;\n    width: 10px;\n}\n/*\n.style-elements .arrows::after {\n    content: \" \";\n    position:absolute;\n    top:-2px;\n    left:0;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid black;\n}\n*/\n\n.style-elements .arrows::before {\n    content: \" \";\n    position:absolute;\n    top:2px;\n    left:0;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid black;\n}\n\n\n" : "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;padding:0;border:0}body{margin:0}.style-elements{display:block;position:relative;margin:0;padding:0;border:0;font-size:100%;font:inherit;box-sizing:border-box;line-height:1.2}.el{display:block;position:relative;margin:0;padding:0;border:0;border-style:solid;font-size:100%;font:inherit;box-sizing:border-box}em.el{font-style:italic}b.el,strong.el{font-weight:bolder}strike.el{text-decoration:line-through}u.el{text-decoration:underline}a.el{text-decoration:none;color:inherit}img.el{border-style:none}sub.el,sup.el{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.el{bottom:-0.25em}sup.el{top:-0.5em}\n\n.style-elements em.el {\n    padding: 0;\n    padding-left: 0.2em;\n}\n\n.style-elements button.button-focus:focus {\n   outline: none;\n   box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n   border-color: rgba(155,203,255,1.0);\n}\n\n.style-elements textarea:focus, .style-elements input:focus {\n   outline: none;\n   box-shadow: 0 0 2px 2px rgba(155,203,255,1.0);\n   border-color: rgba(155,203,255,1.0);\n}\n.style-elements input[type='checkbox'] {\n    border-radius: 3px;\n}\n.style-elements input[type='radio'] {\n    border-radius: 7px;\n}\n.style-elements input[type='radio']:focus {\n    border-radius: 7px;\n    box-shadow: 0 0 4px 4px rgba(155,203,255,1.0);\n}\n\n.style-elements select.focus-override:focus, .style-elements input.focus-override:focus {\n    outline: none;\n    box-shadow: none;\n    border-color:transparent;\n}\n.style-elements input.focus-override:focus ~ .alt-icon {\n    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n    border-color: rgba(155,203,255,1.0);\n}\n.style-elements select.focus-override:focus ~ .alt-icon {\n    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n    border-color: rgba(155,203,255,1.0);\n}\n.style-elements .arrows {\n    display:block;\n    position: relative;\n    height: 10px;\n    width: 10px;\n}\n/*\n.style-elements .arrows::after {\n    content: \" \";\n    position:absolute;\n    top:-2px;\n    left:0;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid black;\n}\n*/\n\n.style-elements .arrows::before {\n    content: \" \";\n    position:absolute;\n    top:2px;\n    left:0;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid black;\n}\n\n\n")])),
      b: {
        $: 1,
        a: _IL_(_KB__36elm_36html_36Html_36node, "style", _U_r3, _7h__95List_95fromArray([_IB__36elm_36html_36Html_36text(stylesheet.bI)])),
        b: _U_r3
      }
    };
  };

  var _Hg__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36viewport_95raw = (stylesheet, elm) => {
    return _Hx_(_Iu__36elm_36html_36Html_36div, {
      $: 1,
      a: _Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", "style-elements"),
      b: {
        $: 1,
        a: _Ix__95VirtualDom_95style_95raw("width", "100%"),
        b: {
          $: 1,
          a: _Ix__95VirtualDom_95style_95raw("height", "100%"),
          b: _U_r3
        }
      }
    }, _JC__95Utils_95ap(_Iy__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36embed_95raw(true, stylesheet), _Iz__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36render_95raw(stylesheet, elm)));
  };

  var _L8__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Vary_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _K3__36elm_36core_36List_36concat = lists => {
    return _Je__36elm_36core_36List_36foldr_95raw(_MM__36elm_36core_36List_36append, _U_r3, lists);
  };

  var _L9__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Height = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _9J_ = $_3_sub(_7k_a, _9L_);

  var _9H_ = $_3_sub(_7t_c, _9J_);

  var _LA__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36HAlign = a => {
    return {
      $: 4,
      a: a
    };
  };

  var _LB__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36VAlign = a => {
    return {
      $: 5,
      a: a
    };
  };

  var _LC__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Position_95raw = (a, b, c) => {
    return {
      $: 6,
      a: a,
      b: b,
      c: c
    };
  };

  var _LD__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PositionFrame = a => {
    return {
      $: 7,
      a: a
    };
  };

  var _JT_ = $_0_factoryFunction.bind(null, "div");

  var _9F_ = $_3_sub(_7o_b, _9H_);

  var _LE__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Opacity = a => {
    return {
      $: 9,
      a: a
    };
  };

  var _LF__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Spacing_95raw = (a, b) => {
    return {
      $: 10,
      a: a,
      b: b
    };
  };

  var _K4__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36reports = a => {
    return b => _Io__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36reports_95raw(a, b);
  };

  var _LG__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Margin_95raw = (a, b, c, d) => {
    return {
      $: 11,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _9D_ = $_3_sub(_7k_a, _9F_);

  var _LH__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PhantomPadding_95raw = (a, b, c, d) => {
    return {
      $: 14,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _LI__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36GridArea = a => {
    return {
      $: 18,
      a: a
    };
  };

  var _LJ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36GridCoords = a => {
    return {
      $: 19,
      a: a
    };
  };

  var _Hh__36mdgriffith_36style_95elements_36Style_36styleSheet = styles => {
    return _J0__36mdgriffith_36style_95elements_36Style_36styleSheetWith_95raw(_U_r3, styles);
  };

  var _LK__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36PointerEvents = a => {
    return {
      $: 20,
      a: a
    };
  };

  var _LL__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Shrink = a => {
    return {
      $: 21,
      a: a
    };
  };

  var _LM__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Overflow = a => {
    return {
      $: 22,
      a: a
    };
  };

  var _9B_ = $_3_sub(_7t_c, _9D_);

  var _99_ = $_3_sub(_7o_b, _9B_);

  var _K6__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36barsWithPath_95raw = (parents, children) => {
    return _Il__36mdgriffith_36style_95elements_36Element_36column_95raw(_1u__95class, {
      $: 1,
      a: _MO__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingTop(25),
      b: _U_r3
    }, _IK_(_MP__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Text_36path_95raw(_Is__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36TextClass, parents), _IG__36elm_36core_36List_36map_95raw(function (_v0) {
      var a = _v0.a;
      var b = _v0.b;
      return _MQ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBar_95raw(a, b);
    }, children)));
  };

  var _K8__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBars = a => {
    return b => _It__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBars_95raw(a, b);
  };

  var _97_ = $_3_sub(_7k_a, _99_);

  var _95_ = $_3_sub(_7t_c, _97_);

  var _93_ = $_3_sub(_7o_b, _95_);

  var _91_res = $_3_sub(_7k_a, _93_);

  var _KA__95VirtualDom_95property_95raw = (key, value) => {
    return {
      $: "a2",
      n: key,
      o: value
    };
  };

  var _KB__36elm_36html_36Html_36node = tag => {
    return _Jg__95VirtualDom_95nodeNS_95raw(void 0, _MR_(tag));
  };

  var _8z_ = $_3_sub(_7t_c, _91_res);

  var _8x_ = $_3_sub(_7o_b, _8z_);

  var _8v_ = $_3_sub(_7k_a, _8x_);

  var _8t_ = $_3_sub(_7t_c, _8v_);

  var _8r_ = $_3_sub(_7o_b, _8t_);

  var _Nx__95VirtualDom_95on_95raw = (key, handler) => {
    return {
      $: "a0",
      n: key,
      o: handler
    };
  };

  var _8p_ = $_3_sub(_7k_a, _8r_);

  var _Lm__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setNode = a => {
    return b => _NU__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setNode_95raw(a, b);
  };

  var _8n_ = $_3_sub(_7t_c, _8p_);

  var _8l_ = $_3_sub(_7o_b, _8n_);

  var _8j_ = $_3_sub(_7k_a, _8l_);

  var _8h_ = $_3_sub(_7t_c, _8j_);

  var _8f_ = $_3_sub(_7o_b, _8h_);

  var _Lr__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36header_95raw = (variation, caption) => {
    return _Hm__36mdgriffith_36style_95elements_36Element_36el_95raw(_5Z__95class, {
      $: 1,
      a: _L8__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Vary_95raw(variation, true),
      b: _U_r3
    }, _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, caption));
  };

  var _8d_res = $_3_sub(_7k_a, _8f_);

  var _8b_ = $_3_sub(_7t_c, _8d_res);

  var _8Z_ = $_3_sub(_7o_b, _8b_);

  var _8X_ = $_3_sub(_7k_a, _8Z_);

  var _8V_ = $_3_sub(_7t_c, _8X_);

  var _Ls__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36runsPerSecond = variation => {
    return _Hx_(_M9__36elm_36core_36Basics_36composeR, _OF__36BrianHicks_36elm_95trend_36Trend_36Linear_36line, _Hx_(_M9__36elm_36core_36Basics_36composeR, a => _OG__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw(a, 1000), _Hx_(_M9__36elm_36core_36Basics_36composeR, _OH__36elm_36core_36Basics_36floor, _Hx_(_M9__36elm_36core_36Basics_36composeR, _OI__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int, _Hx_(_M9__36elm_36core_36Basics_36composeR, _MB__36mdgriffith_36style_95elements_36Element_36text, _MC__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell(variation))))));
  };

  var _MB__36mdgriffith_36style_95elements_36Element_36text = b => {
    return _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, b);
  };

  var _8T_ = $_3_sub(_7o_b, _8V_);

  var _MC__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell = a => {
    return b => _ME__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell_95raw(a, b);
  };

  var _ME__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell_95raw = (variation, contents) => {
    return _Hm__36mdgriffith_36style_95elements_36Element_36el_95raw(_6J__95class, {
      $: 1,
      a: _L8__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Vary_95raw(variation, true),
      b: {
        $: 1,
        a: _MO__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingTop(5),
        b: _U_r3
      }
    }, contents);
  };

  var _MO__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingTop = x => {
    return _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw(_J3__36elm_36core_36Maybe_36Just(x), _I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing);
  };

  var _Lw__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit_95a1 = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_OJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36percent, _OK_, c);
  };

  var _8R_ = $_3_sub(_7k_a, _8T_);

  var _Pz__95Json_95map1_95raw = (f, d1) => {
    return _RL_(f, [d1]);
  };

  var _Q0__95Json_95map2_95raw = (f, d1, d2) => {
    return _RL_(f, [d1, d2]);
  };

  var _Q1__95VirtualDom_95mapEventTuple = a => {
    return b => _Qk__95VirtualDom_95mapEventTuple_95raw(a, b);
  };

  var _8P_ = $_3_sub(_7t_c, _8R_);

  var _M0__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36report = a => {
    return b => c => d => _NW__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36report_95raw(a, b, c, d);
  };

  var _8N_ = $_3_sub(_7o_b, _8P_);

  var _MP__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Text_36path_95raw = (_class, parts) => {
    return _Hm__36mdgriffith_36style_95elements_36Element_36el_95raw(_class(1), {
      $: 1,
      a: _Jz__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingBottom(3),
      b: _U_r3
    }, _Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, _OT__36elm_36core_36String_36join_95raw(" / ", parts)));
  };

  var _M2__36elm_36core_36List_36singleton = value => {
    return {
      $: 1,
      a: value,
      b: _U_r3
    };
  };

  var _MM__36elm_36core_36List_36append = a => {
    return b => _NZ__36elm_36core_36List_36append_95raw(a, b);
  };

  var _M7__36elm_36core_36Maybe_36map2 = a => {
    return b => c => _Lz__36elm_36core_36Maybe_36map2_95raw(a, b, c);
  };

  var _KE__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement = a => {
    return b => c => d => _KG__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement_95raw(a, b, c, d);
  };

  var _Q3__95VirtualDom_95mapEventRecord = a => {
    return b => _Ql__95VirtualDom_95mapEventRecord_95raw(a, b);
  };

  var _8L_ = $_3_sub(_7k_a, _8N_);

  var _8J_ = $_3_sub(_7t_c, _8L_);

  var _Q5__36elm_36json_36Json_36Decode_36succeed = msg => {
    return {
      $: 0,
      a: msg
    };
  };

  var _Mv__36elm_36core_36List_36indexedMap_95raw = (f, xs) => {
    return _MF__95List_95map2_95raw(f, _Ow__36elm_36core_36List_36range_95raw(0, _LP__36elm_36core_36List_36length(xs) - 1), xs);
  };

  var _OI__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0, _QI__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a1, c);
  };

  var _MG__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36percentChange = a => {
    return b => _NX__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36percentChange_95raw(a, b);
  };

  var _Qk__95VirtualDom_95mapEventTuple_95raw = (func, tuple) => {
    return _HX_(func(tuple.a), tuple.b);
  };

  var _8H_ = $_3_sub(_7o_b, _8J_);

  var _MJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_Lu__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit_95a0, _Lw__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit_95a1, c);
  };

  var _MK__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendsFromStatuses_95a0 = a => {
    return b => _NY_(a, b);
  };

  var _8F_res = $_3_sub(_7k_a, _8H_);

  var _OL__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY = a => {
    return b => _PY__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(a, b);
  };

  var _OT__36elm_36core_36String_36join_95raw = (sep, chunks) => {
    return _QR__95String_95join_95raw(sep, _QS__95List_95toArray(chunks));
  };

  var _Ql__95VirtualDom_95mapEventRecord_95raw = (func, record) => {
    return {
      L: func(record.L),
      aU: record.aU,
      aP: record.aP
    };
  };

  var _8D_ = $_3_sub(_7t_c, _8F_res);

  var _OJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36percent = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_Pb__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36percent_95a0, _Pc__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36percent_95a1, c);
  };

  var _OK_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_MB__36mdgriffith_36style_95elements_36Element_36text, _QJ_, c);
  };

  var _NW__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36report_95raw = (parents, name, points, tableContents) => {
    return _Il__36mdgriffith_36style_95elements_36Element_36column_95raw(_4b__95class, {
      $: 1,
      a: _MO__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingTop(25),
      b: _U_r3
    }, {
      $: 1,
      a: _MP__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Text_36path_95raw(_In__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36TextClass, parents),
      b: {
        $: 1,
        a: _Il__36mdgriffith_36style_95elements_36Element_36column_95raw(_4p__95class, _7h__95List_95fromArray([_OW__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingXY_95raw(15, 7), _Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Ho__36mdgriffith_36style_95elements_36Element_36Attributes_36px(500))]), _7h__95List_95fromArray([_Ia__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Text_95raw(_JR__36mdgriffith_36style_95elements_36Element_36text_95a0, name), _Pa__36mdgriffith_36style_95elements_36Element_36table_95raw(_5F__95class, _7h__95List_95fromArray([_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)), _MO__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingTop(10)]), tableContents)])),
        b: _U_r3
      }
    });
  };

  var _8B_ = $_3_sub(_7o_b, _8D_);

  var _89_ = $_3_sub(_7k_a, _8B_);

  var _KI__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36stylesheet_95raw = (reset, guard, batched) => {
    return _N4__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36finalize(_IG__36elm_36core_36List_36map_95raw(_Hx_(_Ja__36elm_36core_36Basics_36composeL, _N5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderStyle(guard), _N7__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36preprocess), _N8__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36reorderImportAddReset_95raw(reset, _N9__36mdgriffith_36style_95elements_36Style_36Internal_36Batchable_36toList(batched))));
  };

  var _RL_ = (f, decoders) => {
    return {
      $: 9,
      f: f,
      g: decoders
    };
  };

  var _87_ = $_3_sub(_7t_c, _89_);

  var _85_ = $_3_sub(_7o_b, _87_);

  var _83_ = $_3_sub(_7k_a, _85_);

  var _NY_ = (_this, acc) => {
    return _Lz__36elm_36core_36Maybe_36map2_95raw(_M4__36elm_36core_36List_36cons, _Lx__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendFromStatus(_this), acc);
  };

  var _OW__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingXY_95raw = (x, y) => {
    return _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw(_J3__36elm_36core_36Maybe_36Just(y), _J3__36elm_36core_36Maybe_36Just(x), _J3__36elm_36core_36Maybe_36Just(y), _J3__36elm_36core_36Maybe_36Just(x));
  };

  var _MQ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBar_95raw = (name, status) => {
    return _OU__36mdgriffith_36style_95elements_36Element_36within_95raw({
      $: 1,
      a: _OV__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36filledPortion_95raw(name, status),
      b: _U_r3
    }, _Hi__36mdgriffith_36style_95elements_36Element_36row_95raw(_28__95class, {
      $: 1,
      a: _OW__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingXY_95raw(15, 7),
      b: {
        $: 1,
        a: _Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100)),
        b: _U_r3
      }
    }, {
      $: 1,
      a: _OX__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36caption_95raw(name, status),
      b: _U_r3
    }));
  };

  var _81_ = $_3_sub(_7t_c, _83_);

  var _7z_ = $_3_sub(_7o_b, _81_);

  var _7x_ = $_3_sub(_7k_a, _7z_);

  var _Ow__36elm_36core_36List_36range_95raw = (lo, hi) => {
    return _Qj__36elm_36core_36List_36rangeHelp_95raw(lo, hi, _U_r3);
  };

  var _MR_ = tag => {
    return tag == "script" ? "p" : tag;
  };

  var _7r_ = $_3_sub(_7t_c, _7x_);

  var _7m_ = $_3_sub(_7o_b, _7r_);

  var _7i__36author_36project_36Main_36many = $_3_sub(_7k_a, _7m_);

  var _Mt__36elm_36core_36List_36filterMap_95raw = (f, xs) => {
    return _Je__36elm_36core_36List_36foldr_95raw(_Ou__36elm_36core_36List_36maybeCons(f), _U_r3, xs);
  };

  var _N__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold = $_R_sub();

  var _Pb__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36percent_95a0 = b => {
    return _RC__95Basics_95mul_95raw(10000, b);
  };

  var _MT__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36positionNearby = a => {
    return b => _Nd__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36positionNearby_95raw(a, b);
  };

  _I8__36author_36project_36Main_36updateRecord.a = 2;

  var _Pc__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36percent_95a1 = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_R2__36elm_36core_36Basics_36round, _RD_, c);
  };

  var _QI__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a1 = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_RU__36elm_36core_36String_36toList, _RV_, c);
  };

  var _MX__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Box_95raw = (a, b, c, d) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _MY__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderSyleAttributes = styles => {
    return _IG__36elm_36core_36List_36map_95raw(function (_v0) {
      var name = _v0.a;
      var val = _v0.b;
      return _Ix__95VirtualDom_95style_95raw(name, val);
    }, styles);
  };

  var _MZ__36elm_36html_36Html_36span = a => {
    return b => _Ng_(a, b);
  };

  _I8__36author_36project_36Main_36updateRecord.f = _J7__36author_36project_36Main_36updateRecord_95raw;

  var _F__36author_36project_36Main_36suite = $_4_sub("Benchmarks", {
    $: 1,
    a: {
      $: 0,
      a: "sum 1000 entities in a list",
      b: _c_,
      c: _N__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold
    },
    b: {
      $: 1,
      a: {
        $: 0,
        a: "1000 record updates",
        b: _d_,
        c: _N__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold
      },
      b: _U_r3
    }
  });

  var _Mb__36elm_36html_36Html_36strong = a => {
    return b => _Nh_(a, b);
  };

  var _QR__95String_95join_95raw = (sep, strs) => {
    return strs.join(sep);
  };

  var _X__36elm_36core_36Platform_36Sub_36none = {
    $: 2,
    m: _U_r3
  };

  var _Md__36elm_36html_36Html_36em = a => {
    return b => _Ni_(a, b);
  };

  _C__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36update.a = 2;
  _C__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36update.f = _Z__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36update_95raw;

  var _Mf__36elm_36html_36Html_36u = a => {
    return b => _Nj_(a, b);
  };

  var _I3__36mdgriffith_36style_95elements_36Element_36empty = $_R_sub();

  var _QJ_ = b => {
    return _ME__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell_95raw(0, b);
  };

  var _Mh__36elm_36html_36Html_36s = a => {
    return b => _Nk_(a, b);
  };

  _Id__36elm_36core_36List_36map.a = 2;

  var _OV__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36filledPortion_95raw = (name, status) => {
    return _IA__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status) > 0 ? _Hm__36mdgriffith_36style_95elements_36Element_36el_95raw(_2r__95class, {
      $: 1,
      a: _MO__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingTop(7),
      b: {
        $: 1,
        a: _Jz__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingBottom(7),
        b: {
          $: 1,
          a: _QW__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingLeft(15),
          b: {
            $: 1,
            a: _Pd__36mdgriffith_36style_95elements_36Element_36Attributes_36clip,
            b: {
              $: 1,
              a: _Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent(100 * _IA__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status))),
              b: {
                $: 1,
                a: _QX__36mdgriffith_36style_95elements_36Element_36Attributes_36attribute_95raw("role", "progressbar"),
                b: {
                  $: 1,
                  a: _QX__36mdgriffith_36style_95elements_36Element_36Attributes_36attribute_95raw("aria-valuenow", _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(_OH__36elm_36core_36Basics_36floor(100 * _IA__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status)))),
                  b: {
                    $: 1,
                    a: _QX__36mdgriffith_36style_95elements_36Element_36Attributes_36attribute_95raw("aria-valuemin", "0"),
                    b: {
                      $: 1,
                      a: _QX__36mdgriffith_36style_95elements_36Element_36Attributes_36attribute_95raw("aria-valuemax", "100"),
                      b: _U_r3
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, _OX__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36caption_95raw(name, status)) : _I3__36mdgriffith_36style_95elements_36Element_36empty;
  };

  var _Mj__36elm_36html_36Html_36sup = a => {
    return b => _Nl_(a, b);
  };

  _Id__36elm_36core_36List_36map.f = _IG__36elm_36core_36List_36map_95raw;
  _Q1__95VirtualDom_95mapEventTuple.a = 2;

  var _Ml__36elm_36html_36Html_36sub = a => {
    return b => _Nm_(a, b);
  };

  _Q1__95VirtualDom_95mapEventTuple.f = _Qk__95VirtualDom_95mapEventTuple_95raw;

  var _Ng_ = $_0_factoryFunction.bind(null, "span");

  var _RU__36elm_36core_36String_36toList = string => {
    return _ST__95String_95foldr_95raw(_M4__36elm_36core_36List_36cons, _U_r3, string);
  };

  _Q3__95VirtualDom_95mapEventRecord.a = 2;

  var _Nh_ = $_0_factoryFunction.bind(null, "strong");

  var _RV_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_K1__36elm_36core_36List_36reverse, _SU_, c);
  };

  var _Qi__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Grid_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _Ni_ = $_0_factoryFunction.bind(null, "em");

  var _OZ__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36tag = str => {
    return _J4__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Attr(_Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", ""));
  };

  var _Ou__36elm_36core_36List_36maybeCons = a => {
    return b => c => _Pr__36elm_36core_36List_36maybeCons_95raw(a, b, c);
  };

  var _Nj_ = $_0_factoryFunction.bind(null, "u");

  var _Pt__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Nearby = a => {
    return {
      $: 3,
      a: a
    };
  };

  _Q3__95VirtualDom_95mapEventRecord.f = _Ql__95VirtualDom_95mapEventRecord_95raw;

  var _Nk_ = $_0_factoryFunction.bind(null, "s");

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Json_succeed", _$2_Object_46defineProperty(_Q5__36elm_36json_36Json_36Decode_36succeed, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Mp__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36gather = attrs => {
    return _I0__36elm_36core_36List_36foldl_95raw(_Os__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36makePositionable, _Nt__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36emptyPositionable, attrs);
  };

  var _Mr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36LayoutElement = a => {
    return {
      $: 1,
      a: a
    };
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$mdgriffith$style_elements$Element$Internal$Model$Width", _$2_Object_46defineProperty(_Hj__36mdgriffith_36style_95elements_36Element_36Attributes_36width, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Nl_ = $_0_factoryFunction.bind(null, "sup");

  var _Mx__36elm_36html_36Html_36Keyed_36node = tag => {
    return _Oy__95VirtualDom_95keyedNodeNS_95raw(void 0, _MR_(tag));
  };

  var _RD_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_Rv__36elm_36core_36Basics_36toFloat, _Rx_, c);
  };

  var _KM__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Inline = $_S_sub();

  var _Nm_ = $_0_factoryFunction.bind(null, "sub");

  var _KO__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Hidden = $_P_root(8);

  var _KQ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Expand = $_P_root(12);

  _If__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAllAttr.a = 3;
  _If__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAllAttr.f = _JQ__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36mapAllAttr_95raw;
  _Ju__36elm_36core_36Tuple_36mapSecond.a = 2;

  var _SU_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_T7_, _T8_, c);
  };

  _Ju__36elm_36core_36Tuple_36mapSecond.f = _Kx__36elm_36core_36Tuple_36mapSecond_95raw;

  var _Pu__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Absolute = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _4b__95class = $_R_sub();

  var _QW__36mdgriffith_36style_95elements_36Element_36Attributes_36paddingLeft = x => {
    return _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw(_I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing, _J3__36elm_36core_36Maybe_36Just(x));
  };

  _Lm__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setNode.a = 2;

  var _T7_ = b => {
    return _Tb__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36groupsOf_95raw(3, b);
  };

  var _3_ = d => {
    return _9_(_4_, _5_, 0, d);
  };

  var _QX__36mdgriffith_36style_95elements_36Element_36Attributes_36attribute_95raw = (name, val) => {
    return _J4__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Attr(_Rb__36elm_36virtual_95dom_36VirtualDom_36attribute_95raw(name, val));
  };

  var _Rv__36elm_36core_36Basics_36toFloat = x => {
    return x;
  };

  _Lm__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setNode.f = _NU__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36setNode_95raw;

  var _Rx_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_Su_, _Sv_, c);
  };

  var _N5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderStyle = a => {
    return b => _Nz__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderStyle_95raw(a, b);
  };

  var _T8_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_K1__36elm_36core_36List_36reverse, _Tc_, c);
  };

  var _TE_ = c => {
    return c;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$mdgriffith$style_elements$Style$Internal$Model$Percent", _$2_Object_46defineProperty(_Jx__36mdgriffith_36style_95elements_36Element_36Attributes_36percent, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  var _JR__36mdgriffith_36style_95elements_36Element_36text_95a0 = {
    Q: 0,
    S: false
  };

  var _SL__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridGap_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _Oq__36elm_36html_36Html_36Attributes_36classList = classes => {
    return _Iw__36elm_36html_36Html_36Attributes_36stringProperty_95raw("className", _OT__36elm_36core_36String_36join_95raw(" ", _IG__36elm_36core_36List_36map_95raw(_N0__36elm_36core_36Tuple_36first, _N1__36elm_36core_36List_36filter_95raw(_N2__36elm_36core_36Tuple_36second, classes))));
  };

  var _P1__36elm_36core_36List_36concatMap_95raw = (f, list) => {
    return _K3__36elm_36core_36List_36concat(_IG__36elm_36core_36List_36map_95raw(f, list));
  };

  var _SM__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridTemplate = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _Os__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36makePositionable = a => {
    return b => _Pq__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36makePositionable_95raw(a, b);
  };

  var _5Z__95class = $_S_sub();

  var _Hl__36mdgriffith_36style_95elements_36Element_36Attributes_36minHeight = len => {
    return _J4__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Attr(_Ix__95VirtualDom_95style_95raw("min-height", _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length(len)));
  };

  var _Tc_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_Tn_, _To_, c);
  };

  var _Su_ = a => {
    return a / 100;
  };

  var _Hn__36mdgriffith_36style_95elements_36Element_36Attributes_36maxWidth = len => {
    return _J4__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Attr(_Ix__95VirtualDom_95style_95raw("max-width", _J5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Value_36length(len)));
  };

  var _Sv_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0, _TR_, c);
  };

  var _Hq__36mdgriffith_36style_95elements_36Element_36Attributes_36padding = x => {
    return _J6__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Padding_95raw(_J3__36elm_36core_36Maybe_36Just(x), _J3__36elm_36core_36Maybe_36Just(x), _J3__36elm_36core_36Maybe_36Just(x), _J3__36elm_36core_36Maybe_36Just(x));
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_fromNumber", _$2_Object_46defineProperty(_KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Rb__36elm_36virtual_95dom_36VirtualDom_36attribute_95raw = (key, value) => {
    return _IH__95VirtualDom_95attribute_95raw(_Sd_(key), _Sj_(value));
  };

  var _Tn_ = b => {
    return _IG__36elm_36core_36List_36map_95raw(_Ts_, b);
  };

  var _Ox__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Middle = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Oy__95VirtualDom_95keyedNodeNS_95raw = (namespace, tag) => {
    return _Jf_(function (factList, kidList) {
      for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
      {
        var kid = kidList.a;
        descendantsCount += kid.b.b || 0;
        kids.push(kid);
      }

      descendantsCount += kids.length;
      return {
        $: 2,
        c: tag,
        d: _L1__95VirtualDom_95organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount
      };
    });
  };

  var _To_ = b => {
    return _OT__36elm_36core_36String_36join_95raw(",", b);
  };

  var _Ts_ = c => {
    return _Lt__36elm_36core_36Basics_36composeR_95raw(_K1__36elm_36core_36List_36reverse, _Tu__36elm_36core_36String_36fromList, c);
  };

  var _Tu__36elm_36core_36String_36fromList = chars => {
    return _QS__95List_95toArray(chars).join("");
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_fromList", _$2_Object_46defineProperty(_Tu__36elm_36core_36String_36fromList, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _RI__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Calc_95raw = (a, b) => {
    return {
      $: 4,
      a: a,
      b: b
    };
  };

  var _RJ__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr = a => {
    return b => _QU__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr_95raw(a, b);
  };

  var _TR_ = a => {
    return a + "%";
  };

  var _6J__95class = $_T_sub();

  _MC__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell.a = 2;
  _MC__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell.f = _ME__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36cell_95raw;
  _OL__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.a = 2;
  _OL__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.f = _PY__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$BrianHicks$elm_trend$Trend$Linear$goodnessOfFit", _$2_Object_46defineProperty(_Lu__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36goodnessOfFit_95a0, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_toFloat", _$2_Object_46defineProperty(_Rv__36elm_36core_36Basics_36toFloat, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _4p__95class = $_Q_sub();

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$mdgriffith$style_elements$Style$Internal$Model$Px", _$2_Object_46defineProperty(_Ho__36mdgriffith_36style_95elements_36Element_36Attributes_36px, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _MM__36elm_36core_36List_36append.a = 2;

  var _QZ__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexbox = a => {
    return b => _RE__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexbox_95raw(a, b);
  };

  var _Sd_ = key => {
    return /^(on|formAction$)/i.test(key) ? "data-" + key : key;
  };

  var _Sj_ = value => {
    return /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value;
  };

  var _Qc__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridV = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _P3__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Translate_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  var _P4__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Rotate = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _P5__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36RotateAround_95raw = (a, b, c, d) => {
    return {
      $: 2,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _P6__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Scale_95raw = (a, b, c) => {
    return {
      $: 3,
      a: a,
      b: b,
      c: c
    };
  };

  var _P7__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Transform = a => {
    return {
      $: 11,
      a: a
    };
  };

  var _P8__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Filters = a => {
    return {
      $: 12,
      a: a
    };
  };

  var _P9__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Shadows = a => {
    return {
      $: 10,
      a: a
    };
  };

  var _PA__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Style_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _PB__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Import = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _Qd__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Other = a => {
    return {
      $: 3,
      a: a
    };
  };

  _MM__36elm_36core_36List_36append.f = _NZ__36elm_36core_36List_36append_95raw;

  var _PD__36elm_36core_36Set_36fromList = list => {
    return _I0__36elm_36core_36List_36foldl_95raw(_Qv__36elm_36core_36Set_36insert, _Lg__36elm_36core_36Set_36empty, list);
  };

  var _PE__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Reset = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _5F__95class = $_U_sub();

  var _Q7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Free = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _Qe__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36GridH = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _Qf__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Vert = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _QB__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36select = _class => {
    return _RP__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Select_95raw("", _RQ__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36Style_95raw(_class, ""));
  };

  var _QC__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Class = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _Qg__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Horz = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Qh__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36TextLayout = a => {
    return {
      $: 0,
      a: a
    };
  };

  _M0__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36report.a = 4;
  _M0__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36report.f = _NW__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36report_95raw;
  _M7__36elm_36core_36Maybe_36map2.a = 3;
  _M7__36elm_36core_36Maybe_36map2.f = _Lz__36elm_36core_36Maybe_36map2_95raw;
  _MG__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36percentChange.a = 2;
  _MG__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36percentChange.f = _NX__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36percentChange_95raw;

  var _QD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp = a => {
    return b => _R8__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp_95raw(a, b);
  };

  _MK__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendsFromStatuses_95a0.a = 2;
  _MK__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendsFromStatuses_95a0.f = _NY_;

  var _Ky__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36trendsFromStatuses_95a1 = $_I_sub(_U_r3);

  _K4__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36reports.a = 2;
  _K4__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36reports.f = _Io__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Report_36reports_95raw;

  var _QF__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36guard = _class => {
    return _RR__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36applyGuard_95raw(_RS__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36hash(_RT__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36calculateGuard(_class)), _class);
  };

  var _1u__95class = $_R_sub();

  var _2r__95class = $_S_sub();

  var _Qm__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36brace_95raw = (i, str) => {
    return " {\n" + (str + ("\n" + (_Rc__36elm_36core_36String_36repeat_95raw(i, " ") + "}")));
  };

  var _Qn__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop = a => {
    return b => _RM__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop_95raw(a, b);
  };

  var _Pf_ = {
    $: "a1",
    n: "overflow",
    o: "hidden"
  };

  var _Pd__36mdgriffith_36style_95elements_36Element_36Attributes_36clip = $_F_root(17, _Pf_);

  var _Qp__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36RenderableClass_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _Qr__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36RenderableMedia_95raw = (a, b, c) => {
    return {
      $: 1,
      a: a,
      b: b,
      c: c
    };
  };

  var _Qs__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36RenderableFree = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _Pj__36mdgriffith_36style_95elements_36Element_36Attributes_36spread = $_J_sub(3);

  var _7Z__36mdgriffith_36style_95elements_36Element_36Attributes_36verticalCenter = $_K_sub(2);

  var _3L__95class = $_T_sub();

  var _28__95class = $_U_sub();

  _K8__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBars.a = 2;
  _K8__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBars.f = _It__36elm_95explorations_36benchmark_36Benchmark_36Runner_36InProgress_36progressBars_95raw;
  _Iu__36elm_36html_36Html_36div.a = 2;
  _Iu__36elm_36html_36Html_36div.f = _JT_;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$elm$virtual_dom$VirtualDom$node", _$2_Object_46defineProperty(_KB__36elm_36html_36Html_36node, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _Ou__36elm_36core_36List_36maybeCons.a = 3;

  var _RP__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Select_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _RQ__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36Style_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  _Ou__36elm_36core_36List_36maybeCons.f = _Pr__36elm_36core_36List_36maybeCons_95raw;
  _RJ__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr.a = 2;

  var _Rc__36elm_36core_36String_36repeat_95raw = (n, chunk) => {
    return _Sg__36elm_36core_36String_36repeatHelp_95raw(n, chunk, "");
  };

  var _Qu__36elm_36core_36Dict_36keys = dict => {
    return _PF__36elm_36core_36Dict_36foldr_95raw(_LO_((key, value, keyList) => _IK_(key, keyList)), _U_r3, dict);
  };

  var _Qv__36elm_36core_36Set_36insert = a => {
    return b => _RN__36elm_36core_36Set_36insert_95raw(a, b);
  };

  _RJ__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr.f = _QU__36mdgriffith_36style_95elements_36Element_36Internal_36Modify_36addAttr_95raw;

  var _Nn__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Relative = $_Q_sub();

  var _Rd__36elm_36core_36String_36concat = strings => {
    return _OT__36elm_36core_36String_36join_95raw("", strings);
  };

  _MT__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36positionNearby.a = 2;
  _MT__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36positionNearby.f = _Nd__36mdgriffith_36style_95elements_36Element_36Internal_36Adjustments_36positionNearby_95raw;

  var _Ne__36mdgriffith_36style_95elements_36Element_36Internal_36Model_36Screen = $_R_sub();

  _MZ__36elm_36html_36Html_36span.a = 2;
  _MZ__36elm_36html_36Html_36span.f = _Ng_;
  _Mb__36elm_36html_36Html_36strong.a = 2;
  _Mb__36elm_36html_36Html_36strong.f = _Nh_;

  var _RS__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36hash = value => {
    return _KJ__36elm_95explorations_36benchmark_36Benchmark_36Runner_36Humanize_36int_95a0(_SS__36Skinney_36murmur3_36Murmur3_36hashString_95raw(8675309, value));
  };

  _Md__36elm_36html_36Html_36em.a = 2;
  _Md__36elm_36html_36Html_36em.f = _Ni_;

  var _S0__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36SubClass = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _S1__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36child_95raw = (parent, selector) => {
    return _Sw__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Stack({
      $: 1,
      a: parent,
      b: {
        $: 1,
        a: _Sx__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36SelectChild(selector),
        b: _U_r3
      }
    });
  };

  var _S7__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36Media = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _S8__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asMediaQuery = a => {
    return b => _Sf__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asMediaQuery_95raw(a, b);
  };

  _Mf__36elm_36html_36Html_36u.a = 2;
  _Mf__36elm_36html_36Html_36u.f = _Nj_;

  var _S2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp = a => {
    return b => _Se__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp_95raw(a, b);
  };

  var _SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props = a => {
    return {
      $: 0,
      a: a
    };
  };

  _Mh__36elm_36html_36Html_36s.a = 2;
  _Mh__36elm_36html_36Html_36s.f = _Nk_;
  _Mj__36elm_36html_36Html_36sup.a = 2;
  _Mj__36elm_36html_36Html_36sup.f = _Nl_;

  var _Sg__36elm_36core_36String_36repeatHelp_95raw = (n, chunk, result) => {
    return n <= 0 ? result : _Sg__36elm_36core_36String_36repeatHelp_95raw(n >> 1, _JC__95Utils_95ap(chunk, chunk), !(n & 1) ? result : _JC__95Utils_95ap(result, chunk));
  };

  _Ml__36elm_36html_36Html_36sub.a = 2;
  _Ml__36elm_36html_36Html_36sub.f = _Nm_;

  var _JV__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36FirstAndLast = $_S_sub();

  var _L3__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Single = $_R_sub();

  _QZ__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexbox.a = 2;
  _QZ__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexbox.f = _RE__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Property_36flexbox_95raw;

  var _Sw__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Stack = a => {
    return {
      $: 4,
      a: a
    };
  };

  var _Sx__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36SelectChild = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _Sy__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Pseudo = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _SS__36Skinney_36murmur3_36Murmur3_36hashString_95raw = (seed, str) => {
    return _T6__36Skinney_36murmur3_36Murmur3_36finalize(_T9__95String_95foldl_95raw(_TA__36Skinney_36murmur3_36Murmur3_36hashFold, _TC__36Skinney_36murmur3_36Murmur3_36HashData_95raw(0, seed, 0, 0), str));
  };

  var _T1__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36Free = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _Pm__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Center = $_R_sub();

  var _Po__36mdgriffith_36style_95elements_36Style_36Internal_36Model_36Justify = $_Q_sub();

  var _Np__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36Last = $_U_sub();

  var _T3__36elm_36core_36String_36length = str => {
    return str.length;
  };

  var _Nr__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36First = $_R_sub();

  _Os__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36makePositionable.a = 2;

  var _TL__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36PropsAndSub_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _Sz__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36formatName = x => {
    return _TV__95Regex_95replaceAtMost_95raw(1 / 0, _Ly__36elm_36core_36Maybe_36withDefault_95raw(_TK__36elm_36regex_36Regex_36never, _TW__36elm_36regex_36Regex_36fromString("[\\s+]")), _v2 => "-", _TV__95Regex_95replaceAtMost_95raw(1 / 0, _Ly__36elm_36core_36Maybe_36withDefault_95raw(_TK__36elm_36regex_36Regex_36never, _TW__36elm_36regex_36Regex_36fromString("[A-Z0-9]+")), function (_v1) {
      var match = _v1.bY;
      return " " + _TX__36elm_36core_36String_36toLower(match);
    }, _TV__95Regex_95replaceAtMost_95raw(1 / 0, _Ly__36elm_36core_36Maybe_36withDefault_95raw(_TK__36elm_36regex_36Regex_36never, _TW__36elm_36regex_36Regex_36fromString("[^a-zA-Z0-9_-]")), _v0 => "", _TZ__36mdgriffith_36style_95elements_36Style_36Internal_36Selector_36uncapitalize(x))));
  };

  _Os__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36makePositionable.f = _Pq__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36makePositionable_95raw;

  var _Nu_ = $_E_sub(_I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing, _I6__36elm_36core_36Maybe_36Nothing);

  var _T5__36mdgriffith_36style_95elements_36Style_36Internal_36Find_36Variation_95raw = (a, b, c) => {
    return {
      $: 1,
      a: a,
      b: b,
      c: c
    };
  };

  var _Nw_ = {
    a: _I6__36elm_36core_36Maybe_36Nothing,
    b: _I6__36elm_36core_36Maybe_36Nothing,
    c: _I6__36elm_36core_36Maybe_36Nothing
  };
  var _Nt__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36emptyPositionable = {
    c: _U_r3,
    az: false,
    I: _I6__36elm_36core_36Maybe_36Nothing,
    ap: _I6__36elm_36core_36Maybe_36Nothing,
    a1: _I6__36elm_36core_36Maybe_36Nothing,
    bS: false,
    ac: _I6__36elm_36core_36Maybe_36Nothing,
    S: false,
    aB: _I6__36elm_36core_36Maybe_36Nothing,
    aC: _I6__36elm_36core_36Maybe_36Nothing,
    ag: _I6__36elm_36core_36Maybe_36Nothing,
    ah: _Nu_,
    aE: _I6__36elm_36core_36Maybe_36Nothing,
    as: _Nw_,
    aH: _I6__36elm_36core_36Maybe_36Nothing,
    X: _U_r3,
    ay: _I6__36elm_36core_36Maybe_36Nothing,
    bw: _I6__36elm_36core_36Maybe_36Nothing
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$elm$virtual_dom$VirtualDom$keyedNode", _$2_Object_46defineProperty(_Mx__36elm_36html_36Html_36Keyed_36node, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _KE__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement.a = 4;
  _KE__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement.f = _KG__36mdgriffith_36style_95elements_36Element_36Internal_36Render_36renderElement_95raw;

  var _TA__36Skinney_36murmur3_36Murmur3_36hashFold = a => {
    return b => _TS__36Skinney_36murmur3_36Murmur3_36hashFold_95raw(a, b);
  };

  _Qn__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop.a = 2;
  _Qn__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop.f = _RM__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36Css_36prop_95raw;

  var _TC__36Skinney_36murmur3_36Murmur3_36HashData_95raw = (shift, seed, hash, charsProcessed) => {
    return {
      Z: charsProcessed,
      ab: hash,
      W: seed,
      aj: shift
    };
  };

  var _TW__36elm_36regex_36Regex_36fromString = string => {
    return _Tk__95Regex_95fromStringWith_95raw({
      bF: false,
      bZ: false
    }, string);
  };

  var _TX__36elm_36core_36String_36toLower = str => {
    return str.toLowerCase();
  };

  _S8__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asMediaQuery.a = 2;

  var _Tj__36elm_36regex_36Regex_36Match_95raw = (match, index, number, submatches) => {
    return {
      bU: index,
      bY: match,
      b$: number,
      b5: submatches
    };
  };

  _S8__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asMediaQuery.f = _Sf__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36asMediaQuery_95raw;

  var _Ta__36Skinney_36murmur3_36Murmur3_36multiplyBy_95raw = (b, a) => {
    return (a & 65535) * b + (((a >>> 16) * b & 65535) << 16);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$mdgriffith$style_elements$Style$Internal$Intermediate$Props", _$2_Object_46defineProperty(_SA__36mdgriffith_36style_95elements_36Style_36Internal_36Intermediate_36props, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Td__36Skinney_36murmur3_36Murmur3_36rotlBy_95raw = (b, a) => {
    return a << b | a >>> 32 - b;
  };

  var _Tl__36elm_36core_36String_36dropLeft_95raw = (n, string) => {
    return n < 1 ? string : _Tr__95String_95slice_95raw(n, _T3__36elm_36core_36String_36length(string), string);
  };

  var _Tm__36elm_36core_36String_36left_95raw = (n, string) => {
    return n < 1 ? "" : _Tr__95String_95slice_95raw(0, n, string);
  };

  var _Ti__36Skinney_36murmur3_36Murmur3_36mix_95raw = (h1, k1) => {
    return _Ta__36Skinney_36murmur3_36Murmur3_36multiplyBy_95raw(5, _Td__36Skinney_36murmur3_36Murmur3_36rotlBy_95raw(13, h1 ^ _Ta__36Skinney_36murmur3_36Murmur3_36multiplyBy_95raw(461845907, _Td__36Skinney_36murmur3_36Murmur3_36rotlBy_95raw(15, _Ta__36Skinney_36murmur3_36Murmur3_36multiplyBy_95raw(3432918353, k1))))) + 3864292196;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_length", _$2_Object_46defineProperty(_T3__36elm_36core_36String_36length, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _S2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp.a = 2;

  var _Tr__95String_95slice_95raw = (start, end, str) => {
    return str.slice(start, end);
  };

  _S2__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp.f = _Se__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderVariationProp_95raw;
  var _TK__36elm_36regex_36Regex_36never = /.^/;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_String_toLower", _$2_Object_46defineProperty(_TX__36elm_36core_36String_36toLower, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _QD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp.a = 2;
  _QD__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp.f = _R8__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderProp_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Char_toCode", _$2_Object_46defineProperty(_Tg__36elm_36core_36Char_36toCode, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _TA__36Skinney_36murmur3_36Murmur3_36hashFold.a = 2;
  _TA__36Skinney_36murmur3_36Murmur3_36hashFold.f = _TS__36Skinney_36murmur3_36Murmur3_36hashFold_95raw;
  _N5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderStyle.a = 2;
  _N5__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderStyle.f = _Nz__36mdgriffith_36style_95elements_36Style_36Internal_36Render_36renderStyle_95raw;
  _Qv__36elm_36core_36Set_36insert.a = 2;
  _Qv__36elm_36core_36Set_36insert.f = _RN__36elm_36core_36Set_36insert_95raw;

  var _l__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36Page = $_R_sub();

  var _p_ = $_5_sub();

  var _z_ = $_K_sub("Helvetica Neue");

  var _14_ = $_K_sub("Helvetica");

  var _19_ = $_K_sub("Arial");

  var _1E__36mdgriffith_36style_95elements_36Style_36Font_36sansSerif = $_Q_sub();

  var _1C_ = $_3_sub(_1E__36mdgriffith_36style_95elements_36Style_36Font_36sansSerif, _U_r3);

  var _17_ = $_3_sub(_19_, _1C_);

  var _12_ = $_3_sub(_14_, _17_);

  var _x_ = $_3_sub(_z_, _12_);

  var _v_ = $_F_root(7, _x_);

  var _1K_ = $_E_sub(0.058823529411764705, 0.11764705882352941, 0.17647058823529413, 1);

  var _1I_ = $_L_sub(_1K_);

  var _1S_ = $_6_sub("rgba(242,242,242,1)");

  var _1Q_ = $_3_sub(_1S_, _U_r3);

  var _1G_ = $_3_sub(_1I_, _1Q_);

  var _t_curr = $_3_sub(_v_, _1G_);

  var _n_ = $_3_sub(_p_, _t_curr);

  var _j_ = $_7_sub(_l__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36Page, _n_);

  var _h_ = $_I_sub(_j_);

  var _1c__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36Wrapper = $_Q_sub();

  var _1g_ = $_5_sub();

  var _1e_ = $_3_sub(_1g_, _U_r3);

  var _1a_ = $_7_sub(_1c__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36Wrapper, _1e_);

  var _1Y_ = $_I_sub(_1a_);

  var _1s_ = $_M_sub(_1u__95class);

  var _1y_ = $_5_sub();

  var _1w_ = $_3_sub(_1y_, _U_r3);

  var _1q_a = $_7_sub(_1s_, _1w_);

  var _26_ = $_M_sub(_28__95class);

  var _2C_ = $_5_sub();

  var _2I_ = $_6_sub("rgba(248,248,248,1)");

  var _2U_color = $_E_sub(0.058823529411764705, 0.11764705882352941, 0.17647058823529413, 0.1);

  var _2b_offset = {
    a: 0,
    b: 1
  };
  var _2S_ = {
    bC: 2,
    bH: _2U_color,
    bX: "box",
    a7: _2b_offset,
    b4: 0
  };

  var _2Q_shadows = $_3_sub(_2S_, _U_r3);

  var _2O_ = $_N_sub();

  var _2h_ = $_8_sub();

  var _2f_ = $_3_sub(_2h_, _U_r3);

  var _2M_ = $_3_sub(_2O_, _2f_);

  var _2G_ = $_3_sub(_2I_, _2M_);

  var _2A_ = $_3_sub(_2C_, _2G_);

  var _24_a = $_7_sub(_26_, _2A_);

  var _2p_ = $_M_sub(_2r__95class);

  var _2v_ = $_5_sub();

  var _33_color = $_E_sub(0.9725490196078431, 0.9725490196078431, 0.9725490196078431, 1);

  var _31_ = $_L_sub(_33_color);

  var _3B_ = $_6_sub("rgba(87,171,226,1)");

  var _39_ = $_3_sub(_3B_, _U_r3);

  var _2z_ = $_3_sub(_31_, _39_);

  var _2t_ = $_3_sub(_2v_, _2z_);

  var _2n_a = $_7_sub(_2p_, _2t_);

  var _3J_ = $_M_sub(_3L__95class);

  var _3P_ = $_5_sub();

  var _3V_ = $_9_sub("14px");

  var _3T_ = $_3_sub(_3V_, _U_r3);

  var _3N_ = $_3_sub(_3P_, _3T_);

  var _3H_a = $_7_sub(_3J_, _3N_);

  var _3f__95class = $_K_sub(0);

  var _3d_ = $_M_sub(_3f__95class);

  var _3k_ = $_5_sub();

  var _3q_ = $_A_sub();

  var _3w_ = $_9_sub("48px");

  var _3u_ = $_3_sub(_3w_, _U_r3);

  var _3o_ = $_3_sub(_3q_, _3u_);

  var _3i_ = $_3_sub(_3k_, _3o_);

  var _3b_ = $_7_sub(_3d_, _3i_);

  var _46__95class = $_K_sub(1);

  var _44_ = $_M_sub(_46__95class);

  var _4B_ = $_5_sub();

  var _4H_ = $_B_sub();

  var _4N_ = $_9_sub("18px");

  var _4L_ = $_3_sub(_4N_, _U_r3);

  var _4F_ = $_3_sub(_4H_, _4L_);

  var _49_ = $_3_sub(_4B_, _4F_);

  var _42_ = $_7_sub(_44_, _49_);

  var _40_ = $_3_sub(_42_, _U_r3);

  var _3Z_res = $_3_sub(_3b_, _40_);

  var _3F_ = $_3_sub(_3H_a, _3Z_res);

  var _2l_ = $_3_sub(_2n_a, _3F_);

  var _22_ = $_3_sub(_24_a, _2l_);

  var _1o_ = $_3_sub(_1q_a, _22_);

  var _1m_ = $_H_sub(_1o_);

  var _4Z_ = $_O_sub(_4b__95class);

  var _4f_ = $_5_sub();

  var _4d_ = $_3_sub(_4f_, _U_r3);

  var _4X_a = $_7_sub(_4Z_, _4d_);

  var _4n_ = $_O_sub(_4p__95class);

  var _4t_ = $_5_sub();

  var _4z_ = $_6_sub("rgba(248,248,248,1)");

  var _53_ = $_N_sub();

  var _57_ = $_8_sub();

  var _55_ = $_3_sub(_57_, _U_r3);

  var _51_ = $_3_sub(_53_, _55_);

  var _4x_ = $_3_sub(_4z_, _51_);

  var _4r_ = $_3_sub(_4t_, _4x_);

  var _4l_a = $_7_sub(_4n_, _4r_);

  var _5D_ = $_O_sub(_5F__95class);

  var _5J_ = $_5_sub();

  var _5P_ = $_7_sub("font-feature-settings", "'tnum'");

  var _5N_ = $_3_sub(_5P_, _U_r3);

  var _5H_ = $_3_sub(_5J_, _5N_);

  var _5B_a = $_7_sub(_5D_, _5H_);

  var _5X_ = $_O_sub(_5Z__95class);

  var _5d_ = $_5_sub();

  var _5j_ = $_C_sub("font-weight", "700");

  var _5p_ = $_9_sub("12px");

  var _60_ = $_C_sub("text-align", "right");

  var _5y_ = $_3_sub(_60_, _U_r3);

  var _5v_ = $_3_sub(0, _5y_);

  var _6B_ = $_B_sub();

  var _69_ = $_3_sub(_6B_, _U_r3);

  var _66_ = $_3_sub(1, _69_);

  var _64_res = $_3_sub(_66_, _U_r3);

  var _5t_ = $_3_sub(_5v_, _64_res);

  var _5n_ = $_3_sub(_5p_, _5t_);

  var _5h_ = $_3_sub(_5j_, _5n_);

  var _5b_ = $_3_sub(_5d_, _5h_);

  var _5V_a = $_7_sub(_5X_, _5b_);

  var _6H_ = $_O_sub(_6J__95class);

  var _6N_ = $_5_sub();

  var _6T_ = $_9_sub("18px");

  var _6e_ = $_C_sub("text-align", "right");

  var _6c_ = $_3_sub(_6e_, _U_r3);

  var _6Z_ = $_3_sub(0, _6c_);

  var _6n_ = $_B_sub();

  var _6l_ = $_3_sub(_6n_, _U_r3);

  var _6i_ = $_3_sub(1, _6l_);

  var _6g_ = $_3_sub(_6i_, _U_r3);

  var _6X_ = $_3_sub(_6Z_, _6g_);

  var _6R_ = $_3_sub(_6T_, _6X_);

  var _6L_ = $_3_sub(_6N_, _6R_);

  var _6F_a = $_7_sub(_6H_, _6L_);

  var _6v__95class = $_K_sub(0);

  var _6t_ = $_O_sub(_6v__95class);

  var _6z_ = $_5_sub();

  var _73_ = $_A_sub();

  var _77_ = $_9_sub("48px");

  var _75_ = $_3_sub(_77_, _U_r3);

  var _71_ = $_3_sub(_73_, _75_);

  var _6x_ = $_3_sub(_6z_, _71_);

  var _6r_ = $_7_sub(_6t_, _6x_);

  var _7F__95class = $_K_sub(1);

  var _7D_ = $_O_sub(_7F__95class);

  var _7J_ = $_5_sub();

  var _7N_ = $_B_sub();

  var _7R_ = $_9_sub("18px");

  var _7P_ = $_3_sub(_7R_, _U_r3);

  var _7L_ = $_3_sub(_7N_, _7P_);

  var _7H_ = $_3_sub(_7J_, _7L_);

  var _7B_ = $_7_sub(_7D_, _7H_);

  var _79_ = $_3_sub(_7B_, _U_r3);

  var _6p_b = $_3_sub(_6r_, _79_);

  var _6D_res = $_3_sub(_6F_a, _6p_b);

  var _5T_ = $_3_sub(_5V_a, _6D_res);

  var _59_ = $_3_sub(_5B_a, _5T_);

  var _4j_ = $_3_sub(_4l_a, _59_);

  var _4V_ = $_3_sub(_4X_a, _4j_);

  var _4T_ = $_H_sub(_4V_);

  var _4R_ = $_3_sub(_4T_, _U_r3);

  var _1k_ = $_3_sub(_1m_, _4R_);

  var _1W_ = $_3_sub(_1Y_, _1k_);

  var _f__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36styles = $_3_sub(_h_, _1W_);

  var _7T__36mdgriffith_36style_95elements_36Element_36Attributes_36fill = $_O_sub(1);

  var _7W__36mdgriffith_36style_95elements_36Element_36Attributes_36center = $_J_sub(2);

  var _4_ = {
    a4: _A_,
    b6: _B_,
    bt: _C__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36update,
    bu: _E__36elm_95explorations_36benchmark_36Benchmark_36Runner_36App_36view
  };

  var _5_ = $_G_sub();

  _$0_global.Elm = {
    Main: {
      init: _3_
    }
  };
}).call(this);