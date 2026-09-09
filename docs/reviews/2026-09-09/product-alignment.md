# Product alignment handoff

PR: #100. Branch: `codex/20260909/product-logic-contract`. Inspected base: `5bf713c5a871058b3b7d598807dfe1ce642f4b83` (PR #99 merged). No code or generated content changes in this assignment.

## Done

- Compared PRD mission/user questions, Icarus design/page contracts, research operating rules and implemented design/logic modules.
- Added `docs/product/mission-and-system.md`: working mission, non-goals, nine user stories with acceptance criteria, existing design/logic inventory, missing data states, authority boundaries and sequenced backlog P0–P8.
- Linked the synthesis from Icarus and daily-registry docs without changing their approved behavior.
- Kept prior logic findings in the backlog: activity attribution, duplicate conflict handling, row freshness, zero/unknown, retry fairness, report-aware health, carried measurement provenance, shared storage, serving/review efficiency and rollout verification.
- Identified additional product issues: only 1 of 181 canonical profiles is full-depth; public Control label does not describe the existing multi-factor score; risk placement and real-time wording need alignment with the research mission; source-of-authority documentation and external agent scheduling need reconciliation.

## Measurements or cost

Read-only canonical count: 181 project files, 1 `coverage: full`, 180 with TL;DR and 173 with risk bullets. Presence is not an assessment of quality or complete research. No new services, model calls, provider collection or runtime cost introduced.

## Gates

- Fresh main and open PR inventory checked before branching.
- Referenced relative Markdown links resolve.
- `git diff --check` passes; changed files remain in the assignment's docs-only lane.
- No root/site build rerun for documentation-only edits; preceding logic review's pull/site checks are historical evidence, not a new test run.
- No browser or accessibility sign-off; proposed user stories have not been validated in interviews.

## Not done

- Owner/controller approval of this proposed synthesis or authority reconciliation. No merge or auto-merge authorized for this new PR.
- No correctness fixes implemented here. No claim that every backend/middleware/frontend path has been verified.
- Score labeling/rubric and risk prominence remain explicit owner decisions. Existing policies are unchanged.
- External Grok/Claude sessions have not been inspected/rescheduled; Telegram pause flags unchanged.
- PR #92 is a separate activity-stream proposal; producer PRs #62/#95 remain separate. Standing producer PR #62 is never merged.

## Next implementation

P1, a separate assignment based on fresh main: one shared observation interpretation contract for scheduler/public status and unique totals. Add failing regression tests first for (1) shared factory cannot revive an unrelated token, (2) explicit row freshness survives aggregate staleness, (3) equal-time conflicting duplicate readings are order-independent and not silently authoritative, (4) zero differs from unknown. Then integrate UI consumers, test and submit for controller review.

Next command after this docs PR is reviewed or when starting that independent code assignment: `bash ops/controller/start.sh codex/20260909/observation-semantics --new`. Read the open PR inventory first. P1 can proceed without changing score wording or approved layout. P2–P8 are tracked in the alignment document, not abandoned and not marked complete.
