(function (scope) {
    "use strict";
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    const F2 = (fun) => F(2, fun, (a) => (b) => fun(a, b));
    const F3 = (fun) => F(3, fun, (a) => (b) => (c) => fun(a, b, c));
    const F4 = (fun) => F(4, fun, (a) => (b) => (c) => (d) => fun(a, b, c, d));
    const F5 = (fun) => F(5, fun, (a) => (b) => (c) => (d) => (e) => fun(a, b, c, d, e));
    const F6 = (fun) => F(6, fun, (a) => (b) => (c) => (d) => (e) => (f) => fun(a, b, c, d, e, f));
    const F7 = (fun) => F(7, fun, (a) => (b) => (c) => (d) => (e) => (f) => (g) => fun(a, b, c, d, e, f, g));
    const F8 = (fun) => F(8, fun, (a) => (b) => (c) => (d) => (e) => (f) => (g) => (h) => fun(a, b, c, d, e, f, g, h));
    const F9 = (fun) => F(9, fun, (a) => (b) => (c) => (d) => (e) => (f) => (g) => (h) => (i) => fun(a, b, c, d, e, f, g, h, i));
    const A2 = (fun, a, b) => fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    const A3 = (fun, a, b, c) => fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    const A4 = (fun, a, b, c, d) => fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    const A5 = (fun, a, b, c, d, e) => fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    const A6 = (fun, a, b, c, d, e, f) => fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    const A7 = (fun, a, b, c, d, e, f, g) => fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    const A8 = (fun, a, b, c, d, e, f, g, h) => fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    const A9 = (fun, a, b, c, d, e, f, g, h, i) => fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    // EQUALITY
    function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) { }
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
            return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
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
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        //*/
        for (var key in x) {
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
                return false;
            }
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual_raw = (a, b) => !_Utils_eq(a, b), _Utils_notEqual = F2(_Utils_notEqual_raw);
    // COMPARISONS
    // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
    // the particular integer values assigned to LT, EQ, and GT.
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
            return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
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
        if (typeof x.$ === "undefined") 
        //*/
        /**_UNUSED/
        if (x.$[0] === '#')
        //*/
        {
            return (ord = _Utils_cmp(x.a, y.a))
                ? ord
                : (ord = _Utils_cmp(x.b, y.b))
                    ? ord
                    : _Utils_cmp(x.c, y.c);
        }
        // traverse conses until end of a list or a mismatch
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) { } // WHILE_CONSES
        return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
    }
    var _Utils_lt_raw = (a, b) => _Utils_cmp(a, b) < 0, _Utils_lt = F2(_Utils_lt_raw);
    var _Utils_le_raw = (a, b) => _Utils_cmp(a, b) < 1, _Utils_le = F2(_Utils_le_raw);
    var _Utils_gt_raw = (a, b) => _Utils_cmp(a, b) > 0, _Utils_gt = F2(_Utils_gt_raw);
    var _Utils_ge_raw = (a, b) => _Utils_cmp(a, b) >= 0, _Utils_ge = F2(_Utils_ge_raw);
    var _Utils_compare_raw = function (x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    }, _Utils_compare = F2(_Utils_compare_raw);
    // COMMON VALUES
    var _Utils_Tuple0 = 0;
    var _Utils_Tuple0_UNUSED = { $: "#0" };
    const _Utils_Tuple2 = (a, b) => ({ a: a, b: b });
    const _Utils_Tuple2_UNUSED = (a, b) => ({ $: "#2", a: a, b: b });
    const _Utils_Tuple3 = (a, b, c) => ({ a: a, b: b, c: c });
    const _Utils_Tuple3_UNUSED = (a, b, c) => ({ $: "#3", a: a, b: b, c: c });
    const _Utils_chr = (c) => c;
    const _Utils_chr_UNUSED = (c) => new String(c);
    const _Utils_update = (oldRecord, updatedFields) => {
        var newRecord = { ...oldRecord };
        for (var key in updatedFields) {
            newRecord[key] = updatedFields[key];
        }
        return newRecord;
    };
    // APPEND
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        // append Strings
        if (typeof xs === "string") {
            return xs + ys;
        }
        // append Lists
        if (!xs.b) {
            return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
         {
            curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
    }
    var _List_Nil = { $: 0, a: null, b: null };
    var _List_Nil_UNUSED = { $: "[]" };
    const _List_Cons = (hd, tl) => ({ $: 1, a: hd, b: tl });
    const _List_Cons_UNUSED = (hd, tl) => ({ $: "::", a: hd, b: tl });
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--;) {
            out = _List_Cons(arr[i], out);
        }
        return out;
    }
    function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
         {
            out.push(xs.a);
        }
        return out;
    }
    var _List_map2_raw = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
         {
            arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2 = F3(_List_map2_raw);
    var _List_map3_raw = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3 = F4(_List_map3_raw);
    var _List_map4_raw = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4 = F5(_List_map4_raw);
    var _List_map5_raw = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5 = F6(_List_map5_raw);
    var _List_sortBy_raw = (f, xs) => _List_fromArray(_List_toArray(xs).sort((a, b) => _Utils_cmp(f(a), f(b)))), _List_sortBy = F2(_List_sortBy_raw);
    var _List_sortWith_raw = (f, xs) => _List_fromArray(_List_toArray(xs).sort(function (a, b) {
        var ord = A2(f, a, b);
        return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
    })), _List_sortWith = F2(_List_sortWith_raw);
    var _JsArray_empty = [];
    const _JsArray_singleton = (value) => [value];
    const _JsArray_length = (array) => array.length;
    var _JsArray_initialize_raw = function (size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = func(offset + i);
        }
        return result;
    }, _JsArray_initialize = F3(_JsArray_initialize_raw);
    var _JsArray_initializeFromList_raw = function (max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    }, _JsArray_initializeFromList = F2(_JsArray_initializeFromList_raw);
    var _JsArray_unsafeGet_raw = (index, array) => array[index], _JsArray_unsafeGet = F2(_JsArray_unsafeGet_raw);
    var _JsArray_unsafeSet_raw = function (index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[index] = value;
        return result;
    }, _JsArray_unsafeSet = F3(_JsArray_unsafeSet_raw);
    var _JsArray_push_raw = function (value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[length] = value;
        return result;
    }, _JsArray_push = F2(_JsArray_push_raw);
    var _JsArray_foldl_raw = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldl = F3(_JsArray_foldl_raw);
    var _JsArray_foldr_raw = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldr = F3(_JsArray_foldr_raw);
    var _JsArray_map_raw = function (func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(array[i]);
        }
        return result;
    }, _JsArray_map = F2(_JsArray_map_raw);
    var _JsArray_indexedMap_raw = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = A2(func, offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap = F3(_JsArray_indexedMap_raw);
    var _JsArray_slice_raw = (from, to, array) => array.slice(from, to), _JsArray_slice = F3(_JsArray_slice_raw);
    var _JsArray_appendN_raw = function (n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
            itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
            result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
            result[i + destLen] = source[i];
        }
        return result;
    }, _JsArray_appendN = F3(_JsArray_appendN_raw);
    // LOG
    var _Debug_log_raw = (tag, value) => value, _Debug_log = F2(_Debug_log_raw);
    var _Debug_log_UNUSED_raw = function (tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    }, _Debug_log_UNUSED = F2(_Debug_log_UNUSED_raw);
    const _Debug_todo = (moduleName, region) => function (message) {
        _Debug_crash(8, moduleName, region, message);
    };
    const _Debug_todoCase = (moduleName, region, value) => function (message) {
        _Debug_crash(9, moduleName, region, value, message);
    };
    const _Debug_toString = (value) => "<internals>";
    const _Debug_toString_UNUSED = (value) => _Debug_toAnsiString(false, value);
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
            return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
            return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
            return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
            return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
            return _Debug_stringColor(ansi, "\"" + _Debug_addSlashes(value, false) + "\"");
        }
        if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") {
                return _Debug_internalColor(ansi, "<internals>");
            }
            if (tag[0] === "#") {
                var output = [];
                for (var k in value) {
                    if (k === "$")
                        continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") {
                return _Debug_ctorColor(ansi, "Set")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            }
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
                return _Debug_ctorColor(ansi, "Dict")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            }
            if (tag === "Array_elm_builtin") {
                return _Debug_ctorColor(ansi, "Array")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            }
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for (; value.b; value = value.b) // WHILE_CONS
                 {
                    output += "," + _Debug_toAnsiString(ansi, value.a);
                }
                return output + "]";
            }
            var output = "";
            for (var i in value) {
                if (i === "$")
                    continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === "\"" || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
            return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
            return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
            var output = [];
            for (var key in value) {
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) {
                return "{}";
            }
            return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str
            .replace(/\\/g, "\\\\")
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r")
            .replace(/\v/g, "\\v")
            .replace(/\0/g, "\\0");
        if (isChar) {
            return s.replace(/\'/g, "\\'");
        }
        else {
            return s.replace(/\"/g, "\\\"");
        }
    }
    const _Debug_ctorColor = (ansi, string) => ansi ? "\u001B[96m" + string + "\u001B[0m" : string;
    const _Debug_numberColor = (ansi, string) => ansi ? "\u001B[95m" + string + "\u001B[0m" : string;
    const _Debug_stringColor = (ansi, string) => ansi ? "\u001B[93m" + string + "\u001B[0m" : string;
    const _Debug_charColor = (ansi, string) => ansi ? "\u001B[92m" + string + "\u001B[0m" : string;
    const _Debug_fadeColor = (ansi, string) => ansi ? "\u001B[37m" + string + "\u001B[0m" : string;
    const _Debug_internalColor = (ansi, string) => ansi ? "\u001B[36m" + string + "\u001B[0m" : string;
    const _Debug_toHexDigit = (n) => String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    // CRASH
    function _Debug_crash(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
            case 0:
                throw new Error("What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById(\"elm-node\")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.");
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString = fact1;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
                throw new Error("Trying to use `(==)` on functions.\nThere is no way to know if functions are \"the same\" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.");
            case 6:
                var moduleName = fact1;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error("TODO in module `" + moduleName + "` from the `case` expression "
                    + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    "
                    + _Debug_toString(value).replace("\n", "\n    ")
                    + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region) {
        if (region.s.aF === region.o.aF) {
            return "on line " + region.s.aF;
        }
        return "on lines " + region.s.aF + " through " + region.o.aF;
    }
    // MATH
    var _Basics_add_raw = (a, b) => a + b, _Basics_add = F2(_Basics_add_raw);
    var _Basics_sub_raw = (a, b) => a - b, _Basics_sub = F2(_Basics_sub_raw);
    var _Basics_mul_raw = (a, b) => a * b, _Basics_mul = F2(_Basics_mul_raw);
    var _Basics_fdiv_raw = (a, b) => a / b, _Basics_fdiv = F2(_Basics_fdiv_raw);
    var _Basics_idiv_raw = (a, b) => (a / b) | 0, _Basics_idiv = F2(_Basics_idiv_raw);
    var _Basics_pow = F2(Math.pow);
    var _Basics_remainderBy_raw = (b, a) => a % b, _Basics_remainderBy = F2(_Basics_remainderBy_raw);
    // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
    var _Basics_modBy_raw = function (modulus, x) {
        var answer = x % modulus;
        return modulus === 0
            ? _Debug_crash(11)
            :
                ((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
                    ? answer + modulus
                    : answer;
    }, _Basics_modBy = F2(_Basics_modBy_raw);
    // TRIGONOMETRY
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2 = F2(Math.atan2);
    const _Basics_toFloat = (x) => x;
    const _Basics_truncate = (n) => n | 0;
    const _Basics_isInfinite = (n) => n === Infinity || n === -Infinity;
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    const _Basics_not = (bool) => !bool;
    var _Basics_and_raw = (a, b) => a && b, _Basics_and = F2(_Basics_and_raw);
    var _Basics_or_raw = (a, b) => a || b, _Basics_or = F2(_Basics_or_raw);
    var _Basics_xor_raw = (a, b) => a !== b, _Basics_xor = F2(_Basics_xor_raw);
    var _String_cons_raw = (chr, str) => chr + str, _String_cons = F2(_String_cons_raw);
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word)
            ? $elm$core$Maybe$Just(55296 <= word && word <= 56319
                ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
                : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1)))
            : $elm$core$Maybe$Nothing;
    }
    var _String_append_raw = (a, b) => a + b, _String_append = F2(_String_append_raw);
    const _String_length = (str) => str.length;
    var _String_map_raw = function (func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join("");
    }, _String_map = F2(_String_map_raw);
    var _String_filter_raw = function (isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) {
                arr.push(char);
            }
        }
        return arr.join("");
    }, _String_filter = F2(_String_filter_raw);
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            }
            else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join("");
    }
    var _String_foldl_raw = function (func, state, string) {
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
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldl = F3(_String_foldl_raw);
    var _String_foldr_raw = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldr = F3(_String_foldr_raw);
    var _String_split_raw = (sep, str) => str.split(sep), _String_split = F2(_String_split_raw);
    var _String_join_raw = (sep, strs) => strs.join(sep), _String_join = F2(_String_join_raw);
    var _String_slice_raw = (start, end, str) => str.slice(start, end), _String_slice = F3(_String_slice_raw);
    const _String_trim = (str) => str.trim();
    const _String_trimLeft = (str) => str.replace(/^\s+/, "");
    const _String_trimRight = (str) => str.replace(/\s+$/, "");
    const _String_words = (str) => _List_fromArray(str.trim().split(/\s+/g));
    const _String_lines = (str) => _List_fromArray(str.split(/\r\n|\r|\n/g));
    const _String_toUpper = (str) => str.toUpperCase();
    const _String_toLower = (str) => str.toLowerCase();
    var _String_any_raw = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) {
                return true;
            }
        }
        return false;
    }, _String_any = F2(_String_any_raw);
    var _String_all_raw = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) {
                return false;
            }
        }
        return true;
    }, _String_all = F2(_String_all_raw);
    var _String_contains_raw = (sub, str) => str.indexOf(sub) > -1, _String_contains = F2(_String_contains_raw);
    var _String_startsWith_raw = (sub, str) => str.indexOf(sub) === 0, _String_startsWith = F2(_String_startsWith_raw);
    var _String_endsWith_raw = (sub, str) => str.length >= sub.length &&
        str.lastIndexOf(sub) === str.length - sub.length, _String_endsWith = F2(_String_endsWith_raw);
    var _String_indexes_raw = function (sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
            return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    }, _String_indexes = F2(_String_indexes_raw);
    const _String_fromNumber = (number) => number + "";
    // INT CONVERSIONS
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 /* + */ || code0 == 45 /* - */ ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) {
                return $elm$core$Maybe$Nothing;
            }
            total = 10 * total + code - 48;
        }
        return i == start
            ? $elm$core$Maybe$Nothing
            : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    // FLOAT CONVERSIONS
    function _String_toFloat(s) {
        // check if it is a hex, octal, or binary number
        if (s.length === 0 || /[\sxbo]/.test(s)) {
            return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        // faster isNaN check
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    const _String_fromList = (chars) => _List_toArray(chars).join("");
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
    }
    const _Char_fromCode = (code) => _Utils_chr((code < 0 || 1114111 < code)
        ? "\uFFFD"
        :
            (code <= 65535)
                ? String.fromCharCode(code)
                :
                    (code -= 65536,
                        String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    const _Char_toUpper = (char) => _Utils_chr(char.toUpperCase());
    const _Char_toLower = (char) => _Utils_chr(char.toLowerCase());
    const _Char_toLocaleUpper = (char) => _Utils_chr(char.toLocaleUpperCase());
    const _Char_toLocaleLower = (char) => _Utils_chr(char.toLocaleLowerCase());
    const _Json_succeed = (msg) => ({
        $: 0,
        a: msg
    });
    const _Json_fail = (msg) => ({
        $: 1,
        a: msg
    });
    const _Json_decodePrim = (decoder) => ({ $: 2, b: decoder });
    var _Json_decodeInt = _Json_decodePrim((value) => (typeof value !== "number")
        ? _Json_expecting("an INT", value)
        :
            (-2147483647 < value && value < 2147483647 && (value | 0) === value)
                ? $elm$core$Result$Ok(value)
                :
                    (isFinite(value) && !(value % 1))
                        ? $elm$core$Result$Ok(value)
                        : _Json_expecting("an INT", value));
    var _Json_decodeBool = _Json_decodePrim((value) => (typeof value === "boolean")
        ? $elm$core$Result$Ok(value)
        : _Json_expecting("a BOOL", value));
    var _Json_decodeFloat = _Json_decodePrim((value) => (typeof value === "number")
        ? $elm$core$Result$Ok(value)
        : _Json_expecting("a FLOAT", value));
    var _Json_decodeValue = _Json_decodePrim((value) => $elm$core$Result$Ok(_Json_wrap(value)));
    var _Json_decodeString = _Json_decodePrim((value) => (typeof value === "string")
        ? $elm$core$Result$Ok(value)
        : (value instanceof String)
            ? $elm$core$Result$Ok(value + "")
            : _Json_expecting("a STRING", value));
    const _Json_decodeList = (decoder) => ({ $: 3, b: decoder });
    const _Json_decodeArray = (decoder) => ({ $: 4, b: decoder });
    const _Json_decodeNull = (value) => ({ $: 5, c: value });
    var _Json_decodeField_raw = (field, decoder) => ({
        $: 6,
        d: field,
        b: decoder
    }), _Json_decodeField = F2(_Json_decodeField_raw);
    var _Json_decodeIndex_raw = (index, decoder) => ({
        $: 7,
        e: index,
        b: decoder
    }), _Json_decodeIndex = F2(_Json_decodeIndex_raw);
    const _Json_decodeKeyValuePairs = (decoder) => ({
        $: 8,
        b: decoder
    });
    const _Json_mapMany = (f, decoders) => ({
        $: 9,
        f: f,
        g: decoders
    });
    var _Json_andThen_raw = (callback, decoder) => ({
        $: 10,
        b: decoder,
        h: callback
    }), _Json_andThen = F2(_Json_andThen_raw);
    const _Json_oneOf = (decoders) => ({
        $: 11,
        g: decoders
    });
    // DECODING OBJECTS
    var _Json_map1_raw = (f, d1) => _Json_mapMany(f, [d1]), _Json_map1 = F2(_Json_map1_raw);
    var _Json_map2_raw = (f, d1, d2) => _Json_mapMany(f, [d1, d2]), _Json_map2 = F3(_Json_map2_raw);
    var _Json_map3_raw = (f, d1, d2, d3) => _Json_mapMany(f, [d1, d2, d3]), _Json_map3 = F4(_Json_map3_raw);
    var _Json_map4_raw = (f, d1, d2, d3, d4) => _Json_mapMany(f, [d1, d2, d3, d4]), _Json_map4 = F5(_Json_map4_raw);
    var _Json_map5_raw = (f, d1, d2, d3, d4, d5) => _Json_mapMany(f, [d1, d2, d3, d4, d5]), _Json_map5 = F6(_Json_map5_raw);
    var _Json_map6_raw = (f, d1, d2, d3, d4, d5, d6) => _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]), _Json_map6 = F7(_Json_map6_raw);
    var _Json_map7_raw = (f, d1, d2, d3, d4, d5, d6, d7) => _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]), _Json_map7 = F8(_Json_map7_raw);
    var _Json_map8_raw = (f, d1, d2, d3, d4, d5, d6, d7, d8) => _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]), _Json_map8 = F9(_Json_map8_raw);
    // DECODE
    var _Json_runOnString_raw = function (decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        }
        catch (e) {
            return $elm$core$Result$Err($elm$json$Json$Decode$Failure_raw("This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
    }, _Json_runOnString = F2(_Json_runOnString_raw);
    var _Json_run_raw = (decoder, value) => _Json_runHelp(decoder, _Json_unwrap(value)), _Json_run = F2(_Json_run_raw);
    function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
            case 2:
                return decoder.b(value);
            case 5:
                return (value === null)
                    ? $elm$core$Result$Ok(decoder.c)
                    : _Json_expecting("null", value);
            case 3:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("a LIST", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== "object" || value === null || !(field in value)) {
                    return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
                }
                var result = _Json_runHelp(decoder.b, value[field]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Field_raw(field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                if (index >= value.length) {
                    return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
                }
                var result = _Json_runHelp(decoder.b, value[index]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Index_raw(index, result.a));
            case 8:
                if (typeof value !== "object" || value === null || _Json_isArray(value)) {
                    return _Json_expecting("an OBJECT", value);
                }
                var keyValuePairs = _List_Nil;
                // TODO test perf of Object.keys and switch when support is good enough
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var result = _Json_runHelp(decoder.b, value[key]);
                        if (!$elm$core$Result$isOk(result)) {
                            return $elm$core$Result$Err($elm$json$Json$Decode$Field_raw(key, result.a));
                        }
                        keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                    }
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for (var i = 0; i < decoders.length; i++) {
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) {
                        return result;
                    }
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return (!$elm$core$Result$isOk(result))
                    ? result
                    : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
                 {
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) {
                        return result;
                    }
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err($elm$json$Json$Decode$Failure_raw(decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) {
                return $elm$core$Result$Err($elm$json$Json$Decode$Index_raw(i, result.a));
            }
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    const _Json_isArray = (value) => Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
    const _Json_toElmArray = (array) => $elm$core$Array$initialize_raw(array.length, (i) => array[i]);
    const _Json_expecting = (type, value) => $elm$core$Result$Err($elm$json$Json$Decode$Failure_raw("Expecting " + type, _Json_wrap(value)));
    // EQUALITY
    function _Json_equality(x, y) {
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
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (!_Json_equality(aDecoders[i], bDecoders[i])) {
                return false;
            }
        }
        return true;
    }
    // ENCODE
    var _Json_encode_raw = (indentLevel, value) => JSON.stringify(_Json_unwrap(value), null, indentLevel) + "", _Json_encode = F2(_Json_encode_raw);
    const _Json_wrap_UNUSED = (value) => ({ $: 0, a: value });
    const _Json_unwrap_UNUSED = (value) => value.a;
    const _Json_wrap = (value) => value;
    const _Json_unwrap = (value) => value;
    const _Json_emptyArray = () => [];
    const _Json_emptyObject = () => ({});
    var _Json_addField_raw = function (key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    }, _Json_addField = F3(_Json_addField_raw);
    const _Json_addEntry = (func) => F2(function (entry, array) {
        array.push(_Json_unwrap(func(entry)));
        return array;
    });
    var _Json_encodeNull = _Json_wrap(null);
    const _Scheduler_succeed = (value) => ({
        $: 0,
        a: value
    });
    const _Scheduler_fail = (error) => ({
        $: 1,
        a: error
    });
    const _Scheduler_binding = (callback) => ({
        $: 2,
        b: callback,
        c: null
    });
    var _Scheduler_andThen_raw = (callback, task) => ({
        $: 3,
        b: callback,
        d: task
    }), _Scheduler_andThen = F2(_Scheduler_andThen_raw);
    var _Scheduler_onError_raw = (callback, task) => ({
        $: 4,
        b: callback,
        d: task
    }), _Scheduler_onError = F2(_Scheduler_onError_raw);
    const _Scheduler_receive = (callback) => ({
        $: 5,
        b: callback
    });
    // PROCESSES
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    const _Scheduler_spawn = (task) => _Scheduler_binding(function (callback) {
        callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
    });
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send_raw = (proc, msg) => _Scheduler_binding(function (callback) {
        _Scheduler_rawSend(proc, msg);
        callback(_Scheduler_succeed(_Utils_Tuple0));
    }), _Scheduler_send = F2(_Scheduler_send_raw);
    const _Scheduler_kill = (proc) => _Scheduler_binding(function (callback) {
        var task = proc.f;
        if (task.$ === 2 && task.c) {
            task.c();
        }
        proc.f = null;
        callback(_Scheduler_succeed(_Utils_Tuple0));
    });
    /* STEP PROCESSES
    
    type alias Process =
      { $ : tag
      , id : unique_id
      , root : Task
      , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
      , mailbox : [msg]
      }
    
    */
    var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
            return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
            _Scheduler_step(proc);
        }
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
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
            }
            else if (rootTag === 2) {
                proc.f.c = proc.f.b(function (newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            }
            else if (rootTag === 5) {
                if (proc.h.length === 0) {
                    return;
                }
                proc.f = proc.f.b(proc.h.shift());
            }
            else // if (rootTag === 3 || rootTag === 4)
             {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    const _Process_sleep = (time) => _Scheduler_binding(function (callback) {
        var id = setTimeout(function () {
            callback(_Scheduler_succeed(_Utils_Tuple0));
        }, time);
        return function () { clearTimeout(id); };
    });
    // PROGRAMS
    var _Platform_worker_raw = (impl, flagDecoder, debugMetadata, args) => _Platform_initialize(flagDecoder, args, impl.cs, impl.cL, impl.cI, () => function () { }), _Platform_worker = F4(_Platform_worker_raw);
    // INITIALIZE A PROGRAM
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = _Json_run_raw(flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? { ports: ports } : {};
    }
    // TRACK PRELOADS
    //
    // This is used by code in elm/browser and elm/http
    // to register any HTTP requests that are triggered by init.
    //
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    // EFFECT MANAGERS
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        // setup all necessary effect managers
        for (var key in _Platform_effectManagers) {
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    const _Platform_createManager = (init, onEffects, onSelfMsg, cmdMap, subMap) => ({
        b: init,
        c: onEffects,
        d: onSelfMsg,
        e: cmdMap,
        f: subMap
    });
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        const loop = (state) => _Scheduler_andThen_raw(loop, _Scheduler_receive(function (msg) {
            var value = msg.a;
            if (msg.$ === 0) {
                return A3(onSelfMsg, router, value, state);
            }
            return cmdMap && subMap
                ? A4(onEffects, router, value.i, value.j, state)
                : A3(onEffects, router, cmdMap ? value.i : value.j, state);
        }));
        return router.h = _Scheduler_rawSpawn(_Scheduler_andThen_raw(loop, info.b));
    }
    // ROUTING
    var _Platform_sendToApp_raw = (router, msg) => _Scheduler_binding(function (callback) {
        router.g(msg);
        callback(_Scheduler_succeed(_Utils_Tuple0));
    }), _Platform_sendToApp = F2(_Platform_sendToApp_raw);
    var _Platform_sendToSelf_raw = (router, msg) => _Scheduler_send_raw(router.h, {
        $: 0,
        a: msg
    }), _Platform_sendToSelf = F2(_Platform_sendToSelf_raw);
    const _Platform_leaf = (home) => (value) => ({
        $: 1,
        k: home,
        l: value
    });
    const _Platform_batch = (list) => ({
        $: 2,
        m: list
    });
    var _Platform_map_raw = (tagger, bag) => ({
        $: 3,
        n: tagger,
        o: bag
    }), _Platform_map = F2(_Platform_map_raw);
    // PIPE BAGS INTO EFFECT MANAGERS
    //
    // Effects must be queued!
    //
    // Say your init contains a synchronous command, like Time.now or Time.here
    //
    //   - This will produce a batch of effects (FX_1)
    //   - The synchronous task triggers the subsequent `update` call
    //   - This will produce a batch of effects (FX_2)
    //
    // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
    // before subscriptions from FX_1. No good! Earlier versions of this code had
    // this problem, leading to these reports:
    //
    //   https://github.com/elm/core/issues/980
    //   https://github.com/elm/core/pull/981
    //   https://github.com/elm/compiler/issues/1776
    //
    // The queue is necessary to avoid ordering issues for synchronous commands.
    // Why use true/false here? Why not just check the length of the queue?
    // The goal is to detect "are we currently dispatching effects?" If we
    // are, we need to bail and let the ongoing while loop handle things.
    //
    // Now say the queue has 1 element. When we dequeue the final element,
    // the queue will be empty, but we are still actively dispatching effects.
    // So you could get queue jumping in a really tricky category of cases.
    //
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
        if (_Platform_effectsActive)
            return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift();) {
            _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
            _Scheduler_rawSend(managers[home], {
                $: "fx",
                a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
            });
        }
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
                 {
                    _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                }
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for (var temp = taggers; temp; temp = temp.t) {
                x = temp.s(x);
            }
            return x;
        }
        var map = isCmd
            ? _Platform_effectManagers[home].e
            : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || { i: _List_Nil, j: _List_Nil };
        isCmd
            ? (effects.i = _List_Cons(newEffect, effects.i))
            : (effects.j = _List_Cons(newEffect, effects.j));
        return effects;
    }
    // PORTS
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
            _Debug_crash(3, name);
        }
    }
    // OUTGOING PORTS
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap_raw = (tagger, value) => value, _Platform_outgoingPortMap = F2(_Platform_outgoingPortMap_raw);
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, cmdList, state) {
            for (; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
             {
                // grab a separate reference to subs in case unsubscribe is called
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for (var i = 0; i < currentSubs.length; i++) {
                    currentSubs[i](value);
                }
            }
            return init;
        });
        // PUBLIC API
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
    }
    // INCOMING PORTS
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap_raw = (tagger, finalTagger) => (value) => tagger(finalTagger(value)), _Platform_incomingPortMap = F2(_Platform_incomingPortMap_raw);
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, subList, state) {
            subs = subList;
            return init;
        });
        // PUBLIC API
        function send(incomingValue) {
            var result = _Json_run_raw(converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
             {
                sendToApp(temp.a(value));
            }
        }
        return { send: send };
    }
    // EXPORT ELM MODULES
    //
    // Have DEBUG and PROD versions so that we can (1) give nicer errors in
    // debug mode and (2) not pay for the bits needed for that in prod mode.
    //
    function _Platform_export(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsProd(scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6)
                    : _Platform_mergeExportsProd(obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    function _Platform_export_UNUSED(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6, moduleName)
                    : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    // HELPERS
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent, child) {
        parent.appendChild(child);
    }
    var _VirtualDom_init_raw = function (virtualNode, flagDecoder, debugMetadata, args) {
        // NOTE: this function needs _Platform_export available to work
        /**/
        var node = args["node"];
        //*/
        /**_UNUSED/
        var node = args && args['node'] ? args['node'] : _Debug_crash(0);
        //*/
        node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function () { }), node);
        return {};
    }, _VirtualDom_init = F4(_VirtualDom_init_raw);
    const _VirtualDom_text = (string) => ({
        $: 0,
        a: string
    });
    // NODE
    var _VirtualDom_nodeNS_raw = (namespace, tag) => F2(function (factList, kidList) {
        for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
         {
            var kid = kidList.a;
            descendantsCount += (kid.b || 0);
            kids.push(kid);
        }
        descendantsCount += kids.length;
        return {
            $: 1,
            c: tag,
            d: _VirtualDom_organizeFacts(factList),
            e: kids,
            f: namespace,
            b: descendantsCount
        };
    }), _VirtualDom_nodeNS = F2(_VirtualDom_nodeNS_raw);
    var _VirtualDom_node_a0 = undefined, _VirtualDom_node = _VirtualDom_nodeNS(_VirtualDom_node_a0);
    // KEYED NODE
    var _VirtualDom_keyedNodeNS_raw = (namespace, tag) => F2(function (factList, kidList) {
        for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
         {
            var kid = kidList.a;
            descendantsCount += (kid.b.b || 0);
            kids.push(kid);
        }
        descendantsCount += kids.length;
        return {
            $: 2,
            c: tag,
            d: _VirtualDom_organizeFacts(factList),
            e: kids,
            f: namespace,
            b: descendantsCount
        };
    }), _VirtualDom_keyedNodeNS = F2(_VirtualDom_keyedNodeNS_raw);
    var _VirtualDom_keyedNode_a0 = undefined, _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(_VirtualDom_keyedNode_a0);
    const _VirtualDom_custom = (factList, model, render, diff) => ({
        $: 3,
        d: _VirtualDom_organizeFacts(factList),
        g: model,
        h: render,
        i: diff
    });
    // MAP
    var _VirtualDom_map_raw = (tagger, node) => ({
        $: 4,
        j: tagger,
        k: node,
        b: 1 + (node.b || 0)
    }), _VirtualDom_map = F2(_VirtualDom_map_raw);
    const _VirtualDom_thunk = (refs, thunk) => ({
        $: 5,
        l: refs,
        m: thunk,
        k: undefined
    });
    var _VirtualDom_lazy_raw = (func, a) => _VirtualDom_thunk([func, a], () => func(a)), _VirtualDom_lazy = F2(_VirtualDom_lazy_raw);
    var _VirtualDom_lazy2_raw = (func, a, b) => _VirtualDom_thunk([func, a, b], () => A2(func, a, b)), _VirtualDom_lazy2 = F3(_VirtualDom_lazy2_raw);
    var _VirtualDom_lazy3_raw = (func, a, b, c) => _VirtualDom_thunk([func, a, b, c], () => A3(func, a, b, c)), _VirtualDom_lazy3 = F4(_VirtualDom_lazy3_raw);
    var _VirtualDom_lazy4_raw = (func, a, b, c, d) => _VirtualDom_thunk([func, a, b, c, d], () => A4(func, a, b, c, d)), _VirtualDom_lazy4 = F5(_VirtualDom_lazy4_raw);
    var _VirtualDom_lazy5_raw = (func, a, b, c, d, e) => _VirtualDom_thunk([func, a, b, c, d, e], () => A5(func, a, b, c, d, e)), _VirtualDom_lazy5 = F6(_VirtualDom_lazy5_raw);
    var _VirtualDom_lazy6_raw = (func, a, b, c, d, e, f) => _VirtualDom_thunk([func, a, b, c, d, e, f], () => A6(func, a, b, c, d, e, f)), _VirtualDom_lazy6 = F7(_VirtualDom_lazy6_raw);
    var _VirtualDom_lazy7_raw = (func, a, b, c, d, e, f, g) => _VirtualDom_thunk([func, a, b, c, d, e, f, g], () => A7(func, a, b, c, d, e, f, g)), _VirtualDom_lazy7 = F8(_VirtualDom_lazy7_raw);
    var _VirtualDom_lazy8_raw = (func, a, b, c, d, e, f, g, h) => _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], () => A8(func, a, b, c, d, e, f, g, h)), _VirtualDom_lazy8 = F9(_VirtualDom_lazy8_raw);
    // FACTS
    var _VirtualDom_on_raw = (key, handler) => ({
        $: "a0",
        n: key,
        o: handler
    }), _VirtualDom_on = F2(_VirtualDom_on_raw);
    var _VirtualDom_style_raw = (key, value) => ({
        $: "a1",
        n: key,
        o: value
    }), _VirtualDom_style = F2(_VirtualDom_style_raw);
    var _VirtualDom_property_raw = (key, value) => ({
        $: "a2",
        n: key,
        o: value
    }), _VirtualDom_property = F2(_VirtualDom_property_raw);
    var _VirtualDom_attribute_raw = (key, value) => ({
        $: "a3",
        n: key,
        o: value
    }), _VirtualDom_attribute = F2(_VirtualDom_attribute_raw);
    var _VirtualDom_attributeNS_raw = (namespace, key, value) => ({
        $: "a4",
        n: key,
        o: { f: namespace, o: value }
    }), _VirtualDom_attributeNS = F3(_VirtualDom_attributeNS_raw);
    const _VirtualDom_noScript = (tag) => tag == "script" ? "p" : tag;
    const _VirtualDom_noOnOrFormAction = (key) => /^(on|formAction$)/i.test(key) ? "data-" + key : key;
    const _VirtualDom_noInnerHtmlOrFormAction = (key) => key == "innerHTML" || key == "formAction" ? "data-" + key : key;
    const _VirtualDom_noJavaScriptUri = (value) => /^javascript:/i.test(value.replace(/\s/g, "")) ? "" : value;
    const _VirtualDom_noJavaScriptUri_UNUSED = (value) => /^javascript:/i.test(value.replace(/\s/g, ""))
        ? "javascript:alert(\"This is an XSS vector. Please use ports or web components instead.\")"
        : value;
    const _VirtualDom_noJavaScriptOrHtmlUri = (value) => /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value;
    const _VirtualDom_noJavaScriptOrHtmlUri_UNUSED = (value) => /^\s*(javascript:|data:text\/html)/i.test(value)
        ? "javascript:alert(\"This is an XSS vector. Please use ports or web components instead.\")"
        : value;
    // MAP FACTS
    var _VirtualDom_mapAttribute_raw = (func, attr) => (attr.$ === "a0")
        ? _VirtualDom_on_raw(attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr, _VirtualDom_mapAttribute = F2(_VirtualDom_mapAttribute_raw);
    function _VirtualDom_mapHandler(func, handler) {
        var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        // 0 = Normal
        // 1 = MayStopPropagation
        // 2 = MayPreventDefault
        // 3 = Custom
        return {
            $: handler.$,
            a: !tag
                ? _Json_map1_raw(func, handler.a) : _Json_map2_raw(tag < 3
                ? _VirtualDom_mapEventTuple
                : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func), handler.a)
        };
    }
    var _VirtualDom_mapEventTuple_raw = (func, tuple) => _Utils_Tuple2(func(tuple.a), tuple.b), _VirtualDom_mapEventTuple = F2(_VirtualDom_mapEventTuple_raw);
    var _VirtualDom_mapEventRecord_raw = (func, record) => ({
        Y: func(record.Y),
        bd: record.bd,
        ba: record.ba
    }), _VirtualDom_mapEventRecord = F2(_VirtualDom_mapEventRecord_raw);
    // ORGANIZE FACTS
    function _VirtualDom_organizeFacts(factList) {
        for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
         {
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === "a2") {
                (key === "className")
                    ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
                    : facts[key] = _Json_unwrap(value);
                continue;
            }
            var subFacts = facts[tag] || (facts[tag] = {});
            (tag === "a3" && key === "class")
                ? _VirtualDom_addClass(subFacts, key, value)
                : subFacts[key] = value;
        }
        return facts;
    }
    function _VirtualDom_addClass(object, key, newClass) {
        var classes = object[key];
        object[key] = classes ? classes + " " + newClass : newClass;
    }
    // RENDER
    function _VirtualDom_render(vNode, eventNode) {
        var tag = vNode.$;
        if (tag === 5) {
            return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
        }
        if (tag === 0) {
            return _VirtualDom_doc.createTextNode(vNode.a);
        }
        if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while (subNode.$ === 4) {
                typeof tagger !== "object"
                    ? tagger = [tagger, subNode.j]
                    : tagger.push(subNode.j);
                subNode = subNode.k;
            }
            var subEventRoot = { j: tagger, p: eventNode };
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode;
        }
        if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode;
        }
        // at this point `tag` must be 1 or 2
        var domNode = vNode.f
            ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
            : _VirtualDom_doc.createElement(vNode.c);
        if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
            domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
        }
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        for (var kids = vNode.e, i = 0; i < kids.length; i++) {
            _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
        }
        return domNode;
    }
    // APPLY FACTS
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
        for (var key in facts) {
            var value = facts[key];
            key === "a1"
                ? _VirtualDom_applyStyles(domNode, value)
                :
                    key === "a0"
                        ? _VirtualDom_applyEvents(domNode, eventNode, value)
                        :
                            key === "a3"
                                ? _VirtualDom_applyAttrs(domNode, value)
                                :
                                    key === "a4"
                                        ? _VirtualDom_applyAttrsNS(domNode, value)
                                        :
                                            ((key !== "value" && key !== "checked") || domNode[key] !== value) && (domNode[key] = value);
        }
    }
    // APPLY STYLES
    function _VirtualDom_applyStyles(domNode, styles) {
        var domNodeStyle = domNode.style;
        for (var key in styles) {
            domNodeStyle[key] = styles[key];
        }
    }
    // APPLY ATTRS
    function _VirtualDom_applyAttrs(domNode, attrs) {
        for (var key in attrs) {
            var value = attrs[key];
            typeof value !== "undefined"
                ? domNode.setAttribute(key, value)
                : domNode.removeAttribute(key);
        }
    }
    // APPLY NAMESPACED ATTRS
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
        for (var key in nsAttrs) {
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== "undefined"
                ? domNode.setAttributeNS(namespace, key, value)
                : domNode.removeAttributeNS(namespace, key);
        }
    }
    // APPLY EVENTS
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
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
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported
                && { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 });
            allCallbacks[key] = oldCallback;
        }
    }
    // PASSIVE EVENTS
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function () { _VirtualDom_passiveSupported = true; }
        }));
    }
    catch (e) { }
    // EVENT HANDLERS
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
        function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!$elm$core$Result$isOk(result)) {
                return;
            }
            var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            // 0 = Normal
            // 1 = MayStopPropagation
            // 2 = MayPreventDefault
            // 3 = Custom
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.Y;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bd;
            var currentEventNode = (stopPropagation && event.stopPropagation(),
                (tag == 2 ? value.b : tag == 3 && value.ba) && event.preventDefault(),
                eventNode);
            var tagger;
            var i;
            while (tagger = currentEventNode.j) {
                if (typeof tagger == "function") {
                    message = tagger(message);
                }
                else {
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
    }
    const _VirtualDom_equalEvents = (x, y) => x.$ == y.$ && _Json_equality(x.a, y.a);
    // DIFF
    // TODO: Should we do patches like in iOS?
    //
    // type Patch
    //   = At Int Patch
    //   | Batch (List Patch)
    //   | Change ...
    //
    // How could it not be better?
    //
    function _VirtualDom_diff(x, y) {
        var patches = [];
        _VirtualDom_diffHelp(x, y, patches, 0);
        return patches;
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
        var patch = {
            $: type,
            r: index,
            s: data,
            t: undefined,
            u: undefined
        };
        patches.push(patch);
        return patch;
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
        if (x === y) {
            return;
        }
        var xType = x.$;
        var yType = y.$;
        // Bail if you run into different types of nodes. Implies that the
        // structure has changed significantly and it's not worth a diff.
        if (xType !== yType) {
            if (xType === 1 && yType === 2) {
                y = _VirtualDom_dekey(y);
                yType = 1;
            }
            else {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
            }
        }
        // Now we know that both nodes are the same $.
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
                _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
                subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
                return;
            case 4:
                // gather nested taggers
                var xTaggers = x.j;
                var yTaggers = y.j;
                var nesting = false;
                var xSubNode = x.k;
                while (xSubNode.$ === 4) {
                    nesting = true;
                    typeof xTaggers !== "object"
                        ? xTaggers = [xTaggers, xSubNode.j]
                        : xTaggers.push(xSubNode.j);
                    xSubNode = xSubNode.k;
                }
                var ySubNode = y.k;
                while (ySubNode.$ === 4) {
                    nesting = true;
                    typeof yTaggers !== "object"
                        ? yTaggers = [yTaggers, ySubNode.j]
                        : yTaggers.push(ySubNode.j);
                    ySubNode = ySubNode.k;
                }
                // Just bail if different numbers of taggers. This implies the
                // structure of the virtual DOM has changed.
                if (nesting && xTaggers.length !== yTaggers.length) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                // check if taggers are "the same"
                if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
                    _VirtualDom_pushPatch(patches, 2, index, yTaggers);
                }
                // diff everything below the taggers
                _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
                return;
            case 0:
                if (x.a !== y.a) {
                    _VirtualDom_pushPatch(patches, 3, index, y.a);
                }
                return;
            case 1:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
                return;
            case 2:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
                return;
            case 3:
                if (x.h !== y.h) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
                factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
                var patch = y.i(x.g, y.g);
                patch && _VirtualDom_pushPatch(patches, 5, index, patch);
                return;
        }
    }
    // assumes the incoming arrays are the same length
    function _VirtualDom_pairwiseRefEqual(as, bs) {
        for (var i = 0; i < as.length; i++) {
            if (as[i] !== bs[i]) {
                return false;
            }
        }
        return true;
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
        // Bail if obvious indicators have changed. Implies more serious
        // structural changes such that it's not worth it to diff.
        if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
        }
        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
        diffKids(x, y, patches, index);
    }
    // DIFF FACTS
    // TODO Instead of creating a new diff object, it's possible to just test if
    // there *is* a diff. During the actual patch, do the diff again and make the
    // modifications directly. This way, there's no new allocations. Worth it?
    function _VirtualDom_diffFacts(x, y, category) {
        var diff;
        // look for changes and removals
        for (var xKey in x) {
            if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
                var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
                if (subDiff) {
                    diff = diff || {};
                    diff[xKey] = subDiff;
                }
                continue;
            }
            // remove if not in the new facts
            if (!(xKey in y)) {
                diff = diff || {};
                diff[xKey] =
                    !category
                        ? (typeof x[xKey] === "string" ? "" : null)
                        :
                            (category === "a1")
                                ? ""
                                :
                                    (category === "a0" || category === "a3")
                                        ? undefined
                                        :
                                            { f: x[xKey].f, o: undefined };
                continue;
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            // reference equal, so don't worry about it
            if (xValue === yValue && xKey !== "value" && xKey !== "checked"
                || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
                continue;
            }
            diff = diff || {};
            diff[xKey] = yValue;
        }
        // add new stuff
        for (var yKey in y) {
            if (!(yKey in x)) {
                diff = diff || {};
                diff[yKey] = y[yKey];
            }
        }
        return diff;
    }
    // DIFF KIDS
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
        if (xLen > yLen) {
            _VirtualDom_pushPatch(patches, 6, index, {
                v: yLen,
                i: xLen - yLen
            });
        }
        else if (xLen < yLen) {
            _VirtualDom_pushPatch(patches, 7, index, {
                v: xLen,
                e: yKids
            });
        }
        // PAIRWISE DIFF EVERYTHING ELSE
        for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0;
        }
    }
    // KEYED DIFF
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
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
            var oldMatch = undefined;
            // check if keys match
            if (xKey === yKey) {
                index++;
                _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
                index += xNode.b || 0;
                xIndex++;
                yIndex++;
                continue;
            }
            // look ahead 1 to detect insertions and removals.
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
            }
            // swap x and y
            if (newMatch && oldMatch) {
                index++;
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            // insert y
            if (newMatch) {
                index++;
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                index += xNode.b || 0;
                xIndex += 1;
                yIndex += 2;
                continue;
            }
            // remove x
            if (oldMatch) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 1;
                continue;
            }
            // remove x, insert y
            if (xNext && xNextKey === yNextKey) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            break;
        }
        // eat up any remaining nodes with removeNode and insertNode
        while (xIndex < xLen) {
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++;
        }
        while (yIndex < yLen) {
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
            yIndex++;
        }
        if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
            _VirtualDom_pushPatch(patches, 8, rootIndex, {
                w: localPatches,
                x: inserts,
                y: endInserts
            });
        }
    }
    // CHANGES FROM KEYED DIFF
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
        var entry = changes[key];
        // never seen this key before
        if (!entry) {
            entry = {
                c: 0,
                z: vnode,
                r: yIndex,
                s: undefined
            };
            inserts.push({ r: yIndex, A: entry });
            changes[key] = entry;
            return;
        }
        // this key was removed earlier, a match!
        if (entry.c === 1) {
            inserts.push({ r: yIndex, A: entry });
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
                w: subPatches,
                A: entry
            };
            return;
        }
        // this key has already been inserted or moved, a duplicate!
        _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
        var entry = changes[key];
        // never seen this key before
        if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);
            changes[key] = {
                c: 1,
                z: vnode,
                r: index,
                s: patch
            };
            return;
        }
        // this key was inserted earlier, a match!
        if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
                w: subPatches,
                A: entry
            });
            return;
        }
        // this key has already been removed or moved, a duplicate!
        _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
    }
    // ADD DOM NODES
    //
    // Each DOM node has an "index" assigned in order of traversal. It is important
    // to minimize our crawl over the actual DOM, so these indexes (along with the
    // descendantsCount of virtual nodes) let us skip touching entire subtrees of
    // the DOM if we know there are no patches there.
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
    }
    // assumes `patches` is non-empty and indexes increase monotonically.
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
        var patch = patches[i];
        var index = patch.r;
        while (index === low) {
            var patchType = patch.$;
            if (patchType === 1) {
                _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
            }
            else if (patchType === 8) {
                patch.t = domNode;
                patch.u = eventNode;
                var subPatches = patch.s.w;
                if (subPatches.length > 0) {
                    _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                }
            }
            else if (patchType === 9) {
                patch.t = domNode;
                patch.u = eventNode;
                var data = patch.s;
                if (data) {
                    data.A.s = domNode;
                    var subPatches = data.w;
                    if (subPatches.length > 0) {
                        _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                    }
                }
            }
            else {
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
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
        }
        // tag must be 1 or 2 at this point
        var vKids = vNode.e;
        var childNodes = domNode.childNodes;
        for (var j = 0; j < vKids.length; j++) {
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
                i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
                if (!(patch = patches[i]) || (index = patch.r) > high) {
                    return i;
                }
            }
            low = nextLow;
        }
        return i;
    }
    // APPLY PATCHES
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
        if (patches.length === 0) {
            return rootDomNode;
        }
        _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
        return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
        for (var i = 0; i < patches.length; i++) {
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) {
                rootDomNode = newNode;
            }
        }
        return rootDomNode;
    }
    function _VirtualDom_applyPatch(domNode, patch) {
        switch (patch.$) {
            case 0:
                return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
            case 4:
                _VirtualDom_applyFacts(domNode, patch.u, patch.s);
                return domNode;
            case 3:
                domNode.replaceData(0, domNode.length, patch.s);
                return domNode;
            case 1:
                return _VirtualDom_applyPatchesHelp(domNode, patch.s);
            case 2:
                if (domNode.elm_event_node_ref) {
                    domNode.elm_event_node_ref.j = patch.s;
                }
                else {
                    domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
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
                    domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
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
                entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
                return domNode;
            case 8:
                return _VirtualDom_applyPatchReorder(domNode, patch);
            case 5:
                return patch.s(domNode);
            default:
                _Debug_crash(10); // 'Ran into an unknown patch!'
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
        var parentNode = domNode.parentNode;
        var newNode = _VirtualDom_render(vNode, eventNode);
        if (!newNode.elm_event_node_ref) {
            newNode.elm_event_node_ref = domNode.elm_event_node_ref;
        }
        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
        }
        return newNode;
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
        var data = patch.s;
        // remove end inserts
        var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
        // removals
        domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
        // inserts
        var inserts = data.x;
        for (var i = 0; i < inserts.length; i++) {
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r]);
        }
        // add end inserts
        if (frag) {
            _VirtualDom_appendChild(domNode, frag);
        }
        return domNode;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
        if (!endInserts) {
            return;
        }
        var frag = _VirtualDom_doc.createDocumentFragment();
        for (var i = 0; i < endInserts.length; i++) {
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(frag, entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u));
        }
        return frag;
    }
    function _VirtualDom_virtualize(node) {
        // TEXT NODES
        if (node.nodeType === 3) {
            return _VirtualDom_text(node.textContent);
        }
        // WEIRD NODES
        if (node.nodeType !== 1) {
            return _VirtualDom_text("");
        }
        // ELEMENT NODES
        var attrList = _List_Nil;
        var attrs = node.attributes;
        for (var i = attrs.length; i--;) {
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(_VirtualDom_attribute_raw(name, value), attrList);
        }
        var tag = node.tagName.toLowerCase();
        var kidList = _List_Nil;
        var kids = node.childNodes;
        for (var i = kids.length; i--;) {
            kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
        }
        return A3(_VirtualDom_node, tag, attrList, kidList);
    }
    function _VirtualDom_dekey(keyedNode) {
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
    }
    // ELEMENT
    var _Debugger_element;
    var _Browser_element = _Debugger_element || F4((impl, flagDecoder, debugMetadata, args) => _Platform_initialize(flagDecoder, args, impl.cs, impl.cL, impl.cI, function (sendToApp, initialModel) {
        var view = impl.cN;
        /**/
        var domNode = args["node"];
        //*/
        /**_UNUSED/
        var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
        //*/
        var currNode = _VirtualDom_virtualize(domNode);
        return _Browser_makeAnimator(initialModel, function (model) {
            var nextNode = view(model);
            var patches = _VirtualDom_diff(currNode, nextNode);
            domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
            currNode = nextNode;
        });
    }));
    // DOCUMENT
    var _Debugger_document;
    var _Browser_document = _Debugger_document || F4((impl, flagDecoder, debugMetadata, args) => _Platform_initialize(flagDecoder, args, impl.cs, impl.cL, impl.cI, function (sendToApp, initialModel) {
        var divertHrefToApp = impl.bb && impl.bb(sendToApp);
        var view = impl.cN;
        var title = _VirtualDom_doc.title;
        var bodyNode = _VirtualDom_doc.body;
        var currNode = _VirtualDom_virtualize(bodyNode);
        return _Browser_makeAnimator(initialModel, function (model) {
            _VirtualDom_divertHrefToApp = divertHrefToApp;
            var doc = view(model);
            var nextNode = _VirtualDom_nodeNS_raw(_VirtualDom_node_a0, "body")(_List_Nil)(doc.b6);
            var patches = _VirtualDom_diff(currNode, nextNode);
            bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
            currNode = nextNode;
            _VirtualDom_divertHrefToApp = 0;
            (title !== doc.cK) && (_VirtualDom_doc.title = title = doc.cK);
        });
    }));
    // ANIMATION
    var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== "undefined"
        ? cancelAnimationFrame
        : function (id) { clearTimeout(id); };
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined"
        ? requestAnimationFrame
        : (callback) => setTimeout(callback, 1000 / 60);
    function _Browser_makeAnimator(model, draw) {
        draw(model);
        var state = 0;
        function updateIfNeeded() {
            state = state === 1
                ? 0
                : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
        }
        return function (nextModel, isSync) {
            model = nextModel;
            isSync
                ? (draw(model),
                    state === 2 && (state = 1))
                : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
                    state = 2);
        };
    }
    // APPLICATION
    function _Browser_application(impl) {
        var onUrlChange = impl.cz;
        var onUrlRequest = impl.cA;
        var key = function () { key.a(onUrlChange(_Browser_getUrl())); };
        return _Browser_document({
            bb: function (sendToApp) {
                key.a = sendToApp;
                _Browser_window.addEventListener("popstate", key);
                _Browser_window.navigator.userAgent.indexOf("Trident") < 0 || _Browser_window.addEventListener("hashchange", key);
                return F2(function (domNode, event) {
                    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute("download")) {
                        event.preventDefault();
                        var href = domNode.href;
                        var curr = _Browser_getUrl();
                        var next = $elm$url$Url$fromString(href).a;
                        sendToApp(onUrlRequest((next
                            && curr.bN === next.bN
                            && curr.bu === next.bu
                            && curr.bI.a === next.bI.a)
                            ? $elm$browser$Browser$Internal(next)
                            : $elm$browser$Browser$External(href)));
                    }
                });
            },
            cs: (flags) => A3(impl.cs, flags, _Browser_getUrl(), key),
            cN: impl.cN,
            cL: impl.cL,
            cI: impl.cI
        });
    }
    const _Browser_getUrl = () => $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
    var _Browser_go_raw = (key, n) => $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function () {
        n && history.go(n);
        key();
    })), _Browser_go = F2(_Browser_go_raw);
    var _Browser_pushUrl_raw = (key, url) => $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function () {
        history.pushState({}, "", url);
        key();
    })), _Browser_pushUrl = F2(_Browser_pushUrl_raw);
    var _Browser_replaceUrl_raw = (key, url) => $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function () {
        history.replaceState({}, "", url);
        key();
    })), _Browser_replaceUrl = F2(_Browser_replaceUrl_raw);
    // GLOBAL EVENTS
    var _Browser_fakeNode = { addEventListener: function () { }, removeEventListener: function () { } };
    var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
    var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
    var _Browser_on_raw = (node, eventName, sendToSelf) => _Scheduler_spawn(_Scheduler_binding(function (callback) {
        function handler(event) { _Scheduler_rawSpawn(sendToSelf(event)); }
        node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
        return function () { node.removeEventListener(eventName, handler); };
    })), _Browser_on = F3(_Browser_on_raw);
    var _Browser_decodeEvent_raw = function (decoder, event) {
        var result = _Json_runHelp(decoder, event);
        return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
    }, _Browser_decodeEvent = F2(_Browser_decodeEvent_raw);
    const _Browser_visibilityInfo = () => (typeof _VirtualDom_doc.hidden !== "undefined")
        ? { cq: "hidden", ca: "visibilitychange" }
        :
            (typeof _VirtualDom_doc.mozHidden !== "undefined")
                ? { cq: "mozHidden", ca: "mozvisibilitychange" }
                :
                    (typeof _VirtualDom_doc.msHidden !== "undefined")
                        ? { cq: "msHidden", ca: "msvisibilitychange" }
                        :
                            (typeof _VirtualDom_doc.webkitHidden !== "undefined")
                                ? { cq: "webkitHidden", ca: "webkitvisibilitychange" }
                                : { cq: "hidden", ca: "visibilitychange" };
    const _Browser_rAF = () => _Scheduler_binding(function (callback) {
        var id = _Browser_requestAnimationFrame(function () {
            callback(_Scheduler_succeed(Date.now()));
        });
        return function () {
            _Browser_cancelAnimationFrame(id);
        };
    });
    const _Browser_now = () => _Scheduler_binding(function (callback) {
        callback(_Scheduler_succeed(Date.now()));
    });
    const _Browser_withNode = (id, doStuff) => _Scheduler_binding(function (callback) {
        _Browser_requestAnimationFrame(function () {
            var node = document.getElementById(id);
            callback(node
                ? _Scheduler_succeed(doStuff(node))
                : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id)));
        });
    });
    const _Browser_withWindow = (doStuff) => _Scheduler_binding(function (callback) {
        _Browser_requestAnimationFrame(function () {
            callback(_Scheduler_succeed(doStuff()));
        });
    });
    // FOCUS and BLUR
    var _Browser_call_raw = (functionName, id) => _Browser_withNode(id, function (node) {
        node[functionName]();
        return _Utils_Tuple0;
    }), _Browser_call = F2(_Browser_call_raw);
    const _Browser_getViewport = () => ({
        bT: _Browser_getScene(),
        b_: {
            b1: _Browser_window.pageXOffset,
            b2: _Browser_window.pageYOffset,
            b$: _Browser_doc.documentElement.clientWidth,
            bs: _Browser_doc.documentElement.clientHeight
        }
    });
    function _Browser_getScene() {
        var body = _Browser_doc.body;
        var elem = _Browser_doc.documentElement;
        return {
            b$: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
            bs: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
        };
    }
    var _Browser_setViewport_raw = (x, y) => _Browser_withWindow(function () {
        _Browser_window.scroll(x, y);
        return _Utils_Tuple0;
    }), _Browser_setViewport = F2(_Browser_setViewport_raw);
    const _Browser_getViewportOf = (id) => _Browser_withNode(id, (node) => ({
        bT: {
            b$: node.scrollWidth,
            bs: node.scrollHeight
        },
        b_: {
            b1: node.scrollLeft,
            b2: node.scrollTop,
            b$: node.clientWidth,
            bs: node.clientHeight
        }
    }));
    var _Browser_setViewportOf_raw = (id, x, y) => _Browser_withNode(id, function (node) {
        node.scrollLeft = x;
        node.scrollTop = y;
        return _Utils_Tuple0;
    }), _Browser_setViewportOf = F3(_Browser_setViewportOf_raw);
    const _Browser_getElement = (id) => _Browser_withNode(id, function (node) {
        var rect = node.getBoundingClientRect();
        var x = _Browser_window.pageXOffset;
        var y = _Browser_window.pageYOffset;
        return {
            bT: _Browser_getScene(),
            b_: {
                b1: x,
                b2: y,
                b$: _Browser_doc.documentElement.clientWidth,
                bs: _Browser_doc.documentElement.clientHeight
            },
            ck: {
                b1: x + rect.left,
                b2: y + rect.top,
                b$: rect.width,
                bs: rect.height
            }
        };
    });
    const _Browser_reload = (skipCache) => $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function (callback) {
        _VirtualDom_doc.location.reload(skipCache);
    }));
    const _Browser_load = (url) => $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function (callback) {
        try {
            _Browser_window.location = url;
        }
        catch (err) {
            // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
            // Other browsers reload the page, so let's be consistent about that.
            _VirtualDom_doc.location.reload(false);
        }
    }));
    var _Benchmark_getTimestamp = typeof performance !== "undefined"
        ? performance.now.bind(performance)
        : Date.now;
    // sample : Int -> Operation -> Task Error Float
    var _Benchmark_sample_raw = (n, fn) => _Scheduler_binding(function (callback) {
        var start = _Benchmark_getTimestamp();
        try {
            for (var i = 0; i < n; i++) {
                fn();
            }
        }
        catch (error) {
            if (error instanceof RangeError) {
                callback(_Scheduler_fail($elm_explorations$benchmark$Benchmark$LowLevel$StackOverflow));
            }
            else {
                callback(_Scheduler_fail($elm_explorations$benchmark$Benchmark$LowLevel$UnknownError(error.message)));
            }
            return;
        }
        var end = _Benchmark_getTimestamp();
        callback(_Scheduler_succeed(end - start));
    }), _Benchmark_sample = F2(_Benchmark_sample_raw);
    const _Benchmark_operation = (thunk) => thunk;
    // STRINGS
    var _Parser_isSubString_raw = function (smallString, offset, row, col, bigString) {
        var smallLength = smallString.length;
        var isGood = offset + smallLength <= bigString.length;
        for (var i = 0; isGood && i < smallLength;) {
            var code = bigString.charCodeAt(offset);
            isGood =
                smallString[i++] === bigString[offset++]
                    && (code === 10 /* \n */
                        ? (row++, col = 1)
                        : (col++, (code & 63488) === 55296 ? smallString[i++] === bigString[offset++] : 1));
        }
        return _Utils_Tuple3(isGood ? offset : -1, row, col);
    }, _Parser_isSubString = F5(_Parser_isSubString_raw);
    // CHARS
    var _Parser_isSubChar_raw = (predicate, offset, string) => (string.length <= offset
        ? -1
        :
            (string.charCodeAt(offset) & 63488) === 55296
                ? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
                :
                    (predicate(_Utils_chr(string[offset]))
                        ? ((string[offset] === "\n") ? -2 : (offset + 1))
                        : -1)), _Parser_isSubChar = F3(_Parser_isSubChar_raw);
    var _Parser_isAsciiCode_raw = (code, offset, string) => string.charCodeAt(offset) === code, _Parser_isAsciiCode = F3(_Parser_isAsciiCode_raw);
    // NUMBERS
    var _Parser_chompBase10_raw = function (offset, string) {
        for (; offset < string.length; offset++) {
            var code = string.charCodeAt(offset);
            if (code < 48 || 57 < code) {
                return offset;
            }
        }
        return offset;
    }, _Parser_chompBase10 = F2(_Parser_chompBase10_raw);
    var _Parser_consumeBase_raw = function (base, offset, string) {
        for (var total = 0; offset < string.length; offset++) {
            var digit = string.charCodeAt(offset) - 48;
            if (digit < 0 || base <= digit)
                break;
            total = base * total + digit;
        }
        return _Utils_Tuple2(offset, total);
    }, _Parser_consumeBase = F3(_Parser_consumeBase_raw);
    var _Parser_consumeBase16_raw = function (offset, string) {
        for (var total = 0; offset < string.length; offset++) {
            var code = string.charCodeAt(offset);
            if (48 <= code && code <= 57) {
                total = 16 * total + code - 48;
            }
            else if (65 <= code && code <= 70) {
                total = 16 * total + code - 55;
            }
            else if (97 <= code && code <= 102) {
                total = 16 * total + code - 87;
            }
            else {
                break;
            }
        }
        return _Utils_Tuple2(offset, total);
    }, _Parser_consumeBase16 = F2(_Parser_consumeBase16_raw);
    // FIND STRING
    var _Parser_findSubString_raw = function (smallString, offset, row, col, bigString) {
        var newOffset = bigString.indexOf(smallString, offset);
        var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;
        while (offset < target) {
            var code = bigString.charCodeAt(offset++);
            code === 10 /* \n */
                ? (col = 1, row++)
                : (col++, (code & 63488) === 55296 && offset++);
        }
        return _Utils_Tuple3(newOffset, row, col);
    }, _Parser_findSubString = F5(_Parser_findSubString_raw);
    // CREATE
    var _Regex_never = /.^/;
    var _Regex_fromStringWith_raw = function (options, string) {
        var flags = "g";
        if (options.cx) {
            flags += "m";
        }
        if (options.b9) {
            flags += "i";
        }
        try {
            return $elm$core$Maybe$Just(new RegExp(string, flags));
        }
        catch (error) {
            return $elm$core$Maybe$Nothing;
        }
    }, _Regex_fromStringWith = F2(_Regex_fromStringWith_raw);
    // USE
    var _Regex_contains_raw = (re, string) => string.match(re) !== null, _Regex_contains = F2(_Regex_contains_raw);
    var _Regex_findAtMost_raw = function (n, re, str) {
        var out = [];
        var number = 0;
        var string = str;
        var lastIndex = re.lastIndex;
        var prevLastIndex = -1;
        var result;
        while (number++ < n && (result = re.exec(string))) {
            if (prevLastIndex == re.lastIndex)
                break;
            var i = result.length - 1;
            var subs = new Array(i);
            while (i > 0) {
                var submatch = result[i];
                subs[--i] = submatch
                    ? $elm$core$Maybe$Just(submatch)
                    : $elm$core$Maybe$Nothing;
            }
            out.push($elm$regex$Regex$Match_raw(result[0], result.index, number, _List_fromArray(subs)));
            prevLastIndex = re.lastIndex;
        }
        re.lastIndex = lastIndex;
        return _List_fromArray(out);
    }, _Regex_findAtMost = F3(_Regex_findAtMost_raw);
    var _Regex_replaceAtMost_raw = function (n, re, replacer, string) {
        var count = 0;
        function jsReplacer(match) {
            if (count++ >= n) {
                return match;
            }
            var i = arguments.length - 3;
            var submatches = new Array(i);
            while (i > 0) {
                var submatch = arguments[i];
                submatches[--i] = submatch
                    ? $elm$core$Maybe$Just(submatch)
                    : $elm$core$Maybe$Nothing;
            }
            return replacer($elm$regex$Regex$Match_raw(match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
        }
        return string.replace(re, jsReplacer);
    }, _Regex_replaceAtMost = F4(_Regex_replaceAtMost_raw);
    var _Regex_splitAtMost_raw = function (n, re, str) {
        var string = str;
        var out = [];
        var start = re.lastIndex;
        var restoreLastIndex = re.lastIndex;
        while (n--) {
            var result = re.exec(string);
            if (!result)
                break;
            out.push(string.slice(start, result.index));
            start = re.lastIndex;
        }
        out.push(string.slice(start));
        re.lastIndex = restoreLastIndex;
        return _List_fromArray(out);
    }, _Regex_splitAtMost = F3(_Regex_splitAtMost_raw);
    var _Regex_infinity = Infinity;
    var _Bitwise_and_raw = (a, b) => a & b, _Bitwise_and = F2(_Bitwise_and_raw);
    var _Bitwise_or_raw = (a, b) => a | b, _Bitwise_or = F2(_Bitwise_or_raw);
    var _Bitwise_xor_raw = (a, b) => a ^ b, _Bitwise_xor = F2(_Bitwise_xor_raw);
    const _Bitwise_complement = (a) => ~a;
    ;
    var _Bitwise_shiftLeftBy_raw = (offset, a) => a << offset, _Bitwise_shiftLeftBy = F2(_Bitwise_shiftLeftBy_raw);
    var _Bitwise_shiftRightBy_raw = (offset, a) => a >> offset, _Bitwise_shiftRightBy = F2(_Bitwise_shiftRightBy_raw);
    var _Bitwise_shiftRightZfBy_raw = (offset, a) => a >>> offset, _Bitwise_shiftRightZfBy = F2(_Bitwise_shiftRightZfBy_raw);
    const _Url_percentEncode = (string) => encodeURIComponent(string);
    function _Url_percentDecode(string) {
        try {
            return $elm$core$Maybe$Just(decodeURIComponent(string));
        }
        catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }
    var $elm$core$Basics$EQ = 1;
    var $elm$core$Basics$GT = 2;
    var $elm$core$Basics$LT = 0;
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Dict$foldr_raw = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldr_raw(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr = F3($elm$core$Dict$foldr_raw);
    var $elm$core$Dict$toList = (dict) => $elm$core$Dict$foldr_raw(F3((key, value, list) => _List_Cons(_Utils_Tuple2(key, value), list)), _List_Nil, dict);
    var $elm$core$Dict$keys = (dict) => $elm$core$Dict$foldr_raw(F3((key, value, keyList) => _List_Cons(key, keyList)), _List_Nil, dict);
    var $elm$core$Set$toList = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr_raw = function (func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function (node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldr_raw(helper, acc, subTree);
            }
            else {
                var values = node.a;
                return _JsArray_foldr_raw(func, acc, values);
            }
        });
        return _JsArray_foldr_raw(helper, _JsArray_foldr_raw(func, baseCase, tail), tree);
    }, $elm$core$Array$foldr = F3($elm$core$Array$foldr_raw);
    var $elm$core$Array$toList = (array) => $elm$core$Array$foldr_raw($elm$core$List$cons, _List_Nil, array);
    var $elm$core$Result$Err = (a) => ({ $: 1, a: a });
    var $elm$json$Json$Decode$Failure_raw = (a, b) => ({ $: 3, a: a, b: b }), $elm$json$Json$Decode$Failure = F2($elm$json$Json$Decode$Failure_raw);
    var $elm$json$Json$Decode$Field_raw = (a, b) => ({ $: 0, a: a, b: b }), $elm$json$Json$Decode$Field = F2($elm$json$Json$Decode$Field_raw);
    var $elm$json$Json$Decode$Index_raw = (a, b) => ({ $: 1, a: a, b: b }), $elm$json$Json$Decode$Index = F2($elm$json$Json$Decode$Index_raw);
    var $elm$core$Result$Ok = (a) => ({ $: 0, a: a });
    var $elm$json$Json$Decode$OneOf = (a) => ({ $: 2, a: a });
    var $elm$core$Basics$False = 1;
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = a => ({ $: 0, a });
    var $elm$core$Maybe$Nothing = { $: 1, a: null };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join_raw = (sep, chunks) => _String_join_raw(sep, _List_toArray(chunks)), $elm$core$String$join = F2($elm$core$String$join_raw);
    var $elm$core$String$split_raw = (sep, string) => _List_fromArray(_String_split_raw(sep, string)), $elm$core$String$split = F2($elm$core$String$split_raw);
    var $elm$json$Json$Decode$indent = (str) => $elm$core$String$join_raw("\n    ", $elm$core$String$split_raw("\n", str));
    var $elm$core$List$foldl_raw = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl = F3($elm$core$List$foldl_raw);
    var $elm$core$List$length = (xs) => $elm$core$List$foldl_raw(F2((_v0, i) => i + 1), 0, xs);
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp_raw = function (lo, hi, list) {
        rangeHelp: while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = _List_Cons(hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            }
            else {
                return list;
            }
        }
    }, $elm$core$List$rangeHelp = F3($elm$core$List$rangeHelp_raw);
    var $elm$core$List$range_raw = (lo, hi) => $elm$core$List$rangeHelp_raw(lo, hi, _List_Nil), $elm$core$List$range = F2($elm$core$List$range_raw);
    var $elm$core$List$indexedMap_raw = (f, xs) => _List_map2_raw(f, $elm$core$List$range_raw(0, $elm$core$List$length(xs) - 1), xs), $elm$core$List$indexedMap = F2($elm$core$List$indexedMap_raw);
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (97 <= code) && (code <= 122);
    };
    var $elm$core$Char$isUpper = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 90) && (65 <= code);
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = (_char) => $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    var $elm$core$Char$isDigit = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 57) && (48 <= code);
    };
    var $elm$core$Char$isAlphaNum = (_char) => $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    var $elm$core$List$reverse = (list) => $elm$core$List$foldl_raw($elm$core$List$cons, _List_Nil, list);
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf_raw = (i, error) => "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error)))), $elm$json$Json$Decode$errorOneOf = F2($elm$json$Json$Decode$errorOneOf_raw);
    var $elm$json$Json$Decode$errorToString = (error) => $elm$json$Json$Decode$errorToStringHelp_raw(error, _List_Nil);
    var $elm$json$Json$Decode$errorToStringHelp_raw = function (error, context) {
        errorToStringHelp: while (true) {
            switch (error.$) {
                case 0:
                    var f = error.a;
                    var err = error.b;
                    var isSimple = function () {
                        var _v1 = $elm$core$String$uncons(f);
                        if (_v1.$ === 1) {
                            return false;
                        }
                        else {
                            var _v2 = _v1.a;
                            var _char = _v2.a;
                            var rest = _v2.b;
                            return $elm$core$Char$isAlpha(_char) && _String_all_raw($elm$core$Char$isAlphaNum, rest);
                        }
                    }();
                    var fieldName = isSimple ? ("." + f) : ("['" + (f + "']"));
                    var $temp$error = err, $temp$context = _List_Cons(fieldName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 1:
                    var i = error.a;
                    var err = error.b;
                    var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                    var $temp$error = err, $temp$context = _List_Cons(indexName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 2:
                    var errors = error.a;
                    if (!errors.b) {
                        return "Ran into a Json.Decode.oneOf with no possibilities" + function () {
                            if (!context.b) {
                                return "!";
                            }
                            else {
                                return " at json" + $elm$core$String$join_raw("", $elm$core$List$reverse(context));
                            }
                        }();
                    }
                    else {
                        if (!errors.b.b) {
                            var err = errors.a;
                            var $temp$error = err, $temp$context = context;
                            error = $temp$error;
                            context = $temp$context;
                            continue errorToStringHelp;
                        }
                        else {
                            var starter = function () {
                                if (!context.b) {
                                    return "Json.Decode.oneOf";
                                }
                                else {
                                    return "The Json.Decode.oneOf at json" + $elm$core$String$join_raw("", $elm$core$List$reverse(context));
                                }
                            }();
                            var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                            return $elm$core$String$join_raw("\n\n", _List_Cons(introduction, $elm$core$List$indexedMap_raw($elm$json$Json$Decode$errorOneOf, errors)));
                        }
                    }
                default:
                    var msg = error.a;
                    var json = error.b;
                    var introduction = function () {
                        if (!context.b) {
                            return "Problem with the given value:\n\n";
                        }
                        else {
                            return "Problem with the value at json" + ($elm$core$String$join_raw("", $elm$core$List$reverse(context)) + ":\n\n    ");
                        }
                    }();
                    return introduction + ($elm$json$Json$Decode$indent(_Json_encode_raw(4, json)) + ("\n\n" + msg));
            }
        }
    }, $elm$json$Json$Decode$errorToStringHelp = F2($elm$json$Json$Decode$errorToStringHelp_raw);
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin_raw = (a, b, c, d) => ({ $: 0, a: a, b: b, c: c, d: d }), $elm$core$Array$Array_elm_builtin = F4($elm$core$Array$Array_elm_builtin_raw);
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase_raw = (base, number) => _Basics_log(number) / _Basics_log(base), $elm$core$Basics$logBase = F2($elm$core$Basics$logBase_raw);
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling($elm$core$Basics$logBase_raw(2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = $elm$core$Array$Array_elm_builtin_raw(0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = (a) => ({ $: 1, a: a });
    var $elm$core$Basics$apL_raw = (f, x) => f(x), $elm$core$Basics$apL = F2($elm$core$Basics$apL_raw);
    var $elm$core$Basics$apR_raw = (x, f) => f(x), $elm$core$Basics$apR = F2($elm$core$Basics$apR_raw);
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max_raw = (x, y) => (_Utils_cmp(x, y) > 0) ? x : y, $elm$core$Basics$max = F2($elm$core$Basics$max_raw);
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = (a) => ({ $: 0, a: a });
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes_raw = function (nodes, acc) {
        compressNodes: while (true) {
            var _v0 = _JsArray_initializeFromList_raw($elm$core$Array$branchFactor, nodes);
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
    }, $elm$core$Array$compressNodes = F2($elm$core$Array$compressNodes_raw);
    var $elm$core$Tuple$first = function (_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder_raw = function (nodeList, nodeListSize) {
        treeFromBuilder: while (true) {
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
                return _JsArray_initializeFromList_raw($elm$core$Array$branchFactor, nodeList).a;
            }
            else {
                var $temp$nodeList = $elm$core$Array$compressNodes_raw(nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    }, $elm$core$Array$treeFromBuilder = F2($elm$core$Array$treeFromBuilder_raw);
    var $elm$core$Array$builderToArray_raw = function (reverseNodeList, builder) {
        if (!builder.v) {
            return $elm$core$Array$Array_elm_builtin_raw($elm$core$Elm$JsArray$length(builder.x), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.x);
        }
        else {
            var treeLen = builder.v * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor($elm$core$Basics$logBase_raw($elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.y) : builder.y;
            var tree = $elm$core$Array$treeFromBuilder_raw(correctNodeList, builder.v);
            return $elm$core$Array$Array_elm_builtin_raw($elm$core$Elm$JsArray$length(builder.x) + treeLen, $elm$core$Basics$max_raw(5, depth * $elm$core$Array$shiftStep), tree, builder.x);
        }
    }, $elm$core$Array$builderToArray = F2($elm$core$Array$builderToArray_raw);
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp_raw = function (fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while (true) {
            if (fromIndex < 0) {
                return $elm$core$Array$builderToArray_raw(false, { y: nodeList, v: (len / $elm$core$Array$branchFactor) | 0, x: tail });
            }
            else {
                var leaf = $elm$core$Array$Leaf(_JsArray_initialize_raw($elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = _List_Cons(leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    }, $elm$core$Array$initializeHelp = F5($elm$core$Array$initializeHelp_raw);
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize_raw = function (len, fn) {
        if (len <= 0) {
            return $elm$core$Array$empty;
        }
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = _JsArray_initialize_raw(tailLen, len - tailLen, fn);
            var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
            return $elm$core$Array$initializeHelp_raw(fn, initialFromIndex, len, _List_Nil, tail);
        }
    }, $elm$core$Array$initialize = F2($elm$core$Array$initialize_raw);
    var $elm$core$Basics$True = 0;
    var $elm$core$Result$isOk = function (result) {
        if (!result.$) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
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
    var $elm$browser$Browser$External = (a) => ({ $: 1, a: a });
    var $elm$browser$Browser$Internal = (a) => ({ $: 0, a: a });
    var $elm$core$Basics$identity = (x) => x;
    var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
    var $elm$url$Url$Http = 0;
    var $elm$url$Url$Https = 1;
    var $elm$url$Url$Url_raw = (protocol, host, port_, path, query, fragment) => ({ br: fragment, bu: host, bF: path, bI: port_, bN: protocol, bO: query }), $elm$url$Url$Url = F6($elm$url$Url$Url_raw);
    var $elm$core$String$contains = _String_contains;
    var $elm$core$String$length = _String_length;
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft_raw = (n, string) => (n < 1) ? string : _String_slice_raw(n, $elm$core$String$length(string), string), $elm$core$String$dropLeft = F2($elm$core$String$dropLeft_raw);
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = (string) => string === "";
    var $elm$core$String$left_raw = (n, string) => (n < 1) ? "" : _String_slice_raw(0, n, string), $elm$core$String$left = F2($elm$core$String$left_raw);
    var $elm$core$String$toInt = _String_toInt;
    var $elm$url$Url$chompBeforePath_raw = function (protocol, path, params, frag, str) {
        if ($elm$core$String$isEmpty(str) || _String_contains_raw("@", str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_raw(":", str);
            if (!_v0.b) {
                return $elm$core$Maybe$Just($elm$url$Url$Url_raw(protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
            }
            else {
                if (!_v0.b.b) {
                    var i = _v0.a;
                    var _v1 = $elm$core$String$toInt($elm$core$String$dropLeft_raw(i + 1, str));
                    if (_v1.$ === 1) {
                        return $elm$core$Maybe$Nothing;
                    }
                    else {
                        var port_ = _v1;
                        return $elm$core$Maybe$Just($elm$url$Url$Url_raw(protocol, $elm$core$String$left_raw(i, str), port_, path, params, frag));
                    }
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
    }, $elm$url$Url$chompBeforePath = F5($elm$url$Url$chompBeforePath_raw);
    var $elm$url$Url$chompBeforeQuery_raw = function (protocol, params, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_raw("/", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforePath_raw(protocol, "/", params, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforePath_raw(protocol, $elm$core$String$dropLeft_raw(i, str), params, frag, $elm$core$String$left_raw(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeQuery = F4($elm$url$Url$chompBeforeQuery_raw);
    var $elm$url$Url$chompBeforeFragment_raw = function (protocol, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_raw("?", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeQuery_raw(protocol, $elm$core$Maybe$Nothing, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeQuery_raw(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_raw(i + 1, str)), frag, $elm$core$String$left_raw(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeFragment = F3($elm$url$Url$chompBeforeFragment_raw);
    var $elm$url$Url$chompAfterProtocol_raw = function (protocol, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_raw("#", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeFragment_raw(protocol, $elm$core$Maybe$Nothing, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeFragment_raw(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_raw(i + 1, str)), $elm$core$String$left_raw(i, str));
            }
        }
    }, $elm$url$Url$chompAfterProtocol = F2($elm$url$Url$chompAfterProtocol_raw);
    var $elm$core$String$startsWith = _String_startsWith;
    var $elm$url$Url$fromString = (str) => _String_startsWith_raw("http://", str) ? $elm$url$Url$chompAfterProtocol_raw(0, $elm$core$String$dropLeft_raw(7, str)) : (_String_startsWith_raw("https://", str) ? $elm$url$Url$chompAfterProtocol_raw(1, $elm$core$String$dropLeft_raw(8, str)) : $elm$core$Maybe$Nothing);
    var $elm$core$Basics$never = function (_v0) {
        never: while (true) {
            var nvr = _v0;
            var $temp$_v0 = nvr;
            _v0 = $temp$_v0;
            continue never;
        }
    };
    var $elm$core$Task$Perform = $elm$core$Basics$identity;
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(0);
    var $elm$core$List$foldrHelper_raw = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return A2(fn, a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return A2(fn, a, A2(fn, b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_raw(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_raw(fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper = F4($elm$core$List$foldrHelper_raw);
    var $elm$core$List$foldr_raw = (fn, acc, ls) => $elm$core$List$foldrHelper_raw(fn, acc, 0, ls), $elm$core$List$foldr = F3($elm$core$List$foldr_raw);
    var $elm$core$List$map_raw = (f, xs) => $elm$core$List$foldr_raw(F2((x, acc) => _List_Cons(f(x), acc)), _List_Nil, xs), $elm$core$List$map = F2($elm$core$List$map_raw);
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map_raw = (func, taskA) => _Scheduler_andThen_raw((a) => $elm$core$Task$succeed(func(a)), taskA), $elm$core$Task$map = F2($elm$core$Task$map_raw);
    var $elm$core$Task$map2_raw = (func, taskA, taskB) => _Scheduler_andThen_raw((a) => _Scheduler_andThen_raw((b) => $elm$core$Task$succeed(A2(func, a, b)), taskB), taskA), $elm$core$Task$map2 = F3($elm$core$Task$map2_raw);
    var $elm$core$Task$sequence = (tasks) => $elm$core$List$foldr_raw($elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd_raw = function (router, _v0) {
        var task = _v0;
        return _Scheduler_spawn(_Scheduler_andThen_raw($elm$core$Platform$sendToApp(router), task));
    }, $elm$core$Task$spawnCmd = F2($elm$core$Task$spawnCmd_raw);
    var $elm$core$Task$onEffects_raw = (router, commands, state) => $elm$core$Task$map_raw((_v0) => 0, $elm$core$Task$sequence($elm$core$List$map_raw($elm$core$Task$spawnCmd(router), commands))), $elm$core$Task$onEffects = F3($elm$core$Task$onEffects_raw);
    var $elm$core$Task$onSelfMsg_raw = (_v0, _v1, _v2) => $elm$core$Task$succeed(0), $elm$core$Task$onSelfMsg = F3($elm$core$Task$onSelfMsg_raw);
    var $elm$core$Task$cmdMap_raw = function (tagger, _v0) {
        var task = _v0;
        return $elm$core$Task$map_raw(tagger, task);
    }, $elm$core$Task$cmdMap = F2($elm$core$Task$cmdMap_raw);
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform_raw = (toMessage, task) => $elm$core$Task$command($elm$core$Task$map_raw(toMessage, task)), $elm$core$Task$perform = F2($elm$core$Task$perform_raw);
    var $elm$browser$Browser$element = _Browser_element;
    var $author$project$Benchmark$Runner$Json$Update = $elm$core$Basics$identity;
    var $elm$core$Process$sleep = _Process_sleep;
    var $author$project$Benchmark$Runner$Json$breakForRender = (task) => _Scheduler_andThen_raw((_v0) => task, $elm$core$Process$sleep(0));
    var $elm$core$List$any_raw = function (isOkay, list) {
        any: while (true) {
            if (!list.b) {
                return false;
            }
            else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) {
                    return true;
                }
                else {
                    var $temp$isOkay = isOkay, $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any;
                }
            }
        }
    }, $elm$core$List$any = F2($elm$core$List$any_raw);
    var $elm$core$Basics$composeL_raw = (g, f, x) => g(f(x)), $elm$core$Basics$composeL = F3($elm$core$Basics$composeL_raw);
    var $elm$core$Basics$not = _Basics_not;
    var $elm$core$List$all_raw = (isOkay, list) => !$elm$core$List$any_raw(A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay), list), $elm$core$List$all = F2($elm$core$List$all_raw);
    var $elm$core$Basics$clamp_raw = (low, high, number) => (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number), $elm$core$Basics$clamp = F3($elm$core$Basics$clamp_raw);
    var $elm$core$Dict$foldl_raw = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldl_raw(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl = F3($elm$core$Dict$foldl_raw);
    var $elm_explorations$benchmark$Benchmark$Samples$count = function (_v0) {
        var samples = _v0;
        return $elm$core$Dict$foldl_raw(F3((_v1, times, acc) => $elm$core$List$length(times) + acc), 0, samples);
    };
    var $elm_explorations$benchmark$Benchmark$Status$numBuckets = 25;
    var $elm_explorations$benchmark$Benchmark$Status$samplesPerBucket = 5;
    var $elm_explorations$benchmark$Benchmark$Status$progress = function (status) {
        switch (status.$) {
            case 0:
                return 0;
            case 1:
                return 0;
            case 2:
                var samples = status.b;
                return $elm$core$Basics$clamp_raw(0, 1, $elm_explorations$benchmark$Benchmark$Samples$count(samples) / ($elm_explorations$benchmark$Benchmark$Status$numBuckets * $elm_explorations$benchmark$Benchmark$Status$samplesPerBucket));
            case 3:
                return 1;
            default:
                return 1;
        }
    };
    var $elm_explorations$benchmark$Benchmark$done = function (benchmark_) {
        switch (benchmark_.$) {
            case 0:
                var status = benchmark_.c;
                return $elm_explorations$benchmark$Benchmark$Status$progress(status) === 1;
            case 1:
                var benchmarks = benchmark_.b;
                return $elm$core$List$all_raw($elm$core$Basics$eq(1), $elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$Status$progress, $elm$core$List$map_raw(function (_v1) {
                    var status = _v1.c;
                    return status;
                }, benchmarks)));
            default:
                var benchmarks = benchmark_.b;
                return $elm$core$List$all_raw($elm_explorations$benchmark$Benchmark$done, benchmarks);
        }
    };
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $elm_explorations$benchmark$Benchmark$Benchmark$Group_raw = (a, b) => ({ $: 2, a: a, b: b }), $elm_explorations$benchmark$Benchmark$Benchmark$Group = F2($elm_explorations$benchmark$Benchmark$Benchmark$Group_raw);
    var $elm_explorations$benchmark$Benchmark$Benchmark$Series_raw = (a, b) => ({ $: 1, a: a, b: b }), $elm_explorations$benchmark$Benchmark$Benchmark$Series = F2($elm_explorations$benchmark$Benchmark$Benchmark$Series_raw);
    var $elm_explorations$benchmark$Benchmark$Benchmark$Single_raw = (a, b, c) => ({ $: 0, a: a, b: b, c: c }), $elm_explorations$benchmark$Benchmark$Benchmark$Single = F3($elm_explorations$benchmark$Benchmark$Benchmark$Single_raw);
    var $elm_explorations$benchmark$Benchmark$Status$Failure = (a) => ({ $: 3, a: a });
    var $elm_explorations$benchmark$Benchmark$Status$MeasurementError = (a) => ({ $: 0, a: a });
    var $elm_explorations$benchmark$Benchmark$Status$Pending_raw = (a, b) => ({ $: 2, a: a, b: b }), $elm_explorations$benchmark$Benchmark$Status$Pending = F2($elm_explorations$benchmark$Benchmark$Status$Pending_raw);
    var $elm_explorations$benchmark$Benchmark$Status$Unsized = { $: 1 };
    var $elm_explorations$benchmark$Benchmark$Status$bucketSpacingRatio = 2;
    var $elm_explorations$benchmark$Benchmark$Samples$Samples = $elm$core$Basics$identity;
    var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm_explorations$benchmark$Benchmark$Samples$empty = $elm$core$Dict$empty;
    var $elm_explorations$benchmark$Benchmark$Status$AnalysisError = (a) => ({ $: 1, a: a });
    var $elm_explorations$benchmark$Benchmark$Status$Success_raw = (a, b) => ({ $: 4, a: a, b: b }), $elm_explorations$benchmark$Benchmark$Status$Success = F2($elm_explorations$benchmark$Benchmark$Status$Success_raw);
    var $elm$core$Dict$Black = 1;
    var $elm$core$Dict$RBNode_elm_builtin_raw = (a, b, c, d, e) => ({ $: -1, a: a, b: b, c: c, d: d, e: e }), $elm$core$Dict$RBNode_elm_builtin = F5($elm$core$Dict$RBNode_elm_builtin_raw);
    var $elm$core$Dict$Red = 0;
    var $elm$core$Dict$balance_raw = function (color, key, value, left, right) {
        if ((right.$ === -1) && (!right.a)) {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if ((left.$ === -1) && (!left.a)) {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_raw(0, key, value, $elm$core$Dict$RBNode_elm_builtin_raw(1, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_raw(1, rK, rV, rLeft, rRight));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_raw(color, rK, rV, $elm$core$Dict$RBNode_elm_builtin_raw(0, key, value, left, rLeft), rRight);
            }
        }
        else {
            if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
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
                return $elm$core$Dict$RBNode_elm_builtin_raw(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_raw(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_raw(1, key, value, lRight, right));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_raw(color, key, value, left, right);
            }
        }
    }, $elm$core$Dict$balance = F5($elm$core$Dict$balance_raw);
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$insertHelp_raw = function (key, value, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBNode_elm_builtin_raw(0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        }
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = _Utils_compare_raw(key, nKey);
            switch (_v1) {
                case 0:
                    return $elm$core$Dict$balance_raw(nColor, nKey, nValue, $elm$core$Dict$insertHelp_raw(key, value, nLeft), nRight);
                case 1:
                    return $elm$core$Dict$RBNode_elm_builtin_raw(nColor, nKey, value, nLeft, nRight);
                default:
                    return $elm$core$Dict$balance_raw(nColor, nKey, nValue, nLeft, $elm$core$Dict$insertHelp_raw(key, value, nRight));
            }
        }
    }, $elm$core$Dict$insertHelp = F3($elm$core$Dict$insertHelp_raw);
    var $elm$core$Dict$insert_raw = function (key, value, dict) {
        var _v0 = $elm$core$Dict$insertHelp_raw(key, value, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_raw(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$insert = F3($elm$core$Dict$insert_raw);
    var $BrianHicks$elm_trend$Trend$Linear$line = function (_v0) {
        var precalculated = _v0.a;
        return precalculated;
    };
    var $elm$core$Dict$map_raw = function (func, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            return $elm$core$Dict$RBNode_elm_builtin_raw(color, key, A2(func, key, value), $elm$core$Dict$map_raw(func, left), $elm$core$Dict$map_raw(func, right));
        }
    }, $elm$core$Dict$map = F2($elm$core$Dict$map_raw);
    var $elm$core$Result$map_raw = function (func, ra) {
        if (!ra.$) {
            var a = ra.a;
            return $elm$core$Result$Ok(func(a));
        }
        else {
            var e = ra.a;
            return $elm$core$Result$Err(e);
        }
    }, $elm$core$Result$map = F2($elm$core$Result$map_raw);
    var $elm$core$List$partition_raw = function (pred, list) {
        var step = F2(function (x, _v0) {
            var trues = _v0.a;
            var falses = _v0.b;
            return pred(x) ? _Utils_Tuple2(_List_Cons(x, trues), falses) : _Utils_Tuple2(trues, _List_Cons(x, falses));
        });
        return $elm$core$List$foldr_raw(step, _Utils_Tuple2(_List_Nil, _List_Nil), list);
    }, $elm$core$List$partition = F2($elm$core$List$partition_raw);
    var $elm_explorations$benchmark$Benchmark$Samples$pointify = (samples) => $elm$core$Dict$foldr_raw(F3((sampleSize, values, acc) => _Utils_ap($elm$core$List$map_raw((b) => _Utils_Tuple2(sampleSize, b), values), acc)), _List_Nil, samples);
    var $BrianHicks$elm_trend$Trend$Linear$predictY_raw = function (_v0, x) {
        var slope = _v0.bc;
        var intercept = _v0.a6;
        return (slope * x) + intercept;
    }, $BrianHicks$elm_trend$Trend$Linear$predictY = F2($BrianHicks$elm_trend$Trend$Linear$predictY_raw);
    var $BrianHicks$elm_trend$Trend$Math$AllZeros = { $: 1 };
    var $BrianHicks$elm_trend$Trend$Math$NeedMoreValues = (a) => ({ $: 0, a: a });
    var $BrianHicks$elm_trend$Trend$Linear$Robust_raw = (a, b) => ({ $: 0, a: a, b: b }), $BrianHicks$elm_trend$Trend$Linear$Robust = F2($BrianHicks$elm_trend$Trend$Linear$Robust_raw);
    var $BrianHicks$elm_trend$Trend$Linear$Trend_raw = (a, b) => ({ $: 0, a: a, b: b }), $BrianHicks$elm_trend$Trend$Linear$Trend = F2($BrianHicks$elm_trend$Trend$Linear$Trend_raw);
    var $elm$core$List$filter_raw = (isGood, list) => $elm$core$List$foldr_raw(F2((x, xs) => isGood(x) ? _List_Cons(x, xs) : xs), _List_Nil, list), $elm$core$List$filter = F2($elm$core$List$filter_raw);
    var $elm$core$Result$fromMaybe_raw = function (err, maybe) {
        if (!maybe.$) {
            var v = maybe.a;
            return $elm$core$Result$Ok(v);
        }
        else {
            return $elm$core$Result$Err(err);
        }
    }, $elm$core$Result$fromMaybe = F2($elm$core$Result$fromMaybe_raw);
    var $elm$core$Basics$isInfinite = _Basics_isInfinite;
    var $elm$core$Basics$isNaN = _Basics_isNaN;
    var $elm$core$Maybe$map3_raw = function (func, ma, mb, mc) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                if (mc.$ === 1) {
                    return $elm$core$Maybe$Nothing;
                }
                else {
                    var c = mc.a;
                    return $elm$core$Maybe$Just(A3(func, a, b, c));
                }
            }
        }
    }, $elm$core$Maybe$map3 = F4($elm$core$Maybe$map3_raw);
    var $elm$core$List$sortBy = _List_sortBy;
    var $elm$core$List$sort = (xs) => _List_sortBy_raw($elm$core$Basics$identity, xs);
    var $BrianHicks$elm_trend$Trend$Linear$Line_raw = (slope, intercept) => ({ a6: intercept, bc: slope }), $BrianHicks$elm_trend$Trend$Linear$Line = F2($BrianHicks$elm_trend$Trend$Linear$Line_raw);
    var $elm$core$Maybe$andThen_raw = function (callback, maybeValue) {
        if (!maybeValue.$) {
            var value = maybeValue.a;
            return callback(value);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$andThen = F2($elm$core$Maybe$andThen_raw);
    var $elm$core$Maybe$map_raw = function (f, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$map = F2($elm$core$Maybe$map_raw);
    var $elm$core$Maybe$map2_raw = function (func, ma, mb) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                return $elm$core$Maybe$Just(A2(func, a, b));
            }
        }
    }, $elm$core$Maybe$map2 = F3($elm$core$Maybe$map2_raw);
    var $elm$core$List$drop_raw = function (n, list) {
        drop: while (true) {
            if (n <= 0) {
                return list;
            }
            else {
                if (!list.b) {
                    return list;
                }
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                }
            }
        }
    }, $elm$core$List$drop = F2($elm$core$List$drop_raw);
    var $elm$core$List$head = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$List$sum = (numbers) => $elm$core$List$foldl_raw($elm$core$Basics$add, 0, numbers);
    var $BrianHicks$elm_trend$Trend$Math$mean = function (numbers) {
        if (!numbers.b) {
            return $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$NeedMoreValues(1));
        }
        else {
            return $elm$core$Result$Ok($elm$core$List$sum(numbers) / $elm$core$List$length(numbers));
        }
    };
    var $elm$core$List$takeReverse_raw = function (n, list, kept) {
        takeReverse: while (true) {
            if (n <= 0) {
                return kept;
            }
            else {
                if (!list.b) {
                    return kept;
                }
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs, $temp$kept = _List_Cons(x, kept);
                    n = $temp$n;
                    list = $temp$list;
                    kept = $temp$kept;
                    continue takeReverse;
                }
            }
        }
    }, $elm$core$List$takeReverse = F3($elm$core$List$takeReverse_raw);
    var $elm$core$List$takeTailRec_raw = (n, list) => $elm$core$List$reverse($elm$core$List$takeReverse_raw(n, list, _List_Nil)), $elm$core$List$takeTailRec = F2($elm$core$List$takeTailRec_raw);
    var $elm$core$List$takeFast_raw = function (ctr, n, list) {
        if (n <= 0) {
            return _List_Nil;
        }
        else {
            var _v0 = _Utils_Tuple2(n, list);
            _v0$1: while (true) {
                _v0$5: while (true) {
                    if (!_v0.b.b) {
                        return list;
                    }
                    else {
                        if (_v0.b.b.b) {
                            switch (_v0.a) {
                                case 1:
                                    break _v0$1;
                                case 2:
                                    var _v2 = _v0.b;
                                    var x = _v2.a;
                                    var _v3 = _v2.b;
                                    var y = _v3.a;
                                    return { $: 1, a: x, b: { $: 1, a: y, b: _List_Nil } };
                                case 3:
                                    if (_v0.b.b.b.b) {
                                        var _v4 = _v0.b;
                                        var x = _v4.a;
                                        var _v5 = _v4.b;
                                        var y = _v5.a;
                                        var _v6 = _v5.b;
                                        var z = _v6.a;
                                        return { $: 1, a: x, b: { $: 1, a: y, b: { $: 1, a: z, b: _List_Nil } } };
                                    }
                                    else {
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
                                        return (ctr > 1000) ? _List_Cons(x, _List_Cons(y, _List_Cons(z, _List_Cons(w, $elm$core$List$takeTailRec_raw(n - 4, tl))))) : _List_Cons(x, _List_Cons(y, _List_Cons(z, _List_Cons(w, $elm$core$List$takeFast_raw(ctr + 1, n - 4, tl)))));
                                    }
                                    else {
                                        break _v0$5;
                                    }
                            }
                        }
                        else {
                            if (_v0.a === 1) {
                                break _v0$1;
                            }
                            else {
                                break _v0$5;
                            }
                        }
                    }
                }
                return list;
            }
            var _v1 = _v0.b;
            var x = _v1.a;
            return { $: 1, a: x, b: _List_Nil };
        }
    }, $elm$core$List$takeFast = F3($elm$core$List$takeFast_raw);
    var $elm$core$List$take_raw = (n, list) => $elm$core$List$takeFast_raw(0, n, list), $elm$core$List$take = F2($elm$core$List$take_raw);
    var $elm$core$Result$toMaybe = function (result) {
        if (!result.$) {
            var v = result.a;
            return $elm$core$Maybe$Just(v);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $BrianHicks$elm_trend$Trend$Linear$percentile_raw = function (k, xs) {
        var index = $elm$core$List$length(xs) * k;
        return (!(index - $elm$core$Basics$floor(index))) ? $elm$core$List$head($elm$core$List$drop_raw($elm$core$Basics$ceiling(index) - 1, xs)) : $elm$core$Result$toMaybe($BrianHicks$elm_trend$Trend$Math$mean($elm$core$List$take_raw(2, $elm$core$List$drop_raw($elm$core$Basics$floor(index) - 1, xs))));
    }, $BrianHicks$elm_trend$Trend$Linear$percentile = F2($BrianHicks$elm_trend$Trend$Linear$percentile_raw);
    var $BrianHicks$elm_trend$Trend$Linear$theilSenLine_raw = function (pct, slopes, points) {
        var slope = $BrianHicks$elm_trend$Trend$Linear$percentile_raw(pct, slopes);
        var intercept = $elm$core$Maybe$andThen_raw($BrianHicks$elm_trend$Trend$Linear$percentile(pct), $elm$core$Maybe$map_raw($elm$core$List$sort, $elm$core$Maybe$map_raw((m) => $elm$core$List$map_raw(function (_v0) {
            var x = _v0.a;
            var y = _v0.b;
            return y - (m * x);
        }, points), slope)));
        return $elm$core$Maybe$map2_raw($BrianHicks$elm_trend$Trend$Linear$Line, slope, intercept);
    }, $BrianHicks$elm_trend$Trend$Linear$theilSenLine = F3($BrianHicks$elm_trend$Trend$Linear$theilSenLine_raw);
    var $BrianHicks$elm_trend$Trend$Linear$robust = function (values) {
        if (!values.b) {
            return $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$NeedMoreValues(2));
        }
        else {
            if (!values.b.b) {
                return $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$NeedMoreValues(2));
            }
            else {
                var slopes = $elm$core$List$sort($elm$core$List$foldl_raw(F2(function (_v1, acc1) {
                    var x = _v1.a;
                    var y = _v1.b;
                    return $elm$core$List$foldl_raw(F2(function (_v2, acc2) {
                        var x1 = _v2.a;
                        var y1 = _v2.b;
                        var res = (y - y1) / (x - x1);
                        return $elm$core$Basics$isNaN(res) ? acc2 : _List_Cons(res, acc2);
                    }), acc1, values);
                }), _List_Nil, values));
                var finiteSlopes = $elm$core$List$filter_raw(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$Basics$isInfinite), slopes);
                return $elm$core$Result$fromMaybe_raw($BrianHicks$elm_trend$Trend$Math$AllZeros, $elm$core$Maybe$map3_raw(F3((trendLine, lower, upper) => $BrianHicks$elm_trend$Trend$Linear$Trend_raw(trendLine, $BrianHicks$elm_trend$Trend$Linear$Robust_raw(lower, upper))), $BrianHicks$elm_trend$Trend$Linear$theilSenLine_raw(0.5, finiteSlopes, values), $BrianHicks$elm_trend$Trend$Linear$theilSenLine_raw(0.975, slopes, values), $BrianHicks$elm_trend$Trend$Linear$theilSenLine_raw(0.025, slopes, values)));
            }
        }
    };
    var $elm$core$Result$withDefault_raw = function (def, result) {
        if (!result.$) {
            var a = result.a;
            return a;
        }
        else {
            return def;
        }
    }, $elm$core$Result$withDefault = F2($elm$core$Result$withDefault_raw);
    var $elm_explorations$benchmark$Benchmark$Samples$groups = function (_v0) {
        var samples = _v0;
        return $elm$core$Result$withDefault_raw(_Utils_Tuple2(samples, $elm$core$Dict$empty), $elm$core$Result$map_raw(A2($elm$core$Dict$foldl, F3(function (key, _v1, _v2) {
            var good = _v1.a;
            var outliers = _v1.b;
            var accGood = _v2.a;
            var accOutliers = _v2.b;
            return _Utils_Tuple2($elm$core$Dict$insert_raw(key, good, accGood), $elm$core$Dict$insert_raw(key, outliers, accOutliers));
        }), _Utils_Tuple2($elm$core$Dict$empty, $elm$core$Dict$empty)), $elm$core$Result$map_raw((line) => $elm$core$Dict$map_raw(F2(function (sampleSize, values) {
            var predicted = $BrianHicks$elm_trend$Trend$Linear$predictY_raw(line, sampleSize);
            var upperBound = predicted * 1.1;
            var lowerBound = predicted / 1.1;
            return $elm$core$List$partition_raw((v) => (_Utils_cmp(lowerBound, v) < 0) && (_Utils_cmp(v, upperBound) < 0), values);
        }), samples), $elm$core$Result$map_raw($BrianHicks$elm_trend$Trend$Linear$line, $BrianHicks$elm_trend$Trend$Linear$robust($elm_explorations$benchmark$Benchmark$Samples$pointify(samples))))));
    };
    var $elm$core$Tuple$mapFirst_raw = function (func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(func(x), y);
    }, $elm$core$Tuple$mapFirst = F2($elm$core$Tuple$mapFirst_raw);
    var $elm$core$Tuple$mapSecond_raw = function (func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
    }, $elm$core$Tuple$mapSecond = F2($elm$core$Tuple$mapSecond_raw);
    var $elm_explorations$benchmark$Benchmark$Samples$points = (samples) => $elm$core$Tuple$mapSecond_raw($elm_explorations$benchmark$Benchmark$Samples$pointify, $elm$core$Tuple$mapFirst_raw($elm_explorations$benchmark$Benchmark$Samples$pointify, $elm_explorations$benchmark$Benchmark$Samples$groups(samples)));
    var $BrianHicks$elm_trend$Trend$Linear$Quick = $elm$core$Basics$identity;
    var $elm$core$Result$andThen_raw = function (callback, result) {
        if (!result.$) {
            var value = result.a;
            return callback(value);
        }
        else {
            var msg = result.a;
            return $elm$core$Result$Err(msg);
        }
    }, $elm$core$Result$andThen = F2($elm$core$Result$andThen_raw);
    var $elm$core$Result$map2_raw = function (func, ra, rb) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                return $elm$core$Result$Ok(A2(func, a, b));
            }
        }
    }, $elm$core$Result$map2 = F3($elm$core$Result$map2_raw);
    var $elm$core$Basics$pow = _Basics_pow;
    var $elm$core$Basics$sqrt = _Basics_sqrt;
    var $BrianHicks$elm_trend$Trend$Math$stddev = function (numbers) {
        var helper = (seriesMean) => $elm$core$Result$map_raw($elm$core$Basics$sqrt, $BrianHicks$elm_trend$Trend$Math$mean($elm$core$List$map_raw((n) => A2($elm$core$Basics$pow, n - seriesMean, 2), numbers)));
        return $elm$core$Result$andThen_raw(helper, $BrianHicks$elm_trend$Trend$Math$mean(numbers));
    };
    var $elm$core$List$unzip = function (pairs) {
        var step_raw = function (_v0, _v1) {
            var x = _v0.a;
            var y = _v0.b;
            var xs = _v1.a;
            var ys = _v1.b;
            return _Utils_Tuple2(_List_Cons(x, xs), _List_Cons(y, ys));
        }, step = F2(step_raw);
        return $elm$core$List$foldr_raw(step, _Utils_Tuple2(_List_Nil, _List_Nil), pairs);
    };
    var $BrianHicks$elm_trend$Trend$Math$correlation = function (values) {
        if (!values.b) {
            return $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$NeedMoreValues(2));
        }
        else {
            if (!values.b.b) {
                return $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$NeedMoreValues(2));
            }
            else {
                var standardize_raw = (meanResult, stddevResult, series) => $elm$core$Result$map2_raw(F2((meanValue, stddevValue) => $elm$core$List$map_raw((point) => (point - meanValue) / stddevValue, series)), meanResult, stddevResult), standardize = F3(standardize_raw);
                var _v1 = $elm$core$List$unzip(values);
                var xs = _v1.a;
                var ys = _v1.b;
                var summedProduct = $elm$core$Result$map_raw($elm$core$List$sum, $elm$core$Result$map2_raw(F2((stdX, stdY) => _List_map2_raw($elm$core$Basics$mul, stdX, stdY)), standardize_raw($BrianHicks$elm_trend$Trend$Math$mean(xs), $BrianHicks$elm_trend$Trend$Math$stddev(xs), xs), standardize_raw($BrianHicks$elm_trend$Trend$Math$mean(ys), $BrianHicks$elm_trend$Trend$Math$stddev(ys), ys)));
                return $elm$core$Result$andThen_raw((val) => $elm$core$Basics$isNaN(val) ? $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$AllZeros) : $elm$core$Result$Ok(val), $elm$core$Result$map_raw((sum) => sum / $elm$core$List$length(values), summedProduct));
            }
        }
    };
    var $elm$core$Result$map3_raw = function (func, ra, rb, rc) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                if (rc.$ === 1) {
                    var x = rc.a;
                    return $elm$core$Result$Err(x);
                }
                else {
                    var c = rc.a;
                    return $elm$core$Result$Ok(A3(func, a, b, c));
                }
            }
        }
    }, $elm$core$Result$map3 = F4($elm$core$Result$map3_raw);
    var $BrianHicks$elm_trend$Trend$Linear$quick = function (values) {
        if (!values.b) {
            return $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$NeedMoreValues(2));
        }
        else {
            if (!values.b.b) {
                return $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$NeedMoreValues(2));
            }
            else {
                var _v1 = $elm$core$List$unzip(values);
                var xs = _v1.a;
                var ys = _v1.b;
                var slopeResult = $elm$core$Result$map3_raw(F3((correl, stddevY, stddevX) => (correl * stddevY) / stddevX), $BrianHicks$elm_trend$Trend$Math$correlation(values), $BrianHicks$elm_trend$Trend$Math$stddev(ys), $BrianHicks$elm_trend$Trend$Math$stddev(xs));
                var intercept = $elm$core$Result$map3_raw(F3((meanY, slope, meanX) => meanY - (slope * meanX)), $BrianHicks$elm_trend$Trend$Math$mean(ys), slopeResult, $BrianHicks$elm_trend$Trend$Math$mean(xs));
                return $elm$core$Result$map_raw((trendLine) => $BrianHicks$elm_trend$Trend$Linear$Trend_raw(trendLine, values), $elm$core$Result$map2_raw($BrianHicks$elm_trend$Trend$Linear$Line, slopeResult, intercept));
            }
        }
    };
    var $elm_explorations$benchmark$Benchmark$Samples$trend = (samples) => $BrianHicks$elm_trend$Trend$Linear$quick($elm_explorations$benchmark$Benchmark$Samples$points(samples).a);
    var $elm_explorations$benchmark$Benchmark$finalize = function (samples) {
        var _v0 = $elm_explorations$benchmark$Benchmark$Samples$trend(samples);
        if (!_v0.$) {
            var trend = _v0.a;
            return $elm_explorations$benchmark$Benchmark$Status$Success_raw(samples, trend);
        }
        else {
            var err = _v0.a;
            return $elm_explorations$benchmark$Benchmark$Status$Failure($elm_explorations$benchmark$Benchmark$Status$AnalysisError(err));
        }
    };
    var $elm_explorations$benchmark$Benchmark$LowLevel$defaultMinimum = 1;
    var $elm$core$Basics$composeR_raw = (f, g, x) => g(f(x)), $elm$core$Basics$composeR = F3($elm$core$Basics$composeR_raw);
    var $elm$core$Basics$min_raw = (x, y) => (_Utils_cmp(x, y) < 0) ? x : y, $elm$core$Basics$min = F2($elm$core$Basics$min_raw);
    var $elm$core$List$minimum = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just($elm$core$List$foldl_raw($elm$core$Basics$min, x, xs));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$List$repeatHelp_raw = function (result, n, value) {
        repeatHelp: while (true) {
            if (n <= 0) {
                return result;
            }
            else {
                var $temp$result = _List_Cons(value, result), $temp$n = n - 1, $temp$value = value;
                result = $temp$result;
                n = $temp$n;
                value = $temp$value;
                continue repeatHelp;
            }
        }
    }, $elm$core$List$repeatHelp = F3($elm$core$List$repeatHelp_raw);
    var $elm$core$List$repeat_raw = (n, value) => $elm$core$List$repeatHelp_raw(_List_Nil, n, value), $elm$core$List$repeat = F2($elm$core$List$repeat_raw);
    var $elm_explorations$benchmark$Benchmark$LowLevel$StackOverflow = { $: 0 };
    var $elm_explorations$benchmark$Benchmark$LowLevel$UnknownError = (a) => ({ $: 1, a: a });
    var $elm_explorations$benchmark$Benchmark$LowLevel$sample_raw = (n, operation_) => _Benchmark_sample_raw(n, operation_), $elm_explorations$benchmark$Benchmark$LowLevel$sample = F2($elm_explorations$benchmark$Benchmark$LowLevel$sample_raw);
    var $elm$core$Basics$round = _Basics_round;
    var $elm_explorations$benchmark$Benchmark$LowLevel$standardizeSampleSize = function (sampleSize) {
        var helper_raw = function (rough, magnitude) {
            helper: while (true) {
                if (rough > 10) {
                    var $temp$rough = $elm$core$Basics$round(rough / 10), $temp$magnitude = magnitude * 10;
                    rough = $temp$rough;
                    magnitude = $temp$magnitude;
                    continue helper;
                }
                else {
                    return rough * magnitude;
                }
            }
        }, helper = F2(helper_raw);
        return helper_raw(sampleSize, 1);
    };
    var $elm$core$Maybe$withDefault_raw = function (_default, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return value;
        }
        else {
            return _default;
        }
    }, $elm$core$Maybe$withDefault = F2($elm$core$Maybe$withDefault_raw);
    var $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSizeWithMinimum_raw = function (minimumRuntime, operation_) {
        var sampleSize = (i) => i * 10;
        var resample = F2((iteration, total) => (_Utils_cmp(total, minimumRuntime) < 0) ? _Scheduler_andThen_raw(resample(iteration + 1), $elm$core$Task$map_raw(A2($elm$core$Basics$composeR, $elm$core$List$minimum, $elm$core$Maybe$withDefault(0)), $elm$core$Task$sequence($elm$core$List$repeat_raw(3, $elm_explorations$benchmark$Benchmark$LowLevel$sample_raw(sampleSize(iteration), operation_))))) : $elm$core$Task$succeed(sampleSize(iteration)));
        return $elm$core$Task$map_raw($elm_explorations$benchmark$Benchmark$LowLevel$standardizeSampleSize, A2(resample, 1, 0));
    }, $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSizeWithMinimum = F2($elm_explorations$benchmark$Benchmark$LowLevel$findSampleSizeWithMinimum_raw);
    var $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSize_a0 = $elm_explorations$benchmark$Benchmark$LowLevel$defaultMinimum, $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSize = $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSizeWithMinimum($elm_explorations$benchmark$Benchmark$LowLevel$findSampleSize_a0);
    var $elm$core$Basics$ge = _Utils_ge;
    var $elm$core$Basics$modBy = _Basics_modBy;
    var $elm$core$Task$onError = _Scheduler_onError;
    var $elm$core$Dict$get_raw = function (targetKey, dict) {
        get: while (true) {
            if (dict.$ === -2) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = _Utils_compare_raw(targetKey, key);
                switch (_v1) {
                    case 0:
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case 1:
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    }, $elm$core$Dict$get = F2($elm$core$Dict$get_raw);
    var $elm$core$Dict$getMin = function (dict) {
        getMin: while (true) {
            if ((dict.$ === -1) && (dict.d.$ === -1)) {
                var left = dict.d;
                var $temp$dict = left;
                dict = $temp$dict;
                continue getMin;
            }
            else {
                return dict;
            }
        }
    };
    var $elm$core$Dict$moveRedLeft = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
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
                return $elm$core$Dict$RBNode_elm_builtin_raw(0, rlK, rlV, $elm$core$Dict$RBNode_elm_builtin_raw(1, k, v, $elm$core$Dict$RBNode_elm_builtin_raw(0, lK, lV, lLeft, lRight), rlL), $elm$core$Dict$RBNode_elm_builtin_raw(1, rK, rV, rlR, rRight));
            }
            else {
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
                    return $elm$core$Dict$RBNode_elm_builtin_raw(1, k, v, $elm$core$Dict$RBNode_elm_builtin_raw(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_raw(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_raw(1, k, v, $elm$core$Dict$RBNode_elm_builtin_raw(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_raw(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$moveRedRight = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
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
                return $elm$core$Dict$RBNode_elm_builtin_raw(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_raw(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_raw(1, k, v, lRight, $elm$core$Dict$RBNode_elm_builtin_raw(0, rK, rV, rLeft, rRight)));
            }
            else {
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
                    return $elm$core$Dict$RBNode_elm_builtin_raw(1, k, v, $elm$core$Dict$RBNode_elm_builtin_raw(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_raw(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_raw(1, k, v, $elm$core$Dict$RBNode_elm_builtin_raw(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_raw(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$removeHelpPrepEQGT_raw = function (targetKey, dict, color, key, value, left, right) {
        if ((left.$ === -1) && (!left.a)) {
            var _v1 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return $elm$core$Dict$RBNode_elm_builtin_raw(color, lK, lV, lLeft, $elm$core$Dict$RBNode_elm_builtin_raw(0, key, value, lRight, right));
        }
        else {
            _v2$2: while (true) {
                if ((right.$ === -1) && (right.a === 1)) {
                    if (right.d.$ === -1) {
                        if (right.d.a === 1) {
                            var _v3 = right.a;
                            var _v4 = right.d;
                            var _v5 = _v4.a;
                            return $elm$core$Dict$moveRedRight(dict);
                        }
                        else {
                            break _v2$2;
                        }
                    }
                    else {
                        var _v6 = right.a;
                        var _v7 = right.d;
                        return $elm$core$Dict$moveRedRight(dict);
                    }
                }
                else {
                    break _v2$2;
                }
            }
            return dict;
        }
    }, $elm$core$Dict$removeHelpPrepEQGT = F7($elm$core$Dict$removeHelpPrepEQGT_raw);
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
                    return $elm$core$Dict$RBNode_elm_builtin_raw(color, key, value, $elm$core$Dict$removeMin(left), right);
                }
                else {
                    var _v4 = $elm$core$Dict$moveRedLeft(dict);
                    if (_v4.$ === -1) {
                        var nColor = _v4.a;
                        var nKey = _v4.b;
                        var nValue = _v4.c;
                        var nLeft = _v4.d;
                        var nRight = _v4.e;
                        return $elm$core$Dict$balance_raw(nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
                    }
                    else {
                        return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                }
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_raw(color, key, value, $elm$core$Dict$removeMin(left), right);
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    };
    var $elm$core$Dict$removeHelp_raw = function (targetKey, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_cmp(targetKey, key) < 0) {
                if ((left.$ === -1) && (left.a === 1)) {
                    var _v4 = left.a;
                    var lLeft = left.d;
                    if ((lLeft.$ === -1) && (!lLeft.a)) {
                        var _v6 = lLeft.a;
                        return $elm$core$Dict$RBNode_elm_builtin_raw(color, key, value, $elm$core$Dict$removeHelp_raw(targetKey, left), right);
                    }
                    else {
                        var _v7 = $elm$core$Dict$moveRedLeft(dict);
                        if (_v7.$ === -1) {
                            var nColor = _v7.a;
                            var nKey = _v7.b;
                            var nValue = _v7.c;
                            var nLeft = _v7.d;
                            var nRight = _v7.e;
                            return $elm$core$Dict$balance_raw(nColor, nKey, nValue, $elm$core$Dict$removeHelp_raw(targetKey, nLeft), nRight);
                        }
                        else {
                            return $elm$core$Dict$RBEmpty_elm_builtin;
                        }
                    }
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_raw(color, key, value, $elm$core$Dict$removeHelp_raw(targetKey, left), right);
                }
            }
            else {
                return $elm$core$Dict$removeHelpEQGT_raw(targetKey, $elm$core$Dict$removeHelpPrepEQGT_raw(targetKey, dict, color, key, value, left, right));
            }
        }
    }, $elm$core$Dict$removeHelp = F2($elm$core$Dict$removeHelp_raw);
    var $elm$core$Dict$removeHelpEQGT_raw = function (targetKey, dict) {
        if (dict.$ === -1) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_eq(targetKey, key)) {
                var _v1 = $elm$core$Dict$getMin(right);
                if (_v1.$ === -1) {
                    var minKey = _v1.b;
                    var minValue = _v1.c;
                    return $elm$core$Dict$balance_raw(color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
                }
                else {
                    return $elm$core$Dict$RBEmpty_elm_builtin;
                }
            }
            else {
                return $elm$core$Dict$balance_raw(color, key, value, left, $elm$core$Dict$removeHelp_raw(targetKey, right));
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    }, $elm$core$Dict$removeHelpEQGT = F2($elm$core$Dict$removeHelpEQGT_raw);
    var $elm$core$Dict$remove_raw = function (key, dict) {
        var _v0 = $elm$core$Dict$removeHelp_raw(key, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_raw(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$remove = F2($elm$core$Dict$remove_raw);
    var $elm$core$Dict$update_raw = function (targetKey, alter, dictionary) {
        var _v0 = alter($elm$core$Dict$get_raw(targetKey, dictionary));
        if (!_v0.$) {
            var value = _v0.a;
            return $elm$core$Dict$insert_raw(targetKey, value, dictionary);
        }
        else {
            return $elm$core$Dict$remove_raw(targetKey, dictionary);
        }
    }, $elm$core$Dict$update = F3($elm$core$Dict$update_raw);
    var $elm_explorations$benchmark$Benchmark$Samples$record_raw = function (sampleSize, sample, _v0) {
        var samplesDict = _v0;
        return $elm$core$Dict$update_raw(sampleSize, function (value) {
            if (value.$ === 1) {
                return $elm$core$Maybe$Just({ $: 1, a: sample, b: _List_Nil });
            }
            else {
                var samples_ = value.a;
                return $elm$core$Maybe$Just(_List_Cons(sample, samples_));
            }
        }, samplesDict);
    }, $elm_explorations$benchmark$Benchmark$Samples$record = F3($elm_explorations$benchmark$Benchmark$Samples$record_raw);
    var $elm_explorations$benchmark$Benchmark$LowLevel$warmup = function (operation_) {
        var toCollect = 1000;
        var sampleSize = 10000;
        var helper = (soFar) => (_Utils_cmp(soFar, toCollect) > -1) ? $elm$core$Task$succeed(0) : _Scheduler_andThen_raw(helper, $elm$core$Task$map_raw($elm$core$Basics$add(soFar), $elm_explorations$benchmark$Benchmark$LowLevel$sample_raw(sampleSize, operation_)));
        return helper(0);
    };
    var $elm_explorations$benchmark$Benchmark$stepLowLevel_raw = function (operation, status) {
        switch (status.$) {
            case 0:
                return _Scheduler_onError_raw(A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$Task$succeed, $elm_explorations$benchmark$Benchmark$Status$Failure), $elm_explorations$benchmark$Benchmark$Status$MeasurementError), $elm$core$Task$map_raw((_v1) => $elm_explorations$benchmark$Benchmark$Status$Unsized, $elm_explorations$benchmark$Benchmark$LowLevel$warmup(operation)));
            case 1:
                return _Scheduler_onError_raw(A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$Task$succeed, $elm_explorations$benchmark$Benchmark$Status$Failure), $elm_explorations$benchmark$Benchmark$Status$MeasurementError), $elm$core$Task$map_raw((sampleSize) => $elm_explorations$benchmark$Benchmark$Status$Pending_raw(sampleSize, $elm_explorations$benchmark$Benchmark$Samples$empty), $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSizeWithMinimum_raw($elm_explorations$benchmark$Benchmark$LowLevel$findSampleSize_a0, operation)));
            case 2:
                var baseSampleSize = status.a;
                var samples = status.b;
                var sampleSize = baseSampleSize * (($elm_explorations$benchmark$Benchmark$Status$bucketSpacingRatio * _Basics_modBy_raw($elm_explorations$benchmark$Benchmark$Status$numBuckets, $elm_explorations$benchmark$Benchmark$Samples$count(samples))) + 1);
                return _Scheduler_onError_raw(A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$Task$succeed, $elm_explorations$benchmark$Benchmark$Status$Failure), $elm_explorations$benchmark$Benchmark$Status$MeasurementError), $elm$core$Task$map_raw(function (newSample) {
                    var newSamples = $elm_explorations$benchmark$Benchmark$Samples$record_raw(sampleSize, newSample, samples);
                    return (_Utils_cmp($elm_explorations$benchmark$Benchmark$Samples$count(newSamples), $elm_explorations$benchmark$Benchmark$Status$numBuckets * $elm_explorations$benchmark$Benchmark$Status$samplesPerBucket) > -1) ? $elm_explorations$benchmark$Benchmark$finalize(newSamples) : $elm_explorations$benchmark$Benchmark$Status$Pending_raw(baseSampleSize, newSamples);
                }, $elm_explorations$benchmark$Benchmark$LowLevel$sample_raw(sampleSize, operation)));
            default:
                return $elm$core$Task$succeed(status);
        }
    }, $elm_explorations$benchmark$Benchmark$stepLowLevel = F2($elm_explorations$benchmark$Benchmark$stepLowLevel_raw);
    var $elm_explorations$benchmark$Benchmark$step = function (benchmark_) {
        switch (benchmark_.$) {
            case 0:
                var name = benchmark_.a;
                var inner = benchmark_.b;
                var status = benchmark_.c;
                return $elm$core$Task$map_raw(A2($elm_explorations$benchmark$Benchmark$Benchmark$Single, name, inner), $elm_explorations$benchmark$Benchmark$stepLowLevel_raw(inner, status));
            case 1:
                var name = benchmark_.a;
                var benchmarks = benchmark_.b;
                return $elm$core$Task$map_raw($elm_explorations$benchmark$Benchmark$Benchmark$Series(name), $elm$core$Task$sequence($elm$core$List$map_raw(function (_v1) {
                    var name_ = _v1.a;
                    var inner = _v1.b;
                    var status = _v1.c;
                    return $elm$core$Task$map_raw((status_) => _Utils_Tuple3(name_, inner, status_), $elm_explorations$benchmark$Benchmark$stepLowLevel_raw(inner, status));
                }, benchmarks)));
            default:
                var name = benchmark_.a;
                var benchmarks = benchmark_.b;
                return $elm$core$Task$map_raw($elm_explorations$benchmark$Benchmark$Benchmark$Group(name), $elm$core$Task$sequence($elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$step, benchmarks)));
        }
    };
    var $author$project$Benchmark$Runner$Json$next = (benchmark) => $elm_explorations$benchmark$Benchmark$done(benchmark) ? $elm$core$Platform$Cmd$none : $elm$core$Task$perform_raw($elm$core$Basics$identity, $author$project$Benchmark$Runner$Json$breakForRender($elm_explorations$benchmark$Benchmark$step(benchmark)));
    var $author$project$Benchmark$Runner$Json$init_raw = (benchmark, _v0) => _Utils_Tuple2(benchmark, $author$project$Benchmark$Runner$Json$next(benchmark)), $author$project$Benchmark$Runner$Json$init = F2($author$project$Benchmark$Runner$Json$init_raw);
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
    var $elm$json$Json$Encode$float = _Json_wrap;
    var $BrianHicks$elm_trend$Trend$Linear$goodnessOfFit = function (_v0) {
        var fit = _v0.a;
        var values = _v0.b;
        var _v1 = $elm$core$List$unzip(values);
        var xs = _v1.a;
        var ys = _v1.b;
        var predictions = $elm$core$List$map_raw($BrianHicks$elm_trend$Trend$Linear$predictY(fit), xs);
        var meanY = $elm$core$Result$withDefault_raw(0, $BrianHicks$elm_trend$Trend$Math$mean(ys));
        var sumSquareResiduals = $elm$core$List$sum(_List_map2_raw(F2((actual, prediction) => A2($elm$core$Basics$pow, actual - prediction, 2)), ys, predictions));
        var sumSquareTotal = $elm$core$List$sum($elm$core$List$map_raw((y) => A2($elm$core$Basics$pow, y - meanY, 2), ys));
        return 1 - (sumSquareResiduals / sumSquareTotal);
    };
    var $elm$json$Json$Encode$int = _Json_wrap;
    var $elm$json$Json$Encode$object = (pairs) => _Json_wrap($elm$core$List$foldl_raw(F2(function (_v0, obj) {
        var k = _v0.a;
        var v = _v0.b;
        return _Json_addField_raw(k, v, obj);
    }), _Json_emptyObject(0), pairs));
    var $BrianHicks$elm_trend$Trend$Linear$predictX_raw = function (_v0, y) {
        var slope = _v0.bc;
        var intercept = _v0.a6;
        return (y - intercept) / slope;
    }, $BrianHicks$elm_trend$Trend$Linear$predictX = F2($BrianHicks$elm_trend$Trend$Linear$predictX_raw);
    var $author$project$Benchmark$Runner$Json$runsPerSecond_a0 = $BrianHicks$elm_trend$Trend$Linear$line, $author$project$Benchmark$Runner$Json$runsPerSecond_a1 = A2($elm$core$Basics$composeR, (a) => $BrianHicks$elm_trend$Trend$Linear$predictX_raw(a, 1000), $elm$core$Basics$floor), $author$project$Benchmark$Runner$Json$runsPerSecond = A2($elm$core$Basics$composeR, $author$project$Benchmark$Runner$Json$runsPerSecond_a0, $author$project$Benchmark$Runner$Json$runsPerSecond_a1);
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $author$project$Benchmark$Runner$Json$encodeStatus = function (status) {
        switch (status.$) {
            case 0:
                return $elm$json$Json$Encode$object({ $: 1, a: _Utils_Tuple2("status", $elm$json$Json$Encode$string("cold")), b: _List_Nil });
            case 1:
                return $elm$json$Json$Encode$object({ $: 1, a: _Utils_Tuple2("status", $elm$json$Json$Encode$string("unsized")), b: _List_Nil });
            case 2:
                var i = status.a;
                var samples = status.b;
                return $elm$json$Json$Encode$object({ $: 1, a: _Utils_Tuple2("status", $elm$json$Json$Encode$string("pending")), b: _List_Nil });
            case 3:
                var error = status.a;
                return $elm$json$Json$Encode$object({ $: 1, a: _Utils_Tuple2("status", $elm$json$Json$Encode$string("failure")), b: _List_Nil });
            default:
                var samples = status.a;
                var quickTrend = status.b;
                return $elm$json$Json$Encode$object({ $: 1, a: _Utils_Tuple2("status", $elm$json$Json$Encode$string("success")), b: { $: 1, a: _Utils_Tuple2("runsPerSecond", $elm$json$Json$Encode$int($elm$core$Basics$composeR_raw($author$project$Benchmark$Runner$Json$runsPerSecond_a0, $author$project$Benchmark$Runner$Json$runsPerSecond_a1, quickTrend))), b: { $: 1, a: _Utils_Tuple2("goodnessOfFit", $elm$json$Json$Encode$float($BrianHicks$elm_trend$Trend$Linear$goodnessOfFit(quickTrend))), b: _List_Nil } } });
        }
    };
    var $author$project$Benchmark$Runner$Json$encodeResultItem = function (_v0) {
        var name = _v0.a;
        var status = _v0.b;
        return $elm$json$Json$Encode$object({ $: 1, a: _Utils_Tuple2("name", $elm$json$Json$Encode$string(name)), b: { $: 1, a: _Utils_Tuple2("status", $author$project$Benchmark$Runner$Json$encodeStatus(status)), b: _List_Nil } });
    };
    var $elm$core$List$append_raw = function (xs, ys) {
        if (!ys.b) {
            return xs;
        }
        else {
            return $elm$core$List$foldr_raw($elm$core$List$cons, ys, xs);
        }
    }, $elm$core$List$append = F2($elm$core$List$append_raw);
    var $elm$core$List$concat = (lists) => $elm$core$List$foldr_raw($elm$core$List$append, _List_Nil, lists);
    var $elm$core$List$concatMap_raw = (f, list) => $elm$core$List$concat($elm$core$List$map_raw(f, list)), $elm$core$List$concatMap = F2($elm$core$List$concatMap_raw);
    var $author$project$Benchmark$Runner$Json$flattenReportGroup_raw = function (group, report) {
        switch (report.$) {
            case 0:
                var name = report.a;
                var status = report.b;
                return { $: 1, a: _Utils_Tuple2(name, status), b: _List_Nil };
            case 1:
                var name = report.a;
                var statuses = report.b;
                return $elm$core$List$map_raw(function (_v1) {
                    var tag = _v1.a;
                    var val = _v1.b;
                    return _Utils_Tuple2(group + (", " + (name + (", " + tag))), val);
                }, statuses);
            default:
                var name = report.a;
                var reports = report.b;
                return $elm$core$List$concatMap_raw($author$project$Benchmark$Runner$Json$flattenReportGroup(group + (", " + (name + ", "))), reports);
        }
    }, $author$project$Benchmark$Runner$Json$flattenReportGroup = F2($author$project$Benchmark$Runner$Json$flattenReportGroup_raw);
    var $author$project$Benchmark$Runner$Json$flattenReport = function (report) {
        switch (report.$) {
            case 0:
                var name = report.a;
                var status = report.b;
                return { $: 1, a: _Utils_Tuple2(name, status), b: _List_Nil };
            case 1:
                var name = report.a;
                var statuses = report.b;
                return $elm$core$List$map_raw(function (_v1) {
                    var tag = _v1.a;
                    var val = _v1.b;
                    return _Utils_Tuple2(name + (", " + tag), val);
                }, statuses);
            default:
                var name = report.a;
                var reports = report.b;
                return $elm$core$List$concatMap_raw($author$project$Benchmark$Runner$Json$flattenReportGroup(name), reports);
        }
    };
    var $elm$json$Json$Encode$list_raw = (func, entries) => _Json_wrap($elm$core$List$foldl_raw(_Json_addEntry(func), _Json_emptyArray(0), entries)), $elm$json$Json$Encode$list = F2($elm$json$Json$Encode$list_raw);
    var $author$project$Benchmark$Runner$Json$encodeReport = (report) => $elm$json$Json$Encode$list_raw($author$project$Benchmark$Runner$Json$encodeResultItem, $author$project$Benchmark$Runner$Json$flattenReport(report));
    var $elm_explorations$benchmark$Benchmark$Reporting$Group_raw = (a, b) => ({ $: 2, a: a, b: b }), $elm_explorations$benchmark$Benchmark$Reporting$Group = F2($elm_explorations$benchmark$Benchmark$Reporting$Group_raw);
    var $elm_explorations$benchmark$Benchmark$Reporting$Series_raw = (a, b) => ({ $: 1, a: a, b: b }), $elm_explorations$benchmark$Benchmark$Reporting$Series = F2($elm_explorations$benchmark$Benchmark$Reporting$Series_raw);
    var $elm_explorations$benchmark$Benchmark$Reporting$Single_raw = (a, b) => ({ $: 0, a: a, b: b }), $elm_explorations$benchmark$Benchmark$Reporting$Single = F2($elm_explorations$benchmark$Benchmark$Reporting$Single_raw);
    var $elm_explorations$benchmark$Benchmark$Reporting$fromBenchmark = function (internal) {
        switch (internal.$) {
            case 0:
                var name = internal.a;
                var status = internal.c;
                return $elm_explorations$benchmark$Benchmark$Reporting$Single_raw(name, status);
            case 1:
                var name = internal.a;
                var benchmarks = internal.b;
                return $elm_explorations$benchmark$Benchmark$Reporting$Series_raw(name, $elm$core$List$map_raw(function (_v1) {
                    var childName = _v1.a;
                    var status = _v1.c;
                    return _Utils_Tuple2(childName, status);
                }, benchmarks));
            default:
                var name = internal.a;
                var benchmarks = internal.b;
                return $elm_explorations$benchmark$Benchmark$Reporting$Group_raw(name, $elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$Reporting$fromBenchmark, benchmarks));
        }
    };
    var $author$project$Benchmark$Runner$Json$encode = (benchmark) => $author$project$Benchmark$Runner$Json$encodeReport($elm_explorations$benchmark$Benchmark$Reporting$fromBenchmark(benchmark));
    var $author$project$Benchmark$Runner$Json$update_raw = function (sendReport, msg, model) {
        var benchmark = msg;
        return $elm_explorations$benchmark$Benchmark$done(benchmark) ? _Utils_Tuple2(benchmark, sendReport($author$project$Benchmark$Runner$Json$encode(benchmark))) : _Utils_Tuple2(benchmark, $author$project$Benchmark$Runner$Json$next(benchmark));
    }, $author$project$Benchmark$Runner$Json$update = F3($author$project$Benchmark$Runner$Json$update_raw);
    var $elm$html$Html$div = _VirtualDom_nodeNS_raw(_VirtualDom_node_a0, "div");
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $author$project$Benchmark$Runner$Json$view = (model) => A2($elm$html$Html$div, _List_Nil, { $: 1, a: $elm$html$Html$text(_Json_encode_raw(4, $author$project$Benchmark$Runner$Json$encode(model))), b: _List_Nil });
    var $author$project$Benchmark$Runner$Json$program_raw = (sendReport, benchmark) => $elm$browser$Browser$element({
        cs: $author$project$Benchmark$Runner$Json$init(benchmark),
        cI: (_v0) => $elm$core$Platform$Sub$none,
        cL: $author$project$Benchmark$Runner$Json$update(sendReport),
        cN: $author$project$Benchmark$Runner$Json$view
    }), $author$project$Benchmark$Runner$Json$program = F2($author$project$Benchmark$Runner$Json$program_raw);
    var $author$project$Run$reportResults = _Platform_outgoingPort("reportResults", $elm$core$Basics$identity);
    var $elm_explorations$benchmark$Benchmark$describe = $elm_explorations$benchmark$Benchmark$Benchmark$Group;
    var $elm_explorations$benchmark$Benchmark$Status$Cold = { $: 0 };
    var $elm_explorations$benchmark$Benchmark$LowLevel$operation = (fn) => _Benchmark_operation(fn);
    var $elm_explorations$benchmark$Benchmark$benchmark_raw = (name, fn) => $elm_explorations$benchmark$Benchmark$Benchmark$Single_raw(name, $elm_explorations$benchmark$Benchmark$LowLevel$operation(fn), $elm_explorations$benchmark$Benchmark$Status$Cold), $elm_explorations$benchmark$Benchmark$benchmark = F2($elm_explorations$benchmark$Benchmark$benchmark_raw);
    var $author$project$Markdown$Block$BlockQuote = (a) => ({ $: 3, a: a });
    var $author$project$Markdown$RawBlock$Body = (a) => ({ $: 1, a: a });
    var $author$project$Markdown$Block$Cdata = (a) => ({ $: 4, a: a });
    var $author$project$Markdown$Block$CodeBlock = (a) => ({ $: 7, a: a });
    var $author$project$Markdown$RawBlock$CodeBlock = (a) => ({ $: 5, a: a });
    var $author$project$Markdown$Block$CodeSpan = (a) => ({ $: 5, a: a });
    var $author$project$Markdown$Block$CompletedTask = 2;
    var $elm$parser$Parser$Advanced$Done = (a) => ({ $: 1, a: a });
    var $author$project$Markdown$Block$Emphasis = (a) => ({ $: 3, a: a });
    var $author$project$Markdown$Parser$EmptyBlock = { $: 0 };
    var $elm$parser$Parser$Expecting = (a) => ({ $: 0, a: a });
    var $author$project$Markdown$Block$HardLineBreak = { $: 7 };
    var $author$project$Markdown$Block$Heading_raw = (a, b) => ({ $: 4, a: a, b: b }), $author$project$Markdown$Block$Heading = F2($author$project$Markdown$Block$Heading_raw);
    var $author$project$Markdown$RawBlock$Html = (a) => ({ $: 2, a: a });
    var $author$project$Markdown$Block$HtmlBlock = (a) => ({ $: 0, a: a });
    var $author$project$Markdown$Block$HtmlComment = (a) => ({ $: 1, a: a });
    var $author$project$Markdown$Block$HtmlDeclaration_raw = (a, b) => ({ $: 3, a: a, b: b }), $author$project$Markdown$Block$HtmlDeclaration = F2($author$project$Markdown$Block$HtmlDeclaration_raw);
    var $author$project$Markdown$Block$HtmlElement_raw = (a, b, c) => ({ $: 0, a: a, b: b, c: c }), $author$project$Markdown$Block$HtmlElement = F3($author$project$Markdown$Block$HtmlElement_raw);
    var $author$project$Markdown$Block$HtmlInline = (a) => ({ $: 0, a: a });
    var $author$project$Markdown$Block$Image_raw = (a, b, c) => ({ $: 2, a: a, b: b, c: c }), $author$project$Markdown$Block$Image = F3($author$project$Markdown$Block$Image_raw);
    var $author$project$Markdown$Block$IncompleteTask = 1;
    var $author$project$Markdown$Parser$InlineProblem = (a) => ({ $: 2, a: a });
    var $author$project$Markdown$Block$Link_raw = (a, b, c) => ({ $: 1, a: a, b: b, c: c }), $author$project$Markdown$Block$Link = F3($author$project$Markdown$Block$Link_raw);
    var $author$project$Markdown$Block$ListItem_raw = (a, b) => ({ $: 0, a: a, b: b }), $author$project$Markdown$Block$ListItem = F2($author$project$Markdown$Block$ListItem_raw);
    var $elm$parser$Parser$Advanced$Loop = (a) => ({ $: 0, a: a });
    var $author$project$Markdown$Block$NoTask = 0;
    var $author$project$Markdown$Block$OrderedList_raw = (a, b) => ({ $: 2, a: a, b: b }), $author$project$Markdown$Block$OrderedList = F2($author$project$Markdown$Block$OrderedList_raw);
    var $author$project$Markdown$Block$Paragraph = (a) => ({ $: 5, a: a });
    var $author$project$Markdown$Parser$ParsedBlock = (a) => ({ $: 1, a: a });
    var $elm$parser$Parser$Problem = (a) => ({ $: 12, a: a });
    var $author$project$Markdown$Block$ProcessingInstruction = (a) => ({ $: 2, a: a });
    var $author$project$Markdown$Block$Strong = (a) => ({ $: 4, a: a });
    var $author$project$Markdown$Block$Table_raw = (a, b) => ({ $: 6, a: a, b: b }), $author$project$Markdown$Block$Table = F2($author$project$Markdown$Block$Table_raw);
    var $author$project$Markdown$Block$Text = (a) => ({ $: 6, a: a });
    var $author$project$Markdown$Block$ThematicBreak = { $: 8 };
    var $author$project$Markdown$RawBlock$ThematicBreak = { $: 7 };
    var $author$project$Markdown$Block$UnorderedList = (a) => ({ $: 1, a: a });
    var $author$project$Markdown$RawBlock$UnparsedInlines = $elm$core$Basics$identity;
    var $author$project$Markdown$Parser$addReference_raw = (state, linkRef) => ({
        af: _List_Cons(linkRef, state.af),
        T: state.T
    }), $author$project$Markdown$Parser$addReference = F2($author$project$Markdown$Parser$addReference_raw);
    var $elm$parser$Parser$Advanced$Bad_raw = (a, b) => ({ $: 1, a: a, b: b }), $elm$parser$Parser$Advanced$Bad = F2($elm$parser$Parser$Advanced$Bad_raw);
    var $elm$parser$Parser$Advanced$Good_raw = (a, b, c) => ({ $: 0, a: a, b: b, c: c }), $elm$parser$Parser$Advanced$Good = F3($elm$parser$Parser$Advanced$Good_raw);
    var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
    var $elm$parser$Parser$Advanced$andThen_raw = function (callback, _v0) {
        var parseA = _v0;
        return function (s0) {
            var _v1 = parseA(s0);
            if (_v1.$ === 1) {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_raw(p, x);
            }
            else {
                var p1 = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                var _v2 = callback(a);
                var parseB = _v2;
                var _v3 = parseB(s1);
                if (_v3.$ === 1) {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return $elm$parser$Parser$Advanced$Bad_raw(p1 || p2, x);
                }
                else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return $elm$parser$Parser$Advanced$Good_raw(p1 || p2, b, s2);
                }
            }
        };
    }, $elm$parser$Parser$Advanced$andThen = F2($elm$parser$Parser$Advanced$andThen_raw);
    var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 1) {
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_raw(false, x);
            }
            else {
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_raw(false, a, s1);
            }
        };
    };
    var $author$project$Markdown$RawBlock$BlankLine = { $: 9 };
    var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
    var $elm$core$Basics$negate = (n) => -n;
    var $elm$parser$Parser$Advanced$chompWhileHelp_raw = function (isGood, offset, row, col, s0) {
        chompWhileHelp: while (true) {
            var newOffset = _Parser_isSubChar_raw(isGood, offset, s0.b);
            if (_Utils_eq(newOffset, -1)) {
                return $elm$parser$Parser$Advanced$Good_raw(_Utils_cmp(s0.h, offset) < 0, 0, { bl: col, l: s0.l, p: s0.p, h: offset, cE: row, b: s0.b });
            }
            else {
                if (_Utils_eq(newOffset, -2)) {
                    var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$s0 = s0;
                    isGood = $temp$isGood;
                    offset = $temp$offset;
                    row = $temp$row;
                    col = $temp$col;
                    s0 = $temp$s0;
                    continue chompWhileHelp;
                }
                else {
                    var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$s0 = s0;
                    isGood = $temp$isGood;
                    offset = $temp$offset;
                    row = $temp$row;
                    col = $temp$col;
                    s0 = $temp$s0;
                    continue chompWhileHelp;
                }
            }
        }
    }, $elm$parser$Parser$Advanced$chompWhileHelp = F5($elm$parser$Parser$Advanced$chompWhileHelp_raw);
    var $elm$parser$Parser$Advanced$chompWhile = (isGood) => (s) => $elm$parser$Parser$Advanced$chompWhileHelp_raw(isGood, s.h, s.cE, s.bl, s);
    var $elm$core$Basics$always_raw = (a, _v0) => a, $elm$core$Basics$always = F2($elm$core$Basics$always_raw);
    var $elm$parser$Parser$Advanced$map2_raw = function (func, _v0, _v1) {
        var parseA = _v0;
        var parseB = _v1;
        return function (s0) {
            var _v2 = parseA(s0);
            if (_v2.$ === 1) {
                var p = _v2.a;
                var x = _v2.b;
                return $elm$parser$Parser$Advanced$Bad_raw(p, x);
            }
            else {
                var p1 = _v2.a;
                var a = _v2.b;
                var s1 = _v2.c;
                var _v3 = parseB(s1);
                if (_v3.$ === 1) {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return $elm$parser$Parser$Advanced$Bad_raw(p1 || p2, x);
                }
                else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return $elm$parser$Parser$Advanced$Good_raw(p1 || p2, A2(func, a, b), s2);
                }
            }
        };
    }, $elm$parser$Parser$Advanced$map2 = F3($elm$parser$Parser$Advanced$map2_raw);
    var $elm$parser$Parser$Advanced$ignorer_raw = (keepParser, ignoreParser) => $elm$parser$Parser$Advanced$map2_raw($elm$core$Basics$always, keepParser, ignoreParser), $elm$parser$Parser$Advanced$ignorer = F2($elm$parser$Parser$Advanced$ignorer_raw);
    var $author$project$Helpers$isSpaceOrTab = function (c) {
        switch (c) {
            case " ":
                return true;
            case "\t":
                return true;
            default:
                return false;
        }
    };
    var $elm$parser$Parser$Advanced$map_raw = function (func, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (!_v1.$) {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_raw(p, func(a), s1);
            }
            else {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_raw(p, x);
            }
        };
    }, $elm$parser$Parser$Advanced$map = F2($elm$parser$Parser$Advanced$map_raw);
    var $elm$parser$Parser$Advanced$Token_raw = (a, b) => ({ $: 0, a: a, b: b }), $elm$parser$Parser$Advanced$Token = F2($elm$parser$Parser$Advanced$Token_raw);
    var $author$project$Parser$Token$newline = $elm$parser$Parser$Advanced$Token_raw("\n", $elm$parser$Parser$Expecting("a newline"));
    var $elm$parser$Parser$Advanced$AddRight_raw = (a, b) => ({ $: 1, a: a, b: b }), $elm$parser$Parser$Advanced$AddRight = F2($elm$parser$Parser$Advanced$AddRight_raw);
    var $elm$parser$Parser$Advanced$DeadEnd_raw = (row, col, problem, contextStack) => ({ bl: col, cc: contextStack, cC: problem, cE: row }), $elm$parser$Parser$Advanced$DeadEnd = F4($elm$parser$Parser$Advanced$DeadEnd_raw);
    var $elm$parser$Parser$Advanced$Empty = { $: 0 };
    var $elm$parser$Parser$Advanced$fromState_raw = (s, x) => $elm$parser$Parser$Advanced$AddRight_raw($elm$parser$Parser$Advanced$Empty, $elm$parser$Parser$Advanced$DeadEnd_raw(s.cE, s.bl, x, s.l)), $elm$parser$Parser$Advanced$fromState = F2($elm$parser$Parser$Advanced$fromState_raw);
    var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
    var $elm$parser$Parser$Advanced$token = function (_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(str);
        return function (s) {
            var _v1 = _Parser_isSubString_raw(str, s.h, s.cE, s.bl, s.b);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return _Utils_eq(newOffset, -1) ? $elm$parser$Parser$Advanced$Bad_raw(false, $elm$parser$Parser$Advanced$fromState_raw(s, expecting)) : $elm$parser$Parser$Advanced$Good_raw(progress, 0, { bl: newCol, l: s.l, p: s.p, h: newOffset, cE: newRow, b: s.b });
        };
    };
    var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
    var $author$project$Markdown$Parser$blankLine = $elm$parser$Parser$Advanced$map_raw((_v0) => $author$project$Markdown$RawBlock$BlankLine, $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$chompWhile($author$project$Helpers$isSpaceOrTab)), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$newline)));
    var $author$project$Markdown$RawBlock$BlockQuote = (a) => ({ $: 10, a: a });
    var $elm$parser$Parser$Advanced$Append_raw = (a, b) => ({ $: 2, a: a, b: b }), $elm$parser$Parser$Advanced$Append = F2($elm$parser$Parser$Advanced$Append_raw);
    var $elm$parser$Parser$Advanced$oneOfHelp_raw = function (s0, bag, parsers) {
        oneOfHelp: while (true) {
            if (!parsers.b) {
                return $elm$parser$Parser$Advanced$Bad_raw(false, bag);
            }
            else {
                var parse = parsers.a;
                var remainingParsers = parsers.b;
                var _v1 = parse(s0);
                if (!_v1.$) {
                    var step = _v1;
                    return step;
                }
                else {
                    var step = _v1;
                    var p = step.a;
                    var x = step.b;
                    if (p) {
                        return step;
                    }
                    else {
                        var $temp$s0 = s0, $temp$bag = $elm$parser$Parser$Advanced$Append_raw(bag, x), $temp$parsers = remainingParsers;
                        s0 = $temp$s0;
                        bag = $temp$bag;
                        parsers = $temp$parsers;
                        continue oneOfHelp;
                    }
                }
            }
        }
    }, $elm$parser$Parser$Advanced$oneOfHelp = F3($elm$parser$Parser$Advanced$oneOfHelp_raw);
    var $elm$parser$Parser$Advanced$oneOf = (parsers) => (s) => $elm$parser$Parser$Advanced$oneOfHelp_raw(s, $elm$parser$Parser$Advanced$Empty, parsers);
    var $author$project$Parser$Token$space = $elm$parser$Parser$Advanced$Token_raw(" ", $elm$parser$Parser$Expecting("a space"));
    var $author$project$Markdown$Parser$blockQuoteStarts = { $: 1, a: $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw(">", $elm$parser$Parser$Expecting(">"))), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$space)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw(">", $elm$parser$Parser$Expecting(" >"))),
                $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw(" >", $elm$parser$Parser$Expecting("  >"))),
                $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("  >", $elm$parser$Parser$Expecting("   >")))
            ]))), b: _List_Nil } };
    var $elm$parser$Parser$Advanced$chompUntilEndOr = (str) => function (s) {
        var _v0 = _Parser_findSubString_raw(str, s.h, s.cE, s.bl, s.b);
        var newOffset = _v0.a;
        var newRow = _v0.b;
        var newCol = _v0.c;
        var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.b) : newOffset;
        return $elm$parser$Parser$Advanced$Good_raw(_Utils_cmp(s.h, adjustedOffset) < 0, 0, { bl: newCol, l: s.l, p: s.p, h: adjustedOffset, cE: newRow, b: s.b });
    };
    var $elm$parser$Parser$Advanced$end = (x) => (s) => _Utils_eq($elm$core$String$length(s.b), s.h) ? $elm$parser$Parser$Advanced$Good_raw(false, 0, s) : $elm$parser$Parser$Advanced$Bad_raw(false, $elm$parser$Parser$Advanced$fromState_raw(s, x));
    var $author$project$Helpers$endOfFile = $elm$parser$Parser$Advanced$end($elm$parser$Parser$Expecting("end of input"));
    var $author$project$Helpers$endOfLineOrFile = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$newline), b: { $: 1, a: $author$project$Helpers$endOfFile, b: _List_Nil } });
    var $elm$parser$Parser$Advanced$mapChompedString_raw = function (func, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 1) {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_raw(p, x);
            }
            else {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_raw(p, A2(func, _String_slice_raw(s0.h, s1.h, s0.b), a), s1);
            }
        };
    }, $elm$parser$Parser$Advanced$mapChompedString = F2($elm$parser$Parser$Advanced$mapChompedString_raw);
    var $elm$parser$Parser$Advanced$getChompedString = (parser) => $elm$parser$Parser$Advanced$mapChompedString_raw($elm$core$Basics$always, parser);
    var $elm$parser$Parser$Advanced$keeper_raw = (parseFunc, parseArg) => $elm$parser$Parser$Advanced$map2_raw($elm$core$Basics$apL, parseFunc, parseArg), $elm$parser$Parser$Advanced$keeper = F2($elm$parser$Parser$Advanced$keeper_raw);
    var $elm$parser$Parser$Advanced$succeed = (a) => (s) => $elm$parser$Parser$Advanced$Good_raw(false, a, s);
    var $author$project$Markdown$Parser$blockQuote = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$BlockQuote), $elm$parser$Parser$Advanced$oneOf($author$project$Markdown$Parser$blockQuoteStarts)), $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$space), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed(0), b: _List_Nil } })), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("\n")), $author$project$Helpers$endOfLineOrFile));
    var $author$project$Markdown$Parser$problemToString = function (problem) {
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
    var $author$project$Markdown$Parser$deadEndToString = (deadEnd) => "Problem at row " + ($elm$core$String$fromInt(deadEnd.cE) + ("\n" + $author$project$Markdown$Parser$problemToString(deadEnd.cC)));
    var $author$project$Markdown$Parser$deadEndsToString = (deadEnds) => $elm$core$String$join_raw("\n", $elm$core$List$map_raw($author$project$Markdown$Parser$deadEndToString, deadEnds));
    var $elm$core$Dict$fromList = (assocs) => $elm$core$List$foldl_raw(F2(function (_v0, dict) {
        var key = _v0.a;
        var value = _v0.b;
        return $elm$core$Dict$insert_raw(key, value, dict);
    }), $elm$core$Dict$empty, assocs);
    var $author$project$Markdown$RawBlock$Heading_raw = (a, b) => ({ $: 0, a: a, b: b }), $author$project$Markdown$RawBlock$Heading = F2($author$project$Markdown$RawBlock$Heading_raw);
    var $elm$core$String$dropRight_raw = (n, string) => (n < 1) ? string : _String_slice_raw(0, -n, string), $elm$core$String$dropRight = F2($elm$core$String$dropRight_raw);
    var $elm$core$String$endsWith = _String_endsWith;
    var $elm$core$String$trimRight = _String_trimRight;
    var $author$project$Markdown$Parser$dropTrailingHashes = (headingString) => _String_endsWith_raw("#", headingString) ? $author$project$Markdown$Parser$dropTrailingHashes($elm$core$String$trimRight($elm$core$String$dropRight_raw(1, headingString))) : headingString;
    var $author$project$Parser$Token$hash = $elm$parser$Parser$Advanced$Token_raw("#", $elm$parser$Parser$Expecting("a `#`"));
    var $author$project$Markdown$Parser$isHash = function (c) {
        if ("#" === c) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$parser$Parser$Advanced$problem = (x) => (s) => $elm$parser$Parser$Advanced$Bad_raw(false, $elm$parser$Parser$Advanced$fromState_raw(s, x));
    var $elm$core$String$trimLeft = _String_trimLeft;
    var $author$project$Markdown$Parser$heading = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$Heading), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$hash)), $elm$parser$Parser$Advanced$andThen_raw(function (additionalHashes) {
        var level = $elm$core$String$length(additionalHashes) + 1;
        return (level >= 7) ? $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Expecting("heading with < 7 #'s")) : $elm$parser$Parser$Advanced$succeed(level);
    }, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompWhile($author$project$Markdown$Parser$isHash)))), $elm$parser$Parser$Advanced$mapChompedString_raw(F2((headingText, _v0) => $author$project$Markdown$Parser$dropTrailingHashes($elm$core$String$trimLeft(headingText))), $elm$parser$Parser$Advanced$chompUntilEndOr("\n")));
    var $author$project$HtmlParser$Cdata = (a) => ({ $: 3, a: a });
    var $author$project$HtmlParser$Element_raw = (a, b, c) => ({ $: 0, a: a, b: b, c: c }), $author$project$HtmlParser$Element = F3($author$project$HtmlParser$Element_raw);
    var $author$project$HtmlParser$Text = (a) => ({ $: 1, a: a });
    var $elm$parser$Parser$Advanced$chompIf_raw = (isGood, expecting) => function (s) {
        var newOffset = _Parser_isSubChar_raw(isGood, s.h, s.b);
        return _Utils_eq(newOffset, -1) ? $elm$parser$Parser$Advanced$Bad_raw(false, $elm$parser$Parser$Advanced$fromState_raw(s, expecting)) : (_Utils_eq(newOffset, -2) ? $elm$parser$Parser$Advanced$Good_raw(true, 0, { bl: 1, l: s.l, p: s.p, h: s.h + 1, cE: s.cE + 1, b: s.b }) : $elm$parser$Parser$Advanced$Good_raw(true, 0, { bl: s.bl + 1, l: s.l, p: s.p, h: newOffset, cE: s.cE, b: s.b }));
    }, $elm$parser$Parser$Advanced$chompIf = F2($elm$parser$Parser$Advanced$chompIf_raw);
    var $author$project$HtmlParser$expectTagNameCharacter = $elm$parser$Parser$Expecting("at least 1 tag name character");
    var $author$project$HtmlParser$tagNameCharacter = function (c) {
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
    var $elm$core$String$toLower = _String_toLower;
    var $author$project$HtmlParser$tagName = $elm$parser$Parser$Advanced$mapChompedString_raw(F2((name, _v0) => $elm$core$String$toLower(name)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompIf_raw($author$project$HtmlParser$tagNameCharacter, $author$project$HtmlParser$expectTagNameCharacter), $elm$parser$Parser$Advanced$chompWhile($author$project$HtmlParser$tagNameCharacter)));
    var $author$project$HtmlParser$attributeName = $author$project$HtmlParser$tagName;
    var $elm$parser$Parser$ExpectingSymbol = (a) => ({ $: 8, a: a });
    var $author$project$HtmlParser$symbol = (str) => $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw(str, $elm$parser$Parser$ExpectingSymbol(str)));
    var $elm$parser$Parser$Advanced$loopHelp_raw = function (p, state, callback, s0) {
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
                    var $temp$p = p || p1, $temp$state = newState, $temp$callback = callback, $temp$s0 = s1;
                    p = $temp$p;
                    state = $temp$state;
                    callback = $temp$callback;
                    s0 = $temp$s0;
                    continue loopHelp;
                }
                else {
                    var result = step.a;
                    return $elm$parser$Parser$Advanced$Good_raw(p || p1, result, s1);
                }
            }
            else {
                var p1 = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_raw(p || p1, x);
            }
        }
    }, $elm$parser$Parser$Advanced$loopHelp = F4($elm$parser$Parser$Advanced$loopHelp_raw);
    var $elm$parser$Parser$Advanced$loop_raw = (state, callback) => (s) => $elm$parser$Parser$Advanced$loopHelp_raw(false, state, callback, s), $elm$parser$Parser$Advanced$loop = F2($elm$parser$Parser$Advanced$loop_raw);
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $author$project$HtmlParser$entities = $elm$core$Dict$fromList({ $: 1, a: _Utils_Tuple2("amp", "&"), b: { $: 1, a: _Utils_Tuple2("lt", "<"), b: { $: 1, a: _Utils_Tuple2("gt", ">"), b: { $: 1, a: _Utils_Tuple2("apos", "'"), b: { $: 1, a: _Utils_Tuple2("quot", "\""), b: _List_Nil } } } } });
    var $elm$core$Char$fromCode = _Char_fromCode;
    var $elm$core$String$cons = _String_cons;
    var $elm$core$String$fromChar = (_char) => _String_cons_raw(_char, "");
    var $rtfeldman$elm_hex$Hex$fromStringHelp_raw = function (position, chars, accumulated) {
        fromStringHelp: while (true) {
            if (!chars.b) {
                return $elm$core$Result$Ok(accumulated);
            }
            else {
                var _char = chars.a;
                var rest = chars.b;
                switch (_char) {
                    case "0":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated;
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "1":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "2":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "3":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "4":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "5":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "6":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "7":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "8":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "9":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "a":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "b":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "c":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "d":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "e":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "f":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    default:
                        var nonHex = _char;
                        return $elm$core$Result$Err($elm$core$String$fromChar(nonHex) + " is not a valid hexadecimal character.");
                }
            }
        }
    }, $rtfeldman$elm_hex$Hex$fromStringHelp = F3($rtfeldman$elm_hex$Hex$fromStringHelp_raw);
    var $elm$core$Result$mapError_raw = function (f, result) {
        if (!result.$) {
            var v = result.a;
            return $elm$core$Result$Ok(v);
        }
        else {
            var e = result.a;
            return $elm$core$Result$Err(f(e));
        }
    }, $elm$core$Result$mapError = F2($elm$core$Result$mapError_raw);
    var $elm$core$List$tail = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(xs);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$String$foldr = _String_foldr;
    var $elm$core$String$toList = (string) => _String_foldr_raw($elm$core$List$cons, _List_Nil, string);
    var $rtfeldman$elm_hex$Hex$fromString = function (str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Result$Err("Empty strings are not valid hexadecimal strings.");
        }
        else {
            var result = function () {
                if (_String_startsWith_raw("-", str)) {
                    var list = $elm$core$Maybe$withDefault_raw(_List_Nil, $elm$core$List$tail($elm$core$String$toList(str)));
                    return $elm$core$Result$map_raw($elm$core$Basics$negate, $rtfeldman$elm_hex$Hex$fromStringHelp_raw($elm$core$List$length(list) - 1, list, 0));
                }
                else {
                    return $rtfeldman$elm_hex$Hex$fromStringHelp_raw($elm$core$String$length(str) - 1, $elm$core$String$toList(str), 0);
                }
            }();
            var formatError = (err) => $elm$core$String$join_raw(" ", { $: 1, a: "\"" + (str + "\""), b: { $: 1, a: "is not a valid hexadecimal string because", b: { $: 1, a: err, b: _List_Nil } } });
            return $elm$core$Result$mapError_raw(formatError, result);
        }
    };
    var $author$project$HtmlParser$decodeEscape = (s) => _String_startsWith_raw("#x", s) ? $elm$core$Result$mapError_raw($elm$parser$Parser$Problem, $elm$core$Result$map_raw($elm$core$Char$fromCode, $rtfeldman$elm_hex$Hex$fromString($elm$core$String$dropLeft_raw(2, s)))) : (_String_startsWith_raw("#", s) ? $elm$core$Result$fromMaybe_raw($elm$parser$Parser$Problem("Invalid escaped character: " + s), $elm$core$Maybe$map_raw($elm$core$Char$fromCode, $elm$core$String$toInt($elm$core$String$dropLeft_raw(1, s)))) : $elm$core$Result$fromMaybe_raw($elm$parser$Parser$Problem("No entity named \"&" + (s + ";\" found.")), $elm$core$Dict$get_raw(s, $author$project$HtmlParser$entities)));
    var $author$project$HtmlParser$escapedChar = function (end_) {
        var process = function (entityStr) {
            var _v0 = $author$project$HtmlParser$decodeEscape(entityStr);
            if (!_v0.$) {
                var c = _v0.a;
                return $elm$parser$Parser$Advanced$succeed(c);
            }
            else {
                var e = _v0.a;
                return $elm$parser$Parser$Advanced$problem(e);
            }
        };
        var isEntityChar = (c) => (!_Utils_eq(c, end_)) && (c !== ";");
        return $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$HtmlParser$symbol("&")), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$andThen_raw(process, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompIf_raw(isEntityChar, $elm$parser$Parser$Expecting("an entity character")), $elm$parser$Parser$Advanced$chompWhile(isEntityChar)))), $author$project$HtmlParser$symbol(";")));
    };
    var $author$project$HtmlParser$textStringStep_raw = (closingChar, predicate, accum) => $elm$parser$Parser$Advanced$andThen_raw((soFar) => $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$map_raw((escaped) => $elm$parser$Parser$Advanced$Loop(_Utils_ap(accum, _Utils_ap(soFar, $elm$core$String$fromChar(escaped)))), $author$project$HtmlParser$escapedChar(closingChar)), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(_Utils_ap(accum, soFar))), b: _List_Nil } }), $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompWhile(predicate))), $author$project$HtmlParser$textStringStep = F3($author$project$HtmlParser$textStringStep_raw);
    var $author$project$HtmlParser$textString = function (closingChar) {
        var predicate = (c) => (!_Utils_eq(c, closingChar)) && (c !== "&");
        return $elm$parser$Parser$Advanced$loop_raw("", A2($author$project$HtmlParser$textStringStep, closingChar, predicate));
    };
    var $author$project$HtmlParser$attributeValue = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$HtmlParser$symbol("\"")), $elm$parser$Parser$Advanced$ignorer_raw($author$project$HtmlParser$textString("\""), $author$project$HtmlParser$symbol("\""))), b: { $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$HtmlParser$symbol("'")), $elm$parser$Parser$Advanced$ignorer_raw($author$project$HtmlParser$textString("'"), $author$project$HtmlParser$symbol("'"))), b: _List_Nil } });
    var $author$project$HtmlParser$keepOldest_raw = function (_new, mValue) {
        if (!mValue.$) {
            var v = mValue.a;
            return $elm$core$Maybe$Just(v);
        }
        else {
            return $elm$core$Maybe$Just(_new);
        }
    }, $author$project$HtmlParser$keepOldest = F2($author$project$HtmlParser$keepOldest_raw);
    var $author$project$HtmlParser$isWhitespace = function (c) {
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
    var $author$project$HtmlParser$whiteSpace = $elm$parser$Parser$Advanced$chompWhile($author$project$HtmlParser$isWhitespace);
    var $author$project$HtmlParser$attributesStep = function (attrs) {
        var process_raw = (name, value) => $elm$parser$Parser$Advanced$Loop($elm$core$Dict$update_raw($elm$core$String$toLower(name), $author$project$HtmlParser$keepOldest(value), attrs)), process = F2(process_raw);
        return $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$succeed(process), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($author$project$HtmlParser$attributeName, $author$project$HtmlParser$whiteSpace), $author$project$HtmlParser$symbol("=")), $author$project$HtmlParser$whiteSpace)), $elm$parser$Parser$Advanced$ignorer_raw($author$project$HtmlParser$attributeValue, $author$project$HtmlParser$whiteSpace)), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(attrs)), b: _List_Nil } });
    };
    var $author$project$HtmlParser$attributes = $elm$parser$Parser$Advanced$map_raw(A2($elm$core$Dict$foldl, F3((key, value, accum) => _List_Cons({ a8: key, bg: value }, accum)), _List_Nil), $elm$parser$Parser$Advanced$loop_raw($elm$core$Dict$empty, $author$project$HtmlParser$attributesStep));
    var $author$project$HtmlParser$cdata = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$HtmlParser$symbol("<![CDATA[")), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("]]>")), $author$project$HtmlParser$symbol("]]>")));
    var $author$project$HtmlParser$childrenStep_raw = (options, accum) => $elm$parser$Parser$Advanced$map_raw((f) => f(accum), $elm$parser$Parser$Advanced$oneOf(options)), $author$project$HtmlParser$childrenStep = F2($author$project$HtmlParser$childrenStep_raw);
    var $author$project$HtmlParser$fail = (str) => $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem(str));
    var $author$project$HtmlParser$closingTag = function (startTagName) {
        var closingTagName = $elm$parser$Parser$Advanced$andThen_raw((endTagName) => _Utils_eq(startTagName, endTagName) ? $elm$parser$Parser$Advanced$succeed(0) : $author$project$HtmlParser$fail("tag name mismatch: " + (startTagName + (" and " + endTagName))), $author$project$HtmlParser$tagName);
        return $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($author$project$HtmlParser$symbol("</"), $author$project$HtmlParser$whiteSpace), closingTagName), $author$project$HtmlParser$whiteSpace), $author$project$HtmlParser$symbol(">"));
    };
    var $author$project$HtmlParser$Comment = (a) => ({ $: 2, a: a });
    var $author$project$HtmlParser$toToken = (str) => $elm$parser$Parser$Advanced$Token_raw(str, $elm$parser$Parser$Expecting(str));
    var $author$project$HtmlParser$comment = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$HtmlParser$Comment), $elm$parser$Parser$Advanced$token($author$project$HtmlParser$toToken("<!--"))), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("-->")), $elm$parser$Parser$Advanced$token($author$project$HtmlParser$toToken("-->"))));
    var $author$project$HtmlParser$Declaration_raw = (a, b) => ({ $: 5, a: a, b: b }), $author$project$HtmlParser$Declaration = F2($author$project$HtmlParser$Declaration_raw);
    var $author$project$HtmlParser$expectUppercaseCharacter = $elm$parser$Parser$Expecting("at least 1 uppercase character");
    var $author$project$HtmlParser$allUppercase = $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompIf_raw($elm$core$Char$isUpper, $author$project$HtmlParser$expectUppercaseCharacter), $elm$parser$Parser$Advanced$chompWhile($elm$core$Char$isUpper)));
    var $author$project$HtmlParser$oneOrMoreWhiteSpace = $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompIf_raw($author$project$HtmlParser$isWhitespace, $elm$parser$Parser$Expecting("at least one whitespace")), $elm$parser$Parser$Advanced$chompWhile($author$project$HtmlParser$isWhitespace));
    var $author$project$HtmlParser$docType = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$HtmlParser$Declaration), $author$project$HtmlParser$symbol("<!")), $elm$parser$Parser$Advanced$ignorer_raw($author$project$HtmlParser$allUppercase, $author$project$HtmlParser$oneOrMoreWhiteSpace)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr(">")), $author$project$HtmlParser$symbol(">")));
    var $author$project$HtmlParser$ProcessingInstruction = (a) => ({ $: 4, a: a });
    var $author$project$HtmlParser$processingInstruction = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$HtmlParser$ProcessingInstruction), $author$project$HtmlParser$symbol("<?")), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("?>")), $author$project$HtmlParser$symbol("?>")));
    var $author$project$HtmlParser$isNotTextNodeIgnoreChar = function (c) {
        switch (c) {
            case "<":
                return false;
            case "&":
                return false;
            default:
                return true;
        }
    };
    var $author$project$HtmlParser$textNodeStringStepOptions = { $: 1, a: $elm$parser$Parser$Advanced$map_raw((_v0) => $elm$parser$Parser$Advanced$Loop(0), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompIf_raw($author$project$HtmlParser$isNotTextNodeIgnoreChar, $elm$parser$Parser$Expecting("is not & or <")), $elm$parser$Parser$Advanced$chompWhile($author$project$HtmlParser$isNotTextNodeIgnoreChar))), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw((_v1) => $elm$parser$Parser$Advanced$Loop(0), $author$project$HtmlParser$escapedChar("<")), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(0)), b: _List_Nil } } };
    var $author$project$HtmlParser$textNodeStringStep = (_v0) => $elm$parser$Parser$Advanced$oneOf($author$project$HtmlParser$textNodeStringStepOptions);
    var $author$project$HtmlParser$textNodeString = $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$loop_raw(0, $author$project$HtmlParser$textNodeStringStep));
    var $author$project$HtmlParser$children = (startTagName) => $elm$parser$Parser$Advanced$loop_raw(_List_Nil, $author$project$HtmlParser$childrenStep($author$project$HtmlParser$childrenStepOptions(startTagName)));
    var $author$project$HtmlParser$childrenStepOptions = (startTagName) => ({ $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((_v1, accum) => $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(accum))), $author$project$HtmlParser$closingTag(startTagName)), b: { $: 1, a: $elm$parser$Parser$Advanced$andThen_raw((text) => $elm$core$String$isEmpty(text) ? $elm$parser$Parser$Advanced$map_raw(F2((_v2, accum) => $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(accum))), $author$project$HtmlParser$closingTag(startTagName)) : $elm$parser$Parser$Advanced$succeed((accum) => $elm$parser$Parser$Advanced$Loop(_List_Cons($author$project$HtmlParser$Text(text), accum))), $author$project$HtmlParser$textNodeString), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((_new, accum) => $elm$parser$Parser$Advanced$Loop(_List_Cons(_new, accum))), $author$project$HtmlParser$cyclic$html()), b: _List_Nil } } });
    var $author$project$HtmlParser$elementContinuation = (startTagName) => $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$HtmlParser$Element(startTagName)), $author$project$HtmlParser$whiteSpace), $elm$parser$Parser$Advanced$ignorer_raw($author$project$HtmlParser$attributes, $author$project$HtmlParser$whiteSpace)), $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$map_raw((_v0) => _List_Nil, $author$project$HtmlParser$symbol("/>")), b: { $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$HtmlParser$symbol(">")), $author$project$HtmlParser$children(startTagName)), b: _List_Nil } }));
    const $author$project$HtmlParser$cyclic$html = () => $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$map_raw($author$project$HtmlParser$Cdata, $author$project$HtmlParser$cdata), b: { $: 1, a: $author$project$HtmlParser$processingInstruction, b: { $: 1, a: $author$project$HtmlParser$comment, b: { $: 1, a: $author$project$HtmlParser$docType, b: { $: 1, a: $author$project$HtmlParser$cyclic$element(), b: _List_Nil } } } } });
    const $author$project$HtmlParser$cyclic$element = () => $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$HtmlParser$symbol("<")), $elm$parser$Parser$Advanced$andThen_raw($author$project$HtmlParser$elementContinuation, $author$project$HtmlParser$tagName));
    var $author$project$HtmlParser$html = $author$project$HtmlParser$cyclic$html();
    $author$project$HtmlParser$cyclic$html = () => $author$project$HtmlParser$html;
    var $author$project$HtmlParser$element = $author$project$HtmlParser$cyclic$element();
    $author$project$HtmlParser$cyclic$element = () => $author$project$HtmlParser$element;
    var $author$project$Markdown$RawBlock$IndentedCodeBlock = (a) => ({ $: 6, a: a });
    var $author$project$Parser$Token$tab = $elm$parser$Parser$Advanced$Token_raw("\t", $elm$parser$Parser$Expecting("a tab"));
    var $author$project$Markdown$Parser$exactlyFourSpaces = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$tab), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$space)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("   ", $elm$parser$Parser$ExpectingSymbol("Indentation"))),
                $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw(" \t", $elm$parser$Parser$ExpectingSymbol("Indentation"))),
                $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("  \t", $elm$parser$Parser$ExpectingSymbol("Indentation")))
            ]))), b: _List_Nil } });
    var $author$project$Markdown$Parser$indentedCodeBlock = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$IndentedCodeBlock), $author$project$Markdown$Parser$exactlyFourSpaces), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("\n")), $author$project$Helpers$endOfLineOrFile));
    var $author$project$Markdown$RawBlock$OrderedListBlock_raw = (a, b) => ({ $: 4, a: a, b: b }), $author$project$Markdown$RawBlock$OrderedListBlock = F2($author$project$Markdown$RawBlock$OrderedListBlock_raw);
    var $author$project$Parser$Token$closingParen = $elm$parser$Parser$Advanced$Token_raw(")", $elm$parser$Parser$Expecting("a `)`"));
    var $author$project$Parser$Token$dot = $elm$parser$Parser$Advanced$Token_raw(".", $elm$parser$Parser$Expecting("a `.`"));
    var $author$project$Markdown$OrderedList$endOrNewline = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$newline), b: { $: 1, a: $elm$parser$Parser$Advanced$end($elm$parser$Parser$Expecting("end of input")), b: _List_Nil } });
    var $author$project$Parser$Extra$oneOrMore = (condition) => $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompIf_raw(condition, $elm$parser$Parser$Problem("Expected one or more character")), $elm$parser$Parser$Advanced$chompWhile(condition));
    var $author$project$Markdown$OrderedList$itemBody = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Parser$Extra$oneOrMore($author$project$Helpers$isSpaceOrTab)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("\n")), $author$project$Markdown$OrderedList$endOrNewline)), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed(""), $author$project$Markdown$OrderedList$endOrNewline), b: _List_Nil } });
    var $author$project$Parser$Extra$positiveInteger = $elm$parser$Parser$Advanced$mapChompedString_raw(F2((str, _v0) => $elm$core$Maybe$withDefault_raw(0, $elm$core$String$toInt(str))), $author$project$Parser$Extra$oneOrMore($elm$core$Char$isDigit));
    var $author$project$Markdown$OrderedList$singleItemParser = (listMarker) => $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$ignorer_raw($author$project$Parser$Extra$positiveInteger, $elm$parser$Parser$Advanced$symbol(listMarker)))), $author$project$Markdown$OrderedList$itemBody);
    var $author$project$Markdown$OrderedList$statementsHelp_raw = (itemParser, revStmts) => $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$map_raw((stmt) => $elm$parser$Parser$Advanced$Loop(_List_Cons(stmt, revStmts)), itemParser), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revStmts))), b: _List_Nil } }), $author$project$Markdown$OrderedList$statementsHelp = F2($author$project$Markdown$OrderedList$statementsHelp_raw);
    var $author$project$Markdown$OrderedList$parseSubsequentItems_raw = (startingIndex, listMarker, firstItem) => $elm$parser$Parser$Advanced$map_raw((items) => _Utils_Tuple2(startingIndex, _List_Cons(firstItem, items)), $elm$parser$Parser$Advanced$loop_raw(_List_Nil, $author$project$Markdown$OrderedList$statementsHelp($author$project$Markdown$OrderedList$singleItemParser(listMarker)))), $author$project$Markdown$OrderedList$parseSubsequentItems = F3($author$project$Markdown$OrderedList$parseSubsequentItems_raw);
    var $author$project$Markdown$OrderedList$positiveIntegerMaxOf9Digits = $elm$parser$Parser$Advanced$andThen_raw((parsed) => (parsed <= 999999999) ? $elm$parser$Parser$Advanced$succeed(parsed) : $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem("Starting numbers must be nine digits or less.")), $author$project$Parser$Extra$positiveInteger);
    var $author$project$Markdown$OrderedList$validateStartsWith1 = function (parsed) {
        if (parsed === 1) {
            return $elm$parser$Parser$Advanced$succeed(parsed);
        }
        else {
            return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem("Lists inside a paragraph or after a paragraph without a blank line must start with 1"));
        }
    };
    var $author$project$Markdown$OrderedList$parser = (previousWasBody) => $elm$parser$Parser$Advanced$andThen_raw($elm$core$Basics$identity, $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$succeed($author$project$Markdown$OrderedList$parseSubsequentItems), $elm$parser$Parser$Advanced$backtrackable(previousWasBody ? $elm$parser$Parser$Advanced$andThen_raw($author$project$Markdown$OrderedList$validateStartsWith1, $author$project$Markdown$OrderedList$positiveIntegerMaxOf9Digits) : $author$project$Markdown$OrderedList$positiveIntegerMaxOf9Digits)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Parser$Token$dot), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$dot)), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Parser$Token$closingParen), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$closingParen)), b: _List_Nil } })), $author$project$Parser$Extra$oneOrMore($author$project$Helpers$isSpaceOrTab))), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("\n")), $author$project$Markdown$OrderedList$endOrNewline)));
    var $author$project$Markdown$Parser$orderedListBlock = (previousWasBody) => $elm$parser$Parser$Advanced$map_raw(function (_v0) {
        var startingIndex = _v0.a;
        var unparsedLines = _v0.b;
        return $author$project$Markdown$RawBlock$OrderedListBlock_raw(startingIndex, $elm$core$List$map_raw($elm$core$Basics$identity, unparsedLines));
    }, $author$project$Markdown$OrderedList$parser(previousWasBody));
    var $author$project$Markdown$Inline$CodeInline = (a) => ({ $: 2, a: a });
    var $author$project$Markdown$Inline$Emphasis_raw = (a, b) => ({ $: 6, a: a, b: b }), $author$project$Markdown$Inline$Emphasis = F2($author$project$Markdown$Inline$Emphasis_raw);
    var $author$project$Markdown$Inline$HardLineBreak = { $: 1 };
    var $author$project$Markdown$Inline$HtmlInline = (a) => ({ $: 5, a: a });
    var $author$project$Markdown$Inline$Image_raw = (a, b, c) => ({ $: 4, a: a, b: b, c: c }), $author$project$Markdown$Inline$Image = F3($author$project$Markdown$Inline$Image_raw);
    var $author$project$Markdown$Inline$Link_raw = (a, b, c) => ({ $: 3, a: a, b: b, c: c }), $author$project$Markdown$Inline$Link = F3($author$project$Markdown$Inline$Link_raw);
    var $author$project$Markdown$Inline$Text = (a) => ({ $: 0, a: a });
    var $author$project$Markdown$InlineParser$matchToInline = function (_v0) {
        var match = _v0;
        var _v1 = match.u;
        switch (_v1.$) {
            case 0:
                return $author$project$Markdown$Inline$Text(match.t);
            case 1:
                return $author$project$Markdown$Inline$HardLineBreak;
            case 2:
                return $author$project$Markdown$Inline$CodeInline(match.t);
            case 3:
                var _v2 = _v1.a;
                var text = _v2.a;
                var url = _v2.b;
                return $author$project$Markdown$Inline$Link_raw(url, $elm$core$Maybe$Nothing, { $: 1, a: $author$project$Markdown$Inline$Text(text), b: _List_Nil });
            case 4:
                var _v3 = _v1.a;
                var url = _v3.a;
                var maybeTitle = _v3.b;
                return $author$project$Markdown$Inline$Link_raw(url, maybeTitle, $author$project$Markdown$InlineParser$matchesToInlines(match.A));
            case 5:
                var _v4 = _v1.a;
                var url = _v4.a;
                var maybeTitle = _v4.b;
                return $author$project$Markdown$Inline$Image_raw(url, maybeTitle, $author$project$Markdown$InlineParser$matchesToInlines(match.A));
            case 6:
                var model = _v1.a;
                return $author$project$Markdown$Inline$HtmlInline(model);
            default:
                var length = _v1.a;
                return $author$project$Markdown$Inline$Emphasis_raw(length, $author$project$Markdown$InlineParser$matchesToInlines(match.A));
        }
    };
    var $author$project$Markdown$InlineParser$matchesToInlines = (matches) => $elm$core$List$map_raw($author$project$Markdown$InlineParser$matchToInline, matches);
    var $author$project$Markdown$InlineParser$Match = $elm$core$Basics$identity;
    var $author$project$Markdown$InlineParser$prepareChildMatch_raw = (parentMatch, childMatch) => ({ o: childMatch.o - parentMatch.z, A: childMatch.A, s: childMatch.s - parentMatch.z, t: childMatch.t, I: childMatch.I - parentMatch.z, z: childMatch.z - parentMatch.z, u: childMatch.u }), $author$project$Markdown$InlineParser$prepareChildMatch = F2($author$project$Markdown$InlineParser$prepareChildMatch_raw);
    var $author$project$Markdown$InlineParser$addChild_raw = (parentMatch, childMatch) => ({
        o: parentMatch.o,
        A: _List_Cons($author$project$Markdown$InlineParser$prepareChildMatch_raw(parentMatch, childMatch), parentMatch.A),
        s: parentMatch.s,
        t: parentMatch.t,
        I: parentMatch.I,
        z: parentMatch.z,
        u: parentMatch.u
    }), $author$project$Markdown$InlineParser$addChild = F2($author$project$Markdown$InlineParser$addChild_raw);
    var $author$project$Markdown$InlineParser$organizeChildren = function (_v4) {
        var match = _v4;
        return {
            o: match.o,
            A: $author$project$Markdown$InlineParser$organizeMatches(match.A),
            s: match.s,
            t: match.t,
            I: match.I,
            z: match.z,
            u: match.u
        };
    };
    var $author$project$Markdown$InlineParser$organizeMatches = function (matches) {
        var _v2 = _List_sortBy_raw(function (_v3) {
            var match = _v3;
            return match.s;
        }, matches);
        if (!_v2.b) {
            return _List_Nil;
        }
        else {
            var first = _v2.a;
            var rest = _v2.b;
            return $author$project$Markdown$InlineParser$organizeMatchesHelp_raw(rest, first, _List_Nil);
        }
    };
    var $author$project$Markdown$InlineParser$organizeMatchesHelp_raw = function (remaining, _v0, matchesTail) {
        organizeMatchesHelp: while (true) {
            var prevMatch = _v0;
            if (!remaining.b) {
                return _List_Cons($author$project$Markdown$InlineParser$organizeChildren(prevMatch), matchesTail);
            }
            else {
                var match = remaining.a;
                var rest = remaining.b;
                if (_Utils_cmp(prevMatch.o, match.s) < 1) {
                    var $temp$remaining = rest, $temp$_v0 = match, $temp$matchesTail = _List_Cons($author$project$Markdown$InlineParser$organizeChildren(prevMatch), matchesTail);
                    remaining = $temp$remaining;
                    _v0 = $temp$_v0;
                    matchesTail = $temp$matchesTail;
                    continue organizeMatchesHelp;
                }
                else {
                    if ((_Utils_cmp(prevMatch.s, match.s) < 0) && (_Utils_cmp(prevMatch.o, match.o) > 0)) {
                        var $temp$remaining = rest, $temp$_v0 = $author$project$Markdown$InlineParser$addChild_raw(prevMatch, match), $temp$matchesTail = matchesTail;
                        remaining = $temp$remaining;
                        _v0 = $temp$_v0;
                        matchesTail = $temp$matchesTail;
                        continue organizeMatchesHelp;
                    }
                    else {
                        var $temp$remaining = rest, $temp$_v0 = prevMatch, $temp$matchesTail = matchesTail;
                        remaining = $temp$remaining;
                        _v0 = $temp$_v0;
                        matchesTail = $temp$matchesTail;
                        continue organizeMatchesHelp;
                    }
                }
            }
        }
    }, $author$project$Markdown$InlineParser$organizeMatchesHelp = F3($author$project$Markdown$InlineParser$organizeMatchesHelp_raw);
    var $author$project$Markdown$InlineParser$NormalType = { $: 0 };
    var $author$project$Markdown$Helpers$containsAmpersand = (string) => _String_contains_raw("&", string);
    var $elm$regex$Regex$Match_raw = (match, index, number, submatches) => ({ c: index, aG: match, cy: number, be: submatches }), $elm$regex$Regex$Match = F4($elm$regex$Regex$Match_raw);
    var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
    var $elm$regex$Regex$fromString = (string) => _Regex_fromStringWith_raw({ b9: false, cx: false }, string);
    var $elm$regex$Regex$never = _Regex_never;
    var $author$project$Markdown$Entity$decimalRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("&#([0-9]{1,8});"));
    var $elm$regex$Regex$replace_a0 = _Regex_infinity, $elm$regex$Regex$replace = _Regex_replaceAtMost($elm$regex$Regex$replace_a0);
    var $author$project$Markdown$Entity$isBadEndUnicode = function (_int) {
        var remain_ = _Basics_modBy_raw(16, _int);
        var remain = _Basics_modBy_raw(131070, _int);
        return (_int >= 131070) && ((((0 <= remain) && (remain <= 15)) || ((65536 <= remain) && (remain <= 65551))) && ((remain_ === 14) || (remain_ === 15)));
    };
    var $author$project$Markdown$Entity$isValidUnicode = (_int) => (_int === 9) || ((_int === 10) || ((_int === 13) || ((_int === 133) || (((32 <= _int) && (_int <= 126)) || (((160 <= _int) && (_int <= 55295)) || (((57344 <= _int) && (_int <= 64975)) || (((65008 <= _int) && (_int <= 65533)) || ((65536 <= _int) && (_int <= 1114109)))))))));
    var $author$project$Markdown$Entity$validUnicode = (_int) => ($author$project$Markdown$Entity$isValidUnicode(_int) && (!$author$project$Markdown$Entity$isBadEndUnicode(_int))) ? $elm$core$String$fromChar($elm$core$Char$fromCode(_int)) : $elm$core$String$fromChar($elm$core$Char$fromCode(65533));
    var $author$project$Markdown$Entity$replaceDecimal = function (match) {
        var _v0 = match.be;
        if (_v0.b && (!_v0.a.$)) {
            var first = _v0.a.a;
            var _v1 = $elm$core$String$toInt(first);
            if (!_v1.$) {
                var v = _v1.a;
                return $author$project$Markdown$Entity$validUnicode(v);
            }
            else {
                return match.aG;
            }
        }
        else {
            return match.aG;
        }
    };
    var $author$project$Markdown$Entity$replaceDecimals = A2($elm$regex$Regex$replace, $author$project$Markdown$Entity$decimalRegex, $author$project$Markdown$Entity$replaceDecimal);
    var $author$project$Markdown$Entity$entitiesRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("&([0-9a-zA-Z]+);"));
    var $author$project$Markdown$Entity$entities = $elm$core$Dict$fromList({ $: 1, a: _Utils_Tuple2("quot", 34), b: { $: 1, a: _Utils_Tuple2("amp", 38), b: { $: 1, a: _Utils_Tuple2("apos", 39), b: { $: 1, a: _Utils_Tuple2("lt", 60), b: { $: 1, a: _Utils_Tuple2("gt", 62), b: { $: 1, a: _Utils_Tuple2("nbsp", 160), b: { $: 1, a: _Utils_Tuple2("iexcl", 161), b: { $: 1, a: _Utils_Tuple2("cent", 162), b: { $: 1, a: _Utils_Tuple2("pound", 163), b: { $: 1, a: _Utils_Tuple2("curren", 164), b: { $: 1, a: _Utils_Tuple2("yen", 165), b: { $: 1, a: _Utils_Tuple2("brvbar", 166), b: { $: 1, a: _Utils_Tuple2("sect", 167), b: { $: 1, a: _Utils_Tuple2("uml", 168), b: { $: 1, a: _Utils_Tuple2("copy", 169), b: { $: 1, a: _Utils_Tuple2("ordf", 170), b: { $: 1, a: _Utils_Tuple2("laquo", 171), b: { $: 1, a: _Utils_Tuple2("not", 172), b: { $: 1, a: _Utils_Tuple2("shy", 173), b: { $: 1, a: _Utils_Tuple2("reg", 174), b: { $: 1, a: _Utils_Tuple2("macr", 175), b: { $: 1, a: _Utils_Tuple2("deg", 176), b: { $: 1, a: _Utils_Tuple2("plusmn", 177), b: { $: 1, a: _Utils_Tuple2("sup2", 178), b: { $: 1, a: _Utils_Tuple2("sup3", 179), b: { $: 1, a: _Utils_Tuple2("acute", 180), b: { $: 1, a: _Utils_Tuple2("micro", 181), b: { $: 1, a: _Utils_Tuple2("para", 182), b: { $: 1, a: _Utils_Tuple2("middot", 183), b: { $: 1, a: _Utils_Tuple2("cedil", 184), b: { $: 1, a: _Utils_Tuple2("sup1", 185), b: { $: 1, a: _Utils_Tuple2("ordm", 186), b: { $: 1, a: _Utils_Tuple2("raquo", 187), b: { $: 1, a: _Utils_Tuple2("frac14", 188), b: { $: 1, a: _Utils_Tuple2("frac12", 189), b: { $: 1, a: _Utils_Tuple2("frac34", 190), b: { $: 1, a: _Utils_Tuple2("iquest", 191), b: { $: 1, a: _Utils_Tuple2("Agrave", 192), b: { $: 1, a: _Utils_Tuple2("Aacute", 193), b: { $: 1, a: _Utils_Tuple2("Acirc", 194), b: { $: 1, a: _Utils_Tuple2("Atilde", 195), b: { $: 1, a: _Utils_Tuple2("Auml", 196), b: { $: 1, a: _Utils_Tuple2("Aring", 197), b: { $: 1, a: _Utils_Tuple2("AElig", 198), b: { $: 1, a: _Utils_Tuple2("Ccedil", 199), b: { $: 1, a: _Utils_Tuple2("Egrave", 200), b: { $: 1, a: _Utils_Tuple2("Eacute", 201), b: { $: 1, a: _Utils_Tuple2("Ecirc", 202), b: { $: 1, a: _Utils_Tuple2("Euml", 203), b: { $: 1, a: _Utils_Tuple2("Igrave", 204), b: { $: 1, a: _Utils_Tuple2("Iacute", 205), b: { $: 1, a: _Utils_Tuple2("Icirc", 206), b: { $: 1, a: _Utils_Tuple2("Iuml", 207), b: { $: 1, a: _Utils_Tuple2("ETH", 208), b: { $: 1, a: _Utils_Tuple2("Ntilde", 209), b: { $: 1, a: _Utils_Tuple2("Ograve", 210), b: { $: 1, a: _Utils_Tuple2("Oacute", 211), b: { $: 1, a: _Utils_Tuple2("Ocirc", 212), b: { $: 1, a: _Utils_Tuple2("Otilde", 213), b: { $: 1, a: _Utils_Tuple2("Ouml", 214), b: { $: 1, a: _Utils_Tuple2("times", 215), b: { $: 1, a: _Utils_Tuple2("Oslash", 216), b: { $: 1, a: _Utils_Tuple2("Ugrave", 217), b: { $: 1, a: _Utils_Tuple2("Uacute", 218), b: { $: 1, a: _Utils_Tuple2("Ucirc", 219), b: { $: 1, a: _Utils_Tuple2("Uuml", 220), b: { $: 1, a: _Utils_Tuple2("Yacute", 221), b: { $: 1, a: _Utils_Tuple2("THORN", 222), b: { $: 1, a: _Utils_Tuple2("szlig", 223), b: { $: 1, a: _Utils_Tuple2("agrave", 224), b: { $: 1, a: _Utils_Tuple2("aacute", 225), b: { $: 1, a: _Utils_Tuple2("acirc", 226), b: { $: 1, a: _Utils_Tuple2("atilde", 227), b: { $: 1, a: _Utils_Tuple2("auml", 228), b: { $: 1, a: _Utils_Tuple2("aring", 229), b: { $: 1, a: _Utils_Tuple2("aelig", 230), b: { $: 1, a: _Utils_Tuple2("ccedil", 231), b: { $: 1, a: _Utils_Tuple2("egrave", 232), b: { $: 1, a: _Utils_Tuple2("eacute", 233), b: { $: 1, a: _Utils_Tuple2("ecirc", 234), b: { $: 1, a: _Utils_Tuple2("euml", 235), b: { $: 1, a: _Utils_Tuple2("igrave", 236), b: { $: 1, a: _Utils_Tuple2("iacute", 237), b: { $: 1, a: _Utils_Tuple2("icirc", 238), b: { $: 1, a: _Utils_Tuple2("iuml", 239), b: { $: 1, a: _Utils_Tuple2("eth", 240), b: { $: 1, a: _Utils_Tuple2("ntilde", 241), b: { $: 1, a: _Utils_Tuple2("ograve", 242), b: { $: 1, a: _Utils_Tuple2("oacute", 243), b: { $: 1, a: _Utils_Tuple2("ocirc", 244), b: { $: 1, a: _Utils_Tuple2("otilde", 245), b: { $: 1, a: _Utils_Tuple2("ouml", 246), b: { $: 1, a: _Utils_Tuple2("divide", 247), b: { $: 1, a: _Utils_Tuple2("oslash", 248), b: { $: 1, a: _Utils_Tuple2("ugrave", 249), b: { $: 1, a: _Utils_Tuple2("uacute", 250), b: { $: 1, a: _Utils_Tuple2("ucirc", 251), b: { $: 1, a: _Utils_Tuple2("uuml", 252), b: { $: 1, a: _Utils_Tuple2("yacute", 253), b: { $: 1, a: _Utils_Tuple2("thorn", 254), b: { $: 1, a: _Utils_Tuple2("yuml", 255), b: { $: 1, a: _Utils_Tuple2("OElig", 338), b: { $: 1, a: _Utils_Tuple2("oelig", 339), b: { $: 1, a: _Utils_Tuple2("Scaron", 352), b: { $: 1, a: _Utils_Tuple2("scaron", 353), b: { $: 1, a: _Utils_Tuple2("Yuml", 376), b: { $: 1, a: _Utils_Tuple2("fnof", 402), b: { $: 1, a: _Utils_Tuple2("circ", 710), b: { $: 1, a: _Utils_Tuple2("tilde", 732), b: { $: 1, a: _Utils_Tuple2("Alpha", 913), b: { $: 1, a: _Utils_Tuple2("Beta", 914), b: { $: 1, a: _Utils_Tuple2("Gamma", 915), b: { $: 1, a: _Utils_Tuple2("Delta", 916), b: { $: 1, a: _Utils_Tuple2("Epsilon", 917), b: { $: 1, a: _Utils_Tuple2("Zeta", 918), b: { $: 1, a: _Utils_Tuple2("Eta", 919), b: { $: 1, a: _Utils_Tuple2("Theta", 920), b: { $: 1, a: _Utils_Tuple2("Iota", 921), b: { $: 1, a: _Utils_Tuple2("Kappa", 922), b: { $: 1, a: _Utils_Tuple2("Lambda", 923), b: { $: 1, a: _Utils_Tuple2("Mu", 924), b: { $: 1, a: _Utils_Tuple2("Nu", 925), b: { $: 1, a: _Utils_Tuple2("Xi", 926), b: { $: 1, a: _Utils_Tuple2("Omicron", 927), b: { $: 1, a: _Utils_Tuple2("Pi", 928), b: { $: 1, a: _Utils_Tuple2("Rho", 929), b: { $: 1, a: _Utils_Tuple2("Sigma", 931), b: { $: 1, a: _Utils_Tuple2("Tau", 932), b: { $: 1, a: _Utils_Tuple2("Upsilon", 933), b: { $: 1, a: _Utils_Tuple2("Phi", 934), b: { $: 1, a: _Utils_Tuple2("Chi", 935), b: { $: 1, a: _Utils_Tuple2("Psi", 936), b: { $: 1, a: _Utils_Tuple2("Omega", 937), b: { $: 1, a: _Utils_Tuple2("alpha", 945), b: { $: 1, a: _Utils_Tuple2("beta", 946), b: { $: 1, a: _Utils_Tuple2("gamma", 947), b: { $: 1, a: _Utils_Tuple2("delta", 948), b: { $: 1, a: _Utils_Tuple2("epsilon", 949), b: { $: 1, a: _Utils_Tuple2("zeta", 950), b: { $: 1, a: _Utils_Tuple2("eta", 951), b: { $: 1, a: _Utils_Tuple2("theta", 952), b: { $: 1, a: _Utils_Tuple2("iota", 953), b: { $: 1, a: _Utils_Tuple2("kappa", 954), b: { $: 1, a: _Utils_Tuple2("lambda", 955), b: { $: 1, a: _Utils_Tuple2("mu", 956), b: { $: 1, a: _Utils_Tuple2("nu", 957), b: { $: 1, a: _Utils_Tuple2("xi", 958), b: { $: 1, a: _Utils_Tuple2("omicron", 959), b: { $: 1, a: _Utils_Tuple2("pi", 960), b: { $: 1, a: _Utils_Tuple2("rho", 961), b: { $: 1, a: _Utils_Tuple2("sigmaf", 962), b: { $: 1, a: _Utils_Tuple2("sigma", 963), b: { $: 1, a: _Utils_Tuple2("tau", 964), b: { $: 1, a: _Utils_Tuple2("upsilon", 965), b: { $: 1, a: _Utils_Tuple2("phi", 966), b: { $: 1, a: _Utils_Tuple2("chi", 967), b: { $: 1, a: _Utils_Tuple2("psi", 968), b: { $: 1, a: _Utils_Tuple2("omega", 969), b: { $: 1, a: _Utils_Tuple2("thetasym", 977), b: { $: 1, a: _Utils_Tuple2("upsih", 978), b: { $: 1, a: _Utils_Tuple2("piv", 982), b: { $: 1, a: _Utils_Tuple2("ensp", 8194), b: { $: 1, a: _Utils_Tuple2("emsp", 8195), b: { $: 1, a: _Utils_Tuple2("thinsp", 8201), b: { $: 1, a: _Utils_Tuple2("zwnj", 8204), b: { $: 1, a: _Utils_Tuple2("zwj", 8205), b: { $: 1, a: _Utils_Tuple2("lrm", 8206), b: { $: 1, a: _Utils_Tuple2("rlm", 8207), b: { $: 1, a: _Utils_Tuple2("ndash", 8211), b: { $: 1, a: _Utils_Tuple2("mdash", 8212), b: { $: 1, a: _Utils_Tuple2("lsquo", 8216), b: { $: 1, a: _Utils_Tuple2("rsquo", 8217), b: { $: 1, a: _Utils_Tuple2("sbquo", 8218), b: { $: 1, a: _Utils_Tuple2("ldquo", 8220), b: { $: 1, a: _Utils_Tuple2("rdquo", 8221), b: { $: 1, a: _Utils_Tuple2("bdquo", 8222), b: { $: 1, a: _Utils_Tuple2("dagger", 8224), b: { $: 1, a: _Utils_Tuple2("Dagger", 8225), b: { $: 1, a: _Utils_Tuple2("bull", 8226), b: { $: 1, a: _Utils_Tuple2("hellip", 8230), b: { $: 1, a: _Utils_Tuple2("permil", 8240), b: { $: 1, a: _Utils_Tuple2("prime", 8242), b: { $: 1, a: _Utils_Tuple2("Prime", 8243), b: { $: 1, a: _Utils_Tuple2("lsaquo", 8249), b: { $: 1, a: _Utils_Tuple2("rsaquo", 8250), b: { $: 1, a: _Utils_Tuple2("oline", 8254), b: { $: 1, a: _Utils_Tuple2("frasl", 8260), b: { $: 1, a: _Utils_Tuple2("euro", 8364), b: { $: 1, a: _Utils_Tuple2("image", 8465), b: { $: 1, a: _Utils_Tuple2("weierp", 8472), b: { $: 1, a: _Utils_Tuple2("real", 8476), b: { $: 1, a: _Utils_Tuple2("trade", 8482), b: { $: 1, a: _Utils_Tuple2("alefsym", 8501), b: { $: 1, a: _Utils_Tuple2("larr", 8592), b: { $: 1, a: _Utils_Tuple2("uarr", 8593), b: { $: 1, a: _Utils_Tuple2("rarr", 8594), b: { $: 1, a: _Utils_Tuple2("darr", 8595), b: { $: 1, a: _Utils_Tuple2("harr", 8596), b: { $: 1, a: _Utils_Tuple2("crarr", 8629), b: { $: 1, a: _Utils_Tuple2("lArr", 8656), b: { $: 1, a: _Utils_Tuple2("uArr", 8657), b: { $: 1, a: _Utils_Tuple2("rArr", 8658), b: { $: 1, a: _Utils_Tuple2("dArr", 8659), b: { $: 1, a: _Utils_Tuple2("hArr", 8660), b: { $: 1, a: _Utils_Tuple2("forall", 8704), b: { $: 1, a: _Utils_Tuple2("part", 8706), b: { $: 1, a: _Utils_Tuple2("exist", 8707), b: { $: 1, a: _Utils_Tuple2("empty", 8709), b: { $: 1, a: _Utils_Tuple2("nabla", 8711), b: { $: 1, a: _Utils_Tuple2("isin", 8712), b: { $: 1, a: _Utils_Tuple2("notin", 8713), b: { $: 1, a: _Utils_Tuple2("ni", 8715), b: { $: 1, a: _Utils_Tuple2("prod", 8719), b: { $: 1, a: _Utils_Tuple2("sum", 8721), b: { $: 1, a: _Utils_Tuple2("minus", 8722), b: { $: 1, a: _Utils_Tuple2("lowast", 8727), b: { $: 1, a: _Utils_Tuple2("radic", 8730), b: { $: 1, a: _Utils_Tuple2("prop", 8733), b: { $: 1, a: _Utils_Tuple2("infin", 8734), b: { $: 1, a: _Utils_Tuple2("ang", 8736), b: { $: 1, a: _Utils_Tuple2("and", 8743), b: { $: 1, a: _Utils_Tuple2("or", 8744), b: { $: 1, a: _Utils_Tuple2("cap", 8745), b: { $: 1, a: _Utils_Tuple2("cup", 8746), b: { $: 1, a: _Utils_Tuple2("int", 8747), b: { $: 1, a: _Utils_Tuple2("there4", 8756), b: { $: 1, a: _Utils_Tuple2("sim", 8764), b: { $: 1, a: _Utils_Tuple2("cong", 8773), b: { $: 1, a: _Utils_Tuple2("asymp", 8776), b: { $: 1, a: _Utils_Tuple2("ne", 8800), b: { $: 1, a: _Utils_Tuple2("equiv", 8801), b: { $: 1, a: _Utils_Tuple2("le", 8804), b: { $: 1, a: _Utils_Tuple2("ge", 8805), b: { $: 1, a: _Utils_Tuple2("sub", 8834), b: { $: 1, a: _Utils_Tuple2("sup", 8835), b: { $: 1, a: _Utils_Tuple2("nsub", 8836), b: { $: 1, a: _Utils_Tuple2("sube", 8838), b: { $: 1, a: _Utils_Tuple2("supe", 8839), b: { $: 1, a: _Utils_Tuple2("oplus", 8853), b: { $: 1, a: _Utils_Tuple2("otimes", 8855), b: { $: 1, a: _Utils_Tuple2("perp", 8869), b: { $: 1, a: _Utils_Tuple2("sdot", 8901), b: { $: 1, a: _Utils_Tuple2("lceil", 8968), b: { $: 1, a: _Utils_Tuple2("rceil", 8969), b: { $: 1, a: _Utils_Tuple2("lfloor", 8970), b: { $: 1, a: _Utils_Tuple2("rfloor", 8971), b: { $: 1, a: _Utils_Tuple2("lang", 9001), b: { $: 1, a: _Utils_Tuple2("rang", 9002), b: { $: 1, a: _Utils_Tuple2("loz", 9674), b: { $: 1, a: _Utils_Tuple2("spades", 9824), b: { $: 1, a: _Utils_Tuple2("clubs", 9827), b: { $: 1, a: _Utils_Tuple2("hearts", 9829), b: { $: 1, a: _Utils_Tuple2("diams", 9830), b: _List_Nil } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } });
    var $author$project$Markdown$Entity$replaceEntity = function (match) {
        var _v0 = match.be;
        if (_v0.b && (!_v0.a.$)) {
            var first = _v0.a.a;
            var _v1 = $elm$core$Dict$get_raw(first, $author$project$Markdown$Entity$entities);
            if (!_v1.$) {
                var code = _v1.a;
                return $elm$core$String$fromChar($elm$core$Char$fromCode(code));
            }
            else {
                return match.aG;
            }
        }
        else {
            return match.aG;
        }
    };
    var $author$project$Markdown$Entity$replaceEntities = A2($elm$regex$Regex$replace, $author$project$Markdown$Entity$entitiesRegex, $author$project$Markdown$Entity$replaceEntity);
    var $author$project$Markdown$Helpers$escapableRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\+)([!\"#$%&\\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-])"));
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
    var $elm$core$String$repeatHelp_raw = (n, chunk, result) => (n <= 0) ? result : $elm$core$String$repeatHelp_raw(n >> 1, _Utils_ap(chunk, chunk), (!(n & 1)) ? result : _Utils_ap(result, chunk)), $elm$core$String$repeatHelp = F3($elm$core$String$repeatHelp_raw);
    var $elm$core$String$repeat_raw = (n, chunk) => $elm$core$String$repeatHelp_raw(n, chunk, ""), $elm$core$String$repeat = F2($elm$core$String$repeat_raw);
    var $author$project$Markdown$Helpers$replaceEscapable = A2($elm$regex$Regex$replace, $author$project$Markdown$Helpers$escapableRegex, function (regexMatch) {
        var _v0 = regexMatch.be;
        if (((_v0.b && (!_v0.a.$)) && _v0.b.b) && (!_v0.b.a.$)) {
            var backslashes = _v0.a.a;
            var _v1 = _v0.b;
            var escapedStr = _v1.a.a;
            return _Utils_ap($elm$core$String$repeat_raw(($elm$core$String$length(backslashes) / 2) | 0, "\\"), escapedStr);
        }
        else {
            return regexMatch.aG;
        }
    });
    var $author$project$Markdown$Entity$hexadecimalRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("&#[Xx]([0-9a-fA-F]{1,8});"));
    var $elm$core$String$foldl = _String_foldl;
    var $author$project$Markdown$Entity$hexToInt = function (string) {
        var folder_raw = (hexDigit, _int) => ((_int * 16) + _Basics_modBy_raw(39, $elm$core$Char$toCode(hexDigit))) - 9, folder = F2(folder_raw);
        return _String_foldl_raw(folder, 0, $elm$core$String$toLower(string));
    };
    var $author$project$Markdown$Entity$replaceHexadecimal = function (match) {
        var _v0 = match.be;
        if (_v0.b && (!_v0.a.$)) {
            var first = _v0.a.a;
            return $author$project$Markdown$Entity$validUnicode($author$project$Markdown$Entity$hexToInt(first));
        }
        else {
            return match.aG;
        }
    };
    var $author$project$Markdown$Entity$replaceHexadecimals = A2($elm$regex$Regex$replace, $author$project$Markdown$Entity$hexadecimalRegex, $author$project$Markdown$Entity$replaceHexadecimal);
    var $author$project$Markdown$Helpers$formatStr = function (str) {
        var withEscapes = $author$project$Markdown$Helpers$replaceEscapable(str);
        return $author$project$Markdown$Helpers$containsAmpersand(withEscapes) ? $author$project$Markdown$Entity$replaceHexadecimals($author$project$Markdown$Entity$replaceDecimals($author$project$Markdown$Entity$replaceEntities(withEscapes))) : withEscapes;
    };
    var $author$project$Markdown$InlineParser$normalMatch = (text) => ({
        o: 0,
        A: _List_Nil,
        s: 0,
        t: $author$project$Markdown$Helpers$formatStr(text),
        I: 0,
        z: 0,
        u: $author$project$Markdown$InlineParser$NormalType
    });
    var $author$project$Markdown$InlineParser$parseTextMatch_raw = function (rawText, _v2, parsedMatches) {
        var matchModel = _v2;
        var updtMatch = {
            o: matchModel.o,
            A: $author$project$Markdown$InlineParser$parseTextMatches_raw(matchModel.t, _List_Nil, matchModel.A),
            s: matchModel.s,
            t: matchModel.t,
            I: matchModel.I,
            z: matchModel.z,
            u: matchModel.u
        };
        if (!parsedMatches.b) {
            var finalStr = $elm$core$String$dropLeft_raw(matchModel.o, rawText);
            return $elm$core$String$isEmpty(finalStr) ? { $: 1, a: updtMatch, b: _List_Nil } : { $: 1, a: updtMatch, b: { $: 1, a: $author$project$Markdown$InlineParser$normalMatch(finalStr), b: _List_Nil } };
        }
        else {
            var matchHead = parsedMatches.a;
            var matchesTail = parsedMatches.b;
            var _v4 = matchHead.u;
            if (!_v4.$) {
                return _List_Cons(updtMatch, parsedMatches);
            }
            else {
                return _Utils_eq(matchModel.o, matchHead.s) ? _List_Cons(updtMatch, parsedMatches) : ((_Utils_cmp(matchModel.o, matchHead.s) < 0) ? _List_Cons(updtMatch, _List_Cons($author$project$Markdown$InlineParser$normalMatch(_String_slice_raw(matchModel.o, matchHead.s, rawText)), parsedMatches)) : parsedMatches);
            }
        }
    }, $author$project$Markdown$InlineParser$parseTextMatch = F3($author$project$Markdown$InlineParser$parseTextMatch_raw);
    var $author$project$Markdown$InlineParser$parseTextMatches_raw = function (rawText, parsedMatches, matches) {
        parseTextMatches: while (true) {
            if (!matches.b) {
                if (!parsedMatches.b) {
                    return $elm$core$String$isEmpty(rawText) ? _List_Nil : { $: 1, a: $author$project$Markdown$InlineParser$normalMatch(rawText), b: _List_Nil };
                }
                else {
                    var matchModel = parsedMatches.a;
                    return (matchModel.s > 0) ? _List_Cons($author$project$Markdown$InlineParser$normalMatch($elm$core$String$left_raw(matchModel.s, rawText)), parsedMatches) : parsedMatches;
                }
            }
            else {
                var match = matches.a;
                var matchesTail = matches.b;
                var $temp$rawText = rawText, $temp$parsedMatches = $author$project$Markdown$InlineParser$parseTextMatch_raw(rawText, match, parsedMatches), $temp$matches = matchesTail;
                rawText = $temp$rawText;
                parsedMatches = $temp$parsedMatches;
                matches = $temp$matches;
                continue parseTextMatches;
            }
        }
    }, $author$project$Markdown$InlineParser$parseTextMatches = F3($author$project$Markdown$InlineParser$parseTextMatches_raw);
    var $author$project$Markdown$InlineParser$angleBracketLTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\<)"));
    var $elm$core$List$maybeCons_raw = function (f, mx, xs) {
        var _v0 = f(mx);
        if (!_v0.$) {
            var x = _v0.a;
            return _List_Cons(x, xs);
        }
        else {
            return xs;
        }
    }, $elm$core$List$maybeCons = F3($elm$core$List$maybeCons_raw);
    var $elm$core$List$filterMap_raw = (f, xs) => $elm$core$List$foldr_raw($elm$core$List$maybeCons(f), _List_Nil, xs), $elm$core$List$filterMap = F2($elm$core$List$filterMap_raw);
    var $elm$regex$Regex$find_a0 = _Regex_infinity, $elm$regex$Regex$find = _Regex_findAtMost($elm$regex$Regex$find_a0);
    var $author$project$Markdown$InlineParser$AngleBracketOpen = { $: 4 };
    var $author$project$Markdown$Helpers$isEven = (_int) => !_Basics_modBy_raw(2, _int);
    var $author$project$Markdown$InlineParser$regMatchToAngleBracketLToken = function (regMatch) {
        var _v0 = regMatch.be;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var delimiter = _v1.a.a;
            var backslashesLength = $elm$core$Maybe$withDefault_raw(0, $elm$core$Maybe$map_raw($elm$core$String$length, maybeBackslashes));
            return $author$project$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just({ c: regMatch.c + backslashesLength, i: 1, n: $author$project$Markdown$InlineParser$AngleBracketOpen }) : $elm$core$Maybe$Nothing;
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $author$project$Markdown$InlineParser$findAngleBracketLTokens = (str) => $elm$core$List$filterMap_raw($author$project$Markdown$InlineParser$regMatchToAngleBracketLToken, _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$angleBracketLTokenRegex, str));
    var $author$project$Markdown$InlineParser$angleBracketRTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\>)"));
    var $author$project$Markdown$InlineParser$AngleBracketClose = (a) => ({ $: 5, a: a });
    var $author$project$Markdown$InlineParser$Escaped = 0;
    var $author$project$Markdown$InlineParser$NotEscaped = 1;
    var $author$project$Markdown$InlineParser$regMatchToAngleBracketRToken = function (regMatch) {
        var _v0 = regMatch.be;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var backslashesLength = $elm$core$Maybe$withDefault_raw(0, $elm$core$Maybe$map_raw($elm$core$String$length, maybeBackslashes));
            return $elm$core$Maybe$Just({
                c: regMatch.c + backslashesLength,
                i: 1,
                n: $author$project$Markdown$Helpers$isEven(backslashesLength) ? $author$project$Markdown$InlineParser$AngleBracketClose(1) : $author$project$Markdown$InlineParser$AngleBracketClose(0)
            });
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $author$project$Markdown$InlineParser$findAngleBracketRTokens = (str) => $elm$core$List$filterMap_raw($author$project$Markdown$InlineParser$regMatchToAngleBracketRToken, _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$angleBracketRTokenRegex, str));
    var $author$project$Markdown$InlineParser$asteriskEmphasisTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)([^*])?(\\*+)([^*])?"));
    var $author$project$Markdown$InlineParser$EmphasisToken_raw = (a, b) => ({ $: 7, a: a, b: b }), $author$project$Markdown$InlineParser$EmphasisToken = F2($author$project$Markdown$InlineParser$EmphasisToken_raw);
    var $author$project$Markdown$InlineParser$isPunctuation = function (c) {
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
    var $author$project$Markdown$InlineParser$containPunctuation_a0 = F2((c, accum) => accum || $author$project$Markdown$InlineParser$isPunctuation(c)), $author$project$Markdown$InlineParser$containPunctuation_a1 = false, $author$project$Markdown$InlineParser$containPunctuation = A2($elm$core$String$foldl, $author$project$Markdown$InlineParser$containPunctuation_a0, $author$project$Markdown$InlineParser$containPunctuation_a1);
    var $author$project$Markdown$InlineParser$isWhitespace = function (c) {
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
    var $author$project$Markdown$InlineParser$containSpace_a0 = F2((c, accum) => accum || $author$project$Markdown$InlineParser$isWhitespace(c)), $author$project$Markdown$InlineParser$containSpace_a1 = false, $author$project$Markdown$InlineParser$containSpace = A2($elm$core$String$foldl, $author$project$Markdown$InlineParser$containSpace_a0, $author$project$Markdown$InlineParser$containSpace_a1);
    var $author$project$Markdown$InlineParser$getFringeRank = function (mstring) {
        if (!mstring.$) {
            var string = mstring.a;
            return ($elm$core$String$isEmpty(string) || _String_foldl_raw($author$project$Markdown$InlineParser$containSpace_a0, $author$project$Markdown$InlineParser$containSpace_a1, string)) ? 0 : (_String_foldl_raw($author$project$Markdown$InlineParser$containPunctuation_a0, $author$project$Markdown$InlineParser$containPunctuation_a1, string) ? 1 : 2);
        }
        else {
            return 0;
        }
    };
    var $author$project$Markdown$InlineParser$regMatchToEmphasisToken_raw = function (_char, rawText, regMatch) {
        var _v0 = regMatch.be;
        if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) && _v0.b.b.b.b) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var maybeLeftFringe = _v1.a;
            var _v2 = _v1.b;
            var delimiter = _v2.a.a;
            var _v3 = _v2.b;
            var maybeRightFringe = _v3.a;
            var rFringeRank = $author$project$Markdown$InlineParser$getFringeRank(maybeRightFringe);
            var leftFringeLength = function () {
                if (!maybeLeftFringe.$) {
                    var left = maybeLeftFringe.a;
                    return $elm$core$String$length(left);
                }
                else {
                    return 0;
                }
            }();
            var mLeftFringe = ((!(!regMatch.c)) && (!leftFringeLength)) ? $elm$core$Maybe$Just(_String_slice_raw(regMatch.c - 1, regMatch.c, rawText)) : maybeLeftFringe;
            var backslashesLength = function () {
                if (!maybeBackslashes.$) {
                    var backslashes = maybeBackslashes.a;
                    return $elm$core$String$length(backslashes);
                }
                else {
                    return 0;
                }
            }();
            var isEscaped = ((!$author$project$Markdown$Helpers$isEven(backslashesLength)) && (!leftFringeLength)) || function () {
                if ((!mLeftFringe.$) && (mLeftFringe.a === "\\")) {
                    return true;
                }
                else {
                    return false;
                }
            }();
            var delimiterLength = isEscaped ? ($elm$core$String$length(delimiter) - 1) : $elm$core$String$length(delimiter);
            var lFringeRank = isEscaped ? 1 : $author$project$Markdown$InlineParser$getFringeRank(mLeftFringe);
            if ((delimiterLength <= 0) || ((_char === "_") && ((lFringeRank === 2) && (rFringeRank === 2)))) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var index = ((regMatch.c + backslashesLength) + leftFringeLength) + (isEscaped ? 1 : 0);
                return $elm$core$Maybe$Just({
                    c: index,
                    i: delimiterLength,
                    n: $author$project$Markdown$InlineParser$EmphasisToken_raw(_char, { aU: lFringeRank, a_: rFringeRank })
                });
            }
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $author$project$Markdown$InlineParser$regMatchToEmphasisToken = F3($author$project$Markdown$InlineParser$regMatchToEmphasisToken_raw);
    var $author$project$Markdown$InlineParser$findAsteriskEmphasisTokens = (str) => $elm$core$List$filterMap_raw(A2($author$project$Markdown$InlineParser$regMatchToEmphasisToken, "*", str), _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$asteriskEmphasisTokenRegex, str));
    var $author$project$Markdown$InlineParser$codeTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\`+)"));
    var $author$project$Markdown$InlineParser$CodeToken = (a) => ({ $: 0, a: a });
    var $author$project$Markdown$InlineParser$regMatchToCodeToken = function (regMatch) {
        var _v0 = regMatch.be;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var backtick = _v1.a.a;
            var backslashesLength = $elm$core$Maybe$withDefault_raw(0, $elm$core$Maybe$map_raw($elm$core$String$length, maybeBackslashes));
            return $elm$core$Maybe$Just({
                c: regMatch.c + backslashesLength,
                i: $elm$core$String$length(backtick),
                n: $author$project$Markdown$Helpers$isEven(backslashesLength) ? $author$project$Markdown$InlineParser$CodeToken(1) : $author$project$Markdown$InlineParser$CodeToken(0)
            });
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $author$project$Markdown$InlineParser$findCodeTokens = (str) => $elm$core$List$filterMap_raw($author$project$Markdown$InlineParser$regMatchToCodeToken, _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$codeTokenRegex, str));
    var $author$project$Markdown$InlineParser$hardBreakTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(?:(\\\\+)|( {2,}))\\n"));
    var $author$project$Markdown$InlineParser$HardLineBreakToken = { $: 9 };
    var $author$project$Markdown$InlineParser$regMatchToHardBreakToken = function (regMatch) {
        var _v0 = regMatch.be;
        _v0$2: while (true) {
            if (_v0.b) {
                if (!_v0.a.$) {
                    var backslashes = _v0.a.a;
                    var backslashesLength = $elm$core$String$length(backslashes);
                    return (!$author$project$Markdown$Helpers$isEven(backslashesLength)) ? $elm$core$Maybe$Just({ c: (regMatch.c + backslashesLength) - 1, i: 2, n: $author$project$Markdown$InlineParser$HardLineBreakToken }) : $elm$core$Maybe$Nothing;
                }
                else {
                    if (_v0.b.b && (!_v0.b.a.$)) {
                        var _v1 = _v0.b;
                        return $elm$core$Maybe$Just({
                            c: regMatch.c,
                            i: $elm$core$String$length(regMatch.aG),
                            n: $author$project$Markdown$InlineParser$HardLineBreakToken
                        });
                    }
                    else {
                        break _v0$2;
                    }
                }
            }
            else {
                break _v0$2;
            }
        }
        return $elm$core$Maybe$Nothing;
    };
    var $author$project$Markdown$InlineParser$regMatchToSoftHardBreakToken = function (regMatch) {
        var _v0 = regMatch.be;
        _v0$2: while (true) {
            if (_v0.b) {
                if (!_v0.a.$) {
                    var backslashes = _v0.a.a;
                    var backslashesLength = $elm$core$String$length(backslashes);
                    return $author$project$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just({ c: regMatch.c + backslashesLength, i: 1, n: $author$project$Markdown$InlineParser$HardLineBreakToken }) : $elm$core$Maybe$Just({ c: (regMatch.c + backslashesLength) - 1, i: 2, n: $author$project$Markdown$InlineParser$HardLineBreakToken });
                }
                else {
                    if (_v0.b.b) {
                        var _v1 = _v0.b;
                        var maybeSpaces = _v1.a;
                        return $elm$core$Maybe$Just({
                            c: regMatch.c,
                            i: $elm$core$String$length(regMatch.aG),
                            n: $author$project$Markdown$InlineParser$HardLineBreakToken
                        });
                    }
                    else {
                        break _v0$2;
                    }
                }
            }
            else {
                break _v0$2;
            }
        }
        return $elm$core$Maybe$Nothing;
    };
    var $author$project$Markdown$InlineParser$softAsHardLineBreak = false;
    var $author$project$Markdown$InlineParser$softAsHardLineBreakTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(?:(\\\\+)|( *))\\n"));
    var $author$project$Markdown$InlineParser$findHardBreakTokens = (str) => $author$project$Markdown$InlineParser$softAsHardLineBreak ? $elm$core$List$filterMap_raw($author$project$Markdown$InlineParser$regMatchToSoftHardBreakToken, _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$softAsHardLineBreakTokenRegex, str)) : $elm$core$List$filterMap_raw($author$project$Markdown$InlineParser$regMatchToHardBreakToken, _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$hardBreakTokenRegex, str));
    var $author$project$Markdown$InlineParser$linkImageCloseTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\])"));
    var $author$project$Markdown$InlineParser$SquareBracketClose = { $: 3 };
    var $author$project$Markdown$InlineParser$regMatchToLinkImageCloseToken = function (regMatch) {
        var _v0 = regMatch.be;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var backslashesLength = $elm$core$Maybe$withDefault_raw(0, $elm$core$Maybe$map_raw($elm$core$String$length, maybeBackslashes));
            return $author$project$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just({ c: regMatch.c + backslashesLength, i: 1, n: $author$project$Markdown$InlineParser$SquareBracketClose }) : $elm$core$Maybe$Nothing;
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $author$project$Markdown$InlineParser$findLinkImageCloseTokens = (str) => $elm$core$List$filterMap_raw($author$project$Markdown$InlineParser$regMatchToLinkImageCloseToken, _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$linkImageCloseTokenRegex, str));
    var $author$project$Markdown$InlineParser$linkImageOpenTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\!)?(\\[)"));
    var $author$project$Markdown$InlineParser$Active = 0;
    var $author$project$Markdown$InlineParser$ImageOpenToken = { $: 2 };
    var $author$project$Markdown$InlineParser$LinkOpenToken = (a) => ({ $: 1, a: a });
    var $author$project$Markdown$InlineParser$regMatchToLinkImageOpenToken = function (regMatch) {
        var _v0 = regMatch.be;
        if (((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var maybeImageOpen = _v1.a;
            var _v2 = _v1.b;
            var backslashesLength = $elm$core$Maybe$withDefault_raw(0, $elm$core$Maybe$map_raw($elm$core$String$length, maybeBackslashes));
            var isEscaped = !$author$project$Markdown$Helpers$isEven(backslashesLength);
            var index = isEscaped ? ((regMatch.c + backslashesLength) + 1) : (regMatch.c + backslashesLength);
            if (isEscaped) {
                if (!maybeImageOpen.$) {
                    return $elm$core$Maybe$Just({
                        c: index,
                        i: 1,
                        n: $author$project$Markdown$InlineParser$LinkOpenToken(0)
                    });
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
            else {
                if (!maybeImageOpen.$) {
                    return $elm$core$Maybe$Just({ c: index, i: 2, n: $author$project$Markdown$InlineParser$ImageOpenToken });
                }
                else {
                    return $elm$core$Maybe$Just({
                        c: index,
                        i: 1,
                        n: $author$project$Markdown$InlineParser$LinkOpenToken(0)
                    });
                }
            }
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $author$project$Markdown$InlineParser$findLinkImageOpenTokens = (str) => $elm$core$List$filterMap_raw($author$project$Markdown$InlineParser$regMatchToLinkImageOpenToken, _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$linkImageOpenTokenRegex, str));
    var $author$project$Markdown$InlineParser$underlineEmphasisTokenRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)([^_])?(\\_+)([^_])?"));
    var $author$project$Markdown$InlineParser$findUnderlineEmphasisTokens = (str) => $elm$core$List$filterMap_raw(A2($author$project$Markdown$InlineParser$regMatchToEmphasisToken, "_", str), _Regex_findAtMost_raw($elm$regex$Regex$find_a0, $author$project$Markdown$InlineParser$underlineEmphasisTokenRegex, str));
    var $author$project$Markdown$InlineParser$mergeByIndex_raw = function (left, right) {
        if (left.b) {
            var lfirst = left.a;
            var lrest = left.b;
            if (right.b) {
                var rfirst = right.a;
                var rrest = right.b;
                return (_Utils_cmp(lfirst.c, rfirst.c) < 0) ? _List_Cons(lfirst, $author$project$Markdown$InlineParser$mergeByIndex_raw(lrest, right)) : _List_Cons(rfirst, $author$project$Markdown$InlineParser$mergeByIndex_raw(left, rrest));
            }
            else {
                return left;
            }
        }
        else {
            return right;
        }
    }, $author$project$Markdown$InlineParser$mergeByIndex = F2($author$project$Markdown$InlineParser$mergeByIndex_raw);
    var $author$project$Markdown$InlineParser$tokenize = (rawText) => $author$project$Markdown$InlineParser$mergeByIndex_raw($author$project$Markdown$InlineParser$findAngleBracketRTokens(rawText), $author$project$Markdown$InlineParser$mergeByIndex_raw($author$project$Markdown$InlineParser$findAngleBracketLTokens(rawText), $author$project$Markdown$InlineParser$mergeByIndex_raw($author$project$Markdown$InlineParser$findHardBreakTokens(rawText), $author$project$Markdown$InlineParser$mergeByIndex_raw($author$project$Markdown$InlineParser$findLinkImageCloseTokens(rawText), $author$project$Markdown$InlineParser$mergeByIndex_raw($author$project$Markdown$InlineParser$findLinkImageOpenTokens(rawText), $author$project$Markdown$InlineParser$mergeByIndex_raw($author$project$Markdown$InlineParser$findUnderlineEmphasisTokens(rawText), $author$project$Markdown$InlineParser$mergeByIndex_raw($author$project$Markdown$InlineParser$findAsteriskEmphasisTokens(rawText), $author$project$Markdown$InlineParser$findCodeTokens(rawText))))))));
    var $author$project$Markdown$InlineParser$CodeType = { $: 2 };
    var $author$project$Markdown$InlineParser$EmphasisType = (a) => ({ $: 7, a: a });
    var $author$project$Markdown$InlineParser$HtmlType = (a) => ({ $: 6, a: a });
    var $author$project$Markdown$InlineParser$ImageType = (a) => ({ $: 5, a: a });
    var $author$project$Markdown$InlineParser$Inactive = 1;
    var $author$project$Markdown$InlineParser$LinkType = (a) => ({ $: 4, a: a });
    var $author$project$Markdown$InlineParser$AutolinkType = (a) => ({ $: 3, a: a });
    var $elm$regex$Regex$contains = _Regex_contains;
    var $author$project$Markdown$InlineParser$decodeUrlRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)"));
    var $elm$url$Url$percentDecode = _Url_percentDecode;
    var $elm$url$Url$percentEncode = _Url_percentEncode;
    var $author$project$Markdown$InlineParser$encodeUrl_a0 = $elm$url$Url$percentEncode, $author$project$Markdown$InlineParser$encodeUrl_a1 = A2($elm$regex$Regex$replace, $author$project$Markdown$InlineParser$decodeUrlRegex, (match) => $elm$core$Maybe$withDefault_raw(match.aG, $elm$url$Url$percentDecode(match.aG))), $author$project$Markdown$InlineParser$encodeUrl = A2($elm$core$Basics$composeR, $author$project$Markdown$InlineParser$encodeUrl_a0, $author$project$Markdown$InlineParser$encodeUrl_a1);
    var $author$project$Markdown$InlineParser$urlRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("^([A-Za-z][A-Za-z0-9.+\\-]{1,31}:[^<>\\x00-\\x20]*)$"));
    var $author$project$Markdown$InlineParser$autolinkToMatch = function (_v0) {
        var match = _v0;
        return _Regex_contains_raw($author$project$Markdown$InlineParser$urlRegex, match.t) ? $elm$core$Result$Ok(_Utils_update(match, {
            u: $author$project$Markdown$InlineParser$AutolinkType(_Utils_Tuple2(match.t, $elm$core$Basics$composeR_raw($author$project$Markdown$InlineParser$encodeUrl_a0, $author$project$Markdown$InlineParser$encodeUrl_a1, match.t)))
        })) : $elm$core$Result$Err(match);
    };
    var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
    var $author$project$Markdown$Helpers$insideSquareBracketRegex = "[^\\[\\]\\\\]*(?:\\\\.[^\\[\\]\\\\]*)*";
    var $author$project$Markdown$InlineParser$refLabelRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("^\\[\\s*(" + ($author$project$Markdown$Helpers$insideSquareBracketRegex + ")\\s*\\]")));
    var $author$project$Markdown$Helpers$cleanWhitespaces = (original) => original;
    var $author$project$Markdown$Helpers$prepareRefLabel_a0 = $author$project$Markdown$Helpers$cleanWhitespaces, $author$project$Markdown$Helpers$prepareRefLabel_a1 = $elm$core$String$toLower, $author$project$Markdown$Helpers$prepareRefLabel = A2($elm$core$Basics$composeR, $author$project$Markdown$Helpers$prepareRefLabel_a0, $author$project$Markdown$Helpers$prepareRefLabel_a1);
    var $author$project$Markdown$InlineParser$prepareUrlAndTitle_raw = (rawUrl, maybeTitle) => _Utils_Tuple2($elm$core$Basics$composeR_raw($author$project$Markdown$InlineParser$encodeUrl_a0, $author$project$Markdown$InlineParser$encodeUrl_a1, $author$project$Markdown$Helpers$formatStr(rawUrl)), $elm$core$Maybe$map_raw($author$project$Markdown$Helpers$formatStr, maybeTitle)), $author$project$Markdown$InlineParser$prepareUrlAndTitle = F2($author$project$Markdown$InlineParser$prepareUrlAndTitle_raw);
    var $author$project$Markdown$InlineParser$refRegexToMatch_raw = function (matchModel, references, maybeRegexMatch) {
        var refLabel = ((str) => $elm$core$String$isEmpty(str) ? matchModel.t : str)($elm$core$Maybe$withDefault_raw(matchModel.t, $elm$core$Maybe$withDefault_raw($elm$core$Maybe$Nothing, $elm$core$Maybe$andThen_raw(A2($elm$core$Basics$composeR, ($) => $.be, $elm$core$List$head), maybeRegexMatch))));
        var _v0 = $elm$core$Dict$get_raw($elm$core$Basics$composeR_raw($author$project$Markdown$Helpers$prepareRefLabel_a0, $author$project$Markdown$Helpers$prepareRefLabel_a1, refLabel), references);
        if (_v0.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v1 = _v0.a;
            var rawUrl = _v1.a;
            var maybeTitle = _v1.b;
            var type_ = function () {
                var _v3 = matchModel.u;
                if (_v3.$ === 5) {
                    return $author$project$Markdown$InlineParser$ImageType($author$project$Markdown$InlineParser$prepareUrlAndTitle_raw(rawUrl, maybeTitle));
                }
                else {
                    return $author$project$Markdown$InlineParser$LinkType($author$project$Markdown$InlineParser$prepareUrlAndTitle_raw(rawUrl, maybeTitle));
                }
            }();
            var regexMatchLength = function () {
                if (!maybeRegexMatch.$) {
                    var match = maybeRegexMatch.a.aG;
                    return $elm$core$String$length(match);
                }
                else {
                    return 0;
                }
            }();
            return $elm$core$Maybe$Just(_Utils_update(matchModel, { o: matchModel.o + regexMatchLength, u: type_ }));
        }
    }, $author$project$Markdown$InlineParser$refRegexToMatch = F3($author$project$Markdown$InlineParser$refRegexToMatch_raw);
    var $author$project$Markdown$InlineParser$checkForInlineReferences_raw = function (remainText, _v0, references) {
        var tempMatch = _v0;
        var matches = _Regex_findAtMost_raw(1, $author$project$Markdown$InlineParser$refLabelRegex, remainText);
        return $author$project$Markdown$InlineParser$refRegexToMatch_raw(tempMatch, references, $elm$core$List$head(matches));
    }, $author$project$Markdown$InlineParser$checkForInlineReferences = F3($author$project$Markdown$InlineParser$checkForInlineReferences_raw);
    var $author$project$Markdown$Helpers$lineEndChars = "\\f\\v\\r\\n";
    var $author$project$Markdown$Helpers$whiteSpaceChars = " \\t\\f\\v\\r\\n";
    var $author$project$Markdown$InlineParser$hrefRegex = "(?:<([^<>" + ($author$project$Markdown$Helpers$lineEndChars + ("]*)>|([^" + ($author$project$Markdown$Helpers$whiteSpaceChars + ("\\(\\)\\\\]*(?:\\\\.[^" + ($author$project$Markdown$Helpers$whiteSpaceChars + "\\(\\)\\\\]*)*))")))));
    var $author$project$Markdown$Helpers$titleRegex = "(?:[" + ($author$project$Markdown$Helpers$whiteSpaceChars + ("]+" + ("(?:'([^'\\\\]*(?:\\\\.[^'\\\\]*)*)'|" + ("\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|" + "\\(([^\\)\\\\]*(?:\\\\.[^\\)\\\\]*)*)\\)))?"))));
    var $author$project$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("^\\(\\s*" + ($author$project$Markdown$InlineParser$hrefRegex + ($author$project$Markdown$Helpers$titleRegex + "\\s*\\)"))));
    var $author$project$Markdown$Helpers$returnFirstJust = function (maybes) {
        var process_raw = function (a, maybeFound) {
            if (!maybeFound.$) {
                var found = maybeFound.a;
                return $elm$core$Maybe$Just(found);
            }
            else {
                return a;
            }
        }, process = F2(process_raw);
        return $elm$core$List$foldl_raw(process, $elm$core$Maybe$Nothing, maybes);
    };
    var $author$project$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch_raw = function (matchModel, regexMatch) {
        var _v0 = regexMatch.be;
        if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) {
            var maybeRawUrlAngleBrackets = _v0.a;
            var _v1 = _v0.b;
            var maybeRawUrlWithoutBrackets = _v1.a;
            var _v2 = _v1.b;
            var maybeTitleSingleQuotes = _v2.a;
            var _v3 = _v2.b;
            var maybeTitleDoubleQuotes = _v3.a;
            var _v4 = _v3.b;
            var maybeTitleParenthesis = _v4.a;
            var maybeTitle = $author$project$Markdown$Helpers$returnFirstJust({ $: 1, a: maybeTitleSingleQuotes, b: { $: 1, a: maybeTitleDoubleQuotes, b: { $: 1, a: maybeTitleParenthesis, b: _List_Nil } } });
            var toMatch = (rawUrl) => _Utils_update(matchModel, {
                o: matchModel.o + $elm$core$String$length(regexMatch.aG),
                u: function () {
                    var _v5 = matchModel.u;
                    if (_v5.$ === 5) {
                        return $author$project$Markdown$InlineParser$ImageType;
                    }
                    else {
                        return $author$project$Markdown$InlineParser$LinkType;
                    }
                }()($author$project$Markdown$InlineParser$prepareUrlAndTitle_raw(rawUrl, maybeTitle))
            });
            var maybeRawUrl = $author$project$Markdown$Helpers$returnFirstJust({ $: 1, a: maybeRawUrlAngleBrackets, b: { $: 1, a: maybeRawUrlWithoutBrackets, b: _List_Nil } });
            return $elm$core$Maybe$Just(toMatch($elm$core$Maybe$withDefault_raw("", maybeRawUrl)));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $author$project$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch = F2($author$project$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch_raw);
    var $author$project$Markdown$InlineParser$checkForInlineLinkTypeOrImageType_raw = function (remainText, _v0, refs) {
        var tempMatch = _v0;
        var _v1 = _Regex_findAtMost_raw(1, $author$project$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex, remainText);
        if (_v1.b) {
            var first = _v1.a;
            var _v2 = $author$project$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch_raw(tempMatch, first);
            if (!_v2.$) {
                var match = _v2.a;
                return $elm$core$Maybe$Just(match);
            }
            else {
                return $author$project$Markdown$InlineParser$checkForInlineReferences_raw(remainText, tempMatch, refs);
            }
        }
        else {
            return $author$project$Markdown$InlineParser$checkForInlineReferences_raw(remainText, tempMatch, refs);
        }
    }, $author$project$Markdown$InlineParser$checkForInlineLinkTypeOrImageType = F3($author$project$Markdown$InlineParser$checkForInlineLinkTypeOrImageType_raw);
    var $elm$core$List$isEmpty = function (xs) {
        if (!xs.b) {
            return true;
        }
        else {
            return false;
        }
    };
    var $author$project$Markdown$InlineParser$checkParsedAheadOverlapping_raw = function (_v0, remainMatches) {
        var match = _v0;
        var overlappingMatches = $elm$core$List$filter(function (_v1) {
            var testMatch = _v1;
            return (_Utils_cmp(match.o, testMatch.s) > 0) && (_Utils_cmp(match.o, testMatch.o) < 0);
        });
        return ($elm$core$List$isEmpty(remainMatches) || $elm$core$List$isEmpty(overlappingMatches(remainMatches))) ? $elm$core$Maybe$Just(_List_Cons(match, remainMatches)) : $elm$core$Maybe$Nothing;
    }, $author$project$Markdown$InlineParser$checkParsedAheadOverlapping = F2($author$project$Markdown$InlineParser$checkParsedAheadOverlapping_raw);
    var $author$project$Markdown$InlineParser$emailRegex = $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("^([a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)$"));
    var $author$project$Markdown$InlineParser$emailAutolinkTypeToMatch = function (_v0) {
        var match = _v0;
        return _Regex_contains_raw($author$project$Markdown$InlineParser$emailRegex, match.t) ? $elm$core$Result$Ok(_Utils_update(match, {
            u: $author$project$Markdown$InlineParser$AutolinkType(_Utils_Tuple2(match.t, "mailto:" + $elm$core$Basics$composeR_raw($author$project$Markdown$InlineParser$encodeUrl_a0, $author$project$Markdown$InlineParser$encodeUrl_a1, match.t)))
        })) : $elm$core$Result$Err(match);
    };
    var $author$project$Markdown$InlineParser$findTokenHelp_raw = function (innerTokens, isToken, tokens) {
        findTokenHelp: while (true) {
            if (!tokens.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var nextToken = tokens.a;
                var remainingTokens = tokens.b;
                if (isToken(nextToken)) {
                    return $elm$core$Maybe$Just(_Utils_Tuple3(nextToken, $elm$core$List$reverse(innerTokens), remainingTokens));
                }
                else {
                    var $temp$innerTokens = _List_Cons(nextToken, innerTokens), $temp$isToken = isToken, $temp$tokens = remainingTokens;
                    innerTokens = $temp$innerTokens;
                    isToken = $temp$isToken;
                    tokens = $temp$tokens;
                    continue findTokenHelp;
                }
            }
        }
    }, $author$project$Markdown$InlineParser$findTokenHelp = F3($author$project$Markdown$InlineParser$findTokenHelp_raw);
    var $author$project$Markdown$InlineParser$findToken_raw = (isToken, tokens) => $author$project$Markdown$InlineParser$findTokenHelp_raw(_List_Nil, isToken, tokens), $author$project$Markdown$InlineParser$findToken = F2($author$project$Markdown$InlineParser$findToken_raw);
    var $author$project$Markdown$InlineParser$HtmlToken_raw = (a, b) => ({ $: 6, a: a, b: b }), $author$project$Markdown$InlineParser$HtmlToken = F2($author$project$Markdown$InlineParser$HtmlToken_raw);
    var $author$project$Markdown$InlineParser$NotOpening = 1;
    var $elm$parser$Parser$Advanced$getOffset = (s) => $elm$parser$Parser$Advanced$Good_raw(false, s.h, s);
    var $elm$parser$Parser$Advanced$bagToList_raw = function (bag, list) {
        bagToList: while (true) {
            switch (bag.$) {
                case 0:
                    return list;
                case 1:
                    var bag1 = bag.a;
                    var x = bag.b;
                    var $temp$bag = bag1, $temp$list = _List_Cons(x, list);
                    bag = $temp$bag;
                    list = $temp$list;
                    continue bagToList;
                default:
                    var bag1 = bag.a;
                    var bag2 = bag.b;
                    var $temp$bag = bag1, $temp$list = $elm$parser$Parser$Advanced$bagToList_raw(bag2, list);
                    bag = $temp$bag;
                    list = $temp$list;
                    continue bagToList;
            }
        }
    }, $elm$parser$Parser$Advanced$bagToList = F2($elm$parser$Parser$Advanced$bagToList_raw);
    var $elm$parser$Parser$Advanced$run_raw = function (_v0, src) {
        var parse = _v0;
        var _v1 = parse({ bl: 1, l: _List_Nil, p: 1, h: 0, cE: 1, b: src });
        if (!_v1.$) {
            var value = _v1.b;
            return $elm$core$Result$Ok(value);
        }
        else {
            var bag = _v1.b;
            return $elm$core$Result$Err($elm$parser$Parser$Advanced$bagToList_raw(bag, _List_Nil));
        }
    }, $elm$parser$Parser$Advanced$run = F2($elm$parser$Parser$Advanced$run_raw);
    var $author$project$Markdown$InlineParser$htmlToToken_raw = function (rawText, _v0) {
        var match = _v0;
        var consumedCharacters = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$succeed(F3((startOffset, htmlTag, endOffset) => ({ bv: htmlTag, i: endOffset - startOffset }))), $elm$parser$Parser$Advanced$getOffset), $author$project$HtmlParser$html), $elm$parser$Parser$Advanced$getOffset);
        var parsed = $elm$parser$Parser$Advanced$run_raw(consumedCharacters, $elm$core$String$dropLeft_raw(match.s, rawText));
        if (!parsed.$) {
            var htmlTag = parsed.a.bv;
            var length = parsed.a.i;
            var htmlToken = $author$project$Markdown$InlineParser$HtmlToken_raw(1, htmlTag);
            return $elm$core$Maybe$Just({ c: match.s, i: length, n: htmlToken });
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $author$project$Markdown$InlineParser$htmlToToken = F2($author$project$Markdown$InlineParser$htmlToToken_raw);
    var $author$project$Markdown$Helpers$ifError_raw = function (_function, result) {
        if (!result.$) {
            return result;
        }
        else {
            var err = result.a;
            return _function(err);
        }
    }, $author$project$Markdown$Helpers$ifError = F2($author$project$Markdown$Helpers$ifError_raw);
    var $author$project$Markdown$InlineParser$isCloseToken_raw = (htmlModel, token) => false, $author$project$Markdown$InlineParser$isCloseToken = F2($author$project$Markdown$InlineParser$isCloseToken_raw);
    var $author$project$Markdown$InlineParser$isCodeTokenPair_raw = function (closeToken, openToken) {
        var _v0 = openToken.n;
        if (!_v0.$) {
            if (!_v0.a) {
                var _v1 = _v0.a;
                return _Utils_eq(openToken.i - 1, closeToken.i);
            }
            else {
                var _v2 = _v0.a;
                return _Utils_eq(openToken.i, closeToken.i);
            }
        }
        else {
            return false;
        }
    }, $author$project$Markdown$InlineParser$isCodeTokenPair = F2($author$project$Markdown$InlineParser$isCodeTokenPair_raw);
    var $author$project$Markdown$InlineParser$isLinkTypeOrImageOpenToken = function (token) {
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
    var $author$project$Markdown$InlineParser$isOpenEmphasisToken_raw = function (closeToken, openToken) {
        var _v0 = openToken.n;
        if (_v0.$ === 7) {
            var openChar = _v0.a;
            var open = _v0.b;
            var _v1 = closeToken.n;
            if (_v1.$ === 7) {
                var closeChar = _v1.a;
                var close = _v1.b;
                return _Utils_eq(openChar, closeChar) ? ((_Utils_eq(open.aU, open.a_) || _Utils_eq(close.aU, close.a_)) ? (!(!_Basics_modBy_raw(3, closeToken.i + openToken.i))) : true) : false;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }, $author$project$Markdown$InlineParser$isOpenEmphasisToken = F2($author$project$Markdown$InlineParser$isOpenEmphasisToken_raw);
    var $author$project$Markdown$InlineParser$HardLineBreakType = { $: 1 };
    var $author$project$Markdown$InlineParser$tokenToMatch_raw = (token, type_) => ({ o: token.c + token.i, A: _List_Nil, s: token.c, t: "", I: 0, z: 0, u: type_ }), $author$project$Markdown$InlineParser$tokenToMatch = F2($author$project$Markdown$InlineParser$tokenToMatch_raw);
    var $author$project$Markdown$InlineParser$lineBreakTTM_raw = function (remaining, tokens, matches, refs, rawText) {
        lineBreakTTM: while (true) {
            if (!remaining.b) {
                return matches;
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v1 = token.n;
                if (_v1.$ === 9) {
                    var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = _List_Cons($author$project$Markdown$InlineParser$tokenToMatch_raw(token, $author$project$Markdown$InlineParser$HardLineBreakType), matches), $temp$refs = refs, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    refs = $temp$refs;
                    rawText = $temp$rawText;
                    continue lineBreakTTM;
                }
                else {
                    var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$refs = refs, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    refs = $temp$refs;
                    rawText = $temp$rawText;
                    continue lineBreakTTM;
                }
            }
        }
    }, $author$project$Markdown$InlineParser$lineBreakTTM = F5($author$project$Markdown$InlineParser$lineBreakTTM_raw);
    var $author$project$Markdown$InlineParser$removeParsedAheadTokens_raw = function (_v0, tokensTail) {
        var match = _v0;
        return $elm$core$List$filter_raw((token) => _Utils_cmp(token.c, match.o) > -1, tokensTail);
    }, $author$project$Markdown$InlineParser$removeParsedAheadTokens = F2($author$project$Markdown$InlineParser$removeParsedAheadTokens_raw);
    var $author$project$Markdown$InlineParser$angleBracketsToMatch_raw = function (closeToken, escaped, matches, references, rawText, _v39) {
        var openToken = _v39.a;
        var remainTokens = _v39.c;
        var result = $author$project$Markdown$Helpers$ifError_raw($author$project$Markdown$InlineParser$emailAutolinkTypeToMatch, $author$project$Markdown$InlineParser$autolinkToMatch($author$project$Markdown$InlineParser$tokenPairToMatch_raw(references, rawText, (s) => s, $author$project$Markdown$InlineParser$CodeType, openToken, closeToken, _List_Nil)));
        if (result.$ === 1) {
            var tempMatch = result.a;
            if (escaped === 1) {
                var _v42 = $author$project$Markdown$InlineParser$htmlToToken_raw(rawText, tempMatch);
                if (!_v42.$) {
                    var newToken = _v42.a;
                    return $elm$core$Maybe$Just(_Utils_Tuple2(_List_Cons(newToken, remainTokens), matches));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
            else {
                return $elm$core$Maybe$Nothing;
            }
        }
        else {
            var newMatch = result.a;
            return $elm$core$Maybe$Just(_Utils_Tuple2(remainTokens, _List_Cons(newMatch, matches)));
        }
    }, $author$project$Markdown$InlineParser$angleBracketsToMatch = F6($author$project$Markdown$InlineParser$angleBracketsToMatch_raw);
    var $author$project$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM_raw = function (remaining, tokens, matches, references, rawText) {
        codeAutolinkTypeHtmlTagTTM: while (true) {
            if (!remaining.b) {
                return $author$project$Markdown$InlineParser$htmlElementTTM_raw($elm$core$List$reverse(tokens), _List_Nil, matches, references, rawText);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v31 = token.n;
                switch (_v31.$) {
                    case 0:
                        var isEscaped = _v31.a;
                        var _v32 = $author$project$Markdown$InlineParser$findToken_raw($author$project$Markdown$InlineParser$isCodeTokenPair(token), tokens);
                        if (!_v32.$) {
                            var code = _v32.a;
                            var _v33 = $author$project$Markdown$InlineParser$codeToMatch_raw(token, matches, references, rawText, code);
                            var newTokens = _v33.a;
                            var newMatches = _v33.b;
                            var $temp$remaining = tokensTail, $temp$tokens = newTokens, $temp$matches = newMatches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue codeAutolinkTypeHtmlTagTTM;
                        }
                        else {
                            var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
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
                            }
                            else {
                                return false;
                            }
                        };
                        var _v34 = $author$project$Markdown$InlineParser$findToken_raw(isAngleBracketOpen, tokens);
                        if (!_v34.$) {
                            var found = _v34.a;
                            var _v35 = $author$project$Markdown$InlineParser$angleBracketsToMatch_raw(token, isEscaped, matches, references, rawText, found);
                            if (!_v35.$) {
                                var _v36 = _v35.a;
                                var newTokens = _v36.a;
                                var newMatches = _v36.b;
                                var $temp$remaining = tokensTail, $temp$tokens = $elm$core$List$filter_raw(A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen), newTokens), $temp$matches = newMatches, $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue codeAutolinkTypeHtmlTagTTM;
                            }
                            else {
                                var $temp$remaining = tokensTail, $temp$tokens = $elm$core$List$filter_raw(A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen), tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue codeAutolinkTypeHtmlTagTTM;
                            }
                        }
                        else {
                            var $temp$remaining = tokensTail, $temp$tokens = $elm$core$List$filter_raw(A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen), tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue codeAutolinkTypeHtmlTagTTM;
                        }
                    default:
                        var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                        remaining = $temp$remaining;
                        tokens = $temp$tokens;
                        matches = $temp$matches;
                        references = $temp$references;
                        rawText = $temp$rawText;
                        continue codeAutolinkTypeHtmlTagTTM;
                }
            }
        }
    }, $author$project$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM = F5($author$project$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM_raw);
    var $author$project$Markdown$InlineParser$codeToMatch_raw = function (closeToken, matches, references, rawText, _v27) {
        var openToken = _v27.a;
        var remainTokens = _v27.c;
        var updatedOpenToken = function () {
            var _v28 = openToken.n;
            if ((!_v28.$) && (!_v28.a)) {
                var _v29 = _v28.a;
                return _Utils_update(openToken, { c: openToken.c + 1, i: openToken.i - 1 });
            }
            else {
                return openToken;
            }
        }();
        var match = $author$project$Markdown$InlineParser$tokenPairToMatch_raw(references, rawText, $author$project$Markdown$Helpers$cleanWhitespaces, $author$project$Markdown$InlineParser$CodeType, updatedOpenToken, closeToken, _List_Nil);
        return _Utils_Tuple2(remainTokens, _List_Cons(match, matches));
    }, $author$project$Markdown$InlineParser$codeToMatch = F5($author$project$Markdown$InlineParser$codeToMatch_raw);
    var $author$project$Markdown$InlineParser$emphasisTTM_raw = function (remaining, tokens, matches, references, rawText) {
        emphasisTTM: while (true) {
            if (!remaining.b) {
                return $author$project$Markdown$InlineParser$lineBreakTTM_raw($elm$core$List$reverse(tokens), _List_Nil, matches, references, rawText);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v22 = token.n;
                if (_v22.$ === 7) {
                    var _char = _v22.a;
                    var leftFringeRank = _v22.b.aU;
                    var rightFringeRank = _v22.b.a_;
                    if (_Utils_eq(leftFringeRank, rightFringeRank)) {
                        if ((!(!rightFringeRank)) && ((_char !== "_") || (rightFringeRank === 1))) {
                            var _v23 = $author$project$Markdown$InlineParser$findToken_raw($author$project$Markdown$InlineParser$isOpenEmphasisToken(token), tokens);
                            if (!_v23.$) {
                                var found = _v23.a;
                                var _v24 = $author$project$Markdown$InlineParser$emphasisToMatch_raw(references, rawText, token, tokensTail, found);
                                var newRemaining = _v24.a;
                                var match = _v24.b;
                                var newTokens = _v24.c;
                                var $temp$remaining = newRemaining, $temp$tokens = newTokens, $temp$matches = _List_Cons(match, matches), $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue emphasisTTM;
                            }
                            else {
                                var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue emphasisTTM;
                            }
                        }
                        else {
                            var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue emphasisTTM;
                        }
                    }
                    else {
                        if (_Utils_cmp(leftFringeRank, rightFringeRank) < 0) {
                            var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue emphasisTTM;
                        }
                        else {
                            var _v25 = $author$project$Markdown$InlineParser$findToken_raw($author$project$Markdown$InlineParser$isOpenEmphasisToken(token), tokens);
                            if (!_v25.$) {
                                var found = _v25.a;
                                var _v26 = $author$project$Markdown$InlineParser$emphasisToMatch_raw(references, rawText, token, tokensTail, found);
                                var newRemaining = _v26.a;
                                var match = _v26.b;
                                var newTokens = _v26.c;
                                var $temp$remaining = newRemaining, $temp$tokens = newTokens, $temp$matches = _List_Cons(match, matches), $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue emphasisTTM;
                            }
                            else {
                                var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue emphasisTTM;
                            }
                        }
                    }
                }
                else {
                    var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    references = $temp$references;
                    rawText = $temp$rawText;
                    continue emphasisTTM;
                }
            }
        }
    }, $author$project$Markdown$InlineParser$emphasisTTM = F5($author$project$Markdown$InlineParser$emphasisTTM_raw);
    var $author$project$Markdown$InlineParser$emphasisToMatch_raw = function (references, rawText, closeToken, tokensTail, _v20) {
        var openToken = _v20.a;
        var innerTokens = _v20.b;
        var remainTokens = _v20.c;
        var remainLength = openToken.i - closeToken.i;
        var updt = (!remainLength) ? { aR: closeToken, aH: openToken, aZ: remainTokens, a2: tokensTail } : ((remainLength > 0) ? {
            aR: closeToken,
            aH: _Utils_update(openToken, { c: openToken.c + remainLength, i: closeToken.i }),
            aZ: _List_Cons(_Utils_update(openToken, { i: remainLength }), remainTokens),
            a2: tokensTail
        } : {
            aR: _Utils_update(closeToken, { i: openToken.i }),
            aH: openToken,
            aZ: remainTokens,
            a2: _List_Cons(_Utils_update(closeToken, { c: closeToken.c + openToken.i, i: -remainLength }), tokensTail)
        });
        var match = $author$project$Markdown$InlineParser$tokenPairToMatch_raw(references, rawText, (s) => s, $author$project$Markdown$InlineParser$EmphasisType(updt.aH.i), updt.aH, updt.aR, $elm$core$List$reverse(innerTokens));
        return _Utils_Tuple3(updt.a2, match, updt.aZ);
    }, $author$project$Markdown$InlineParser$emphasisToMatch = F5($author$project$Markdown$InlineParser$emphasisToMatch_raw);
    var $author$project$Markdown$InlineParser$htmlElementTTM_raw = function (remaining, tokens, matches, references, rawText) {
        htmlElementTTM: while (true) {
            if (!remaining.b) {
                return $author$project$Markdown$InlineParser$linkImageTypeTTM_raw($elm$core$List$reverse(tokens), _List_Nil, matches, references, rawText);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v16 = token.n;
                if (_v16.$ === 6) {
                    var isOpen = _v16.a;
                    var htmlModel = _v16.b;
                    if (isOpen === 1) {
                        var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = _List_Cons($author$project$Markdown$InlineParser$tokenToMatch_raw(token, $author$project$Markdown$InlineParser$HtmlType(htmlModel)), matches), $temp$references = references, $temp$rawText = rawText;
                        remaining = $temp$remaining;
                        tokens = $temp$tokens;
                        matches = $temp$matches;
                        references = $temp$references;
                        rawText = $temp$rawText;
                        continue htmlElementTTM;
                    }
                    else {
                        var _v18 = $author$project$Markdown$InlineParser$findToken_raw($author$project$Markdown$InlineParser$isCloseToken(htmlModel), tokensTail);
                        if (_v18.$ === 1) {
                            var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = _List_Cons($author$project$Markdown$InlineParser$tokenToMatch_raw(token, $author$project$Markdown$InlineParser$HtmlType(htmlModel)), matches), $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue htmlElementTTM;
                        }
                        else {
                            var _v19 = _v18.a;
                            var closeToken = _v19.a;
                            var innerTokens = _v19.b;
                            var newTail = _v19.c;
                            var newMatch = $author$project$Markdown$InlineParser$tokenPairToMatch_raw(references, rawText, (s) => s, $author$project$Markdown$InlineParser$HtmlType(htmlModel), token, closeToken, innerTokens);
                            var $temp$remaining = newTail, $temp$tokens = tokens, $temp$matches = _List_Cons(newMatch, matches), $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue htmlElementTTM;
                        }
                    }
                }
                else {
                    var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    references = $temp$references;
                    rawText = $temp$rawText;
                    continue htmlElementTTM;
                }
            }
        }
    }, $author$project$Markdown$InlineParser$htmlElementTTM = F5($author$project$Markdown$InlineParser$htmlElementTTM_raw);
    var $author$project$Markdown$InlineParser$linkImageTypeTTM_raw = function (remaining, tokens, matches, references, rawText) {
        linkImageTypeTTM: while (true) {
            if (!remaining.b) {
                return $author$project$Markdown$InlineParser$emphasisTTM_raw($elm$core$List$reverse(tokens), _List_Nil, matches, references, rawText);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v11 = token.n;
                if (_v11.$ === 3) {
                    var _v12 = $author$project$Markdown$InlineParser$findToken_raw($author$project$Markdown$InlineParser$isLinkTypeOrImageOpenToken, tokens);
                    if (!_v12.$) {
                        var found = _v12.a;
                        var _v13 = $author$project$Markdown$InlineParser$linkOrImageTypeToMatch_raw(token, tokensTail, matches, references, rawText, found);
                        if (!_v13.$) {
                            var _v14 = _v13.a;
                            var x = _v14.a;
                            var newMatches = _v14.b;
                            var newTokens = _v14.c;
                            var $temp$remaining = x, $temp$tokens = newTokens, $temp$matches = newMatches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue linkImageTypeTTM;
                        }
                        else {
                            var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue linkImageTypeTTM;
                        }
                    }
                    else {
                        var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                        remaining = $temp$remaining;
                        tokens = $temp$tokens;
                        matches = $temp$matches;
                        references = $temp$references;
                        rawText = $temp$rawText;
                        continue linkImageTypeTTM;
                    }
                }
                else {
                    var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    references = $temp$references;
                    rawText = $temp$rawText;
                    continue linkImageTypeTTM;
                }
            }
        }
    }, $author$project$Markdown$InlineParser$linkImageTypeTTM = F5($author$project$Markdown$InlineParser$linkImageTypeTTM_raw);
    var $author$project$Markdown$InlineParser$linkOrImageTypeToMatch_raw = function (closeToken, tokensTail, oldMatches, references, rawText, _v1) {
        var openToken = _v1.a;
        var innerTokens = _v1.b;
        var remainTokens = _v1.c;
        var removeOpenToken = _Utils_Tuple3(tokensTail, oldMatches, _Utils_ap(innerTokens, remainTokens));
        var remainText = $elm$core$String$dropLeft_raw(closeToken.c + 1, rawText);
        var inactivateLinkOpenToken = function (token) {
            var _v9 = token.n;
            if (_v9.$ === 1) {
                return _Utils_update(token, {
                    n: $author$project$Markdown$InlineParser$LinkOpenToken(1)
                });
            }
            else {
                return token;
            }
        };
        var findTempMatch = (isLinkType) => $author$project$Markdown$InlineParser$tokenPairToMatch_raw(references, rawText, (s) => s, isLinkType ? $author$project$Markdown$InlineParser$LinkType(_Utils_Tuple2("", $elm$core$Maybe$Nothing)) : $author$project$Markdown$InlineParser$ImageType(_Utils_Tuple2("", $elm$core$Maybe$Nothing)), openToken, closeToken, $elm$core$List$reverse(innerTokens));
        var _v2 = openToken.n;
        switch (_v2.$) {
            case 2:
                var tempMatch = findTempMatch(false);
                var _v3 = $author$project$Markdown$InlineParser$checkForInlineLinkTypeOrImageType_raw(remainText, tempMatch, references);
                if (_v3.$ === 1) {
                    return $elm$core$Maybe$Just(removeOpenToken);
                }
                else {
                    var match = _v3.a;
                    var _v4 = $author$project$Markdown$InlineParser$checkParsedAheadOverlapping_raw(match, oldMatches);
                    if (!_v4.$) {
                        var matches = _v4.a;
                        return $elm$core$Maybe$Just(_Utils_Tuple3($author$project$Markdown$InlineParser$removeParsedAheadTokens_raw(match, tokensTail), matches, remainTokens));
                    }
                    else {
                        return $elm$core$Maybe$Just(removeOpenToken);
                    }
                }
            case 1:
                if (!_v2.a) {
                    var _v5 = _v2.a;
                    var tempMatch = findTempMatch(true);
                    var _v6 = $author$project$Markdown$InlineParser$checkForInlineLinkTypeOrImageType_raw(remainText, tempMatch, references);
                    if (_v6.$ === 1) {
                        return $elm$core$Maybe$Just(removeOpenToken);
                    }
                    else {
                        var match = _v6.a;
                        var _v7 = $author$project$Markdown$InlineParser$checkParsedAheadOverlapping_raw(match, oldMatches);
                        if (!_v7.$) {
                            var matches = _v7.a;
                            return $elm$core$Maybe$Just(_Utils_Tuple3($author$project$Markdown$InlineParser$removeParsedAheadTokens_raw(match, tokensTail), matches, $elm$core$List$map_raw(inactivateLinkOpenToken, remainTokens)));
                        }
                        else {
                            return $elm$core$Maybe$Just(removeOpenToken);
                        }
                    }
                }
                else {
                    var _v8 = _v2.a;
                    return $elm$core$Maybe$Just(removeOpenToken);
                }
            default:
                return $elm$core$Maybe$Nothing;
        }
    }, $author$project$Markdown$InlineParser$linkOrImageTypeToMatch = F6($author$project$Markdown$InlineParser$linkOrImageTypeToMatch_raw);
    var $author$project$Markdown$InlineParser$tokenPairToMatch_raw = function (references, rawText, processText, type_, openToken, closeToken, innerTokens) {
        var textStart = openToken.c + openToken.i;
        var textEnd = closeToken.c;
        var text = processText(_String_slice_raw(textStart, textEnd, rawText));
        var start = openToken.c;
        var end = closeToken.c + closeToken.i;
        var match = { o: end, A: _List_Nil, s: start, t: text, I: textEnd, z: textStart, u: type_ };
        var matches = $elm$core$List$map_raw(function (_v0) {
            var matchModel = _v0;
            return $author$project$Markdown$InlineParser$prepareChildMatch_raw(match, matchModel);
        }, $author$project$Markdown$InlineParser$tokensToMatches_raw(innerTokens, _List_Nil, references, rawText));
        return { o: end, A: matches, s: start, t: text, I: textEnd, z: textStart, u: type_ };
    }, $author$project$Markdown$InlineParser$tokenPairToMatch = F7($author$project$Markdown$InlineParser$tokenPairToMatch_raw);
    var $author$project$Markdown$InlineParser$tokensToMatches_raw = (tokens, matches, references, rawText) => $author$project$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM_raw(tokens, _List_Nil, matches, references, rawText), $author$project$Markdown$InlineParser$tokensToMatches = F4($author$project$Markdown$InlineParser$tokensToMatches_raw);
    var $elm$core$String$trim = _String_trim;
    var $author$project$Markdown$InlineParser$parse_raw = function (refs, rawText_) {
        var rawText = $elm$core$String$trim(rawText_);
        var tokens = $author$project$Markdown$InlineParser$tokenize(rawText);
        return $author$project$Markdown$InlineParser$matchesToInlines($author$project$Markdown$InlineParser$parseTextMatches_raw(rawText, _List_Nil, $author$project$Markdown$InlineParser$organizeMatches($author$project$Markdown$InlineParser$tokensToMatches_raw(tokens, _List_Nil, refs, rawText))));
    }, $author$project$Markdown$InlineParser$parse = F2($author$project$Markdown$InlineParser$parse_raw);
    var $author$project$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw(" ", $elm$parser$Parser$Expecting(" "))), b: { $: 1, a: $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw(">", $elm$parser$Parser$Expecting(">"))), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompIf_raw($elm$core$Char$isAlpha, $elm$parser$Parser$Expecting("Alpha")), $elm$parser$Parser$Advanced$chompWhile((c) => $elm$core$Char$isAlphaNum(c) || (c === "-"))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                    $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw(":", $elm$parser$Parser$Expecting(":"))),
                    $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw("@", $elm$parser$Parser$Expecting("@"))),
                    $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw("\\", $elm$parser$Parser$Expecting("\\"))),
                    $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw("+", $elm$parser$Parser$Expecting("+"))),
                    $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw(".", $elm$parser$Parser$Expecting(".")))
                ]))), b: _List_Nil } } });
    var $author$project$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock = $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$mapChompedString_raw(F2((rawLine, _v0) => $author$project$Markdown$RawBlock$Body(rawLine)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw("<", $elm$parser$Parser$Expecting("<"))), $author$project$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag), $elm$parser$Parser$Advanced$chompUntilEndOr("\n")), $author$project$Helpers$endOfLineOrFile)));
    var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
    var $elm$parser$Parser$Advanced$fromInfo_raw = (row, col, x, context) => $elm$parser$Parser$Advanced$AddRight_raw($elm$parser$Parser$Advanced$Empty, $elm$parser$Parser$Advanced$DeadEnd_raw(row, col, x, context)), $elm$parser$Parser$Advanced$fromInfo = F4($elm$parser$Parser$Advanced$fromInfo_raw);
    var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        return function (s) {
            var _v1 = _Parser_findSubString_raw(str, s.h, s.cE, s.bl, s.b);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return _Utils_eq(newOffset, -1) ? $elm$parser$Parser$Advanced$Bad_raw(false, $elm$parser$Parser$Advanced$fromInfo_raw(newRow, newCol, expecting, s.l)) : $elm$parser$Parser$Advanced$Good_raw(_Utils_cmp(s.h, newOffset) < 0, 0, { bl: newCol, l: s.l, p: s.p, h: newOffset, cE: newRow, b: s.b });
        };
    };
    var $author$project$Markdown$CodeBlock$openingCodeFence = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$map_raw((delimiter) => _Utils_Tuple2("`", delimiter), $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("```", $elm$parser$Parser$ExpectingSymbol("```"))), $elm$parser$Parser$Advanced$chompWhile((c) => c === "`")))), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw((delimiter) => _Utils_Tuple2("~", delimiter), $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("~~~", $elm$parser$Parser$ExpectingSymbol("~~~"))), $elm$parser$Parser$Advanced$chompWhile((c) => c === "~")))), b: _List_Nil } });
    var $author$project$Markdown$CodeBlock$parserHelp = $elm$parser$Parser$Advanced$andThen_raw(function (_v0) {
        var _char = _v0.a;
        var delimiter = _v0.b;
        return $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$succeed(F2((language, body) => ({
            b6: body,
            bB: $elm$core$String$isEmpty(language) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(language)
        }))), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($elm$parser$Parser$Advanced$Token_raw("\n", $elm$parser$Parser$Problem("Expecting newline")))), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("\n", $elm$parser$Parser$ExpectingSymbol("\n"))))), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("\n" + delimiter)), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("\n" + delimiter, $elm$parser$Parser$ExpectingSymbol(delimiter)))), $elm$parser$Parser$Advanced$chompWhile((c) => _Utils_eq(c, _char))));
    }, $author$project$Markdown$CodeBlock$openingCodeFence);
    var $author$project$Markdown$CodeBlock$parser = $author$project$Markdown$CodeBlock$parserHelp;
    var $author$project$Parser$Token$greaterThan = $elm$parser$Parser$Advanced$Token_raw(">", $elm$parser$Parser$Expecting("a `>`"));
    var $elm$parser$Parser$Advanced$Located_raw = (row, col, context) => ({ bl: col, l: context, cE: row }), $elm$parser$Parser$Advanced$Located = F3($elm$parser$Parser$Advanced$Located_raw);
    var $elm$parser$Parser$Advanced$changeContext_raw = (newContext, s) => ({ bl: s.bl, l: newContext, p: s.p, h: s.h, cE: s.cE, b: s.b }), $elm$parser$Parser$Advanced$changeContext = F2($elm$parser$Parser$Advanced$changeContext_raw);
    var $elm$parser$Parser$Advanced$inContext_raw = function (context, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse($elm$parser$Parser$Advanced$changeContext_raw(_List_Cons($elm$parser$Parser$Advanced$Located_raw(s0.cE, s0.bl, context), s0.l), s0));
            if (!_v1.$) {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_raw(p, a, $elm$parser$Parser$Advanced$changeContext_raw(s0.l, s1));
            }
            else {
                var step = _v1;
                return step;
            }
        };
    }, $elm$parser$Parser$Advanced$inContext = F2($elm$parser$Parser$Advanced$inContext_raw);
    var $author$project$Helpers$isGfmWhitespace = function (_char) {
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
    var $author$project$Parser$Token$lessThan = $elm$parser$Parser$Advanced$Token_raw("<", $elm$parser$Parser$Expecting("a `<`"));
    var $author$project$Markdown$LinkReferenceDefinition$destinationParser = $elm$parser$Parser$Advanced$inContext_raw("link destination", $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$url$Url$percentEncode), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$lessThan)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($author$project$Parser$Token$greaterThan)), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$greaterThan))), b: { $: 1, a: $elm$parser$Parser$Advanced$getChompedString($author$project$Parser$Extra$oneOrMore((c) => !$author$project$Helpers$isGfmWhitespace(c))), b: _List_Nil } }));
    var $author$project$Parser$Token$closingSquareBracket = $elm$parser$Parser$Advanced$Token_raw("]", $elm$parser$Parser$Expecting("a `]`"));
    var $author$project$Parser$Token$openingSquareBracket = $elm$parser$Parser$Advanced$Token_raw("[", $elm$parser$Parser$Expecting("a `[`"));
    var $author$project$Markdown$LinkReferenceDefinition$labelParser = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Markdown$Helpers$prepareRefLabel), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$openingSquareBracket)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($author$project$Parser$Token$closingSquareBracket)), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("]:", $elm$parser$Parser$Expecting("]:")))));
    var $author$project$Parser$Token$doubleQuote = $elm$parser$Parser$Advanced$Token_raw("\"", $elm$parser$Parser$Expecting("a double quote"));
    var $author$project$Markdown$LinkReferenceDefinition$hasNoBlankLine = (str) => _String_contains_raw("\n\n", str) ? $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Expecting("no blank line")) : $elm$parser$Parser$Advanced$succeed(str);
    var $author$project$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline = $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompWhile((c) => (c !== "\n") && $author$project$Helpers$isGfmWhitespace(c)), $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$newline), b: { $: 1, a: $elm$parser$Parser$Advanced$end($elm$parser$Parser$Expecting("end of file")), b: _List_Nil } }));
    var $author$project$Helpers$requiredWhitespace = $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$chompIf_raw($author$project$Helpers$isGfmWhitespace, $elm$parser$Parser$Expecting("gfm whitespace")), $elm$parser$Parser$Advanced$chompWhile($author$project$Helpers$isGfmWhitespace));
    var $author$project$Parser$Token$singleQuote = $elm$parser$Parser$Advanced$Token_raw("'", $elm$parser$Parser$Expecting("a single quote"));
    var $author$project$Markdown$LinkReferenceDefinition$titleParser = function () {
        var inSingleQuotes = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$singleQuote)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$andThen_raw($author$project$Markdown$LinkReferenceDefinition$hasNoBlankLine, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($author$project$Parser$Token$singleQuote))), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$singleQuote)), $author$project$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
        var inDoubleQuotes = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$doubleQuote)), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$andThen_raw($author$project$Markdown$LinkReferenceDefinition$hasNoBlankLine, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($author$project$Parser$Token$doubleQuote))), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$doubleQuote)), $author$project$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
        return $elm$parser$Parser$Advanced$inContext_raw("title", $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Helpers$requiredWhitespace), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                inDoubleQuotes,
                inSingleQuotes,
                $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
            ])))), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing), $author$project$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline), b: _List_Nil } }));
    }();
    var $author$project$Helpers$spaceOrTab = $elm$parser$Parser$Advanced$chompIf_raw($author$project$Helpers$isSpaceOrTab, $elm$parser$Parser$Expecting("space or tab"));
    var $author$project$Helpers$upToThreeSpaces = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($author$project$Helpers$spaceOrTab, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $author$project$Helpers$spaceOrTab,
            $elm$parser$Parser$Advanced$succeed(0)
        ]))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $author$project$Helpers$spaceOrTab,
            $elm$parser$Parser$Advanced$succeed(0)
        ]))), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed(0), b: _List_Nil } });
    var $author$project$Markdown$LinkReferenceDefinition$parser = $elm$parser$Parser$Advanced$inContext_raw("link reference definition", $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed(F3((label, destination, title) => _Utils_Tuple2(label, { cg: destination, cK: title }))), $author$project$Helpers$upToThreeSpaces), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($author$project$Markdown$LinkReferenceDefinition$labelParser, $elm$parser$Parser$Advanced$chompWhile($author$project$Helpers$isSpaceOrTab)), $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$newline), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed(0), b: _List_Nil } })), $elm$parser$Parser$Advanced$chompWhile($author$project$Helpers$isSpaceOrTab))), $author$project$Markdown$LinkReferenceDefinition$destinationParser), $author$project$Markdown$LinkReferenceDefinition$titleParser));
    var $author$project$ThematicBreak$ThematicBreak = 0;
    var $author$project$ThematicBreak$isSpace = function (c) {
        switch (c) {
            case " ":
                return true;
            case "\t":
                return true;
            default:
                return false;
        }
    };
    var $author$project$Parser$Extra$tokenHelp = (_char) => $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_raw(_char, $elm$parser$Parser$Expecting(_char)));
    var $author$project$ThematicBreak$whitespace = $elm$parser$Parser$Advanced$chompWhile($author$project$ThematicBreak$isSpace);
    var $author$project$ThematicBreak$withChar = function (tchar) {
        var token = $author$project$Parser$Extra$tokenHelp($elm$core$String$fromChar(tchar));
        return $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed(0), token), $author$project$ThematicBreak$whitespace), token), $author$project$ThematicBreak$whitespace), token), $elm$parser$Parser$Advanced$chompWhile((c) => _Utils_eq(c, tchar) || $author$project$ThematicBreak$isSpace(c))), $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $author$project$Parser$Extra$tokenHelp("\n"), b: { $: 1, a: $elm$parser$Parser$Advanced$end($elm$parser$Parser$Expecting("end")), b: _List_Nil } }));
    };
    var $author$project$ThematicBreak$parseThematicBreak = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $author$project$ThematicBreak$withChar("-"), b: { $: 1, a: $author$project$ThematicBreak$withChar("*"), b: { $: 1, a: $author$project$ThematicBreak$withChar("_"), b: _List_Nil } } });
    var $author$project$ThematicBreak$singleSpace = $elm$parser$Parser$Advanced$chompIf_raw($author$project$ThematicBreak$isSpace, $elm$parser$Parser$Expecting("Space"));
    var $author$project$ThematicBreak$parser = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$ThematicBreak$singleSpace), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $author$project$ThematicBreak$singleSpace,
            $elm$parser$Parser$Advanced$succeed(0)
        ]))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $author$project$ThematicBreak$singleSpace,
            $elm$parser$Parser$Advanced$succeed(0)
        ]))), $author$project$ThematicBreak$parseThematicBreak), b: { $: 1, a: $author$project$ThematicBreak$parseThematicBreak, b: _List_Nil } });
    var $author$project$Markdown$Parser$innerParagraphParser = $elm$parser$Parser$Advanced$mapChompedString_raw(F2((rawLine, _v0) => $author$project$Markdown$RawBlock$Body(rawLine)), $elm$parser$Parser$Advanced$chompUntilEndOr("\n"));
    var $author$project$Markdown$Parser$plainLine = $elm$parser$Parser$Advanced$ignorer_raw($author$project$Markdown$Parser$innerParagraphParser, $author$project$Helpers$endOfLineOrFile);
    var $author$project$Markdown$Parser$joinRawStringsWith_raw = function (joinWith, string1, string2) {
        var _v0 = _Utils_Tuple2(string1, string2);
        if (_v0.a === "") {
            return string2;
        }
        else {
            if (_v0.b === "") {
                return string1;
            }
            else {
                return _Utils_ap(string1, _Utils_ap(joinWith, string2));
            }
        }
    }, $author$project$Markdown$Parser$joinRawStringsWith = F3($author$project$Markdown$Parser$joinRawStringsWith_raw);
    var $author$project$Markdown$Parser$joinStringsPreserveAll_raw = (string1, string2) => string1 + ("\n" + string2), $author$project$Markdown$Parser$joinStringsPreserveAll = F2($author$project$Markdown$Parser$joinStringsPreserveAll_raw);
    var $author$project$Markdown$Parser$possiblyMergeBlocks_raw = (state, newRawBlock) => ({
        af: state.af,
        T: function () {
            var _v0 = _Utils_Tuple2(newRawBlock, state.T);
            _v0$5: while (true) {
                if (_v0.b.b) {
                    switch (_v0.a.$) {
                        case 5:
                            if (_v0.b.a.$ === 5) {
                                var block1 = _v0.a.a;
                                var _v1 = _v0.b;
                                var block2 = _v1.a.a;
                                var rest = _v1.b;
                                return _List_Cons($author$project$Markdown$RawBlock$CodeBlock({
                                    b6: $author$project$Markdown$Parser$joinStringsPreserveAll_raw(block2.b6, block1.b6),
                                    bB: $elm$core$Maybe$Nothing
                                }), rest);
                            }
                            else {
                                break _v0$5;
                            }
                        case 6:
                            if (_v0.b.a.$ === 6) {
                                var block1 = _v0.a.a;
                                var _v2 = _v0.b;
                                var block2 = _v2.a.a;
                                var rest = _v2.b;
                                return _List_Cons($author$project$Markdown$RawBlock$IndentedCodeBlock($author$project$Markdown$Parser$joinStringsPreserveAll_raw(block2, block1)), rest);
                            }
                            else {
                                break _v0$5;
                            }
                        case 10:
                            if (_v0.b.a.$ === 10) {
                                var body1 = _v0.a.a;
                                var _v4 = _v0.b;
                                var body2 = _v4.a.a;
                                var rest = _v4.b;
                                return _List_Cons($author$project$Markdown$RawBlock$BlockQuote($author$project$Markdown$Parser$joinStringsPreserveAll_raw(body2, body1)), rest);
                            }
                            else {
                                break _v0$5;
                            }
                        case 1:
                            switch (_v0.b.a.$) {
                                case 10:
                                    var body1 = _v0.a.a;
                                    var _v3 = _v0.b;
                                    var body2 = _v3.a.a;
                                    var rest = _v3.b;
                                    return _List_Cons($author$project$Markdown$RawBlock$BlockQuote($author$project$Markdown$Parser$joinRawStringsWith_raw("\n", body2, body1)), rest);
                                case 1:
                                    var body1 = _v0.a.a;
                                    var _v5 = _v0.b;
                                    var body2 = _v5.a.a;
                                    var rest = _v5.b;
                                    return _List_Cons($author$project$Markdown$RawBlock$Body($author$project$Markdown$Parser$joinRawStringsWith_raw("\n", body2, body1)), rest);
                                default:
                                    break _v0$5;
                            }
                        default:
                            break _v0$5;
                    }
                }
                else {
                    break _v0$5;
                }
            }
            return _List_Cons(newRawBlock, state.T);
        }()
    }), $author$project$Markdown$Parser$possiblyMergeBlocks = F2($author$project$Markdown$Parser$possiblyMergeBlocks_raw);
    var $author$project$Markdown$Block$H1 = 0;
    var $author$project$Markdown$Block$H2 = 1;
    var $author$project$Markdown$Block$H3 = 2;
    var $author$project$Markdown$Block$H4 = 3;
    var $author$project$Markdown$Block$H5 = 4;
    var $author$project$Markdown$Block$H6 = 5;
    var $author$project$Markdown$Parser$toHeading = function (level) {
        switch (level) {
            case 1:
                return $elm$core$Result$Ok(0);
            case 2:
                return $elm$core$Result$Ok(1);
            case 3:
                return $elm$core$Result$Ok(2);
            case 4:
                return $elm$core$Result$Ok(3);
            case 5:
                return $elm$core$Result$Ok(4);
            case 6:
                return $elm$core$Result$Ok(5);
            default:
                return $elm$core$Result$Err($elm$parser$Parser$Expecting("A heading with 1 to 6 #'s, but found " + $elm$core$String$fromInt(level)));
        }
    };
    var $author$project$Markdown$RawBlock$UnorderedListBlock = (a) => ({ $: 3, a: a });
    var $author$project$Parser$Token$asterisk = $elm$parser$Parser$Advanced$Token_raw("*", $elm$parser$Parser$Expecting("a `*`"));
    var $author$project$Parser$Token$minus = $elm$parser$Parser$Advanced$Token_raw("-", $elm$parser$Parser$Expecting("a `-`"));
    var $author$project$Parser$Token$plus = $elm$parser$Parser$Advanced$Token_raw("+", $elm$parser$Parser$Expecting("a `+`"));
    var $author$project$Markdown$UnorderedList$listMarkerParser = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Parser$Token$minus), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$minus)), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Parser$Token$plus), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$plus)), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Parser$Token$asterisk), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$asterisk)), b: _List_Nil } } });
    var $author$project$Markdown$ListItem$PlainItem = (a) => ({ $: 1, a: a });
    var $author$project$Markdown$ListItem$TaskItem_raw = (a, b) => ({ $: 0, a: a, b: b }), $author$project$Markdown$ListItem$TaskItem = F2($author$project$Markdown$ListItem$TaskItem_raw);
    var $author$project$Markdown$ListItem$Complete = 1;
    var $author$project$Markdown$ListItem$Incomplete = 0;
    var $author$project$Markdown$ListItem$taskItemParser = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed(1), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("[x] ", $elm$parser$Parser$ExpectingSymbol("[x] ")))), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed(1), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("[X] ", $elm$parser$Parser$ExpectingSymbol("[X] ")))), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed(0), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_raw("[ ] ", $elm$parser$Parser$ExpectingSymbol("[ ] ")))), b: _List_Nil } } });
    var $author$project$Parser$Extra$zeroOrMore = (condition) => $elm$parser$Parser$Advanced$chompWhile(condition);
    var $author$project$Markdown$ListItem$parser = $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$succeed($author$project$Markdown$ListItem$TaskItem), $elm$parser$Parser$Advanced$ignorer_raw($author$project$Markdown$ListItem$taskItemParser, $author$project$Parser$Extra$zeroOrMore($author$project$Helpers$isSpaceOrTab))), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed($author$project$Markdown$ListItem$PlainItem), b: _List_Nil } }), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("\n")), $author$project$Helpers$endOfLineOrFile));
    var $author$project$Markdown$UnorderedList$itemBody = $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$backtrackable($author$project$Parser$Extra$oneOrMore($author$project$Helpers$isSpaceOrTab))), $author$project$Markdown$ListItem$parser), b: { $: 1, a: $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($author$project$Markdown$ListItem$PlainItem("")), $elm$parser$Parser$Advanced$symbol($author$project$Parser$Token$newline)), b: _List_Nil } });
    var $author$project$Markdown$UnorderedList$singleItemParser = (listMarker) => $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$symbol(listMarker))), $author$project$Markdown$UnorderedList$itemBody);
    var $author$project$Markdown$UnorderedList$statementsHelp_raw = (itemParser, firstItem, revStmts) => $elm$parser$Parser$Advanced$oneOf({ $: 1, a: $elm$parser$Parser$Advanced$map_raw((stmt) => $elm$parser$Parser$Advanced$Loop(_List_Cons(stmt, revStmts)), itemParser), b: { $: 1, a: $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(_List_Cons(firstItem, $elm$core$List$reverse(revStmts)))), b: _List_Nil } }), $author$project$Markdown$UnorderedList$statementsHelp = F3($author$project$Markdown$UnorderedList$statementsHelp_raw);
    var $author$project$Markdown$UnorderedList$parser = function () {
        var parseSubsequentItems_raw = (listMarker, firstItem) => $elm$parser$Parser$Advanced$loop_raw(_List_Nil, A2($author$project$Markdown$UnorderedList$statementsHelp, $author$project$Markdown$UnorderedList$singleItemParser(listMarker), firstItem)), parseSubsequentItems = F2(parseSubsequentItems_raw);
        return $elm$parser$Parser$Advanced$andThen_raw($elm$core$Basics$identity, $elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$keeper_raw($elm$parser$Parser$Advanced$succeed(parseSubsequentItems), $elm$parser$Parser$Advanced$ignorer_raw($elm$parser$Parser$Advanced$backtrackable($author$project$Markdown$UnorderedList$listMarkerParser), $author$project$Parser$Extra$oneOrMore($author$project$Helpers$isSpaceOrTab))), $author$project$Markdown$ListItem$parser));
    }();
    var $author$project$Markdown$Parser$unorderedListBlock = function () {
        var parseListItem = function (unparsedListItem) {
            if (!unparsedListItem.$) {
                var completion = unparsedListItem.a;
                var body = unparsedListItem.b;
                return {
                    b6: body,
                    bf: $elm$core$Maybe$Just(function () {
                        if (completion === 1) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }())
                };
            }
            else {
                var body = unparsedListItem.a;
                return { b6: body, bf: $elm$core$Maybe$Nothing };
            }
        };
        return $elm$parser$Parser$Advanced$map_raw(A2($elm$core$Basics$composeR, $elm$core$List$map(parseListItem), $author$project$Markdown$RawBlock$UnorderedListBlock), $author$project$Markdown$UnorderedList$parser);
    }();
    var $author$project$Markdown$Parser$childToBlocks_raw = function (node, blocks) {
        switch (node.$) {
            case 0:
                var tag = node.a;
                var attributes = node.b;
                var children = node.c;
                var _v28 = $author$project$Markdown$Parser$nodesToBlocks(children);
                if (!_v28.$) {
                    var childrenAsBlocks = _v28.a;
                    var block = $author$project$Markdown$Block$HtmlBlock($author$project$Markdown$Block$HtmlElement_raw(tag, attributes, childrenAsBlocks));
                    return $elm$core$Result$Ok(_List_Cons(block, blocks));
                }
                else {
                    var err = _v28.a;
                    return $elm$core$Result$Err(err);
                }
            case 1:
                var innerText = node.a;
                var _v29 = $author$project$Markdown$Parser$parse(innerText);
                if (!_v29.$) {
                    var value = _v29.a;
                    return $elm$core$Result$Ok(_Utils_ap($elm$core$List$reverse(value), blocks));
                }
                else {
                    var error = _v29.a;
                    return $elm$core$Result$Err($elm$parser$Parser$Expecting($elm$core$String$join_raw("\n", $elm$core$List$map_raw($author$project$Markdown$Parser$deadEndToString, error))));
                }
            case 2:
                var string = node.a;
                return $elm$core$Result$Ok(_List_Cons($author$project$Markdown$Block$HtmlBlock($author$project$Markdown$Block$HtmlComment(string)), blocks));
            case 3:
                var string = node.a;
                return $elm$core$Result$Ok(_List_Cons($author$project$Markdown$Block$HtmlBlock($author$project$Markdown$Block$Cdata(string)), blocks));
            case 4:
                var string = node.a;
                return $elm$core$Result$Ok(_List_Cons($author$project$Markdown$Block$HtmlBlock($author$project$Markdown$Block$ProcessingInstruction(string)), blocks));
            default:
                var declarationType = node.a;
                var content = node.b;
                return $elm$core$Result$Ok(_List_Cons($author$project$Markdown$Block$HtmlBlock($author$project$Markdown$Block$HtmlDeclaration_raw(declarationType, content)), blocks));
        }
    }, $author$project$Markdown$Parser$childToBlocks = F2($author$project$Markdown$Parser$childToBlocks_raw);
    var $author$project$Markdown$Parser$inlineParseHelper_raw = function (referencesDict, _v21) {
        var unparsedInlines = _v21;
        var referencesDict2 = $elm$core$Dict$fromList($elm$core$List$map_raw($elm$core$Tuple$mapSecond(function (_v22) {
            var destination = _v22.cg;
            var title = _v22.cK;
            return _Utils_Tuple2(destination, title);
        }), referencesDict));
        return $elm$core$List$map_raw($author$project$Markdown$Parser$mapInline, $author$project$Markdown$InlineParser$parse_raw(referencesDict2, unparsedInlines));
    }, $author$project$Markdown$Parser$inlineParseHelper = F2($author$project$Markdown$Parser$inlineParseHelper_raw);
    var $author$project$Markdown$Parser$mapInline = function (inline) {
        switch (inline.$) {
            case 0:
                var string = inline.a;
                return $author$project$Markdown$Block$Text(string);
            case 1:
                return $author$project$Markdown$Block$HardLineBreak;
            case 2:
                var string = inline.a;
                return $author$project$Markdown$Block$CodeSpan(string);
            case 3:
                var string = inline.a;
                var maybeString = inline.b;
                var inlines = inline.c;
                return $author$project$Markdown$Block$Link_raw(string, maybeString, $elm$core$List$map_raw($author$project$Markdown$Parser$mapInline, inlines));
            case 4:
                var string = inline.a;
                var maybeString = inline.b;
                var inlines = inline.c;
                return $author$project$Markdown$Block$Image_raw(string, maybeString, $elm$core$List$map_raw($author$project$Markdown$Parser$mapInline, inlines));
            case 5:
                var node = inline.a;
                return $author$project$Markdown$Block$HtmlInline($author$project$Markdown$Parser$nodeToRawBlock(node));
            default:
                var level = inline.a;
                var inlines = inline.b;
                switch (level) {
                    case 1:
                        return $author$project$Markdown$Block$Emphasis($elm$core$List$map_raw($author$project$Markdown$Parser$mapInline, inlines));
                    case 2:
                        return $author$project$Markdown$Block$Strong($elm$core$List$map_raw($author$project$Markdown$Parser$mapInline, inlines));
                    default:
                        return $author$project$Markdown$Block$Strong($elm$core$List$map_raw($author$project$Markdown$Parser$mapInline, inlines));
                }
        }
    };
    var $author$project$Markdown$Parser$nodeToRawBlock = function (node) {
        switch (node.$) {
            case 1:
                var innerText = node.a;
                return $author$project$Markdown$Block$HtmlComment("TODO this never happens, but use types to drop this case.");
            case 0:
                var tag = node.a;
                var attributes = node.b;
                var children = node.c;
                var parseChild = function (child) {
                    if (child.$ === 1) {
                        var text = child.a;
                        return $author$project$Markdown$Parser$textNodeToBlocks(text);
                    }
                    else {
                        return { $: 1, a: $author$project$Markdown$Block$HtmlBlock($author$project$Markdown$Parser$nodeToRawBlock(child)), b: _List_Nil };
                    }
                };
                return $author$project$Markdown$Block$HtmlElement_raw(tag, attributes, $elm$core$List$concatMap_raw(parseChild, children));
            case 2:
                var string = node.a;
                return $author$project$Markdown$Block$HtmlComment(string);
            case 3:
                var string = node.a;
                return $author$project$Markdown$Block$Cdata(string);
            case 4:
                var string = node.a;
                return $author$project$Markdown$Block$ProcessingInstruction(string);
            default:
                var declarationType = node.a;
                var content = node.b;
                return $author$project$Markdown$Block$HtmlDeclaration_raw(declarationType, content);
        }
    };
    var $author$project$Markdown$Parser$nodesToBlocks = (children) => $author$project$Markdown$Parser$nodesToBlocksHelp_raw(children, _List_Nil);
    var $author$project$Markdown$Parser$nodesToBlocksHelp_raw = function (remaining, soFar) {
        nodesToBlocksHelp: while (true) {
            if (remaining.b) {
                var node = remaining.a;
                var rest = remaining.b;
                var _v16 = $author$project$Markdown$Parser$childToBlocks_raw(node, soFar);
                if (!_v16.$) {
                    var newSoFar = _v16.a;
                    var $temp$remaining = rest, $temp$soFar = newSoFar;
                    remaining = $temp$remaining;
                    soFar = $temp$soFar;
                    continue nodesToBlocksHelp;
                }
                else {
                    var e = _v16.a;
                    return $elm$core$Result$Err(e);
                }
            }
            else {
                return $elm$core$Result$Ok($elm$core$List$reverse(soFar));
            }
        }
    }, $author$project$Markdown$Parser$nodesToBlocksHelp = F2($author$project$Markdown$Parser$nodesToBlocksHelp_raw);
    var $author$project$Markdown$Parser$parse = function (input) {
        var _v12 = $elm$parser$Parser$Advanced$run_raw($elm$parser$Parser$Advanced$ignorer_raw($author$project$Markdown$Parser$cyclic$rawBlockParser(), $author$project$Helpers$endOfFile), input);
        if (_v12.$ === 1) {
            var e = _v12.a;
            return $elm$core$Result$Err(e);
        }
        else {
            var v = _v12.a;
            var _v13 = $author$project$Markdown$Parser$parseAllInlines(v);
            if (_v13.$ === 1) {
                var e = _v13.a;
                return $elm$parser$Parser$Advanced$run_raw($elm$parser$Parser$Advanced$problem(e), "");
            }
            else {
                var blocks = _v13.a;
                var isNotEmptyParagraph = function (block) {
                    if ((block.$ === 5) && (!block.a.b)) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                return $elm$core$Result$Ok($elm$core$List$filter_raw(isNotEmptyParagraph, blocks));
            }
        }
    };
    var $author$project$Markdown$Parser$parseAllInlines = (state) => $author$project$Markdown$Parser$parseAllInlinesHelp_raw(state, state.T, _List_Nil);
    var $author$project$Markdown$Parser$parseAllInlinesHelp_raw = function (state, rawBlocks, parsedBlocks) {
        parseAllInlinesHelp: while (true) {
            if (rawBlocks.b) {
                var rawBlock = rawBlocks.a;
                var rest = rawBlocks.b;
                var _v11 = $author$project$Markdown$Parser$parseInlines_raw(state.af, rawBlock);
                switch (_v11.$) {
                    case 1:
                        var newParsedBlock = _v11.a;
                        var $temp$state = state, $temp$rawBlocks = rest, $temp$parsedBlocks = _List_Cons(newParsedBlock, parsedBlocks);
                        state = $temp$state;
                        rawBlocks = $temp$rawBlocks;
                        parsedBlocks = $temp$parsedBlocks;
                        continue parseAllInlinesHelp;
                    case 0:
                        var $temp$state = state, $temp$rawBlocks = rest, $temp$parsedBlocks = parsedBlocks;
                        state = $temp$state;
                        rawBlocks = $temp$rawBlocks;
                        parsedBlocks = $temp$parsedBlocks;
                        continue parseAllInlinesHelp;
                    default:
                        var e = _v11.a;
                        return $elm$core$Result$Err(e);
                }
            }
            else {
                return $elm$core$Result$Ok(parsedBlocks);
            }
        }
    }, $author$project$Markdown$Parser$parseAllInlinesHelp = F3($author$project$Markdown$Parser$parseAllInlinesHelp_raw);
    var $author$project$Markdown$Parser$parseInlines_raw = function (linkReferences, rawBlock) {
        switch (rawBlock.$) {
            case 0:
                var level = rawBlock.a;
                var unparsedInlines = rawBlock.b;
                var _v4 = $author$project$Markdown$Parser$toHeading(level);
                if (!_v4.$) {
                    var parsedLevel = _v4.a;
                    return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$Heading_raw(parsedLevel, $author$project$Markdown$Parser$inlineParseHelper_raw(linkReferences, unparsedInlines)));
                }
                else {
                    var e = _v4.a;
                    return $author$project$Markdown$Parser$InlineProblem(e);
                }
            case 1:
                var unparsedInlines = rawBlock.a;
                return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$Paragraph($author$project$Markdown$Parser$inlineParseHelper_raw(linkReferences, unparsedInlines)));
            case 2:
                var html = rawBlock.a;
                return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$HtmlBlock(html));
            case 3:
                var unparsedItems = rawBlock.a;
                var parseItem = function (unparsed) {
                    var task = function () {
                        var _v5 = unparsed.bf;
                        if (!_v5.$) {
                            if (!_v5.a) {
                                return 1;
                            }
                            else {
                                return 2;
                            }
                        }
                        else {
                            return 0;
                        }
                    }();
                    var parsedInlines = $author$project$Markdown$Parser$parseRawInline_raw(linkReferences, $elm$core$Basics$identity, unparsed.b6);
                    return $author$project$Markdown$Block$ListItem_raw(task, parsedInlines);
                };
                return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$UnorderedList($elm$core$List$map_raw(parseItem, unparsedItems)));
            case 4:
                var startingIndex = rawBlock.a;
                var unparsedInlines = rawBlock.b;
                return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$OrderedList_raw(startingIndex, $elm$core$List$map_raw(A2($author$project$Markdown$Parser$parseRawInline, linkReferences, $elm$core$Basics$identity), unparsedInlines)));
            case 5:
                var codeBlock = rawBlock.a;
                return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$CodeBlock(codeBlock));
            case 7:
                return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$ThematicBreak);
            case 9:
                return $author$project$Markdown$Parser$EmptyBlock;
            case 10:
                var rawBlocks = rawBlock.a;
                var _v6 = $elm$parser$Parser$Advanced$run_raw($author$project$Markdown$Parser$cyclic$rawBlockParser(), rawBlocks);
                if (!_v6.$) {
                    var value = _v6.a;
                    var _v7 = $author$project$Markdown$Parser$parseAllInlines(value);
                    if (!_v7.$) {
                        var parsedBlocks = _v7.a;
                        return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$BlockQuote(parsedBlocks));
                    }
                    else {
                        var e = _v7.a;
                        return $author$project$Markdown$Parser$InlineProblem(e);
                    }
                }
                else {
                    var error = _v6.a;
                    return $author$project$Markdown$Parser$InlineProblem($elm$parser$Parser$Problem($author$project$Markdown$Parser$deadEndsToString(error)));
                }
            case 6:
                var codeBlockBody = rawBlock.a;
                return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$CodeBlock({ b6: codeBlockBody, bB: $elm$core$Maybe$Nothing }));
            default:
                var _v8 = rawBlock.a;
                var header = _v8.a;
                var rows = _v8.b;
                var parseHeader = function (_v9) {
                    var label = _v9.aE;
                    var alignment = _v9.aQ;
                    var wrap = (parsedHeaderLabel) => ({ aQ: alignment, aE: parsedHeaderLabel });
                    return $author$project$Markdown$Parser$parseRawInline_raw(linkReferences, wrap, label);
                };
                return $author$project$Markdown$Parser$ParsedBlock($author$project$Markdown$Block$Table_raw($elm$core$List$map_raw(parseHeader, header), _List_Nil));
        }
    }, $author$project$Markdown$Parser$parseInlines = F2($author$project$Markdown$Parser$parseInlines_raw);
    var $author$project$Markdown$Parser$parseRawInline_raw = (linkReferences, wrap, unparsedInlines) => wrap($author$project$Markdown$Parser$inlineParseHelper_raw(linkReferences, unparsedInlines)), $author$project$Markdown$Parser$parseRawInline = F3($author$project$Markdown$Parser$parseRawInline_raw);
    var $author$project$Markdown$Parser$stepRawBlock = function (revStmts) {
        var _v2 = revStmts.T;
        if (_v2.b && (_v2.a.$ === 1)) {
            return $elm$parser$Parser$Advanced$map_raw((f) => f(revStmts), $elm$parser$Parser$Advanced$oneOf($author$project$Markdown$Parser$cyclic$whenPreviousWasBody()));
        }
        else {
            return $elm$parser$Parser$Advanced$map_raw((f) => f(revStmts), $elm$parser$Parser$Advanced$oneOf($author$project$Markdown$Parser$cyclic$whenPreviousWasNotBody()));
        }
    };
    var $author$project$Markdown$Parser$textNodeToBlocks = (textNodeValue) => $elm$core$Result$withDefault_raw(_List_Nil, $author$project$Markdown$Parser$parse(textNodeValue));
    var $author$project$Markdown$Parser$xmlNodeToHtmlNode = function (xmlNode) {
        switch (xmlNode.$) {
            case 1:
                var innerText = xmlNode.a;
                return $elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$Body(innerText));
            case 0:
                var tag = xmlNode.a;
                var attributes = xmlNode.b;
                var children = xmlNode.c;
                var _v1 = $author$project$Markdown$Parser$nodesToBlocks(children);
                if (!_v1.$) {
                    var parsedChildren = _v1.a;
                    return $elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$Html($author$project$Markdown$Block$HtmlElement_raw(tag, attributes, parsedChildren)));
                }
                else {
                    var err = _v1.a;
                    return $elm$parser$Parser$Advanced$problem(err);
                }
            case 2:
                var string = xmlNode.a;
                return $elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$Html($author$project$Markdown$Block$HtmlComment(string)));
            case 3:
                var string = xmlNode.a;
                return $elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$Html($author$project$Markdown$Block$Cdata(string)));
            case 4:
                var string = xmlNode.a;
                return $elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$Html($author$project$Markdown$Block$ProcessingInstruction(string)));
            default:
                var declarationType = xmlNode.a;
                var content = xmlNode.b;
                return $elm$parser$Parser$Advanced$succeed($author$project$Markdown$RawBlock$Html($author$project$Markdown$Block$HtmlDeclaration_raw(declarationType, content)));
        }
    };
    const $author$project$Markdown$Parser$cyclic$whenPreviousWasNotBody = () => ({ $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((_v25, revStmts) => $elm$parser$Parser$Advanced$Done(revStmts)), $author$project$Helpers$endOfFile), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((block, revStmts) => $elm$parser$Parser$Advanced$Loop($author$project$Markdown$Parser$possiblyMergeBlocks_raw(revStmts, block))), $author$project$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((reference, revStmts) => $elm$parser$Parser$Advanced$Loop($author$project$Markdown$Parser$addReference_raw(revStmts, reference))), $elm$parser$Parser$Advanced$backtrackable($author$project$Markdown$LinkReferenceDefinition$parser)), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((block, revStmts) => $elm$parser$Parser$Advanced$Loop($author$project$Markdown$Parser$possiblyMergeBlocks_raw(revStmts, block))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                        $author$project$Markdown$Parser$blankLine,
                        $author$project$Markdown$Parser$blockQuote,
                        $elm$parser$Parser$Advanced$map_raw($author$project$Markdown$RawBlock$CodeBlock, $elm$parser$Parser$Advanced$backtrackable($author$project$Markdown$CodeBlock$parser)),
                        $author$project$Markdown$Parser$indentedCodeBlock,
                        $elm$parser$Parser$Advanced$map_raw((_v26) => $author$project$Markdown$RawBlock$ThematicBreak, $elm$parser$Parser$Advanced$backtrackable($author$project$ThematicBreak$parser)),
                        $author$project$Markdown$Parser$unorderedListBlock,
                        $author$project$Markdown$Parser$orderedListBlock(false),
                        $elm$parser$Parser$Advanced$backtrackable($author$project$Markdown$Parser$heading),
                        $author$project$Markdown$Parser$cyclic$htmlParser(),
                        $author$project$Markdown$Parser$plainLine
                    ]))), b: _List_Nil } } } });
    const $author$project$Markdown$Parser$cyclic$whenPreviousWasBody = () => ({ $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((_v23, revStmts) => $elm$parser$Parser$Advanced$Done(revStmts)), $author$project$Helpers$endOfFile), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((block, revStmts) => $elm$parser$Parser$Advanced$Loop($author$project$Markdown$Parser$possiblyMergeBlocks_raw(revStmts, block))), $author$project$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((reference, revStmts) => $elm$parser$Parser$Advanced$Loop($author$project$Markdown$Parser$addReference_raw(revStmts, reference))), $elm$parser$Parser$Advanced$backtrackable($author$project$Markdown$LinkReferenceDefinition$parser)), b: { $: 1, a: $elm$parser$Parser$Advanced$map_raw(F2((block, revStmts) => $elm$parser$Parser$Advanced$Loop($author$project$Markdown$Parser$possiblyMergeBlocks_raw(revStmts, block))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                        $author$project$Markdown$Parser$blankLine,
                        $author$project$Markdown$Parser$blockQuote,
                        $elm$parser$Parser$Advanced$map_raw($author$project$Markdown$RawBlock$CodeBlock, $elm$parser$Parser$Advanced$backtrackable($author$project$Markdown$CodeBlock$parser)),
                        $elm$parser$Parser$Advanced$map_raw((_v24) => $author$project$Markdown$RawBlock$ThematicBreak, $elm$parser$Parser$Advanced$backtrackable($author$project$ThematicBreak$parser)),
                        $author$project$Markdown$Parser$unorderedListBlock,
                        $author$project$Markdown$Parser$orderedListBlock(true),
                        $elm$parser$Parser$Advanced$backtrackable($author$project$Markdown$Parser$heading),
                        $author$project$Markdown$Parser$cyclic$htmlParser(),
                        $author$project$Markdown$Parser$plainLine
                    ]))), b: _List_Nil } } } });
    const $author$project$Markdown$Parser$cyclic$htmlParser = () => $elm$parser$Parser$Advanced$andThen_raw($author$project$Markdown$Parser$xmlNodeToHtmlNode, $author$project$HtmlParser$html);
    const $author$project$Markdown$Parser$cyclic$rawBlockParser = () => $elm$parser$Parser$Advanced$loop_raw({ af: _List_Nil, T: _List_Nil }, $author$project$Markdown$Parser$stepRawBlock);
    var $author$project$Markdown$Parser$whenPreviousWasNotBody = $author$project$Markdown$Parser$cyclic$whenPreviousWasNotBody();
    $author$project$Markdown$Parser$cyclic$whenPreviousWasNotBody = () => $author$project$Markdown$Parser$whenPreviousWasNotBody;
    var $author$project$Markdown$Parser$whenPreviousWasBody = $author$project$Markdown$Parser$cyclic$whenPreviousWasBody();
    $author$project$Markdown$Parser$cyclic$whenPreviousWasBody = () => $author$project$Markdown$Parser$whenPreviousWasBody;
    var $author$project$Markdown$Parser$htmlParser = $author$project$Markdown$Parser$cyclic$htmlParser();
    $author$project$Markdown$Parser$cyclic$htmlParser = () => $author$project$Markdown$Parser$htmlParser;
    var $author$project$Markdown$Parser$rawBlockParser = $author$project$Markdown$Parser$cyclic$rawBlockParser();
    $author$project$Markdown$Parser$cyclic$rawBlockParser = () => $author$project$Markdown$Parser$rawBlockParser;
    var $author$project$Benchmarks$compare_raw = (title, markdown) => $elm_explorations$benchmark$Benchmark$benchmark_raw(title, (_v0) => $author$project$Markdown$Parser$parse(markdown)), $author$project$Benchmarks$compare = F2($author$project$Benchmarks$compare_raw);
    var $author$project$Benchmarks$elmMarkdownExplorationsReadme = function () {
        var source = "# elm-markdown\n\n## Level 2 heading\n\n### Level 3 heading\n\n";
        return $author$project$Benchmarks$compare_raw("elm-explorations/markdown readme", source);
    }();
    var $author$project$Benchmarks$heading = $author$project$Benchmarks$compare_raw("just a heading", "# This is a heading");
    var $author$project$Benchmarks$withHeadingsAndLists = function () {
        var source = "# elm-markdown\n\n- Item 1 \n- Item 2 \n- Item 3 \n\n## Level 2 heading\n\n- [Google](https://google.com)\n- [Bing](https://bing.com)\n- [DuckDuckGo](https://duckduckgo.com)\n\n### Level 3 heading\n\n- Item 1\n- Item 2\n- Item 3\n";
        return $author$project$Benchmarks$compare_raw("withHeadingsAndLists", source);
    }();
    var $author$project$Benchmarks$withHeadingsAndListsAndHtml = function () {
        var source = "# elm-markdown\n\n- Item 1 \n- Item 2 \n- Item 3 \n\n## Level 2 heading\n\n<SearchEnginesBox>\n- [Google](https://google.com)\n- [Bing](https://bing.com)\n- [DuckDuckGo](https://duckduckgo.com)\n</SearchEnginesBox>\n\n<MyCustomHtmlTag></MyCustomHtmlTag>\n\n<Nested>\n<Inner>\n## This is a sub-heading\n\n**This is bold**\n</Inner>\n</Nested>\n\n### Level 3 heading\n\n- Item 1\n- Item 2\n- Item 3\n";
        return $author$project$Benchmarks$compare_raw("withHeadingsAndListsAndHtml", source);
    }();
    var $author$project$Benchmarks$suite = $elm_explorations$benchmark$Benchmark$Benchmark$Group_raw("markdown parsing", { $: 1, a: $author$project$Benchmarks$heading, b: { $: 1, a: $author$project$Benchmarks$elmMarkdownExplorationsReadme, b: { $: 1, a: $author$project$Benchmarks$withHeadingsAndLists, b: { $: 1, a: $author$project$Benchmarks$withHeadingsAndListsAndHtml, b: _List_Nil } } } });
    var $author$project$Run$main = $author$project$Benchmark$Runner$Json$program_raw($author$project$Run$reportResults, $author$project$Benchmarks$suite);
    _Platform_export({ "Run": { "init": $author$project$Run$main($elm$json$Json$Decode$succeed(0))(0) } });
}(this));
