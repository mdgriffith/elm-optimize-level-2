function _VirtualDom_organizeFacts_usingArray(factArray) {
  for (var i = 0, facts = {}; i < factArray.length; i++) {
    var entry = factArray[i];

    var tag = entry.$;
    var key = entry.n;
    var value = entry.o;

    if (tag === "a2") {
      key === "className"
        ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
        : (facts[key] = _Json_unwrap(value));

      continue;
    }

    var subFacts = facts[tag] || (facts[tag] = {});
    tag === "a3" && key === "class"
      ? _VirtualDom_addClass(subFacts, key, value)
      : (subFacts[key] = value);
  }

  return facts;
}

function _VirtualDom_organizeFacts(factList) {
  if (Array.isArray(factList)) {
    return _VirtualDom_organizeFacts_usingArray(factList);
  }

  for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
  {
    var entry = factList.a;

    var tag = entry.$;
    var key = entry.n;
    var value = entry.o;

    if (tag === "a2") {
      key === "className"
        ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
        : (facts[key] = _Json_unwrap(value));

      continue;
    }

    var subFacts = facts[tag] || (facts[tag] = {});
    tag === "a3" && key === "class"
      ? _VirtualDom_addClass(subFacts, key, value)
      : (subFacts[key] = value);
  }

  return facts;
}