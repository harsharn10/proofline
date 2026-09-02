# Grok Heavy assignment: seed packets, batch 1

Status: kicked off 2026-09-02 on branch `grok-heavy/20260902/WORK-20260902-grok-heavy-seed-batch-1`. Commit packets to this branch; the draft PR is already open.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-seed-batch-1
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: seed
owned_slugs:
  - hedge
  - arc
  - scalar
  - bricks
  - floor
  - sluice
  - twofold
  - v4fun
  - hooded-meme
  - canopy
  - mosaicetf
  - rallypad
  - robinpad
  - giga
  - ramsesx
  - alandale
  - orvex
  - ekubo
  - native-credit-pool
  - accountable
  - termmax
  - token-select
  - flap
  - t3tris
  - dexfi
  - privacy-cash
  - clan-tech
  - ctrl-fi
  - hookos
  - hoodies
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-grok-heavy-seed-batch-1.md   # one file per owned slug, thirty files
forbidden_paths:
  - content/**
  - docs/**
  - schema/**
  - scripts/**
  - site/**
  - ops/**
```

## Objective

Thirty names have been named but never researched: the thirteen round-22 candidates and seventeen
net-new p0/p1 names from your own inventory. Write one seed-tier packet per name. A seed packet
establishes identity, classification, lifecycle, links, the four qualifying tests and what is known
about deployment, each with a receipt. It does not need a narrative beyond one paragraph.

## Required reading

1. This file, then `research/inbox/assignments/WORK-20260902-grok-heavy-full-batch-1.md` § Output for the frontmatter skeleton, the claim field list and the address record.
2. `docs/taxonomy.md` §3 (leaf table) and §5 (classification rules).
3. `content/census.yaml`: the 49 canonical rows you dedupe against. Names, aliases, handles, domains, and every address in `content/projects/*.yaml`.
4. `research/inbox/2026-08-31-census-candidates.yaml` (the thirteen) and `research/inbox/grok-2026-09-01/name-inventory.yaml` (your inventory, with receipts). Carry each inventory receipt forward as a new `R-` id in the packet it supports.

## The thirty names

Round 22 (thirteen). Leaf is the placement on file; confirm or correct it.

| Slug | Name | Handle | Leaf on file |
|---|---|---|---|
| hedge | Hedgehogs | @HedgeOnHood | nft-treasury/token-bound-nft |
| arc | Arc | @ArcLiquidity | credit/isolated-money-market |
| scalar | Scalar | @scalarliquidity | yield/allocator |
| bricks | bricks | @brickswalltech | yield, leaf not placed |
| floor | Floor | @Floor_fi | rwa-products/tax-distributor |
| sluice | Sluice | @sluice_rh | yield, leaf not placed |
| twofold | TwoFold | @twofoldfi | yield/lp-manager |
| v4fun | v4.fun | @v4dotfun | launch/hook-programmable |
| hooded-meme | Hooded.Meme | @HoodedDotMeme | launch, leaf not placed |
| canopy | Canopy | @canopyfinance | launch/uni-pool-launch |
| mosaicetf | MosaicETF | @MosaicETF | rwa-products, leaf not placed |
| rallypad | Rallypad | @rallypadfun | launch/other-pad |
| robinpad | RobinPad | @Robin_Pad | launch, leaf not placed |

Net-new p0/p1 from the inventory (seventeen). Leaf is your own proposal; confirm it exists in
`docs/taxonomy.md` §3 or set `null` and file a gap.

| Slug | Priority | Handle | Domain | Leaf proposed |
|---|---|---|---|---|
| giga | p0 | @giga_dex | gigadex.fi | trading/amm-native |
| ramsesx | p0 | @RamsesExchange | ramses.xyz | trading/amm-imported |
| ekubo | p0 | @EkuboProtocol | ekubo.org | trading/amm-imported |
| native-credit-pool | p0 | @native_fi | native.org | credit/isolated-money-market |
| accountable | p0 | @AccountableData | accountable.capital | credit/uncollateralized |
| alandale | p1 | @alandalexyz | none found | trading/amm-native |
| orvex | p1 | @OrvexFi | none found | trading/amm-native |
| termmax | p1 | @TermMaxFi | ts.finance/termmax | credit/lending-primitive |
| token-select | p1 | @selectfdn | token.select | launch/other-pad |
| flap | p1 | @flapdotsh | none found | launch/other-pad |
| t3tris | p1 | @0xT3tris | t3tris.finance | yield/allocator |
| dexfi | p1 | @DexFinance | dexfi.com | yield/allocator |
| privacy-cash | p1 | @theprivacycash | privacycash.org | privacy/private-transfer |
| clan-tech | p1 | @clantechapp | none found | not placed |
| ctrl-fi | p1 | @JoinCtrlFi | none found | launch/other-pad |
| hookos | p1 | @hookosfun | none found | launch/hook-programmable |
| hoodies | p1 | none found | none found | nft-treasury/token-bound-nft |

Not in this batch. Twelve p0/p1 inventory rows carry `ecosystem_role: dependency` (gami-labs,
fusion-ipor, d2-finance, morpho, steakhouse, lighter, uniswap, chainlink, usdg, layerzero, spark,
stock-tokens); dependencies get cards under `content/dependencies/`, not census rows, and the
controller handles them. Three possible-match rows (arrowpad-fun against arrow, pools-fun against
pools-trade, stormm against stonkbroker) and arcus wait for a controller identity ruling. Evidence that
settles one of those belongs in the canonical slug's next update packet, not here.

## Output

One file per slug at `research/inbox/packets/<slug>/WORK-20260902-grok-heavy-seed-batch-1.md`.
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

Branch: `grok-heavy/20260902/WORK-20260902-grok-heavy-seed-batch-1` from `base_sha`. One PR with
thirty files. If the run is split, two branches and PRs: the same name with `-round22` and `-netnew`
appended; the packets' `work_id` does not change.

PR title: `WORK-20260902-grok-heavy-seed-batch-1: seed packets for 30 names`.

PR body: the YAML header from the top of this file, then a table with one row per slug: lifecycle,
leaf, qualifying tests passed (n of 4), addresses reproduced, possible matches. Then the names that
turned out to be duplicates, with the canonical slug and the signals. Then the names with no direct
receipt, which should be none. End with "Only the thirty allowed paths were added."

Do not merge, enable auto-merge, mark ready, or touch any other path. Do not edit `content/census.yaml`
or create any file under `content/`. Commit trailer: `Producer: grok-heavy`.
