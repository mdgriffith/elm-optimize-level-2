function A7(fun, a, b, c, d, e, f, g) {
    return fun.a7 ? fun.a7(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
