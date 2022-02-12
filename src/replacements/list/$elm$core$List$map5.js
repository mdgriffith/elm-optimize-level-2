var $elm$core$List$map5 = F6(function (f, vs, ws, xs, ys, zs) {
    if (vs.b && ws.b && xs.b && ys.b && zs.b) {
	      var result = _List_Cons(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a), _List_Nil);
	      var final = result;
        vs = vs.b;
        ws = ws.b;
	      xs = xs.b;
	      ys = ys.b;
	      zs = zs.b;
	      for (; vs.b && ws.b && xs.b && ys.b && zs.b
             ; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b
            ) {
	          final.b = _List_Cons(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a), _List_Nil);
	          final = final.b;
	      }
	      return result;
    } else {
	      return _List_Nil;
    }
});
