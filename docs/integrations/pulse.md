# Icarus pulse

The pulse is a small Cloudflare Worker that checks Robinhood Chain markets every ten minutes. It
stores its state in Workers KV, serves the latest result at `GET /pulse.json`, and does not write to
the repository or run research. The six-hour pull remains the durable record; the pulse is the fast
reader-facing path between pulls.

## Sources and request budget

Each scheduled tick reads page 1 of GeckoTerminal trending pools and new pools, then makes one
DexScreener token-pairs request for each distinct base token those pages surfaced, capped at 30.
One Rialto `router/tickers` request cross-checks 24-hour pool volume. The Worker values each Rialto
leg with the corresponding Gecko token price and averages the usable legs; it leaves the cross-check
null when neither leg can be valued.

The official Rialto `market/robinhood-symbols` list supplies stock and ETF addresses and tickers. It
is refreshed at most once a day and cached in KV, so it is not an extra request on ordinary ticks.
Rialto requests use `Accept: application/json, text/plain, */*`, the `/markets` Referer, and the same
desktop Chrome user agent as the puller. Every figure in an alert or hot row is accompanied by the
GeckoTerminal, DexScreener, Blockscout and Rialto links that identify its sources.

DexScreener numbers are merged only into the pool whose pair address matches. DexScreener returns
every pool for a token, and an established pool's liquidity and volume attached to a fresh pair's
address would leave the reader unable to check the number against the page it links to. With no
matching row the pool keeps GeckoTerminal's own figures.

Each of the four reads fails on its own. A dead Rialto costs that tick its cross-check and its stock
list — the cached list is kept and the next tick retries — and nothing else. If both GeckoTerminal
lists fail there is no market to report: the Worker leaves the previous `/pulse.json` exactly where
it is, so the live badge ages visibly instead of a fresh timestamp claiming an empty market.

## Fixed rules

- **New launch:** pool age under 24 hours, at least $50,000 liquidity and at least $500,000 h1
  volume. Fires once per pair.
- **Breakout:** at least $100,000 liquidity and h1 volume at least three times the average hourly
  volume of the hours behind the current one. Fires at most once per pair per six hours.
- **Stock-pair spike:** pool age under 24 hours, at least $250,000 h1 volume, and a quote-token
  address or symbol in Rialto's stock/ETF list. Fires once per pair.

The breakout baseline is `(h6 - h1)` divided by the complete hours that exist, not by a fixed five.
Both feeds report `h6 === h1` for a pool younger than six hours, because every window covers the
pool's whole life; dividing that by five invents five quiet hours and produces a prior average of
exactly zero. A pool needs two complete prior hours before breakout can fire at all — younger than
that it is a launch, and new-launch and stock-pair-spike are the rules that catch it. On a pool that
does have that history, a prior average of zero is a real standing start and counts as a breakout
above the $500,000 launch floor. Where the h6 window is unusable the Worker falls back to the prior
KV ticks rather than making up a baseline.

New-launch and stock-pair-spike describe a pool's arrival, so they fire once for the life of the
pair rather than every six hours: a launch found half a day late used to be announced again roughly
every six hours until the pool turned 24 hours old. Their headlines carry the pool's age and say "in
the last hour" — only a pool under an hour old has a first hour to report.

KV keeps the last six ten-minute observations for each pair. At most three messages are delivered in
a rolling hour and 12 in a rolling day; signals that clear a rule but are held by a delivery cap
still appear in that tick's `alerts` array, are ranked by the number in the message so a cap drops
the smallest, and are **not** marked as fired — a held or failed signal is deferred to a later tick
rather than lost to its own cooldown.

## Two senders, one channel

The Worker and the daily digest (`scripts/telegram-digest.mjs`) post to the same
`TELEGRAM_CHAT_ID`, and they divide the subject matter:

| Sender | Kinds | Budget |
| --- | --- | --- |
| Pulse Worker | `new-launch`, `breakout`, `stock-pair-spike` | 3 per rolling hour, 12 per rolling day |
| Daily digest | every other kind — approved publications, control changes, the brief, the weekly wrap | its own daily budget |

`selectPulseDeliveries` drops anything that is not one of the three pulse kinds, and the Worker
refuses to send one, so the Worker can never take over the digest's subjects. Each Worker send is
written into KV with its timestamp (`state.sentAt`), which is what the hourly and daily caps count;
the two senders keep separate budgets, so a single name can appear from both in the same hour.

