# WORK-20260903-codex-icarus-9-home-wire: Home v3: market cap in the rows, TL;DR for announced, the wire

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) on github.com/harsharn10/proofline (Robinhood Chain research site branded Icarus). Read docs/design/icarus/README.md first: §3 rules, and §4 "Page contracts (v3)" which is the contract for this work (the wire, the home rows, the card order). Then docs/research-system.md for the content contract and docs/design/icarus/review-checklist.md for what the reviewer runs. The site is live on Render from main; keep it green.

work_id: WORK-20260903-codex-icarus-9-home-wire
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-9-home-wire (exists with this assignment file; commit to it)
depends_on: WORK-20260903-codex-icarus-8-compiler-v3 (for tldr/why_people_care/market cap data; build against its branch until it merges, then rebase on main)
allowed_paths:
  - site/src/routes/index.tsx
  - site/src/routes/feed.tsx
  - site/src/routes/s.$id.tsx
  - site/src/components/home/**
  - site/src/components/feed-stream.tsx
  - site/src/components/wire/** (new)
  - site/src/data/content-server.ts
  - site/src/data/types.ts
  - site/src/lib/dejargon.ts
  - scripts/lib/telegram.mjs and scripts/telegram-digest.mjs (wire wording only)
  - scripts/test.mjs
  - content/methodology.md and site/src/routes/methodology.tsx (the four kinds paragraph only)

Rules that always apply (README §3): reader words only (the vocabulary test in scripts/test.mjs enforces it), every number links to its source, the share bar, no wallet labeling, charts from snapshots only, honest placeholders, build stays green. Do not change files outside allowed_paths; if you must, stop and say why in the PR.

Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run build:render THEN npm --prefix site run test (typecheck after the build), npm --prefix site run smoke:render. Commit in small steps with messages ending in the trailer "Producer: codex". Push and mark the PR ready with the body:
## Done
## Screens (every changed page, light and dark, and 390px)
## Not done / questions
Never merge, never enable auto-merge.

Task: build the wire and the v3 home rows (README §4 "The wire", "Home", "Category", "Feed").

1. Wire model in site/src/data/content-server.ts: wireItems(bundle) → newest-first items {id, kind: announcement | talk | onchain | note, headline (≤ 80, readerCopy), gist, url, slug, name, account?, at} built from feed items (kind mapping in README §5) and from changelog entries of type risk | finding | correction with severity Material or Risk (never coverage, score, stage bookkeeping). Unit tests with fixtures: a coverage changelog entry never appears; a ct item carries its handle; ordering.
2. Component site/src/components/wire/wire.tsx: the list per README (headline, gist, link pill, name chip, time, kind chip), kind filter chips (client-side, URL ?kind=), optional name filter, a compact variant (6 items) and a full variant. Replace "Latest from Icarus" on home with the compact wire; /feed becomes the full wire with the name chip filter; the category page shows its section's newest 4 under the table.
3. Home rows: Trending gains market cap (market.market_cap_usd; FDV labelled "FDV" when only fdv_usd exists) and holders; New launches show TL;DR and market cap; Announced shows the TL;DR and the source link (first official link) and the announcement age (newest feed item date, else changelog date). Announced requires a tldr; names without one fall to the muted tail with "no summary yet".
4. Category cards and /s/<id>: market cap column when the section is tokens or launchpads' graduated tokens; keep the rest.
5. Telegram digest: items read as wire items (headline, gist, link last), only names above the share bar; wording matches the site's four kinds.
6. How to read this: one paragraph explaining the four kinds; the vocabulary test covers the new components.
Acceptance: home matches README §4 v3; /feed shows no bookkeeping entries; every wire item has a working link; tests green; both themes; 390px.
```
