var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
    var next = _List_Cons(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a), _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
});