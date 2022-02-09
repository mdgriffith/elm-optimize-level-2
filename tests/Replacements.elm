module Replacements exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    describe "Tests for js code replacements"
        [ list
        , string
        ]


list : Test
list =
    describe "List"
        [ test "List.all" <|
            \_ ->
                Expect.equal True
                    (List.all (\i -> i == 1) [ 1, 1, 1, 1 ])
        , test "List.append" <|
            \_ ->
                Expect.equal [ 1, 2, 3, 4, 5, 6 ]
                    (List.append [ 1, 2, 3 ] [ 4, 5, 6 ])
        , test "List.concat" <|
            \_ ->
                Expect.equal [ 1, 2, 3, 4, 5, 6 ]
                    (List.concat [ [ 1, 2, 3 ], [ 4, 5, 6 ] ])
        , test "List.concatMap" <|
            \_ ->
                Expect.equal [ 1, 2, 3, 4, 5, 6 ]
                    (List.concatMap identity [ [ 1, 2, 3 ], [ 4, 5, 6 ] ])
        , test "List.filter" <|
            \_ ->
                Expect.equal [ 1, 2, 3, 4, 5, 6 ]
                    (List.filter (\_ -> True) [ 1, 2, 3, 4, 5, 6 ])
        , test "List.filter (only even)" <|
            \_ ->
                Expect.equal [ 2, 4, 6 ]
                    (List.filter (\i -> modBy 2 i == 0) [ 1, 2, 3, 4, 5, 6 ])
        , test "List.indexedMap" <|
            \_ ->
                Expect.equal [ 0, 1, 2, 3, 4, 5 ]
                    (List.indexedMap (\i n -> i) [ 1, 2, 3, 4, 5, 6 ])
        , test "List.intersperse" <|
            \_ ->
                Expect.equal [ 1, 10, 2, 10, 3, 10, 4, 10, 5, 10, 6 ]
                    (List.intersperse 10 [ 1, 2, 3, 4, 5, 6 ])
        , test "List.take" <|
            \_ ->
                Expect.equal [ 1, 2 ]
                    (List.take 2 [ 1, 2, 3, 4, 5, 6 ])
        , test "List.unzip" <|
            \_ ->
                Expect.equal ( [ 1, 2 ], [ 3, 4 ] )
                    (List.unzip [ ( 1, 3 ), ( 2, 4 ) ])
        ]


string : Test
string =
    describe "String"
        [ test "String.repeat 4" <|
            \_ ->
                Expect.equal
                    "nananana"
                    (String.repeat 4 "na")
        , test "String.repeat 10" <|
            \_ ->
                Expect.equal
                    "nananananananananana"
                    (String.repeat 10 "na")
        ]
