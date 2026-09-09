# WORK-20260909-incremental-activity

Base: `1ba2961` (merged PR #98, owner authorized merge). Producer: Codex.

Objective: reduce repeated inbound activity paging on overlapping refresh/recovery runs with a bounded, chain/address-keyed cache. Do not promise ordinary once-daily savings when windows do not overlap. Reuse only finalized history behind an RPC-verified checkpoint; missing finality, stale/corrupt cache, missing anchors or inconsistent explorer overlap must fall back to the existing bounded scan. Deduplicate transaction hashes and do not treat malformed timestamps as proof of a complete window.

Allowed paths: `scripts/**`, `schema/**`, `docs/**`, `package.json`, `.github/**`. Runtime cache is machine-owned under `content/pulled/activity-cache/`; no generated cache or pulled facts are committed in this PR. No changes to identity decisions, producer sessions, delivery switches or paid services.

Probe: Robinhood RPC answered `eth_getBlockByNumber("finalized", false)` with a numbered/hashed/timestamped block. The anonymous public explorer transaction endpoint returned HTTP 403 HTML, so live explorer compatibility is not claimed; confirm response fields from primary API specifications and use transport fixtures. The existing walker already stops at the 24-hour boundary and is capped at two pages in automatic runs. Target measurable page savings on overlapping windows, not invented broad savings.

Implementation: finalized suffix/checkpoint cache; one chain/address record independent of project roles; strict bounded validation/retention and atomic write; incremental walker and existing unchanged-signal integration; telemetry in pull report; corruption/reorg/expiry/overlap/pagination tests. Full dispatch bypasses reuse. Keep current public observation schema compatible.

Gates: root and pull tests, release validation, site tests/build/smoke to catch shared module consumers, read-only production check after PR #98 rollout. New implementation lands in a separate reviewed PR; do not automatically merge this next PR.

Done: PR #98 merged and production revision `1ba2961` verified (registry/Connections 200, private review 401). Finalized activity cache and incremental walker implemented; normalized storage, bounded retention, atomic writes, telemetry, checkpoint/overlap verification, duplicate handling and malformed-window protection covered by eight new tests. Existing pull tests and daily-registry tests pass; root/release checks and frontend/Cloudflare build/smoke pass. See `docs/reviews/2026-09-09/incremental-activity.md` for evidence and rollout limits.

Not done: controller review and merge of PR #99; production cache-hit measurement and successful live explorer join verification. Browser/mobile QA remains unavailable in this session. PR #92 and producer PRs #62/#95 are separate lanes. Full observation normalization, static serving and external producer session changes remain separate follow-ons.
