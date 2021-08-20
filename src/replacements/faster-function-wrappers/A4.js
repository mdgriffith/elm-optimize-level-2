function A4(fun, a, b, c, d) {
    return fun.a4 ? fun.a4(a, b, c, d) : fun(a)(b)(c)(d);
}
