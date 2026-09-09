# Mission, user journeys and system alignment

Status: proposed alignment and implementation backlog for owner/controller review, September 9, 2026. Inspected base: `5bf713c`. This is not a new approved PRD or an automatic policy migration.

## What we are building

Owner-confirmed positioning: **Be the #1 Robinhood ecosystem tracker—for screen-glued analysts and casual readers alike. “SemiAnalysis for the Robinhood ecosystem.”** This is an ambition and editorial shorthand, not a claim of current market leadership or affiliation.

One product, two depths: casual readers get the nutshell—what it is, what happened and why it matters. Analysts get original analysis, mechanisms, activity, relationships, controls and traceable evidence. Simple on the surface, rigorous underneath.

Ecosystem tracking is the product; trustworthy research is its foundation. The tracker supplies facts; original analysis connects the dots and explains implications, with inference and uncertainty explicitly distinguished from verified evidence. We are not merely a directory, dashboard or rewritten-news feed. Start with the existing Robinhood Chain coverage; the broader Robinhood ambition does not silently authorize brokerage or other-chain expansion.

Mission: **Help readers understand what exists, what it does, what changed, how it connects, why it matters, and what the evidence does—or does not—support.**

Proofline is the repository/research system; Icarus is the current public presentation. This review does not rename either. The intended product is a sourced ecosystem registry with maintained research and material change reporting, not a comprehensive price terminal, investment recommendation, contract audit, safety guarantee, or feed of every token launch.

The useful outcome is a reader making sense of a project faster without mistaking a claim for a checked fact. Discovery and market activity help readers find relevant research; they must not become substitutes for that research.

Sources of intent:

- [PRD](../../PRD.md), sections 1, 2, 4–7: native-chain scope, research questions, evidence, confidence, risk and non-goals.
- [Icarus design](../design/icarus/README.md), sections 1–4: home → category → name, visual tokens, component/page rules, reader language and distribution.
- [Research contract](../research-system.md): sourced claims, independent verification, canonical identity and controlled publication.
- [Daily registry](../daily-registry.md): selective refresh, bounded cost, relationship graph and operational roles.
- [Process](../process.md): path ownership, assignment, review and merge gates.

These documents overlap but are not interchangeable. The research contract names PRD as editorial authority, while the later Icarus spec changes important presentation choices. This review identifies the differences; it does not silently resolve them by date alone.

## Goals and non-goals

1. Explain the mechanism: what the project actually offers today, where it is deployed, and which questions remain unanswered.
2. Establish provenance: distinguish official links, deployment evidence, project claims, independent checks and disputes.
3. Make material changes easy to catch up on without publishing refresh noise.
4. Explain relationships through typed, sourced edges, including shared dependencies and control paths where evidence exists.
5. Maintain relevant information affordably, with honest ages, coverage and failure states.
6. Make correction and operator recovery possible without rewriting history or requiring a new paid service.

Do not optimize for the number of names, packets, cron executions, charts or AI-written words. Do not infer common teams, ownership or wrongdoing from address reuse. Do not broaden to other chains or make every discovered asset a researched subject as a side effect of collection. Preserve the current no-wallet-labeling and maintainer-controlled publishing rules.

## User stories and acceptance criteria

These are design hypotheses grounded in the existing specifications, not results from user interviews. Validate them with real users before treating usability targets as measured outcomes.

| ID / user need | Successful journey | Acceptance criteria / system requirement |
| --- | --- | --- |
| U1 — New reader: understand a name | Home/category or direct link → profile → official sources | Mechanism-first summary, chain and deployment state are visible; missing research is explicit; official links are distinguishable from third-party commentary. |
| U2 — Returning reader: catch up | Home/feed → material event → affected profile/evidence | Event has occurrence and observation context, source and affected project; duplicate ingestion produces one event; a no-change refresh produces none. |
| U3 — Researcher: inspect control and uncertainty | Profile → Control/Checks/Sources | Every material control/security assertion has scoped sources and evidence status; observed age is available; verified proxy source does not certify its implementation. Unknown never reads as safe. |
| U4 — Ecosystem builder: understand connections | Connections → shared contract/dependency → profiles | Chain/address identity is canonical; edge role and source are inspectable; shared infrastructure is not labeled shared ownership; ambiguous token identity remains held. |
| U5 — Reader: compare relevant projects | Category → comparable metrics → source/window | Ranking basis is named and comparable; stale, partial and missing values do not look current or become zero; a busy shared factory does not revive unrelated projects. |
| U6 — Subscriber: receive useful updates | Approved material event → Telegram → source/profile | Approval and publication fingerprints remain enforced; retries do not duplicate sends; file updates, score bookkeeping and channel enablement are separate actions. |
| U7 — Reader/project representative: correct an error | Profile → corrections contact → reviewed correction | Contact is reachable; a correction preserves prior evidence/history; a claimant cannot overwrite canonical identity merely by requesting it. End-to-end response handling needs an operational check. |
| U8 — Bootstrapped operator: maintain the registry | Daily plan → bounded collection → report → selective recovery | Eligibility, skips, holds and retry reasons are visible; failures cannot starve other due work; success reports distinguish execution from data freshness; no automatic paid fallback. |
| U9 — Grok/Claude: do distinct work | Assigned worklist → sourced packet → verification/controller review | Grok proposes evidence and identity matches, not final merges; verifiers file independent evidence; Claude/controller resolves holds and reviews. No-change is legitimate; actual external session completion is observable. |
| U10 — Analyst or casual: understand implications | Nutshell → original analysis → supporting evidence and counterevidence | Explain why a development matters, mechanisms and relevant common ties; distinguish analysis from fact; expose uncertainty and contrary evidence. The nutshell and deep read must tell the same story at different depths. |

