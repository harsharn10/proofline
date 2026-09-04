# WORK-20260904-codex-icarus-14-signals-daily: Telegram: five signals, the daily brief and the weekly wrap replace per-push wire sends

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) on github.com/harsharn10/proofline (Robinhood Chain, chain id 4663; site branded Icarus, live on Render from main). Read docs/design/icarus/README.md §3 (rules) first, then the files named below. Keep main green: npm test (run the suites separately if the chain exceeds ten minutes), npm run validate:release (0 errors), npm --prefix site run build:render then npm --prefix site run test where the site changes.

work_id: WORK-20260904-codex-icarus-14-signals-daily
producer: codex
branch: codex/20260904/WORK-20260904-codex-icarus-14-signals-daily (exists with this assignment file; commit to it)
depends_on: WORK-20260904-codex-icarus-13-pulse (shares scripts/lib/signals.mjs; build against its branch until it merges)
allowed_paths:
  - scripts/telegram-digest.mjs
  - scripts/lib/telegram.mjs
  - scripts/lib/signals.mjs (extend)
  - scripts/test.mjs (telegram tests)
  - .github/workflows/publish.yml
  - ops/telegram-review.json (schema only, not decisions)
  - docs/channel-publishing.md
  - schema/feed.schema.json and schema/packet.schema.json (additive: event tag)
  - scripts/lib/packet.mjs (carry the tag through compile)
  - docs/research-system.md §5/§8 (the tag list)

Rules that always apply: every number links to its source, honest placeholders, no wallet labeling (no named wallets, no per-wallet feeds), nothing fabricated, secrets only through GitHub or Cloudflare secrets (never in the repo). Commit in small steps with messages ending in the trailer "Producer: codex". Push and mark the PR ready with the body:
## Done
## Verification (commands run and their last lines; for anything live, the real numbers you saw)
## Not done / questions
Never merge, never enable auto-merge.

Task: the owner's rule for the channel is "push what changes what a reader would do". Today the publish workflow runs on every push to main and sends wire items. Replace that with five signals, a daily brief and a weekly wrap.

Signals (computed from data we already commit; each a pure function in scripts/lib/signals.mjs with fixture tests):
1. breakout (from the pulse rules; on the six-hour snapshots it is: volume24h ≥ 2× the previous snapshot with liquidity ≥ $50K, plus a second signal: holders +20% or ≥ 3 distinct accounts posting that day in the feed).
2. leader-change: a name becomes #1 in its taxonomy section by the section's KPI (SECTION_KPIS in site/src/data/types.ts; ranks in build/derived.json), or enters the top 3 from outside, and holds it for two consecutive snapshots.
3. control-change: between two pulled files, owner / owner_type / safe threshold / proxy implementation / structure.lp locked_share / structure.mint changed on any address of a share-bar name → RISK ALERT kicker.
4. distribution: a feed item whose new "tag" is listing | integration | partnership | audit, with a receipt URL that is not the project's own X account (a listing page, an exchange announcement, an audit PDF). Project posts alone do not qualify.
5. coming-up: an announced name with a feed item tagged launch-date | whitelist | mint dated within the next 7 days, plus its TL;DR.
The event tag: add an optional "tag" to packet events and feed items (enum: listing, integration, partnership, audit, launch-date, whitelist, mint, milestone, other), carried through scripts/lib/packet.mjs compile into content/feed/<slug>.yaml; schema additive; older items untagged.

Messages:
- Alerts: sent when a signal fires, only for share-bar names (control-change also for any name with a full profile), capped at 3 per day and 1 per name per day, kicker per signal (NEW LAUNCH, MOVING, LEADER, RISK ALERT, LISTED, COMING UP), one line of numbers, the TL;DR when one exists, links last (card, then source).
- Daily brief at 13:00 UTC (9am ET), one message: top 5 by 24h volume with change; names that cleared the share bar in the last 24 h, each with its TL;DR and why-people-care first bullet (this is the under-the-radar list: the bar is the minimum, not heat); biggest up and down movers; up to 3 tagged distribution items with links; one Icarus note (a Material control finding) if any; a day word: quiet or busy, from launches_24h and volume against the 7-day average. On a quiet day the brief is one line.
- Weekly wrap on Sundays at 14:00 UTC: leaders per section, new names this week, names that went quiet (status changed to quiet/dormant), control changes, the week's distribution items.
Workflow: publish.yml keeps its push trigger only for the approval-gated changelog publications; add a schedule "0 13 * * *" for the brief and "0 14 * * 0" for the wrap, and run alerts from the pull workflow's end (after a successful pull, run node scripts/telegram-digest.mjs --alerts). State stays in ops/telegram-state.json with the existing retry loop. Remove the wire-item sending path added on 2026-09-04 (selectWireItems stays as a helper for the brief's distribution items only). npm run telegram:dry prints the brief and any alerts.
Acceptance: fixture tests per signal and per message; a dry run on main prints a plausible brief from today's data; the PR body includes that brief verbatim.
```
