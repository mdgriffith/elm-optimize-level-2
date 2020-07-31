module Benchmark.Runner.Json exposing (JsonBenchmark, program)

import Benchmark exposing (Benchmark)
import Benchmark.Reporting
import Benchmark.Status
import Browser
import Html exposing (Html)
import Json.Encode as Encode
import Process
import Task exposing (Task)
import Trend.Linear as Trend exposing (Quick, Trend)


type alias JsonBenchmark =
    Program () Model Msg


{-| A benchmark runner which will send results out a port when done.
-}
program : (Encode.Value -> Cmd Msg) -> Benchmark -> Program () Model Msg
program sendReport benchmark =
    Browser.element
        { init = init benchmark
        , update = update sendReport
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


update : (Encode.Value -> Cmd Msg) -> Msg -> Model -> ( Model, Cmd Msg )
update sendReport msg model =
    case msg of
        Update benchmark ->
            if Benchmark.done benchmark then
                ( benchmark
                , sendReport (encode benchmark)
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
            |> Task.perform Update



-- VIEW


view : Model -> Html Msg
view model =
    Html.div []
        [ Html.text
            (Encode.encode 4 (encode model))
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


flattenReport : Benchmark.Reporting.Report -> List ( String, Benchmark.Status.Status )
flattenReport report =
    case report of
        Benchmark.Reporting.Single name status ->
            [ ( name, status ) ]

        Benchmark.Reporting.Series name statuses ->
            List.map (\( tag, val ) -> ( name ++ ", " ++ tag, val )) statuses

        Benchmark.Reporting.Group name reports ->
            List.concatMap (flattenReportGroup name) reports


flattenReportGroup : String -> Benchmark.Reporting.Report -> List ( String, Benchmark.Status.Status )
flattenReportGroup group report =
    case report of
        Benchmark.Reporting.Single name status ->
            [ ( name, status ) ]

        Benchmark.Reporting.Series name statuses ->
            List.map (\( tag, val ) -> ( group ++ ", " ++ name ++ ", " ++ tag, val )) statuses

        Benchmark.Reporting.Group name reports ->
            List.concatMap (flattenReportGroup (group ++ ", " ++ name ++ ", ")) reports


encodeResultItem : ( String, Benchmark.Status.Status ) -> Encode.Value
encodeResultItem ( name, status ) =
    Encode.object
        [ ( "name", Encode.string name )
        , ( "status", encodeStatus status )
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
                [ ( "status", Encode.string "pending" ) ]

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