## Do we have a design system?

**Yes, a useful visual and component foundation—not yet a complete behavior/state contract.**

Existing assets: Icarus's light/dark palette, typography, spacing/radius rules and page hierarchy; `site/src/styles.css` token definitions; reusable status pills, badges, source references, tables, metric tiles, segmented controls and charts under `site/src/components/ui/`; Markdown sanitation and a review checklist.

The missing layer is consistent meaning across components. The same value/status must mean the same thing on home, category, profile, Connections, the published machine registry and operator review.

Add a documented component state matrix, then implement and test it:

| State | Meaning | Presentation requirement |
| --- | --- | --- |
| Known zero | Successfully measured zero within the stated window | Show 0 and source/window. |
| Unknown / not checked | No usable measurement | Show a dash or explicit not-checked text, never 0. |
| Stale | Last good measurement is older than the field's validity window | Preserve value where useful, with age; exclude from current rankings/totals. |
| Partial | Only part of the intended window/coverage was observed | Say partial; use lower-bound language only when the counting method guarantees a lower bound. |
| Conflicting | Equally applicable evidence disagrees | Show disputed/unresolved state; withhold an authoritative current total. |
| Not applicable | The measure does not describe this kind of project | Omit or label not applicable; do not classify as an error. |

Additional acceptance work: keyboard navigation and focus, mobile table/chart overflow, light/dark contrast, source link accessibility, loading/empty/error states, and non-color-only status cues. These are requirements to verify, not a claim of completed accessibility or browser testing.

Keep distinct: deployed versus recently active; activity versus research completeness; official links versus endorsement; market traction versus security; last attempted refresh versus last measured fact. Existing five-word activity pills cannot communicate every axis by themselves.

## Do we have a logic system?

**Yes, distributed across contracts, schemas and modules—but its cross-layer invariants are not consistently enforced.**

Existing: JSON schemas and referential validation; packet evidence/role gates; deterministic score derivation; canonical deployment graph; selective refresh planner; weighted credit limits; source-specific readers and bounded activity cache; compiler change detection; publication approval/fingerprints; protected review endpoints.

The shared contract should be:

| Concern | Authoritative input | Derived result / invariant |
| --- | --- | --- |
| Identity | Reviewed canonical project plus sourced deployment/alias claims | A ticker is not a key; chain/address identifies a deployment, not automatically a project. |
| Observation | Source, entity key, field/window/block, measured-at, attempt outcome | Copying a value never updates its measured-at time. Different providers may own different fields. |
| Relationship | Typed project-to-contract/project-to-dependency claim with scoped source | One shared observation can serve many references; no inferred team tie from shared infrastructure. |
| Activity | Attributable project observations | Collector, planner and UI use the same ownership-aware rule. |
| Refresh | Relevance, evidence age, attempt/backoff, queue and quota | Due is not synonymous with selected or successfully refreshed. |
| Change | Material sourced difference against canonical state | Repeated identical input is idempotent; unresolved conflicts do not become latest-wins. |
| Aggregation | Distinct compatible fresh observations | Input order cannot change a total; known zero differs from missing. |
| Publication | Approved current content fingerprint | Compiling a profile does not authorize external delivery. |

Logical separation need not mean microservices or new databases. Keep one repository and small modules; centralize interpretation before moving storage. Normalize address/pool measurements without erasing project-specific claims, contradictory evidence or append-only history.

## Product mismatches found

1. **Breadth versus depth:** canonical data at the reviewed base contains 181 projects, only 1 with `coverage: full`. This does not mean the other 180 contain no useful evidence. It does mean registry size is not a measure of completed research. Approval fields alone are not proof of full depth. Prioritize closing material gaps for relevant names alongside bounded discovery.
2. **Score meaning:** the PRD defines a weighted evidence score across security, engineering, transparency, maturity and economics. The Icarus UI labels `derived.score` “Control”. The calculation and label are not the same concept. Recommend correcting the label/explanation; changing the rubric is a separate owner decision, not a cosmetic fix.
3. **Risk prominence:** the original mission emphasizes control and uncertainty; the Icarus spec deliberately puts the risk block below Related. Recommend testing a compact material-warning/evidence-gap summary near the identity/status area, while keeping detailed analysis below. Do not silently overrule the approved layout.
4. **Daily product versus real-time language:** “right now”, “live” and “launches today” need explicit windows and tracked-coverage explanations. Daily collection is appropriate, but cannot promise uninterrupted real-time monitoring.
5. **Documentation drift:** README/older contracts still describe already-shipped components as planned; original PRD excludes filters/charts while Icarus includes them; six-hour references survive. Establish an owner-approved current product contract and mark superseded sections rather than pretending all documents agree.
6. **Execution gap:** repository producer instructions are not proof that Grok/Claude sessions are on the daily assignment. Standing PR #62 still advertises six-hour work in its title. Verify actual session configuration before declaring rollout complete; do not change external schedules or merge the standing producer PR as a documentation side effect.

