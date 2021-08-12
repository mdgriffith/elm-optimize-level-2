module V8.Benchmark.Runner.Json exposing ( Benchmark, JsonBenchmark, program, describe, benchmark)

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
