#!/bin/bash
set -e

cd "$(dirname "$0")"

SEED=${SEED:-$RANDOM}
COUNT=${COUNT:-10}

echo "=== elm-optimize-level-2 Property Tests ==="
echo "Seed: $SEED  Count: $COUNT"
echo ""

# Ensure eol2 is built
echo "Building eol2..."
(cd ../.. && npm run build)
echo ""

# Install deps if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Bundle the generator script (only if not already bundled or source changed)
echo "Bundling generator script..."
npx elm-pages bundle-script GenerateProgram --output generate.mjs 2>&1

# Clean previous generated files
rm -rf generated/src/*.elm generated/dist generated/manifest.json
mkdir -p generated/src generated/dist

# Generate programs
echo ""
echo "Generating $COUNT test programs with seed $SEED..."
node generate.mjs --seed "$SEED" --count "$COUNT"
echo ""

# Run the harness with c8 code coverage
# c8 needs to run from the eol2 root to find source files
echo "Running property tests with coverage..."
echo ""
EOL2_ROOT="$(cd ../.. && pwd)"
HARNESS_PATH="$(pwd)/harness.mjs"
cd "$EOL2_ROOT"
npx c8 \
    --reporter=text \
    --reporter=json \
    --reports-dir=test/property-test/coverage \
    node "$HARNESS_PATH"
cd test/property-test

# Report user-reachable coverage (excludes never-enabled transforms)
node report-coverage.mjs

echo ""
echo "=== Done ==="
