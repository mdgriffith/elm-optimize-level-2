module Suite exposing (suite)

{-| -}

import Dict
import Json.Encode
import List
import V8.Benchmark.Runner.Json exposing (..)


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


type alias ShapeA =
    { a : String
    , b : Int
    }


type alias ShapeB =
    { a : ShapeA
    , b : Bool
    }


type alias ShapeC =
    { b : ShapeB
    , c : ( Int, Int )
    }


type alias MyRecord =
    { shapeA : ShapeA
    , shapeB : ShapeB
    , shapeC : ShapeC
    }


type ShapeUpdate
    = Str String
    | Boolean Bool
    | Integer Int
    | IntTuple ( Int, Int )


shapeValue =
    { shapeA = { a = "a variant", b = 31 }
    , shapeB =
        { a = { a = "a in b", b = 31 }
        , b = False
        }
    , shapeC = { b = { a = { a = "a in b in c", b = -80 }, b = False }, c = ( 1, -100 ) }
    }


updateValues =
    [ Str "string update"
    , Boolean False
    , Integer 1
    , IntTuple ( 1, 400 )
    , Str
        ""
    , Boolean True
    , Integer -5
    , IntTuple ( 600, -100 )
    ]


updateShape : ShapeUpdate -> MyRecord -> MyRecord
updateShape upd shape =
    case upd of
        Str s ->
            let
                a =
                    shape.shapeA

                newA =
                    { a | a = s ++ a.a }
            in
            { shape | shapeA = newA }

        Boolean bool ->
            let
                b =
                    shape.shapeB

                newB =
                    { b | b = bool }
            in
            { shape | shapeB = newB }

        Integer i ->
            let
                innerA =
                    shape.shapeC.b.a

                innerB =
                    shape.shapeC.b

                innerC =
                    shape.shapeC

                newA =
                    { innerA | b = i + innerA.b }

                newB =
                    { innerB | a = newA }

                newC =
                    { innerC | b = newB }
            in
            { shape | shapeA = newA, shapeC = newC }

        IntTuple ( a, b ) ->
            let
                c =
                    shape.shapeC

                newC =
                    { c | c = ( Tuple.first c.c + a, Tuple.second c.c + b ) }
            in
            { shape | shapeC = newC }


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
        [ benchmark "sum 300 list of custom types" <|
            \_ ->
                List.foldl addMyType
                    0
                    many
        , benchmark
            "Update single record"
          <|
            \_ ->
                List.foldl updateShape shapeValue updateValues
        , benchmark "Update single record via inlining creation in elm" <|
            \_ ->
                updateSingleRecordManually
                    { one = 1
                    , two = 2
                    , three = 3
                    }
        , benchmark "Return list literal"
            listLiteral
        , dictBenchmarks
        , functionCalling
        , jsonEncoding
        , equality
        ]



{- Dict -}


dictBenchmarks =
    describe "Dict"
        [ benchmark "Dict.fromList" <|
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


expression x y z =
    x + y * z


randomConstant =
    39


equality =
    describe "Equality"
        [ benchmark "Equals literal int" <|
            \_ ->
                expression 2 9 8 == 25
        , benchmark "Equals, no literal" <|
            \_ ->
                expression 2 9 8 == randomConstant
        ]


jsonEncoding =
    describe "JSON Encoding"
        [ benchmark "Encode string" <|
            \_ ->
                Json.Encode.encode 4 <|
                    Json.Encode.string "A Json encoded string"
        , benchmark "Encode Object" <|
            \_ ->
                Json.Encode.encode 4 <|
                    Json.Encode.object
                        [ ( "one", Json.Encode.string "A Json encoded string" )
                        , ( "two", Json.Encode.int 56 )
                        , ( "three", Json.Encode.float 62.5 )
                        ]
        ]



-- jsonDecoding =
--     describe "JSON Decoding"
--         [ benchmark "Decode string" <|
--             \_ ->
--                 Json.Encode.encode 4 <|
--                     Json.Encode.string "A Json encoded string"
--         , benchmark "Decode Object" <|
--             \_ ->
--                 Json.Encode.encode 4 <|
--                     Json.Encode.object
--                         [ ( "one", Json.Encode.string "A Json encoded string" )
--                         , ( "two", Json.Encode.int 56 )
--                         , ( "three", Json.Encode.float 62.5 )
--                         ]
--         ]
{- Function calling -}


functionWithRecord { one, two, three, four, five, six } =
    one * two * three


functionWithArgs one two three four five six =
    one * two * three


functionCalling =
    let
        one =
            5

        two =
            10

        three =
            1000

        four =
            "string"

        five =
            True

        six =
            Just 52
    in
    describe "Is having arguments as a record significantly different from positional?"
        -- Normally we shouldnt consider this, but for lib internals, why not?
        -- records are twice as fast!
        -- my guess is because they skip the wrapping of functions that elm does for currying.
        [ benchmark "Calling a function with a 6 record arg" <|
            \_ ->
                functionWithRecord
                    { one = one
                    , two = two
                    , three = three
                    , four = four
                    , five = five
                    , six = six
                    }
        , benchmark "Calling a function with 6 args" <|
            \_ ->
                functionWithArgs one two three four five six
        ]
