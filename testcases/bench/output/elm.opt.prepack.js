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

  var _DL_F = function (arity, fun, wrapper) {
    wrapper.a = arity;
    wrapper.f = fun;
    return wrapper;
  };

  var _Cb__95Utils_95eq = function (x, y) {
    for (var pair, stack = [], isEqual = _Da__95Utils_95eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Da__95Utils_95eqHelp(pair.a, pair.b, 0, stack)) {}

    return isEqual;
  };

  var _Da__95Utils_95eqHelp = function (x, y, depth, stack) {
    if (x === y) {
      return true;
    }

    if (typeof x !== "object" || x === null || y === null) {
      typeof x === "function" && _Aj__95Debug_95crash(5);
      return false;
    }

    if (depth > 100) {
      stack.push(_Am_(x, y));
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
      x = _ER__36elm_36core_36Dict_36toList(x);
      y = _ER__36elm_36core_36Dict_36toList(y);
    } //*/


    for (var key in x) {
      if (!_Da__95Utils_95eqHelp(x[key], y[key], depth + 1, stack)) {
        return false;
      }
    }

    return true;
  };

  var _DZ__95Utils_95cmp = function (x, y, ord) {
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
        return (ord = _DZ__95Utils_95cmp(x.a, y.a)) ? ord : (ord = _DZ__95Utils_95cmp(x.b, y.b)) ? ord : _DZ__95Utils_95cmp(x.c, y.c);
      } // traverse conses until end of a list or a mismatch


    for (; x.b && y.b && !(ord = _DZ__95Utils_95cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES


    return ord || (x.b ?
    /*GT*/
    1 : y.b ?
    /*LT*/
    -1 :
    /*EQ*/
    0);
  };

  var _Fp__95Utils_95ap = function (xs, ys) {
    // append Strings
    if (typeof xs === "string") {
      return xs + ys;
    } // append Lists


    if (!xs.b) {
      return ys;
    }

    var root = _Ay_(xs.a, ys);

    xs = xs.b;

    for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
    {
      curr = curr.b = _Ay_(xs.a, ys);
    }

    return root;
  };

  var _CB__95List_95fromArray = function (arr) {
    var out = _T_r3;

    for (var i = arr.length; i--;) {
      out = _Ay_(arr[i], out);
    }

    return out;
  };

  var _GF__95List_95toArray = function (xs) {
    for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
    {
      out.push(xs.a);
    }

    return out;
  };

  var _Aj__95Debug_95crash = function (identifier) {
    throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
  };

  var _BK__95Json_95runHelp = function (decoder, value) {
    switch (decoder.$) {
      case 2:
        return decoder.b(value);

      case 5:
        return value === null ? _C0__36elm_36core_36Result_36Ok(decoder.c) : _C1_("null", value);

      case 3:
        if (!_C9_(value)) {
          return _C1_("a LIST", value);
        }

        return _CA__95Json_95runArrayDecoder(decoder.b, value, _CB__95List_95fromArray);

      case 4:
        if (!_C9_(value)) {
          return _C1_("an ARRAY", value);
        }

        return _CA__95Json_95runArrayDecoder(decoder.b, value, _CC_);

      case 6:
        var field = decoder.d;

        if (typeof value !== "object" || value === null || !(field in value)) {
          return _C1_("an OBJECT with a field named `" + field + "`", value);
        }

        var result = _BK__95Json_95runHelp(decoder.b, value[field]);

        return _An__36elm_36core_36Result_36isOk(result) ? result : _C2__36elm_36core_36Result_36Err(_C3__36elm_36json_36Json_36Decode_36Field_95raw(field, result.a));

      case 7:
        var index = decoder.e;

        if (!_C9_(value)) {
          return _C1_("an ARRAY", value);
        }

        if (index >= value.length) {
          return _C1_("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
        }

        var result = _BK__95Json_95runHelp(decoder.b, value[index]);

        return _An__36elm_36core_36Result_36isOk(result) ? result : _C2__36elm_36core_36Result_36Err(_C4__36elm_36json_36Json_36Decode_36Index_95raw(index, result.a));

      case 8:
        if (typeof value !== "object" || value === null || _C9_(value)) {
          return _C1_("an OBJECT", value);
        }

        var keyValuePairs = _T_r3; // TODO test perf of Object.keys and switch when support is good enough

        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _BK__95Json_95runHelp(decoder.b, value[key]);

            if (!_An__36elm_36core_36Result_36isOk(result)) {
              return _C2__36elm_36core_36Result_36Err(_C3__36elm_36json_36Json_36Decode_36Field_95raw(key, result.a));
            }

            keyValuePairs = _Ay_(_Am_(key, result.a), keyValuePairs);
          }
        }

        return _C0__36elm_36core_36Result_36Ok(_C5__36elm_36core_36List_36reverse(keyValuePairs));

      case 9:
        var answer = decoder.f;
        var decoders = decoder.g;

        for (var i = 0; i < decoders.length; i++) {
          var result = _BK__95Json_95runHelp(decoders[i], value);

          if (!_An__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          answer = answer(result.a);
        }

        return _C0__36elm_36core_36Result_36Ok(answer);

      case 10:
        var result = _BK__95Json_95runHelp(decoder.b, value);

        return !_An__36elm_36core_36Result_36isOk(result) ? result : _BK__95Json_95runHelp(decoder.h(result.a), value);

      case 11:
        var errors = _T_r3;

        for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
        {
          var result = _BK__95Json_95runHelp(temp.a, value);

          if (_An__36elm_36core_36Result_36isOk(result)) {
            return result;
          }

          errors = _Ay_(result.a, errors);
        }

        return _C2__36elm_36core_36Result_36Err(_C6__36elm_36json_36Json_36Decode_36OneOf(_C5__36elm_36core_36List_36reverse(errors)));

      case 1:
        return _C2__36elm_36core_36Result_36Err(_C7__36elm_36json_36Json_36Decode_36Failure_95raw(decoder.a, _Ah__36elm_36json_36Json_36Encode_36string(value)));

      case 0:
        return _C0__36elm_36core_36Result_36Ok(decoder.a);
    }
  };

  var _CA__95Json_95runArrayDecoder = function (decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);

    for (var i = 0; i < len; i++) {
      var result = _BK__95Json_95runHelp(decoder, value[i]);

      if (!_An__36elm_36core_36Result_36isOk(result)) {
        return _C2__36elm_36core_36Result_36Err(_C4__36elm_36json_36Json_36Decode_36Index_95raw(i, result.a));
      }

      array[i] = result.a;
    }

    return _C0__36elm_36core_36Result_36Ok(toElmValue(array));
  };

  var _De__95Json_95equality = function (x, y) {
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
        return _De__95Json_95equality(x.b, y.b);

      case 6:
        return x.d === y.d && _De__95Json_95equality(x.b, y.b);

      case 7:
        return x.e === y.e && _De__95Json_95equality(x.b, y.b);

      case 9:
        return x.f === y.f && _ES__95Json_95listEquality(x.g, y.g);

      case 10:
        return x.h === y.h && _De__95Json_95equality(x.b, y.b);

      case 11:
        return _ES__95Json_95listEquality(x.g, y.g);
    }
  };

  var _ES__95Json_95listEquality = function (aDecoders, bDecoders) {
    var len = aDecoders.length;

    if (len !== bDecoders.length) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      if (!_De__95Json_95equality(aDecoders[i], bDecoders[i])) {
        return false;
      }
    }

    return true;
  };

  var _CN__95Scheduler_95rawSpawn = function (task) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    var proc = {
      $: 0,
      e: __captured__scope_1_[0]++,
      f: task,
      g: null,
      h: []
    };

    _DM__95Scheduler_95enqueue(proc);

    return proc;
  };

  var _CR__95Scheduler_95rawSend = function (proc, msg) {
    proc.h.push(msg);

    _DM__95Scheduler_95enqueue(proc);
  };

  var _DM__95Scheduler_95enqueue = function (proc) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _Do__95Scheduler_95queue.push(proc);

    if (__captured__scope_1_[1]) {
      return;
    }

    __captured__scope_1_[1] = true;

    while (proc = _Do__95Scheduler_95queue.shift()) {
      _EB__95Scheduler_95step(proc);
    }

    __captured__scope_1_[1] = false;
  };

  var _EB__95Scheduler_95step = function (proc) {
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

          _DM__95Scheduler_95enqueue(proc);
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
    var result = _Ag__95Json_95run_95raw(flagDecoder, _Ah__36elm_36json_36Json_36Encode_36string(args ? args["flags"] : undefined));

    _An__36elm_36core_36Result_36isOk(result) || _Aj__95Debug_95crash(2
    /**_UNUSED/, _Json_errorToString(result.a) /**/
    );
    var managers = {};
    var initPair = init(result.a);
    var model = initPair.a;
    var stepper = stepperBuilder(sendToApp, model);

    var ports = _Ak__95Platform_95setupEffects(managers, sendToApp);

    function sendToApp(msg, viewMetadata) {
      var pair = _i_(update, msg, model);

      stepper(model = pair.a, viewMetadata);

      _Al__95Platform_95enqueueEffects(managers, pair.b, subscriptions(model));
    }

    _Al__95Platform_95enqueueEffects(managers, initPair.b, subscriptions(model));

    return ports ? {
      ports: ports
    } : {};
  };

  var _Ak__95Platform_95setupEffects = function (managers, sendToApp) {
    var ports; // setup all necessary effect managers

    for (var key in _B3__95Platform_95effectManagers) {
      var manager = _B3__95Platform_95effectManagers[key];

      if (manager.a) {
        ports = ports || {};
        ports[key] = manager.a(key, sendToApp);
      }

      managers[key] = _BX__95Platform_95instantiateManager(manager, sendToApp);
    }

    return ports;
  };

  var _BX__95Platform_95instantiateManager = function (info, sendToApp) {
    var router = {
      g: sendToApp,
      h: undefined
    };
    var onEffects = info.c;
    var onSelfMsg = info.d;
    var cmdMap = info.e;
    var subMap = info.f;

    const loop = state => _CJ__95Scheduler_95andThen_95raw(loop, _CL_(function (msg) {
      var value = msg.a;

      if (msg.$ === 0) {
        return _Az_(onSelfMsg, router, value, state);
      }

      return cmdMap && subMap ? _CM_(onEffects, router, value.i, value.j, state) : _Az_(onEffects, router, cmdMap ? value.i : value.j, state);
    }));

    return router.h = _CN__95Scheduler_95rawSpawn(_CJ__95Scheduler_95andThen_95raw(loop, info.b));
  };

  var _Al__95Platform_95enqueueEffects = function (managers, cmdBag, subBag) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _BA__95Platform_95effectsQueue.push({
      p: managers,
      q: cmdBag,
      r: subBag
    });

    if (__captured__scope_1_[2]) return;
    __captured__scope_1_[2] = true;

    for (var fx; fx = _BA__95Platform_95effectsQueue.shift();) {
      _BY__95Platform_95dispatchEffects(fx.p, fx.q, fx.r);
    }

    __captured__scope_1_[2] = false;
  };

  var _BY__95Platform_95dispatchEffects = function (managers, cmdBag, subBag) {
    var effectsDict = {};

    _CO__95Platform_95gatherEffects(true, cmdBag, effectsDict, null);

    _CO__95Platform_95gatherEffects(false, subBag, effectsDict, null);

    for (var home in managers) {
      _CR__95Scheduler_95rawSend(managers[home], {
        $: "fx",
        a: effectsDict[home] || {
          i: _T_r3,
          j: _T_r3
        }
      });
    }
  };

  var _CO__95Platform_95gatherEffects = function (isCmd, bag, effectsDict, taggers) {
    switch (bag.$) {
      case 1:
        var home = bag.k;

        var effect = _DN__95Platform_95toEffect(isCmd, home, taggers, bag.l);

        effectsDict[home] = _DO__95Platform_95insert(isCmd, effect, effectsDict[home]);
        return;

      case 2:
        for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
        {
          _CO__95Platform_95gatherEffects(isCmd, list.a, effectsDict, taggers);
        }

        return;

      case 3:
        _CO__95Platform_95gatherEffects(isCmd, bag.o, effectsDict, {
          s: bag.n,
          t: taggers
        });

        return;
    }
  };

  var _DN__95Platform_95toEffect = function (isCmd, home, taggers, value) {
    function applyTaggers(x) {
      for (var temp = taggers; temp; temp = temp.t) {
        x = temp.s(x);
      }

      return x;
    }

    var map = isCmd ? _B3__95Platform_95effectManagers[home].e : _B3__95Platform_95effectManagers[home].f;
    return _i_(map, applyTaggers, value);
  };

  var _DO__95Platform_95insert = function (isCmd, newEffect, effects) {
    effects = effects || {
      i: _T_r3,
      j: _T_r3
    };
    isCmd ? effects.i = _Ay_(newEffect, effects.i) : effects.j = _Ay_(newEffect, effects.j);
    return effects;
  };

  var _BW__95Platform_95setupOutgoingPort = function (name) {
    var subs = [];
    var converter = _B3__95Platform_95effectManagers[name].u; // CREATE MANAGER

    var init = _CH__36elm_36core_36Process_36sleep(0);

    _B3__95Platform_95effectManagers[name].b = init;
    _B3__95Platform_95effectManagers[name].c = _CK_(function (router, cmdList, state) {
      for (; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
      {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;

        var value = _BI_(converter(cmdList.a));

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

  var _Dw__95VirtualDom_95appendChild = function (parent, child) {
    parent.appendChild(child);
  };

  var _BH__95VirtualDom_95organizeFacts = function (factList) {
    for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
    {
      var entry = factList.a;
      var tag = entry.$;
      var key = entry.n;
      var value = entry.o;

      if (tag === "a2") {
        key === "className" ? _Bw__95VirtualDom_95addClass(facts, key, _BI_(value)) : facts[key] = _BI_(value);
        continue;
      }

      var subFacts = facts[tag] || (facts[tag] = {});
      tag === "a3" && key === "class" ? _Bw__95VirtualDom_95addClass(subFacts, key, value) : subFacts[key] = value;
    }

    return facts;
  };

  var _Bw__95VirtualDom_95addClass = function (object, key, newClass) {
    var classes = object[key];
    object[key] = classes ? classes + " " + newClass : newClass;
  };

  var _D7__95VirtualDom_95render = function (vNode, eventNode) {
    var tag = vNode.$;

    if (tag === 5) {
      return _D7__95VirtualDom_95render(vNode.k || (vNode.k = vNode.m()), eventNode);
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

      var domNode = _D7__95VirtualDom_95render(subNode, subEventRoot);

      domNode.elm_event_node_ref = subEventRoot;
      return domNode;
    }

    if (tag === 3) {
      var domNode = vNode.h(vNode.g);

      _D6__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

      return domNode;
    } // at this point `tag` must be 1 or 2


    var domNode = vNode.f ? _Df__95Browser_95doc.createElementNS(vNode.f, vNode.c) : _Df__95Browser_95doc.createElement(vNode.c);

    if (void 0) {
      domNode.addEventListener("click", (void 0)(domNode));
    }

    _D6__95VirtualDom_95applyFacts(domNode, eventNode, vNode.d);

    for (var kids = vNode.e, i = 0; i < kids.length; i++) {
      _Dw__95VirtualDom_95appendChild(domNode, _D7__95VirtualDom_95render(tag === 1 ? kids[i] : kids[i].b, eventNode));
    }

    return domNode;
  };

  var _D6__95VirtualDom_95applyFacts = function (domNode, eventNode, facts) {
    for (var key in facts) {
      var value = facts[key];
      key === "a1" ? _Ds__95VirtualDom_95applyStyles(domNode, value) : key === "a0" ? _Dt__95VirtualDom_95applyEvents(domNode, eventNode, value) : key === "a3" ? _Du__95VirtualDom_95applyAttrs(domNode, value) : key === "a4" ? _Dv__95VirtualDom_95applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
    }
  };

  var _Ds__95VirtualDom_95applyStyles = function (domNode, styles) {
    var domNodeStyle = domNode.style;

    for (var key in styles) {
      domNodeStyle[key] = styles[key];
    }
  };

  var _Du__95VirtualDom_95applyAttrs = function (domNode, attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
    }
  };

  var _Dv__95VirtualDom_95applyAttrsNS = function (domNode, nsAttrs) {
    for (var key in nsAttrs) {
      var pair = nsAttrs[key];
      var namespace = pair.f;
      var value = pair.o;
      typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
    }
  };

  var _Dt__95VirtualDom_95applyEvents = function (domNode, eventNode, events) {
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

      var result = _BK__95Json_95runHelp(handler.a, event);

      if (!_An__36elm_36core_36Result_36isOk(result)) {
        return;
      }

      var tag = _Eb__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt(handler); // 0 = Normal
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

  var _g__95VirtualDom_95diff = function (x, y) {
    var patches = [];

    _B0__95VirtualDom_95diffHelp(x, y, patches, 0);

    return patches;
  };

  var _Bf__95VirtualDom_95pushPatch = function (patches, type, index, data) {
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

  var _B0__95VirtualDom_95diffHelp = function (x, y, patches, index) {
    if (x === y) {
      return;
    }

    var xType = x.$;
    var yType = y.$; // Bail if you run into different types of nodes. Implies that the
    // structure has changed significantly and it's not worth a diff.

    if (xType !== yType) {
      if (xType === 1 && yType === 2) {
        y = _Be__95VirtualDom_95dekey(y);
        yType = 1;
      } else {
        _Bf__95VirtualDom_95pushPatch(patches, 0, index, y);

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

        _B0__95VirtualDom_95diffHelp(x.k, y.k, subPatches, 0);

        subPatches.length > 0 && _Bf__95VirtualDom_95pushPatch(patches, 1, index, subPatches);
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
          _Bf__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        } // check if taggers are "the same"


        if (nesting ? !_Bg__95VirtualDom_95pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
          _Bf__95VirtualDom_95pushPatch(patches, 2, index, yTaggers);
        } // diff everything below the taggers


        _B0__95VirtualDom_95diffHelp(xSubNode, ySubNode, patches, index + 1);

        return;

      case 0:
        if (x.a !== y.a) {
          _Bf__95VirtualDom_95pushPatch(patches, 3, index, y.a);
        }

        return;

      case 1:
        _Bh__95VirtualDom_95diffNodes(x, y, patches, index, _Bi__95VirtualDom_95diffKids);

        return;

      case 2:
        _Bh__95VirtualDom_95diffNodes(x, y, patches, index, _Bj__95VirtualDom_95diffKeyedKids);

        return;

      case 3:
        if (x.h !== y.h) {
          _Bf__95VirtualDom_95pushPatch(patches, 0, index, y);

          return;
        }

        var factsDiff = _Bk__95VirtualDom_95diffFacts(x.d, y.d);

        factsDiff && _Bf__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
        var patch = y.i(x.g, y.g);
        patch && _Bf__95VirtualDom_95pushPatch(patches, 5, index, patch);
        return;
    }
  };

  var _Bg__95VirtualDom_95pairwiseRefEqual = function (as, bs) {
    for (var i = 0; i < as.length; i++) {
      if (as[i] !== bs[i]) {
        return false;
      }
    }

    return true;
  };

  var _Bh__95VirtualDom_95diffNodes = function (x, y, patches, index, diffKids) {
    // Bail if obvious indicators have changed. Implies more serious
    // structural changes such that it's not worth it to diff.
    if (x.c !== y.c || x.f !== y.f) {
      _Bf__95VirtualDom_95pushPatch(patches, 0, index, y);

      return;
    }

    var factsDiff = _Bk__95VirtualDom_95diffFacts(x.d, y.d);

    factsDiff && _Bf__95VirtualDom_95pushPatch(patches, 4, index, factsDiff);
    diffKids(x, y, patches, index);
  };

  var _Bk__95VirtualDom_95diffFacts = function (x, y, category) {
    var diff; // look for changes and removals

    for (var xKey in x) {
      if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
        var subDiff = _Bk__95VirtualDom_95diffFacts(x[xKey], y[xKey] || {}, xKey);

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

      if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _Cg_(xValue, yValue)) {
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

  var _Bi__95VirtualDom_95diffKids = function (xParent, yParent, patches, index) {
    var xKids = xParent.e;
    var yKids = yParent.e;
    var xLen = xKids.length;
    var yLen = yKids.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

    if (xLen > yLen) {
      _Bf__95VirtualDom_95pushPatch(patches, 6, index, {
        v: yLen,
        i: xLen - yLen
      });
    } else if (xLen < yLen) {
      _Bf__95VirtualDom_95pushPatch(patches, 7, index, {
        v: xLen,
        e: yKids
      });
    } // PAIRWISE DIFF EVERYTHING ELSE


    for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
      var xKid = xKids[i];

      _B0__95VirtualDom_95diffHelp(xKid, yKids[i], patches, ++index);

      index += xKid.b || 0;
    }
  };

  var _Bj__95VirtualDom_95diffKeyedKids = function (xParent, yParent, patches, rootIndex) {
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

        _B0__95VirtualDom_95diffHelp(xNode, yNode, localPatches, index);

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

        _B0__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        _Ce__95VirtualDom_95insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _Cf__95VirtualDom_95removeNode(changes, localPatches, xKey, xNextNode, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 2;
        continue;
      } // insert y


      if (newMatch) {
        index++;

        _Ce__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        _B0__95VirtualDom_95diffHelp(xNode, yNextNode, localPatches, index);

        index += xNode.b || 0;
        xIndex += 1;
        yIndex += 2;
        continue;
      } // remove x


      if (oldMatch) {
        index++;

        _Cf__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        index += xNode.b || 0;
        index++;

        _B0__95VirtualDom_95diffHelp(xNextNode, yNode, localPatches, index);

        index += xNextNode.b || 0;
        xIndex += 2;
        yIndex += 1;
        continue;
      } // remove x, insert y


      if (xNext && xNextKey === yNextKey) {
        index++;

        _Cf__95VirtualDom_95removeNode(changes, localPatches, xKey, xNode, index);

        _Ce__95VirtualDom_95insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);

        index += xNode.b || 0;
        index++;

        _B0__95VirtualDom_95diffHelp(xNextNode, yNextNode, localPatches, index);

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

      _Cf__95VirtualDom_95removeNode(changes, localPatches, x.a, xNode, index);

      index += xNode.b || 0;
      xIndex++;
    }

    while (yIndex < yLen) {
      var endInserts = endInserts || [];
      var y = yKids[yIndex];

      _Ce__95VirtualDom_95insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);

      yIndex++;
    }

    if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
      _Bf__95VirtualDom_95pushPatch(patches, 8, rootIndex, {
        w: localPatches,
        x: inserts,
        y: endInserts
      });
    }
  };

  var _Ce__95VirtualDom_95insertNode = function (changes, localPatches, key, vnode, yIndex, inserts) {
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

      _B0__95VirtualDom_95diffHelp(entry.z, vnode, subPatches, entry.r);

      entry.r = yIndex;
      entry.s.s = {
        w: subPatches,
        A: entry
      };
      return;
    } // this key has already been inserted or moved, a duplicate!


    _Ce__95VirtualDom_95insertNode(changes, localPatches, key + "_elmW6BL", vnode, yIndex, inserts);
  };

  var _Cf__95VirtualDom_95removeNode = function (changes, localPatches, key, vnode, index) {
    var entry = changes[key]; // never seen this key before

    if (!entry) {
      var patch = _Bf__95VirtualDom_95pushPatch(localPatches, 9, index, undefined);

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

      _B0__95VirtualDom_95diffHelp(vnode, entry.z, subPatches, index);

      _Bf__95VirtualDom_95pushPatch(localPatches, 9, index, {
        w: subPatches,
        A: entry
      });

      return;
    } // this key has already been removed or moved, a duplicate!


    _Cf__95VirtualDom_95removeNode(changes, localPatches, key + "_elmW6BL", vnode, index);
  };

  var _B1__95VirtualDom_95addDomNodes = function (domNode, vNode, patches, eventNode) {
    _Bl__95VirtualDom_95addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
  };

  var _Bl__95VirtualDom_95addDomNodesHelp = function (domNode, vNode, patches, i, low, high, eventNode) {
    var patch = patches[i];
    var index = patch.r;

    while (index === low) {
      var patchType = patch.$;

      if (patchType === 1) {
        _B1__95VirtualDom_95addDomNodes(domNode, vNode.k, patch.s, eventNode);
      } else if (patchType === 8) {
        patch.t = domNode;
        patch.u = eventNode;
        var subPatches = patch.s.w;

        if (subPatches.length > 0) {
          _Bl__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
        }
      } else if (patchType === 9) {
        patch.t = domNode;
        patch.u = eventNode;
        var data = patch.s;

        if (data) {
          data.A.s = domNode;
          var subPatches = data.w;

          if (subPatches.length > 0) {
            _Bl__95VirtualDom_95addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
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

      return _Bl__95VirtualDom_95addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
    } // tag must be 1 or 2 at this point


    var vKids = vNode.e;
    var childNodes = domNode.childNodes;

    for (var j = 0; j < vKids.length; j++) {
      low++;
      var vKid = tag === 1 ? vKids[j] : vKids[j].b;
      var nextLow = low + (vKid.b || 0);

      if (low <= index && index <= nextLow) {
        i = _Bl__95VirtualDom_95addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);

        if (!(patch = patches[i]) || (index = patch.r) > high) {
          return i;
        }
      }

      low = nextLow;
    }

    return i;
  };

  var _h__95VirtualDom_95applyPatches = function (rootDomNode, oldVirtualNode, patches, eventNode) {
    if (patches.length === 0) {
      return rootDomNode;
    }

    _B1__95VirtualDom_95addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);

    return _BG__95VirtualDom_95applyPatchesHelp(rootDomNode, patches);
  };

  var _BG__95VirtualDom_95applyPatchesHelp = function (rootDomNode, patches) {
    for (var i = 0; i < patches.length; i++) {
      var patch = patches[i];
      var localDomNode = patch.t;

      var newNode = _Bv__95VirtualDom_95applyPatch(localDomNode, patch);

      if (localDomNode === rootDomNode) {
        rootDomNode = newNode;
      }
    }

    return rootDomNode;
  };

  var _Bv__95VirtualDom_95applyPatch = function (domNode, patch) {
    switch (patch.$) {
      case 0:
        return _D5__95VirtualDom_95applyPatchRedraw(domNode, patch.s, patch.u);

      case 4:
        _D6__95VirtualDom_95applyFacts(domNode, patch.u, patch.s);

        return domNode;

      case 3:
        domNode.replaceData(0, domNode.length, patch.s);
        return domNode;

      case 1:
        return _BG__95VirtualDom_95applyPatchesHelp(domNode, patch.s);

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
          domNode.insertBefore(_D7__95VirtualDom_95render(kids[i], patch.u), theEnd);
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

        entry.s = _BG__95VirtualDom_95applyPatchesHelp(domNode, data.w);
        return domNode;

      case 8:
        return _D8__95VirtualDom_95applyPatchReorder(domNode, patch);

      case 5:
        return patch.s(domNode);

      default:
        _Aj__95Debug_95crash(10);

      // 'Ran into an unknown patch!'
    }
  };

  var _D5__95VirtualDom_95applyPatchRedraw = function (domNode, vNode, eventNode) {
    var parentNode = domNode.parentNode;

    var newNode = _D7__95VirtualDom_95render(vNode, eventNode);

    if (!newNode.elm_event_node_ref) {
      newNode.elm_event_node_ref = domNode.elm_event_node_ref;
    }

    if (parentNode && newNode !== domNode) {
      parentNode.replaceChild(newNode, domNode);
    }

    return newNode;
  };

  var _D8__95VirtualDom_95applyPatchReorder = function (domNode, patch) {
    var data = patch.s; // remove end inserts

    var frag = _Dx__95VirtualDom_95applyPatchReorderEndInsertsHelp(data.y, patch); // removals


    domNode = _BG__95VirtualDom_95applyPatchesHelp(domNode, data.w); // inserts

    var inserts = data.x;

    for (var i = 0; i < inserts.length; i++) {
      var insert = inserts[i];
      var entry = insert.A;
      var node = entry.c === 2 ? entry.s : _D7__95VirtualDom_95render(entry.z, patch.u);
      domNode.insertBefore(node, domNode.childNodes[insert.r]);
    } // add end inserts


    if (frag) {
      _Dw__95VirtualDom_95appendChild(domNode, frag);
    }

    return domNode;
  };

  var _Dx__95VirtualDom_95applyPatchReorderEndInsertsHelp = function (endInserts, patch) {
    if (!endInserts) {
      return;
    }

    var frag = _Df__95Browser_95doc.createDocumentFragment();

    for (var i = 0; i < endInserts.length; i++) {
      var insert = endInserts[i];
      var entry = insert.A;

      _Dw__95VirtualDom_95appendChild(frag, entry.c === 2 ? entry.s : _D7__95VirtualDom_95render(entry.z, patch.u));
    }

    return frag;
  };

  var _e__95VirtualDom_95virtualize = function (node) {
    // TEXT NODES
    if (node.nodeType === 3) {
      return _Ac__36elm_36html_36Html_36text(node.textContent);
    } // WEIRD NODES


    if (node.nodeType !== 1) {
      return _Ac__36elm_36html_36Html_36text("");
    } // ELEMENT NODES


    var attrList = _T_r3;
    var attrs = node.attributes;

    for (var i = attrs.length; i--;) {
      var attr = attrs[i];
      var name = attr.name;
      var value = attr.value;
      attrList = _Ay_(_Av__95VirtualDom_95attribute_95raw(name, value), attrList);
    }

    var tag = node.tagName.toLowerCase();
    var kidList = _T_r3;
    var kids = node.childNodes;

    for (var i = kids.length; i--;) {
      kidList = _Ay_(_e__95VirtualDom_95virtualize(kids[i]), kidList);
    }

    return _Az_(_Aw__95VirtualDom_95node, tag, attrList, kidList);
  };

  var _Be__95VirtualDom_95dekey = function (keyedNode) {
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

  var _f__95Browser_95makeAnimator = function (model, draw) {
    draw(model);
    var state = 0;

    function updateIfNeeded() {
      state = state === 1 ? 0 : (_Ax__95Browser_95requestAnimationFrame(updateIfNeeded), draw(model), 1);
    }

    return function (nextModel, isSync) {
      model = nextModel;
      isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _Ax__95Browser_95requestAnimationFrame(updateIfNeeded), state = 2);
    };
  };

  var _FG__95Utils_95compare_95raw = function (x, y) {
    var n = _DZ__95Utils_95cmp(x, y);

    return n < 0 ? 0 : n ? 2 : 1;
  };

  var _Ek__95List_95map2_95raw = function (f, xs, ys) {
    for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
    {
      arr.push(_i_(f, xs.a, ys.a));
    }

    return _CB__95List_95fromArray(arr);
  };

  var _E7__95JsArray_95initialize_95raw = function (size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  };

  var _Fe__95JsArray_95initializeFromList_95raw = function (max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _Am_(result, ls);
  };

  var _DV__95Basics_95modBy_95raw = function (modulus, x) {
    var answer = x % modulus;
    return modulus === 0 ? _Aj__95Debug_95crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
  };

  var _Dz__95Json_95addField_95raw = function (key, value, object) {
    object[key] = _BI_(value);
    return object;
  };

  var _F2__36elm_36core_36Dict_36foldr_95raw = function (func, acc, t) {
    foldr: while (true) {
      if (t.$ === -2) {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;

        var $temp$func = func,
            $temp$acc = _Az_(func, key, value, _F2__36elm_36core_36Dict_36foldr_95raw(func, acc, right)),
            $temp$t = left;

        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
  };

  var _Ap__36elm_36core_36List_36foldl_95raw = function (func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;

        var $temp$func = func,
            $temp$acc = _i_(func, x, acc),
            $temp$list = xs;

        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  };

  var _Ff__36elm_36core_36Array_36compressNodes_95raw = function (nodes, acc) {
    compressNodes: while (true) {
      var _v0 = _Fe__95JsArray_95initializeFromList_95raw(32, nodes);

      var node = _v0.a;
      var remainingNodes = _v0.b;

      var newAcc = _Ay_(_Fw__36elm_36core_36Array_36SubTree(node), acc);

      if (!remainingNodes.b) {
        return _C5__36elm_36core_36List_36reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
            $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  };

  var _FE__36elm_36core_36Array_36treeFromBuilder_95raw = function (nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = _Fd__36elm_36core_36Basics_36ceiling(nodeListSize / 32);

      if (newNodeSize === 1) {
        return _Fe__95JsArray_95initializeFromList_95raw(32, nodeList).a;
      } else {
        var $temp$nodeList = _Ff__36elm_36core_36Array_36compressNodes_95raw(nodeList, _T_r3),
            $temp$nodeListSize = newNodeSize;

        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  };

  var _Ep__36elm_36core_36Array_36builderToArray_95raw = function (reverseNodeList, builder) {
    if (!builder.l) {
      return _FA__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_FB__36elm_36core_36Elm_36JsArray_36length(builder.n), 5, _Dl__36elm_36core_36Elm_36JsArray_36empty, builder.n);
    } else {
      var treeLen = builder.l * 32;

      var depth = _Ed__36elm_36core_36Basics_36floor(_FD__36elm_36core_36Basics_36logBase_95raw(32, treeLen - 1));

      var correctNodeList = reverseNodeList ? _C5__36elm_36core_36List_36reverse(builder.o) : builder.o;

      var tree = _FE__36elm_36core_36Array_36treeFromBuilder_95raw(correctNodeList, builder.l);

      return _FA__36elm_36core_36Array_36Array_95elm_95builtin_95raw(_FB__36elm_36core_36Elm_36JsArray_36length(builder.n) + treeLen, _FF__36elm_36core_36Basics_36max_95raw(5, depth * 5), tree, builder.n);
    }
  };

  var _E8__36elm_36core_36Array_36initializeHelp_95raw = function (fn, fromIndex, len, nodeList, tail) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return _Ep__36elm_36core_36Array_36builderToArray_95raw(false, {
          o: nodeList,
          l: len / 32 | 0,
          n: tail
        });
      } else {
        var leaf = _Eq__36elm_36core_36Array_36Leaf(_E7__95JsArray_95initialize_95raw(32, fromIndex, fn));

        var $temp$fn = fn,
            $temp$fromIndex = fromIndex - 32,
            $temp$len = len,
            $temp$nodeList = _Ay_(leaf, nodeList),
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

  var _DI__36elm_36core_36Array_36initialize_95raw = function (len, fn) {
    if (len <= 0) {
      return _Dh__36elm_36core_36Array_36empty;
    } else {
      var tailLen = len % 32;

      var tail = _E7__95JsArray_95initialize_95raw(tailLen, len - tailLen, fn);

      var initialFromIndex = len - tailLen - 32;
      return _E8__36elm_36core_36Array_36initializeHelp_95raw(fn, initialFromIndex, len, _T_r3, tail);
    }
  };

  var _An__36elm_36core_36Result_36isOk = function (result) {
    if (!result.$) {
      return true;
    } else {
      return false;
    }
  };

  var _Eb__36elm_36virtual_95dom_36VirtualDom_36toHandlerInt = function (handler) {
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

  var _Dq__36elm_36core_36List_36foldrHelper_95raw = function (fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;

      if (!r1.b) {
        return _i_(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;

        if (!r2.b) {
          return _i_(fn, a, _i_(fn, b, acc));
        } else {
          var c = r2.a;
          var r3 = r2.b;

          if (!r3.b) {
            return _i_(fn, a, _i_(fn, b, _i_(fn, c, acc)));
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res = ctr > 500 ? _Ap__36elm_36core_36List_36foldl_95raw(fn, acc, _C5__36elm_36core_36List_36reverse(r4)) : _Dq__36elm_36core_36List_36foldrHelper_95raw(fn, acc, ctr + 1, r4);
            return _i_(fn, a, _i_(fn, b, _i_(fn, c, _i_(fn, d, res))));
          }
        }
      }
    }
  };

  var _DJ__36elm_36core_36Task_36spawnCmd_95raw = function (router, _v0) {
    var task = _v0;
    return _E6_(_CJ__95Scheduler_95andThen_95raw(_E9__36elm_36core_36Platform_36sendToApp(router), task));
  };

  var _Bo__36elm_36core_36Task_36cmdMap_95raw = function (tagger, _v0) {
    var task = _v0;
    return _CQ__36elm_36core_36Task_36map_95raw(tagger, task);
  };

  var _Cy__36elm_36core_36List_36any_95raw = function (isOkay, list) {
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

  var _Dm__36elm_36core_36Dict_36foldl_95raw = function (func, acc, dict) {
    foldl: while (true) {
      if (dict.$ === -2) {
        return acc;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var $temp$func = func,
            $temp$acc = _Az_(func, key, value, _Dm__36elm_36core_36Dict_36foldl_95raw(func, acc, left)),
            $temp$dict = right;

        func = $temp$func;
        acc = $temp$acc;
        dict = $temp$dict;
        continue foldl;
      }
    }
  };

  var _Ch__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count = function (_v0) {
    var samples = _v0;
    return _Dm__36elm_36core_36Dict_36foldl_95raw(_CK_((_v1, times, acc) => _Dp__36elm_36core_36List_36length(times) + acc), 0, samples);
  };

  var _Bc__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress = function (status) {
    switch (status.$) {
      case 0:
        return 0;

      case 1:
        return 0;

      case 2:
        var samples = status.b;
        return _Ca__36elm_36core_36Basics_36clamp_95raw(0, 1, _Ch__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples) / (25 * 5));

      case 3:
        return 1;

      default:
        return 1;
    }
  };

  var _Au__36elm_95explorations_36benchmark_36Benchmark_36done = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var status = benchmark_.c;
        return _Bc__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress(status) === 1;

      case 1:
        var benchmarks = benchmark_.b;
        return _Br__36elm_36core_36List_36all_95raw(_Bs__36elm_36core_36Basics_36eq(1), _Bu__36elm_36core_36List_36map_95raw(_Bc__36elm_95explorations_36benchmark_36Benchmark_36Status_36progress, _Bu__36elm_36core_36List_36map_95raw(function (_v1) {
          var status = _v1.c;
          return status;
        }, benchmarks)));

      default:
        var benchmarks = benchmark_.b;
        return _Br__36elm_36core_36List_36all_95raw(_Au__36elm_95explorations_36benchmark_36Benchmark_36done, benchmarks);
    }
  };

  var _Fg__36elm_36core_36Dict_36balance_95raw = function (color, key, value, left, right) {
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
        return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, lK, lV, lLeft, lRight), _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rLeft, rRight));
      } else {
        return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, rK, rV, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, left, rLeft), rRight);
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
        return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, key, value, lRight, right));
      } else {
        return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, left, right);
      }
    }
  };

  var _FH__36elm_36core_36Dict_36insertHelp_95raw = function (key, value, dict) {
    if (dict.$ === -2) {
      return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty);
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;

      var _v1 = _FG__95Utils_95compare_95raw(key, nKey);

      switch (_v1) {
        case 0:
          return _Fg__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _FH__36elm_36core_36Dict_36insertHelp_95raw(key, value, nLeft), nRight);

        case 1:
          return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(nColor, nKey, value, nLeft, nRight);

        default:
          return _Fg__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, nLeft, _FH__36elm_36core_36Dict_36insertHelp_95raw(key, value, nRight));
      }
    }
  };

  var _Ew__36elm_36core_36Dict_36insert_95raw = function (key, value, dict) {
    var _v0 = _FH__36elm_36core_36Dict_36insertHelp_95raw(key, value, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _E1__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0 = function (_v0) {
    var precalculated = _v0.a;
    return precalculated;
  };

  var _Ft__36elm_36core_36Dict_36map_95raw = function (func, dict) {
    if (dict.$ === -2) {
      return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, _i_(func, key, value), _Ft__36elm_36core_36Dict_36map_95raw(func, left), _Ft__36elm_36core_36Dict_36map_95raw(func, right));
    }
  };

  var _FN__36elm_36core_36Result_36map_95raw = function (func, ra) {
    if (!ra.$) {
      var a = ra.a;
      return _C0__36elm_36core_36Result_36Ok(func(a));
    } else {
      var e = ra.a;
      return _C2__36elm_36core_36Result_36Err(e);
    }
  };

  var _Fu__36elm_36core_36List_36partition_95raw = function (pred, list) {
    var step = _Cd_(function (x, _v0) {
      var trues = _v0.a;
      var falses = _v0.b;
      return pred(x) ? _Am_(_Ay_(x, trues), falses) : _Am_(trues, _Ay_(x, falses));
    });

    return _D3__36elm_36core_36List_36foldr_95raw(step, _Am_(_T_r3, _T_r3), list);
  };

  var _F4__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw = function (_v0, x) {
    var slope = _v0.aR;
    var intercept = _v0.aL;
    return slope * x + intercept;
  };

  var _G4__36elm_36core_36Result_36fromMaybe_95raw = function (err, maybe) {
    if (!maybe.$) {
      var v = maybe.a;
      return _C0__36elm_36core_36Result_36Ok(v);
    } else {
      return _C2__36elm_36core_36Result_36Err(err);
    }
  };

  var _G5__36elm_36core_36Maybe_36map3_95raw = function (func, ma, mb, mc) {
    if (ma.$ === 1) {
      return _EW__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _EW__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;

        if (mc.$ === 1) {
          return _EW__36elm_36core_36Maybe_36Nothing;
        } else {
          var c = mc.a;
          return _EM__36elm_36core_36Maybe_36Just(_Az_(func, a, b, c));
        }
      }
    }
  };

  var _GA__36elm_36core_36Maybe_36andThen_95raw = function (callback, maybeValue) {
    if (!maybeValue.$) {
      var value = maybeValue.a;
      return callback(value);
    } else {
      return _EW__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _GD__36elm_36core_36Maybe_36map_95raw = function (f, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return _EM__36elm_36core_36Maybe_36Just(f(value));
    } else {
      return _EW__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _GE__36elm_36core_36Maybe_36map2_95raw = function (func, ma, mb) {
    if (ma.$ === 1) {
      return _EW__36elm_36core_36Maybe_36Nothing;
    } else {
      var a = ma.a;

      if (mb.$ === 1) {
        return _EW__36elm_36core_36Maybe_36Nothing;
      } else {
        var b = mb.a;
        return _EM__36elm_36core_36Maybe_36Just(_i_(func, a, b));
      }
    }
  };

  var _GH__36elm_36core_36List_36drop_95raw = function (n, list) {
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

  var _GG__36elm_36core_36List_36head = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _EM__36elm_36core_36Maybe_36Just(x);
    } else {
      return _EW__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean = function (numbers) {
    if (!numbers.b) {
      return _C2__36elm_36core_36Result_36Err(_F9__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(1));
    } else {
      return _C0__36elm_36core_36Result_36Ok(_Ej__36elm_36core_36List_36sum(numbers) / _Dp__36elm_36core_36List_36length(numbers));
    }
  };

  var _GM__36elm_36core_36List_36takeReverse_95raw = function (n, list, kept) {
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
              $temp$kept = _Ay_(x, kept);

          n = $temp$n;
          list = $temp$list;
          kept = $temp$kept;
          continue takeReverse;
        }
      }
    }
  };

  var _GK__36elm_36core_36List_36takeFast_95raw = function (ctr, n, list) {
    if (n <= 0) {
      return _T_r3;
    } else {
      var _v0 = _Am_(n, list);

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
                    return ctr > 1000 ? _Ay_(x, _Ay_(y, _Ay_(z, _Ay_(w, _GL__36elm_36core_36List_36takeTailRec_95raw(n - 4, tl))))) : _Ay_(x, _Ay_(y, _Ay_(z, _Ay_(w, _GK__36elm_36core_36List_36takeFast_95raw(ctr + 1, n - 4, tl)))));
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

  var _GI__36elm_36core_36Result_36toMaybe = function (result) {
    if (!result.$) {
      var v = result.a;
      return _EM__36elm_36core_36Maybe_36Just(v);
    } else {
      return _EW__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _G9__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw = function (k, xs) {
    var index = _Dp__36elm_36core_36List_36length(xs) * k;
    return !(index - _Ed__36elm_36core_36Basics_36floor(index)) ? _GG__36elm_36core_36List_36head(_GH__36elm_36core_36List_36drop_95raw(_Fd__36elm_36core_36Basics_36ceiling(index) - 1, xs)) : _GI__36elm_36core_36Result_36toMaybe(_Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_GJ__36elm_36core_36List_36take_95raw(2, _GH__36elm_36core_36List_36drop_95raw(_Ed__36elm_36core_36Basics_36floor(index) - 1, xs))));
  };

  var _G7__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw = function (pct, slopes, points) {
    var slope = _G9__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(pct, slopes);

    var intercept = _GA__36elm_36core_36Maybe_36andThen_95raw(_GB__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile(pct), _GD__36elm_36core_36Maybe_36map_95raw(_G0__36elm_36core_36List_36sort, _GD__36elm_36core_36Maybe_36map_95raw(m => _Bu__36elm_36core_36List_36map_95raw(function (_v0) {
      var x = _v0.a;
      var y = _v0.b;
      return y - m * x;
    }, points), slope)));

    return _GE__36elm_36core_36Maybe_36map2_95raw(_FQ__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slope, intercept);
  };

  var _Fv__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust = function (values) {
    if (!values.b) {
      return _C2__36elm_36core_36Result_36Err(_F9__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _C2__36elm_36core_36Result_36Err(_F9__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var slopes = _G0__36elm_36core_36List_36sort(_Ap__36elm_36core_36List_36foldl_95raw(_Cd_(function (_v1, acc1) {
          var x = _v1.a;
          var y = _v1.b;
          return _Ap__36elm_36core_36List_36foldl_95raw(_Cd_(function (_v2, acc2) {
            var x1 = _v2.a;
            var y1 = _v2.b;
            var res = (y - y1) / (x - x1);
            return _Fn__36elm_36core_36Basics_36isNaN(res) ? acc2 : _Ay_(res, acc2);
          }), acc1, values);
        }), _T_r3, values));

        var finiteSlopes = _G1__36elm_36core_36List_36filter_95raw(_i_(_Cz__36elm_36core_36Basics_36composeL, _D1__36elm_36core_36Basics_36not, _G2__36elm_36core_36Basics_36isInfinite), slopes);

        return _G4__36elm_36core_36Result_36fromMaybe_95raw(_FZ__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros, _G5__36elm_36core_36Maybe_36map3_95raw(_CK_((trendLine, lower, upper) => _FO__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, _G6__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw(lower, upper))), _G7__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.5, finiteSlopes, values), _G7__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.975, slopes, values), _G7__36BrianHicks_36elm_95trend_36Trend_36Linear_36theilSenLine_95raw(0.025, slopes, values)));
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

  var _FV__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups = function (_v0) {
    var samples = _v0;
    return _Eh__36elm_36core_36Result_36withDefault_95raw(_Am_(samples, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty), _FN__36elm_36core_36Result_36map_95raw(_i_(_Fr__36elm_36core_36Dict_36foldl, _CK_(function (key, _v1, _v2) {
      var good = _v1.a;
      var outliers = _v1.b;
      var accGood = _v2.a;
      var accOutliers = _v2.b;
      return _Am_(_Ew__36elm_36core_36Dict_36insert_95raw(key, good, accGood), _Ew__36elm_36core_36Dict_36insert_95raw(key, outliers, accOutliers));
    }), _Am_(_Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty)), _FN__36elm_36core_36Result_36map_95raw(line => _Ft__36elm_36core_36Dict_36map_95raw(_Cd_(function (sampleSize, values) {
      var predicted = _F4__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(line, sampleSize);

      var upperBound = predicted * 1.1;
      var lowerBound = predicted / 1.1;
      return _Fu__36elm_36core_36List_36partition_95raw(v => _DZ__95Utils_95cmp(lowerBound, v) < 0 && _DZ__95Utils_95cmp(v, upperBound) < 0, values);
    }), samples), _FN__36elm_36core_36Result_36map_95raw(_E1__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, _Fv__36BrianHicks_36elm_95trend_36Trend_36Linear_36robust(_FT__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify(samples))))));
  };

  var _FU__36elm_36core_36Tuple_36mapFirst_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _Am_(func(x), y);
  };

  var _FS__36elm_36core_36Tuple_36mapSecond_95raw = function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _Am_(x, func(y));
  };

  var _Fm__36elm_36core_36Result_36andThen_95raw = function (callback, result) {
    if (!result.$) {
      var value = result.a;
      return callback(value);
    } else {
      var msg = result.a;
      return _C2__36elm_36core_36Result_36Err(msg);
    }
  };

  var _FP__36elm_36core_36Result_36map2_95raw = function (func, ra, rb) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _C2__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _C2__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;
        return _C0__36elm_36core_36Result_36Ok(_i_(func, a, b));
      }
    }
  };

  var _FM__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev = function (numbers) {
    var helper = seriesMean => _FN__36elm_36core_36Result_36map_95raw(_Fo__36elm_36core_36Basics_36sqrt, _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(_Bu__36elm_36core_36List_36map_95raw(n => _i_(_El__36elm_36core_36Basics_36pow, n - seriesMean, 2), numbers)));

    return _Fm__36elm_36core_36Result_36andThen_95raw(helper, _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(numbers));
  };

  var _Ee__36elm_36core_36List_36unzip = function (pairs) {
    var step_raw = function (_v0, _v1) {
      var x = _v0.a;
      var y = _v0.b;
      var xs = _v1.a;
      var ys = _v1.b;
      return _Am_(_Ay_(x, xs), _Ay_(y, ys));
    },
        step = _Cd_(step_raw);

    return _D3__36elm_36core_36List_36foldr_95raw(step, _Am_(_T_r3, _T_r3), pairs);
  };

  var _FL__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation = function (values) {
    if (!values.b) {
      return _C2__36elm_36core_36Result_36Err(_F9__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _C2__36elm_36core_36Result_36Err(_F9__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var standardize_raw = (meanResult, stddevResult, series) => _FP__36elm_36core_36Result_36map2_95raw(_Cd_((meanValue, stddevValue) => _Bu__36elm_36core_36List_36map_95raw(point => (point - meanValue) / stddevValue, series)), meanResult, stddevResult),
            standardize = _CK_(standardize_raw);

        var _v1 = _Ee__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var summedProduct = _FN__36elm_36core_36Result_36map_95raw(_Ej__36elm_36core_36List_36sum, _FP__36elm_36core_36Result_36map2_95raw(_Cd_((stdX, stdY) => _Ek__95List_95map2_95raw(_Fk__36elm_36core_36Basics_36mul, stdX, stdY)), standardize_raw(_Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs), _FM__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs), xs), standardize_raw(_Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), _FM__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), ys)));

        return _Fm__36elm_36core_36Result_36andThen_95raw(val => _Fn__36elm_36core_36Basics_36isNaN(val) ? _C2__36elm_36core_36Result_36Err(_FZ__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros) : _C0__36elm_36core_36Result_36Ok(val), _FN__36elm_36core_36Result_36map_95raw(sum => sum / _Dp__36elm_36core_36List_36length(values), summedProduct));
      }
    }
  };

  var _FK__36elm_36core_36Result_36map3_95raw = function (func, ra, rb, rc) {
    if (ra.$ === 1) {
      var x = ra.a;
      return _C2__36elm_36core_36Result_36Err(x);
    } else {
      var a = ra.a;

      if (rb.$ === 1) {
        var x = rb.a;
        return _C2__36elm_36core_36Result_36Err(x);
      } else {
        var b = rb.a;

        if (rc.$ === 1) {
          var x = rc.a;
          return _C2__36elm_36core_36Result_36Err(x);
        } else {
          var c = rc.a;
          return _C0__36elm_36core_36Result_36Ok(_Az_(func, a, b, c));
        }
      }
    }
  };

  var _Ey__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick = function (values) {
    if (!values.b) {
      return _C2__36elm_36core_36Result_36Err(_F9__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
    } else {
      if (!values.b.b) {
        return _C2__36elm_36core_36Result_36Err(_F9__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues(2));
      } else {
        var _v1 = _Ee__36elm_36core_36List_36unzip(values);

        var xs = _v1.a;
        var ys = _v1.b;

        var slopeResult = _FK__36elm_36core_36Result_36map3_95raw(_CK_((correl, stddevY, stddevX) => correl * stddevY / stddevX), _FL__36BrianHicks_36elm_95trend_36Trend_36Math_36correlation(values), _FM__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(ys), _FM__36BrianHicks_36elm_95trend_36Trend_36Math_36stddev(xs));

        var intercept = _FK__36elm_36core_36Result_36map3_95raw(_CK_((meanY, slope, meanX) => meanY - slope * meanX), _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys), slopeResult, _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(xs));

        return _FN__36elm_36core_36Result_36map_95raw(trendLine => _FO__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw(trendLine, values), _FP__36elm_36core_36Result_36map2_95raw(_FQ__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line, slopeResult, intercept));
      }
    }
  };

  var _DX__36elm_95explorations_36benchmark_36Benchmark_36finalize = function (samples) {
    var _v0 = _EN__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend(samples);

    if (!_v0.$) {
      var trend = _v0.a;
      return _EO__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw(samples, trend);
    } else {
      var err = _v0.a;
      return _DQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure(_EP__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError(err));
    }
  };

  var _EG__36elm_36core_36List_36minimum = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return _EM__36elm_36core_36Maybe_36Just(_Ap__36elm_36core_36List_36foldl_95raw(_Er__36elm_36core_36Basics_36min, x, xs));
    } else {
      return _EW__36elm_36core_36Maybe_36Nothing;
    }
  };

  var _Et__36elm_36core_36List_36repeatHelp_95raw = function (result, n, value) {
    repeatHelp: while (true) {
      if (n <= 0) {
        return result;
      } else {
        var $temp$result = _Ay_(value, result),
            $temp$n = n - 1,
            $temp$value = value;

        result = $temp$result;
        n = $temp$n;
        value = $temp$value;
        continue repeatHelp;
      }
    }
  };

  var _EK__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize = function (sampleSize) {
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
        helper = _Cd_(helper_raw);

    return helper_raw(sampleSize, 1);
  };

  var _EV__36elm_36core_36Maybe_36withDefault_95raw = function (_default, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  };

  var _DU__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw = function (minimumRuntime, operation_) {
    var sampleSize = i => i * 10;

    var resample = _Cd_((iteration, total) => _DZ__95Utils_95cmp(total, minimumRuntime) < 0 ? _CJ__95Scheduler_95andThen_95raw(resample(iteration + 1), _CQ__36elm_36core_36Task_36map_95raw(_i_(_EE__36elm_36core_36Basics_36composeR, _EG__36elm_36core_36List_36minimum, _EH__36elm_36core_36Maybe_36withDefault(0)), _CX__36elm_36core_36Task_36sequence(_EJ__36elm_36core_36List_36repeat_95raw(3, _DY__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize(iteration), operation_))))) : _Ck__36elm_36core_36Task_36succeed(sampleSize(iteration)));

    return _CQ__36elm_36core_36Task_36map_95raw(_EK__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36standardizeSampleSize, _i_(resample, 1, 0));
  };

  var _Ev__36elm_36core_36Dict_36get_95raw = function (targetKey, dict) {
    get: while (true) {
      if (dict.$ === -2) {
        return _EW__36elm_36core_36Maybe_36Nothing;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var _v1 = _FG__95Utils_95compare_95raw(targetKey, key);

        switch (_v1) {
          case 0:
            var $temp$targetKey = targetKey,
                $temp$dict = left;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;

          case 1:
            return _EM__36elm_36core_36Maybe_36Just(value);

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

  var _Fx__36elm_36core_36Dict_36getMin = function (dict) {
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

  var _Fh__36elm_36core_36Dict_36moveRedLeft = function (dict) {
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
        return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rlK, rlV, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), rlL), _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, rK, rV, rlR, rRight));
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
          return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _Fz__36elm_36core_36Dict_36moveRedRight = function (dict) {
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
        return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, llK, llV, llLeft, llRight), _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, lRight, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight)));
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
          return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        } else {
          return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, lK, lV, lLeft, lRight), _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, rK, rV, rLeft, rRight));
        }
      }
    } else {
      return dict;
    }
  };

  var _Fj__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw = function (targetKey, dict, color, key, value, left, right) {
    if (left.$ === -1 && !left.a) {
      var _v1 = left.a;
      var lK = left.b;
      var lV = left.c;
      var lLeft = left.d;
      var lRight = left.e;
      return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, lK, lV, lLeft, _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(0, key, value, lRight, right));
    } else {
      _v2$2: while (true) {
        if (right.$ === -1 && right.a === 1) {
          if (right.d.$ === -1) {
            if (right.d.a === 1) {
              var _v3 = right.a;
              var _v4 = right.d;
              var _v5 = _v4.a;
              return _Fz__36elm_36core_36Dict_36moveRedRight(dict);
            } else {
              break _v2$2;
            }
          } else {
            var _v6 = right.a;
            var _v7 = right.d;
            return _Fz__36elm_36core_36Dict_36moveRedRight(dict);
          }
        } else {
          break _v2$2;
        }
      }

      return dict;
    }
  };

  var _Fy__36elm_36core_36Dict_36removeMin = function (dict) {
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
          return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _Fy__36elm_36core_36Dict_36removeMin(left), right);
        } else {
          var _v4 = _Fh__36elm_36core_36Dict_36moveRedLeft(dict);

          if (_v4.$ === -1) {
            var nColor = _v4.a;
            var nKey = _v4.b;
            var nValue = _v4.c;
            var nLeft = _v4.d;
            var nRight = _v4.e;
            return _Fg__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _Fy__36elm_36core_36Dict_36removeMin(nLeft), nRight);
          } else {
            return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
          }
        }
      } else {
        return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _Fy__36elm_36core_36Dict_36removeMin(left), right);
      }
    } else {
      return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    }
  };

  var _FJ__36elm_36core_36Dict_36removeHelp_95raw = function (targetKey, dict) {
    if (dict.$ === -2) {
      return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_DZ__95Utils_95cmp(targetKey, key) < 0) {
        if (left.$ === -1 && left.a === 1) {
          var _v4 = left.a;
          var lLeft = left.d;

          if (lLeft.$ === -1 && !lLeft.a) {
            var _v6 = lLeft.a;
            return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _FJ__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
          } else {
            var _v7 = _Fh__36elm_36core_36Dict_36moveRedLeft(dict);

            if (_v7.$ === -1) {
              var nColor = _v7.a;
              var nKey = _v7.b;
              var nValue = _v7.c;
              var nLeft = _v7.d;
              var nRight = _v7.e;
              return _Fg__36elm_36core_36Dict_36balance_95raw(nColor, nKey, nValue, _FJ__36elm_36core_36Dict_36removeHelp_95raw(targetKey, nLeft), nRight);
            } else {
              return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
            }
          }
        } else {
          return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(color, key, value, _FJ__36elm_36core_36Dict_36removeHelp_95raw(targetKey, left), right);
        }
      } else {
        return _Fi__36elm_36core_36Dict_36removeHelpEQGT_95raw(targetKey, _Fj__36elm_36core_36Dict_36removeHelpPrepEQGT_95raw(targetKey, dict, color, key, value, left, right));
      }
    }
  };

  var _Fi__36elm_36core_36Dict_36removeHelpEQGT_95raw = function (targetKey, dict) {
    if (dict.$ === -1) {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;

      if (_Cb__95Utils_95eq(targetKey, key)) {
        var _v1 = _Fx__36elm_36core_36Dict_36getMin(right);

        if (_v1.$ === -1) {
          var minKey = _v1.b;
          var minValue = _v1.c;
          return _Fg__36elm_36core_36Dict_36balance_95raw(color, minKey, minValue, left, _Fy__36elm_36core_36Dict_36removeMin(right));
        } else {
          return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
        }
      } else {
        return _Fg__36elm_36core_36Dict_36balance_95raw(color, key, value, left, _FJ__36elm_36core_36Dict_36removeHelp_95raw(targetKey, right));
      }
    } else {
      return _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty;
    }
  };

  var _Ex__36elm_36core_36Dict_36remove_95raw = function (key, dict) {
    var _v0 = _FJ__36elm_36core_36Dict_36removeHelp_95raw(key, dict);

    if (_v0.$ === -1 && !_v0.a) {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw(1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  };

  var _EL__36elm_36core_36Dict_36update_95raw = function (targetKey, alter, dictionary) {
    var _v0 = alter(_Ev__36elm_36core_36Dict_36get_95raw(targetKey, dictionary));

    if (!_v0.$) {
      var value = _v0.a;
      return _Ew__36elm_36core_36Dict_36insert_95raw(targetKey, value, dictionary);
    } else {
      return _Ex__36elm_36core_36Dict_36remove_95raw(targetKey, dictionary);
    }
  };

  var _DW__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw = function (sampleSize, sample, _v0) {
    var samplesDict = _v0;
    return _EL__36elm_36core_36Dict_36update_95raw(sampleSize, function (value) {
      if (value.$ === 1) {
        return _EM__36elm_36core_36Maybe_36Just({
          $: 1,
          a: sample,
          b: _T_r3
        });
      } else {
        var samples_ = value.a;
        return _EM__36elm_36core_36Maybe_36Just(_Ay_(sample, samples_));
      }
    }, samplesDict);
  };

  var _DS__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup = function (operation_) {
    var toCollect = 1000;
    var sampleSize = 10000;

    var helper = soFar => _DZ__95Utils_95cmp(soFar, toCollect) > -1 ? _Ck__36elm_36core_36Task_36succeed(0) : _CJ__95Scheduler_95andThen_95raw(helper, _CQ__36elm_36core_36Task_36map_95raw(_EC__36elm_36core_36Basics_36add(soFar), _DY__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation_)));

    return helper(0);
  };

  var _CU__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw = function (operation, status) {
    switch (status.$) {
      case 0:
        return _DP__95Scheduler_95onError_95raw(_i_(_Cz__36elm_36core_36Basics_36composeL, _i_(_Cz__36elm_36core_36Basics_36composeL, _Ck__36elm_36core_36Task_36succeed, _DQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _DR__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _CQ__36elm_36core_36Task_36map_95raw(_v1 => _Cr__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized, _DS__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36warmup(operation)));

      case 1:
        return _DP__95Scheduler_95onError_95raw(_i_(_Cz__36elm_36core_36Basics_36composeL, _i_(_Cz__36elm_36core_36Basics_36composeL, _Ck__36elm_36core_36Task_36succeed, _DQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _DR__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _CQ__36elm_36core_36Task_36map_95raw(sampleSize => _DT__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(sampleSize, _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty), _DU__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36findSampleSizeWithMinimum_95raw(1, operation)));

      case 2:
        var baseSampleSize = status.a;
        var samples = status.b;
        var sampleSize = baseSampleSize * (2 * _DV__95Basics_95modBy_95raw(25, _Ch__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(samples)) + 1);
        return _DP__95Scheduler_95onError_95raw(_i_(_Cz__36elm_36core_36Basics_36composeL, _i_(_Cz__36elm_36core_36Basics_36composeL, _Ck__36elm_36core_36Task_36succeed, _DQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure), _DR__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError), _CQ__36elm_36core_36Task_36map_95raw(function (newSample) {
          var newSamples = _DW__36elm_95explorations_36benchmark_36Benchmark_36Samples_36record_95raw(sampleSize, newSample, samples);

          return _DZ__95Utils_95cmp(_Ch__36elm_95explorations_36benchmark_36Benchmark_36Samples_36count(newSamples), 25 * 5) > -1 ? _DX__36elm_95explorations_36benchmark_36Benchmark_36finalize(newSamples) : _DT__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw(baseSampleSize, newSamples);
        }, _DY__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw(sampleSize, operation)));

      default:
        return _Ck__36elm_36core_36Task_36succeed(status);
    }
  };

  var _Bb__36elm_95explorations_36benchmark_36Benchmark_36step = function (benchmark_) {
    switch (benchmark_.$) {
      case 0:
        var name = benchmark_.a;
        var inner = benchmark_.b;
        var status = benchmark_.c;
        return _CQ__36elm_36core_36Task_36map_95raw(_i_(_CS__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single, name, inner), _CU__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));

      case 1:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _CQ__36elm_36core_36Task_36map_95raw(_CV__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series(name), _CX__36elm_36core_36Task_36sequence(_Bu__36elm_36core_36List_36map_95raw(function (_v1) {
          var name_ = _v1.a;
          var inner = _v1.b;
          var status = _v1.c;
          return _CQ__36elm_36core_36Task_36map_95raw(status_ => _Cc_(name_, inner, status_), _CU__36elm_95explorations_36benchmark_36Benchmark_36stepLowLevel_95raw(inner, status));
        }, benchmarks)));

      default:
        var name = benchmark_.a;
        var benchmarks = benchmark_.b;
        return _CQ__36elm_36core_36Task_36map_95raw(_CY__36elm_95explorations_36benchmark_36Benchmark_36describe(name), _CX__36elm_36core_36Task_36sequence(_Bu__36elm_36core_36List_36map_95raw(_Bb__36elm_95explorations_36benchmark_36Benchmark_36step, benchmarks)));
    }
  };

  var _E4__36BrianHicks_36elm_95trend_36Trend_36Linear_36goodnessOfFit = function (_v0) {
    var fit = _v0.a;
    var values = _v0.b;

    var _v1 = _Ee__36elm_36core_36List_36unzip(values);

    var xs = _v1.a;
    var ys = _v1.b;

    var predictions = _Bu__36elm_36core_36List_36map_95raw(_Ef__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY(fit), xs);

    var meanY = _Eh__36elm_36core_36Result_36withDefault_95raw(0, _Ei__36BrianHicks_36elm_95trend_36Trend_36Math_36mean(ys));

    var sumSquareResiduals = _Ej__36elm_36core_36List_36sum(_Ek__95List_95map2_95raw(_Cd_((actual, prediction) => _i_(_El__36elm_36core_36Basics_36pow, actual - prediction, 2)), ys, predictions));

    var sumSquareTotal = _Ej__36elm_36core_36List_36sum(_Bu__36elm_36core_36List_36map_95raw(y => _i_(_El__36elm_36core_36Basics_36pow, y - meanY, 2), ys));

    return 1 - sumSquareResiduals / sumSquareTotal;
  };

  var _F8__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw = function (_v0, y) {
    var slope = _v0.aR;
    var intercept = _v0.aL;
    return (y - intercept) / slope;
  };

  var _DC__36author_36project_36Benchmark_36Runner_36Json_36encodeStatus = function (status) {
    switch (status.$) {
      case 0:
        return _D9__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Am_("status", _Ah__36elm_36json_36Json_36Encode_36string("cold")),
          b: _T_r3
        });

      case 1:
        return _D9__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Am_("status", _Ah__36elm_36json_36Json_36Encode_36string("unsized")),
          b: _T_r3
        });

      case 2:
        var i = status.a;
        var samples = status.b;
        return _D9__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Am_("status", _Ah__36elm_36json_36Json_36Encode_36string("pending")),
          b: _T_r3
        });

      case 3:
        var error = status.a;
        return _D9__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Am_("status", _Ah__36elm_36json_36Json_36Encode_36string("failure")),
          b: _T_r3
        });

      default:
        var samples = status.a;
        var quickTrend = status.b;
        return _D9__36elm_36json_36Json_36Encode_36object({
          $: 1,
          a: _Am_("status", _Ah__36elm_36json_36Json_36Encode_36string("success")),
          b: {
            $: 1,
            a: _Am_("runsPerSecond", _Ah__36elm_36json_36Json_36Encode_36string(_E0__36elm_36core_36Basics_36composeR_95raw(_E1__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, _E3__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a1, quickTrend))),
            b: {
              $: 1,
              a: _Am_("goodnessOfFit", _Ah__36elm_36json_36Json_36Encode_36string(_E4__36BrianHicks_36elm_95trend_36Trend_36Linear_36goodnessOfFit(quickTrend))),
              b: _T_r3
            }
          }
        });
    }
  };

  var _By__36author_36project_36Benchmark_36Runner_36Json_36encodeResultItem = function (_v0) {
    var name = _v0.a;
    var status = _v0.b;
    return _D9__36elm_36json_36Json_36Encode_36object({
      $: 1,
      a: _Am_("name", _Ah__36elm_36json_36Json_36Encode_36string(name)),
      b: {
        $: 1,
        a: _Am_("status", _DC__36author_36project_36Benchmark_36Runner_36Json_36encodeStatus(status)),
        b: _T_r3
      }
    });
  };

  var _F6__36elm_36core_36List_36append_95raw = function (xs, ys) {
    if (!ys.b) {
      return xs;
    } else {
      return _D3__36elm_36core_36List_36foldr_95raw(_DG__36elm_36core_36List_36cons, ys, xs);
    }
  };

  var _Dg__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw = function (group, report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _Am_(name, status),
          b: _T_r3
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return _Bu__36elm_36core_36List_36map_95raw(function (_v1) {
          var tag = _v1.a;
          var val = _v1.b;
          return _Am_(group + (", " + (name + (", " + tag))), val);
        }, statuses);

      default:
        var name = report.a;
        var reports = report.b;
        return _DD__36elm_36core_36List_36concatMap_95raw(_DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup(group + (", " + (name + ", "))), reports);
    }
  };

  var _Bz__36author_36project_36Benchmark_36Runner_36Json_36flattenReport = function (report) {
    switch (report.$) {
      case 0:
        var name = report.a;
        var status = report.b;
        return {
          $: 1,
          a: _Am_(name, status),
          b: _T_r3
        };

      case 1:
        var name = report.a;
        var statuses = report.b;
        return _Bu__36elm_36core_36List_36map_95raw(function (_v1) {
          var tag = _v1.a;
          var val = _v1.b;
          return _Am_(name + (", " + tag), val);
        }, statuses);

      default:
        var name = report.a;
        var reports = report.b;
        return _DD__36elm_36core_36List_36concatMap_95raw(_DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup(name), reports);
    }
  };

  var _BL__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark = function (internal) {
    switch (internal.$) {
      case 0:
        var name = internal.a;
        var status = internal.c;
        return _C8__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw(name, status);

      case 1:
        var name = internal.a;
        var benchmarks = internal.b;
        return _CF__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw(name, _Bu__36elm_36core_36List_36map_95raw(function (_v1) {
          var childName = _v1.a;
          var status = _v1.c;
          return _Am_(childName, status);
        }, benchmarks));

      default:
        var name = internal.a;
        var benchmarks = internal.b;
        return _CG__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw(name, _Bu__36elm_36core_36List_36map_95raw(_BL__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark, benchmarks));
    }
  };

  var _c__36author_36project_36Benchmark_36Runner_36Json_36update_95raw = function (sendReport, msg, model) {
    var benchmark = msg;
    return _Au__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _Am_(benchmark, sendReport(_Af__36author_36project_36Benchmark_36Runner_36Json_36encode(benchmark))) : _Am_(benchmark, _Ao__36author_36project_36Benchmark_36Runner_36Json_36next(benchmark));
  };

  var _Ab_ = function (factList, kidList) {
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
      d: _BH__95VirtualDom_95organizeFacts(factList),
      e: kids,
      f: void 0,
      b: descendantsCount
    };
  };

  var _BC__36author_36project_36Main_36addMyType_95raw = function (mine, sum) {
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

  var _C0__36elm_36core_36Result_36Ok = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _C2__36elm_36core_36Result_36Err = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Ay_ = (hd, tl) => {
    return {
      $: 1,
      a: hd,
      b: tl
    };
  };

  var _C1_ = (type, value) => {
    return _C2__36elm_36core_36Result_36Err(_C7__36elm_36json_36Json_36Decode_36Failure_95raw("Expecting " + type, _Ah__36elm_36json_36Json_36Encode_36string(value)));
  };

  var _C7__36elm_36json_36Json_36Decode_36Failure_95raw = (a, b) => {
    return {
      $: 3,
      a: a,
      b: b
    };
  };

  var _C4__36elm_36json_36Json_36Decode_36Index_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _i_ = (fun, a, b) => {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Json_wrap", _$2_Object_46defineProperty(_Ah__36elm_36json_36Json_36Encode_36string, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _C9_ = value => {
    return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
  };

  var _T_r3 = $_1_sub();

  var _Ag__95Json_95run_95raw = (decoder, value) => {
    return _BK__95Json_95runHelp(decoder, _BI_(value));
  };

  var _Dl__36elm_36core_36Elm_36JsArray_36empty = [];

  var _Am_ = (a, b) => {
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

  var _BI_ = value => {
    return value;
  };

  var _FA__36elm_36core_36Array_36Array_95elm_95builtin_95raw = (a, b, c, d) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c,
      d: d
    };
  };

  var _FB__36elm_36core_36Elm_36JsArray_36length = array => {
    return array.length;
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_JsArray_length", _$2_Object_46defineProperty(_FB__36elm_36core_36Elm_36JsArray_36length, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _C3__36elm_36json_36Json_36Decode_36Field_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _Bu__36elm_36core_36List_36map_95raw = (f, xs) => {
    return _D3__36elm_36core_36List_36foldr_95raw(_Cd_((x, acc) => _Ay_(f(x), acc)), _T_r3, xs);
  };

  var _C5__36elm_36core_36List_36reverse = list => {
    return _Ap__36elm_36core_36List_36foldl_95raw(_DG__36elm_36core_36List_36cons, _T_r3, list);
  };

  var _DG__36elm_36core_36List_36cons = a => {
    return b => _Ay_(a, b);
  };

  var _C6__36elm_36json_36Json_36Decode_36OneOf = a => {
    return {
      $: 2,
      a: a
    };
  };

  var _Ed__36elm_36core_36Basics_36floor = _$4_Math_46floor;

  var _BM__36elm_36core_36Task_36onEffects = a => {
    return b => c => _Bm__36elm_36core_36Task_36onEffects_95raw(a, b, c);
  };

  var _Bm__36elm_36core_36Task_36onEffects_95raw = (router, commands, state) => {
    return _CQ__36elm_36core_36Task_36map_95raw(_v0 => 0, _CX__36elm_36core_36Task_36sequence(_Bu__36elm_36core_36List_36map_95raw(_Ci__36elm_36core_36Task_36spawnCmd(router), commands)));
  };

  var _Fc__95Basics_95log = _$5_Math_46log;

  var _BO__36elm_36core_36Task_36onSelfMsg = a => {
    return b => c => _Bn__36elm_36core_36Task_36onSelfMsg_95raw(a, b, c);
  };

  var _CC_ = array => {
    return _DI__36elm_36core_36Array_36initialize_95raw(array.length, i => array[i]);
  };

  var _Bn__36elm_36core_36Task_36onSelfMsg_95raw = (_v0, _v1, _v2) => {
    return _Ck__36elm_36core_36Task_36succeed(0);
  };

  var _BQ__36elm_36core_36Task_36cmdMap = a => {
    return b => _Bo__36elm_36core_36Task_36cmdMap_95raw(a, b);
  };

  var _FD__36elm_36core_36Basics_36logBase_95raw = (base, number) => {
    return _Fc__95Basics_95log(number) / _Fc__95Basics_95log(base);
  };

  var _CJ__95Scheduler_95andThen_95raw = (callback, task) => {
    return {
      $: 3,
      b: callback,
      d: task
    };
  };

  var _Ac__36elm_36html_36Html_36text = string => {
    return {
      $: 0,
      a: string
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

      var currNode = _e__95VirtualDom_95virtualize(domNode);

      return _f__95Browser_95makeAnimator(initialModel, function (model) {
        var nextNode = view(model);

        var patches = _g__95VirtualDom_95diff(currNode, nextNode);

        domNode = _h__95VirtualDom_95applyPatches(domNode, currNode, patches, sendToApp);
        currNode = nextNode;
      });
    });
  };

  var _Ck__36elm_36core_36Task_36succeed = value => {
    return {
      $: 0,
      a: value
    };
  };

  var _BS__95Platform_95outgoingPortMap = a => {
    return b => _Bp__95Platform_95outgoingPortMap_95raw(a, b);
  };

  var _CQ__36elm_36core_36Task_36map_95raw = (func, taskA) => {
    return _CJ__95Scheduler_95andThen_95raw(a => _Ck__36elm_36core_36Task_36succeed(func(a)), taskA);
  };

  var _Az_ = (fun, a, b, c) => {
    return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
  };

  var _Av__95VirtualDom_95attribute_95raw = (key, value) => {
    return {
      $: "a3",
      n: key,
      o: value
    };
  };

  var _Aw__95VirtualDom_95node = b => {
    return _Bd__95VirtualDom_95nodeNS_95raw(void 0, b);
  };

  var _Ax__95Browser_95requestAnimationFrame = callback => {
    return setTimeout(callback, 1000 / 60);
  };

  var _Eq__36elm_36core_36Array_36Leaf = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _BU__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick = x => {
    return x;
  };

  var _Bp__95Platform_95outgoingPortMap_95raw = (tagger, value) => {
    return value;
  };

  var _D3__36elm_36core_36List_36foldr_95raw = (fn, acc, ls) => {
    return _Dq__36elm_36core_36List_36foldrHelper_95raw(fn, acc, 0, ls);
  };

  var _CX__36elm_36core_36Task_36sequence = tasks => {
    return _D3__36elm_36core_36List_36foldr_95raw(_Dc__36elm_36core_36Task_36map2(_DG__36elm_36core_36List_36cons), _Ck__36elm_36core_36Task_36succeed(_T_r3), tasks);
  };

  var _Cd_ = fun => {
    return _DL_F(2, fun, a => b => fun(a, b));
  };

  _DG__36elm_36core_36List_36cons.a = 2;

  var _Dc__36elm_36core_36Task_36map2 = a => {
    return b => c => _Dr__36elm_36core_36Task_36map2_95raw(a, b, c);
  };

  var _Bd__95VirtualDom_95nodeNS_95raw = (namespace, tag) => {
    return _Cd_(function (factList, kidList) {
      for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
        var kid = kidList.a;
        descendantsCount += kid.b || 0;
        kids.push(kid);
      }

      descendantsCount += kids.length;
      return {
        $: 1,
        c: tag,
        d: _BH__95VirtualDom_95organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount
      };
    });
  };

  var _Dr__36elm_36core_36Task_36map2_95raw = (func, taskA, taskB) => {
    return _CJ__95Scheduler_95andThen_95raw(a => _CJ__95Scheduler_95andThen_95raw(b => _Ck__36elm_36core_36Task_36succeed(_i_(func, a, b)), taskB), taskA);
  };

  var _Ci__36elm_36core_36Task_36spawnCmd = a => {
    return b => _DJ__36elm_36core_36Task_36spawnCmd_95raw(a, b);
  };

  var _DK_ = callback => {
    return {
      $: 2,
      b: callback,
      c: null
    };
  };

  _DG__36elm_36core_36List_36cons.f = _Ay_;
  var _Fd__36elm_36core_36Basics_36ceiling = _$6_Math_46ceil;

  var _FF__36elm_36core_36Basics_36max_95raw = (x, y) => {
    return _DZ__95Utils_95cmp(x, y) > 0 ? x : y;
  };

  var _BZ__36elm_36core_36Task_36perform_95raw = (toMessage, task) => {
    return _CP__36elm_36core_36Task_36command(_CQ__36elm_36core_36Task_36map_95raw(toMessage, task));
  };

  var _Ba__36author_36project_36Benchmark_36Runner_36Json_36breakForRender = task => {
    return _CJ__95Scheduler_95andThen_95raw(_v0 => task, _CH__36elm_36core_36Process_36sleep(0));
  };

  var _E6_ = task => {
    return _DK_(function (callback) {
      callback(_Ck__36elm_36core_36Task_36succeed(_CN__95Scheduler_95rawSpawn(task)));
    });
  };

  var _Br__36elm_36core_36List_36all_95raw = (isOkay, list) => {
    return !_Cy__36elm_36core_36List_36any_95raw(_i_(_Cz__36elm_36core_36Basics_36composeL, _D1__36elm_36core_36Basics_36not, isOkay), list);
  };

  var _Bs__36elm_36core_36Basics_36eq = a => {
    return b => _Cb__95Utils_95eq(a, b);
  };

  var _E9__36elm_36core_36Platform_36sendToApp = a => {
    return b => _ET__95Platform_95sendToApp_95raw(a, b);
  };

  var _ET__95Platform_95sendToApp_95raw = (router, msg) => {
    return _DK_(function (callback) {
      router.g(msg);
      callback(_Ck__36elm_36core_36Task_36succeed(0));
    });
  };

  var _CH__36elm_36core_36Process_36sleep = time => {
    return _DK_(function (callback) {
      var id = setTimeout(function () {
        callback(_Ck__36elm_36core_36Task_36succeed(0));
      }, time);
      return function () {
        clearTimeout(id);
      };
    });
  };

  var _Fw__36elm_36core_36Array_36SubTree = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _B5__36elm_36core_36Task_36init = {
    $: 0,
    a: 0
  };

  var _CK_ = fun => {
    return _DL_F(3, fun, a => b => c => fun(a, b, c));
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Scheduler_succeed", _$2_Object_46defineProperty(_Ck__36elm_36core_36Task_36succeed, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  _Dc__36elm_36core_36Task_36map2.a = 3;

  var _CL_ = callback => {
    return {
      $: 5,
      b: callback
    };
  };

  var _CM_ = (fun, a, b, c, d) => {
    return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
  };

  _Dc__36elm_36core_36Task_36map2.f = _Dr__36elm_36core_36Task_36map2_95raw;
  var _Do__95Scheduler_95queue = [];
  _E9__36elm_36core_36Platform_36sendToApp.a = 2;
  _E9__36elm_36core_36Platform_36sendToApp.f = _ET__95Platform_95sendToApp_95raw;
  _Ci__36elm_36core_36Task_36spawnCmd.a = 2;

  var _Z__36author_36project_36Benchmark_36Runner_36Json_36init_95raw = (benchmark, _v0) => {
    return _Am_(benchmark, _Ao__36author_36project_36Benchmark_36Runner_36Json_36next(benchmark));
  };

  var _Ca__36elm_36core_36Basics_36clamp_95raw = (low, high, number) => {
    return _DZ__95Utils_95cmp(number, low) < 0 ? low : _DZ__95Utils_95cmp(number, high) > 0 ? high : number;
  };

  var _Cg_ = (x, y) => {
    return x.$ == y.$ && _De__95Json_95equality(x.a, y.a);
  };

  _Ci__36elm_36core_36Task_36spawnCmd.f = _DJ__36elm_36core_36Task_36spawnCmd_95raw;
  _BM__36elm_36core_36Task_36onEffects.a = 3;

  var _CP__36elm_36core_36Task_36command = value => {
    return {
      $: 1,
      k: "Task",
      l: value
    };
  };

  var _Ao__36author_36project_36Benchmark_36Runner_36Json_36next = benchmark => {
    return _Au__36elm_95explorations_36benchmark_36Benchmark_36done(benchmark) ? _BE__36elm_36core_36Platform_36Cmd_36none : _BZ__36elm_36core_36Task_36perform_95raw(_BU__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, _Ba__36author_36project_36Benchmark_36Runner_36Json_36breakForRender(_Bb__36elm_95explorations_36benchmark_36Benchmark_36step(benchmark)));
  };

  var _Aq__36author_36project_36Main_36addMyType = a => {
    return b => _BC__36author_36project_36Main_36addMyType_95raw(a, b);
  };

  _BM__36elm_36core_36Task_36onEffects.f = _Bm__36elm_36core_36Task_36onEffects_95raw;

  var _CS__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single = a => {
    return b => c => _Cp__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw(a, b, c);
  };

  var _Cz__36elm_36core_36Basics_36composeL = a => {
    return b => c => _Db__36elm_36core_36Basics_36composeL_95raw(a, b, c);
  };

  _BO__36elm_36core_36Task_36onSelfMsg.a = 3;
  _BO__36elm_36core_36Task_36onSelfMsg.f = _Bn__36elm_36core_36Task_36onSelfMsg_95raw;

  var _D1__36elm_36core_36Basics_36not = bool => {
    return !bool;
  };

  _BQ__36elm_36core_36Task_36cmdMap.a = 2;

  var _Db__36elm_36core_36Basics_36composeL_95raw = (g, f, x) => {
    return g(f(x));
  };

  var _Cp__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw = (a, b, c) => {
    return {
      $: 0,
      a: a,
      b: b,
      c: c
    };
  };

  _BQ__36elm_36core_36Task_36cmdMap.f = _Bo__36elm_36core_36Task_36cmdMap_95raw;

  var _Dp__36elm_36core_36List_36length = xs => {
    return _Ap__36elm_36core_36List_36foldl_95raw(_Cd_((_v0, i) => i + 1), 0, xs);
  };

  var _B4_ = {
    b: _B5__36elm_36core_36Task_36init,
    c: _BM__36elm_36core_36Task_36onEffects,
    d: _BO__36elm_36core_36Task_36onSelfMsg,
    e: _BQ__36elm_36core_36Task_36cmdMap,
    f: void 0
  };
  _BS__95Platform_95outgoingPortMap.a = 2;
  _BS__95Platform_95outgoingPortMap.f = _Bp__95Platform_95outgoingPortMap_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$elm$core$Basics$identity", _$2_Object_46defineProperty(_BU__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Process_sleep", _$2_Object_46defineProperty(_CH__36elm_36core_36Process_36sleep, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _DP__95Scheduler_95onError_95raw = (callback, task) => {
    return {
      $: 4,
      b: callback,
      d: task
    };
  };

  var _DQ__36elm_95explorations_36benchmark_36Benchmark_36Status_36Failure = a => {
    return {
      $: 3,
      a: a
    };
  };

  var _DR__36elm_95explorations_36benchmark_36Benchmark_36Status_36MeasurementError = a => {
    return {
      $: 0,
      a: a
    };
  };

  var _B9_ = {
    e: _BS__95Platform_95outgoingPortMap,
    u: _BU__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick,
    a: _BW__95Platform_95setupOutgoingPort
  };

  var _ER__36elm_36core_36Dict_36toList = dict => {
    return _F2__36elm_36core_36Dict_36foldr_95raw(_CK_((key, value, list) => _Ay_(_Am_(key, value), list)), _T_r3, dict);
  };

  var _B3__95Platform_95effectManagers = {
    Task: _B4_,
    reportResults: _B9_
  };
  var _BA__95Platform_95effectsQueue = [];
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_VirtualDom_text", _$2_Object_46defineProperty(_Ac__36elm_36html_36Html_36text, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _DT__36elm_95explorations_36benchmark_36Benchmark_36Status_36Pending_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _DY__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36sample_95raw = (n, operation_) => {
    return _EQ__95Benchmark_95sample_95raw(n, operation_);
  };

  var _Df__95Browser_95doc = document;
  _Cz__36elm_36core_36Basics_36composeL.a = 3;

  var _EC__36elm_36core_36Basics_36add = a => {
    return b => _EU__95Basics_95add_95raw(a, b);
  };

  _Cz__36elm_36core_36Basics_36composeL.f = _Db__36elm_36core_36Basics_36composeL_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_not", _$2_Object_46defineProperty(_D1__36elm_36core_36Basics_36not, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _E0__36elm_36core_36Basics_36composeR_95raw = (f, g, x) => {
    return g(f(x));
  };

  var _EU__95Basics_95add_95raw = (a, b) => {
    return a + b;
  };

  _Bs__36elm_36core_36Basics_36eq.a = 2;

  var _CV__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series = a => {
    return b => _Cq__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw(a, b);
  };

  var _EQ__95Benchmark_95sample_95raw = (n, fn) => {
    return _DK_(function (callback) {
      var start = _F0__95Benchmark_95getTimestamp();

      try {
        for (var i = 0; i < n; i++) {
          fn();
        }
      } catch (error) {
        if (error instanceof RangeError) {
          callback(_F3_(_EY__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow));
        } else {
          callback(_F3_(_F1__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError(error.message)));
        }

        return;
      }

      var end = _F0__95Benchmark_95getTimestamp();

      callback(_Ck__36elm_36core_36Task_36succeed(end - start));
    });
  };

  var _EE__36elm_36core_36Basics_36composeR = a => {
    return b => c => _E0__36elm_36core_36Basics_36composeR_95raw(a, b, c);
  };

  _Bs__36elm_36core_36Basics_36eq.f = _Cb__95Utils_95eq;

  var _CY__36elm_95explorations_36benchmark_36Benchmark_36describe = a => {
    return b => _Cx__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw(a, b);
  };

  var _BE__36elm_36core_36Platform_36Cmd_36none = {
    $: 2,
    m: _T_r3
  };

  var _Cc_ = (a, b, c) => {
    return {
      a: a,
      b: b,
      c: c
    };
  };

  var _EM__36elm_36core_36Maybe_36Just = a => {
    return {
      $: 0,
      a
    };
  };

  _CS__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.a = 3;

  var _F3_ = error => {
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

  var _EH__36elm_36core_36Maybe_36withDefault = a => {
    return b => _EV__36elm_36core_36Maybe_36withDefault_95raw(a, b);
  };

  var _F1__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36UnknownError = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _Cx__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  _CS__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single.f = _Cp__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Single_95raw;

  var _EJ__36elm_36core_36List_36repeat_95raw = (n, value) => {
    return _Et__36elm_36core_36List_36repeatHelp_95raw(_T_r3, n, value);
  };

  var _Cr__36elm_95explorations_36benchmark_36Benchmark_36Status_36Unsized = $_5_sub();

  var _Er__36elm_36core_36Basics_36min = a => {
    return b => _F7__36elm_36core_36Basics_36min_95raw(a, b);
  };

  _EC__36elm_36core_36Basics_36add.a = 2;
  _EC__36elm_36core_36Basics_36add.f = _EU__95Basics_95add_95raw;

  var _F7__36elm_36core_36Basics_36min_95raw = (x, y) => {
    return _DZ__95Utils_95cmp(x, y) < 0 ? x : y;
  };

  var _F0__95Benchmark_95getTimestamp = _$8_Date_46now;

  var _Ej__36elm_36core_36List_36sum = numbers => {
    return _Ap__36elm_36core_36List_36foldl_95raw(_EC__36elm_36core_36Basics_36add, 0, numbers);
  };

  var _EY__36elm_95explorations_36benchmark_36Benchmark_36LowLevel_36StackOverflow = $_6_sub();

  var _Ct__36elm_95explorations_36benchmark_36Benchmark_36Samples_36empty = $_4_root(-2);

  _EE__36elm_36core_36Basics_36composeR.a = 3;
  _EE__36elm_36core_36Basics_36composeR.f = _E0__36elm_36core_36Basics_36composeR_95raw;

  var _El__36elm_36core_36Basics_36pow = a => {
    return b => _F5_(a, b);
  };

  _Er__36elm_36core_36Basics_36min.a = 2;

  var _F9__36BrianHicks_36elm_95trend_36Trend_36Math_36NeedMoreValues = a => {
    return {
      $: 0,
      a: a
    };
  };

  _Er__36elm_36core_36Basics_36min.f = _F7__36elm_36core_36Basics_36min_95raw;
  var _EW__36elm_36core_36Maybe_36Nothing = {
    $: 1,
    a: null
  };
  _EH__36elm_36core_36Maybe_36withDefault.a = 2;
  _EH__36elm_36core_36Maybe_36withDefault.f = _EV__36elm_36core_36Maybe_36withDefault_95raw;

  var _EN__36elm_95explorations_36benchmark_36Benchmark_36Samples_36trend = samples => {
    return _Ey__36BrianHicks_36elm_95trend_36Trend_36Linear_36quick(_Ez__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points(samples).a);
  };

  var _EO__36elm_95explorations_36benchmark_36Benchmark_36Status_36Success_95raw = (a, b) => {
    return {
      $: 4,
      a: a,
      b: b
    };
  };

  var _EP__36elm_95explorations_36benchmark_36Benchmark_36Status_36AnalysisError = a => {
    return {
      $: 1,
      a: a
    };
  };

  var _FI__36elm_36core_36Dict_36RBNode_95elm_95builtin_95raw = (a, b, c, d, e) => {
    return {
      $: -1,
      a: a,
      b: b,
      c: c,
      d: d,
      e: e
    };
  };

  var _Fk__36elm_36core_36Basics_36mul = a => {
    return b => _Fq__95Basics_95mul_95raw(a, b);
  };

  var _Fq__95Basics_95mul_95raw = (a, b) => {
    return a * b;
  };

  var _Eu__36elm_36core_36Basics_36round = _$9_Math_46round;
  _Fk__36elm_36core_36Basics_36mul.a = 2;
  _Fk__36elm_36core_36Basics_36mul.f = _Fq__95Basics_95mul_95raw;
  var _Fo__36elm_36core_36Basics_36sqrt = _$A_Math_46sqrt;
  var _F5_ = _$B_Math_46pow;

  var _Ez__36elm_95explorations_36benchmark_36Benchmark_36Samples_36points = samples => {
    return _FS__36elm_36core_36Tuple_36mapSecond_95raw(_FT__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _FU__36elm_36core_36Tuple_36mapFirst_95raw(_FT__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify, _FV__36elm_95explorations_36benchmark_36Benchmark_36Samples_36groups(samples)));
  };

  _El__36elm_36core_36Basics_36pow.a = 2;

  var _FO__36BrianHicks_36elm_95trend_36Trend_36Linear_36Trend_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _FQ__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line = a => {
    return b => _Fb__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw(a, b);
  };

  var _Fb__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw = (slope, intercept) => {
    return {
      aL: intercept,
      aR: slope
    };
  };

  _El__36elm_36core_36Basics_36pow.f = _F5_;

  var _FT__36elm_95explorations_36benchmark_36Benchmark_36Samples_36pointify = samples => {
    return _F2__36elm_36core_36Dict_36foldr_95raw(_CK_((sampleSize, values, acc) => _Fp__95Utils_95ap(_Bu__36elm_36core_36List_36map_95raw(b => _Am_(sampleSize, b), values), acc)), _T_r3, samples);
  };

  var _Fn__36elm_36core_36Basics_36isNaN = _$C_isNaN;

  var _FZ__36BrianHicks_36elm_95trend_36Trend_36Math_36AllZeros = $_5_sub();

  _FQ__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.a = 2;

  var _Fr__36elm_36core_36Dict_36foldl = a => {
    return b => c => _Dm__36elm_36core_36Dict_36foldl_95raw(a, b, c);
  };

  _FQ__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line.f = _Fb__36BrianHicks_36elm_95trend_36Trend_36Linear_36Line_95raw;
  _Fr__36elm_36core_36Dict_36foldl.a = 3;
  _Fr__36elm_36core_36Dict_36foldl.f = _Dm__36elm_36core_36Dict_36foldl_95raw;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "$BrianHicks$elm_trend$Trend$Linear$line", _$2_Object_46defineProperty(_E1__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a0, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _G0__36elm_36core_36List_36sort = xs => {
    return _G8__95List_95sortBy_95raw(_BU__36BrianHicks_36elm_95trend_36Trend_36Linear_36Quick, xs);
  };

  var _G1__36elm_36core_36List_36filter_95raw = (isGood, list) => {
    return _D3__36elm_36core_36List_36foldr_95raw(_Cd_((x, xs) => isGood(x) ? _Ay_(x, xs) : xs), _T_r3, list);
  };

  var _G2__36elm_36core_36Basics_36isInfinite = n => {
    return n === Infinity || n === -Infinity;
  };

  var _G8__95List_95sortBy_95raw = (f, xs) => {
    return _CB__95List_95fromArray(_GF__95List_95toArray(xs).sort((a, b) => _DZ__95Utils_95cmp(f(a), f(b))));
  };

  var _G6__36BrianHicks_36elm_95trend_36Trend_36Linear_36Robust_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = "_Basics_isInfinite", _$2_Object_46defineProperty(_G2__36elm_36core_36Basics_36isInfinite, "name", $$0_enumerable_58false_44configurable_58true_44writable_58false);

  var _GB__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile = a => {
    return b => _G9__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw(a, b);
  };

  var _GJ__36elm_36core_36List_36take_95raw = (n, list) => {
    return _GK__36elm_36core_36List_36takeFast_95raw(0, n, list);
  };

  var _GL__36elm_36core_36List_36takeTailRec_95raw = (n, list) => {
    return _C5__36elm_36core_36List_36reverse(_GM__36elm_36core_36List_36takeReverse_95raw(n, list, _T_r3));
  };

  _GB__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.a = 2;
  _GB__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile.f = _G9__36BrianHicks_36elm_95trend_36Trend_36Linear_36percentile_95raw;
  _CV__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.a = 2;
  _CV__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series.f = _Cq__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Series_95raw;
  _CY__36elm_95explorations_36benchmark_36Benchmark_36describe.a = 2;
  _CY__36elm_95explorations_36benchmark_36Benchmark_36describe.f = _Cx__36elm_95explorations_36benchmark_36Benchmark_36Benchmark_36Group_95raw;
  _Aq__36author_36project_36Main_36addMyType.a = 2;
  _Aq__36author_36project_36Main_36addMyType.f = _BC__36author_36project_36Main_36addMyType_95raw;

  var _n_a = $_1_sub();

  var _r_b = $_2_sub(5, null);

  var _w_c = $_3_sub("Two", "two");

  var _AY_r2 = $_2_sub(_w_c, _T_r3);

  var _AW_r1 = $_2_sub(_r_b, _AY_r2);

  var _AU_d = $_2_sub(_n_a, _AW_r1);

  var _AS_ = $_2_sub(_w_c, _AU_d);

  var _AQ_ = $_2_sub(_r_b, _AS_);

  var _AO_ = $_2_sub(_n_a, _AQ_);

  var _AM_ = $_2_sub(_w_c, _AO_);

  var _AK_ = $_2_sub(_r_b, _AM_);

  var _AI_ = $_2_sub(_n_a, _AK_);

  var _AG_ = $_2_sub(_w_c, _AI_);

  var _AE_ = $_2_sub(_r_b, _AG_);

  var _AC_res = $_2_sub(_n_a, _AE_);

  var _AA_ = $_2_sub(_w_c, _AC_res);

  var _A8_ = $_2_sub(_r_b, _AA_);

  var _A6_ = $_2_sub(_n_a, _A8_);

  var _A4_ = $_2_sub(_w_c, _A6_);

  var _A2_ = $_2_sub(_r_b, _A4_);

  var _A0_ = $_2_sub(_n_a, _A2_);

  var _9y_ = $_2_sub(_w_c, _A0_);

  var _9w_ = $_2_sub(_r_b, _9y_);

  var _9u_ = $_2_sub(_n_a, _9w_);

  var _9s_ = $_2_sub(_w_c, _9u_);

  var _9q_ = $_2_sub(_r_b, _9s_);

  var _9o_res = $_2_sub(_n_a, _9q_);

  var _9m_ = $_2_sub(_w_c, _9o_res);

  var _9k_ = $_2_sub(_r_b, _9m_);

  var _9i_ = $_2_sub(_n_a, _9k_);

  var _9g_ = $_2_sub(_w_c, _9i_);

  var _9e_ = $_2_sub(_r_b, _9g_);

  var _9c_ = $_2_sub(_n_a, _9e_);

  var _9a_ = $_2_sub(_w_c, _9c_);

  var _9Y_ = $_2_sub(_r_b, _9a_);

  var _9W_ = $_2_sub(_n_a, _9Y_);

  var _9U_ = $_2_sub(_w_c, _9W_);

  var _9S_ = $_2_sub(_r_b, _9U_);

  var _9Q_res = $_2_sub(_n_a, _9S_);

  var _9O_ = $_2_sub(_w_c, _9Q_res);

  var _9M_ = $_2_sub(_r_b, _9O_);

  var _9K_ = $_2_sub(_n_a, _9M_);

  var _9I_ = $_2_sub(_w_c, _9K_);

  var _9G_ = $_2_sub(_r_b, _9I_);

  var _9E_ = $_2_sub(_n_a, _9G_);

  var _9C_ = $_2_sub(_w_c, _9E_);

  var _9A_ = $_2_sub(_r_b, _9C_);

  var _98_ = $_2_sub(_n_a, _9A_);

  var _96_ = $_2_sub(_w_c, _98_);

  var _94_ = $_2_sub(_r_b, _96_);

  var _92_res = $_2_sub(_n_a, _94_);

  var _90_ = $_2_sub(_w_c, _92_res);

  var _8y_ = $_2_sub(_r_b, _90_);

  var _8w_ = $_2_sub(_n_a, _8y_);

  var _8u_ = $_2_sub(_w_c, _8w_);

  var _8s_ = $_2_sub(_r_b, _8u_);

  var _8q_ = $_2_sub(_n_a, _8s_);

  var _8o_ = $_2_sub(_w_c, _8q_);

  var _8m_ = $_2_sub(_r_b, _8o_);

  var _8k_ = $_2_sub(_n_a, _8m_);

  var _8i_ = $_2_sub(_w_c, _8k_);

  var _8g_ = $_2_sub(_r_b, _8i_);

  var _8e_res = $_2_sub(_n_a, _8g_);

  var _8c_ = $_2_sub(_w_c, _8e_res);

  var _8a_ = $_2_sub(_r_b, _8c_);

  var _8Y_ = $_2_sub(_n_a, _8a_);

  var _8W_ = $_2_sub(_w_c, _8Y_);

  var _8U_ = $_2_sub(_r_b, _8W_);

  var _8S_ = $_2_sub(_n_a, _8U_);

  var _8Q_ = $_2_sub(_w_c, _8S_);

  var _8O_ = $_2_sub(_r_b, _8Q_);

  var _8M_ = $_2_sub(_n_a, _8O_);

  var _8K_ = $_2_sub(_w_c, _8M_);

  var _8I_ = $_2_sub(_r_b, _8K_);

  var _8G_res = $_2_sub(_n_a, _8I_);

  var _8E_ = $_2_sub(_w_c, _8G_res);

  var _8C_ = $_2_sub(_r_b, _8E_);

  var _8A_ = $_2_sub(_n_a, _8C_);

  var _88_ = $_2_sub(_w_c, _8A_);

  var _86_ = $_2_sub(_r_b, _88_);

  var _84_ = $_2_sub(_n_a, _86_);

  var _82_ = $_2_sub(_w_c, _84_);

  var _80_ = $_2_sub(_r_b, _82_);

  var _7y_ = $_2_sub(_n_a, _80_);

  var _7w_ = $_2_sub(_w_c, _7y_);

  var _7u_ = $_2_sub(_r_b, _7w_);

  var _7s_res = $_2_sub(_n_a, _7u_);

  var _7q_ = $_2_sub(_w_c, _7s_res);

  var _7o_ = $_2_sub(_r_b, _7q_);

  var _7m_ = $_2_sub(_n_a, _7o_);

  var _7k_ = $_2_sub(_w_c, _7m_);

  var _7i_ = $_2_sub(_r_b, _7k_);

  var _7g_ = $_2_sub(_n_a, _7i_);

  var _7e_ = $_2_sub(_w_c, _7g_);

  var _7c_ = $_2_sub(_r_b, _7e_);

  var _7a_ = $_2_sub(_n_a, _7c_);

  var _7Y_ = $_2_sub(_w_c, _7a_);

  var _7W_ = $_2_sub(_r_b, _7Y_);

  var _7U_res = $_2_sub(_n_a, _7W_);

  var _7S_ = $_2_sub(_w_c, _7U_res);

  var _7Q_ = $_2_sub(_r_b, _7S_);

  var _7O_ = $_2_sub(_n_a, _7Q_);

  var _7M_ = $_2_sub(_w_c, _7O_);

  var _7K_ = $_2_sub(_r_b, _7M_);

  var _7I_ = $_2_sub(_n_a, _7K_);

  var _7G_ = $_2_sub(_w_c, _7I_);

  var _7E_ = $_2_sub(_r_b, _7G_);

  var _7C_ = $_2_sub(_n_a, _7E_);

  var _7A_ = $_2_sub(_w_c, _7C_);

  var _78_ = $_2_sub(_r_b, _7A_);

  var _76_res = $_2_sub(_n_a, _78_);

  var _74_ = $_2_sub(_w_c, _76_res);

  var _72_ = $_2_sub(_r_b, _74_);

  var _70_ = $_2_sub(_n_a, _72_);

  var _6y_ = $_2_sub(_w_c, _70_);

  var _6w_ = $_2_sub(_r_b, _6y_);

  var _6u_ = $_2_sub(_n_a, _6w_);

  var _6s_ = $_2_sub(_w_c, _6u_);

  var _6q_ = $_2_sub(_r_b, _6s_);

  var _6o_ = $_2_sub(_n_a, _6q_);

  var _6m_ = $_2_sub(_w_c, _6o_);

  var _6k_ = $_2_sub(_r_b, _6m_);

  var _6i_res = $_2_sub(_n_a, _6k_);

  var _6g_ = $_2_sub(_w_c, _6i_res);

  var _6e_ = $_2_sub(_r_b, _6g_);

  var _6c_ = $_2_sub(_n_a, _6e_);

  var _6a_ = $_2_sub(_w_c, _6c_);

  var _6Y_ = $_2_sub(_r_b, _6a_);

  var _6W_ = $_2_sub(_n_a, _6Y_);

  var _6U_ = $_2_sub(_w_c, _6W_);

  var _6S_ = $_2_sub(_r_b, _6U_);

  var _6Q_ = $_2_sub(_n_a, _6S_);

  var _6O_ = $_2_sub(_w_c, _6Q_);

  var _6M_ = $_2_sub(_r_b, _6O_);

  var _6K_res = $_2_sub(_n_a, _6M_);

  var _6I_ = $_2_sub(_w_c, _6K_res);

  var _6G_ = $_2_sub(_r_b, _6I_);

  var _6E_ = $_2_sub(_n_a, _6G_);

  var _6C_ = $_2_sub(_w_c, _6E_);

  var _6A_ = $_2_sub(_r_b, _6C_);

  var _68_ = $_2_sub(_n_a, _6A_);

  var _66_ = $_2_sub(_w_c, _68_);

  var _64_ = $_2_sub(_r_b, _66_);

  var _62_ = $_2_sub(_n_a, _64_);

  var _60_ = $_2_sub(_w_c, _62_);

  var _5y_ = $_2_sub(_r_b, _60_);

  var _5w_res = $_2_sub(_n_a, _5y_);

  var _5u_ = $_2_sub(_w_c, _5w_res);

  var _5s_ = $_2_sub(_r_b, _5u_);

  var _5q_ = $_2_sub(_n_a, _5s_);

  var _5o_ = $_2_sub(_w_c, _5q_);

  var _5m_ = $_2_sub(_r_b, _5o_);

  var _5k_ = $_2_sub(_n_a, _5m_);

  var _5i_ = $_2_sub(_w_c, _5k_);

  var _5g_ = $_2_sub(_r_b, _5i_);

  var _5e_ = $_2_sub(_n_a, _5g_);

  var _5c_ = $_2_sub(_w_c, _5e_);

  var _5a_ = $_2_sub(_r_b, _5c_);

  var _5Y_res = $_2_sub(_n_a, _5a_);

  var _5W_ = $_2_sub(_w_c, _5Y_res);

  var _5U_ = $_2_sub(_r_b, _5W_);

  var _5S_ = $_2_sub(_n_a, _5U_);

  var _5Q_ = $_2_sub(_w_c, _5S_);

  var _5O_ = $_2_sub(_r_b, _5Q_);

  var _5M_ = $_2_sub(_n_a, _5O_);

  var _5K_ = $_2_sub(_w_c, _5M_);

  var _5I_ = $_2_sub(_r_b, _5K_);

  var _5G_ = $_2_sub(_n_a, _5I_);

  var _5E_ = $_2_sub(_w_c, _5G_);

  var _5C_ = $_2_sub(_r_b, _5E_);

  var _5A_res = $_2_sub(_n_a, _5C_);

  var _58_ = $_2_sub(_w_c, _5A_res);

  var _56_ = $_2_sub(_r_b, _58_);

  var _54_ = $_2_sub(_n_a, _56_);

  var _52_ = $_2_sub(_w_c, _54_);

  var _50_ = $_2_sub(_r_b, _52_);

  var _4y_ = $_2_sub(_n_a, _50_);

  var _4w_ = $_2_sub(_w_c, _4y_);

  var _4u_ = $_2_sub(_r_b, _4w_);

  var _4s_ = $_2_sub(_n_a, _4u_);

  var _4q_ = $_2_sub(_w_c, _4s_);

  var _4o_ = $_2_sub(_r_b, _4q_);

  var _4m_res = $_2_sub(_n_a, _4o_);

  var _4k_ = $_2_sub(_w_c, _4m_res);

  var _4i_ = $_2_sub(_r_b, _4k_);

  var _4g_ = $_2_sub(_n_a, _4i_);

  var _4e_ = $_2_sub(_w_c, _4g_);

  var _a_ = _v0 => {
    return _Ap__36elm_36core_36List_36foldl_95raw(_Aq__36author_36project_36Main_36addMyType, 0, _l__36author_36project_36Main_36many);
  };

  var _4c_ = $_2_sub(_r_b, _4e_);

  var _4a_ = $_2_sub(_n_a, _4c_);

  var _A_ = b => {
    return _Z__36author_36project_36Benchmark_36Runner_36Json_36init_95raw(_E__36author_36project_36Main_36suite, b);
  };

  var _4Y_ = $_2_sub(_w_c, _4a_);

  var _B_ = _v0 => {
    return _W__36elm_36core_36Platform_36Sub_36none;
  };

  var _b_ = _v1 => {
    return _Ap__36elm_36core_36List_36foldl_95raw(_As__36author_36project_36Main_36updateRecord, {
      aO: 1,
      bq: 3,
      br: 2
    }, _l__36author_36project_36Main_36many);
  };

  var _4W_ = $_2_sub(_r_b, _4Y_);

  var _4U_ = $_2_sub(_n_a, _4W_);

  var _4S_ = $_2_sub(_w_c, _4U_);

  var _4Q_ = $_2_sub(_r_b, _4S_);

  var _4O_res = $_2_sub(_n_a, _4Q_);

  var _C_ = b => {
    return c => _c__36author_36project_36Benchmark_36Runner_36Json_36update_95raw(_d__36author_36project_36Main_36reportResults, b, c);
  };

  var _3_ = d => {
    return _9_(_4_, _5_, 0, d);
  };

  var _As__36author_36project_36Main_36updateRecord = a => {
    return b => _BD__36author_36project_36Main_36updateRecord_95raw(a, b);
  };

  var _4M_ = $_2_sub(_w_c, _4O_res);

  var _D__36author_36project_36Benchmark_36Runner_36Json_36view = model => {
    return _i_(_j__36elm_36html_36Html_36div, _T_r3, {
      $: 1,
      a: _Ac__36elm_36html_36Html_36text(_Ae__95Json_95encode_95raw(4, _Af__36author_36project_36Benchmark_36Runner_36Json_36encode(model))),
      b: _T_r3
    });
  };

  var _4K_ = $_2_sub(_r_b, _4M_);

  var _d__36author_36project_36Main_36reportResults = value => {
    return {
      $: 1,
      k: "reportResults",
      l: value
    };
  };

  var _4I_ = $_2_sub(_n_a, _4K_);

  var _j__36elm_36html_36Html_36div = a => {
    return b => _Ab_(a, b);
  };

  var _4G_ = $_2_sub(_w_c, _4I_);

  var _Af__36author_36project_36Benchmark_36Runner_36Json_36encode = benchmark => {
    return _BJ__36author_36project_36Benchmark_36Runner_36Json_36encodeReport(_BL__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36fromBenchmark(benchmark));
  };

  var _4E_ = $_2_sub(_r_b, _4G_);

  var _Ae__95Json_95encode_95raw = (indentLevel, value) => {
    return JSON.stringify(_BI_(value), null, indentLevel) + "";
  };

  var _BD__36author_36project_36Main_36updateRecord_95raw = (attr, record) => {
    return _Bq_(record, {
      aO: 87
    });
  };

  var _4C_ = $_2_sub(_n_a, _4E_);

  var _4A_ = $_2_sub(_w_c, _4C_);

  var _48_ = $_2_sub(_r_b, _4A_);

  var _46_ = $_2_sub(_n_a, _48_);

  var _44_ = $_2_sub(_w_c, _46_);

  var _42_ = $_2_sub(_r_b, _44_);

  var _40_res = $_2_sub(_n_a, _42_);

  var _3y_ = $_2_sub(_w_c, _40_res);

  var _3w_ = $_2_sub(_r_b, _3y_);

  var _3u_ = $_2_sub(_n_a, _3w_);

  var _3s_ = $_2_sub(_w_c, _3u_);

  var _BJ__36author_36project_36Benchmark_36Runner_36Json_36encodeReport = report => {
    return _Bx__36elm_36json_36Json_36Encode_36list_95raw(_By__36author_36project_36Benchmark_36Runner_36Json_36encodeResultItem, _Bz__36author_36project_36Benchmark_36Runner_36Json_36flattenReport(report));
  };

  var _3q_ = $_2_sub(_r_b, _3s_);

  var _Bq_ = (oldRecord, updatedFields) => {
    var newRecord = { ...oldRecord
    };

    for (var key in updatedFields) {
      newRecord[key] = updatedFields[key];
    }

    return newRecord;
  };

  var _3o_ = $_2_sub(_n_a, _3q_);

  var _3m_ = $_2_sub(_w_c, _3o_);

  var _3k_ = $_2_sub(_r_b, _3m_);

  var _3i_ = $_2_sub(_n_a, _3k_);

  var _3g_ = $_2_sub(_w_c, _3i_);

  var _3e_ = $_2_sub(_r_b, _3g_);

  var _3c_res = $_2_sub(_n_a, _3e_);

  var _Bx__36elm_36json_36Json_36Encode_36list_95raw = (func, entries) => {
    return _Ah__36elm_36json_36Json_36Encode_36string(_Ap__36elm_36core_36List_36foldl_95raw(_DA_(func), _DB_(0), entries));
  };

  var _3a_ = $_2_sub(_w_c, _3c_res);

  var _3Y_ = $_2_sub(_r_b, _3a_);

  var _3W_ = $_2_sub(_n_a, _3Y_);

  var _3U_ = $_2_sub(_w_c, _3W_);

  var _3S_ = $_2_sub(_r_b, _3U_);

  var _3Q_ = $_2_sub(_n_a, _3S_);

  var _3O_ = $_2_sub(_w_c, _3Q_);

  var _3M_ = $_2_sub(_r_b, _3O_);

  var _3K_ = $_2_sub(_n_a, _3M_);

  var _3I_ = $_2_sub(_w_c, _3K_);

  var _3G_ = $_2_sub(_r_b, _3I_);

  var _3E_res = $_2_sub(_n_a, _3G_);

  var _3C_ = $_2_sub(_w_c, _3E_res);

  var _3A_ = $_2_sub(_r_b, _3C_);

  var _C8__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Single_95raw = (a, b) => {
    return {
      $: 0,
      a: a,
      b: b
    };
  };

  var _38_ = $_2_sub(_n_a, _3A_);

  var _36_ = $_2_sub(_w_c, _38_);

  var _CF__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Series_95raw = (a, b) => {
    return {
      $: 1,
      a: a,
      b: b
    };
  };

  var _CG__36elm_95explorations_36benchmark_36Benchmark_36Reporting_36Group_95raw = (a, b) => {
    return {
      $: 2,
      a: a,
      b: b
    };
  };

  var _34_ = $_2_sub(_r_b, _36_);

  var _32_ = $_2_sub(_n_a, _34_);

  var _30_ = $_2_sub(_w_c, _32_);

  var _2y_ = $_2_sub(_r_b, _30_);

  var _2w_ = $_2_sub(_n_a, _2y_);

  var _2u_ = $_2_sub(_w_c, _2w_);

  var _2s_ = $_2_sub(_r_b, _2u_);

  var _2q_res = $_2_sub(_n_a, _2s_);

  var _2o_ = $_2_sub(_w_c, _2q_res);

  var _2m_ = $_2_sub(_r_b, _2o_);

  var _2k_ = $_2_sub(_n_a, _2m_);

  var _2i_ = $_2_sub(_w_c, _2k_);

  var _2g_ = $_2_sub(_r_b, _2i_);

  var _2e_ = $_2_sub(_n_a, _2g_);

  var _2c_ = $_2_sub(_w_c, _2e_);

  var _2a_ = $_2_sub(_r_b, _2c_);

  var _2Y_ = $_2_sub(_n_a, _2a_);

  var _D9__36elm_36json_36Json_36Encode_36object = pairs => {
    return _Ah__36elm_36json_36Json_36Encode_36string(_Ap__36elm_36core_36List_36foldl_95raw(_Cd_(function (_v0, obj) {
      var k = _v0.a;
      var v = _v0.b;
      return _Dz__95Json_95addField_95raw(k, v, obj);
    }), _Dy_(0), pairs));
  };

  var _DA_ = func => {
    return _Cd_(function (entry, array) {
      array.push(_BI_(func(entry)));
      return array;
    });
  };

  var _DB_ = () => {
    return [];
  };

  var _2W_ = $_2_sub(_w_c, _2Y_);

  var _2U_ = $_2_sub(_r_b, _2W_);

  var _2S_res = $_2_sub(_n_a, _2U_);

  var _2Q_ = $_2_sub(_w_c, _2S_res);

  var _DD__36elm_36core_36List_36concatMap_95raw = (f, list) => {
    return _E5__36elm_36core_36List_36concat(_Bu__36elm_36core_36List_36map_95raw(f, list));
  };

  var _DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup = a => {
    return b => _Dg__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw(a, b);
  };

  var _2O_ = $_2_sub(_r_b, _2Q_);

  var _2M_ = $_2_sub(_n_a, _2O_);

  var _2K_ = $_2_sub(_w_c, _2M_);

  var _2I_ = $_2_sub(_r_b, _2K_);

  var _2G_ = $_2_sub(_n_a, _2I_);

  var _2E_ = $_2_sub(_w_c, _2G_);

  var _2C_ = $_2_sub(_r_b, _2E_);

  var _Dy_ = () => {
    return {};
  };

  var _2A_ = $_2_sub(_n_a, _2C_);

  var _E3__36author_36project_36Benchmark_36Runner_36Json_36runsPerSecond_95a1 = c => {
    return _E0__36elm_36core_36Basics_36composeR_95raw(_Ec_, _Ed__36elm_36core_36Basics_36floor, c);
  };

  var _28_ = $_2_sub(_w_c, _2A_);

  var _26_ = $_2_sub(_r_b, _28_);

  var _24_res = $_2_sub(_n_a, _26_);

  var _22_ = $_2_sub(_w_c, _24_res);

  var _E5__36elm_36core_36List_36concat = lists => {
    return _D3__36elm_36core_36List_36foldr_95raw(_En__36elm_36core_36List_36append, _T_r3, lists);
  };

  var _20_ = $_2_sub(_r_b, _22_);

  var _1y_ = $_2_sub(_n_a, _20_);

  var _1w_ = $_2_sub(_w_c, _1y_);

  var _1u_ = $_2_sub(_r_b, _1w_);

  var _1s_ = $_2_sub(_n_a, _1u_);

  var _1q_ = $_2_sub(_w_c, _1s_);

  var _1o_ = $_2_sub(_r_b, _1q_);

  var _1m_ = $_2_sub(_n_a, _1o_);

  var _1k_ = $_2_sub(_w_c, _1m_);

  var _1i_ = $_2_sub(_r_b, _1k_);

  var _Ec_ = a => {
    return _F8__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictX_95raw(a, 1000);
  };

  var _Ef__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY = a => {
    return b => _F4__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw(a, b);
  };

  var _1g_res = $_2_sub(_n_a, _1i_);

  var _1e_ = $_2_sub(_w_c, _1g_res);

  var _1c_ = $_2_sub(_r_b, _1e_);

  var _1a_ = $_2_sub(_n_a, _1c_);

  var _En__36elm_36core_36List_36append = a => {
    return b => _F6__36elm_36core_36List_36append_95raw(a, b);
  };

  var _1Y_ = $_2_sub(_w_c, _1a_);

  var _1W_ = $_2_sub(_r_b, _1Y_);

  var _1U_ = $_2_sub(_n_a, _1W_);

  var _1S_ = $_2_sub(_w_c, _1U_);

  var _1Q_ = $_2_sub(_r_b, _1S_);

  var _1O_ = $_2_sub(_n_a, _1Q_);

  var _1M_ = $_2_sub(_w_c, _1O_);

  var _1K_ = $_2_sub(_r_b, _1M_);

  var _1I_res = $_2_sub(_n_a, _1K_);

  var _1G_ = $_2_sub(_w_c, _1I_res);

  var _1E_ = $_2_sub(_r_b, _1G_);

  var _1C_ = $_2_sub(_n_a, _1E_);

  var _1A_ = $_2_sub(_w_c, _1C_);

  var _18_ = $_2_sub(_r_b, _1A_);

  var _16_ = $_2_sub(_n_a, _18_);

  var _14_ = $_2_sub(_w_c, _16_);

  var _12_ = $_2_sub(_r_b, _14_);

  var _10_ = $_2_sub(_n_a, _12_);

  var _u_ = $_2_sub(_w_c, _10_);

  var _p_ = $_2_sub(_r_b, _u_);

  var _l__36author_36project_36Main_36many = $_2_sub(_n_a, _p_);

  var _M__36elm_95explorations_36benchmark_36Benchmark_36Status_36Cold = $_6_sub();

  _As__36author_36project_36Main_36updateRecord.a = 2;
  _As__36author_36project_36Main_36updateRecord.f = _BD__36author_36project_36Main_36updateRecord_95raw;

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
  _Ef__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY.f = _F4__36BrianHicks_36elm_95trend_36Trend_36Linear_36predictY_95raw;
  _En__36elm_36core_36List_36append.a = 2;
  _En__36elm_36core_36List_36append.f = _F6__36elm_36core_36List_36append_95raw;
  _DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup.a = 2;
  _DE__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup.f = _Dg__36author_36project_36Benchmark_36Runner_36Json_36flattenReportGroup_95raw;
  _j__36elm_36html_36Html_36div.a = 2;
  _j__36elm_36html_36Html_36div.f = _Ab_;
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