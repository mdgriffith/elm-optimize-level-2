module Suite exposing (suite)

{-| -}

import V8.Benchmark.Runner.Json exposing (..)
import Html
import Html.Attributes as Attr
import V8.Debug


three =
    List.repeat 3 0


suite : Benchmark
suite =
    describe "HTML"
        [ benchmark "create a 4 level nested html tree" view
        ]


view _ =
     let
        _ = V8.Debug.memory "number - inner" 10

        _ = V8.Debug.memory "list nums - inner" [10]

    in
    Html.div []
        (List.map (viewLevels 4) three)

viewLevels level _ =
    if V8.Debug.memory "level" level == 0 then
        Html.text ""

    else
        Html.div (V8.Debug.memory "attrs" [])
            (List.map (viewLevels (level - 1)) three)
