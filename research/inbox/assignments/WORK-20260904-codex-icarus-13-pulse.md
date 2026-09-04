# WORK-20260904-codex-icarus-13-pulse: The pulse: a 10-minute fast path for launches and breakouts, with live numbers for the site

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) on github.com/harsharn10/proofline (Robinhood Chain, chain id 4663; site branded Icarus, live on Render from main). Read docs/design/icarus/README.md §3 (rules) first, then the files named below. Keep main green: npm test (run the suites separately if the chain exceeds ten minutes), npm run validate:release (0 errors), npm --prefix site run build:render then npm --prefix site run test where the site changes.

work_id: WORK-20260904-codex-icarus-13-pulse
producer: codex
branch: codex/20260904/WORK-20260904-codex-icarus-13-pulse (exists with this assignment file; commit to it)
depends_on: none (reads its own sources; the site change is additive with a fallback)
allowed_paths:
  - pulse/** (new Cloudflare Worker project: wrangler config, src, tests)
  - scripts/lib/signals.mjs (new, shared rules)
  - scripts/test-signals.mjs (new)
  - site/src/data/content-server.ts (pulse loader only)
  - site/src/components/home/right-now.tsx (live badge only)
  - site/src/data/types.ts (Pulse types)
  - docs/integrations/pulse.md (new)
  - package.json (test entry)
  - .github/workflows/pulse-deploy.yml (new)

Rules that always apply: every number links to its source, honest placeholders, no wallet labeling (no named wallets, no per-wallet feeds), nothing fabricated, secrets only through GitHub or Cloudflare secrets (never in the repo). Commit in small steps with messages ending in the trailer "Producer: codex". Push and mark the PR ready with the body:
## Done
## Verification (commands run and their last lines; for anything live, the real numbers you saw)
## Not done / questions
Never merge, never enable auto-merge.

Task: on 2026-09-03 at 20:30 UTC an AMC memecoin launched on Robinhood Chain after a public row between AMC's CEO and Robinhood's CEO, did $2M in its first hour and $61M in a day, and 24 copycats paired against the tokenized AMC stock followed. Our six-hour pull saw it the next morning. Build the fast path that would have caught it in twenty minutes.

Architecture: a Cloudflare Worker in pulse/ (the repo already deploys a Worker for the site; reuse the account and the wrangler pattern in wrangler.jsonc and .github/workflows) with a cron trigger every 10 minutes, KV for state, and one HTTP route GET /pulse.json. It never commits to the repo (a commit every 10 minutes would rebuild Render), and it never runs research; it reads three keyless sources and applies fixed rules.

Sources, one request each per tick:
- GeckoTerminal https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools?page=1 and …/new_pools?page=1 (pool name, base/quote token addresses, pool_created_at, volume_usd.h1/h6/h24, reserve_in_usd, price change, transactions). Keyless, 30 requests/minute.
- DexScreener https://api.dexscreener.com/token-pairs/v1/robinhood/<token> for the tokens the two Gecko lists surfaced (cap 30 per tick), giving liquidity.usd, volume.h1/h6/h24, marketCap, fdv, pairCreatedAt, info.socials.
- Rialto https://analytics.rialto.xyz/api/router/tickers with the headers documented in docs/integrations/pull.md (Accept application/json, a Referer of https://analytics.rialto.xyz/markets, a desktop Chrome User-Agent), as the cross-check for 24h volume.
Optional phase 2 in the same PR if time allows: a Durable Object that holds a connection to the public sequencer feed wss://feed.mainnet.chain.robinhood.com (documented at https://docs.robinhood.com/chain/connecting; a JSON stream of sequenced L2 messages, ~6/second) and counts transactions to the Pons and Hookr factory addresses in content/pulled/pons.yaml and hookr.yaml per 10-minute window, exposed on /pulse.json as launches_10m. If you skip it, document the design.

Rules, in scripts/lib/signals.mjs so the Telegram digest can reuse them (pure functions over plain objects, tested with fixtures):
- new-launch: pair under 24 h old, liquidity ≥ $50K, volume.h1 ≥ $500K → "New: <symbol> on <launchpad if known> · $X liquidity · $Y first hour".
- breakout: an existing pair whose volume.h1 is ≥ 3× the average hourly volume of the previous 6 hours with liquidity ≥ $100K → "Moving: <symbol> · $X this hour vs $Y/h · holders/mcap if known".
- stock-pair spike: a new pair whose quote token is a tokenized stock (address in the Rialto robinhood-symbols list, or symbol matching an equity ticker in the pulled pair_asset data) and whose first-hour volume ≥ $250K → "<symbol> paired to <TICKER> stock · $X first hour" (this is the AMC case).
- state: KV keeps the last 6 ticks per pair; a rule fires once per pair per 6 hours; global cap 3 alerts per hour and 12 per day; everything below the caps still appears on /pulse.json.
- output /pulse.json: {at, ticks, alerts: [{kind, symbol, token, pair, launchpad, numbers, links}], hot: top 10 pairs by volume.h1 with mcap/fdv/liquidity/links, launches_10m|null}. Telegram delivery: the Worker posts alert messages (kicker, one line of numbers, the DexScreener and explorer links last) using TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID from Worker secrets; a PULSE_DRY_RUN var logs instead of sending.
Site: site/src/data/content-server.ts fetches /pulse.json at request time with a 2-second timeout and a 10-minute in-memory cache; when present, the Right now Trending card shows a small "live · N min ago" badge and the hot list's h1 volume next to the 24h figure; when absent, nothing changes. No wallet-level data anywhere.
Deploy: .github/workflows/pulse-deploy.yml deploys the Worker on push to main when pulse/** changes, using the same Cloudflare credentials the site deploy uses (read .github/workflows and wrangler.jsonc to find them; do not invent secret names). Docs: docs/integrations/pulse.md (sources, rules, caps, secrets, how to read /pulse.json, phase 2 design).
Acceptance: npm run test:signals green (fixtures include a replay of the AMC launch numbers: pair created 2026-09-03T20:30Z, liquidity $3.0M, h1 volume $9.6M, quote AMC stock token → new-launch and stock-pair spike both fire, and a quiet pair does not); wrangler dev serves /pulse.json against the live sources; the PR body shows one real tick's output.
```
