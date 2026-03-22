import ts from 'typescript';
import { createFunctionInlineTransformer } from '../src/transforms/inlineWrappedFunctions';
import { createPassUnwrappedFunctionsTransformer } from '../src/transforms/passUnwrappedFunctions';

/**
 * Regression test for an arity mismatch bug discovered via elm-open-api-cli.
 *
 * The `passUnwrappedFunctions` transform creates an `_unwrapped` variant of
 * functions whose body uses `A2(func, ...)`. The unwrapped body replaces that
 * with a direct `func(a, b)` call. At call sites, it strips F-wrappers from
 * the corresponding argument.
 *
 * The bug: the transform stripped F-wrappers unconditionally, without checking
 * that the wrapper arity matched the internal A-call arity. When an F3 arg was
 * passed to a function whose body used A2, the F3 was stripped to a raw 3-arg
 * function, but `func(a, b)` was called with only 2 args — leaving the 3rd
 * param undefined and breaking partial-application semantics.
 *
 * The code below is verbatim from `elm make --optimize` output of the
 * wolfadex/elm-open-api-cli project (CliMonad module). The function
 * `$author$project$CliMonad$map2$` uses `A2(f, xr, yr)` in its body (arity 2).
 * It is called at some sites with `F2(...)` (arity match, safe to unwrap) and
 * at other sites with `F3(...)` (arity mismatch, must NOT unwrap).
 */

function applyTransforms(code: string): string {
  const source = ts.createSourceFile('elm.js', code, ts.ScriptTarget.ES2018);
  const printer = ts.createPrinter();
  const { transformed } = ts.transform(source, [
    createFunctionInlineTransformer(false, false, 'for tests'),
    createPassUnwrappedFunctionsTransformer(() => undefined),
  ]);
  return printer.printFile(transformed[0]);
}

function evalSafely(code: string): any {
  const runtime = `
    function F2(fun) {
      var f = function(a) { return function(b) { return fun(a, b); }; };
      f.f = fun;
      f.a2 = fun;
      return f;
    }
    function F3(fun) {
      var f = function(a) { return function(b) { return function(c) { return fun(a, b, c); }; }; };
      f.f = fun;
      f.a3 = fun;
      return f;
    }
    function A2(fun, a, b) {
      return fun.a2 ? fun.a2(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
      return fun.a3 ? fun.a3(a, b, c) : fun(a)(b)(c);
    }
    function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
    var $elm$core$Result$Ok = function(a) { return { $: 0, a: a }; };
    var $elm$core$Result$Err = function(a) { return { $: 1, a: a }; };
  `;
  return new Function(runtime + '\n' + code)();
}

test('passUnwrappedFunctions must not unwrap F3 at call sites where the body uses A2', () => {
  // Verbatim from elm-open-api-cli `elm make --optimize` output.
  //
  // $author$project$CliMonad$map2$ uses A2(f, xr, yr) — arity 2.
  //
  // Call site 1 (line 50676 in original): F2 arg — safe to unwrap.
  // Call site 2 (line 52820 in original): F3 arg — must NOT unwrap. The F3
  //   function takes (importFrom, ann, rec) where `rec` is the return-type
  //   value; A2(F3(fn), a, b) correctly partially applies, returning a
  //   function `rec -> result`.
  const initialCode = `
    // Verbatim from elm-open-api-cli compiled output (CliMonad.map2$):
    var $author$project$CliMonad$map2$ = function (f, _v0, _v1) {
      var x = _v0;
      var y = _v1;
      return F2(
        function (input, cache) {
          var _v2 = A2(x, input, cache);
          if (_v2.$ === 1) {
            var e = _v2.a;
            return $elm$core$Result$Err(e);
          } else {
            var _v3 = _v2.a;
            var xr = _v3.a;
            var xo = _v3.b;
            var cache2 = _v3.c;
            var _v4 = A2(y, input, cache2);
            if (_v4.$ === 1) {
              var e = _v4.a;
              return $elm$core$Result$Err(e);
            } else {
              var _v5 = _v4.a;
              var yr = _v5.a;
              var yo = _v5.b;
              var cache3 = _v5.c;
              return $elm$core$Result$Ok(
                _Utils_Tuple3(
                  A2(f, xr, yr),
                  { merged: true },
                  cache3));
            }
          }
        });
    };
    var $author$project$CliMonad$map2 = F3($author$project$CliMonad$map2$);

    // Stub computations that return Ok(Tuple3(value, output, cache))
    var succeed = function(x) {
      return F2(function(_env, cache) {
        return $elm$core$Result$Ok(_Utils_Tuple3(x, {}, cache));
      });
    };

    // Verbatim call site pattern from SchemaUtils.typeToDecoder (line 50676):
    // F2 arg — arity matches A2 usage, safe to unwrap.
    var res1 = $author$project$CliMonad$map2$(
      F2(
        function (lDecoder, rDecoder) {
          return lDecoder + "+" + rDecoder;
        }),
      succeed("left"),
      succeed("right"));

    // Verbatim call site pattern from CliMonad.refToEncoder (line 52820):
    // F3 arg — arity does NOT match A2 usage. A2(F3(fn), a, b) must partially
    // apply, returning function(rec) { return fn(a, b, rec); }.
    var res2 = $author$project$CliMonad$map2$(
      F3(
        function (importFrom, ann, rec) {
          return importFrom + "." + ann + "(" + rec + ")";
        }),
      succeed("MyApi"),
      succeed("User"));

    // A third F2 call site to ensure the transform has enough evidence to fire.
    var res3 = $author$project$CliMonad$map2$(
      F2(
        function (a, b) {
          return a + b;
        }),
      succeed("x"),
      succeed("y"));

    // Execute res1 (F2 case) — should return a string directly
    var r1 = A2(res1, {}, {});
    if (r1.$ !== 0) return "r1_err";
    if (r1.a.a !== "left+right") return "r1_wrong:" + r1.a.a;

    // Execute res2 (F3 case) — A2(F3(fn), a, b) returns a FUNCTION (partial application)
    var r2 = A2(res2, {}, {});
    if (r2.$ !== 0) return "r2_err";
    if (typeof r2.a.a !== "function") return "r2_not_fn:" + typeof r2.a.a + ":" + String(r2.a.a);
    // Apply the 3rd arg to complete the partial application
    var finalResult = r2.a.a("record");
    if (finalResult !== "MyApi.User(record)") return "r2_wrong:" + finalResult;

    return "PASS";
  `;

  expect(evalSafely(initialCode)).toBe('PASS');

  const transformed = applyTransforms(initialCode);
  expect(evalSafely(transformed)).toBe('PASS');
});
