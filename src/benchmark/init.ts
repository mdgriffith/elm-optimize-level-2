/*

Compiles all the test cases and runs them via webdriver to summarize the results


*/


import * as fs from 'fs';
import * as path from 'path';


export function generate(dir: string){
    fs.mkdirSync(path.join(dir, "V8"), {recursive: true})
    fs.mkdirSync(path.join(dir, "V8", "Benchmark", "Runner"), {recursive: true})

    fs.writeFileSync(path.join(dir, "V8", "Benchmark.elm"), main)
    fs.writeFileSync(path.join(dir, "V8", "Benchmark", "Status.elm"), status)
    fs.writeFileSync(path.join(dir, "V8", "Benchmark", "Samples.elm"), samples)
    fs.writeFileSync(path.join(dir, "V8", "Benchmark", "Runner", "Json.elm"), runner)
    fs.writeFileSync(path.join(dir, "V8", "Debug.elm"),debug)
}


const main = `port module V8.Benchmark exposing (main)

{-| -}


import V8.Benchmark.Runner.Json
import Suite
import Json.Encode


main : V8.Benchmark.Runner.Json.JsonBenchmark
main =
    V8.Benchmark.Runner.Json.program
        reportResults
        Suite.suite


port reportResults : Json.Encode.Value -> Cmd msg
`

const runner = `module V8.Benchmark.Runner.Json exposing ( Benchmark, JsonBenchmark, program, describe, benchmark)

{-|
@docs Benchmark,  describe, benchmark

@docs JsonBenchmark, program

-}

import V8.Benchmark.Samples as Samples exposing (Samples)
import V8.Benchmark.Status as Status
import Browser
import Html exposing (Html)
import Html.Attributes as Attr
import Json.Encode as Encode
import Process
import Task exposing (Task)
import Trend.Linear as Trend exposing (Quick, Trend)
import V8.Debug
import Benchmark.LowLevel as LowLevel


type Benchmark
    = Single String LowLevel.Operation Status.Status
    | Group String (List Benchmark)


describe : String -> List Benchmark -> Benchmark
describe =
    Group

benchmark : String -> (() -> a) -> Benchmark
benchmark name fn =
    Single name (LowLevel.operation fn) Status.Cold



done : Benchmark -> Bool
done bench =
    case bench of
        Single _ _ status ->
            Status.progress status == 1

        Group _ benchmarks ->
            List.all done benchmarks

type alias JsonBenchmark =
    Program () Model Msg


{-| A benchmark runner which will send results out a port when done.
-}
program : (Encode.Value -> Cmd Msg) -> Benchmark -> Program () Model Msg
program sendReport bench =
    Platform.worker
        { init = init bench
        , update = update sendReport
        , subscriptions = \_ -> Sub.none
        }


type alias Model =
    Benchmark


init : Benchmark -> () -> ( Model, Cmd Msg )
init bench _ =
    ( bench, next bench )


type Msg
    = Update Benchmark
    | Finished Benchmark

update : (Encode.Value -> Cmd Msg) -> Msg -> Model -> ( Model, Cmd Msg )
update sendReport msg model =
    case msg of
        Finished bench ->
            ( bench
            , sendReport
                (Encode.object
                    [ ("benchmarks", (encode bench))
                    , ("v8", V8.Debug.reportV8StatusForBenchmarks ())
                    ]
                )
            )
        Update bench ->
            if done bench then
                let
                    _ = V8.Debug.enableMemoryChecks ()

                in
                ( bench
                , singleSampleForSideEffects bench
                    |> Task.perform Finished
                )

            else
                ( bench
                , next bench
                )


breakForRender : Task x a -> Task x a
breakForRender task =
    Task.andThen (\_ -> task) (Process.sleep 0)


next : Benchmark -> Cmd Msg
next bench =
    if done bench then
        Cmd.none

    else
        step bench
            |> breakForRender
            |> Task.perform (Update)

{-| This is


-}
singleSampleForSideEffects : Benchmark -> Task Never Benchmark
singleSampleForSideEffects bench =
        case bench of
            Single name operation status ->
                LowLevel.sample 1 operation
                    |> Task.map (\_ -> bench)
                    |> Task.onError (\_ -> Task.succeed bench)

            Group name benchmarks ->
                benchmarks
                    |> List.map singleSampleForSideEffects
                    |> Task.sequence
                    |> Task.map (Group name)

step : Benchmark -> Task Never Benchmark
step benchmark_ =
    case benchmark_ of
        Single name inner status ->
            stepLowLevel inner status
                |> Task.map (Single name inner)

        Group name benchmarks ->
            benchmarks
                |> List.map step
                |> Task.sequence
                |> Task.map (Group name)


stepLowLevel : LowLevel.Operation -> Status.Status -> Task Never Status.Status
stepLowLevel operation status =
    case status of
        Status.Cold ->
            LowLevel.warmup operation
                |> Task.map (\_ -> Status.Unsized)
                |> Task.onError (Task.succeed << Status.Failure << Status.MeasurementError)

        Status.Unsized ->
            LowLevel.findSampleSize operation
                |> Task.map
                    (\sampleSize ->
                        Status.Pending
                            sampleSize
                            Samples.empty
                    )
                |> Task.onError (Task.succeed << Status.Failure << Status.MeasurementError)

        Status.Pending baseSampleSize samples ->
            let
                sampleSize =
                    baseSampleSize * (Status.bucketSpacingRatio * modBy Status.numBuckets (Samples.count samples) + 1)
            in
            LowLevel.sample sampleSize operation
                |> Task.map
                    (\newSample ->
                        let
                            newSamples =
                                Samples.record sampleSize newSample samples
                        in
                        if Samples.count newSamples >= (Status.numBuckets * Status.samplesPerBucket) then
                            finalize newSamples

                        else
                            Status.Pending baseSampleSize newSamples
                    )
                |> Task.onError (Task.succeed << Status.Failure << Status.MeasurementError)

        _ ->
            Task.succeed status

finalize : Samples -> Status.Status
finalize samples =
    case Samples.trend samples of
        Ok trend ->
            Status.Success samples trend

        Err err ->
            Status.Failure (Status.AnalysisError err)


-- ENCODE RESULTS


encode : Benchmark -> Encode.Value
encode bench =
    bench
        |> flattenReport
        |> Encode.list encodeResultItem




type alias Item =
    { name : String
    , tags : List String
    , status : Status.Status
    }


flattenReport : Benchmark -> List Item
flattenReport report =
    case report of
        Single name op status ->
            [ { name = name
              , tags = []
              , status = status
              }
            ]

        Group name benchmarks ->
            List.concatMap (flattenReportGroup [ name ]) benchmarks


flattenReportGroup : List String -> Benchmark -> List Item
flattenReportGroup groups report =
    case report of
        Single name op status ->
            [ { name = name
              , tags = groups
              , status = status
              }
            ]

        Group name benchmarks ->
            List.concatMap (flattenReportGroup (groups ++ [ name ])) benchmarks


encodeResultItem : Item -> Encode.Value
encodeResultItem item =
    Encode.object
        [ ( "name", Encode.string item.name )
        , ( "tags", Encode.list Encode.string item.tags )
        , ( "status", encodeStatus item.status )
        ]


encodeStatus : Status.Status -> Encode.Value
encodeStatus status =
    case status of
        Status.Cold ->
            Encode.object
                [ ( "status", Encode.string "cold" ) ]

        Status.Unsized ->
            Encode.object
                [ ( "status", Encode.string "unsized" ) ]

        Status.Pending i samples ->
            Encode.object
                [ ( "status", Encode.string "pending" )
                , ( "progress", Encode.float (Status.progress status) )
                ]

        Status.Failure error ->
            Encode.object
                [ ( "status", Encode.string "failure" ) ]

        Status.Success samples quickTrend ->
            Encode.object
                [ ( "status", Encode.string "success" )
                , ( "runsPerSecond", Encode.int (runsPerSecond quickTrend) )
                , ( "goodnessOfFit", Encode.float (Trend.goodnessOfFit quickTrend) )
                ]


runsPerSecond : Trend Quick -> Int
runsPerSecond =
    Trend.line
        >> (\a -> Trend.predictX a 1000)
        >> floor
`

