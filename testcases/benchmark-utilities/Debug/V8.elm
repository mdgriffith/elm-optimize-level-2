module Debug.V8 exposing (analyze, report)

{-| -}

import Json.Encode


analyze : String -> a -> a
analyze tag value =
    value


{-|

    hasFastProperties obj

    hasFastSmiElements obj

    hasFastObjectElements obj

    hasFastDoubleElements obj

    hasDictionaryElements obj

    hasFastHoleyElements obj

    haveSameMap ( obj1, obj2 )

    isValidSmi obj

    isSmi obj

    hasFastSmiOrObjectElements obj

    hasSloppyArgumentsElements obj

-}
type alias Shape =
    { tag : String
    , hasFastProperties : Bool
    , hasFastSmiElements : Bool
    , hasFastObjectElements : Bool
    , hasFastDoubleElements : Bool
    , hasDictionaryElements : Bool
    , hasFastHoleyElements : Bool
    , isValidSmi : Bool
    , isSmi : Bool
    , hasFastSmiOrObjectElements : Bool
    , hasSloppyArgumentsElements : Bool
    }


report : () -> Json.Encode.Value
report _ =
    Json.Encode.null
