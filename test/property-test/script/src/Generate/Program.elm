module Generate.Program exposing (programGenerator)

{-| Composes all generators into a complete Elm port module.
-}

import Elm
import Elm.Annotation as Type
import Elm.Arg
import Elm.Case
import Elm.Let
import Elm.Op
import Gen.Basics
import Gen.List
import Gen.Maybe
import Gen.Platform
import Gen.Platform.Cmd
import Gen.Platform.Sub
import Gen.String
import Generate.HtmlTests
import Generate.Names as Names
import Random


{-| Generate a complete Elm port module that exercises eol2 transforms.
The Int parameter is the test index (for module naming).
-}
programGenerator : Int -> Random.Generator Elm.File
programGenerator index =
    Random.map4
        (\customTypes recordDefs functionDefs listAndPrimOps ->
            buildFile index customTypes recordDefs functionDefs listAndPrimOps
        )
        (customTypesGenerator index)
        (recordDefsGenerator index)
        (functionDefsGenerator index)
        (listAndPrimitiveOpsGenerator index)



-- CUSTOM TYPES


type alias CustomTypeDef =
    { typeName : String
    , variants : List VariantDef
    }


type alias VariantDef =
    { name : String
    , payloads : List PrimitiveType
    }


type PrimitiveType
    = PInt
    | PString
    | PBool
    | PFloat


primitiveTypeGenerator : Random.Generator PrimitiveType
primitiveTypeGenerator =
    Random.uniform PInt [ PString, PBool, PFloat ]


customTypesGenerator : Int -> Random.Generator (List CustomTypeDef)
customTypesGenerator index =
    Random.int 1 3
        |> Random.andThen
            (\count ->
                randomListIndexed count
                    (\i -> customTypeGenerator index i)
            )


customTypeGenerator : Int -> Int -> Random.Generator CustomTypeDef
customTypeGenerator baseIndex typeIndex =
    let
        tName =
            Names.typeName (baseIndex * 10 + typeIndex)
    in
    Random.int 2 5
        |> Random.andThen
            (\variantCount ->
                randomListIndexed variantCount
                    (\vi -> variantGenerator (baseIndex * 10 + typeIndex) vi)
            )
        |> Random.map
            (\variants ->
                { typeName = tName
                , variants = variants
                }
            )


variantGenerator : Int -> Int -> Random.Generator VariantDef
variantGenerator typeIndex variantIndex =
    let
        vName =
            Names.variantName typeIndex variantIndex
    in
    Random.int 0 3
        |> Random.andThen (\payloadCount -> randomList payloadCount primitiveTypeGenerator)
        |> Random.map
            (\payloads ->
                { name = vName
                , payloads = payloads
                }
            )



-- RECORDS


type alias RecordDef =
    { aliasName : String
    , fields : List ( String, PrimitiveType )
    }


recordDefsGenerator : Int -> Random.Generator (List RecordDef)
recordDefsGenerator index =
    Random.int 1 2
        |> Random.andThen
            (\count ->
                randomListIndexed count
                    (\i -> recordDefGenerator (index * 10 + i))
            )


recordDefGenerator : Int -> Random.Generator RecordDef
recordDefGenerator index =
    Random.int 2 5
        |> Random.andThen
            (\fieldCount ->
                randomListIndexed fieldCount
                    (\i ->
                        primitiveTypeGenerator
                            |> Random.map (\t -> ( Names.fieldName i, t ))
                    )
            )
        |> Random.map
            (\fields ->
                { aliasName = "Record" ++ String.fromInt index
                , fields = fields
                }
            )



-- FUNCTIONS


type alias FunctionDef =
    { name : String
    , arity : Int
    , body : FnBody
    }


type FnBody
    = SumArgs
    | ConcatArgs
    | FirstArg


functionDefsGenerator : Int -> Random.Generator (List FunctionDef)
functionDefsGenerator index =
    Random.int 2 4
        |> Random.andThen
            (\count ->
                randomListIndexed count
                    (\i -> functionDefGenerator (index * 10 + i))
            )


functionDefGenerator : Int -> Random.Generator FunctionDef
functionDefGenerator index =
    Random.map2
        (\arity body ->
            { name = Names.functionName index
            , arity = arity
            , body = body
            }
        )
        (Random.int 2 5)
        (Random.uniform SumArgs [ ConcatArgs, FirstArg ])



