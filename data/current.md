# Most Recent Results

_Note_ keep in mind that these numbers have _all the caveats_ that benchmarks usually have.

Namely that

1. There's a certain amount of noise in each of these runs. Numbers commonly vary as much as 5% between runs, and sometimes may will vary much more depending on what else is happening on the computer. We can likely be better in this regard, though the speedups we're looking for are usually fairly dramatic.

2. Different code will be affected differently. We tried to get a set of benchmarks that are directly relevant to people, but it's an ongoing endeavor.

We track both benchmark performance and minified+gzipped asset size.

[Here are the general results](current/results.md)!


Also, every time we do a release, we run the benchmark using the old transformations and again using the new ones.

This is so we can get comparable results. So, compare [`current/results.md`](current/results.md) to [`current/results.previous.v1.md`](current/results.previous.v1.md).

We also run the benchmark suite with `--O3` enabled, which is the option that sacrifices asset size for speed, whose results are in [`current/results.o3.md`](current/results.o3.md).

