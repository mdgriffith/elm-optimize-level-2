(function (scope) {
    "use strict";
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        return F(2, fun, function (a) { return function (b) { return fun(a, b); }; });
    }
    function F3(fun) {
        return F(3, fun, function (a) {
            return function (b) { return function (c) { return fun(a, b, c); }; };
        });
    }
    function F4(fun) {
        return F(4, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) { return fun(a, b, c, d); };
                };
            };
        });
    }
    function F5(fun) {
        return F(5, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) { return function (e) { return fun(a, b, c, d, e); }; };
                };
            };
        });
    }
    function F6(fun) {
        return F(6, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        });
    }
    function F7(fun) {
        return F(7, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) { return fun(a, b, c, d, e, f, g); };
                            };
                        };
                    };
                };
            };
        });
    }
    function F8(fun) {
        return F(8, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F9(fun) {
        return F(9, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
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
    var _Utils_notEqual_raw = function (a, b) { return !_Utils_eq(a, b); }, _Utils_notEqual = F2(_Utils_notEqual_raw);
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
    var _Utils_lt_raw = function (a, b) { return _Utils_cmp(a, b) < 0; }, _Utils_lt = F2(_Utils_lt_raw);
    var _Utils_le_raw = function (a, b) { return _Utils_cmp(a, b) < 1; }, _Utils_le = F2(_Utils_le_raw);
    var _Utils_gt_raw = function (a, b) { return _Utils_cmp(a, b) > 0; }, _Utils_gt = F2(_Utils_gt_raw);
    var _Utils_ge_raw = function (a, b) { return _Utils_cmp(a, b) >= 0; }, _Utils_ge = F2(_Utils_ge_raw);
    var _Utils_compare_raw = function (x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    }, _Utils_compare = F2(_Utils_compare_raw);
    // COMMON VALUES
    var _Utils_Tuple0 = 0;
    var _Utils_Tuple0_UNUSED = { $: "#0" };
    function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
    function _Utils_Tuple2_UNUSED(a, b) { return { $: "#2", a: a, b: b }; }
    function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
    function _Utils_Tuple3_UNUSED(a, b, c) { return { $: "#3", a: a, b: b, c: c }; }
    function _Utils_chr(c) { return c; }
    function _Utils_chr_UNUSED(c) { return new String(c); }
    const _Utils_update = (oldRecord, updatedFields) => ({ ...oldRecord, ...updatedFields });
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
    function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
    function _List_Cons_UNUSED(hd, tl) { return { $: "::", a: hd, b: tl }; }
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
    var _List_sortBy_raw = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    }, _List_sortBy = F2(_List_sortBy_raw);
    var _List_sortWith_raw = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith = F2(_List_sortWith_raw);
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [value];
    }
    function _JsArray_length(array) {
        return array.length;
    }
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
    var _JsArray_unsafeGet_raw = function (index, array) {
        return array[index];
    }, _JsArray_unsafeGet = F2(_JsArray_unsafeGet_raw);
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
    var _JsArray_slice_raw = function (from, to, array) {
        return array.slice(from, to);
    }, _JsArray_slice = F3(_JsArray_slice_raw);
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
    var _Debug_log_raw = function (tag, value) {
        return value;
    }, _Debug_log = F2(_Debug_log_raw);
    var _Debug_log_UNUSED_raw = function (tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    }, _Debug_log_UNUSED = F2(_Debug_log_UNUSED_raw);
    // TODOS
    function _Debug_todo(moduleName, region) {
        return function (message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function (message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    // TO STRING
    function _Debug_toString(value) {
        return "<internals>";
    }
    function _Debug_toString_UNUSED(value) {
        return _Debug_toAnsiString(false, value);
    }
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
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "\u001B[96m" + string + "\u001B[0m" : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "\u001B[95m" + string + "\u001B[0m" : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "\u001B[93m" + string + "\u001B[0m" : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "\u001B[92m" + string + "\u001B[0m" : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "\u001B[37m" + string + "\u001B[0m" : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "\u001B[36m" + string + "\u001B[0m" : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
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
        if (region.aT.aq === region.a_.aq) {
            return "on line " + region.aT.aq;
        }
        return "on lines " + region.aT.aq + " through " + region.a_.aq;
    }
    // MATH
    var _Basics_add_raw = function (a, b) { return a + b; }, _Basics_add = F2(_Basics_add_raw);
    var _Basics_sub_raw = function (a, b) { return a - b; }, _Basics_sub = F2(_Basics_sub_raw);
    var _Basics_mul_raw = function (a, b) { return a * b; }, _Basics_mul = F2(_Basics_mul_raw);
    var _Basics_fdiv_raw = function (a, b) { return a / b; }, _Basics_fdiv = F2(_Basics_fdiv_raw);
    var _Basics_idiv_raw = function (a, b) { return (a / b) | 0; }, _Basics_idiv = F2(_Basics_idiv_raw);
    var _Basics_pow = F2(Math.pow);
    var _Basics_remainderBy_raw = function (b, a) { return a % b; }, _Basics_remainderBy = F2(_Basics_remainderBy_raw);
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
    // MORE MATH
    function _Basics_toFloat(x) { return x; }
    function _Basics_truncate(n) { return n | 0; }
    function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    // BOOLEANS
    function _Basics_not(bool) { return !bool; }
    var _Basics_and_raw = function (a, b) { return a && b; }, _Basics_and = F2(_Basics_and_raw);
    var _Basics_or_raw = function (a, b) { return a || b; }, _Basics_or = F2(_Basics_or_raw);
    var _Basics_xor_raw = function (a, b) { return a !== b; }, _Basics_xor = F2(_Basics_xor_raw);
    var _String_cons_raw = function (chr, str) {
        return chr + str;
    }, _String_cons = F2(_String_cons_raw);
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word)
            ? $elm$core$Maybe$Just(55296 <= word && word <= 56319
                ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
                : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1)))
            : $elm$core$Maybe$Nothing;
    }
    var _String_append_raw = function (a, b) {
        return a + b;
    }, _String_append = F2(_String_append_raw);
    function _String_length(str) {
        return str.length;
    }
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
    var _String_split_raw = function (sep, str) {
        return str.split(sep);
    }, _String_split = F2(_String_split_raw);
    var _String_join_raw = function (sep, strs) {
        return strs.join(sep);
    }, _String_join = F2(_String_join_raw);
    var _String_slice_raw = function (start, end, str) {
        return str.slice(start, end);
    }, _String_slice = F3(_String_slice_raw);
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
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
    var _String_contains_raw = function (sub, str) {
        return str.indexOf(sub) > -1;
    }, _String_contains = F2(_String_contains_raw);
    var _String_startsWith_raw = function (sub, str) {
        return str.indexOf(sub) === 0;
    }, _String_startsWith = F2(_String_startsWith_raw);
    var _String_endsWith_raw = function (sub, str) {
        return str.length >= sub.length &&
            str.lastIndexOf(sub) === str.length - sub.length;
    }, _String_endsWith = F2(_String_endsWith_raw);
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
    // TO STRING
    function _String_fromNumber(number) {
        return number + "";
    }
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
    function _String_fromList(chars) {
        return _List_toArray(chars).join("");
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr((code < 0 || 1114111 < code)
            ? "\uFFFD"
            :
                (code <= 65535)
                    ? String.fromCharCode(code)
                    :
                        (code -= 65536,
                            String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    /**_UNUSED/
    function _Json_errorToString(error)
    {
        return $elm$json$Json$Decode$errorToString(error);
    }
    //*/
    // CORE DECODERS
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return { $: 2, b: decoder };
    }
    var _Json_decodeInt = _Json_decodePrim(function (value) {
        return (typeof value !== "number")
            ? _Json_expecting("an INT", value)
            :
                (-2147483647 < value && value < 2147483647 && (value | 0) === value)
                    ? $elm$core$Result$Ok(value)
                    :
                        (isFinite(value) && !(value % 1))
                            ? $elm$core$Result$Ok(value)
                            : _Json_expecting("an INT", value);
    });
    var _Json_decodeBool = _Json_decodePrim(function (value) {
        return (typeof value === "boolean")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a BOOL", value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function (value) {
        return (typeof value === "number")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a FLOAT", value);
    });
    var _Json_decodeValue = _Json_decodePrim(function (value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function (value) {
        return (typeof value === "string")
            ? $elm$core$Result$Ok(value)
            : (value instanceof String)
                ? $elm$core$Result$Ok(value + "")
                : _Json_expecting("a STRING", value);
    });
    function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
    function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }
    function _Json_decodeNull(value) { return { $: 5, c: value }; }
    var _Json_decodeField_raw = function (field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    }, _Json_decodeField = F2(_Json_decodeField_raw);
    var _Json_decodeIndex_raw = function (index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    }, _Json_decodeIndex = F2(_Json_decodeIndex_raw);
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen_raw = function (callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    }, _Json_andThen = F2(_Json_andThen_raw);
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    // DECODING OBJECTS
    var _Json_map1_raw = function (f, d1) {
        return _Json_mapMany(f, [d1]);
    }, _Json_map1 = F2(_Json_map1_raw);
    var _Json_map2_raw = function (f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
    }, _Json_map2 = F3(_Json_map2_raw);
    var _Json_map3_raw = function (f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
    }, _Json_map3 = F4(_Json_map3_raw);
    var _Json_map4_raw = function (f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
    }, _Json_map4 = F5(_Json_map4_raw);
    var _Json_map5_raw = function (f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
    }, _Json_map5 = F6(_Json_map5_raw);
    var _Json_map6_raw = function (f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
    }, _Json_map6 = F7(_Json_map6_raw);
    var _Json_map7_raw = function (f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
    }, _Json_map7 = F8(_Json_map7_raw);
    var _Json_map8_raw = function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
    }, _Json_map8 = F9(_Json_map8_raw);
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
    var _Json_run_raw = function (decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    }, _Json_run = F2(_Json_run_raw);
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
    function _Json_isArray(value) {
        return Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
    }
    function _Json_toElmArray(array) {
        return $elm$core$Array$initialize_raw(array.length, function (i) { return array[i]; });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err($elm$json$Json$Decode$Failure_raw("Expecting " + type, _Json_wrap(value)));
    }
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
    var _Json_encode_raw = function (indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    }, _Json_encode = F2(_Json_encode_raw);
    function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
    function _Json_unwrap_UNUSED(value) { return value.a; }
    function _Json_wrap(value) { return value; }
    function _Json_unwrap(value) { return value; }
    function _Json_emptyArray() { return []; }
    function _Json_emptyObject() { return {}; }
    var _Json_addField_raw = function (key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    }, _Json_addField = F3(_Json_addField_raw);
    function _Json_addEntry(func) {
        return F2(function (entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    // TASKS
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen_raw = function (callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    }, _Scheduler_andThen = F2(_Scheduler_andThen_raw);
    var _Scheduler_onError_raw = function (callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    }, _Scheduler_onError = F2(_Scheduler_onError_raw);
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
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
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send_raw = function (proc, msg) {
        return _Scheduler_binding(function (callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Scheduler_send = F2(_Scheduler_send_raw);
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function (callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) {
                task.c();
            }
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
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
    function _Process_sleep(time) {
        return _Scheduler_binding(function (callback) {
            var id = setTimeout(function () {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function () { clearTimeout(id); };
        });
    }
    // PROGRAMS
    var _Platform_worker_raw = function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.a4, impl.bt, impl.b6, function () { return function () { }; });
    }, _Platform_worker = F4(_Platform_worker_raw);
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
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return _Scheduler_andThen_raw(loop, _Scheduler_receive(function (msg) {
                var value = msg.a;
                if (msg.$ === 0) {
                    return A3(onSelfMsg, router, value, state);
                }
                return cmdMap && subMap
                    ? A4(onEffects, router, value.i, value.j, state)
                    : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(_Scheduler_andThen_raw(loop, info.b));
    }
    // ROUTING
    var _Platform_sendToApp_raw = function (router, msg) {
        return _Scheduler_binding(function (callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Platform_sendToApp = F2(_Platform_sendToApp_raw);
    var _Platform_sendToSelf_raw = function (router, msg) {
        return _Scheduler_send_raw(router.h, {
            $: 0,
            a: msg
        });
    }, _Platform_sendToSelf = F2(_Platform_sendToSelf_raw);
    // BAGS
    function _Platform_leaf(home) {
        return function (value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map_raw = function (tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    }, _Platform_map = F2(_Platform_map_raw);
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
    var _Platform_outgoingPortMap_raw = function (tagger, value) { return value; }, _Platform_outgoingPortMap = F2(_Platform_outgoingPortMap_raw);
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
    var _Platform_incomingPortMap_raw = function (tagger, finalTagger) {
        return function (value) {
            return tagger(finalTagger(value));
        };
    }, _Platform_incomingPortMap = F2(_Platform_incomingPortMap_raw);
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
    // TEXT
    function _VirtualDom_text(string) {
        return {
            $: 0,
            a: string
        };
    }
    // NODE
    var _VirtualDom_nodeNS_raw = function (namespace, tag) {
        return F2(function (factList, kidList) {
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
        });
    }, _VirtualDom_nodeNS = F2(_VirtualDom_nodeNS_raw);
    var _VirtualDom_node = _VirtualDom_nodeNS(undefined);
    // KEYED NODE
    var _VirtualDom_keyedNodeNS_raw = function (namespace, tag) {
        return F2(function (factList, kidList) {
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
        });
    }, _VirtualDom_keyedNodeNS = F2(_VirtualDom_keyedNodeNS_raw);
    var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);
    // CUSTOM
    function _VirtualDom_custom(factList, model, render, diff) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
        };
    }
    // MAP
    var _VirtualDom_map_raw = function (tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
        };
    }, _VirtualDom_map = F2(_VirtualDom_map_raw);
    // LAZY
    function _VirtualDom_thunk(refs, thunk) {
        return {
            $: 5,
            l: refs,
            m: thunk,
            k: undefined
        };
    }
    var _VirtualDom_lazy_raw = function (func, a) {
        return _VirtualDom_thunk([func, a], function () {
            return func(a);
        });
    }, _VirtualDom_lazy = F2(_VirtualDom_lazy_raw);
    var _VirtualDom_lazy2_raw = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return A2(func, a, b);
        });
    }, _VirtualDom_lazy2 = F3(_VirtualDom_lazy2_raw);
    var _VirtualDom_lazy3_raw = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return A3(func, a, b, c);
        });
    }, _VirtualDom_lazy3 = F4(_VirtualDom_lazy3_raw);
    var _VirtualDom_lazy4_raw = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return A4(func, a, b, c, d);
        });
    }, _VirtualDom_lazy4 = F5(_VirtualDom_lazy4_raw);
    var _VirtualDom_lazy5_raw = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return A5(func, a, b, c, d, e);
        });
    }, _VirtualDom_lazy5 = F6(_VirtualDom_lazy5_raw);
    var _VirtualDom_lazy6_raw = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return A6(func, a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6 = F7(_VirtualDom_lazy6_raw);
    var _VirtualDom_lazy7_raw = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return A7(func, a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7 = F8(_VirtualDom_lazy7_raw);
    var _VirtualDom_lazy8_raw = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return A8(func, a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8 = F9(_VirtualDom_lazy8_raw);
    // FACTS
    var _VirtualDom_on_raw = function (key, handler) {
        return {
            $: "a0",
            n: key,
            o: handler
        };
    }, _VirtualDom_on = F2(_VirtualDom_on_raw);
    var _VirtualDom_style_raw = function (key, value) {
        return {
            $: "a1",
            n: key,
            o: value
        };
    }, _VirtualDom_style = F2(_VirtualDom_style_raw);
    var _VirtualDom_property_raw = function (key, value) {
        return {
            $: "a2",
            n: key,
            o: value
        };
    }, _VirtualDom_property = F2(_VirtualDom_property_raw);
    var _VirtualDom_attribute_raw = function (key, value) {
        return {
            $: "a3",
            n: key,
            o: value
        };
    }, _VirtualDom_attribute = F2(_VirtualDom_attribute_raw);
    var _VirtualDom_attributeNS_raw = function (namespace, key, value) {
        return {
            $: "a4",
            n: key,
            o: { f: namespace, o: value }
        };
    }, _VirtualDom_attributeNS = F3(_VirtualDom_attributeNS_raw);
    // XSS ATTACK VECTOR CHECKS
    function _VirtualDom_noScript(tag) {
        return tag == "script" ? "p" : tag;
    }
    function _VirtualDom_noOnOrFormAction(key) {
        return /^(on|formAction$)/i.test(key) ? "data-" + key : key;
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key) {
        return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
    }
    function _VirtualDom_noJavaScriptUri(value) {
        return /^javascript:/i.test(value.replace(/\s/g, "")) ? "" : value;
    }
    function _VirtualDom_noJavaScriptUri_UNUSED(value) {
        return /^javascript:/i.test(value.replace(/\s/g, ""))
            ? "javascript:alert(\"This is an XSS vector. Please use ports or web components instead.\")"
            : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value)
            ? "javascript:alert(\"This is an XSS vector. Please use ports or web components instead.\")"
            : value;
    }
    // MAP FACTS
    var _VirtualDom_mapAttribute_raw = function (func, attr) {
        return (attr.$ === "a0")
            ? _VirtualDom_on_raw(attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
    }, _VirtualDom_mapAttribute = F2(_VirtualDom_mapAttribute_raw);
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
    var _VirtualDom_mapEventTuple_raw = function (func, tuple) {
        return _Utils_Tuple2(func(tuple.a), tuple.b);
    }, _VirtualDom_mapEventTuple = F2(_VirtualDom_mapEventTuple_raw);
    var _VirtualDom_mapEventRecord_raw = function (func, record) {
        return {
            L: func(record.L),
            aU: record.aU,
            aP: record.aP
        };
    }, _VirtualDom_mapEventRecord = F2(_VirtualDom_mapEventRecord_raw);
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
            var message = !tag ? value : tag < 3 ? value.a : value.L;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.aU;
            var currentEventNode = (stopPropagation && event.stopPropagation(),
                (tag == 2 ? value.b : tag == 3 && value.aP) && event.preventDefault(),
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
    function _VirtualDom_equalEvents(x, y) {
        return x.$ == y.$ && _Json_equality(x.a, y.a);
    }
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
    var _Browser_element = _Debugger_element || F4(function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.a4, impl.bt, impl.b6, function (sendToApp, initialModel) {
            var view = impl.bu;
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
        });
    });
    // DOCUMENT
    var _Debugger_document;
    var _Browser_document = _Debugger_document || F4(function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.a4, impl.bt, impl.b6, function (sendToApp, initialModel) {
            var divertHrefToApp = impl.aQ && impl.aQ(sendToApp);
            var view = impl.bu;
            var title = _VirtualDom_doc.title;
            var bodyNode = _VirtualDom_doc.body;
            var currNode = _VirtualDom_virtualize(bodyNode);
            return _Browser_makeAnimator(initialModel, function (model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view(model);
                var nextNode = _VirtualDom_node("body")(_List_Nil)(doc.bD);
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                (title !== doc.b7) && (_VirtualDom_doc.title = title = doc.b7);
            });
        });
    });
    // ANIMATION
    var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== "undefined"
        ? cancelAnimationFrame
        : function (id) { clearTimeout(id); };
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined"
        ? requestAnimationFrame
        : function (callback) { return setTimeout(callback, 1000 / 60); };
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
        var onUrlChange = impl.b0;
        var onUrlRequest = impl.b1;
        var key = function () { key.a(onUrlChange(_Browser_getUrl())); };
        return _Browser_document({
            aQ: function (sendToApp) {
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
                            && curr.bh === next.bh
                            && curr.a2 === next.a2
                            && curr.bc.a === next.bc.a)
                            ? $elm$browser$Browser$Internal(next)
                            : $elm$browser$Browser$External(href)));
                    }
                });
            },
            a4: function (flags) {
                return A3(impl.a4, flags, _Browser_getUrl(), key);
            },
            bu: impl.bu,
            bt: impl.bt,
            b6: impl.b6
        });
    }
    function _Browser_getUrl() {
        return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
    }
    var _Browser_go_raw = function (key, n) {
        return $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function () {
            n && history.go(n);
            key();
        }));
    }, _Browser_go = F2(_Browser_go_raw);
    var _Browser_pushUrl_raw = function (key, url) {
        return $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function () {
            history.pushState({}, "", url);
            key();
        }));
    }, _Browser_pushUrl = F2(_Browser_pushUrl_raw);
    var _Browser_replaceUrl_raw = function (key, url) {
        return $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function () {
            history.replaceState({}, "", url);
            key();
        }));
    }, _Browser_replaceUrl = F2(_Browser_replaceUrl_raw);
    // GLOBAL EVENTS
    var _Browser_fakeNode = { addEventListener: function () { }, removeEventListener: function () { } };
    var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
    var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
    var _Browser_on_raw = function (node, eventName, sendToSelf) {
        return _Scheduler_spawn(_Scheduler_binding(function (callback) {
            function handler(event) { _Scheduler_rawSpawn(sendToSelf(event)); }
            node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
            return function () { node.removeEventListener(eventName, handler); };
        }));
    }, _Browser_on = F3(_Browser_on_raw);
    var _Browser_decodeEvent_raw = function (decoder, event) {
        var result = _Json_runHelp(decoder, event);
        return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
    }, _Browser_decodeEvent = F2(_Browser_decodeEvent_raw);
    // PAGE VISIBILITY
    function _Browser_visibilityInfo() {
        return (typeof _VirtualDom_doc.hidden !== "undefined")
            ? { bS: "hidden", bG: "visibilitychange" }
            :
                (typeof _VirtualDom_doc.mozHidden !== "undefined")
                    ? { bS: "mozHidden", bG: "mozvisibilitychange" }
                    :
                        (typeof _VirtualDom_doc.msHidden !== "undefined")
                            ? { bS: "msHidden", bG: "msvisibilitychange" }
                            :
                                (typeof _VirtualDom_doc.webkitHidden !== "undefined")
                                    ? { bS: "webkitHidden", bG: "webkitvisibilitychange" }
                                    : { bS: "hidden", bG: "visibilitychange" };
    }
    // ANIMATION FRAMES
    function _Browser_rAF() {
        return _Scheduler_binding(function (callback) {
            var id = _Browser_requestAnimationFrame(function () {
                callback(_Scheduler_succeed(Date.now()));
            });
            return function () {
                _Browser_cancelAnimationFrame(id);
            };
        });
    }
    function _Browser_now() {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(Date.now()));
        });
    }
    // DOM STUFF
    function _Browser_withNode(id, doStuff) {
        return _Scheduler_binding(function (callback) {
            _Browser_requestAnimationFrame(function () {
                var node = document.getElementById(id);
                callback(node
                    ? _Scheduler_succeed(doStuff(node))
                    : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id)));
            });
        });
    }
    function _Browser_withWindow(doStuff) {
        return _Scheduler_binding(function (callback) {
            _Browser_requestAnimationFrame(function () {
                callback(_Scheduler_succeed(doStuff()));
            });
        });
    }
    // FOCUS and BLUR
    var _Browser_call_raw = function (functionName, id) {
        return _Browser_withNode(id, function (node) {
            node[functionName]();
            return _Utils_Tuple0;
        });
    }, _Browser_call = F2(_Browser_call_raw);
    // WINDOW VIEWPORT
    function _Browser_getViewport() {
        return {
            bm: _Browser_getScene(),
            bv: {
                by: _Browser_window.pageXOffset,
                bz: _Browser_window.pageYOffset,
                bw: _Browser_doc.documentElement.clientWidth,
                a1: _Browser_doc.documentElement.clientHeight
            }
        };
    }
    function _Browser_getScene() {
        var body = _Browser_doc.body;
        var elem = _Browser_doc.documentElement;
        return {
            bw: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
            a1: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
        };
    }
    var _Browser_setViewport_raw = function (x, y) {
        return _Browser_withWindow(function () {
            _Browser_window.scroll(x, y);
            return _Utils_Tuple0;
        });
    }, _Browser_setViewport = F2(_Browser_setViewport_raw);
    // ELEMENT VIEWPORT
    function _Browser_getViewportOf(id) {
        return _Browser_withNode(id, function (node) {
            return {
                bm: {
                    bw: node.scrollWidth,
                    a1: node.scrollHeight
                },
                bv: {
                    by: node.scrollLeft,
                    bz: node.scrollTop,
                    bw: node.clientWidth,
                    a1: node.clientHeight
                }
            };
        });
    }
    var _Browser_setViewportOf_raw = function (id, x, y) {
        return _Browser_withNode(id, function (node) {
            node.scrollLeft = x;
            node.scrollTop = y;
            return _Utils_Tuple0;
        });
    }, _Browser_setViewportOf = F3(_Browser_setViewportOf_raw);
    // ELEMENT
    function _Browser_getElement(id) {
        return _Browser_withNode(id, function (node) {
            var rect = node.getBoundingClientRect();
            var x = _Browser_window.pageXOffset;
            var y = _Browser_window.pageYOffset;
            return {
                bm: _Browser_getScene(),
                bv: {
                    by: x,
                    bz: y,
                    bw: _Browser_doc.documentElement.clientWidth,
                    a1: _Browser_doc.documentElement.clientHeight
                },
                bN: {
                    by: x + rect.left,
                    bz: y + rect.top,
                    bw: rect.width,
                    a1: rect.height
                }
            };
        });
    }
    // LOAD and RELOAD
    function _Browser_reload(skipCache) {
        return $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function (callback) {
            _VirtualDom_doc.location.reload(skipCache);
        }));
    }
    function _Browser_load(url) {
        return $elm$core$Task$perform_raw($elm$core$Basics$never, _Scheduler_binding(function (callback) {
            try {
                _Browser_window.location = url;
            }
            catch (err) {
                // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
                // Other browsers reload the page, so let's be consistent about that.
                _VirtualDom_doc.location.reload(false);
            }
        }));
    }
    var _Benchmark_getTimestamp = typeof performance !== "undefined"
        ? performance.now.bind(performance)
        : Date.now;
    // sample : Int -> Operation -> Task Error Float
    var _Benchmark_sample_raw = function (n, fn) {
        return _Scheduler_binding(function (callback) {
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
        });
    }, _Benchmark_sample = F2(_Benchmark_sample_raw);
    // operation : (() -> a) -> Operation
    function _Benchmark_operation(thunk) {
        return thunk;
    }
    var _Bitwise_and_raw = function (a, b) {
        return a & b;
    }, _Bitwise_and = F2(_Bitwise_and_raw);
    var _Bitwise_or_raw = function (a, b) {
        return a | b;
    }, _Bitwise_or = F2(_Bitwise_or_raw);
    var _Bitwise_xor_raw = function (a, b) {
        return a ^ b;
    }, _Bitwise_xor = F2(_Bitwise_xor_raw);
    function _Bitwise_complement(a) {
        return ~a;
    }
    ;
    var _Bitwise_shiftLeftBy_raw = function (offset, a) {
        return a << offset;
    }, _Bitwise_shiftLeftBy = F2(_Bitwise_shiftLeftBy_raw);
    var _Bitwise_shiftRightBy_raw = function (offset, a) {
        return a >> offset;
    }, _Bitwise_shiftRightBy = F2(_Bitwise_shiftRightBy_raw);
    var _Bitwise_shiftRightZfBy_raw = function (offset, a) {
        return a >>> offset;
    }, _Bitwise_shiftRightZfBy = F2(_Bitwise_shiftRightZfBy_raw);
    // CREATE
    var _Regex_never = /.^/;
    var _Regex_fromStringWith_raw = function (options, string) {
        var flags = "g";
        if (options.bZ) {
            flags += "m";
        }
        if (options.bF) {
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
    var _Regex_contains_raw = function (re, string) {
        return string.match(re) !== null;
    }, _Regex_contains = F2(_Regex_contains_raw);
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
    var $elm$core$Basics$always_raw = function (a, _v0) {
        return a;
    }, $elm$core$Basics$always = F2($elm$core$Basics$always_raw);
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
    var $elm$core$Dict$toList = function (dict) {
        return $elm$core$Dict$foldr_raw(F3(function (key, value, list) {
            return _List_Cons(_Utils_Tuple2(key, value), list);
        }), _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function (dict) {
        return $elm$core$Dict$foldr_raw(F3(function (key, value, keyList) {
            return _List_Cons(key, keyList);
        }), _List_Nil, dict);
    };
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
    var $elm$core$Array$toList = function (array) {
        return $elm$core$Array$foldr_raw($elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Result$Err = function (a) {
        return { $: 1, a: a };
    };
    var $elm$json$Json$Decode$Failure_raw = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $elm$json$Json$Decode$Failure = F2($elm$json$Json$Decode$Failure_raw);
    var $elm$json$Json$Decode$Field_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$json$Json$Decode$Field = F2($elm$json$Json$Decode$Field_raw);
    var $elm$json$Json$Decode$Index_raw = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$json$Json$Decode$Index = F2($elm$json$Json$Decode$Index_raw);
    var $elm$core$Result$Ok = function (a) {
        return { $: 0, a: a };
    };
    var $elm$json$Json$Decode$OneOf = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Basics$False = 1;
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function (a) { return { $: 0, a }; };
    var $elm$core$Maybe$Nothing = { $: 1, a: null };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join_raw = function (sep, chunks) {
        return _String_join_raw(sep, _List_toArray(chunks));
    }, $elm$core$String$join = F2($elm$core$String$join_raw);
    var $elm$core$String$split_raw = function (sep, string) {
        return _List_fromArray(_String_split_raw(sep, string));
    }, $elm$core$String$split = F2($elm$core$String$split_raw);
    var $elm$json$Json$Decode$indent = function (str) {
        return $elm$core$String$join_raw("\n    ", $elm$core$String$split_raw("\n", str));
    };
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
    var $elm$core$List$length = function (xs) {
        return $elm$core$List$foldl_raw(F2(function (_v0, i) {
            return i + 1;
        }), 0, xs);
    };
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
    var $elm$core$List$range_raw = function (lo, hi) {
        return $elm$core$List$rangeHelp_raw(lo, hi, _List_Nil);
    }, $elm$core$List$range = F2($elm$core$List$range_raw);
    var $elm$core$List$indexedMap_raw = function (f, xs) {
        return _List_map2_raw(f, $elm$core$List$range_raw(0, $elm$core$List$length(xs) - 1), xs);
    }, $elm$core$List$indexedMap = F2($elm$core$List$indexedMap_raw);
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
    var $elm$core$Char$isAlpha = function (_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 57) && (48 <= code);
    };
    var $elm$core$Char$isAlphaNum = function (_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    };
    var $elm$core$List$reverse = function (list) {
        return $elm$core$List$foldl_raw($elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf_raw = function (i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    }, $elm$json$Json$Decode$errorOneOf = F2($elm$json$Json$Decode$errorOneOf_raw);
    var $elm$json$Json$Decode$errorToString = function (error) {
        return $elm$json$Json$Decode$errorToStringHelp_raw(error, _List_Nil);
    };
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
    var $elm$core$Array$Array_elm_builtin_raw = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $elm$core$Array$Array_elm_builtin = F4($elm$core$Array$Array_elm_builtin_raw);
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase_raw = function (base, number) {
        return _Basics_log(number) / _Basics_log(base);
    }, $elm$core$Basics$logBase = F2($elm$core$Basics$logBase_raw);
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling($elm$core$Basics$logBase_raw(2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = $elm$core$Array$Array_elm_builtin_raw(0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Basics$apL_raw = function (f, x) {
        return f(x);
    }, $elm$core$Basics$apL = F2($elm$core$Basics$apL_raw);
    var $elm$core$Basics$apR_raw = function (x, f) {
        return f(x);
    }, $elm$core$Basics$apR = F2($elm$core$Basics$apR_raw);
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max_raw = function (x, y) {
        return (_Utils_cmp(x, y) > 0) ? x : y;
    }, $elm$core$Basics$max = F2($elm$core$Basics$max_raw);
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function (a) {
        return { $: 0, a: a };
    };
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
        if (!builder.l) {
            return $elm$core$Array$Array_elm_builtin_raw($elm$core$Elm$JsArray$length(builder.n), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.n);
        }
        else {
            var treeLen = builder.l * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor($elm$core$Basics$logBase_raw($elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.o) : builder.o;
            var tree = $elm$core$Array$treeFromBuilder_raw(correctNodeList, builder.l);
            return $elm$core$Array$Array_elm_builtin_raw($elm$core$Elm$JsArray$length(builder.n) + treeLen, $elm$core$Basics$max_raw(5, depth * $elm$core$Array$shiftStep), tree, builder.n);
        }
    }, $elm$core$Array$builderToArray = F2($elm$core$Array$builderToArray_raw);
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp_raw = function (fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while (true) {
            if (fromIndex < 0) {
                return $elm$core$Array$builderToArray_raw(false, { o: nodeList, l: (len / $elm$core$Array$branchFactor) | 0, n: tail });
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
    var $elm$browser$Browser$External = function (a) {
        return { $: 1, a: a };
    };
    var $elm$browser$Browser$Internal = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Basics$identity = function (x) {
        return x;
    };
    var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
    var $elm$url$Url$Http = 0;
    var $elm$url$Url$Https = 1;
    var $elm$url$Url$Url_raw = function (protocol, host, port_, path, query, fragment) {
        return { a0: fragment, a2: host, a9: path, bc: port_, bh: protocol, bi: query };
    }, $elm$url$Url$Url = F6($elm$url$Url$Url_raw);
    var $elm$core$String$contains = _String_contains;
    var $elm$core$String$length = _String_length;
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft_raw = function (n, string) {
        return (n < 1) ? string : _String_slice_raw(n, $elm$core$String$length(string), string);
    }, $elm$core$String$dropLeft = F2($elm$core$String$dropLeft_raw);
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = function (string) {
        return string === "";
    };
    var $elm$core$String$left_raw = function (n, string) {
        return (n < 1) ? "" : _String_slice_raw(0, n, string);
    }, $elm$core$String$left = F2($elm$core$String$left_raw);
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
    var $elm$url$Url$fromString = function (str) {
        return _String_startsWith_raw("http://", str) ? $elm$url$Url$chompAfterProtocol_raw(0, $elm$core$String$dropLeft_raw(7, str)) : (_String_startsWith_raw("https://", str) ? $elm$url$Url$chompAfterProtocol_raw(1, $elm$core$String$dropLeft_raw(8, str)) : $elm$core$Maybe$Nothing);
    };
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
    var $elm$core$List$foldr_raw = function (fn, acc, ls) {
        return $elm$core$List$foldrHelper_raw(fn, acc, 0, ls);
    }, $elm$core$List$foldr = F3($elm$core$List$foldr_raw);
    var $elm$core$List$map_raw = function (f, xs) {
        return $elm$core$List$foldr_raw(F2(function (x, acc) {
            return _List_Cons(f(x), acc);
        }), _List_Nil, xs);
    }, $elm$core$List$map = F2($elm$core$List$map_raw);
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map_raw = function (func, taskA) {
        return _Scheduler_andThen_raw(function (a) {
            return $elm$core$Task$succeed(func(a));
        }, taskA);
    }, $elm$core$Task$map = F2($elm$core$Task$map_raw);
    var $elm$core$Task$map2_raw = function (func, taskA, taskB) {
        return _Scheduler_andThen_raw(function (a) {
            return _Scheduler_andThen_raw(function (b) {
                return $elm$core$Task$succeed(A2(func, a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2 = F3($elm$core$Task$map2_raw);
    var $elm$core$Task$sequence = function (tasks) {
        return $elm$core$List$foldr_raw($elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd_raw = function (router, _v0) {
        var task = _v0;
        return _Scheduler_spawn(_Scheduler_andThen_raw($elm$core$Platform$sendToApp(router), task));
    }, $elm$core$Task$spawnCmd = F2($elm$core$Task$spawnCmd_raw);
    var $elm$core$Task$onEffects_raw = function (router, commands, state) {
        return $elm$core$Task$map_raw(function (_v0) {
            return 0;
        }, $elm$core$Task$sequence($elm$core$List$map_raw($elm$core$Task$spawnCmd(router), commands)));
    }, $elm$core$Task$onEffects = F3($elm$core$Task$onEffects_raw);
    var $elm$core$Task$onSelfMsg_raw = function (_v0, _v1, _v2) {
        return $elm$core$Task$succeed(0);
    }, $elm$core$Task$onSelfMsg = F3($elm$core$Task$onSelfMsg_raw);
    var $elm$core$Task$cmdMap_raw = function (tagger, _v0) {
        var task = _v0;
        return $elm$core$Task$map_raw(tagger, task);
    }, $elm$core$Task$cmdMap = F2($elm$core$Task$cmdMap_raw);
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform_raw = function (toMessage, task) {
        return $elm$core$Task$command($elm$core$Task$map_raw(toMessage, task));
    }, $elm$core$Task$perform = F2($elm$core$Task$perform_raw);
    var $elm$browser$Browser$element = _Browser_element;
    var $elm_explorations$benchmark$Benchmark$Runner$App$Update = $elm$core$Basics$identity;
    var $elm$core$Process$sleep = _Process_sleep;
    var $elm_explorations$benchmark$Benchmark$Runner$App$breakForRender = function (task) {
        return _Scheduler_andThen_raw(function (_v0) {
            return task;
        }, $elm$core$Process$sleep(0));
    };
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
    var $elm$core$Basics$composeL_raw = function (g, f, x) {
        return g(f(x));
    }, $elm$core$Basics$composeL = F3($elm$core$Basics$composeL_raw);
    var $elm$core$Basics$not = _Basics_not;
    var $elm$core$List$all_raw = function (isOkay, list) {
        return !$elm$core$List$any_raw(A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay), list);
    }, $elm$core$List$all = F2($elm$core$List$all_raw);
    var $elm$core$Basics$clamp_raw = function (low, high, number) {
        return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
    }, $elm$core$Basics$clamp = F3($elm$core$Basics$clamp_raw);
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
        return $elm$core$Dict$foldl_raw(F3(function (_v1, times, acc) {
            return $elm$core$List$length(times) + acc;
        }), 0, samples);
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
    var $elm_explorations$benchmark$Benchmark$Benchmark$Group_raw = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $elm_explorations$benchmark$Benchmark$Benchmark$Group = F2($elm_explorations$benchmark$Benchmark$Benchmark$Group_raw);
    var $elm_explorations$benchmark$Benchmark$Benchmark$Series_raw = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm_explorations$benchmark$Benchmark$Benchmark$Series = F2($elm_explorations$benchmark$Benchmark$Benchmark$Series_raw);
    var $elm_explorations$benchmark$Benchmark$Benchmark$Single_raw = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $elm_explorations$benchmark$Benchmark$Benchmark$Single = F3($elm_explorations$benchmark$Benchmark$Benchmark$Single_raw);
    var $elm_explorations$benchmark$Benchmark$Status$Failure = function (a) {
        return { $: 3, a: a };
    };
    var $elm_explorations$benchmark$Benchmark$Status$MeasurementError = function (a) {
        return { $: 0, a: a };
    };
    var $elm_explorations$benchmark$Benchmark$Status$Pending_raw = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $elm_explorations$benchmark$Benchmark$Status$Pending = F2($elm_explorations$benchmark$Benchmark$Status$Pending_raw);
    var $elm_explorations$benchmark$Benchmark$Status$Unsized = { $: 1 };
    var $elm_explorations$benchmark$Benchmark$Status$bucketSpacingRatio = 2;
    var $elm_explorations$benchmark$Benchmark$Samples$Samples = $elm$core$Basics$identity;
    var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm_explorations$benchmark$Benchmark$Samples$empty = $elm$core$Dict$empty;
    var $elm_explorations$benchmark$Benchmark$Status$AnalysisError = function (a) {
        return { $: 1, a: a };
    };
    var $elm_explorations$benchmark$Benchmark$Status$Success_raw = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $elm_explorations$benchmark$Benchmark$Status$Success = F2($elm_explorations$benchmark$Benchmark$Status$Success_raw);
    var $elm$core$Dict$Black = 1;
    var $elm$core$Dict$RBNode_elm_builtin_raw = function (a, b, c, d, e) {
        return { $: -1, a: a, b: b, c: c, d: d, e: e };
    }, $elm$core$Dict$RBNode_elm_builtin = F5($elm$core$Dict$RBNode_elm_builtin_raw);
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
    var $elm_explorations$benchmark$Benchmark$Samples$pointify = function (samples) {
        return $elm$core$Dict$foldr_raw(F3(function (sampleSize, values, acc) {
            return _Utils_ap($elm$core$List$map_raw(function (b) {
                return _Utils_Tuple2(sampleSize, b);
            }, values), acc);
        }), _List_Nil, samples);
    };
    var $BrianHicks$elm_trend$Trend$Linear$predictY_raw = function (_v0, x) {
        var slope = _v0.aR;
        var intercept = _v0.aL;
        return (slope * x) + intercept;
    }, $BrianHicks$elm_trend$Trend$Linear$predictY = F2($BrianHicks$elm_trend$Trend$Linear$predictY_raw);
    var $BrianHicks$elm_trend$Trend$Math$AllZeros = { $: 1 };
    var $BrianHicks$elm_trend$Trend$Math$NeedMoreValues = function (a) {
        return { $: 0, a: a };
    };
    var $BrianHicks$elm_trend$Trend$Linear$Robust_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $BrianHicks$elm_trend$Trend$Linear$Robust = F2($BrianHicks$elm_trend$Trend$Linear$Robust_raw);
    var $BrianHicks$elm_trend$Trend$Linear$Trend_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $BrianHicks$elm_trend$Trend$Linear$Trend = F2($BrianHicks$elm_trend$Trend$Linear$Trend_raw);
    var $elm$core$List$filter_raw = function (isGood, list) {
        return $elm$core$List$foldr_raw(F2(function (x, xs) {
            return isGood(x) ? _List_Cons(x, xs) : xs;
        }), _List_Nil, list);
    }, $elm$core$List$filter = F2($elm$core$List$filter_raw);
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
    var $elm$core$List$sort = function (xs) {
        return _List_sortBy_raw($elm$core$Basics$identity, xs);
    };
    var $BrianHicks$elm_trend$Trend$Linear$Line_raw = function (slope, intercept) {
        return { aL: intercept, aR: slope };
    }, $BrianHicks$elm_trend$Trend$Linear$Line = F2($BrianHicks$elm_trend$Trend$Linear$Line_raw);
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
    var $elm$core$List$sum = function (numbers) {
        return $elm$core$List$foldl_raw($elm$core$Basics$add, 0, numbers);
    };
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
    var $elm$core$List$takeTailRec_raw = function (n, list) {
        return $elm$core$List$reverse($elm$core$List$takeReverse_raw(n, list, _List_Nil));
    }, $elm$core$List$takeTailRec = F2($elm$core$List$takeTailRec_raw);
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
    var $elm$core$List$take_raw = function (n, list) {
        return $elm$core$List$takeFast_raw(0, n, list);
    }, $elm$core$List$take = F2($elm$core$List$take_raw);
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
        var intercept = $elm$core$Maybe$andThen_raw($BrianHicks$elm_trend$Trend$Linear$percentile(pct), $elm$core$Maybe$map_raw($elm$core$List$sort, $elm$core$Maybe$map_raw(function (m) {
            return $elm$core$List$map_raw(function (_v0) {
                var x = _v0.a;
                var y = _v0.b;
                return y - (m * x);
            }, points);
        }, slope)));
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
                return $elm$core$Result$fromMaybe_raw($BrianHicks$elm_trend$Trend$Math$AllZeros, $elm$core$Maybe$map3_raw(F3(function (trendLine, lower, upper) {
                    return $BrianHicks$elm_trend$Trend$Linear$Trend_raw(trendLine, $BrianHicks$elm_trend$Trend$Linear$Robust_raw(lower, upper));
                }), $BrianHicks$elm_trend$Trend$Linear$theilSenLine_raw(0.5, finiteSlopes, values), $BrianHicks$elm_trend$Trend$Linear$theilSenLine_raw(0.975, slopes, values), $BrianHicks$elm_trend$Trend$Linear$theilSenLine_raw(0.025, slopes, values)));
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
        }), _Utils_Tuple2($elm$core$Dict$empty, $elm$core$Dict$empty)), $elm$core$Result$map_raw(function (line) {
            return $elm$core$Dict$map_raw(F2(function (sampleSize, values) {
                var predicted = $BrianHicks$elm_trend$Trend$Linear$predictY_raw(line, sampleSize);
                var upperBound = predicted * 1.1;
                var lowerBound = predicted / 1.1;
                return $elm$core$List$partition_raw(function (v) {
                    return (_Utils_cmp(lowerBound, v) < 0) && (_Utils_cmp(v, upperBound) < 0);
                }, values);
            }), samples);
        }, $elm$core$Result$map_raw($BrianHicks$elm_trend$Trend$Linear$line, $BrianHicks$elm_trend$Trend$Linear$robust($elm_explorations$benchmark$Benchmark$Samples$pointify(samples))))));
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
    var $elm_explorations$benchmark$Benchmark$Samples$points = function (samples) {
        return $elm$core$Tuple$mapSecond_raw($elm_explorations$benchmark$Benchmark$Samples$pointify, $elm$core$Tuple$mapFirst_raw($elm_explorations$benchmark$Benchmark$Samples$pointify, $elm_explorations$benchmark$Benchmark$Samples$groups(samples)));
    };
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
        var helper = function (seriesMean) {
            return $elm$core$Result$map_raw($elm$core$Basics$sqrt, $BrianHicks$elm_trend$Trend$Math$mean($elm$core$List$map_raw(function (n) {
                return A2($elm$core$Basics$pow, n - seriesMean, 2);
            }, numbers)));
        };
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
                var standardize_raw = function (meanResult, stddevResult, series) {
                    return $elm$core$Result$map2_raw(F2(function (meanValue, stddevValue) {
                        return $elm$core$List$map_raw(function (point) {
                            return (point - meanValue) / stddevValue;
                        }, series);
                    }), meanResult, stddevResult);
                }, standardize = F3(standardize_raw);
                var _v1 = $elm$core$List$unzip(values);
                var xs = _v1.a;
                var ys = _v1.b;
                var summedProduct = $elm$core$Result$map_raw($elm$core$List$sum, $elm$core$Result$map2_raw(F2(function (stdX, stdY) {
                    return _List_map2_raw($elm$core$Basics$mul, stdX, stdY);
                }), standardize_raw($BrianHicks$elm_trend$Trend$Math$mean(xs), $BrianHicks$elm_trend$Trend$Math$stddev(xs), xs), standardize_raw($BrianHicks$elm_trend$Trend$Math$mean(ys), $BrianHicks$elm_trend$Trend$Math$stddev(ys), ys)));
                return $elm$core$Result$andThen_raw(function (val) {
                    return $elm$core$Basics$isNaN(val) ? $elm$core$Result$Err($BrianHicks$elm_trend$Trend$Math$AllZeros) : $elm$core$Result$Ok(val);
                }, $elm$core$Result$map_raw(function (sum) {
                    return sum / $elm$core$List$length(values);
                }, summedProduct));
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
                var slopeResult = $elm$core$Result$map3_raw(F3(function (correl, stddevY, stddevX) {
                    return (correl * stddevY) / stddevX;
                }), $BrianHicks$elm_trend$Trend$Math$correlation(values), $BrianHicks$elm_trend$Trend$Math$stddev(ys), $BrianHicks$elm_trend$Trend$Math$stddev(xs));
                var intercept = $elm$core$Result$map3_raw(F3(function (meanY, slope, meanX) {
                    return meanY - (slope * meanX);
                }), $BrianHicks$elm_trend$Trend$Math$mean(ys), slopeResult, $BrianHicks$elm_trend$Trend$Math$mean(xs));
                return $elm$core$Result$map_raw(function (trendLine) {
                    return $BrianHicks$elm_trend$Trend$Linear$Trend_raw(trendLine, values);
                }, $elm$core$Result$map2_raw($BrianHicks$elm_trend$Trend$Linear$Line, slopeResult, intercept));
            }
        }
    };
    var $elm_explorations$benchmark$Benchmark$Samples$trend = function (samples) {
        return $BrianHicks$elm_trend$Trend$Linear$quick($elm_explorations$benchmark$Benchmark$Samples$points(samples).a);
    };
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
    var $elm$core$Basics$composeR_raw = function (f, g, x) {
        return g(f(x));
    }, $elm$core$Basics$composeR = F3($elm$core$Basics$composeR_raw);
    var $elm$core$Basics$min_raw = function (x, y) {
        return (_Utils_cmp(x, y) < 0) ? x : y;
    }, $elm$core$Basics$min = F2($elm$core$Basics$min_raw);
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
    var $elm$core$List$repeat_raw = function (n, value) {
        return $elm$core$List$repeatHelp_raw(_List_Nil, n, value);
    }, $elm$core$List$repeat = F2($elm$core$List$repeat_raw);
    var $elm_explorations$benchmark$Benchmark$LowLevel$StackOverflow = { $: 0 };
    var $elm_explorations$benchmark$Benchmark$LowLevel$UnknownError = function (a) {
        return { $: 1, a: a };
    };
    var $elm_explorations$benchmark$Benchmark$LowLevel$sample_raw = function (n, operation_) {
        return _Benchmark_sample_raw(n, operation_);
    }, $elm_explorations$benchmark$Benchmark$LowLevel$sample = F2($elm_explorations$benchmark$Benchmark$LowLevel$sample_raw);
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
        var sampleSize = function (i) {
            return i * 10;
        };
        var resample = F2(function (iteration, total) {
            return (_Utils_cmp(total, minimumRuntime) < 0) ? _Scheduler_andThen_raw(resample(iteration + 1), $elm$core$Task$map_raw(A2($elm$core$Basics$composeR, $elm$core$List$minimum, $elm$core$Maybe$withDefault(0)), $elm$core$Task$sequence($elm$core$List$repeat_raw(3, $elm_explorations$benchmark$Benchmark$LowLevel$sample_raw(sampleSize(iteration), operation_))))) : $elm$core$Task$succeed(sampleSize(iteration));
        });
        return $elm$core$Task$map_raw($elm_explorations$benchmark$Benchmark$LowLevel$standardizeSampleSize, A2(resample, 1, 0));
    }, $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSizeWithMinimum = F2($elm_explorations$benchmark$Benchmark$LowLevel$findSampleSizeWithMinimum_raw);
    var $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSize = $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSizeWithMinimum($elm_explorations$benchmark$Benchmark$LowLevel$defaultMinimum);
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
        var helper = function (soFar) {
            return (_Utils_cmp(soFar, toCollect) > -1) ? $elm$core$Task$succeed(0) : _Scheduler_andThen_raw(helper, $elm$core$Task$map_raw($elm$core$Basics$add(soFar), $elm_explorations$benchmark$Benchmark$LowLevel$sample_raw(sampleSize, operation_)));
        };
        return helper(0);
    };
    var $elm_explorations$benchmark$Benchmark$stepLowLevel_raw = function (operation, status) {
        switch (status.$) {
            case 0:
                return _Scheduler_onError_raw(A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$Task$succeed, $elm_explorations$benchmark$Benchmark$Status$Failure), $elm_explorations$benchmark$Benchmark$Status$MeasurementError), $elm$core$Task$map_raw(function (_v1) {
                    return $elm_explorations$benchmark$Benchmark$Status$Unsized;
                }, $elm_explorations$benchmark$Benchmark$LowLevel$warmup(operation)));
            case 1:
                return _Scheduler_onError_raw(A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$Task$succeed, $elm_explorations$benchmark$Benchmark$Status$Failure), $elm_explorations$benchmark$Benchmark$Status$MeasurementError), $elm$core$Task$map_raw(function (sampleSize) {
                    return $elm_explorations$benchmark$Benchmark$Status$Pending_raw(sampleSize, $elm_explorations$benchmark$Benchmark$Samples$empty);
                }, $elm_explorations$benchmark$Benchmark$LowLevel$findSampleSize(operation)));
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
                    return $elm$core$Task$map_raw(function (status_) {
                        return _Utils_Tuple3(name_, inner, status_);
                    }, $elm_explorations$benchmark$Benchmark$stepLowLevel_raw(inner, status));
                }, benchmarks)));
            default:
                var name = benchmark_.a;
                var benchmarks = benchmark_.b;
                return $elm$core$Task$map_raw($elm_explorations$benchmark$Benchmark$Benchmark$Group(name), $elm$core$Task$sequence($elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$step, benchmarks)));
        }
    };
    var $elm_explorations$benchmark$Benchmark$Runner$App$next = function (benchmark) {
        return $elm_explorations$benchmark$Benchmark$done(benchmark) ? $elm$core$Platform$Cmd$none : $elm$core$Task$perform_raw($elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$App$breakForRender($elm_explorations$benchmark$Benchmark$step(benchmark)));
    };
    var $elm_explorations$benchmark$Benchmark$Runner$App$init_raw = function (benchmark, _v0) {
        return _Utils_Tuple2(benchmark, $elm_explorations$benchmark$Benchmark$Runner$App$next(benchmark));
    }, $elm_explorations$benchmark$Benchmark$Runner$App$init = F2($elm_explorations$benchmark$Benchmark$Runner$App$init_raw);
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
    var $elm_explorations$benchmark$Benchmark$Runner$App$update_raw = function (msg, model) {
        var benchmark = msg;
        return _Utils_Tuple2(benchmark, $elm_explorations$benchmark$Benchmark$Runner$App$next(benchmark));
    }, $elm_explorations$benchmark$Benchmark$Runner$App$update = F2($elm_explorations$benchmark$Benchmark$Runner$App$update_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$App$InProgressClass = function (a) {
        return { $: 2, a: a };
    };
    var $elm_explorations$benchmark$Benchmark$Runner$App$Page = { $: 0 };
    var $elm_explorations$benchmark$Benchmark$Runner$App$ReportClass = function (a) {
        return { $: 3, a: a };
    };
    var $elm_explorations$benchmark$Benchmark$Runner$App$ReportVariation = $elm$core$Basics$identity;
    var $elm_explorations$benchmark$Benchmark$Runner$App$Wrapper = { $: 1 };
    var $mdgriffith$style_elements$Element$Internal$Model$Center = 2;
    var $mdgriffith$style_elements$Element$Internal$Model$HAlign = function (a) {
        return { $: 4, a: a };
    };
    var $mdgriffith$style_elements$Element$Attributes$center = $mdgriffith$style_elements$Element$Internal$Model$HAlign(2);
    var $mdgriffith$style_elements$Element$Internal$Model$Element = function (a) {
        return { $: 3, a: a };
    };
    var $mdgriffith$style_elements$Element$el_raw = function (style, attrs, child) {
        return $mdgriffith$style_elements$Element$Internal$Model$Element({
            b: $elm$core$Maybe$Nothing,
            c: attrs,
            g: child,
            d: "div",
            e: $elm$core$Maybe$Just(style)
        });
    }, $mdgriffith$style_elements$Element$el = F3($mdgriffith$style_elements$Element$el_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Fill = function (a) {
        return { $: 3, a: a };
    };
    var $mdgriffith$style_elements$Element$Attributes$fill = $mdgriffith$style_elements$Style$Internal$Model$Fill(1);
    var $elm_explorations$benchmark$Benchmark$Reporting$Group_raw = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $elm_explorations$benchmark$Benchmark$Reporting$Group = F2($elm_explorations$benchmark$Benchmark$Reporting$Group_raw);
    var $elm_explorations$benchmark$Benchmark$Reporting$Series_raw = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm_explorations$benchmark$Benchmark$Reporting$Series = F2($elm_explorations$benchmark$Benchmark$Reporting$Series_raw);
    var $elm_explorations$benchmark$Benchmark$Reporting$Single_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm_explorations$benchmark$Benchmark$Reporting$Single = F2($elm_explorations$benchmark$Benchmark$Reporting$Single_raw);
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
    var $mdgriffith$style_elements$Element$Internal$Model$Empty = { $: 0 };
    var $mdgriffith$style_elements$Element$Internal$Model$Layout = function (a) {
        return { $: 4, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Raw = function (a) {
        return { $: 5, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Spacer = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Text_raw = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $mdgriffith$style_elements$Element$Internal$Model$Text = F2($mdgriffith$style_elements$Element$Internal$Model$Text_raw);
    var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
    var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
    var $mdgriffith$style_elements$Element$Internal$Model$Attr = function (a) {
        return { $: 17, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Event = function (a) {
        return { $: 15, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Expand = { $: 12 };
    var $mdgriffith$style_elements$Element$Internal$Model$GridArea = function (a) {
        return { $: 18, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$GridCoords = function (a) {
        return { $: 19, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Height = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Hidden = { $: 8 };
    var $mdgriffith$style_elements$Element$Internal$Model$Inline = { $: 3 };
    var $mdgriffith$style_elements$Element$Internal$Model$InputEvent = function (a) {
        return { $: 16, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Margin_raw = function (a, b, c, d) {
        return { $: 11, a: a, b: b, c: c, d: d };
    }, $mdgriffith$style_elements$Element$Internal$Model$Margin = F4($mdgriffith$style_elements$Element$Internal$Model$Margin_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$Opacity = function (a) {
        return { $: 9, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Overflow = function (a) {
        return { $: 22, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Padding_raw = function (a, b, c, d) {
        return { $: 13, a: a, b: b, c: c, d: d };
    }, $mdgriffith$style_elements$Element$Internal$Model$Padding = F4($mdgriffith$style_elements$Element$Internal$Model$Padding_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$PhantomPadding_raw = function (a, b, c, d) {
        return { $: 14, a: a, b: b, c: c, d: d };
    }, $mdgriffith$style_elements$Element$Internal$Model$PhantomPadding = F4($mdgriffith$style_elements$Element$Internal$Model$PhantomPadding_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$PointerEvents = function (a) {
        return { $: 20, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Position_raw = function (a, b, c) {
        return { $: 6, a: a, b: b, c: c };
    }, $mdgriffith$style_elements$Element$Internal$Model$Position = F3($mdgriffith$style_elements$Element$Internal$Model$Position_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$PositionFrame = function (a) {
        return { $: 7, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Shrink = function (a) {
        return { $: 21, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Spacing_raw = function (a, b) {
        return { $: 10, a: a, b: b };
    }, $mdgriffith$style_elements$Element$Internal$Model$Spacing = F2($mdgriffith$style_elements$Element$Internal$Model$Spacing_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$VAlign = function (a) {
        return { $: 5, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Vary_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mdgriffith$style_elements$Element$Internal$Model$Vary = F2($mdgriffith$style_elements$Element$Internal$Model$Vary_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$Width = function (a) {
        return { $: 2, a: a };
    };
    var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
    var $elm$html$Html$Attributes$map = $elm$virtual_dom$VirtualDom$mapAttribute;
    var $mdgriffith$style_elements$Element$Internal$Model$mapAllAttr_raw = function (fnMsg, fnVar, attr) {
        switch (attr.$) {
            case 15:
                var htmlAttr = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Event(_VirtualDom_mapAttribute_raw(fnMsg, htmlAttr));
            case 16:
                var htmlAttr = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$InputEvent(_VirtualDom_mapAttribute_raw(fnMsg, htmlAttr));
            case 17:
                var htmlAttr = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Attr(_VirtualDom_mapAttribute_raw(fnMsg, htmlAttr));
            case 0:
                var v = attr.a;
                var b = attr.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Vary_raw(fnVar(v), b);
            case 1:
                var len = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Height(len);
            case 2:
                var len = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Width(len);
            case 3:
                return $mdgriffith$style_elements$Element$Internal$Model$Inline;
            case 4:
                var align = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$HAlign(align);
            case 5:
                var align = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$VAlign(align);
            case 6:
                var x = attr.a;
                var y = attr.b;
                var z = attr.c;
                return $mdgriffith$style_elements$Element$Internal$Model$Position_raw(x, y, z);
            case 7:
                var fr = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$PositionFrame(fr);
            case 8:
                return $mdgriffith$style_elements$Element$Internal$Model$Hidden;
            case 9:
                var o = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Opacity(o);
            case 10:
                var x = attr.a;
                var y = attr.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Spacing_raw(x, y);
            case 11:
                var t = attr.a;
                var r = attr.b;
                var b = attr.c;
                var l = attr.d;
                return $mdgriffith$style_elements$Element$Internal$Model$Margin_raw(t, r, b, l);
            case 12:
                return $mdgriffith$style_elements$Element$Internal$Model$Expand;
            case 13:
                var t = attr.a;
                var r = attr.b;
                var b = attr.c;
                var l = attr.d;
                return $mdgriffith$style_elements$Element$Internal$Model$Padding_raw(t, r, b, l);
            case 14:
                var t = attr.a;
                var r = attr.b;
                var b = attr.c;
                var l = attr.d;
                return $mdgriffith$style_elements$Element$Internal$Model$PhantomPadding_raw(t, r, b, l);
            case 18:
                var str = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$GridArea(str);
            case 19:
                var pos = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$GridCoords(pos);
            case 20:
                var on = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$PointerEvents(on);
            case 21:
                var i = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Shrink(i);
            default:
                var x = attr.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Overflow(x);
        }
    }, $mdgriffith$style_elements$Element$Internal$Model$mapAllAttr = F3($mdgriffith$style_elements$Element$Internal$Model$mapAllAttr_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$Keyed = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Normal = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$mapChildren_raw = function (fn, children) {
        if (!children.$) {
            var c = children.a;
            return $mdgriffith$style_elements$Element$Internal$Model$Normal($elm$core$List$map_raw(fn, c));
        }
        else {
            var keyed = children.a;
            return $mdgriffith$style_elements$Element$Internal$Model$Keyed($elm$core$List$map_raw($elm$core$Tuple$mapSecond(fn), keyed));
        }
    }, $mdgriffith$style_elements$Element$Internal$Model$mapChildren = F2($mdgriffith$style_elements$Element$Internal$Model$mapChildren_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$mapAll_raw = function (onMsg, onStyle, onVariation, el) {
        switch (el.$) {
            case 0:
                return $mdgriffith$style_elements$Element$Internal$Model$Empty;
            case 1:
                var f = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Spacer(f);
            case 2:
                var dec = el.a;
                var str = el.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Text_raw(dec, str);
            case 3:
                var elm = el.a;
                var attrs = elm.c;
                var child = elm.g;
                var absolutelyPositioned = elm.b;
                var style = elm.e;
                return $mdgriffith$style_elements$Element$Internal$Model$Element({
                    b: $elm$core$Maybe$map_raw($elm$core$List$map(function (childEl) {
                        return $mdgriffith$style_elements$Element$Internal$Model$mapAll_raw(onMsg, onStyle, onVariation, childEl);
                    }), absolutelyPositioned),
                    c: $elm$core$List$map_raw(A2($mdgriffith$style_elements$Element$Internal$Model$mapAllAttr, onMsg, onVariation), attrs),
                    g: $mdgriffith$style_elements$Element$Internal$Model$mapAll_raw(onMsg, onStyle, onVariation, child),
                    d: elm.d,
                    e: $elm$core$Maybe$map_raw(onStyle, style)
                });
            case 4:
                var elm = el.a;
                var attrs = elm.c;
                var children = elm.t;
                var absolutelyPositioned = elm.b;
                var style = elm.e;
                return $mdgriffith$style_elements$Element$Internal$Model$Layout({
                    b: $elm$core$Maybe$map_raw($elm$core$List$map(function (child) {
                        return $mdgriffith$style_elements$Element$Internal$Model$mapAll_raw(onMsg, onStyle, onVariation, child);
                    }), absolutelyPositioned),
                    c: $elm$core$List$map_raw(A2($mdgriffith$style_elements$Element$Internal$Model$mapAllAttr, onMsg, onVariation), attrs),
                    t: $mdgriffith$style_elements$Element$Internal$Model$mapChildren_raw(function (child) {
                        return $mdgriffith$style_elements$Element$Internal$Model$mapAll_raw(onMsg, onStyle, onVariation, child);
                    }, children),
                    p: elm.p,
                    d: elm.d,
                    e: $elm$core$Maybe$map_raw(onStyle, style)
                });
            default:
                var html = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Raw(_VirtualDom_map_raw(onMsg, html));
        }
    }, $mdgriffith$style_elements$Element$Internal$Model$mapAll = F4($mdgriffith$style_elements$Element$Internal$Model$mapAll_raw);
    var $mdgriffith$style_elements$Element$mapAll = $mdgriffith$style_elements$Element$Internal$Model$mapAll;
    var $elm$core$String$fromFloat = _String_fromNumber;
    var $mdgriffith$style_elements$Style$Internal$Render$Value$length = function (l) {
        switch (l.$) {
            case 0:
                var x = l.a;
                return $elm$core$String$fromFloat(x) + "px";
            case 1:
                var x = l.a;
                return $elm$core$String$fromFloat(x) + "%";
            case 2:
                return "auto";
            case 3:
                var i = l.a;
                return "100%";
            default:
                var perc = l.a;
                var px = l.b;
                return "calc(" + ($elm$core$String$fromFloat(perc) + ("% + " + ($elm$core$String$fromFloat(px) + "px)")));
        }
    };
    var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
    var $mdgriffith$style_elements$Element$Attributes$maxWidth = function (len) {
        return $mdgriffith$style_elements$Element$Internal$Model$Attr(_VirtualDom_style_raw("max-width", $mdgriffith$style_elements$Style$Internal$Render$Value$length(len)));
    };
    var $mdgriffith$style_elements$Element$Attributes$minHeight = function (len) {
        return $mdgriffith$style_elements$Element$Internal$Model$Attr(_VirtualDom_style_raw("min-height", $mdgriffith$style_elements$Style$Internal$Render$Value$length(len)));
    };
    var $mdgriffith$style_elements$Element$Attributes$padding = function (x) {
        return $mdgriffith$style_elements$Element$Internal$Model$Padding_raw($elm$core$Maybe$Just(x), $elm$core$Maybe$Just(x), $elm$core$Maybe$Just(x), $elm$core$Maybe$Just(x));
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Px = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$style_elements$Element$Attributes$px = $mdgriffith$style_elements$Style$Internal$Model$Px;
    var $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$FlexLayout = F2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$GoRight = 1;
    var $mdgriffith$style_elements$Element$row_raw = function (style, attrs, children) {
        return $mdgriffith$style_elements$Element$Internal$Model$Layout({
            b: $elm$core$Maybe$Nothing,
            c: attrs,
            t: $mdgriffith$style_elements$Element$Internal$Model$Normal(children),
            p: $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(1, _List_Nil),
            d: "div",
            e: $elm$core$Maybe$Just(style)
        });
    }, $mdgriffith$style_elements$Element$row = F3($mdgriffith$style_elements$Element$row_raw);
    var $mdgriffith$style_elements$Style$Unguarded = 0;
    var $elm$core$Tuple$second = function (_v0) {
        var y = _v0.b;
        return y;
    };
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
    var $elm$core$List$filterMap_raw = function (f, xs) {
        return $elm$core$List$foldr_raw($elm$core$List$maybeCons(f), _List_Nil, xs);
    }, $elm$core$List$filterMap = F2($elm$core$List$filterMap_raw);
    var $mdgriffith$style_elements$Style$Internal$Find$style_raw = function (_class, elements) {
        var find = function (el) {
            if (!el.$) {
                var cls = el.a;
                var name = el.b;
                return _Utils_eq(cls, _class) ? $elm$core$Maybe$Just(name) : $elm$core$Maybe$Nothing;
            }
            else {
                return $elm$core$Maybe$Nothing;
            }
        };
        var found = $elm$core$List$head($elm$core$List$filterMap_raw(find, elements));
        if (found.$ === 1) {
            return "";
        }
        else {
            var cls = found.a;
            return cls;
        }
    }, $mdgriffith$style_elements$Style$Internal$Find$style = F2($mdgriffith$style_elements$Style$Internal$Find$style_raw);
    var $mdgriffith$style_elements$Style$Internal$Find$variation_raw = function (_class, vary, elements) {
        var find = function (el) {
            if (el.$ === 1) {
                var cls = el.a;
                var _var = el.b;
                var name = el.c;
                return (_Utils_eq(_class, cls) && _Utils_eq(_var, vary)) ? $elm$core$Maybe$Just(name) : $elm$core$Maybe$Nothing;
            }
            else {
                return $elm$core$Maybe$Nothing;
            }
        };
        var found = $elm$core$List$head($elm$core$List$filterMap_raw(find, elements));
        if (found.$ === 1) {
            return "";
        }
        else {
            var cls = found.a;
            return cls;
        }
    }, $mdgriffith$style_elements$Style$Internal$Find$variation = F3($mdgriffith$style_elements$Style$Internal$Find$variation_raw);
    var $mdgriffith$style_elements$Style$prepareSheet = function (_v0) {
        var css = _v0.bI;
        var findable = _v0.bR;
        var variations_raw = function (_class, vs) {
            var varys = $elm$core$List$map_raw(function (cls) {
                return _Utils_Tuple2(cls, true);
            }, $elm$core$List$map_raw(A2($elm$core$Basics$composeL, function (vary) {
                return $mdgriffith$style_elements$Style$Internal$Find$variation_raw(_class, vary, findable);
            }, $elm$core$Tuple$first), $elm$core$List$filter_raw($elm$core$Tuple$second, vs)));
            var parent = $mdgriffith$style_elements$Style$Internal$Find$style_raw(_class, findable);
            return _List_Cons(_Utils_Tuple2(parent, true), varys);
        }, variations = F2(variations_raw);
        return {
            bI: css,
            e: function (_class) {
                return $mdgriffith$style_elements$Style$Internal$Find$style_raw(_class, findable);
            },
            X: F2(function (_class, varys) {
                return variations_raw(_class, varys);
            })
        };
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$Rendered = $elm$core$Basics$identity;
    var $elm$core$List$append_raw = function (xs, ys) {
        if (!ys.b) {
            return xs;
        }
        else {
            return $elm$core$List$foldr_raw($elm$core$List$cons, ys, xs);
        }
    }, $elm$core$List$append = F2($elm$core$List$append_raw);
    var $elm$core$List$concat = function (lists) {
        return $elm$core$List$foldr_raw($elm$core$List$append, _List_Nil, lists);
    };
    var $elm$core$List$concatMap_raw = function (f, list) {
        return $elm$core$List$concat($elm$core$List$map_raw(f, list));
    }, $elm$core$List$concatMap = F2($elm$core$List$concatMap_raw);
    var $mdgriffith$style_elements$Style$Internal$Selector$getFindable = function (find) {
        getFindable: while (true) {
            switch (find.$) {
                case 0:
                    var findable = find.b;
                    return { $: 1, a: findable, b: _List_Nil };
                case 2:
                    var selector = find.a;
                    var $temp$find = selector;
                    find = $temp$find;
                    continue getFindable;
                case 4:
                    var selectors = find.a;
                    return $elm$core$Maybe$withDefault_raw(_List_Nil, $elm$core$Maybe$map_raw(function (x) {
                        return { $: 1, a: x, b: _List_Nil };
                    }, $elm$core$List$head($elm$core$List$reverse($elm$core$List$concatMap_raw($mdgriffith$style_elements$Style$Internal$Selector$getFindable, selectors)))));
                default:
                    return _List_Nil;
            }
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$asFindable = function (intermediate) {
        var findableProp = function (prop) {
            switch (prop.$) {
                case 1:
                    var cls = prop.a;
                    return $mdgriffith$style_elements$Style$Internal$Intermediate$asFindable(cls);
                case 2:
                    var cls = prop.b;
                    return $mdgriffith$style_elements$Style$Internal$Intermediate$asFindable(cls);
                default:
                    return _List_Nil;
            }
        };
        if (!intermediate.$) {
            var classRule = intermediate.a;
            return _Utils_ap($mdgriffith$style_elements$Style$Internal$Selector$getFindable(classRule.B), $elm$core$List$concatMap_raw(findableProp, classRule.v));
        }
        else {
            return _List_Nil;
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableClass_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableClass = F2($mdgriffith$style_elements$Style$Internal$Intermediate$RenderableClass_raw);
    var $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableFree = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableMedia_raw = function (a, b, c) {
        return { $: 1, a: a, b: b, c: c };
    }, $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableMedia = F3($mdgriffith$style_elements$Style$Internal$Intermediate$RenderableMedia_raw);
    var $elm$core$String$concat = function (strings) {
        return $elm$core$String$join_raw("", strings);
    };
    var $mdgriffith$style_elements$Style$Internal$Selector$render_raw = function (maybeGuard, selector) {
        var spacer = function (sel) {
            if (sel.$ === 1) {
                return "";
            }
            else {
                return " ";
            }
        };
        var renderAndSpace = F2(function (i, sel) {
            return (!i) ? $mdgriffith$style_elements$Style$Internal$Selector$render_raw(maybeGuard, sel) : _Utils_ap(spacer(sel), $mdgriffith$style_elements$Style$Internal$Selector$render_raw(maybeGuard, sel));
        });
        var applyGuard = function (str) {
            if (maybeGuard.$ === 1) {
                return str;
            }
            else {
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
                return "> " + $mdgriffith$style_elements$Style$Internal$Selector$render_raw(maybeGuard, selectChild);
            case 3:
                var single = selector.a;
                return single;
            case 1:
                var psu = selector.a;
                return psu;
            default:
                var sels = selector.a;
                return $elm$core$String$concat($elm$core$List$indexedMap_raw(renderAndSpace, sels));
        }
    }, $mdgriffith$style_elements$Style$Internal$Selector$render = F2($mdgriffith$style_elements$Style$Internal$Selector$render_raw);
    var $mdgriffith$style_elements$Style$Internal$Intermediate$makeRenderable = function (cls) {
        var renderableProps_raw = function (prop, _v4) {
            var rendered = _v4.a;
            var subEls = _v4.b;
            switch (prop.$) {
                case 0:
                    var ps = prop.a;
                    return _Utils_Tuple2(_Utils_ap(rendered, ps), subEls);
                case 1:
                    var embedded = prop.a;
                    return _Utils_Tuple2(rendered, _Utils_ap(subEls, $mdgriffith$style_elements$Style$Internal$Intermediate$makeRenderable(embedded)));
                case 2:
                    var ps = prop.a;
                    var embedded = prop.b;
                    return _Utils_Tuple2(_Utils_ap(rendered, ps), _Utils_ap(subEls, $mdgriffith$style_elements$Style$Internal$Intermediate$makeRenderable(embedded)));
                default:
                    return _Utils_Tuple2(rendered, subEls);
            }
        }, renderableProps = F2(renderableProps_raw);
        switch (cls.$) {
            case 0:
                var classRule = cls.a;
                var _v1 = $elm$core$List$foldl_raw(renderableProps, _Utils_Tuple2(_List_Nil, _List_Nil), classRule.v);
                var rendered = _v1.a;
                var subelements = _v1.b;
                return _List_Cons($mdgriffith$style_elements$Style$Internal$Intermediate$RenderableClass_raw($mdgriffith$style_elements$Style$Internal$Selector$render_raw($elm$core$Maybe$Nothing, classRule.B), rendered), subelements);
            case 1:
                var mediaRule = cls.a;
                var _v2 = $elm$core$List$foldl_raw(renderableProps, _Utils_Tuple2(_List_Nil, _List_Nil), mediaRule.v);
                var rendered = _v2.a;
                var subelements = _v2.b;
                return _List_Cons($mdgriffith$style_elements$Style$Internal$Intermediate$RenderableMedia_raw(mediaRule.bi, $mdgriffith$style_elements$Style$Internal$Selector$render_raw($elm$core$Maybe$Nothing, mediaRule.B), rendered), subelements);
            default:
                var str = cls.a;
                return { $: 1, a: $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableFree(str), b: _List_Nil };
        }
    };
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
    var $elm$core$String$repeatHelp_raw = function (n, chunk, result) {
        return (n <= 0) ? result : $elm$core$String$repeatHelp_raw(n >> 1, _Utils_ap(chunk, chunk), (!(n & 1)) ? result : _Utils_ap(result, chunk));
    }, $elm$core$String$repeatHelp = F3($elm$core$String$repeatHelp_raw);
    var $elm$core$String$repeat_raw = function (n, chunk) {
        return $elm$core$String$repeatHelp_raw(n, chunk, "");
    }, $elm$core$String$repeat = F2($elm$core$String$repeat_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$Css$brace_raw = function (i, str) {
        return " {\n" + (str + ("\n" + ($elm$core$String$repeat_raw(i, " ") + "}")));
    }, $mdgriffith$style_elements$Style$Internal$Render$Css$brace = F2($mdgriffith$style_elements$Style$Internal$Render$Css$brace_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$Css$prop_raw = function (i, _v0) {
        var name = _v0.a;
        var value = _v0.b;
        return $elm$core$String$repeat_raw(i, " ") + (name + (": " + (value + ";")));
    }, $mdgriffith$style_elements$Style$Internal$Render$Css$prop = F2($mdgriffith$style_elements$Style$Internal$Render$Css$prop_raw);
    var $mdgriffith$style_elements$Style$Internal$Intermediate$render = function (renderable) {
        switch (renderable.$) {
            case 0:
                var selector = renderable.a;
                var styleProps = renderable.b;
                return selector + ($mdgriffith$style_elements$Style$Internal$Render$Css$brace_raw(0, $elm$core$String$join_raw("\n", $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Css$prop(2), styleProps))) + "\n");
            case 1:
                var query = renderable.a;
                var selector = renderable.b;
                var styleProps = renderable.c;
                return _Utils_ap(query, $mdgriffith$style_elements$Style$Internal$Render$Css$brace_raw(0, "  " + (selector + $mdgriffith$style_elements$Style$Internal$Render$Css$brace_raw(2, $elm$core$String$join_raw("\n", $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Css$prop(4), styleProps))))));
            default:
                var str = renderable.a;
                return str;
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$finalize = function (intermediates) {
        var finalizeCss = function (cls) {
            return $elm$core$String$join_raw("\n", $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Intermediate$render, $mdgriffith$style_elements$Style$Internal$Intermediate$makeRenderable(cls)));
        };
        return {
            bI: $elm$core$String$join_raw("\n", $elm$core$List$map_raw(finalizeCss, intermediates)),
            bR: $elm$core$List$concatMap_raw($mdgriffith$style_elements$Style$Internal$Intermediate$asFindable, intermediates)
        };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Filters = function (a) {
        return { $: 12, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Rotate = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$RotateAround_raw = function (a, b, c, d) {
        return { $: 2, a: a, b: b, c: c, d: d };
    }, $mdgriffith$style_elements$Style$Internal$Model$RotateAround = F4($mdgriffith$style_elements$Style$Internal$Model$RotateAround_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Scale_raw = function (a, b, c) {
        return { $: 3, a: a, b: b, c: c };
    }, $mdgriffith$style_elements$Style$Internal$Model$Scale = F3($mdgriffith$style_elements$Style$Internal$Model$Scale_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Shadows = function (a) {
        return { $: 10, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Style_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$Style = F2($mdgriffith$style_elements$Style$Internal$Model$Style_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Transform = function (a) {
        return { $: 11, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Translate_raw = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $mdgriffith$style_elements$Style$Internal$Model$Translate = F3($mdgriffith$style_elements$Style$Internal$Model$Translate_raw);
    var $elm$core$List$isEmpty = function (xs) {
        if (!xs.b) {
            return true;
        }
        else {
            return false;
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Render$preprocess = function (style) {
        if (!style.$) {
            var className = style.a;
            var styleProps = style.b;
            var visible = function (prop) {
                if (prop.$ === 13) {
                    return true;
                }
                else {
                    return false;
                }
            };
            var shadows = function (prop) {
                if (prop.$ === 10) {
                    return true;
                }
                else {
                    return false;
                }
            };
            var prioritize_raw = function (isPriority, priorityProps) {
                var _v9 = $elm$core$List$partition_raw(isPriority, priorityProps);
                var high = _v9.a;
                var low = _v9.b;
                return _Utils_ap(low, high);
            }, prioritize = F2(prioritize_raw);
            var overridePrevious_raw = function (overridable, overrideProps) {
                var eliminatePrevious = F2(function (prop, _v8) {
                    var existing = _v8.a;
                    var overridden = _v8.b;
                    return (overridable(prop) && overridden) ? _Utils_Tuple2(existing, overridden) : ((overridable(prop) && (!overridden)) ? _Utils_Tuple2(_List_Cons(prop, existing), true) : _Utils_Tuple2(_List_Cons(prop, existing), overridden));
                });
                return $elm$core$List$foldr_raw(eliminatePrevious, _Utils_Tuple2(_List_Nil, false), overrideProps).a;
            }, overridePrevious = F2(overridePrevious_raw);
            var mergeTransforms = function (mergeableProps) {
                var setIfNothing_raw = function (x, maybeX) {
                    if (maybeX.$ === 1) {
                        return $elm$core$Maybe$Just(x);
                    }
                    else {
                        var a = maybeX;
                        return a;
                    }
                }, setIfNothing = F2(setIfNothing_raw);
                var gatherTransformStack_raw = function (transformation, gathered) {
                    switch (transformation.$) {
                        case 0:
                            var x = transformation.a;
                            var y = transformation.b;
                            var z = transformation.c;
                            return _Utils_update(gathered, {
                                aI: setIfNothing_raw($mdgriffith$style_elements$Style$Internal$Model$Translate_raw(x, y, z), gathered.aI)
                            });
                        case 1:
                            var a = transformation.a;
                            return _Utils_update(gathered, {
                                ai: setIfNothing_raw($mdgriffith$style_elements$Style$Internal$Model$Rotate(a), gathered.ai)
                            });
                        case 2:
                            var x = transformation.a;
                            var y = transformation.b;
                            var z = transformation.c;
                            var angle = transformation.d;
                            return _Utils_update(gathered, {
                                ai: setIfNothing_raw($mdgriffith$style_elements$Style$Internal$Model$RotateAround_raw(x, y, z, angle), gathered.ai)
                            });
                        default:
                            var x = transformation.a;
                            var y = transformation.b;
                            var z = transformation.c;
                            return _Utils_update(gathered, {
                                aF: setIfNothing_raw($mdgriffith$style_elements$Style$Internal$Model$Scale_raw(x, y, z), gathered.aF)
                            });
                    }
                }, gatherTransformStack = F2(gatherTransformStack_raw);
                var gatherTransforms_raw = function (prop, _v5) {
                    var transforms = _v5.a;
                    var gatheredProps = _v5.b;
                    if (prop.$ === 11) {
                        var stack = prop.a;
                        return _Utils_Tuple2($elm$core$List$foldr_raw(gatherTransformStack, transforms, stack), gatheredProps);
                    }
                    else {
                        return _Utils_Tuple2(transforms, _List_Cons(prop, gatheredProps));
                    }
                }, gatherTransforms = F2(gatherTransforms_raw);
                var applyTransforms = function (_v3) {
                    var rotate = _v3.a.ai;
                    var scale = _v3.a.aF;
                    var translate = _v3.a.aI;
                    var gathered = _v3.b;
                    var transformations = $elm$core$List$filterMap_raw($elm$core$Basics$identity, { $: 1, a: translate, b: { $: 1, a: rotate, b: { $: 1, a: scale, b: _List_Nil } } });
                    return $elm$core$List$isEmpty(transformations) ? gathered : _List_Cons($mdgriffith$style_elements$Style$Internal$Model$Transform(transformations), gathered);
                };
                return applyTransforms($elm$core$List$foldr_raw(gatherTransforms, _Utils_Tuple2({ ai: $elm$core$Maybe$Nothing, aF: $elm$core$Maybe$Nothing, aI: $elm$core$Maybe$Nothing }, _List_Nil), mergeableProps));
            };
            var mergeShadowsAndFilters = function (shadowsAndFilters) {
                var gather_raw = function (prop, existing) {
                    switch (prop.$) {
                        case 12:
                            var fs = prop.a;
                            return _Utils_update(existing, {
                                aA: _Utils_ap(fs, existing.aA)
                            });
                        case 10:
                            var ss = prop.a;
                            return _Utils_update(existing, {
                                aG: _Utils_ap(ss, existing.aG)
                            });
                        default:
                            return _Utils_update(existing, {
                                aD: _List_Cons(prop, existing.aD)
                            });
                    }
                }, gather = F2(gather_raw);
                var combine = function (combineable) {
                    return _List_Cons($mdgriffith$style_elements$Style$Internal$Model$Filters(combineable.aA), _List_Cons($mdgriffith$style_elements$Style$Internal$Model$Shadows(combineable.aG), combineable.aD));
                };
                return combine($elm$core$List$foldr_raw(gather, { aA: _List_Nil, aD: _List_Nil, aG: _List_Nil }, shadowsAndFilters));
            };
            var processed = mergeTransforms(mergeShadowsAndFilters(overridePrevious_raw(shadows, prioritize_raw(shadows, overridePrevious_raw(visible, prioritize_raw(visible, styleProps))))));
            var dropShadow = function (_v1) {
                var shade = _v1;
                return shade.bX === "drop";
            };
            return $mdgriffith$style_elements$Style$Internal$Model$Style_raw(className, processed);
        }
        else {
            return style;
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$Class = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$Free = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Render$class_raw = function (name, props) {
        var renderedProps = $elm$core$String$join_raw("\n", $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Css$prop(2), props));
        return "." + (name + $mdgriffith$style_elements$Style$Internal$Render$Css$brace_raw(0, renderedProps));
    }, $mdgriffith$style_elements$Style$Internal$Render$class = F2($mdgriffith$style_elements$Style$Internal$Render$class_raw);
    var $mdgriffith$style_elements$Style$Internal$Intermediate$Media = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Selector$Select_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Selector$Select = F2($mdgriffith$style_elements$Style$Internal$Selector$Select_raw);
    var $mdgriffith$style_elements$Style$Internal$Selector$SelectChild = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Selector$Stack = function (a) {
        return { $: 4, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Find$Style_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Find$Style = F2($mdgriffith$style_elements$Style$Internal$Find$Style_raw);
    var $mdgriffith$style_elements$Style$Internal$Find$Variation_raw = function (a, b, c) {
        return { $: 1, a: a, b: b, c: c };
    }, $mdgriffith$style_elements$Style$Internal$Find$Variation = F3($mdgriffith$style_elements$Style$Internal$Find$Variation_raw);
    var $mdgriffith$style_elements$Style$Internal$Selector$guard_raw = function (guardingString, selector) {
        var addGuard = function (str) {
            return str + ("g" + guardingString);
        };
        var onFindable = function (findable) {
            if (!findable.$) {
                var _class = findable.a;
                var name = findable.b;
                return $mdgriffith$style_elements$Style$Internal$Find$Style_raw(_class, addGuard(name));
            }
            else {
                var _class = findable.a;
                var variation = findable.b;
                var name = findable.c;
                return $mdgriffith$style_elements$Style$Internal$Find$Variation_raw(_class, variation, addGuard(name));
            }
        };
        var onSelector = function (sel) {
            switch (sel.$) {
                case 0:
                    var rendered = sel.a;
                    var findable = sel.b;
                    return $mdgriffith$style_elements$Style$Internal$Selector$Select_raw(addGuard(rendered), onFindable(findable));
                case 2:
                    var selectChild = sel.a;
                    return $mdgriffith$style_elements$Style$Internal$Selector$SelectChild(onSelector(selectChild));
                case 4:
                    var selectors = sel.a;
                    return $mdgriffith$style_elements$Style$Internal$Selector$Stack($elm$core$List$map_raw(onSelector, selectors));
                default:
                    var x = sel;
                    return x;
            }
        };
        return onSelector(selector);
    }, $mdgriffith$style_elements$Style$Internal$Selector$guard = F2($mdgriffith$style_elements$Style$Internal$Selector$guard_raw);
    var $mdgriffith$style_elements$Style$Internal$Intermediate$applyGuard_raw = function (guardString, _class) {
        var guardProp = function (prop) {
            if (prop.$ === 1) {
                var sc = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass($mdgriffith$style_elements$Style$Internal$Intermediate$applyGuard_raw(guardString, sc));
            }
            else {
                var x = prop;
                return x;
            }
        };
        switch (_class.$) {
            case 0:
                var cls = _class.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$Class({
                    v: $elm$core$List$map_raw(guardProp, cls.v),
                    B: $mdgriffith$style_elements$Style$Internal$Selector$guard_raw(guardString, cls.B)
                });
            case 1:
                var media = _class.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$Media({
                    v: $elm$core$List$map_raw(guardProp, media.v),
                    bi: media.bi,
                    B: $mdgriffith$style_elements$Style$Internal$Selector$guard_raw(guardString, media.B)
                });
            default:
                var x = _class;
                return x;
        }
    }, $mdgriffith$style_elements$Style$Internal$Intermediate$applyGuard = F2($mdgriffith$style_elements$Style$Internal$Intermediate$applyGuard_raw);
    var $mdgriffith$style_elements$Style$Internal$Intermediate$calculateGuard = function (_class) {
        var propToString = function (_v2) {
            var x = _v2.a;
            var y = _v2.b;
            return _Utils_ap(x, y);
        };
        var asString = function (prop) {
            switch (prop.$) {
                case 0:
                    var ps = prop.a;
                    return $elm$core$String$concat($elm$core$List$map_raw(propToString, ps));
                case 1:
                    var embedded = prop.a;
                    return $mdgriffith$style_elements$Style$Internal$Intermediate$calculateGuard(embedded);
                case 2:
                    var ps = prop.a;
                    var embedded = prop.b;
                    return _Utils_ap($elm$core$String$concat($elm$core$List$map_raw(propToString, ps)), $mdgriffith$style_elements$Style$Internal$Intermediate$calculateGuard(embedded));
                default:
                    return "";
            }
        };
        switch (_class.$) {
            case 0:
                var classRule = _class.a;
                return $elm$core$String$concat($elm$core$List$map_raw(asString, classRule.v));
            case 1:
                var mediaRule = _class.a;
                return $elm$core$String$concat($elm$core$List$map_raw(asString, mediaRule.v));
            default:
                return "";
        }
    };
    var $Skinney$murmur3$Murmur3$HashData_raw = function (shift, seed, hash, charsProcessed) {
        return { Z: charsProcessed, ab: hash, W: seed, aj: shift };
    }, $Skinney$murmur3$Murmur3$HashData = F4($Skinney$murmur3$Murmur3$HashData_raw);
    var $Skinney$murmur3$Murmur3$c1 = 3432918353;
    var $Skinney$murmur3$Murmur3$c2 = 461845907;
    var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $Skinney$murmur3$Murmur3$multiplyBy_raw = function (b, a) {
        return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
    }, $Skinney$murmur3$Murmur3$multiplyBy = F2($Skinney$murmur3$Murmur3$multiplyBy_raw);
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $elm$core$Bitwise$or = _Bitwise_or;
    var $Skinney$murmur3$Murmur3$rotlBy_raw = function (b, a) {
        return (a << b) | (a >>> (32 - b));
    }, $Skinney$murmur3$Murmur3$rotlBy = F2($Skinney$murmur3$Murmur3$rotlBy_raw);
    var $elm$core$Bitwise$xor = _Bitwise_xor;
    var $Skinney$murmur3$Murmur3$finalize = function (data) {
        var acc = (!(!data.ab)) ? (data.W ^ $Skinney$murmur3$Murmur3$multiplyBy_raw($Skinney$murmur3$Murmur3$c2, $Skinney$murmur3$Murmur3$rotlBy_raw(15, $Skinney$murmur3$Murmur3$multiplyBy_raw($Skinney$murmur3$Murmur3$c1, data.ab)))) : data.W;
        var h0 = acc ^ data.Z;
        var h1 = $Skinney$murmur3$Murmur3$multiplyBy_raw(2246822507, h0 ^ (h0 >>> 16));
        var h2 = $Skinney$murmur3$Murmur3$multiplyBy_raw(3266489909, h1 ^ (h1 >>> 13));
        return (h2 ^ (h2 >>> 16)) >>> 0;
    };
    var $elm$core$String$foldl = _String_foldl;
    var $Skinney$murmur3$Murmur3$mix_raw = function (h1, k1) {
        return $Skinney$murmur3$Murmur3$multiplyBy_raw(5, $Skinney$murmur3$Murmur3$rotlBy_raw(13, h1 ^ $Skinney$murmur3$Murmur3$multiplyBy_raw($Skinney$murmur3$Murmur3$c2, $Skinney$murmur3$Murmur3$rotlBy_raw(15, $Skinney$murmur3$Murmur3$multiplyBy_raw($Skinney$murmur3$Murmur3$c1, k1))))) + 3864292196;
    }, $Skinney$murmur3$Murmur3$mix = F2($Skinney$murmur3$Murmur3$mix_raw);
    var $Skinney$murmur3$Murmur3$hashFold_raw = function (c, data) {
        var res = data.ab | ((255 & $elm$core$Char$toCode(c)) << data.aj);
        var _v0 = data.aj;
        if (_v0 === 24) {
            return {
                Z: data.Z + 1,
                ab: 0,
                W: $Skinney$murmur3$Murmur3$mix_raw(data.W, res),
                aj: 0
            };
        }
        else {
            return { Z: data.Z + 1, ab: res, W: data.W, aj: data.aj + 8 };
        }
    }, $Skinney$murmur3$Murmur3$hashFold = F2($Skinney$murmur3$Murmur3$hashFold_raw);
    var $Skinney$murmur3$Murmur3$hashString_raw = function (seed, str) {
        return $Skinney$murmur3$Murmur3$finalize(_String_foldl_raw($Skinney$murmur3$Murmur3$hashFold, $Skinney$murmur3$Murmur3$HashData_raw(0, seed, 0, 0), str));
    }, $Skinney$murmur3$Murmur3$hashString = F2($Skinney$murmur3$Murmur3$hashString_raw);
    var $mdgriffith$style_elements$Style$Internal$Intermediate$hash = function (value) {
        return $elm$core$String$fromInt($Skinney$murmur3$Murmur3$hashString_raw(8675309, value));
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$guard = function (_class) {
        return $mdgriffith$style_elements$Style$Internal$Intermediate$applyGuard_raw($mdgriffith$style_elements$Style$Internal$Intermediate$hash($mdgriffith$style_elements$Style$Internal$Intermediate$calculateGuard(_class)), _class);
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$PropsAndSub_raw = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Intermediate$PropsAndSub = F2($mdgriffith$style_elements$Style$Internal$Intermediate$PropsAndSub_raw);
    var $mdgriffith$style_elements$Style$Internal$Intermediate$asMediaQuery_raw = function (query, prop) {
        var classAsMediaQuery = function (cls) {
            if (!cls.$) {
                var classRule = cls.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$Media({ v: classRule.v, bi: query, B: classRule.B });
            }
            else {
                var x = cls;
                return x;
            }
        };
        switch (prop.$) {
            case 1:
                var cls = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass(classAsMediaQuery(cls));
            case 2:
                var x = prop.a;
                var cls = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$PropsAndSub_raw(x, classAsMediaQuery(cls));
            default:
                var x = prop;
                return x;
        }
    }, $mdgriffith$style_elements$Style$Internal$Intermediate$asMediaQuery = F2($mdgriffith$style_elements$Style$Internal$Intermediate$asMediaQuery_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$Value$color = function (_v0) {
        var red = _v0.a;
        var green = _v0.b;
        var blue = _v0.c;
        var alpha = _v0.d;
        return ("rgba(" + $elm$core$String$fromInt($elm$core$Basics$round(red * 255))) + (("," + $elm$core$String$fromInt($elm$core$Basics$round(green * 255))) + (("," + $elm$core$String$fromInt($elm$core$Basics$round(blue * 255))) + ("," + ($elm$core$String$fromFloat(alpha) + ")"))));
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$background = function (prop) {
        var renderStep = function (step) {
            switch (step.$) {
                case 0:
                    var color = step.a;
                    return $mdgriffith$style_elements$Style$Internal$Render$Value$color(color);
                case 1:
                    var color = step.a;
                    var percent = step.b;
                    return $mdgriffith$style_elements$Style$Internal$Render$Value$color(color) + (" " + ($elm$core$String$fromFloat(percent) + "%"));
                default:
                    var color = step.a;
                    var percent = step.b;
                    return $mdgriffith$style_elements$Style$Internal$Render$Value$color(color) + (" " + ($elm$core$String$fromFloat(percent) + "px"));
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
                    return $elm$core$String$fromFloat(angle) + "rad";
            }
        };
        switch (prop.$) {
            case 1:
                var name = prop.a;
                var val = prop.b;
                return { $: 1, a: _Utils_Tuple2(name, val), b: _List_Nil };
            case 0:
                var image = prop.a;
                return { $: 1, a: _Utils_Tuple2("background-image", "url(" + (image.aS + ")")), b: { $: 1, a: _Utils_Tuple2("background-position", $elm$core$String$fromFloat(image.be.a) + ("px " + ($elm$core$String$fromFloat(image.be.b) + "px"))), b: { $: 1, a: _Utils_Tuple2("background-repeat", function () {
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
                            }()), b: { $: 1, a: _Utils_Tuple2("background-size", function () {
                                    var _v2 = image.b4;
                                    switch (_v2.$) {
                                        case 0:
                                            return "contain";
                                        case 1:
                                            return "cover";
                                        case 2:
                                            var width = _v2.a;
                                            return $mdgriffith$style_elements$Style$Internal$Render$Value$length(width) + " auto";
                                        case 3:
                                            var height = _v2.a;
                                            return "auto " + $mdgriffith$style_elements$Style$Internal$Render$Value$length(height);
                                        default:
                                            var width = _v2.a.bw;
                                            var height = _v2.a.a1;
                                            return $mdgriffith$style_elements$Style$Internal$Render$Value$length(width) + (" " + $mdgriffith$style_elements$Style$Internal$Render$Value$length(height));
                                    }
                                }()), b: _List_Nil } } } };
            default:
                var dir = prop.a;
                var steps = prop.b;
                return { $: 1, a: _Utils_Tuple2("background-image", "linear-gradient(" + ($elm$core$String$join_raw(", ", _List_Cons(directionName(dir), $elm$core$List$map_raw(renderStep, steps))) + ")")), b: _List_Nil };
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Selector$child_raw = function (parent, selector) {
        return $mdgriffith$style_elements$Style$Internal$Selector$Stack({ $: 1, a: parent, b: { $: 1, a: $mdgriffith$style_elements$Style$Internal$Selector$SelectChild(selector), b: _List_Nil } });
    }, $mdgriffith$style_elements$Style$Internal$Selector$child = F2($mdgriffith$style_elements$Style$Internal$Selector$child_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$ShadowModel = $elm$core$Basics$identity;
    var $mdgriffith$style_elements$Style$Internal$Render$Value$shadow = function (_v0) {
        var shadowModel = _v0;
        return $elm$core$String$join_raw(" ", $elm$core$List$filterMap_raw($elm$core$Basics$identity, { $: 1, a: (shadowModel.bX === "inset") ? $elm$core$Maybe$Just("inset") : $elm$core$Maybe$Nothing, b: { $: 1, a: $elm$core$Maybe$Just($elm$core$String$fromFloat(shadowModel.a7.a) + "px"), b: { $: 1, a: $elm$core$Maybe$Just($elm$core$String$fromFloat(shadowModel.a7.b) + "px"), b: { $: 1, a: $elm$core$Maybe$Just($elm$core$String$fromFloat(shadowModel.bC) + "px"), b: { $: 1, a: ((shadowModel.bX === "text") || (shadowModel.bX === "drop")) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just($elm$core$String$fromFloat(shadowModel.b4) + "px"), b: { $: 1, a: $elm$core$Maybe$Just($mdgriffith$style_elements$Style$Internal$Render$Value$color(shadowModel.bH)), b: _List_Nil } } } } } }));
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$filters = function (myFilters) {
        var filterName = function (filtr) {
            switch (filtr.$) {
                case 0:
                    var url = filtr.a;
                    return "url(" + (url + ")");
                case 1:
                    var x = filtr.a;
                    return "blur(" + ($elm$core$String$fromFloat(x) + "px)");
                case 2:
                    var x = filtr.a;
                    return "brightness(" + ($elm$core$String$fromFloat(x) + "%)");
                case 3:
                    var x = filtr.a;
                    return "contrast(" + ($elm$core$String$fromFloat(x) + "%)");
                case 4:
                    var x = filtr.a;
                    return "grayscale(" + ($elm$core$String$fromFloat(x) + "%)");
                case 5:
                    var x = filtr.a;
                    return "hueRotate(" + ($elm$core$String$fromFloat(x) + "deg)");
                case 6:
                    var x = filtr.a;
                    return "invert(" + ($elm$core$String$fromFloat(x) + "%)");
                case 7:
                    var x = filtr.a;
                    return "opacity(" + ($elm$core$String$fromFloat(x) + "%)");
                case 8:
                    var x = filtr.a;
                    return "saturate(" + ($elm$core$String$fromFloat(x) + "%)");
                case 9:
                    var x = filtr.a;
                    return "sepia(" + ($elm$core$String$fromFloat(x) + "%)");
                default:
                    var dropShadow = filtr.a;
                    var shadowModel = { bC: dropShadow.bC, bH: dropShadow.bH, bX: "drop", a7: dropShadow.a7, b4: dropShadow.b4 };
                    return "drop-shadow(" + ($mdgriffith$style_elements$Style$Internal$Render$Value$shadow(shadowModel) + ")");
            }
        };
        return (!$elm$core$List$length(myFilters)) ? _List_Nil : { $: 1, a: _Utils_Tuple2("filter", $elm$core$String$join_raw(" ", $elm$core$List$map_raw(filterName, myFilters))), b: _List_Nil };
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$getProps = function (prop) {
        _v0$4: while (true) {
            switch (prop.$) {
                case 0:
                    var rendered = prop.a;
                    return rendered;
                case 1:
                    if (!prop.a.$) {
                        var myClass = prop.a.a;
                        return $elm$core$List$concatMap_raw($mdgriffith$style_elements$Style$Internal$Intermediate$getProps, myClass.v);
                    }
                    else {
                        break _v0$4;
                    }
                case 2:
                    if (!prop.b.$) {
                        var rendered = prop.a;
                        var myClass = prop.b.a;
                        return _Utils_ap(rendered, $elm$core$List$concatMap_raw($mdgriffith$style_elements$Style$Internal$Intermediate$getProps, myClass.v));
                    }
                    else {
                        break _v0$4;
                    }
                default:
                    return _List_Nil;
            }
        }
        return _List_Nil;
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$direction = function (dir) {
        switch (dir) {
            case 1:
                return _Utils_Tuple2("flex-direction", "row");
            case 3:
                return _Utils_Tuple2("flex-direction", "row-reverse");
            case 2:
                return _Utils_Tuple2("flex-direction", "column");
            default:
                return _Utils_Tuple2("flex-direction", "column-reverse");
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$flexbox_raw = function (dir, el) {
        switch (el.$) {
            case 0:
                var wrap = el.a;
                return wrap ? _Utils_Tuple2("flex-wrap", "wrap") : _Utils_Tuple2("flex-wrap", "nowrap");
            case 1:
                var horizontal = el.a;
                switch (dir) {
                    case 1:
                        switch (horizontal.$) {
                            case 3:
                                if (!horizontal.a) {
                                    var _v3 = horizontal.a;
                                    return _Utils_Tuple2("justify-content", "flex-start");
                                }
                                else {
                                    var _v4 = horizontal.a;
                                    return _Utils_Tuple2("justify-content", "flex-end");
                                }
                            case 0:
                                return _Utils_Tuple2("justify-content", "center");
                            case 1:
                                return _Utils_Tuple2("justify-content", "space-between");
                            default:
                                return _Utils_Tuple2("justify-content", "space-between");
                        }
                    case 3:
                        switch (horizontal.$) {
                            case 3:
                                if (!horizontal.a) {
                                    var _v6 = horizontal.a;
                                    return _Utils_Tuple2("justify-content", "flex-end");
                                }
                                else {
                                    var _v7 = horizontal.a;
                                    return _Utils_Tuple2("justify-content", "flex-start");
                                }
                            case 0:
                                return _Utils_Tuple2("justify-content", "center");
                            case 1:
                                return _Utils_Tuple2("justify-content", "space-between");
                            default:
                                return _Utils_Tuple2("justify-content", "space-between");
                        }
                    case 2:
                        switch (horizontal.$) {
                            case 3:
                                if (!horizontal.a) {
                                    var _v9 = horizontal.a;
                                    return _Utils_Tuple2("align-items", "flex-start");
                                }
                                else {
                                    var _v10 = horizontal.a;
                                    return _Utils_Tuple2("align-items", "flex-end");
                                }
                            case 0:
                                return _Utils_Tuple2("align-items", "center");
                            case 1:
                                return _Utils_Tuple2("align-items", "Justify");
                            default:
                                return _Utils_Tuple2("align-items", "Justify");
                        }
                    default:
                        switch (horizontal.$) {
                            case 3:
                                if (!horizontal.a) {
                                    var _v12 = horizontal.a;
                                    return _Utils_Tuple2("align-items", "flex-start");
                                }
                                else {
                                    var _v13 = horizontal.a;
                                    return _Utils_Tuple2("align-items", "flex-end");
                                }
                            case 0:
                                return _Utils_Tuple2("align-items", "center");
                            case 1:
                                return _Utils_Tuple2("align-items", "Justify");
                            default:
                                return _Utils_Tuple2("align-items", "Justify");
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
                                    return _Utils_Tuple2("align-items", "flex-start");
                                }
                                else {
                                    var _v17 = vertical.a;
                                    return _Utils_Tuple2("align-items", "flex-end");
                                }
                            case 0:
                                return _Utils_Tuple2("align-items", "center");
                            case 1:
                                return _Utils_Tuple2("align-items", "Justify");
                            default:
                                return _Utils_Tuple2("align-items", "Justify");
                        }
                    case 3:
                        switch (vertical.$) {
                            case 3:
                                if (!vertical.a) {
                                    var _v19 = vertical.a;
                                    return _Utils_Tuple2("align-items", "flex-start");
                                }
                                else {
                                    var _v20 = vertical.a;
                                    return _Utils_Tuple2("align-items", "flex-end");
                                }
                            case 0:
                                return _Utils_Tuple2("align-items", "center");
                            case 1:
                                return _Utils_Tuple2("align-items", "Justify");
                            default:
                                return _Utils_Tuple2("align-items", "Justify");
                        }
                    case 2:
                        switch (vertical.$) {
                            case 3:
                                if (!vertical.a) {
                                    var _v22 = vertical.a;
                                    return _Utils_Tuple2("justify-content", "flex-start");
                                }
                                else {
                                    var _v23 = vertical.a;
                                    return _Utils_Tuple2("justify-content", "flex-end");
                                }
                            case 0:
                                return _Utils_Tuple2("justify-content", "center");
                            case 1:
                                return _Utils_Tuple2("justify-content", "space-between");
                            default:
                                return _Utils_Tuple2("align-items", "Justify");
                        }
                    default:
                        switch (vertical.$) {
                            case 3:
                                if (!vertical.a) {
                                    var _v25 = vertical.a;
                                    return _Utils_Tuple2("justify-content", "flex-end");
                                }
                                else {
                                    var _v26 = vertical.a;
                                    return _Utils_Tuple2("justify-content", "flex-start");
                                }
                            case 0:
                                return _Utils_Tuple2("justify-content", "center");
                            case 1:
                                return _Utils_Tuple2("justify-content", "space-between");
                            default:
                                return _Utils_Tuple2("align-items", "Justify");
                        }
                }
        }
    }, $mdgriffith$style_elements$Style$Internal$Render$Property$flexbox = F2($mdgriffith$style_elements$Style$Internal$Render$Property$flexbox_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$Property$gridAlignment = function (align) {
        switch (align.$) {
            case 2:
                var row = align.a;
                var column = align.b;
                return _Utils_Tuple2("grid-gap", $elm$core$String$fromFloat(row) + ("px " + ($elm$core$String$fromFloat(column) + "px")));
            case 0:
                var horizontal = align.a;
                switch (horizontal.$) {
                    case 3:
                        if (!horizontal.a) {
                            var _v2 = horizontal.a;
                            return _Utils_Tuple2("justify-content", "start");
                        }
                        else {
                            var _v3 = horizontal.a;
                            return _Utils_Tuple2("justify-content", "end");
                        }
                    case 0:
                        return _Utils_Tuple2("justify-content", "center");
                    case 1:
                        return _Utils_Tuple2("justify-content", "space-between");
                    default:
                        return _Utils_Tuple2("justify-content", "space-between");
                }
            default:
                var vertical = align.a;
                switch (vertical.$) {
                    case 3:
                        if (!vertical.a) {
                            var _v5 = vertical.a;
                            return _Utils_Tuple2("align-content", "start");
                        }
                        else {
                            var _v6 = vertical.a;
                            return _Utils_Tuple2("align-content", "end");
                        }
                    case 0:
                        return _Utils_Tuple2("align-content", "center");
                    case 1:
                        return _Utils_Tuple2("align-content", "space-between");
                    default:
                        return _Utils_Tuple2("align-content", "space-between");
                }
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$layout_raw = function (inline, lay) {
        switch (lay.$) {
            case 0:
                return { $: 1, a: _Utils_Tuple2("display", inline ? "inline-block" : "block"), b: _List_Nil };
            case 1:
                var dir = lay.a;
                var flexProps = lay.b;
                return _List_Cons(_Utils_Tuple2("display", inline ? "inline-flex" : "flex"), _List_Cons($mdgriffith$style_elements$Style$Internal$Render$Property$direction(dir), $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Property$flexbox(dir), flexProps)));
            default:
                if (lay.a.$ === 1) {
                    var rows = lay.a.a.V;
                    var columns = lay.a.a.P;
                    var options = lay.b;
                    var renderLen = function (len) {
                        switch (len.$) {
                            case 0:
                                var x = len.a;
                                return $elm$core$String$fromFloat(x) + "px";
                            case 1:
                                var x = len.a;
                                return $elm$core$String$fromFloat(x) + "%";
                            case 2:
                                return "auto";
                            case 3:
                                var i = len.a;
                                return $elm$core$String$fromFloat(i) + "fr";
                            default:
                                var perc = len.a;
                                var px = len.b;
                                return "calc(" + ($elm$core$String$fromFloat(perc) + ("% + " + ($elm$core$String$fromFloat(px) + "px)")));
                        }
                    };
                    var grid = inline ? _Utils_Tuple2("display", "inline-grid") : _Utils_Tuple2("display", "grid");
                    var areaSpan = function (_v3) {
                        var span = _v3.a;
                        var maybeName = _v3.b;
                        var name = function () {
                            if (maybeName.$ === 1) {
                                return ".";
                            }
                            else {
                                var str = maybeName.a;
                                return str;
                            }
                        }();
                        if (!span.$) {
                            return $elm$core$List$repeat_raw($elm$core$List$length(columns), name);
                        }
                        else {
                            var i = span.a;
                            return $elm$core$List$repeat_raw(i, name);
                        }
                    };
                    var areasInRow = function (areas) {
                        var quote = function (str) {
                            return "\"" + (str + "\"");
                        };
                        var areaStrs = $elm$core$List$concatMap_raw(areaSpan, areas);
                        return (_Utils_cmp($elm$core$List$length(areaStrs), $elm$core$List$length(columns)) > 0) ? quote($elm$core$String$join_raw(" ", areaStrs)) : ((_Utils_cmp($elm$core$List$length(areaStrs), $elm$core$List$length(columns)) < 0) ? quote($elm$core$String$join_raw(" ", areaStrs)) : quote($elm$core$String$join_raw(" ", areaStrs)));
                    };
                    var alignment = $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Property$gridAlignment, options);
                    return _List_Cons(grid, _List_Cons(_Utils_Tuple2("grid-template-rows", $elm$core$String$join_raw(" ", $elm$core$List$map_raw(A2($elm$core$Basics$composeL, renderLen, $elm$core$Tuple$first), rows))), _List_Cons(_Utils_Tuple2("grid-template-columns", $elm$core$String$join_raw(" ", $elm$core$List$map_raw(renderLen, columns))), _List_Cons(_Utils_Tuple2("grid-template-areas", $elm$core$String$join_raw("\n", $elm$core$List$map_raw(A2($elm$core$Basics$composeL, areasInRow, $elm$core$Tuple$second), rows))), alignment))));
                }
                else {
                    var rows = lay.a.a.V;
                    var columns = lay.a.a.P;
                    var options = lay.b;
                    var renderLen = function (len) {
                        switch (len.$) {
                            case 0:
                                var x = len.a;
                                return $elm$core$String$fromFloat(x) + "px";
                            case 1:
                                var x = len.a;
                                return $elm$core$String$fromFloat(x) + "%";
                            case 2:
                                return "auto";
                            case 3:
                                var i = len.a;
                                return $elm$core$String$fromFloat(i) + "fr";
                            default:
                                var perc = len.a;
                                var px = len.b;
                                return "calc(" + ($elm$core$String$fromFloat(perc) + ("% + " + ($elm$core$String$fromFloat(px) + "px)")));
                        }
                    };
                    var grid = inline ? _Utils_Tuple2("display", "inline-grid") : _Utils_Tuple2("display", "grid");
                    var alignment = $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Property$gridAlignment, options);
                    return _List_Cons(grid, _List_Cons(_Utils_Tuple2("grid-template-rows", $elm$core$String$join_raw(" ", $elm$core$List$map_raw(renderLen, rows))), _List_Cons(_Utils_Tuple2("grid-template-columns", $elm$core$String$join_raw(" ", $elm$core$List$map_raw(renderLen, columns))), alignment)));
                }
        }
    }, $mdgriffith$style_elements$Style$Internal$Render$Property$layout = F2($mdgriffith$style_elements$Style$Internal$Render$Property$layout_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$Property$position = function (posEls) {
        var renderPos = function (pos) {
            switch (pos.$) {
                case 0:
                    switch (pos.a) {
                        case 0:
                            var _v1 = pos.a;
                            return _Utils_Tuple2("position", "fixed");
                        case 2:
                            var _v2 = pos.a;
                            return _Utils_Tuple2("position", "absolute");
                        default:
                            var _v3 = pos.a;
                            return _Utils_Tuple2("position", "relative");
                    }
                case 1:
                    var x = pos.a;
                    return _Utils_Tuple2("left", $elm$core$String$fromFloat(x) + "px");
                case 2:
                    var x = pos.a;
                    return _Utils_Tuple2("right", $elm$core$String$fromFloat(x) + "px");
                case 3:
                    var x = pos.a;
                    return _Utils_Tuple2("top", $elm$core$String$fromFloat(x) + "px");
                case 4:
                    var x = pos.a;
                    return _Utils_Tuple2("bottom", $elm$core$String$fromFloat(x) + "px");
                case 5:
                    var i = pos.a;
                    return _Utils_Tuple2("z-index", $elm$core$String$fromInt(i));
                case 6:
                    return _Utils_Tuple2("display", "inline-block");
                default:
                    switch (pos.a) {
                        case 0:
                            var _v4 = pos.a;
                            return _Utils_Tuple2("float", "left");
                        case 1:
                            var _v5 = pos.a;
                            return _Utils_Tuple2("float", "right");
                        case 2:
                            var _v6 = pos.a;
                            return _Utils_Tuple2("float", "left");
                        default:
                            var _v7 = pos.a;
                            return _Utils_Tuple2("float", "right");
                    }
            }
        };
        return $elm$core$List$map_raw(renderPos, posEls);
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$Props = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Intermediate$props = $mdgriffith$style_elements$Style$Internal$Intermediate$Props;
    var $mdgriffith$style_elements$Style$Internal$Selector$Free = function (a) {
        return { $: 3, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Selector$Pseudo = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Selector$pseudo_raw = function (psu, sel) {
        switch (sel.$) {
            case 1:
                var existing = sel.a;
                return $mdgriffith$style_elements$Style$Internal$Selector$Pseudo(_Utils_ap(existing, psu));
            case 0:
                var single = sel.a;
                var findable = sel.b;
                return $mdgriffith$style_elements$Style$Internal$Selector$Stack({ $: 1, a: $mdgriffith$style_elements$Style$Internal$Selector$Select_raw(single, findable), b: { $: 1, a: $mdgriffith$style_elements$Style$Internal$Selector$Pseudo(psu), b: _List_Nil } });
            case 2:
                var selectChild = sel.a;
                return $mdgriffith$style_elements$Style$Internal$Selector$SelectChild($mdgriffith$style_elements$Style$Internal$Selector$pseudo_raw(psu, selectChild));
            case 3:
                var single = sel.a;
                return $mdgriffith$style_elements$Style$Internal$Selector$Free(single);
            default:
                var sels = sel.a;
                var lastElem = $elm$core$List$head($elm$core$List$reverse(sels));
                var init = $elm$core$List$reverse($elm$core$List$drop_raw(1, $elm$core$List$reverse(sels)));
                if (lastElem.$ === 1) {
                    return $mdgriffith$style_elements$Style$Internal$Selector$Stack(sels);
                }
                else {
                    var last = lastElem.a;
                    return $mdgriffith$style_elements$Style$Internal$Selector$Stack(_Utils_ap(init, { $: 1, a: $mdgriffith$style_elements$Style$Internal$Selector$pseudo_raw(psu, last), b: _List_Nil }));
                }
        }
    }, $mdgriffith$style_elements$Style$Internal$Selector$pseudo = F2($mdgriffith$style_elements$Style$Internal$Selector$pseudo_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$Property$shadow = function (shadows) {
        var _v0 = $elm$core$List$partition_raw(function (_v1) {
            var s = _v1;
            return s.bX === "text";
        }, shadows);
        var text = _v0.a;
        var boxShadow = _v0.b;
        var renderedBox = $elm$core$String$join_raw(", ", $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Value$shadow, boxShadow));
        var renderedText = $elm$core$String$join_raw(", ", $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Value$shadow, text));
        return $elm$core$List$filterMap_raw($elm$core$Basics$identity, { $: 1, a: (renderedBox === "") ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(_Utils_Tuple2("box-shadow", renderedBox)), b: { $: 1, a: (renderedText === "") ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(_Utils_Tuple2("text-shadow", renderedText)), b: _List_Nil } });
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$transformations = function (transforms) {
        var transformToString = function (transform) {
            switch (transform.$) {
                case 0:
                    var x = transform.a;
                    var y = transform.b;
                    var z = transform.c;
                    return "translate3d(" + ($elm$core$String$fromFloat(x) + ("px, " + ($elm$core$String$fromFloat(y) + ("px, " + ($elm$core$String$fromFloat(z) + "px)")))));
                case 2:
                    var x = transform.a;
                    var y = transform.b;
                    var z = transform.c;
                    var angle = transform.d;
                    return "rotate3d(" + ($elm$core$String$fromFloat(x) + ("," + ($elm$core$String$fromFloat(y) + ("," + ($elm$core$String$fromFloat(z) + ("," + ($elm$core$String$fromFloat(angle) + "rad)")))))));
                case 1:
                    var x = transform.a;
                    return "rotate(" + ($elm$core$String$fromFloat(x) + "rad)");
                default:
                    var x = transform.a;
                    var y = transform.b;
                    var z = transform.c;
                    return "scale3d(" + ($elm$core$String$fromFloat(x) + (", " + ($elm$core$String$fromFloat(y) + (", " + ($elm$core$String$fromFloat(z) + ")")))));
            }
        };
        var transformString = $elm$core$String$join_raw(" ", $elm$core$List$map_raw(transformToString, transforms));
        var renderedTransforms = ($elm$core$String$length(transformString) > 0) ? { $: 1, a: _Utils_Tuple2("transform", transformString), b: _List_Nil } : _List_Nil;
        return (!$elm$core$List$length(transforms)) ? _List_Nil : renderedTransforms;
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$transition = function (_v0) {
        var delay = _v0.bJ;
        var duration = _v0.bL;
        var easing = _v0.bM;
        var props = _v0.v;
        var formatTrans = function (prop) {
            return $elm$core$String$join_raw(" ", { $: 1, a: prop, b: { $: 1, a: $elm$core$String$fromFloat(duration) + "ms", b: { $: 1, a: easing, b: { $: 1, a: $elm$core$String$fromFloat(delay) + "ms", b: _List_Nil } } } });
        };
        return $elm$core$String$join_raw(", ", $elm$core$List$map_raw(formatTrans, props));
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Value$typeface = function (families) {
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
        return $elm$core$String$join_raw(", ", $elm$core$List$map_raw(renderFont, families));
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$visibility = function (vis) {
        switch (vis.$) {
            case 0:
                return { $: 1, a: _Utils_Tuple2("display", "none"), b: _List_Nil };
            case 1:
                return { $: 1, a: _Utils_Tuple2("visibility", "hidden"), b: _List_Nil };
            default:
                var x = vis.a;
                return { $: 1, a: _Utils_Tuple2("opacity", $elm$core$String$fromFloat(x)), b: _List_Nil };
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Render$renderVariationProp_raw = function (parentClass, prop) {
        switch (prop.$) {
            case 2:
                return $elm$core$Maybe$Nothing;
            case 1:
                return $elm$core$Maybe$Nothing;
            case 4:
                var cls = prop.a;
                var styleProps = prop.b;
                return A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass), $mdgriffith$style_elements$Style$Internal$Intermediate$Class)({
                    v: $elm$core$List$filterMap_raw($mdgriffith$style_elements$Style$Internal$Render$renderVariationProp(parentClass), styleProps),
                    B: $mdgriffith$style_elements$Style$Internal$Selector$pseudo_raw(cls, parentClass)
                });
            case 3:
                var query = prop.a;
                var styleProps = prop.b;
                return A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass), $mdgriffith$style_elements$Style$Internal$Intermediate$Media)({
                    v: $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Intermediate$asMediaQuery(query), $elm$core$List$filterMap_raw($mdgriffith$style_elements$Style$Internal$Render$renderVariationProp(parentClass), styleProps)),
                    bi: "@media " + query,
                    B: parentClass
                });
            case 0:
                var name = prop.a;
                var val = prop.b;
                return A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props)({ $: 1, a: _Utils_Tuple2(name, val), b: _List_Nil });
            case 13:
                var vis = prop.a;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, $mdgriffith$style_elements$Style$Internal$Render$Property$visibility(vis));
            case 5:
                var pos = prop.a;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, $mdgriffith$style_elements$Style$Internal$Render$Property$position(pos));
            case 6:
                var name = prop.a;
                var val = prop.b;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, { $: 1, a: _Utils_Tuple2(name, val), b: _List_Nil });
            case 7:
                var fam = prop.a;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, { $: 1, a: _Utils_Tuple2("font-family", $mdgriffith$style_elements$Style$Internal$Render$Value$typeface(fam)), b: _List_Nil });
            case 8:
                var lay = prop.a;
                return A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props)($mdgriffith$style_elements$Style$Internal$Render$Property$layout_raw(false, lay));
            case 9:
                var props = prop.a;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, $mdgriffith$style_elements$Style$Internal$Render$Property$background(props));
            case 10:
                var shadows = prop.a;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, $mdgriffith$style_elements$Style$Internal$Render$Property$shadow(shadows));
            case 11:
                var transformations = prop.a;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, $mdgriffith$style_elements$Style$Internal$Render$Property$transformations(transformations));
            case 12:
                var filters = prop.a;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, $mdgriffith$style_elements$Style$Internal$Render$Property$filters(filters));
            case 15:
                var color = prop.a;
                return $elm$core$Basics$composeL_raw($elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props, { $: 1, a: _Utils_Tuple2("color", $mdgriffith$style_elements$Style$Internal$Render$Value$color(color)), b: _List_Nil });
            case 14:
                var color = prop.a;
                return A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass), $mdgriffith$style_elements$Style$Internal$Intermediate$Class)({
                    v: { $: 1, a: $mdgriffith$style_elements$Style$Internal$Intermediate$props(_List_fromArray([
                            _Utils_Tuple2("background-color", $mdgriffith$style_elements$Style$Internal$Render$Value$color(color))
                        ])), b: _List_Nil },
                    B: $mdgriffith$style_elements$Style$Internal$Selector$pseudo_raw("::selection", parentClass)
                });
            default:
                var trans = prop.a;
                return $elm$core$Maybe$Just($mdgriffith$style_elements$Style$Internal$Intermediate$props({ $: 1, a: _Utils_Tuple2("transition", $elm$core$String$join_raw(", ", $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Property$transition, trans))), b: _List_Nil }));
        }
    }, $mdgriffith$style_elements$Style$Internal$Render$renderVariationProp = F2($mdgriffith$style_elements$Style$Internal$Render$renderVariationProp_raw);
    var $mdgriffith$style_elements$Style$Internal$Selector$select = function (_class) {
        return $mdgriffith$style_elements$Style$Internal$Selector$Select_raw("", $mdgriffith$style_elements$Style$Internal$Find$Style_raw(_class, ""));
    };
    var $elm$regex$Regex$Match_raw = function (match, index, number, submatches) {
        return { bU: index, bY: match, b$: number, b5: submatches };
    }, $elm$regex$Regex$Match = F4($elm$regex$Regex$Match_raw);
    var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
    var $elm$regex$Regex$fromString = function (string) {
        return _Regex_fromStringWith_raw({ bF: false, bZ: false }, string);
    };
    var $elm$regex$Regex$never = _Regex_never;
    var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
    var $elm$core$String$toLower = _String_toLower;
    var $mdgriffith$style_elements$Style$Internal$Selector$uncapitalize = function (str) {
        var tail = $elm$core$String$dropLeft_raw(1, str);
        var head = $elm$core$String$toLower($elm$core$String$left_raw(1, str));
        return _Utils_ap(head, tail);
    };
    var $mdgriffith$style_elements$Style$Internal$Selector$formatName = function (x) {
        return A3($elm$regex$Regex$replace, $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("[\\s+]")), function (_v2) {
            return "-";
        }, A3($elm$regex$Regex$replace, $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("[A-Z0-9]+")), function (_v1) {
            var match = _v1.bY;
            return " " + $elm$core$String$toLower(match);
        }, A3($elm$regex$Regex$replace, $elm$core$Maybe$withDefault_raw($elm$regex$Regex$never, $elm$regex$Regex$fromString("[^a-zA-Z0-9_-]")), function (_v0) {
            return "";
        }, $mdgriffith$style_elements$Style$Internal$Selector$uncapitalize(x))));
    };
    var $mdgriffith$style_elements$Style$Internal$Find$toVariation_raw = function (_var, newName, element) {
        if (!element.$) {
            var _class = element.a;
            var name = element.b;
            return $mdgriffith$style_elements$Style$Internal$Find$Variation_raw(_class, _var, newName);
        }
        else {
            var _class = element.a;
            var name = element.c;
            return $mdgriffith$style_elements$Style$Internal$Find$Variation_raw(_class, _var, newName);
        }
    }, $mdgriffith$style_elements$Style$Internal$Find$toVariation = F3($mdgriffith$style_elements$Style$Internal$Find$toVariation_raw);
    var $mdgriffith$style_elements$Style$Internal$Selector$variant_raw = function (sel, _var, name) {
        switch (sel.$) {
            case 1:
                var psu = sel.a;
                return $mdgriffith$style_elements$Style$Internal$Selector$Pseudo(psu);
            case 0:
                var single = sel.a;
                var findable = sel.b;
                return $mdgriffith$style_elements$Style$Internal$Selector$Select_raw(single + ("-" + $mdgriffith$style_elements$Style$Internal$Selector$formatName(name)), $mdgriffith$style_elements$Style$Internal$Find$toVariation_raw(_var, single + ("-" + $mdgriffith$style_elements$Style$Internal$Selector$formatName(name)), findable));
            case 2:
                var selectChild = sel.a;
                return $mdgriffith$style_elements$Style$Internal$Selector$SelectChild($mdgriffith$style_elements$Style$Internal$Selector$variant_raw(selectChild, _var, name));
            case 3:
                var single = sel.a;
                return $mdgriffith$style_elements$Style$Internal$Selector$Free(single);
            default:
                var sels = sel.a;
                var lastElem = $elm$core$List$head($elm$core$List$reverse(sels));
                var init = $elm$core$List$reverse($elm$core$List$drop_raw(1, $elm$core$List$reverse(sels)));
                if (lastElem.$ === 1) {
                    return $mdgriffith$style_elements$Style$Internal$Selector$Stack(sels);
                }
                else {
                    var last = lastElem.a;
                    return $mdgriffith$style_elements$Style$Internal$Selector$Stack(_Utils_ap(init, { $: 1, a: $mdgriffith$style_elements$Style$Internal$Selector$variant_raw(last, _var, name), b: _List_Nil }));
                }
        }
    }, $mdgriffith$style_elements$Style$Internal$Selector$variant = F3($mdgriffith$style_elements$Style$Internal$Selector$variant_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$renderProp_raw = function (parentClass, prop) {
        switch (prop.$) {
            case 2:
                var cls = prop.a;
                var styleProps = prop.b;
                return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Class)({
                    v: $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$renderProp(parentClass), styleProps),
                    B: $mdgriffith$style_elements$Style$Internal$Selector$child_raw(parentClass, $mdgriffith$style_elements$Style$Internal$Selector$select(cls))
                });
            case 1:
                var _var = prop.a;
                var styleProps = prop.b;
                var variationName = function () {
                    var _v1 = $elm$core$List$filterMap_raw($mdgriffith$style_elements$Style$Internal$Render$renderVariationProp(parentClass), styleProps);
                    if (!_v1.b) {
                        return "v";
                    }
                    else {
                        var intermediates = _v1;
                        return $elm$core$String$concat($elm$core$List$map_raw(function (_v2) {
                            var x = _v2.a;
                            var y = _v2.b;
                            return _Utils_ap(x, y);
                        }, $elm$core$List$concatMap_raw($mdgriffith$style_elements$Style$Internal$Intermediate$getProps, intermediates)));
                    }
                }();
                var selectVariation = $mdgriffith$style_elements$Style$Internal$Selector$variant_raw(parentClass, _var, variationName);
                return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Class)({
                    v: $elm$core$List$filterMap_raw($mdgriffith$style_elements$Style$Internal$Render$renderVariationProp(selectVariation), styleProps),
                    B: selectVariation
                });
            case 4:
                var cls = prop.a;
                var styleProps = prop.b;
                return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Class)({
                    v: $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$renderProp(parentClass), styleProps),
                    B: $mdgriffith$style_elements$Style$Internal$Selector$pseudo_raw(cls, parentClass)
                });
            case 3:
                var query = prop.a;
                var styleProps = prop.b;
                return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Media)({
                    v: $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Intermediate$asMediaQuery(query), $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$renderProp(parentClass), styleProps)),
                    bi: "@media " + query,
                    B: parentClass
                });
            case 0:
                var name = prop.a;
                var val = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props({ $: 1, a: _Utils_Tuple2(name, val), b: _List_Nil });
            case 13:
                var vis = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props($mdgriffith$style_elements$Style$Internal$Render$Property$visibility(vis));
            case 5:
                var pos = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props($mdgriffith$style_elements$Style$Internal$Render$Property$position(pos));
            case 6:
                var name = prop.a;
                var val = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props({ $: 1, a: _Utils_Tuple2(name, val), b: _List_Nil });
            case 8:
                var lay = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props($mdgriffith$style_elements$Style$Internal$Render$Property$layout_raw(false, lay));
            case 9:
                var props = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props($mdgriffith$style_elements$Style$Internal$Render$Property$background(props));
            case 10:
                var shadows = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props($mdgriffith$style_elements$Style$Internal$Render$Property$shadow(shadows));
            case 11:
                var transformations = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props($mdgriffith$style_elements$Style$Internal$Render$Property$transformations(transformations));
            case 12:
                var filters = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props($mdgriffith$style_elements$Style$Internal$Render$Property$filters(filters));
            case 14:
                var color = prop.a;
                return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Class)({
                    v: { $: 1, a: $mdgriffith$style_elements$Style$Internal$Intermediate$props(_List_fromArray([
                            _Utils_Tuple2("background-color", $mdgriffith$style_elements$Style$Internal$Render$Value$color(color))
                        ])), b: _List_Nil },
                    B: $mdgriffith$style_elements$Style$Internal$Selector$pseudo_raw("::selection", parentClass)
                });
            case 15:
                var color = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props({ $: 1, a: _Utils_Tuple2("color", $mdgriffith$style_elements$Style$Internal$Render$Value$color(color)), b: _List_Nil });
            case 16:
                var trans = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props({ $: 1, a: _Utils_Tuple2("transition", $elm$core$String$join_raw(", ", $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$Property$transition, trans))), b: _List_Nil });
            default:
                var fam = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$props({ $: 1, a: _Utils_Tuple2("font-family", $mdgriffith$style_elements$Style$Internal$Render$Value$typeface(fam)), b: _List_Nil });
        }
    }, $mdgriffith$style_elements$Style$Internal$Render$renderProp = F2($mdgriffith$style_elements$Style$Internal$Render$renderProp_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$renderStyle_raw = function (guarded, style) {
        switch (style.$) {
            case 3:
                var reset = style.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$Free(reset);
            case 2:
                var str = style.a;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$Free("@import " + (str + ";"));
            case 1:
                var cls = style.a;
                var styleProps = style.b;
                return $mdgriffith$style_elements$Style$Internal$Intermediate$Free($mdgriffith$style_elements$Style$Internal$Render$class_raw(cls, styleProps));
            default:
                var cls = style.a;
                var styleProps = style.b;
                var selector = $mdgriffith$style_elements$Style$Internal$Selector$select(cls);
                var inter = $mdgriffith$style_elements$Style$Internal$Intermediate$Class({
                    v: $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Render$renderProp(selector), styleProps),
                    B: selector
                });
                var guard = function (i) {
                    return guarded ? $mdgriffith$style_elements$Style$Internal$Intermediate$guard(i) : i;
                };
                return guard(inter);
        }
    }, $mdgriffith$style_elements$Style$Internal$Render$renderStyle = F2($mdgriffith$style_elements$Style$Internal$Render$renderStyle_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Import = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Reset = function (a) {
        return { $: 3, a: a };
    };
    var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
    var $elm$core$Set$empty = $elm$core$Dict$empty;
    var $elm$core$Set$insert_raw = function (key, _v0) {
        var dict = _v0;
        return $elm$core$Dict$insert_raw(key, 0, dict);
    }, $elm$core$Set$insert = F2($elm$core$Set$insert_raw);
    var $elm$core$Set$fromList = function (list) {
        return $elm$core$List$foldl_raw($elm$core$Set$insert, $elm$core$Set$empty, list);
    };
    var $mdgriffith$style_elements$Style$Internal$Render$reorderImportAddReset_raw = function (reset, styles) {
        var reorder = F2(function (style, _v5) {
            var importStatements = _v5.a;
            var remainingStyles = _v5.b;
            if (style.$ === 2) {
                return _Utils_Tuple2(_List_Cons(style, importStatements), remainingStyles);
            }
            else {
                var x = style;
                return _Utils_Tuple2(importStatements, _List_Cons(style, remainingStyles));
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
                                return $elm$core$Maybe$Just(url);
                            }
                            else {
                                return $elm$core$Maybe$Nothing;
                            }
                        };
                        return $elm$core$List$filterMap_raw(forImport, fams);
                    }
                    else {
                        return _List_Nil;
                    }
                };
                return $elm$core$List$concatMap_raw(forFont, props);
            }
            else {
                return _List_Nil;
            }
        };
        var importedFonts = $elm$core$List$map_raw(function (uri) {
            return $mdgriffith$style_elements$Style$Internal$Model$Import("url('" + (uri + "')"));
        }, $elm$core$Basics$composeL_raw($elm$core$Set$toList, $elm$core$Set$fromList, $elm$core$List$concatMap_raw(getFontStyle, styles)));
        var _v0 = $elm$core$List$foldr_raw(reorder, _Utils_Tuple2(_List_Nil, _List_Nil), styles);
        var imports = _v0.a;
        var allStyles = _v0.b;
        return _Utils_ap(imports, _Utils_ap(importedFonts, _Utils_ap({ $: 1, a: $mdgriffith$style_elements$Style$Internal$Model$Reset(reset), b: _List_Nil }, allStyles)));
    }, $mdgriffith$style_elements$Style$Internal$Render$reorderImportAddReset = F2($mdgriffith$style_elements$Style$Internal$Render$reorderImportAddReset_raw);
    var $mdgriffith$style_elements$Style$Internal$Batchable$toList = function (batchables) {
        var flatten = function (batchToFlatten) {
            switch (batchToFlatten.$) {
                case 0:
                    var thing = batchToFlatten.a;
                    return { $: 1, a: thing, b: _List_Nil };
                case 1:
                    var things = batchToFlatten.a;
                    return things;
                default:
                    var embedded = batchToFlatten.a;
                    return $mdgriffith$style_elements$Style$Internal$Batchable$toList(embedded);
            }
        };
        return $elm$core$List$concatMap_raw(flatten, batchables);
    };
    var $mdgriffith$style_elements$Style$Internal$Render$stylesheet_raw = function (reset, guard, batched) {
        return $mdgriffith$style_elements$Style$Internal$Intermediate$finalize($elm$core$List$map_raw(A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Render$renderStyle(guard), $mdgriffith$style_elements$Style$Internal$Render$preprocess), $mdgriffith$style_elements$Style$Internal$Render$reorderImportAddReset_raw(reset, $mdgriffith$style_elements$Style$Internal$Batchable$toList(batched))));
    }, $mdgriffith$style_elements$Style$Internal$Render$stylesheet = F3($mdgriffith$style_elements$Style$Internal$Render$stylesheet_raw);
    var $mdgriffith$style_elements$Style$styleSheetWith_raw = function (options, styles) {
        var unguard = $elm$core$List$any_raw($elm$core$Basics$eq(0), options);
        return $mdgriffith$style_elements$Style$prepareSheet($mdgriffith$style_elements$Style$Internal$Render$stylesheet_raw("", !unguard, styles));
    }, $mdgriffith$style_elements$Style$styleSheetWith = F2($mdgriffith$style_elements$Style$styleSheetWith_raw);
    var $mdgriffith$style_elements$Style$styleSheet = function (styles) {
        return $mdgriffith$style_elements$Style$styleSheetWith_raw(_List_Nil, styles);
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Exact_raw = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$Exact = F2($mdgriffith$style_elements$Style$Internal$Model$Exact_raw);
    var $mdgriffith$style_elements$Style$Color$background = function (clr) {
        return $mdgriffith$style_elements$Style$Internal$Model$Exact_raw("background-color", $mdgriffith$style_elements$Style$Internal$Render$Value$color(clr));
    };
    var $mdgriffith$style_elements$Style$Internal$Model$FontName = function (a) {
        return { $: 5, a: a };
    };
    var $mdgriffith$style_elements$Style$Font$font = $mdgriffith$style_elements$Style$Internal$Model$FontName;
    var $mdgriffith$style_elements$Style$Internal$Model$RGBA_raw = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $mdgriffith$style_elements$Style$Internal$Model$RGBA = F4($mdgriffith$style_elements$Style$Internal$Model$RGBA_raw);
    var $mdgriffith$style_elements$Style$rgb_raw = function (r, g, b) {
        return $mdgriffith$style_elements$Style$Internal$Model$RGBA_raw(r, g, b, 1);
    }, $mdgriffith$style_elements$Style$rgb = F3($mdgriffith$style_elements$Style$rgb_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$SansSerif = { $: 1 };
    var $mdgriffith$style_elements$Style$Font$sansSerif = $mdgriffith$style_elements$Style$Internal$Model$SansSerif;
    var $mdgriffith$style_elements$Style$Internal$Model$TextColor = function (a) {
        return { $: 15, a: a };
    };
    var $mdgriffith$style_elements$Style$Color$text = $mdgriffith$style_elements$Style$Internal$Model$TextColor;
    var $mdgriffith$style_elements$Style$Internal$Model$FontFamily = function (a) {
        return { $: 7, a: a };
    };
    var $mdgriffith$style_elements$Style$Font$typeface = function (families) {
        return $mdgriffith$style_elements$Style$Internal$Model$FontFamily(families);
    };
    var $elm_explorations$benchmark$Benchmark$Runner$Text$body = { $: 1, a: $mdgriffith$style_elements$Style$Font$typeface(_List_fromArray([
            $mdgriffith$style_elements$Style$Font$font("Helvetica Neue"),
            $mdgriffith$style_elements$Style$Font$font("Helvetica"),
            $mdgriffith$style_elements$Style$Font$font("Arial"),
            $mdgriffith$style_elements$Style$Font$sansSerif
        ])), b: { $: 1, a: $mdgriffith$style_elements$Style$Color$text($mdgriffith$style_elements$Style$rgb_raw(15 / 255, 30 / 255, 45 / 255)), b: _List_Nil } };
    var $mdgriffith$style_elements$Style$Sheet$ChildSheet = $elm$core$Basics$identity;
    var $mdgriffith$style_elements$Style$Internal$Batchable$Batch = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Batchable$Many = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Batchable$One = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Batchable$map_raw = function (fn, batchable) {
        switch (batchable.$) {
            case 0:
                var internal = batchable.a;
                return $mdgriffith$style_elements$Style$Internal$Batchable$One(fn(internal));
            case 1:
                var elems = batchable.a;
                return $mdgriffith$style_elements$Style$Internal$Batchable$Many($elm$core$List$map_raw(fn, elems));
            default:
                var embedded = batchable.a;
                return $mdgriffith$style_elements$Style$Internal$Batchable$Batch($elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Batchable$map(fn), embedded));
        }
    }, $mdgriffith$style_elements$Style$Internal$Batchable$map = F2($mdgriffith$style_elements$Style$Internal$Batchable$map_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$RawStyle_raw = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$RawStyle = F2($mdgriffith$style_elements$Style$Internal$Model$RawStyle_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Background = function (a) {
        return { $: 9, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Child_raw = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$Child = F2($mdgriffith$style_elements$Style$Internal$Model$Child_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Font_raw = function (a, b) {
        return { $: 6, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$Font = F2($mdgriffith$style_elements$Style$Internal$Model$Font_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Layout = function (a) {
        return { $: 8, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$MediaQuery_raw = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$MediaQuery = F2($mdgriffith$style_elements$Style$Internal$Model$MediaQuery_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Position = function (a) {
        return { $: 5, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$PseudoElement_raw = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$PseudoElement = F2($mdgriffith$style_elements$Style$Internal$Model$PseudoElement_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$SelectionColor = function (a) {
        return { $: 14, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Transitions = function (a) {
        return { $: 16, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Variation_raw = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$Variation = F2($mdgriffith$style_elements$Style$Internal$Model$Variation_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Visibility = function (a) {
        return { $: 13, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$mapPropClass_raw = function (fn, prop) {
        switch (prop.$) {
            case 2:
                var _class = prop.a;
                var props = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Child_raw(fn(_class), $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Model$mapPropClass(fn), props));
            case 1:
                var _var = prop.a;
                var props = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Variation_raw(_var, $elm$core$List$map_raw(A2($mdgriffith$style_elements$Style$Internal$Model$mapPropClassAndVar, fn, $elm$core$Basics$identity), props));
            case 0:
                var name = prop.a;
                var val = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Exact_raw(name, val);
            case 5:
                var props = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Position(props);
            case 6:
                var name = prop.a;
                var val = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Font_raw(name, val);
            case 8:
                var props = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Layout(props);
            case 9:
                var props = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Background(props);
            case 3:
                var name = prop.a;
                var props = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$MediaQuery_raw(name, $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Model$mapPropClass(fn), props));
            case 4:
                var name = prop.a;
                var props = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$PseudoElement_raw(name, $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Model$mapPropClass(fn), props));
            case 10:
                var shadows = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Shadows(shadows);
            case 11:
                var transforms = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Transform(transforms);
            case 12:
                var filters = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Filters(filters);
            case 13:
                var v = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Visibility(v);
            case 15:
                var color = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$TextColor(color);
            case 16:
                var t = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Transitions(t);
            case 14:
                var clr = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$SelectionColor(clr);
            default:
                var fam = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$FontFamily(fam);
        }
    }, $mdgriffith$style_elements$Style$Internal$Model$mapPropClass = F2($mdgriffith$style_elements$Style$Internal$Model$mapPropClass_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$mapPropClassAndVar_raw = function (fn, fnVar, prop) {
        switch (prop.$) {
            case 2:
                var _class = prop.a;
                var props = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Child_raw(fn(_class), $elm$core$List$map_raw(A2($mdgriffith$style_elements$Style$Internal$Model$mapPropClassAndVar, fn, fnVar), props));
            case 1:
                var _var = prop.a;
                var props = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Variation_raw(fnVar(_var), $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Model$mapPropClass(fn), props));
            case 0:
                var name = prop.a;
                var val = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Exact_raw(name, val);
            case 5:
                var props = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Position(props);
            case 6:
                var name = prop.a;
                var val = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Font_raw(name, val);
            case 8:
                var props = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Layout(props);
            case 9:
                var props = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Background(props);
            case 3:
                var name = prop.a;
                var props = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$MediaQuery_raw(name, $elm$core$List$map_raw(A2($mdgriffith$style_elements$Style$Internal$Model$mapPropClassAndVar, fn, fnVar), props));
            case 4:
                var name = prop.a;
                var props = prop.b;
                return $mdgriffith$style_elements$Style$Internal$Model$PseudoElement_raw(name, $elm$core$List$map_raw(A2($mdgriffith$style_elements$Style$Internal$Model$mapPropClassAndVar, fn, fnVar), props));
            case 10:
                var shadows = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Shadows(shadows);
            case 11:
                var transforms = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Transform(transforms);
            case 12:
                var filters = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Filters(filters);
            case 13:
                var v = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Visibility(v);
            case 15:
                var color = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$TextColor(color);
            case 16:
                var t = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Transitions(t);
            case 14:
                var clr = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$SelectionColor(clr);
            default:
                var fam = prop.a;
                return $mdgriffith$style_elements$Style$Internal$Model$FontFamily(fam);
        }
    }, $mdgriffith$style_elements$Style$Internal$Model$mapPropClassAndVar = F3($mdgriffith$style_elements$Style$Internal$Model$mapPropClassAndVar_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$mapClassAndVar_raw = function (fn, fnVariation, style) {
        switch (style.$) {
            case 0:
                var _class = style.a;
                var props = style.b;
                return $mdgriffith$style_elements$Style$Internal$Model$Style_raw(fn(_class), $elm$core$List$map_raw(A2($mdgriffith$style_elements$Style$Internal$Model$mapPropClassAndVar, fn, fnVariation), props));
            case 2:
                var str = style.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Import(str);
            case 1:
                var str = style.a;
                var props = style.b;
                return $mdgriffith$style_elements$Style$Internal$Model$RawStyle_raw(str, props);
            default:
                var r = style.a;
                return $mdgriffith$style_elements$Style$Internal$Model$Reset(r);
        }
    }, $mdgriffith$style_elements$Style$Internal$Model$mapClassAndVar = F3($mdgriffith$style_elements$Style$Internal$Model$mapClassAndVar_raw);
    var $mdgriffith$style_elements$Style$Sheet$map_raw = function (toParent, toParentVariation, styles) {
        return $elm$core$List$map_raw($mdgriffith$style_elements$Style$Internal$Batchable$map(A2($mdgriffith$style_elements$Style$Internal$Model$mapClassAndVar, toParent, toParentVariation)), styles);
    }, $mdgriffith$style_elements$Style$Sheet$map = F3($mdgriffith$style_elements$Style$Sheet$map_raw);
    var $mdgriffith$style_elements$Style$Internal$Batchable$many = $mdgriffith$style_elements$Style$Internal$Batchable$Many;
    var $mdgriffith$style_elements$Style$Sheet$merge = function (_v0) {
        var styles = _v0;
        return $mdgriffith$style_elements$Style$Internal$Batchable$many($mdgriffith$style_elements$Style$Internal$Batchable$toList(styles));
    };
    var $mdgriffith$style_elements$Style$Internal$Batchable$one = $mdgriffith$style_elements$Style$Internal$Batchable$One;
    var $mdgriffith$style_elements$Style$prop_raw = function (name, val) {
        return $mdgriffith$style_elements$Style$Internal$Model$Exact_raw(name, val);
    }, $mdgriffith$style_elements$Style$prop = F2($mdgriffith$style_elements$Style$prop_raw);
    var $mdgriffith$style_elements$Style$style_raw = function (cls, props) {
        return $mdgriffith$style_elements$Style$Internal$Batchable$one($mdgriffith$style_elements$Style$Internal$Model$Style_raw(cls, _List_Cons($mdgriffith$style_elements$Style$prop_raw("border-style", "solid"), props)));
    }, $mdgriffith$style_elements$Style$style = F2($mdgriffith$style_elements$Style$style_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$Box = { $: 2 };
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$Progress = { $: 3 };
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$Status = { $: 4 };
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$TextClass = function (a) {
        return { $: 5, a: a };
    };
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$Unstyled = { $: 0 };
    var $mdgriffith$style_elements$Style$Font$size = function (i) {
        return $mdgriffith$style_elements$Style$Internal$Model$Font_raw("font-size", $elm$core$String$fromFloat(i) + "px");
    };
    var $mdgriffith$style_elements$Style$Shadow$boxHelper = function (_v0) {
        var offset = _v0.a7;
        var size = _v0.b4;
        var blur = _v0.bC;
        var color = _v0.bH;
        return { bC: blur, bH: color, bX: "box", a7: offset, b4: size };
    };
    var $mdgriffith$style_elements$Style$Shadow$box = function (shadow) {
        return $mdgriffith$style_elements$Style$Internal$Model$Shadows({ $: 1, a: $mdgriffith$style_elements$Style$Shadow$boxHelper(shadow), b: _List_Nil });
    };
    var $mdgriffith$style_elements$Style$rgba = $mdgriffith$style_elements$Style$Internal$Model$RGBA;
    var $elm_explorations$benchmark$Benchmark$Runner$Box$style = { $: 1, a: $mdgriffith$style_elements$Style$Color$background($mdgriffith$style_elements$Style$rgb_raw(248 / 255, 248 / 255, 248 / 255)), b: { $: 1, a: $mdgriffith$style_elements$Style$Shadow$box({
                bC: 2,
                bH: $mdgriffith$style_elements$Style$Internal$Model$RGBA_raw(15 / 255, 30 / 255, 45 / 255, 0.1),
                a7: _Utils_Tuple2(0, 1),
                b4: 0
            }), b: { $: 1, a: $mdgriffith$style_elements$Style$Font$size(24), b: _List_Nil } } };
    var $elm_explorations$benchmark$Benchmark$Runner$Text$Hero = 0;
    var $elm_explorations$benchmark$Benchmark$Runner$Text$Path = 1;
    var $mdgriffith$style_elements$Style$Font$alignLeft = $mdgriffith$style_elements$Style$Internal$Model$Font_raw("text-align", "left");
    var $mdgriffith$style_elements$Style$Font$center = $mdgriffith$style_elements$Style$Internal$Model$Font_raw("text-align", "center");
    var $elm_explorations$benchmark$Benchmark$Runner$Text$styles = { $: 1, a: $mdgriffith$style_elements$Style$style_raw(0, _List_fromArray([
            $mdgriffith$style_elements$Style$Font$center,
            $mdgriffith$style_elements$Style$Font$size(48)
        ])), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw(1, _List_fromArray([
                $mdgriffith$style_elements$Style$Font$alignLeft,
                $mdgriffith$style_elements$Style$Font$size(18)
            ])), b: _List_Nil } };
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$styles = { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Unstyled, _List_Nil), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Box, $elm_explorations$benchmark$Benchmark$Runner$Box$style), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Progress, _List_fromArray([
                    $mdgriffith$style_elements$Style$Color$text($mdgriffith$style_elements$Style$rgb_raw(248 / 255, 248 / 255, 248 / 255)),
                    $mdgriffith$style_elements$Style$Color$background($mdgriffith$style_elements$Style$rgb_raw(87 / 255, 171 / 255, 226 / 255))
                ])), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Status, _List_fromArray([
                        $mdgriffith$style_elements$Style$Font$size(14)
                    ])), b: { $: 1, a: $mdgriffith$style_elements$Style$Sheet$merge($mdgriffith$style_elements$Style$Sheet$map_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$TextClass, $elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$Text$styles)), b: _List_Nil } } } } };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$Box = { $: 1 };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$Cell = { $: 4 };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$Header = { $: 3 };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$Numeric = 0;
    var $elm_explorations$benchmark$Benchmark$Runner$Report$Table = { $: 2 };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$Text = 1;
    var $elm_explorations$benchmark$Benchmark$Runner$Report$TextClass = function (a) {
        return { $: 5, a: a };
    };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$Unstyled = { $: 0 };
    var $mdgriffith$style_elements$Style$Font$alignRight = $mdgriffith$style_elements$Style$Internal$Model$Font_raw("text-align", "right");
    var $mdgriffith$style_elements$Style$Font$bold = $mdgriffith$style_elements$Style$Internal$Model$Font_raw("font-weight", "700");
    var $mdgriffith$style_elements$Style$variation_raw = function (v, variationProps) {
        return $mdgriffith$style_elements$Style$Internal$Model$Variation_raw(v, variationProps);
    }, $mdgriffith$style_elements$Style$variation = F2($mdgriffith$style_elements$Style$variation_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$Report$styles = { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Unstyled, _List_Nil), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Box, $elm_explorations$benchmark$Benchmark$Runner$Box$style), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Table, _List_fromArray([
                    $mdgriffith$style_elements$Style$prop_raw("font-feature-settings", "'tnum'")
                ])), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Header, _List_fromArray([
                        $mdgriffith$style_elements$Style$Font$bold,
                        $mdgriffith$style_elements$Style$Font$size(12),
                        $mdgriffith$style_elements$Style$variation_raw(0, _List_fromArray([$mdgriffith$style_elements$Style$Font$alignRight])),
                        $mdgriffith$style_elements$Style$variation_raw(1, _List_fromArray([$mdgriffith$style_elements$Style$Font$alignLeft]))
                    ])), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Cell, _List_fromArray([
                            $mdgriffith$style_elements$Style$Font$size(18),
                            $mdgriffith$style_elements$Style$variation_raw(0, _List_fromArray([$mdgriffith$style_elements$Style$Font$alignRight])),
                            $mdgriffith$style_elements$Style$variation_raw(1, _List_fromArray([$mdgriffith$style_elements$Style$Font$alignLeft]))
                        ])), b: { $: 1, a: $mdgriffith$style_elements$Style$Sheet$merge($mdgriffith$style_elements$Style$Sheet$map_raw($elm_explorations$benchmark$Benchmark$Runner$Report$TextClass, $elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$Text$styles)), b: _List_Nil } } } } } };
    var $elm_explorations$benchmark$Benchmark$Runner$App$styles = { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$App$Page, _Utils_ap($elm_explorations$benchmark$Benchmark$Runner$Text$body, _List_fromArray([
            $mdgriffith$style_elements$Style$Color$background($mdgriffith$style_elements$Style$rgb_raw(242 / 255, 242 / 255, 242 / 255))
        ]))), b: { $: 1, a: $mdgriffith$style_elements$Style$style_raw($elm_explorations$benchmark$Benchmark$Runner$App$Wrapper, _List_Nil), b: { $: 1, a: $mdgriffith$style_elements$Style$Sheet$merge($mdgriffith$style_elements$Style$Sheet$map_raw($elm_explorations$benchmark$Benchmark$Runner$App$InProgressClass, $elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$InProgress$styles)), b: { $: 1, a: $mdgriffith$style_elements$Style$Sheet$merge($mdgriffith$style_elements$Style$Sheet$map_raw($elm_explorations$benchmark$Benchmark$Runner$App$ReportClass, $elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$Report$styles)), b: _List_Nil } } } };
    var $mdgriffith$style_elements$Element$Internal$Model$VerticalCenter = 2;
    var $mdgriffith$style_elements$Element$Attributes$verticalCenter = $mdgriffith$style_elements$Element$Internal$Model$VAlign(2);
    var $mdgriffith$style_elements$Style$Internal$Model$Down = 2;
    var $mdgriffith$style_elements$Element$column_raw = function (style, attrs, children) {
        return $mdgriffith$style_elements$Element$Internal$Model$Layout({
            b: $elm$core$Maybe$Nothing,
            c: attrs,
            t: $mdgriffith$style_elements$Element$Internal$Model$Normal(children),
            p: $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(2, _List_Nil),
            d: "div",
            e: $elm$core$Maybe$Just(style)
        });
    }, $mdgriffith$style_elements$Element$column = F3($mdgriffith$style_elements$Element$column_raw);
    var $mdgriffith$style_elements$Element$Internal$Modify$setNode_raw = function (node, el) {
        switch (el.$) {
            case 0:
                return $mdgriffith$style_elements$Element$Internal$Model$Empty;
            case 5:
                var h = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
            case 1:
                var x = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
            case 4:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(elm, { d: node }));
            case 3:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Element(_Utils_update(elm, { d: node }));
            default:
                var dec = el.a;
                var content = el.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Element({
                    b: $elm$core$Maybe$Nothing,
                    c: _List_Nil,
                    g: $mdgriffith$style_elements$Element$Internal$Model$Text_raw(dec, content),
                    d: node,
                    e: $elm$core$Maybe$Nothing
                });
        }
    }, $mdgriffith$style_elements$Element$Internal$Modify$setNode = F2($mdgriffith$style_elements$Element$Internal$Modify$setNode_raw);
    var $mdgriffith$style_elements$Element$node = function (str) {
        return $mdgriffith$style_elements$Element$Internal$Modify$setNode(str);
    };
    var $mdgriffith$style_elements$Element$Attributes$paddingBottom = function (x) {
        return $mdgriffith$style_elements$Element$Internal$Model$Padding_raw($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(x), $elm$core$Maybe$Nothing);
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Percent = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Element$Attributes$percent = $mdgriffith$style_elements$Style$Internal$Model$Percent;
    var $mdgriffith$style_elements$Element$Internal$Model$NoDecoration = 0;
    var $mdgriffith$style_elements$Element$text = $mdgriffith$style_elements$Element$Internal$Model$Text({ Q: 0, S: false });
    var $mdgriffith$style_elements$Element$Attributes$width = $mdgriffith$style_elements$Element$Internal$Model$Width;
    var $elm_explorations$benchmark$Benchmark$Runner$Text$hero_raw = function (_class, caption) {
        return A2($mdgriffith$style_elements$Element$node, "h1", $mdgriffith$style_elements$Element$el_raw(_class(0), { $: 1, a: $mdgriffith$style_elements$Element$Attributes$width($mdgriffith$style_elements$Element$Attributes$percent(100)), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingBottom(20), b: _List_Nil } }, $mdgriffith$style_elements$Element$text(caption)));
    }, $elm_explorations$benchmark$Benchmark$Runner$Text$hero = F2($elm_explorations$benchmark$Benchmark$Runner$Text$hero_raw);
    var $mdgriffith$style_elements$Element$Attributes$paddingTop = function (x) {
        return $mdgriffith$style_elements$Element$Internal$Model$Padding_raw($elm$core$Maybe$Just(x), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
    };
    var $elm_explorations$benchmark$Benchmark$Runner$Text$path_raw = function (_class, parts) {
        return $mdgriffith$style_elements$Element$el_raw(_class(1), { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingBottom(3), b: _List_Nil }, $mdgriffith$style_elements$Element$text($elm$core$String$join_raw(" / ", parts)));
    }, $elm_explorations$benchmark$Benchmark$Runner$Text$path = F2($elm_explorations$benchmark$Benchmark$Runner$Text$path_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingX = 15;
    var $elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingY = 7;
    var $mdgriffith$style_elements$Element$Internal$Model$Justify = 3;
    var $mdgriffith$style_elements$Element$Attributes$spread = $mdgriffith$style_elements$Element$Internal$Model$HAlign(3);
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$caption_raw = function (name, status) {
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
        return $mdgriffith$style_elements$Element$row_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Unstyled, { $: 1, a: $mdgriffith$style_elements$Element$Attributes$width($mdgriffith$style_elements$Element$Attributes$px(500)), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$spread, b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$verticalCenter, b: _List_Nil } } }, { $: 1, a: $mdgriffith$style_elements$Element$text(name), b: { $: 1, a: $mdgriffith$style_elements$Element$el_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Status, _List_Nil, $mdgriffith$style_elements$Element$text(informativeStatus)), b: _List_Nil } });
    }, $elm_explorations$benchmark$Benchmark$Runner$InProgress$caption = F2($elm_explorations$benchmark$Benchmark$Runner$InProgress$caption_raw);
    var $elm$virtual_dom$VirtualDom$attribute_raw = function (key, value) {
        return _VirtualDom_attribute_raw(_VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
    }, $elm$virtual_dom$VirtualDom$attribute = F2($elm$virtual_dom$VirtualDom$attribute_raw);
    var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
    var $mdgriffith$style_elements$Element$Attributes$attribute_raw = function (name, val) {
        return $mdgriffith$style_elements$Element$Internal$Model$Attr($elm$virtual_dom$VirtualDom$attribute_raw(name, val));
    }, $mdgriffith$style_elements$Element$Attributes$attribute = F2($mdgriffith$style_elements$Element$Attributes$attribute_raw);
    var $mdgriffith$style_elements$Element$Attributes$clip = $mdgriffith$style_elements$Element$Internal$Model$Attr(_VirtualDom_style_raw("overflow", "hidden"));
    var $mdgriffith$style_elements$Element$empty = $mdgriffith$style_elements$Element$Internal$Model$Empty;
    var $mdgriffith$style_elements$Element$Attributes$paddingLeft = function (x) {
        return $mdgriffith$style_elements$Element$Internal$Model$Padding_raw($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(x));
    };
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$filledPortion_raw = function (name, status) {
        return ($elm_explorations$benchmark$Benchmark$Status$progress(status) > 0) ? $mdgriffith$style_elements$Element$el_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Progress, { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingTop($elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingY), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingBottom($elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingY), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingLeft($elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingX), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$clip, b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$width($mdgriffith$style_elements$Element$Attributes$percent(100 * $elm_explorations$benchmark$Benchmark$Status$progress(status))), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$attribute_raw("role", "progressbar"), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$attribute_raw("aria-valuenow", $elm$core$String$fromInt($elm$core$Basics$floor(100 * $elm_explorations$benchmark$Benchmark$Status$progress(status)))), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$attribute_raw("aria-valuemin", "0"), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$attribute_raw("aria-valuemax", "100"), b: _List_Nil } } } } } } } } }, $elm_explorations$benchmark$Benchmark$Runner$InProgress$caption_raw(name, status)) : $mdgriffith$style_elements$Element$empty;
    }, $elm_explorations$benchmark$Benchmark$Runner$InProgress$filledPortion = F2($elm_explorations$benchmark$Benchmark$Runner$InProgress$filledPortion_raw);
    var $mdgriffith$style_elements$Element$Attributes$paddingXY_raw = function (x, y) {
        return $mdgriffith$style_elements$Element$Internal$Model$Padding_raw($elm$core$Maybe$Just(y), $elm$core$Maybe$Just(x), $elm$core$Maybe$Just(y), $elm$core$Maybe$Just(x));
    }, $mdgriffith$style_elements$Element$Attributes$paddingXY = F2($mdgriffith$style_elements$Element$Attributes$paddingXY_raw);
    var $mdgriffith$style_elements$Element$Internal$Model$Nearby = function (a) {
        return { $: 3, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Within = 4;
    var $mdgriffith$style_elements$Element$Internal$Modify$addAttr_raw = function (prop, el) {
        switch (el.$) {
            case 0:
                return $mdgriffith$style_elements$Element$Internal$Model$Empty;
            case 5:
                var h = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
            case 1:
                var x = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
            case 4:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(elm, {
                    c: _List_Cons(prop, elm.c)
                }));
            case 3:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Element(_Utils_update(elm, {
                    c: _List_Cons(prop, elm.c)
                }));
            default:
                var dec = el.a;
                var content = el.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Element({
                    b: $elm$core$Maybe$Nothing,
                    c: { $: 1, a: prop, b: _List_Nil },
                    g: $mdgriffith$style_elements$Element$Internal$Model$Text_raw(dec, content),
                    d: "div",
                    e: $elm$core$Maybe$Nothing
                });
        }
    }, $mdgriffith$style_elements$Element$Internal$Modify$addAttr = F2($mdgriffith$style_elements$Element$Internal$Modify$addAttr_raw);
    var $mdgriffith$style_elements$Element$Internal$Modify$addChild_raw = function (parent, el) {
        switch (parent.$) {
            case 0:
                return $mdgriffith$style_elements$Element$Internal$Model$Element({
                    b: $elm$core$Maybe$Just({ $: 1, a: el, b: _List_Nil }),
                    c: _List_Nil,
                    g: $mdgriffith$style_elements$Element$Internal$Model$Empty,
                    d: "div",
                    e: $elm$core$Maybe$Nothing
                });
            case 1:
                var x = parent.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
            case 5:
                var h = parent.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
            case 4:
                var elm = parent.a;
                var absolutelyPositioned = elm.b;
                if (absolutelyPositioned.$ === 1) {
                    return $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(elm, {
                        b: $elm$core$Maybe$Just({ $: 1, a: el, b: _List_Nil })
                    }));
                }
                else {
                    var others = absolutelyPositioned.a;
                    return $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(elm, {
                        b: $elm$core$Maybe$Just(_List_Cons(el, others))
                    }));
                }
            case 3:
                var elm = parent.a;
                var absolutelyPositioned = elm.b;
                if (absolutelyPositioned.$ === 1) {
                    return $mdgriffith$style_elements$Element$Internal$Model$Element(_Utils_update(elm, {
                        b: $elm$core$Maybe$Just({ $: 1, a: el, b: _List_Nil })
                    }));
                }
                else {
                    var others = absolutelyPositioned.a;
                    return $mdgriffith$style_elements$Element$Internal$Model$Element(_Utils_update(elm, {
                        b: $elm$core$Maybe$Just(_List_Cons(el, others))
                    }));
                }
            default:
                var dec = parent.a;
                var content = parent.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Element({
                    b: $elm$core$Maybe$Just({ $: 1, a: el, b: _List_Nil }),
                    c: _List_Nil,
                    g: $mdgriffith$style_elements$Element$Internal$Model$Text_raw(dec, content),
                    d: "div",
                    e: $elm$core$Maybe$Nothing
                });
        }
    }, $mdgriffith$style_elements$Element$Internal$Modify$addChild = F2($mdgriffith$style_elements$Element$Internal$Modify$addChild_raw);
    var $mdgriffith$style_elements$Element$Internal$Modify$wrapHtml = function (el) {
        if (el.$ === 5) {
            var h = el.a;
            return $mdgriffith$style_elements$Element$Internal$Model$Element({
                b: $elm$core$Maybe$Nothing,
                c: _List_Nil,
                g: $mdgriffith$style_elements$Element$Internal$Model$Raw(h),
                d: "div",
                e: $elm$core$Maybe$Nothing
            });
        }
        else {
            var x = el;
            return x;
        }
    };
    var $mdgriffith$style_elements$Element$within_raw = function (nearbys, parent) {
        var position = F2(function (elem, p) {
            return $mdgriffith$style_elements$Element$Internal$Modify$addChild_raw(p, $mdgriffith$style_elements$Element$Internal$Modify$addAttr_raw($mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Nearby(4)), $mdgriffith$style_elements$Element$Internal$Modify$wrapHtml(elem)));
        });
        return $elm$core$List$foldr_raw(position, parent, nearbys);
    }, $mdgriffith$style_elements$Element$within = F2($mdgriffith$style_elements$Element$within_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBar_raw = function (name, status) {
        return $mdgriffith$style_elements$Element$within_raw({ $: 1, a: $elm_explorations$benchmark$Benchmark$Runner$InProgress$filledPortion_raw(name, status), b: _List_Nil }, $mdgriffith$style_elements$Element$row_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Box, { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingXY_raw($elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingX, $elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingY), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$width($mdgriffith$style_elements$Element$Attributes$percent(100)), b: _List_Nil } }, { $: 1, a: $elm_explorations$benchmark$Benchmark$Runner$InProgress$caption_raw(name, status), b: _List_Nil }));
    }, $elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBar = F2($elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBar_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$Box$spaceBetweenSections = 25;
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$barsWithPath_raw = function (parents, children) {
        return $mdgriffith$style_elements$Element$column_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Unstyled, { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingTop($elm_explorations$benchmark$Benchmark$Runner$Box$spaceBetweenSections), b: _List_Nil }, _List_Cons($elm_explorations$benchmark$Benchmark$Runner$Text$path_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$TextClass, parents), $elm$core$List$map_raw(function (_v0) {
            var a = _v0.a;
            var b = _v0.b;
            return $elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBar_raw(a, b);
        }, children)));
    }, $elm_explorations$benchmark$Benchmark$Runner$InProgress$barsWithPath = F2($elm_explorations$benchmark$Benchmark$Runner$InProgress$barsWithPath_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBars_raw = function (reversedParents, report) {
        switch (report.$) {
            case 0:
                var name = report.a;
                var status = report.b;
                return { $: 1, a: $elm_explorations$benchmark$Benchmark$Runner$InProgress$barsWithPath_raw($elm$core$List$reverse(reversedParents), _List_fromArray([
                        _Utils_Tuple2(name, status)
                    ])), b: _List_Nil };
            case 1:
                var name = report.a;
                var statuses = report.b;
                return { $: 1, a: $elm_explorations$benchmark$Benchmark$Runner$InProgress$barsWithPath_raw($elm$core$List$reverse(_List_Cons(name, reversedParents)), statuses), b: _List_Nil };
            default:
                var name = report.a;
                var reports = report.b;
                return $elm$core$List$concat($elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBars(_List_Cons(name, reversedParents)), reports));
        }
    }, $elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBars = F2($elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBars_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$InProgress$view = function (report) {
        return $mdgriffith$style_elements$Element$column_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$Unstyled, _List_Nil, _List_Cons($elm_explorations$benchmark$Benchmark$Runner$Text$hero_raw($elm_explorations$benchmark$Benchmark$Runner$InProgress$TextClass, "Benchmarks Running"), $elm_explorations$benchmark$Benchmark$Runner$InProgress$progressBars_raw(_List_Nil, report)));
    };
    var $mdgriffith$style_elements$Element$Attributes$vary = $mdgriffith$style_elements$Element$Internal$Model$Vary;
    var $elm_explorations$benchmark$Benchmark$Runner$Report$cell_raw = function (variation, contents) {
        return $mdgriffith$style_elements$Element$el_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Cell, { $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$Vary_raw(variation, true), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingTop(5), b: _List_Nil } }, contents);
    }, $elm_explorations$benchmark$Benchmark$Runner$Report$cell = F2($elm_explorations$benchmark$Benchmark$Runner$Report$cell_raw);
    var $BrianHicks$elm_trend$Trend$Linear$goodnessOfFit = function (_v0) {
        var fit = _v0.a;
        var values = _v0.b;
        var _v1 = $elm$core$List$unzip(values);
        var xs = _v1.a;
        var ys = _v1.b;
        var predictions = $elm$core$List$map_raw($BrianHicks$elm_trend$Trend$Linear$predictY(fit), xs);
        var meanY = $elm$core$Result$withDefault_raw(0, $BrianHicks$elm_trend$Trend$Math$mean(ys));
        var sumSquareResiduals = $elm$core$List$sum(_List_map2_raw(F2(function (actual, prediction) {
            return A2($elm$core$Basics$pow, actual - prediction, 2);
        }), ys, predictions));
        var sumSquareTotal = $elm$core$List$sum($elm$core$List$map_raw(function (y) {
            return A2($elm$core$Basics$pow, y - meanY, 2);
        }, ys));
        return 1 - (sumSquareResiduals / sumSquareTotal);
    };
    var $elm_explorations$benchmark$Benchmark$Runner$Humanize$percent = A2($elm$core$Basics$composeR, $elm$core$Basics$mul(10000), A2($elm$core$Basics$composeR, $elm$core$Basics$round, A2($elm$core$Basics$composeR, $elm$core$Basics$toFloat, A2($elm$core$Basics$composeR, function (a) {
        return a / 100;
    }, A2($elm$core$Basics$composeR, $elm$core$String$fromFloat, function (a) {
        return a + "%";
    })))));
    var $elm_explorations$benchmark$Benchmark$Runner$Report$goodnessOfFit = A2($elm$core$Basics$composeR, $BrianHicks$elm_trend$Trend$Linear$goodnessOfFit, A2($elm$core$Basics$composeR, $elm_explorations$benchmark$Benchmark$Runner$Humanize$percent, A2($elm$core$Basics$composeR, $mdgriffith$style_elements$Element$text, $elm_explorations$benchmark$Benchmark$Runner$Report$cell(0))));
    var $elm_explorations$benchmark$Benchmark$Runner$Report$header_raw = function (variation, caption) {
        return $mdgriffith$style_elements$Element$el_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Header, { $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$Vary_raw(variation, true), b: _List_Nil }, $mdgriffith$style_elements$Element$text(caption));
    }, $elm_explorations$benchmark$Benchmark$Runner$Report$header = F2($elm_explorations$benchmark$Benchmark$Runner$Report$header_raw);
    var $BrianHicks$elm_trend$Trend$Linear$predictX_raw = function (_v0, y) {
        var slope = _v0.aR;
        var intercept = _v0.aL;
        return (y - intercept) / slope;
    }, $BrianHicks$elm_trend$Trend$Linear$predictX = F2($BrianHicks$elm_trend$Trend$Linear$predictX_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$Report$percentChange_raw = function (old, _new) {
        var rps = A2($elm$core$Basics$composeR, $BrianHicks$elm_trend$Trend$Linear$line, function (a) {
            return $BrianHicks$elm_trend$Trend$Linear$predictX_raw(a, 1000);
        });
        var change = (rps(_new) - rps(old)) / rps(old);
        var sign = (change > 0) ? "+" : "";
        return _Utils_eq(old, _new) ? $elm_explorations$benchmark$Benchmark$Runner$Report$cell_raw(0, $mdgriffith$style_elements$Element$text("-")) : $elm_explorations$benchmark$Benchmark$Runner$Report$cell_raw(0, $mdgriffith$style_elements$Element$text(_Utils_ap(sign, $elm_explorations$benchmark$Benchmark$Runner$Humanize$percent(change))));
    }, $elm_explorations$benchmark$Benchmark$Runner$Report$percentChange = F2($elm_explorations$benchmark$Benchmark$Runner$Report$percentChange_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$Report$pointsFromStatus = function (status) {
        if (status.$ === 4) {
            var samples = status.a;
            return $elm$core$Maybe$Just($elm_explorations$benchmark$Benchmark$Samples$points(samples));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Model$GridPosition = $elm$core$Basics$identity;
    var $mdgriffith$style_elements$Element$Internal$Model$OnGrid = $elm$core$Basics$identity;
    var $mdgriffith$style_elements$Element$cell = function (box) {
        var coords = { a1: box.a1, aT: box.aT, bw: box.bw };
        return $mdgriffith$style_elements$Element$Internal$Modify$addAttr_raw($mdgriffith$style_elements$Element$Internal$Model$GridCoords(coords), box.aJ);
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Grid_raw = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$Grid = F2($mdgriffith$style_elements$Style$Internal$Model$Grid_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$GridGap_raw = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$GridGap = F2($mdgriffith$style_elements$Style$Internal$Model$GridGap_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$GridTemplate = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$style_elements$Element$grid_raw = function (style, attrs, config) {
        var prepare = function (elem) {
            return $mdgriffith$style_elements$Element$Internal$Model$Normal($elm$core$List$map_raw(function (_v4) {
                var x = _v4;
                return x;
            }, elem));
        };
        var forSpacing = function (attr) {
            if (attr.$ === 10) {
                return true;
            }
            else {
                return false;
            }
        };
        var _v0 = $elm$core$List$partition_raw(forSpacing, attrs);
        var spacing = _v0.a;
        var notSpacingAttrs = _v0.b;
        var gridAttributes = function () {
            var _v1 = $elm$core$List$head($elm$core$List$reverse(spacing));
            if (_v1.$ === 1) {
                return _List_Nil;
            }
            else {
                if (_v1.a.$ === 10) {
                    var _v2 = _v1.a;
                    var x = _v2.a;
                    var y = _v2.b;
                    return { $: 1, a: $mdgriffith$style_elements$Style$Internal$Model$GridGap_raw(x, y), b: _List_Nil };
                }
                else {
                    return _List_Nil;
                }
            }
        }();
        return $mdgriffith$style_elements$Element$Internal$Model$Layout({
            b: $elm$core$Maybe$Nothing,
            c: notSpacingAttrs,
            t: prepare(config.an),
            p: $mdgriffith$style_elements$Style$Internal$Model$Grid_raw($mdgriffith$style_elements$Style$Internal$Model$GridTemplate({ P: config.P, V: config.V }), gridAttributes),
            d: "div",
            e: $elm$core$Maybe$Just(style)
        });
    }, $mdgriffith$style_elements$Element$grid = F3($mdgriffith$style_elements$Element$grid_raw);
    var $mdgriffith$style_elements$Element$table_raw = function (style, attrs, rows) {
        var children = $elm$core$List$concat($elm$core$List$indexedMap_raw(F2(function (rowIndex, columns) {
            return $elm$core$List$indexedMap_raw(F2(function (col, content) {
                return $mdgriffith$style_elements$Element$cell({
                    aJ: content,
                    a1: 1,
                    aT: _Utils_Tuple2(rowIndex, col),
                    bw: 1
                });
            }), columns);
        }), rows));
        return $mdgriffith$style_elements$Element$grid_raw(style, attrs, { an: children, P: _List_Nil, V: _List_Nil });
    }, $mdgriffith$style_elements$Element$table = F3($mdgriffith$style_elements$Element$table_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$Report$report_raw = function (parents, name, points, tableContents) {
        return $mdgriffith$style_elements$Element$column_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Unstyled, { $: 1, a: $mdgriffith$style_elements$Element$Attributes$paddingTop($elm_explorations$benchmark$Benchmark$Runner$Box$spaceBetweenSections), b: _List_Nil }, { $: 1, a: $elm_explorations$benchmark$Benchmark$Runner$Text$path_raw($elm_explorations$benchmark$Benchmark$Runner$Report$TextClass, parents), b: { $: 1, a: $mdgriffith$style_elements$Element$column_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Box, _List_fromArray([
                    $mdgriffith$style_elements$Element$Attributes$paddingXY_raw($elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingX, $elm_explorations$benchmark$Benchmark$Runner$Box$barPaddingY),
                    $mdgriffith$style_elements$Element$Attributes$width($mdgriffith$style_elements$Element$Attributes$px(500))
                ]), _List_fromArray([
                    $mdgriffith$style_elements$Element$text(name),
                    $mdgriffith$style_elements$Element$table_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Table, _List_fromArray([
                        $mdgriffith$style_elements$Element$Attributes$width($mdgriffith$style_elements$Element$Attributes$percent(100)),
                        $mdgriffith$style_elements$Element$Attributes$paddingTop(10)
                    ]), tableContents)
                ])), b: _List_Nil } });
    }, $elm_explorations$benchmark$Benchmark$Runner$Report$report = F4($elm_explorations$benchmark$Benchmark$Runner$Report$report_raw);
    var $elm$core$String$fromList = _String_fromList;
    var $elm_explorations$benchmark$Benchmark$Runner$Humanize$groupsOf_raw = function (howMany, items) {
        var _v0 = $elm$core$List$take_raw(howMany, items);
        if (!_v0.b) {
            return _List_Nil;
        }
        else {
            var xs = _v0;
            return _List_Cons(xs, $elm_explorations$benchmark$Benchmark$Runner$Humanize$groupsOf_raw(howMany, $elm$core$List$drop_raw(howMany, items)));
        }
    }, $elm_explorations$benchmark$Benchmark$Runner$Humanize$groupsOf = F2($elm_explorations$benchmark$Benchmark$Runner$Humanize$groupsOf_raw);
    var $elm$core$String$foldr = _String_foldr;
    var $elm$core$String$toList = function (string) {
        return _String_foldr_raw($elm$core$List$cons, _List_Nil, string);
    };
    var $elm_explorations$benchmark$Benchmark$Runner$Humanize$int = A2($elm$core$Basics$composeR, $elm$core$String$fromInt, A2($elm$core$Basics$composeR, $elm$core$String$toList, A2($elm$core$Basics$composeR, $elm$core$List$reverse, A2($elm$core$Basics$composeR, $elm_explorations$benchmark$Benchmark$Runner$Humanize$groupsOf(3), A2($elm$core$Basics$composeR, $elm$core$List$reverse, A2($elm$core$Basics$composeR, $elm$core$List$map(A2($elm$core$Basics$composeR, $elm$core$List$reverse, $elm$core$String$fromList)), $elm$core$String$join(",")))))));
    var $elm_explorations$benchmark$Benchmark$Runner$Report$runsPerSecond = function (variation) {
        return A2($elm$core$Basics$composeR, $BrianHicks$elm_trend$Trend$Linear$line, A2($elm$core$Basics$composeR, function (a) {
            return $BrianHicks$elm_trend$Trend$Linear$predictX_raw(a, 1000);
        }, A2($elm$core$Basics$composeR, $elm$core$Basics$floor, A2($elm$core$Basics$composeR, $elm_explorations$benchmark$Benchmark$Runner$Humanize$int, A2($elm$core$Basics$composeR, $mdgriffith$style_elements$Element$text, $elm_explorations$benchmark$Benchmark$Runner$Report$cell(variation))))));
    };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$trendFromStatus = function (status) {
        if (status.$ === 4) {
            var trend = status.b;
            return $elm$core$Maybe$Just(trend);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$trendsFromStatuses = A2($elm$core$List$foldr, F2(function (_this, acc) {
        return $elm$core$Maybe$map2_raw($elm$core$List$cons, $elm_explorations$benchmark$Benchmark$Runner$Report$trendFromStatus(_this), acc);
    }), $elm$core$Maybe$Just(_List_Nil));
    var $elm_explorations$benchmark$Benchmark$Runner$Report$multiReport_raw = function (parents, name, children) {
        var _v0 = $elm$core$List$unzip(children);
        var names = _v0.a;
        var statuses = _v0.b;
        var allPoints = $elm$core$List$foldr_raw($elm$core$Maybe$map2($elm$core$List$cons), $elm$core$Maybe$Just(_List_Nil), $elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$Runner$Report$pointsFromStatus, statuses));
        var contents = $elm$core$Maybe$map_raw(function (trends) {
            return { $: 1, a: _List_Cons($elm_explorations$benchmark$Benchmark$Runner$Report$header_raw(1, "name"), $elm$core$List$map_raw(A2($elm$core$Basics$composeR, $mdgriffith$style_elements$Element$text, $elm_explorations$benchmark$Benchmark$Runner$Report$cell(1)), names)), b: { $: 1, a: _List_Cons($elm_explorations$benchmark$Benchmark$Runner$Report$header_raw(0, "runs / second"), $elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$Runner$Report$runsPerSecond(0), trends)), b: { $: 1, a: _List_Cons($elm_explorations$benchmark$Benchmark$Runner$Report$header_raw(0, "% change"), _List_Cons($elm_explorations$benchmark$Benchmark$Runner$Report$cell_raw(0, $mdgriffith$style_elements$Element$text("-")), _List_map2_raw($elm_explorations$benchmark$Benchmark$Runner$Report$percentChange, trends, $elm$core$List$drop_raw(1, trends)))), b: { $: 1, a: _List_Cons($elm_explorations$benchmark$Benchmark$Runner$Report$header_raw(0, "goodness of fit"), $elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$Runner$Report$goodnessOfFit, trends)), b: _List_Nil } } } };
        }, $elm_explorations$benchmark$Benchmark$Runner$Report$trendsFromStatuses(statuses));
        return $elm$core$Maybe$withDefault_raw($mdgriffith$style_elements$Element$empty, $elm$core$Maybe$map2_raw(A2($elm_explorations$benchmark$Benchmark$Runner$Report$report, parents, name), allPoints, contents));
    }, $elm_explorations$benchmark$Benchmark$Runner$Report$multiReport = F3($elm_explorations$benchmark$Benchmark$Runner$Report$multiReport_raw);
    var $elm$core$List$singleton = function (value) {
        return { $: 1, a: value, b: _List_Nil };
    };
    var $elm_explorations$benchmark$Benchmark$Runner$Report$singleReport_raw = function (parents, name, status) {
        var contents = $elm$core$Maybe$map_raw(function (trend) {
            return { $: 1, a: _List_fromArray([
                    $elm_explorations$benchmark$Benchmark$Runner$Report$header_raw(1, "runs / second"),
                    A2($elm_explorations$benchmark$Benchmark$Runner$Report$runsPerSecond, 1, trend)
                ]), b: { $: 1, a: _List_fromArray([
                        $elm_explorations$benchmark$Benchmark$Runner$Report$header_raw(0, "goodness of fit"),
                        $elm_explorations$benchmark$Benchmark$Runner$Report$goodnessOfFit(trend)
                    ]), b: _List_Nil } };
        }, $elm_explorations$benchmark$Benchmark$Runner$Report$trendFromStatus(status));
        return $elm$core$Maybe$withDefault_raw($mdgriffith$style_elements$Element$empty, $elm$core$Maybe$map2_raw(A2($elm_explorations$benchmark$Benchmark$Runner$Report$report, parents, name), $elm$core$Maybe$map_raw($elm$core$List$singleton, $elm_explorations$benchmark$Benchmark$Runner$Report$pointsFromStatus(status)), contents));
    }, $elm_explorations$benchmark$Benchmark$Runner$Report$singleReport = F3($elm_explorations$benchmark$Benchmark$Runner$Report$singleReport_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$Report$reports_raw = function (reversedParents, report_) {
        switch (report_.$) {
            case 0:
                var name = report_.a;
                var status = report_.b;
                return { $: 1, a: $elm_explorations$benchmark$Benchmark$Runner$Report$singleReport_raw($elm$core$List$reverse(reversedParents), name, status), b: _List_Nil };
            case 1:
                var name = report_.a;
                var statuses = report_.b;
                return { $: 1, a: $elm_explorations$benchmark$Benchmark$Runner$Report$multiReport_raw($elm$core$List$reverse(reversedParents), name, statuses), b: _List_Nil };
            default:
                var name = report_.a;
                var children = report_.b;
                return $elm$core$List$concat($elm$core$List$map_raw($elm_explorations$benchmark$Benchmark$Runner$Report$reports(_List_Cons(name, reversedParents)), children));
        }
    }, $elm_explorations$benchmark$Benchmark$Runner$Report$reports = F2($elm_explorations$benchmark$Benchmark$Runner$Report$reports_raw);
    var $elm_explorations$benchmark$Benchmark$Runner$Report$view = function (report_) {
        return $mdgriffith$style_elements$Element$column_raw($elm_explorations$benchmark$Benchmark$Runner$Report$Unstyled, _List_Nil, _List_Cons($elm_explorations$benchmark$Benchmark$Runner$Text$hero_raw($elm_explorations$benchmark$Benchmark$Runner$Report$TextClass, "Benchmark Report"), $elm_explorations$benchmark$Benchmark$Runner$Report$reports_raw(_List_Nil, report_)));
    };
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $elm$html$Html$Attributes$stringProperty_raw = function (key, string) {
        return _VirtualDom_property_raw(key, $elm$json$Json$Encode$string(string));
    }, $elm$html$Html$Attributes$stringProperty = F2($elm$html$Html$Attributes$stringProperty_raw);
    var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty("className");
    var $elm$html$Html$div = _VirtualDom_node("div");
    var $mdgriffith$style_elements$Element$Internal$Render$withFocus = "\n\n.style-elements em.el {\n    padding: 0;\n    padding-left: 0.2em;\n}\n\n.style-elements button.button-focus:focus {\n   outline: none;\n   box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n   border-color: rgba(155,203,255,1.0);\n}\n\n.style-elements textarea:focus, .style-elements input:focus {\n   outline: none;\n   box-shadow: 0 0 2px 2px rgba(155,203,255,1.0);\n   border-color: rgba(155,203,255,1.0);\n}\n.style-elements input[type='checkbox'] {\n    border-radius: 3px;\n}\n.style-elements input[type='radio'] {\n    border-radius: 7px;\n}\n.style-elements input[type='radio']:focus {\n    border-radius: 7px;\n    box-shadow: 0 0 4px 4px rgba(155,203,255,1.0);\n}\n\n.style-elements select.focus-override:focus, .style-elements input.focus-override:focus {\n    outline: none;\n    box-shadow: none;\n    border-color:transparent;\n}\n.style-elements input.focus-override:focus ~ .alt-icon {\n    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n    border-color: rgba(155,203,255,1.0);\n}\n.style-elements select.focus-override:focus ~ .alt-icon {\n    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n    border-color: rgba(155,203,255,1.0);\n}\n.style-elements .arrows {\n    display:block;\n    position: relative;\n    height: 10px;\n    width: 10px;\n}\n/*\n.style-elements .arrows::after {\n    content: \" \";\n    position:absolute;\n    top:-2px;\n    left:0;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid black;\n}\n*/\n\n.style-elements .arrows::before {\n    content: \" \";\n    position:absolute;\n    top:2px;\n    left:0;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid black;\n}\n\n\n";
    var $mdgriffith$style_elements$Element$Internal$Render$miniNormalize = "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;padding:0;border:0}body{margin:0}.style-elements{display:block;position:relative;margin:0;padding:0;border:0;font-size:100%;font:inherit;box-sizing:border-box;line-height:1.2}.el{display:block;position:relative;margin:0;padding:0;border:0;border-style:solid;font-size:100%;font:inherit;box-sizing:border-box}em.el{font-style:italic}b.el,strong.el{font-weight:bolder}strike.el{text-decoration:line-through}u.el{text-decoration:underline}a.el{text-decoration:none;color:inherit}img.el{border-style:none}sub.el,sup.el{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.el{bottom:-0.25em}sup.el{top:-0.5em}" + $mdgriffith$style_elements$Element$Internal$Render$withFocus;
    var $elm$virtual_dom$VirtualDom$node = function (tag) {
        return _VirtualDom_node(_VirtualDom_noScript(tag));
    };
    var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $mdgriffith$style_elements$Element$Internal$Render$embed_raw = function (full, stylesheet) {
        return { $: 1, a: A3($elm$html$Html$node, "style", _List_Nil, _List_fromArray([
                $elm$html$Html$text(full ? ("html,body{width:100%;height:100%;}" + $mdgriffith$style_elements$Element$Internal$Render$miniNormalize) : $mdgriffith$style_elements$Element$Internal$Render$miniNormalize)
            ])), b: { $: 1, a: A3($elm$html$Html$node, "style", _List_Nil, _List_fromArray([
                    $elm$html$Html$text(stylesheet.bI)
                ])), b: _List_Nil } };
    }, $mdgriffith$style_elements$Element$Internal$Render$embed = F2($mdgriffith$style_elements$Element$Internal$Render$embed_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast = { $: 3 };
    var $mdgriffith$style_elements$Element$Internal$Model$adjust_raw = function (fn, parent, elemen) {
        var merge = F2(function (el, current) {
            if (el.$ === 1) {
                return current;
            }
            else {
                var something = el.a;
                if (current.$ === 1) {
                    return el;
                }
                else {
                    var cur = current.a;
                    return $elm$core$Maybe$Just(_Utils_ap(something, cur));
                }
            }
        });
        var maybeOnEmptyList = function (list) {
            return $elm$core$List$isEmpty(list) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(list);
        };
        switch (elemen.$) {
            case 3:
                var elm = elemen.a;
                var child = elm.g;
                var absolutelyPositioned = elm.b;
                var adjustAndMerge = F2(function (el, _v8) {
                    var adjustedAggregate = _v8.a;
                    var dataAggregate = _v8.b;
                    var _v6 = $mdgriffith$style_elements$Element$Internal$Model$adjust_raw(fn, $elm$core$Maybe$Nothing, el);
                    var adjusted = _v6.a;
                    var data = _v6.b;
                    if (data.$ === 1) {
                        return _Utils_Tuple2(_List_Cons(adjusted, adjustedAggregate), dataAggregate);
                    }
                    else {
                        var d = data.a;
                        return _Utils_Tuple2(_List_Cons(adjusted, adjustedAggregate), _Utils_ap(d, dataAggregate));
                    }
                });
                var _v1 = function () {
                    if (absolutelyPositioned.$ === 1) {
                        return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
                    }
                    else {
                        var others = absolutelyPositioned.a;
                        return function (_v3) {
                            var children = _v3.a;
                            var onScreen = _v3.b;
                            return _Utils_Tuple2(maybeOnEmptyList(children), maybeOnEmptyList(onScreen));
                        }($elm$core$List$foldr_raw(adjustAndMerge, _Utils_Tuple2(_List_Nil, _List_Nil), others));
                    }
                }();
                var adjustedOthers = _v1.a;
                var otherChildrenData = _v1.b;
                var _v4 = $mdgriffith$style_elements$Element$Internal$Model$adjust_raw(fn, $elm$core$Maybe$Nothing, child);
                var adjustedChild = _v4.a;
                var childData = _v4.b;
                var _v5 = A2(fn, parent, $mdgriffith$style_elements$Element$Internal$Model$Element(_Utils_update(elm, { b: adjustedOthers, g: adjustedChild })));
                var adjustedEl = _v5.a;
                var elData = _v5.b;
                return _Utils_Tuple2(adjustedEl, $elm$core$List$foldr_raw(merge, $elm$core$Maybe$Nothing, { $: 1, a: childData, b: { $: 1, a: otherChildrenData, b: { $: 1, a: elData, b: _List_Nil } } }));
            case 4:
                var elm = elemen.a;
                var adjustAndMergeKeyed = F3(function (usingParent, _v22, _v23) {
                    var key = _v22.a;
                    var el = _v22.b;
                    var adjustedAggregate = _v23.a;
                    var dataAggregate = _v23.b;
                    var _v20 = $mdgriffith$style_elements$Element$Internal$Model$adjust_raw(fn, usingParent, el);
                    var adjusted = _v20.a;
                    var data = _v20.b;
                    if (data.$ === 1) {
                        return _Utils_Tuple2(_List_Cons(_Utils_Tuple2(key, adjusted), adjustedAggregate), dataAggregate);
                    }
                    else {
                        var d = data.a;
                        return _Utils_Tuple2(_List_Cons(_Utils_Tuple2(key, adjusted), adjustedAggregate), _Utils_ap(d, dataAggregate));
                    }
                });
                var adjustAndMerge = F3(function (usingParent, el, _v19) {
                    var adjustedAggregate = _v19.a;
                    var dataAggregate = _v19.b;
                    var _v17 = $mdgriffith$style_elements$Element$Internal$Model$adjust_raw(fn, usingParent, el);
                    var adjusted = _v17.a;
                    var data = _v17.b;
                    if (data.$ === 1) {
                        return _Utils_Tuple2(_List_Cons(adjusted, adjustedAggregate), dataAggregate);
                    }
                    else {
                        var d = data.a;
                        return _Utils_Tuple2(_List_Cons(adjusted, adjustedAggregate), _Utils_ap(d, dataAggregate));
                    }
                });
                var _v9 = function () {
                    var _v10 = elm.b;
                    if (_v10.$ === 1) {
                        return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
                    }
                    else {
                        var others = _v10.a;
                        return function (_v11) {
                            var children = _v11.a;
                            var onScreen = _v11.b;
                            return _Utils_Tuple2(maybeOnEmptyList(children), maybeOnEmptyList(onScreen));
                        }($elm$core$List$foldr_raw(adjustAndMerge($elm$core$Maybe$Nothing), _Utils_Tuple2(_List_Nil, _List_Nil), others));
                    }
                }();
                var adjustedOthers = _v9.a;
                var otherChildrenData = _v9.b;
                var _v12 = function () {
                    var _v13 = elm.t;
                    if (!_v13.$) {
                        var normalChildren = _v13.a;
                        var _v14 = $elm$core$List$foldr_raw(adjustAndMerge($elm$core$Maybe$Just(elm.p)), _Utils_Tuple2(_List_Nil, _List_Nil), normalChildren);
                        var adjusted = _v14.a;
                        var data = _v14.b;
                        return _Utils_Tuple2($mdgriffith$style_elements$Element$Internal$Model$Normal(adjusted), maybeOnEmptyList(data));
                    }
                    else {
                        var keyedChildren = _v13.a;
                        var _v15 = $elm$core$List$foldr_raw(adjustAndMergeKeyed($elm$core$Maybe$Just(elm.p)), _Utils_Tuple2(_List_Nil, _List_Nil), keyedChildren);
                        var adjusted = _v15.a;
                        var data = _v15.b;
                        return _Utils_Tuple2($mdgriffith$style_elements$Element$Internal$Model$Keyed(adjusted), maybeOnEmptyList(data));
                    }
                }();
                var adjustedChildren = _v12.a;
                var childrenData = _v12.b;
                var _v16 = A2(fn, parent, $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(elm, { b: adjustedOthers, t: adjustedChildren })));
                var adjustedLayout = _v16.a;
                var layoutData = _v16.b;
                return _Utils_Tuple2(adjustedLayout, $elm$core$List$foldr_raw(merge, $elm$core$Maybe$Nothing, { $: 1, a: layoutData, b: { $: 1, a: childrenData, b: { $: 1, a: otherChildrenData, b: _List_Nil } } }));
            default:
                return A2(fn, $elm$core$Maybe$Nothing, elemen);
        }
    }, $mdgriffith$style_elements$Element$Internal$Model$adjust = F3($mdgriffith$style_elements$Element$Internal$Model$adjust_raw);
    var $mdgriffith$style_elements$Element$Internal$Adjustments$tagIntermediates = false;
    var $mdgriffith$style_elements$Element$Internal$Adjustments$tag = function (str) {
        return $mdgriffith$style_elements$Element$Internal$Adjustments$tagIntermediates ? $mdgriffith$style_elements$Element$Internal$Model$Attr($elm$html$Html$Attributes$class(str)) : $mdgriffith$style_elements$Element$Internal$Model$Attr($elm$html$Html$Attributes$class(""));
    };
    var $mdgriffith$style_elements$Element$Internal$Adjustments$centerTextLayout = function (elm) {
        if (elm.$ === 4) {
            var layoutEl = elm.a;
            var attrs = layoutEl.c;
            var layout = layoutEl.p;
            var _v1 = $elm$core$List$partition_raw(function (attr) {
                return _Utils_eq(attr, $mdgriffith$style_elements$Element$Internal$Model$HAlign(2)) || _Utils_eq(attr, $mdgriffith$style_elements$Element$Internal$Model$VAlign(2));
            }, attrs);
            var centeredProps = _v1.a;
            var others = _v1.b;
            if (!layout.$) {
                return (!$elm$core$List$isEmpty(centeredProps)) ? $mdgriffith$style_elements$Element$Internal$Model$Layout({
                    b: $elm$core$Maybe$Nothing,
                    c: _List_Cons($mdgriffith$style_elements$Element$Internal$Adjustments$tag("center-text"), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false), centeredProps)),
                    t: $mdgriffith$style_elements$Element$Internal$Model$Normal({ $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(layoutEl, {
                            c: _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true), others)
                        })), b: _List_Nil }),
                    p: $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(1, _List_Nil),
                    d: "div",
                    e: $elm$core$Maybe$Nothing
                }) : elm;
            }
            else {
                return elm;
            }
        }
        else {
            return elm;
        }
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Screen = { $: 0 };
    var $mdgriffith$style_elements$Element$Internal$Adjustments$hoistFixedScreenElements = function (el) {
        var elementIsOnScreen = function (attrs) {
            return $elm$core$List$any_raw(function (attr) {
                return _Utils_eq(attr, $mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Screen));
            }, attrs);
        };
        switch (el.$) {
            case 3:
                var attrs = el.a.c;
                return elementIsOnScreen(attrs) ? _Utils_Tuple2($mdgriffith$style_elements$Element$Internal$Model$Empty, $elm$core$Maybe$Just({ $: 1, a: el, b: _List_Nil })) : _Utils_Tuple2(el, $elm$core$Maybe$Nothing);
            case 4:
                var attrs = el.a.c;
                return elementIsOnScreen(attrs) ? _Utils_Tuple2($mdgriffith$style_elements$Element$Internal$Model$Empty, $elm$core$Maybe$Just({ $: 1, a: el, b: _List_Nil })) : _Utils_Tuple2(el, $elm$core$Maybe$Nothing);
            default:
                return _Utils_Tuple2(el, $elm$core$Maybe$Nothing);
        }
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Above = 1;
    var $mdgriffith$style_elements$Element$Internal$Model$Absolute = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Model$Below = 0;
    var $mdgriffith$style_elements$Element$Internal$Model$Bottom = 1;
    var $mdgriffith$style_elements$Element$Internal$Model$BottomLeft = 1;
    var $mdgriffith$style_elements$Element$Internal$Model$Left = 0;
    var $mdgriffith$style_elements$Element$Internal$Model$Relative = { $: 1 };
    var $mdgriffith$style_elements$Element$Internal$Model$Right = 1;
    var $mdgriffith$style_elements$Element$Internal$Model$Top = 0;
    var $mdgriffith$style_elements$Element$Internal$Model$TopLeft = 0;
    var $mdgriffith$style_elements$Element$Internal$Modify$addAttrList_raw = function (props, el) {
        switch (el.$) {
            case 0:
                return $mdgriffith$style_elements$Element$Internal$Model$Empty;
            case 1:
                var x = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
            case 5:
                var h = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
            case 4:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(elm, {
                    c: _Utils_ap(props, elm.c)
                }));
            case 3:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Element(_Utils_update(elm, {
                    c: _Utils_ap(props, elm.c)
                }));
            default:
                var dec = el.a;
                var content = el.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Element({
                    b: $elm$core$Maybe$Nothing,
                    c: props,
                    g: $mdgriffith$style_elements$Element$Internal$Model$Text_raw(dec, content),
                    d: "div",
                    e: $elm$core$Maybe$Nothing
                });
        }
    }, $mdgriffith$style_elements$Element$Internal$Modify$addAttrList = F2($mdgriffith$style_elements$Element$Internal$Modify$addAttrList_raw);
    var $mdgriffith$style_elements$Element$Internal$Modify$addAttrPriority_raw = function (prop, el) {
        switch (el.$) {
            case 0:
                return $mdgriffith$style_elements$Element$Internal$Model$Empty;
            case 5:
                var h = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
            case 1:
                var x = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
            case 4:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(elm, {
                    c: _Utils_ap(elm.c, { $: 1, a: prop, b: _List_Nil })
                }));
            case 3:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Element(_Utils_update(elm, {
                    c: _Utils_ap(elm.c, { $: 1, a: prop, b: _List_Nil })
                }));
            default:
                var dec = el.a;
                var content = el.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Element({
                    b: $elm$core$Maybe$Nothing,
                    c: { $: 1, a: prop, b: _List_Nil },
                    g: $mdgriffith$style_elements$Element$Internal$Model$Text_raw(dec, content),
                    d: "div",
                    e: $elm$core$Maybe$Nothing
                });
        }
    }, $mdgriffith$style_elements$Element$Internal$Modify$addAttrPriority = F2($mdgriffith$style_elements$Element$Internal$Modify$addAttrPriority_raw);
    var $mdgriffith$style_elements$Style$Internal$Model$Calc_raw = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $mdgriffith$style_elements$Style$Internal$Model$Calc = F2($mdgriffith$style_elements$Style$Internal$Model$Calc_raw);
    var $elm$core$Basics$negate = function (n) {
        return -n;
    };
    var $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing = function (elm) {
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
                    return $elm$core$Maybe$Just(_Utils_Tuple2(x, y));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            };
            var spacing = $elm$core$List$head($elm$core$List$reverse($elm$core$List$filterMap_raw(forSpacing, attrs)));
            var hasSpacing = function () {
                if (spacing.$ === 1) {
                    return false;
                }
                else {
                    return true;
                }
            }();
            var forPhantomPadding = function (posAttr) {
                if (posAttr.$ === 13) {
                    var t = posAttr.a;
                    var r = posAttr.b;
                    var b = posAttr.c;
                    var l = posAttr.d;
                    return $elm$core$Maybe$Just($mdgriffith$style_elements$Element$Internal$Model$PhantomPadding_raw($elm$core$Maybe$withDefault_raw(0, t), $elm$core$Maybe$withDefault_raw(0, r), $elm$core$Maybe$withDefault_raw(0, b), $elm$core$Maybe$withDefault_raw(0, l)));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            };
            var phantomPadding = $elm$core$Maybe$withDefault_raw($mdgriffith$style_elements$Element$Internal$Model$PhantomPadding_raw(0, 0, 0, 0), $elm$core$List$head($elm$core$List$reverse($elm$core$List$filterMap_raw(forPhantomPadding, attrs))));
            var _v1 = $elm$core$List$partition_raw(function (attr) {
                return _Utils_eq(attr, $mdgriffith$style_elements$Element$Internal$Model$HAlign(2)) || _Utils_eq(attr, $mdgriffith$style_elements$Element$Internal$Model$VAlign(2));
            }, attrs);
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
                    var _v3 = $elm$core$List$partition_raw(forAlignment, attrs);
                    var aligned = _v3.a;
                    var unaligned = _v3.b;
                    var _v4 = function () {
                        if (spacing.$ === 1) {
                            return _Utils_Tuple3($mdgriffith$style_elements$Element$Internal$Model$Margin_raw(0, 0, 0, 0), $mdgriffith$style_elements$Element$Internal$Model$Spacing_raw(0, 0), 0);
                        }
                        else {
                            var _v6 = spacing.a;
                            var x = _v6.a;
                            var y = _v6.b;
                            return _Utils_Tuple3($mdgriffith$style_elements$Element$Internal$Model$Margin_raw((-1) * y, (-1) * x, (-1) * y, (-1) * x), $mdgriffith$style_elements$Element$Internal$Model$Spacing_raw(x, y), x);
                        }
                    }();
                    var negativeMargin = _v4.a;
                    var spacingAttr = _v4.b;
                    var totalHSpacing = _v4.c;
                    return $mdgriffith$style_elements$Element$Internal$Model$Layout({
                        b: absolutelyPositioned,
                        c: _List_Cons($mdgriffith$style_elements$Element$Internal$Adjustments$tag("counter-spacing-container"), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true), unaligned)),
                        t: $mdgriffith$style_elements$Element$Internal$Model$Normal({ $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$Layout({
                                b: $elm$core$Maybe$Nothing,
                                c: _List_Cons($mdgriffith$style_elements$Element$Internal$Adjustments$tag("counter-spacing"), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false), _List_Cons(phantomPadding, _List_Cons(negativeMargin, _List_Cons(spacingAttr, _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Width($mdgriffith$style_elements$Style$Internal$Model$Calc_raw(100, totalHSpacing)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Shrink(1), aligned))))))),
                                t: function () {
                                    if (!children.$) {
                                        var childs = children.a;
                                        return $mdgriffith$style_elements$Element$Internal$Model$Normal($elm$core$List$map_raw($mdgriffith$style_elements$Element$Internal$Modify$addAttr($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true)), childs));
                                    }
                                    else {
                                        var childs = children.a;
                                        return $mdgriffith$style_elements$Element$Internal$Model$Keyed($elm$core$List$map_raw($elm$core$Tuple$mapSecond($mdgriffith$style_elements$Element$Internal$Modify$addAttr($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true))), childs));
                                    }
                                }(),
                                p: layout,
                                d: "div",
                                e: $elm$core$Maybe$Nothing
                            }), b: _List_Nil }),
                        p: $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(1, _List_Nil),
                        d: node,
                        e: style
                    });
                }
                else {
                    return $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(layoutEl, {
                        c: _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true), attrs)
                    }));
                }
            }
            else {
                return elm;
            }
        }
        else {
            return elm;
        }
    };
    var $mdgriffith$style_elements$Element$Internal$Modify$setAttrs_raw = function (props, el) {
        switch (el.$) {
            case 0:
                return $mdgriffith$style_elements$Element$Internal$Model$Empty;
            case 1:
                var x = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
            case 5:
                var h = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
            case 4:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Layout(_Utils_update(elm, { c: props }));
            case 3:
                var elm = el.a;
                return $mdgriffith$style_elements$Element$Internal$Model$Element(_Utils_update(elm, { c: props }));
            default:
                var dec = el.a;
                var content = el.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Text_raw(dec, content);
        }
    }, $mdgriffith$style_elements$Element$Internal$Modify$setAttrs = F2($mdgriffith$style_elements$Element$Internal$Modify$setAttrs_raw);
    var $mdgriffith$style_elements$Element$Internal$Adjustments$positionNearby_raw = function (parent, elm) {
        var setPosition = F3(function (nearbyPosition, _v24, el) {
            var aligned = _v24.a;
            var unaligned = _v24.b;
            var nearbyAlignment = function () {
                _v19$4: while (true) {
                    if ((!nearbyPosition.$) && (nearbyPosition.a.$ === 3)) {
                        switch (nearbyPosition.a.a) {
                            case 1:
                                var _v20 = nearbyPosition.a.a;
                                return { $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$VAlign(0), b: _List_Nil };
                            case 0:
                                var _v21 = nearbyPosition.a.a;
                                return { $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$VAlign(1), b: _List_Nil };
                            case 3:
                                var _v22 = nearbyPosition.a.a;
                                return { $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$HAlign(1), b: _List_Nil };
                            case 2:
                                var _v23 = nearbyPosition.a.a;
                                return { $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$HAlign(0), b: _List_Nil };
                            default:
                                break _v19$4;
                        }
                    }
                    else {
                        break _v19$4;
                    }
                }
                return _List_Nil;
            }();
            var isLayout = function () {
                if (elm.$ === 4) {
                    return true;
                }
                else {
                    return false;
                }
            }();
            var framed = function () {
                if (nearbyPosition.$ === 1) {
                    return false;
                }
                else {
                    return true;
                }
            }();
            var forWidth = function (prop) {
                if (prop.$ === 2) {
                    return true;
                }
                else {
                    return false;
                }
            };
            var width = $elm$core$List$head($elm$core$List$reverse($elm$core$List$filter_raw(forWidth, unaligned)));
            var forHeight = function (prop) {
                if (prop.$ === 1) {
                    return true;
                }
                else {
                    return false;
                }
            };
            var height = $elm$core$List$head($elm$core$List$reverse($elm$core$List$filter_raw(forHeight, unaligned)));
            var adjustWidthHeight = function (elem) {
                var adjustWidth = function (element) {
                    if (width.$ === 1) {
                        return element;
                    }
                    else {
                        if ((width.a.$ === 2) && (width.a.a.$ === 1)) {
                            var percent = width.a.a.a;
                            return $mdgriffith$style_elements$Element$Internal$Modify$addAttrPriority_raw($mdgriffith$style_elements$Element$Internal$Model$Width($mdgriffith$style_elements$Style$Internal$Model$Percent(100)), element);
                        }
                        else {
                            var x = width.a;
                            return element;
                        }
                    }
                };
                var adjustHeight = function (element) {
                    if (height.$ === 1) {
                        return element;
                    }
                    else {
                        if ((height.a.$ === 1) && (height.a.a.$ === 1)) {
                            var percent = height.a.a.a;
                            return $mdgriffith$style_elements$Element$Internal$Modify$addAttrPriority_raw($mdgriffith$style_elements$Element$Internal$Model$Width($mdgriffith$style_elements$Style$Internal$Model$Percent(100)), element);
                        }
                        else {
                            var x = height.a;
                            return element;
                        }
                    }
                };
                return adjustHeight(adjustWidth(elem));
            };
            var addWidthHeight = function (attrs) {
                var _v8 = _Utils_Tuple2(width, height);
                if (_v8.a.$ === 1) {
                    if (_v8.b.$ === 1) {
                        var _v9 = _v8.a;
                        var _v10 = _v8.b;
                        return attrs;
                    }
                    else {
                        var _v11 = _v8.a;
                        var h = _v8.b.a;
                        return _List_Cons(h, attrs);
                    }
                }
                else {
                    if (!_v8.b.$) {
                        var w = _v8.a.a;
                        var h = _v8.b.a;
                        return _List_Cons(w, _List_Cons(h, attrs));
                    }
                    else {
                        var w = _v8.a.a;
                        var _v12 = _v8.b;
                        return _List_Cons(w, attrs);
                    }
                }
            };
            return (_Utils_eq(nearbyPosition, $elm$core$Maybe$Just($mdgriffith$style_elements$Element$Internal$Model$Nearby(1))) || _Utils_eq(nearbyPosition, $elm$core$Maybe$Just($mdgriffith$style_elements$Element$Internal$Model$Nearby(0)))) ? $mdgriffith$style_elements$Element$Internal$Model$Layout({
                b: $elm$core$Maybe$Nothing,
                c: _List_Cons($mdgriffith$style_elements$Element$Internal$Adjustments$tag("above-below-intermediate-parent"), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Height($mdgriffith$style_elements$Style$Internal$Model$Px(0)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Width($mdgriffith$style_elements$Style$Internal$Model$Percent(100)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Absolute(_Utils_eq(nearbyPosition, $elm$core$Maybe$Just($mdgriffith$style_elements$Element$Internal$Model$Nearby(1))) ? 0 : 1)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing), isLayout ? nearbyAlignment : _Utils_ap(nearbyAlignment, aligned))))))),
                t: $mdgriffith$style_elements$Element$Internal$Model$Normal({ $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$Element({
                        b: $elm$core$Maybe$Nothing,
                        c: function () {
                            var addWidth = function (attrs) {
                                return isLayout ? _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Width($mdgriffith$style_elements$Style$Internal$Model$Percent(100)), attrs) : attrs;
                            };
                            return addWidth(_List_fromArray([
                                $mdgriffith$style_elements$Element$Internal$Adjustments$tag("above-below-intermediate"),
                                $mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
                                $mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Absolute(_Utils_eq(nearbyPosition, $elm$core$Maybe$Just($mdgriffith$style_elements$Element$Internal$Model$Nearby(1))) ? 1 : 0)),
                                $mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Nothing, $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing),
                                $mdgriffith$style_elements$Element$Internal$Model$VAlign(1),
                                $mdgriffith$style_elements$Element$Internal$Model$Attr(_VirtualDom_style_raw("z-index", "10"))
                            ]));
                        }(),
                        g: $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing($mdgriffith$style_elements$Element$Internal$Modify$setAttrs_raw(_List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Absolute(0)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing), unaligned))), el)),
                        d: "div",
                        e: $elm$core$Maybe$Nothing
                    }), b: _List_Nil }),
                p: $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(1, _List_Nil),
                d: "div",
                e: $elm$core$Maybe$Nothing
            }) : (framed ? $mdgriffith$style_elements$Element$Internal$Model$Layout({
                b: $elm$core$Maybe$Nothing,
                c: _List_Cons($mdgriffith$style_elements$Element$Internal$Adjustments$tag("nearby-intermediate-parent"), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Height($mdgriffith$style_elements$Style$Internal$Model$Percent(100)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Width($mdgriffith$style_elements$Style$Internal$Model$Percent(100)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Absolute(0)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing), isLayout ? nearbyAlignment : _Utils_ap(nearbyAlignment, aligned))))))),
                t: $mdgriffith$style_elements$Element$Internal$Model$Normal({ $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$Element({
                        b: $elm$core$Maybe$Nothing,
                        c: addWidthHeight(_List_fromArray([
                            $mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
                            $mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Relative),
                            $mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing),
                            $mdgriffith$style_elements$Element$Internal$Model$Padding_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0)),
                            $mdgriffith$style_elements$Element$Internal$Model$Attr(_VirtualDom_style_raw("z-index", "10")),
                            $mdgriffith$style_elements$Element$Internal$Adjustments$tag("nearby-intermediate")
                        ])),
                        g: $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(adjustWidthHeight($mdgriffith$style_elements$Element$Internal$Modify$addAttrList_raw(_List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Absolute(0)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing), _List_Nil))), el))),
                        d: "div",
                        e: $elm$core$Maybe$Nothing
                    }), b: _List_Nil }),
                p: $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(1, _List_Nil),
                d: "div",
                e: $elm$core$Maybe$Nothing
            }) : ((!$elm$core$List$isEmpty(aligned)) ? $mdgriffith$style_elements$Element$Internal$Model$Layout({
                b: $elm$core$Maybe$Nothing,
                c: _List_Cons($mdgriffith$style_elements$Element$Internal$Adjustments$tag("nearby-aligned-intermediate-parent"), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Height($mdgriffith$style_elements$Style$Internal$Model$Percent(100)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Width($mdgriffith$style_elements$Style$Internal$Model$Percent(100)), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Relative), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing), isLayout ? nearbyAlignment : _Utils_ap(nearbyAlignment, aligned))))))),
                t: $mdgriffith$style_elements$Element$Internal$Model$Normal({ $: 1, a: $mdgriffith$style_elements$Element$Internal$Model$Element({
                        b: $elm$core$Maybe$Nothing,
                        c: addWidthHeight(_List_fromArray([
                            $mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
                            $mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Relative),
                            $mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing),
                            $mdgriffith$style_elements$Element$Internal$Model$Padding_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0)),
                            $mdgriffith$style_elements$Element$Internal$Adjustments$tag("nearby-aligned-intermediate")
                        ])),
                        g: $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(adjustWidthHeight($mdgriffith$style_elements$Element$Internal$Modify$addAttrList_raw(_List_Cons($mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Relative), _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Position_raw($elm$core$Maybe$Just(0), $elm$core$Maybe$Just(0), $elm$core$Maybe$Nothing), _List_Nil))), el))),
                        d: "div",
                        e: $elm$core$Maybe$Nothing
                    }), b: _List_Nil }),
                p: $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(1, _List_Nil),
                d: "div",
                e: $elm$core$Maybe$Nothing
            }) : $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(elm)));
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
        var separateAlignment = function (attrs) {
            return $elm$core$List$partition_raw(forAlignment, attrs);
        };
        switch (elm.$) {
            case 3:
                var attrs = elm.a.c;
                var isFrame = function (attr) {
                    if (attr.$ === 7) {
                        var x = attr.a;
                        return $elm$core$Maybe$Just(x);
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                };
                var frame = $elm$core$List$head($elm$core$List$filterMap_raw(isFrame, attrs));
                var _v1 = separateAlignment(attrs);
                var aligned = _v1.a;
                var unaligned = _v1.b;
                if (parent.$ === 1) {
                    return A3(setPosition, frame, _Utils_Tuple2(aligned, unaligned), elm);
                }
                else {
                    return elm;
                }
            case 4:
                var attrs = elm.a.c;
                var isFrame = function (attr) {
                    if (attr.$ === 7) {
                        var x = attr.a;
                        return $elm$core$Maybe$Just(x);
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                };
                var frame = $elm$core$List$head($elm$core$List$filterMap_raw(isFrame, attrs));
                var _v4 = separateAlignment(attrs);
                var aligned = _v4.a;
                var unaligned = _v4.b;
                if (parent.$ === 1) {
                    return A3(setPosition, frame, _Utils_Tuple2(aligned, unaligned), elm);
                }
                else {
                    return $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(elm);
                }
            default:
                return $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(elm);
        }
    }, $mdgriffith$style_elements$Element$Internal$Adjustments$positionNearby = F2($mdgriffith$style_elements$Element$Internal$Adjustments$positionNearby_raw);
    var $mdgriffith$style_elements$Element$Internal$Adjustments$apply = function (root) {
        var stack_raw = function (parent, el) {
            return $elm$core$Basics$composeR_raw($mdgriffith$style_elements$Element$Internal$Adjustments$centerTextLayout, A2($elm$core$Basics$composeR, $mdgriffith$style_elements$Element$Internal$Adjustments$positionNearby(parent), $mdgriffith$style_elements$Element$Internal$Adjustments$hoistFixedScreenElements), el);
        }, stack = F2(stack_raw);
        return $mdgriffith$style_elements$Element$Internal$Model$adjust_raw(stack, $elm$core$Maybe$Nothing, root);
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Box_raw = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $mdgriffith$style_elements$Style$Internal$Model$Box = F4($mdgriffith$style_elements$Style$Internal$Model$Box_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$LayoutElement = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Render$Single = { $: 0 };
    var $mdgriffith$style_elements$Element$Internal$Render$defaultPadding_raw = function (_v0, _v1) {
        var mW = _v0.a;
        var mX = _v0.b;
        var mY = _v0.c;
        var mZ = _v0.d;
        var w = _v1.a;
        var x = _v1.b;
        var y = _v1.c;
        var z = _v1.d;
        return $mdgriffith$style_elements$Style$Internal$Model$Box_raw($elm$core$Maybe$withDefault_raw(w, mW), $elm$core$Maybe$withDefault_raw(x, mX), $elm$core$Maybe$withDefault_raw(y, mY), $elm$core$Maybe$withDefault_raw(z, mZ));
    }, $mdgriffith$style_elements$Element$Internal$Render$defaultPadding = F2($mdgriffith$style_elements$Element$Internal$Render$defaultPadding_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$First = { $: 0 };
    var $mdgriffith$style_elements$Element$Internal$Render$Last = { $: 2 };
    var $mdgriffith$style_elements$Element$Internal$Render$Middle = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Render$detectOrder_raw = function (list, i) {
        var len = $elm$core$List$length(list);
        return ((!i) && (len === 1)) ? $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast : ((!i) ? $mdgriffith$style_elements$Element$Internal$Render$First : (_Utils_eq(i, len - 1) ? $mdgriffith$style_elements$Element$Internal$Render$Last : $mdgriffith$style_elements$Element$Internal$Render$Middle(i)));
    }, $mdgriffith$style_elements$Element$Internal$Render$detectOrder = F2($mdgriffith$style_elements$Element$Internal$Render$detectOrder_raw);
    var $elm$html$Html$em = _VirtualDom_node("em");
    var $mdgriffith$style_elements$Element$Internal$Render$emptyPositionable = {
        c: _List_Nil,
        az: false,
        I: $elm$core$Maybe$Nothing,
        ap: $elm$core$Maybe$Nothing,
        a1: $elm$core$Maybe$Nothing,
        bS: false,
        ac: $elm$core$Maybe$Nothing,
        S: false,
        aB: $elm$core$Maybe$Nothing,
        aC: $elm$core$Maybe$Nothing,
        ag: $elm$core$Maybe$Nothing,
        ah: $mdgriffith$style_elements$Style$Internal$Model$Box_raw($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
        aE: $elm$core$Maybe$Nothing,
        as: _Utils_Tuple3($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
        aH: $elm$core$Maybe$Nothing,
        X: _List_Nil,
        ay: $elm$core$Maybe$Nothing,
        bw: $elm$core$Maybe$Nothing
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Value$gridPosition = function (_v0) {
        var start = _v0.aT;
        var width = _v0.bw;
        var height = _v0.a1;
        var _v1 = start;
        var x = _v1.a;
        var y = _v1.b;
        var _v2 = _Utils_Tuple2(y + 1, (y + 1) + height);
        var rowStart = _v2.a;
        var rowEnd = _v2.b;
        var _v3 = _Utils_Tuple2(x + 1, (x + 1) + width);
        var colStart = _v3.a;
        var colEnd = _v3.b;
        return ((!width) || (!height)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just($elm$core$String$join_raw(" / ", { $: 1, a: $elm$core$String$fromInt(rowStart), b: { $: 1, a: $elm$core$String$fromInt(colStart), b: { $: 1, a: $elm$core$String$fromInt(rowEnd), b: { $: 1, a: $elm$core$String$fromInt(colEnd), b: _List_Nil } } } }));
    };
    var $mdgriffith$style_elements$Element$Internal$Render$makePositionable_raw = function (attribute, pos) {
        switch (attribute.$) {
            case 22:
                var x = attribute.a;
                return _Utils_update(pos, {
                    ag: $elm$core$Maybe$Just(x)
                });
            case 21:
                var i = attribute.a;
                return _Utils_update(pos, {
                    aH: $elm$core$Maybe$Just(i)
                });
            case 3:
                return _Utils_update(pos, { S: true });
            case 12:
                return _Utils_update(pos, { az: true });
            case 0:
                var vary = attribute.a;
                var on = attribute.b;
                return _Utils_update(pos, {
                    X: _List_Cons(_Utils_Tuple2(vary, on), pos.X)
                });
            case 1:
                var len = attribute.a;
                return _Utils_update(pos, {
                    a1: $elm$core$Maybe$Just(len)
                });
            case 2:
                var len = attribute.a;
                return _Utils_update(pos, {
                    bw: $elm$core$Maybe$Just(len)
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
                    }
                    else {
                        var a = x.a;
                        return $elm$core$Maybe$Just(a);
                    }
                }();
                var newY = function () {
                    if (y.$ === 1) {
                        return currentY;
                    }
                    else {
                        var a = y.a;
                        return $elm$core$Maybe$Just(a);
                    }
                }();
                var newZ = function () {
                    if (z.$ === 1) {
                        return currentZ;
                    }
                    else {
                        var a = z.a;
                        return $elm$core$Maybe$Just(a);
                    }
                }();
                return _Utils_update(pos, {
                    as: _Utils_Tuple3(newX, newY, newZ)
                });
            case 7:
                var frame = attribute.a;
                return _Utils_update(pos, {
                    I: $elm$core$Maybe$Just(frame)
                });
            case 4:
                var alignment = attribute.a;
                return _Utils_update(pos, {
                    ac: $elm$core$Maybe$Just(alignment)
                });
            case 5:
                var alignment = attribute.a;
                return _Utils_update(pos, {
                    ay: $elm$core$Maybe$Just(alignment)
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
                return _Utils_update(pos, {
                    aB: $elm$core$Maybe$Just($mdgriffith$style_elements$Style$Internal$Model$Box_raw(t, r, b, l))
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
                    }
                    else {
                        var a = bottom.a;
                        return $elm$core$Maybe$Just(a);
                    }
                }();
                var newLeft = function () {
                    if (left.$ === 1) {
                        return currentLeft;
                    }
                    else {
                        var a = left.a;
                        return $elm$core$Maybe$Just(a);
                    }
                }();
                var newRight = function () {
                    if (right.$ === 1) {
                        return currentRight;
                    }
                    else {
                        var a = right.a;
                        return $elm$core$Maybe$Just(a);
                    }
                }();
                var newTop = function () {
                    if (top.$ === 1) {
                        return currentTop;
                    }
                    else {
                        var a = top.a;
                        return $elm$core$Maybe$Just(a);
                    }
                }();
                return _Utils_update(pos, {
                    ah: $mdgriffith$style_elements$Style$Internal$Model$Box_raw(newTop, newRight, newBottom, newLeft)
                });
            case 8:
                return _Utils_update(pos, { bS: true });
            case 9:
                var t = attribute.a;
                return _Utils_update(pos, {
                    aC: $elm$core$Maybe$Just(t)
                });
            case 15:
                var ev = attribute.a;
                return _Utils_update(pos, {
                    c: _List_Cons(ev, pos.c)
                });
            case 16:
                var ev = attribute.a;
                return _Utils_update(pos, {
                    c: _List_Cons(ev, pos.c)
                });
            case 17:
                var attr = attribute.a;
                return _Utils_update(pos, {
                    c: _List_Cons(attr, pos.c)
                });
            case 20:
                var on = attribute.a;
                return _Utils_update(pos, {
                    aE: $elm$core$Maybe$Just(on)
                });
            case 18:
                var name = attribute.a;
                return _Utils_update(pos, {
                    ap: $elm$core$Maybe$Just(name)
                });
            default:
                var coords = attribute.a;
                var _v10 = $mdgriffith$style_elements$Style$Internal$Render$Value$gridPosition(coords);
                if (_v10.$ === 1) {
                    return _Utils_update(pos, { bS: true });
                }
                else {
                    var xy = _v10.a;
                    return _Utils_update(pos, {
                        ap: $elm$core$Maybe$Just(xy)
                    });
                }
        }
    }, $mdgriffith$style_elements$Element$Internal$Render$makePositionable = F2($mdgriffith$style_elements$Element$Internal$Render$makePositionable_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$gather = function (attrs) {
        return $elm$core$List$foldl_raw($mdgriffith$style_elements$Element$Internal$Render$makePositionable, $mdgriffith$style_elements$Element$Internal$Render$emptyPositionable, attrs);
    };
    var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
        return _VirtualDom_keyedNode(_VirtualDom_noScript(tag));
    };
    var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
    var $mdgriffith$style_elements$Style$Internal$Model$Bottom = 1;
    var $mdgriffith$style_elements$Style$Internal$Model$Center = { $: 0 };
    var $mdgriffith$style_elements$Style$Internal$Model$GridH = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$GridV = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Horz = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Justify = { $: 1 };
    var $mdgriffith$style_elements$Style$Internal$Model$Left = 0;
    var $mdgriffith$style_elements$Style$Internal$Model$Other = function (a) {
        return { $: 3, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Right = 1;
    var $mdgriffith$style_elements$Style$Internal$Model$TextLayout = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$style_elements$Style$Internal$Model$Top = 0;
    var $mdgriffith$style_elements$Style$Internal$Model$Vert = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$style_elements$Element$Internal$Render$alignLayout_raw = function (maybeHorizontal, maybeVertical, layout) {
        var alignGridVertical = function (align) {
            switch (align) {
                case 0:
                    return $mdgriffith$style_elements$Style$Internal$Model$GridV($mdgriffith$style_elements$Style$Internal$Model$Other(0));
                case 1:
                    return $mdgriffith$style_elements$Style$Internal$Model$GridV($mdgriffith$style_elements$Style$Internal$Model$Other(1));
                case 2:
                    return $mdgriffith$style_elements$Style$Internal$Model$GridV($mdgriffith$style_elements$Style$Internal$Model$Center);
                default:
                    return $mdgriffith$style_elements$Style$Internal$Model$GridV($mdgriffith$style_elements$Style$Internal$Model$Justify);
            }
        };
        var alignGridHorizontal = function (align) {
            switch (align) {
                case 0:
                    return $mdgriffith$style_elements$Style$Internal$Model$GridH($mdgriffith$style_elements$Style$Internal$Model$Other(0));
                case 1:
                    return $mdgriffith$style_elements$Style$Internal$Model$GridH($mdgriffith$style_elements$Style$Internal$Model$Other(1));
                case 2:
                    return $mdgriffith$style_elements$Style$Internal$Model$GridH($mdgriffith$style_elements$Style$Internal$Model$Center);
                default:
                    return $mdgriffith$style_elements$Style$Internal$Model$GridH($mdgriffith$style_elements$Style$Internal$Model$Justify);
            }
        };
        var alignFlexboxVertical = function (align) {
            switch (align) {
                case 0:
                    return $mdgriffith$style_elements$Style$Internal$Model$Vert($mdgriffith$style_elements$Style$Internal$Model$Other(0));
                case 1:
                    return $mdgriffith$style_elements$Style$Internal$Model$Vert($mdgriffith$style_elements$Style$Internal$Model$Other(1));
                case 2:
                    return $mdgriffith$style_elements$Style$Internal$Model$Vert($mdgriffith$style_elements$Style$Internal$Model$Center);
                default:
                    return $mdgriffith$style_elements$Style$Internal$Model$Vert($mdgriffith$style_elements$Style$Internal$Model$Justify);
            }
        };
        var alignFlexboxHorizontal = function (align) {
            switch (align) {
                case 0:
                    return $mdgriffith$style_elements$Style$Internal$Model$Horz($mdgriffith$style_elements$Style$Internal$Model$Other(0));
                case 1:
                    return $mdgriffith$style_elements$Style$Internal$Model$Horz($mdgriffith$style_elements$Style$Internal$Model$Other(1));
                case 2:
                    return $mdgriffith$style_elements$Style$Internal$Model$Horz($mdgriffith$style_elements$Style$Internal$Model$Center);
                default:
                    return $mdgriffith$style_elements$Style$Internal$Model$Horz($mdgriffith$style_elements$Style$Internal$Model$Justify);
            }
        };
        switch (layout.$) {
            case 0:
                var clearfix = layout.a;
                return $mdgriffith$style_elements$Style$Internal$Model$TextLayout(clearfix);
            case 1:
                var dir = layout.a;
                var els = layout.b;
                var _v1 = _Utils_Tuple2(maybeHorizontal, maybeVertical);
                if (_v1.a.$ === 1) {
                    if (_v1.b.$ === 1) {
                        var _v2 = _v1.a;
                        var _v3 = _v1.b;
                        return $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(dir, els);
                    }
                    else {
                        var _v5 = _v1.a;
                        var v = _v1.b.a;
                        return $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(dir, _List_Cons(alignFlexboxVertical(v), els));
                    }
                }
                else {
                    if (_v1.b.$ === 1) {
                        var h = _v1.a.a;
                        var _v4 = _v1.b;
                        return $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(dir, _List_Cons(alignFlexboxHorizontal(h), els));
                    }
                    else {
                        var h = _v1.a.a;
                        var v = _v1.b.a;
                        return $mdgriffith$style_elements$Style$Internal$Model$FlexLayout_raw(dir, _List_Cons(alignFlexboxHorizontal(h), _List_Cons(alignFlexboxVertical(v), els)));
                    }
                }
            default:
                var template = layout.a;
                var els = layout.b;
                var _v6 = _Utils_Tuple2(maybeHorizontal, maybeVertical);
                if (_v6.a.$ === 1) {
                    if (_v6.b.$ === 1) {
                        var _v7 = _v6.a;
                        var _v8 = _v6.b;
                        return $mdgriffith$style_elements$Style$Internal$Model$Grid_raw(template, els);
                    }
                    else {
                        var _v10 = _v6.a;
                        var v = _v6.b.a;
                        return $mdgriffith$style_elements$Style$Internal$Model$Grid_raw(template, _List_Cons(alignGridVertical(v), els));
                    }
                }
                else {
                    if (_v6.b.$ === 1) {
                        var h = _v6.a.a;
                        var _v9 = _v6.b;
                        return $mdgriffith$style_elements$Style$Internal$Model$Grid_raw(template, _List_Cons(alignGridHorizontal(h), els));
                    }
                    else {
                        var h = _v6.a.a;
                        var v = _v6.b.a;
                        return $mdgriffith$style_elements$Style$Internal$Model$Grid_raw(template, _List_Cons(alignGridHorizontal(h), _List_Cons(alignGridVertical(v), els)));
                    }
                }
        }
    }, $mdgriffith$style_elements$Element$Internal$Render$alignLayout = F3($mdgriffith$style_elements$Element$Internal$Render$alignLayout_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$Value$box = function (_v0) {
        var a = _v0.a;
        var b = _v0.b;
        var c = _v0.c;
        var d = _v0.d;
        return $elm$core$String$fromFloat(a) + ("px " + ($elm$core$String$fromFloat(b) + ("px " + ($elm$core$String$fromFloat(c) + ("px " + ($elm$core$String$fromFloat(d) + "px"))))));
    };
    var $mdgriffith$style_elements$Element$Internal$Render$calcPosition_raw = function (frame, _v0) {
        var mx = _v0.a;
        var my = _v0.b;
        var mz = _v0.c;
        var z = $elm$core$Maybe$withDefault_raw(0, mz);
        var y = $elm$core$Maybe$withDefault_raw(0, my);
        var x = $elm$core$Maybe$withDefault_raw(0, mx);
        switch (frame.$) {
            case 1:
                return { $: 1, a: _Utils_Tuple2("position", "relative"), b: { $: 1, a: _Utils_Tuple2("left", $elm$core$String$fromFloat(x) + "px"), b: { $: 1, a: _Utils_Tuple2("top", $elm$core$String$fromFloat(y) + "px"), b: _List_Nil } } };
            case 0:
                return { $: 1, a: _Utils_Tuple2("position", "fixed"), b: { $: 1, a: _Utils_Tuple2("left", $elm$core$String$fromFloat(x) + "px"), b: { $: 1, a: _Utils_Tuple2("top", $elm$core$String$fromFloat(y) + "px"), b: { $: 1, a: _Utils_Tuple2("z-index", "1000"), b: _List_Nil } } } };
            case 2:
                if (!frame.a) {
                    var _v2 = frame.a;
                    return $elm$core$List$filterMap_raw($elm$core$Basics$identity, { $: 1, a: $elm$core$Maybe$Just(_Utils_Tuple2("position", "absolute")), b: { $: 1, a: function () {
                                if (!mx.$) {
                                    var xVal = mx.a;
                                    return $elm$core$Maybe$Just(_Utils_Tuple2("left", $elm$core$String$fromFloat(xVal) + "px"));
                                }
                                else {
                                    return $elm$core$Maybe$Nothing;
                                }
                            }(), b: { $: 1, a: function () {
                                    if (!my.$) {
                                        var yVal = my.a;
                                        return $elm$core$Maybe$Just(_Utils_Tuple2("top", $elm$core$String$fromFloat(yVal) + "px"));
                                    }
                                    else {
                                        return $elm$core$Maybe$Nothing;
                                    }
                                }(), b: _List_Nil } } });
                }
                else {
                    var _v5 = frame.a;
                    return $elm$core$List$filterMap_raw($elm$core$Basics$identity, { $: 1, a: $elm$core$Maybe$Just(_Utils_Tuple2("position", "absolute")), b: { $: 1, a: function () {
                                if (!mx.$) {
                                    var xVal = mx.a;
                                    return $elm$core$Maybe$Just(_Utils_Tuple2("left", $elm$core$String$fromFloat(xVal) + "px"));
                                }
                                else {
                                    return $elm$core$Maybe$Nothing;
                                }
                            }(), b: { $: 1, a: function () {
                                    if (!my.$) {
                                        var yVal = my.a;
                                        return $elm$core$Maybe$Just(_Utils_Tuple2("bottom", $elm$core$String$fromFloat(yVal) + "px"));
                                    }
                                    else {
                                        return $elm$core$Maybe$Nothing;
                                    }
                                }(), b: _List_Nil } } });
                }
            default:
                switch (frame.a) {
                    case 4:
                        var _v8 = frame.a;
                        return { $: 1, a: _Utils_Tuple2("position", "relative"), b: { $: 1, a: _Utils_Tuple2("top", $elm$core$String$fromFloat(y) + "px"), b: { $: 1, a: _Utils_Tuple2("left", $elm$core$String$fromFloat(x) + "px"), b: _List_Nil } } };
                    case 1:
                        var _v9 = frame.a;
                        return { $: 1, a: _Utils_Tuple2("position", "relative"), b: { $: 1, a: _Utils_Tuple2("top", $elm$core$String$fromFloat(y) + "px"), b: { $: 1, a: _Utils_Tuple2("left", $elm$core$String$fromFloat(x) + "px"), b: _List_Nil } } };
                    case 0:
                        var _v10 = frame.a;
                        return { $: 1, a: _Utils_Tuple2("position", "relative"), b: { $: 1, a: _Utils_Tuple2("top", "calc(100% + " + ($elm$core$String$fromFloat(y) + "px)")), b: { $: 1, a: _Utils_Tuple2("left", $elm$core$String$fromFloat(x) + "px"), b: _List_Nil } } };
                    case 2:
                        var _v11 = frame.a;
                        return { $: 1, a: _Utils_Tuple2("position", "relative"), b: { $: 1, a: _Utils_Tuple2("right", "calc(100% - " + ($elm$core$String$fromFloat(x) + "px)")), b: { $: 1, a: _Utils_Tuple2("top", $elm$core$String$fromFloat(y) + "px"), b: _List_Nil } } };
                    default:
                        var _v12 = frame.a;
                        return { $: 1, a: _Utils_Tuple2("position", "relative"), b: { $: 1, a: _Utils_Tuple2("left", "calc(100% + " + ($elm$core$String$fromFloat(x) + "px)")), b: { $: 1, a: _Utils_Tuple2("top", $elm$core$String$fromFloat(y) + "px"), b: _List_Nil } } };
                }
        }
    }, $mdgriffith$style_elements$Element$Internal$Render$calcPosition = F2($mdgriffith$style_elements$Element$Internal$Render$calcPosition_raw);
    var $elm$html$Html$Attributes$classList = function (classes) {
        return $elm$html$Html$Attributes$class($elm$core$String$join_raw(" ", $elm$core$List$map_raw($elm$core$Tuple$first, $elm$core$List$filter_raw($elm$core$Tuple$second, classes))));
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$flexHeight = function (l) {
        switch (l.$) {
            case 0:
                var x = l.a;
                return { $: 1, a: _Utils_Tuple2("height", $elm$core$String$fromFloat(x) + "px"), b: _List_Nil };
            case 1:
                var x = l.a;
                return { $: 1, a: _Utils_Tuple2("height", $elm$core$String$fromFloat(x) + "%"), b: _List_Nil };
            case 2:
                return { $: 1, a: _Utils_Tuple2("height", "auto"), b: _List_Nil };
            case 3:
                var i = l.a;
                return { $: 1, a: _Utils_Tuple2("flex-grow", $elm$core$String$fromFloat(i)), b: { $: 1, a: _Utils_Tuple2("flex-basis", "0"), b: _List_Nil } };
            default:
                var perc = l.a;
                var px = l.b;
                return { $: 1, a: _Utils_Tuple2("height", "calc(" + ($elm$core$String$fromFloat(perc) + ("% + " + ($elm$core$String$fromFloat(px) + "px)")))), b: _List_Nil };
        }
    };
    var $mdgriffith$style_elements$Style$Internal$Render$Property$flexWidth_raw = function (len, adjustment) {
        switch (len.$) {
            case 0:
                var x = len.a;
                return { $: 1, a: _Utils_Tuple2("width", $elm$core$String$fromFloat(x) + "px"), b: _List_Nil };
            case 1:
                var x = len.a;
                return { $: 1, a: _Utils_Tuple2("width", "calc(" + ($elm$core$String$fromFloat(x) + ("% - " + ($elm$core$String$fromFloat(adjustment) + "px)")))), b: _List_Nil };
            case 2:
                return { $: 1, a: _Utils_Tuple2("width", "auto"), b: _List_Nil };
            case 3:
                var i = len.a;
                return { $: 1, a: _Utils_Tuple2("flex-grow", $elm$core$String$fromFloat(i)), b: { $: 1, a: _Utils_Tuple2("flex-basis", "0"), b: _List_Nil } };
            default:
                var perc = len.a;
                var px = len.b;
                return { $: 1, a: _Utils_Tuple2("width", "calc(" + ($elm$core$String$fromFloat(perc) + ("% + " + ($elm$core$String$fromFloat(px) + "px)")))), b: _List_Nil };
        }
    }, $mdgriffith$style_elements$Style$Internal$Render$Property$flexWidth = F2($mdgriffith$style_elements$Style$Internal$Render$Property$flexWidth_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$flexboxHorizontalIndividualAlignment_raw = function (direction, alignment) {
        switch (direction) {
            case 1:
                switch (alignment) {
                    case 0:
                        return $elm$core$Maybe$Nothing;
                    case 1:
                        return $elm$core$Maybe$Nothing;
                    case 2:
                        return $elm$core$Maybe$Nothing;
                    default:
                        return $elm$core$Maybe$Nothing;
                }
            case 3:
                switch (alignment) {
                    case 0:
                        return $elm$core$Maybe$Nothing;
                    case 1:
                        return $elm$core$Maybe$Nothing;
                    case 2:
                        return $elm$core$Maybe$Nothing;
                    default:
                        return $elm$core$Maybe$Nothing;
                }
            case 2:
                switch (alignment) {
                    case 0:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "flex-start"));
                    case 1:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "flex-end"));
                    case 2:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "center"));
                    default:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "stretch"));
                }
            default:
                switch (alignment) {
                    case 0:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "flex-start"));
                    case 1:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "flex-end"));
                    case 2:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "center"));
                    default:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "stretch"));
                }
        }
    }, $mdgriffith$style_elements$Element$Internal$Render$flexboxHorizontalIndividualAlignment = F2($mdgriffith$style_elements$Element$Internal$Render$flexboxHorizontalIndividualAlignment_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$flexboxVerticalIndividualAlignment_raw = function (direction, alignment) {
        switch (direction) {
            case 1:
                switch (alignment) {
                    case 0:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "flex-start"));
                    case 1:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "flex-end"));
                    case 2:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "center"));
                    default:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "center"));
                }
            case 3:
                switch (alignment) {
                    case 0:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "flex-start"));
                    case 1:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "flex-end"));
                    case 2:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "center"));
                    default:
                        return $elm$core$Maybe$Just(_Utils_Tuple2("align-self", "center"));
                }
            case 2:
                switch (alignment) {
                    case 0:
                        return $elm$core$Maybe$Nothing;
                    case 1:
                        return $elm$core$Maybe$Nothing;
                    case 2:
                        return $elm$core$Maybe$Nothing;
                    default:
                        return $elm$core$Maybe$Nothing;
                }
            default:
                switch (alignment) {
                    case 0:
                        return $elm$core$Maybe$Nothing;
                    case 1:
                        return $elm$core$Maybe$Nothing;
                    case 2:
                        return $elm$core$Maybe$Nothing;
                    default:
                        return $elm$core$Maybe$Nothing;
                }
        }
    }, $mdgriffith$style_elements$Element$Internal$Render$flexboxVerticalIndividualAlignment = F2($mdgriffith$style_elements$Element$Internal$Render$flexboxVerticalIndividualAlignment_raw);
    var $mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength_raw = function (len, adjustment) {
        switch (len.$) {
            case 0:
                var x = len.a;
                return $elm$core$String$fromFloat(x) + "px";
            case 1:
                var x = len.a;
                return "calc(" + ($elm$core$String$fromFloat(x) + ("% - " + ($elm$core$String$fromFloat(adjustment) + "px)")));
            case 2:
                return "auto";
            case 3:
                var i = len.a;
                return "calc(100% - " + ($elm$core$String$fromFloat(adjustment) + "px)");
            default:
                var perc = len.a;
                var px = len.b;
                return "calc(" + ($elm$core$String$fromFloat(perc) + ("% + " + ($elm$core$String$fromFloat(px) + "px)")));
        }
    }, $mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength = F2($mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$renderPadding = function (_v0) {
        var top = _v0.a;
        var right = _v0.b;
        var bottom = _v0.c;
        var left = _v0.d;
        var format_raw = function (name, x) {
            return _Utils_Tuple2(name, $elm$core$String$fromFloat(x) + "px");
        }, format = F2(format_raw);
        return $elm$core$List$filterMap_raw($elm$core$Basics$identity, { $: 1, a: $elm$core$Maybe$map_raw(format("padding-top"), top), b: { $: 1, a: $elm$core$Maybe$map_raw(format("padding-bottom"), bottom), b: { $: 1, a: $elm$core$Maybe$map_raw(format("padding-left"), left), b: { $: 1, a: $elm$core$Maybe$map_raw(format("padding-right"), right), b: _List_Nil } } } });
    };
    var $mdgriffith$style_elements$Element$Internal$Render$renderAttributes_raw = function (elType, order, maybeElemID, parent, stylesheet, elem) {
        var width = function (attrs) {
            var _v62 = elem.bw;
            if (_v62.$ === 1) {
                return attrs;
            }
            else {
                var len = _v62.a;
                if (!parent.$) {
                    var parentEl = parent.a;
                    var _v64 = $elm$core$Maybe$withDefault_raw($mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0), parentEl.M);
                    var rightPad = _v64.b;
                    var leftPad = _v64.d;
                    var paddingAdjustment = (rightPad + leftPad) / 2;
                    var _v65 = parentEl.p;
                    _v65$2: while (true) {
                        if (_v65.$ === 1) {
                            switch (_v65.a) {
                                case 1:
                                    var _v66 = _v65.a;
                                    return _Utils_ap($mdgriffith$style_elements$Style$Internal$Render$Property$flexWidth_raw(len, paddingAdjustment), attrs);
                                case 3:
                                    var _v67 = _v65.a;
                                    return _Utils_ap($mdgriffith$style_elements$Style$Internal$Render$Property$flexWidth_raw(len, paddingAdjustment), attrs);
                                default:
                                    break _v65$2;
                            }
                        }
                        else {
                            break _v65$2;
                        }
                    }
                    return _List_Cons(_Utils_Tuple2("width", $mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength_raw(len, paddingAdjustment)), attrs);
                }
                else {
                    return _List_Cons(_Utils_Tuple2("width", $mdgriffith$style_elements$Style$Internal$Render$Value$length(len)), attrs);
                }
            }
        };
        var vertical = function (attrs) {
            var _v57 = elem.ay;
            if (_v57.$ === 1) {
                return attrs;
            }
            else {
                var align = _v57.a;
                if (elem.S && _Utils_eq(elType, $mdgriffith$style_elements$Element$Internal$Render$Single)) {
                    return attrs;
                }
                else {
                    if (elem.S) {
                        return attrs;
                    }
                    else {
                        if (!_Utils_eq(elem.I, $elm$core$Maybe$Nothing)) {
                            switch (align) {
                                case 0:
                                    return _List_Cons(_Utils_Tuple2("top", "0"), attrs);
                                case 1:
                                    return _List_Cons(_Utils_Tuple2("bottom", "0"), attrs);
                                case 2:
                                    return attrs;
                                default:
                                    return attrs;
                            }
                        }
                        else {
                            if (parent.$ === 1) {
                                return attrs;
                            }
                            else {
                                var parentEl = parent.a;
                                var _v60 = parentEl.p;
                                if (_v60.$ === 1) {
                                    var dir = _v60.a;
                                    var _v61 = $mdgriffith$style_elements$Element$Internal$Render$flexboxVerticalIndividualAlignment_raw(dir, align);
                                    if (_v61.$ === 1) {
                                        return attrs;
                                    }
                                    else {
                                        var a = _v61.a;
                                        return _List_Cons(a, attrs);
                                    }
                                }
                                else {
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
                return _List_Cons(_Utils_Tuple2("flex-shrink", $elm$core$String$fromInt(i)), attrs);
            }
            else {
                if (parent.$ === 1) {
                    return attrs;
                }
                else {
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
                        }
                        else {
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
                        if ((!x.$) && (!x.a.$)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                    var isPercent = function (x) {
                        if ((!x.$) && (x.a.$ === 1)) {
                            return true;
                        }
                        else {
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
                        }
                        else {
                            return false;
                        }
                    }();
                    var _v43 = parentEl.p;
                    if (_v43.$ === 1) {
                        var dir = _v43.a;
                        if (isHorizontal(dir) && isPx(elem.bw)) {
                            return _List_Cons(_Utils_Tuple2("flex-shrink", "0"), attrs);
                        }
                        else {
                            if (isHorizontal(dir) && isPercent(elem.bw)) {
                                return _List_Cons(_Utils_Tuple2("flex-shrink", "0"), attrs);
                            }
                            else {
                                if (isHorizontal(dir) && (!_Utils_eq(elem.bw, $elm$core$Maybe$Nothing))) {
                                    return _List_Cons(_Utils_Tuple2("flex-shrink", "1"), attrs);
                                }
                                else {
                                    if (isHorizontal(dir) && horizontalOverflow) {
                                        return _List_Cons(_Utils_Tuple2("flex-shrink", "1"), attrs);
                                    }
                                    else {
                                        if (isVertical(dir) && isPx(elem.a1)) {
                                            return _List_Cons(_Utils_Tuple2("flex-shrink", "0"), attrs);
                                        }
                                        else {
                                            if (isVertical(dir) && isPercent(elem.a1)) {
                                                return _List_Cons(_Utils_Tuple2("flex-shrink", "0"), attrs);
                                            }
                                            else {
                                                if (isVertical(dir) && (!_Utils_eq(elem.a1, $elm$core$Maybe$Nothing))) {
                                                    return _List_Cons(_Utils_Tuple2("flex-shrink", "1"), attrs);
                                                }
                                                else {
                                                    if (isVertical(dir) && verticalOverflow) {
                                                        return _List_Cons(_Utils_Tuple2("flex-shrink", "1"), attrs);
                                                    }
                                                    else {
                                                        if (isHorizontal(dir) && _Utils_eq(elem.bw, $elm$core$Maybe$Nothing)) {
                                                            return _List_Cons(_Utils_Tuple2("flex-shrink", "1"), attrs);
                                                        }
                                                        else {
                                                            if (isVertical(dir) && _Utils_eq(elem.a1, $elm$core$Maybe$Nothing)) {
                                                                if (!elType.$) {
                                                                    return _List_Cons(_Utils_Tuple2("flex-shrink", "1"), attrs);
                                                                }
                                                                else {
                                                                    var elLayout = elType.a;
                                                                    return _List_Cons(_Utils_Tuple2("flex-shrink", "0"), attrs);
                                                                }
                                                            }
                                                            else {
                                                                return _List_Cons(_Utils_Tuple2("flex-shrink", "0"), attrs);
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
                    }
                    else {
                        return attrs;
                    }
                }
            }
        };
        var position = function (attrs) {
            return _Utils_ap($mdgriffith$style_elements$Element$Internal$Render$calcPosition_raw($elm$core$Maybe$withDefault_raw($mdgriffith$style_elements$Element$Internal$Model$Relative, elem.I), elem.as), attrs);
        };
        var passthrough = function (attrs) {
            var _v40 = elem.aE;
            if (_v40.$ === 1) {
                return attrs;
            }
            else {
                if (!_v40.a) {
                    return _List_Cons(_Utils_Tuple2("pointer-events", "none"), attrs);
                }
                else {
                    return _List_Cons(_Utils_Tuple2("pointer-events", "auto"), attrs);
                }
            }
        };
        var padding = function (attrs) {
            var paddings = $mdgriffith$style_elements$Element$Internal$Render$renderPadding(elem.ah);
            return ($elm$core$List$length(paddings) > 0) ? _Utils_ap(paddings, attrs) : attrs;
        };
        var overflow = function (attrs) {
            var _v38 = elem.ag;
            if (_v38.$ === 1) {
                return attrs;
            }
            else {
                var o = _v38.a;
                switch (o) {
                    case 0:
                        return _List_Cons(_Utils_Tuple2("overflow-x", "auto"), attrs);
                    case 1:
                        return _List_Cons(_Utils_Tuple2("overflow-y", "auto"), attrs);
                    default:
                        return _List_Cons(_Utils_Tuple2("overflow", "auto"), attrs);
                }
            }
        };
        var opacity = function (attrs) {
            var _v37 = elem.aC;
            if (_v37.$ === 1) {
                return attrs;
            }
            else {
                var o = _v37.a;
                return _List_Cons(_Utils_Tuple2("opacity", $elm$core$String$fromFloat(o)), attrs);
            }
        };
        var layout = function (attrs) {
            if (!elType.$) {
                return elem.S ? _List_Cons(_Utils_Tuple2("display", "inline"), attrs) : _List_Cons(_Utils_Tuple2("display", "block"), attrs);
            }
            else {
                var lay = elType.a;
                return _Utils_ap($mdgriffith$style_elements$Style$Internal$Render$Property$layout_raw(elem.S, $mdgriffith$style_elements$Element$Internal$Render$alignLayout_raw(elem.ac, elem.ay, lay)), attrs);
            }
        };
        var horizontal = function (attrs) {
            var _v28 = elem.ac;
            if (_v28.$ === 1) {
                return attrs;
            }
            else {
                var align = _v28.a;
                if (elem.S && _Utils_eq(elType, $mdgriffith$style_elements$Element$Internal$Render$Single)) {
                    switch (align) {
                        case 0:
                            return _List_Cons(_Utils_Tuple2("z-index", "1"), _List_Cons(_Utils_Tuple2("float", "left"), attrs));
                        case 1:
                            return _List_Cons(_Utils_Tuple2("z-index", "1"), _List_Cons(_Utils_Tuple2("float", "right"), attrs));
                        case 2:
                            return attrs;
                        default:
                            return attrs;
                    }
                }
                else {
                    if (elem.S) {
                        return attrs;
                    }
                    else {
                        if (!_Utils_eq(elem.I, $elm$core$Maybe$Nothing)) {
                            switch (align) {
                                case 0:
                                    return _List_Cons(_Utils_Tuple2("left", "0"), attrs);
                                case 1:
                                    return _List_Cons(_Utils_Tuple2("right", "0"), attrs);
                                case 2:
                                    return attrs;
                                default:
                                    return attrs;
                            }
                        }
                        else {
                            if (elType.$ === 1) {
                                return attrs;
                            }
                            else {
                                if (parent.$ === 1) {
                                    return attrs;
                                }
                                else {
                                    var parentEl = parent.a;
                                    var _v33 = parentEl.p;
                                    switch (_v33.$) {
                                        case 0:
                                            switch (align) {
                                                case 0:
                                                    return _List_Cons(_Utils_Tuple2("z-index", "1"), _List_Cons(_Utils_Tuple2("float", "left"), attrs));
                                                case 1:
                                                    return _List_Cons(_Utils_Tuple2("z-index", "1"), _List_Cons(_Utils_Tuple2("float", "right"), attrs));
                                                case 2:
                                                    return attrs;
                                                default:
                                                    return attrs;
                                            }
                                        case 1:
                                            var dir = _v33.a;
                                            var _v35 = $mdgriffith$style_elements$Element$Internal$Render$flexboxHorizontalIndividualAlignment_raw(dir, align);
                                            if (_v35.$ === 1) {
                                                return attrs;
                                            }
                                            else {
                                                var a = _v35.a;
                                                return _List_Cons(a, attrs);
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
            }
            else {
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
                    var _v21 = $elm$core$Maybe$withDefault_raw($mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0), parentEl.M);
                    var topPad = _v21.a;
                    var bottomPad = _v21.c;
                    var paddingAdjustment = (topPad + bottomPad) / 2;
                    var _v22 = parentEl.p;
                    if (_v22.$ === 1) {
                        switch (_v22.a) {
                            case 2:
                                var _v23 = _v22.a;
                                return _Utils_ap($mdgriffith$style_elements$Style$Internal$Render$Property$flexHeight(len), attrs);
                            case 0:
                                var _v24 = _v22.a;
                                return _Utils_ap($mdgriffith$style_elements$Style$Internal$Render$Property$flexHeight(len), attrs);
                            case 1:
                                var _v25 = _v22.a;
                                return hundredPercentOrFill(len) ? _List_Cons(_Utils_Tuple2("height", "auto"), attrs) : _List_Cons(_Utils_Tuple2("height", $mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength_raw(len, paddingAdjustment)), attrs);
                            default:
                                var _v26 = _v22.a;
                                return hundredPercentOrFill(len) ? _List_Cons(_Utils_Tuple2("height", "auto"), attrs) : _List_Cons(_Utils_Tuple2("height", $mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength_raw(len, paddingAdjustment)), attrs);
                        }
                    }
                    else {
                        return _List_Cons(_Utils_Tuple2("height", $mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength_raw(len, paddingAdjustment)), attrs);
                    }
                }
                else {
                    return _List_Cons(_Utils_Tuple2("height", $mdgriffith$style_elements$Style$Internal$Render$Value$length(len)), attrs);
                }
            }
        };
        var gridPos = function (attrs) {
            var _v18 = elem.ap;
            if (_v18.$ === 1) {
                return attrs;
            }
            else {
                var area = _v18.a;
                return _List_Cons(_Utils_Tuple2("grid-area", area), attrs);
            }
        };
        var defaults = { $: 1, a: _Utils_Tuple2("box-sizing", "border-box"), b: _List_Nil };
        var attributes = function () {
            if (maybeElemID.$ === 1) {
                return elem.c;
            }
            else {
                var elemID = maybeElemID.a;
                return ($elm$core$List$length(elem.X) > 0) ? _List_Cons($elm$html$Html$Attributes$classList(A2(stylesheet.X, elemID, elem.X)), elem.c) : _List_Cons($elm$html$Html$Attributes$class(stylesheet.e(elemID)), elem.c);
            }
        }();
        var adjustspacing = function (_v16) {
            var top = _v16.a;
            var right = _v16.b;
            var bottom = _v16.c;
            var left = _v16.d;
            var onScreen = function () {
                var _v14 = elem.I;
                if ((!_v14.$) && (!_v14.a.$)) {
                    var _v15 = _v14.a;
                    return true;
                }
                else {
                    return false;
                }
            }();
            var halved = $mdgriffith$style_elements$Style$Internal$Model$Box_raw(top / 2, right / 2, bottom / 2, left / 2);
            if (onScreen) {
                return $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0);
            }
            else {
                if (parent.$ === 1) {
                    return $mdgriffith$style_elements$Style$Internal$Model$Box_raw(top, right, bottom, left);
                }
                else {
                    var parentEl = parent.a;
                    var _v11 = parentEl.p;
                    if (!_v11.$) {
                        var _v12 = elem.ac;
                        if (_v12.$ === 1) {
                            return (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0) : (elem.S ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, right, 0, 0) : $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, bottom, 0));
                        }
                        else {
                            var align = _v12.a;
                            if ((!elem.S) && _Utils_eq(elem.I, $elm$core$Maybe$Nothing)) {
                                switch (align) {
                                    case 0:
                                        return _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, right, bottom, 0) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast) ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, right, 0, 0) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, right, 0, 0) : $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, right, bottom, 0)));
                                    case 1:
                                        return _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, bottom, left) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast) ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, left) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, left) : $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, bottom, left)));
                                    default:
                                        return (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0) : $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, bottom, 0);
                                }
                            }
                            else {
                                return $mdgriffith$style_elements$Style$Internal$Model$Box_raw(top, right, bottom, left);
                            }
                        }
                    }
                    else {
                        return halved;
                    }
                }
            }
        };
        var spacing = function (attrs) {
            var _v9 = elem.aB;
            if (_v9.$ === 1) {
                return attrs;
            }
            else {
                var space = _v9.a;
                return _List_Cons(_Utils_Tuple2("margin", $mdgriffith$style_elements$Style$Internal$Render$Value$box(adjustspacing(space))), attrs);
            }
        };
        if (elem.bS) {
            return _List_Cons(_VirtualDom_style_raw("display", "none"), attributes);
        }
        else {
            if (elem.az) {
                var expandedProps = function () {
                    if (parent.$ === 1) {
                        return { $: 1, a: _Utils_Tuple2("width", "100%"), b: { $: 1, a: _Utils_Tuple2("height", "100%"), b: { $: 1, a: _Utils_Tuple2("margin", "0"), b: _List_Nil } } };
                    }
                    else {
                        var parentEl = parent.a;
                        var _v2 = parentEl.p;
                        switch (_v2.$) {
                            case 0:
                                var borders = $elm$core$List$concat({ $: 1, a: _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) ? _List_fromArray([
                                        _Utils_Tuple2("border-top-right-radius", "0"),
                                        _Utils_Tuple2("border-top-left-radius", "0")
                                    ]) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) ? _List_fromArray([
                                        _Utils_Tuple2("border-bottom-right-radius", "0"),
                                        _Utils_Tuple2("border-bottom-left-radius", "0")
                                    ]) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast) ? _List_fromArray([
                                        _Utils_Tuple2("border-top-right-radius", "0"),
                                        _Utils_Tuple2("border-top-left-radius", "0"),
                                        _Utils_Tuple2("border-bottom-right-radius", "0"),
                                        _Utils_Tuple2("border-bottom-left-radius", "0")
                                    ]) : _List_Nil)), b: _List_Nil });
                                var _v3 = parentEl.ar;
                                var top = _v3.a;
                                var right = _v3.b;
                                var bottom = _v3.c;
                                var left = _v3.d;
                                return _Utils_ap({ $: 1, a: _Utils_Tuple2("width", "calc(100% + " + ($elm$core$String$fromFloat(right + left) + "px")), b: { $: 1, a: _Utils_Tuple2("margin", "0"), b: { $: 1, a: _Utils_Tuple2("margin-left", $elm$core$String$fromFloat((-1) * left) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-top", $elm$core$String$fromFloat((-1) * top) + "px") : _Utils_Tuple2("margin-top", "0"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-bottom", $elm$core$String$fromFloat((-1) * bottom) + "px") : _Utils_Tuple2("margin-bottom", "0"), b: { $: 1, a: _Utils_Tuple2("padding", $mdgriffith$style_elements$Style$Internal$Render$Value$box($mdgriffith$style_elements$Element$Internal$Render$defaultPadding_raw(elem.ah, parentEl.ar))), b: _List_Nil } } } } } }, borders);
                            case 1:
                                var dir = _v2.a;
                                var flex = _v2.b;
                                var _v4 = function () {
                                    var _v5 = parentEl.M;
                                    if (_v5.$ === 1) {
                                        return $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0);
                                    }
                                    else {
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
                                        return width({ $: 1, a: _Utils_Tuple2("height", "calc(100% + " + ($elm$core$String$fromFloat((top + bottom) - ((parentSpaceTop + parentSpaceBottom) / 2)) + "px")), b: { $: 1, a: _Utils_Tuple2("margin", "0"), b: { $: 1, a: _Utils_Tuple2("margin-top", $elm$core$String$fromFloat(((-1) * top) + (parentSpaceTop / 2)) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-left", $elm$core$String$fromFloat((-1) * left) + "px") : _Utils_Tuple2("margin-left", $elm$core$String$fromFloat(parentSpaceLeft / 2) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-right", $elm$core$String$fromFloat((-1) * right) + "px") : _Utils_Tuple2("margin-right", $elm$core$String$fromFloat(parentSpaceRight / 2) + "px"), b: _List_Nil } } } } });
                                    case 3:
                                        return width({ $: 1, a: _Utils_Tuple2("height", "calc(100% + " + ($elm$core$String$fromFloat((top + bottom) - ((parentSpaceTop + parentSpaceBottom) / 2)) + "px")), b: { $: 1, a: _Utils_Tuple2("margin", "0"), b: { $: 1, a: _Utils_Tuple2("margin-top", $elm$core$String$fromFloat(((-1) * top) + (parentSpaceTop / 2)) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-right", $elm$core$String$fromFloat((-1) * right) + "px") : _Utils_Tuple2("margin-right", $elm$core$String$fromFloat(parentSpaceRight / 2) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-left", $elm$core$String$fromFloat((-1) * left) + "px") : _Utils_Tuple2("margin-left", $elm$core$String$fromFloat(parentSpaceLeft / 2) + "px"), b: _List_Nil } } } } });
                                    case 0:
                                        return height({ $: 1, a: _Utils_Tuple2("width", "calc(100% + " + ($elm$core$String$fromFloat((left + right) - ((parentSpaceLeft + parentSpaceRight) / 2)) + "px")), b: { $: 1, a: _Utils_Tuple2("margin", "0"), b: { $: 1, a: _Utils_Tuple2("margin-left", $elm$core$String$fromFloat(((-1) * left) + (parentSpaceLeft / 2)) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-bottom", $elm$core$String$fromFloat((-1) * top) + "px") : _Utils_Tuple2("margin-bottom", $elm$core$String$fromFloat(parentSpaceBottom / 2) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-top", $elm$core$String$fromFloat((-1) * bottom) + "px") : _Utils_Tuple2("margin-top", $elm$core$String$fromFloat(parentSpaceTop / 2) + "px"), b: _List_Nil } } } } });
                                    default:
                                        return height({ $: 1, a: _Utils_Tuple2("width", "calc(100% + " + ($elm$core$String$fromFloat((left + right) - ((parentSpaceLeft + parentSpaceRight) / 2)) + "px")), b: { $: 1, a: _Utils_Tuple2("margin", "0"), b: { $: 1, a: _Utils_Tuple2("margin-left", $elm$core$String$fromFloat(((-1) * left) + (parentSpaceLeft / 2)) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-top", $elm$core$String$fromFloat((-1) * top) + "px") : _Utils_Tuple2("margin-top", $elm$core$String$fromFloat(parentSpaceTop / 2) + "px"), b: { $: 1, a: (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2("margin-bottom", $elm$core$String$fromFloat((-1) * bottom) + "px") : _Utils_Tuple2("margin-bottom", $elm$core$String$fromFloat(parentSpaceBottom / 2) + "px"), b: _List_Nil } } } } });
                                }
                            default:
                                return _List_Nil;
                        }
                    }
                }();
                return _Utils_ap($elm$core$List$map_raw(function (_v0) {
                    var name = _v0.a;
                    var val = _v0.b;
                    return _VirtualDom_style_raw(name, val);
                }, _Utils_ap(defaults, $elm$core$Basics$composeL_raw(A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, passthrough, gridPos), layout), spacing), opacity), shrink), padding), position), overflow, expandedProps))), attributes);
            }
            else {
                return _Utils_ap($elm$core$List$map_raw(function (_v8) {
                    var name = _v8.a;
                    var val = _v8.b;
                    return _VirtualDom_style_raw(name, val);
                }, $elm$core$Basics$composeL_raw(A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, passthrough, gridPos), layout), spacing), opacity), shrink), width), height), padding), horizontal), vertical), position), overflow, defaults)), attributes);
            }
        }
    }, $mdgriffith$style_elements$Element$Internal$Render$renderAttributes = F6($mdgriffith$style_elements$Element$Internal$Render$renderAttributes_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$renderSyleAttributes = function (styles) {
        return $elm$core$List$map_raw(function (_v0) {
            var name = _v0.a;
            var val = _v0.b;
            return _VirtualDom_style_raw(name, val);
        }, styles);
    };
    var $elm$html$Html$s = _VirtualDom_node("s");
    var $mdgriffith$style_elements$Element$Internal$Render$spacingToMargin = function (attrs) {
        var spaceToMarg = function (a) {
            if (a.$ === 10) {
                var x = a.a;
                var y = a.b;
                return $mdgriffith$style_elements$Element$Internal$Model$Margin_raw(y, x, y, x);
            }
            else {
                var other = a;
                return other;
            }
        };
        return $elm$core$List$map_raw(spaceToMarg, attrs);
    };
    var $elm$html$Html$span = _VirtualDom_node("span");
    var $elm$html$Html$strong = _VirtualDom_node("strong");
    var $elm$html$Html$sub = _VirtualDom_node("sub");
    var $elm$html$Html$sup = _VirtualDom_node("sup");
    var $elm$html$Html$u = _VirtualDom_node("u");
    var $mdgriffith$style_elements$Element$Internal$Render$renderElement_raw = function (parent, stylesheet, order, elm) {
        switch (elm.$) {
            case 0:
                return $elm$html$Html$text("");
            case 5:
                var html = elm.a;
                return html;
            case 1:
                var x = elm.a;
                var forSpacing = function (posAttr) {
                    if (posAttr.$ === 10) {
                        var spaceX = posAttr.a;
                        var spaceY = posAttr.b;
                        return $elm$core$Maybe$Just(_Utils_Tuple2(spaceX, spaceY));
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                };
                var _v1 = function () {
                    if (!parent.$) {
                        var ctxt = parent.a;
                        return $elm$core$Maybe$withDefault_raw($mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0), ctxt.M);
                    }
                    else {
                        return $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0);
                    }
                }();
                var spacingX = _v1.a;
                var spacingY = _v1.b;
                var inline = { $: 1, a: _Utils_Tuple2("width", $elm$core$String$fromFloat(x * spacingX) + "px"), b: { $: 1, a: _Utils_Tuple2("height", $elm$core$String$fromFloat(x * spacingY) + "px"), b: { $: 1, a: _Utils_Tuple2("visibility", "hidden"), b: _List_Nil } } };
                return A2($elm$html$Html$div, $mdgriffith$style_elements$Element$Internal$Render$renderSyleAttributes(inline), _List_Nil);
            case 2:
                var decoration = elm.a.Q;
                var inline = elm.a.S;
                var str = elm.b;
                var attrs = inline ? $mdgriffith$style_elements$Element$Internal$Render$renderSyleAttributes({ $: 1, a: _Utils_Tuple2("display", "inline"), b: _List_Nil }) : $mdgriffith$style_elements$Element$Internal$Render$renderSyleAttributes({ $: 1, a: _Utils_Tuple2("white-space", "pre"), b: { $: 1, a: _Utils_Tuple2("text-overflow", "ellipsis"), b: { $: 1, a: _Utils_Tuple2("overflow", "hidden"), b: { $: 1, a: _Utils_Tuple2("display", "block"), b: _List_Nil } } } });
                switch (decoration) {
                    case 0:
                        return A2($elm$html$Html$span, _List_Cons($elm$html$Html$Attributes$class("el"), attrs), { $: 1, a: $elm$html$Html$text(str), b: _List_Nil });
                    case 1:
                        return $elm$html$Html$text(str);
                    case 2:
                        return A2($elm$html$Html$strong, _List_Cons($elm$html$Html$Attributes$class("el"), attrs), { $: 1, a: $elm$html$Html$text(str), b: _List_Nil });
                    case 3:
                        return A2($elm$html$Html$em, _List_Cons($elm$html$Html$Attributes$class("el"), attrs), { $: 1, a: $elm$html$Html$text(str), b: _List_Nil });
                    case 4:
                        return A2($elm$html$Html$u, _List_Cons($elm$html$Html$Attributes$class("el"), attrs), { $: 1, a: $elm$html$Html$text(str), b: _List_Nil });
                    case 5:
                        return A2($elm$html$Html$s, _List_Cons($elm$html$Html$Attributes$class("el"), attrs), { $: 1, a: $elm$html$Html$text(str), b: _List_Nil });
                    case 6:
                        return A2($elm$html$Html$sup, _List_Cons($elm$html$Html$Attributes$class("el"), attrs), { $: 1, a: $elm$html$Html$text(str), b: _List_Nil });
                    default:
                        return A2($elm$html$Html$sub, _List_Cons($elm$html$Html$Attributes$class("el"), attrs), { $: 1, a: $elm$html$Html$text(str), b: _List_Nil });
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
                    }
                    else {
                        return false;
                    }
                };
                var childHtml = function () {
                    if (absolutelyPositioned.$ === 1) {
                        return { $: 1, a: $mdgriffith$style_elements$Element$Internal$Render$renderElement_raw($elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast, child), b: _List_Nil };
                    }
                    else {
                        var absol = absolutelyPositioned.a;
                        return $elm$core$List$map_raw(A3($mdgriffith$style_elements$Element$Internal$Render$renderElement, $elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast), _List_Cons(child, absol));
                    }
                }();
                var attributes = function () {
                    if (parent.$ === 1) {
                        return $mdgriffith$style_elements$Element$Internal$Render$spacingToMargin(attrs);
                    }
                    else {
                        var ctxt = parent.a;
                        var _v6 = ctxt.M;
                        if (_v6.$ === 1) {
                            return (parentTextLayout(ctxt.p) || $elm$core$List$any_raw($elm$core$Basics$eq($mdgriffith$style_elements$Element$Internal$Model$Inline), attrs)) ? $mdgriffith$style_elements$Element$Internal$Render$spacingToMargin(attrs) : attrs;
                        }
                        else {
                            var _v7 = _v6.a;
                            var top = _v7.a;
                            var right = _v7.b;
                            var bottom = _v7.c;
                            var left = _v7.d;
                            return (parentTextLayout(ctxt.p) || $elm$core$List$any_raw($elm$core$Basics$eq($mdgriffith$style_elements$Element$Internal$Model$Inline), attrs)) ? _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Margin_raw(top, right, bottom, left), $mdgriffith$style_elements$Element$Internal$Render$spacingToMargin(attrs)) : _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Margin_raw(top, right, bottom, left), attrs);
                        }
                    }
                }();
                var htmlAttrs = $mdgriffith$style_elements$Element$Internal$Render$renderAttributes_raw($mdgriffith$style_elements$Element$Internal$Render$Single, order, style, parent, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$gather(attributes));
                return A3($elm$html$Html$node, node, _List_Cons($elm$html$Html$Attributes$class("el"), htmlAttrs), childHtml);
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
                    }
                    else {
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
                            return $elm$core$Maybe$Just($mdgriffith$style_elements$Element$Internal$Render$defaultPadding_raw($mdgriffith$style_elements$Style$Internal$Model$Box_raw(t, r, b, l), $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0)));
                        case 14:
                            var t = posAttr.a;
                            var r = posAttr.b;
                            var b = posAttr.c;
                            var l = posAttr.d;
                            return $elm$core$Maybe$Just($mdgriffith$style_elements$Style$Internal$Model$Box_raw(t, r, b, l));
                        default:
                            return $elm$core$Maybe$Nothing;
                    }
                };
                var findSpacing = function (posAttr) {
                    if (posAttr.$ === 10) {
                        var x = posAttr.a;
                        var y = posAttr.b;
                        return $elm$core$Maybe$Just($mdgriffith$style_elements$Style$Internal$Model$Box_raw(y, x, y, x));
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                };
                var forSpacing = A2($elm$core$Basics$composeL, function (x) {
                    return !_Utils_eq(x, $elm$core$Maybe$Nothing);
                }, findSpacing);
                var clearfix = function (allAttrs) {
                    if (!layout.$) {
                        var fix = layout.a;
                        return fix ? _List_Cons($elm$html$Html$Attributes$class("clearfix"), allAttrs) : allAttrs;
                    }
                    else {
                        return allAttrs;
                    }
                };
                var attributes = function () {
                    if (parent.$ === 1) {
                        return attrs;
                    }
                    else {
                        var ctxt = parent.a;
                        var _v18 = ctxt.M;
                        if (_v18.$ === 1) {
                            return attrs;
                        }
                        else {
                            var _v19 = _v18.a;
                            var t = _v19.a;
                            var r = _v19.b;
                            var b = _v19.c;
                            var l = _v19.d;
                            return _List_Cons($mdgriffith$style_elements$Element$Internal$Model$Margin_raw(t, r, b, l), attrs);
                        }
                    }
                }();
                var htmlAttrs = clearfix($mdgriffith$style_elements$Element$Internal$Render$renderAttributes_raw($mdgriffith$style_elements$Element$Internal$Render$LayoutElement(layout), order, style, parent, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$gather(attributes)));
                var padding = function () {
                    var _v16 = $elm$core$List$head($elm$core$List$filterMap_raw(forPadding, attributes));
                    if (_v16.$ === 1) {
                        return $mdgriffith$style_elements$Style$Internal$Model$Box_raw(0, 0, 0, 0);
                    }
                    else {
                        var pad = _v16.a;
                        return pad;
                    }
                }();
                var inherit = {
                    p: layout,
                    ar: padding,
                    M: $elm$core$List$head($elm$core$List$filterMap_raw(findSpacing, attrs))
                };
                var adjacentFlexboxCorrection = function (htmlNode) {
                    if (parent.$ === 1) {
                        return htmlNode;
                    }
                    else {
                        var p = parent.a;
                        return (isFlexbox(p.p) && isFlexbox(layout)) ? htmlNode : htmlNode;
                    }
                };
                var _v10 = $elm$core$List$partition_raw(forSpacing, attrs);
                var spacingAttr = _v10.a;
                var _v11 = $elm$core$List$partition_raw(function (attr) {
                    return _Utils_eq(attr, $mdgriffith$style_elements$Element$Internal$Model$HAlign(2)) || _Utils_eq(attr, $mdgriffith$style_elements$Element$Internal$Model$VAlign(2));
                }, attrs);
                var centeredProps = _v11.a;
                var others = _v11.b;
                if (!children.$) {
                    var childList = children.a;
                    var childHtml = $elm$core$List$indexedMap_raw(F2(function (i, child) {
                        return $mdgriffith$style_elements$Element$Internal$Render$renderElement_raw($elm$core$Maybe$Just(inherit), stylesheet, $mdgriffith$style_elements$Element$Internal$Render$detectOrder_raw(childList, i), child);
                    }), childList);
                    var allChildren = function () {
                        if (absolutelyPositioned.$ === 1) {
                            return childHtml;
                        }
                        else {
                            var absol = absolutelyPositioned.a;
                            return _Utils_ap(childHtml, $elm$core$List$map_raw(A3($mdgriffith$style_elements$Element$Internal$Render$renderElement, $elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast), absol));
                        }
                    }();
                    return adjacentFlexboxCorrection(A3($elm$html$Html$node, node, _List_Cons($elm$html$Html$Attributes$class("el"), htmlAttrs), allChildren));
                }
                else {
                    var keyed = children.a;
                    var childHtml = $elm$core$List$indexedMap_raw(F2(function (i, _v14) {
                        var key = _v14.a;
                        var child = _v14.b;
                        return _Utils_Tuple2(key, $mdgriffith$style_elements$Element$Internal$Render$renderElement_raw($elm$core$Maybe$Just(inherit), stylesheet, $mdgriffith$style_elements$Element$Internal$Render$detectOrder_raw(keyed, i), child));
                    }), keyed);
                    return adjacentFlexboxCorrection(A3($elm$html$Html$Keyed$node, node, _List_Cons($elm$html$Html$Attributes$class("el"), htmlAttrs), childHtml));
                }
        }
    }, $mdgriffith$style_elements$Element$Internal$Render$renderElement = F4($mdgriffith$style_elements$Element$Internal$Render$renderElement_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$render_raw = function (stylesheet, elm) {
        var _v0 = $mdgriffith$style_elements$Element$Internal$Adjustments$apply(elm);
        var adjusted = _v0.a;
        var onScreen = _v0.b;
        var fixedScreenElements = function () {
            if (onScreen.$ === 1) {
                return _List_Nil;
            }
            else {
                var screenEls = onScreen.a;
                return $elm$core$List$map_raw(A3($mdgriffith$style_elements$Element$Internal$Render$renderElement, $elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast), screenEls);
            }
        }();
        return _List_Cons($mdgriffith$style_elements$Element$Internal$Render$renderElement_raw($elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast, adjusted), fixedScreenElements);
    }, $mdgriffith$style_elements$Element$Internal$Render$render = F2($mdgriffith$style_elements$Element$Internal$Render$render_raw);
    var $mdgriffith$style_elements$Element$Internal$Render$viewport_raw = function (stylesheet, elm) {
        return A2($elm$html$Html$div, { $: 1, a: $elm$html$Html$Attributes$class("style-elements"), b: { $: 1, a: _VirtualDom_style_raw("width", "100%"), b: { $: 1, a: _VirtualDom_style_raw("height", "100%"), b: _List_Nil } } }, _Utils_ap($mdgriffith$style_elements$Element$Internal$Render$embed_raw(true, stylesheet), $mdgriffith$style_elements$Element$Internal$Render$render_raw(stylesheet, elm)));
    }, $mdgriffith$style_elements$Element$Internal$Render$viewport = F2($mdgriffith$style_elements$Element$Internal$Render$viewport_raw);
    var $mdgriffith$style_elements$Element$viewport = $mdgriffith$style_elements$Element$Internal$Render$viewport;
    var $elm_explorations$benchmark$Benchmark$Runner$App$view = function (model) {
        var body = $elm_explorations$benchmark$Benchmark$done(model) ? $mdgriffith$style_elements$Element$Internal$Model$mapAll_raw($elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$App$ReportClass, $elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$Report$view($elm_explorations$benchmark$Benchmark$Reporting$fromBenchmark(model))) : $mdgriffith$style_elements$Element$Internal$Model$mapAll_raw($elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$App$InProgressClass, $elm$core$Basics$identity, $elm_explorations$benchmark$Benchmark$Runner$InProgress$view($elm_explorations$benchmark$Benchmark$Reporting$fromBenchmark(model)));
        return $mdgriffith$style_elements$Element$Internal$Render$viewport_raw($mdgriffith$style_elements$Style$styleSheet($elm_explorations$benchmark$Benchmark$Runner$App$styles), $mdgriffith$style_elements$Element$row_raw($elm_explorations$benchmark$Benchmark$Runner$App$Page, { $: 1, a: $mdgriffith$style_elements$Element$Attributes$width($mdgriffith$style_elements$Element$Attributes$fill), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$minHeight($mdgriffith$style_elements$Element$Attributes$fill), b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$center, b: { $: 1, a: $mdgriffith$style_elements$Element$Attributes$verticalCenter, b: _List_Nil } } } }, { $: 1, a: $mdgriffith$style_elements$Element$el_raw($elm_explorations$benchmark$Benchmark$Runner$App$Wrapper, _List_fromArray([
                $mdgriffith$style_elements$Element$Attributes$maxWidth($mdgriffith$style_elements$Element$Attributes$px(800)),
                $mdgriffith$style_elements$Element$Attributes$padding(60)
            ]), body), b: _List_Nil }));
    };
    var $elm_explorations$benchmark$Benchmark$Runner$program = function (benchmark) {
        return $elm$browser$Browser$element({
            a4: $elm_explorations$benchmark$Benchmark$Runner$App$init(benchmark),
            b6: $elm$core$Basics$always($elm$core$Platform$Sub$none),
            bt: $elm_explorations$benchmark$Benchmark$Runner$App$update,
            bu: $elm_explorations$benchmark$Benchmark$Runner$App$view
        });
    };
    var $author$project$Main$addMyType_raw = function (mine, sum) {
        switch (mine.$) {
            case 0:
                return sum;
            case 1:
                var i = mine.a;
                return i + sum;
            default:
                return sum;
        }
    }, $author$project$Main$addMyType = F2($author$project$Main$addMyType_raw);
    var $elm_explorations$benchmark$Benchmark$Status$Cold = { $: 0 };
    var $elm_explorations$benchmark$Benchmark$LowLevel$operation = function (fn) {
        return _Benchmark_operation(fn);
    };
    var $elm_explorations$benchmark$Benchmark$benchmark_raw = function (name, fn) {
        return $elm_explorations$benchmark$Benchmark$Benchmark$Single_raw(name, $elm_explorations$benchmark$Benchmark$LowLevel$operation(fn), $elm_explorations$benchmark$Benchmark$Status$Cold);
    }, $elm_explorations$benchmark$Benchmark$benchmark = F2($elm_explorations$benchmark$Benchmark$benchmark_raw);
    var $elm_explorations$benchmark$Benchmark$describe = $elm_explorations$benchmark$Benchmark$Benchmark$Group;
    var $author$project$Main$One = function (a) { return { $: 1, a, b: null }; };
    var $author$project$Main$Two_raw = function (a, b) { return { $: 2, a, b }; }, $author$project$Main$Two = F2($author$project$Main$Two_raw);
    var $author$project$Main$Zero = { $: 0, a: null, b: null };
    var $author$project$Main$values = { $: 1, a: $author$project$Main$Zero, b: { $: 1, a: $author$project$Main$One(5), b: { $: 1, a: $author$project$Main$Two_raw("Two", "two"), b: _List_Nil } } };
    var $author$project$Main$many = $elm$core$List$concat($elm$core$List$repeat_raw(1000, $author$project$Main$values));
    var $author$project$Main$updateRecord_raw = function (attr, record) {
        return _Utils_update(record, { aO: 87 });
    }, $author$project$Main$updateRecord = F2($author$project$Main$updateRecord_raw);
    var $author$project$Main$suite = $elm_explorations$benchmark$Benchmark$Benchmark$Group_raw("Benchmarks", { $: 1, a: $elm_explorations$benchmark$Benchmark$benchmark_raw("sum 1000 entities in a list", function (_v0) {
            return $elm$core$List$foldl_raw($author$project$Main$addMyType, 0, $author$project$Main$many);
        }), b: { $: 1, a: $elm_explorations$benchmark$Benchmark$benchmark_raw("1000 record updates", function (_v1) {
                return $elm$core$List$foldl_raw($author$project$Main$updateRecord, { aO: 1, br: 3, bs: 2 }, $author$project$Main$many);
            }), b: _List_Nil } });
    var $author$project$Main$main = $elm_explorations$benchmark$Benchmark$Runner$program($author$project$Main$suite);
    _Platform_export({ "Main": { "init": $author$project$Main$main($elm$json$Json$Decode$succeed(0))(0) } });
}(this));
