# Proofline agent entrypoint

Read this file from current GitHub `main` before each bounded assignment. A previous chat, old branch,
dated packet, or standing prompt is not the operating policy. Record the main SHA you read.

For research/data work, read [the ingestion contract](docs/ingestion.md) and the matching skill:

| Assignment | Skill |
| --- | --- |
| New canonical project / Grok discovery seed | [research-seed](skills/research-seed/SKILL.md) |
| Material change or targeted backfill / Grok collector | [research-update](skills/research-update/SKILL.md) |
| Machine observations / pull operator | [machine-refresh](skills/machine-refresh/SKILL.md) |
| Independent verification, canonical compilation / Claude or controller | [review-compile](skills/review-compile/SKILL.md) |

Implementation work follows [docs/process.md](docs/process.md); skills do not grant merge authority.
Grok account-only work additionally uses `.grok/skills/rh-account-desk/SKILL.md`.
The `.grok/skills/rh-field-ops` entrypoint routes here; its old looping workflow is retired.

No standing open PR is an instruction store. Use bounded task IDs and short-lived submission PRs.
Never restart schedules, initiate paid model calls, enable publication, merge identities, or claim
to have dispatched an external agent just because instructions were saved. A stopped cycle stays stopped
until the owner explicitly resumes it. Repository schedules and external sessions are separate controls.