-- LIST AND PRIMITIVE OPS


type alias ListAndPrimitiveOps =
    { listSize : Int
    , useMap : Bool
    , useFilter : Bool
    , useFoldl : Bool
    , equalityChecks : List ( Int, Int )
    , numberToStringCount : Int
    }


listAndPrimitiveOpsGenerator : Int -> Random.Generator ListAndPrimitiveOps
listAndPrimitiveOpsGenerator _ =
    Random.map3
        (\( listSize, numToStr ) ( useMap, useFilter ) ( useFoldl, eqChecks ) ->
            { listSize = listSize
            , useMap = useMap
            , useFilter = useFilter
            , useFoldl = useFoldl
            , equalityChecks = eqChecks
            , numberToStringCount = numToStr
            }
        )
        (Random.map2 Tuple.pair
            (Random.int 3 10)
            (Random.int 1 5)
        )
        (Random.map2 Tuple.pair
            (Random.weighted ( 80, True ) [ ( 20, False ) ])
            (Random.weighted ( 70, True ) [ ( 30, False ) ])
        )
        (Random.map2 Tuple.pair
            (Random.weighted ( 75, True ) [ ( 25, False ) ])
            (Random.int 1 4
                |> Random.andThen
                    (\count ->
                        randomList count
                            (Random.map2 Tuple.pair
                                (Random.int 0 100)
                                (Random.int 0 100)
                            )
                    )
            )
        )



-- FILE ASSEMBLY


buildFile : Int -> List CustomTypeDef -> List RecordDef -> List FunctionDef -> ListAndPrimitiveOps -> Elm.File
buildFile index customTypes recordDefs functionDefs listAndPrimOps =
    let
        moduleName =
            "Test" ++ String.fromInt index
    in
    Elm.file [ moduleName ]
        (List.concat
            [ [ Elm.portOutgoing "output" Type.string ]
            , buildCustomTypeDecls customTypes
            , buildRecordDecls recordDefs
            , buildFunctionDecls functionDefs
            , [ buildComputeResult customTypes recordDefs functionDefs listAndPrimOps ]
            , Generate.HtmlTests.declarations
            , [ buildMain ]
            ]
        )


buildMain : Elm.Declaration
buildMain =
    Elm.declaration "main"
        (Gen.Platform.call_.worker
            (Elm.record
                [ ( "init"
                  , Elm.fn (Elm.Arg.var "flags")
                      (\_ ->
                          Elm.tuple Elm.unit
                              (Elm.apply (Elm.val "output")
                                  [ Elm.apply (Elm.val "computeResult") [ Elm.unit ] ]
                              )
                      )
                  )
                , ( "update"
                  , Elm.fn2 (Elm.Arg.var "msg") (Elm.Arg.var "model")
                      (\_ model -> Elm.tuple model Gen.Platform.Cmd.none)
                  )
                , ( "subscriptions"
                  , Elm.fn (Elm.Arg.var "m") (\_ -> Gen.Platform.Sub.none)
                  )
                ]
            )
            |> Elm.withType (Type.namedWith [ "Platform" ] "Program" [ Type.unit, Type.unit, Type.unit ])
        )



-- CUSTOM TYPE DECLARATIONS


buildCustomTypeDecls : List CustomTypeDef -> List Elm.Declaration
buildCustomTypeDecls customTypes =
    List.concatMap
        (\ct ->
            [ Elm.customType ct.typeName
                (List.map
                    (\v ->
                        case v.payloads of
                            [] ->
                                Elm.variant v.name

                            payloads ->
                                Elm.variantWith v.name
                                    (List.map primitiveToAnnotation payloads)
                    )
                    ct.variants
                )
            , buildToStringForCustomType ct
            ]
        )
        customTypes


