function F9(fun) {
    var curried = function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return function(f) {
            return function(g) { return function(h) { return function(i) {
                return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
    };
    curried.a9 = fun;
    return curried;
}
