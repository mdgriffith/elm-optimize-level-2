var $elm$core$List$filterMap = F2(function (f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b; xs = xs.b) {
    var m = f(xs.a);
    if (!m.$) {
      var next = _List_Cons(m.a, _List_Nil);
      end.b = next;
      end = next;
    }
  }
  return tmp.b;
});