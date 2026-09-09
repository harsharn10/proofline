# Order of operations

For anyone who opens a branch on this repository: the owner, a Claude controller session, Codex, a
Grok producer, or a bot. This sits above `docs/research-system.md` (the research contract: objects,
packets, hard gates) and `docs/design/icarus/review-checklist.md` (what to run before and after a
merge). Those say *what* must be true. This says *in what order*, and how to tell whether the thing
you are about to touch is still live.

## The lanes

Two writers never own the same path. A PR that changes a path outside its lane is wrong by
construction, whatever the diff says.

| Writer | Owns | Lands through |
| --- | --- | --- |
| Producers (`grok`, `grok-heavy`, `supergrok`, `grok-bot`, Codex research runs) | `research/inbox/packets/<slug>/` | A producer branch and PR that the producer never merges. The compile workflow lifts packets off the branch. |
| Compile bot | `content/**` compiled from packets, `content/changelog/` | Pushes to `main` every six hours at :47 |
| Pull bot | `content/pulled/**`, `ops/pull-budget.json`, `ops/pull-queue.json` | Pushes to `main` every six hours at :17 |
| Publish bot | Telegram review state under `ops/` | Pushes to `main` after a content change |
| Codex (build assignments) | `scripts/`, `site/`, `schema/`, `pulse/`, `docs/`, `.github/` within the assignment's `allowed_paths` | `codex/<YYYYMMDD>/<work-id>` branch and PR |
| Controller (a Claude session or the owner) | Assignments, compile PRs, fixes, docs, review, merge | `claude/<YYYYMMDD>/<topic>` branch and PR |
| Owner | Merges, settings, secrets, channel decisions | Directly |

Bots serialize on `main` through the `main-bots` concurrency group and rebase before every push.
People and agents never push to `main`.

## What stale means

Something is stale when `main` has moved past it. Every one of these happened this week:

- A branch whose PR is merged or closed. It is dead. Never push to it; the repository deletes it on
  merge now.
- A branch whose base is behind `main` on a path the branch touches. Merge `main` before anything
  else.
- An assignment whose work id already has a merged or superseded PR. Search before starting.
- A handoff or review document older than the newest merge on the same subject. The merged PR is
  the truth; the document is history. The 2026-09-04 handoff said PR #93 was merged. It was not.
- Pulled data on any branch. The pull bot rewrites it on `main` every six hours, so a branch copy
  is stale the moment it is committed and merges as conflicts. PR #80 arrived with 126.

Step zero of every piece of work is `ops/controller/start.sh <branch>`. It refuses the first two
cases and reports the others.

## The order, every time

0. **Fresh.** `git fetch --prune`, then `ops/controller/start.sh <branch> [--new]`. Read the open
   PR list it prints. If a PR already covers the work, continue it there. Never open a second PR
   for the same work id.
1. **Assign** (controller). One assignment, one mechanism, one work id, frozen at kickoff:
   objective, `allowed_paths`, base SHA, and the live probe it must run. Kickoff is a draft PR with
   the prompt in the body. A new requirement is a new assignment, never an edit to a running one.
2. **Probe** (builder). Five minutes against the real external behaviour the work depends on,
   before building. The cached Blockscout counter and the Node 20 versus 24 number formatting both
   shipped without one. The result goes in the PR body.
3. **Build** on `<producer>/<YYYYMMDD>/<work-id>` from current `main`. Commit only your lane's
   paths. No generated data, ever.
4. **Integrate.** `git merge origin/main` into the branch (merge, not rebase, once pushed). Resolve
   toward `main` for any path you do not own. Run review-checklist part A locally.
5. **Report.** The PR body is Done, measurements or cost, gates, Not done. Mark it ready. A PR with
   no Not-done section is not finished, it is unexamined.
6. **Review** (controller). Checklist A, plus B for research. Findings as PR comments. Fixes go on
   the same branch by the builder or a fix agent, then step 4 again.
7. **Merge, gated.** `node ops/controller/pr-ci.mjs <branch> && gh pr merge <n> --merge`. Never on
   a red or pending check. PR #85 merged red because this step was skipped.
8. **After merge.** The branch is gone. Run checklist part C on `main`. For research, the compile
   run lands the canonical change in its own PR. Close superseded PRs and issues with a one-line
   reason. Update the handoff document if the session is ending.
9. **Bots keep going.** Pull at :17, compile at :47, every six hours. Nothing in steps 0 to 8 waits
   for them, and they do not wait for you.

## Stacks

A stack of dependent work goes through one integration branch. Dependents merge into it, the
integration PR merges alone with a green check, and the dependents are closed as merged through it.
The v3 stack was #74 and #75 through #76.

## Named exceptions

- `grok-heavy/standing/updates` (PR #62) is long-lived by design: one work id per six-hour cycle,
  never merged. Do not prune it.
- A data migration that must rewrite `content/pulled/**` (a schema change, a repair) carries the
  label `allow-pulled-data`, says why in the body, and merges right before a bot cycle so the bot
  overwrites it within the hour.
- An emergency admin merge is the owner's alone, and the reason goes in the PR.

## What enforces this

| Rule | Mechanism |
| --- | --- |
| Merged branches die | Repository setting *delete branch on merge*, on since 2026-09-08 |
| No pushes to `main`, no red merges, no force-push, no deletion | Ruleset in `ops/controller/ruleset-main.json`: PRs only, `Root + site` required; the GitHub Actions app and the repository admin bypass. Install once: `gh api -X POST /repos/harsharn10/proofline/rulesets --input ops/controller/ruleset-main.json` |
| No generated data in PRs | `.github/workflows/guard.yml` fails any PR that changes `content/pulled/**` or `ops/pull-budget.json` without the label |
| No work on a dead or drifted branch | `ops/controller/start.sh` at step zero |
| No merge without a green check | `ops/controller/pr-ci.mjs` at step seven |
| Producers stay in their lane | The hard stops in `docs/research-system.md` §6 and the feed gate |

## Session handoff

When a session ends mid-task: write `docs/reviews/<date>/handoff.md` with the state of every open
thread and the exact next command, push the branch, and say in the PR what is half done. The next
session starts at step 0, not from the handoff's claims: verify each one against `main` before
acting on it.
