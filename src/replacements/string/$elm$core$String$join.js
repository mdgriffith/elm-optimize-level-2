var $elm$core$String$join = F2(function (sep, strs) {
  if (!strs.b) {
    return '';
  }
  var acc = '' + strs.a;
  strs = strs.b;

  for (; strs.b; strs = strs.b) {
    acc = '' + acc + sep + strs.a;
  }

  return acc;
});
