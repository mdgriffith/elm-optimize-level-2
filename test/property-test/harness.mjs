import { createRequire } from 'module';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Import eol2's transform function and internal transform for custom configs
const eol2DistPath = path.join(__dirname, '..', '..', 'dist', 'index.js');
const { transform } = require(eol2DistPath);
const Transform = require(path.join(__dirname, '..', '..', 'dist', 'transform.js'));
const { toolDefaults } = require(path.join(__dirname, '..', '..', 'dist', 'types.js'));

// "All transforms" config — enables transforms normally disabled
function allTransformsConfig() {
  const config = toolDefaults(true, null); // start with O3
  config.replaceVDomNode = true;
  config.inlineNumberToString = true;
  config.listLiterals = 'asCons'; // InlineLists.AsCons
  config.arrowFns = true;
  config.shorthandObjectLiterals = true;
  config.unusedValues = true;
  return config;
}

const generatedDir = path.join(__dirname, 'generated');
const manifestPath = path.join(generatedDir, 'manifest.json');

async function main() {
  if (!fs.existsSync(manifestPath)) {
    console.error('No manifest.json found. Run the generator first.');
    process.exit(1);
  }

  const moduleNames = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log(`Running property tests for ${moduleNames.length} generated programs...\n`);

  let passed = 0;
  let failed = 0;
  const failures = [];

  for (const moduleName of moduleNames) {
    try {
      const result = await runPropertyTest(moduleName);
      if (result.match) {
        passed++;
        const warn = result.warnings.length ? ` [warn: ${result.warnings.join('; ')}]` : '';
        process.stdout.write(`  ${moduleName}: PASS${warn}\n`);
      } else {
        failed++;
        failures.push(result);
        const parts = [];
        if (result.errors.length) parts.push(`errors: ${result.errors.length}`);
        if (result.mismatches.length) parts.push(`mismatches: ${result.mismatches.length}`);
        process.stdout.write(`  ${moduleName}: FAIL (${parts.join(', ')})\n`);
        for (const e of result.errors) console.log(`    ${e}`);
        for (const m of result.mismatches) {
          console.log(`    ${m.name} mismatch:`);
          console.log(`      expected: ${JSON.stringify(m.expected).slice(0, 100)}`);
          console.log(`      got:      ${JSON.stringify(m.got).slice(0, 100)}`);
        }
      }
    } catch (e) {
      failed++;
      failures.push({ moduleName, error: e.message });
      process.stdout.write(`  ${moduleName}: ERROR - ${e.message}\n`);
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${moduleNames.length} total`);

  if (failed > 0) {
    console.log('\nFailures:');
    for (const f of failures) {
      console.log(`  - ${f.moduleName}: ${f.error || 'output mismatch'}`);
    }
    process.exit(1);
  }
}

async function runPropertyTest(moduleName) {
  const elmFile = path.join(generatedDir, 'src', `${moduleName}.elm`);
  const distDir = path.join(generatedDir, 'dist');

  // Ensure dist directory exists
  fs.mkdirSync(distDir, { recursive: true });

  // 1. Compile with elm make --optimize
  const baselineJsPath = path.join(distDir, `${moduleName}-baseline.js`);
  execSync(
    `elm make ${elmFile} --optimize --output=${baselineJsPath}`,
    { cwd: generatedDir, stdio: 'pipe' }
  );

  const baselineJs = fs.readFileSync(baselineJsPath, 'utf8');

  // Helper: transform + run, returning output or error string
  async function transformAndRun(jsSource, label, transformFn) {
    try {
      const transformed = await transformFn(jsSource);
      const output = await runInSandbox(transformed, moduleName);
      return { output, error: null };
    } catch (e) {
      return { output: null, error: `[${label}] ${e.message}` };
    }
  }

  // 2. Run baseline
  const baseline = await runInSandbox(baselineJs, moduleName);

  // 3. Transform + run at each level
  const level2 = await transformAndRun(baselineJs, 'level2', js => transform(js, false));
  const level3 = await transformAndRun(baselineJs, 'level3', js => transform(js, true));
  const allTx  = await transformAndRun(baselineJs, 'all-transforms', async js => {
    return Transform.transform('unused', js, undefined, false, allTransformsConfig());
  });

  // 4. Clean up compiled files to save space
  fs.unlinkSync(baselineJsPath);

  // Compare: level2 and level3 must match baseline (hard failure)
  // all-transforms is informational (warning only)
  const coreErrors = [];
  const coreMismatches = [];
  const warnings = [];

  for (const [name, result] of Object.entries({ level2, level3 })) {
    if (result.error) {
      coreErrors.push(result.error);
    } else if (result.output !== baseline) {
      coreMismatches.push({ name, expected: baseline, got: result.output });
    }
  }

  // all-transforms is bonus coverage — report issues as warnings
  if (allTx.error) {
    warnings.push(allTx.error);
  } else if (allTx.output !== null && allTx.output !== baseline) {
    warnings.push(`[all-transforms] output mismatch`);
  }

  return {
    moduleName,
    match: coreErrors.length === 0 && coreMismatches.length === 0,
    baseline,
    level2: level2.output,
    level3: level3.output,
    allTransforms: allTx.output,
    errors: coreErrors,
    mismatches: coreMismatches,
    warnings,
  };
}

function runInSandbox(jsSource, moduleName) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Timeout running ${moduleName}`));
    }, 10000);

    try {
      const sandbox = {
        setTimeout: globalThis.setTimeout,
        clearTimeout: globalThis.clearTimeout,
        setInterval: globalThis.setInterval,
        clearInterval: globalThis.clearInterval,
        console: { log() {}, warn() {}, error() {} },
      };

      const context = vm.createContext(sandbox);
      const script = new vm.Script(jsSource, { filename: `${moduleName}.js` });
      script.runInContext(context);

      // Navigate to the module's init
      const elmApp = sandbox.Elm[moduleName];
      if (!elmApp) {
        clearTimeout(timeout);
        reject(new Error(`Module ${moduleName} not found in Elm object. Available: ${Object.keys(sandbox.Elm || {})}`));
        return;
      }

      const app = elmApp.init({ flags: {} });
      app.ports.output.subscribe((value) => {
        clearTimeout(timeout);
        resolve(value);
      });
    } catch (e) {
      clearTimeout(timeout);
      reject(e);
    }
  });
}

main();
