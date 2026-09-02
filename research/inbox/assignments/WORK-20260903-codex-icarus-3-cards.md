# WORK-20260903-codex-icarus-3-cards: Icarus project and token cards

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) building Icarus on github.com/harsharn10/proofline. The spec is docs/design/icarus/README.md and the visual spec is docs/design/icarus/mock.html (open it in a browser; hash routes #/, #/s/launchpads, #/t/artificial-inu, #/n/pons). Read both before touching code, then docs/research-system.md for the content contract. Where the mock and README disagree, README wins.

work_id: WORK-20260903-codex-icarus-3-cards
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-3-cards (already exists with this assignment file; commit to it, do not create another)
depends_on: WORK-20260903-codex-icarus-1-shell (branch from its branch until it merges, then rebase on main)
allowed_paths:
  - site/src/routes/n.$slug.tsx
  - site/src/routes/d.$id.tsx (restyle only)
  - site/src/components/{dossier,snapshot-strip,on-chain,deployment-grid,evidence-tag,feed-list,copy-address,export-menu}.tsx (may be replaced)
  - site/src/components/card/** (new)
  - site/src/data/content-server.ts (card bundle only)
  - site/src/data/types.ts (Dossier/DossierBundle only)

Rules that always apply (README §3): reader words only, every number links to its source, the share bar, no wallet labeling, charts from snapshots only, honest placeholders, build stays green. Do not change files outside allowed_paths; if you must, stop and say why in the PR.

Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run test, npm --prefix site run build all pass. Commit in small steps with messages ending in the trailer "Producer: codex". Push to the branch and mark the PR ready with the body:
## Done
- one line per change
## Screens
- attach screenshots of every changed page in light and dark (mobile width too)
## Not done / questions
- anything left, with the reason
Never merge, never enable auto-merge. A controller reviews with docs/design/icarus/review-checklist.md.

Task: rebuild the name card per README §4 "Card" and mock #/n/pons (project) and #/t/artificial-inu (token). One route, /n/<slug>; the variant is token when the census leaf's section is "tokens" (schema/taxonomy.json), otherwise project.

1. Header: initials avatar, name, symbol, "Official · links confirmed" badge (or "Unclaimed"), StatusPill with relative time, Control badge only when the project has a score ("Control 41/100 · evidence 64% · awaiting second review" while provisional; drop the last clause once a second review exists). Icon tags in README order; a tag whose value is unknown is omitted, never shown empty. Daily / Weekly / Monthly SegmentedControl drives the chart window.
2. Summary panel: summary with the first sentence bold, then LinkPills for official_links (site, docs, x, telegram, github) plus DexScreener (first pair) and Explorer (primary address) when pulled.
3. Columns. Left: Official rows (token, main contract, contracts read, audit) and Structure rows — projects: ownership (owner_type/safe threshold), timelock, upgradeable (proxy), fees, token owner; tokens: ownership, liquidity, mint, top-10 hold. Read pulled fields when present (market.top10_share, structure.mint, structure.lp arrive with PR 4; until then show muted italic "not checked"). Middle: four MetricTiles from SECTION_KPIS with sub-lines (window, source), GrowthChart fed from content/pulled/history/<slug>.jsonl (and content/pulled/series/<slug>.json when present) with series Holders / Volume / Trades (token) or Launches / Revenue / Holders (project), a facts line with source links (DexScreener, DefiLlama when a protocol receipt exists, Explorer). Right: "What people are saying" — newest 6 across content/feed/<slug>.yaml items and content/changelog/<slug>.yaml entries, each with text, who, date and a link; "All →" to /feed?name=<slug>.
4. Related table: the section cohort sorted by the section KPI, self highlighted, Official / Unclaimed dots, legend.
5. Tabs: Commentary (findings grouped Risk first; labels "Risk · checked on chain" / "Risk · from the evidence" / "Checked on chain" / "From the project" / "From the evidence" / "Disputed" / "Open"; superscript source numbers link to the Sources tab anchors), Contracts (deployment grid restyled), Sources (existing list restyled). Remove the History tab, the separate Feed tab and every wallet-labeled element.
6. Dependency cards /d/<id> only pick up the tokens and shared components; no new features.
Acceptance: /n/pons and /n/artificial-inu match the mock; the chart shows the real snapshot points with the "N snapshots since" note; no History tab; no jargon; both themes; mobile stacks to one column.
```
