# Minification

We're basically following the same protocol as [described on the Elm Guide.](https://guide.elm-lang.org/optimization/asset_size.html) We use Terser, which is just an actively maintained fork of Uglify.

After installing `elm-optimize-level-2`,

Install a minifier like [`Terser`](https://www.npmjs.com/package/terser).

```
npm install -g terser
```

Then, you'll want to run these commands to minify and gzip your code before deploying.

```bash
elm-optimize-level-2 Main.elm --output=app.js
terser app.js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' | terser --mangle --output=app.min.js

gzip --keep --force app.min.js
# --keep = keep the original file
# --force = overwrite the existing gzip file if it's there
```
