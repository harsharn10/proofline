# Selective daily registry

For the owner-confirmed mission and user-story acceptance criteria, see [product alignment](product/mission-and-system.md). Current implementation status and remaining decisions live in [roadmap #102](https://github.com/harsharn10/proofline/issues/102). Proposed changes do not override the operating rules below until reviewed and merged.

The user approved a daily, relevance-filtered registry on September 8, 2026. This policy supersedes the six-hour blanket refresh and three-events-per-update requirements in older assignments and operational notes. Existing research, identity, evidence and publication gates remain in force.

## Source of truth

A protocol and its own token are one canonical project profile. Independently launched tokens keep their own project identities and sourced launchpad relationships; sharing a launch factory is not token ownership. Own-token and quote/collateral roles must remain distinct. See the [research identity contract](research-system.md#protocols-own-tokens-and-launched-projects).

Scheduled research intake follows open, ready, same-repository producer PRs; drafts are held and closed historical branches are not work. The GitHub snapshot fails closed on errors and is retained with the report. Retire superseded packets without deleting evidence or relabeling old observations as fresh; see the [September 9 retirement audit](../research/archive/20260909/README.md).

Canonical project deployments and dependency cards are the sources for a derived relationship index, keyed by chain and normalized address. `scripts/lib/relationships.mjs` owns that projection; `scripts/lib/refresh-policy.mjs` owns eligibility. Do not hand-maintain a second address list, relationships spreadsheet, or per-producer relevance policy. `npm run registry:plan` writes the reproducible projection to `build/registry.json`; builds publish it at `/data/registry.json`. The `/relationships` page shows sourced shared contracts and declared dependencies.

Sharing an infrastructure address does not establish common ownership or a common team. A shared token address flags a possible identity conflict for Claude/owner review; it never automatically merges projects. Source IDs are scoped to each project's source ledger. Conflicting claims remain visible. Display names and tickers are labels, never identity keys. Solana address case remains significant.

## Measurement dates are not refresh dates

A successful pull/check is not proof every field was remeasured. Token structure retains its block timestamp and caveats when the explorer measurement is skipped. New `mint_as_of`, `renounced_as_of` and individual LP `as_of` dates advance only for measured results; ABI reuse and retained LP results keep their original dates. Failed owner probes cannot date carried ownership as newly measured. Legacy field dates remain unknown rather than borrowing a potentially rewritten `pulled_at`. Token cards expose mint, LP and concentration measurement dates, including unknown dates and retained LP failure reasons. Concentration shares travel together with `top10_as_of` and their caveats; a newly observed fully burned supply clears old concentration instead of relabeling it. This is additive metadata, not a bulk reseed or additional provider schedule.

## Refresh selection

| Condition | Scheduled treatment |
| --- | --- |
| No pulled record | One initial read, up to 10 seed reads in a run |
| Verified or evidenced provisional identity, not observe-only, above the existing $25K liquidity/TVL bar, own activity within 7 days | Daily; not editorial approval |
| Own activity within 30 days, or first 14 days after seeding | Weekly |
| Other records without a positive recent activity signal | Monthly maintenance |
| No own activity for 90 days and below the relevance bar, including a seed with no activity over 90 days | Ignore in routine pulls; keep public history |
| Unresolved identity conflict after initial seeding | Hold for Claude/owner review |
| Dated queue request within 7 days | Reactivate for the next daily selection, unless identity is conflicted |
| Explicit `--only` or `--full` dispatch | Override eligibility/cadence; weighted quota and time limits still apply |

Provisional daily eligibility requires a canonical site/docs surface (or an app link for a protocol, application or tool), mainnet/beta lifecycle, positive deployed-on-chain qualification, and a sourced verified own deployment on Robinhood Chain. App links use the same shared surface predicate as the site and score emitter; a token's third-party launchpad listing does not qualify. Observe-only and conflicted rows remain excluded. Surface recognition is not identity or editorial approval: no review fields, coverage decisions or publication approvals are granted. Other relevance and publication gates still apply. Relevance values must be dated within seven days and token liquidity must belong to the subject's own token; a stale display value may justify recovery, never a fresh public label.

Shared factory activity cannot keep every token launched through it active. Activity comes from a project's own non-conflicted token or unshared deployment, excluding canonical dependencies and explicitly labelled quote/collateral references even when only one profile mentions them. These references remain on the map but do not get repeated per-project token reads. At least one deterministic representative of shared factory/router/vault infrastructure remains on weekly maintenance; it does not establish ownership of that infrastructure. No records are deleted by archiving.

Hot selection also checks component measurement dates against the next daily run plus two hours of scheduling headroom and the existing 36-hour freshness horizon. A fresh file timestamp cannot postpone an older component's due time. Retry cooldowns and budget/fairness caps still apply. GitHub delays or source failures can still leave data stale: never advance a timestamp or widen the public freshness window to conceal that. After an extended pause, inspect the plan and obtain a scoped recovery run; changing this policy does not itself refresh the site.

The infrastructure reader is selected from non-conflicted names that the puller can actually collect on its chain. Factory claims take precedence over router/vault claims so launch windows are not silently skipped. If every candidate is held, the plan reports that address as unassigned for Claude review; it never bypasses the identity hold. A failed initial read retains a null last-success time, and its retries continue to count toward the seed cap.

Select at most 80 due names per automatic run, with up to 10 seed slots and at most 20 retry slots (failed seeds consume both caps). Reserve seed access, then ordinary due work and a bounded retry allocation. Non-retry work executes before retries; unused retry slots remain available to ordinary work. Repeated failures rotate by last attempt on a daily clock, not by increasingly ancient last success. Automatic retries wait 22 hours (daily with scheduler tolerance), unless a newer dated reactivation request arrives; explicit manual force still overrides cadence but not provider quota. If only retries remain, the retry cap deliberately leaves capacity unused to bound repeated failure cost. Aging lifts maintenance work above regularly completed names. Provider credit and time budgets can reduce the number actually reached. The command `node scripts/pull.mjs --plan` is entirely read-only and performs no provider requests.

These thresholds are conservative operating defaults, not a ranking of project quality. A project can re-enter through an explicit dated queue request or a new independently sourced observation; archived projects do not continuously poll themselves for reactivation.

## Cost and collection boundaries

When both fresh and failed seeds are due, up to half the available seed slots are reserved for failed seeds and the remainder for new seeds, with unused space shared. This prevents continuous discovery from indefinitely postponing all failed initial reads. This is allocation fairness, not a guarantee that provider/time limits let every selected name finish.

Blockscout requests reserve the documented route weight (usually 20 credits), including retries. The daily credit cap is 60,000, the automatic run cap 40,000; the provider advertises 100,000 free credits/day. The remaining 20,000 internal allowance supports explicit recovery without consuming provider headroom. These are weighted credits, not physical requests. Legacy same-day counters are multiplied by 20 on read and emitted as version 2. A 402 opens a persisted provider breaker until the next UTC date. Remaining-credit headers can only lower the local remaining allowance; conservative reservation slack may leave credits unused.

Default activity walks use two pages; deep legacy role-specific walks are available only with `--full`. A cap produces a lower bound, not an exact total. Shared low-level RPC/explorer method calls retain per-run memoization. Address documents are still stored per project for compatibility; the graph is deduplicated, and a future storage migration can normalize those files without changing consumers.

`npm run audit:observations` is a read-only inventory of repeated payloads and unresolved variants. It preserves project bindings, measurement windows and market token perspectives. Repeated canonical-JSON bytes are not measured compressed-storage savings or duplicate provider calls. Address facts without uniform field-level dates remain undated in the audit; never replace them with a file refresh time. Define field/source provenance before physical normalization. Market-volume keys accept both pool contract addresses and 32-byte pool IDs; this does not widen deployment/token identity or turn a pool ID into a contract address.

Partial provider failures leave last-success time unchanged and keep requested work in the queue. A successful partial file write is not proof the sources refreshed. Snapshot history remains append-only. Home and category totals choose one latest observation per distinct factory or pool within their own scope, discard stale windows, and label partial totals. Equal-time conflicts are withheld. The available launch measurements are tracked-factory launch-method calls, not a chain-wide count of distinct launched projects. The New launches footer counts other tracked names with first pools in the same 14-day window; it never subtracts project counts from factory calls or claims unobserved names are below a liquidity threshold.

## Workflow health and recovery

Use [the operating map](operating-flow.md) for the single shared flow, owners and schedule.
Grok assignments use the generated bounded worklist; daily limits live in the shared policy.
This document owns measurement selection, costs and health semantics, not another workflow map.

Health inspects the latest scheduled main coordinator, not just the last successful badge. Require a
successful scheduled run within 36 hours and timestamped per-lane reports bound to that run ID, attempt
and trigger SHA by versioned execution receipts. Parent failure and lane outcomes are separate: a
failed compile does not suppress inspection of a successful pull. The receipt's workspace SHA describes
checkout/commit state, not the deployed website or fresh measurements. Old-attempt artifacts, manual
dispatches and missing/expired/corrupt artifacts cannot substitute for current scheduled evidence.

Pull health checks exact selected-name completion, failed/deferred reads, provider exhaustion and plan
membership. Intentional selection deferrals are visible backlog, not failed selected work; deferred
names whose last success exceeds their interval plus a grace of max(7 days, one interval) alert.
Compiler outcomes distinguish complete, no-change, partial, blocked, failed and dry-run; only
complete/no-change with successful gates is healthy. Routine superseded copies are not producer errors.
Artifacts are retained for 7 days. The health reader uses bounded read-only GitHub requests and no npm
install. No automatic paid failover or retry storm. A cron hosted on GitHub cannot independently detect
a complete GitHub outage; public observation timestamps remain the reader-visible fallback. These
checks do not independently re-measure every stored field or prove external research sessions completed.

Grok and Claude sessions are external to these workflows. Changing repository instructions does not start or reschedule a running external session. On rollout the owner/controller must point the existing Grok session to the new daily assignment; do not leave the old six-hour prompt running. No model API calls or new paid service are introduced here.

Recovery must also match the workflow version. Rerunning a historical scheduled job can use its old workflow definition with newer checked-out code; do not rerun it blindly after an interface change such as required PR-intake snapshots. Validate recovery against current main, use the current manual workflow where appropriate, and await a new scheduled cycle for scheduled-health evidence. A manual or local dry-run success does not replace that evidence.

The watchdog separately runs `scripts/measurement-health.mjs`, even after execution-report failure.
It compares the public `/data/health.json` manifest's served SHA to current main and recomputes ages at
check time. The manifest is built from the existing read-only planner and canonical pulled files;
it exposes no credentials or private account notes. Requests are HTTPS-only, unauthenticated, bounded
to 15 seconds and 2 MB with no redirect/retry. Missing or malformed output is unverified, not healthy.

Fresh, stale, retained, undated and unmeasured are distinct component states. Zero is measured; null
is not. Activity row dates/retention flags take precedence over aggregate dates. Mint, LP and
concentration use their own field dates; undated legacy/address facts never borrow `pulled_at`.
Daily hot market/metric components and dynamic activity rows require fresh observations. Activity
criticality reuses the puller's role/recent-activity predicate; an aggregate containing intentionally
quiet contracts does not force all of them to refresh daily. Partial collection, future
dates and maintenance beyond its interval plus max(7 days, one interval) require attention. Ignored
identities/archives remain disclosed without forcing reads. Noncritical static/structure dates are
inventory, not an instruction to remeasure every contract daily. Counts describe components, not names.
An old build alone does not force a daily rebuild when main is unchanged and measurements remain within
their policy. Deployment mismatch remains visible during an in-progress host build; recheck the exact
revision after deployment. This does not prove research completion or authorize automatic recovery.

Measurement attribution uses the same canonical subject/dependency projection as the website. Old
quote-token roles in retained files cannot make reference assets the subject's market or daily activity.
Shared infrastructure is critical only for its existing planner-assigned reader, not every attached
profile; source files and dates remain unchanged.

The existing optional Pulse Worker remains a separately bounded ten-minute live snapshot. Its checked-in `TELEGRAM_ENABLED` switch is false; the registry's separate `ops/telegram-review.json` ledger has `channel_enabled: true` at the reconciled main snapshot. Do not describe the whole system as paused or infer successful delivery from either flag alone: approval fingerprints, destination configuration and runtime credentials also apply. Preserve each existing setting; collection, compilation and a documentation change do not authorize enabling publication. Pulse source rules are hour-based, so changing its cron to daily would require a different signal design. The researched registry and packet cycle are daily.

## Frontend and operations

YAML parsing and research Markdown sanitization now happen at build time. Public-serving bundles omit account notes and carry a bounded history window; full source history stays in Git. Connections expose evidence-backed infrastructure relationships. Code, packets, machine observations, and approval ledgers retain separate ownership.

Do not use the old cost tables as proof of 1,000-name capacity: they measured requests and included quota-denied reads. Measure completed relevant names, overdue age, weighted provider cost, public payload size, and deployed Worker CPU after rollout. Full static prerendering, incremental event cursors and per-address observation storage are follow-on changes, not claimed as implemented by this policy.
