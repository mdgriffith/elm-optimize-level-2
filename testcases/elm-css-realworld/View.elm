module View exposing (Msg, main, view)

import Button
import Html exposing (Html)
import Html.Styled
import TextInput


type Msg
    = ChangeFromText String
    | ChangeToText String
    | Search


main : Html Msg
main =
    Html.Styled.toUnstyled <| view "Oslo S" "Oslo Airport"


view : String -> String -> Html.Styled.Html Msg
view fromValue toValue =
    Html.Styled.div
        []
        [ TextInput.init "From" fromValue
            |> TextInput.withInputType TextInput.TextInput
            |> TextInput.onChange ChangeFromText
            |> TextInput.toHtml
        , TextInput.init "To" toValue
            |> TextInput.withInputType TextInput.TextInput
            |> TextInput.onChange ChangeToText
            |> TextInput.toHtml
        , Button.init "Search"
            |> Button.onClick Search
            |> Button.toHtml
        ]