## Operating model and goals

One daily registry cycle should select work, not refresh the entire universe. Keep bounded initial seeding, daily relevant active names, weekly recent/observation-window names, monthly maintenance, and archived below-bar names with sourced reactivation. Identity holds remain independent of popularity. Shared infrastructure gets a suitable representative reader without making every associated project active.

Track these outcomes before expanding scope:

- Priority-project research completeness and oldest unresolved material gap, not just file count.
- Freshness compliance among names actually due under their tier, not all names every day.
- Weighted credits and elapsed time per successful useful read; denied/failed calls count as cost, not coverage.
- Retry/deferred age and seed throughput; explicit tests that failures cannot monopolize capacity.
- Source/measurement-window availability for public numbers; zero tolerance in regression tests for fabricated zero or order-dependent totals.
- Material update delay, duplicate-event count, correction handling and unresolved identity age.
- Public response size, deployed CPU, build duration and operator review time.
- User task completion for U1–U7 using a small observed session; no invented conversion or usability statistics.

No new paid service is necessary for the proposed fixes. Zero spend is a budget constraint with graceful degradation, not a guarantee of unlimited freshness or traffic. Keep optional Pulse separate from the daily research product until its distinct signal requirements are reviewed.

## Sequenced work: nothing silently dropped

| Work | Stories | Scope and completion gate | State |
| --- | --- | --- | --- |
| P0 product alignment | All | This document, owner review of score wording/risk placement and source-of-authority drift | Proposed in this PR |
| P1 observation interpretation | U3–U5, U8 | Shared own-activity rule; fresh row versus stale aggregate; equal-time duplicate conflicts; zero versus unknown. Regression fixtures, UI consumer checks, unchanged unrelated policy | Next code assignment |
| P2 refresh/recovery health | U8–U9 | Established-failure fairness/backoff; report-aware watchdog; distinguish no-change/held/failed compiler input. Multi-day simulation and failure cases | Pending |
| P3 measurement provenance | U3, U5, U8 | Preserve carried structure measurement times/errors; surface field freshness and audit cheap-signal invalidation | Pending |
| P4 shared observations | U4–U5, U8 | Canonical chain/address and chain/pool storage behind tested resolver; compatibility comparison; preserve sourced roles, conflicts and history | After P1/P3 |
| P5 public/private read efficiency | U1–U5, U8 | Compact/static public projections; bounded review API fan-out with consistent revisions and write concurrency preserved. Measure deployed CPU/build/API usage | Pending |
| P6 research and relationship quality | U1, U3–U4, U9 | Prioritize relevant gaps; Claude resolves identity/dependency semantics with evidence; source-backed common ties beyond infrastructure only where justified | Separate research lane |
| P7 design/state assurance | U1–U7 | State matrix, source/window visibility, score-label decision, keyboard/mobile/theme QA and short user-story walkthrough | Pending |
| P8 rollout and recovery | U6, U8–U9 | Verify daily external sessions; production cache benefit; data health; manual replay/idempotence; preserve paused delivery settings | Pending |

The first implementation assignment should be P1, not a new database or a new feed. P1's truthfulness fixes follow existing contracts and do not depend on approving a redesigned homepage. P2 can follow independently. Existing activity-stream PR #92 must be evaluated against these stories and cost boundaries; it is not implicitly approved or merged by this backlog.

## Evidence and limits

Implementation anchors: `scripts/lib/relationships.mjs` (own activity and unique totals); `scripts/lib/refresh-policy.mjs` (eligibility and priority); `scripts/pull.mjs` (attempt versus retained measurements); `scripts/lib/score.mjs` (weighted score); `scripts/compile-inbox.mjs` (candidate dispositions); `.github/workflows/daily-health.yml`; `site/src/data/content-server.ts`; `site/src/data/review-auth.ts`; `site/src/data/review-server.ts`; `site/src/components/card/name-card.tsx`.

The preceding read-only logic review reproduced: shared versus own activity divergence in seven project inputs; a fresh factory row hidden by aggregate staleness; duplicate totals changing from 3 to 9 when input order reverses; and an 80-failure queue excluding one overdue healthy name. Existing pull tests and site type/Markdown checks passed despite those missing cases. These are unshipped fixes, not completed work.

No new user interviews, visual/browser QA, penetration test, external agent rescheduling or live cost benchmark was performed for this document. It connects mission to verifiable work and makes the remaining decisions explicit.
