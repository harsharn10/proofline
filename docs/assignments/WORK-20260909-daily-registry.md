# WORK-20260909-daily-registry

Base: `0b5340f` (main checked before kickoff). Producer: Codex. Controller review: Claude/owner.

Objective: operate the registry on a selective daily cycle using one relationship index and truthful provider quotas. User authorized implementation on September 8, including daily refresh, relevance filters, relationship maps, source-of-truth cleanup, and explicit Grok/Claude responsibilities.

Allowed paths: `scripts/**`, `schema/**`, `site/**`, `.github/**`, `docs/**`, `research/inbox/assignments/**`, `package.json`, `package-lock.json`. No generated content or live quota/state changes.

Probe: current main contains process PR #96 and cost-note PR #97; no open PR covers this mechanism. Latest production pull returned HTTP 402 with a local request counter mislabeled credits. Confirm Blockscout's published costs/remaining headers before implementation. Run a read-only registry policy/relationship projection and show counts before any deployment.

Implementation: weighted quota reservation and provider breaker; daily cadence with explicit seed, active, maintenance, archive/hold decisions; fair selection and bounded work; derived relationship index keyed by chain/address, preserving evidence and avoiding ownership claims from shared infrastructure; unique/fresh aggregation and a relationship view; daily Grok worklist and Claude review protocol; scheduled workflow health and artifacts; tests and release/build checks.

Done: implemented weighted provider quotas and persisted 402 breaker; selective daily/weekly/monthly refresh with initial seed caps and identity/archive holds; canonical relationship projection and public Connections view; unique fresh factory/pool totals; bounded Grok worklist and Claude identity queue; daily pull/compile with reports and stale-run health; deterministic duplicate packet resolution and no-change compile shortcut; build-time content parsing and compact route payloads. Root tests, release validation, frontend types/lint, both hosting builds and smoke checks pass. See `docs/reviews/2026-09-09/handoff.md` for measurements and rollout limits.

Not done: controller review, merge/deployment, production CPU/quota measurement, external Grok session rescheduling and Claude identity adjudication. Full static serving, incremental event cursors and per-address observation storage remain follow-on work. No producer messaging, paid services, or automatic research approvals were performed. Existing standing research PR #62 remains the producer lane; PR #92 is separate work.
