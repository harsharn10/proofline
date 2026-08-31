# Proofline content system — design spec

Date: 2026-08-30
Scope: PRD §14 step 1 (repo, schema, `site.yaml`) plus step 2 (census) and the stub/skeleton files that make the content system testable.
Source of truth: `PRD.md` (Proofline V1 PRD, "Approved for implementation", methodology `proofline-v1.0`). Where this spec resolves something the PRD leaves open, it says so explicitly in **Decision** lines.

## 1. Goal

A file-based content system in which a researcher can add or update a project by editing files only, a reviewer can reproduce every published number from the stored inputs, and the future Next.js site renders those files without re-implementing any scoring or display rule.

## 2. Assumptions (confirmed with product owner 2026-08-30)

- Seed set is **14** plays: the PRD's 10 (Pons, Mancer, Artificial Inu, Longshot, LONG, StonkBroker, Index, Arrow Finance, Bankr, Meridian) plus the 4 native plays from the prototype (Statics Protocol, Safehood, Robinhood Index Vaults, Vimen). All 14 get a file.
- Uniswap, Morpho, Lighter, Chainlink, USDG/Paxos, Hyperliquid and the canonical bridge are **dependencies**, not profiles (PRD §2.2).
- The prototype at `~/Documents/ChatGPT/Defi 2026` is disposable and is not modified.
- Repo lives at `~/proofline`.

## 3. Core rule: files store inputs, the build derives outputs

Nobody types a headline score into a file. A project file stores the raw rubric inputs, the confidence inputs, the approver state and any override. `scripts/score.mjs` derives everything the public sees. The same module is the only implementation of the display rules; the site will import its output, never recompute.

This is what makes PRD §12 ("a second person can reproduce the security/control raw score from stored evidence") mechanically true.

## 4. Repository layout

```
proofline/
  PRD.md                          the approved PRD, seed table amended to 14 rows
  README.md
  package.json                    scripts: validate, score, test
  schema/
    site.schema.json
    census.schema.json
    project.schema.json
    sources.schema.json
    dependency.schema.json
    source-entry.schema.json      one source ledger entry; $ref'd by sources and dependency
    changelog.schema.json
  scripts/
    lib/
      load.mjs                    read + parse all content, one entry point
      score.mjs                   pure functions: factor %, weighted score, confidence, override, display
      research-md.mjs             parse research/*.md headings and evidence tags
      validate-content.mjs        every §7 check over one tree → { errors, warnings, content }; shared by validate and score
    validate.mjs                  CLI over validate-content; exit 1 on any failure
    score.mjs                     CLI: derive outputs for every full profile, print table, write build/derived.json
    test.mjs                      runs score against fixtures/ and compares to fixtures/expected.json
  content/
    site.yaml
    census.yaml
    methodology.md
    changelog.yaml
    projects/<slug>.yaml          14 files
    sources/<slug>.yaml           14 files
    research/<slug>.md            14 files (13 stub-depth, 1 full skeleton: pons)
    dependencies/<id>.yaml        5 files
  fixtures/
    clean/ high-override/ approver-pending/     each a minimal projects+sources pair
    expected.json
  docs/superpowers/specs/         this document
  build/                          gitignored; derived.json output
```

Runtime: Node ≥ 20, ESM `.mjs`, no TypeScript in this step. Dependencies: `yaml`, `ajv`, `ajv-formats`. Nothing else.

## 5. File formats

All YAML. Dates are ISO `YYYY-MM-DD`; timestamps `YYYY-MM-DDTHH:MM:SSZ`. Slugs are `^[a-z0-9-]+$`. Source ids are `S` followed by an integer, unique within one project's ledger.

### 5.1 `content/site.yaml`

```yaml
name: Proofline
tagline: Research the launch. Ignore the hype.
methodology_version: proofline-v1.0
maintainer: { id: <researcher id>, display: <name or handle> }   # TODO until filled
corrections:
  destination: TODO                # real email/form URL before public launch (PRD §8, §13)
  acknowledge_within_days: 3
telegram: { enabled: false, weekly_heartbeat: false }
chain:
  name: Robinhood Chain
  id: 4663
  stack: Arbitrum Orbit L2
  gas: ETH
  mainnet_date: 2026-07-01
  explorer: https://robinhoodchain.blockscout.com
  docs: https://docs.robinhood.com/chain
  checked: null                      # date the chain facts were reproduced against docs.robinhood.com; null until then
disclaimer: |                        # PRD Appendix B text
```

