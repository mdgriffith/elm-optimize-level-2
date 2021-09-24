# Elm Optimize, Level 2!

_New to Elm? Check out the [Elm Guide's section on optimization](https://guide.elm-lang.org/optimization/). Elm already has a lot of optimization stuff built in, [like the `--optimize` flag](https://guide.elm-lang.org/optimization/asset_size.html)! Definitely check those out before using this project._

**Beware, Experimental** - _This project is just starting and does have the power to break your Elm code in very un-Elm ways! While we currently believe every adjustment to the resulting javascript should be safe and make things explicitly faster, some of this code is subtle and it's hard to be 100% certain until we have a large number of projects using it successfully._

_If you want to help out, try it out, **run your test suite** and let us know how it goes by leaving [a comment in this issue](https://github.com/mdgriffith/elm-optimize-level-2/issues/15)!_ :smiley:

Elm is fast.

Can we make it faster?

[Turns out, yes!](#Benchmarks) :rocket:

Elm Optimize, Level 2 is a project for exploring different optimizations that are specific to elm-generated javascript.

There are two parts to this.

1. Explore different javascript representations for Elm code. This means gathering data on what a given representation would mean on realworld projects, and across browsers.

2. A tool you can use _right now_ to compile elm using the adjustments that have given us the most speed!

**Note** This work was given a massive headstart by [Robin Heggelund Hansen's article on areas where the Elm Compiler's output could be improved](https://dev.to/skinney/improving-elm-s-compiler-output-5e1h). Go read it! It's great.

## Installation and Usage

```
npm install -g elm-optimize-level-2
```

Then you can use `elm-optimize-level-2` just as you would `elm-make --optimize`.

```
elm-optimize-level-2 Main.elm
```

will generate an `elm.js` file.

The first configurable option is what to name the generated js file.

```
elm-optimize-level-2 Main.elm --output app.js
```

**Note** — elm-optimize-level-2 only generates a js file, it doesn't support generating HTML.

**Another Note** — Before deploying your app, you should also minify it and gzip it. `elm-optimize-level-2` does not do that for you. [Check out this doc for a recommended setup.](notes/minification.md)

## The `--optimize-speed` flag

You can also provide `--optimize-speed` (`--O3`) to `elm-optimize-level-2`, which will attempt to generate even faster code at the expense of asset size.

If you enable this option you may experience a ~5% bigger js file, but with significantly faster record updates.


## What's actually happening?

This might seem a bit like magic. :sparkles:

If you're interested in getting to know what's happening, [here's an overview of all the JS transformations we are exploring](notes/transformations.md)!

Not all of them are included in the CLI tool because not all of them turned out to be beneficial. Part of this endeavor is a science project :bowtie:, where we capture data so we can know which transformations turn out to be worthwhile.

A few are listed there as either incomplete or not attempted. That's future work!

## Benchmarks

**Note** — _These results are really exciting! However, it's not totally obvious that your project will see similar gains. Performance is a tricky beast! If you do see significant speedups in your project, [leave a comment here on this issue](https://github.com/mdgriffith/elm-optimize-level-2/issues/15), we love to see realworld cases._

In an effort to quantify these transformations, we've put together a number of benchmarks, including some from exisiting Elm packages such as `dillonkearns/elm-markdown`, `w0rm/elm-obj-file`, and `mdgriffith/elm-ui`.

Our goal is to have benchmarks that track performance on code where performance is meaningful.

[Here's the most recent, comprehensive run of the benchmarks.](data/current.md)

Though here are a few highlights:

**Note** — keep in mind that these numbers have _all the caveats_ that benchmarks usually have. You may not see similar numbers depending on your machine, your browser, subtle differences in your code, etc.

**Another Note** — From what we've seen, given that you're [minifying and gzipping your JS](notes/minification.md), these transformations should either have no effect on asset size, or may even make your app slightly smaller.

## Html

| Name                              | Transformations | Browser | Ops/Second | % Change |
| --------------------------------- | --------------- | ------- | ---------- | -------- |
| create a 4 level nested html tree |                 | safari  | 34,899     |          |
| create a 4 level nested html tree | final           | safari  | 39,631     | (114%)   |
| create a 4 level nested html tree |                 | firefox | 15,909     |          |
| create a 4 level nested html tree | final           | firefox | 22,361     | (141%)   |
| create a 4 level nested html tree |                 | chrome  | 28,959     |          |
| create a 4 level nested html tree | final           | chrome  | 72,753     | (251%)   |

## Elm Markdown

| Name                      | Transformations | Browser | Ops/Second | % Change |
| ------------------------- | --------------- | ------- | ---------- | -------- |
| dillonkearns/elm-markdown |                 | safari  | 2,428      |          |
| dillonkearns/elm-markdown | final           | safari  | 3,196      | (132%)   |
| dillonkearns/elm-markdown |                 | firefox | 1,096      |          |
| dillonkearns/elm-markdown | final           | firefox | 2,194      | (200%)   |
| dillonkearns/elm-markdown |                 | chrome  | 2,489      |          |
| dillonkearns/elm-markdown | final           | chrome  | 3,572      | (144%)   |

## Running Benchmarks Locally

1. Clone this repo
2. Run `npm install`
3. Run `npm run report` and a simple benchmark will hopefully run and print results to the terminal.

**Note** you can control which benchmark runs with which transformation by adjusting `src/benchmarks/run.ts`.

## Contributing

_For this project, contributions always start with communication before code!_

That being said, there are a few areas that might be opportunities for contribution.

1. Try `elm-optimize-level-2` on any current Elm project you have!

   We'd love to hear your results whether they be success, no effect, or caused a regression.

   If your project saw an explicit improvement or performance regression, [leave a comment on this issue](https://github.com/mdgriffith/elm-optimize-level-2/issues/15).

   For more serious issues, feel free to file a separate issue.

2. Are there more interesting benchmarks we could track?

   We want the benchmarking suite to be as comprehensive as possible, though we have to weigh that against having a million benchmarks that essentially test the same thing.

3. Know of an interesting transformation to try out?

   Let us know! Either open an issue, or make a PR adding it to [notes/transformations.md](notes/transformations.md).

4. Know of an article, paper, or project we might be interested in?

   Let us know! We're keeping a list of relevant resources in [notes/resources.md](notes/resources.md)
