mkdir testcases/elm-obj-file
mkdir testcases/elm-obj-file/output
cp testcases/bench/standard.html testcases/elm-obj-file/standard.html
cp testcases/bench/transformed.html testcases/elm-obj-file/transformed.html
cp testcases/bench/elm.json testcases/elm-obj-file/elm.json

git submodule add https://github.com/w0rm/elm-obj-file testcases/elm-obj-file/repo