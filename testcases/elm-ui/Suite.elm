module Suite exposing (suite)

{-| -}

import V8.Benchmark.Runner.Json exposing (..)
import Element exposing (..)
import Element.Background as Background
import Element.Font as Font
import V8.Debug

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
            [ V8.Debug.memory "font size" (Font.size 16)
            , V8.Debug.memory "bg:blue" (Background.color blue)
            ]
            (List.map (viewLevels (level - 1)) three)
