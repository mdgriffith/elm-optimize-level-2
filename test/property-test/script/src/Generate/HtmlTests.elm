module Generate.HtmlTests exposing (declarations)

{-| Generates HTML view and test declarations that exercise VirtualDom transforms.
Uses Test.Html.Query and Test.Runner to verify the HTML in --optimize builds.
-}

import Elm
import Elm.Annotation as Type
import Elm.Arg
import Elm.Case
import Elm.Let
import Elm.Op
import Gen.Expect
import Gen.Html
import Gen.Html.Attributes
import Gen.List
import Gen.Platform.Cmd
import Gen.Platform.Sub
import Gen.Random
import Gen.String
import Gen.Test
import Gen.Test.Html.Query as Query
import Gen.Test.Html.Selector as Selector
import Gen.Test.Runner as Runner


{-| All HTML-related declarations for the generated test module.
-}
declarations : List Elm.Declaration
declarations =
    [ testHtmlView
    , htmlTestResult
    ]


testHtmlView : Elm.Declaration
testHtmlView =
    Elm.declaration "testHtmlView"
        (Gen.Html.div
            [ Gen.Html.Attributes.class "container" ]
            [ Gen.Html.h1 [] [ Gen.Html.text "Test Page" ]
            , Gen.Html.p
                [ Gen.Html.Attributes.id "intro" ]
                [ Gen.Html.text "This is a "
                , Gen.Html.span
                    [ Gen.Html.Attributes.class "highlight" ]
                    [ Gen.Html.text "test" ]
                , Gen.Html.text " paragraph."
                ]
            , Gen.Html.ul []
                [ Gen.Html.li [ Gen.Html.Attributes.class "item" ] [ Gen.Html.text "1. Alpha" ]
                , Gen.Html.li [ Gen.Html.Attributes.class "item" ] [ Gen.Html.text "2. Beta" ]
                , Gen.Html.li [ Gen.Html.Attributes.class "item" ] [ Gen.Html.text "3. Gamma" ]
                , Gen.Html.li [ Gen.Html.Attributes.class "item" ] [ Gen.Html.text "4. Delta" ]
                ]
            , Gen.Html.div
                [ Gen.Html.Attributes.class "nested" ]
                [ Gen.Html.div
                    [ Gen.Html.Attributes.class "inner" ]
                    [ Gen.Html.span [] [ Gen.Html.text "deep" ]
                    , Gen.Html.button [ Gen.Html.Attributes.id "btn" ] [ Gen.Html.text "Click" ]
                    ]
                ]
            , Gen.Html.p []
                [ Gen.Html.text "42"
                , Gen.Html.text " "
                , Gen.Html.text "3.14"
                ]
            ]
        )


htmlTestResult : Elm.Declaration
htmlTestResult =
    let
        view =
            Elm.val "testHtmlView"

        testSuite =
            Gen.Test.describe "HTML view tests"
                [ Gen.Test.test "has h1 with text"
                    (\_ ->
                        Query.call_.has
                            (Elm.list [ Selector.text "Test Page" ])
                            (Query.call_.find
                                (Elm.list [ Selector.tag "h1" ])
                                (Query.fromHtml view)
                            )
                    )
                , Gen.Test.test "has 4 list items"
                    (\_ ->
                        Query.count
                            (Gen.Expect.call_.equal (Elm.int 4))
                            (Query.call_.findAll
                                (Elm.list [ Selector.tag "li" ])
                                (Query.fromHtml view)
                            )
                    )
                , Gen.Test.test "has span with highlight class"
                    (\_ ->
                        Query.call_.has
                            (Elm.list [ Selector.text "test" ])
                            (Query.call_.find
                                (Elm.list [ Selector.class "highlight" ])
                                (Query.fromHtml view)
                            )
                    )
                , Gen.Test.test "has nested button"
                    (\_ ->
                        Query.call_.has
                            (Elm.list [ Selector.text "Click" ])
                            (Query.call_.find
                                (Elm.list [ Selector.id "btn" ])
                                (Query.fromHtml view)
                            )
                    )
                , Gen.Test.test "container has correct class"
                    (\_ ->
                        Query.call_.has
                            (Elm.list [ Selector.class "container" ])
                            (Query.fromHtml view)
                    )
                , Gen.Test.test "has intro paragraph"
                    (\_ ->
                        Query.call_.has
                            (Elm.list [ Selector.text "paragraph" ])
                            (Query.call_.find
                                (Elm.list [ Selector.id "intro" ])
                                (Query.fromHtml view)
                            )
                    )
                ]

        seededRunners =
            Runner.call_.fromTest
                (Elm.int 100)
                (Gen.Random.call_.initialSeed (Elm.int 0))
                testSuite

        extractRunners =
            Elm.fn (Elm.Arg.var "seeded")
                (\seeded ->
                    Elm.Case.custom seeded
                        (Type.named [ "Test", "Runner" ] "SeededRunners")
                        [ Elm.Case.branch (Elm.Arg.customType "Plain" identity |> Elm.Arg.item (Elm.Arg.var "r")) (\r -> r)
                        , Elm.Case.branch (Elm.Arg.customType "Only" identity |> Elm.Arg.item (Elm.Arg.var "r")) (\r -> r)
                        , Elm.Case.branch (Elm.Arg.customType "Skipping" identity |> Elm.Arg.item (Elm.Arg.var "r")) (\r -> r)
                        , Elm.Case.branch (Elm.Arg.customType "Invalid" identity |> Elm.Arg.item (Elm.Arg.var "_")) (\_ -> Elm.list [])
                        ]
                )

        extractFailures =
            Elm.fn (Elm.Arg.var "runners")
                (\runners ->
                    Gen.List.call_.concatMap
                        (Elm.fn (Elm.Arg.var "runner")
                            (\runner ->
                                Gen.List.call_.filterMap
                                    (Elm.fn (Elm.Arg.var "expectation")
                                        (\expectation ->
                                            Elm.Case.maybe
                                                (Runner.call_.getFailureReason expectation)
                                                { nothing = Elm.nothing
                                                , just =
                                                    ( "failure"
                                                    , \failure -> Elm.just (Elm.get "description" failure)
                                                    )
                                                }
                                        )
                                    )
                                    (Elm.apply (Elm.get "run" runner) [ Elm.unit ])
                            )
                        )
                        runners
                )

        formatResult =
            Elm.fn2 (Elm.Arg.var "runners") (Elm.Arg.var "failures")
                (\runners failures ->
                    Elm.ifThen
                        (Gen.List.call_.isEmpty failures)
                        (Elm.Op.append (Elm.string "HTML:PASS(")
                            (Elm.Op.append
                                (Gen.String.call_.fromInt (Gen.List.call_.length runners))
                                (Elm.string " tests)")
                            )
                        )
                        (Elm.Op.append (Elm.string "HTML:FAIL(")
                            (Elm.Op.append
                                (Gen.String.call_.join (Elm.string ",") failures)
                                (Elm.string ")")
                            )
                        )
                )
    in
    Elm.declaration "htmlTestResult"
        (Elm.Let.letIn
            (\runners ->
                Elm.Let.letIn
                    (\failures ->
                        Elm.apply formatResult [ runners, failures ]
                    )
                    |> Elm.Let.value "failures" (Elm.apply extractFailures [ runners ])
                    |> Elm.Let.toExpression
            )
            |> Elm.Let.value "runners" (Elm.apply extractRunners [ seededRunners ])
            |> Elm.Let.toExpression
        )
