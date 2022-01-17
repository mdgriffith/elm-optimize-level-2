import ts from 'typescript';
import { ast } from './utils/create';
import { determineType, PossibleReturnType } from './utils/determineType';

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

// TODO Support shortcutting creating list when _List_fromArray is on the list to add
// function _Utils_copyListAndGetEndForLiteral(end, arr)
//   {
//   	for (var i = 0; i < arr.length; i++)
//   	{
//   		end = end.b = _List_Cons(arr[i], _List_Nil);
//   	}
//   	return end;
//   }

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

// TODO Get hints about the return type from other return statements
// For instance, here we know that the type will be string but we don't yet know that at the recursive call site
// repeat n str =
//     if n <= 0 then
//         "suffix"
//     else
//         str ++ repeat (n - 1) str

// TODO Avoid re-computing extracts every time: Instead store them in a dictionary by the node id/position. If there's no entry because we skipped it, then compute the extract.


/*

The Elm compiler does tail-recursive call optimization, as explained in https://jfmengels.net/tail-call-optimization/

TODO Explain the concept of holes and when/why we can optimize some functions but not others

# How does this transformer work?

On a high level, this transformer analyzes functions to find if they're recursive and optimizable.

It does one visit of the AST to analyze the `return` expressions of functions to try and find recursive calls,
allowing it to determine what kind of optimization strategy to adopt.

It then does a second pass to alter the function. It rewrites the body of the function to use iteration (using a loop)
and changes the `return` statements to `continue` statements with some additional variable manipulations.

Let's go into the details.

## Analyzing return statements

To know whether a function is recursive, we need to look at the return statements to find "local recursion patterns".

If we have a function named `rec`, then a call like `rec(n - 1)` is a "plain" recursive call.
The analysis tries to find additional patterns that we know are potentially optimizable (the examples are Elm code):
- Boolean recursion: `fn x || rec (n - 1)` or `fn x && rec (n - 1)`
- Cons recursion: `x :: rec (n - 1)`
- Addition recursion: `x + rec (n - 1)` (can be used for both numbers and strings)
- Multiplication recursion: `x * rec (n - 1)
- Concatenation recursion: `x ++ rec (n - 1)` or `rec (n - 1) ++ x` using the JS `_Utils_ap` function (can be used for both strings and lists)
- Data construction recursion: `Cons x (rec (n - 1))`

## Combining local recursion patterns to find the function recursion type

The way we are going to update the `return` statements depends on the local recursion patterns, but the way we change the "outer body" of the function
depends on the combination of those, which we are going to distill into a "function recursion type".

For instance, if we have the following code:
```elm
sum : List number -> number
sum list =
    case list of
        [] ->
            0

        x :: xs ->
            x + sum xs
```
```js
var sum = function (list) {
  if (!list.b) {
    return 0;
  } else {
    var x = list.a;
    var xs = list.b;
    return x + sum(xs);
  }
};
```
then we will transform it to the following:
```js
var sum = function (list) {
  var $result = 0; // Change dependent on the function recursion type
  sum: while (true) {
    if (!list.b) {
      // Change dependent on the local recursion pattern
      // (in practice we remove the + 0) 
      return $result + 0;
    } else {
      var x = list.a;
      var xs = list.b;
      // Change dependent on the local recursion pattern
      $result += x;
      list = xs;
      continue sum;
    }
  }
};
```

While plain recursion and boolean recursion calls are always optimizable, not all of the others are without some more information or intersecting information.

For instance, when we find concatenation recursion calls (like `x ++ rec (n - 1)`), we don't have enough information to optimize this.
For this optimization in particular, we need to create an initial value to which to append all the `return` expression, but since we don't
know if we're dealing with strings (initial value `""`) or lists (initial value `[]`).

This is also the case for the addition recursion, where we don't know if the JS `+` is for adding numbers or strings.
Though in that case, we can rely on the fact that the compiler (at least until 0.19.1) won't use `+` unless there is a literal string somewhere,
so we can assume we're adding numbers unless we found such a literal string.

So in essence, we need to combine the different local recursion patterns to find which kind of function recursion optimization we're going to apply.
For instance, if in one branch we see an addition recursion call, and in another one we see concatenation recursion, we can infer that we're dealing with strings,
that the function type should be string concatenation recursion and that the initial value for the accumulator should be `""` (instead of 0 or `[]`).

We will also use trivial type inference on (recursive and non-recursive) return statements to figure out the missing bits. If we see a `return "";` somewhere,
we know by the fact that all return statements return the same type, that we're dealing with strings and not numbers or lists, which can help determine whether
we need to do list concatenation recursion or string concatenation recursion.

Once we have figured the exact function recursion type, we can stop the analysis and start transforming the body and the return statements.

## Transforming the body

Once we detect recursion, we know that we will need to have a while loop. Because the Elm compiler already introduces while loops for plain recursive calls
(modulo some issues with piping), we will just need to make sure we don't introduce a second one.

Depending on the function recursion type, we also need to add accumulator variables to help us accumulate the results of the recursive calls.
For example and as shown in the previous `sum` example, the initial value will be an accumulator holding the value `0`, and for multiplication it will be `1`.

For strings, dependent on whether we find `foo ++ rec (n - 1)` and/or `rec (n - 1) ++ foo`
(both can be found in the same function, and we can also find `foo ++ rec (n - 1) ++ bar`),
we will add a variable `$left` and/or `$right` containing `""`.


## Transforming the return statements

Already present `continue` statements that are introduced by the Elm compiler aren't touched and don't need to be altered.

The return statement updates will highly depend on the function recursion type.

For plain recursion functions, we leave the non-recursive calls untouched and only touch the (plain) recursive calls.

For boolean recursion functions/calls, we do the same, except that we transform `fn x || rec (n - 1)` into `if (fn(x)) { return true; } else { <...> ; continue; }`.

For the other recursive function types, we will basically do the same operations for recursive calls, along with a few operations to mutate the accumulator.
For instance, when encountering `return x + rec(n - 1)`, we will transform that to the following:

```js
$result += x; // Updates the accumulator
n = n - 1; // Changes the arguments to the function, like for plain recursion
continue rec; // Re-start the loop
```

If we have a non-recursive call, then we need to update the return value to include the accumulator.
For an addition recursion, `return x` would be transformed to `return $result + x`.

*/

