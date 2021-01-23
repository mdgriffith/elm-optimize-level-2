module Debug.V8 exposing (memory, optimizationStatus, reportV8StatusForBenchmarks)

{-| -}

import Json.Encode


memory : String -> a -> a
memory tag value =
    value


type Status
    = Status Int


optimizationStatus : String -> a -> a
optimizationStatus tag value =
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
type alias Memory =
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


reportV8StatusForBenchmarks : () -> Json.Encode.Value
reportV8StatusForBenchmarks _ =
    Json.Encode.null
