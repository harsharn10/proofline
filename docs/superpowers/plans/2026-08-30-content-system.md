# Proofline Content System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A validated, file-based content system for Proofline in which project files store rubric inputs and a script derives every public number, with 14 seed stubs, a Pons full-record skeleton, and fixtures that prove the scoring and display rules.

**Architecture:** Plain Node ESM scripts, no framework. `scripts/lib/score.mjs` is the single implementation of scoring/display (pure functions). `scripts/lib/load.mjs` reads all YAML/Markdown into one object. `scripts/validate.mjs` runs JSON Schema + cross-reference + markdown checks. Content lives under `content/` as YAML + Markdown; the future Next.js site consumes `build/derived.json` and never recomputes.

**Tech Stack:** Node ≥ 20 (v24 installed), ESM `.mjs`, `yaml`, `ajv`, `ajv-formats`. No TypeScript, no test framework — `node scripts/test.mjs` with `node:assert`.

**Spec:** `docs/superpowers/specs/2026-08-30-content-system-design.md`

## Global Constraints

- Repo root: `/Users/harsharnsingh/proofline`. Run every command from there.
- **Do not commit.** The owner commits. Leave files in the working tree.
- Node ≥ 20; ESM only (`"type": "module"`); no TypeScript in this step.
- Dependencies: exactly `yaml`, `ajv`, `ajv-formats`. Nothing else.
- Methodology version string everywhere: `proofline-v1.0`.
- Date for all seeded records: `2026-08-30`. Timestamps `2026-08-30T00:00:00Z`.
- Slugs match `^[a-z0-9-]+$`. Source ids match `^S[1-9][0-9]*$`.
- Evidence classes: `verified | claim | inference | disputed | unknown`.
- Lifecycle: `mainnet | beta | announced | inactive | testnet-only`.
- Risk order: `Low < Moderate < Elevated < High < Critical`.
- Security tests and points: deployment_verifiability 5, privileged_power 8, authorization_topology 5, timelock_exit_window 5, audit_deployment_match 5, continuous_safeguards 4, incident_handling 3 (sum 35). `full` = max, `partial` = max/2, `zero` = 0.
- Factor weights: security 35, engineering 20, transparency 15, maturity 15, economic 15. Rubric: strong 80, mixed 50, weak 20, insufficient = unscored → drop and renormalize.
- Confidence weights: primary_source_coverage 30, onchain_verification 25, independent_corroboration 20, freshness 15, review_completeness 10. `approver: pending` ⇒ confidence = min(confidence, 69).
- Override caps: Critical 29, High 59, Elevated none. Final risk = max(assessed, override level).
- Display: stub or confidence < 50 ⇒ score null + label `Research pending / insufficient evidence`; 50–69 ⇒ provisional; ≥ 70 ⇒ normal. Round to integers only at the end.
- Copy voice: plain, short, no hype. Never the word "safe" as a label.

## File Structure

| Path | Responsibility |
|---|---|
| `package.json`, `.gitignore`, `README.md` | scaffold, scripts, how to add a project |
| `PRD.md` | approved PRD, seed table amended to 14 rows |
| `schema/*.schema.json` (6) | shape of each content file type |
| `scripts/lib/score.mjs` | pure scoring + display functions; the only place the rules live |
| `scripts/lib/load.mjs` | read `content/` → `{ site, census, projects, sources, research, dependencies, changelog }` |
| `scripts/lib/research-md.mjs` | parse a research markdown file: front matter, headings, evidence tags |
| `scripts/validate.mjs` | CLI; schema + cross-refs + markdown checks; `--release` |
| `scripts/score.mjs` | CLI; derive all projects → table + `build/derived.json` |
| `scripts/test.mjs` | fixtures vs `fixtures/expected.json`, plus validate on `content/` |
| `scripts/seed-stubs.mjs` | generate stub project/sources/research files from `census.yaml` + a links map; reusable for future adds |
| `fixtures/{clean,high-override,approver-pending}/` | one project + one sources file each |
| `content/**` | the actual content (see spec §4) |

---

### Task 1: Scaffold, dependencies, PRD copy

**Files:**
- Create: `package.json`, `.gitignore`, `README.md` (minimal; expanded in Task 8)
- Create: `PRD.md` (copy of `~/Downloads/PRD.md`, amended)

**Interfaces:**
- Produces: npm scripts `validate`, `score`, `test`, `seed` that later tasks fill in.

- [ ] **Step 1: Write package.json**

```json
{
  "name": "proofline",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "engines": { "node": ">=20" },
  "scripts": {
    "validate": "node scripts/validate.mjs",
    "validate:release": "node scripts/validate.mjs --release",
    "score": "node scripts/score.mjs",
    "seed": "node scripts/seed-stubs.mjs",
    "test": "node scripts/test.mjs"
  },
  "dependencies": {
    "ajv": "^8.17.1",
    "ajv-formats": "^3.0.1",
    "yaml": "^2.8.0"
  }
}
```

- [ ] **Step 2: Write .gitignore**

```
node_modules
build
.env
.env.local
.DS_Store
```

- [ ] **Step 3: Install**

Run: `npm install`
Expected: `node_modules/yaml`, `node_modules/ajv`, `node_modules/ajv-formats` exist; `package-lock.json` created.

- [ ] **Step 4: Copy and amend the PRD**

Run: `cp ~/Downloads/PRD.md PRD.md`

Then edit `PRD.md` §2.1 seed table — append these four rows after the `meridian` row:

```
| statics-protocol | Statics Protocol | RWA baskets | Native redeemable multi-asset baskets, connected pools, self-backed credit. Genesis on mainnet 2026-08-27. Seven-day timelock target documented. |
| safehood | Safehood | Launchpad | Native launchpad creating Uniswap v3 pools. Project states all admin roles sit in one platform admin wallet. |
| robinhood-index-vaults | Robinhood Index Vaults | Index vault | ERC-4626 index vault for Stock Token baskets. Testnet-only, mock swap router, audit on roadmap. |
| vimen | Vimen | RWA baskets | Immutable in-kind index baskets for Stock Tokens, per-basket deposit caps, no admin keys over funds claimed. |
```

Edit §5.1: replace `- Four honest stubs (Mancer, Artificial Inu, Longshot, LONG)` and the `Optional additional stubs` line with `- Thirteen stubs — every other seed-set name (all 14 seed names have a file)`. Edit §12 Website: `One full profile + four stubs` → `One full profile + thirteen stubs`. Edit §14 step 3: `Stub files for Mancer, Artificial Inu, Longshot, LONG` → `Stub files for all thirteen non-Pons seed names`.

Append to the top block, under `Methodology version`: `Amended: 2026-08-30 — seed set extended to 14 (Statics Protocol, Safehood, Robinhood Index Vaults, Vimen restored; product-owner decision).`

- [ ] **Step 5: Verify**

Run: `grep -c '^| ' PRD.md` — expect the seed table plus other tables; specifically `grep -n 'statics-protocol\|safehood\|robinhood-index-vaults\|vimen' PRD.md` shows the four new rows. Run `node -e "import('yaml').then(()=>console.log('ok'))"` → `ok`.

- [ ] **Step 6: Minimal README**

```markdown
# Proofline

Evidence-backed research profiles for native Robinhood Chain plays. See `PRD.md`.

## Commands

    npm install
    npm run validate      # schema + cross-reference + markdown checks
    npm run score         # derive scores/confidence/risk → build/derived.json
    npm test              # fixtures + validate

(Expanded in Task 8.)
```

---
### Task 2: Scoring library, fixtures, test runner

**Files:**
- Create: `scripts/lib/score.mjs`
- Create: `fixtures/clean/project.yaml`, `fixtures/clean/sources.yaml`
- Create: `fixtures/high-override/project.yaml`, `fixtures/high-override/sources.yaml`
- Create: `fixtures/approver-pending/project.yaml`, `fixtures/approver-pending/sources.yaml`
- Create: `fixtures/expected.json`
- Create: `scripts/test.mjs`

**Interfaces:**
- Produces: `derive(project) → Derived` where
  `Derived = { coverage, score: number|null, uncappedScore: number|null, provisional: boolean, label: string|null, confidence: number|null, risk: string|null, override: {level, reason}|null, securityRaw: number|null, factorPercents: {security, engineering, transparency, maturity, economic} }`.
  Also exports the constants `SECURITY_TESTS`, `FACTOR_WEIGHTS`, `RUBRIC`, `CONFIDENCE_WEIGHTS`, `OVERRIDE_CAPS`, `RISK_ORDER`, and the helpers `securityRaw`, `factorPercents`, `weightedScore`, `confidence`, `applyOverride`, `finalRisk`.
- Consumes: nothing from other tasks (Task 3 schemas will validate these fixtures later).

- [ ] **Step 1: Write the clean fixture**

`fixtures/clean/project.yaml`:

```yaml
slug: clean
name: Clean Fixture
symbol: CLN
category: Launchpad
lifecycle: mainnet
coverage: full
summary: Fixture with every security test full and every factor strong.
official_links:
  - { kind: site, url: https://example.com }
dependencies: []
addresses:
  - { label: Router, address: "0x0000000000000000000000000000000000000001", role: router, verified: true, sources: [S1] }
review:
  researcher: fixture
  approver: fixture-approver
  methodology_version: proofline-v1.0
  reviewed_at: 2026-08-30
  published_at: null
scoring:
  security:
    deployment_verifiability: { level: full, evidence: [S1], note: all verified }
    privileged_power:         { level: full, evidence: [S1], note: no unilateral power }
    authorization_topology:   { level: full, evidence: [S1], note: 3-of-5 multisig }
    timelock_exit_window:     { level: full, evidence: [S1], note: 7-day timelock }
    audit_deployment_match:   { level: full, evidence: [S1], note: audit matches commit }
    continuous_safeguards:    { level: full, evidence: [S1], note: bounty and monitoring }
    incident_handling:        { level: full, evidence: [S1], note: no incidents }
  factors:
    engineering:  { level: strong, positive: [public repo], negative: [], missing: [], evidence: [S1] }
    transparency: { level: strong, positive: [named team], negative: [], missing: [], evidence: [S1] }
    maturity:     { level: strong, positive: [live 60 days], negative: [], missing: [], evidence: [S1] }
    economic:     { level: strong, positive: [no oracle], negative: [], missing: [], evidence: [S1] }
  confidence:
    primary_source_coverage: 85
    onchain_verification: 80
    independent_corroboration: 75
    freshness: 90
    review_completeness: 80
  risk:
    assessed: Moderate
    reason: Standard smart-contract exposure.
findings:
  positive: [ { text: Everything checks out., class: verified, sources: [S1] } ]
  risk: []
  missing: []
  unresolved: []
```

`fixtures/clean/sources.yaml`:

```yaml
slug: clean
sources:
  - id: S1
    url: https://example.com
    publisher: Example
    kind: official-site
    accessed_at: 2026-08-30T00:00:00Z
    claim: Fixture source
    excerpt: n/a
    hash: null
    archive_url: null
    researcher: fixture
    available: true
```

- [ ] **Step 2: Write the high-override fixture**

Copy `fixtures/clean/` to `fixtures/high-override/`, then in `project.yaml` change `slug: high-override`, `name: High Override Fixture`, set `privileged_power: { level: zero, evidence: [S1], note: single EOA can drain }`, and add under `scoring:` after `risk:`:

```yaml
  override:
    level: High
    reason: Single EOA can drain user funds without delay.
    evidence: [S1]
```

In `sources.yaml` change `slug: high-override`.

- [ ] **Step 3: Write the approver-pending fixture**

Copy `fixtures/clean/` to `fixtures/approver-pending/`. In `project.yaml`: `slug: approver-pending`, `name: Approver Pending Fixture`, `review.approver: pending`, and confidence block:

```yaml
  confidence:
    primary_source_coverage: 88
    onchain_verification: 80
    independent_corroboration: 80
    freshness: 90
    review_completeness: 80
```

In `sources.yaml` change `slug: approver-pending`.

- [ ] **Step 4: Write expected.json (hand-calculated)**

Arithmetic: security all full = 35/35 → 100. Factors strong = 80. Weighted = 0.35·100 + 0.65·80 = 87. Clean confidence = 0.30·85 + 0.25·80 + 0.20·75 + 0.15·90 + 0.10·80 = 25.5+20+15+13.5+8 = 82. High-override security = 27/35 = 77.142857 → weighted 0.35·77.142857 + 52 = 79 → capped 59, risk max(Moderate, High) = High. Approver-pending confidence = 0.30·88 + 20 + 16 + 13.5 + 8 = 83.9 → 84 → capped 69 → provisional.

