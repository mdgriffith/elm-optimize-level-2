module Suite exposing (suite)

{-| -}

import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attr
import TextInput
import V8.Benchmark.Runner.Json exposing (..)


suite : Benchmark
suite =
    describe "Elm Css"
        [ benchmark "Search form inspired by vy.no" view
        ]


view : () -> Html a
view _ =
    Html.div
        []
        []



-- BUTTON
-- TEXT INPUT
