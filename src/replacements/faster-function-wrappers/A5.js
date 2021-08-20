function A5(fun, a, b, c, d, e) {
    return fun.a5 ? fun.a5(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
