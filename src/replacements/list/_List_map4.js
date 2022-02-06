var _List_map4 = F5(function(f, ws, xs, ys, zs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
    var next = _List_Cons(A4(f, ws.a, xs.a, ys.a, zs.a), _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
});