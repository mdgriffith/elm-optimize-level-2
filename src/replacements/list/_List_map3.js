var _List_map3 = F4(function(f, xs, ys, zs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
    var next = _List_Cons(A3(f, xs.a, ys.a, zs.a), _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
});