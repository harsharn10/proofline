# Working on Proofline

We aim to be the leading Robinhood ecosystem tracker: a nutshell for casual readers, original evidence-backed depth for analysts. Start with the [product direction and living roadmap](https://github.com/harsharn10/proofline/issues/102) and [durable product contract](docs/product/mission-and-system.md).

- Ideas, user stories, decisions and notes: use an existing issue. No branch or PR needed.
- Bugs or independently actionable work: search existing issues, then describe evidence, desired outcome and acceptance checks.
- Actual repository changes: use a scoped branch and PR. A small change can explain itself in the PR; it does not need a ticket plus an assignment document.
- Research evidence: follow the separate [research contract](docs/research-system.md). Do not directly edit machine-owned observations or resolve identity conflicts by guesswork.
- Settings and operations: record verified changes and remaining gaps in [#103](https://github.com/harsharn10/proofline/issues/103).

Before implementation, run `bash ops/controller/start.sh <branch> --new` for new work, or omit `--new` to resume an existing branch. Keep user changes intact. Link the issue, stay within the scope, and add regression tests for changed behavior. See [the process](docs/process.md) and [review checklist](docs/design/icarus/review-checklist.md) for gates appropriate to the change.

PRs should explain what changed, why, verification and what remains. Do not claim a green build proves source quality or deployed health. Do not enable auto-merge or merge without owner authorization and successful CI. Generated observations remain on their bot paths; never commit credentials or private account notes.

Ordinary progress and handoff go into the issue/PR comments. Update canonical docs when settled behavior changes, not for every conversation. No new paid service or model API is implied by a task.
