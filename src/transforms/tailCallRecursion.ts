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

/*
For arithmetic operations:
+ is used for both concatenating numbers and strings
but it is only used for strings when concatenating string literals
When strings are appended without literals, `_Utils_ap` is used (which is also used for list concatenation)
- `foo ++ "bar"` => `foo + 'bar'`
- `foo ++ bar ++ "bar"` => `foo + (bar + 'bar')`
- `(foo ++ bar) ++ "bar"` => `_Utils_ap(foo, bar) + 'bar'`

Therefore:
- If we see a `+` operation, we can look at the operands. If there is a string, it's a string append, and otherwise it's a number sum.
- If we see a `_Utils_ap`
  - If there was a `+` somewhere else (in a return statement), then we can determine it's a string concatenation
  - Otherwise we don't know so we shouldn't do anything (or try to infer harder based on the arguments)

*/

// TODO Support _Utils_ap for string concatenation
// TODO Enable TCO for nested data constructions
// TODO Enable TCO for let declarations (watch out for name shadowing for $start/$end for nested recursive functions)
// TODO Optimize functions like
// naiveMap : (a -> b) -> List a -> List b
// naiveMap =
//     \fn list ->
//         case list of
//             [] ->
//                 []
//             x :: xs ->
//                 fn x :: naiveMap fn xs


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

          const functionRecursionType : FunctionRecursion | NotRecursive = determineRecursionType(node.name.text, foundFunction.fn.body);
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
  NotRecursive,
  PlainRecursion,
  BooleanRecursion,
  ConsRecursion,
  DataConstructionRecursion,
  MultipleDataConstructionRecursion,
  AddRecursion,
  StringConcatRecursion,
  MultiplyRecursion,
};

enum BooleanKind {
  And,
  Or,
};

type ArithmeticData = {
  neutralValue: number | string,
  binaryToken: ts.SyntaxKind,
  assignmentToken: ts.CompoundAssignmentOperator,
} 

type FunctionRecursion
  = { kind: RecursionType.PlainRecursion }
  | { kind: RecursionType.ConsRecursion }
  | { kind: RecursionType.BooleanRecursion }
  | { kind: RecursionType.DataConstructionRecursion, property: string }
  | { kind: RecursionType.MultipleDataConstructionRecursion }
  | { kind: RecursionType.AddRecursion }
  | StringConcatRecursion
  | { kind: RecursionType.MultiplyRecursion }

type StringConcatRecursion =
  {
    kind: RecursionType.StringConcatRecursion,
    left: boolean,
    right: boolean
  }

type Recursion
  = PlainRecursion
  | ConsRecursion
  | BooleanRecursion
  | DataConstructionRecursion
  | MultipleDataConstructionRecursion
  | AddRecursion
  | MultiplyRecursion

type NotRecursive =
  {
    kind: RecursionType.NotRecursive
  }

type PlainRecursion =
  {
    kind: RecursionType.PlainRecursion,
    arguments : Array<ts.Expression>
  }

type ConsRecursion =
  {
    kind: RecursionType.ConsRecursion,
    elements : ts.Expression[],
    arguments : Array<ts.Expression>
  }

type BooleanRecursion =
  {
    kind: RecursionType.BooleanRecursion,
    expression: ts.Expression,
    booleanKind: BooleanKind,
    arguments : Array<ts.Expression>
  }

type DataConstructionRecursion =
  {
    kind: RecursionType.DataConstructionRecursion,
    property: string,
    expression : ts.Expression,
    arguments : Array<ts.Expression>
  }

type MultipleDataConstructionRecursion =
  {
    kind: RecursionType.MultipleDataConstructionRecursion,
    property: string,
    expression : ts.Expression,
    arguments : Array<ts.Expression>
  }

type AddRecursion =
  {
    kind: RecursionType.AddRecursion,
    left : ts.Expression | null,
    right : ts.Expression | null,
    arguments : Array<ts.Expression>,
    adding: "numbers" | "strings" | null
  }

type MultiplyRecursion =
  {
    kind: RecursionType.MultiplyRecursion,
    expression : ts.Expression,
    arguments : Array<ts.Expression>
  }

