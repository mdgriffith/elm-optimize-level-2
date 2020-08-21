repo="https://github.com/mdgriffith/elm-ui"
branch="master"
name="elm-ui-2"

mkdir testcases/$name
mkdir testcases/$name/output
touch testcases/$name/output/.keep
cp testcases/elm-markdown/standard.html testcases/$name/standard.html
cp testcases/elm-markdown/transformed.html testcases/$name/transformed.html
cp testcases/elm-markdown/elm.json testcases/$name/elm.json

git submodule add --branch$branch $repo testcases/$name/repo