```json
{
  "clean":            { "score": 87, "uncappedScore": 87, "provisional": false, "label": null, "confidence": 82, "risk": "Moderate", "override": null, "securityRaw": 35 },
  "high-override":    { "score": 59, "uncappedScore": 79, "provisional": false, "label": null, "confidence": 82, "risk": "High", "override": { "level": "High" }, "securityRaw": 27 },
  "approver-pending": { "score": 87, "uncappedScore": 87, "provisional": true,  "label": null, "confidence": 69, "risk": "Moderate", "override": null, "securityRaw": 35 }
}
```

- [ ] **Step 5: Write the failing test runner**

`scripts/test.mjs`:

```js
import { readFile } from "node:fs/promises";
import { parse } from "yaml";
import assert from "node:assert/strict";
import { derive } from "./lib/score.mjs";

const expected = JSON.parse(await readFile(new URL("../fixtures/expected.json", import.meta.url), "utf8"));
let failures = 0;

for (const [name, want] of Object.entries(expected)) {
  const project = parse(await readFile(new URL(`../fixtures/${name}/project.yaml`, import.meta.url), "utf8"));
  const got = derive(project);
  try {
    assert.equal(got.score, want.score, `${name}: score`);
    assert.equal(got.uncappedScore, want.uncappedScore, `${name}: uncappedScore`);
    assert.equal(got.provisional, want.provisional, `${name}: provisional`);
    assert.equal(got.label, want.label, `${name}: label`);
    assert.equal(got.confidence, want.confidence, `${name}: confidence`);
    assert.equal(got.risk, want.risk, `${name}: risk`);
    assert.equal(got.override?.level ?? null, want.override?.level ?? null, `${name}: override`);
    assert.equal(got.securityRaw, want.securityRaw, `${name}: securityRaw`);
    console.log(`ok   ${name}`);
  } catch (err) {
    failures++;
    console.error(`FAIL ${name}: ${err.message}`);
  }
}

// Stub behaviour: no scoring block → pending label, nulls everywhere.
{
  const stub = derive({ slug: "s", coverage: "stub", review: { approver: "pending" } });
  try {
    assert.equal(stub.score, null);
    assert.equal(stub.label, "Research pending / insufficient evidence");
    assert.equal(stub.confidence, null);
    assert.equal(stub.risk, null);
    console.log("ok   stub");
  } catch (err) { failures++; console.error(`FAIL stub: ${err.message}`); }
}

// Low confidence suppresses the number even on a full profile.
{
  const low = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  low.scoring.confidence = { primary_source_coverage: 40, onchain_verification: 40, independent_corroboration: 40, freshness: 40, review_completeness: 40 };
  const got = derive(low);
  try {
    assert.equal(got.score, null);
    assert.equal(got.uncappedScore, 87);
    assert.equal(got.confidence, 40);
    assert.equal(got.label, "Research pending / insufficient evidence");
    console.log("ok   low-confidence");
  } catch (err) { failures++; console.error(`FAIL low-confidence: ${err.message}`); }
}

// Unscored factor renormalizes weights instead of scoring zero.
{
  const p = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  p.scoring.factors.economic.level = "insufficient";
  const got = derive(p);
  // weights left: 35+20+15+15 = 85 → (35·100 + 50·80)/85 = (3500+4000)/85 = 88.235 → 88
  try { assert.equal(got.score, 88); assert.equal(got.factorPercents.economic, null); console.log("ok   renormalize"); }
  catch (err) { failures++; console.error(`FAIL renormalize: ${err.message}`); }
}

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all scoring tests passed");
```

- [ ] **Step 6: Run to verify it fails**

Run: `npm test`
Expected: error `Cannot find module '.../scripts/lib/score.mjs'`.

- [ ] **Step 7: Implement score.mjs**

`scripts/lib/score.mjs`:

```js
export const SECURITY_TESTS = {
  deployment_verifiability: 5,
  privileged_power: 8,
  authorization_topology: 5,
  timelock_exit_window: 5,
  audit_deployment_match: 5,
  continuous_safeguards: 4,
  incident_handling: 3,
};
export const SECURITY_MAX = 35;
export const FACTOR_WEIGHTS = { security: 35, engineering: 20, transparency: 15, maturity: 15, economic: 15 };
export const RUBRIC = { strong: 80, mixed: 50, weak: 20 };
export const CONFIDENCE_WEIGHTS = {
  primary_source_coverage: 30,
  onchain_verification: 25,
  independent_corroboration: 20,
  freshness: 15,
  review_completeness: 10,
};
export const OVERRIDE_CAPS = { Critical: 29, High: 59, Elevated: null };
export const RISK_ORDER = ["Low", "Moderate", "Elevated", "High", "Critical"];
export const PENDING_LABEL = "Research pending / insufficient evidence";
export const PENDING_CONFIDENCE_CAP = 69;

const LEVEL_FRACTION = { full: 1, partial: 0.5, zero: 0 };

export function securityRaw(security) {
  if (!security) return null;
  let sum = 0;
  for (const [test, max] of Object.entries(SECURITY_TESTS)) {
    const level = security[test]?.level;
    if (!(level in LEVEL_FRACTION)) return null; // any missing test → unscored
    sum += max * LEVEL_FRACTION[level];
  }
  return sum;
}

export function factorPercents(scoring) {
  const raw = securityRaw(scoring?.security);
  const pct = (name) => {
    const level = scoring?.factors?.[name]?.level;
    return level in RUBRIC ? RUBRIC[level] : null;
  };
  return {
    security: raw === null ? null : (raw / SECURITY_MAX) * 100,
    engineering: pct("engineering"),
    transparency: pct("transparency"),
    maturity: pct("maturity"),
    economic: pct("economic"),
  };
}

export function weightedScore(percents) {
  if (percents.security === null) return null; // security is mandatory
  let num = 0, den = 0;
  for (const [name, weight] of Object.entries(FACTOR_WEIGHTS)) {
    const p = percents[name];
    if (p === null || p === undefined) continue;
    num += weight * p;
    den += weight;
  }
  return den ? num / den : null;
}

export function confidence(inputs, approver) {
  if (!inputs) return null;
  let sum = 0;
  for (const [name, weight] of Object.entries(CONFIDENCE_WEIGHTS)) {
    const v = inputs[name];
    if (typeof v !== "number") return null;
    sum += (weight / 100) * v;
  }
  return approver === "pending" ? Math.min(sum, PENDING_CONFIDENCE_CAP) : sum;
}

export function applyOverride(score, override) {
  if (score === null || !override) return score;
  const cap = OVERRIDE_CAPS[override.level];
  return cap === null || cap === undefined ? score : Math.min(score, cap);
}

export function finalRisk(assessed, override) {
  const a = RISK_ORDER.indexOf(assessed);
  const o = override ? RISK_ORDER.indexOf(override.level) : -1;
  const idx = Math.max(a, o);
  return idx < 0 ? null : RISK_ORDER[idx];
}

const round = (x) => (x === null || x === undefined ? null : Math.round(x));

export function derive(project) {
  const base = {
    slug: project.slug,
    coverage: project.coverage,
    score: null, uncappedScore: null, provisional: false, label: PENDING_LABEL,
    confidence: null, risk: null, override: null, securityRaw: null,
    factorPercents: { security: null, engineering: null, transparency: null, maturity: null, economic: null },
  };
  if (project.coverage !== "full" || !project.scoring) return base;

  const s = project.scoring;
  const percents = factorPercents(s);
  const uncapped = weightedScore(percents);
  const conf = confidence(s.confidence, project.review?.approver);
  const override = s.override ? { level: s.override.level, reason: s.override.reason } : null;
  const capped = applyOverride(uncapped, override);
  const risk = finalRisk(s.risk?.assessed, override);
  const confR = round(conf);

  const out = {
    ...base,
    uncappedScore: round(uncapped),
    confidence: confR,
    risk,
    override,
    securityRaw: securityRaw(s.security),
    factorPercents: Object.fromEntries(Object.entries(percents).map(([k, v]) => [k, round(v)])),
  };
  if (capped === null || confR === null || confR < 50) return out; // label stays pending
  return { ...out, score: round(capped), provisional: confR < 70, label: null };
}
```

- [ ] **Step 8: Run tests to verify they pass**

Run: `npm test`
Expected:
```
ok   clean
ok   high-override
ok   approver-pending
ok   stub
ok   low-confidence
ok   renormalize
all scoring tests passed
```

---
### Task 3: JSON schemas, loader, cross-reference checks, validate CLI

**Files:**
- Create: `schema/site.schema.json`, `schema/census.schema.json`, `schema/project.schema.json`, `schema/sources.schema.json`, `schema/dependency.schema.json`, `schema/changelog.schema.json`
- Create: `scripts/lib/schemas.mjs`, `scripts/lib/load.mjs`, `scripts/lib/checks.mjs`
- Create: `scripts/validate.mjs`
- Modify: `scripts/test.mjs` (append schema + cross-ref tests)

**Interfaces:**
- Consumes: fixtures from Task 2.
- Produces:
  - `validateAgainst(schemaName, data) → string[]` (empty = valid), `schemaName ∈ site|census|project|sources|dependency|changelog`
  - `loadContent(rootDir = "content") → Content` where `Content = { site, census, projects: Map<slug, obj>, sources: Map<slug, obj>, research: Map<slug, string>, dependencies: Map<id, obj>, changelog: obj[] , files: Map<key, path> }`
  - `crossCheck(content) → { errors: string[], warnings: string[] }`
  - `releaseCheck(content, derivedBySlug) → string[]` (used by Task 8; defined here)
  - CLI `node scripts/validate.mjs [dir] [--release]` exit 1 on errors.

