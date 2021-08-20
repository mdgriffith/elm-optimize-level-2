function A6(fun, a, b, c, d, e, f) {
    return fun.a6 ? fun.a6(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
