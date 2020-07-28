# Overview of Possible Transformations

This is an overview of the transformations that could be interesting for `elm-optimize`


First, we can start with [Robin's article]([explored by Robin in this dev.to post](https://dev.to/skinney/improving-elm-s-compiler-output-5e1h))

### Making type representation isomorphic

*Implemented as `variantShapes.ts`*

Currently the Elm compiler will generate objects that match the shape of a given type.

So, Maybe looks like this:

```
var elm$core$Maybe$Just = function (a) {
    return {$: 0, a: a};
};

var elm$core$Maybe$Nothing = {$: 1};
```

However, the V8 engine is likely better able to optimize these objects if they have the same shape.

So, this transformation fills out the rest of the variants with `field: null` so that they have the same shape.

```
var elm$core$Maybe$Just = function (a) {
    return {$: 0, a: a};
};

var elm$core$Maybe$Nothing = {$: 1, a: null};
```

This does require information from the Elm code itself, which we're currently getting through `elm-tree-sitter`.




### Inlining literal list constructors



### Applying Functions Directly