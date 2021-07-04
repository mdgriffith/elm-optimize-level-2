module Suite exposing (suite)

{-| -}

import Benchmark exposing (..)



type MyType
    = Zero
    | One Int
    | Two String String


{-| This is an interesting case becase the function be being applied both fully, and partially.
-}
weird : (Bool -> MyType -> Bool) -> ( MyType, List MyType ) -> List Bool
weird fn ( top, remaining ) =
    fn True top :: List.map (fn False) remaining


alwaysFalse one two =
    False


suite : Benchmark
suite =
    describe "Arity"
        [ benchmark "Passed function being used fully and partially" <|
            \_ ->
                weird alwaysFalse ( Zero, [ Zero, Zero, Zero ] )
        ]