buildToStringForCustomType : CustomTypeDef -> Elm.Declaration
buildToStringForCustomType ct =
    let
        fnName =
            decapitalize ct.typeName ++ "ToString"
    in
    Elm.declaration fnName
        (Elm.fn
            (Elm.Arg.var "value")
            (\value ->
                Elm.Case.custom value
                    (Type.named [] ct.typeName)
                    (List.map
                        (\v ->
                            case v.payloads of
                                [] ->
                                    Elm.Case.branch
                                        (Elm.Arg.customType v.name ())
                                        (\() -> Elm.string v.name)

                                [ p0 ] ->
                                    Elm.Case.branch
                                        (Elm.Arg.customType v.name identity
                                            |> Elm.Arg.item (Elm.Arg.var "p0")
                                        )
                                        (\p0Val ->
                                            Elm.Op.append
                                                (Elm.string (v.name ++ ":"))
                                                (primitiveToString p0 p0Val)
                                        )

                                [ p0, p1 ] ->
                                    Elm.Case.branch
                                        (Elm.Arg.customType v.name Tuple.pair
                                            |> Elm.Arg.item (Elm.Arg.var "p0")
                                            |> Elm.Arg.item (Elm.Arg.var "p1")
                                        )
                                        (\( p0Val, p1Val ) ->
                                            Elm.Op.append
                                                (Elm.Op.append
                                                    (Elm.string (v.name ++ ":"))
                                                    (primitiveToString p0 p0Val)
                                                )
                                                (Elm.Op.append
                                                    (Elm.string ",")
                                                    (primitiveToString p1 p1Val)
                                                )
                                        )

                                p0 :: p1 :: p2 :: _ ->
                                    Elm.Case.branch
                                        (Elm.Arg.customType v.name (\a b c -> ( a, b, c ))
                                            |> Elm.Arg.item (Elm.Arg.var "p0")
                                            |> Elm.Arg.item (Elm.Arg.var "p1")
                                            |> Elm.Arg.item (Elm.Arg.var "p2")
                                        )
                                        (\( p0Val, p1Val, p2Val ) ->
                                            Elm.Op.append
                                                (Elm.Op.append
                                                    (Elm.string (v.name ++ ":"))
                                                    (primitiveToString p0 p0Val)
                                                )
                                                (Elm.Op.append
                                                    (Elm.string ",")
                                                    (Elm.Op.append
                                                        (primitiveToString p1 p1Val)
                                                        (Elm.Op.append
                                                            (Elm.string ",")
                                                            (primitiveToString p2 p2Val)
                                                        )
                                                    )
                                                )
                                        )
                        )
                        ct.variants
                    )
            )
        )



-- RECORD DECLARATIONS


buildRecordDecls : List RecordDef -> List Elm.Declaration
buildRecordDecls recordDefs =
    List.concatMap
        (\rd ->
            [ Elm.alias rd.aliasName
                (Type.record
                    (List.map
                        (\( fName, fType ) -> ( fName, primitiveToAnnotation fType ))
                        rd.fields
                    )
                )
            ]
                ++ buildRecordUpdateHelper rd
        )
        recordDefs


{-| Generate a helper function that takes a record parameter and updates
multiple fields at once. Since the record comes from a function parameter,
the Elm compiler can't inline it, forcing a real \_Utils\_update call with
multiple fields — which exercises the recordUpdate sort comparator.
-}
buildRecordUpdateHelper : RecordDef -> List Elm.Declaration
buildRecordUpdateHelper rd =
    case rd.fields of
        ( f1, t1 ) :: ( f2, t2 ) :: ( f3, t3 ) :: _ ->
            let
                fnName =
                    "update" ++ rd.aliasName

                recordType =
                    Type.named [] rd.aliasName
            in
            [ Elm.declaration fnName
                (Elm.fn
                    (Elm.Arg.varWith "r" recordType)
                    (\r ->
                        Elm.updateRecord
                            [ ( f1, primitiveDefaultValue 77 t1 )
                            , ( f2, primitiveDefaultValue 66 t2 )
                            , ( f3, primitiveDefaultValue 55 t3 )
                            ]
                            r
                    )
                    |> Elm.withType
                        (Type.function [ recordType ] recordType)
                )
            ]

        ( f1, t1 ) :: ( f2, t2 ) :: _ ->
            let
                fnName =
                    "update" ++ rd.aliasName

                recordType =
                    Type.named [] rd.aliasName
            in
            [ Elm.declaration fnName
                (Elm.fn
                    (Elm.Arg.varWith "r" recordType)
                    (\r ->
                        Elm.updateRecord
                            [ ( f1, primitiveDefaultValue 77 t1 )
                            , ( f2, primitiveDefaultValue 66 t2 )
                            ]
                            r
                    )
                    |> Elm.withType
                        (Type.function [ recordType ] recordType)
                )
            ]

        _ ->
            []



-- FUNCTION DECLARATIONS


buildFunctionDecls : List FunctionDef -> List Elm.Declaration
buildFunctionDecls functionDefs =
    List.map buildFunctionDecl functionDefs


