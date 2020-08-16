# Most Recent Results

*Note* keep in mind that these numbers have *all the caveats* that benchmarks usually have.

Namely that 

1. There's a certain amount of noise in each of these runs.  Numbers commonly vary as much as 5% between runs, and sometimes may will vary much more depending on what else is happening on the computer.  We can likely be better in this regard, though the speedups we're looking for are usually fairly dramatic. 

2. Different code will be affected differently.  We tried to get a set of benchmarks that are directly relevant to people, but it's an ongoing endeavor.


We track both benchmark performance and minified+gzipped asset size.

[Here are the general results](data/results.current.md).

As well, we also did a more detailed run called a *knockout* run.

This is where we went through each transformation individually, turned it off, and ran the benchmark again.

This allows us to see how transformations work in the context of the other transformations that are operating.

[Here are the results of the knockout run.](data/results.knockout.md)