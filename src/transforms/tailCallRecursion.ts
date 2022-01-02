import ts from 'typescript';

/*

Applies tail-call recursion when possible, where the compiler didn't.

This function gets tail-call optimized.

    tco : (a -> b) -> List a -> List b -> List b
    tco mapper list acc =
        case list of
            [] ->
                acc

            x :: xs ->
                tco mapper xs (mapper x :: acc)

but this version doesn't (because of the additional `<|`):

    nonTco : (a -> b) -> List a -> List b -> List b
    nonTco mapper list acc =
        case list of
            [] ->
                acc

            x :: xs ->
                nonTco mapper xs <| (mapper x :: acc)

*/

// TODO Fix TCO for record type alias constructors
// TODO Enable TCO for record literals
// TODO Enable TCO for tuples
// TODO Enable TCO for nested data constructions
// TODO Enable TCO for let declarations (watch out for name shadowing for $start/$end for nested recursive functions)

type Context = any;

const LIST_CONS = "_List_Cons";
const EMPTY_LIST = "_List_Nil";

export const createTailCallRecursionTransformer : ts.TransformerFactory<ts.SourceFile> = (context : Context) => {
  return (sourceFile) => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // Is `var x = FX(function(...) { ... })` or `var x = function(...) { ... }`
      if (ts.isVariableDeclaration(node)
        && ts.isIdentifier(node.name)
        && node.initializer
      ) {
          const foundFunction = findFunction(node.initializer);
          if (!foundFunction) {
            return ts.visitEachChild(node, visitor, context);
          }

          const functionRecursionType : FunctionRecursion = determineRecursionType(node.name.text, foundFunction.fn.body);
          if (functionRecursionType.kind === RecursionType.NotRecursive) {
            return ts.visitEachChild(node, visitor, context);
          }

          const parameterNames : Array<string> = foundFunction.fn.parameters.map(param => {
            return ts.isIdentifier(param.name) ? param.name.text : '';
          });
          const newBody = updateFunctionBody(functionRecursionType, node.name.text, parameterNames, foundFunction.fn.body, context);

          return ts.updateVariableDeclaration(
            node,
            node.name,
            undefined,
            foundFunction.update(newBody)
          );
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

function findFunction(node : ts.Node) {
  // Multiple-argument function wrapped in FX function
  if (ts.isCallExpression(node)) {
    var fn = extractFCall(node);
    if (!fn) {
      return null;
    }
    const {name, parameters, modifiers} = fn;

    return {
      fn: fn,
      update: (body : ts.Block) => {
        const newFn = ts.createFunctionExpression(
          modifiers,
          undefined,
          name,
          undefined,
          parameters,
          undefined,
          body
        );

        return ts.updateCall(
          node,
          node.expression,
          undefined,
          [newFn]
        );
      }
    }
  }

  // Single-argument function not wrapped in FX
  if (ts.isFunctionExpression(node)) {
    return {
      fn: node,
      update: (body : ts.Block) => {
        return ts.createFunctionExpression(
          node.modifiers,
          undefined,
          node.name,
          undefined,
          node.parameters,
          undefined,
          body
        );
      }
    }
  }

  return null;
}

function extractFCall(node: ts.CallExpression): ts.FunctionExpression | null {
  if (ts.isIdentifier(node.expression)
    && node.expression.text.startsWith('F')
    && node.arguments.length > 0
  ) {
    const fn = node.arguments[0];
    if (ts.isFunctionExpression(fn)) {
      return fn;
    }

    return null;
  }

  return null;
}

enum RecursionType {
  NotRecursive = 0,
  PlainRecursion = 1,
  ConsRecursion = 2,
  BooleanRecursion = 3,
  DataConstructionRecursion = 4,
  MultipleDataConstructionRecursion = 5,
};

enum BooleanKind {
  And,
  Or,
};

type FunctionRecursion
  = { kind: RecursionType.NotRecursive }
  | { kind: RecursionType.PlainRecursion }
  | { kind: RecursionType.ConsRecursion }
  | { kind: RecursionType.BooleanRecursion }
  | { kind: RecursionType.DataConstructionRecursion, property: string }
  | { kind: RecursionType.MultipleDataConstructionRecursion };

type Recursion
  = { kind: RecursionType.NotRecursive }
  | { kind: RecursionType.PlainRecursion, arguments : Array<ts.Expression> }
  | { kind: RecursionType.ConsRecursion, elements : ts.Expression[], arguments : Array<ts.Expression> }
  | { kind: RecursionType.BooleanRecursion, expression: ts.Expression, mainOperator: BooleanKind, arguments : Array<ts.Expression> }
  | { kind: RecursionType.DataConstructionRecursion, property: string, expression : ts.Expression, arguments : Array<ts.Expression> }
  | { kind: RecursionType.MultipleDataConstructionRecursion, property: string, expression : ts.Expression, arguments : Array<ts.Expression> };

function determineRecursionType(functionName : string, body : ts.Node) : FunctionRecursion {
  let recursionType : FunctionRecursion = { kind: RecursionType.NotRecursive };
  let nodesToVisit : Array<ts.Node> = [body];
  let node : ts.Node | undefined;

  loop: while (
    (recursionType.kind === RecursionType.NotRecursive
      || recursionType.kind === RecursionType.PlainRecursion
      || recursionType.kind === RecursionType.DataConstructionRecursion
    )
    && (node = nodesToVisit.shift())
  ) {
    if (ts.isParenthesizedExpression(node)) {
      nodesToVisit = [node.expression, ...nodesToVisit];
      continue loop;
    }

    if (ts.isBlock(node)) {
      nodesToVisit = [...node.statements, ...nodesToVisit];
      continue loop;
    }

    if (ts.isLabeledStatement(node)) {
      nodesToVisit.unshift(node.statement);
      continue loop;
    }

    if (ts.isWhileStatement(node)) {
      nodesToVisit.unshift(node.statement);
      continue loop;
    }

    if (ts.isContinueStatement(node) && node.label) {
      recursionType = { kind: RecursionType.PlainRecursion };
      continue loop;
    }

    if (ts.isIfStatement(node)) {
      if (node.elseStatement) {
        nodesToVisit.unshift(node.elseStatement);
      }
      nodesToVisit.unshift(node.thenStatement);
      continue loop;
    }

    if (ts.isSwitchStatement(node)) {
      nodesToVisit = [
        ...node.caseBlock.clauses.flatMap(clause => [...clause.statements]),
        ...nodesToVisit
      ];
      continue loop;
    }

    if (ts.isReturnStatement(node) && node.expression) {
      const expressionRecursion : FunctionRecursion = toFunctionRecursion(extractRecursionKindFromExpression(functionName, node.expression));
      if (recursionType.kind === RecursionType.DataConstructionRecursion && expressionRecursion.kind === RecursionType.DataConstructionRecursion) {
        recursionType = { kind: RecursionType.MultipleDataConstructionRecursion };
        continue loop;
      }

      if (recursionType.kind < expressionRecursion.kind) {
        recursionType = expressionRecursion;
      }
      
      continue loop;
    }
  }

  return recursionType;
}

const START = ts.createIdentifier("$start");
const END = ts.createIdentifier("$end");
const FIELD = ts.createIdentifier("$field");

const consDeclarations =
  [
    // `var $start = _List_Cons(undefined, _List_Nil);`
    ts.createVariableStatement(
      undefined,
      [ts.createVariableDeclaration(
        START,
        undefined,
        ts.createCall(
          ts.createIdentifier(LIST_CONS),
          undefined,
          [
            ts.createIdentifier("undefined"),
            ts.createIdentifier(EMPTY_LIST)
          ]
        )
      )]
    ),
    // `var $end = $start;`
    ts.createVariableStatement(
      undefined,
      [ ts.createVariableDeclaration(
          END,
          undefined,
          START
        )
      ]
    )
  ];

const multipleConstructorDeclarations =
[
  // `var $start = { a: null };`
  ts.createVariableStatement(
    undefined,
    [ts.createVariableDeclaration(
      START,
      undefined,
      ts.createObjectLiteral([
        ts.createPropertyAssignment("a", ts.createNull())
      ])
    )]
  ),
  // `var $end = $start;`
  ts.createVariableStatement(
    undefined,
    [ ts.createVariableDeclaration(
        END,
        undefined,
        START
      )
    ]
  ),
  // `var $field = 'a';`
  ts.createVariableStatement(
    undefined,
    [ ts.createVariableDeclaration(
        FIELD,
        undefined,
        ts.createLiteral('a')
      )
    ]
  )
];

function constructorDeclarations(property : string) {
  return [
    // `var $start = { <property> : null };`
    ts.createVariableStatement(
      undefined,
      [ts.createVariableDeclaration(
        START,
        undefined,
        ts.createObjectLiteral([
          ts.createPropertyAssignment(property, ts.createNull())
        ])
      )]
    ),
    // `var $end = $start;`
    ts.createVariableStatement(
      undefined,
      [ ts.createVariableDeclaration(
          END,
          undefined,
          START
        )
      ]
    )
  ];
}

function updateFunctionBody(recursionType : FunctionRecursion, functionName : string, parameterNames : Array<string>, body : ts.Block, context : Context) : ts.Block {
  const labelSplits = functionName.split("$");
  const label = labelSplits[labelSplits.length - 1] || functionName;
  const updatedBlock = ts.visitEachChild(body, updateRecursiveCallVisitor, context);

  function updateRecursiveCallVisitor(node: ts.Node): ts.VisitResult<ts.Node> {
    if (ts.isBlock(node)
     || ts.isLabeledStatement(node)
     || ts.isWhileStatement(node)
     || ts.isSwitchStatement(node)
     || ts.isCaseClause(node)
     || ts.isCaseBlock(node)
     || ts.isDefaultClause(node)
    ) {
      return ts.visitEachChild(node, updateRecursiveCallVisitor, context);
    }

    if (ts.isIfStatement(node)) {
      return ts.updateIf(
        node,
        node.expression,
        ts.visitNode(node.thenStatement, updateRecursiveCallVisitor, context),
        ts.visitNode(node.elseStatement, updateRecursiveCallVisitor, context)
      )
    }

    if (ts.isReturnStatement(node)
      && node.expression
    ) {
      return updateReturnStatement(recursionType, functionName, label, parameterNames, node.expression) || node;
    }

    return node;
  }

  if (recursionType.kind === RecursionType.NotRecursive) {
    return body;
  }

  if (recursionType.kind === RecursionType.PlainRecursion) {
    if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
      return ts.createBlock(
        // `<label>: while (true) { <updatedBlock> }`
        [ts.createLabel(label, ts.createWhile(ts.createTrue(), updatedBlock))]
      );
    }

    return updatedBlock;
  }

  if (recursionType.kind === RecursionType.ConsRecursion) {
    if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
      return ts.createBlock(
        [ ...consDeclarations
        // `<label>: while (true) { <updatedBlock> }`
        , ts.createLabel(label, ts.createWhile(ts.createTrue(), updatedBlock))
        ]
      );
    }

    return ts.updateBlock(
      updatedBlock,
      [ ...consDeclarations
      , ...updatedBlock.statements
      ]
    );
  }

  if (recursionType.kind === RecursionType.DataConstructionRecursion) {
    if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
      return ts.createBlock(
        [ ...constructorDeclarations(recursionType.property)
        // `<label>: while (true) { <updatedBlock> }`
        , ts.createLabel(label, ts.createWhile(ts.createTrue(), updatedBlock))
        ]
      );
    }

    return ts.updateBlock(
      updatedBlock,
      [ ...constructorDeclarations(recursionType.property)
      , ...updatedBlock.statements
      ]
    );
  }

  if (recursionType.kind === RecursionType.MultipleDataConstructionRecursion) {
    if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
      return ts.createBlock(
        [ ...multipleConstructorDeclarations
        // `<label>: while (true) { <updatedBlock> }`
        , ts.createLabel(label, ts.createWhile(ts.createTrue(), updatedBlock))
        ]
      );
    }

    return ts.updateBlock(
      updatedBlock,
      [ ...multipleConstructorDeclarations
      , ...updatedBlock.statements
      ]
    );
  }

  return updatedBlock;
}