**Decision:** `corrections.destination: TODO` is allowed by the schema but `validate.mjs --release` fails on it. Ordinary `validate` warns. `chain.checked: null` behaves the same way (release error).

### 5.2 `content/census.yaml`

A list of 14 entries. Each:

```yaml
- slug: pons
  name: Pons
  category: Launchpad                       # enum, §5.6
  lifecycle: mainnet                        # mainnet | beta | announced | inactive | testnet-only
  coverage: stub                            # full | stub — Pons flips to full when its research lands
  official_links: [ { kind: site, url: ... }, { kind: x, url: ... } ]
  discovery_source: PRD seed table 2026-08-30
  qualifying:                               # PRD §2.1 — all four must be true to be in
    deployed_on_chain:   { value: true, note: "...", verified: false }
    native_play:         { value: true, note: "...", verified: false }
    citable:             { value: true, note: "...", verified: false }
    research_story:      { value: true, note: "...", verified: false }
```

`verified: false` means the value comes from the seed table and has not been reproduced on Blockscout. `value` is a boolean so a test can honestly fail: `validate` warns on every `value: false` (`census: <slug> fails qualifying test <name>: <note>`) and `--release` treats it as an error. It does not require `verified` (that is research work).

**Decision:** every census entry must have a matching `projects/<slug>.yaml`, `sources/<slug>.yaml` and `research/<slug>.md`. The directory renders files, so there is no "census-only" display state.

### 5.3 `content/projects/<slug>.yaml`

```yaml
slug: pons
name: Pons
symbol: null                       # string or null
category: Launchpad
lifecycle: mainnet
coverage: stub                     # full | stub — Pons flips to full when its research lands
summary: one sentence
official_links: [...]
dependencies: [uniswap, usdg, stock-tokens]        # ids in content/dependencies/
addresses:
  - { label: "V2 curve factory", address: "0x...", role: factory, verified: false, sources: [S1] }
  # address is a 0x… hex address or the sentinel not-verified (known to exist, not yet located).
  # verified: true requires a 0x… address and at least one source.
review:
  researcher: <id>                 # ^[a-z0-9-]+$
  approver: pending                # a different person's id (^[a-z0-9-]+$), or the literal string pending
  methodology_version: proofline-v1.0
  reviewed_at: 2026-08-30
  published_at: null
scoring:                           # required when coverage: full; forbidden when stub
  security:                        # PRD §6.2 — seven tests
    deployment_verifiability:   { level: partial, evidence: [S1, S2], note: "..." }
    privileged_power:           { level: zero,    evidence: [S3],     note: "..." }
    authorization_topology:     { level: ...,     evidence: [...],    note: "..." }
    timelock_exit_window:       { ... }
    audit_deployment_match:     { ... }
    continuous_safeguards:      { ... }
    incident_handling:          { ... }
  factors:                         # PRD §6.1 — coarse rubric for factors 2–5
    engineering:   { level: strong | mixed | weak | insufficient, positive: [..], negative: [..], missing: [..], evidence: [S..] }
    transparency:  { ... }
    maturity:      { ... }
    economic:      { ... }
  confidence:                      # PRD §6.3 — each 0–100
    primary_source_coverage: 60
    onchain_verification: 40
    independent_corroboration: 30
    freshness: 90
    review_completeness: 40
  risk:
    assessed: Elevated             # Low | Moderate | Elevated | High | Critical — researcher judgment
    reason: "..."
  override:                        # optional
    level: High                    # Critical | High | Elevated
    reason: "..."
    evidence: [S3]
findings:
  positive:   [ { text: "...", class: verified, sources: [S1] } ]
  risk:       [ { text: "...", class: inference, sources: [S3, S4] } ]
  missing:    [ { text: "..." } ]
  unresolved: [ { text: "..." } ]
```

Evidence `class` enum: `verified | claim | inference | disputed | unknown`. `sources` is required (≥ 1) for every class except `unknown`, which may not carry any. Security-test levels other than `zero` and factor levels other than `insufficient` require ≥ 1 `evidence` id. `approver` must differ from `researcher`.

Stub files carry everything above except `scoring`; `findings.missing` is required and non-empty for stubs (the missing-evidence checklist, PRD §5.3).

### 5.4 `content/sources/<slug>.yaml`

```yaml
slug: pons
sources:
  - id: S1
    url: https://ponsfamily.com
    publisher: Pons
    kind: official-site           # enum, §5.6
    accessed_at: 2026-08-30T00:00:00Z
    claim: "Official site and product description"
    excerpt: "..."                # ≤ 500 chars, or a screenshot note
    hash: null                    # sha256 of a local snapshot when one is kept
    archive_url: null
    researcher: <id>
    available: true
```

