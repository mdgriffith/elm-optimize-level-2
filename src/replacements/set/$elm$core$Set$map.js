var $elm$core$Set$map = F2(
  function (func, set) {
    return A3(
      $elm$core$Set$foldl,
      F2(
        function (x, acc) {
          return A2(
            $elm$core$Set$insert,
            func(x),
            acc);
        }),
      $elm$core$Set$empty,
      set);
  });