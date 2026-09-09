# Daily registry handoff

Implementation: PR #98, `codex/20260909/daily-registry`. Base main was rechecked at `0b5340f`; PRs #96 and #97 were process/cost notes, not these fixes. Verify current refs before resuming. This branch does not merge or deploy itself.

## Done

- Daily machine collection at 09:17 UTC and compile at 11:47 UTC. Names qualify for daily, weekly, monthly, initial seed, archive or identity-hold treatment. Automatic runs select at most 80 names, including at most 10 initial seeds. Shared factory activity cannot revive every associated token.
- Weighted Blockscout credits (usually 20 per request, not one), retry accounting, conservative remaining-header handling and persisted quota-exhaustion breaker. Internal caps: 40K/run, 60K/day. Old same-day request counters migrate conservatively. No fabricated 1,000-name capacity claim.
- One derived chain/address relationship index, used by selection, `/relationships`, and `/data/registry.json`. Shared infrastructure is not a common-team/ownership claim. Fresh totals deduplicate factories and pools.
- Daily rotating Grok worklist, maximum 20 existing names plus 10 new seeds; no change means no packet. Claude receives shared-token conflicts and all identity-held names. Equal-date conflicting packet copies require controller review.
- Empty inbox skips compilation/scoring without closing a previous gate-failure issue. Main-bot serialization remains; post-rebase gates, retained reports and a daily stale-success check improve visibility.
- Build-time YAML parsing and research sanitization; bounded history and compact home/category responses. Private account notes are omitted from public-serving bundles. Existing auth, origin and delivery gates remain intact.

## Measurements and gates

Read-only policy projection on the current corpus: 181 projects, 884 distinct addresses, 60 shared addresses, 22 shared-token identity conflicts; 84 refresh holds from identity conflicts overall. No names were due at measurement time, with 97 not yet due. Grok worklist: 20. These are time-dependent observations, not fixed expectations.

Local Node loader benchmark with optional Pulse disabled: cold load approximately 41 ms versus the review's 1,056 ms; home JSON approximately 468 KB / 73 KB gzip versus 1,086 KB / 230 KB gzip. Home history approximately 13 KB, wire 11 KB (24 items); launchpads response approximately 81 KB / 15 KB gzip. Comparison spans the intervening main data/docs revision and is directional, not a deployed Worker CPU measurement. The roughly 41 ms local cold path does not prove the free Worker CPU allowance is met.

Passed locally: `npm test`; `npm run validate:release` (181 projects, zero errors, 655 existing content warnings); `npm --prefix site run test`; frontend lint; Render build and smoke; Cloudflare build, dry packaging and smoke. New tests cover quota retry/breaker/migration, relationship identity, relevance, caps, freshness, pool/factory deduplication and conflicting packet copies. Smoke includes Connections, registry JSON, anonymous review rejection and cross-origin write rejection. Workflow YAML parses; diff whitespace check passes. No live data pull was used for verification.

## Not done / rollout

- Controller review and GitHub CI verification before merge; production rollout and post-merge browser checks are still required. No merge, deployment, paid service, direct producer message or delivery enablement was performed.
- Point the existing external Grok session to `research/inbox/assignments/WORK-standing-grok-heavy-daily.md`; repository instructions do not reschedule that session. Claude/owner must adjudicate identity conflicts against source receipts, not auto-merge them.
- Measure deployed CPU, actual weighted spend, successful refreshes and overdue backlog. Free operation is bounded by usage and provider allowances, not guaranteed at arbitrary scale.
- Full static prerendering, incremental event cursors and normalized per-address observation storage remain separate follow-ons. Project-level observation files still repeat shared-address facts for compatibility.
- Pulse remains a separately bounded ten-minute hour-based signal, with the existing paused delivery switches unchanged. A GitHub-hosted health check cannot independently detect a total GitHub outage.
- Existing open lanes at kickoff: #62 standing Grok (never merge), #95 Grok seed work, #92 separate trenches implementation. Recheck their current state; do not close or overwrite them from this assignment.

Next controller commands: `bash ops/controller/start.sh codex/20260909/daily-registry`, inspect PR #98 and `node ops/controller/pr-ci.mjs codex/20260909/daily-registry`. Merge only after review and green required checks, then use checklist C and the rollout steps above.
