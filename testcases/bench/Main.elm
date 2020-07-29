module Main exposing (main)

{-| -}

import Benchmark exposing (..)
import Benchmark.Runner exposing (BenchmarkProgram, program)
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


main : BenchmarkProgram
main =
    Benchmark.Runner.program suite


suite : Benchmark
suite =
    describe "List of MyType"
        [ -- nest as many descriptions as you like
          describe "slice"
            [ benchmark "sum 1000 entities in a list" <|
                \_ -> List.foldl addMyType 0 many
            ]
        ]
