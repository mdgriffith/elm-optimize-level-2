module V8.Benchmark.Status exposing
    ( Status(..), progress
    , Error(..)
    , numBuckets, samplesPerBucket, bucketSpacingRatio
    )

{-| Report the status of a Benchmark.


# Reporting

@docs Status, progress

@docs Error


## Runtime Configuration

@docs numBuckets, samplesPerBucket, bucketSpacingRatio

-}

import Benchmark.LowLevel as LowLevel
import V8.Benchmark.Samples as Samples exposing (Samples)
import Trend.Linear exposing (Quick, Trend)
import Trend.Math as Math


{-| Ways a benchmark can fail, expressed as either at runtime (in
which case we have a `LowLevel.Error`) or while analyzing data (in
which case we have a `Trend.Math.Error`.)
-}
type Error
    = MeasurementError LowLevel.Error
    | AnalysisError Math.Error


{-| Indicate the status of a benchmark.

  - `Cold`: We have not warmed up the JIT yet.

  - `Unsized`: We have not yet determined the best sample size for
    this benchmark.

  - `Pending`: We are in the process of collecting sample data. We
    will keep collecting sample data using the base sample size (first
    argument) until we have enough samples (`numBuckets *
    samplesPerBucket`.) We also store samples while in progress
    (second argument.)

  - `Failure`: We ran into an exception while collecting sample
    data. The attached `Error` tells us what went wrong.

  - `Success`: We finished collecting all our sample data (first
    argument.) We've calculated a trend using this data (second
    argument.)

See "The Life of a Benchmark" in the docs for `Benchmark` for an
explanation of how these fit together.

-}
type Status
    = Cold
    | Unsized
    | Pending Int Samples
    | Failure Error
    | Success Samples (Trend Quick)


{-| How far along is this benchmark? This is a percentage, represented
as a `Float` between `0` and `1`.
-}
progress : Status -> Float
progress status =
    case status of
        Cold ->
            0

        Unsized ->
            0

        Pending _ samples ->
            toFloat (Samples.count samples) / toFloat (numBuckets * samplesPerBucket) |> clamp 0 1

        Failure _ ->
            1

        Success _ _ ->
            1



-- Configuration


{-| How many buckets are samples spread out into?
-}
numBuckets : Int
numBuckets =
    25


{-| How many samples will we take per bucket?
-}
samplesPerBucket : Int
samplesPerBucket =
    5


{-| How far apart should the sample size for each bucket be?
-}
bucketSpacingRatio : Int
bucketSpacingRatio =
    2