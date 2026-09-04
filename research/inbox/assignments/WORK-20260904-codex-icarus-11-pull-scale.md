# WORK-20260904-codex-icarus-11-pull-scale: Pull on a budget: tiered cadence, keyless-first reads, credit caps, pulse-triggered refresh

Paste prompt for Codex (also the PR body of the kickoff PR). v2, 2026-09-04: rewritten around the owner's free-tier constraint.

```text
You are the Proofline engineer (producer codex) rebuilding how the on-chain puller of github.com/harsharn10/proofline (Robinhood Chain, chain id 4663; site branded Icarus) spends requests. Read docs/design/icarus/README.md §3, docs/integrations/pull.md, .github/workflows/pull.yml and compile.yml, scripts/pull.mjs, scripts/lib/pull/{activity,blockscout,token,write,series,rialto,dexscreener,llama,http}.mjs, scripts/test-pull.mjs, content/pulled/history/*.jsonl, and the assignments WORK-20260904-codex-icarus-12-blockscout-pro.md (PRO key and bot-wall detector; build on that branch if it has landed, else on main and merge it later) and WORK-20260904-codex-icarus-13-pulse.md (the fast path that will enqueue names).

work_id: WORK-20260904-codex-icarus-11-pull-scale
producer: codex
branch: codex/20260904/WORK-20260904-codex-icarus-11-pull-scale (exists with this assignment file; commit to it)
depends_on: WORK-20260904-codex-icarus-12-blockscout-pro (merge first or build on its branch)
allowed_paths:
  - scripts/pull.mjs, scripts/lib/pull/**
  - scripts/lib/pull/budget.mjs (new), scripts/lib/pull/tiers.mjs (new)
  - ops/pull-budget.json (new, committed by the workflow), ops/pull-queue.json (new, written by the pulse or by hand)
  - .github/workflows/pull.yml
  - scripts/test-pull.mjs + fixtures
  - docs/integrations/pull.md
  - schema/pulled.schema.json (additive only)

The owner's constraint, verbatim: "we should be efficient and smart about pulls, and do it when needed, because we will be scaling the number of projects but I want to remain on the free tier indefinitely." The free tier is Blockscout PRO at 5 requests/second and 100,000 credits/day, renewing daily; the repository secret BLOCKSCOUT_API_KEY is set. Today: 181 names, about 1,100 address rows, a full sequential read takes 108 minutes and roughly 8,000 explorer requests; the scheduled job was cancelled at 60 and then 150 minutes. Design for 1,000 names on the same tier.

Principles, in priority order:
1. Keyless first. DexScreener (market, pairs, market cap, first pair), GeckoTerminal (pools), Rialto (chain stats, tickers, tokenized stocks) and the public RPC (https://rpc.mainnet.chain.robinhood.com, fallback https://robinhood-rpc.publicnode.com: eth_getCode, owner() 0x8da5cb5b, getThreshold() 0xe75235b8, getOwners() 0xa0e67e2b, EIP-1967 slots, totalSupply, eth_getTransactionCount) cost nothing. The explorer is used only for what only it has: holder counts and the top-10 holder page, verified-source flag and ABI, creator address, transaction counters, and the launch-transaction walk on factory addresses.
2. Read on change, not on schedule. Before any explorer read for an address, take one cheap signal and skip the read when nothing moved: RPC eth_getTransactionCount for EOAs and Safe signers; DexScreener txns.h24 and the previous snapshot's holders for tokens; the explorer counters endpoint (one credit) for contracts, compared with the previous snapshot's transactions_count. A walk or a holders page is only fetched when the signal changed. Record what was skipped as unchanged in a reads block on the document (schema-additive).
3. Cadence by liveness (scripts/lib/pull/tiers.mjs, one function from a name's last snapshot and the share bar): hot = above the share bar or named in ops/pull-queue.json in the last 24 h → every run (6 h); live = activity within 7 days → every second run (12 h); quiet = 7 to 30 days → daily; dormant or announced with nothing on chain → weekly; --only and --full override. A run reads only the names whose tier is due, plus the queue. The queue file is a small JSON list {slug, reason, at} that the pulse Worker (or a person) appends to; the run consumes it and clears it.
4. Hard budget (scripts/lib/pull/budget.mjs): BLOCKSCOUT_BUDGET_PER_RUN (default 12,000 credits) and BLOCKSCOUT_BUDGET_PER_DAY (default 60,000, leaving 40,000 headroom); credits counted per request as the PRO API bills them (read the response headers or documented weights; if unknown, count 1 per request and say so). When a run hits its cap it finishes keyless reads for the remaining names, marks explorer reads as "deferred: budget", and exits 0 with the deferred list in the summary; the day counter lives in ops/pull-budget.json (date, credits_used, runs) and is committed with the data. The summary prints credits used, names read per tier, walks skipped as unchanged, and the projection for tomorrow.
5. Cheaper walks: the 24-hour transaction walk keeps its 40-page cap only for factory, curve and router roles; every other role is capped at 5 pages and reported as "≥ N (capped)". Holder pages: one page only. Series: DefiLlama daily series refresh at most once a day.
6. Parallelism inside the budget: 4 explorer requests in flight at 5/second with jittered backoff on 429/5xx (three attempts, then record and move on); keyless sources at their own documented limits (GeckoTerminal 30/minute).
7. Workflow: keep one scheduled job every 6 hours with timeout 45 minutes (the tiered read must fit; if it cannot at 1,000 names, split into two shards with the existing fetch/rebase/push loop, not more). Add workflow_dispatch inputs only, full, and tier. Keep the concurrency group main-bots and the bot identity.
8. Cost table in docs/integrations/pull.md: credits per name per tier per read kind, and projected credits per day at 200, 500 and 1,000 names under the tier mix we see today (state your assumed mix). The projection at 1,000 names must stay under 60,000 credits/day; if it does not, tighten the tiers and say what you changed.
9. Tests with stub clients: tier assignment from snapshots, the change signals (unchanged skips, changed reads), the budget cap (deferral, exit 0, day counter roll-over at renewal), the queue consume-and-clear, role-based page caps, the credit count in the summary. history/*.jsonl stays append-only; a deferred read never writes a snapshot line with nulls in place of numbers that existed before (carry the previous values with a stale_since date instead).
10. Prove it: one real run with --only pons,artificial-inu,hookr,noxa (a hot, a hot token, a live, a dormant) printing credits and skips; then a real full tiered run, timed, with its credits and the deferred list; commit the output as "data: first budgeted pull".

Gates: npm run test:pull, npm test (suites separately if the chain is slow), npm run validate:release (0 errors). Commit in small steps with messages ending in the trailer "Producer: codex". Push and mark the PR ready with the body:
## Done
## Cost (credits per run and per day today; the projection table at 200 / 500 / 1,000 names)
## Not done / questions
Never merge, never enable auto-merge.
```