type Context = any;

const LIST_CONS = "_List_Cons";
const LIST_FROM_ARRAY = "_List_fromArray";
const EMPTY_LIST = "_List_Nil";
const UTILS_AP = "_Utils_ap";
const COPY_LIST_AND_GET_END = "_Utils_copyListAndGetEnd";
const LIST_APPEND = "$elm$core$List$append";

const newFunctionDefinitions: {[key: string]: string} = {
  [COPY_LIST_AND_GET_END]:
    `function _Utils_copyListAndGetEnd(root, xs) {
      for (; xs.b; xs = xs.b) {
        root = root.b = _List_Cons(xs.a, _List_Nil);
      }
      return root;
    }`,
};

export const createTailCallRecursionTransformer = (forTests: boolean) => (context : Context) => {
  return (sourceFile : ts.SourceFile) => {
    const functionsToInsert: Set<string> = new Set();

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

          const functionName = node.name.text;
          const labelSplits = functionName.split("$");
          const label = labelSplits[labelSplits.length - 1] || functionName;

          const functionAnalysis : FunctionAnalysis = determineRecursionType(functionName, label, foundFunction.fn.body);
          if (functionAnalysis.recursionType.kind === FunctionRecursionKind.F_NotRecursive) {
            return node;
          }

          const parameterNames : Array<string> = foundFunction.fn.parameters.map(param => {
            return ts.isIdentifier(param.name) ? param.name.text : '';
          });
          const newBody : ts.Block = updateFunctionBody(functionsToInsert, functionAnalysis.recursionType, functionAnalysis.shouldAddWhileLoop, functionName, label, parameterNames, foundFunction.fn.body, context);

          const variableDeclaration : ts.VariableDeclaration = ts.getMutableClone(node);
          variableDeclaration.initializer = foundFunction.update(newBody);
          return variableDeclaration;
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return introduceFunctions(functionsToInsert, ts.visitNode(sourceFile, visitor), forTests, context);
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

        const functionCall = ts.getMutableClone(node);
        functionCall.arguments = ts.createNodeArray([newFn]);
        return functionCall;
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

enum RecursionTypeKind {
  NotRecursive,
  PlainRecursion,
  BooleanRecursion,
  ConsRecursion,
  DataConstructionRecursion,
  MultipleDataConstructionRecursion,
  AddRecursion,
  StringConcatRecursion,
  ConcatRecursion,
  MultiplyRecursion,
};

enum BooleanKind {
  And,
  Or,
};

enum FunctionRecursionKind {
  F_NotRecursive,
  F_PlainRecursion,
  F_BooleanRecursion,
  F_ListRecursion,
  F_DataConstructionRecursion,
  F_MultipleDataConstructionRecursion,
  F_AddRecursion,
  F_StringConcatRecursion,
  F_ConcatRecursion,
  F_MultiplyRecursion,
};

type FunctionRecursion
  = { kind: FunctionRecursionKind.F_PlainRecursion }
  | ListRecursion
  | { kind: FunctionRecursionKind.F_BooleanRecursion }
  | { kind: FunctionRecursionKind.F_DataConstructionRecursion, property: string }
  | { kind: FunctionRecursionKind.F_MultipleDataConstructionRecursion }
  | { kind: FunctionRecursionKind.F_AddRecursion, numbersConfirmed : boolean, left: boolean, right: boolean }
  | StringConcatRecursion
  | { kind: FunctionRecursionKind.F_MultiplyRecursion }

type StringConcatRecursion =
  {
    kind: FunctionRecursionKind.F_StringConcatRecursion,
    left: boolean,
    right: boolean
  }

type ListRecursion =
  {
    kind: FunctionRecursionKind.F_ListRecursion,
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
  | ConcatRecursion

type NotRecursiveFunction =
  {
    kind: FunctionRecursionKind.F_NotRecursive
  }

type NotRecursive =
  {
    kind: RecursionTypeKind.NotRecursive
  }

type PlainRecursion =
  {
    kind: RecursionTypeKind.PlainRecursion,
    arguments : Array<ts.Expression>
  }

type ConsRecursion =
  {
    kind: RecursionTypeKind.ConsRecursion,
    elements : ts.Expression[],
    arguments : Array<ts.Expression>
  }

type BooleanRecursion =
  {
    kind: RecursionTypeKind.BooleanRecursion,
    expression: ts.Expression,
    booleanKind: BooleanKind,
    arguments : Array<ts.Expression>
  }

type DataConstructionRecursion =
  {
    kind: RecursionTypeKind.DataConstructionRecursion,
    property: string,
    expression : ts.Expression,
    arguments : Array<ts.Expression>
  }

type MultipleDataConstructionRecursion =
  {
    kind: RecursionTypeKind.MultipleDataConstructionRecursion,
    property: string,
    expression : ts.Expression,
    arguments : Array<ts.Expression>
  }

type AddRecursion =
  {
    kind: RecursionTypeKind.AddRecursion,
    left : ts.Expression | null,
    right : ts.Expression | null,
    arguments : Array<ts.Expression>,
    adds: "numbers" | "strings" | null
  }

type ConcatRecursion =
  {
    kind: RecursionTypeKind.ConcatRecursion,
    left : ts.Expression | null,
    right : ts.Expression | null,
    arguments : Array<ts.Expression>,
    concatenates: "strings" | "lists" | null
  }

type MultiplyRecursion =
  {
    kind: RecursionTypeKind.MultiplyRecursion,
    expression : ts.Expression,
    arguments : Array<ts.Expression>
  }

type FunctionAnalysis =
  {
    recursionType : FunctionRecursion | NotRecursiveFunction,
    shouldAddWhileLoop : boolean
  }

function determineRecursionType(functionName : string, label : string, body : ts.Node) : FunctionAnalysis {
  let recursionType : FunctionRecursion | NotRecursiveFunction = { kind: FunctionRecursionKind.F_NotRecursive };
  let shouldAddWhileLoop : boolean = true;
  let inferredType : PossibleReturnType = null;
  const iter = findReturnStatements(label, body);

  while (!hasRecursionTypeBeenDetermined(recursionType)) {
    const next = iter.next();
    if (next.done) { break; }
    if (next.value === "has-while-loop") {
      shouldAddWhileLoop = false;
      continue;
    }

    const node : ts.Expression = next.value;
    const recursionForReturn : Recursion | NotRecursive = extractRecursionKindFromExpression(functionName, node);

    if (recursionForReturn.kind === RecursionTypeKind.NotRecursive) {
      const refinement = refineTypeForExpression(recursionType, node, inferredType);
      recursionType = refinement.recursionType;
      inferredType = refinement.inferredType;
    }
    else {
      recursionType = refineRecursionType(recursionType, inferredType, recursionForReturn);
    }
  }

  return { recursionType, shouldAddWhileLoop };
}

function hasRecursionTypeBeenDetermined(recursion : FunctionRecursion | NotRecursiveFunction) {
  switch (recursion.kind) {
    case FunctionRecursionKind.F_NotRecursive: return false;
    case FunctionRecursionKind.F_PlainRecursion: return false;
    case FunctionRecursionKind.F_BooleanRecursion: return true;
    case FunctionRecursionKind.F_MultiplyRecursion: return true;
    case FunctionRecursionKind.F_MultipleDataConstructionRecursion: return true;
    case FunctionRecursionKind.F_DataConstructionRecursion: return false;
    case FunctionRecursionKind.F_AddRecursion: return recursion.numbersConfirmed;
    case FunctionRecursionKind.F_ListRecursion: {
      // We need to know for sure on which side there will be concatenation.
      return recursion.left === true && recursion.right === true;
    }
    case FunctionRecursionKind.F_StringConcatRecursion:
      // We need to know for sure on which side there will be concatenation.
      return recursion.left === true && recursion.right === true;
  }
}

function refineRecursionType(
  recursionType : FunctionRecursion | NotRecursiveFunction,
  inferredType : PossibleReturnType,
  recursion : Recursion | NotRecursive
) : FunctionRecursion | NotRecursiveFunction {
  switch (recursionType.kind) {
    case FunctionRecursionKind.F_BooleanRecursion:
      return recursionType;

    case FunctionRecursionKind.F_MultiplyRecursion:
      return recursionType;

    case FunctionRecursionKind.F_MultipleDataConstructionRecursion:
      return recursionType;

    case FunctionRecursionKind.F_NotRecursive:
      return toFunctionRecursion(recursion, inferredType);

    case FunctionRecursionKind.F_PlainRecursion:
      return toFunctionRecursion(recursion, inferredType);

    case FunctionRecursionKind.F_DataConstructionRecursion: {
      if (recursion.kind === RecursionTypeKind.DataConstructionRecursion && recursion.property !== recursionType.property) {
        return { kind: FunctionRecursionKind.F_MultipleDataConstructionRecursion };
      }
      return recursionType;
    }

    case FunctionRecursionKind.F_AddRecursion: {
      switch (recursion.kind) {
        case RecursionTypeKind.AddRecursion: {
          if (recursion.adds === "strings" || inferredType === "strings" || inferredType === "strings-or-lists") {
            return {
              kind: FunctionRecursionKind.F_StringConcatRecursion,
              left: recursionType.left || !!recursion.left,
              right: recursionType.right || !!recursion.right
            };
          }
          return {
            kind: FunctionRecursionKind.F_AddRecursion,
            numbersConfirmed: recursion.adds === "numbers" || inferredType === "numbers",
            left: recursionType.left || !!recursion.left,
            right: recursionType.right || !!recursion.right
          };
        }
        case RecursionTypeKind.ConcatRecursion: {
          return {
            kind: FunctionRecursionKind.F_StringConcatRecursion,
            left: recursionType.left || !!recursion.left,
            right: recursionType.right || !!recursion.right
          };
        }
        default: {
          return recursionType;
        }
      }
    };

    case FunctionRecursionKind.F_ListRecursion: {
      switch (recursion.kind) {
        case RecursionTypeKind.ConcatRecursion: {
          return {
            kind: FunctionRecursionKind.F_ListRecursion,
            left: recursionType.left || !!recursion.left,
            right: recursionType.right || !!recursion.right
          };
        }
        case RecursionTypeKind.ConsRecursion: {
          return {
            kind: FunctionRecursionKind.F_ListRecursion,
            left: true,
            right: recursionType.right
          };
        }
        default: {
          return recursionType;
        }
      }
    }

    case FunctionRecursionKind.F_StringConcatRecursion: {
      switch (recursion.kind) {
        case RecursionTypeKind.AddRecursion: {
          return {
            kind: FunctionRecursionKind.F_StringConcatRecursion,
            left: recursionType.left || !!recursion.left,
            right: recursionType.right || !!recursion.right
          };
        }
        case RecursionTypeKind.ConcatRecursion: {
          return {
            kind: FunctionRecursionKind.F_StringConcatRecursion,
            left: recursionType.left || !!recursion.left,
            right: recursionType.right || !!recursion.right
          };
        }
        default: {
          return recursionType;
        }
      }
    }
  }
}

function refineTypeForExpression(
  recursionType : FunctionRecursion | NotRecursiveFunction,
  node : ts.Expression,
  inferredType : PossibleReturnType
) : { recursionType : FunctionRecursion | NotRecursiveFunction, inferredType : PossibleReturnType } {
  switch (recursionType.kind) {
    case FunctionRecursionKind.F_BooleanRecursion:
    case FunctionRecursionKind.F_MultiplyRecursion:
    case FunctionRecursionKind.F_MultipleDataConstructionRecursion:
    case FunctionRecursionKind.F_ListRecursion:
    case FunctionRecursionKind.F_DataConstructionRecursion:
    case FunctionRecursionKind.F_StringConcatRecursion: {
      return {recursionType, inferredType };
    }

    case FunctionRecursionKind.F_NotRecursive:
    case FunctionRecursionKind.F_PlainRecursion: {
      return {
        recursionType,
        inferredType: determineType(node, inferredType)
      };
    }

    case FunctionRecursionKind.F_AddRecursion: {
      inferredType = determineType(node, inferredType);
      if (inferredType === "strings" || inferredType === "strings-or-lists") {
        recursionType = {
          kind: FunctionRecursionKind.F_StringConcatRecursion,
          left: recursionType.left,
          right: recursionType.right
        };
      }
      else if (inferredType === "numbers") {
        recursionType = {
          kind: FunctionRecursionKind.F_AddRecursion,
          numbersConfirmed: true,
          left: recursionType.left,
          right: recursionType.right
        };
      }
      return { recursionType, inferredType };
    }
  }
}

function* findReturnStatements(label : string, body : ts.Node) : Generator<ts.Expression | "has-while-loop", void, null> {
  let nodesToVisit : Array<ts.Node> = [body];
  let node : ts.Node | undefined;

  loop: while (node = nodesToVisit.shift()) {
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
      if (node.label.text === label) {
        yield "has-while-loop";
      }
      continue loop;
    }

    if (ts.isWhileStatement(node)) {
      nodesToVisit.unshift(node.statement);
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
        nodesToVisit = [
          ts.createReturn(node.expression.whenTrue),
          ts.createReturn(node.expression.whenFalse),
          ...nodesToVisit
        ];
        continue loop;
      }

      if (ts.isParenthesizedExpression(node.expression)) {
        nodesToVisit.unshift(ts.createReturn(node.expression.expression));
        continue loop;
      }

      yield node.expression;
      continue loop;
    }
  }
}

const START = ts.createIdentifier("$start");
const END = ts.createIdentifier("$end");
const TAIL = ts.createIdentifier("$tail");
const FIELD = ts.createIdentifier("$field");
const RESULT = ts.createIdentifier("$result");
const LEFT = ts.createIdentifier("$left");
const RIGHT = ts.createIdentifier("$right");

function consDeclarations(left : boolean, right : boolean) {
  return [
    ...(left ? consLeftDeclarations : []),
    ...(right ? [consrightDeclaration] : [])
  ];
}

const consLeftDeclarations =
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

// `var $tail = _List_Nil;`
const consrightDeclaration =
  ts.createVariableStatement(
    undefined,
    [ts.createVariableDeclaration(
      TAIL,
      undefined,
      ts.createIdentifier(EMPTY_LIST)
    )]
  );

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

function updateFunctionBody(functionsToInsert : Set<string>, recursionType : FunctionRecursion, shouldAddWhileLoop : boolean, functionName : string, label : string, parameterNames : Array<string>, body : ts.Block, context : Context) : ts.Block {
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
      return updateReturnStatement(functionsToInsert, recursionType, functionName, label, parameterNames, node.expression) || node;
    }

    return node;
  }

  const declarations = declarationsForRecursiveFunction(recursionType);

  if (shouldAddWhileLoop) {
    return ts.createBlock(
      [
        ...declarations,
        // `<label>: while (true) { <block> }`
        ts.createLabel(label, ts.createWhile(ts.createTrue(), updatedBlock))
      ],
      true
    );
  }

  return ts.updateBlock(
    updatedBlock,
    [
      ...declarations,
      ...updatedBlock.statements
    ]
  );
}

