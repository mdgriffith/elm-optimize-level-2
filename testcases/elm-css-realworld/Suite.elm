module Suite exposing (suite)

{-| -}

import Html exposing (Html)
import Html.Styled
import V8.Benchmark.Runner.Json exposing (..)
import View


suite : Benchmark
suite =
    describe "Elm Css"
        [ benchmark "Search form inspired by vy.no" view
        ]


view : () -> Html View.Msg
view _ =
    Html.Styled.toUnstyled <| View.view "Oslo S" "Oslo Airport"