- [ ] **Step 1: Write `schema/project.schema.json`**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "project",
  "type": "object",
  "additionalProperties": false,
  "required": ["slug","name","symbol","category","lifecycle","coverage","summary","official_links","dependencies","addresses","review","findings"],
  "$defs": {
    "slug": { "type": "string", "pattern": "^[a-z0-9-]+$" },
    "sourceId": { "type": "string", "pattern": "^S[1-9][0-9]*$" },
    "sourceRefs": { "type": "array", "items": { "$ref": "#/$defs/sourceId" }, "uniqueItems": true },
    "evidenceClass": { "enum": ["verified","claim","inference","disputed","unknown"] },
    "risk": { "enum": ["Low","Moderate","Elevated","High","Critical"] },
    "link": { "type": "object", "additionalProperties": false, "required": ["kind","url"],
      "properties": { "kind": { "enum": ["site","app","docs","whitepaper","x","github","telegram","discord","other"] }, "url": { "type": "string", "format": "uri" } } },
    "finding": { "type": "object", "additionalProperties": false, "required": ["text","class"],
      "properties": { "text": { "type": "string", "minLength": 1 }, "class": { "$ref": "#/$defs/evidenceClass" }, "sources": { "$ref": "#/$defs/sourceRefs" } },
      "if": { "properties": { "class": { "not": { "const": "unknown" } } } },
      "then": { "required": ["sources"], "properties": { "sources": { "minItems": 1 } } } },
    "gap": { "type": "object", "additionalProperties": false, "required": ["text"], "properties": { "text": { "type": "string", "minLength": 1 } } },
    "securityTest": { "type": "object", "additionalProperties": false, "required": ["level","evidence","note"],
      "properties": { "level": { "enum": ["full","partial","zero"] }, "evidence": { "$ref": "#/$defs/sourceRefs" }, "note": { "type": "string", "minLength": 1 } } },
    "factor": { "type": "object", "additionalProperties": false, "required": ["level","positive","negative","missing","evidence"],
      "properties": { "level": { "enum": ["strong","mixed","weak","insufficient"] },
        "positive": { "type": "array", "items": { "type": "string" } }, "negative": { "type": "array", "items": { "type": "string" } },
        "missing": { "type": "array", "items": { "type": "string" } }, "evidence": { "$ref": "#/$defs/sourceRefs" } } },
    "pct": { "type": "integer", "minimum": 0, "maximum": 100 }
  },
  "properties": {
    "slug": { "$ref": "#/$defs/slug" },
    "name": { "type": "string", "minLength": 1 },
    "symbol": { "type": ["string","null"] },
    "category": { "enum": ["Launchpad","Aggregator","Stock-paired token","Fee-routing protocol","NFT / treasury","RWA distributor","RWA baskets","CDP","Agent / execution","Prediction market","Index vault"] },
    "lifecycle": { "enum": ["mainnet","beta","announced","inactive","testnet-only"] },
    "coverage": { "enum": ["full","stub"] },
    "summary": { "type": "string", "minLength": 1 },
    "official_links": { "type": "array", "items": { "$ref": "#/$defs/link" } },
    "dependencies": { "type": "array", "items": { "$ref": "#/$defs/slug" }, "uniqueItems": true },
    "addresses": { "type": "array", "items": { "type": "object", "additionalProperties": false, "required": ["label","address","role","verified","sources"],
      "properties": { "label": { "type": "string" }, "address": { "type": "string", "pattern": "^(0x[0-9a-fA-F]{40}|not-verified)$" },
        "role": { "enum": ["token","factory","router","vault","proxy","implementation","admin","multisig","timelock","other"] },
        "verified": { "type": "boolean" }, "sources": { "$ref": "#/$defs/sourceRefs" } } } },
    "review": { "type": "object", "additionalProperties": false, "required": ["researcher","approver","methodology_version","reviewed_at","published_at"],
      "properties": { "researcher": { "type": "string", "minLength": 1 }, "approver": { "type": "string", "minLength": 1 },
        "methodology_version": { "const": "proofline-v1.0" }, "reviewed_at": { "type": "string", "format": "date" }, "published_at": { "type": ["string","null"], "format": "date" } } },
    "scoring": { "type": "object", "additionalProperties": false, "required": ["security","factors","confidence","risk"],
      "properties": {
        "security": { "type": "object", "additionalProperties": false,
          "required": ["deployment_verifiability","privileged_power","authorization_topology","timelock_exit_window","audit_deployment_match","continuous_safeguards","incident_handling"],
          "properties": { "deployment_verifiability": { "$ref": "#/$defs/securityTest" }, "privileged_power": { "$ref": "#/$defs/securityTest" }, "authorization_topology": { "$ref": "#/$defs/securityTest" }, "timelock_exit_window": { "$ref": "#/$defs/securityTest" }, "audit_deployment_match": { "$ref": "#/$defs/securityTest" }, "continuous_safeguards": { "$ref": "#/$defs/securityTest" }, "incident_handling": { "$ref": "#/$defs/securityTest" } } },
        "factors": { "type": "object", "additionalProperties": false, "required": ["engineering","transparency","maturity","economic"],
          "properties": { "engineering": { "$ref": "#/$defs/factor" }, "transparency": { "$ref": "#/$defs/factor" }, "maturity": { "$ref": "#/$defs/factor" }, "economic": { "$ref": "#/$defs/factor" } } },
        "confidence": { "type": "object", "additionalProperties": false, "required": ["primary_source_coverage","onchain_verification","independent_corroboration","freshness","review_completeness"],
          "properties": { "primary_source_coverage": { "$ref": "#/$defs/pct" }, "onchain_verification": { "$ref": "#/$defs/pct" }, "independent_corroboration": { "$ref": "#/$defs/pct" }, "freshness": { "$ref": "#/$defs/pct" }, "review_completeness": { "$ref": "#/$defs/pct" } } },
        "risk": { "type": "object", "additionalProperties": false, "required": ["assessed","reason"], "properties": { "assessed": { "$ref": "#/$defs/risk" }, "reason": { "type": "string", "minLength": 1 } } },
        "override": { "type": "object", "additionalProperties": false, "required": ["level","reason","evidence"],
          "properties": { "level": { "enum": ["Critical","High","Elevated"] }, "reason": { "type": "string", "minLength": 1 }, "evidence": { "$ref": "#/$defs/sourceRefs", "minItems": 1 } } }
      } },
    "findings": { "type": "object", "additionalProperties": false, "required": ["positive","risk","missing","unresolved"],
      "properties": { "positive": { "type": "array", "items": { "$ref": "#/$defs/finding" } }, "risk": { "type": "array", "items": { "$ref": "#/$defs/finding" } },
        "missing": { "type": "array", "items": { "$ref": "#/$defs/gap" } }, "unresolved": { "type": "array", "items": { "$ref": "#/$defs/gap" } } } }
  },
  "allOf": [
    { "if": { "properties": { "coverage": { "const": "full" } } }, "then": { "required": ["scoring"] } },
    { "if": { "properties": { "coverage": { "const": "stub" } } }, "then": { "not": { "required": ["scoring"] }, "properties": { "findings": { "properties": { "missing": { "minItems": 1 } } } } } }
  ]
}
```

- [ ] **Step 2: Write `schema/sources.schema.json`**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "sources",
  "type": "object", "additionalProperties": false, "required": ["slug","sources"],
  "properties": {
    "slug": { "type": "string", "pattern": "^[a-z0-9-]+$" },
    "sources": { "type": "array", "items": { "type": "object", "additionalProperties": false,
      "required": ["id","url","publisher","kind","accessed_at","claim","excerpt","hash","archive_url","researcher","available"],
      "properties": {
        "id": { "type": "string", "pattern": "^S[1-9][0-9]*$" },
        "url": { "type": "string", "format": "uri" },
        "publisher": { "type": "string", "minLength": 1 },
        "kind": { "enum": ["official-site","docs","whitepaper","social","explorer","repository","audit","announcement","third-party-data","news","other"] },
        "accessed_at": { "type": "string", "format": "date-time" },
        "claim": { "type": "string", "minLength": 1 },
        "excerpt": { "type": "string", "maxLength": 500 },
        "hash": { "type": ["string","null"] },
        "archive_url": { "type": ["string","null"], "format": "uri" },
        "researcher": { "type": "string", "minLength": 1 },
        "available": { "type": "boolean" }
      } } }
  }
}
```

- [ ] **Step 3: Write `schema/census.schema.json`**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "census",
  "type": "array",
  "items": { "type": "object", "additionalProperties": false,
    "required": ["slug","name","category","lifecycle","coverage","official_links","discovery_source","qualifying"],
    "properties": {
      "slug": { "type": "string", "pattern": "^[a-z0-9-]+$" },
      "name": { "type": "string", "minLength": 1 },
      "category": { "enum": ["Launchpad","Aggregator","Stock-paired token","Fee-routing protocol","NFT / treasury","RWA distributor","RWA baskets","CDP","Agent / execution","Prediction market","Index vault"] },
      "lifecycle": { "enum": ["mainnet","beta","announced","inactive","testnet-only"] },
      "coverage": { "enum": ["full","stub"] },
      "official_links": { "type": "array", "items": { "type": "object", "additionalProperties": false, "required": ["kind","url"],
        "properties": { "kind": { "enum": ["site","app","docs","whitepaper","x","github","telegram","discord","other"] }, "url": { "type": "string", "format": "uri" } } } },
      "discovery_source": { "type": "string", "minLength": 1 },
      "qualifying": { "type": "object", "additionalProperties": false, "required": ["deployed_on_chain","native_play","citable","research_story"],
        "properties": {
          "deployed_on_chain": { "$ref": "#/$defs/test" }, "native_play": { "$ref": "#/$defs/test" }, "citable": { "$ref": "#/$defs/test" }, "research_story": { "$ref": "#/$defs/test" } } }
    } },
  "$defs": { "test": { "type": "object", "additionalProperties": false, "required": ["value","note","verified"],
    "properties": { "value": { "const": true }, "note": { "type": "string", "minLength": 1 }, "verified": { "type": "boolean" } } } }
}
```

- [ ] **Step 4: Write `schema/site.schema.json`**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "site",
  "type": "object", "additionalProperties": false,
  "required": ["name","tagline","methodology_version","maintainer","corrections","telegram","chain","disclaimer"],
  "properties": {
    "name": { "type": "string" }, "tagline": { "type": "string" },
    "methodology_version": { "const": "proofline-v1.0" },
    "maintainer": { "type": "object", "additionalProperties": false, "required": ["id","display"], "properties": { "id": { "type": "string" }, "display": { "type": "string" } } },
    "corrections": { "type": "object", "additionalProperties": false, "required": ["destination","acknowledge_within_days"],
      "properties": { "destination": { "type": "string" }, "acknowledge_within_days": { "type": "integer", "minimum": 1 } } },
    "telegram": { "type": "object", "additionalProperties": false, "required": ["enabled","weekly_heartbeat"], "properties": { "enabled": { "type": "boolean" }, "weekly_heartbeat": { "type": "boolean" } } },
    "chain": { "type": "object", "additionalProperties": false, "required": ["name","id","stack","gas","mainnet_date","explorer","docs","checked"],
      "properties": { "name": { "type": "string" }, "id": { "type": "integer" }, "stack": { "type": "string" }, "gas": { "type": "string" },
        "mainnet_date": { "type": "string", "format": "date" }, "explorer": { "type": "string", "format": "uri" }, "docs": { "type": "string", "format": "uri" }, "checked": { "type": "string", "format": "date" } } },
    "disclaimer": { "type": "string", "minLength": 20 }
  }
}
```

- [ ] **Step 5: Write `schema/dependency.schema.json`**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dependency",
  "type": "object", "additionalProperties": false,
  "required": ["id","name","kind","summary","controls","failure_modes","sources"],
  "$defs": {
    "sourceRefs": { "type": "array", "items": { "type": "string", "pattern": "^S[1-9][0-9]*$" }, "uniqueItems": true },
    "evidenceClass": { "enum": ["verified","claim","inference","disputed","unknown"] }
  },
  "properties": {
    "id": { "type": "string", "pattern": "^[a-z0-9-]+$" },
    "name": { "type": "string", "minLength": 1 },
    "kind": { "enum": ["issuer-asset","dex","perp-venue","oracle","stablecoin"] },
    "summary": { "type": "string", "minLength": 1 },
    "controls": { "type": "array", "items": { "type": "object", "additionalProperties": false, "required": ["power","holder","note","class","sources"],
      "properties": { "power": { "type": "string" }, "holder": { "type": "string" }, "note": { "type": "string" }, "class": { "$ref": "#/$defs/evidenceClass" }, "sources": { "$ref": "#/$defs/sourceRefs" } } } },
    "failure_modes": { "type": "array", "items": { "type": "object", "additionalProperties": false, "required": ["text","class","sources"],
      "properties": { "text": { "type": "string" }, "class": { "$ref": "#/$defs/evidenceClass" }, "sources": { "$ref": "#/$defs/sourceRefs" } } } },
    "sources": { "type": "array", "items": { "type": "object", "additionalProperties": false,
      "required": ["id","url","publisher","kind","accessed_at","claim","excerpt","hash","archive_url","researcher","available"],
      "properties": {
        "id": { "type": "string", "pattern": "^S[1-9][0-9]*$" }, "url": { "type": "string", "format": "uri" }, "publisher": { "type": "string" },
        "kind": { "enum": ["official-site","docs","whitepaper","social","explorer","repository","audit","announcement","third-party-data","news","other"] },
        "accessed_at": { "type": "string", "format": "date-time" }, "claim": { "type": "string" }, "excerpt": { "type": "string", "maxLength": 500 },
        "hash": { "type": ["string","null"] }, "archive_url": { "type": ["string","null"], "format": "uri" }, "researcher": { "type": "string" }, "available": { "type": "boolean" } } } }
  }
}
```

- [ ] **Step 6: Write `schema/changelog.schema.json`**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "changelog",
  "type": "array",
  "items": { "type": "object", "additionalProperties": false,
    "required": ["date","slug","type","severity","title","detail","prior","new","reviewer","methodology_version"],
    "properties": {
      "date": { "type": "string", "format": "date" },
      "slug": { "type": "string", "pattern": "^[a-z0-9-]+$" },
      "type": { "enum": ["score","risk","stage","finding","correction","coverage"] },
      "severity": { "enum": ["Info","Review","Material","Risk"] },
      "title": { "type": "string", "minLength": 1 }, "detail": { "type": "string", "minLength": 1 },
      "prior": { "type": ["object","null"] }, "new": { "type": ["object","null"] },
      "reviewer": { "type": "string", "minLength": 1 },
      "methodology_version": { "const": "proofline-v1.0" }
    } }
}
```

- [ ] **Step 7: Write `scripts/lib/schemas.mjs`**

```js
import { readFileSync } from "node:fs";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const NAMES = ["site", "census", "project", "sources", "dependency", "changelog"];
const ajv = new Ajv({ allErrors: true, strict: true, strictTypes: false, strictTuples: false });
addFormats(ajv);

const validators = {};
for (const name of NAMES) {
  const schema = JSON.parse(readFileSync(new URL(`../../schema/${name}.schema.json`, import.meta.url), "utf8"));
  validators[name] = ajv.compile(schema);
}

/** Returns [] when valid, else human-readable messages. */
export function validateAgainst(name, data) {
  const v = validators[name];
  if (!v) throw new Error(`unknown schema ${name}`);
  if (v(data)) return [];
  return v.errors.map((e) => `${e.instancePath || "/"} ${e.message}${e.params?.allowedValues ? ` (${e.params.allowedValues.join(", ")})` : ""}`);
}
```