buildFunctionDecl : FunctionDef -> Elm.Declaration
buildFunctionDecl fn =
    let
        argNames =
            List.range 0 (fn.arity - 1)
                |> List.map (\i -> "arg" ++ String.fromInt i)
    in
    Elm.declaration fn.name
        (Elm.function
            (List.map (\name -> ( name, Just Type.int )) argNames)
            (\args ->
                case fn.body of
                    SumArgs ->
                        List.foldl
                            (\arg acc -> Elm.Op.plus acc arg)
                            (Elm.int 0)
                            args

                    ConcatArgs ->
                        List.foldl
                            (\arg acc ->
                                Elm.Op.append acc
                                    (Gen.String.call_.fromInt arg)
                            )
                            (Elm.string "")
                            args

                    FirstArg ->
                        case args of
                            first :: _ ->
                                first

                            [] ->
                                Elm.int 0
            )
        )



-- COMPUTE RESULT


buildComputeResult : List CustomTypeDef -> List RecordDef -> List FunctionDef -> ListAndPrimitiveOps -> Elm.Declaration
buildComputeResult customTypes recordDefs functionDefs listAndPrimOps =
    Elm.declaration "computeResult"
        (Elm.fn
            (Elm.Arg.varWith "_" Type.unit)
            (\_ ->
                let
                    sections =
                        List.concat
                            [ List.indexedMap buildCustomTypeTestExpr customTypes
                            , List.indexedMap buildRecordTestExpr recordDefs
                            , List.indexedMap buildFunctionTestExpr functionDefs
                            , [ buildListTestExpr listAndPrimOps ]
                            , [ buildEqualityTestExpr listAndPrimOps ]
                            , [ buildNumberToStringTestExpr listAndPrimOps ]
                            , [ buildPartialApplicationTestExpr ]
                            , [ buildNestedCaseTestExpr customTypes ]
                            , [ buildListOperationsTestExpr ]
                            , [ Elm.val "htmlTestResult" ]
                            -- NOTE: buildArityMismatchTestExpr is disabled until
                            -- the unwrap-arity branch fix is merged. Re-enable with:
                            -- , [ buildArityMismatchTestExpr ]
                            ]
                in
                Gen.String.call_.join
                    (Elm.string "|")
                    (Elm.list sections)
            )
            |> Elm.withType (Type.function [ Type.unit ] Type.string)
        )


buildCustomTypeTestExpr : Int -> CustomTypeDef -> Elm.Expression
buildCustomTypeTestExpr _ ct =
    let
        fnName =
            decapitalize ct.typeName ++ "ToString"

        -- Create a value for each variant and stringify it
        variantExprs =
            List.map
                (\v ->
                    let
                        constructed =
                            case v.payloads of
                                [] ->
                                    Elm.val v.name

                                payloads ->
                                    Elm.apply (Elm.val v.name)
                                        (List.indexedMap
                                            (\i p -> primitiveDefaultValue (i + 1) p)
                                            payloads
                                        )
                    in
                    Elm.apply (Elm.val fnName) [ constructed ]
                )
                ct.variants
    in
    Gen.String.call_.join
        (Elm.string ",")
        (Elm.list variantExprs)


buildRecordTestExpr : Int -> RecordDef -> Elm.Expression
buildRecordTestExpr _ rd =
    let
        -- Create a record
        recordExpr =
            Elm.record
                (List.indexedMap
                    (\i ( fName, fType ) ->
                        ( fName, primitiveDefaultValue (i + 1) fType )
                    )
                    rd.fields
                )

        -- Update via helper function (parameter prevents Elm compiler inlining)
        -- Multi-field update triggers recordUpdate sort comparator at O3
        updatedExpr =
            case rd.fields of
                _ :: _ :: _ ->
                    Elm.apply (Elm.val ("update" ++ rd.aliasName)) [ Elm.val "rec" ]

                ( firstField, firstType ) :: _ ->
                    Elm.updateRecord
                        [ ( firstField, primitiveDefaultValue 99 firstType ) ]
                        (Elm.val "rec")

                [] ->
                    Elm.val "rec"

        -- Read fields and concat as string
        readFields =
            List.map
                (\( fName, fType ) ->
                    primitiveToString fType (Elm.get fName (Elm.val "updated"))
                )
                rd.fields
    in
    Elm.Let.letIn
        (\rec ->
            Elm.Let.letIn
                (\updated ->
                    Gen.String.call_.join
                        (Elm.string ",")
                        (Elm.list readFields)
                )
                |> Elm.Let.value "updated" updatedExpr
                |> Elm.Let.toExpression
        )
        |> Elm.Let.value "rec" recordExpr
        |> Elm.Let.toExpression


