# Elm Optimize

This project is meant to explore different optimizations that are specific to elm-generated code.

I'd like to avoid aspects that can handled by [terser](https://terser.org/), [uglify](https://github.com/mishoo/UglifyJS) or [prepack](https://github.com/facebook/prepack) just because it seems like this is a huge area and there's already a ton of work done.  We should focus on things specific to Elm, and possibly make it easier for these tools to be even more effective.

The first focus is to implement transformations that were [explored by Robin in this dev.to post](https://dev.to/skinney/improving-elm-s-compiler-output-5e1h)

## Needed work
- [ ] - Set up a basic test example (e.g. fold through a list of maybe Ints and sum them).
- [ ] - Set up complation pipeline
    - We want to be able to compare different JS outputs to get a handle of who does what transformation.  So let's set up a pipeline that will generate multiple `js` files in a folder at different stages of the pipeline (e.g. `elm.js`, `elm.optimized.js`, `elm.optimized.prepack.js`.  This will allow us to `diff` stages and ultimately compare how our tool can potentially allow other tools to function more effectively.


**Choose AST tool**
We need some tool(s) that will allow us to do the following:
1. Parse Elm code and extract information such as a type definition (i.e. what are all the variant names and their structures).
2. Parse JS code and transform bits of the AST.

**Options**
  - [SWC](https://swc-project.github.io/docs/usage-plugin)
      - In Rust, plugin in typescript
  - [Codemod](https://github.com/facebook/codemod)
  - [Treesitter](https://tree-sitter.github.io/tree-sitter/)
      - Rust
      - Grammars for parsing both [JS](https://github.com/tree-sitter/tree-sitter-javascript) and [Elm](https://github.com/Razzeee/tree-sitter-elm/)


**Opimization exploration**
- [ ] 1. Parse Elm code and prepare a summary that matches custom type variant names to their type definition
- [ ] 2. Fill out variant constructors with nulls so that the shapes of the objects are the same. (See V8 fast properties reference.  Is there some way to check how V8 is implementing a specific object?)  
- [ ] 3. Transform `A2(author$project$Main$add, 1, 2)` to `author$project$Main$add.f(1, 2)` when appropriate


## References
1. [V8 Fast Properties](https://v8.dev/blog/fast-properties)

