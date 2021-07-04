module Suite exposing (suite)

{-| -}

import Benchmark exposing (..)
import Css exposing (..)
import Html.Styled exposing (..)



three =
    List.repeat 3 0


{-| A plain old record holding a couple of theme colors.
-}
theme : { secondary : Color, primary : Color }
theme =
    { primary = hex "55af6a"
    , secondary = rgb 250 240 230
    }


suite : Benchmark
suite =
    describe "Elm CSS"
        [ benchmark "A simple button" <|
            \_ ->
                btn [] [ text "Click me!" ]
        ]


{-| A reusable button which has some styles pre-applied to it.
-}
btn : List (Attribute msg) -> List (Html msg) -> Html msg
btn =
    styled button
        [ margin (px 12)
        , color (rgb 250 250 250)
        , hover
            [ backgroundColor theme.primary
            , textDecoration underline
            ]
        ]
