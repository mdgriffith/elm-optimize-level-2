var $elm$core$List$map4 = F5(function (f, ws, xs, ys, zs) {
    if (ws.b && xs.b && ys.b && zs.b) {
	      var result = _List_Cons(A4(f, ws.a, xs.a, ys.a, zs.a), _List_Nil);
	      var final = result;
        ws = ws.b;
	      xs = xs.b;
	      ys = ys.b;
	      zs = zs.b;
	      for (;ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
	          final.b = _List_Cons(A4(f, ws.a, xs.a, ys.a, zs.a), _List_Nil);
	          final = final.b;
	      }
	      return result;
    } else {
	      return _List_Nil;
    }
});