**Both obey the same switch in this repository: `ops/telegram-review.json`.** The digest reads the
file directly. The Worker cannot read the repository, so the deploy workflow reads
`channel_enabled && wire_enabled` at deploy time and passes the result as the Worker variable
`TELEGRAM_ENABLED`; the Worker sends only when that variable is exactly the string `"true"`.
`ops/telegram-review.json` is in the workflow's path filter, so **editing the flag and pushing to
main is what turns pulse delivery on or off** — there is no second switch to find in the Cloudflare
dashboard. `wire_enabled` is `false` today, so the Worker deploys silent. While it is paused the
rules still run and `/pulse.json` still carries every hit; only delivery stops, and each held message
is logged as `[pulse paused]`.

`wrangler.jsonc` sets `TELEGRAM_ENABLED` to `"false"`, so a hand-run `wrangler deploy` from a laptop
cannot start posting. `PULSE_DRY_RUN` is a second, independent brake for a first production tick:
with it set to anything but `0`, `false` or `off`, eligible messages are logged instead of sent.

## Output

`/pulse.json` has this stable top-level shape:

```json
{
  "at": "2026-09-04T16:30:00.000Z",
  "ticks": 42,
  "alerts": [],
  "hot": [],
  "launches_10m": null
}
```

`alerts` rows include the rule kind, token and pair addresses, optional launchpad attribution,
plain-language headline, numbers and source links. `hot` contains the ten pools with the most h1
volume and includes h1/h24 volume, Rialto's h24 cross-check, liquidity, market cap, FDV and links.
The site reads the URL in its `PULSE_URL` runtime variable with a two-second timeout and a ten-minute
memory cache that also holds failures, and shares one in-flight request between concurrent renders.
With no URL or no usable response, the page remains exactly as it was. A live pool is attached to a
tracked name by token address only — never by ticker, which would put a copycat's numbers on the
name it copies.

## Deploy and secrets

Two ways to deploy the Worker; the repository is ready for either.

**GitHub Actions (the workflow in this repository).** `.github/workflows/pulse-deploy.yml` verifies
the bundle on every push that touches `pulse/**`, `scripts/lib/signals.mjs` or
`ops/telegram-review.json`, and deploys only when both `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` exist as repository secrets. Without them the deploy job is skipped with a
line naming the missing secret, so an un-configured account never turns main red. The token needs
the "Edit Cloudflare Workers" template plus KV read/write.

**Cloudflare Workers Builds (no GitHub secrets).** The site Worker is built this way — the
`Workers Builds: proofline` check in the README. Connect the repository a second time in the
Cloudflare dashboard with `pulse/` as the root directory, a build command of `npm ci --prefix
../site`, and `npx wrangler deploy` as the deploy command. Cloudflare holds the credentials, so
nothing is stored in GitHub. In that arrangement the deploy job stays skipped, the bundle check
still runs on every push, and `TELEGRAM_ENABLED` has to be set on the Worker in the dashboard rather
than from `ops/telegram-review.json` — which means the repository stops being the switch, so prefer
the Actions route while delivery is live.

Before the first deploy, create the KV namespace once and pin its id, because Wrangler's
auto-provisioning prompts and Actions is not interactive:

```sh
site/node_modules/.bin/wrangler kv namespace create PULSE_STATE
# paste the printed id into pulse/wrangler.jsonc: { "binding": "PULSE_STATE", "id": "…" }
```

In Cloudflare, add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` as encrypted Worker secrets; do not
put their values in GitHub content or Wrangler configuration. Set the Render service's `PULSE_URL`
to the deployed Worker URL (with or without `/pulse.json`).

Local checks:

```sh
npm run test:signals
site/node_modules/.bin/wrangler deploy --dry-run --config pulse/wrangler.jsonc
site/node_modules/.bin/wrangler dev --test-scheduled --config pulse/wrangler.jsonc
curl 'http://localhost:8787/__scheduled?cron=*/10+*+*+*+*'
curl http://localhost:8787/pulse.json
```

## Sequencer counter: second phase

`launches_10m` is deliberately null in this phase. The follow-up design is a Durable Object with one
connection to `wss://feed.mainnet.chain.robinhood.com`. It will decode sequenced L2 transactions,
count calls to the Pons and Hookr factory addresses for ten-minute windows, persist the window across
Worker isolates, and copy the latest count into `/pulse.json`. The public feed is rate-limited and
not recommended as production infrastructure, so reconnection, cursor continuity and missed-window
behavior need fixtures before that counter can be reader-facing.