function determineRecursionType(functionName : string, body : ts.Node) : FunctionRecursion | NotRecursive {
  let recursionType : FunctionRecursion | NotRecursive = { kind: RecursionType.NotRecursive };
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
      if (ts.isConditionalExpression(node.expression)) {
        nodesToVisit.unshift(ts.createReturn(node.expression.whenFalse));
        // We could have unshifted this as well, but this skips an iteration
        node = node.expression.whenTrue;
        continue loop;
      }

      const expressionRecursion : FunctionRecursion | NotRecursive = toFunctionRecursion(extractRecursionKindFromExpression(functionName, node.expression));
      if (recursionType.kind === RecursionType.DataConstructionRecursion
        && expressionRecursion.kind === RecursionType.DataConstructionRecursion
        && expressionRecursion.property !== recursionType.property
      ) {
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
const RESULT = ts.createIdentifier("$result");
const LEFT = ts.createIdentifier("$left");
const RIGHT = ts.createIdentifier("$right");

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

// `var $result = <n>;`
function resultDeclaration(n : number) {
  return ts.createVariableStatement(
      undefined,
      [ts.createVariableDeclaration(
        RESULT,
        undefined,
        ts.createLiteral(n)
      )]
    );
}

function stringConsDeclaration(left : boolean, right: boolean) {
  let declarations = [];
  if (left) {
    declarations.push(
      //`$left = ""`
      ts.createVariableDeclaration(
        LEFT,
        undefined,
        ts.createStringLiteral("")
      )
    );
  }

  if (right) {
    declarations.push(
      //`$right = ""`
      ts.createVariableDeclaration(
        RIGHT,
        undefined,
        ts.createStringLiteral("")
      )
    );
  }

  return ts.createVariableStatement(undefined, declarations);
}

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

  switch (recursionType.kind) {
    case RecursionType.PlainRecursion: {
      if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
        return ts.createBlock([labelAndLoop(label, updatedBlock)]);
      }

      return updatedBlock;
    }

    case RecursionType.BooleanRecursion: {
      if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
        return ts.createBlock([labelAndLoop(label, updatedBlock)]);
      }

      return updatedBlock;
    }

    case RecursionType.AddRecursion: {
      // `var $result = 0;`
      const declaration = resultDeclaration(0);
      if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
        return ts.createBlock(
          [
            declaration,
            labelAndLoop(label, updatedBlock)
          ]
        );
      }

      return ts.updateBlock(
        updatedBlock,
        [
          declaration,
          ...updatedBlock.statements
        ]
      );
    }

    case RecursionType.StringConcatRecursion: {
      if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
        return ts.createBlock(
          [
            stringConsDeclaration(recursionType.left, recursionType.right),
            labelAndLoop(label, updatedBlock)
          ]
        );
      }

      return ts.updateBlock(
        updatedBlock,
        [
          stringConsDeclaration(recursionType.left, recursionType.right),
          ...updatedBlock.statements
        ]
      );
    }

    case RecursionType.MultiplyRecursion: {
      // `var $result = 1;`
      const declaration = resultDeclaration(1);
      if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
        return ts.createBlock(
          [
            declaration,
            labelAndLoop(label, updatedBlock)
          ]
        );
      }

      return ts.updateBlock(
        updatedBlock,
        [
          declaration,
          ...updatedBlock.statements
        ]
      );
    }

    case RecursionType.ConsRecursion: {
      if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
        return ts.createBlock(
          [
            ...consDeclarations,
            labelAndLoop(label, updatedBlock)
          ]
        );
      }

      return ts.updateBlock(
        updatedBlock,
        [
          ...consDeclarations,
          ...updatedBlock.statements
        ]
      );
    }

    case RecursionType.DataConstructionRecursion: {
      if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
        return ts.createBlock(
          [
            ...constructorDeclarations(recursionType.property),
            labelAndLoop(label, updatedBlock)
          ]
        );
      }

      return ts.updateBlock(
        updatedBlock,
        [
          ...constructorDeclarations(recursionType.property),
          ...updatedBlock.statements
        ]
      );
    }

    case RecursionType.MultipleDataConstructionRecursion: {
      if (!ts.isLabeledStatement(updatedBlock.statements[0])) {
        return ts.createBlock(
          [
            ...multipleConstructorDeclarations,
            labelAndLoop(label, updatedBlock)
          ]
        );
      }
  
      return ts.updateBlock(
        updatedBlock,
        [
          ...multipleConstructorDeclarations,
          ...updatedBlock.statements
        ]
      );
    }
  }
}

