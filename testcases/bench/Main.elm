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
    List.repeat 100 values
        |> List.concat


addMyType mine sum =
    case mine of
        Zero ->
            sum

        One i ->
            i + sum

        Two _ _ ->
            sum


type alias MyRecord =
    { one : Int
    , two : Int
    , three : Int
    }


main : BenchmarkProgram
main =
    Benchmark.Runner.program suite


updateRecord attr record =
    { record | one = 87 }


suite : Benchmark
suite =
    describe "Benchmarks"
        [ benchmark "sum 1000 entities in a list" <|
            \_ -> List.foldl addMyType 0 many
        , benchmark "1000 record updates" <|
            \_ ->
                List.foldl updateRecord
                    { one = 1
                    , two = 2
                    , three = 3
                    }
                    many
        ]
