mkdir testcases/elm-markup
mkdir testcases/elm-markup/output
cp testcases/bench/standard.html testcases/elm-markup/standard.html
cp testcases/bench/transformed.html testcases/elm-markup/transformed.html
cp testcases/bench/elm.json testcases/elm-markup/elm.json

git submodule add https://github.com/dillonkearns/elm-markdown testcases/elm-markup/repo