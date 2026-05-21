var _VirtualDom_nodeNS_usingArray = (namespace, tag, factList, kids) => {
  for (var i = 0, descendantsCount = kids.length; i < kids.length; i++) {
    descendantsCount += kids[i].b || 0;
  }

  return {
    $: 1,
    c: tag,
    d: _VirtualDom_organizeFacts(factList),
    e: kids,
    f: namespace,
    b: descendantsCount,
  };
}, _VirtualDom_nodeNS = F2(function (namespace, tag) {
  return F2(function (factList, kidList) {
    if (Array.isArray(kidList)) {
      return _VirtualDom_nodeNS_usingArray(namespace, tag, factList, kidList);
    }

    for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
    {
      var kid = kidList.a;
      descendantsCount += kid.b || 0;
      kids.push(kid);
    }
    descendantsCount += kids.length;

    return {
      $: 1,
      c: tag,
      d: _VirtualDom_organizeFacts(factList),
      e: kids,
      f: namespace,
      b: descendantsCount,
    };
  });
});