module Main exposing (main)

{-| -}

import Html


type MyType
    = Zero
    | One Int
    | Two String String


values =
    [ Zero
    , One 5
    , Two "Two" "two"
    ]


many =
    List.repeat 1000 values
        |> List.concat


addMyType mine sum =
    case mine of
        Zero ->
            sum

        One i ->
            i + sum

        Two _ _ ->
            sum


main =
    let
        sum =
            List.foldl addMyType 0 many
    in
    Html.text (String.fromInt sum)
