function A3(fun, a, b, c) {
    return fun.a3 ? fun.a3(a, b, c) : fun(a)(b)(c);
}
