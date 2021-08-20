function F6(fun) {
    var curried = function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return function(f) {
            return fun(a, b, c, d, e, f); }; }; }; }; };
    };
    curried.a6 = fun;
    return curried;
}
