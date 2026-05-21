var $elm$core$List$map2 = F3(function (f, xs, ys) {
	if (xs.b && ys.b) {
	  var result = _List_Cons(A2(f, xs.a, ys.a), _List_Nil);
	  var final = result;
	  xs = xs.b;
	  ys = ys.b;
	  for (;xs.b && ys.b; xs = xs.b, ys = ys.b) {
	    final.b = _List_Cons(A2(f, xs.a, ys.a), _List_Nil);
	    final = final.b;
	  }
	  return result;
	} else {
	  return _List_Nil;
	}
});
