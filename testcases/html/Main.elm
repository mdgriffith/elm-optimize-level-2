port module Main exposing (main)

{-| -}

import Benchmark exposing (..)
import Benchmark.Runner exposing (BenchmarkProgram, program)
import Benchmark.Runner.Json
import Html
import Html.Attributes as Attr
import Json.Encode


main : Benchmark.Runner.Json.JsonBenchmark
main =
    Benchmark.Runner.Json.program reportResults suite


port reportResults : Json.Encode.Value -> Cmd msg


three =
    List.repeat 3 0


suite : Benchmark
suite =
    describe "HTML"
        [ benchmark "create a 4 level nested html tree" <|
            \_ ->
                Html.div []
                    (List.map (viewLevels 4) three)
        ]


viewLevels level _ =
    if level == 0 then
        Html.text ""

    else
        Html.div []
            (List.map (viewLevels (level - 1)) three)