buildFunctionTestExpr : Int -> FunctionDef -> Elm.Expression
buildFunctionTestExpr _ fn =
    let
        -- Full application
        fullArgs =
            List.range 1 fn.arity
                |> List.map Elm.int

        fullResult =
            Elm.apply (Elm.val fn.name) fullArgs

        -- Also test passing to List.map for higher-order function exercise
        -- (only for arity-1 compatible partial application)
        partialExpr =
            if fn.arity >= 2 then
                let
                    partialArgs =
                        List.range 1 (fn.arity - 1)
                            |> List.map Elm.int

                    partialListExpr =
                        Gen.List.call_.map
                            (Elm.apply (Elm.val fn.name) partialArgs)
                            (Elm.list [ Elm.int 10, Elm.int 20, Elm.int 30 ])
                in
                case fn.body of
                    ConcatArgs ->
                        -- Result is List String, join directly
                        Gen.String.call_.join
                            (Elm.string ",")
                            partialListExpr

                    _ ->
                        -- Result is List Int, convert first
                        listToString partialListExpr

            else
                Elm.string "no-partial"
    in
    case fn.body of
        ConcatArgs ->
            Elm.Op.append fullResult (Elm.Op.append (Elm.string ";") partialExpr)

        _ ->
            Elm.Op.append
                (Gen.String.call_.fromInt fullResult)
                (Elm.Op.append (Elm.string ";") partialExpr)


buildListTestExpr : ListAndPrimitiveOps -> Elm.Expression
buildListTestExpr ops =
    let
        baseList =
            Elm.list (List.map Elm.int (List.range 1 ops.listSize))

        mapped =
            if ops.useMap then
                Gen.List.call_.map
                    (Elm.fn (Elm.Arg.var "n")
                        (\n -> Elm.Op.multiply n (Elm.int 2))
                    )
                    baseList

            else
                baseList

        filtered =
            if ops.useFilter then
                Gen.List.call_.filter
                    (Elm.fn (Elm.Arg.var "n")
                        (\n ->
                            Elm.Op.gt n (Elm.int 3)
                        )
                    )
                    mapped

            else
                mapped

        folded =
            if ops.useFoldl then
                Elm.apply
                    (Elm.value
                        { importFrom = [ "List" ]
                        , name = "foldl"
                        , annotation = Nothing
                        }
                    )
                    [ Elm.fn2 (Elm.Arg.var "a") (Elm.Arg.var "b")
                        (\a b -> Elm.Op.plus a b)
                    , Elm.int 0
                    , filtered
                    ]
                    |> (\e -> Gen.String.call_.fromInt e)

            else
                filtered |> listToString
    in
    folded


buildEqualityTestExpr : ListAndPrimitiveOps -> Elm.Expression
buildEqualityTestExpr ops =
    let
        -- Simple literal equality (exercises basic path)
        literalChecks =
            List.map
                (\( a, b ) ->
                    Elm.ifThen
                        (Elm.Op.equal (Elm.int a) (Elm.int b))
                        (Elm.string "T")
                        (Elm.string "F")
                )
                ops.equalityChecks

        -- Equality with computed expressions (exercises BinaryExpression path)
        computedChecks =
            List.map
                (\( a, b ) ->
                    Elm.ifThen
                        (Elm.Op.equal
                            (Elm.Op.plus (Elm.int a) (Elm.int 1))
                            (Elm.Op.plus (Elm.int b) (Elm.int 1))
                        )
                        (Elm.string "T")
                        (Elm.string "F")
                )
                ops.equalityChecks

        -- String equality (exercises string literal path)
        stringChecks =
            [ Elm.ifThen
                (Elm.Op.equal (Elm.string "hello") (Elm.string "hello"))
                (Elm.string "T")
                (Elm.string "F")
            , Elm.ifThen
                (Elm.Op.equal (Elm.string "foo") (Elm.string "bar"))
                (Elm.string "T")
                (Elm.string "F")
            ]

        -- Negated value equality (exercises PrefixUnaryExpression path)
        negatedChecks =
            [ Elm.ifThen
                (Elm.Op.equal
                    (Gen.Basics.call_.negate (Elm.int 5))
                    (Elm.int -5)
                )
                (Elm.string "T")
                (Elm.string "F")
            ]
    in
    Gen.String.call_.join
        (Elm.string ",")
        (Elm.list (literalChecks ++ computedChecks ++ stringChecks ++ negatedChecks))


