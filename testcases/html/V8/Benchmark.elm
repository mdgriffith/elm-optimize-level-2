port module V8.Benchmark exposing (main)

{-| -}


import Benchmark.Runner.Json
import Suite
import Json.Encode

main : Benchmark.Runner.Json.JsonBenchmark
main =
    Benchmark.Runner.Json.program reportResults Suite.suite

port reportResults : Json.Encode.Value -> Cmd msg

