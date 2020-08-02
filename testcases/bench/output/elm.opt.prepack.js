(function () {
  "use strict";

  function $_6_sub() {
    return $_4_root(0);
  }

  function $_5_sub() {
    return $_4_root(1);
  }

  function $_4_root(__0) {
    return {
      $: __0
    };
  }

  function $_3_sub(__1, __2) {
    return $_0_root(2, __1, __2);
  }

  function $_2_sub(__1, __2) {
    return $_0_root(1, __1, __2);
  }

  function $_1_sub() {
    return $_0_root(0, null, null);
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

  var _Dc_F = function (arity, fun, wrapper) {
    wrapper.a = arity;
    wrapper.f = fun;
    return wrapper;
  };

  var _Bt__95Utils_95eq = function (x, y) {
    for (var pair, stack = [], isEqual = _Cy__95Utils_95eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Cy__95Utils_95eqHelp(pair.a, pair.b, 0, stack)) {}

    return isEqual;
  };

  var _Cy__95Utils_95eqHelp = function (x, y, depth, stack) {
    if (x === y) {
      return true;
    }

    if (typeof x !== "object" || x === null || y === null) {
      typeof x === "function" && _Ag__95Debug_95crash(5);
      return false;
    }

    if (depth > 100) {
      stack.push(_Al__95Utils_95Tuple2(x, y));
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
      x = _Dr__36elm_36core_36Dict_36toList(x);
      y = _Dr__36elm_36core_36Dict_36toList(y);
    } //*/


    for (var key in x) {
      if (!_Cy__95Utils_95eqHelp(x[key], y[key], depth + 1, stack)) {
        return false;
      }
    }

    return true;
  };

  var _DM__95Utils_95cmp = function (x, y, ord) {
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
        return (ord = _DM__95Utils_95cmp(x.a, y.a)) ? ord : (ord = _DM__95Utils_95cmp(x.b, y.b)) ? ord : _DM__95Utils_95cmp(x.c, y.c);
      } // traverse conses until end of a list or a mismatch


    for (; x.b && y.b && !(ord = _DM__95Utils_95cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES


    return ord || (x.b ?
    /*GT*/
    1 : y.b ?
    /*LT*/
    -1 :
    /*EQ*/
    0);
  };

  var _Fo__95Utils_95ap = function (xs, ys) {
    // append Strings
    if (typeof xs === "string") {
      return xs + ys;
    } // append Lists


    if (!xs.b) {
      return ys;
    }

    var root = _Ax__95List_95Cons(xs.a, ys);

    xs = xs.b;

    for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
    {
      curr = curr.b = _Ax__95List_95Cons(xs.a, ys);
    }

    return root;
  };

  var _Ce__95List_95fromArray = function (arr) {
    var out = _T_r3;

    for (var i = arr.length; i--;) {
      out = _Ax__95List_95Cons(arr[i], out);
    }

    return out;
  };

  var _GE__95List_95toArray = function (xs) {
    for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
    {
      out.push(xs.a);
    }

    return out;
  };

  var _Ag__95Debug_95crash = function (identifier) {
    throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
  };

  var _BJ__95Json_95runHelp = function (decoder, value) {
    switch (decoder.$) {
      case 2:
        return decoder.b(value);

      case 5:
        return value === null ? _C2__36elm_36core_36Result_36Ok(decoder.c) : _C4__95Json_95expecting("null", value);

      case 3:
        if (!_C5__95Json_95isArray(value)) {
          return _C4__95Json_95expecting("a LIST", value);
        }

        return _C3__95Json_95runArrayDecoder(decoder.b, value, _Ce__95List_95fromArray);

      case 4:
        if (!_C5__95Json_95isArray(value)) {
          return _C4__95Json_95expecting("an ARRAY", value);
        }

        return _C3__95Json_95runArrayDecoder(decoder.b, value, _C6__95Json_95toElmArray);

      case 6:
        var field = decoder.d;

        if (typeof value !== "object" || value === null || !(field in value)) {
          return _C4__95Json_95expecting("an OBJECT with a field named `" + field + "`", value);
        }

        var result = _BJ__95Json_95runHelp(decoder.b, value[field]);

        return _Aj__36elm_36core_36Result_36isOk(result) ? result : _C7__36elm_36core_36Result_36Err(_C8__36elm_36json_36Json_36Decode_36Field_95raw(field, result.a));

      case 7:
        var index = decoder.e;

        if (!_C5__95Json_95isArray(value)) {
          return _C4__95Json_95expecting("an ARRAY", value);
        }

        if (index >= value.length) {
          return _C4__95Json_95expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
        }

        var result = _BJ__95Json_95runHelp(decoder.b, value[index]);

        return _Aj__36elm_36core_36Result_36isOk(result) ? result : _C7__36elm_36core_36Result_36Err(_C9__36elm_36json_36Json_36Decode_36Index_95raw(index, result.a));

      case 8:
        if (typeof value !== "object" || value === null || _C5__95Json_95isArray(value)) {
          return _C4__95Json_95expecting("an OBJECT", value);
        }

        var keyValuePairs = _T_r3; // TODO test perf of Object.keys and switch when support is good enough

        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _BJ__95Json_95runHelp(decoder.b, value[key]);

            if (!_Aj__36elm_36core_36Result_36isOk(result)) {
              return _C7__36elm_36core_36Result_36Err(_C8__36elm_36json_36Json_36Decode_36Field_95raw(key, result.a));
            }

            keyValuePairs = _Ax__95List_95Cons(_Al__95Utils_95Tuple2(key, result.a), keyValuePairs);
          }
        }

        return _C2__36elm_36core_36Result_36Ok(_CA__36elm_36core_36List_36reverse(keyValuePairs));

      case 9:
        var answer = decoder.f;
        var decoders = decoder.g;

        for (var i = 0; i < decoders.length; i++) {
          var result = _BJ__95Json_95runHelp(decoders[i], value);

          if (!_Aj__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          answer = answer(result.a);
        }

        return _C2__36elm_36core_36Result_36Ok(answer);

      case 10:
        var result = _BJ__95Json_95runHelp(decoder.b, value);

        return !_Aj__36elm_36core_36Result_36isOk(result) ? result : _BJ__95Json_95runHelp(decoder.h(result.a), value);

      case 11:
        var errors = _T_r3;

        for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
        {
          var result = _BJ__95Json_95runHelp(temp.a, value);

          if (_Aj__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          errors = _Ax__95List_95Cons(result.a, errors);
        }

        return _C7__36elm_36core_36Result_36Err(_CB__36elm_36json_36Json_36Decode_36OneOf(_CA__36elm_36core_36List_36reverse(errors)));

      case 1:
        return _C7__36elm_36core_36Result_36Err(_CC__36elm_36json_36Json_36Decode_36Failure_95raw(decoder.a, _Ah__36elm_36json_36Json_36Encode_36string(value)));

      case 0:
        return _C2__36elm_36core_36Result_36Ok(decoder.a);
    }
  };

  var _C3__95Json_95runArrayDecoder = function (decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);

    for (var i = 0; i < len; i++) {
      var result = _BJ__95Json_95runHelp(decoder, value[i]);

      if (!_Aj__36elm_36core_36Result_36isOk(result)) {
        return _C7__36elm_36core_36Result_36Err(_C9__36elm_36json_36Json_36Decode_36Index_95raw(i, result.a));
      }

      array[i] = result.a;
    }

    return _C2__36elm_36core_36Result_36Ok(toElmValue(array));
  };

  var _Dn__95Json_95equality = function (x, y) {
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
        return _Dn__95Json_95equality(x.b, y.b);

      case 6:
        return x.d === y.d && _Dn__95Json_95equality(x.b, y.b);

      case 7:
        return x.e === y.e && _Dn__95Json_95equality(x.b, y.b);

      case 9:
        return x.f === y.f && _EZ__95Json_95listEquality(x.g, y.g);

      case 10:
        return x.h === y.h && _Dn__95Json_95equality(x.b, y.b);

      case 11:
        return _EZ__95Json_95listEquality(x.g, y.g);
    }
  };

  var _EZ__95Json_95listEquality = function (aDecoders, bDecoders) {
    var len = aDecoders.length;

    if (len !== bDecoders.length) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      if (!_Dn__95Json_95equality(aDecoders[i], bDecoders[i])) {
        return false;
      }
    }

    return true;
  };

  var _Cf__95Scheduler_95rawSpawn = function (task) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    var proc = {
      $: 0,
      e: __captured__scope_1_[0]++,
      f: task,
      g: null,
      h: []
    };

    _Dd__95Scheduler_95enqueue(proc);

    return proc;
  };

  var _Cj__95Scheduler_95rawSend = function (proc, msg) {
    proc.h.push(msg);

    _Dd__95Scheduler_95enqueue(proc);
  };

  var _Dd__95Scheduler_95enqueue = function (proc) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _Dq__95Scheduler_95queue.push(proc);

    if (__captured__scope_1_[1]) {
      return;
    }

    __captured__scope_1_[1] = true;

    while (proc = _Dq__95Scheduler_95queue.shift()) {
      _EQ__95Scheduler_95step(proc);
    }

    __captured__scope_1_[1] = false;
  };

  var _EQ__95Scheduler_95step = function (proc) {
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

          _Dd__95Scheduler_95enqueue(proc);
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

  var _Y__95Platform_95initialize = function (flagDecoder, args, init, update, subscriptions, stepperBuilder) {
    var result = _Af__95Json_95run_95raw(flagDecoder, _Ah__36elm_36json_36Json_36Encode_36string(args ? args["flags"] : undefined));

    _Aj__36elm_36core_36Result_36isOk(result) || _Ag__95Debug_95crash(2
    /**_UNUSED/, _Json_errorToString(result.a) /**/
    );
    var managers = {};
    var initPair = init(result.a);
    var model = initPair.a;
    var stepper = stepperBuilder(sendToApp, model);

    var ports = _At__95Platform_95setupEffects(managers, sendToApp);

    function sendToApp(msg, viewMetadata) {
      var pair = _Ak_A2(update, msg, model);

      stepper(model = pair.a, viewMetadata);

      _Au__95Platform_95enqueueEffects(managers, pair.b, subscriptions(model));
    }

    _Au__95Platform_95enqueueEffects(managers, initPair.b, subscriptions(model));

    return ports ? {
      ports: ports
    } : {};
  };

  var _At__95Platform_95setupEffects = function (managers, sendToApp) {
    var ports; // setup all necessary effect managers

    for (var key in _B8__95Platform_95effectManagers) {
      var manager = _B8__95Platform_95effectManagers[key];

      if (manager.a) {
        ports = ports || {};
        ports[key] = manager.a(key, sendToApp);
      }

      managers[key] = _Be__95Platform_95instantiateManager(manager, sendToApp);
    }

    return ports;
  };

  var _Be__95Platform_95instantiateManager = function (info, sendToApp) {
    var router = {
      g: sendToApp,
      h: undefined
    };
    var onEffects = info.c;
    var onSelfMsg = info.d;
    var cmdMap = info.e;
    var subMap = info.f;

    var loop = state => _CI__95Scheduler_95andThen_95raw(loop, _Ch__95Scheduler_95receive(function (msg) {
      var value = msg.a;

      if (msg.$ === 0) {
        return _Az_A3(onSelfMsg, router, value, state);
      }

      return cmdMap && subMap ? _Ci_A4(onEffects, router, value.i, value.j, state) : _Az_A3(onEffects, router, cmdMap ? value.i : value.j, state);
    }));

    return router.h = _Cf__95Scheduler_95rawSpawn(_CI__95Scheduler_95andThen_95raw(loop, info.b));
  };

  var _Au__95Platform_95enqueueEffects = function (managers, cmdBag, subBag) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _BE__95Platform_95effectsQueue.push({
      p: managers,
      q: cmdBag,
      r: subBag
    });

    if (__captured__scope_1_[2]) return;
    __captured__scope_1_[2] = true;

    for (var fx; fx = _BE__95Platform_95effectsQueue.shift();) {
      _Bf__95Platform_95dispatchEffects(fx.p, fx.q, fx.r);
    }

    __captured__scope_1_[2] = false;
  };

  var _Bf__95Platform_95dispatchEffects = function (managers, cmdBag, subBag) {
    var effectsDict = {};

    _Cg__95Platform_95gatherEffects(true, cmdBag, effectsDict, null);

    _Cg__95Platform_95gatherEffects(false, subBag, effectsDict, null);

    for (var home in managers) {
      _Cj__95Scheduler_95rawSend(managers[home], {
        $: "fx",
        a: effectsDict[home] || {
          i: _T_r3,
          j: _T_r3
        }
      });
    }
  };

  var _Cg__95Platform_95gatherEffects = function (isCmd, bag, effectsDict, taggers) {
    switch (bag.$) {
      case 1:
        var home = bag.k;

        var effect = _De__95Platform_95toEffect(isCmd, home, taggers, bag.l);

        effectsDict[home] = _Dm__95Platform_95insert(isCmd, effect, effectsDict[home]);
        return;

      case 2:
        for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
        {
          _Cg__95Platform_95gatherEffects(isCmd, list.a, effectsDict, taggers);
        }

        return;

      case 3:
        _Cg__95Platform_95gatherEffects(isCmd, bag.o, effectsDict, {
          s: bag.n,
          t: taggers
        });

        return;
    }
  };

  var _De__95Platform_95toEffect = function (isCmd, home, taggers, value) {
    function applyTaggers(x) {
      for (var temp = taggers; temp; temp = temp.t) {
        x = temp.s(x);
      }

      return x;
    }

    var map = isCmd ? _B8__95Platform_95effectManagers[home].e : _B8__95Platform_95effectManagers[home].f;
    return _Ak_A2(map, applyTaggers, value);
  };

  var _Dm__95Platform_95insert = function (isCmd, newEffect, effects) {
    effects = effects || {
      i: _T_r3,
      j: _T_r3
    };
    isCmd ? effects.i = _Ax__95List_95Cons(newEffect, effects.i) : effects.j = _Ax__95List_95Cons(newEffect, effects.j);
    return effects;
  };

  var _Bd__95Platform_95setupOutgoingPort = function (name) {
    var subs = [];
    var converter = _B8__95Platform_95effectManagers[name].u; // CREATE MANAGER

    var init = _CJ__36elm_36core_36Process_36sleep(0);

    _B8__95Platform_95effectManagers[name].b = init;
    _B8__95Platform_95effectManagers[name].c = _Cd_F3(function (router, cmdList, state) {
      for (; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
      {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;

        var value = _BG__95Json_95unwrap(converter(cmdList.a));

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

  var _E3__95VirtualDom_95appendChild = function (parent, child) {
    parent.appendChild(child);
  };

  var _Av__95VirtualDom_95organizeFacts = function (factList) {
    for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
    {
      var entry = factList.a;
      var tag = entry.$;
      var key = entry.n;
      var value = entry.o;

      if (tag === "a2") {
        key === "className" ? _Bg__95VirtualDom_95addClass(facts, key, _BG__95Json_95unwrap(value)) : facts[key] = _BG__95Json_95unwrap(value);
        continue;
      }

      var subFacts = facts[tag] || (facts[tag] = {});
      tag === "a3" && key === "class" ? _Bg__95VirtualDom_95addClass(subFacts, key, value) : subFacts[key] = value;
    }

    return facts;
  };

  var _Bg__95VirtualDom_95addClass = function (object, key, newClass) {
    var classes = object[key];
    object[key] = classes ? classes + " " + newClass : newClass;
  };

  var _DB__95VirtualDom_95render = function (vNode, eventNode) {
    var tag = vNode.$;

    if (tag === 5) {
      return _DB__95VirtualDom_95render(vNode.k || (vNode.k = vNode.m()), eventNode);
    }

    if (tag === 0) {
      return _Df__95Browser_95doc.createTextNode(vNode.a);
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

      var domNode = _DB__95VirtualDom_95render(subNode, subEventRoot);

      domNode.elm_event_node_ref = subEventRoot;
      return domNode;
    }

    if (tag === 3) {
      var domNode = vNode.h(vNode.g);

      _DA__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

      return domNode;
    } // at this point `tag` must be 1 or 2


    var domNode = vNode.f ? _Df__95Browser_95doc.createElementNS(vNode.f, vNode.c) : _Df__95Browser_95doc.createElement(vNode.c);

    if (void 0) {
      domNode.addEventListener("click", (void 0)(domNode));
    }

    _DA__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

    for (var kids = vNode.e, i = 0; i < kids.length; i++) {
      _E3__95VirtualDom_95appendChild(domNode, _DB__95VirtualDom_95render(tag === 1 ? kids[i] : kids[i].b, eventNode));
    }

    return domNode;
  };

  var _DA__95VirtualDom_95applyFacts = function (domNode, eventNode, facts) {
    for (var key in facts) {
      var value = facts[key];
      key === "a1" ? _Du__95VirtualDom_95applyStyles(domNode, value) : key === "a0" ? _Dv__95VirtualDom_95applyEvents(domNode, eventNode, value) : key === "a3" ? _Dw__95VirtualDom_95applyAttrs(domNode, value) : key === "a4" ? _Dx__95VirtualDom_95applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
    }
  };

  var _Du__95VirtualDom_95applyStyles = function (domNode, styles) {
    var domNodeStyle = domNode.style;

    for (var key in styles) {
      domNodeStyle[key] = styles[key];
    }
  };

  var _Dw__95VirtualDom_95applyAttrs = function (domNode, attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
    }
  };

  var _Dx__95VirtualDom_95applyAttrsNS = function (domNode, nsAttrs) {
    for (var key in nsAttrs) {
      var pair = nsAttrs[key];
      var namespace = pair.f;
      var value = pair.o;
      typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
    }
  };

  var _Dv__95VirtualDom_95applyEvents = function (domNode, eventNode, events) {
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

      oldCallback = _Ea__95VirtualDom_95makeCallback(eventNode, newHandler);
      domNode.addEventListener(key, oldCallback, void 0);
      allCallbacks[key] = oldCallback;
    }
  };

  var _Ea__95VirtualDom_95makeCallback = function (eventNode, initialHandler) {
    function callback(event) {
      var handler = callback.q;

      var result = _BJ__95Json_95runHelp(handler.a, event);

      if (!_Aj__36elm_36core_36Result_36isOk(result)) {
        return;
      }

      var tag = _Ed__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt(handler); // 0 = Normal
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

  var _h__95VirtualDom_95diff = function (x, y) {
    var patches = [];

    _B2__95VirtualDom_95diffHelp(x, y, patches, 0);

    return patches;
  };

  var _Bj__95VirtualDom_95pushPatch = function (patches, type, index, data) {
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

  var _B2__95VirtualDom_95diffHelp = function (x, y, patches, index) {
    if (x === y) {
      return;
    }

    var xType = x.$;
    var yType = y.$; // Bail if you run into different types of nodes. Implies that the
    // structure has changed significantly and it's not worth a diff.

    if (xType !== yType) {
      if (xType === 1 && yType === 2) {
        y = _Bi__95VirtualDom_95dekey(y);
        yType = 1;
      } else {
        _Bj__95VirtualDom_95pushPatch(patches, 0, index, y);

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

        _B2__95VirtualDom_95diffHelp(x.k, y.k, subPatches, 0);

        subPatches.length > 0 && _Bj__95VirtualDom_95pushPatch(patches, 1, index, subPatches);
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
          _Bj__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        } // check if taggers are "the same"


        if (nesting ? !_Bk__95VirtualDom_95pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
          _Bj__95VirtualDom_95pushPatch(patches, 2, index, yTaggers);
        } // diff everything below the taggers


        _B2__95VirtualDom_95diffHelp(xSubNode, ySubNode, patches, index + 1);

        return;

      case 0:
        if (x.a !== y.a) {
          _Bj__95VirtualDom_95pushPatch(patches, 3, index, y.a);
        }

        return;

      case 1:
        _Bl__95VirtualDom_95diffNodes(x, y, patches, index, _Bm__95VirtualDom_95diffKids);

        return;

      case 2:
        _Bl__95VirtualDom_95diffNodes(x, y, patches, index, _Bn__95VirtualDom_95diffKeyedKids);

        return;

      case 3:
        if (x.h !== y.h) {
          _Bj__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        }

        var factsDiff = _Bo__95VirtualDom_95diffFacts(x.d, y.d);

        factsDiff && _Bj__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
        var patch = y.i(x.g, y.g);
        patch && _Bj__95VirtualDom_95pushPatch(patches, 5, index, patch);
        return;
    }
  };

  var _Bk__95VirtualDom_95pairwiseRefEqual = function (as, bs) {
    for (var i = 0; i < as.length; i++) {
      if (as[i] !== bs[i]) {
        return false;
      }
    }

    return true;
  };

  var _Bl__95VirtualDom_95diffNodes = function (x, y, patches, index, diffKids) {
    // Bail if obvious indicators have changed. Implies more serious
    // structural changes such that it's not worth it to diff.
    if (x.c !== y.c || x.f !== y.f) {
      _Bj__95VirtualDom_95pushPatch(patches, 0, index, y);

      return;
    }

    var factsDiff = _Bo__95VirtualDom_95diffFacts(x.d, y.d);

    factsDiff && _Bj__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
    diffKids(x, y, patches, index);
  };

  var _Bo__95VirtualDom_95diffFacts = function (x, y, category) {
    var diff; // look for changes and removals

    for (var xKey in x) {
      if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
        var subDiff = _Bo__95VirtualDom_95diffFacts(x[xKey], y[xKey] || {}, xKey);

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

      if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _Cm__95VirtualDom_95equalEvents(xValue, yValue)) {
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

  var _Bm__95VirtualDom_95diffKids = function (xParent, yParent, patches, index) {
    var xKids = xParent.e;
    var yKids = yParent.e;
    var xLen = xKids.length;
    var yLen = yKids.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

    if (xLen > yLen) {
      _Bj__95VirtualDom_95pushPatch(patches, 6, index, {
        v: yLen,
        i: xLen - yLen
      });
    } else if (xLen < yLen) {
      _Bj__95VirtualDom_95pushPatch(patches, 7, index, {
        v: xLen,
        e: yKids
      });
    } // PAIRWISE DIFF EVERYTHING ELSE


    for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
      var xKid = xKids[i];

      _B2__95VirtualDom_95diffHelp(xKid, yKids[i], patches, ++index);

      index += xKid.b || 0;
    }
  };

  var _Bn__95VirtualDom_95diffKeyedKids = function (xParent, yParent, patches, rootIndex) {
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

        _B2__95VirtualDom_95diffHelp(xNode, yNode, localPatches, index);

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

        _B2__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        _Ck__95VirtualDom_95insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _Cl__95VirtualDom_95removeNode(changes, localPatches, xKey, xNextNode, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 2;
        continue;
      } // insert y


      if (newMatch) {
        index++;

        _Ck__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        _B2__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        index += xNode.b || 0;
        xIndex += 1;
        yIndex += 2;
        continue;
      } // remove x


      if (oldMatch) {
        index++;

        _Cl__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        index += xNode.b || 0;
        index++;

        _B2__95VirtualDom_95diffHelp(xNextNode, yNode, localPatches, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 1;
        continue;
      } // remove x, insert y


      if (xNext && xNextKey === yNextKey) {
        index++;

        _Cl__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        _Ck__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _B2__95VirtualDom_95diffHelp(xNextNode, yNextNode, localPatches, index);

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

      _Cl__95VirtualDom_95removeNode(changes, localPatches, x.a, xNode, index);

      index += xNode.b || 0;
      xIndex++;
    }

    while (yIndex < yLen) {
      var endInserts = endInserts || [];
      var y = yKids[yIndex];

      _Ck__95VirtualDom_95insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);

      yIndex++;
    }

    if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
      _Bj__95VirtualDom_95pushPatch(patches, 8, rootIndex, {
        w: localPatches,
        x: inserts,
        y: endInserts
      });
    }
  };

  var _Ck__95VirtualDom_95insertNode = function (changes, localPatches, key, vnode, yIndex, inserts) {
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

      _B2__95VirtualDom_95diffHelp(entry.z, vnode, subPatches, entry.r);

      entry.r = yIndex;
      entry.s.s = {
        w: subPatches,
        A: entry
      };
      return;
    } // this key has already been inserted or moved, a duplicate!


    _Ck__95VirtualDom_95insertNode(changes, localPatches, key + "_elmW6BL", vnode, yIndex, inserts);
  };

  var _Cl__95VirtualDom_95removeNode = function (changes, localPatches, key, vnode, index) {
    var entry = changes[key]; // never seen this key before

    if (!entry) {
      var patch = _Bj__95VirtualDom_95pushPatch(localPatches, 9, index, undefined);

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

      _B2__95VirtualDom_95diffHelp(vnode, entry.z, subPatches, index);

      _Bj__95VirtualDom_95pushPatch(localPatches, 9, index, {
        w: subPatches,
        A: entry
      });

      return;
    } // this key has already been removed or moved, a duplicate!


    _Cl__95VirtualDom_95removeNode(changes, localPatches, key + "_elmW6BL", vnode, index);
  };

  var _B3__95VirtualDom_95addDomNodes = function (domNode, vNode, patches, eventNode) {
    _Bp__95VirtualDom_95addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
  };

  var _Bp__95VirtualDom_95addDomNodesHelp = function (domNode, vNode, patches, i, low, high, eventNode) {
    var patch = patches[i];
    var index = patch.r;

    while (index === low) {
      var patchType = patch.$;

      if (patchType === 1) {
        _B3__95VirtualDom_95addDomNodes(domNode, vNode.k, patch.s, eventNode);
      } else if (patchType === 8) {
        patch.t = domNode;
        patch.u = eventNode;
        var subPatches = patch.s.w;

        if (subPatches.length > 0) {
          _Bp__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
        }
      } else if (patchType === 9) {
        patch.t = domNode;
        patch.u = eventNode;
        var data = patch.s;

        if (data) {
          data.A.s = domNode;
          var subPatches = data.w;

          if (subPatches.length > 0) {
            _Bp__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
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

      return _Bp__95VirtualDom_95addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
    } // tag must be 1 or 2 at this point


    var vKids = vNode.e;
    var childNodes = domNode.childNodes;

    for (var j = 0; j < vKids.length; j++) {
      low++;
      var vKid = tag === 1 ? vKids[j] : vKids[j].b;
      var nextLow = low + (vKid.b || 0);

      if (low <= index && index <= nextLow) {
        i = _Bp__95VirtualDom_95addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);

        if (!(patch = patches[i]) || (index = patch.r) > high) {
          return i;
        }
      }

      low = nextLow;
    }

    return i;
  };

  var _i__95VirtualDom_95applyPatches = function (rootDomNode, oldVirtualNode, patches, eventNode) {
    if (patches.length === 0) {
      return rootDomNode;
    }

    _B3__95VirtualDom_95addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);

    return _BI__95VirtualDom_95applyPatchesHelp(rootDomNode, patches);
  };

  var _BI__95VirtualDom_95applyPatchesHelp = function (rootDomNode, patches) {
    for (var i = 0; i < patches.length; i++) {
      var patch = patches[i];
      var localDomNode = patch.t;

      var newNode = _Bz__95VirtualDom_95applyPatch(localDomNode, patch);

      if (localDomNode === rootDomNode) {
        rootDomNode = newNode;
      }
    }

    return rootDomNode;
  };

  var _Bz__95VirtualDom_95applyPatch = function (domNode, patch) {
    switch (patch.$) {
      case 0:
        return _D5__95VirtualDom_95applyPatchRedraw(domNode, patch.s, patch.u);

      case 4:
        _DA__95VirtualDom_95applyFacts(domNode, patch.u, patch.s);

        return domNode;

      case 3:
        domNode.replaceData(0, domNode.length, patch.s);
        return domNode;

      case 1:
        return _BI__95VirtualDom_95applyPatchesHelp(domNode, patch.s);

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
          domNode.insertBefore(_DB__95VirtualDom_95render(kids[i], patch.u), theEnd);
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

        entry.s = _BI__95VirtualDom_95applyPatchesHelp(domNode, data.w);
        return domNode;

      case 8:
        return _DC__95VirtualDom_95applyPatchReorder(domNode, patch);

      case 5:
        return patch.s(domNode);

      default:
        _Ag__95Debug_95crash(10);

      // 'Ran into an unknown patch!'
    }
  };

  var _D5__95VirtualDom_95applyPatchRedraw = function (domNode, vNode, eventNode) {
    var parentNode = domNode.parentNode;

    var newNode = _DB__95VirtualDom_95render(vNode, eventNode);

    if (!newNode.elm_event_node_ref) {
      newNode.elm_event_node_ref = domNode.elm_event_node_ref;
    }

    if (parentNode && newNode !== domNode) {
      parentNode.replaceChild(newNode, domNode);
    }

    return newNode;
  };

  var _DC__95VirtualDom_95applyPatchReorder = function (domNode, patch) {
    var data = patch.s; // remove end inserts

    var frag = _E4__95VirtualDom_95applyPatchReorderEndInsertsHelp(data.y, patch); // removals


    domNode = _BI__95VirtualDom_95applyPatchesHelp(domNode, data.w); // inserts

    var inserts = data.x;

    for (var i = 0; i < inserts.length; i++) {
      var insert = inserts[i];
      var entry = insert.A;
      var node = entry.c === 2 ? entry.s : _DB__95VirtualDom_95render(entry.z, patch.u);
      domNode.insertBefore(node, domNode.childNodes[insert.r]);
    } // add end inserts


    if (frag) {
      _E3__95VirtualDom_95appendChild(domNode, frag);
    }

    return domNode;
  };

  var _E4__95VirtualDom_95applyPatchReorderEndInsertsHelp = function (endInserts, patch) {
    if (!endInserts) {
      return;
    }

    var frag = _Df__95Browser_95doc.createDocumentFragment();

    for (var i = 0; i < endInserts.length; i++) {
      var insert = endInserts[i];
      var entry = insert.A;

      _E3__95VirtualDom_95appendChild(frag, entry.c === 2 ? entry.s : _DB__95VirtualDom_95render(entry.z, patch.u));
    }

    return frag;
  };

  var _f__95VirtualDom_95virtualize = function (node) {
    // TEXT NODES
    if (node.nodeType === 3) {
      return _Ab__36elm_36html_36Html_36text(node.textContent);
    } // WEIRD NODES


    if (node.nodeType !== 1) {
      return _Ab__36elm_36html_36Html_36text("");
    } // ELEMENT NODES


    var attrList = _T_r3;
    var attrs = node.attributes;

    for (var i = attrs.length; i--;) {
      var attr = attrs[i];
      var name = attr.name;
      var value = attr.value;
      attrList = _Ax__95List_95Cons(_Ay__95VirtualDom_95attribute_95raw(name, value), attrList);
    }

    var tag = node.tagName.toLowerCase();
    var kidList = _T_r3;
    var kids = node.childNodes;

    for (var i = kids.length; i--;) {
      kidList = _Ax__95List_95Cons(_f__95VirtualDom_95virtualize(kids[i]), kidList);
    }

    return _Az_A3(_B0__95VirtualDom_95node, tag, attrList, kidList);
  };

  var _Bi__95VirtualDom_95dekey = function (keyedNode) {
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

  var _g__95Browser_95makeAnimator = function (model, draw) {
    draw(model);
    var state = 0;

    function updateIfNeeded() {
      state = state === 1 ? 0 : (_B1__95Browser_95requestAnimationFrame(updateIfNeeded), draw(model), 1);
    }

    return function (nextModel, isSync) {
      model = nextModel;
      isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _B1__95Browser_95requestAnimationFrame(updateIfNeeded), state = 2);
    };
  };

  var _FF__95Utils_95compare_95raw = function (x, y) {
    var n = _DM__95Utils_95cmp(x, y);

    return n < 0 ? 0 : n ? 2 : 1;
  };

  var _Ek__95List_95map2_95raw = function (f, xs, ys) {
    for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
    {
      arr.push(_Ak_A2(f, xs.a, ys.a));
    }

    return _Ce__95List_95fromArray(arr);
  };

  var _E6__95JsArray_95initialize_95raw = function (size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  };

  var _Fd__95JsArray_95initializeFromList_95raw = function (max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _Al__95Utils_95Tuple2(result, ls);
  };

  var _DS__95Basics_95modBy_95raw = function (modulus, x) {
    var answer = x % modulus;
    return modulus === 0 ? _Ag__95Debug_95crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
  };

  var _Ds__95Json_95addField_95raw = function (key, value, object) {
    object[key] = _BG__95Json_95unwrap(value);
    return object;
  };

  var _EY__36elm_36core_36Dict_36foldr_95raw = function (func, acc, t) {
    foldr: while (true) {
      if (t.$ === -2) {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;

        var $temp$func = func,
            $temp$acc = _Az_A3(func, key, value, _EY__36elm_36core_36Dict_36foldr_95raw(func, acc, right)),
            $temp$t = left;

        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
  };

  var _An__36elm_36core_36List_36foldl_95raw = function (func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;

        var $temp$func = func,
            $temp$acc = _Ak_A2(func, x, acc),
            $temp$list = xs;

        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  };

  var _Fe__36elm_36core_36Array_36compressNodes_95raw = function (nodes, acc) {
    compressNodes: while (true) {
      var _v0 = _Fd__95JsArray_95initializeFromList_95raw(32, nodes);

      var node = _v0.a;
      var remainingNodes = _v0.b;

      var newAcc = _Ax__95List_95Cons(_Fv__36elm_36core_36Array_36SubTree(node), acc);

      if (!remainingNodes.b) {
        return _CA__36elm_36core_36List_36reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
            $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  };

  var _FD__36elm_36core_36Array_36treeFromBuilder_95raw = function (nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = _Fc__36elm_36core_36Basics_36ceiling(nodeListSize / 32);

      if (newNodeSize === 1) {
        return _Fd__95JsArray_95initializeFromList_95raw(32, nodeList).a;
      } else {
        var $temp$nodeList = _Fe__36elm_36core_36Array_36compressNodes_95raw(nodeList, _T_r3),
            $temp$nodeListSize = newNodeSize;

        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  };

  var _Ep__36elm_36core_36Array_36builderToArray_95raw = function (reverseNodeList, builder) {
    if (!builder.l) {
      return _F9__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_FA__36elm_36core_36Elm_36JsArray_36length(builder.n), 5, _Dl__36elm_36core_36Elm_36JsArray_36empty, builder.n);
    } else {
      var treeLen = builder.l * 32;

      var depth = _Ec__36elm_36core_36Basics_36floor(_FC__36elm_36core_36Basics_36logBase_95raw(32, treeLen - 1));

      var correctNodeList = reverseNodeList ? _CA__36elm_36core_36List_36reverse(builder.o) : builder.o;

      var tree = _FD__36elm_36core_36Array_36treeFromBuilder_95raw(correctNodeList, builder.l);

      return _F9__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_FA__36elm_36core_36Elm_36JsArray_36length(builder.n) + treeLen, _FE__36elm_36core_36Basics_36max_95raw(5, depth * 5), tree, builder.n);
    }
  };

  var _E7__36elm_36core_36Array_36initializeHelp_95raw = function (fn, fromIndex, len, nodeList, tail) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return _Ep__36elm_36core_36Array_36builderToArray_95raw(false, {
          o: nodeList,
          l: len / 32 | 0,
          n: tail
        });
      } else {
        var leaf = _Eq__36elm_36core_36Array_36Leaf(_E6__95JsArray_95initialize_95raw(32, fromIndex, fn));

        var $temp$fn = fn,
            $temp$fromIndex = fromIndex - 32,
            $temp$len = len,
            $temp$nodeList = _Ax__95List_95Cons(leaf, nodeList),
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

  var _DG__36elm_36core_36Array_36initialize_95raw = function (len, fn) {
    if (len <= 0) {
      return _Dh__36elm_36core_36Array_36empty;
    } else {
      var tailLen = len % 32;

      var tail = _E6__95JsArray_95initialize_95raw(tailLen, len - tailLen, fn);

      var initialFromIndex = len - tailLen - 32;
      return _E7__36elm_36core_36Array_36initializeHelp_95raw(fn, initialFromIndex, len, _T_r3, tail);
    }
  };

  var _Aj__36elm_36core_36Result_36isOk = function (result) {
    if (!result.$) {
      return true;
    } else {
      return false;
    }
  };

  var _Ed__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt = function (handler) {
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

  var _Da__36elm_36core_36List_36foldrHelper_95raw = function (fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;

      if (!r1.b) {
        return _Ak_A2(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;

        if (!r2.b) {
          return _Ak_A2(fn, a, _Ak_A2(fn, b, acc));
        } else {
          var c = r2.a;
          var r3 = r2.b;

          if (!r3.b) {
            return _Ak_A2(fn, a, _Ak_A2(fn, b, _Ak_A2(fn, c, acc)));
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res = ctr > 500 ? _An__36elm_36core_36List_36foldl_95raw(fn, acc, _CA__36elm_36core_36List_36reverse(r4)) : _Da__36elm_36core_36List_36foldrHelper_95raw(fn, acc, ctr + 1, r4);
            return _Ak_A2(fn, a, _Ak_A2(fn, b, _Ak_A2(fn, c, _Ak_A2(fn, d, res))));
          }
        }
      }
    }
  };

  var _Db__36elm_36core_36Task_36spawnCmd_95raw = function (router, _v0) {
    var task = _v0;
    return _EN__95Scheduler_95spawn(_CI__95Scheduler_95andThen_95raw(_EO__36elm_36core_36Platform_36sendToApp(router), task));
  };

  var _Bw__36elm_36core_36Task_36cmdMap_95raw = function (tagger, _v0) {
    var task = _v0;
    return _CH__36elm_36core_36Task_36map_95raw(tagger, task);
  };

  var _CW__36elm_36core_36List_36any_95raw = function (isOkay, list) {
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

  var _DY__36elm_36core_36Dict_36foldl_95raw = function (func, acc, dict) {
    foldl: while (true) {
      if (dict.$ === -2) {
        return acc;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var $temp$func = func,
            $temp$acc = _Az_A3(func, key, value, _DY__36elm_36core_36Dict_36foldl_95raw(func, acc, left)),
            $temp$dict = right;

        func = $temp$func;
        acc = $temp$acc;
        dict = $temp$dict;
        continue foldl;
      }
    }
  };

  var _CV__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count = function (_v0) {
    var samples = _v0;
    return _DY__36elm_36core_36Dict_36foldl_95raw(_Cd_F3((_v1, times, acc) => _DZ__36elm_36core_36List_36length(times) + acc), 0, samples);
  };

  var _BQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress = function (status) {
    switch (status.$) {
      case 0:
        return 0;

      case 1:
        return 0;

      case 2:
        var samples = status.b;
        return _CU__36elm_36core_36Basics_36clamp_95raw(0, 1, _CV__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples) / (25 * 5));

      case 3:
        return 1;

      default:
        return 1;
    }
  };

  var _As__36elm_95explorations_36benchmark_36Benchmark_36done = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var status = benchmark_.c;
        return _BQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status) === 1;

      case 1:
        var benchmarks = benchmark_.b;
        return _BR__36elm_36core_36List_36all_95raw(_BS__36elm_36core_36Basics_36eq(1), _BU__36elm_36core_36List_36map_95raw(_BQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress, _BU__36elm_36core_36List_36map_95raw(function (_v1) {
          var status = _v1.c;
          return status;
        }, benchmarks)));

      default:
        var benchmarks = benchmark_.b;
        return _BR__36elm_36core_36List_36all_95raw(_As__36elm_95explorations_36benchmark_36Benchmark_36done, benchmarks);
    }
  };

  var _Ff__36elm_36core_36Dict_36balance_95raw = function (color, key, value, left, right) {
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
        return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, lK, lV, lLeft, lRight), _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rLeft, rRight));
      } else {
        return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, rK, rV, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, left, rLeft), rRight);
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
        return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, key, value, lRight, right));
      } else {
        return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, left, right);
      }
    }
  };

  var _FG__36elm_36core_36Dict_36insertHelp_95raw = function (key, value, dict) {
    if (dict.$ === -2) {
      return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty);
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;

      var _v1 = _FF__95Utils_95compare_95raw(key, nKey);

      switch (_v1) {
        case 0:
          return _Ff__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _FG__36elm_36core_36Dict_36insertHelp_95raw(key, value, nLeft), nRight);

        case 1:
          return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(nColor, nKey, value, nLeft, nRight);

        default:
          return _Ff__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, nLeft, _FG__36elm_36core_36Dict_36insertHelp_95raw(key, value, nRight));
      }
    }
  };

  var _Ew__36elm_36core_36Dict_36insert_95raw = function (key, value, dict) {
    var _v0 = _FG__36elm_36core_36Dict_36insertHelp_95raw(key, value, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _Dz__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0 = function (_v0) {
    var precalculated = _v0.a;
    return precalculated;
  };

  var _Fs__36elm_36core_36Dict_36map_95raw = function (func, dict) {
    if (dict.$ === -2) {
      return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, _Ak_A2(func, key, value), _Fs__36elm_36core_36Dict_36map_95raw(func, left), _Fs__36elm_36core_36Dict_36map_95raw(func, right));
    }
  };

  var _FM__36elm_36core_36Result_36map_95raw = function (func, ra) {
    if (!ra.$) {
      var a = ra.a;
      return _C2__36elm_36core_36Result_36Ok(func(a));
    } else {
      var e = ra.a;
      return _C7__36elm_36core_36Result_36Err(e);
    }
  };

  var _Ft__36elm_36core_36List_36partition_95raw = function (pred, list) {
    var step = _Cc_F2(function (x, _v0) {
      var trues = _v0.a;
      var falses = _v0.b;
      return pred(x) ? _Al__95Utils_95Tuple2(_Ax__95List_95Cons(x, trues), falses) : _Al__95Utils_95Tuple2(trues, _Ax__95List_95Cons(x, falses));
    });

    return _Cb__36elm_36core_36List_36foldr_95raw(step, _Al__95Utils_95Tuple2(_T_r3, _T_r3), list);
  };

  var _F3__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw = function (_v0, x) {
    var slope = _v0.aR;
    var intercept = _v0.aL;
    return slope * x + intercept;
  };

  var _G3__36elm_36core_36Result_36fromMaybe_95raw = function (err, maybe) {
    if (!maybe.$) {
      var v = maybe.a;
      return _C2__36elm_36core_36Result_36Ok(v);
    } else {
      return _C7__36elm_36core_36Result_36Err(err);
    }
  };

  var _G4__36elm_36core_36Maybe_36map3_95raw = function (func, ma, mb, mc) {
    if (ma.$ === 1) {
      return _ET__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _ET__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;

        if (mc.$ === 1) {
          return _ET__36elm_36core_36Maybe_36Nothing;
        } else {
          var c = mc.a;
          return _EI__36elm_36core_36Maybe_36Just(_Az_A3(func, a, b, c));
        }
      }
    }
  };

  var _G9__36elm_36core_36Maybe_36andThen_95raw = function (callback, maybeValue) {
    if (!maybeValue.$) {
      var value = maybeValue.a;
      return callback(value);
    } else {
      return _ET__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _GC__36elm_36core_36Maybe_36map_95raw = function (f, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return _EI__36elm_36core_36Maybe_36Just(f(value));
    } else {
      return _ET__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _GD__36elm_36core_36Maybe_36map2_95raw = function (func, ma, mb) {
    if (ma.$ === 1) {
      return _ET__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _ET__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;
        return _EI__36elm_36core_36Maybe_36Just(_Ak_A2(func, a, b));
      }
    }
  };

  var _GG__36elm_36core_36List_36drop_95raw = function (n, list) {
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

  var _GF__36elm_36core_36List_36head = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _EI__36elm_36core_36Maybe_36Just(x);
    } else {
      return _ET__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean = function (numbers) {
    if (!numbers.b) {
      return _C7__36elm_36core_36Result_36Err(_F8__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(1));
    } else {
      return _C2__36elm_36core_36Result_36Ok(_Ej__36elm_36core_36List_36sum(numbers) / _DZ__36elm_36core_36List_36length(numbers));
    }
  };

  var _GL__36elm_36core_36List_36takeReverse_95raw = function (n, list, kept) {
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
              $temp$kept = _Ax__95List_95Cons(x, kept);

          n = $temp$n;
          list = $temp$list;
          kept = $temp$kept;
          continue takeReverse;
        }
      }
    }
  };

  var _GJ__36elm_36core_36List_36takeFast_95raw = function (ctr, n, list) {
    if (n <= 0) {
      return _T_r3;
    } else {
      var _v0 = _Al__95Utils_95Tuple2(n, list);

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
                      b: _T_r3
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
                          b: _T_r3
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
                    return ctr > 1000 ? _Ax__95List_95Cons(x, _Ax__95List_95Cons(y, _Ax__95List_95Cons(z, _Ax__95List_95Cons(w, _GK__36elm_36core_36List_36takeTailRec_95raw(n - 4, tl))))) : _Ax__95List_95Cons(x, _Ax__95List_95Cons(y, _Ax__95List_95Cons(z, _Ax__95List_95Cons(w, _GJ__36elm_36core_36List_36takeFast_95raw(ctr + 1, n - 4, tl)))));
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
        b: _T_r3
      };
    }
  };

  var _GH__36elm_36core_36Result_36toMaybe = function (result) {
    if (!result.$) {
      var v = result.a;
      return _EI__36elm_36core_36Maybe_36Just(v);
    } else {
      return _ET__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _G8__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw = function (k, xs) {
    var index = _DZ__36elm_36core_36List_36length(xs) * k;
    return !(index - _Ec__36elm_36core_36Basics_36floor(index)) ? _GF__36elm_36core_36List_36head(_GG__36elm_36core_36List_36drop_95raw(_Fc__36elm_36core_36Basics_36ceiling(index) - 1, xs)) : _GH__36elm_36core_36Result_36toMaybe(_Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_GI__36elm_36core_36List_36take_95raw(2, _GG__36elm_36core_36List_36drop_95raw(_Ec__36elm_36core_36Basics_36floor(index) - 1, xs))));
  };

  var _G6__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw = function (pct, slopes, points) {
    var slope = _G8__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(pct, slopes);

    var intercept = _G9__36elm_36core_36Maybe_36andThen_95raw(_GA__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile(pct), _GC__36elm_36core_36Maybe_36map_95raw(_Fz__36elm_36core_36List_36sort, _GC__36elm_36core_36Maybe_36map_95raw(m => _BU__36elm_36core_36List_36map_95raw(function (_v0) {
      var x = _v0.a;
      var y = _v0.b;
      return y - m * x;
    }, points), slope)));

    return _GD__36elm_36core_36Maybe_36map2_95raw(_FP__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slope, intercept);
  };

  var _Fu__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust = function (values) {
    if (!values.b) {
      return _C7__36elm_36core_36Result_36Err(_F8__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _C7__36elm_36core_36Result_36Err(_F8__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var slopes = _Fz__36elm_36core_36List_36sort(_An__36elm_36core_36List_36foldl_95raw(_Cc_F2(function (_v1, acc1) {
          var x = _v1.a;
          var y = _v1.b;
          return _An__36elm_36core_36List_36foldl_95raw(_Cc_F2(function (_v2, acc2) {
            var x1 = _v2.a;
            var y1 = _v2.b;
            var res = (y - y1) / (x - x1);
            return _Fm__36elm_36core_36Basics_36isNaN(res) ? acc2 : _Ax__95List_95Cons(res, acc2);
          }), acc1, values);
        }), _T_r3, values));

        var finiteSlopes = _G0__36elm_36core_36List_36filter_95raw(_Ak_A2(_CX__36elm_36core_36Basics_36composeL, _CZ__36elm_36core_36Basics_36not, _G1__36elm_36core_36Basics_36isInfinite), slopes);

        return _G3__36elm_36core_36Result_36fromMaybe_95raw(_FY__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros, _G4__36elm_36core_36Maybe_36map3_95raw(_Cd_F3((trendLine, lower, upper) => _FN__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, _G5__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw(lower, upper))), _G6__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.5, finiteSlopes, values), _G6__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.975, slopes, values), _G6__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.025, slopes, values)));
      }
    }
  };

  var _Eh__36elm_36core_36Result_36withDefault_95raw = function (def, result) {
    if (!result.$) {
      var a = result.a;
      return a;
    } else {
      return def;
    }
  };

  var _FU__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups = function (_v0) {
    var samples = _v0;
    return _Eh__36elm_36core_36Result_36withDefault_95raw(_Al__95Utils_95Tuple2(samples, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty), _FM__36elm_36core_36Result_36map_95raw(_Ak_A2(_Fq__36elm_36core_36Dict_36foldl, _Cd_F3(function (key, _v1, _v2) {
      var good = _v1.a;
      var outliers = _v1.b;
      var accGood = _v2.a;
      var accOutliers = _v2.b;
      return _Al__95Utils_95Tuple2(_Ew__36elm_36core_36Dict_36insert_95raw(key, good, accGood), _Ew__36elm_36core_36Dict_36insert_95raw(key, outliers, accOutliers));
    }), _Al__95Utils_95Tuple2(_Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty)), _FM__36elm_36core_36Result_36map_95raw(line => _Fs__36elm_36core_36Dict_36map_95raw(_Cc_F2(function (sampleSize, values) {
      var predicted = _F3__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(line, sampleSize);

      var upperBound = predicted * 1.1;
      var lowerBound = predicted / 1.1;
      return _Ft__36elm_36core_36List_36partition_95raw(v => _DM__95Utils_95cmp(lowerBound, v) < 0 && _DM__95Utils_95cmp(v, upperBound) < 0, values);
    }), samples), _FM__36elm_36core_36Result_36map_95raw(_Dz__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, _Fu__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust(_FS__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify(samples))))));
  };

  var _FT__36elm_36core_36Tuple_36mapFirst_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _Al__95Utils_95Tuple2(func(x), y);
  };

  var _FR__36elm_36core_36Tuple_36mapSecond_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _Al__95Utils_95Tuple2(x, func(y));
  };

  var _Fl__36elm_36core_36Result_36andThen_95raw = function (callback, result) {
    if (!result.$) {
      var value = result.a;
      return callback(value);
    } else {
      var msg = result.a;
      return _C7__36elm_36core_36Result_36Err(msg);
    }
  };

  var _FO__36elm_36core_36Result_36map2_95raw = function (func, ra, rb) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _C7__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _C7__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;
        return _C2__36elm_36core_36Result_36Ok(_Ak_A2(func, a, b));
      }
    }
  };

  var _FL__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev = function (numbers) {
    var helper = seriesMean => _FM__36elm_36core_36Result_36map_95raw(_Fn__36elm_36core_36Basics_36sqrt, _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_BU__36elm_36core_36List_36map_95raw(n => _Ak_A2(_El__36elm_36core_36Basics_36pow, n - seriesMean, 2), numbers)));

    return _Fl__36elm_36core_36Result_36andThen_95raw(helper, _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(numbers));
  };

  var _Ee__36elm_36core_36List_36unzip = function (pairs) {
    var step_raw = function (_v0, _v1) {
      var x = _v0.a;
      var y = _v0.b;
      var xs = _v1.a;
      var ys = _v1.b;
      return _Al__95Utils_95Tuple2(_Ax__95List_95Cons(x, xs), _Ax__95List_95Cons(y, ys));
    },
        step = _Cc_F2(step_raw);

    return _Cb__36elm_36core_36List_36foldr_95raw(step, _Al__95Utils_95Tuple2(_T_r3, _T_r3), pairs);
  };

  var _FK__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation = function (values) {
    if (!values.b) {
      return _C7__36elm_36core_36Result_36Err(_F8__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _C7__36elm_36core_36Result_36Err(_F8__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var standardize_raw = (meanResult, stddevResult, series) => _FO__36elm_36core_36Result_36map2_95raw(_Cc_F2((meanValue, stddevValue) => _BU__36elm_36core_36List_36map_95raw(point => (point - meanValue) / stddevValue, series)), meanResult, stddevResult),
            standardize = _Cd_F3(standardize_raw);

        var _v1 = _Ee__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var summedProduct = _FM__36elm_36core_36Result_36map_95raw(_Ej__36elm_36core_36List_36sum, _FO__36elm_36core_36Result_36map2_95raw(_Cc_F2((stdX, stdY) => _Ek__95List_95map2_95raw(_Fj__36elm_36core_36Basics_36mul, stdX, stdY)), standardize_raw(_Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs), _FL__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs), xs), standardize_raw(_Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), _FL__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), ys)));

        return _Fl__36elm_36core_36Result_36andThen_95raw(val => _Fm__36elm_36core_36Basics_36isNaN(val) ? _C7__36elm_36core_36Result_36Err(_FY__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros) : _C2__36elm_36core_36Result_36Ok(val), _FM__36elm_36core_36Result_36map_95raw(sum => sum / _DZ__36elm_36core_36List_36length(values), summedProduct));
      }
    }
  };

  var _FJ__36elm_36core_36Result_36map3_95raw = function (func, ra, rb, rc) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _C7__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _C7__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;

        if (rc.$ === 1) {
          var x = rc.a;
          return _C7__36elm_36core_36Result_36Err(x);
        } else {
          var c = rc.a;
          return _C2__36elm_36core_36Result_36Ok(_Az_A3(func, a, b, c));
        }
      }
    }
  };

  var _Ey__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick = function (values) {
    if (!values.b) {
      return _C7__36elm_36core_36Result_36Err(_F8__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _C7__36elm_36core_36Result_36Err(_F8__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var _v1 = _Ee__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var slopeResult = _FJ__36elm_36core_36Result_36map3_95raw(_Cd_F3((correl, stddevY, stddevX) => correl * stddevY / stddevX), _FK__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation(values), _FL__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), _FL__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs));

        var intercept = _FJ__36elm_36core_36Result_36map3_95raw(_Cd_F3((meanY, slope, meanX) => meanY - slope * meanX), _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), slopeResult, _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs));

        return _FM__36elm_36core_36Result_36map_95raw(trendLine => _FN__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, values), _FO__36elm_36core_36Result_36map2_95raw(_FP__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slopeResult, intercept));
      }
    }
  };

  var _DU__36elm_95explorations_36benchmark_36Benchmark_36finalize = function (samples) {
    var _v0 = _EJ__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend(samples);

    if (!_v0.$) {
      var trend = _v0.a;
      return _EK__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw(samples, trend);
    } else {
      var err = _v0.a;
      return _DN__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure(_EL__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError(err));
    }
  };

  var _EC__36elm_36core_36List_36minimum = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _EI__36elm_36core_36Maybe_36Just(_An__36elm_36core_36List_36foldl_95raw(_Er__36elm_36core_36Basics_36min, x, xs));
    } else {
      return _ET__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _Et__36elm_36core_36List_36repeatHelp_95raw = function (result, n, value) {
    repeatHelp: while (true) {
      if (n <= 0) {
        return result;
      } else {
        var $temp$result = _Ax__95List_95Cons(value, result),
            $temp$n = n - 1,
            $temp$value = value;

        result = $temp$result;
        n = $temp$n;
        value = $temp$value;
        continue repeatHelp;
      }
    }
  };

  var _EG__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize = function (sampleSize) {
    var helper_raw = function (rough, magnitude) {
      helper: while (true) {
        if (rough > 10) {
          var $temp$rough = _Eu__36elm_36core_36Basics_36round(rough / 10),
              $temp$magnitude = magnitude * 10;

          rough = $temp$rough;
          magnitude = $temp$magnitude;
          continue helper;
        } else {
          return rough * magnitude;
        }
      }
    },
        helper = _Cc_F2(helper_raw);

    return helper_raw(sampleSize, 1);
  };

  var _ES__36elm_36core_36Maybe_36withDefault_95raw = function (_default, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  };

  var _DR__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw = function (minimumRuntime, operation_) {
    var sampleSize = i => i * 10;

    var resample = _Cc_F2((iteration, total) => _DM__95Utils_95cmp(total, minimumRuntime) < 0 ? _CI__95Scheduler_95andThen_95raw(resample(iteration + 1), _CH__36elm_36core_36Task_36map_95raw(_Ak_A2(_EA__36elm_36core_36Basics_36composeR, _EC__36elm_36core_36List_36minimum, _ED__36elm_36core_36Maybe_36withDefault(0)), _CQ__36elm_36core_36Task_36sequence(_EF__36elm_36core_36List_36repeat_95raw(3, _DV__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize(iteration), operation_))))) : _D2__36elm_36core_36Task_36succeed(sampleSize(iteration)));

    return _CH__36elm_36core_36Task_36map_95raw(_EG__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize, _Ak_A2(resample, 1, 0));
  };

  var _Ev__36elm_36core_36Dict_36get_95raw = function (targetKey, dict) {
    get: while (true) {
      if (dict.$ === -2) {
        return _ET__36elm_36core_36Maybe_36Nothing;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var _v1 = _FF__95Utils_95compare_95raw(targetKey, key);

        switch (_v1) {
          case 0:
            var $temp$targetKey = targetKey,
                $temp$dict = left;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;

          case 1:
            return _EI__36elm_36core_36Maybe_36Just(value);

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

  var _Fw__36elm_36core_36Dict_36getMin = function (dict) {
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

  var _Fg__36elm_36core_36Dict_36moveRedLeft = function (dict) {
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
        return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rlK, rlV, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), rlL), _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rlR, rRight));
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
          return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _Fy__36elm_36core_36Dict_36moveRedRight = function (dict) {
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
        return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, lRight, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight)));
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
          return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _Fi__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw = function (targetKey, dict, color, key, value, left, right) {
    if (left.$ === -1 && !left.a) {
      var _v1 = left.a;
      var lK = left.b;
      var lV = left.c;
      var lLeft = left.d;
      var lRight = left.e;
      return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, lK, lV, lLeft, _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, lRight, right));
    } else {
      _v2$2: while (true) {
        if (right.$ === -1 && right.a === 1) {
          if (right.d.$ === -1) {
            if (right.d.a === 1) {
              var _v3 = right.a;
              var _v4 = right.d;
              var _v5 = _v4.a;
              return _Fy__36elm_36core_36Dict_36moveRedRight(dict);
            } else {
              break _v2$2;
            }
          } else {
            var _v6 = right.a;
            var _v7 = right.d;
            return _Fy__36elm_36core_36Dict_36moveRedRight(dict);
          }
        } else {
          break _v2$2;
        }
      }

      return dict;
    }
  };

  var _Fx__36elm_36core_36Dict_36removeMin = function (dict) {
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
          return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _Fx__36elm_36core_36Dict_36removeMin(left), right);
        } else {
          var _v4 = _Fg__36elm_36core_36Dict_36moveRedLeft(dict);

          if (_v4.$ === -1) {
            var nColor = _v4.a;
            var nKey = _v4.b;
            var nValue = _v4.c;
            var nLeft = _v4.d;
            var nRight = _v4.e;
            return _Ff__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _Fx__36elm_36core_36Dict_36removeMin(nLeft), nRight);
          } else {
            return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
          }
        }
      } else {
        return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _Fx__36elm_36core_36Dict_36removeMin(left), right);
      }
    } else {
      return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    }
  };

  var _FI__36elm_36core_36Dict_36removeHelp_95raw = function (targetKey, dict) {
    if (dict.$ === -2) {
      return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_DM__95Utils_95cmp(targetKey, key) < 0) {
        if (left.$ === -1 && left.a === 1) {
          var _v4 = left.a;
          var lLeft = left.d;

          if (lLeft.$ === -1 && !lLeft.a) {
            var _v6 = lLeft.a;
            return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _FI__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
          } else {
            var _v7 = _Fg__36elm_36core_36Dict_36moveRedLeft(dict);

            if (_v7.$ === -1) {
              var nColor = _v7.a;
              var nKey = _v7.b;
              var nValue = _v7.c;
              var nLeft = _v7.d;
              var nRight = _v7.e;
              return _Ff__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _FI__36elm_36core_36Dict_36removeHelp_95raw(targetKey, nLeft), nRight);
            } else {
              return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
            }
          }
        } else {
          return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _FI__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
        }
      } else {
        return _Fh__36elm_36core_36Dict_36removeHelpEQGT_95raw(targetKey, _Fi__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw(targetKey, dict, color, key, value, left, right));
      }
    }
  };

  var _Fh__36elm_36core_36Dict_36removeHelpEQGT_95raw = function (targetKey, dict) {
    if (dict.$ === -1) {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_Bt__95Utils_95eq(targetKey, key)) {
        var _v1 = _Fw__36elm_36core_36Dict_36getMin(right);

        if (_v1.$ === -1) {
          var minKey = _v1.b;
          var minValue = _v1.c;
          return _Ff__36elm_36core_36Dict_36balance_95raw(color, minKey, minValue, left, _Fx__36elm_36core_36Dict_36removeMin(right));
        } else {
          return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
        }
      } else {
        return _Ff__36elm_36core_36Dict_36balance_95raw(color, key, value, left, _FI__36elm_36core_36Dict_36removeHelp_95raw(targetKey, right));
      }
    } else {
      return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    }
  };

  var _Ex__36elm_36core_36Dict_36remove_95raw = function (key, dict) {
    var _v0 = _FI__36elm_36core_36Dict_36removeHelp_95raw(key, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _EH__36elm_36core_36Dict_36update_95raw = function (targetKey, alter, dictionary) {
    var _v0 = alter(_Ev__36elm_36core_36Dict_36get_95raw(targetKey, dictionary));

    if (!_v0.$) {
      var value = _v0.a;
      return _Ew__36elm_36core_36Dict_36insert_95raw(targetKey, value, dictionary);
    } else {
      return _Ex__36elm_36core_36Dict_36remove_95raw(targetKey, dictionary);
    }
  };

  var _DT__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw = function (sampleSize, sample, _v0) {
    var samplesDict = _v0;
    return _EH__36elm_36core_36Dict_36update_95raw(sampleSize, function (value) {
      if (value.$ === 1) {
        return _EI__36elm_36core_36Maybe_36Just({
          $: 1,
          a: sample,
          b: _T_r3
        });
      } else {
        var samples_ = value.a;
        return _EI__36elm_36core_36Maybe_36Just(_Ax__95List_95Cons(sample, samples_));
      }
    }, samplesDict);
  };

  var _DP__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup = function (operation_) {
    var toCollect = 1000;
    var sampleSize = 10000;

    var helper = soFar => _DM__95Utils_95cmp(soFar, toCollect) > -1 ? _D2__36elm_36core_36Task_36succeed(0) : _CI__95Scheduler_95andThen_95raw(helper, _CH__36elm_36core_36Task_36map_95raw(_E8__36elm_36core_36Basics_36add(soFar), _DV__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation_)));

    return helper(0);
  };

  var _CN__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw = function (operation, status) {
    switch (status.$) {
      case 0:
        return _DL__95Scheduler_95onError_95raw(_Ak_A2(_CX__36elm_36core_36Basics_36composeL, _Ak_A2(_CX__36elm_36core_36Basics_36composeL, _D2__36elm_36core_36Task_36succeed, _DN__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _DO__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _CH__36elm_36core_36Task_36map_95raw(_v1 => _Cr__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized, _DP__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup(operation)));

      case 1:
        return _DL__95Scheduler_95onError_95raw(_Ak_A2(_CX__36elm_36core_36Basics_36composeL, _Ak_A2(_CX__36elm_36core_36Basics_36composeL, _D2__36elm_36core_36Task_36succeed, _DN__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _DO__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _CH__36elm_36core_36Task_36map_95raw(sampleSize => _DQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(sampleSize, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty), _DR__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw(1, operation)));

      case 2:
        var baseSampleSize = status.a;
        var samples = status.b;
        var sampleSize = baseSampleSize * (2 * _DS__95Basics_95modBy_95raw(25, _CV__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples)) + 1);
        return _DL__95Scheduler_95onError_95raw(_Ak_A2(_CX__36elm_36core_36Basics_36composeL, _Ak_A2(_CX__36elm_36core_36Basics_36composeL, _D2__36elm_36core_36Task_36succeed, _DN__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _DO__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _CH__36elm_36core_36Task_36map_95raw(function (newSample) {
          var newSamples = _DT__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw(sampleSize, newSample, samples);

          return _DM__95Utils_95cmp(_CV__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(newSamples), 25 * 5) > -1 ? _DU__36elm_95explorations_36benchmark_36Benchmark_36finalize(newSamples) : _DQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(baseSampleSize, newSamples);
        }, _DV__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation)));

      default:
        return _D2__36elm_36core_36Task_36succeed(status);
    }
  };

  var _BP__36elm_95explorations_36benchmark_36Benchmark_36step = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var name = benchmark_.a;
        var inner = benchmark_.b;
        var status = benchmark_.c;
        return _CH__36elm_36core_36Task_36map_95raw(_Ak_A2(_CL__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single, name, inner), _CN__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));

      case 1:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _CH__36elm_36core_36Task_36map_95raw(_CO__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series(name), _CQ__36elm_36core_36Task_36sequence(_BU__36elm_36core_36List_36map_95raw(function (_v1) {
          var name_ = _v1.a;
          var inner = _v1.b;
          var status = _v1.c;
          return _CH__36elm_36core_36Task_36map_95raw(status_ => _CR__95Utils_95Tuple3(name_, inner, status_), _CN__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));
        }, benchmarks)));

      default:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _CH__36elm_36core_36Task_36map_95raw(_CS__36elm_95explorations_36benchmark_36Benchmark_36describe(name), _CQ__36elm_36core_36Task_36sequence(_BU__36elm_36core_36List_36map_95raw(_BP__36elm_95explorations_36benchmark_36Benchmark_36step, benchmarks)));
    }
  };

  var _E2__36BrianHicks_36elm_95trend_36Trend_36Linear_36goodnessOfFit = function (_v0) {
    var fit = _v0.a;
    var values = _v0.b;

    var _v1 = _Ee__36elm_36core_36List_36unzip(values);

    var xs = _v1.a;
    var ys = _v1.b;

    var predictions = _BU__36elm_36core_36List_36map_95raw(_Ef__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY(fit), xs);

    var meanY = _Eh__36elm_36core_36Result_36withDefault_95raw(0, _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys));

    var sumSquareResiduals = _Ej__36elm_36core_36List_36sum(_Ek__95List_95map2_95raw(_Cc_F2((actual, prediction) => _Ak_A2(_El__36elm_36core_36Basics_36pow, actual - prediction, 2)), ys, predictions));

    var sumSquareTotal = _Ej__36elm_36core_36List_36sum(_BU__36elm_36core_36List_36map_95raw(y => _Ak_A2(_El__36elm_36core_36Basics_36pow, y - meanY, 2), ys));

    return 1 - sumSquareResiduals / sumSquareTotal;
  };

  var _F7__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw = function (_v0, y) {
    var slope = _v0.aR;
    var intercept = _v0.aL;
    return (y - intercept) / slope;
  };

  var _D9__36author_36project_36Benchmark_36Runner_36Json_36encodeStatus = function (status) {
    switch (status.$) {
      case 0:
        return _D8__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Al__95Utils_95Tuple2("status", _Ah__36elm_36json_36Json_36Encode_36string("cold")),
          b: _T_r3
        });

      case 1:
        return _D8__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Al__95Utils_95Tuple2("status", _Ah__36elm_36json_36Json_36Encode_36string("unsized")),
          b: _T_r3
        });

      case 2:
        var i = status.a;
        var samples = status.b;
        return _D8__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Al__95Utils_95Tuple2("status", _Ah__36elm_36json_36Json_36Encode_36string("pending")),
          b: {
            $: 1,
            a: _Al__95Utils_95Tuple2("progress", _Ah__36elm_36json_36Json_36Encode_36string(_BQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status))),
            b: _T_r3
          }
        });

      case 3:
        var error = status.a;
        return _D8__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Al__95Utils_95Tuple2("status", _Ah__36elm_36json_36Json_36Encode_36string("failure")),
          b: _T_r3
        });

      default:
        var samples = status.a;
        var quickTrend = status.b;
        return _D8__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Al__95Utils_95Tuple2("status", _Ah__36elm_36json_36Json_36Encode_36string("success")),
          b: {
            $: 1,
            a: _Al__95Utils_95Tuple2("runsPerSecond", _Ah__36elm_36json_36Json_36Encode_36string(_Dy__36elm_36core_36Basics_36composeR_95raw(_Dz__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, _E1__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a1, quickTrend))),
            b: {
              $: 1,
              a: _Al__95Utils_95Tuple2("goodnessOfFit", _Ah__36elm_36json_36Json_36Encode_36string(_E2__36BrianHicks_36elm_95trend_36Trend_36Linear_36goodnessOfFit(quickTrend))),
              b: _T_r3
            }
          }
        });
    }
  };

  var _C0__36author_36project_36Benchmark_36Runner_36Json_36encodeResultItem = function (_v0) {
    var name = _v0.a;
    var status = _v0.b;
    return _D8__36elm_36json_36Json_36Encode_36object({
      $: 1,
      a: _Al__95Utils_95Tuple2("name", _Ah__36elm_36json_36Json_36Encode_36string(name)),
      b: {
        $: 1,
        a: _Al__95Utils_95Tuple2("status", _D9__36author_36project_36Benchmark_36Runner_36Json_36encodeStatus(status)),
        b: _T_r3
      }
    });
  };

  var _F5__36elm_36core_36List_36append_95raw = function (xs, ys) {
    if (!ys.b) {
      return xs;
    } else {
      return _Cb__36elm_36core_36List_36foldr_95raw(_DI__36elm_36core_36List_36cons, ys, xs);
    }
  };

  var _Dg__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw = function (group, report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _Al__95Utils_95Tuple2(name, status),
          b: _T_r3
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return _BU__36elm_36core_36List_36map_95raw(function (_v1) {
          var tag = _v1.a;
          var val = _v1.b;
          return _Al__95Utils_95Tuple2(group + (", " + (name + (", " + tag))), val);
        }, statuses);

      default:
        var name = report.a;
        var reports = report.b;
        return _DD__36elm_36core_36List_36concatMap_95raw(_DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup(group + (", " + (name + ", "))), reports);
    }
  };

  var _C1__36author_36project_36Benchmark_36Runner_36Json_36flattenReport = function (report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _Al__95Utils_95Tuple2(name, status),
          b: _T_r3
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return _BU__36elm_36core_36List_36map_95raw(function (_v1) {
          var tag = _v1.a;
          var val = _v1.b;
          return _Al__95Utils_95Tuple2(name + (", " + tag), val);
        }, statuses);

      default:
        var name = report.a;
        var reports = report.b;
        return _DD__36elm_36core_36List_36concatMap_95raw(_DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup(name), reports);
    }
  };

  var _BK__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark = function (internal) {
    switch (internal.$) {
      case 0:
        var name = internal.a;
        var status = internal.c;
        return _CD__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw(name, status);

      case 1:
        var name = internal.a;
        var benchmarks = internal.b;
        return _CE__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw(name, _BU__36elm_36core_36List_36map_95raw(function (_v1) {
          var childName = _v1.a;
          var status = _v1.c;
          return _Al__95Utils_95Tuple2(childName, status);
        }, benchmarks));

      default:
        var name = internal.a;
        var benchmarks = internal.b;
        return _CF__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw(name, _BU__36elm_36core_36List_36map_95raw(_BK__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark, benchmarks));
    }
  };

  var _c__36author_36project_36Benchmark_36Runner_36Json_36update_95raw = function (sendReport, msg, model) {
    var benchmark = msg;
    return _As__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _Al__95Utils_95Tuple2(benchmark, sendReport(_Ae__36author_36project_36Benchmark_36Runner_36Json_36encode(benchmark))) : _Al__95Utils_95Tuple2(benchmark, _Am__36author_36project_36Benchmark_36Runner_36Json_36next(benchmark));
  };

  var _e__36elm_36html_36Html_36div_95raw = function (factList, kidList) {
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
      d: _Av__95VirtualDom_95organizeFacts(factList),
      e: kids,
      f: void 0,
      b: descendantsCount
    };
  };

  var _B6__36author_36project_36Main_36addMyType_95raw = function (mine, sum) {
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

  var _Ah__36elm_36json_36Json_36Encode_36string = value => {
    return value;
  };

  var _C2__36elm_36core_36Result_36Ok = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _C7__36elm_36core_36Result_36Err = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Ax__95List_95Cons = (hd, tl) => {
    return {
      $: 1,
      a: hd,
      b: tl
    };
  };

  var _C4__95Json_95expecting = (type, value) => {
    return _C7__36elm_36core_36Result_36Err(_CC__36elm_36json_36Json_36Decode_36Failure_95raw("Expecting " + type, _Ah__36elm_36json_36Json_36Encode_36string(value)));
  };

  var _C5__95Json_95isArray = value => {
    return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
  };

  var _CC__36elm_36json_36Json_36Decode_36Failure_95raw = (a, b) => {
    return {
      $: 3,
      a: a,
      b: b
    };
  };

  var _C9__36elm_36json_36Json_36Decode_36Index_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _Ak_A2 = (fun, a, b) => {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Json_wrap", _$2_Object_46defineProperty(_Ah__36elm_36json_36Json_36Encode_36string, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Af__95Json_95run_95raw = (decoder, value) => {
    return _BJ__95Json_95runHelp(decoder, _BG__95Json_95unwrap(value));
  };

  var _T_r3 = $_1_sub();

  var _Dl__36elm_36core_36Elm_36JsArray_36empty = [];

  var _Al__95Utils_95Tuple2 = (a, b) => {
    return {
      a: a,
      b: b
    };
  };

  var _Dh__36elm_36core_36Array_36empty = {
    $: 0,
    a: 0,
    b: 5,
    c: _Dl__36elm_36core_36Elm_36JsArray_36empty,
    d: _Dl__36elm_36core_36Elm_36JsArray_36empty
  };

  var _BG__95Json_95unwrap = value => {
    return value;
  };

  var _F9__36elm_36core_36Array_36Array_95elm_95builtin_95raw = (a, b, c, d) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _FA__36elm_36core_36Elm_36JsArray_36length = array => {
    return array.length;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_JsArray_length", _$2_Object_46defineProperty(_FA__36elm_36core_36Elm_36JsArray_36length, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _C6__95Json_95toElmArray = array => {
    return _DG__36elm_36core_36Array_36initialize_95raw(array.length, i => array[i]);
  };

  var _BU__36elm_36core_36List_36map_95raw = (f, xs) => {
    return _Cb__36elm_36core_36List_36foldr_95raw(_Cc_F2((x, acc) => _Ax__95List_95Cons(f(x), acc)), _T_r3, xs);
  };

  var _DI__36elm_36core_36List_36cons = a => {
    return b => _Ax__95List_95Cons(a, b);
  };

  var _C8__36elm_36json_36Json_36Decode_36Field_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _CA__36elm_36core_36List_36reverse = list => {
    return _An__36elm_36core_36List_36foldl_95raw(_DI__36elm_36core_36List_36cons, _T_r3, list);
  };

  var _Ec__36elm_36core_36Basics_36floor = _$4_Math_46floor;

  var _CB__36elm_36json_36Json_36Decode_36OneOf = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _BV__36elm_36core_36Task_36onEffects = a => {
    return b => c => _Bu__36elm_36core_36Task_36onEffects_95raw(a, b, c);
  };

  var _Bu__36elm_36core_36Task_36onEffects_95raw = (router, commands, state) => {
    return _CH__36elm_36core_36Task_36map_95raw(_v0 => 0, _CQ__36elm_36core_36Task_36sequence(_BU__36elm_36core_36List_36map_95raw(_D0__36elm_36core_36Task_36spawnCmd(router), commands)));
  };

  var _Fb__95Basics_95log = _$5_Math_46log;

  var _BX__36elm_36core_36Task_36onSelfMsg = a => {
    return b => c => _Bv__36elm_36core_36Task_36onSelfMsg_95raw(a, b, c);
  };

  var _FC__36elm_36core_36Basics_36logBase_95raw = (base, number) => {
    return _Fb__95Basics_95log(number) / _Fb__95Basics_95log(base);
  };

  var _Bv__36elm_36core_36Task_36onSelfMsg_95raw = (_v0, _v1, _v2) => {
    return _D2__36elm_36core_36Task_36succeed(0);
  };

  var _BZ__36elm_36core_36Task_36cmdMap = a => {
    return b => _Bw__36elm_36core_36Task_36cmdMap_95raw(a, b);
  };

  var _Ab__36elm_36html_36Html_36text = string => {
    return {
      $: 0,
      a: string
    };
  };

  var _CI__95Scheduler_95andThen_95raw = (callback, task) => {
    return {
      $: 3,
      b: callback,
      d: task
    };
  };

  var _9_ = (impl, flagDecoder, debugMetadata, args) => {
    return _Y__95Platform_95initialize(flagDecoder, args, impl.bS, impl.b6, impl.b4, function (sendToApp, initialModel) {
      var view = impl.b8;
      /**/

      var domNode = args["node"]; //*/

      /**_UNUSED/
              var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
              //*/

      var currNode = _f__95VirtualDom_95virtualize(domNode);

      return _g__95Browser_95makeAnimator(initialModel, function (model) {
        var nextNode = view(model);

        var patches = _h__95VirtualDom_95diff(currNode, nextNode);

        domNode = _i__95VirtualDom_95applyPatches(domNode, currNode, patches, sendToApp);
        currNode = nextNode;
      });
    });
  };

  var _BM__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick = x => {
    return x;
  };

  var _CH__36elm_36core_36Task_36map_95raw = (func, taskA) => {
    return _CI__95Scheduler_95andThen_95raw(a => _D2__36elm_36core_36Task_36succeed(func(a)), taskA);
  };

  var _D2__36elm_36core_36Task_36succeed = value => {
    return {
      $: 0,
      a: value
    };
  };

  var _Az_A3 = (fun, a, b, c) => {
    return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
  };

  var _Bb__95Platform_95outgoingPortMap = a => {
    return b => _Bx__95Platform_95outgoingPortMap_95raw(a, b);
  };

  var _Ay__95VirtualDom_95attribute_95raw = (key, value) => {
    return {
      $: "a3",
      n: key,
      o: value
    };
  };

  var _Cb__36elm_36core_36List_36foldr_95raw = (fn, acc, ls) => {
    return _Da__36elm_36core_36List_36foldrHelper_95raw(fn, acc, 0, ls);
  };

  var _B0__95VirtualDom_95node = b => {
    return _Bh__95VirtualDom_95nodeNS_95raw(void 0, b);
  };

  var _B1__95Browser_95requestAnimationFrame = callback => {
    return setTimeout(callback, 1000 / 60);
  };

  var _Eq__36elm_36core_36Array_36Leaf = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Bx__95Platform_95outgoingPortMap_95raw = (tagger, value) => {
    return value;
  };

  var _CQ__36elm_36core_36Task_36sequence = tasks => {
    return _Cb__36elm_36core_36List_36foldr_95raw(_DW__36elm_36core_36Task_36map2(_DI__36elm_36core_36List_36cons), _D2__36elm_36core_36Task_36succeed(_T_r3), tasks);
  };

  _DI__36elm_36core_36List_36cons.a = 2;

  var _Cc_F2 = fun => {
    return _Dc_F(2, fun, a => b => fun(a, b));
  };

  var _DW__36elm_36core_36Task_36map2 = a => {
    return b => c => _Dp__36elm_36core_36Task_36map2_95raw(a, b, c);
  };

  var _BR__36elm_36core_36List_36all_95raw = (isOkay, list) => {
    return !_CW__36elm_36core_36List_36any_95raw(_Ak_A2(_CX__36elm_36core_36Basics_36composeL, _CZ__36elm_36core_36Basics_36not, isOkay), list);
  };

  var _BS__36elm_36core_36Basics_36eq = a => {
    return b => _Bt__95Utils_95eq(a, b);
  };

  var _BL__36elm_36core_36Task_36perform_95raw = (toMessage, task) => {
    return _CG__36elm_36core_36Task_36command(_CH__36elm_36core_36Task_36map_95raw(toMessage, task));
  };

  var _Dp__36elm_36core_36Task_36map2_95raw = (func, taskA, taskB) => {
    return _CI__95Scheduler_95andThen_95raw(a => _CI__95Scheduler_95andThen_95raw(b => _D2__36elm_36core_36Task_36succeed(_Ak_A2(func, a, b)), taskB), taskA);
  };

  var _BO__36author_36project_36Benchmark_36Runner_36Json_36breakForRender = task => {
    return _CI__95Scheduler_95andThen_95raw(_v0 => task, _CJ__36elm_36core_36Process_36sleep(0));
  };

  var _Bh__95VirtualDom_95nodeNS_95raw = (namespace, tag) => {
    return _Cc_F2(function (factList, kidList) {
      for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
        var kid = kidList.a;
        descendantsCount += kid.b || 0;
        kids.push(kid);
      }

      descendantsCount += kids.length;
      return {
        $: 1,
        c: tag,
        d: _Av__95VirtualDom_95organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount
      };
    });
  };

  var _DK__95Scheduler_95binding = callback => {
    return {
      $: 2,
      b: callback,
      c: null
    };
  };

  var _D0__36elm_36core_36Task_36spawnCmd = a => {
    return b => _Db__36elm_36core_36Task_36spawnCmd_95raw(a, b);
  };

  _DI__36elm_36core_36List_36cons.f = _Ax__95List_95Cons;
  var _Fc__36elm_36core_36Basics_36ceiling = _$6_Math_46ceil;

  var _FE__36elm_36core_36Basics_36max_95raw = (x, y) => {
    return _DM__95Utils_95cmp(x, y) > 0 ? x : y;
  };

  var _EN__95Scheduler_95spawn = task => {
    return _DK__95Scheduler_95binding(function (callback) {
      callback(_D2__36elm_36core_36Task_36succeed(_Cf__95Scheduler_95rawSpawn(task)));
    });
  };

  var _EO__36elm_36core_36Platform_36sendToApp = a => {
    return b => _EX__95Platform_95sendToApp_95raw(a, b);
  };

  var _EX__95Platform_95sendToApp_95raw = (router, msg) => {
    return _DK__95Scheduler_95binding(function (callback) {
      router.g(msg);
      callback(_D2__36elm_36core_36Task_36succeed(0));
    });
  };

  var _Fv__36elm_36core_36Array_36SubTree = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _BA__36elm_36core_36Task_36init = {
    $: 0,
    a: 0
  };

  var _CJ__36elm_36core_36Process_36sleep = time => {
    return _DK__95Scheduler_95binding(function (callback) {
      var id = setTimeout(function () {
        callback(_D2__36elm_36core_36Task_36succeed(0));
      }, time);
      return function () {
        clearTimeout(id);
      };
    });
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Scheduler_succeed", _$2_Object_46defineProperty(_D2__36elm_36core_36Task_36succeed, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _DW__36elm_36core_36Task_36map2.a = 3;
  _DW__36elm_36core_36Task_36map2.f = _Dp__36elm_36core_36Task_36map2_95raw;
  var _Dq__95Scheduler_95queue = [];

  var _Cd_F3 = fun => {
    return _Dc_F(3, fun, a => b => c => fun(a, b, c));
  };

  _EO__36elm_36core_36Platform_36sendToApp.a = 2;
  _EO__36elm_36core_36Platform_36sendToApp.f = _EX__95Platform_95sendToApp_95raw;

  var _CU__36elm_36core_36Basics_36clamp_95raw = (low, high, number) => {
    return _DM__95Utils_95cmp(number, low) < 0 ? low : _DM__95Utils_95cmp(number, high) > 0 ? high : number;
  };

  var _CX__36elm_36core_36Basics_36composeL = a => {
    return b => c => _Cz__36elm_36core_36Basics_36composeL_95raw(a, b, c);
  };

  var _CG__36elm_36core_36Task_36command = value => {
    return {
      $: 1,
      k: "Task",
      l: value
    };
  };

  var _Z__36author_36project_36Benchmark_36Runner_36Json_36init_95raw = (benchmark, _v0) => {
    return _Al__95Utils_95Tuple2(benchmark, _Am__36author_36project_36Benchmark_36Runner_36Json_36next(benchmark));
  };

  var _Ch__95Scheduler_95receive = callback => {
    return {
      $: 5,
      b: callback
    };
  };

  var _Ci_A4 = (fun, a, b, c, d) => {
    return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
  };

  var _CZ__36elm_36core_36Basics_36not = bool => {
    return !bool;
  };

  var _CL__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single = a => {
    return b => c => _Co__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw(a, b, c);
  };

  _D0__36elm_36core_36Task_36spawnCmd.a = 2;

  var _Am__36author_36project_36Benchmark_36Runner_36Json_36next = benchmark => {
    return _As__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _B4__36elm_36core_36Platform_36Cmd_36none : _BL__36elm_36core_36Task_36perform_95raw(_BM__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, _BO__36author_36project_36Benchmark_36Runner_36Json_36breakForRender(_BP__36elm_95explorations_36benchmark_36Benchmark_36step(benchmark)));
  };

  var _Ao__36author_36project_36Main_36addMyType = a => {
    return b => _B6__36author_36project_36Main_36addMyType_95raw(a, b);
  };

  _D0__36elm_36core_36Task_36spawnCmd.f = _Db__36elm_36core_36Task_36spawnCmd_95raw;

  var _Cm__95VirtualDom_95equalEvents = (x, y) => {
    return x.$ == y.$ && _Dn__95Json_95equality(x.a, y.a);
  };

  _BV__36elm_36core_36Task_36onEffects.a = 3;

  var _Cz__36elm_36core_36Basics_36composeL_95raw = (g, f, x) => {
    return g(f(x));
  };

  _BV__36elm_36core_36Task_36onEffects.f = _Bu__36elm_36core_36Task_36onEffects_95raw;
  _BX__36elm_36core_36Task_36onSelfMsg.a = 3;
  _BX__36elm_36core_36Task_36onSelfMsg.f = _Bv__36elm_36core_36Task_36onSelfMsg_95raw;
  _BZ__36elm_36core_36Task_36cmdMap.a = 2;
  _BZ__36elm_36core_36Task_36cmdMap.f = _Bw__36elm_36core_36Task_36cmdMap_95raw;

  var _Co__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  var _DZ__36elm_36core_36List_36length = xs => {
    return _An__36elm_36core_36List_36foldl_95raw(_Cc_F2((_v0, i) => i + 1), 0, xs);
  };

  var _B9_ = {
    b: _BA__36elm_36core_36Task_36init,
    c: _BV__36elm_36core_36Task_36onEffects,
    d: _BX__36elm_36core_36Task_36onSelfMsg,
    e: _BZ__36elm_36core_36Task_36cmdMap,
    f: void 0
  };
  _Bb__95Platform_95outgoingPortMap.a = 2;
  _Bb__95Platform_95outgoingPortMap.f = _Bx__95Platform_95outgoingPortMap_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$elm$core$Basics$identity", _$2_Object_46defineProperty(_BM__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Dr__36elm_36core_36Dict_36toList = dict => {
    return _EY__36elm_36core_36Dict_36foldr_95raw(_Cd_F3((key, value, list) => _Ax__95List_95Cons(_Al__95Utils_95Tuple2(key, value), list)), _T_r3, dict);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Process_sleep", _$2_Object_46defineProperty(_CJ__36elm_36core_36Process_36sleep, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _DL__95Scheduler_95onError_95raw = (callback, task) => {
    return {
      $: 4,
      b: callback,
      d: task
    };
  };

  var _DN__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _DO__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _BD_ = {
    e: _Bb__95Platform_95outgoingPortMap,
    u: _BM__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick,
    a: _Bd__95Platform_95setupOutgoingPort
  };
  var _B8__95Platform_95effectManagers = {
    Task: _B9_,
    reportResults: _BD_
  };
  var _BE__95Platform_95effectsQueue = [];
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_VirtualDom_text", _$2_Object_46defineProperty(_Ab__36elm_36html_36Html_36text, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  var _Df__95Browser_95doc = document;

  var _DQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _DV__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw = (n, operation_) => {
    return _EM__95Benchmark_95sample_95raw(n, operation_);
  };

  var _E8__36elm_36core_36Basics_36add = a => {
    return b => _ER__95Basics_95add_95raw(a, b);
  };

  _CX__36elm_36core_36Basics_36composeL.a = 3;
  _CX__36elm_36core_36Basics_36composeL.f = _Cz__36elm_36core_36Basics_36composeL_95raw;

  var _ER__95Basics_95add_95raw = (a, b) => {
    return a + b;
  };

  var _CO__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series = a => {
    return b => _Cq__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw(a, b);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_not", _$2_Object_46defineProperty(_CZ__36elm_36core_36Basics_36not, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Dy__36elm_36core_36Basics_36composeR_95raw = (f, g, x) => {
    return g(f(x));
  };

  var _EM__95Benchmark_95sample_95raw = (n, fn) => {
    return _DK__95Scheduler_95binding(function (callback) {
      var start = _F0__95Benchmark_95getTimestamp();

      try {
        for (var i = 0; i < n; i++) {
          fn();
        }
      } catch (error) {
        if (error instanceof RangeError) {
          callback(_F1__95Scheduler_95fail(_EV__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow));
        } else {
          callback(_F1__95Scheduler_95fail(_F2__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError(error.message)));
        }

        return;
      }

      var end = _F0__95Benchmark_95getTimestamp();

      callback(_D2__36elm_36core_36Task_36succeed(end - start));
    });
  };

  var _CR__95Utils_95Tuple3 = (a, b, c) => {
    return {
      a: a,
      b: b,
      c: c
    };
  };

  var _CS__36elm_95explorations_36benchmark_36Benchmark_36describe = a => {
    return b => _Cx__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw(a, b);
  };

  var _EA__36elm_36core_36Basics_36composeR = a => {
    return b => c => _Dy__36elm_36core_36Basics_36composeR_95raw(a, b, c);
  };

  _BS__36elm_36core_36Basics_36eq.a = 2;
  _BS__36elm_36core_36Basics_36eq.f = _Bt__95Utils_95eq;

  var _EI__36elm_36core_36Maybe_36Just = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _B4__36elm_36core_36Platform_36Cmd_36none = {
    $: 2,
    m: _T_r3
  };
  _CL__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.a = 3;

  var _ED__36elm_36core_36Maybe_36withDefault = a => {
    return b => _ES__36elm_36core_36Maybe_36withDefault_95raw(a, b);
  };

  var _F1__95Scheduler_95fail = error => {
    return {
      $: 1,
      a: error
    };
  };

  var _Cq__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  _CL__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.f = _Co__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw;

  var _EF__36elm_36core_36List_36repeat_95raw = (n, value) => {
    return _Et__36elm_36core_36List_36repeatHelp_95raw(_T_r3, n, value);
  };

  var _Cx__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _F2__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Cr__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized = $_5_sub();

  var _Er__36elm_36core_36Basics_36min = a => {
    return b => _F6__36elm_36core_36Basics_36min_95raw(a, b);
  };

  _E8__36elm_36core_36Basics_36add.a = 2;
  _E8__36elm_36core_36Basics_36add.f = _ER__95Basics_95add_95raw;

  var _F6__36elm_36core_36Basics_36min_95raw = (x, y) => {
    return _DM__95Utils_95cmp(x, y) < 0 ? x : y;
  };

  var _F0__95Benchmark_95getTimestamp = _$8_Date_46now;

  var _Ej__36elm_36core_36List_36sum = numbers => {
    return _An__36elm_36core_36List_36foldl_95raw(_E8__36elm_36core_36Basics_36add, 0, numbers);
  };

  var _EV__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow = $_6_sub();

  var _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty = $_4_root(-2);

  _EA__36elm_36core_36Basics_36composeR.a = 3;
  _EA__36elm_36core_36Basics_36composeR.f = _Dy__36elm_36core_36Basics_36composeR_95raw;

  var _El__36elm_36core_36Basics_36pow = a => {
    return b => _F4_(a, b);
  };

  _Er__36elm_36core_36Basics_36min.a = 2;

  var _F8__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues = a => {
    return {
      $: 0,
      a: a
    };
  };

  _Er__36elm_36core_36Basics_36min.f = _F6__36elm_36core_36Basics_36min_95raw;
  var _ET__36elm_36core_36Maybe_36Nothing = {
    $: 1,
    a: null
  };
  _ED__36elm_36core_36Maybe_36withDefault.a = 2;

  var _EJ__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend = samples => {
    return _Ey__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick(_Ez__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points(samples).a);
  };

  var _EK__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw = (a, b) => {
    return {
      $: 4,
      a: a,
      b: b
    };
  };

  var _EL__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError = a => {
    return {
      $: 1,
      a: a
    };
  };

  _ED__36elm_36core_36Maybe_36withDefault.f = _ES__36elm_36core_36Maybe_36withDefault_95raw;

  var _FH__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw = (a, b, c, d, e) => {
    return {
      $: -1,
      a: a,
      b: b,
      c: c,
      d: d,
      e: e
    };
  };

  var _Fj__36elm_36core_36Basics_36mul = a => {
    return b => _Fp__95Basics_95mul_95raw(a, b);
  };

  var _Fp__95Basics_95mul_95raw = (a, b) => {
    return a * b;
  };

  var _Eu__36elm_36core_36Basics_36round = _$9_Math_46round;
  _Fj__36elm_36core_36Basics_36mul.a = 2;
  _Fj__36elm_36core_36Basics_36mul.f = _Fp__95Basics_95mul_95raw;
  var _Fn__36elm_36core_36Basics_36sqrt = _$A_Math_46sqrt;
  var _F4_ = _$B_Math_46pow;

  var _Ez__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points = samples => {
    return _FR__36elm_36core_36Tuple_36mapSecond_95raw(_FS__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _FT__36elm_36core_36Tuple_36mapFirst_95raw(_FS__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _FU__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups(samples)));
  };

  _El__36elm_36core_36Basics_36pow.a = 2;

  var _FN__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _FP__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line = a => {
    return b => _Fa__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw(a, b);
  };

  var _Fa__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw = (slope, intercept) => {
    return {
      aL: intercept,
      aR: slope
    };
  };

  _El__36elm_36core_36Basics_36pow.f = _F4_;

  var _FS__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify = samples => {
    return _EY__36elm_36core_36Dict_36foldr_95raw(_Cd_F3((sampleSize, values, acc) => _Fo__95Utils_95ap(_BU__36elm_36core_36List_36map_95raw(b => _Al__95Utils_95Tuple2(sampleSize, b), values), acc)), _T_r3, samples);
  };

  var _Fm__36elm_36core_36Basics_36isNaN = _$C_isNaN;

  var _FY__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros = $_5_sub();

  _FP__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.a = 2;

  var _Fq__36elm_36core_36Dict_36foldl = a => {
    return b => c => _DY__36elm_36core_36Dict_36foldl_95raw(a, b, c);
  };

  _FP__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.f = _Fa__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw;
  _Fq__36elm_36core_36Dict_36foldl.a = 3;
  _Fq__36elm_36core_36Dict_36foldl.f = _DY__36elm_36core_36Dict_36foldl_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$BrianHicks$elm_trend$Trend$Linear$line", _$2_Object_46defineProperty(_Dz__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _Fz__36elm_36core_36List_36sort = xs => {
    return _G7__95List_95sortBy_95raw(_BM__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, xs);
  };

  var _G0__36elm_36core_36List_36filter_95raw = (isGood, list) => {
    return _Cb__36elm_36core_36List_36foldr_95raw(_Cc_F2((x, xs) => isGood(x) ? _Ax__95List_95Cons(x, xs) : xs), _T_r3, list);
  };

  var _G1__36elm_36core_36Basics_36isInfinite = n => {
    return n === Infinity || n === -Infinity;
  };

  var _G7__95List_95sortBy_95raw = (f, xs) => {
    return _Ce__95List_95fromArray(_GE__95List_95toArray(xs).sort((a, b) => _DM__95Utils_95cmp(f(a), f(b))));
  };

  var _G5__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_isInfinite", _$2_Object_46defineProperty(_G1__36elm_36core_36Basics_36isInfinite, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _GA__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile = a => {
    return b => _G8__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(a, b);
  };

  var _GI__36elm_36core_36List_36take_95raw = (n, list) => {
    return _GJ__36elm_36core_36List_36takeFast_95raw(0, n, list);
  };

  var _GK__36elm_36core_36List_36takeTailRec_95raw = (n, list) => {
    return _CA__36elm_36core_36List_36reverse(_GL__36elm_36core_36List_36takeReverse_95raw(n, list, _T_r3));
  };

  _GA__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.a = 2;
  _GA__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.f = _G8__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw;
  _CO__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.a = 2;
  _CO__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.f = _Cq__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw;
  _CS__36elm_95explorations_36benchmark_36Benchmark_36describe.a = 2;
  _CS__36elm_95explorations_36benchmark_36Benchmark_36describe.f = _Cx__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw;
  _Ao__36author_36project_36Main_36addMyType.a = 2;
  _Ao__36author_36project_36Main_36addMyType.f = _B6__36author_36project_36Main_36addMyType_95raw;

  var _l_a = $_1_sub();

  var _p_b = $_2_sub(5, null);

  var _u_c = $_3_sub("Two", "two");

  var _AW_r2 = $_2_sub(_u_c, _T_r3);

  var _AU_r1 = $_2_sub(_p_b, _AW_r2);

  var _AS_d = $_2_sub(_l_a, _AU_r1);

  var _AQ_ = $_2_sub(_u_c, _AS_d);

  var _AO_ = $_2_sub(_p_b, _AQ_);

  var _AM_ = $_2_sub(_l_a, _AO_);

  var _AK_ = $_2_sub(_u_c, _AM_);

  var _AI_ = $_2_sub(_p_b, _AK_);

  var _AG_ = $_2_sub(_l_a, _AI_);

  var _AE_ = $_2_sub(_u_c, _AG_);

  var _AC_ = $_2_sub(_p_b, _AE_);

  var _AA_res = $_2_sub(_l_a, _AC_);

  var _A8_ = $_2_sub(_u_c, _AA_res);

  var _A6_ = $_2_sub(_p_b, _A8_);

  var _A4_ = $_2_sub(_l_a, _A6_);

  var _A2_ = $_2_sub(_u_c, _A4_);

  var _A0_ = $_2_sub(_p_b, _A2_);

  var _9y_ = $_2_sub(_l_a, _A0_);

  var _9w_ = $_2_sub(_u_c, _9y_);

  var _9u_ = $_2_sub(_p_b, _9w_);

  var _9s_ = $_2_sub(_l_a, _9u_);

  var _9q_ = $_2_sub(_u_c, _9s_);

  var _9o_ = $_2_sub(_p_b, _9q_);

  var _9m_res = $_2_sub(_l_a, _9o_);

  var _9k_ = $_2_sub(_u_c, _9m_res);

  var _9i_ = $_2_sub(_p_b, _9k_);

  var _9g_ = $_2_sub(_l_a, _9i_);

  var _9e_ = $_2_sub(_u_c, _9g_);

  var _9c_ = $_2_sub(_p_b, _9e_);

  var _9a_ = $_2_sub(_l_a, _9c_);

  var _9Y_ = $_2_sub(_u_c, _9a_);

  var _9W_ = $_2_sub(_p_b, _9Y_);

  var _9U_ = $_2_sub(_l_a, _9W_);

  var _9S_ = $_2_sub(_u_c, _9U_);

  var _9Q_ = $_2_sub(_p_b, _9S_);

  var _9O_res = $_2_sub(_l_a, _9Q_);

  var _9M_ = $_2_sub(_u_c, _9O_res);

  var _9K_ = $_2_sub(_p_b, _9M_);

  var _9I_ = $_2_sub(_l_a, _9K_);

  var _9G_ = $_2_sub(_u_c, _9I_);

  var _9E_ = $_2_sub(_p_b, _9G_);

  var _9C_ = $_2_sub(_l_a, _9E_);

  var _9A_ = $_2_sub(_u_c, _9C_);

  var _98_ = $_2_sub(_p_b, _9A_);

  var _96_ = $_2_sub(_l_a, _98_);

  var _94_ = $_2_sub(_u_c, _96_);

  var _92_ = $_2_sub(_p_b, _94_);

  var _90_res = $_2_sub(_l_a, _92_);

  var _8y_ = $_2_sub(_u_c, _90_res);

  var _8w_ = $_2_sub(_p_b, _8y_);

  var _8u_ = $_2_sub(_l_a, _8w_);

  var _8s_ = $_2_sub(_u_c, _8u_);

  var _8q_ = $_2_sub(_p_b, _8s_);

  var _8o_ = $_2_sub(_l_a, _8q_);

  var _8m_ = $_2_sub(_u_c, _8o_);

  var _8k_ = $_2_sub(_p_b, _8m_);

  var _8i_ = $_2_sub(_l_a, _8k_);

  var _8g_ = $_2_sub(_u_c, _8i_);

  var _8e_ = $_2_sub(_p_b, _8g_);

  var _8c_res = $_2_sub(_l_a, _8e_);

  var _8a_ = $_2_sub(_u_c, _8c_res);

  var _8Y_ = $_2_sub(_p_b, _8a_);

  var _8W_ = $_2_sub(_l_a, _8Y_);

  var _8U_ = $_2_sub(_u_c, _8W_);

  var _8S_ = $_2_sub(_p_b, _8U_);

  var _8Q_ = $_2_sub(_l_a, _8S_);

  var _8O_ = $_2_sub(_u_c, _8Q_);

  var _8M_ = $_2_sub(_p_b, _8O_);

  var _8K_ = $_2_sub(_l_a, _8M_);

  var _8I_ = $_2_sub(_u_c, _8K_);

  var _8G_ = $_2_sub(_p_b, _8I_);

  var _8E_res = $_2_sub(_l_a, _8G_);

  var _8C_ = $_2_sub(_u_c, _8E_res);

  var _8A_ = $_2_sub(_p_b, _8C_);

  var _88_ = $_2_sub(_l_a, _8A_);

  var _86_ = $_2_sub(_u_c, _88_);

  var _84_ = $_2_sub(_p_b, _86_);

  var _82_ = $_2_sub(_l_a, _84_);

  var _80_ = $_2_sub(_u_c, _82_);

  var _7y_ = $_2_sub(_p_b, _80_);

  var _7w_ = $_2_sub(_l_a, _7y_);

  var _7u_ = $_2_sub(_u_c, _7w_);

  var _7s_ = $_2_sub(_p_b, _7u_);

  var _7q_res = $_2_sub(_l_a, _7s_);

  var _7o_ = $_2_sub(_u_c, _7q_res);

  var _7m_ = $_2_sub(_p_b, _7o_);

  var _7k_ = $_2_sub(_l_a, _7m_);

  var _7i_ = $_2_sub(_u_c, _7k_);

  var _7g_ = $_2_sub(_p_b, _7i_);

  var _7e_ = $_2_sub(_l_a, _7g_);

  var _7c_ = $_2_sub(_u_c, _7e_);

  var _7a_ = $_2_sub(_p_b, _7c_);

  var _7Y_ = $_2_sub(_l_a, _7a_);

  var _7W_ = $_2_sub(_u_c, _7Y_);

  var _7U_ = $_2_sub(_p_b, _7W_);

  var _7S_res = $_2_sub(_l_a, _7U_);

  var _7Q_ = $_2_sub(_u_c, _7S_res);

  var _7O_ = $_2_sub(_p_b, _7Q_);

  var _7M_ = $_2_sub(_l_a, _7O_);

  var _7K_ = $_2_sub(_u_c, _7M_);

  var _7I_ = $_2_sub(_p_b, _7K_);

  var _7G_ = $_2_sub(_l_a, _7I_);

  var _7E_ = $_2_sub(_u_c, _7G_);

  var _7C_ = $_2_sub(_p_b, _7E_);

  var _7A_ = $_2_sub(_l_a, _7C_);

  var _78_ = $_2_sub(_u_c, _7A_);

  var _76_ = $_2_sub(_p_b, _78_);

  var _74_res = $_2_sub(_l_a, _76_);

  var _72_ = $_2_sub(_u_c, _74_res);

  var _70_ = $_2_sub(_p_b, _72_);

  var _6y_ = $_2_sub(_l_a, _70_);

  var _6w_ = $_2_sub(_u_c, _6y_);

  var _6u_ = $_2_sub(_p_b, _6w_);

  var _6s_ = $_2_sub(_l_a, _6u_);

  var _6q_ = $_2_sub(_u_c, _6s_);

  var _6o_ = $_2_sub(_p_b, _6q_);

  var _6m_ = $_2_sub(_l_a, _6o_);

  var _6k_ = $_2_sub(_u_c, _6m_);

  var _6i_ = $_2_sub(_p_b, _6k_);

  var _6g_res = $_2_sub(_l_a, _6i_);

  var _6e_ = $_2_sub(_u_c, _6g_res);

  var _6c_ = $_2_sub(_p_b, _6e_);

  var _6a_ = $_2_sub(_l_a, _6c_);

  var _6Y_ = $_2_sub(_u_c, _6a_);

  var _6W_ = $_2_sub(_p_b, _6Y_);

  var _6U_ = $_2_sub(_l_a, _6W_);

  var _6S_ = $_2_sub(_u_c, _6U_);

  var _6Q_ = $_2_sub(_p_b, _6S_);

  var _6O_ = $_2_sub(_l_a, _6Q_);

  var _6M_ = $_2_sub(_u_c, _6O_);

  var _6K_ = $_2_sub(_p_b, _6M_);

  var _6I_res = $_2_sub(_l_a, _6K_);

  var _6G_ = $_2_sub(_u_c, _6I_res);

  var _6E_ = $_2_sub(_p_b, _6G_);

  var _6C_ = $_2_sub(_l_a, _6E_);

  var _6A_ = $_2_sub(_u_c, _6C_);

  var _68_ = $_2_sub(_p_b, _6A_);

  var _66_ = $_2_sub(_l_a, _68_);

  var _64_ = $_2_sub(_u_c, _66_);

  var _62_ = $_2_sub(_p_b, _64_);

  var _60_ = $_2_sub(_l_a, _62_);

  var _5y_ = $_2_sub(_u_c, _60_);

  var _5w_ = $_2_sub(_p_b, _5y_);

  var _5u_res = $_2_sub(_l_a, _5w_);

  var _5s_ = $_2_sub(_u_c, _5u_res);

  var _5q_ = $_2_sub(_p_b, _5s_);

  var _5o_ = $_2_sub(_l_a, _5q_);

  var _5m_ = $_2_sub(_u_c, _5o_);

  var _5k_ = $_2_sub(_p_b, _5m_);

  var _5i_ = $_2_sub(_l_a, _5k_);

  var _5g_ = $_2_sub(_u_c, _5i_);

  var _5e_ = $_2_sub(_p_b, _5g_);

  var _5c_ = $_2_sub(_l_a, _5e_);

  var _5a_ = $_2_sub(_u_c, _5c_);

  var _5Y_ = $_2_sub(_p_b, _5a_);

  var _5W_res = $_2_sub(_l_a, _5Y_);

  var _5U_ = $_2_sub(_u_c, _5W_res);

  var _5S_ = $_2_sub(_p_b, _5U_);

  var _5Q_ = $_2_sub(_l_a, _5S_);

  var _5O_ = $_2_sub(_u_c, _5Q_);

  var _5M_ = $_2_sub(_p_b, _5O_);

  var _5K_ = $_2_sub(_l_a, _5M_);

  var _5I_ = $_2_sub(_u_c, _5K_);

  var _5G_ = $_2_sub(_p_b, _5I_);

  var _5E_ = $_2_sub(_l_a, _5G_);

  var _5C_ = $_2_sub(_u_c, _5E_);

  var _5A_ = $_2_sub(_p_b, _5C_);

  var _58_res = $_2_sub(_l_a, _5A_);

  var _56_ = $_2_sub(_u_c, _58_res);

  var _54_ = $_2_sub(_p_b, _56_);

  var _52_ = $_2_sub(_l_a, _54_);

  var _50_ = $_2_sub(_u_c, _52_);

  var _4y_ = $_2_sub(_p_b, _50_);

  var _4w_ = $_2_sub(_l_a, _4y_);

  var _4u_ = $_2_sub(_u_c, _4w_);

  var _4s_ = $_2_sub(_p_b, _4u_);

  var _4q_ = $_2_sub(_l_a, _4s_);

  var _4o_ = $_2_sub(_u_c, _4q_);

  var _4m_ = $_2_sub(_p_b, _4o_);

  var _4k_res = $_2_sub(_l_a, _4m_);

  var _4i_ = $_2_sub(_u_c, _4k_res);

  var _4g_ = $_2_sub(_p_b, _4i_);

  var _4e_ = $_2_sub(_l_a, _4g_);

  var _4c_ = $_2_sub(_u_c, _4e_);

  var _a_ = _v0 => {
    return _An__36elm_36core_36List_36foldl_95raw(_Ao__36author_36project_36Main_36addMyType, 0, _j__36author_36project_36Main_36many);
  };

  var _4a_ = $_2_sub(_p_b, _4c_);

  var _4Y_ = $_2_sub(_l_a, _4a_);

  var _A_ = b => {
    return _Z__36author_36project_36Benchmark_36Runner_36Json_36init_95raw(_E__36author_36project_36Main_36suite, b);
  };

  var _4W_ = $_2_sub(_u_c, _4Y_);

  var _B_ = _v0 => {
    return _W__36elm_36core_36Platform_36Sub_36none;
  };

  var _b_ = _v1 => {
    return _An__36elm_36core_36List_36foldl_95raw(_Aq__36author_36project_36Main_36updateRecord, {
      aO: 1,
      bq: 3,
      br: 2
    }, _j__36author_36project_36Main_36many);
  };

  var _4U_ = $_2_sub(_p_b, _4W_);

  var _4S_ = $_2_sub(_l_a, _4U_);

  var _4Q_ = $_2_sub(_u_c, _4S_);

  var _4O_ = $_2_sub(_p_b, _4Q_);

  var _3_ = d => {
    return _9_(_4_, _5_, 0, d);
  };

  var _4M_res = $_2_sub(_l_a, _4O_);

  var _C_ = b => {
    return c => _c__36author_36project_36Benchmark_36Runner_36Json_36update_95raw(_d__36author_36project_36Main_36reportResults, b, c);
  };

  var _D__36author_36project_36Benchmark_36Runner_36Json_36view = model => {
    return _e__36elm_36html_36Html_36div_95raw({
      $: 1,
      a: _Aa__95VirtualDom_95style_95raw("white-space", "pre"),
      b: _T_r3
    }, {
      $: 1,
      a: _Ab__36elm_36html_36Html_36text(_Ad__95Json_95encode_95raw(4, _Ae__36author_36project_36Benchmark_36Runner_36Json_36encode(model))),
      b: _T_r3
    });
  };

  var _Aq__36author_36project_36Main_36updateRecord = a => {
    return b => _B7__36author_36project_36Main_36updateRecord_95raw(a, b);
  };

  var _4K_ = $_2_sub(_u_c, _4M_res);

  var _4I_ = $_2_sub(_p_b, _4K_);

  var _d__36author_36project_36Main_36reportResults = value => {
    return {
      $: 1,
      k: "reportResults",
      l: value
    };
  };

  var _Aa__95VirtualDom_95style_95raw = (key, value) => {
    return {
      $: "a1",
      n: key,
      o: value
    };
  };

  var _4G_ = $_2_sub(_l_a, _4I_);

  var _Ad__95Json_95encode_95raw = (indentLevel, value) => {
    return JSON.stringify(_BG__95Json_95unwrap(value), null, indentLevel) + "";
  };

  var _Ae__36author_36project_36Benchmark_36Runner_36Json_36encode = benchmark => {
    return _BH__36author_36project_36Benchmark_36Runner_36Json_36encodeReport(_BK__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark(benchmark));
  };

  var _4E_ = $_2_sub(_u_c, _4G_);

  var _4C_ = $_2_sub(_p_b, _4E_);

  var _B7__36author_36project_36Main_36updateRecord_95raw = (attr, record) => {
    return _Bq_(record, {
      aO: 87
    });
  };

  var _4A_ = $_2_sub(_l_a, _4C_);

  var _48_ = $_2_sub(_u_c, _4A_);

  var _46_ = $_2_sub(_p_b, _48_);

  var _44_ = $_2_sub(_l_a, _46_);

  var _42_ = $_2_sub(_u_c, _44_);

  var _40_ = $_2_sub(_p_b, _42_);

  var _3y_res = $_2_sub(_l_a, _40_);

  var _3w_ = $_2_sub(_u_c, _3y_res);

  var _3u_ = $_2_sub(_p_b, _3w_);

  var _3s_ = $_2_sub(_l_a, _3u_);

  var _3q_ = $_2_sub(_u_c, _3s_);

  var _BH__36author_36project_36Benchmark_36Runner_36Json_36encodeReport = report => {
    return _By__36elm_36json_36Json_36Encode_36list_95raw(_C0__36author_36project_36Benchmark_36Runner_36Json_36encodeResultItem, _C1__36author_36project_36Benchmark_36Runner_36Json_36flattenReport(report));
  };

  var _3o_ = $_2_sub(_p_b, _3q_);

  var _Bq_ = (oldRecord, updatedFields) => {
    return Object.assign({}, oldRecord, updatedFields);
  };

  var _3m_ = $_2_sub(_l_a, _3o_);

  var _3k_ = $_2_sub(_u_c, _3m_);

  var _3i_ = $_2_sub(_p_b, _3k_);

  var _3g_ = $_2_sub(_l_a, _3i_);

  var _3e_ = $_2_sub(_u_c, _3g_);

  var _3c_ = $_2_sub(_p_b, _3e_);

  var _3a_res = $_2_sub(_l_a, _3c_);

  var _By__36elm_36json_36Json_36Encode_36list_95raw = (func, entries) => {
    return _Ah__36elm_36json_36Json_36Encode_36string(_An__36elm_36core_36List_36foldl_95raw(_D6__95Json_95addEntry(func), _D7__95Json_95emptyArray(0), entries));
  };

  var _3Y_ = $_2_sub(_u_c, _3a_res);

  var _3W_ = $_2_sub(_p_b, _3Y_);

  var _3U_ = $_2_sub(_l_a, _3W_);

  var _3S_ = $_2_sub(_u_c, _3U_);

  var _3Q_ = $_2_sub(_p_b, _3S_);

  var _3O_ = $_2_sub(_l_a, _3Q_);

  var _3M_ = $_2_sub(_u_c, _3O_);

  var _3K_ = $_2_sub(_p_b, _3M_);

  var _3I_ = $_2_sub(_l_a, _3K_);

  var _3G_ = $_2_sub(_u_c, _3I_);

  var _3E_ = $_2_sub(_p_b, _3G_);

  var _3C_res = $_2_sub(_l_a, _3E_);

  var _3A_ = $_2_sub(_u_c, _3C_res);

  var _38_ = $_2_sub(_p_b, _3A_);

  var _36_ = $_2_sub(_l_a, _38_);

  var _34_ = $_2_sub(_u_c, _36_);

  var _CD__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _CE__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _CF__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _32_ = $_2_sub(_p_b, _34_);

  var _30_ = $_2_sub(_l_a, _32_);

  var _2y_ = $_2_sub(_u_c, _30_);

  var _2w_ = $_2_sub(_p_b, _2y_);

  var _2u_ = $_2_sub(_l_a, _2w_);

  var _2s_ = $_2_sub(_u_c, _2u_);

  var _2q_ = $_2_sub(_p_b, _2s_);

  var _2o_res = $_2_sub(_l_a, _2q_);

  var _2m_ = $_2_sub(_u_c, _2o_res);

  var _2k_ = $_2_sub(_p_b, _2m_);

  var _2i_ = $_2_sub(_l_a, _2k_);

  var _2g_ = $_2_sub(_u_c, _2i_);

  var _2e_ = $_2_sub(_p_b, _2g_);

  var _2c_ = $_2_sub(_l_a, _2e_);

  var _2a_ = $_2_sub(_u_c, _2c_);

  var _2Y_ = $_2_sub(_p_b, _2a_);

  var _2W_ = $_2_sub(_l_a, _2Y_);

  var _2U_ = $_2_sub(_u_c, _2W_);

  var _D6__95Json_95addEntry = func => {
    return _Cc_F2(function (entry, array) {
      array.push(_BG__95Json_95unwrap(func(entry)));
      return array;
    });
  };

  var _D7__95Json_95emptyArray = () => {
    return [];
  };

  var _D8__36elm_36json_36Json_36Encode_36object = pairs => {
    return _Ah__36elm_36json_36Json_36Encode_36string(_An__36elm_36core_36List_36foldl_95raw(_Cc_F2(function (_v0, obj) {
      var k = _v0.a;
      var v = _v0.b;
      return _Ds__95Json_95addField_95raw(k, v, obj);
    }), _Dt__95Json_95emptyObject(0), pairs));
  };

  var _2S_ = $_2_sub(_p_b, _2U_);

  var _2Q_res = $_2_sub(_l_a, _2S_);

  var _2O_ = $_2_sub(_u_c, _2Q_res);

  var _2M_ = $_2_sub(_p_b, _2O_);

  var _DD__36elm_36core_36List_36concatMap_95raw = (f, list) => {
    return _E5__36elm_36core_36List_36concat(_BU__36elm_36core_36List_36map_95raw(f, list));
  };

  var _DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup = a => {
    return b => _Dg__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw(a, b);
  };

  var _2K_ = $_2_sub(_l_a, _2M_);

  var _2I_ = $_2_sub(_u_c, _2K_);

  var _2G_ = $_2_sub(_p_b, _2I_);

  var _2E_ = $_2_sub(_l_a, _2G_);

  var _2C_ = $_2_sub(_u_c, _2E_);

  var _2A_ = $_2_sub(_p_b, _2C_);

  var _28_ = $_2_sub(_l_a, _2A_);

  var _Dt__95Json_95emptyObject = () => {
    return {};
  };

  var _26_ = $_2_sub(_u_c, _28_);

  var _E1__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a1 = c => {
    return _Dy__36elm_36core_36Basics_36composeR_95raw(_Eb_, _Ec__36elm_36core_36Basics_36floor, c);
  };

  var _24_ = $_2_sub(_p_b, _26_);

  var _22_res = $_2_sub(_l_a, _24_);

  var _20_ = $_2_sub(_u_c, _22_res);

  var _1y_ = $_2_sub(_p_b, _20_);

  var _E5__36elm_36core_36List_36concat = lists => {
    return _Cb__36elm_36core_36List_36foldr_95raw(_En__36elm_36core_36List_36append, _T_r3, lists);
  };

  var _1w_ = $_2_sub(_l_a, _1y_);

  var _1u_ = $_2_sub(_u_c, _1w_);

  var _1s_ = $_2_sub(_p_b, _1u_);

  var _1q_ = $_2_sub(_l_a, _1s_);

  var _1o_ = $_2_sub(_u_c, _1q_);

  var _1m_ = $_2_sub(_p_b, _1o_);

  var _1k_ = $_2_sub(_l_a, _1m_);

  var _1i_ = $_2_sub(_u_c, _1k_);

  var _1g_ = $_2_sub(_p_b, _1i_);

  var _Eb_ = a => {
    return _F7__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw(a, 1000);
  };

  var _Ef__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY = a => {
    return b => _F3__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(a, b);
  };

  var _1e_res = $_2_sub(_l_a, _1g_);

  var _1c_ = $_2_sub(_u_c, _1e_res);

  var _1a_ = $_2_sub(_p_b, _1c_);

  var _1Y_ = $_2_sub(_l_a, _1a_);

  var _En__36elm_36core_36List_36append = a => {
    return b => _F5__36elm_36core_36List_36append_95raw(a, b);
  };

  var _1W_ = $_2_sub(_u_c, _1Y_);

  var _1U_ = $_2_sub(_p_b, _1W_);

  var _1S_ = $_2_sub(_l_a, _1U_);

  var _1Q_ = $_2_sub(_u_c, _1S_);

  var _1O_ = $_2_sub(_p_b, _1Q_);

  var _1M_ = $_2_sub(_l_a, _1O_);

  var _1K_ = $_2_sub(_u_c, _1M_);

  var _1I_ = $_2_sub(_p_b, _1K_);

  var _1G_res = $_2_sub(_l_a, _1I_);

  var _1E_ = $_2_sub(_u_c, _1G_res);

  var _1C_ = $_2_sub(_p_b, _1E_);

  var _1A_ = $_2_sub(_l_a, _1C_);

  var _18_ = $_2_sub(_u_c, _1A_);

  var _16_ = $_2_sub(_p_b, _18_);

  var _14_ = $_2_sub(_l_a, _16_);

  var _12_ = $_2_sub(_u_c, _14_);

  var _10_ = $_2_sub(_p_b, _12_);

  var _y_ = $_2_sub(_l_a, _10_);

  var _s_ = $_2_sub(_u_c, _y_);

  var _n_ = $_2_sub(_p_b, _s_);

  var _j__36author_36project_36Main_36many = $_2_sub(_l_a, _n_);

  var _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold = $_6_sub();

  _Aq__36author_36project_36Main_36updateRecord.a = 2;
  _Aq__36author_36project_36Main_36updateRecord.f = _B7__36author_36project_36Main_36updateRecord_95raw;

  var _E__36author_36project_36Main_36suite = $_3_sub("Benchmarks", {
    $: 1,
    a: {
      $: 0,
      a: "sum 100 entities in a list",
      b: _a_,
      c: _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold
    },
    b: {
      $: 1,
      a: {
        $: 0,
        a: "1000 record updates",
        b: _b_,
        c: _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold
      },
      b: _T_r3
    }
  });

  var _W__36elm_36core_36Platform_36Sub_36none = {
    $: 2,
    m: _T_r3
  };
  _Ef__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.a = 2;
  _Ef__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.f = _F3__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw;
  _En__36elm_36core_36List_36append.a = 2;
  _En__36elm_36core_36List_36append.f = _F5__36elm_36core_36List_36append_95raw;
  _DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup.a = 2;
  _DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup.f = _Dg__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw;
  var _4_ = {
    bS: _A_,
    b4: _B_,
    b6: _C_,
    b8: _D__36author_36project_36Benchmark_36Runner_36Json_36view
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