buildNumberToStringTestExpr : ListAndPrimitiveOps -> Elm.Expression
buildNumberToStringTestExpr ops =
    let
        conversions =
            List.range 1 ops.numberToStringCount
                |> List.map
                    (\i ->
                        Gen.String.call_.fromInt (Elm.int (i * 42))
                    )
    in
    Gen.String.call_.join
        (Elm.string ",")
        (Elm.list conversions)



-- PARTIAL APPLICATION TEST
-- Exercises inlineWrappedFunctions partial application path


buildPartialApplicationTestExpr : Elm.Expression
buildPartialApplicationTestExpr =
    let
        -- List.map (\n -> n * 2) [1,2,3,4,5]
        doubled =
            Gen.List.call_.map
                (Elm.fn (Elm.Arg.var "n")
                    (\n -> Elm.Op.multiply n (Elm.int 2))
                )
                (Elm.list (List.map Elm.int (List.range 1 5)))

        -- List.map (String.fromInt) [result of above] — using a named fn
        asStrings =
            Gen.List.call_.map
                Gen.String.values_.fromInt
                doubled

        -- List.filter ((<) 5) [doubled] — partial application of (<)
        filtered =
            Gen.List.call_.filter
                (Elm.fn (Elm.Arg.var "n")
                    (\n -> Elm.Op.gt n (Elm.int 5))
                )
                doubled

        filteredStr =
            Gen.List.call_.map
                Gen.String.values_.fromInt
                filtered

        -- List.foldl (++) "" (asStrings) — fold with partial application
        -- NOTE: Using Elm.value with annotation = Nothing to avoid elm-codegen
        -- infinite type inference loop with Gen.List.call_.foldl
        joined =
            Elm.apply
                (Elm.value { importFrom = [ "List" ], name = "foldl", annotation = Nothing })
                [ Elm.fn2 (Elm.Arg.var "a") (Elm.Arg.var "b")
                    (\a b -> Elm.Op.append a b)
                , Elm.string ""
                , asStrings
                ]

        -- List.indexedMap (\i x -> String.fromInt i ++ ":" ++ String.fromInt x) [1,2,3]
        indexMapped =
            Gen.List.call_.indexedMap
                (Elm.fn2 (Elm.Arg.var "i") (Elm.Arg.var "x")
                    (\i x ->
                        Elm.Op.append
                            (Gen.String.call_.fromInt i)
                            (Elm.Op.append (Elm.string ":")
                                (Gen.String.call_.fromInt x)
                            )
                    )
                )
                (Elm.list (List.map Elm.int [ 10, 20, 30 ]))
    in
    Gen.String.call_.join
        (Elm.string ";")
        (Elm.list
            [ joined
            , Gen.String.call_.join (Elm.string ",") filteredStr
            , Gen.String.call_.join (Elm.string ",") indexMapped
            ]
        )



-- NESTED CASE EXPRESSION TEST
-- Exercises deeper variant shape and pattern matching paths


buildNestedCaseTestExpr : List CustomTypeDef -> Elm.Expression
buildNestedCaseTestExpr customTypes =
    case customTypes of
        ct :: _ ->
            let
                -- Create a value of the first variant
                firstVariant =
                    case ct.variants of
                        v :: _ ->
                            case v.payloads of
                                [] ->
                                    Elm.val v.name

                                payloads ->
                                    Elm.apply (Elm.val v.name)
                                        (List.indexedMap
                                            (\i p -> primitiveDefaultValue (i + 10) p)
                                            payloads
                                        )

                        [] ->
                            Elm.string "no-variants"

                -- Create a Maybe wrapper around the variant to exercise nested matching
                wrappedInJust =
                    Gen.Maybe.make_.just firstVariant

                -- Pattern match on Maybe, then on custom type inside
                outerMatch =
                    Elm.Case.custom wrappedInJust
                        (Type.maybe (Type.named [] ct.typeName))
                        [ Elm.Case.branch
                            (Elm.Arg.customType "Just" identity
                                |> Elm.Arg.item (Elm.Arg.var "inner")
                            )
                            (\inner ->
                                Elm.Op.append (Elm.string "Just:")
                                    (Elm.apply (Elm.val (decapitalize ct.typeName ++ "ToString")) [ inner ])
                            )
                        , Elm.Case.branch
                            (Elm.Arg.customType "Nothing" ())
                            (\() -> Elm.string "Nothing")
                        ]
            in
            outerMatch

        [] ->
            Elm.string "no-types"



