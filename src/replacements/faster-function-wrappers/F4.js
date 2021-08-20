function F4(fun) {
    var curried = function(a) { return function(b) { return function(c) {
        return function(d) { return fun(a, b, c, d); }; }; };
    };
    curried.a4 = fun;
    return curried;
}
