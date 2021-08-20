function F5(fun) {
    var curried = function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
    };
    curried.a5 = fun;
    return curried;
}