function declarationsForRecursiveFunction(recursionType : FunctionRecursion) : ts.Statement[] {
  switch (recursionType.kind) {
    case FunctionRecursionKind.F_PlainRecursion:
    case FunctionRecursionKind.F_BooleanRecursion: {
      return [];
    }
    case FunctionRecursionKind.F_AddRecursion: {
      // `var $result = 0;`
      return [resultDeclaration(0)];
    }
    case FunctionRecursionKind.F_StringConcatRecursion: {
      return [stringConsDeclaration(recursionType.left, recursionType.right)];
    }

    case FunctionRecursionKind.F_MultiplyRecursion: {
      // `var $result = 1;`
      return [resultDeclaration(1)];
    }

    case FunctionRecursionKind.F_ListRecursion: {
      return consDeclarations(recursionType.left, recursionType.right);
    }

    case FunctionRecursionKind.F_DataConstructionRecursion: {
      return constructorDeclarations(recursionType.property);
    }

    case FunctionRecursionKind.F_MultipleDataConstructionRecursion: {
      return multipleConstructorDeclarations;
    }
  }
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
  functionsToInsert : Set<string>,
  recursionType : FunctionRecursion,
  functionName : string,
  label : string,
  parameterNames : Array<string>,
  expression : ts.Expression
) : ts.Statement[] | ts.ReturnStatement | null {
  if (ts.isConditionalExpression(expression)) {
    const maybeLeft = updateReturnStatement(functionsToInsert, recursionType, functionName, label, parameterNames, expression.whenTrue);
    const maybeRight = updateReturnStatement(functionsToInsert, recursionType, functionName, label, parameterNames, expression.whenFalse);
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

  if (ts.isParenthesizedExpression(expression)) {
    return updateReturnStatement(functionsToInsert, recursionType, functionName, label, parameterNames, expression.expression);
  }

  const extract = extractRecursionKindFromExpression(functionName, expression);
  switch (recursionType.kind) {
    case FunctionRecursionKind.F_AddRecursion: {
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

    case FunctionRecursionKind.F_StringConcatRecursion: {
      return updateReturnStatementForStringConcat(
        recursionType,
        extract,
        label,
        parameterNames,
        expression
      );
    }

    case FunctionRecursionKind.F_MultiplyRecursion: {
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

    case FunctionRecursionKind.F_ListRecursion: {
      return updateReturnStatementForListRecursion(recursionType, functionsToInsert, extract, label, parameterNames, expression);
    }

    case FunctionRecursionKind.F_DataConstructionRecursion: {
      return updateReturnStatementForDataConstruction(recursionType.property, extract, label, parameterNames, expression);
    }

    case FunctionRecursionKind.F_MultipleDataConstructionRecursion: {
      return updateReturnStatementForMultipleDataConstruction(extract, label, parameterNames, expression)
    }

    case FunctionRecursionKind.F_BooleanRecursion: {
      if (extract.kind === RecursionTypeKind.PlainRecursion) {
        return createContinuation(label, parameterNames, extract.arguments);
      }
      if (extract.kind === RecursionTypeKind.BooleanRecursion) {
        return createBooleanContinuation(label, parameterNames, extract.booleanKind, extract.expression, extract.arguments);
      }
      return null;
    }

    case FunctionRecursionKind.F_PlainRecursion: {
      if (extract.kind === RecursionTypeKind.PlainRecursion) {
        return createContinuation(label, parameterNames, extract.arguments);
      }
      return null;
    }
  }
}

function updateReturnStatementForListRecursion(recursion : ListRecursion, functionsToInsert : Set<string>, extract : Recursion | NotRecursive, label : string, parameterNames : Array<string>, expression : ts.Expression) : ts.Statement[] | ts.ReturnStatement {
  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionTypeKind.ConsRecursion) {
    return createConsContinuation(label, parameterNames, extract.elements, extract.arguments);
  }

  if (extract.kind === RecursionTypeKind.ConcatRecursion) {
    return createListConcatContinuation(functionsToInsert, label, parameterNames, extract.left, extract.right, extract.arguments);
  }

  const isValueEmpty = ts.isIdentifier(expression) && expression.text === EMPTY_LIST;

  function returnStart() {
    // `return $start.b;`
    return ts.createReturn(
      ts.createPropertyAccess(START, "b")
    );
  }

  // End of the recursion, add the value to the list and return the whole list.

  if (recursion.left) {
    if (recursion.right) {
      if (isValueEmpty) {
        return [
          // `$end.b = $tail;`
          ts.createExpressionStatement(
            ts.createAssignment(
              ts.createPropertyAccess(END, "b"),
              TAIL
            )
          ),
          returnStart()
        ];
      }
      return [
        // `$end.b = A2($elm$core$List$append, <expression>, $tail);`
        ts.createExpressionStatement(
          ts.createAssignment(
            ts.createPropertyAccess(END, "b"),
            combineValueAndTail(expression)
          )
        ),
        returnStart()
      ];
    }

    // We know it's a left recursion only

    if (isValueEmpty) {
      // Adding `[]` would not do anything, so don't add it
      return returnStart();
    }

    // `$end.b = <expression>;`
    return [
      ts.createExpressionStatement(
        ts.createAssignment(
          ts.createPropertyAccess(
            END,
            "b"
          ),
          expression
        )
      ),
      returnStart()
    ];
  }

  // We know it's a right recursion only
  if (isValueEmpty) {
    // Adding `[]` would not do anything, so don't add it
    // `return $tail;`
    return ts.createReturn(TAIL);
  }

  // `return A2($elm$core$List$append, <expression>, $tail);`
  return ts.createReturn(combineValueAndTail(expression));
}

type ArithmeticData = {
  neutralValue: number | string,
  binaryToken: ts.SyntaxKind,
  assignmentToken: ts.CompoundAssignmentOperator,
}

function updateReturnStatementForArithmeticOperation(
  operation: ArithmeticData,
  extract : Recursion | NotRecursive,
  label : string,
  parameterNames : Array<string>,
  expression : ts.Expression
) : ts.Statement[] | ts.ReturnStatement | null {
  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionTypeKind.AddRecursion) {
    return createArithmeticContinuation(
      operation,
      label,
      parameterNames,
      combineExpressionsWithPlus(extract.left, extract.right),
      extract.arguments
    );
  }

  if (extract.kind === RecursionTypeKind.MultiplyRecursion) {
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
  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionTypeKind.AddRecursion) {
    return createStringConcatContinuation(label, parameterNames, extract.left, extract.right, extract.arguments);
  }

  if (extract.kind === RecursionTypeKind.ConcatRecursion) {
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
  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionTypeKind.DataConstructionRecursion) {
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
  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return createContinuation(label, parameterNames, extract.arguments);
  }

  if (extract.kind === RecursionTypeKind.DataConstructionRecursion) {
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

function toFunctionRecursion(recursion : Recursion | NotRecursive, inferredType : PossibleReturnType) : FunctionRecursion | NotRecursiveFunction {
  switch (recursion.kind) {
    case RecursionTypeKind.NotRecursive:
      return { kind: FunctionRecursionKind.F_NotRecursive };
    case RecursionTypeKind.PlainRecursion:
      return { kind: FunctionRecursionKind.F_PlainRecursion };
    case RecursionTypeKind.ConsRecursion:
      return { kind: FunctionRecursionKind.F_ListRecursion, left: true, right: false };
    case RecursionTypeKind.BooleanRecursion:
      return { kind: FunctionRecursionKind.F_BooleanRecursion };
    case RecursionTypeKind.DataConstructionRecursion:
      return { kind: FunctionRecursionKind.F_DataConstructionRecursion, property: recursion.property };
    case RecursionTypeKind.MultipleDataConstructionRecursion:
      return { kind: FunctionRecursionKind.F_MultipleDataConstructionRecursion };
    case RecursionTypeKind.AddRecursion:
      if (recursion.adds === "strings" || inferredType === "strings" || inferredType === "strings-or-lists") {
        return { kind: FunctionRecursionKind.F_StringConcatRecursion, left: !!recursion.left, right: !!recursion.right };
      }
      return { kind: FunctionRecursionKind.F_AddRecursion, numbersConfirmed: recursion.adds === "numbers", left: !!recursion.left, right: !!recursion.right };
    case RecursionTypeKind.ConcatRecursion:
      if (recursion.concatenates === "strings" || inferredType === "strings" || inferredType === "numbers-or-strings") {
        return { kind: FunctionRecursionKind.F_StringConcatRecursion, left: !!recursion.left, right: !!recursion.right };
      }
      else if (recursion.concatenates === "lists" || inferredType === "lists") {
        return { kind: FunctionRecursionKind.F_ListRecursion, left: !!recursion.left, right: !!recursion.right };
      }
      // TODO It might still be plain recursive in some places?
      return { kind: FunctionRecursionKind.F_NotRecursive };
    case RecursionTypeKind.MultiplyRecursion:
      return { kind: FunctionRecursionKind.F_MultiplyRecursion };
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

  return { kind: RecursionTypeKind.NotRecursive };
}

function extractRecursionKindFromCallExpression(functionName : string, node : ts.CallExpression) : Recursion | NotRecursive {
  if (!ts.isIdentifier(node.expression)) {
    return { kind: RecursionTypeKind.NotRecursive };
  }

  // Is "fn(...)"
  if (node.expression.text === functionName) {
    return {
      kind: RecursionTypeKind.PlainRecursion,
      arguments: [...node.arguments]
    };
  }

  const [firstArg, secondArg, thirdArg] = node.arguments;
  // Is "_Utils_ap(...)"
  if (node.expression.text === UTILS_AP) {
    let recursion = null;
    if (ts.isCallExpression(secondArg)) {
      recursion = extractRecursionKindFromUtilsAppendExpression(functionName, secondArg, {left: firstArg});
    }
    if (!recursion && ts.isCallExpression(firstArg)) {
      recursion = extractRecursionKindFromUtilsAppendExpression(functionName, firstArg, {right: secondArg});
    }
    return recursion || { kind: RecursionTypeKind.NotRecursive };
  }

  // Is "AX(fn, ...)"
  if (!node.expression.text.startsWith("A")
    || !ts.isIdentifier(firstArg)
  ) {
    return { kind: RecursionTypeKind.NotRecursive };
  }

  if (firstArg.text === functionName) {
    return {
      kind: RecursionTypeKind.PlainRecursion,
      arguments: node.arguments.slice(1)
    };
  }

  // Elm: Is x :: <recursive call>
  // JS: Is A2($elm$core$List$cons, x, <recursive call>)
  if (firstArg.text === "$elm$core$List$cons" && ts.isCallExpression(thirdArg)) {
    const thirdArgExtract = extractRecursionKindFromExpression(functionName, thirdArg);
    if (thirdArgExtract.kind === RecursionTypeKind.PlainRecursion) {
      return {
        kind: RecursionTypeKind.ConsRecursion,
        elements: [secondArg],
        arguments: thirdArgExtract.arguments
      };
    }

    if (thirdArgExtract.kind === RecursionTypeKind.ConsRecursion) {
      thirdArgExtract.elements.push(secondArg);
      return thirdArgExtract;
    }
  }

  // Is constructor call
  // Elm: `type X = Y <args> X <args> | ... ; Y <...> <recursive call> <...>
  // JS: `return AX(Y, ..., <recursive call>, ...);
  if (isDataConstructor(firstArg.text)) {
    let extract : Recursion | NotRecursive = { kind: RecursionTypeKind.NotRecursive };

    for (let i = 1; extract.kind === RecursionTypeKind.NotRecursive && i < node.arguments.length; i++) {
      const argExtract = extractRecursionKindFromExpression(functionName, node.arguments[i]);
      // TODO Support nested data construction
      if (argExtract.kind === RecursionTypeKind.PlainRecursion) {
        const argumentsWithHole : ts.Expression[] = [...node.arguments];
        argumentsWithHole[i] = ts.createNull();

        extract = {
          kind: RecursionTypeKind.DataConstructionRecursion,
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

  return { kind: RecursionTypeKind.NotRecursive };
}

function extractRecursionKindFromUtilsAppendExpression(functionName : string, expression : ts.Expression, args: { left ?: ts.Expression, right ?: ts.Expression }) : ConcatRecursion | null {
  const extract = extractRecursionKindFromExpression(functionName, expression);
  // TODO Support cons recursion here
  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return {
      kind: RecursionTypeKind.ConcatRecursion,
      left : args.left || null,
      right : args.right || null,
      arguments : extract.arguments,
      concatenates: (args.left && isThisAStringOrList(args.left))
        || (args.right && isThisAStringOrList(args.right))
        || null
    };
  }
  else if (extract.kind === RecursionTypeKind.ConcatRecursion) {
    if (args.left) {
      extract.left = combineExpressionsWithUtilsAp(extract.left, args.left);
      extract.concatenates = extract.concatenates || isThisAStringOrList(args.left);
    } else if (args.right) {
      extract.right = combineExpressionsWithUtilsAp(args.right, extract.right);
      extract.concatenates = extract.concatenates || isThisAStringOrList(args.right);
    }
    return extract;
  }

  return null;
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
    if (extract.kind === RecursionTypeKind.NotRecursive) {
      return extractRecursionKindFromAdditionExpression(functionName, node.left, node.right, true);
    }
    return extract;
  }

  if (node.operatorToken.kind === ts.SyntaxKind.AsteriskToken) {
    const extract = extractRecursionKindFromMultiplicationExpression(functionName, node.right, node.left)
    if (extract.kind === RecursionTypeKind.NotRecursive) {
      return extractRecursionKindFromMultiplicationExpression(functionName, node.left, node.right);
    }
    return extract;
  }

  return { kind: RecursionTypeKind.NotRecursive };
}

function extractRecursionKindFromBooleanExpression(functionName : string, node : ts.BinaryExpression) : Recursion | NotRecursive {
  const extract = extractRecursionKindFromExpression(functionName, node.right);

  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return {
      kind: RecursionTypeKind.BooleanRecursion,
      expression: node.left,
      booleanKind: node.operatorToken.kind === ts.SyntaxKind.BarBarToken ? BooleanKind.Or : BooleanKind.And,
      arguments: extract.arguments
    };
  }

  if (extract.kind === RecursionTypeKind.BooleanRecursion) {
    // `<node.left> && <expressions from node.right>` (operation can be either && or ||)
    extract.expression = ts.createBinary(node.left, node.operatorToken, extract.expression);
    return extract;
  }

  return { kind: RecursionTypeKind.NotRecursive };
}

function extractRecursionKindFromAdditionExpression(functionName : string, expression : ts.Expression, otherOperand : ts.Expression, isLeft : boolean) : Recursion | NotRecursive {
  const extract = extractRecursionKindFromExpression(functionName, expression);

  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return {
      kind: RecursionTypeKind.AddRecursion,
      left: isLeft ? null : otherOperand,
      right: isLeft ? otherOperand : null,
      arguments: extract.arguments,
      adds: isThisANumberOrString(otherOperand)
    };
  }

  if (extract.kind === RecursionTypeKind.AddRecursion) {
    if (isLeft) {
      // `<expression> + <expressions from otherOperand>`
      extract.right = combineExpressionsWithPlus(extract.right, otherOperand);
    } else {
      // `<expressions from otherOperand> + <expression>`
      extract.left = combineExpressionsWithPlus(otherOperand, extract.left);
    }
    extract.adds = extract.adds || isThisANumberOrString(otherOperand);
    return extract;
  }

  // TODO If the function is otherwise plain recursive in other places, then we should still make this function plain recursive.
  return { kind: RecursionTypeKind.NotRecursive };
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

function combineExpressionsWithUtilsAp(left : ts.Expression | null, right : ts.Expression | null) : ts.Expression {
  if (!left) {
    // We're assuming there's always one out of left or right that exists,
    // otherwise we shouldn't have had to call this function.
    return right || ts.createNull();
  }
  if (!right) { return left; }
  return ts.createCall(ts.createIdentifier(UTILS_AP), undefined, [left, right]);
}

// TODO Use determineType instead
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

// TODO Use determineType instead
function isThisAStringOrList(node : ts.Expression) : "strings" | "lists" | null {
  if (ts.isParenthesizedExpression(node)) {
    return isThisAStringOrList(node.expression);
  }

  // TODO We could also detect we're adding strings if we find a `Utils_ap`
  // either here or in another return expression.
  if (ts.isStringLiteral(node)) {
    return "strings";
  }

  if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    return "strings";
  }

  if (ts.isIdentifier(node) && node.text === EMPTY_LIST) {
    return "lists";
  }

  if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === LIST_FROM_ARRAY) {
    return "lists";
  }

  return null;
}

function extractRecursionKindFromMultiplicationExpression(functionName : string, expression : ts.Expression, otherOperand : ts.Expression) : Recursion | NotRecursive {
  const extract = extractRecursionKindFromExpression(functionName, expression);

  if (extract.kind === RecursionTypeKind.PlainRecursion) {
    return {
      kind: RecursionTypeKind.MultiplyRecursion,
      expression: otherOperand,
      arguments: extract.arguments
    };
  }

  if (extract.kind === RecursionTypeKind.MultiplyRecursion) {
    // `<expressions from otherOperand> * <expression>`
    extract.expression = ts.createBinary(otherOperand, ts.SyntaxKind.AsteriskAsteriskToken, extract.expression);
    return extract;
  }

  // TODO If the function is otherwise plain recursive in other places, then we should still make this function plain recursive.
  return { kind: RecursionTypeKind.NotRecursive };
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

function createListConcatContinuation(functionsToInsert : Set<string>, label : string, parameterNames : Array<string>, left : ts.Expression | null, right : ts.Expression | null, newArguments : Array<ts.Expression>) : Array<ts.Statement> {
  let result = createContinuation(label, parameterNames, newArguments);

  if (left) {
    functionsToInsert.add(COPY_LIST_AND_GET_END);
    // $end = _Utils_copyListAndGetEnd($end, <left>);
    result.unshift(
      ts.createExpressionStatement(
        ts.createBinary(
          END,
          ts.SyntaxKind.EqualsToken,
          ts.createCall(
            ts.createIdentifier(COPY_LIST_AND_GET_END),
            undefined,
            [END, left]
          )
        )
      )
    );
  }

  if (right) {
    result.unshift(addListToTail(right));
  }

  return result;
}

function combineValueAndTail(value : ts.Expression) {
  // `A2($elm$core$List$append, <value>, $tail);`
  return ts.createCall(
    ts.createIdentifier("A2"),
    undefined,
    [
      ts.createIdentifier(LIST_APPEND),
      value,
      TAIL
    ]
  );
}

function addListToTail(value : ts.Expression) : ts.ExpressionStatement {
  // `$tail = A2($elm$core$List$append, <value>, $tail);`
  return ts.createExpressionStatement(
    ts.createBinary(
      TAIL,
      ts.SyntaxKind.EqualsToken,
      combineValueAndTail(value)
    )
  );
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


/*******************************************
 * Adding new functions to the source file *
 *******************************************/

function introduceFunctions(functionsToInsert : Set<string>, sourceFile : ts.SourceFile, forTests: boolean, context : Context) {
  let nativeFunctionNodes: ts.Node[] = [];
  for (const nativeFunction of functionsToInsert) {
    nativeFunctionNodes.push(ast(newFunctionDefinitions[nativeFunction]));
  }

  return ts.visitNode(sourceFile, prependNodes(nativeFunctionNodes, context, forTests));
}

/* Taken from recordUpdate.ts and updated, maybe mutualize these? */
function prependNodes(nodes: ts.Node[], context: ts.TransformationContext, forTests: boolean) {
  if (forTests) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isFunctionDeclaration(node) || ts.isVariableStatement(node)) {
        return nodes.concat(node);
      }

      return ts.visitEachChild(node, visitorHelp, context);
    }

    return visitorHelp;
  }

  const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
    if (isFirstFWrapper(node)) {
      return nodes.concat(node);
    }

    return ts.visitEachChild(node, visitorHelp, context);
  }

  return visitorHelp;
}

function isFirstFWrapper(node: ts.Node): boolean {
    return ts.isFunctionDeclaration(node) && node?.name?.text === 'F';
}