function updateReturnStatement(recursionType : FunctionRecursion, functionName : string, label : string, parameterNames : Array<string>, expression : ts.Expression) {
  const extract = extractRecursionKindFromExpression(functionName, expression);

  if (recursionType.kind === RecursionType.ConsRecursion) {
    return updateReturnStatementForCons(extract, label, parameterNames, expression);
  }

  if (recursionType.kind === RecursionType.DataConstructionRecursion) {
    return updateReturnStatementForDataConstruction(recursionType.property, extract, label, parameterNames, expression);
  }

  if (recursionType.kind === RecursionType.MultipleDataConstructionRecursion) {
    return updateReturnStatementForMultipleDataConstruction(extract, label, parameterNames, expression)
  }

  switch (extract.kind) {
    case RecursionType.NotRecursive: {
      return null;
    }

    case RecursionType.PlainRecursion: {
      return createContinuation(label, parameterNames, extract.arguments);
    }

    case RecursionType.BooleanRecursion: {
      return createBooleanContinuation(label, parameterNames, extract.mainOperator, extract.expression, extract.arguments);
    }
  }

  return null;
}

function updateReturnStatementForCons(extract : Recursion, label : string, parameterNames : Array<string>, expression : ts.Expression) {
  if (extract.kind === RecursionType.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionType.ConsRecursion) {
    return createConsContinuation(label, parameterNames, extract.elements, extract.arguments);
  }

  // End of the recursion, add the value to the end of the list and return the start.

  // `return $end.b;`
  const returnStatement = ts.createReturn(
    ts.createPropertyAccess(
      START,
      "b"
    )
  );

  if (ts.isIdentifier(expression) && expression.text === EMPTY_LIST) {
    // The end of the list is already an empty list, setting it would be useless.
    return returnStatement;
  }

  return [
    // `$end.b = <expression>;`
    ts.createExpressionStatement(
      ts.createAssignment(
        ts.createPropertyAccess(
          END,
          "b"
        ),
        expression
      )
    ),
    returnStatement
  ];
}

