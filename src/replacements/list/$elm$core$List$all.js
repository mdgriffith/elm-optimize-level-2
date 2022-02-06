var $elm$core$List$all = F2(function (isOkay, list) {
  all: while (true) {
    if (!list.b) {
      return true;
    }
    else {
      var x = list.a;
      if (!isOkay(x)) {
        return false;
      }
      list = list.b;
      continue all;
    }
  }
});