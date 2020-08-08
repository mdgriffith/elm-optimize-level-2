import ts from 'typescript';

const newVDomNode = `_VirtualDom_node = F3(function (tag, factList, kidList) {
    for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
        {
        var kid = kidList.a;
        descendantsCount += (kid.b || 0);
        kids.push(kid);
    }
    descendantsCount += kids.length;
    return {
        $: 1,
        c: tag,
        d: _VirtualDom_organizeFacts(factList),
        e: kids,
        f: undefined,
        b: descendantsCount
    };
})`;

const prename = `_VirtualDom_node_prename = function (tag){ 
    return F2(function (factList, kidList) {
        for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
         {
            var kid = kidList.a;
            descendantsCount += (kid.b || 0);
            kids.push(kid);
        }
        descendantsCount += kids.length;
        return {
            $: 1,
            c: tag,
            d: _VirtualDom_organizeFacts(factList),
            e: kids,
            f: undefined,
            b: descendantsCount
        };
    });
}`;

// $elm$virtual_dom$VirtualDom$node
// tag == "script" ? "p" : tag

const apiNewVDomNode = `$elm$virtual_dom$VirtualDom$node = F3(function (tag, factList, kidList) {
    for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
        {
        var kid = kidList.a;
        descendantsCount += (kid.b || 0);
        kids.push(kid);
    }
    descendantsCount += kids.length;
    return {
        $: 1,
        c: tag === "script" ? "p" : tag,
        d: _VirtualDom_organizeFacts(factList),
        e: kids,
        f: undefined,
        b: descendantsCount
    };
})`;

const extractAstFromCode = (sourceText: string): ts.Node => {
  const source = ts.createSourceFile('bla', sourceText, ts.ScriptTarget.ES2018);

  return source.statements[0];
};

export const replaceVDomNode = (): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isVariableDeclaration(node)) {
        if (
          ts.isIdentifier(node.name) &&
          node.name.text == '_VirtualDom_node'
        ) {
          let body = extractAstFromCode(newVDomNode);
          let prenamedNode = extractAstFromCode(prename);

          if (
            ts.isExpressionStatement(body) &&
            ts.isBinaryExpression(body.expression)
          ) {
            return ts.createVariableDeclaration(
              '_VirtualDom_node',
              undefined,
              body.expression.right
            );
          }
        } else if (
          ts.isIdentifier(node.name) &&
          node.name.text == '$elm$virtual_dom$VirtualDom$node'
        ) {
          let body = extractAstFromCode(apiNewVDomNode);
          if (ts.isExpressionStatement(body)) {
            if (ts.isBinaryExpression(body.expression)) {
              return ts.createVariableDeclaration(
                '$elm$virtual_dom$VirtualDom$node',
                undefined,
                body.expression.right
              );
            }
          }
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};