const debug = `module V8.Debug exposing (enableMemoryChecks, disableMemoryChecks, memory, optimizationStatus, reportV8StatusForBenchmarks)

{-| -}

import Json.Encode


enableMemoryChecks : () -> ()
enableMemoryChecks _ =
    ()


disableMemoryChecks : () -> ()
disableMemoryChecks _ =
    ()


memory : String -> a -> a
memory tag v =
    v


type Status
    = Status Int


optimizationStatus : String -> a -> a
optimizationStatus tag value =
    value


{-|

    hasFastProperties obj

    hasFastSmiElements obj

    hasFastObjectElements obj

    hasFastDoubleElements obj

    hasDictionaryElements obj

    hasFastHoleyElements obj

    haveSameMap ( obj1, obj2 )

    isValidSmi obj

    isSmi obj

    hasFastSmiOrObjectElements obj

    hasSloppyArgumentsElements obj

-}
type alias MemoryProperties =
    { tag : String
    , hasFastProperties : Bool
    , hasFastSmiElements : Bool
    , hasFastObjectElements : Bool
    , hasFastDoubleElements : Bool
    , hasDictionaryElements : Bool
    , hasFastHoleyElements : Bool
    , isValidSmi : Bool
    , isSmi : Bool
    , hasFastSmiOrObjectElements : Bool
    , hasSloppyArgumentsElements : Bool
    }


reportV8StatusForBenchmarks : () -> Json.Encode.Value
reportV8StatusForBenchmarks _ =
    Json.Encode.null
`

const status = `module V8.Benchmark.Status exposing
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
which case we have a \`LowLevel.Error\`) or while analyzing data (in
which case we have a \`Trend.Math.Error\`.)
-}
type Error
    = MeasurementError LowLevel.Error
    | AnalysisError Math.Error


{-| Indicate the status of a benchmark.

  - \`Cold\`: We have not warmed up the JIT yet.

  - \`Unsized\`: We have not yet determined the best sample size for
    this benchmark.

  - \`Pending\`: We are in the process of collecting sample data. We
    will keep collecting sample data using the base sample size (first
    argument) until we have enough samples (\`numBuckets *
    samplesPerBucket\`.) We also store samples while in progress
    (second argument.)

  - \`Failure\`: We ran into an exception while collecting sample
    data. The attached \`Error\` tells us what went wrong.

  - \`Success\`: We finished collecting all our sample data (first
    argument.) We've calculated a trend using this data (second
    argument.)

See "The Life of a Benchmark" in the docs for \`Benchmark\` for an
explanation of how these fit together.

-}
type Status
    = Cold
    | Unsized
    | Pending Int Samples
    | Failure Error
    | Success Samples (Trend Quick)


{-| How far along is this benchmark? This is a percentage, represented
as a \`Float\` between \`0\` and \`1\`.
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
`

const samples = `module V8.Benchmark.Samples exposing
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


{-| A point representing \`(sampleSize, runtime)\`.
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


{-| The \`(sampleSize, runtime)\` coordinates for plotting or
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
        |> quick`