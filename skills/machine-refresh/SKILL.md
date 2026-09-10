---
name: machine-refresh
description: Plan or operate Proofline machine-observation seeding and selective refresh under the existing relevance, quota and measurement-freshness rules. Not an AI research or publication task.
---

# Machine observations

Read current main `AGENTS.md`, `docs/ingestion.md`, `docs/daily-registry.md` and the current workflow definition.
Start with `node scripts/pull.mjs --plan`: it makes no provider requests. Distinguish an initial machine read
from a research seed. Use the existing selector and budgets, not a new list or per-agent thresholds.

Actual collection or manual overrides require a scoped authorized run. Keep stopped schedules stopped.
Do not use `--full`/`--only` to bypass identity concerns or run blanket refreshes. Only the puller writes
machine data and append-only observation history. Shared infrastructure activity is not every token's activity.

Retained measurements keep their measurement dates; failed reads are partial/blocked, never fresh zeroes.
Inspect completion/deferred/provider reports, not just a green workflow badge. Preserve quota accounting
on failures; no paid failover, retry storms, credential changes or destructive resets.

Report what was actually measured and what remains stale. Do not turn a refresh into a site announcement,
publish a channel message, or infer that an external research cycle ran. Stop at the run's budget/deadline.
