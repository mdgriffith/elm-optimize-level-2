function A2(fun, a, b) {
    return fun.a2 ? fun.a2(a, b) : fun(a)(b);
}