- [ ] **Step 8: Write `scripts/lib/load.mjs`**

```js
import { readFile, readdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { parse } from "yaml";

async function readYaml(path) { return parse(await readFile(path, "utf8")); }

async function readDir(dir, ext) {
  let names;
  try { names = await readdir(dir); } catch { return []; }
  return names.filter((n) => n.endsWith(ext)).sort().map((n) => join(dir, n));
}

/** Loads every content file. Keys of the Maps are slugs (projects/sources/research) or ids (dependencies). */
export async function loadContent(root = "content") {
  const files = new Map();
  const site = await readYaml(join(root, "site.yaml"));           files.set("site", join(root, "site.yaml"));
  const census = await readYaml(join(root, "census.yaml"));       files.set("census", join(root, "census.yaml"));
  const changelog = await readYaml(join(root, "changelog.yaml")); files.set("changelog", join(root, "changelog.yaml"));

  const projects = new Map(), sources = new Map(), research = new Map(), dependencies = new Map();
  for (const p of await readDir(join(root, "projects"), ".yaml")) { const d = await readYaml(p); projects.set(basename(p, ".yaml"), d); files.set(`projects/${basename(p, ".yaml")}`, p); }
  for (const p of await readDir(join(root, "sources"), ".yaml")) { const d = await readYaml(p); sources.set(basename(p, ".yaml"), d); files.set(`sources/${basename(p, ".yaml")}`, p); }
  for (const p of await readDir(join(root, "research"), ".md")) { research.set(basename(p, ".md"), await readFile(p, "utf8")); files.set(`research/${basename(p, ".md")}`, p); }
  for (const p of await readDir(join(root, "dependencies"), ".yaml")) { const d = await readYaml(p); dependencies.set(basename(p, ".yaml"), d); files.set(`dependencies/${basename(p, ".yaml")}`, p); }

  return { site, census, projects, sources, research, dependencies, changelog, files };
}
```

- [ ] **Step 9: Write `scripts/lib/checks.mjs`**

```js
/** Collect every S-id referenced anywhere inside a project object. */
export function referencedSourceIds(project) {
  const ids = new Set();
  const walk = (node, key) => {
    if (Array.isArray(node)) { if (key === "sources" || key === "evidence") node.forEach((x) => typeof x === "string" && ids.add(x)); node.forEach((x) => walk(x, key)); }
    else if (node && typeof node === "object") for (const [k, v] of Object.entries(node)) walk(v, k);
  };
  walk(project, null);
  return ids;
}

export function crossCheck(content) {
  const errors = [], warnings = [];
  const censusSlugs = new Set(content.census.map((c) => c.slug));

  // 1:1:1:1 — census ⇔ projects ⇔ sources ⇔ research
  for (const slug of censusSlugs) {
    for (const [kind, map] of [["projects", content.projects], ["sources", content.sources], ["research", content.research]])
      if (!map.has(slug)) errors.push(`census slug "${slug}" has no ${kind}/${slug} file`);
  }
  for (const [kind, map] of [["projects", content.projects], ["sources", content.sources], ["research", content.research]])
    for (const slug of map.keys()) if (!censusSlugs.has(slug)) errors.push(`${kind}/${slug} is not in census.yaml`);

  for (const [slug, project] of content.projects) {
    if (project.slug !== slug) errors.push(`projects/${slug}: slug field is "${project.slug}"`);
    const census = content.census.find((c) => c.slug === slug);
    if (census && census.coverage !== project.coverage) errors.push(`projects/${slug}: coverage "${project.coverage}" ≠ census "${census.coverage}"`);
    if (census && census.lifecycle !== project.lifecycle) errors.push(`projects/${slug}: lifecycle "${project.lifecycle}" ≠ census "${census.lifecycle}"`);

    const ledger = content.sources.get(slug);
    const ledgerIds = new Set((ledger?.sources ?? []).map((s) => s.id));
    if (ledger && ledger.slug !== slug) errors.push(`sources/${slug}: slug field is "${ledger.slug}"`);
    const seen = new Set();
    for (const s of ledger?.sources ?? []) { if (seen.has(s.id)) errors.push(`sources/${slug}: duplicate id ${s.id}`); seen.add(s.id); }
    for (const id of referencedSourceIds(project)) if (!ledgerIds.has(id)) errors.push(`projects/${slug}: references ${id} which is not in sources/${slug}.yaml`);
    for (const id of ledgerIds) if (!referencedSourceIds(project).has(id)) warnings.push(`sources/${slug}: ${id} is never cited by projects/${slug}.yaml`);

    for (const dep of project.dependencies ?? []) if (!content.dependencies.has(dep)) errors.push(`projects/${slug}: dependency "${dep}" has no dependencies/${dep}.yaml`);
  }

  for (const [id, dep] of content.dependencies) if (dep.id !== id) errors.push(`dependencies/${id}: id field is "${dep.id}"`);
  for (const [i, e] of content.changelog.entries()) if (!censusSlugs.has(e.slug)) errors.push(`changelog[${i}]: slug "${e.slug}" is not in census.yaml`);

  return { errors, warnings };
}

/** Extra gates before public launch (spec §7.5). derivedBySlug: Map<slug, Derived> from score.mjs. */
export function releaseCheck(content, derivedBySlug) {
  const errors = [];
  if (content.site.corrections.destination === "TODO") errors.push("site.yaml: corrections.destination is still TODO");
  if (content.site.maintainer.id === "TODO") errors.push("site.yaml: maintainer.id is still TODO");
  for (const [slug, project] of content.projects) {
    if (project.coverage !== "full") continue;
    for (const a of project.addresses ?? []) if (!a.verified) errors.push(`projects/${slug}: address "${a.label}" is not verified on a full profile`);
    const d = derivedBySlug?.get(slug);
    if (project.review?.approver === "pending" && d && d.uncappedConfidence >= 70)
      errors.push(`projects/${slug}: approver pending but uncapped confidence ${d.uncappedConfidence} ≥ 70 — needs second-person approval`);
  }
  return errors;
}
```

Note: `releaseCheck` reads `d.uncappedConfidence`. Add it to `derive()` in `scripts/lib/score.mjs` now: inside `derive`, compute `const uncappedConf = confidence(s.confidence, null);` and include `uncappedConfidence: round(uncappedConf)` in `out` (and `uncappedConfidence: null` in `base`). Re-run `npm test` — still passes (the test does not assert on it).

- [ ] **Step 10: Write `scripts/validate.mjs` (markdown checks are added in Task 4)**

```js
import { loadContent } from "./lib/load.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { crossCheck } from "./lib/checks.mjs";

const args = process.argv.slice(2);
const release = args.includes("--release");
const root = args.find((a) => !a.startsWith("--")) ?? "content";

const errors = [], warnings = [];
const content = await loadContent(root);

const fail = (file, msgs) => msgs.forEach((m) => errors.push(`${file}: ${m}`));
fail("site.yaml", validateAgainst("site", content.site));
fail("census.yaml", validateAgainst("census", content.census));
fail("changelog.yaml", validateAgainst("changelog", content.changelog));
for (const [slug, p] of content.projects) fail(`projects/${slug}.yaml`, validateAgainst("project", p));
for (const [slug, s] of content.sources) fail(`sources/${slug}.yaml`, validateAgainst("sources", s));
for (const [id, d] of content.dependencies) fail(`dependencies/${id}.yaml`, validateAgainst("dependency", d));

const x = crossCheck(content);
errors.push(...x.errors); warnings.push(...x.warnings);

if (content.site.corrections?.destination === "TODO") warnings.push("site.yaml: corrections.destination is TODO (blocks --release)");

// RESEARCH-MD-HOOK (Task 4 inserts markdown checks here)

// RELEASE-HOOK (Task 8 inserts releaseCheck here)

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
console.log(`${content.projects.size} projects, ${errors.length} error(s), ${warnings.length} warning(s)${release ? " [release]" : ""}`);
process.exit(errors.length ? 1 : 0);
```

- [ ] **Step 11: Append schema + cross-ref tests to `scripts/test.mjs`**

Append before the final `if (failures)` block:

```js
import { validateAgainst } from "./lib/schemas.mjs";
import { crossCheck } from "./lib/checks.mjs";
```
(place these two imports at the top of the file with the others)

```js
// Fixtures satisfy the schemas.
for (const name of Object.keys(expected)) {
  const p = parse(await readFile(new URL(`../fixtures/${name}/project.yaml`, import.meta.url), "utf8"));
  const s = parse(await readFile(new URL(`../fixtures/${name}/sources.yaml`, import.meta.url), "utf8"));
  const pe = validateAgainst("project", p), se = validateAgainst("sources", s);
  if (pe.length || se.length) { failures++; console.error(`FAIL schema ${name}: ${[...pe, ...se].join("; ")}`); } else console.log(`ok   schema ${name}`);
}

// A stub with a scoring block is rejected; a stub without missing-evidence is rejected.
{
  const p = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  p.coverage = "stub";
  const withScoring = validateAgainst("project", p);
  delete p.scoring;
  const noMissing = validateAgainst("project", p);
  p.findings.missing = [{ text: "Audit not located" }];
  const okStub = validateAgainst("project", p);
  try { assert.ok(withScoring.length > 0); assert.ok(noMissing.length > 0); assert.equal(okStub.length, 0); console.log("ok   stub schema rules"); }
  catch (err) { failures++; console.error(`FAIL stub schema rules: ${err.message}`); }
}

// Cross-reference: dangling source id and missing research file are caught.
{
  const p = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  const s = parse(await readFile(new URL("../fixtures/clean/sources.yaml", import.meta.url), "utf8"));
  p.findings.positive[0].sources = ["S9"];
  const content = {
    site: {}, census: [{ slug: "clean", coverage: "full", lifecycle: "mainnet" }],
    projects: new Map([["clean", p]]), sources: new Map([["clean", s]]), research: new Map(), dependencies: new Map(), changelog: [], files: new Map(),
  };
  const { errors } = crossCheck(content);
  try {
    assert.ok(errors.some((e) => e.includes("S9")), "dangling id");
    assert.ok(errors.some((e) => e.includes("research/clean")), "missing research file");
    console.log("ok   crossCheck");
  } catch (err) { failures++; console.error(`FAIL crossCheck: ${err.message}`); }
}
```

- [ ] **Step 12: Run**

Run: `npm test`
Expected: the six scoring lines from Task 2 plus `ok   schema clean`, `ok   schema high-override`, `ok   schema approver-pending`, `ok   stub schema rules`, `ok   crossCheck`, then `all scoring tests passed`.

Run: `node scripts/validate.mjs fixtures/does-not-exist`
Expected: crashes with ENOENT on `site.yaml` — acceptable; `content/` arrives in Task 6.

---
### Task 4: Research markdown parser and checks

**Files:**
- Create: `scripts/lib/research-md.mjs`
- Modify: `scripts/validate.mjs` (replace the `RESEARCH-MD-HOOK` comment)
- Modify: `scripts/test.mjs` (append markdown tests)

**Interfaces:**
- Produces:
  - `parseResearch(text) → { frontMatter: object|null, sections: Array<{ heading: string, body: string }>, tags: Array<{ cls: string, ids: string[], line: number }>, errors: string[] }`
  - `checkResearch(text, { slug, coverage, ledgerIds: Set<string> }) → string[]` (error messages; empty = ok)
  - `REQUIRED_HEADINGS` (array of 11 strings)
- Consumes: `content.research` and `content.sources` from Task 3's loader.

- [ ] **Step 1: Write failing tests (append to `scripts/test.mjs`, before the final `if (failures)` block; add the import at the top)**

```js
import { checkResearch, REQUIRED_HEADINGS } from "./lib/research-md.mjs";
```