// TODO Don't set while loop if there is already one, even if after other declarations
function labelAndLoop(label : string, block: ts.Block) : ts.Statement {
  // `<label>: while (true) { <block> }`
  return ts.createLabel(label, ts.createWhile(ts.createTrue(), block));
}

function returnStatementToBlock(expression : ts.Statement[] | ts.ReturnStatement | null, original : ts.Expression) : ts.Block {
  if (expression === null) {
    return ts.createBlock([
      ts.createReturn(original)
    ]);
  }
  
  if (!Array.isArray(expression)) {
    return ts.createBlock([expression]);
  }

  return ts.createBlock(expression);
}

function updateReturnStatement(
  recursionType : FunctionRecursion,
  functionName : string,
  label : string,
  parameterNames : Array<string>,
  expression : ts.Expression
) : ts.Statement[] | ts.ReturnStatement | null {
  const extract = extractRecursionKindFromExpression(functionName, expression);
  if (ts.isConditionalExpression(expression)) {
    const maybeLeft = updateReturnStatement(recursionType, functionName, label, parameterNames, expression.whenTrue);
    const maybeRight = updateReturnStatement(recursionType, functionName, label, parameterNames, expression.whenFalse);
    if (maybeLeft === null && maybeRight === null) {
      return null;
    }

    return [
      ts.createIf(
        expression.condition,
        returnStatementToBlock(maybeLeft, expression.whenTrue),
        returnStatementToBlock(maybeRight, expression.whenFalse),
      )
    ];
  }

  switch (recursionType.kind) {
    case RecursionType.AddRecursion: {
      return updateReturnStatementForArithmeticOperation(
        {
          neutralValue: 0,
          binaryToken: ts.SyntaxKind.PlusToken,
          assignmentToken: ts.SyntaxKind.PlusEqualsToken,
        },
        extract,
        label,
        parameterNames,
        expression
      );
    }

    case RecursionType.StringConcatRecursion: {
      return updateReturnStatementForStringConcat(
        recursionType,
        extract,
        label,
        parameterNames,
        expression
      );
    }

    case RecursionType.MultiplyRecursion: {
      return updateReturnStatementForArithmeticOperation(
        {
          neutralValue: 1,
          binaryToken: ts.SyntaxKind.AsteriskToken,
          assignmentToken: ts.SyntaxKind.AsteriskEqualsToken,
        },
        extract,
        label,
        parameterNames,
        expression
      );
    }

    case RecursionType.ConsRecursion: {
      return updateReturnStatementForCons(extract, label, parameterNames, expression);
    }

    case RecursionType.DataConstructionRecursion: {
      return updateReturnStatementForDataConstruction(recursionType.property, extract, label, parameterNames, expression);
    }

    case RecursionType.MultipleDataConstructionRecursion: {
      return updateReturnStatementForMultipleDataConstruction(extract, label, parameterNames, expression)
    }

    case RecursionType.PlainRecursion:
    case RecursionType.BooleanRecursion: {
      switch (extract.kind) {
        case RecursionType.PlainRecursion: {
          return createContinuation(label, parameterNames, extract.arguments);
        }

        case RecursionType.BooleanRecursion: {
          return createBooleanContinuation(label, parameterNames, extract.booleanKind, extract.expression, extract.arguments);
        }

        case RecursionType.NotRecursive:
        case RecursionType.AddRecursion:
        case RecursionType.MultiplyRecursion:
        case RecursionType.ConsRecursion:
        case RecursionType.DataConstructionRecursion:
        case RecursionType.MultipleDataConstructionRecursion: {
          return null;
        }
      }
    }
  }
}

