function F2(fun) {
    var curried = function(a) { return function(b) { return fun(a,b); }; };
    curried.a2 = fun;
    return curried;
}