```js
// Research markdown: a valid stub-depth file passes.
const goodStub = `---
slug: clean
coverage: stub
methodology_version: proofline-v1.0
---
${REQUIRED_HEADINGS.map((h) => `## ${h}\n\n_Research pending._\n`).join("\n")}`;
{
  const errs = checkResearch(goodStub, { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  try { assert.deepEqual(errs, []); console.log("ok   research stub"); }
  catch { failures++; console.error(`FAIL research stub: ${errs.join("; ")}`); }
}

// Tagged statements pass; untagged material statements, unknown ids, and bad tag grammar fail.
{
  const withTags = goodStub.replace("## Control\n\n_Research pending._", "## Control\n\nThe admin address can upgrade contracts without an enforced timelock. [inference S1]\n\n<!-- researcher prompt: list every privileged role -->");
  const ok = checkResearch(withTags, { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const untagged = checkResearch(goodStub.replace("## Control\n\n_Research pending._", "## Control\n\nThe admin can upgrade."), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const badId = checkResearch(withTags.replace("[inference S1]", "[inference S4]"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const badGrammar = checkResearch(withTags.replace("[inference S1]", "[maybe S1]"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const missingHeading = checkResearch(goodStub.replace("## Team\n", "## Teem\n"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const wrongSlug = checkResearch(goodStub.replace("slug: clean", "slug: other"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  try {
    assert.deepEqual(ok, [], "tagged + comment should pass");
    assert.ok(untagged.some((e) => e.includes("untagged")), "untagged");
    assert.ok(badId.some((e) => e.includes("S4")), "unknown id");
    assert.ok(badGrammar.some((e) => e.includes("untagged")), "bad grammar reads as untagged");
    assert.ok(missingHeading.some((e) => e.includes("Team")), "missing heading");
    assert.ok(wrongSlug.some((e) => e.includes("slug")), "front matter slug");
    console.log("ok   research checks");
  } catch (err) { failures++; console.error(`FAIL research checks: ${err.message}`); }
}
```

- [ ] **Step 2: Run to verify it fails**

Run: `npm test`
Expected: `Cannot find module '.../scripts/lib/research-md.mjs'`.

- [ ] **Step 3: Implement `scripts/lib/research-md.mjs`**

```js
import { parse as parseYaml } from "yaml";

export const REQUIRED_HEADINGS = [
  "Identity", "Deployment", "Control", "Security", "Engineering", "Team",
  "Product and economics", "Communications", "Findings", "Sources", "Review metadata",
];
export const PENDING_LINE = "_Research pending._";
const TAG_RE = /\[(verified|claim|inference|disputed|unknown)((?:\s+S[1-9][0-9]*)*)\]\s*$/;
// Sections whose paragraphs must be tagged (1-based indices into REQUIRED_HEADINGS: Deployment … Findings).
const MATERIAL_SECTIONS = new Set(REQUIRED_HEADINGS.slice(1, 9));

export function parseResearch(text) {
  const errors = [];
  let frontMatter = null, body = text;
  const fm = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (fm) { try { frontMatter = parseYaml(fm[1]); } catch (e) { errors.push(`front matter: ${e.message}`); } body = text.slice(fm[0].length); }
  else errors.push("front matter missing");

  const stripped = body.replace(/<!--[\s\S]*?-->/g, "");
  const sections = [];
  let current = null;
  const fmLines = fm ? fm[0].split("\n").length - 1 : 0;
  stripped.split("\n").forEach((line, i) => {
    const h = line.match(/^## (.+?)\s*$/);
    if (h) { current = { heading: h[1], body: "", startLine: fmLines + i + 1 }; sections.push(current); }
    else if (current) current.body += line + "\n";
  });

  const tags = [];
  for (const s of sections) {
    s.body.split("\n").forEach((line, i) => {
      const m = line.match(TAG_RE);
      if (m) tags.push({ cls: m[1], ids: m[2].trim().split(/\s+/).filter(Boolean), line: s.startLine + i + 1 });
    });
  }
  return { frontMatter, sections, tags, errors };
}

/** Split a section body into paragraphs (blank-line separated), ignoring headings-of-lower-level and list markers only in that they are still text. */
function paragraphs(body) {
  return body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
}

export function checkResearch(text, { slug, coverage, ledgerIds }) {
  const { frontMatter, sections, errors } = parseResearch(text);
  const out = [...errors];

  if (frontMatter) {
    if (frontMatter.slug !== slug) out.push(`front matter slug "${frontMatter.slug}" ≠ "${slug}"`);
    if (frontMatter.coverage !== coverage) out.push(`front matter coverage "${frontMatter.coverage}" ≠ project coverage "${coverage}"`);
    if (frontMatter.methodology_version !== "proofline-v1.0") out.push(`front matter methodology_version must be proofline-v1.0`);
  }

  const headings = sections.map((s) => s.heading);
  REQUIRED_HEADINGS.forEach((h, i) => { if (headings[i] !== h) out.push(`heading ${i + 1} should be "## ${h}" (found "${headings[i] ?? "nothing"}")`); });
  if (headings.length > REQUIRED_HEADINGS.length) out.push(`unexpected extra headings: ${headings.slice(REQUIRED_HEADINGS.length).join(", ")}`);

  for (const s of sections) {
    if (!MATERIAL_SECTIONS.has(s.heading)) continue;
    for (const p of paragraphs(s.body)) {
      if (p === PENDING_LINE) continue;
      if (/^#{3,}\s/.test(p)) continue;                      // sub-headings are not statements
      const lines = p.split("\n");
      const last = lines[lines.length - 1];
      const m = last.match(TAG_RE);
      if (!m) { out.push(`${s.heading}: untagged statement — "${lines[0].slice(0, 60)}"`); continue; }
      if (m[1] === "unknown" && m[2].trim()) out.push(`${s.heading}: [unknown] must not carry source ids`);
      if (m[1] !== "unknown") {
        const ids = m[2].trim().split(/\s+/).filter(Boolean);
        if (!ids.length) out.push(`${s.heading}: [${m[1]}] needs at least one source id`);
        for (const id of ids) if (!ledgerIds.has(id)) out.push(`${s.heading}: ${id} is not in sources/${slug}.yaml`);
      }
    }
  }
  return out;
}
```

- [ ] **Step 4: Run tests**

Run: `npm test`
Expected: previous lines plus `ok   research stub`, `ok   research checks`.

- [ ] **Step 5: Wire into `scripts/validate.mjs`**

Replace the line `// RESEARCH-MD-HOOK (Task 4 inserts markdown checks here)` with:

```js
for (const [slug, text] of content.research) {
  const project = content.projects.get(slug);
  const ledgerIds = new Set((content.sources.get(slug)?.sources ?? []).map((s) => s.id));
  if (!project) continue; // crossCheck already reported it
  fail(`research/${slug}.md`, checkResearch(text, { slug, coverage: project.coverage, ledgerIds }));
}
```

and add `import { checkResearch } from "./lib/research-md.mjs";` at the top.

- [ ] **Step 6: Run**

Run: `node --check scripts/validate.mjs` → no output (syntax ok). `npm test` still passes.

---
### Task 5: Site, methodology, census, changelog content

**Files:**
- Create: `content/site.yaml`, `content/methodology.md`, `content/census.yaml`, `content/changelog.yaml`
- Create: `content/projects/.gitkeep`, `content/sources/.gitkeep`, `content/research/.gitkeep`, `content/dependencies/.gitkeep`

