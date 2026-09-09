# Observation semantics handoff

PR: #101. Branch: `codex/20260909/observation-semantics`. Base: `5bf713c5a871058b3b7d598807dfe1ce642f4b83`.

## Done

- Public KPI construction now uses the same ownership-aware `ownActivityAt` function as refresh planning. Shared factory activity cannot independently revive unrelated projects; conflicted token activity cannot be attributed through the market shortcut. Attributable activity retains the existing 7/30-day display thresholds and testnet/location overrides.
- Own market activity must belong to the pulled chain; last activity is ordered by parsed timestamp rather than lexical timezone formatting. Future observations are excluded.
- Factory freshness distinguishes an explicit null (fresh) from an absent legacy field that inherits aggregate staleness.
- Equal-time conflicting factory counts or freshness states are withheld and marked partial. Duplicate error flags cannot disappear through input order. A genuinely newer observation resolves the older tie.
- Equal-time conflicting pool volumes withhold the scalar volume total, because its existing public type has no partial/conflict field. Pool accumulation order is deterministic. No schema migration introduced.
- Transaction totals retain known zero, while empty, missing, invalid, negative or overflowing observations do not become an authoritative total.
- Added four regression groups covering these cases, including reversed order, repeated duplicate copies, newer replacement, timezone order and attribution boundaries. Two aggregation regressions failed against old code before implementation and now pass.

## Measurements or cost

No external requests, paid services, new dependencies or generated data added. The public content cache builds a relationship index from already parsed canonical projects. No production CPU or provider-credit reduction claimed for correctness work.

## Gates

- `node --test scripts/test-daily-registry.mjs`: all 14 tests pass.
- `npm test`: passed root validation, unit/pipeline/packet/compiler/pull/cache/signal suites.
- `npm run validate:release`: 181 projects, 0 errors, 655 existing warnings.
- `npm --prefix site test`: typecheck and Markdown security passed.
- `npm --prefix site run build` and `npm --prefix site run smoke`: passed; public routes work, anonymous review GET/POST return 401, cross-origin moderation rejected.
- `git diff --check`: clean. Only assignment-owned implementation/test/docs paths changed.
- GitHub CI must run against the implementation commit; earlier green checks on the kickoff assignment are not implementation verification.

## Not done

- Not merged or deployed. No browser/mobile/accessibility sign-off, independent security audit or new Cloudflare-runtime benchmark.
- This fixes the shared aggregation functions and public project-activity input, not every metric consumer. Category totals and `notListedCount` still sum per-project `factoryLaunches24h`, and the directory type still represents missing factory activity as zero. These need a separate UI/read-model assignment with nullable coverage-aware distinct totals. The below-bar subtraction also needs checking: launch-method calls and distinct listed projects are not automatically comparable units.
- Located projects with no attributable activity retain the existing Quiet fallback. A richer unknown-activity label is a separate product/state decision.
- Partial API paging retains the existing counting semantics; no new assertion that every error yields a valid lower bound.
- Failed-established-name retry fairness, report-aware cron health, carried structure provenance, per-address storage, review fan-out and static serving remain pending.
- No identity resolutions, score-label changes, risk-layout changes, producer session scheduling or delivery switch changes.

## Product direction and next work

PR #100 now captures the owner's ambition: #1 Robinhood ecosystem tracker, “SemiAnalysis for the Robinhood ecosystem,” with a nutshell for casual readers and original evidence-backed analysis for serious analysts. It is a separate docs PR, not merged into this independent fix branch.

Next: review #101, then create a fresh scoped assignment for category/home aggregate projection semantics (unique identities, compatible units, null/partial states). Follow with multi-day retry fairness and report-aware health. Do not migrate storage before these interpretation contracts are established. PR #92 and producer PRs #62/#95 remain separate; do not merge the standing producer branch.
