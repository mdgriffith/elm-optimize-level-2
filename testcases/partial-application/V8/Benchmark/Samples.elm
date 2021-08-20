module V8.Benchmark.Samples exposing
    ( Samples, empty, record, count
    , Point, points, trend
    )

{-| Collect benchmarking runs with their sample size.


# Sampling

@docs Samples, empty, record, count


## Evaluation

@docs Lines, Line, all, fitLines

-}

import Dict exposing (Dict)
import Trend.Linear exposing (Quick, Trend, line, predictY, quick, robust)
import Trend.Math as Math exposing (Error)


{-| Samples keeps track of the sample size at which samples have been
gathered.
-}
type Samples
    = Samples (Dict Int (List Float))


{-| an empty samples for initializing things
-}
empty : Samples
empty =
    Samples Dict.empty


{-| How many samples have we collected in total?
-}
count : Samples -> Int
count (Samples samples) =
    Dict.foldl (\_ times acc -> List.length times + acc) 0 samples


{-| Record a new sample
-}
record : Int -> Float -> Samples -> Samples
record sampleSize sample (Samples samplesDict) =
    Samples <|
        Dict.update
            sampleSize
            (\value ->
                case value of
                    Nothing ->
                        Just [ sample ]

                    Just samples_ ->
                        Just (sample :: samples_)
            )
            samplesDict


{-| A point representing `(sampleSize, runtime)`.
-}
type alias Point =
    ( Float, Float )


groups : Samples -> ( Dict Int (List Float), Dict Int (List Float) )
groups (Samples samples) =
    samples
        |> pointify
        |> robust
        |> Result.map line
        |> Result.map
            (\line ->
                Dict.map
                    (\sampleSize values ->
                        let
                            predicted =
                                predictY line (toFloat sampleSize)

                            upperBound =
                                predicted * 1.1

                            lowerBound =
                                predicted / 1.1
                        in
                        List.partition (\v -> lowerBound < v && v < upperBound) values
                    )
                    samples
            )
        |> Result.map
            (Dict.foldl
                (\key ( good, outliers ) ( accGood, accOutliers ) ->
                    ( Dict.insert key good accGood
                    , Dict.insert key outliers accOutliers
                    )
                )
                ( Dict.empty, Dict.empty )
            )
        |> Result.withDefault ( samples, Dict.empty )


{-| The `(sampleSize, runtime)` coordinates for plotting or
calculation. The first item in the tuple is the points to be used for
consideration in a trend. The second item contains the outliers.
-}
points : Samples -> ( List Point, List Point )
points samples =
    groups samples
        |> Tuple.mapFirst pointify
        |> Tuple.mapSecond pointify


pointify : Dict Int (List Float) -> List Point
pointify samples =
    Dict.foldr
        (\sampleSize values acc ->
            List.map (\b -> ( toFloat sampleSize, b )) values ++ acc
        )
        []
        samples


{-| Get a trend for these samples, ignoring outliers.
-}
trend : Samples -> Result Error (Trend Quick)
trend samples =
    samples
        |> points
        |> Tuple.first
        |> quick