-- MORE LIST OPERATIONS TEST
-- Exercises replacement list functions (List.append, List.concat, etc.)


buildListOperationsTestExpr : Elm.Expression
buildListOperationsTestExpr =
    let
        list1 =
            Elm.list (List.map Elm.int [ 1, 2, 3 ])

        list2 =
            Elm.list (List.map Elm.int [ 4, 5, 6 ])

        -- List.append
        appended =
            Gen.List.call_.append list1 list2

        -- List.concat
        concated =
            Gen.List.call_.concat (Elm.list [ list1, list2 ])

        -- List.length
        len =
            Gen.List.call_.length appended

        -- List.reverse
        reversed =
            Gen.List.call_.reverse list1

        -- List.take
        taken =
            Gen.List.call_.take (Elm.int 2) appended

        -- List.drop
        dropped =
            Gen.List.call_.drop (Elm.int 4) appended

        -- Convert all to strings
        toStr list =
            Gen.String.call_.join
                (Elm.string ",")
                (Gen.List.call_.map Gen.String.values_.fromInt list)
    in
    Gen.String.call_.join
        (Elm.string ";")
        (Elm.list
            [ toStr appended
            , toStr concated
            , Gen.String.call_.fromInt len
            , toStr reversed
            , toStr taken
            , toStr dropped
            ]
        )



-- ARITY MISMATCH TEST
-- This exercises the bug where passUnwrappedFunctions strips F-wrappers
-- without checking that the wrapper arity matches the A-call arity in the
-- function body. When F3 is passed where A2 is used internally, stripping
-- the wrapper breaks partial application.


buildArityMismatchDecls : List Elm.Declaration
buildArityMismatchDecls =
    [ -- apply2 : (a -> b -> c) -> a -> b -> c
      -- This function takes a 2-arg function and applies it.
      -- Compiled output uses A2(f, x, y) internally.
      Elm.declaration "apply2"
        (Elm.function
            [ ( "f"
              , Just
                    (Type.function
                        [ Type.var "a", Type.var "b" ]
                        (Type.var "c")
                    )
              )
            , ( "x", Just (Type.var "a") )
            , ( "y", Just (Type.var "b") )
            ]
            (\args ->
                case args of
                    [ f, x, y ] ->
                        Elm.apply f [ x, y ]

                    _ ->
                        Elm.string "error"
            )
        )

    -- A 3-arg function that we'll pass to apply2 (arity mismatch)
    , Elm.declaration "combine3"
        (Elm.function
            [ ( "a", Just Type.string )
            , ( "b", Just Type.string )
            , ( "c", Just Type.string )
            ]
            (\args ->
                case args of
                    [ a, b, c ] ->
                        Elm.Op.append a
                            (Elm.Op.append (Elm.string ".")
                                (Elm.Op.append b
                                    (Elm.Op.append (Elm.string "(")
                                        (Elm.Op.append c (Elm.string ")"))
                                    )
                                )
                            )

                    _ ->
                        Elm.string "error"
            )
        )

    -- A 2-arg function (matching arity, for contrast)
    , Elm.declaration "add2Strings"
        (Elm.function
            [ ( "a", Just Type.string )
            , ( "b", Just Type.string )
            ]
            (\args ->
                case args of
                    [ a, b ] ->
                        Elm.Op.append a (Elm.Op.append (Elm.string "+") b)

                    _ ->
                        Elm.string "error"
            )
        )
    ]


