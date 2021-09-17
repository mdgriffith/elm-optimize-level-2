module TextInput exposing
    ( Config
    , InputType(..)
    , init
    , isDisabled
    , onChange
    , toHtml
    , withInputId
    , withInputType
    , withPotentialErrorMessage
    )

{-| -}

import Css
import Css.Global
import Css.Transitions
import Html.Styled as Html exposing (Html, div, text)
import Html.Styled.Attributes as Attributes
import Html.Styled.Events as Events


{-| The config record keeps a description of how the input should look when rendered
-}
type Config msg
    = Config (InternalConfig msg)


type alias InternalConfig msg =
    { inputType : InputType
    , label : String
    , value : String
    , inputId : String
    , error : Maybe String
    , onChange : Maybe (String -> msg)
    , disabled : Bool
    }


{-| The input type record decides which input type should be rendered
-}
type InputType
    = TextInput
    | TelephoneInput
    | EmailInput


{-| Initialize a text input configuration
-}
init : String -> String -> Config msg
init label value =
    Config
        { inputType = TextInput
        , label = label
        , value = value
        , inputId = labelAsId label
        , error = Nothing
        , onChange = Nothing
        , disabled = False
        }


{-| -}
onChange : (String -> msg) -> Config msg -> Config msg
onChange handler (Config config) =
    Config { config | onChange = Just handler }


{-| -}
withPotentialErrorMessage : Maybe String -> Config msg -> Config msg
withPotentialErrorMessage error (Config config) =
    Config { config | error = error }


{-| -}
withInputId : String -> Config msg -> Config msg
withInputId inputId (Config config) =
    Config { config | inputId = inputId }


{-| -}
withInputType : InputType -> Config msg -> Config msg
withInputType inputType (Config config) =
    Config { config | inputType = inputType }


{-| -}
isDisabled : Bool -> Config msg -> Config msg
isDisabled disabled (Config config) =
    Config { config | disabled = disabled }


{-| Render the input to a HTML node.
-}
toHtml : Config msg -> Html msg
toHtml (Config config) =
    let
        hasError =
            config.error /= Nothing

        labelTransitionInitial =
            Css.Transitions.transition
                [ Css.Transitions.transform3 250.0 0.0 Css.Transitions.easeIn
                ]

        labelTransitionSelected =
            Css.Transitions.transition
                [ Css.Transitions.transform3 150.0 0.0 Css.Transitions.easeOut
                ]

        selectedLabelStyle =
            Css.batch
                [ Css.transforms
                    [ Css.translateY (Css.pct -35)
                    , Css.translateX (Css.pct -20)
                    , Css.scale 0.6
                    ]
                , labelTransitionSelected
                ]

        selectedInputStyle =
            Css.batch
                [ Css.paddingTop <| Css.px 24
                ]
    in
    div
        [ Attributes.css
            [ Css.position Css.relative
            , Css.fontSize <| Css.px 20
            , Css.lineHeight <| Css.px 30
            ]
        ]
        [ Html.input
            [ Attributes.id config.inputId
            , Attributes.type_ (inputTypeToString config.inputType)
            , Attributes.value config.value
            , Attributes.disabled config.disabled
            , Attributes.css
                [ Css.pseudoElement "-ms-clear"
                    [ Css.display Css.none ]
                , Css.pseudoElement "-ms-reveal"
                    [ Css.display Css.none ]
                , Css.boxSizing Css.borderBox
                , Css.border Css.zero
                , Css.outline Css.zero
                , Css.borderRadius (Css.px 4)
                , Css.boxShadow5 Css.zero Css.zero Css.zero (Css.px 1) <|
                    if hasError then
                        errorColor

                    else
                        borderColor
                , Css.backgroundColor <| Css.hex "FFFFFFFF"
                , Css.lineHeight <| Css.rem 1
                , Css.width <| Css.pct 100
                , Css.height <| Css.px 60
                , Css.paddingTop <| Css.px 12
                , Css.paddingBottom <| Css.px 8
                , Css.paddingLeft <| Css.px 12
                , Css.paddingRight <| Css.px 12
                , Css.fontSize <| Css.px 20
                , inputTransitions ToIdle
                , Css.Global.generalSiblings
                    [ Css.Global.typeSelector "label"
                        [ labelTransitionInitial ]
                    ]
                , if config.disabled then
                    Css.batch
                        [ Css.boxShadow5 Css.zero Css.zero Css.zero (Css.px 1) boxShadowColor
                        ]

                  else
                    Css.batch
                        [ Css.hover
                            [ Css.boxShadow5 Css.zero Css.zero (Css.px 8) Css.zero boxShadowColor
                            , Css.borderColor <| Css.hex "FFFFFFFF"
                            , inputTransitions ToHover
                            ]
                        , Css.focus
                            [ Css.border3 (Css.px 2) Css.solid <|
                                if hasError then
                                    errorColor

                                else
                                    selectedBorderColor
                            , selectedInputStyle
                            , Css.Global.generalSiblings
                                [ Css.Global.typeSelector "label"
                                    [ selectedLabelStyle ]
                                ]
                            , inputTransitions ToFocus
                            ]
                        ]
                , if config.value /= "" then
                    selectedInputStyle

                  else
                    Css.batch []
                ]
            , case config.onChange of
                Just changeEvent ->
                    Events.onInput changeEvent

                Nothing ->
                    Attributes.attribute "no_such_attribute" ""
            ]
            []
        , Html.label
            [ Attributes.for config.inputId
            , Attributes.css
                [ Css.position Css.absolute
                , Css.top <| Css.px 15
                , Css.left <| Css.px 12
                , Css.property "transition" "0.1s all ease-in-out"
                , Css.pointerEvents Css.none
                , if config.disabled then
                    Css.color disabledColor

                  else
                    Css.batch []
                , if config.value /= "" then
                    Css.important selectedLabelStyle

                  else
                    Css.batch []
                ]
            ]
            [ Html.text config.label ]
        , div
            [ Attributes.css
                [ Css.color errorColor
                , Css.lineHeight <| Css.px 24
                , Css.fontSize <| Css.px 14
                ]
            ]
            [ text <|
                if config.disabled then
                    nonBreakingSpace

                else
                    Maybe.withDefault nonBreakingSpace config.error
            ]
        ]


