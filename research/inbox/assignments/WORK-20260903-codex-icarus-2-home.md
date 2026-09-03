# WORK-20260903-codex-icarus-2-home: Icarus home and category pages

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) building Icarus on github.com/harsharn10/proofline. The spec is docs/design/icarus/README.md and the visual spec is docs/design/icarus/mock.html (open it in a browser; hash routes #/, #/s/launchpads, #/t/artificial-inu, #/n/pons). Read both before touching code, then docs/research-system.md for the content contract. Where the mock and README disagree, README wins.

work_id: WORK-20260903-codex-icarus-2-home
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-2-home (already exists with this assignment file; commit to it, do not create another)
depends_on: WORK-20260903-codex-icarus-1-shell (branch from codex/20260903/WORK-20260903-codex-icarus-1-shell until it merges, then rebase on main)
allowed_paths:
  - site/src/routes/index.tsx
  - site/src/routes/s.$id.tsx (new)
  - site/src/data/content-server.ts
  - site/src/data/types.ts
  - site/src/components/{kpi-section,movers,traction,researched-rows,section,peer-cards}.tsx (may be replaced or deleted)
  - site/src/components/home/** (new)
  - scripts/score.mjs and scripts/lib/** only to expose meetsShareBar output in build/derived.json
  - scripts/test.mjs (tests for the new rules)

Rules that always apply (README §3): reader words only, every number links to its source, the share bar, no wallet labeling, charts from snapshots only, honest placeholders, build stays green. Do not change files outside allowed_paths; if you must, stop and say why in the PR.

Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run test, npm --prefix site run build all pass. Commit in small steps with messages ending in the trailer "Producer: codex". Push to the branch and mark the PR ready with the body:
## Done
- one line per change
## Screens
- attach screenshots of every changed page in light and dark (mobile width too)
## Not done / questions
- anything left, with the reason
Never merge, never enable auto-merge. A controller reviews with docs/design/icarus/review-checklist.md.

Task: build the home page and the category page exactly as README §4 describes and mock #/ and #/s/launchpads show.

1. Rules in site/src/data/content-server.ts, each exported and unit-tested with fixtures: meetsShareBar(entry) (README §3.3), trendingNow(entries, histories) (top 5 live above the bar by volume24h, change vs the snapshot nearest 24 h earlier, omit change when none), newLaunches(entries) (firstPairAt ≤ 14 d, above the bar, newest first) plus notListedCount (sum of launches_24h across factory addresses minus listed), announcedNow(entries) (status announced, official surface confirmed, summary present, newest first), sectionLeaders(section, entries) (top 3–5 above the bar by SECTION_KPIS[section][0]; announced names appended muted when fewer than 3 clear the bar), latestFromIcarus(changelog, feed, n=4).
2. Home: hero, stat box (names on file, live on chain, launches today, volume 24h, chain-read time from the newest pulled_at, "refreshes every 6 hours"), category pills with counts, Right now (Trending / New launches / Announced cards, hint line stating the bar), By category (one card per taxonomy section with icon, ranking basis, leaders, "All N →"), Latest from Icarus (4 items with when, who pill, title, paragraph, link pills), footer line. Remove the old What's moving, Full profiles and per-section tables from index.tsx and delete components nothing else uses.
3. Category page /s/<sectionId>: back link, title + count, description from schema/taxonomy.json, stat box (live, dormant, launches today, volume 24h, "Rails these run on" from the dependencies the section's names share), filter pills All / Live / Announced / Watchlist (client-side, URL ?f=), ranked table with SECTION_KPIS columns, status column with relative time, Control column (score for scored projects, "watchlist" muted for role observe, dash otherwise), legend line. Rows link to /n/<slug>. Category pills on home link here.
4. build/derived.json gains a shareBar map {slug: boolean} so the Telegram digest can use it later.
Acceptance: home matches the mock in structure and copy; every row is a link; Pons and Artificial Inu clear the bar, NOXA Fun and announced names do not; tests cover the rules; both themes; 375px width has no horizontal scroll.
```