### 5.5 `content/research/<slug>.md`

Front matter: `slug`, `coverage`, `methodology_version`. Body uses exactly these `##` headings in order (PRD §5.2):

1. Identity 2. Deployment 3. Control 4. Security 5. Engineering 6. Team 7. Product and economics 8. Communications 9. Findings 10. Sources 11. Review metadata

Every material statement ends with an evidence tag: `[verified S3]`, `[claim S7]`, `[inference S3 S4]`, `[disputed S9]`, `[unknown]`. Grammar: `\[(verified|claim|inference|disputed|unknown)((?:\s+S\d+)*)\]`. `unknown` takes no ids; every other class needs ≥ 1 id that exists in the project's ledger.

Stub-depth research files contain the same 11 headings; sections without research hold the single line `_Research pending._`

### 5.6 Enumerations

- `category`: Launchpad · Aggregator · Stock-paired token · Fee-routing protocol · NFT / treasury · RWA distributor · RWA baskets · CDP · Agent / execution · Prediction market · Index vault
- `lifecycle`: mainnet · beta · announced · inactive · testnet-only
- `source.kind`: official-site · docs · whitepaper · social · explorer · repository · audit · announcement · third-party-data · news · other
- `address.role`: token · factory · router · vault · proxy · implementation · admin · multisig · timelock · other
- `changelog.type`: score · risk · stage · finding · correction · coverage
- `changelog.severity`: Info · Review · Material · Risk

### 5.7 `content/dependencies/<id>.yaml`

