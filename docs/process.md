# Order of operations

Current collection cadence and relevance rules: [Selective daily registry](daily-registry.md). Pull at 09:17 UTC and compile at 11:47 UTC, daily. Live product priorities and decision notes: [#102](https://github.com/harsharn10/proofline/issues/102). GitHub settings and protection follow-up: [#103](https://github.com/harsharn10/proofline/issues/103).

## Use the right place

| Work | Where it belongs |
| --- | --- |
| Vision, user stories, ideas, priorities and open decisions | An issue and its comments; use the existing roadmap before opening another thread |
| Bug or independently actionable work | A focused issue with evidence and acceptance criteria |
| Progress, findings, blockers and session handoff | Comment on the existing issue or active implementation PR |
| Code, schemas, workflows, templates or durable documentation changes | A PR containing the actual repository diff |
| Settled product/architecture decisions | A short canonical doc update, usually alongside related implementation; link the decision issue |
| Routine bot observations | Existing validated bot paths and retained run reports; no human PR per refresh |
| Settings change | Direct scoped setting change, verified and recorded in the operations issue |

Do not open a branch, assignment file or documentation-only PR just to capture a conversation. A PR is a change proposal, not the project notebook. Small changes can carry their objective and checks in the PR itself; do not require a separate issue for every typo. Use a standalone documentation PR only when the documentation change merits its own review.

Issues are the living work/status record; repository docs are the durable reference; merged code and verified live settings establish what actually exists. Do not maintain three competing copies of the same checklist. Keep Discussions and a separate project board optional until they solve a real collaboration need.

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
| Compile bot | `content/**` compiled from packets, `content/changelog/` | Pushes to `main` daily at 11:47 UTC |
| Pull bot | `content/pulled/**`, `ops/pull-budget.json`, `ops/pull-queue.json` | Pushes to `main` daily at 09:17 UTC |
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
- Pulled data on any branch. The pull bot rewrites selected data on `main` daily, so a branch copy
  is stale the moment it is committed and merges as conflicts. PR #80 arrived with 126.

Step zero of repository implementation work is `ops/controller/start.sh <branch>`. It refuses the first two
cases and reports the others. Read-only review, issue comments and planning do not need a branch.

## The order, every time

0. **Fresh.** `git fetch --prune`, then `ops/controller/start.sh <branch> [--new]`. Read the open
   PR list it prints. If a PR already covers the work, continue it there. Never open a second PR
   for the same work id.
1. **Scope**. Record objective, allowed paths, base SHA and acceptance checks in the focused issue
   (or PR for a small change). That is sufficient for ordinary build work: no duplicate assignment
   file and no empty kickoff PR required. Research producers retain the packet/assignment protocol
   in `research-system.md`. Explicitly record material scope changes before implementing them;
   unrelated mechanisms become separate work. Open a draft PR once there is a meaningful diff or
   early code feedback is useful, not merely to write a plan.
2. **Probe**. Reproduce the defect or inspect behavior the change depends on before building.
   For external integrations, test the real boundary where possible and record limitations.
   Documentation-only changes do not require invented API probes. Results belong on the issue/PR.
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
8. **After merge.** The branch is gone. Verify updated `main` and relevant checklist C flows;
   distinguish local, CI and deployed checks. The compile bot handles canonical research through
   its existing validated workflow. Close an issue only when its acceptance criteria are met;
   partial work uses `Refs #N`, not `Closes #N`. Put remaining work and the next action in the
   linked issue, without a separate handoff-doc PR for every session.
9. **Bots keep going.** Pull at 09:17 UTC, compile at 11:47 UTC, daily. Nothing in steps 0 to 8 waits
   for them, and they do not wait for you.

## Stacks

A stack of dependent work goes through one integration branch. Dependents merge into it, the
integration PR merges alone with a green check, and the dependents are closed as merged through it.
The v3 stack was #74 and #75 through #76.

## Named exceptions

- `grok-heavy/standing/updates` (PR #62) is long-lived by design: one work id per daily cycle,
  never merged. Do not prune it.
- A data migration that must rewrite `content/pulled/**` (a schema change, a repair) carries the
  label `allow-pulled-data`, says why in the body, and merges right before a bot cycle so the bot
  overwrites it within the hour.
- An emergency admin merge is the owner's alone, and the reason goes in the PR.

## What enforces this

| Rule | Mechanism |
| --- | --- |
| Merged branches die | Repository setting *delete branch on merge*, on since 2026-09-08 |
| No force-push or deletion of `main` | Active integrity ruleset [22612854](https://github.com/harsharn10/proofline/rules/22612854), verified September 9; no bypass actors |
| Human implementation uses PRs and green CI | Required process and `pr-ci.mjs`, **not yet server-enforced**. The proposed `ops/controller/ruleset-main.json` failed installation because GitHub rejected its Actions bypass. Do not install without a working bot strategy; [#103](https://github.com/harsharn10/proofline/issues/103) tracks this gap. |
| No generated data in PRs | `.github/workflows/guard.yml` fails any PR that changes `content/pulled/**` or `ops/pull-budget.json` without the label |
| No work on a dead or drifted branch | `ops/controller/start.sh` at step zero |
| No merge without a green check | `ops/controller/pr-ci.mjs` at step seven |
| Producers stay in their lane | The hard stops in `docs/research-system.md` §6 and the feed gate |

## Session handoff

When a session ends mid-task: comment on the linked issue/PR with completed work, exact branch/head,
checks and their limits, remaining work/blocker, and next action. Push only actual repository changes.
Use a durable review document only for substantial evidence worth retaining in the repository; link it
instead of copying it into every thread. Historical handoffs are not current task state. Verify live
main/PR/settings before resuming. Never close the living roadmap just because one linked PR merged.

GitHub's [issue guidance](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
supports planning, discussion and work tracking without repository commits. Its [ruleset guidance](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository)
distinguishes configured rules and bypass actors; a checked-in JSON proposal is not an installed protection.