function updateReturnStatementForDataConstruction(property : string, extract : Recursion, label : string, parameterNames : Array<string>, expression : ts.Expression) {
  if (extract.kind === RecursionType.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionType.DataConstructionRecursion) {
    return createDataConstructionContinuation(label, extract.property, parameterNames, extract.expression, extract.arguments);
  }

  // End of the recursion, add the value to the $end and return the start.

  // `return $start.<property>;`
  const returnStatement = ts.createReturn(
    ts.createPropertyAccess(
      START,
      property
    )
  );

  return [
    // `$end.<property> = <expression>;`
    ts.createExpressionStatement(
      ts.createAssignment(
        ts.createPropertyAccess(
          END,
          property
        ),
        expression
      )
    ),
    returnStatement
  ];
}

function updateReturnStatementForMultipleDataConstruction(extract : Recursion, label : string, parameterNames : Array<string>, expression : ts.Expression) {
  if (extract.kind === RecursionType.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionType.DataConstructionRecursion) {
    return createMultipleDataConstructionContinuation(label, extract.property, parameterNames, extract.expression, extract.arguments);
  }

  // End of the recursion, add the value to the $end and return the start.
  return [
    // `$end[$field] = <expression>;`
    ts.createExpressionStatement(
      ts.createAssignment(
        ts.createElementAccess(
          END,
          FIELD
        ),
        expression
      )
    ),
    // `return $start.a;`
    ts.createReturn(
      ts.createPropertyAccess(
        START,
        ts.createIdentifier("a")
      )
    )
  ];
}

