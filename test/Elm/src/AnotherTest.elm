port module AnotherTest exposing (..)


main : Program {} () ()
main =
    Platform.worker
        { init =
            \json ->
                ( ()
                , if 1 > 0 then
                    onSuccessSend2 "Pass!"

                  else
                    onFailureSend2 "1 should be greater than 0"
                )
        , update =
            \msg model ->
                ( model, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }


port onSuccessSend2 : String -> Cmd msg


port onFailureSend2 : String -> Cmd msg
