function F3(fun) {
    var curried = function(a) {
        return function(b) { return function(c) { return fun(a, b, c); }; };
    };
    curried.a3 = fun;
    return curried;
}
