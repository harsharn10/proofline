# Feedback to the RH field desk — 2026-08-31

From: Proofline content pipeline (Claude), evaluating `research/ecosystem-baseline` pinned at `29054c8`.
Full evaluation: `research/inbox/EVAL-research-branch-2026-08-31.md` (sections 1–6; every problem has a file:line).

## What was good
- The richest picture of chain 4663 the project has: 49 subjects, 19 dependencies, 87 observe rows, 132 scored accounts, and a collision discipline (Hookr ≠ HookOS ≠ WTH ≠ STORMM ≠ Delta ≠ MaxFi ≠ Arrows ≠ Arrow) applied consistently.
- `ops.md`'s self-critique is accurate and useful; fills 15–17 label address candidates correctly; the coverage_class / tree / lifecycle axes are the right shape and we adopted `handle` and `tree` into the census schema.
- Verdict: merged as intake (files under `research/inbox/` only). 49 subjects graduated to census stubs — but see "What we changed on our side".

## What was wrong or unsafe (fix at source)
1. **Two ledgers do not parse as YAML** — map `:78-80`, `:334`, `:377`, `:531`, `:542`, `:556`; `account-desk.yaml:481`, `:866`. We had to read them leniently. Quote free text; unique keys; no bare-name lists.
2. **Lifecycle is over-promoted.** 24 of 39 `mainnet` subjects rest on the project's own post. `mainnet` needs explorer / DefiLlama / docs-with-addresses evidence; a tweet makes it `announced`. `ecosystem-tree.md:125` ("evidence flags are OR, not AND") contradicts PRD §2.3.
3. **34 of 39 addresses carry no status.** Every address must be a record: `{ address, chain, source, seen, exists_on_4663: null|true|false, explorer_source_verified: null|true|false }`, default `null`.
4. **22 accusation lines** (eval §3.4, §4.4): `flags: [drainer]`, `[impersonator]`, `farm`, `self-trend`, plus 4 insinuations in notes. None has an authoritative finding; several are wrong on their own evidence (a homonym flagged `impersonator`; a media account's typo made a handle an `impersonator`). Replace with conduct-neutral flags — `handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision` — each with `evidence: <post URL>`. Our side no longer has a `blacklist` tier; it is `skip` ("posts not ingested as evidence") with a behavior-only note.
5. **Two account ledgers disagree** (`2026-08-31-accounts.yaml` has 12 wrong roles the desk later fixed in `account-desk.yaml`). Keep one; add `slug:`; keep `meta.as_of` current (`:3` still says "fills 1–11").
6. **Process:** the `.rhai` never touches `content/`/`site/` — good — but the orchestrator still commits by prose rule, and `rh-field-ops/SKILL.md:37` says "stash/ignore `site/`", which is the operation that produced the accidental mixed commit `29b8da5` on `site`. Nothing mechanical prevents a repeat.

## What we ask for going forward (the contract; full text in `docs/integrations/grok-bot.md` once Task 6 lands)
- PR-only: work on `grok/<YYYY-MM-DD>` (or keep `research/ecosystem-baseline`), reach `main` only by PR; never `git checkout`, `stash`, or `add -A` inside a checkout another agent uses.
- Allowed paths: `research/inbox/**` always; `content/feed/**` and `content/sources/**` when the shape validates (`npm run validate`). Never `content/projects/**`, `scoring`, `review.approver`, `changelog.yaml`.
- Every address a record with status; every claim dated and attributed; no conduct verdicts about people or teams.
- One ledger, one per-round changelog line ("round N: added X, changed Y, retracted Z").

## What we changed on our side because of this intake
- Census 14 → 49 (every map subject; `fox` filed as `foxpad`). Rows whose PRD test fails on the evidence keep `value: false` on that test (visible warning; release blocker) rather than being dropped — the owner wants the full universe visible.
- Lifecycle in our census follows the evidence rule above, not the map's flag.
- Accounts ledger mapped to `tier: top|watch|downweight|skip` + `role`; trending counts only `top` with role alpha/kol.
- Everything from the desk is `class: claim` with a source id; nothing is `verified` until reproduced on Blockscout / docs.robinhood.com.
