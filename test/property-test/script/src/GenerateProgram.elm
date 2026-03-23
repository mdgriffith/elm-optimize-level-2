module GenerateProgram exposing (run)

import BackendTask
import BackendTask.Do
import Cli.Option as Option
import Cli.OptionsParser as OptionsParser
import Cli.Program as Program
import Elm
import Generate.Program
import Json.Encode
import Pages.Script as Script exposing (Script)
import Random


type alias CliOptions =
    { seed : Int
    , count : Int
    }


run : Script
run =
    Script.withCliOptions program
        (\{ seed, count } ->
            let
                initialSeed =
                    Random.initialSeed seed

                programs =
                    generatePrograms initialSeed count []
            in
            programs
                |> List.map writeProgram
                |> BackendTask.combine
                |> BackendTask.andThen
                    (\_ ->
                        writeManifest (List.map .moduleName programs)
                    )
                |> BackendTask.andThen
                    (\_ ->
                        Script.log
                            ("Generated "
                                ++ String.fromInt count
                                ++ " programs with seed "
                                ++ String.fromInt seed
                            )
                    )
                |> BackendTask.allowFatal
        )


program : Program.Config CliOptions
program =
    Program.config
        |> Program.add
            (OptionsParser.build CliOptions
                |> OptionsParser.with
                    (Option.requiredKeywordArg "seed"
                        |> Option.validateMap
                            (\s ->
                                case String.toInt s of
                                    Just i ->
                                        Ok i

                                    Nothing ->
                                        Err "seed must be an integer"
                            )
                    )
                |> OptionsParser.with
                    (Option.optionalKeywordArg "count"
                        |> Option.withDefault "10"
                        |> Option.validateMap
                            (\s ->
                                case String.toInt s of
                                    Just i ->
                                        Ok i

                                    Nothing ->
                                        Err "count must be an integer"
                            )
                    )
            )


type alias GeneratedProgram =
    { moduleName : String
    , file : Elm.File
    }


generatePrograms : Random.Seed -> Int -> List GeneratedProgram -> List GeneratedProgram
generatePrograms seed remaining acc =
    if remaining <= 0 then
        List.reverse acc

    else
        let
            index =
                List.length acc

            ( file, nextSeed ) =
                Random.step (Generate.Program.programGenerator index) seed

            moduleName =
                "Test" ++ String.fromInt index
        in
        generatePrograms nextSeed
            (remaining - 1)
            ({ moduleName = moduleName, file = file } :: acc)


writeProgram { file } =
    Script.writeFile
        { path = "generated/src/" ++ file.path
        , body = file.contents
        }


writeManifest moduleNames =
    Script.writeFile
        { path = "generated/manifest.json"
        , body =
            Json.Encode.encode 2
                (Json.Encode.list Json.Encode.string moduleNames)
        }
