mkdir testcases/elm-ui-2
mkdir testcases/elm-ui-2/output
cp testcases/bench/standard.html testcases/elm-ui-2/standard.html
cp testcases/bench/transformed.html testcases/elm-ui-2/transformed.html
cp testcases/bench/elm.json testcases/elm-ui-2/elm.json

git submodule add --branch 2.0 https://github.com/mdgriffith/elm-ui testcases/elm-ui-2/repo