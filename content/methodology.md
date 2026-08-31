# Methodology

Version `proofline-v1.0`. This page is generated from PRD.md §6–§7; edit the PRD, then re-run this extraction.

## 6. Rating system

Three public outputs on a full profile. Never one number alone.

1. **Evidence score** — weighted 0–100 of verified security posture, engineering, transparency, maturity, economic design
2. **Research confidence** — 0–100% of completeness, quality, independence, freshness
3. **Risk level** — Low / Moderate / Elevated / High / Critical, with hard overrides

The evidence score is not P(success) and is never labeled “safe.”

### 6.1 Factor weights

| Factor | Weight |
|---|---|
| Security and operational control | 35% |
| Engineering evidence and authenticity | 20% |
| Transparency and accountability | 15% |
| Product maturity and operational resilience | 15% |
| Economic design and dependency risk | 15% |

Conduct and disclosure are findings, not a sixth scored factor. Serious deception can hit transparency and/or trip an override.

Factors 2–5 use the coarse rubric until more full records exist:

- Strong evidence: 80
- Mixed / developing: 50
- Weak or contradictory: 20
- Not enough evidence: unscored; lowers confidence

Every factor records positive evidence, negative evidence, and missing evidence.

### 6.2 Security / control tests (35 raw points)

Factor percentage = `raw / 35 × 100`.

| Test | Pts | Full | Partial | Zero |
|---|---:|---|---|---|
| Deployment verifiability | 5 | All material contracts, proxies, implementations verified and mapped | Inventory exists with documented gaps | Material deployment cannot be identified or verified |
| Privileged-power blast radius | 8 | No privileged actor can unilaterally seize, mint, freeze, redirect, or rewrite user-fund logic | Powers exist but are narrowly scoped or constrained | One actor, opaque path, or weak role can materially affect user funds |
| Authorization topology | 5 | Sensitive powers use documented multisig/governance with independent signers and a real threshold | Multisig exists but independence, threshold, or scope is weak | EOA, unknown controller, or unverifiable mechanism |
| Timelock and exit window | 5 | Material changes have an enforced delay; users can reasonably exit first | Delay exists but excludes important actions or the window is thin | Material changes execute with no effective notice |
| Audit-to-deployment match | 5 | Independent review covers the deployed commit/config; material findings resolved | Audit exists; scope, match, or remediation incomplete | No relevant review, or the badge is misleading |
| Continuous safeguards | 4 | Bounty, monitoring, pause/response design, published incident process | Some safeguards; coverage or funding limited | None evidenced |
| Incident handling | 3 | No known material incident, or full disclosure + remediation + postmortem | Response incomplete or delayed | Active issue, concealment, or misleading comms |

Unknown information gets no assumed credit. It cuts confidence.

Researchers record the exact evidence used for every point.

### 6.3 Confidence

| Input | Weight |
|---|---|
| Primary-source coverage | 30% |
| Direct onchain / deployment verification | 25% |
| Independent corroboration | 20% |
| Freshness | 15% |
| Review completeness and second-person approval | 10% |

Display:

- Confidence < 50% → suppress numeric evidence score. Show `Research pending / insufficient evidence`
- 50–69% → number is provisional and visually de-emphasized
- ≥ 70% → number displays normally, always with confidence and risk

Headline always shows risk + confidence. The number never appears alone.

### 6.4 Hard risk overrides

Compute the weighted score first. Apply overrides transparently.

- **Critical** — confirmed active exploit, direct loss path, malicious privileged behavior, or equivalent immediate threat. Risk = Critical. Displayed score capped at 29.
- **High** — unilateral drain / seize / mint / freeze without effective delay; materially unverifiable production contracts; production claim sitting on test/mock infra. Risk = High. Displayed score capped at 59.
- **Elevated** — new unaudited production system with meaningful fund exposure, major unresolved dependencies, or immature controls. Risk at least Elevated. No numeric cap.

Profile detail shows uncapped weighted score and override reason. Headline uses the capped score. Removing an override requires new evidence and a recorded reviewer decision.

---

## 7. Evidence, archive, language

### 7.1 Evidence classes

Every material statement is one of:

- `verified` — reproduced from onchain data or strong primary evidence
- `claim` — project-stated, not independently verified
- `inference` — analyst conclusion from named evidence
- `disputed` — challenged with supporting evidence
- `unknown` — unavailable or inconclusive

### 7.2 Source ledger

Every material web source stores:

- original URL and publisher
- accessed_at
- claim supported
- short excerpt or screenshot note
- content hash when a local snapshot is kept
- archive URL when available
- researcher id

Archive only what is needed to support the claim. Respect copyright. A disappeared source stays in the ledger, marked unavailable, with last captured evidence. It is not silently deleted.

Deleted or changed claims need a dated before/after record. Absence from a current page is not proof of intentional deletion.

### 7.3 Writing standard

- Write “the admin address can upgrade contracts without an enforced timelock,” not “the team can rug.”
- Write “an independent audit was not found during this review,” not “the contracts are unaudited,” unless absence is established.
- Distinguish “could not verify” from “the claim is false.”
- Do not call a project or person a scam, fraud, criminal, or malicious without an authoritative finding and review.
- Do not publish “vibe coded” or “slop” as a conclusion. Describe the engineering evidence.
- Give subjects a reasonable chance to correct the file.

---


## Disclaimer


Proofline publishes research, not advice. Profiles are not audits, safety ratings, or recommendations to buy, sell, or use a protocol. Evidence scores measure documented posture at a point in time. They are not probabilities of success or loss. Contracts, teams, and markets change. Read the sources. Do your own verification onchain.
