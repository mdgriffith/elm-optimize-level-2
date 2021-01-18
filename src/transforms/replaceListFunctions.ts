import ts, { isIdentifier } from 'typescript';
import { ast } from './utils/create';

const $elm$core$List$map = `
var $elm$core$List$map = F2(function (f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b; xs = xs.b) {
    var next = _List_Cons(f(xs.a), _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
});
`;

const $elm$core$List$indexedMap = `
var $elm$core$List$indexedMap = F2(function (f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (var i = 0; xs.b; i++, xs = xs.b) {
    var next = _List_Cons(A2(f, i, xs.a), _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
});
`;

const $elm$core$List$filter = `
var $elm$core$List$filter = F2(function (f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b; xs = xs.b) {
    if (f(xs.a)) {
      var next = _List_Cons(xs.a, _List_Nil);
      end.b = next;
      end = next;
    }
  }
  return tmp.b;
});
`;

const $elm$core$List$append = `
var $elm$core$List$append = F2(function (xs, ys) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b; xs = xs.b) {
    var next = _List_Cons(xs.a, _List_Nil);
    end.b = next;
    end = next;
  }
  end.b = ys;

  return tmp.b;
});
`;

const $elm$core$List$concat = `
var $elm$core$List$concat = function (lists) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  if (!lists.b) {
    return _List_Nil;
  }
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
`;

const $elm$core$List$intersperse = `
var $elm$core$List$intersperse = F2(function (sep, xs) {
  if (!xs.b) {
    return xs;
  }
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;

  end.b = _List_Cons(xs.a, _List_Nil);
  end = end.b;
  xs = xs.b;

  for (; xs.b; xs = xs.b) {
    var valNode = _List_Cons(xs.a, _List_Nil);
    var sepNode = _List_Cons(sep, valNode);
    end.b = sepNode;
    end = valNode;
  }

  return tmp.b;
});
`;

const $elm$core$List$partition = `
var $elm$core$List$partition = F2(function (f, xs) {
  var truesHead = _List_Cons(undefined, _List_Nil);
  var falsesHead = _List_Cons(undefined, _List_Nil);
  var truesEnd = truesHead;
  var falsesEnd = falsesHead;
  for (; xs.b; xs = xs.b) {
    var next = _List_Cons(xs.a, _List_Nil);
    if (f(xs.a)) {
      truesEnd.b = next;
      truesEnd = next;
    } else {
      falsesEnd.b = next;
      falsesEnd = next;
    }
  }
  return _Utils_Tuple2(truesHead.b, falsesHead.b);
});
`;

const $elm$core$List$unzip = `
var $elm$core$List$unzip = function (pairs) {
  var aHead = _List_Cons(undefined, _List_Nil);
  var bHead = _List_Cons(undefined, _List_Nil);
  var aEnd = aHead;
  var bEnd = bHead;
  for (; pairs.b; pairs = pairs.b) {
    var tuple = pairs.a;

    var aNext = _List_Cons(tuple.a, _List_Nil);
    aEnd.b = aNext;
    aEnd = aNext;

    var bNext = _List_Cons(tuple.b, _List_Nil);
    bEnd.b = bNext;
    bEnd = bNext;
  }
  return _Utils_Tuple2(aHead.b, bHead.b);
};
`;


const replacements = {
  $elm$core$List$map,
  $elm$core$List$indexedMap,
  $elm$core$List$filter,
  $elm$core$List$append,
  $elm$core$List$concat,
  $elm$core$List$intersperse,
  $elm$core$List$partition,
  $elm$core$List$unzip,
};

export const replaceListFunctions: ts.TransformerFactory<ts.SourceFile> = (
  context
) => (sourceFile) => {
  const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
    if (ts.isVariableStatement(node)) {
      const name = node.declarationList.declarations[0]?.name;
      if (isIdentifier(name) && name.text in replacements) {
        const key = name.text as keyof typeof replacements;
        return ast(replacements[key]);
      }
    }
    return ts.visitEachChild(node, visitor, context);
  };

  return ts.visitNode(sourceFile, visitor);
};
