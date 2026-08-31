---
name: rh-account-desk
description: >
  Score Robinhood Chain X accounts as sources for Proofline: follow vs scrape,
  listen weight, signal/reach/trust, engagement quality, conflicts, flags.
  Use when rating KOLs, building a follow list, deciding who can trend, tagging
  impersonators or drainers, or /rh-account-desk. Does not score protocols.
  Does not blacklist people off the map.
---

# Account desk

Ledger: `research/inbox/account-desk.yaml`. Rubric: `research/inbox/2026-08-31-ops.md` §4.

You are scoring the **account as a source**, not the human and not the protocol.

## Procedure

1. Read the ledger and the latest `x-fill-*.md`. Use grep/read_file. Do not invent handles.
2. For each handle you touch, set every axis. Unscored axes stay omitted, never guessed as 5.
3. `trust` defaults to 1 unless we have reproduced a number they posted.
4. Builders (`conflict: team`) may be `follow: true` and `listen: high` for mechanism text. Their TVL/mcap claims stay unverified.
5. Copypasta claim-portals, wrong-chain CAs, impersonators → `listen: skip-ingest` + a flag. **Keep the row.**
6. Trending-eligible only if `role` is `alpha` or `kol` AND `listen: high`.
7. Write yaml only. Do not edit `content/`.

## Good vs bad (KOL / alpha)

**Promote listen high** when the post names a machine, cites CA **and** chain, and we later match it on Llama/Blockscout/official.

**Mute-trend** high-reach accounts that only say send-it / szn / bag lists.

**skip-ingest** impersonators (`@ArrowFinanceHQ` vs `@ArrowFinanceio`), wrong seeded handles (`@RHDaily_`), drainer domains, CA collisions used as “official.”

Reach without signal is not alpha. Signal without reach is still `follow: true`.

## Engagement

`organic` — replies are about the product, not raid text.
`mixed` — some raids, some substance.
`farm` — identical replies, giveaway loops, follow-follow.
`bot` — automated claim/portal spam.

Do not treat view-count as quality.