borderColor : Css.Color
borderColor =
    Css.hex "606568"


selectedBorderColor : Css.Color
selectedBorderColor =
    Css.hex "00957A"


errorColor : Css.Color
errorColor =
    Css.hex "ED0000"


disabledColor : Css.Color
disabledColor =
    Css.hex "888B8E"


boxShadowColor : Css.Color
boxShadowColor =
    Css.hex "EBEBEC"


nonBreakingSpace : String
nonBreakingSpace =
    "\u{00A0}"


labelAsId : String -> String
labelAsId label =
    label
        |> String.toLower
        |> String.replace " " "-"


inputTypeToString : InputType -> String
inputTypeToString inputType =
    case inputType of
        TextInput ->
            "text"

        TelephoneInput ->
            "tel"

        EmailInput ->
            "email"



-- Transitions


type Transition
    = ToFocus
    | ToHover
    | ToIdle


inputTransitions : Transition -> Css.Style
inputTransitions event =
    case event of
        ToFocus ->
            Css.Transitions.transition
                [ Css.Transitions.borderColor3 500.0 0.0 Css.Transitions.easeOut
                , Css.Transitions.borderRadius3 250.0 0.0 Css.Transitions.easeOut
                , Css.Transitions.boxShadow3 250.0 0.0 Css.Transitions.easeOut
                ]

        ToHover ->
            Css.Transitions.transition
                [ Css.Transitions.borderColor3 175.0 0.0 Css.Transitions.easeOut
                , Css.Transitions.borderRadius3 175.0 0.0 Css.Transitions.easeOut
                , Css.Transitions.boxShadow3 175.0 0.0 Css.Transitions.easeOut
                ]

        ToIdle ->
            Css.Transitions.transition
                [ Css.Transitions.borderColor3 250.0 0.0 Css.Transitions.easeIn
                , Css.Transitions.borderRadius3 250.0 0.0 Css.Transitions.easeIn
                , Css.Transitions.boxShadow3 250.0 0.0 Css.Transitions.easeIn
                ]
