port module V8.Benchmark exposing (main)

{-| -}


import V8.Benchmark.Runner.Json
import Suite
import Json.Encode


main : V8.Benchmark.Runner.Json.JsonBenchmark
main =
    V8.Benchmark.Runner.Json.program
        reportResults
        Suite.suite


port reportResults : Json.Encode.Value -> Cmd msg
