function A9(fun, a, b, c, d, e, f, g, h, i) {
    return fun.a9 ? fun.a9(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}
