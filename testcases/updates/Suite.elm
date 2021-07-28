module Suite exposing (suite)

{-| -}

import V8.Benchmark.Runner.Json exposing (..)


type alias Model =
    { someString : String
    , someNum : Int
    , sortKey : ( String, Int )
    }


emptyRecord : Model
emptyRecord =
    { someString = "Str"
    , someNum = 0
    , sortKey = ( "Str", 0 )
    }


type Msg
    = SetString String
    | SetAll String Int


update : Msg -> Model -> Model
update msg model =
    case msg of
        SetString val ->
            { model
                | someString = val
                , sortKey = ( val, model.someNum )
            }

        SetAll str int ->
            { model
                | someString = str
                , someNum = int
                , sortKey = ( str, int )
            }


updateInline : Msg -> Model -> Model
updateInline msg model =
    case msg of
        SetString val ->
            { someString = val
            , someNum = model.someNum
            , sortKey = ( val, model.someNum )
            }

        SetAll str int ->
            { someString = str
            , someNum = int
            , sortKey = ( str, int )
            }


range : List Int
range =
    List.range 0 100


suite : Benchmark
suite =
    describe "Updates"
        [ benchmark "Update" <|
            \_ ->
                List.foldl updater emptyRecord range
        , benchmark "Update (inline)" <|
            \_ ->
                List.foldl updaterInline emptyRecord range
        ]


updater : Int -> Model -> Model
updater idx rec =
    rec
        |> update (SetString ("String" ++ String.fromInt idx))
        |> update (SetAll ("Str-" ++ String.fromInt idx) idx)


updaterInline : Int -> Model -> Model
updaterInline idx rec =
    rec
        |> updateInline (SetString ("String" ++ String.fromInt idx))
        |> updateInline (SetAll ("Str-" ++ String.fromInt idx) idx)
