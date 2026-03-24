# Property-Based Tests

Generates random valid Elm programs, compiles them with `elm make --optimize`,
runs the JS through eol2's transforms at level 2 and level 3, and asserts all
outputs match. If eol2 produces different runtime results than unoptimized Elm,
the test fails.

## Quick Start

```bash
# Run with a random seed
sh run.sh

# Reproducible run with a specific seed
SEED=42 COUNT=20 sh run.sh
```

## How It Works

1. **Generator** (`script/src/GenerateProgram.elm`): An elm-pages script that
   uses `Random.Generator` + `elm-codegen` to produce N random Elm port modules
   from a deterministic seed.

2. **Generated programs** exercise constructs that eol2 transforms:
   - Custom types with pattern matching (variantShapes)
   - Functions of various arities (inlineWrappedFunctions)
   - Higher-order function passing (passUnwrappedFunctions)
   - Record creation and multi-field updates (recordUpdate)
   - List literals and operations (replace, inlineListFromArray)
   - Equality comparisons with computed expressions (inlineEquality)
   - HTML views using Html.* with Test.Html.Query assertions (adjustVirtualDom)

3. **Harness** (`harness.mjs`): For each generated program, compiles it with
   `elm make --optimize`, calls eol2's `transform()` API at level 2, level 3,
   and an "all transforms" mode, then runs each in a Node.js VM sandbox and
   compares port output.

4. **Coverage** (`report-coverage.mjs`): Reports code coverage split into
   user-reachable transforms (enabled by default configs) vs never-enabled
   transforms (dead config code).

## Coverage

The tests achieve **99.4% effective statement coverage** on user-reachable
transform code — the code that actually runs when users invoke eol2.
