---
contract_version: proofline-research-v1
work_id: WORK-YYYYMMDD-producer-slug
producer: producer-id
role: collector # collector | verifier | compiler
base_sha: full-40-character-main-sha
slug: project-slug
name: Project Name
packet_tier: seed # seed | full | update
as_of: YYYY-MM-DDTHH:MM:SSZ
prior_packet: null
owned_slugs: [project-slug]
allowed_paths:
  - research/inbox/packets/project-slug/WORK-YYYYMMDD-producer-slug.md
---

# Project Name — Proofline research packet

Instructions: read `docs/research-system.md` and `docs/taxonomy.md` first. Keep every section. Write
`NULL — <reason>` when a required field was attempted but not established. Cite material statements as
`[R#]`. Do not resolve conflicts, set scores, claim approval, or authorize channel publication unless
the assignment role expressly owns that decision.

## 1. Assignment and disposition

- Requested outcome:
- Search window or event cursor:
- Canonical files checked:
- Other pending packets checked:
- Result: `proposed | no-change | conflicted | deferred`
- Summary of proposed canonical changes:

## 2. Canonical identity

| Field | Proposed value | Evidence | Status |
| --- | --- | --- | --- |
| Canonical name |  |  | claimed |
| Slug |  |  | claimed |
| Aliases |  |  | claimed |
| Symbols |  |  | claimed |
| Entity kind |  |  | claimed |
| Chain scope |  |  | claimed |
| Official domain |  |  | claimed |
| Official handle |  |  | claimed |
| Repository |  |  | claimed |

Possible matches and collisions:

| Candidate/canonical slug | Matching signals | Contrary signals | Disposition requested |
| --- | --- | --- | --- |
|  |  |  | review |

## 3. Classification

- Primary domain:
- Primary product leaf:
- Secondary product leaves:
- Mechanism tags:
- Ecosystem role: `subject | dependency | observe | graduation`
- Lifecycle: `mainnet | beta | testnet-only | announced | inactive | unknown`
- Coverage recommendation: `candidate | seed | full`
- Evidence-state recommendation: `verified | partly-verified | claimed | conflicted | unverified`
- Rationale for every primary/secondary label:

## 4. Snapshot

### What it is

NULL — research not yet written.

### Why it matters

NULL — research not yet written.

### What a retail reader could misunderstand

NULL — research not yet written.

## 5. Product and mechanics

- User action and expected output:
- Asset/cash flow:
- Dependencies:
- Fees and recipients:
- Upgrade or shutdown path:
- Mainnet evidence:

## 6. Deployments

| Label | Chain | Address | Role | Source | Reproduction | Verification scope |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  | proxy / implementation / full |

Never infer implementation verification from verified generic proxy source.

## 7. Control and security

- Privileged roles and current holders:
- Authorization topology and threshold:
- Timelock and user exit window:
- Pausing, upgrading, minting, fee, oracle, and allowlist powers:
- Audit artifact, commit, chain, address, and deployment match:
- Incident, bounty, monitoring, and disclosure process:
- Material security unknowns:

## 8. Team and provenance

- Attributable team or organization:
- Repository ownership/contributors:
- Disclosed relationships and incentives:
- Material identity gaps:

## 9. Economics and activity

Every number includes value, unit/currency, precise measurement window, as-of time, method, evidence
class, and source.

| Metric | Value | Window/as-of | Method and scope | Class | Receipts |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | claim |  |

- Token or fee model:
- Who receives value:
- Liquidity/redemption constraints:
- Evidence of actual usage:

## 10. Relationships and dependencies

| Relationship | Counterparty | Direction | Why material | Receipts |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## 11. Atomic claims

Use stable packet-local IDs. `verified` requires at least one reproduction. `unknown` has no supporting
receipt and explains what was attempted.

| Claim ID | Field | Atomic value or statement | Class | Observed at | Receipt IDs | Reproduction IDs | Supersedes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CLM-1 |  |  | claim |  | R1 |  |  |

## 12. Conflicts

Do not delete losing claims. Collector and verifier roles leave resolution fields for a controller.

| Conflict ID | Field | Claim IDs | Material effect | Status | Requested verification |
| --- | --- | --- | --- | --- | --- |
| CON-example |  |  |  | open |  |

Controller resolution, if assigned:

- Winning claim IDs:
- Reproduction IDs:
- Rationale:
- Resolver and resolved-at:

## 13. Updates and events

| Event ID | Type | Occurred at | Observed at | Affected fields | Evidence state | Impact | Site recommendation | Channel recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  | routine | feed / profile / none | none / review |

For every event proposed for channel review, state why it meets `docs/channel-publishing.md`. “Trending”
alone is insufficient.

## 14. Material risks and caveats

- User-facing risks supported by evidence:
- Disputed risks:
- Absence statements and exact search scope:
- Claims that must not be promoted or published:

## 15. Gaps and next checks

| Priority | Missing field or unresolved question | What was checked | Best next source/action | Owner |
| --- | --- | --- | --- | --- |
| P0 |  |  |  |  |

## 16. Receipts

Each receipt records publisher, title/description, URL, published time when known, accessed time,
source kind, authority, authenticity, relevant claim, excerpt or result, and archive/hash when available.

### R1

- Publisher:
- Title/description:
- URL:
- Published at:
- Accessed at:
- Kind:
- Authority:
- Authenticity:
- Supports/challenges:
- Excerpt/result:
- Archive/hash:

## 17. Verification passes

Fresh passes do not self-certify their own research. Each finding receives
`accepted | corrected | disputed | deferred` and the packet is updated without erasing the original
claim.

### Receipt verifier

- Verifier and time:
- Sample/method:
- Findings and dispositions:

### Numbers auditor

- Verifier and time:
- Units, windows, denominators, and reproducibility checked:
- Findings and dispositions:

### Adversarial refuter

- Verifier and time:
- Strongest contrary explanation and sources checked:
- Findings and dispositions:

## 18. Operations log

- Dedupe check and time:
- Base SHA rechecked before handoff:
- Source/event IDs remapped by compiler:
- Deferred canonical mappings:
- Files proposed or changed:
- Validation commands and results:
- Controller disposition:
- Channel disposition: `not-evaluated | pending | publish | roundup | site-only | hold`
