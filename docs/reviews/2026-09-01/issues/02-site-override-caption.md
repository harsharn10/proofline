# Site: the override caption is wrong for an Elevated override

labels: site

`site/src/components/dossier.tsx` renders `capped by {derived.override.level} override` whenever a
project has an override. `OVERRIDE_CAPS.Elevated` is `null` in `scripts/lib/score.mjs` (only Critical
caps at 29 and High at 59), so an Elevated override caps nothing and the caption would be false. No
project records an override yet, so this is latent.

Note: the 2026-09-01 site decisions (review §5.3, cuts list) remove the override caption from the
dossier entirely. Check whether the rebuilt dossier still renders it before doing this work. If the
caption is gone, close this issue.

## Fix, if the caption stays

Render `Elevated override` when the level is Elevated, and `capped by <level> override` otherwise.
Use the existing `override` type in `site/src/data/types.ts`; do not widen it. Never surface
`uncappedScore` or `uncappedConfidence` (the smoke test asserts the string `uncapped` is absent).

Done when: `cd site && npm run typecheck && npm run build && npm run smoke` is clean.
Commit: `site: do not claim a cap for an Elevated override`.
