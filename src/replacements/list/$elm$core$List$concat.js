var $elm$core$List$concat = function (lists) {
  if (!lists.b) {
    return _List_Nil;
  }
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; lists.b.b; lists = lists.b) {
    var xs = lists.a;
    for (; xs.b; xs = xs.b) {
      var next = _List_Cons(xs.a, _List_Nil);
      end.b = next;
      end = next;
    }
  }
  end.b = lists.a;

  return tmp.b;
};
