port module Main exposing (main)

{-| -}

import Benchmark exposing (..)
import Benchmark.Runner exposing (BenchmarkProgram, program)
import Benchmark.Runner.Json
import Element exposing (..)
import Element.Background as Background
import Element.Font as Font
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
    describe "Elm UI"
        [ benchmark "create a 4 level nested Elm UI tree" <|
            \_ ->
                Element.layout []
                    (Element.column [] (List.map (viewLevels 4) three))
        ]


blue =
    rgb 0 0 1


viewLevels level _ =
    if level == 0 then
        none

    else
        Element.row
            [ Font.size 16
            , Background.color blue
            ]
            (List.map (viewLevels (level - 1)) three)
