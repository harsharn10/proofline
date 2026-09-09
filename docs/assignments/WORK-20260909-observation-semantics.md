# WORK-20260909-observation-semantics

Base: `5bf713c5a871058b3b7d598807dfe1ce642f4b83`. Producer: Codex.

Objective: make public activity and aggregate observations obey the existing attribution, freshness and unknown-value contract. One mechanism: shared observation interpretation, before storage normalization.

Allowed paths: `scripts/lib/relationships.mjs`, `scripts/test-daily-registry.mjs`, `site/src/data/content-server.ts`, `docs/assignments/WORK-20260909-observation-semantics.md`, `docs/reviews/2026-09-09/observation-semantics.md`.

Probe: reproduce fresh factory hidden by aggregate staleness and input-order-dependent conflicting factory counts against current pure functions; inspect actual public KPI callsite and canonical relationship graph. No changed external API behavior is involved, so no provider traffic is necessary. Add regression fixtures before fixing.

Build: reuse ownership-aware activity interpretation for public status, preserve explicit fresh row markers, withhold equally current conflicting totals, retain known zero versus unknown transaction sums. No new status vocabulary, score/risk policy, refresh cadence, storage schema, dependencies, generated observations, external agent changes or delivery actions.

Gates: focused regression tests, root tests, release validation, site type/Markdown tests and site build; integrate main, report limitations, push for controller review. No merge or auto-merge. Retry fairness, health reports, structure provenance, full storage normalization and serving efficiency remain separate follow-ons.