function toFunctionRecursion(recursion : Recursion) : FunctionRecursion {
  switch (recursion.kind) {
    case RecursionType.NotRecursive:
      return { kind: RecursionType.NotRecursive };
    case RecursionType.PlainRecursion:
      return { kind: RecursionType.PlainRecursion };
    case RecursionType.ConsRecursion:
      return { kind: RecursionType.ConsRecursion };
    case RecursionType.BooleanRecursion:
      return { kind: RecursionType.BooleanRecursion };
    case RecursionType.DataConstructionRecursion:
      return { kind: RecursionType.DataConstructionRecursion, property: recursion.property };
    case RecursionType.MultipleDataConstructionRecursion:
      return { kind: RecursionType.MultipleDataConstructionRecursion };
  }
}

function extractRecursionKindFromExpression(functionName : string, node : ts.Expression) : Recursion {
  if (ts.isParenthesizedExpression(node)) {
    return extractRecursionKindFromExpression(functionName, node.expression);
  }

  if (ts.isCallExpression(node)) {
    return extractRecursionKindFromCallExpression(functionName, node);
  }

  if (ts.isBinaryExpression(node) && node.operatorToken) {
    return extractRecursionKindFromBinaryExpression(functionName, node);
  }

  return { kind: RecursionType.NotRecursive };
}

