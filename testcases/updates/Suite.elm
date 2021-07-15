module Suite exposing (suite)

{-| -}

import Html
import Html.Attributes as Attr
import V8.Benchmark.Runner.Json exposing (..)
import V8.Debug


type alias Record =
    { someString : String
    , someNum : Int
    , cache : ( String, Int )
    }


emptyRecord =
    { someString = "Name"
    , someNum = 0
    , cache = ( "Name", 0 )
    }


range =
    List.range 0 100


suite : Benchmark
suite =
    describe "Updates"
        [ benchmark "Inc" <|
            \_ ->
                List.foldl
                    (\idx rec -> { rec | someNum = idx })
                    emptyRecord
                    range
        ]
