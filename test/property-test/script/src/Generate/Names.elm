module Generate.Names exposing
    ( fieldName
    , functionName
    , typeName
    , varName
    , variantName
    )

{-| Safe identifier name pools for generated Elm programs.
-}

import Random


typeName : Int -> String
typeName i =
    case modBy 6 i of
        0 ->
            "TypeA"

        1 ->
            "TypeB"

        2 ->
            "TypeC"

        3 ->
            "TypeD"

        4 ->
            "TypeE"

        _ ->
            "TypeF"


variantName : Int -> Int -> String
variantName typeIndex variantIndex =
    let
        prefix =
            case modBy 6 typeIndex of
                0 ->
                    "Alpha"

                1 ->
                    "Beta"

                2 ->
                    "Gamma"

                3 ->
                    "Delta"

                4 ->
                    "Epsilon"

                _ ->
                    "Zeta"
    in
    prefix ++ String.fromInt variantIndex


fieldName : Int -> String
fieldName i =
    case modBy 8 i of
        0 ->
            "fieldA"

        1 ->
            "fieldB"

        2 ->
            "fieldC"

        3 ->
            "fieldD"

        4 ->
            "fieldE"

        5 ->
            "fieldF"

        6 ->
            "fieldG"

        _ ->
            "fieldH"


functionName : Int -> String
functionName i =
    "helperFn" ++ String.fromInt i


varName : Int -> String
varName i =
    "val" ++ String.fromInt i
