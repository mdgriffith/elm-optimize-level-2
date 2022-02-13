

# Compile normally
elm make src/Tests.elm --output=dist/elm.js --optimize

# Compile with level 2
../../bin/elm-optimize-level-2 --output=dist/elm-lvl-2.js src/Tests.elm

# Compile with level-3
../../bin/elm-optimize-level-2 --output=dist/elm-lvl-3.js -O3 src/Tests.elm

# Run tests
node index.js