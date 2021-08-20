function A8(fun, a, b, c, d, e, f, g, h) {
    return fun.a8 ? fun.a8(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
