# Grok Heavy assignment: weekly update packets for the mainnet names

Status: assigned, standing. This is a weekly run. The first run uses the work id below. Each later run
uses a new work id with that week's date, `WORK-<YYYYMMDD>-grok-heavy-weekly-update`, and its own
branch; this file stays as the standing instruction.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-weekly-update
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: update
owned_slugs: [pons, stonkbroker, index, arrow, meridian, vimen, up, fables, noxa, virtuals, delta, snuggle, sherwood, what-the-hook, swaphood]
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-grok-heavy-weekly-update.md   # one file per changed slug
forbidden_paths:
  - content/**
  - docs/**
  - schema/**
  - scripts/**
  - site/**
  - ops/**
```

## Objective

Replace the frozen 2026-08-31 feed. Each week, for each of the fifteen mainnet names, file an update
packet that carries only what changed since the last run: dated events with `EVT-` ids, metric
deltas with an as-of, and the receipts for both. Skip a slug with no change and say so in the PR body.
You no longer write `content/feed/`; the compiler writes feed items from your events.

## Required reading

1. This file, then `research/inbox/assignments/WORK-20260902-grok-heavy-full-batch-1.md` § Output for the frontmatter skeleton and the claim field list.
2. Per slug: `content/feed/<slug>.yaml` (the items on file, frozen at 2026-08-31), the `metrics` block in `content/projects/<slug>.yaml`, the slug's entries in `content/changelog.yaml`, and any packet under `research/inbox/packets/<slug>/` newer than the feed.
3. `content/accounts.yaml`: which handles are official, watch, top or downweight. A post from a downweight account is a `ct` or `risk` event that names the tier, never a `company` event.

## Window

This run: events dated after `2026-08-31T00:00:00Z` up to your `as_of`. Later runs: after the previous
packet's `as_of` for that slug. State both bounds in the Operations log of every packet.

## The fifteen names

| Slug | Name | Handle | Metrics on file, all as of 2026-08-31 |
|---|---|---|---|
| pons | Pons | @ponsdotfamily | fees_24h, revenue_24h, volume_24h (defillama.com/protocol/pons) |
| stonkbroker | StonkBrokers | @ClutchMarkets | tvl, fees_24h, revenue_24h |
| index | The Index | @TheIndexFi | revenue_24h |
| arrow | Arrow Finance | @ArrowFinanceio | none |
| meridian | Meridian | @meridiandotxyz | none; DefiLlama lists two TVL rows per the census |
| vimen | Vimen | @vimenprotocol | tvl |
| up | up | @uponrh | volume_24h, revenue_24h; DefiLlama up-v2 and up-v3 |
| fables | Fables | @fablesfi | tvl, volume_24h |
| noxa | NOXA Fun | @Noxa_Fi | tvl, fees_24h, revenue_24h |
| virtuals | Virtuals Protocol | @virtuals_io | revenue_24h |
| delta | Delta | @deltaliquidity | tvl |
| snuggle | Snuggle | @SnuggleFi | tvl, revenue_24h |
| sherwood | Sherwood | @sherw00d_cash | tvl |
| what-the-hook | What The Hook | @whatthehookv4 | none |
| swaphood | SwapHood | @SwapHoodFi | none |

## Output

One file per changed slug at `research/inbox/packets/<slug>/WORK-20260902-grok-heavy-weekly-update.md`.

Frontmatter is the full-batch skeleton with:

```yaml
packet_tier: update
supersedes: <work_id of the newest packet under research/inbox/packets/<slug>/, or null when the prior state is content/>
prior_packet: <that packet's path, or content/projects/<slug>.yaml@<base_sha>>
```

Required blocks: `events` (at least one, or the slug is skipped), `receipts`, `claims` for every value
that changed (`supersedes: <the S-id or CLM-id being replaced>`), `metrics` for every figure
re-pulled. Include `identity`, `classification` or `qualifying` only when one of them changed.
Include `deployments` only for new addresses. Include `gaps` for checks that failed this week.

```yaml
events:
  - id: EVT-1
    type: company                # company: the project's own post | ct: third-party commentary | onchain: explorer, RPC or aggregator observation | risk: wrong-chain address, ticker collision, unverified claim
    title: "v2 creator allowlist opened"          # 90 characters or fewer, written for a reader
    summary: "The account posted on 3 Sep that any creator can now launch on v2; the docs page still says allowlisted."   # 400 characters or fewer
    occurred_at: 2026-09-03T18:20:00Z
    observed_at: 2026-09-04T09:00:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claimed      # verified|claimed|conflicted
    impact: material              # routine|material|urgent
    site_recommendation: profile  # feed|profile|both|none
    channel_recommendation: none  # none|review
    receipt_ids: [R-2]
metrics:
  - { kind: volume_24h, value: 41200000, currency: USD, as_of: 2026-09-07, window: 24h, method: "api.llama.fi/summary/dexs/pons?dataType=dailyVolume total24h", class: claim, receipt_ids: [R-5] }
```

Metrics: use the same DefiLlama endpoint as the prior value so deltas compare like with like
(`api.llama.fi/protocol/<slug>` chain-slice TVL; `summary/fees/<slug>?dataType=dailyFees`;
`summary/dexs/<slug>?dataType=dailyVolume`). Add `holders` from Blockscout token counters for every
slug whose token address is on file. Record window, method and as-of on every row.

Event rules: one event per fact, not per post; a repost is not an event; a number an account posted is
a `company` event with the number in the summary as posted, never a metric; a metric comes only from an
aggregator or a chain read. An event that contradicts a value in `content/` also gets a claim and an
open `CON-` record.

Body: optional. If present, only `## Verification passes` and `## Operations log`.

## Rules

- Cadence. Weekly, Monday, `as_of` in the header. A slug with no event and no metric change is not filed; list it in the PR body as skipped.
- Evidence class. `verified` only with your own `REP-`. Posts and aggregator rows are `claim`. Disagreement is `disputed` with a `CON-` record.
- Mainnet bar. Unchanged. An update packet never demotes or promotes lifecycle on its own; it files the claim and the conflict and lets the controller decide.
- No conduct words. Never `impersonator`, `drainer`, `scam`, `rug`, `farm`, `self-trend` or any verdict on intent. Use `handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision`, each with a receipt.
- Field ownership. No scores, no `review.approver`, no `coverage`, no changelog text, no feed file, no channel decision. `channel_recommendation` is `not-evaluated` or `pending`.
- Numbers. Value, unit, window, as-of, method, receipt, or no number.

## Completion and PR rules

Branch: `grok-heavy/20260902/WORK-20260902-grok-heavy-weekly-update` from `base_sha`. One PR per
week containing every changed slug.

PR title: `WORK-20260902-grok-heavy-weekly-update: update packets for mainnet names, week of 2026-09-01`.

PR body: the YAML header from the top of this file, then a table with one row per slug: events filed
by type, metrics re-pulled, values that changed, or the word skipped with a reason. Then every `risk`
event in one line each. Then reads that failed. End with "Only packet paths under
research/inbox/packets/ were added."

Do not merge, enable auto-merge, mark ready, or touch any other path. Do not edit `content/feed/`,
`content/changelog.yaml` or any canonical file. Commit trailer: `Producer: grok-heavy`.
