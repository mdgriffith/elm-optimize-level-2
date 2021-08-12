module Suite exposing (suite)

{-| -}

import RoadNetwork
import V8.Benchmark.Runner.Json exposing (..)
import Worlds


suite : Benchmark
suite =
    describe "Road network graph performance"
        [ benchmark "small map" <|
            \_ -> RoadNetwork.fromBoardAndLots Worlds.worldWithFourWayIntersection.board Worlds.worldWithFourWayIntersection.lots
        , benchmark "map with parallel roads" <|
            \_ -> RoadNetwork.fromBoardAndLots Worlds.worldThatHasParallelRoads.board Worlds.worldThatHasParallelRoads.lots
        ]
