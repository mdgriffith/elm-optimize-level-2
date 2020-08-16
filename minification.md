# Minification

After installing `elm-optimize`,

Install a minifier like [`Terser`](https://www.npmjs.com/package/terser).

```
npm install -g terser
```

Then, you'll want to run these commands to minify and gzip your code before deploying.

```bash
elm-optimize Main.elm --output=app.js
terser app.js

gzip --keep --force app.min.js
# --keep = keep the original file
# --force = overwrite the exisign gzip file if it's there
```