**Interfaces:**
- Produces: `census.yaml` with exactly these 14 slugs, consumed by Task 6's generator: `pons mancer artificial-inu longshot long stonkbroker index arrow bankr meridian statics-protocol safehood robinhood-index-vaults vimen`.
- Researcher id used everywhere: `harsharn10` (GitHub handle from the prototype's HUMAN-HOMEWORK; owner may rename).

- [ ] **Step 1: `content/site.yaml`**

```yaml
name: Proofline
tagline: Research the launch. Ignore the hype.
methodology_version: proofline-v1.0
maintainer:
  id: harsharn10
  display: Harsharn Singh
corrections:
  destination: TODO                # real email or form URL before public launch (PRD §8, §13)
  acknowledge_within_days: 3
telegram:
  enabled: false
  weekly_heartbeat: false
chain:
  name: Robinhood Chain
  id: 4663
  stack: Arbitrum Orbit L2
  gas: ETH
  mainnet_date: 2026-07-01
  explorer: https://robinhoodchain.blockscout.com
  docs: https://docs.robinhood.com/chain
  checked: 2026-08-30              # values from PRD §2; reproduce against docs.robinhood.com and set a fresh date
disclaimer: >-
  Proofline publishes research, not advice. Profiles are not audits, safety ratings, or
  recommendations to buy, sell, or use a protocol. Evidence scores measure documented posture
  at a point in time. They are not probabilities of success or loss. Contracts, teams, and
  markets change. Read the sources. Do your own verification onchain.
```

- [ ] **Step 2: `content/methodology.md` — lifted from the PRD, not rewritten**

Run:

```bash
{
  printf '# Methodology\n\nVersion `proofline-v1.0`. This page is generated from PRD.md §6–§7; edit the PRD, then re-run this extraction.\n\n'
  awk '/^## 6\. Rating system/{p=1} /^## 8\. Corrections/{p=0} p' PRD.md
  printf '\n## Disclaimer\n\n'
  awk '/^## Appendix B/{p=1; next} p' PRD.md
} > content/methodology.md
```

Verify: `grep -c '^### 6\.' content/methodology.md` → 4; `grep -c 'Do your own verification onchain' content/methodology.md` → 1.

- [ ] **Step 3: `content/census.yaml`**

```yaml
# Seed universe — PRD §2.1 (10) + product-owner restore of 4 native plays (2026-08-30).
# Every `qualifying.*.verified: false` means the value is asserted by the PRD seed table and
# has not been reproduced on Blockscout or the project's own contracts yet.

- slug: pons
  name: Pons
  category: Launchpad
  lifecycle: mainnet
  coverage: stub          # flips to full when the research record lands (PRD §13, §14 step 4)
  official_links:
    - { kind: site, url: https://ponsfamily.com }
  discovery_source: PRD seed table 2026-08-30; Messari profile pons-launchpad; Bitquery Pons API docs
  qualifying:
    deployed_on_chain: { value: true, note: "PRD: dominant native launchpad on Robinhood Chain", verified: false }
    native_play:       { value: true, note: "Launchpad with V2 curve graduating to Uniswap v4", verified: false }
    citable:           { value: true, note: "Official site listed in PRD Appendix A", verified: false }
    research_story:    { value: true, note: "User funds sit in the curve pre-graduation; quote assets ETH, USDG, Stock Tokens", verified: false }

- slug: mancer
  name: Mancer
  category: Aggregator
  lifecycle: mainnet
  coverage: stub
  official_links:
    - { kind: site, url: https://mancer.xyz }
    - { kind: docs, url: https://mancer.xyz/docs }
    - { kind: whitepaper, url: https://mancer.xyz/whitepaper.pdf }
    - { kind: x, url: https://x.com/MancerXYZ }
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "PRD: native DEX aggregator with resting orders", verified: false }
    native_play:       { value: true, note: "Aggregator + order layer; Chain Mancers NFT + $MANCER; Shield announced", verified: false }
    citable:           { value: true, note: "Site, docs, whitepaper, X account", verified: false }
    research_story:    { value: true, note: "Non-custodial order claims and NFT fee claim need verification", verified: false }

- slug: artificial-inu
  name: Artificial Inu
  category: Stock-paired token
  lifecycle: mainnet
  coverage: stub
  official_links:
    - { kind: site, url: https://artificialinu.com }
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "Token contract address given in PRD Appendix A", verified: false }
    native_play:       { value: true, note: "Flagship LONG launch; $AI paired to tokenized NVDA; community vault", verified: false }
    citable:           { value: true, note: "Official site and contract address", verified: false }
    research_story:    { value: true, note: "Vault, fee routing and pair design against a Stock Token", verified: false }

- slug: longshot
  name: Longshot
  category: Fee-routing protocol
  lifecycle: mainnet
  coverage: stub
  official_links:
    - { kind: site, url: https://www.uselongshot.xyz }
    - { kind: x, url: https://x.com/uselongshot }
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "RH Chain token address given in PRD Appendix A", verified: false }
    native_play:       { value: true, note: "Launch / fee-routing protocol with a fixed Hyperliquid perp leg", verified: false }
    citable:           { value: true, note: "Site and X account", verified: false }
    research_story:    { value: true, note: "Fee split into a Hyperliquid perp, holder rewards and protocol — cross-venue custody path", verified: false }

- slug: long
  name: LONG
  category: Launchpad
  lifecycle: mainnet
  coverage: stub
  official_links:
    - { kind: app, url: https://app.long.xyz }
    - { kind: x, url: https://x.com/longdotxyz }
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "Factory contracts referenced (truncated) in PRD Appendix A", verified: false }
    native_play:       { value: true, note: "Stock-paired launchpad; Factory + Airlock; $AI launched here", verified: false }
    citable:           { value: true, note: "App and X account", verified: false }
    research_story:    { value: true, note: "Venue that made stock-paired tokens possible; launch mechanics and airlock controls", verified: false }

- slug: stonkbroker
  name: StonkBroker
  category: NFT / treasury
  lifecycle: mainnet
  coverage: stub
  official_links: []
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "PRD: native ERC-6551 NFT on Robinhood Chain", verified: false }
    native_play:       { value: true, note: "ERC-6551 NFT that can hold Stock Tokens", verified: false }
    citable:           { value: true, note: "PRD lists no official link yet — locate before research", verified: false }
    research_story:    { value: true, note: "Token-bound accounts holding Stock Tokens — custody and control questions", verified: false }

- slug: index
  name: Index
  category: RWA distributor
  lifecycle: mainnet
  coverage: stub
  official_links: []
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "PRD: native RWA distributor", verified: false }
    native_play:       { value: true, note: "Pool tax buys a basket of Stock Tokens for holders", verified: false }
    citable:           { value: true, note: "PRD lists no official link yet — locate before research", verified: false }
    research_story:    { value: true, note: "Tax-funded basket accumulation — who controls the basket and the tax", verified: false }

- slug: arrow
  name: Arrow Finance
  category: CDP
  lifecycle: mainnet
  coverage: stub
  official_links:
    - { kind: docs, url: https://app.arrowfinance.io/docs }
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "PRD: launchpad live; CDP audit in flight", verified: false }
    native_play:       { value: true, note: "Native CDP / DeFi gateway plus launchpad", verified: false }
    citable:           { value: true, note: "Docs site", verified: false }
    research_story:    { value: true, note: "CDP collateral and liquidation path; launchpad controls; audit status", verified: false }

- slug: bankr
  name: Bankr
  category: Agent / execution
  lifecycle: mainnet
  coverage: stub
  official_links: []
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "PRD: agent trading surface expanded onto RH Chain", verified: false }
    native_play:       { value: true, note: "Agent / execution surface", verified: false }
    citable:           { value: true, note: "PRD lists no official link yet — locate before research", verified: false }
    research_story:    { value: true, note: "Agent-driven execution: key custody, permissions, routing", verified: false }

- slug: meridian
  name: Meridian
  category: Prediction market
  lifecycle: announced
  coverage: stub
  official_links: []
  discovery_source: PRD seed table 2026-08-30
  qualifying:
    deployed_on_chain: { value: true, note: "PRD: native prediction-market launch partner — deployment not yet confirmed", verified: false }
    native_play:       { value: true, note: "Prediction / RWA market", verified: false }
    citable:           { value: true, note: "PRD lists no official link yet — locate before research", verified: false }
    research_story:    { value: true, note: "Resolution/oracle design and collateral custody", verified: false }

- slug: statics-protocol
  name: Statics Protocol
  category: RWA baskets
  lifecycle: mainnet
  coverage: stub
  official_links:
    - { kind: docs, url: https://docs.staticsprotocol.com/docs/rollout/ }
    - { kind: docs, url: https://docs.staticsprotocol.com/docs/governance/timelock-and-roles/ }
    - { kind: docs, url: https://docs.staticsprotocol.com/docs/reference/robinhood-testnet-deployment/ }
  discovery_source: Prototype seed profile 2026-08-30; restored by product owner
  qualifying:
    deployed_on_chain: { value: true, note: "Docs report Genesis system live on Robinhood mainnet 2026-08-27", verified: false }
    native_play:       { value: true, note: "Redeemable multi-asset baskets, connected pools, self-backed credit", verified: false }
    citable:           { value: true, note: "Rollout, governance and deployment docs", verified: false }
    research_story:    { value: true, note: "Upgrade authority, seven-day timelock target, audit status", verified: false }

- slug: safehood
  name: Safehood
  category: Launchpad
  lifecycle: mainnet
  coverage: stub
  official_links:
    - { kind: github, url: https://github.com/opengrid1/Launchpad }
  discovery_source: Prototype seed profile 2026-08-30; restored by product owner
  qualifying:
    deployed_on_chain: { value: true, note: "Repository publishes mainnet contract addresses", verified: false }
    native_play:       { value: true, note: "Launchpad creating Uniswap v3 pools and opening trading on mainnet", verified: false }
    citable:           { value: true, note: "Source repository", verified: false }
    research_story:    { value: true, note: "Project states all protocol admin roles sit in one platform admin wallet", verified: false }

- slug: robinhood-index-vaults
  name: Robinhood Index Vaults
  category: Index vault
  lifecycle: testnet-only
  coverage: stub
  official_links:
    - { kind: github, url: https://github.com/nsvoud-dev/robinhood-index-vaults }
  discovery_source: Prototype seed profile 2026-08-30; restored by product owner
  qualifying:
    deployed_on_chain: { value: true, note: "Testnet deployment only; qualifies under 'officially launching' pending mainnet", verified: false }
    native_play:       { value: true, note: "ERC-4626 index vault for Stock Token baskets", verified: false }
    citable:           { value: true, note: "Source repository", verified: false }
    research_story:    { value: true, note: "Mock swap router; audit and mainnet are roadmap items", verified: false }

- slug: vimen
  name: Vimen
  category: RWA baskets
  lifecycle: mainnet
  coverage: stub
  official_links:
    - { kind: github, url: https://github.com/vimenprotocol/vimen }
  discovery_source: Prototype seed profile 2026-08-30; restored by product owner
  qualifying:
    deployed_on_chain: { value: true, note: "Prototype profile recorded early mainnet 2026-08-20", verified: false }
    native_play:       { value: true, note: "Immutable in-kind index baskets for Stock Tokens with deposit caps", verified: false }
    citable:           { value: true, note: "Source repository", verified: false }
    research_story:    { value: true, note: "Immutability / no-admin-key claims need bytecode reproduction", verified: false }
```

- [ ] **Step 4: `content/changelog.yaml`** — one entry per slug, generated:

```bash
node -e '
import("yaml").then(({ parse, stringify }) => {
  const fs = require("node:fs");
  const census = parse(fs.readFileSync("content/census.yaml", "utf8"));
  const entries = census.map((c) => ({
    date: "2026-08-30", slug: c.slug, type: "coverage", severity: "Info",
    title: "Initial stub opened",
    detail: `Identity, official links and lifecycle recorded from the seed census. No evidence score until research lands.`,
    prior: null, new: { coverage: "stub", lifecycle: c.lifecycle },
    reviewer: "harsharn10", methodology_version: "proofline-v1.0",
  }));
  fs.writeFileSync("content/changelog.yaml", "# One entry per published change. Newest last.\n" + stringify(entries));
});'
```

- [ ] **Step 5: Verify the four files parse and pass their schemas**

Run:
```bash
node -e '
import("./scripts/lib/schemas.mjs").then(async ({ validateAgainst }) => {
  const { parse } = await import("yaml"); const fs = await import("node:fs");
  for (const [n, f] of [["site","content/site.yaml"],["census","content/census.yaml"],["changelog","content/changelog.yaml"]]) {
    const errs = validateAgainst(n, parse(fs.readFileSync(f, "utf8")));
    console.log(n, errs.length ? errs : "ok");
  }
});'
```
Expected: `site ok`, `census ok`, `changelog ok`. (`npm run validate` still fails here because `projects/` etc. are empty — Task 6 fills them.)

---
### Task 6: Stub generator, 14 project records, 5 dependency cards, Pons full-record skeleton

**Files:**
- Create: `scripts/seed-data.mjs` (per-slug facts the census does not hold), `scripts/seed-stubs.mjs` (generator; never overwrites)
- Create (generated): `content/projects/<slug>.yaml`, `content/sources/<slug>.yaml`, `content/research/<slug>.md` × 14
- Create: `content/dependencies/{stock-tokens,usdg,uniswap,hyperliquid,chainlink}.yaml`
- Modify: `content/research/pons.md` (replace generated stub with the full skeleton), `content/projects/pons.yaml` (append commented scoring block)

**Interfaces:**
- Consumes: `content/census.yaml` (Task 5), `validateAgainst` (Task 3), `REQUIRED_HEADINGS`/`PENDING_LINE` (Task 4).
- Produces: a `content/` tree on which `npm run validate` exits 0.
- **Deviation from spec §5.7:** dependency id is `uniswap` (not `uniswap-v4`) — Safehood creates v3 pools and Pons graduates to v4; one card covers the Robinhood Chain Uniswap deployment.

- [ ] **Step 1: `scripts/seed-data.mjs`**

```js
// Facts per slug that are not in census.yaml. Addresses come from PRD Appendix A and the
// prototype's profiles; every one is verified:false until reproduced on Blockscout.
export const RESEARCHER = "harsharn10";
export const LINK_KIND_TO_SOURCE_KIND = { site: "official-site", app: "official-site", docs: "docs", whitepaper: "whitepaper", x: "social", github: "repository", telegram: "social", discord: "social", other: "other" };

export const SEED = {
  pons: { symbol: null, dependencies: ["uniswap", "usdg", "stock-tokens"],
    summary: "Native launchpad on Robinhood Chain: tokens launch on a V2 bonding curve and graduate to Uniswap v4; quote assets include ETH, USDG and Stock Tokens.",
    addresses: [ { label: "V2 curve / factory", address: "not-verified", role: "factory" } ],
    missing: ["Deployment map (curve, factory, graduation router) not yet reproduced on Blockscout", "Privileged roles over the curve and graduation path unknown", "Audit status unknown", "Team identity and repository not yet located"] },
  mancer: { symbol: "MANCER", dependencies: ["uniswap"],
    summary: "Native DEX aggregator with resting orders; Chain Mancers NFT and $MANCER token; a Shield product is announced.",
    addresses: [ { label: "Aggregator router", address: "not-verified", role: "router" }, { label: "$MANCER token", address: "not-verified", role: "token" } ],
    missing: ["Router and token addresses not yet located", "Non-custodial order claim not verified against contracts", "NFT fee-claim mechanics unverified", "Shield: announced only — no deployment evidence reviewed"] },
  "artificial-inu": { symbol: "AI", dependencies: ["stock-tokens", "uniswap"],
    summary: "Flagship LONG launch: $AI paired to tokenized NVDA on Uniswap, with a community vault.",
    addresses: [ { label: "$AI token", address: "0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18", role: "token" } ],
    missing: ["Token address from PRD Appendix A not yet reproduced on Blockscout", "Community vault contract and its controller unknown", "Fee routing and pair mechanics unverified", "NVDA Stock Token dependency card incomplete"] },
  longshot: { symbol: null, dependencies: ["hyperliquid"],
    summary: "Launch and fee-routing protocol on Robinhood Chain; fees split into a fixed Hyperliquid perp position, holder rewards and the protocol.",
    addresses: [ { label: "RH Chain token", address: "0x8701E2C87ade58325601f4F9bf37ADF46Cb75745", role: "token" } ],
    missing: ["Token address from PRD Appendix A not yet reproduced on Blockscout", "Who controls the Hyperliquid position and how funds cross venues", "Fee-split contract and admin powers unknown", "Audit status unknown"] },
  long: { symbol: null, dependencies: ["stock-tokens"],
    summary: "Stock-paired launchpad (Factory + Airlock) that made stock-paired tokens possible on Robinhood Chain; $AI launched here.",
    addresses: [ { label: "Factory (PRD lists 0x9c88…0845, truncated)", address: "not-verified", role: "factory" }, { label: "Factory (PRD lists 0x22e9…eeED, truncated)", address: "not-verified", role: "factory" } ],
    missing: ["Full factory addresses (PRD Appendix A is truncated)", "Airlock controls and who can release", "Launch fee flows", "Audit status unknown"] },
  stonkbroker: { symbol: null, dependencies: ["stock-tokens"],
    summary: "ERC-6551 token-bound NFT on Robinhood Chain that can hold Stock Tokens; a native cultural and product layer.",
    addresses: [ { label: "NFT collection", address: "not-verified", role: "token" } ],
    missing: ["Official site or account not yet located", "Collection and registry addresses unknown", "Who can move assets out of a token-bound account", "Lifecycle stage not independently verified"] },
  index: { symbol: null, dependencies: ["stock-tokens"],
    summary: "RWA distributor: a pool tax buys a basket of Stock Tokens for holders.",
    addresses: [ { label: "Token", address: "not-verified", role: "token" } ],
    missing: ["Official site or account not yet located", "Token and basket-holding contract addresses unknown", "Who sets the tax and controls the basket", "Lifecycle stage not independently verified"] },
  arrow: { symbol: null, dependencies: [],
    summary: "Native CDP and DeFi gateway on Robinhood Chain; launchpad live, CDP audit in flight per the seed table.",
    addresses: [ { label: "Launchpad", address: "not-verified", role: "factory" }, { label: "CDP core", address: "not-verified", role: "vault" } ],
    missing: ["Contract addresses not yet located", "CDP collateral types, oracle and liquidation path", "Audit report and covered commit", "Admin powers over the launchpad"] },
  bankr: { symbol: null, dependencies: [],
    summary: "Agent trading surface expanded onto Robinhood Chain.",
    addresses: [],
    missing: ["Official site or account not yet located", "Whether any on-chain contracts are Bankr-specific or it routes through others", "Key custody model for agent execution", "Lifecycle stage not independently verified"] },
  meridian: { symbol: null, dependencies: [],
    summary: "Native prediction-market launch partner on Robinhood Chain.",
    addresses: [],
    missing: ["Official site or account not yet located", "No deployment evidence reviewed — lifecycle recorded as announced", "Resolution and oracle design", "Collateral custody"] },
  "statics-protocol": { symbol: "STATICS", dependencies: [],
    summary: "Native protocol for redeemable multi-asset baskets, connected pools and self-backed credit; Genesis system reported live on Robinhood mainnet 2026-08-27.",
    addresses: [ { label: "Genesis system", address: "not-verified", role: "other" } ],
    missing: ["Mainnet addresses (docs reference a testnet deployment page)", "Deployed governance and timelock configuration vs the documented seven-day target", "Independent audit evidence", "Upgrade authority"] },
  safehood: { symbol: null, dependencies: ["uniswap"],
    summary: "Robinhood Chain launchpad that creates Uniswap v3 pools and opens trading directly on mainnet.",
    addresses: [ { label: "Launchpad", address: "not-verified", role: "factory" } ],
    missing: ["Mainnet addresses from the repository not yet reproduced on Blockscout", "Single platform admin wallet claim — confirm scope of powers", "Independent audit evidence", "Whether the deployer retains token-level privileges"] },
  "robinhood-index-vaults": { symbol: "rIDX", dependencies: ["stock-tokens"],
    summary: "Experimental ERC-4626 index vault for baskets of Robinhood Stock Tokens; testnet only, mock swap router.",
    addresses: [ { label: "Vault (testnet)", address: "not-verified", role: "vault" } ],
    missing: ["Testnet addresses", "Confirm no production deposit path exists", "Audit — roadmap item, none reviewed", "Mainnet plan and controls"] },
  vimen: { symbol: null, dependencies: ["stock-tokens"],
    summary: "Immutable in-kind index baskets for Robinhood Stock Tokens with per-basket deposit caps and no claimed admin keys over funds.",
    addresses: [ { label: "Basket custody", address: "not-verified", role: "vault" } ],
    missing: ["Deployed addresses and bytecode vs repository", "Immutability / no-admin-key claim not reproduced", "Basket caps and redemption path", "Independent audit evidence"] },
};
```

- [ ] **Step 2: `scripts/seed-stubs.mjs`**

```js
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { SEED, RESEARCHER, LINK_KIND_TO_SOURCE_KIND } from "./seed-data.mjs";
import { REQUIRED_HEADINGS, PENDING_LINE } from "./lib/research-md.mjs";
import { validateAgainst } from "./lib/schemas.mjs";

const AT = "2026-08-30T00:00:00Z", DATE = "2026-08-30";
const exists = (p) => access(p).then(() => true, () => false);
const census = parse(await readFile("content/census.yaml", "utf8"));
for (const d of ["content/projects", "content/sources", "content/research"]) await mkdir(d, { recursive: true });

let written = 0, skipped = 0;
for (const c of census) {
  const seed = SEED[c.slug];
  if (!seed) { console.error(`no seed data for ${c.slug} — add it to scripts/seed-data.mjs`); process.exit(1); }

  const sources = c.official_links.map((l, i) => ({
    id: `S${i + 1}`, url: l.url, publisher: c.name, kind: LINK_KIND_TO_SOURCE_KIND[l.kind],
    accessed_at: AT, claim: `Official ${l.kind} link for ${c.name}`,
    excerpt: "Link recorded from the seed census; page not yet reviewed line by line.",
    hash: null, archive_url: null, researcher: RESEARCHER, available: true,
  }));

  const project = {
    slug: c.slug, name: c.name, symbol: seed.symbol, category: c.category, lifecycle: c.lifecycle,
    coverage: "stub", summary: seed.summary, official_links: c.official_links,
    dependencies: seed.dependencies,
    addresses: seed.addresses.map((a) => ({ ...a, verified: false, sources: [] })),
    review: { researcher: RESEARCHER, approver: "pending", methodology_version: "proofline-v1.0", reviewed_at: DATE, published_at: null },
    findings: {
      positive: sources.map((s) => ({ text: `${c.name} publishes an official ${s.kind === "official-site" ? "site" : s.kind} at ${s.url}.`, class: "claim", sources: [s.id] })),
      risk: [],
      missing: seed.missing.map((text) => ({ text })),
      unresolved: [],
    },
  };

  const research = `---\nslug: ${c.slug}\ncoverage: stub\nmethodology_version: proofline-v1.0\n---\n\n# ${c.name} — research record\n\n` +
    REQUIRED_HEADINGS.map((h) => `## ${h}\n\n${PENDING_LINE}\n`).join("\n");

  for (const [path, data, schema] of [
    [`content/projects/${c.slug}.yaml`, project, "project"],
    [`content/sources/${c.slug}.yaml`, { slug: c.slug, sources }, "sources"],
    [`content/research/${c.slug}.md`, research, null],
  ]) {
    if (await exists(path)) { skipped++; continue; }
    if (schema) { const errs = validateAgainst(schema, data); if (errs.length) { console.error(`${path}: ${errs.join("; ")}`); process.exit(1); } }
    await writeFile(path, typeof data === "string" ? data : stringify(data, { lineWidth: 0 }));
    written++;
  }
}
console.log(`seed: ${written} file(s) written, ${skipped} existing file(s) left alone`);
```

- [ ] **Step 3: Generate and inspect**

Run: `npm run seed`
Expected: `seed: 42 file(s) written, 0 existing file(s) left alone`. Then `ls content/projects | wc -l` → 14. Run again: `seed: 0 file(s) written, 42 existing file(s) left alone`.

- [ ] **Step 4: Dependency cards** — write these five files. Each `controls`/`failure_modes` entry is `class: unknown` with empty sources until researched; that is the honest skeleton.

`content/dependencies/stock-tokens.yaml`:
```yaml
id: stock-tokens
name: Robinhood Stock Tokens
kind: issuer-asset
summary: Robinhood-issued tokenized stocks on Robinhood Chain (NVDA, AAPL, SPY, …). Appear as pair legs, vault assets and basket constituents in native plays.
controls:
  - { power: Mint / burn, holder: Issuer (Robinhood), note: Issuer-controlled supply; confirm contract and role, class: unknown, sources: [] }
  - { power: Freeze / transfer restriction, holder: Issuer, note: "Check for allowlist, pause or blacklist functions", class: unknown, sources: [] }
  - { power: Redemption, holder: Issuer, note: Off-chain redemption path and eligibility, class: unknown, sources: [] }
