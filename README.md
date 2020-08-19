# Elm Optimize

**NOT FOR SHARING YET** - _Please wait for the announcement before sharing widely, it should be coming soon_ :)

**Note, Experimental** - _This project is just starting. While we currently believe every adjustment to the resulting javascript should be safe and make things explicitly faster, it's hard to be 100% certain until we have a large number of projects using it successfully. So, beware!_

_And let us know how it goes by leaving [a comment in this issue](https://github.com/mdgriffith/elm-optimize/issues/15)._ :smiley:

Elm is fast.

Can we make it faster?

[Turns out, yes!](#Benchmarks) :rocket:

Elm Optimize is a project for exploring different optimizations that are specific to elm-generated javascript.

There are two parts to this.

1. Explore different javascript representations for Elm code. This means gathering data on what a given representation would mean on realworld projects, and across browsers.

2. A tool you can use _right now_ to compile elm using the adjustments that have given us the most speed!

## Installation and Usage

```
npm install -g elm-optimize
```

Then you can use `elm-optimize` just as you would `elm-make --optimize`.

```
elm-optimize Main.elm
```

will generate an `elm.js` file.

The only configurable option is what to name the generated js file.

```
elm-optimize Main.elm --output app.js
```

**Note** — elm-optimize only generates a js file, it doesn't support generating HTML.

**Another Note** — Before deploying your app, you should also minify it and gzip it. `elm-optimize` does not do that for you. [Check out this doc for a recommended setup.](minification.md)

## Exploration

This is also a science project :bowtie:

The goal is to quantify different transformations that can be done to the JS output of the Elm compiler and what their effect would be.

To get started, [here's a current overview of all the JS transformations we explored](transformations.md) and a summary of their effect. Not all of them are included in the CLI tool because not all of them turned out to be beneficial.

A few are listed there as either incomplete or not attempted. That's future work!

## Benchmarks

**Note** — _These results are really exciting! However, it's not totally obvious that your project will see similar gains. Performance is a tricky beast! If you do see significant speedups in your project, [leave a comment here on this issue](https://github.com/mdgriffith/elm-optimize/issues/15), we love to see realworld cases._

In an effort to quantify these transformations, we've put together a number of benchmarks, including some from exisiting Elm packages such as `dillonkearns/elm-markdown`, `w0rm/elm-obj-file`, and `mdgriffith/elm-ui`.

Our goal is to have benchmarks that track performance on code where performance is meaningful.

[Here's the most recent, comprehensive run of the benchmarks.](data/current.md)

Though here are a few highlights:

**Note** — keep in mind that these numbers have _all the caveats_ that benchmarks usually have. You may not see similar numbers depending on your machine, your browser, subtle differences in your code, etc.

**Another Note** — From what we've seen, given that you're [minifying and gzipping your JS](minification.md), these transformations should either have no effect on asset size, or may even make your app slightly smaller.

## Html

| Name                              | Transformtions | Browser | Ops/Second | % Change |
| --------------------------------- | -------------- | ------- | ---------- | -------- |
| create a 4 level nested html tree | baseline       | firefox | 19,878     |          |
| create a 4 level nested html tree | optimized      | firefox | 24,878     | (125%)   |
| create a 4 level nested html tree | baseline       | chrome  | 43,689     |          |
| create a 4 level nested html tree | optimized      | chrome  | 113,266    | (259%)   |

## Elm Markdown

| Name                      | Transformtions | Browser | Ops/Second | % Change |
| ------------------------- | -------------- | ------- | ---------- | -------- |
| dillonkearns/elm-markdown | baseline       | firefox | 1,226      |          |
| dillonkearns/elm-markdown | optimized      | firefox | 2,497      | (204%)   |
| dillonkearns/elm-markdown | baseline       | chrome  | 3,116      |          |
| dillonkearns/elm-markdown | optimized      | chrome  | 5,099      | (164%)   |

## Running Benchmarks Locally

1. Clone this repo
2. Run `npm install`
3. Run `npm run report` and a simple benchmark will hopefully run and print results to the terminal.

**Note** you can control which benchmark runs with which transformation by adjusting `src/benchmarks/run.ts`.

## Contributing

_For this project, contributions always start with communication before code!_

That being said, there are a few areas that might be opportunities for contribution.

**First and formost** is to try `elm-optimize` on any current Elm project you have.

We'd love to hear your results whether they be success, no effect, or caused a regression.

If your project saw an explicit improvement or performance regression, [leave a comment on this issue](https://github.com/mdgriffith/elm-optimize/issues/15).

For more serious issues, feel free to file a separate issue.

**Secondly**, if you believe there are public benchmarks that we could track that are _not essentially covered_ by our current benchmarks, let us know! We want the benchmarking suite to be as comprehensive as possible, though we have to weigh that against having a million benchmarks that essentially test the same thing.

**Thirdly**, if you believe there are additional JS transformations that would be interesting to explore, or would like to try improving existing transformations in some way, get in touch!
