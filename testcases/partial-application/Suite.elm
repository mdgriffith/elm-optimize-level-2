module Suite exposing (suite)

{-| -}

import V8.Benchmark.Runner.Json exposing (..)


suite : Benchmark
suite =
    describe "Partial application" <|
        let
            listOfNumbers =
                List.range 0 1000
        in
        [ benchmark "0 arg" <|
            \_ ->
                List.foldl fold0 0 listOfNumbers
        , benchmark "1 arg" <|
            \_ ->
                List.foldl (fold1 1) 0 listOfNumbers
        , benchmark "2 args" <|
            \_ ->
                List.foldl (fold2 3 5) 0 listOfNumbers
        , benchmark "3 args" <|
            \_ ->
                List.foldl (fold3 3 5 10) 0 listOfNumbers
        , benchmark "0 arg r" <|
            \_ ->
                List.foldr fold0 0 listOfNumbers
        , benchmark "1 arg r" <|
            \_ ->
                List.foldr (fold1 1) 0 listOfNumbers
        , benchmark "2 args r" <|
            \_ ->
                List.foldr (fold2 3 5) 0 listOfNumbers
        , benchmark "3 args r" <|
            \_ ->
                List.foldr (fold3 3 5 10) 0 listOfNumbers
        ]


fold0 a b =
    a + b


fold1 a b c =
    a + b + c


fold2 a b c d =
    (a + b) + (c + d)


fold3 a b c d e =
    (a + b) + (c + d) + e
