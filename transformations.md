# Overview of Possible Transformations

This is an overview of the transformations that could be interesting for `elm-optimize`

First, we can start with [Robin's article]([explored by Robin in this dev.to post](https://dev.to/skinney/improving-elm-s-compiler-output-5e1h))

### Making type representation isomorphic

_Implemented as `variantShapes.ts`_

Currently the Elm compiler will generate objects that match the shape of a given type.

So, Maybe looks like this:

```js
var elm$core$Maybe$Just = function(a) {
  return { $: 0, a: a };
};

var elm$core$Maybe$Nothing = { $: 1 };
```

However, the V8 engine is likely better able to optimize these objects if they have the same shape.

So, this transformation fills out the rest of the variants with `field: null` so that they have the same shape.

```js
var elm$core$Maybe$Just = function(a) {
  return { $: 0, a: a };
};

var elm$core$Maybe$Nothing = { $: 1, a: null };
```

This does require information from the Elm code itself, which we're currently getting through `elm-tree-sitter`.

### Inlining literal list constructors

initial

```js
_List_fromArray(['a', 'b', 'c']);
```

with `InlineMode.UsingConsFunc`

```js
_List_cons('a', _List_cons('b', _List_cons('c', _List_Nil)));
```

with InlineMode.UsingLiteralObjects(Mode.Prod)

```js
({ $: 1, a: 'a', b: { $: 1, a: 'b', b: { \$: 1, a: 'c', b: _List_Nil } } });
```

with InlineMode.UsingLiteralObjects(Mode.Dev)

```js
({
  $: '::',
  a: 'a',
  b: { $: '::', a: 'b', b: { \$: '::', a: 'c', b: _List_Nil } },
});
```

## Applying Functions Directly

## Separating Type and Payload Data

we usually have this shape for a variant

```json
{ "$": "typename", "a": a, "b": b }
```

I wonder if this shape would improve representations

```json
{ "$": "typename", "vals": { "a": a, "b": b } }
```

This would mean that the standardized object form would be passed around `{$,vals}`, and also that the object in vals has the same shape based on the value of `$`.
