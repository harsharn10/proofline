# Handoff, 2026-09-04 evening (session limit hit mid-task)

Written by the controller session before a restart. State of every open thread, what to resume, and how.

## Merged today (main is green, Render serves it)
- #73 content contract v3, #74/#75/#76 v3 UI (wire, market cap, card order, Checks tab), #65 Rialto source, #77 bot fixes, #78 standing order v2.1, #79 compile-inbox duplicate recovery, #81 #90 #91 test fixes, #83 Telegram gate, #84 Blockscout PRO key + bot-wall detector, #85 pulse Worker, #86 signals + daily brief + weekly wrap, #87 standing order v2.2 (event tags), #88 event tag schema, #89 Telegram pause.
- Registry: 181 names. Secret `BLOCKSCOUT_API_KEY` is set (free tier: 5 rps, 100K credits/day). Telegram automatic sends are PAUSED (`wire_enabled: false` in `ops/telegram-review.json`); the pulse Worker deploys silent off the same flag.

## Half finished: PR #80, pull on a budget (branch `codex/20260904/WORK-20260904-codex-icarus-11-pull-scale`)
Review verdict was DO NOT MERGE (see `scratchpad` copy below: the change signal read a cached Blockscout counter; stale 24h windows carried under fresh timestamps; nonce written into history; cost model 2–3x optimistic; caps unenforceable in CI). A rework agent pushed `b23d23a` with every code finding fixed (live signal = first page of `/addresses/<a>/transactions?filter=to`; honest windows with `window_as_of` and `stale_since`; history integrity; per-run cap 6,000 credits, day cap 60,000, timeout 60 min, budget committed with `if: always()`; the silent-null rule: a read that returns null where a value existed and no error explains it keeps the previous value) and 69/69 pull tests green.

What remains on #80, in order:
1. Proof runs. The agent's pass 2 (full hot tier) had reached 30 of 61 names when the session limit hit; its worktree `/Users/harsharnsingh/proofline/.claude/worktrees/agent-a8f68b99e1a38fde0` may hold partial uncommitted pulled data: discard it (`git checkout -- content ops`) rather than commit a half read. Re-run locally from that branch: `npm run pull -- --only pons,artificial-inu,hookr,noxa`, then `npm run pull` (full due-tier; measured 33 min, 1,621 credits, 26.1 credits per hot name on a first read), then a second hot-tier read for the steady-state figure. The PRO key is only in GitHub secrets; locally the public host may serve a Cloudflare challenge (the detector records it; if more than half are challenged the run exits non-zero). Alternative: merge #80 first with the measured first-read numbers and let the scheduled job produce the steady-state numbers, then update the docs table.
2. Commit the data as "data: second budgeted pull"; put the measured cost table in `docs/integrations/pull.md` and the PR body (`gh pr edit 80 --body-file …`); the 1,000-name projection was 38,883 credits/day on first-read costs, under the 60,000 cap.
3. `git merge origin/main` (brings #84's final fixes and #91), resolve `scripts/lib/pull/blockscout.mjs` and `http.mjs` in favour of main.
4. Review with `docs/design/icarus/review-checklist.md` part A plus the #80 findings list, then merge only when the `Root + site` check is green (`node ops/controller/pr-ci.mjs <branch> && gh pr merge 80 --merge`).

## Other open items
- Pulse Worker deploy: needs either repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, or a Cloudflare Git-integration Worker with `pulse/` as root; plus one-time `wrangler kv namespace create PULSE_STATE` and the id pinned in `pulse/wrangler.jsonc`. Until then the fast path is not running.
- Telegram: flip `wire_enabled` to true and push when the owner wants alerts and the 13:00 UTC brief live (ideally after #80 lands). Never seen on real data yet: distribution, coming-up, leader-change (they need Grok's tagged events).
- Grok: paste the v2.2 standing order from PR #62 into its schedule (00/06/12/18 UTC). Duplicates dtf and bow need update packets for downto and longbow.
- Owner TODOs in `content/site.yaml`: corrections contact, Telegram URL. Robinscan partner API email (draft was in the session scratchpad; rewrite from `docs/reviews/2026-09-04/handoff.md` if lost: ask for holders, token risk, stock registry access at a few thousand requests/day, credit Robinscan on every figure).
- Issues #50 (research MVP standard on the site), #33 (Pons owner powers from source) remain parked. Pons second-reviewer pass not started.
- Later cleanups: the 200-character bullet cap clips some sentences; DIH ticker collision hides "Dog In Hood" from discovery; root loader ships every history to every page.

## Process rules adopted after today's churn
1. An assignment is frozen at kickoff; new requirements go to a follow-up PR.
2. Any assignment that leans on an external behaviour gets a five-minute live probe as step zero (the cached Blockscout counter and the Node 20 vs 24 number formatting both slipped through without one). CI pins the Node major used locally.
3. One PR per mechanism; a stack of dependent work goes through one integration branch.
4. Data-semantics changes get a one-page design note reviewed before the build.
5. Merges are always gated on the check's conclusion: `node ops/controller/pr-ci.mjs <branch> && gh pr merge <n> --merge`.

## Blocker found at handoff time (2026-09-08 03:52 UTC)
GitHub Actions jobs on this private repo now fail with zero steps and no runner assigned (Validate on PRs; Compile packets on main at 21:47 UTC on the 7th). That is the signature of exhausted Actions minutes or a billing block, after several 100-minute pull runs and many CI runs in one day. Every bot (pull, compile, publish) and every PR check is stopped until the owner checks GitHub Settings → Billing → Actions and either raises the spending limit or makes the repository public (public repositories get unlimited Actions minutes; the site is public anyway). This PR (#93) could not get a green check for that reason; merge it by hand first.

## Controller scripts (copied from the session scratchpad into `ops/controller/`)
- `pr-ci.mjs <branch>`: waits for the newest `Root + site` run on a branch, exit 0 only on success.
- `pr-info.mjs <n…>`: PR bodies (Done / Not done) and file lists.
- `compile-cycles.sh`: dispatch the compile workflow up to four times back to back.
