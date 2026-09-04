# WORK-20260904-codex-icarus-11-pull-scale: Pull at scale: parallel shards, role-based walk caps, incremental reads

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) fixing the on-chain puller of github.com/harsharn10/proofline (Robinhood Chain, chain id 4663; site branded Icarus) so it finishes at the registry's new size. Read docs/design/icarus/README.md §3, docs/integrations/pull.md, .github/workflows/pull.yml and compile.yml (the two bots share the concurrency group main-bots and push to main with a fetch/rebase/push retry loop), scripts/pull.mjs, scripts/lib/pull/{activity,blockscout,token,write,series}.mjs, scripts/test-pull.mjs, and content/pulled/history/*.jsonl (append-only snapshots) before touching code.

work_id: WORK-20260904-codex-icarus-11-pull-scale
producer: codex
branch: codex/20260904/WORK-20260904-codex-icarus-11-pull-scale (exists with this assignment file; commit to it)
depends_on: none
allowed_paths:
  - scripts/pull.mjs, scripts/lib/pull/**
  - .github/workflows/pull.yml
  - scripts/test-pull.mjs + fixtures
  - docs/integrations/pull.md
  - schema/pulled.schema.json (only if a field is added)

The problem, measured: on 2026-09-03 the registry grew from 53 to 181 names in one day. The scheduled pull (one job, sequential, ~2 s per Blockscout page, up to 40 pages of 24-hour transaction walk per address, two requests in flight) took 42 minutes at 53 names, was cancelled at the 60-minute timeout at 86 names, and was cancelled again at the new 150-minute timeout at 181 names (run 33816579872, 23:12 to 01:42 UTC). Nothing has pushed fresh chain data since 03:25 UTC on 2026-09-03; every number on the site is stale. The fix must bring a full refresh under 30 minutes of wall clock at 200 names and degrade gracefully at 500.

Do, in this order:
1. Role-based walk caps in scripts/lib/pull/activity.mjs: the 24-hour transaction walk keeps its 40-page cap only for addresses whose role is factory, curve or router (the launch counters); token, vault, admin, multisig, proxy and other roles get a 5-page cap (their txns_24h is reported as "≥ N (capped)" via the existing capped-count error path, never as an exact number). Holders, counters and DexScreener reads are single requests and stay as they are.
2. Deterministic shards in scripts/pull.mjs: add --shard <i>/<n> that selects every target whose index (in the sorted target list) modulo n equals i-1, and --shard-list that prints the assignment; keep --only. Each shard writes only its own slugs' files, history lines and series, so shards never touch the same file.
3. Incremental reads: a --since <hours> mode (default 6 when run from the workflow) that skips the transaction walk for addresses whose Blockscout counters (transactions_count) did not change since the previous snapshot line in content/pulled/history/<slug>.jsonl, and skips the top-10 and LP reads for tokens whose holder count changed by less than 1%; a --full flag forces everything. Record in the document which reads were skipped as unchanged (errors[] is the wrong place; add a small reads: {walked: [...], skipped_unchanged: [...]} block, schema-additive).
4. Concurrency inside a shard: allow 4 Blockscout requests in flight instead of 2, with the same pacing per request (measure: the explorer answered about 2 s per page with 2 in flight on 2026-09-02; back off on 429/5xx with jittered retry, three attempts, then record the error and move on).
5. .github/workflows/pull.yml: a matrix of 4 shard jobs (fail-fast false, each with timeout-minutes 60) that run in parallel and each commit+push their own slugs' files with the existing identity + fetch/rebase/push retry loop (raise the loop to 5 attempts with a 10–40 s jittered sleep, since four jobs push close together; disjoint files rebase cleanly). Keep the job-level concurrency group main-bots OFF the shard jobs (they must run in parallel) and instead add a final "reconcile" job (needs all shards, group main-bots) that runs npm run validate on main and opens or updates an issue "Pull validation failed" if it is red. Keep workflow_dispatch with inputs shard_count and full.
6. Tests with stub clients: shard selection is a partition (every target in exactly one shard), the role-based cap, the unchanged-skip logic with two history lines, the backoff path. Docs: a table of read kinds × roles × caps, the shard model, the incremental rule, and the expected runtime (state your measurement from one real shard run: npm run pull -- --shard 1/4 --dry then a real one).
7. Prove it: run one real shard locally (npm run pull -- --shard 1/4) and report its wall clock, request count and the number of walks skipped as unchanged; commit its output as a separate commit "data: shard 1/4 read".

Rules that always apply: every number links to its source, honest placeholders, history append-only (never rewrite a line), nothing fabricated. Before you push: npm test, npm run test:pull, npm run validate:release (0 errors). Commit in small steps with messages ending in the trailer "Producer: codex". Push and mark the PR ready with the body:
## Done
## Runtime (per shard: wall clock, requests, walks skipped; projected full refresh at 200 and 500 names)
## Not done / questions
Never merge, never enable auto-merge.
```
