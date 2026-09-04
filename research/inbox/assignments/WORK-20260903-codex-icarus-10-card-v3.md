# WORK-20260903-codex-icarus-10-card-v3: Card v3: Overview, Why people care, Commentary as the wire, risk block at the bottom, Details tab

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) on github.com/harsharn10/proofline (Robinhood Chain research site branded Icarus). Read docs/design/icarus/README.md first: §3 rules, and §4 "Page contracts (v3)" which is the contract for this work (the wire, the home rows, the card order). Then docs/research-system.md for the content contract and docs/design/icarus/review-checklist.md for what the reviewer runs. The site is live on Render from main; keep it green.

work_id: WORK-20260903-codex-icarus-10-card-v3
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-10-card-v3 (exists with this assignment file; commit to it)
depends_on: WORK-20260903-codex-icarus-8-compiler-v3 and WORK-20260903-codex-icarus-9-home-wire (build on 9's branch until both merge)
allowed_paths:
  - site/src/routes/n.$slug.tsx
  - site/src/components/card/**
  - site/src/components/dossier.tsx
  - site/src/components/deployment-grid.tsx
  - site/src/data/content-server.ts (card bundle only)
  - site/src/data/types.ts (Dossier only)
  - site/src/styles.css (card section only)
  - scripts/test.mjs (vocabulary fixtures only)

Rules that always apply (README §3): reader words only (the vocabulary test in scripts/test.mjs enforces it), every number links to its source, the share bar, no wallet labeling, charts from snapshots only, honest placeholders, build stays green. Do not change files outside allowed_paths; if you must, stop and say why in the PR.

Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run build:render THEN npm --prefix site run test (typecheck after the build), npm --prefix site run smoke:render. Commit in small steps with messages ending in the trailer "Producer: codex". Push and mark the PR ready with the body:
## Done
## Screens (every changed page, light and dark, and 390px)
## Not done / questions
Never merge, never enable auto-merge.

Task: reorder and rewrite the card per README §4 v3 "Card".

1. Header: add the TL;DR line under the name (project.tldr; omit when absent). Keep tags, status, Official badge, the Control badge only in the header and Details.
2. Sections in this exact order: Overview (summary + official link pills) · Why people care (three bullets with footnote superscripts that jump to Sources; section omitted when the field is absent) · Numbers (metric tiles per SECTION_KPIS with market cap for tokens, the growth chart, the facts line) · Commentary (the wire component from PR 9 filtered to this name, newest first, kind chips, "All →" to /feed?name=) · Related table · What could go wrong (project.risks, ≤ 3 bullets, plain words, footnotes; when the field is absent derive at most three bullets from findings.risk entries through readerCopy; this block sits below Related, never above) · Details tabs: Contracts (deployment grid), Control (the Official and Structure rows from v2 move here, plus the Control badge explanation), Sources.
3. Remove the v2 three-column layout: the Official/Structure rows are no longer beside the numbers; "What people are saying" is replaced by Commentary. The token variant keeps its Structure rows (ownership, liquidity, mint, top-10 hold ex-burn with burned share) in the Control tab.
4. Mobile: single column in the same order; the risk block and Details stay at the bottom.
5. Vocabulary: no jargon in the new labels; "What could go wrong" and "Why people care" are the exact headings.
Acceptance: /n/pons and /n/artificial-inu match README §4 v3 in order and content; the risk block is below Related; Commentary shows linked items with kinds; tests green; both themes; 390px.
```
