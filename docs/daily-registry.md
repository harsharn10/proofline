# Selective daily registry

The user approved a daily, relevance-filtered registry on September 8, 2026. This policy supersedes the six-hour blanket refresh and three-events-per-update requirements in older assignments and operational notes. Existing research, identity, evidence and publication gates remain in force.

## Source of truth

Canonical project deployments and dependency cards are the sources for a derived relationship index, keyed by chain and normalized address. `scripts/lib/relationships.mjs` owns that projection; `scripts/lib/refresh-policy.mjs` owns eligibility. Do not hand-maintain a second address list, relationships spreadsheet, or per-producer relevance policy. `npm run registry:plan` writes the reproducible projection to `build/registry.json`; builds publish it at `/data/registry.json`. The `/relationships` page shows sourced shared contracts and declared dependencies.

Sharing an infrastructure address does not establish common ownership or a common team. A shared token address flags a possible identity conflict for Claude/owner review; it never automatically merges projects. Source IDs are scoped to each project's source ledger. Conflicting claims remain visible. Display names and tickers are labels, never identity keys. Solana address case remains significant.

## Refresh selection

| Condition | Scheduled treatment |
| --- | --- |
| No pulled record | One initial read, up to 10 seed reads in a run |
| Confirmed identity, not observe-only, above the existing $25K liquidity/TVL bar, own activity within 7 days | Daily |
| Own activity within 30 days, or first 14 days after seeding | Weekly |
| Other records without a positive recent activity signal | Monthly maintenance |
| No own activity for 90 days and below the relevance bar, including a seed with no activity over 90 days | Ignore in routine pulls; keep public history |
| Unresolved identity conflict after initial seeding | Hold for Claude/owner review |
| Dated queue request within 7 days | Reactivate for the next daily selection, unless identity is conflicted |
| Explicit `--only` or `--full` dispatch | Override eligibility/cadence; weighted quota and time limits still apply |

Shared factory activity cannot keep every token launched through it active. Activity comes from a project's own non-conflicted token or unshared deployment. At least one deterministic representative of shared factory/router/vault infrastructure remains on weekly maintenance; it does not establish ownership of that infrastructure. No records are deleted by archiving.

Select at most 80 due names per automatic run, sorted by queue priority and overdue age, with a seed cap of 10. Aging eventually lifts maintenance work above regularly completed names. Provider credit and time budgets can reduce the number actually reached. The command `node scripts/pull.mjs --plan` is entirely read-only and performs no provider requests.

These thresholds are conservative operating defaults, not a ranking of project quality. A project can re-enter through an explicit dated queue request or a new independently sourced observation; archived projects do not continuously poll themselves for reactivation.

## Cost and collection boundaries

Blockscout requests reserve the documented route weight (usually 20 credits), including retries. The daily credit cap is 60,000, the automatic run cap 40,000; the provider advertises 100,000 free credits/day. The remaining 20,000 internal allowance supports explicit recovery without consuming provider headroom. These are weighted credits, not physical requests. Legacy same-day counters are multiplied by 20 on read and emitted as version 2. A 402 opens a persisted provider breaker until the next UTC date. Remaining-credit headers can only lower the local remaining allowance; conservative reservation slack may leave credits unused.

Default activity walks use two pages; deep legacy role-specific walks are available only with `--full`. A cap produces a lower bound, not an exact total. Shared low-level RPC/explorer method calls retain per-run memoization. Address documents are still stored per project for compatibility; the graph is deduplicated, and a future storage migration can normalize those files without changing consumers.

Partial provider failures leave last-success time unchanged and keep requested work in the queue. A successful partial file write is not proof the sources refreshed. Snapshot history remains append-only. Homepage launch totals choose one latest observation per distinct factory, discard stale windows, and label partial totals. The available measurements are tracked-factory launch-method observations, not a chain-wide count of distinct launched projects.

## Daily workflow and responsibility map

1. GitHub Pull: 09:17 UTC; selected machine facts only, 30-minute work deadline within a 45-minute job. Schema validation and post-rebase validation precede the data push. Quota state persists separately on failure.
2. Grok Heavy: once daily, use the current published registry worklist and canonical main. Inspect at most 20 eligible existing names and seed at most 10 genuinely new names. Rotate the eligible set even when a prior day wrote no updates. Check what changed against the newest packet and exact source receipts. No change means no packet. One material event is enough. Discovery does not require continuous polling of archived names.
3. GitHub Compile: 11:47 UTC, or manual dispatch after a producer finishes. It consumes validated packet changes, never merges producer PRs, and skips scoring/build work for an empty inbox. Equal-date conflicting copies of a packet path wait for controller review. The hours are scheduling preferences, not a guarantee that GitHub or an external research session ran on time.
4. Claude/controller: inspect the latest pull report, identity-conflict queue and producer errors. Resolve canonical identity and dependency meaning using receipts; review implementation PRs and source quality. Never enable channel delivery as a side effect of compilation. Controller merges remain gated by the existing process.
5. GitHub Health: 15:37 UTC; fail if pull or compile has no successful run in 36 hours. No automatic paid failover and no retry storm. Pull and compiler artifacts are retained for 7 days, and degraded pulls appear explicitly in the run summary. A cron hosted on GitHub cannot independently detect a complete GitHub outage; the public observation timestamps remain the reader-visible fallback.

Grok and Claude sessions are external to these workflows. Changing repository instructions does not start or reschedule a running external session. On rollout the owner/controller must point the existing Grok session to the new daily assignment; do not leave the old six-hour prompt running. No model API calls or new paid service are introduced here.

The existing optional Pulse Worker remains a separately bounded ten-minute live snapshot. Its alerts remain behind the existing paused delivery switches; this change does not turn them on. Its source rules are hour-based, so changing its cron to daily would require a different signal design. The researched registry and packet cycle are daily.

## Frontend and operations

YAML parsing and research Markdown sanitization now happen at build time. Public-serving bundles omit account notes and carry a bounded history window; full source history stays in Git. Connections expose evidence-backed infrastructure relationships. Code, packets, machine observations, and approval ledgers retain separate ownership.

Do not use the old cost tables as proof of 1,000-name capacity: they measured requests and included quota-denied reads. Measure completed relevant names, overdue age, weighted provider cost, public payload size, and deployed Worker CPU after rollout. Full static prerendering, incremental event cursors and per-address observation storage are follow-on changes, not claimed as implemented by this policy.
