port module Main exposing (main)

{-| -}

import Benchmark exposing (..)
import Benchmark.Runner exposing (BenchmarkProgram, program)
import Benchmark.Runner.Json
import Dict
import Html
import Json.Encode


main : Benchmark.Runner.Json.JsonBenchmark
main =
    Benchmark.Runner.Json.program reportResults suite


port reportResults : Json.Encode.Value -> Cmd msg


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


updateRecord attr record =
    { record | one = 87 }


updateSingleRecord record =
    { record | one = 87 }


updateSingleRecordManually record =
    { one = 87
    , two = record.two
    , three = record.three
    }


dictList =
    [ Tuple.pair "one" Zero
    , Tuple.pair "two" (One 5)
    , Tuple.pair "three" (Two "Two" "two")
    , Tuple.pair "four" Zero
    , Tuple.pair "five" (One 5)
    , Tuple.pair "six" (Two "Two" "two")
    , Tuple.pair "seven" Zero
    , Tuple.pair "eight" (One 5)
    , Tuple.pair "nine" (Two "Two" "two")
    ]


dict =
    Dict.fromList dictList


listLiteral _ =
    let
        x =
            [ Zero
            , One 5
            , Two "Two" "two"
            , Zero
            , One 5
            , Two "Two" "two"
            , Zero
            , One 5
            , Two "Two" "two"
            ]
    in
    x


suite : Benchmark
suite =
    describe "Basics"
        [ benchmark "sum 300 entities in a list" <|
            \_ -> List.foldl addMyType 0 many
        , benchmark "300 record updates" <|
            \_ ->
                List.foldl updateRecord
                    { one = 1
                    , two = 2
                    , three = 3
                    }
                    many
        , benchmark "300 single record updates" <|
            \_ ->
                List.map
                    (\_ ->
                        updateRecord
                            { one = 1
                            , two = 2
                            , three = 3
                            }
                    )
                    many
        , benchmark "Update single record" <|
            \_ ->
                updateSingleRecord
                    { one = 1
                    , two = 2
                    , three = 3
                    }
        , benchmark "Update single record via inlining creation in elm" <|
            \_ ->
                updateSingleRecordManually
                    { one = 1
                    , two = 2
                    , three = 3
                    }
        , benchmark "Return list literal" <|
            listLiteral
        , benchmark "Dict.fromList" <|
            \_ ->
                Dict.fromList dictList
        , benchmark "Dict.get" <|
            \_ ->
                Dict.get "eight" dict
        , benchmark "Dict.insert" <|
            \_ ->
                Dict.insert "eight" (Two "Two" "two") dict
        , benchmark "Dict.toList" <|
            \_ ->
                Dict.toList dict
        , benchmark "Dict.size" <|
            \_ ->
                Dict.size dict
        ]
