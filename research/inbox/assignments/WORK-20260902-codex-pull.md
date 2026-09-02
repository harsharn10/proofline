# Codex assignment: scripts/pull.mjs

Status: assigned. Open a draft PR from the branch named at the end of this file and keep it in draft.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-codex-pull
producer: codex
role: compiler
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: full
owned_slugs: []
allowed_paths:
  - scripts/pull.mjs
  - scripts/lib/pull.mjs
  - schema/pulled.schema.json
  - scripts/lib/schemas.mjs
  - scripts/test-pull.mjs
forbidden_paths:
  - content/**
  - docs/**
  - research/inbox/**
  - site/**
  - ops/**
```

## Objective

Write `scripts/pull.mjs`, the one script that reproduces chain facts and third-party figures instead
of a researcher typing them. For every census slug with a located address, it calls Blockscout, the
chain RPC, and DefiLlama, and writes `content/pulled/<slug>.yaml`: machine-owned, dated, never
hand-edited. This is the cheapest large gain in the whole product — every address on file can be
verified by one API call each, and today only pons has been.

## Required reading

1. This file's Output section.
2. `docs/research-system.md` §7 (evidence strength — a Blockscout or RPC read is the strongest class
   there is) and §8 (stable ids; not directly used here, but read for context).
3. `content/projects/pons.yaml` `deployments[]` and its `scoring.security` notes: the shape of the facts
   a human once collected by hand for one project (`owner()`, `getThreshold()`, `getOwners()`, verified
   source, holder count, creation block) that this script now automates for every project.
4. `schema/shared.schema.json` `$defs/address`, `$defs/chain`, `$defs/role` — reuse these vocabularies.
5. Every `content/projects/*.yaml`'s `deployments[]` (the addresses to pull) and `metrics[].sources`
   (to find a DefiLlama slug: look up each cited `S<n>` in `content/sources/<slug>.yaml`; any entry
   whose `url` contains `defillama.com/protocol/<llama-slug>` or `api.llama.fi/protocol/<llama-slug>`
   names that project's Llama slug — see pons's `S7`, `url: https://defillama.com/protocol/pons`).

## Output

`scripts/pull.mjs [--slug <slug>] [--dry-run]`. With no `--slug`, runs every census slug that has at
least one `deployments[]` address that is not the literal `not-verified`. `--dry-run` prints what it
would write and does not touch disk.

For every address: Blockscout API v2 at `https://robinhoodchain.blockscout.com/api/v2/addresses/<addr>`
for `is_contract`, verified-source flag, and creation tx/block; the token-holder-counters endpoint when
the address is a token; the RPC at `https://rpc.mainnet.chain.robinhood.com` (JSON-RPC `eth_call`) for
`owner()` (selector `0x8da5cb5b`) and, when the owner resolves to a contract, `getThreshold()`
(`0xe75235b8`) and `getOwners()` (`0xa0e67e2b`); `eth_getStorageAt` for the EIP-1967 implementation slot
(`0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`) and admin slot
(`0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`).

For every project with a discovered Llama slug: `https://api.llama.fi/protocol/<llama-slug>` for
chain-slice TVL (never the all-chain total).

`content/pulled/<slug>.yaml`, validated by a new `schema/pulled.schema.json` you write:

```yaml
slug: pons
pulled_at: 2026-09-02T14:00:03Z          # this run, always overwritten whole-file
chain: robinhood-chain
addresses:
  - address: "0x39dBED3a2bd333467115dE45665cC57F813C4571"
    label: "PONS token (PonsLauncherToken)"   # copied from the matching project deployment label, else null
    is_contract: true
    verified_source: true
    creation_tx: "0x..."
    creation_block: 8600612
    holder_count: 56000                        # token addresses only, else omitted
    owner: { value: "0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd", is_contract: true }
    threshold: 2                                # only when the owner is a contract and the call succeeds
    signers: ["0x...", "0x...", "0x..."]
    implementation_slot: "0x0000000000000000000000000000000000000000000000000000000000000000"
    admin_slot: "0x0000000000000000000000000000000000000000000000000000000000000000"
    source: blockscout+rpc                      # blockscout+rpc | rpc-only | failed
    checked_at: 2026-09-02T14:00:03Z
metrics:
  - kind: tvl
    llama_slug: pons
    value: 9208000
    window: point
    as_of: 2026-09-02
    endpoint: "https://api.llama.fi/protocol/pons"
    fetched_at: 2026-09-02T14:00:05Z
errors:
  - address: "0x0c37a24F5D23A486FA692d1500881d698B1F77a4"
    step: blockscout
    reason: "429 after 3 retries"
```

`schema/pulled.schema.json`: `additionalProperties: false` at every level; required top-level
`slug, pulled_at, chain, addresses, metrics, errors` (the last three may be `[]`); `address` uses
`shared#/$defs/address`; `source` is `blockscout+rpc|rpc-only|failed`.

## The Cloudflare fallback

Blockscout's UI and some API routes sit behind Cloudflare bot protection and can return a challenge
page instead of JSON from a sandboxed or CI environment. Detect this (a non-JSON body, or a 403 with a
Cloudflare-branded page) and fall back to RPC-only for that address: `eth_getCode` to confirm it is a
contract, plus the `owner()`/proxy-slot reads above, with `source: rpc-only`. Never fail the whole run
over one blocked address — record it and continue. Document this fallback in a comment at the top of
`scripts/pull.mjs` so a future run in a different network environment knows why some rows say
`rpc-only`.

## Rules

- Machine-owned. Every file is fully regenerated each run (`pulled_at` always advances); nothing here
  is ever hand-edited, and no packet or project file may cite a `content/pulled/` value as its own
  evidence — a packet cites the same Blockscout/RPC/DefiLlama receipt directly.
- Rate limit: no more than 4 requests per second per host, with a fixed delay between calls, and
  exponential backoff (3 attempts) on 429 or 5xx.
- Fail per address, not per run: one bad read goes to `errors[]` with a reason; the script always exits
  0 after writing what it could, unless every single address for the run failed.
- `--slug` filters to one census slug for fast iteration and testing.
- Never write a number without its method, window and as-of, matching the metric shape used everywhere
  else in this repo.

## Completion and PR rules

Branch: `codex/20260902/WORK-20260902-codex-pull` from `base_sha`.

PR title: `WORK-20260902-codex-pull: scripts/pull.mjs`.

PR body: the YAML header from the top of this file, then: what the script does in five lines, how the
Cloudflare fallback was tested (mocked response, since the review environment may not have live network
access — say so plainly if you could not test against the live endpoints), the schema, and the output
of `node scripts/test-pull.mjs`. End with "Only the five allowed paths were added; no `content/pulled/`
file was committed."

Do not merge, enable auto-merge, mark ready, or touch any other path. Do not commit any real
`content/pulled/<slug>.yaml` output in this PR — a controller runs the script after merge. Commit
trailer: `Producer: codex`. `automerge-feed.yml` will comment "needs controller review" on this PR since
it touches `scripts/` and `schema/` — expected for every Codex tooling PR.
