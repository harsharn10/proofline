---
name: review-compile
description: Independently verify Proofline research submissions and control canonical compilation, backfill task disposition and website integrity. Use for Claude/controller review, not automatic collector promotion.
---

# Review and canonical compilation

Use `docs/operating-flow.md` for the shared flow, schedule, four clocks and completion checklist.
Check accepted `research_state` separately from editorial review and coverage. Historical full packets
can be on file without meeting today's evidence floor. Do not rewrite approval dates to make them fresh.

Read current main `AGENTS.md`, `docs/ingestion.md`, `docs/process.md`, `docs/research-system.md` and
`docs/design/icarus/review-checklist.md`. These repository paths are the shared contract, not a remembered prompt.

Before assigning backfill, inspect current GitHub task ownership and pending submissions. Use the checked
input export in `docs/ingestion.md` instead of manually copying issue JSON. Generate the plan
with fresh PR and task-state snapshots, pin the main SHA and claim a bounded set in the work issue.
Use one controller for claims; no claim/lease service is implemented. Keep paused cycles paused.

Verifier lane: independently reproduce the assigned claims with dates, method, chain/block and scope; use a
different producer from the collector. File `role: verifier`, `packet_tier: update`, `update_reason: verification`
and actual reproductions. Do not edit the collector's packet or resolve identities/conflicts yourself.

Compiler lane: review duplicate identities, changed old/new values, source ownership, measurement windows,
public copy and replay guards. A structural pass is not semantic proof. Use current compiler dry-run and
validation paths; inspect the diff before authorized writes. Leave unrelated facts, IDs and approvals intact.
Do not suppress errors, extend the legacy baseline or relabel missing evidence to clear the worklist.

Before unattended writes, record the exact-head/path acceptance from `docs/ingestion.md` on the producer
PR using the controller account. Ready state is not acceptance. A changed head requires new review;
withdraw with a new hold decision. Collectors must never self-accept through a shared owner account.
Use `scripts/compile-intake.mjs` to fetch checked input; manual branch selection cannot bypass acceptance.

Compilation is separate from merge authority and channel publication. After accepted output reaches main,
verify public fields and private access boundaries; record accepted SHA and per-task disposition. Close a
finite producer PR only when every packet is accepted, explicitly rejected or transferred to a held task.
Do not merge standing/producer branches or automatically promote coverage/scores. A retained gap is not a
completed research task. Escalate blocked source access and identity decisions instead of repeatedly recollecting.
