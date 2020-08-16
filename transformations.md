# Overview of Transformations

This is an overview of the transformations for `elm-optimize`.

Not all of them made the cut, but seeing that a transformation is not as effective as initially thought is really good information.

We got a huge head start because of [Robin's article](https://dev.to/skinney/improving-elm-s-compiler-output-5e1h).

Each transformation also has a rough summary of impact.


# Applying Functions Directly

Elm wraps functions in an object that tracks how many arguments the function takes.

This is so that functions can be partially applied, meaning you can apply a few arguments and get a new function that has those arguments 'built in'


The most significant speedups we've seen is in finding places where we can skip the wrapper and call the actual function directly.


In order to do this, we need to adjust function declarations so that the original function can be called either in the standrd 'wrapped' way, or directly.


before

```js
var MyFunction = F2(function (tag, value) {
        return value;
});
```

after

```js
var MyFunction_fn = F2(function (tag, value) {
        return value;
}), MyFunction = F2(MyFunction_raw);
```


Then, if this function is called with `A2, we can unwrap the wrapper and call the function directly.

before
```js
A2(MyFunction, one two)
```

after
```js
MyFunction_fn(one two)
```



# Passing in Unwrappable Functions to Higher Order Functions






# Making type representation isomorphic

Currently the Elm compiler will generate objects that match the shape of a given type.

`Maybe` looks like this:

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

# Inlining literal list constructors

Before

```js
_List_fromArray(['a', 'b', 'c']);
```

After, using `InlineMode.UsingConsFunc`

```js
_List_cons('a', _List_cons('b', _List_cons('c', _List_Nil)));
```

with `InlineMode.UsingLiteralObjects`

```js
({ $: 1, a: 'a', b: { $: 1, a: 'b', b: { $: 1, a: 'c', b: _List_Nil } } });
```

*Note* - Elm actually had this originally(the literal objects verion)! But there's an issue in Chrome with more than 1000 elements.

There's also tradeoff between asset size and speed.

Also of note, becaue `_List_fromArray` is used for lists of *anything*, that it's likely being deoptimized by the javascript compiler.

There may be a nice trade off here of using `InlineMode.UsingConsFunc`, but only inlining at most 20 elements or something, and then using `List_fromArray` after that.



# Inline Equality

If Elm's `==` is applied to any primitive such as:
  - Int
  - Float
  - String
  - Bool

Then we can inline the definition directly as `===`.

Right now elm-optimize will infer if something is a primitive if a literal is used.

This check is significant for parsing, though also other checks as well.


# Inline String.fromFloat/Int



Before

```
String$fromFloat(val)
```

After:

```
val + ""
```