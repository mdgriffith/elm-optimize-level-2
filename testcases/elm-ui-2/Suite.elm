module Suite exposing (suite)

{-| -}

import Benchmark exposing (..)

import Element2 exposing (..)
import Element2.Background as Background
import Element2.Font as Font





three =
    List.repeat 3 0


suite : Benchmark
suite =
    describe "Elm UI"
        [ benchmark "create a 4 level nested Elm UI tree" <|
            \_ ->
                embed []
                    (column [] (List.map (viewLevels 4) three))
        ]


blue =
    rgb 0 0 1


viewLevels level _ =
    if level == 0 then
        none

    else
        row
            [ Font.size 16
            , Background.color blue
            ]
            (List.map (viewLevels (level - 1)) three)