failure_modes:
  - { text: "Issuer freeze or blacklist strands tokens held inside a vault, basket or pool.", class: unknown, sources: [] }
  - { text: Off-hours pricing and oracle behaviour when the underlying market is closed., class: unknown, sources: [] }
  - { text: Redemption suspension breaks in-kind basket exits., class: unknown, sources: [] }
sources: []
```

`content/dependencies/usdg.yaml`:
```yaml
id: usdg
name: USDG (Global Dollar)
kind: stablecoin
summary: Paxos-issued dollar stablecoin used as a quote asset and lending asset on Robinhood Chain.
controls:
  - { power: Mint / burn, holder: Paxos, note: Issuer-controlled, class: unknown, sources: [] }
  - { power: Freeze / blacklist, holder: Paxos, note: Regulated-issuer freeze powers; confirm on the RH Chain deployment, class: unknown, sources: [] }
failure_modes:
  - { text: Address freeze traps quote-side liquidity in a launch curve or pool., class: unknown, sources: [] }
  - { text: Bridge or canonical-deployment mismatch between chains., class: unknown, sources: [] }
sources: []
```

`content/dependencies/uniswap.yaml`:
```yaml
id: uniswap
name: Uniswap on Robinhood Chain (v2 / v3 / v4, UniswapX)
kind: dex
summary: Day-one public DEX on Robinhood Chain. Launchpads graduate into v3 or v4 pools; v4 hooks can add project-specific logic.
controls:
  - { power: Protocol fee switch, holder: Uniswap governance, note: Core contracts; low blast radius for LPs, class: unknown, sources: [] }
  - { power: Hook logic (v4), holder: Per-pool hook deployer, note: A hook can restrict swaps or take fees — assess per project, class: unknown, sources: [] }
failure_modes:
  - { text: "A malicious or buggy v4 hook affects only pools using it, not core Uniswap.", class: unknown, sources: [] }
  - { text: Thin liquidity after graduation makes price discovery and exits unreliable., class: unknown, sources: [] }
sources: []
```

`content/dependencies/hyperliquid.yaml`:
```yaml
id: hyperliquid
name: Hyperliquid
kind: perp-venue
summary: External perpetuals venue. Longshot routes a fixed share of fees into a Hyperliquid perp position.
controls:
  - { power: Position control, holder: Whoever holds the Hyperliquid account keys, note: Custody sits off Robinhood Chain — identify the signer, class: unknown, sources: [] }
  - { power: Bridge / transfer, holder: Protocol operator, note: How funds move between chains and who can redirect them, class: unknown, sources: [] }
failure_modes:
  - { text: Liquidation of the perp position erases the fee-funded leg., class: unknown, sources: [] }
  - { text: Key compromise or operator discretion over the off-chain account., class: unknown, sources: [] }
sources: []
```

`content/dependencies/chainlink.yaml`:
```yaml
id: chainlink
name: Chainlink
kind: oracle
summary: Day-one oracle infrastructure on Robinhood Chain; relevant to CDPs, prediction markets and any Stock Token pricing.
controls:
  - { power: Feed updates, holder: Chainlink node operators, note: Confirm which feeds exist on chain 4663 and their heartbeat, class: unknown, sources: [] }
failure_modes:
  - { text: Stale or missing feed for a Stock Token outside market hours., class: unknown, sources: [] }
  - { text: A protocol using its own oracle instead of Chainlink inherits a different risk — record which it is., class: unknown, sources: [] }
sources: []
```

- [ ] **Step 5: Replace `content/research/pons.md` with the full-record skeleton**

```markdown
---
slug: pons
coverage: stub
methodology_version: proofline-v1.0
---

# Pons — research record

<!-- HOW TO USE THIS FILE
Every material sentence ends with an evidence tag: [verified S3] [claim S7] [inference S3 S4] [disputed S9] [unknown].
Source ids come from content/sources/pons.yaml — add the source there first, then cite it here.
Leave `_Research pending._` in any section you have not researched. Delete the prompts as you fill each section.
When every section is filled and projects/pons.yaml has a complete scoring block, set coverage: full in
this front matter, in projects/pons.yaml and in census.yaml, then run `npm run validate` and `npm run score`.
-->

## Identity

_Research pending._

<!-- Name, one-line description, category, chain (4663), lifecycle, official site/app/docs/X/GitHub.
Confirm each link from two independent paths (PRD research checklist). -->

## Deployment

_Research pending._

<!-- Every material contract: curve/bonding contract, factory, graduation router, fee collector, token templates.
For each: address, deploy date, explorer link, source-verified?, proxy? implementation? Record in projects/pons.yaml addresses[]
with verified:true only after you opened the Blockscout page. -->

## Control

_Research pending._

<!-- Owner/admin/guardian roles on each contract. EOA, multisig (signers, threshold), timelock (delay, what it covers),
emergency pause. What can a single actor do to funds sitting in the curve pre-graduation? This section feeds the
seven security tests in projects/pons.yaml. -->

## Security

_Research pending._

<!-- Audits: auditor, report URL, commit hash, does it match deployed bytecode, unresolved findings. Bounty. Monitoring.
Incident history on Robinhood Chain and any prior chains. -->

## Engineering

_Research pending._

<!-- Repositories, contributors, commit cadence, releases, tests/CI, copied-code evidence (compare against known
launchpad forks), reproducible deployment. -->

