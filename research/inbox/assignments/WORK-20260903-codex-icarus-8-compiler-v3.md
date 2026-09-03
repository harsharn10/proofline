# WORK-20260903-codex-icarus-8-compiler-v3: Compiler v3: TL;DR, why people care, risks, wire kinds

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) on github.com/harsharn10/proofline (Robinhood Chain research site branded Icarus). Read docs/design/icarus/README.md first: §3 rules, and §4 "Page contracts (v3)" which is the contract for this work (the wire, the home rows, the card order). Then docs/research-system.md for the content contract and docs/design/icarus/review-checklist.md for what the reviewer runs. The site is live on Render from main; keep it green.

work_id: WORK-20260903-codex-icarus-8-compiler-v3
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-8-compiler-v3 (exists with this assignment file; commit to it)
depends_on: none
allowed_paths:
  - scripts/lib/packet.mjs
  - scripts/compile-packet.mjs
  - scripts/compile-inbox.mjs (only if a compile path needs it)
  - scripts/lib/validate-content.mjs
  - scripts/lib/checks.mjs
  - schema/project.schema.json
  - schema/feed.schema.json
  - schema/packet.schema.json (additive only)
  - scripts/test-packet.mjs, scripts/test-pipeline.mjs, fixtures/**
  - scripts/lib/pull/dexscreener.mjs, scripts/lib/pull/write.mjs, schema/pulled.schema.json, scripts/test-pull.mjs (market cap only)
  - scripts/migrations/backfill-v3-fields.mjs (new)
  - content/** only via that migration, in its own commit
  - docs/research-system.md §5 and §8

Rules that always apply (README §3): reader words only (the vocabulary test in scripts/test.mjs enforces it), every number links to its source, the share bar, no wallet labeling, charts from snapshots only, honest placeholders, build stays green. Do not change files outside allowed_paths; if you must, stop and say why in the PR.

Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run build:render THEN npm --prefix site run test (typecheck after the build), npm --prefix site run smoke:render. Commit in small steps with messages ending in the trailer "Producer: codex". Push and mark the PR ready with the body:
## Done
## Screens (every changed page, light and dark, and 390px)
## Not done / questions
Never merge, never enable auto-merge.

Task: make the compiler produce the v3 fields (README §5) and the wire kinds, and backfill what the existing packets already contain.

1. schema/project.schema.json: add optional tldr (string ≤ 160), why_people_care (array of exactly 3 strings ≤ 160 each), risks (array of ≤ 3 strings ≤ 160 each). validate-content: warn when a mainnet or beta name lacks tldr or why_people_care; error when why_people_care has a length other than 3 or a bullet has no source id in brackets.
2. scripts/lib/packet.mjs compile(): read the body line "TL;DR: …" (directly after the Themes line; ignore fenced code) → tldr; the bullets under "## Why it matters" → why_people_care (exactly three; fewer or more → notice and skip the field, never pad); the bullets under "## What could go wrong" → risks (up to three; a paragraph without bullets → split on sentences, keep the first three, notice). Claim ids in brackets at the end of a bullet are translated to the ledger source ids the way research paragraphs are, so the site can footnote them. controller_edited protects the three fields like summary.
3. Feed: every event with a URL-backed receipt and site_recommendation other than "none" compiles to a feed item as today; add the mapping the site reads: kind company → Announcements, ct → Talk, onchain → On-chain, risk → Icarus notes, documented in docs/research-system.md §8. Event summaries become item bodies verbatim (the one-sentence "what it means"); titles ≤ 80.
4. Market cap: scripts/lib/pull/dexscreener.mjs already reads pairs; surface DexScreener marketCap and fdv → market.market_cap_usd and market.fdv_usd (null when absent), add market_cap to the history snapshot line, schema + types + tests. (site/src/data/types.ts is owned by PR 9/10; only add the two Pulled fields there if the typecheck needs them.)
5. scripts/migrations/backfill-v3-fields.mjs: for every packet already on main under research/inbox/packets/*/WORK-20260903-grok-heavy-icarus-research.md, recompile only the three new fields and the feed bodies into the existing project/feed files (no other field changes, idempotent); run it once and commit the content changes as "content: v3 fields from the 2026-09-03 batch", listing how many names got tldr, why_people_care, risks. Packets lacking a TL;DR line or three bullets simply leave the field unset; do not invent text.
6. Tests: fixtures for each new compile path, the exactly-three rule, the footnote translation, idempotence of the migration.
Acceptance: npm test green; validate:release 0 errors; the PR body lists per-field coverage after the backfill.
```
