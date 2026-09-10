---
name: rh-field-ops
description: Route an explicitly assigned, bounded Proofline Grok research seed, material update or backfill to the current repository skill. No automatic looping or canonical writes.
---

# Grok field entrypoint

Read `AGENTS.md` from current GitHub main, then `docs/ingestion.md` and the assigned
`skills/research-seed/SKILL.md` or `skills/research-update/SKILL.md`. Record that main SHA.
These shared files replace the old scout/specialist/loop standing prompt.

Require a finite assignment: canonical slugs, task IDs where applicable, owner, allowed paths, prior
evidence, maximum batch and stopping condition. Check current pending PRs, including drafts.
Without an assignment, stop; do not invent a discovery round or spawn broad specialist work.

The local shared checkout is read-only for this collector. Submit assigned packet files through
the GitHub REST recipe in `docs/integrations/grok-bot.md`, using a short-lived producer branch.
Do not write `content/**`, merge, change publication flags, or start another round after completion.
Account proposals, when assigned, additionally use `.grok/skills/rh-account-desk/SKILL.md`.
The old `rh-field-round.rhai` automatic fallback is retired. Missing X/source access is a limitation,
not permission to broaden the task or repeatedly retry a blocked source.