function extractRecursionKindFromCallExpression(functionName : string, node : ts.CallExpression) : Recursion {
  if (!ts.isIdentifier(node.expression)) {
    return { kind: RecursionType.NotRecursive };
  }

  // Is "fn(...)"
  if (node.expression.text === functionName) {
    return {
      kind: RecursionType.PlainRecursion,
      arguments: [...node.arguments]
    };
  }

  // Is "AX(fn, ...)"
  const [firstArg, secondArg, thirdArg] = node.arguments;
  if (!node.expression.text.startsWith("A")
    || !ts.isIdentifier(firstArg)
  ) {
    return { kind: RecursionType.NotRecursive };
  }

  if (firstArg.text === functionName) {
    return {
      kind: RecursionType.PlainRecursion,
      arguments: node.arguments.slice(1)
    };
  }

  // Elm: Is x :: <recursive call>
  // JS: Is A2($elm$core$List$cons, x, <recursive call>)
  if (firstArg.text === "$elm$core$List$cons" && ts.isCallExpression(thirdArg)) {
    const thirdArgExtract = extractRecursionKindFromExpression(functionName, thirdArg);
    if (thirdArgExtract.kind === RecursionType.PlainRecursion) {
      return {
        kind: RecursionType.ConsRecursion,
        elements: [secondArg],
        arguments: thirdArgExtract.arguments
      };
    }

    if (thirdArgExtract.kind === RecursionType.ConsRecursion) {
      thirdArgExtract.elements.push(secondArg);
      return thirdArgExtract;
    }
  }

  // Is constructor call
  // Elm: `type X = Y <args> X <args> | ... ; Y <...> <recursive call> <...>
  // JS: `return AX(Y, ..., <recursive call>, ...);
  if (isDataConstructor(firstArg.text)) {
    let extract : Recursion = { kind: RecursionType.NotRecursive };

    for (let i = 1; extract.kind === RecursionType.NotRecursive && i < node.arguments.length; i++) {
      const argExtract = extractRecursionKindFromExpression(functionName, node.arguments[i]);
      // TODO Support nested data construction
      if (argExtract.kind === RecursionType.PlainRecursion) {
        const argumentsWithHole : ts.Expression[] = [...node.arguments];
        argumentsWithHole[i] = ts.createNull();

        extract = {
          kind: RecursionType.DataConstructionRecursion,
          // TODO Only works for custom types, not record type alias constructors or other functions
          property: "abcdefghijklmnopqrstuvwxyz"[i - 1],
          expression: ts.updateCall(
            node,
            node.expression,
            undefined,
            argumentsWithHole
          ),
          arguments: argExtract.arguments
        };
      }
    }

    return extract;
  }

  return { kind: RecursionType.NotRecursive };
}

function isDataConstructor(functionName : string) {
  // Checks whether the function name is a native data constructor by checking
  // whether the name starts with an upper case.
  // TODO Include non-custom type constructors, but then we need to be more careful about validating the property name.
  // TODO This actively doesn't work for record type aliases, so support needs to be improved or actively removed
  const splits = functionName.split("$");
  const last = splits[splits.length - 1];
  return last && last[0] === last[0].toUpperCase();
}

function extractRecursionKindFromBinaryExpression(functionName : string, node : ts.BinaryExpression) : Recursion {
  if (node.operatorToken.kind !== ts.SyntaxKind.BarBarToken && node.operatorToken.kind !== ts.SyntaxKind.AmpersandAmpersandToken) {
    return { kind: RecursionType.NotRecursive };
  }

  const extract = extractRecursionKindFromExpression(functionName, node.right);

  if (extract.kind === RecursionType.PlainRecursion) {
    return {
      kind: RecursionType.BooleanRecursion,
      expression: node.left,
      mainOperator: node.operatorToken.kind === ts.SyntaxKind.BarBarToken ? BooleanKind.Or : BooleanKind.And,
      arguments: extract.arguments
    };
  }

  if (extract.kind === RecursionType.BooleanRecursion) {
    // `<node.left> && <expressions from node.right>` (operation can be either && or ||)
    extract.expression = ts.createBinary(node.left, node.operatorToken, extract.expression);
    return extract;
  }

  return { kind: RecursionType.NotRecursive };
}

function createContinuation(label : string, parameterNames : Array<string>, newArguments : Array<ts.Expression>) : Array<ts.Node> {
  return [
    ...paramReassignments(parameterNames, newArguments),
    // `continue <label>;`
    ts.createContinue(label)
  ];
}

function createConsContinuation(label : string, parameterNames : Array<string>, elements : ts.Expression[], newArguments : Array<ts.Expression>) : Array<ts.Node> {
  return [
    ...elements.map(addToEnd),
    // `$end = $end.b;`
    ts.createExpressionStatement(
      ts.createAssignment(
        END,
        ts.createPropertyAccess(
          END,
          "b"
        )
      )
    ),
    ...paramReassignments(parameterNames, newArguments),
    // `continue <label>;`
    ts.createContinue(label)
  ];
}

