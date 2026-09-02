# Grok Heavy assignment: seed packets, batch 2

Status: kicked off 2026-09-02 on branch `grok-heavy/20260902/WORK-20260902-grok-heavy-seed-batch-2`. Commit packets to this branch; the draft PR is already open.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-seed-batch-2
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: seed
owned_slugs:
  - deepstate
  - sharewoods
  - usdax
  - sentry
  - coinbarrel
  - basedbid
  - peeps
  - raisehood
  - based-alpha
  - boardwalk
  - slvr
  - stockrip
  - saffron
  - ezmanager
  - hoodbets
  - robinpad-meme
  - fomo-venue
  - obsidian-swap
  - prism-assets
  - vantis
  - kipseli
  - liquidcore
  - sectorone
  - gluehook
  - robinswap
  - hood-index
  - townsquare
  - rialto
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-grok-heavy-seed-batch-1.md   # one file per owned slug, 28 files
forbidden_paths:
  - content/**
  - docs/**
  - schema/**
  - scripts/**
  - site/**
  - ops/**
```

## Objective

The second seed batch: the 28 priority-2 names from your 2026-09-01 inventory that batch 1 did not
cover. Same job as batch 1: one seed-tier packet per name that establishes identity, classification,
lifecycle, links, the four qualifying tests and what is known about deployment, each with a receipt.
Batch 1 (WORK-20260902-grok-heavy-seed-batch-1) must be open or merged before this one starts, so its
dedupe results are on file.

## Required reading

1. This file, then `research/inbox/assignments/WORK-20260902-grok-heavy-seed-batch-1.md` in full: the
   thirty names it owns are not yours, and its Output and Rules sections apply here unchanged.
2. `research/inbox/assignments/WORK-20260902-grok-heavy-full-batch-1.md` § Output for the frontmatter
   skeleton, the claim field list and the address record.
3. `docs/taxonomy.md` §3 (leaf table), §4 (reader-facing sections) and §6 (classification rules).
4. `content/census.yaml` and every address in `content/projects/*.yaml`, plus every packet already
   under `research/inbox/packets/`, for dedupe.
5. `research/inbox/grok-2026-09-01/name-inventory.yaml`: your inventory, with receipts. Carry each
   inventory receipt forward as a new `R-` id in the packet it supports.

## The 28 names

Leaf and role are the inventory's own proposals; confirm or correct them against the evidence.
`launch/other-pad` is a holding pen: keep it only when the pad's mechanism is still unknown after you
looked, and say what you looked at.

| Slug | Name | Handle | Domain | Leaf proposed | Role proposed |
|---|---|---|---|---|---|
| deepstate | Deepstate | @josephdelong | deepstate.sh | trading/amm-native | observe |
| sharewoods | Sharewoods | @SharewoodsFi | app.sharewoods.xyz | credit/rwa-lending | observe |
| usdax | USDAX Finance | @Usdax_Finance | none found | credit/cdp | observe |
| sentry | Sentry | @sentrylauncher | none found | launch/other-pad | observe |
| coinbarrel | Coinbarrel | @UseCoinbarrel | none found | launch/other-pad | observe |
| basedbid | basedbid | @basedbidx | none found | launch/other-pad | observe |
| peeps | Peeps | @peepsdotwtf | none found | launch/other-pad | observe |
| raisehood | RaiseHood | @RaiseHood | www.raisehood.xyz | launch/other-pad | observe |
| based-alpha | Based Alpha | @BasedOneX | alpha.based.one | launch/other-pad | observe |
| boardwalk | Boardwalk | @useboardwalk | www.useboardwalk.com | launch/other-pad | observe |
| slvr | SLVR | @S_L_V_R_FUN | none found | yield/gamified-mining | observe |
| stockrip | StockRip | @stockripx | stockrip.com | yield/gamified-mining | observe |
| saffron | Saffron Vaults | @saffron | saffron.finance | yield/savings-vault | dependency |
| ezmanager | EZManager | @EZManagerCL | ezmanager.finance | yield/lp-manager | observe |
| hoodbets | Hoodbets | @hoodbetsxyz | none found | markets/prediction | observe |
| robinpad-meme | RobinPAD_MEME | @RobinPAD_MEME | none found | launch/other-pad | observe |
| fomo-venue | FOMO venue | none found | fomo.family | trading/aggregator | observe |
| obsidian-swap | ObsidianSwap | @ObsidianSwap | none found | chain-infra/bridge | observe |
| prism-assets | Prism Assets | @prismassets | none found | rwa-products/synthetic-asset | observe |
| vantis | Vantis | @vantis_ai | none found | tooling/machine-payments | observe |
| kipseli | Kipseli | none found | none found | trading/amm-native | observe |
| liquidcore | LiquidCore | @LiquidLaunchHL | liqd.ag | trading/amm-native | observe |
| sectorone | SectorOne DLMM | @SectorOneDEX | sectorone.xyz | trading/amm-native | observe |
| gluehook | GlueHook | @GlueFinance | gluehook.trade | trading/hook-mev | observe |
| robinswap | RobinSwap | @RobinSwap_ | www.robinswap.finance | trading/amm-native | observe |
| hood-index | Hood Index | @hMAG7index | none found | rwa-products/index-vault | observe |
| townsquare | TownSquare RWA Vaults | @TownSquarexyz | app.townsq.xyz | yield/savings-vault | observe |
| rialto | Rialto | none found | none found | trading/prop-amm | dependency |

Not in this batch: the 57 inventory rows at priority `observe`. Most are launchpad-graduated tokens,
execution frontends, media accounts or placeholders; per TAX-GROK-003 and TAX-GROK-005 they get no
product leaf and no census row until a mechanism is shown. Graduation tokens that are still trading get
a Tokens-section row later through the weekly update packets of their launchpad, not a seed packet.

## Output

One file per slug at `research/inbox/packets/<slug>/WORK-20260902-grok-heavy-seed-batch-2.md`.
Frontmatter is required. The body is optional except `## What it is`: one paragraph, mechanism first,
which becomes the site summary.

Seed frontmatter is the full-batch skeleton with `packet_tier: seed`, `owned_slugs: [<slug>]`,
`allowed_paths: [<this file's path>]`, and these blocks required: `identity`, `classification`,
`qualifying`, `links`, `deployments` (may be `[]`), `claims`, `receipts`, `gaps`. `reproductions`,
`metrics`, `conflicts` and `events` may be `[]`.

Minimum per packet:

- `identity.possible_matches` checked against census names, aliases, handles, domains, repositories and every address in `content/projects/*.yaml`. A ticker alone is never a match. A collision is a `possible_matches` entry with signals and a note, not a merge and not a new slug.
- `classification.primary_leaf` from `docs/taxonomy.md` §3, or `null` plus a gap. `lifecycle` by the mainnet bar. `ecosystem_role` by what the evidence shows, not by the inventory's guess.
- `qualifying`: four tests, each `pass|fail|unknown`, with claim ids on pass or fail.
- `links`: every official surface found, `authenticity: confirmed` only when site, handle and docs cross-link.
- `deployments`: every address the project or its docs publish, as the six-field record. `exists_on_4663` is flipped only by your own explorer or RPC check.
- One claim per research area you could check (identity, product, deployment, control, security, team, economics, activity, communications), and one gap per area you could not, saying what was searched.
- `receipts`: a direct URL for every claim. An inventory row is not a receipt; the URL it cites is.

Slug rules: lowercase kebab-case; the `proposed_slug` from the inventory or the candidates file unless
it collides. Distinct products with separate control planes or separately addressable deployments
stay separate packets.

## Rules

- Evidence class. `verified` only with your own `REP-`. A post, a bio, a directory row or a DefiLlama row is `claim`. Disagreeing sources are `disputed` with a `CON-` record. `unknown` carries no receipts.
- Mainnet bar. `lifecycle: mainnet` needs a deployment with `exists_on_4663: true` backed by an explorer receipt or an `explorer-rpc` reproduction, or official docs that publish a chain 4663 address. A post alone is `announced`. Unknown is allowed in a seed packet; say what would settle it.
- No conduct words. Never `impersonator`, `drainer`, `scam`, `rug`, `farm`, `self-trend` or any verdict on intent. Use `handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision`, each with a receipt.
- Field ownership. No scores, no `review.approver`, no `coverage`, no changelog text, no channel decision. `channel_recommendation` stays `not-evaluated`.
- Dedupe. Never merge on display name, logo, ticker or bio wording. Two records are the same entity only when two strong identifiers agree and one is reproduced (domain and handle link to each other; shared verified deployment or deployer; same repository and chain; an explicit migration notice).
- Numbers. Value, unit, window, as-of, method, receipt, or no number.

## Completion and PR rules

Branch: `grok-heavy/20260902/WORK-20260902-grok-heavy-seed-batch-2` from `base_sha`. One PR with
28 files. If the run is split, two branches and PRs: the same name with `-round22` and `-netnew`
appended; the packets' `work_id` does not change.

PR title: `WORK-20260902-grok-heavy-seed-batch-2: seed packets for 28 names`.

PR body: the YAML header from the top of this file, then a table with one row per slug: lifecycle,
leaf, qualifying tests passed (n of 4), addresses reproduced, possible matches. Then the names that
turned out to be duplicates, with the canonical slug and the signals. Then the names with no direct
receipt, which should be none. End with "Only the 28 allowed paths were added."

Do not merge, enable auto-merge, mark ready, or touch any other path. Do not edit `content/census.yaml`
or create any file under `content/`. Commit trailer: `Producer: grok-heavy`.
