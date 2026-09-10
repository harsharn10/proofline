# Admission, research depth and refresh

Owner direction: [#102](https://github.com/harsharn10/proofline/issues/102). Admission screening is
implemented by `scripts/lib/admission-policy.mjs`, separately from the machine-refresh scheduler.
The planner recommends; it does not approve identities, compile packets, promote daily refresh,
change scores, enable publication or dispatch agents. Existing compiler evidence gates remain mandatory.

## Decisions and evidence

`hold` means an identity conflict; `existing` means update the matched record, not seed another;
`ignore` needs a sourced out-of-scope finding; `watch` means missing evidence or insufficient significance;
`seed` means eligible for controller consideration. Seed does not mean full research. Unknown is not failure.

Required before seed recommendation: sourced identity crosslink, Robinhood relevance and deployment.
Then use one of three lanes: documented product mechanism, documented dependency use, or a token with
exact-contract FOMO/CoinGecko recognition or sustained own activity. Prelaunch and inactive subjects remain
watch candidates. One seven-day complete positive activity window can justify research priority, **not
prove seven individually active days or exclude wash activity**. No volume/holder weighting or new monetary
threshold is finalized here. Review activity quality, liquidity, concentration and source methodology.

FOMO verification and CoinGecko active listing are optional recognition signals, not security certifications.
CoinGecko preview and DEX Screener presence alone do not satisfy the token lane. Match chain and full contract,
never ticker alone. Record unavailable badges as unknown. Two providers may share the same upstream data;
do not count them as independent votes or sum their totals. A provider's query timestamp is not its data window.

## Offline controller command

For stored discovery leads, first run `node scripts/planning-inputs.mjs --issue 132` after fetching current
main/PR refs. It assembles canonical/dependency addresses, pending packet addresses (including drafts),
subjects from `content/pulled/discovery.yaml`, and runs this planner automatically. Outputs are
`build/admission-input.json` and `build/admission-plan.json`; no hand-written input YAML is needed to
surface a lead for review. Missing identity/deployment evidence remains `watch`, not automatic admission.
Legacy discovery numbers have no individual measurement windows: they remain undated lead hints, not
fabricated DEX Screener receipts or sustained-activity evidence. The controller/collector supplies real
dated evidence using the format below before a seed recommendation is possible. Fork packet PRs or
changed/unfetched heads fail closed for pending-identity review.

`npm run admission:plan -- input.yaml [dune-results.json]` prints recommendations only. Input has:

```yaml
pending_checked_at: 2026-09-10T12:00:00Z # refresh after checking all open PRs, including drafts
existing_addresses: [] # explicit {chain, address} rows from the canonical registry
pending_addresses: []  # same structure; empty only after an actual check
dune_query_id: 123     # optional; real reviewed query ID, not this example
subjects:
  - id: example
    chain: robinhood-chain
    address: "0x1111111111111111111111111111111111111111"
    entity_kind: token
    lifecycle: mainnet
    identity_status: provisional
    existing_match: false # also check official domains, handles, aliases and dependencies
observations: []
rialto_pulled: [] # optional existing content/pulled/<slug>.yaml objects; no new collector
```

An observation has `subject`, `chain`, optional exact `address`, `kind`, `source_url`, `observed_at`,
and `status: observed`. Kinds: `identity-crosslink`, `robinhood-relevance`, `deployment`,
`product-mechanism`, `dependency-use`, `fomo-verified`, `coingecko-active`, `out-of-scope`, `activity`.
Activity additionally needs numeric `value`, `metric`, `window_start`, `window_end`, `scope: own`,
and `complete: true`. Token activity requires the exact contract. These declarations require source review;
the program checks shape/identity/time, not truth. Do not fabricate declarations from a badge or project name.
Pending snapshots expire after 24 hours. Selection is capped at ten seeds; it is not an assignment claim.

## Dune and Rialto

Dune integration initially accepts **exported result JSON**, not automatic API calls. A reviewed query must
project `chain_id: 4663`, full `address`, integer `tx_count`, `window_start`, `window_end`, `scope: own`, and
`complete: true`. The envelope retains `query_id`, `execution_id`, `execution_ended_at`, `state`, `result.rows`
and expiration if supplied. Reject incomplete/paginated, expired, future, wrong-query, wrong-chain or conflicting
results; maximum 1,000 rows. Do not remove pagination markers to force acceptance. Review SQL/address sets,
indexer lag, coverage, bot filtering, and whether router activity belongs to the subject before importing.

No Dune credentials are created/read by this command; no query execution, scheduling, paid calls or export
is initiated. Cached API retrieval still consumes credits. Live automation remains gated on a pinned reviewed
query, actual Robinhood dataset coverage, confirmed free quota and account-level no-overage controls.
[Dune result API](https://docs.dune.com/api-reference/executions/endpoint/get-query-result),
[billing](https://docs.dune.com/api-reference/overview/billing).

Boundary check, September 10: Dune has a [Robinhood chain catalog](https://dune.com/blockchains/robinhood).
Community dashboard presence is not query approval: for example, this
[activity dashboard](https://dune.com/nft_overview/robinhood-chain-is-activity-going-up-or-down)
explicitly groups all contracts per ticker and describes older measurement windows. That grouping is not
acceptable for canonical identity joins without reviewed migration relationships. No live Dune query is pinned
by this change. A read-only Rialto activity probe returned 81 daily rows through September 9; those are aggregate
analytics, not proof of any individual protocol's activity.

Rialto already has a keyless cached collector. Reuse its full-token, address-matched observations with their
own `as_of`; partial pool-leg estimates, symbol-only rankings and whole-chain counts cannot establish a
project's own activity. Its 24-hour observation alone does not establish sustained activity. Dune and Rialto
stay separate evidence records; neither overwrites the other on disagreement.

## Lifecycle and relationships

Own protocol token: one profile. Independent launchpad child: separate identity. Shared factories, pool
managers, bridges or curators are dependencies, never automatic common-team/ownership claims. Dependency
records remain in the registry even without profile references. Do not sum curator/vault/underlying capital.
Typed launch/ownership edges still require sourced canonical relationship work; this change invents none.

Inactive/announced profiles receive monthly maintenance rather than daily promotion from residual token
trading. Recent activity against those labels appears as a controller mismatch. Identity conflicts remain held;
an explicit dated controller reactivation/manual override keeps its existing semantics. Dormant ignored names
appear in a bounded rotating cheap-reassessment recommendation, not a forced full pull. No-change is a task
note, not a packet or news item. The existing daily scheduler and provider caps are unchanged.

## Regression cases

`scripts/test-admission-policy.mjs` covers recognition without identity, mismatched contracts/chains,
preview listings, tokenless products, dependency relevance, short spikes, zero/negative activity, stale/future
evidence, inactive/announced states, duplicate subjects, partial/expired Dune results, source replay,
Rialto attribution and file-timestamp false freshness. These are synthetic policy tests, not verification of
real project identities. The 176 provisional/five conflicted identities are not bulk approved by this work.
