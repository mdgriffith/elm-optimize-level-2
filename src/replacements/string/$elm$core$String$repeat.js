var $elm$core$String$repeat = F2(
  function (n, chunk) {
    var result = '';
    repeat:
    while (true) {
      if (n <= 0) {
        return result;
      } else {
        result = (!(n & 1)) ? result : (result + chunk);
        n = n >> 1;
        chunk = chunk + chunk;
        continue repeat;
      }
    }
  });