buildArityMismatchTestExpr : Elm.Expression
buildArityMismatchTestExpr =
    let
        -- Call apply2 with an INLINE 2-arg lambda (matching arity)
        -- apply2 (\a b -> a ++ "+" ++ b) "left" "right"
        matchingResult =
            Elm.apply (Elm.val "apply2")
                [ Elm.fn2 (Elm.Arg.var "a") (Elm.Arg.var "b")
                    (\a b -> Elm.Op.append a (Elm.Op.append (Elm.string "+") b))
                , Elm.string "left"
                , Elm.string "right"
                ]

        -- Call apply2 with an INLINE 3-arg lambda (arity MISMATCH)
        -- The lambda has 3 params but apply2's body uses A2(f, x, y) — only 2 args.
        -- This should partially apply, returning a function.
        -- apply2 (\a b c -> a ++ "." ++ b ++ "(" ++ c ++ ")") "MyApi" "User"
        -- => (\c -> "MyApi.User(c)")
        partialResult =
            Elm.apply (Elm.val "apply2")
                [ Elm.fn3 (Elm.Arg.var "a") (Elm.Arg.var "b") (Elm.Arg.var "c")
                    (\a b c ->
                        Elm.Op.append a
                            (Elm.Op.append (Elm.string ".")
                                (Elm.Op.append b
                                    (Elm.Op.append (Elm.string "(")
                                        (Elm.Op.append c (Elm.string ")"))
                                    )
                                )
                            )
                    )
                , Elm.string "MyApi"
                , Elm.string "User"
                ]

        -- Apply the partial result to complete it
        fullResult =
            Elm.apply partialResult [ Elm.string "record" ]

        -- Additional F2 call sites to give the transform enough evidence to fire
        -- (the transform requires multiple call sites with F-wrapped args)
        matchingResult2 =
            Elm.apply (Elm.val "apply2")
                [ Elm.fn2 (Elm.Arg.var "x") (Elm.Arg.var "y")
                    (\x y -> Elm.Op.append x (Elm.Op.append (Elm.string "-") y))
                , Elm.string "a"
                , Elm.string "b"
                ]

        matchingResult3 =
            Elm.apply (Elm.val "apply2")
                [ Elm.fn2 (Elm.Arg.var "x") (Elm.Arg.var "y")
                    (\x y -> Elm.Op.append x (Elm.Op.append (Elm.string "=") y))
                , Elm.string "c"
                , Elm.string "d"
                ]
    in
    Gen.String.call_.join
        (Elm.string ",")
        (Elm.list
            [ matchingResult
            , matchingResult2
            , matchingResult3
            , fullResult
            ]
        )



-- HELPERS


primitiveToAnnotation : PrimitiveType -> Type.Annotation
primitiveToAnnotation p =
    case p of
        PInt ->
            Type.int

        PString ->
            Type.string

        PBool ->
            Type.bool

        PFloat ->
            Type.float


primitiveDefaultValue : Int -> PrimitiveType -> Elm.Expression
primitiveDefaultValue seed p =
    case p of
        PInt ->
            Elm.int (seed * 7 + 3)

        PString ->
            Elm.string ("s" ++ String.fromInt seed)

        PBool ->
            if modBy 2 seed == 0 then
                Elm.val "True"

            else
                Elm.val "False"

        PFloat ->
            Elm.float (toFloat seed * 1.5 + 0.1)


primitiveToString : PrimitiveType -> Elm.Expression -> Elm.Expression
primitiveToString p expr =
    case p of
        PInt ->
            Gen.String.call_.fromInt expr

        PFloat ->
            Gen.String.call_.fromFloat expr

        PString ->
            expr

        PBool ->
            Elm.ifThen expr (Elm.string "T") (Elm.string "F")


listToString : Elm.Expression -> Elm.Expression
listToString listExpr =
    Gen.String.call_.join
        (Elm.string ",")
        (Gen.List.call_.map Gen.String.values_.fromInt listExpr)


decapitalize : String -> String
decapitalize s =
    case String.uncons s of
        Just ( first, rest ) ->
            String.fromChar (Char.toLower first) ++ rest

        Nothing ->
            s


randomList : Int -> Random.Generator a -> Random.Generator (List a)
randomList n gen =
    if n <= 0 then
        Random.constant []

    else
        Random.map2 (::) gen (randomList (n - 1) gen)


randomListIndexed : Int -> (Int -> Random.Generator a) -> Random.Generator (List a)
randomListIndexed n genFn =
    List.range 0 (n - 1)
        |> List.map genFn
        |> sequenceGenerators


sequenceGenerators : List (Random.Generator a) -> Random.Generator (List a)
sequenceGenerators gens =
    case gens of
        [] ->
            Random.constant []

        first :: rest ->
            Random.map2 (::) first (sequenceGenerators rest)
