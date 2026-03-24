/**
 * Reports coverage for user-reachable code only.
 *
 * eol2 has many transforms behind config flags that are never enabled
 * for end users. This script reads the c8 JSON coverage data and reports
 * coverage only for the transforms that are reachable via:
 *   - Level 2 (default): toolDefaults(false)
 *   - Level 3 (-O3): toolDefaults(true)
 *
 * Transforms that are never enabled (replaceVDomNode, inlineNumberToString,
 * listLiterals, arrowFns, shorthandObjectLiterals, objectUpdate, unusedValues,
 * replaceStringFunctions, v8Analysis) are excluded from the report.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Files that are exercised by user-reachable configs (level 2 + level 3)
const USER_REACHABLE_TRANSFORMS = [
  'variantShapes',        // level 2
  'inlineEquality',       // level 2
  'inlineWrappedFunctions', // level 2 (inlineFunctions)
  'passUnwrappedFunctions', // level 2
  'replace',              // level 2 (replaceListFunctions, fastCurriedFns)
  'recordUpdate',         // level 3 (-O3)
  'patterns',             // utility used by above
  'createTSprogram',      // utility used by above
];

// Core pipeline files (always executed via transform() API)
// Note: index.ts and run.ts are CLI entry points — not counted since
// our property tests use the transform() API directly, which goes
// through transform.ts. types.ts:benchmarkDefaults is dead code but
// types.ts:toolDefaults is core.
const CORE_FILES = [
  'transform',
  'types',
];

// Files/functions that are dead code but live in reachable files.
// These inflate the denominator without being meaningful.
// We track them separately for transparency.
// Lines per file that are known dead code / unreachable.
// We subtract these from the denominator for "effective coverage".
const KNOWN_DEAD_LINES = {
  'types': { lines: 21 },             // benchmarkDefaults() function
  'transform': { lines: 21 },         // commented-out Elm parsing + verbose logging
  'patterns': { lines: 19 },          // matchElmSource() never called + defensive throw
  'inlineEquality': { lines: 2 },     // TypeFlags/SyntaxKind bug makes lines 90,92 unreachable
  'variantShapes': { lines: 17 },     // multi-slot variant wrapping (requires disabled Elm parsing)
  'passUnwrappedFunctions': { lines: 28 }, // inline context never wired up (258-275) + bail-out edges
  'inlineWrappedFunctions': { lines: 6 }, // arrow fn handling (Elm never generates arrows) + defensive throws
  'recordUpdate': { lines: 3 },        // sort comparator nameA===nameB branch (Elm records never have duplicate fields)
};

const KNOWN_DEAD_CODE_NOTE = `
Known dead code in reachable files (excluded from effective coverage):
  types.ts            — benchmarkDefaults() (unused duplicate of toolDefaults)
  transform.ts        — commented-out Elm source parsing + verbose logging
  patterns.ts         — matchElmSource() (never called) + defensive error throw
  inlineEquality.ts   — TypeFlags/SyntaxKind bug makes 2 lines unreachable
  variantShapes.ts    — multi-slot variant wrapping (requires disabled Elm parsing)
  passUnwrappedFunctions.ts — inlineCtx never wired up + bail-out edge cases
  inlineWrappedFunctions.ts — arrow fn handling (Elm compiler never emits arrows)
`.trim();

// Utility files used by reachable transforms
const REACHABLE_UTILS = [
  'ElmWrappers',
];

// Files that are NEVER reachable by users
const UNREACHABLE = [
  'adjustVirtualDom',     // replaceVDomNode: always false
  'inlineNumberToString', // inlineNumberToString: always false
  'inlineListFromArray',  // listLiterals: always false
  'modernizeJS',          // arrowFns, shorthandObjectLiterals, objectUpdate: always false
  'removeUnusedLocals',   // unusedValues: always false
  'analyze',              // v8Analysis: always false
  'callgraph',            // only used by analyze.ts (v8Analysis)
  'create',               // only used by analyze.ts and adjustVirtualDom.ts
];

function main() {
  const coverageFile = path.join(__dirname, 'coverage', 'coverage-final.json');

  if (!fs.existsSync(coverageFile)) {
    console.log('No coverage data found. Run with c8 --reporter=json first.');
    return;
  }

  const allCoverage = JSON.parse(fs.readFileSync(coverageFile, 'utf8'));

  // Classify files
  const reachable = {};
  const unreachable = {};
  const reachableNames = [...USER_REACHABLE_TRANSFORMS, ...CORE_FILES, ...REACHABLE_UTILS];

  for (const [filePath, fileCov] of Object.entries(allCoverage)) {
    const basename = path.basename(filePath, '.ts');

    if (UNREACHABLE.some(name => basename === name)) {
      unreachable[basename] = computeFileCoverage(fileCov);
    } else if (reachableNames.some(name => basename === name)) {
      reachable[basename] = computeFileCoverage(fileCov);
    }
  }

  // Report
  console.log('\n=== User-Reachable Code Coverage ===');
  console.log('(Only transforms enabled by default level 2 and -O3 configs)\n');

  let totalStmts = 0, coveredStmts = 0;
  let totalBranches = 0, coveredBranches = 0;

  const rows = [];
  for (const [name, cov] of Object.entries(reachable).sort((a, b) => a[0].localeCompare(b[0]))) {
    totalStmts += cov.totalStatements;
    coveredStmts += cov.coveredStatements;
    totalBranches += cov.totalBranches;
    coveredBranches += cov.coveredBranches;
    rows.push({
      name,
      stmtPct: pct(cov.coveredStatements, cov.totalStatements),
      branchPct: pct(cov.coveredBranches, cov.totalBranches),
    });
  }

  // Print table
  const nameWidth = Math.max(30, ...rows.map(r => r.name.length + 2));
  console.log(pad('File', nameWidth) + pad('% Stmts', 10) + pad('% Branch', 10));
  console.log('-'.repeat(nameWidth + 20));
  for (const row of rows) {
    console.log(pad(row.name, nameWidth) + pad(row.stmtPct, 10) + pad(row.branchPct, 10));
  }
  console.log('-'.repeat(nameWidth + 20));
  console.log(pad('TOTAL (user-reachable)', nameWidth) + pad(pct(coveredStmts, totalStmts), 10) + pad(pct(coveredBranches, totalBranches), 10));

  // Effective coverage: subtract known dead code lines from the denominator
  let deadLines = 0;
  for (const [name, info] of Object.entries(KNOWN_DEAD_LINES)) {
    if (reachable[name]) {
      deadLines += info.lines;
    }
  }
  const effectiveTotal = totalStmts - deadLines;
  const effectiveCovered = coveredStmts; // covered count doesn't change
  console.log(pad('EFFECTIVE (minus dead code)', nameWidth) + pad(pct(effectiveCovered, effectiveTotal), 10) + pad('', 10));

  console.log('\n--- Excluded (never-enabled transforms) ---');
  for (const [name, cov] of Object.entries(unreachable).sort((a, b) => a[0].localeCompare(b[0]))) {
    console.log(`  ${name}: ${pct(cov.coveredStatements, cov.totalStatements)} stmts (not user-reachable)`);
  }

  console.log('\n' + KNOWN_DEAD_CODE_NOTE);
  console.log('');
}

function computeFileCoverage(fileCov) {
  let totalStatements = 0, coveredStatements = 0;
  let totalBranches = 0, coveredBranches = 0;

  if (fileCov.s) {
    for (const count of Object.values(fileCov.s)) {
      totalStatements++;
      if (count > 0) coveredStatements++;
    }
  }

  if (fileCov.b) {
    for (const branches of Object.values(fileCov.b)) {
      for (const count of branches) {
        totalBranches++;
        if (count > 0) coveredBranches++;
      }
    }
  }

  return { totalStatements, coveredStatements, totalBranches, coveredBranches };
}

function pct(covered, total) {
  if (total === 0) return '100%';
  return (covered / total * 100).toFixed(1) + '%';
}

function pad(str, width) {
  return String(str).padEnd(width);
}

main();
