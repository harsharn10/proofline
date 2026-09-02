# Grok Heavy assignment: discovery round 1

Status: assigned. Open a draft PR from the branch named at the end of this file and keep it in draft.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-discovery-1
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T07:00:00Z
packet_tier: seed
owned_slugs:
  - discovery-inventory
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260902-grok-heavy-discovery-1.md
forbidden_paths:
  - content/**
  - docs/**
  - schema/**
  - scripts/**
  - site/**
  - ops/**
```

## Objective

Find the Robinhood Chain (chain 4663) names that are in none of the places Proofline already knows:
not in `content/census.yaml`, not in your 2026-09-01 inventory (`research/inbox/grok-2026-09-01/
name-inventory.yaml`), not in any packet under `research/inbox/packets/`. Deliver them as one seed
packet with `slug: discovery-inventory`, one claim per name, so the controller can pick the ones that
get their own seed packet in the next batch. This is discovery, not research: a name with a direct
receipt and an honest match check is the whole job.

## Required reading

1. `docs/research-system.md` §5 (packet v2; the last paragraph describes exactly this discovery
   packet) and §7 (evidence, authenticity, conflicts).
2. `docs/taxonomy.md` §3 and §6: propose a leaf per name only when a mechanism is visible; otherwise
   `null` with a gap.
3. `content/census.yaml`, every address in `content/projects/*.yaml`, your inventory, and every packet
   under `research/inbox/packets/` (the directory may still be empty). Everything there is out of scope.

## Where to look

- X: Latest, not Top. The official handles already tracked in `content/accounts.yaml` and their
  replies and quote posts; the `#RobinhoodChain`, `$HOOD`, `chain 4663` and `hoodfi` searches; the
  launchpad accounts (Pons, NOXA, hood.fun, LONG, Safehood, pools.trade, Hookr, Lemon, FoxPad,
  Stonks.fun) for graduations and partner announcements; the account-desk follow list.
- DefiLlama: `https://api.llama.fi/protocols` filtered to chain "Robinhood Chain", and the chain page.
  A Llama row is a lead and a receipt for the row's existence. It is not nativeness and not mainnet.
- Blockscout: the verified-contracts list and the token list at `https://robinhoodchain.blockscout.com`
  if reachable. Contract names and creators are leads; record the URL and the time.
- Official docs: `https://docs.robinhood.com/chain` partner and ecosystem pages, if any.
- Aggregators and directories that list Robinhood Chain projects (DexScreener chain page, hoodfi
  and similar), as `authority: aggregator` receipts.

## Output

One file at `research/inbox/packets/discovery-inventory/WORK-20260902-grok-heavy-discovery-1.md`.
Frontmatter per research-system §5 with `slug: discovery-inventory`, `name: Discovery inventory`,
`packet_tier: seed`, `owned_slugs: [discovery-inventory]`, and:

- `identity`: canonical_name "Discovery inventory", every other field `NULL — inventory packet`.
- `classification`: `primary_leaf: null`, `ecosystem_role: observe`, `lifecycle: unknown`,
  `coverage_recommendation: candidate`, `evidence_state: claimed`, rationale "discovery round".
- `qualifying`: all four `unknown` with the note "inventory packet".
- `claims[]`: one `CLM-n` per name with `field: candidate` and
  `value: <proposed-slug> | <name> | <handle or none> | <domain or none>`, `class: claim`,
  `observed_at`, and at least one `receipt_id`. Add a second claim per name with
  `field: candidate.<proposed-slug>.leaf` when a mechanism is visible, and a third with
  `field: candidate.<proposed-slug>.lifecycle` only when the evidence meets the mainnet bar.
- `identity.possible_matches[]`: one entry per name that resembles a census row, an inventory row or
  a pending packet, with `signals` and `contrary_signals`. A ticker alone is a signal, never a match.
- `receipts[]`: a direct URL per claim with publisher, kind, authority, authenticity and a short
  excerpt. A Llama API response counts (`kind: third-party-data`, `authority: aggregator`).
- `gaps[]`: one `P1` gap per name whose official surface could not be found, saying what was searched.
- `events[]`, `conflicts[]`, `deployments[]`, `metrics[]`: `[]` unless a name came with an address you
  checked; then the six-field address record with the booleans `null` until you check them.

Body: a `## What it is` paragraph stating the search window, the surfaces checked and their limits,
and a `## Operations log` with the dedupe check time and the counts (names found, possible matches,
names with no official surface).

## Rules

- Evidence class. Everything here is `claim` unless you reproduced it on the explorer or by RPC and
  filed a `REP-`. No number without a receipt; no name without a URL.
- Mainnet bar. `lifecycle: mainnet` needs an explorer or RPC receipt, a DefiLlama chain-slice figure,
  or docs publishing a chain 4663 address. A post alone is `announced`. When unsure, leave lifecycle
  out and file the gap.
- No conduct words. Never a verdict about a person, team or account. Flags only from
  `handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain |
  ca-collision`, each with a receipt.
- Scope. Robinhood Chain native or officially launching there. Imported multi-chain infrastructure
  with a chain 4663 deployment is a dependency lead: include it, tag the claim value with
  `| dependency`, and do not propose a leaf.
- Dedupe first. A name already in the census, the inventory or a packet is not a finding. If you
  believe an existing record is wrong, that is a `possible_matches` entry with signals, not a new name.
- Field ownership. No scores, no approval, no conflict resolution, no channel decision.

## Completion and PR rules

Branch: `grok-heavy/20260902/WORK-20260902-grok-heavy-discovery-1` from `base_sha`. One PR, one file.

PR title: `WORK-20260902-grok-heavy-discovery-1: discovery inventory`.

PR body: the YAML header from the top of this file, then the counts from the Operations log, then a
table with one row per name: proposed slug, handle, domain, leaf proposed or null, lifecycle if
claimed, possible match if any. End with "Only the one allowed path was added."

Do not merge, enable auto-merge, mark ready, or touch any other path. Commit trailer:
`Producer: grok-heavy`. Run again only when the controller issues discovery round 2.
