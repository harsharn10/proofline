# Incremental activity handoff — PR #99

## Done

Owner authorized merging PR #98. Required checks were green at head `5352021`; merged as `1ba2961`, synchronized local main, and ran release validation. Main's CI and connected Cloudflare production build passed. Production `/data/registry.json` reports `1ba296106f9aa256f28ea266343efc0568eeb944`; `/relationships` returns 200 and `/review` returns 401. No delivery switch or external research session was changed.

Next batch is isolated on `codex/20260909/incremental-activity`, PR #99, with its own frozen assignment. It adds a disposable chain/address-keyed finalized-transaction suffix cache, verified checkpoint reuse, bounded storage, atomic writes and per-run counters. Shared projects reuse the same history independently of roles. The walker deduplicates transaction hashes, detects malformed/unordered data and repeating cursors, and never publishes a malformed empty response as an observed zero. Full/manual-deep reads bypass cache reuse; invalid, stale or untrusted state falls back to normal bounded paging.

## Measurements / probe

- Live Robinhood RPC supports the finalized-block query. Public explorer transaction probe returned HTTP 403 HTML. No API key was used and no quota-state file or generated fact was modified by the probe. Explorer field compatibility follows the official API response contract; live incremental join remains unverified.
- Executable overlap fixture: equal transaction/launch counts with one page rather than two. This is a one-request fixture saving, not a production percentage or a guarantee for non-overlapping daily windows.
- Cache bounds: 1 MB, 250 addresses, 200 transactions/address, 5,000 transactions total, 26-hour retention; at most eight distinct old checkpoint verifications plus the current finalized query per run. No new paid service.
- All public observation formats remain compatible. The cache is excluded from the public-serving bundle and generated implementation commits. Project observation normalization is not otherwise completed.

## Gates

Root tests and release validation pass (181 projects, zero errors, 655 existing warnings). Existing 71 pull tests plus 18 Node tests (ten daily-registry, eight new activity-cache) pass. Frontend typecheck/Markdown-security tests and Cloudflare build, dry packaging and smoke pass. Render build/smoke is also required before handoff and covered again by CI. Diff whitespace check passes. Final CI on the pushed implementation remains the merge authority; do not rely on a kickoff commit's checks.

## Not done

PR #99 has not been merged or deployed to production. Controller review is still required. After rollout, inspect actual cache eligibility, cache joins, reused transactions, rejected checkpoints and source failures before changing caps. Cache entries follow the RPC node's finality claim and explorer receipts; they are not an independent consensus/indexer-completeness proof.

Browser/mobile/theme QA could not run because no browser was available. Full canonical shared-observation migration, further static serving and the external Grok/Claude session transition remain separate work. Do not merge the standing Grok PR #62 or overwrite PR #92/#95 from this assignment.

Next: `bash ops/controller/start.sh codex/20260909/incremental-activity`, review this PR and `docs/integrations/activity-cache.md`, then `node ops/controller/pr-ci.mjs codex/20260909/incremental-activity`. Merge this new batch only with controller approval and green required checks.
