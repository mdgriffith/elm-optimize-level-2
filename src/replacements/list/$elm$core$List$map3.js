var $elm$core$List$map3 = F4(function (f, xs, ys, zs) {
  if (xs.b && ys.b && zs.b) {
	  var result = _List_Cons(A3(f, xs.a, ys.a, zs.a), _List_Nil);
	  var final = result;
	  xs = xs.b;
	  ys = ys.b;
	  zs = zs.b;
	  for (;xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
	    final.b = _List_Cons(A3(f, xs.a, ys.a, zs.a), _List_Nil);
	    final = final.b;
	  }
	  return result;
  } else {
	  return _List_Nil;
  }
});