function updateReturnStatementForCons(extract : Recursion | NotRecursive, label : string, parameterNames : Array<string>, expression : ts.Expression) : ts.Statement[] | ts.ReturnStatement {
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

function updateReturnStatementForArithmeticOperation(
  operation: ArithmeticData,
  extract : Recursion | NotRecursive,
  label : string,
  parameterNames : Array<string>,
  expression : ts.Expression
) : ts.Statement[] | ts.ReturnStatement | null {
  if (extract.kind === RecursionType.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionType.AddRecursion) {
    return createArithmeticContinuation(
      operation,
      label,
      parameterNames,
      combineExpressionsWithPlus(extract.left, extract.right),
      extract.arguments
    );
  }

  if (extract.kind === RecursionType.MultiplyRecursion) {
    return createArithmeticContinuation(
      operation,
      label,
      parameterNames,
      extract.expression,
      extract.arguments
    );
  }

  // End of the recursion, return the result combined with the return value
  if (ts.isLiteralExpression(expression) && expression.text === (operation.neutralValue + '')) {
    return ts.createReturn(RESULT);
  }

  // `return $result + <expression>;` for addition
  // `return $result * <expression>;` for multiplication
  return ts.createReturn(
    ts.createBinary(
      RESULT,
      // Added "any" because it works but could not figure out how to make it typecheck
      (ts.createToken(operation.binaryToken) as any),
      expression
    )
  );
}

function updateReturnStatementForStringConcat(
  recursion: StringConcatRecursion,
  extract : Recursion | NotRecursive,
  label : string,
  parameterNames : Array<string>,
  expression : ts.Expression
) : ts.Statement[] | ts.ReturnStatement | null {
  if (extract.kind === RecursionType.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionType.AddRecursion) {
    return createStringConcatContinuation(label, parameterNames, extract.left, extract.right, extract.arguments);
  }

  // End of the recursion, return the result combined with the return value
  return ts.createReturn(
    combineExpressionsWithPlus(
      recursion.left ? LEFT : null,
      combineExpressionsWithPlus(
        ts.isLiteralExpression(expression) && expression.text === '' ? null : expression,
        recursion.right ? RIGHT : null,
      )
    )
  );
}

function updateReturnStatementForDataConstruction(property : string, extract : Recursion | NotRecursive, label : string, parameterNames : Array<string>, expression : ts.Expression) {
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

function updateReturnStatementForMultipleDataConstruction(extract : Recursion | NotRecursive, label : string, parameterNames : Array<string>, expression : ts.Expression) {
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

function toFunctionRecursion(recursion : Recursion | NotRecursive) : FunctionRecursion | NotRecursive {
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
    case RecursionType.AddRecursion:
      if (recursion.adding === "strings") {
        return { kind: RecursionType.StringConcatRecursion, left: !!recursion.left, right: !!recursion.right };
      }
      return { kind: RecursionType.AddRecursion };
    case RecursionType.MultiplyRecursion:
      return { kind: RecursionType.MultiplyRecursion };
  }
}

function extractRecursionKindFromExpression(functionName : string, node : ts.Expression) : Recursion | NotRecursive {
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

function extractRecursionKindFromCallExpression(functionName : string, node : ts.CallExpression) : Recursion | NotRecursive {
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
    let extract : Recursion | NotRecursive = { kind: RecursionType.NotRecursive };

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

function isDataConstructor(functionName : string) : boolean {
  // Checks whether the function name is a native data constructor by checking
  // whether the name starts with an upper case.
  const splits = functionName.split("$");
  const last = splits[splits.length - 1];
  return !!last && last[0] === last[0].toUpperCase();
}

function extractRecursionKindFromBinaryExpression(functionName : string, node : ts.BinaryExpression) : Recursion | NotRecursive {
  if (node.operatorToken.kind === ts.SyntaxKind.BarBarToken || node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken) {
    return extractRecursionKindFromBooleanExpression(functionName, node);
  }

  if (node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    const extract = extractRecursionKindFromAdditionExpression(functionName, node.right, node.left, false)
    if (extract.kind === RecursionType.NotRecursive) {
      return extractRecursionKindFromAdditionExpression(functionName, node.left, node.right, true);
    }
    return extract;
  }

  if (node.operatorToken.kind === ts.SyntaxKind.AsteriskToken) {
    const extract = extractRecursionKindFromMultiplicationExpression(functionName, node.right, node.left)
    if (extract.kind === RecursionType.NotRecursive) {
      return extractRecursionKindFromMultiplicationExpression(functionName, node.left, node.right);
    }
    return extract;
  }

  return { kind: RecursionType.NotRecursive };
}

function extractRecursionKindFromBooleanExpression(functionName : string, node : ts.BinaryExpression) : Recursion | NotRecursive {
  const extract = extractRecursionKindFromExpression(functionName, node.right);

  if (extract.kind === RecursionType.PlainRecursion) {
    return {
      kind: RecursionType.BooleanRecursion,
      expression: node.left,
      booleanKind: node.operatorToken.kind === ts.SyntaxKind.BarBarToken ? BooleanKind.Or : BooleanKind.And,
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

function extractRecursionKindFromAdditionExpression(functionName : string, expression : ts.Expression, otherOperand : ts.Expression, isLeft : boolean) : Recursion | NotRecursive {
  const extract = extractRecursionKindFromExpression(functionName, expression);

  if (extract.kind === RecursionType.PlainRecursion) {
    return {
      kind: RecursionType.AddRecursion,
      left: isLeft ? null : otherOperand,
      right: isLeft ? otherOperand : null,
      arguments: extract.arguments,
      adding: isThisANumberOrString(otherOperand)
    };
  }

  if (extract.kind === RecursionType.AddRecursion) {
    if (isLeft) {
      // `<expression> + <expressions from otherOperand>`
      extract.right = combineExpressionsWithPlus(extract.right, otherOperand);
    } else {
      // `<expressions from otherOperand> + <expression>`
      extract.left = combineExpressionsWithPlus(otherOperand, extract.left);
    }
    extract.adding = extract.adding || isThisANumberOrString(otherOperand);
    return extract;
  }

  // TODO If the function is otherwise plain recursive in other places, then we should still make this function plain recursive.
  return { kind: RecursionType.NotRecursive };
}

function combineExpressionsWithPlus(left : ts.Expression | null, right : ts.Expression | null) : ts.Expression {
  if (!left) {
    // We're assuming there's always one out of left or right that exists,
    // otherwise we shouldn't have had to call this function.
    return right || ts.createNull();
  }
  if (!right) { return left; }
  return ts.createBinary(left, ts.SyntaxKind.PlusToken, right);
}

function isThisANumberOrString(node : ts.Expression) : "numbers" | "strings" | null {
  if (ts.isParenthesizedExpression(node)) {
    return isThisANumberOrString(node.expression);
  }

  // TODO We could also detect we're adding strings if we find a `Utils_ap`
  // either here or in another return expression.
  if (ts.isStringLiteral(node)) {
    return "strings";
  }

  if (ts.isNumericLiteral(node)) {
    return "numbers";
  }

  if (ts.isBinaryExpression(node)) {
    if (node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
      return isThisANumberOrString(node.left) || isThisANumberOrString(node.right);
    }
    if (node.operatorToken.kind === ts.SyntaxKind.AsteriskToken
      || node.operatorToken.kind === ts.SyntaxKind.MinusToken
      || node.operatorToken.kind === ts.SyntaxKind.SlashToken
      || node.operatorToken.kind === ts.SyntaxKind.AsteriskAsteriskToken
    ) {
      return "numbers";
    }
  }

  return null;
}

function extractRecursionKindFromMultiplicationExpression(functionName : string, expression : ts.Expression, otherOperand : ts.Expression) : Recursion | NotRecursive {
  const extract = extractRecursionKindFromExpression(functionName, expression);

  if (extract.kind === RecursionType.PlainRecursion) {
    return {
      kind: RecursionType.MultiplyRecursion,
      expression: otherOperand,
      arguments: extract.arguments
    };
  }

  if (extract.kind === RecursionType.MultiplyRecursion) {
    // `<expressions from otherOperand> * <expression>`
    extract.expression = ts.createBinary(otherOperand, ts.SyntaxKind.AsteriskAsteriskToken, extract.expression);
    return extract;
  }

  // TODO If the function is otherwise plain recursive in other places, then we should still make this function plain recursive.
  return { kind: RecursionType.NotRecursive };
}

function createContinuation(label : string, parameterNames : Array<string>, newArguments : Array<ts.Expression>) : Array<ts.Statement> {
  return [
    ...paramReassignments(parameterNames, newArguments),
    // `continue <label>;`
    ts.createContinue(label)
  ];
}

function createConsContinuation(label : string, parameterNames : Array<string>, elements : ts.Expression[], newArguments : Array<ts.Expression>) : Array<ts.Statement> {
  return [
    ...elements.map(addToEnd),
    ...createContinuation(label, parameterNames, newArguments)
  ];
}

function createArithmeticContinuation(operation: ArithmeticData, label : string, parameterNames : Array<string>, expression : ts.Expression, newArguments : Array<ts.Expression>) : Array<ts.Statement> {
  return [
    // `$result += <expression>;` for addition
    // `$result *= <expression>;` for multiplication
    ts.createExpressionStatement(
      ts.createBinary(
        RESULT,
        operation.assignmentToken,
        expression
      )
    ),
    ...createContinuation(label, parameterNames, newArguments)
  ];
}

function createStringConcatContinuation(label : string, parameterNames : Array<string>, left : ts.Expression | null, right : ts.Expression | null, newArguments : Array<ts.Expression>) : Array<ts.Statement> {
  let result = createContinuation(label, parameterNames, newArguments);

  if (right) {
    // `$right = <expression> + $right;`
    result.unshift(
      ts.createExpressionStatement(
        ts.createBinary(
          RIGHT,
          ts.SyntaxKind.EqualsToken,
          ts.createBinary(
            right,
            ts.SyntaxKind.PlusToken,
            RIGHT
          )
        )
      )
    );
  }

  if (left) {
    // `$left += <expression>;`
    result.unshift(
      ts.createExpressionStatement(
        ts.createBinary(
          LEFT,
          ts.SyntaxKind.PlusEqualsToken,
          left
        )
      )
    );
  }
  return result;
}

function createDataConstructionContinuation(label : string, property : string, parameterNames : Array<string>, expression : ts.Expression, newArguments : Array<ts.Expression>) : Array<ts.Statement> {
  return [
    assignToStaticDataProperty(property, expression),
    ...createContinuation(label, parameterNames, newArguments)
  ];
}

function createMultipleDataConstructionContinuation(label : string, property : string, parameterNames : Array<string>, expression : ts.Expression, newArguments : Array<ts.Expression>) : Array<ts.Statement> {
  return [
    assignToDynamicDataProperty(expression),
    // `$field = '<property>';`
    ts.createExpressionStatement(
      ts.createAssignment(
        FIELD,
        ts.createLiteral(property)
      )
    ),
    ...createContinuation(label, parameterNames, newArguments)
  ];
}

function createBooleanContinuation(label : string, parameterNames : Array<string>, mainOperator: BooleanKind, expression : ts.Expression, newArguments : Array<ts.Expression>) : Array<ts.Statement> {
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
    ...createContinuation(label, parameterNames, newArguments)
  ];
}

function paramReassignments(parameterNames : Array<string>, newArguments : Array<ts.Expression>) : Array<ts.Statement> {
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
  // `$end = $end.b = _List_Cons(element, _List_Nil);`
  return ts.createExpressionStatement(
    ts.createAssignment(
      END,
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
    )
  );
}

function assignToStaticDataProperty(property : string, expression : ts.Expression) : ts.Statement {
  // `$end = $end.<property> = <expression where recursive call has been replaced by null>;`
  return ts.createExpressionStatement(
    ts.createAssignment(
      END,
      ts.createAssignment(
        ts.createPropertyAccess(
          END,
          property
        ),
        expression
      )
    )
  );
}

function assignToDynamicDataProperty(expression : ts.Expression) : ts.Statement {
  // `$end = $end[$field] = <expression where recursive call has been replaced by null>;`
  return ts.createExpressionStatement(
    ts.createAssignment(
      END,
      ts.createAssignment(
        ts.createElementAccess(
          END,
          FIELD
        ),
        expression
      )
    )
  );
}