module Button exposing
    ( Config
    , init
    , onClick
    , toHtml
    )

{-| -}

import Css
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Html.Styled.Events as Events


{-| The config record keeps a description of how the input should look when rendered
-}
type Config msg
    = Config (InternalConfig msg)


type alias InternalConfig msg =
    { text : String
    , onClick : Maybe msg
    }


{-| Initialize a text input configuration
-}
init : String -> Config msg
init text =
    Config
        { text = text
        , onClick = Nothing
        }


{-| -}
onClick : msg -> Config msg -> Config msg
onClick handler (Config config) =
    Config { config | onClick = Just handler }


{-| Render the input to a HTML node.
-}
toHtml : Config msg -> Html msg
toHtml (Config config) =
    Html.button
        [ Attributes.type_ "submit"
        , case config.onClick of
            Just handler ->
                Events.onClick handler

            Nothing ->
                Attributes.attribute "no_click_handler" ""
        , Attributes.css
            [ Css.color <| Css.hex "FFFFFF"
            , Css.backgroundColor <| Css.hex "00866E"
            , Css.textAlign Css.center
            , Css.padding2 (Css.px 6) (Css.px 24)
            , Css.minHeight (Css.px 60)
            , Css.borderRadius (Css.px 4)
            , Css.borderStyle Css.none
            , Css.fontSize <| Css.rem 1.25
            , Css.lineHeight <| Css.rem 1.875
            , Css.fontWeight <| Css.int 700
            ]
        ]
        [ Html.text config.text ]
