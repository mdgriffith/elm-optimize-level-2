module V8.Benchmark.Runner.Json exposing ( JsonBenchmark, program)

import Benchmark exposing (Benchmark)
import Benchmark.Reporting
import Benchmark.Status
import Browser
import Html exposing (Html)
import Html.Attributes as Attr
import Json.Encode as Encode
import Process
import Task exposing (Task)
import Trend.Linear as Trend exposing (Quick, Trend)
import V8.Debug

type alias JsonBenchmark =
    Program () Model Msg


{-| A benchmark runner which will send results out a port when done.
-}
program : (Encode.Value -> Cmd Msg) -> Benchmark -> V8.Debug.MemoryAnalyzer -> Program () Model Msg
program sendReport benchmark analyzeMemory =
    Browser.element
        { init = init benchmark
        , update = update sendReport analyzeMemory
        , view = view
        , subscriptions = \_ -> Sub.none
        }


type alias Model =
    Benchmark


init : Benchmark -> () -> ( Model, Cmd Msg )
init benchmark _ =
    ( benchmark, next benchmark )


type Msg
    = Update Benchmark

update : (Encode.Value -> Cmd Msg) ->  V8.Debug.MemoryAnalyzer ->  Msg -> Model -> ( Model, Cmd Msg )
update sendReport memory msg model =
    case msg of
        Update benchmark ->
            if Benchmark.done benchmark then
                let
                    _ = V8.Debug.enableMemoryChecks ()
                    _ =
                        V8.Debug.runMemory memory

                in
                ( benchmark
                , sendReport
                    (Encode.object
                        [ ("benchmarks", (encode benchmark))
                        , ("v8", V8.Debug.reportV8StatusForBenchmarks ())
                        ]
                    )
                )

            else
                ( benchmark
                , next benchmark
                )


breakForRender : Task x a -> Task x a
breakForRender task =
    Task.andThen (\_ -> task) (Process.sleep 0)


next : Benchmark -> Cmd Msg
next benchmark =
    if Benchmark.done benchmark then
        Cmd.none

    else
        Benchmark.step benchmark
            |> breakForRender
            |> Task.perform (Update)



-- VIEW


view : Model -> Html Msg
view model =
    Html.div [ Attr.style "white-space" "pre" ]
        [ Html.text
            (Encode.encode 4 (encode model))

        , Html.text
            (Encode.encode 4 (V8.Debug.reportV8StatusForBenchmarks ()))
        ]



-- ENCODE RESULTS


encode : Benchmark -> Encode.Value
encode benchmark =
    encodeReport (Benchmark.Reporting.fromBenchmark benchmark)


encodeReport : Benchmark.Reporting.Report -> Encode.Value
encodeReport report =
    report
        |> flattenReport
        |> Encode.list encodeResultItem


type alias Item =
    { name : String
    , tags : List String
    , status : Benchmark.Status.Status
    }


flattenReport : Benchmark.Reporting.Report -> List Item
flattenReport report =
    case report of
        Benchmark.Reporting.Single name status ->
            [ { name = name
              , tags = []
              , status = status
              }
            ]

        Benchmark.Reporting.Series name statuses ->
            List.map
                (\( tag, status ) ->
                    { name = name
                    , tags = [ tag ]
                    , status = status
                    }
                )
                statuses

        Benchmark.Reporting.Group name reports ->
            List.concatMap (flattenReportGroup [ name ]) reports


flattenReportGroup : List String -> Benchmark.Reporting.Report -> List Item
flattenReportGroup groups report =
    case report of
        Benchmark.Reporting.Single name status ->
            [ { name = name
              , tags = groups
              , status = status
              }
            ]

        Benchmark.Reporting.Series name statuses ->
            List.map
                (\( tag, status ) ->
                    { name = name
                    , tags = groups ++ [ tag ]
                    , status = status
                    }
                )
                statuses

        Benchmark.Reporting.Group name reports ->
            List.concatMap (flattenReportGroup (groups ++ [ name ])) reports


encodeResultItem : Item -> Encode.Value
encodeResultItem item =
    Encode.object
        [ ( "name", Encode.string item.name )
        , ( "tags", Encode.list Encode.string item.tags )
        , ( "status", encodeStatus item.status )
        ]


encodeStatus : Benchmark.Status.Status -> Encode.Value
encodeStatus status =
    case status of
        Benchmark.Status.Cold ->
            Encode.object
                [ ( "status", Encode.string "cold" ) ]

        Benchmark.Status.Unsized ->
            Encode.object
                [ ( "status", Encode.string "unsized" ) ]

        Benchmark.Status.Pending i samples ->
            Encode.object
                [ ( "status", Encode.string "pending" )
                , ( "progress", Encode.float (Benchmark.Status.progress status) )
                ]

        Benchmark.Status.Failure error ->
            Encode.object
                [ ( "status", Encode.string "failure" ) ]

        Benchmark.Status.Success samples quickTrend ->
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
