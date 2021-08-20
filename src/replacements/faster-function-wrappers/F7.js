function F7(fun) {
    var curried = function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return function(f) {
            return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
    };
    curried.a7 = fun;
    return curried;
}
