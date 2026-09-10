---
name: rh-account-desk
description: >
  Score Robinhood Chain X accounts as sources for Proofline: follow vs scrape, listen weight,
  signal/reach/trust, engagement quality, conflicts, neutral flags. Use when rating KOLs, building a
  follow list, deciding who can trend, recording handle or contract-address collisions, or
  /rh-account-desk. Output is proposals inside the round's packet. Does not score protocols. Does not
  write content/accounts.yaml. Does not remove people from the map.
---

# Account desk

First read `AGENTS.md` and `docs/ingestion.md` from current GitHub main. Account work is a bounded
subtask of an explicit assignment, not a reason to restart loops or reread every account. Record
only materially supported changes; unchanged checks produce an issue note, not a new packet.

Canonical tiers: `content/accounts.yaml` in `/Users/harsharnsingh/proofline` (compiler-owned; you
never edit it). Prior scores: `research/inbox/account-desk.yaml` (historical, read only). Contract:
`docs/research-system.md` §5 (account proposals) and §7 (conduct).

You are scoring the account as a source, not the human and not the protocol.

## Procedure

1. Read `content/accounts.yaml`, the latest scout dump, and `account-desk.yaml` for prior scores. Use
   grep and read_file. Do not invent handles.
2. For each handle you touch, set every axis you can support. Unscored axes stay omitted, never
   guessed as 5.
3. `trust` defaults to 1 unless we have reproduced a number the account posted.
4. Builders (`conflict: team`) may be `follow: true` and `listen: high` for mechanism text. Their TVL
   and market-cap claims stay `class: claim`.
5. Copypasta claim portals, wrong-chain addresses, handle collisions: `listen: skip-ingest` plus a flag
   with a receipt. Keep the row.
6. Trending-eligible only if `role` is `alpha` or `kol` and `listen: high`.
7. Hand every change to the compiler seat as packet claims: field `account.<handle>.<axis>`, value,
   receipt ids. A flag is field `account.<handle>.flag` with one of the six flag values and a receipt.
   Never write YAML into `content/` or `research/inbox/account-desk.yaml`.

## Axes

- `role`: project · builder · alpha · kol · data · infra · media
- `follow`: true · false
- `listen`: high · medium · low · mute-trend · skip-ingest
- `signal`, `reach`, `trust`: 0 to 5
- `engagement`: organic · mixed · repetitive · automated
- `conflict`: none · bag · team · paid · unknown
- `flag`: handle-collision · unconfirmed-official · third-party-link · copypasta-pattern ·
  wrong-chain · ca-collision, each with `evidence: <post id or URL>, <date>`

## Good vs bad (KOL and alpha)

**Promote listen high** when the post names a machine, cites the address and the chain, and we later
match it on DefiLlama, Blockscout or official docs.

**Mute-trend** high-reach accounts that only post ticker lists or slogans.

**skip-ingest** with a flag: a handle collision (`@ArrowFinanceHQ` vs `@ArrowFinanceio`), a wrong seeded
handle (`@RHDaily_` vs `@RHDaily__`), a third-party link domain, a contract-address collision presented
as official. Each with the post id or URL and the date.

Reach without signal is not alpha. Signal without reach is still `follow: true`.

## Engagement

`organic`: replies are about the product, not raid text. `mixed`: some raid text, some substance.
`repetitive`: identical replies, giveaway loops, follow-for-follow. `automated`: claim or portal
posts at machine cadence.

Do not treat view count as quality.
