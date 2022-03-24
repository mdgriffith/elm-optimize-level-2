port module Tests exposing (..)

import SHA256


main : Program {} () ()
main =
    Platform.worker
        { init =
            \json ->
                ( ()
                , case run suite of
                    [] ->
                        onSuccessSend "Pass!"

                    errors ->
                        onFailureSend (String.join ", " errors)
                )
        , update =
            \msg model ->
                ( model, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }


port onSuccessSend : String -> Cmd msg


port onFailureSend : String -> Cmd msg


suite : Test
suite =
    describe "Tests for js code replacements"
        [ list
        , string
        , sha2
        ]


type Test
    = Describe String (List Test)
    | Test String (() -> Bool)


run : Test -> List String
run testcase =
    case testcase of
        Test name toResult ->
            if toResult () then
                []

            else
                [ name ]

        Describe name tests ->
            List.foldl
                (\t results ->
                    run t ++ results
                )
                []
                tests
                |> List.map (\failure -> name ++ " -> " ++ failure)


test =
    Test


describe =
    Describe


list : Test
list =
    describe "List"
        [ test "List.all" <|
            \_ ->
                True
                    == List.all (\i -> i == 1) [ 1, 1, 1, 1 ]
        , test "List.append" <|
            \_ ->
                [ 1, 2, 3, 4, 5, 6 ]
                    == List.append [ 1, 2, 3 ] [ 4, 5, 6 ]
        , test "List.concat" <|
            \_ ->
                [ 1, 2, 3, 4, 5, 6 ]
                    == List.concat [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
        , test "List.concatMap" <|
            \_ ->
                [ 1, 2, 3, 4, 5, 6 ]
                    == List.concatMap identity [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
        , test "List.filter" <|
            \_ ->
                [ 1, 2, 3, 4, 5, 6 ]
                    == List.filter (\_ -> True) [ 1, 2, 3, 4, 5, 6 ]
        , test "List.filter (only even)" <|
            \_ ->
                [ 2, 4, 6 ]
                    == List.filter (\i -> modBy 2 i == 0) [ 1, 2, 3, 4, 5, 6 ]
        , test "List.indexedMap" <|
            \_ ->
                [ 0, 1, 2, 3, 4, 5 ]
                    == List.indexedMap (\i n -> i) [ 1, 2, 3, 4, 5, 6 ]
        , test "List.intersperse" <|
            \_ ->
                [ 1, 10, 2, 10, 3, 10, 4, 10, 5, 10, 6 ]
                    == List.intersperse 10 [ 1, 2, 3, 4, 5, 6 ]
        , test "List.take" <|
            \_ ->
                [ 1, 2 ]
                    == List.take 2 [ 1, 2, 3, 4, 5, 6 ]
        , test "List.unzip" <|
            \_ ->
                ( [ 1, 2 ], [ 3, 4 ] )
                    == List.unzip [ ( 1, 3 ), ( 2, 4 ) ]
        ]


string : Test
string =
    describe "String"
        [ test "String.repeat 4" <|
            \_ ->
                "nananana"
                    == String.repeat 4 "na"
        , test "String.repeat 10" <|
            \_ ->
                "nananananananananana"
                    == String.repeat 10 "na"
        ]


sha2 : Test
sha2 =
    describe "Sha 2"
        [ test "sha256(\"Input\") == \"36ecb4f8669133ce744c21982ba4abe2ecd7086e1dc2226ccd6f266f3a5005f8\"" <|
            \_ ->
                SHA256.toHex (SHA256.fromString "Input")
                    == "36ecb4f8669133ce744c21982ba4abe2ecd7086e1dc2226ccd6f266f3a5005f8"
        ]
