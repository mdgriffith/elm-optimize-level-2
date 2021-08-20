module V8.Debug exposing (enableMemoryChecks, memory, optimizationStatus, reportV8StatusForBenchmarks)

{-| -}

import Json.Encode


enableMemoryChecks : () -> ()
enableMemoryChecks _ =
    ()


memory : String -> a -> a
memory tag v =
    v


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
type alias MemoryProperties =
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
