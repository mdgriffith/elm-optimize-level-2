module Suite exposing (suite)

{-| -}

import Benchmark exposing (..)
import Html
import Html.Attributes as Attr




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
