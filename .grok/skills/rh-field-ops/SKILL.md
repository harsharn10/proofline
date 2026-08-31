---
name: rh-field-ops
description: >
  Run a Robinhood Chain (RH, chain 4663) field round for Proofline: X scout,
  specialist children, account desk, collision audit, compile to research/inbox,
  push only research/ecosystem-baseline. Use when mining RH names, filling the
  ecosystem map, running the research desk, or the user says keep looping /
  /rh-field-ops. Do not write content/ or checkout site.
---

# RH field ops

Repo worktree: `~/proofline-research` on `research/ecosystem-baseline`.
If the main checkout is on `site`, do not use it. Never `content/`. Never origin/site.

Read `research/inbox/2026-08-31-ops.md` once per session. Account scores live in `research/inbox/account-desk.yaml` (skill `rh-account-desk`).

## Seats (do not collapse)

1. **Scout (you, if you have X tools).** `x_keyword_search` mode Latest. Query the follow list (`follow: true` in account-desk) plus **one gap query** for names not on `ecosystem-map.yaml`. Dump handles, CAs, claimed machines. Do not compile yet.
2. **Spawn in parallel** (children have files + web, **not** X):
   - **Chain:** Llama DEX/TVL for Robinhood Chain. Numbers only with source URL.
   - **Account desk:** score new handles from the scout dump. Skill `rh-account-desk`.
   - **Collision:** confirm Hookr ≠ HookOS ≠ WTH ≠ STORMM ≠ Delta ≠ MaxFi ≠ Arrow ≠ Arrows ≠ SCOPL.
   - **Auditor:** fail-closed on CAs. Wrong chain, drainer domains, copy-paste portals → `skip-ingest`, do not file as official.
3. **Compiler (after the four return).** One `research/inbox/YYYY-MM-DD-x-fill-N.md`. Patch map + accounts + desk. One commit. `git push origin research/ecosystem-baseline`.
4. Start the next scout query in the same turn. Do not recap-and-stop.

If you do **not** have X tools, skip seat 1 and run the workflow `.grok/workflows/rh-field-round.rhai` on the last fill.

## Hard rules

- Coverage classes stay subject / dependency / observe / graduation. Do not auto-file pad outputs as subjects.
- No Proofline project scores here. No skip-list of *people*. `skip-ingest` is operational (impersonator, drainer, wrong-chain).
- Official project posts are `kind: company`. They never vote on trending.
- Prefer Latest over Top. Cite post id + handle + time.
- Git: stash/ignore `site/`. Worktree only.

## Output shape

Fill file: machines touched, new handles, CAs with chain, desk score changes, still-open gaps. Machine card from ops.md if any of those names appear.