Ids: `stock-tokens`, `usdg`, `uniswap` (one card for the chain's v2/v3/v4 deployment), `hyperliquid`, `chainlink`. Fields: `id`, `name`, `kind` (issuer-asset | dex | perp-venue | oracle | stablecoin), `summary`, `controls` (list of `{ power, holder, note, class, sources }`), `failure_modes` (list of `{ text, class, sources }`), `sources` (same entry shape as §5.4, shared via `schema/source-entry.schema.json`). A control or failure mode with `class ≠ unknown` needs ≥ 1 source, and every id it cites must exist in the card's own `sources`. Skeleton only in this step.

### 5.8 `content/changelog.yaml`

List of `{ date, slug, type, severity, title, detail, prior, new, reviewer, methodology_version }`. `prior`/`new` are free-form objects (e.g. `{ score: 64, risk: Elevated }`). Seeded with one `coverage` entry per slug dated 2026-08-30, "Initial stub opened".

## 6. Scoring and display algorithm (`scripts/lib/score.mjs`)

All functions are pure; inputs are the parsed project file.

**Security factor.** Points per test: deployment 5, privileged power 8, authorization 5, timelock 5, audit match 5, safeguards 4, incident 3 (total 35). `level` → points: `full` = max, `partial` = max / 2, `zero` = 0. `securityPct = sum / 35 × 100`.
**Decision:** partial is exactly half (PRD leaves the number open).

**Factors 2–5.** `strong` 80, `mixed` 50, `weak` 20, `insufficient` → unscored.

**Weighted score.** Weights: security 35, engineering 20, transparency 15, maturity 15, economic 15. Unscored factors are dropped and the remaining weights renormalized to 100.
**Decision:** renormalize rather than score 0 — "Missing ≠ negative" (PRD methodology principles). If security itself is unscored (any test missing) the profile has no score.

**Confidence.** Weighted mean of the five inputs at 30/25/20/15/10. If `review.approver == "pending"`, `confidence = min(confidence, 69)`.
**Decision:** this is the enforcement of PRD §13 "two-person approval before a numeric score displays at full weight"; it is a cap, not a formula consequence.

**Override.** `displayedScore = min(weighted, cap)` with caps Critical 29, High 59, Elevated none. `risk = max(risk.assessed, override.level)` on the ordering Low < Moderate < Elevated < High < Critical.

**Display.** Two constants, exported from `score.mjs` and used nowhere else: `PROVISIONAL_CONFIDENCE = 50`, `FULL_WEIGHT_CONFIDENCE = 70` (the release gate in §7.5 imports the latter).
- `coverage: stub` or `confidence < PROVISIONAL_CONFIDENCE` → `{ score: null, label: "Research pending / insufficient evidence" }`
- `PROVISIONAL_CONFIDENCE ≤ confidence < FULL_WEIGHT_CONFIDENCE` → `{ score, provisional: true }`
- `confidence ≥ FULL_WEIGHT_CONFIDENCE` → `{ score, provisional: false }`
- Always returned alongside: `confidence`, `risk`, `uncappedScore`, `override` (or null), `securityRaw` (the summed points), `factorPercents`.

Rounding: percentages and scores to the nearest integer at the end, never mid-computation.

## 7. Validation (`scripts/validate.mjs`)

1. Every YAML file parses and passes its JSON Schema.
2. Cross-references: census slugs ⇔ project files ⇔ sources files ⇔ research files (exact 1:1:1:1); every census slug has a `changelog.yaml` entry; census `name`, `category`, `lifecycle`, `coverage` equal the project file's; `dependencies[]` ids exist; every `sources: [S..]` reference in a project file exists in that project's ledger; every id a dependency card's controls/failure modes cite exists in that card's own `sources`; changelog slugs exist; `approver ≠ researcher`. A ledger id cited neither in the project file nor in a research tag is a warning.
3. Research markdown: front matter present and agreeing with the project (`slug`, `coverage`); the 11 headings present in order. Every tag, in every section, must satisfy the grammar (§5.5) and cite ids that exist in the ledger — anything bracket-shaped that names a class but breaks the grammar is a `malformed tag` error with a line number. Material sections 2–9 additionally may not contain an untagged non-empty paragraph (a paragraph is material unless it is the literal `_Research pending._`), and a `coverage: full` profile may not contain `_Research pending._` in those sections at all. HTML comments are stripped before these checks.
4. Full profiles: `scoring` present and complete; stubs: `scoring` absent, `findings.missing` non-empty.
5. `--release` flag additionally fails on `corrections.destination: TODO`, `chain.checked: null`, any census qualifying test with `value: false`, any `addresses[]` entry still `verified: false` on a `full` profile, and any full profile with `review.approver: pending` whose derived confidence would be ≥ `FULL_WEIGHT_CONFIDENCE` without the cap (reviewer needs to know the cap is doing work).

Exit code 1 on any error; warnings print but pass. `scripts/score.mjs` runs the same checks first and refuses to write `build/derived.json` while there is any error (`--force` overrides, for local experiments only).

## 8. Testing (`scripts/test.mjs`)

Three fixtures, each a `fixtures/<name>/project.yaml` + `sources.yaml` pair, with hand-calculated expectations in `fixtures/expected.json`:

- `clean`: all security tests `full`, all factors `strong`, confidence inputs yielding 82, approver set → score 87, confidence 82, no cap, not provisional. (All-`full` security = 100 %, factors 80 → weighted 0.35·100 + 0.65·80 = 87.)
- `high-override`: privileged power `zero`, override High → uncapped weighted computed and asserted, displayed 59, risk High.
- `approver-pending`: inputs yielding confidence 84, approver `pending` → confidence 69, provisional true.

`npm test` = `validate` on `content/` (exit 1 stops the run) followed by `scripts/test.mjs` (fixtures plus rule tests for the schemas, cross-checks, release gates and research checks); any mismatch fails. This satisfies PRD §12 "confidence thresholds and overrides demonstrated on at least one file".

## 9. What this step delivers

- Repo scaffold, `package.json`, `.gitignore`, `README.md` (run/validate/test, how to add a project)
- `PRD.md` copied from `~/Downloads/PRD.md` with §2.1 seed table extended to 14 rows and §5.1 stub count updated to "13 stubs"
- Six JSON schemas, three scripts, three fixtures, expected values
- `content/site.yaml`, `census.yaml` (14), `methodology.md`, `changelog.yaml` (14 entries)
- 14 project files, all `coverage: stub` in this step. **Decision:** Pons ships as `coverage: stub` in this step so the tree validates; the full-record skeleton lives in `research/pons.md` (all 11 sections with researcher prompts as HTML comments) and a commented `scoring` block in `projects/pons.yaml`. Flipping `coverage: full` and filling inputs is the research step.
- 14 source ledgers seeded with the official links known today (from PRD Appendix A and the prototype's profiles), each `accessed_at` set to the time this scaffold is generated, all tagged as `claim` in findings
- 5 dependency skeletons

Not delivered: the Next.js app (PRD §14 step 5), any research conclusions, Telegram.

## 10. Open items for the product owner

- `site.yaml`: maintainer id/name, corrections destination, researcher id used across files
- Verify chain facts (id 4663, Orbit, mainnet date) and set `checked`
- Pons research pass (PRD §14 step 4)
- Locate official links for StonkBroker, Index, Bankr, Meridian (Appendix A has none)
