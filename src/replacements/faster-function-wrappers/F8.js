function F8(fun) {
    var curried = function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return function(f) {
            return function(g) { return function(h) {
                return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
    };
    curried.a8 = fun;
    return curried;
}
