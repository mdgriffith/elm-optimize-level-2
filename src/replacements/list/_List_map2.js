var _List_map2 = F3(function(f, xs, ys) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b && ys.b; xs = xs.b, ys = ys.b) {
    var next = _List_Cons(A2(f, xs.a, ys.a), _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
});