## Team

_Research pending._

<!-- Named or anonymous. What is independently verifiable. Prior projects. Conflicts (does the team hold launch
allocations, fee recipients, admin keys?). -->

## Product and economics

_Research pending._

<!-- What is live today. User-fund path: deposit → curve → graduation → Uniswap v4 pool. Quote assets (ETH, USDG,
Stock Tokens) and what each dependency card says. Fees, incentives, concentration of launched tokens. Volume/liquidity
snapshots with as-of time (cited, not a terminal). -->

## Communications

_Research pending._

<!-- Material claims on site/X/docs. Discrepancies between claims and contracts. Deleted or changed claims with
dated before/after evidence. -->

## Findings

_Research pending._

<!-- Strongest evidence for. Strongest evidence against. Missing evidence. Unresolved questions.
Mirror the structured lists in projects/pons.yaml findings{}. -->

## Sources

See `content/sources/pons.yaml`. Every S-id cited above must exist there with accessed_at, claim and excerpt.

## Review metadata

Researcher: harsharn10. Approver: pending. Methodology: proofline-v1.0. Reviewed: 2026-08-30. Published: not yet.
```

Note the Sources and Review metadata sections are outside the tag-checked range (spec §7.3 checks sections 2–9), so plain text is allowed there.

- [ ] **Step 6: Append the commented scoring block to `content/projects/pons.yaml`**

Append to the end of the file:

```yaml
# ---------------------------------------------------------------------------
# SCORING SKELETON — uncomment and fill when the research record is complete, then set coverage: full.
# Levels: security tests full|partial|zero; factors strong|mixed|weak|insufficient; confidence inputs 0–100.
# Every evidence: [] must list S-ids from sources/pons.yaml. Unknown = no credit; it lowers confidence, not the score.
# ---------------------------------------------------------------------------
# scoring:
#   security:
#     deployment_verifiability: { level: partial, evidence: [], note: "" }
#     privileged_power:         { level: zero,    evidence: [], note: "" }
#     authorization_topology:   { level: zero,    evidence: [], note: "" }
#     timelock_exit_window:     { level: zero,    evidence: [], note: "" }
#     audit_deployment_match:   { level: zero,    evidence: [], note: "" }
#     continuous_safeguards:    { level: zero,    evidence: [], note: "" }
#     incident_handling:        { level: full,    evidence: [], note: "" }
#   factors:
#     engineering:  { level: insufficient, positive: [], negative: [], missing: [], evidence: [] }
#     transparency: { level: insufficient, positive: [], negative: [], missing: [], evidence: [] }
#     maturity:     { level: insufficient, positive: [], negative: [], missing: [], evidence: [] }
#     economic:     { level: insufficient, positive: [], negative: [], missing: [], evidence: [] }
#   confidence:
#     primary_source_coverage: 0
#     onchain_verification: 0
#     independent_corroboration: 0
#     freshness: 0
#     review_completeness: 0
#   risk:
#     assessed: Elevated
#     reason: ""
#   # override:            # only if PRD §6.4 applies
#   #   level: High
#   #   reason: ""
#   #   evidence: []
```

- [ ] **Step 7: Validate the whole tree**

Run: `npm run validate`
Expected last line: `14 projects, 0 error(s), N warning(s)` where the warnings are `site.yaml: corrections.destination is TODO (blocks --release)` only. (Every seeded source is cited by a `findings.positive` entry, so no "never cited" warnings.) Exit code 0.

Run: `npm test` → still all `ok`.

---
### Task 7: Score CLI, release gate, README, end-to-end run

**Files:**
- Create: `scripts/score.mjs`
- Modify: `scripts/validate.mjs` (replace the `RELEASE-HOOK` comment)
- Modify: `scripts/test.mjs` (append content-tree assertions)
- Modify: `README.md` (full version)

**Interfaces:**
- Consumes: `loadContent`, `derive`, `releaseCheck`.
- Produces: `build/derived.json` = `{ generated_at, methodology_version, projects: { [slug]: Derived } }` — the only thing the future site reads for numbers.

- [ ] **Step 1: Append content-tree tests to `scripts/test.mjs`** (before the final `if (failures)` block; add `import { loadContent } from "./lib/load.mjs";` at the top)

```js
// Every stub in content/ derives to "pending" with no number; every full profile derives a number or a pending label, never both.
{
  const content = await loadContent("content");
  let bad = 0;
  for (const [slug, p] of content.projects) {
    const d = derive(p);
    if (p.coverage === "stub" && (d.score !== null || d.label !== "Research pending / insufficient evidence")) { bad++; console.error(`  ${slug}: stub derived a score`); }
    if (p.coverage === "full" && ((d.score === null) === (d.label === null))) { bad++; console.error(`  ${slug}: score/label inconsistent`); }
  }
  if (bad) { failures++; console.error("FAIL content derive"); } else console.log(`ok   content derive (${content.projects.size} projects)`);
}
```

- [ ] **Step 2: Run to see the new assertion pass against the seeded tree**

Run: `npm test` → `ok   content derive (14 projects)` appears.

- [ ] **Step 3: `scripts/score.mjs`**

```js
import { mkdir, writeFile } from "node:fs/promises";
import { loadContent } from "./lib/load.mjs";
import { derive } from "./lib/score.mjs";

const root = process.argv.slice(2).find((a) => !a.startsWith("--")) ?? "content";
const content = await loadContent(root);

const projects = {};
const rows = [];
for (const [slug, p] of [...content.projects].sort(([a], [b]) => a.localeCompare(b))) {
  const d = derive(p);
  projects[slug] = d;
  rows.push([slug.padEnd(24), p.coverage.padEnd(5), String(d.score ?? "—").padStart(3), d.provisional ? "*" : " ",
    String(d.confidence ?? "—").padStart(3) + "%", (d.risk ?? "—").padEnd(9), d.override ? `override ${d.override.level}` : "", d.label ?? ""].join("  "));
}

console.log(["slug".padEnd(24), "cov  ", "scr", " ", "conf", "risk     ", "", ""].join("  "));
for (const r of rows) console.log(r);
console.log("\n* = provisional (confidence 50–69)");

await mkdir("build", { recursive: true });
const out = { generated_at: new Date().toISOString(), methodology_version: content.site.methodology_version, projects };
await writeFile("build/derived.json", JSON.stringify(out, null, 2) + "\n");
console.log(`wrote build/derived.json (${Object.keys(projects).length} projects)`);
```

- [ ] **Step 4: Run it**

Run: `npm run score`
Expected: a 14-row table, every row `stub  —  —%  —  Research pending / insufficient evidence`, then `wrote build/derived.json (14 projects)`. `build/` is gitignored.

- [ ] **Step 5: Wire the release gate into `scripts/validate.mjs`**

Replace `// RELEASE-HOOK (Task 8 inserts releaseCheck here)` with:

```js
if (release) {
  const derivedBySlug = new Map([...content.projects].map(([slug, p]) => [slug, derive(p)]));
  errors.push(...releaseCheck(content, derivedBySlug));
}
```

and add at the top: `import { releaseCheck } from "./lib/checks.mjs";` (extend the existing checks import) and `import { derive } from "./lib/score.mjs";`.

- [ ] **Step 6: Confirm both modes**

Run: `npm run validate` → exit 0, `0 error(s)`.
Run: `npm run validate:release` → exit 1 with exactly `error site.yaml: corrections.destination is still TODO`. That is the intended launch blocker (PRD §8).

- [ ] **Step 7: Full README**

```markdown
# Proofline

Evidence-backed research profiles for native Robinhood Chain plays. Research, not advice.
Spec: `PRD.md`. Content-system design: `docs/superpowers/specs/2026-08-30-content-system-design.md`.

## Commands

    npm install
    npm run validate          # schemas + cross-references + research markdown checks
    npm run validate:release  # same, plus launch blockers (corrections contact, verified addresses, approvals)
    npm run score             # derive score / confidence / risk for every project → build/derived.json
    npm run seed              # create stub files for any census entry that has none (never overwrites)
    npm test                  # scoring fixtures + schema rules + markdown checks + content tree

## The one rule

Files store **inputs** — rubric levels, security-test points, confidence inputs, approver state, overrides.
`scripts/lib/score.mjs` derives every number the public sees. Nobody types a score into a file.
If a number on the site is wrong, the fix is in an input or in `score.mjs`, never in a rendered value.

## Layout

    content/site.yaml               name, maintainer, corrections contact, chain facts, disclaimer
    content/census.yaml             the coverage universe; one entry per play with the four qualifying tests
    content/projects/<slug>.yaml    structured record: identity, addresses, dependencies, scoring inputs, findings
    content/sources/<slug>.yaml     source ledger — every S-id cited anywhere for that slug lives here
    content/research/<slug>.md      narrative record, 11 fixed sections, every material sentence tagged
    content/dependencies/<id>.yaml  shared cards: stock-tokens, usdg, uniswap, hyperliquid, chainlink
    content/changelog.yaml          dated record of every published change
    content/methodology.md          generated from PRD §6–7 (see Task 5 in the plan for the extraction command)
    schema/                         JSON Schema for each file type
    scripts/                        validate, score, seed, test
    fixtures/                       worked scoring examples with hand-calculated expected values

## Adding a project

1. Add an entry to `content/census.yaml` (all four qualifying tests must be true — PRD §2.1).
2. Add its facts to `scripts/seed-data.mjs` (symbol, summary, dependencies, known addresses, missing-evidence list).
3. `npm run seed` — creates `projects/`, `sources/`, `research/` files for it.
4. `npm run validate`.

## Researching a project (stub → full)

1. Add every source you open to `content/sources/<slug>.yaml` first (`S1`, `S2`, …) with `accessed_at`, `claim`, `excerpt`.
2. Write `content/research/<slug>.md`. Every material sentence ends with `[verified S3]`, `[claim S7]`, `[inference S3 S4]`, `[disputed S9]` or `[unknown]`.
3. Fill `scoring:` in `content/projects/<slug>.yaml` (Pons has a commented skeleton). Every level needs `evidence: [S..]` and a note.
4. Set `coverage: full` in the project file, the research front matter and `census.yaml`.
5. Add a `changelog.yaml` entry (`type: score` or `coverage`, prior → new).
6. `npm run validate && npm run score`. Open a PR; the approver sets `review.approver` to their id.
   Until they do, confidence is capped at 69 and the score shows as provisional.

## Evidence tags and language

`verified` = reproduced onchain or from strong primary evidence · `claim` = project says so · `inference` = analyst
conclusion from cited evidence · `disputed` = challenged with evidence · `unknown` = could not determine.
Write "the admin address can upgrade contracts without an enforced timelock", not "the team can rug". Never label
anything "safe". See PRD §7.3.

## Status

Seeded 2026-08-30 with 14 stubs. No full profiles yet. `corrections.destination` in `site.yaml` is `TODO` and blocks
`validate:release` on purpose.
```

- [ ] **Step 8: Final end-to-end**

Run, in order: `npm test` → all `ok`, ends `all scoring tests passed`. `npm run validate` → exit 0. `npm run score` → 14 rows + `wrote build/derived.json`. `git status --short` → shows the new tree; **do not commit**.

---

## Self-review notes (written after the plan)

- **Spec coverage:** §3 inputs→outputs → Task 2/7. §4 layout → Tasks 1, 3, 5, 6. §5.1–5.8 file formats → schemas in Task 3, content in Tasks 5–6; §5.7 dependency id renamed `uniswap` (deviation noted in Task 6). §6 algorithm → Task 2 (`partial` = max/2, renormalize, pending cap, override caps, display thresholds, rounding at end). §7 validation rules 1–5 → Tasks 3, 4, 7 (rule 5's three release checks all in `releaseCheck`). §8 fixtures → Task 2 (plus renormalize and low-confidence cases beyond the spec's three). §9 deliverables → all tasks; PRD amendment → Task 1. §10 open items → README "Status" + `site.yaml` comments.
- **Task numbering:** the hooks inside `validate.mjs` mention "Task 8" for the release hook; that work is Task 7 in this plan. The comment text in Task 3 Step 10 is `RELEASE-HOOK (Task 8 …)` — keep the marker string as written so Task 7's replace instruction matches.
- **Type consistency:** `derive()` returns `uncappedConfidence` (added in Task 3 Step 9) which `releaseCheck` reads; `checkResearch` signature `(text, { slug, coverage, ledgerIds })` is identical in Tasks 4 and 7; `validateAgainst(name, data)` names match across Tasks 3, 5, 6.