function createDataConstructionContinuation(label : string, property : string, parameterNames : Array<string>, expression : ts.Expression, newArguments : Array<ts.Expression>) : Array<ts.Node> {
  return [
    assignToStaticDataProperty(property, expression),
    // `$end = $end.<property>;`
    ts.createExpressionStatement(
      ts.createAssignment(
        END,
        ts.createPropertyAccess(
          END,
          property
        )
      )
    ),
    ...paramReassignments(parameterNames, newArguments),
    // `continue <label>;`
    ts.createContinue(label)
  ];
}

function createMultipleDataConstructionContinuation(label : string, property : string, parameterNames : Array<string>, expression : ts.Expression, newArguments : Array<ts.Expression>) : Array<ts.Node> {
  return [
    assignToDynamicDataProperty(expression),
    // `$end = $end[$field];`
    ts.createExpressionStatement(
      ts.createAssignment(
        END,
        ts.createElementAccess(
          END,
          FIELD
        )
      )
    ),
    // `$field = '<property>';`
    ts.createExpressionStatement(
      ts.createAssignment(
        FIELD,
        ts.createLiteral(property)
      )
    ),
    ...paramReassignments(parameterNames, newArguments),
    // `continue <label>;`
    ts.createContinue(label)
  ];
}

function createBooleanContinuation(label : string, parameterNames : Array<string>, mainOperator: BooleanKind, expression : ts.Expression, newArguments : Array<ts.Expression>) : Array<ts.Node> {
  const ifExpr =
    mainOperator === BooleanKind.Or
      ? // if (<condition>) { return true; }
        ts.createIf(
          expression,
          ts.createBlock([
            ts.createReturn(ts.createTrue())
          ])
        )
      : // if (!<condition>) { return false; }
        ts.createIf(
          ts.createLogicalNot(expression),
          ts.createBlock([
            ts.createReturn(ts.createFalse())
          ])
        );

  return [
    ifExpr,
    ...paramReassignments(parameterNames, newArguments),
    // `continue <label>;`
    ts.createContinue(label)
  ];
}

function paramReassignments(parameterNames : Array<string>, newArguments : Array<ts.Expression>) : Array<ts.Node> {
  let assignments : Array<ts.VariableDeclaration> = [];
  let reassignments : Array<ts.Statement> = [];
  const filteredParameters : Array<{ name: string; value: ts.Expression; }> = [];

  parameterNames.forEach((name, index) => {
    const value : ts.Expression = newArguments[index];
    if (ts.isIdentifier(value) && name === value.text) {
      return;
    }
    filteredParameters.push({name, value});
  });

  if (filteredParameters.length === 1) {
    // `<param> = <new param value>;`
    return [
      ts.createExpressionStatement(
        ts.createAssignment(
          ts.createIdentifier(filteredParameters[0].name),
          filteredParameters[0].value
        )
      )
    ];
  }

  filteredParameters.forEach(({name, value}) => {
    const tempName = `$temp$${name}`;
    assignments.push(
      // `$temp$<param> = <new param value>;`
      ts.createVariableDeclaration(
        tempName,
        undefined,
        value
      )
    );
    reassignments.push(
      // `<param> = $temp$<param>;`
      ts.createExpressionStatement(
        ts.createAssignment(
          ts.createIdentifier(name),
          ts.createIdentifier(tempName)
        )
      )
    );
  });

  return [
    ts.createVariableStatement(
      undefined,
      ts.createVariableDeclarationList(assignments)
    ),
    ...reassignments
  ];
}

function addToEnd(element : ts.Expression) : ts.Statement {
  // `end.b = _List_Cons(element, _List_Nil);`
  return ts.createExpressionStatement(
    ts.createAssignment(
      ts.createPropertyAccess(
        END,
        "b"
      ),
      ts.createCall(
        ts.createIdentifier(LIST_CONS),
        undefined,
        [
          element,
          ts.createIdentifier(EMPTY_LIST)
        ]
      )
    )
  );
}

function assignToStaticDataProperty(property : string, expression : ts.Expression) : ts.Statement {
  // `end.b = <expression where recursive call has been replaced by null>;`
  return ts.createExpressionStatement(
    ts.createAssignment(
      ts.createPropertyAccess(
        END,
        property
      ),
      expression
    )
  );
}

function assignToDynamicDataProperty(expression : ts.Expression) : ts.Statement {
  // `end[$field] = <expression where recursive call has been replaced by null>;`
  return ts.createExpressionStatement(
    ts.createAssignment(
      ts.createElementAccess(
        END,
        FIELD
      ),
      expression
    )
  );
}