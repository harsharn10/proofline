# Proofline V1 PRD

Status: **Approved for implementation**
Working product name: Proofline (placeholder)
Date: 2026-08-30
Methodology version: `proofline-v1.0`
Amended: 2026-08-30 — seed set extended to 14 (Statics Protocol, Safehood, Robinhood Index Vaults, Vimen restored; product-owner decision).

This document is the implementation spec. Later phases (Ethereum, Solana, monitoring, database workflow) stay out of V1.

---

## 1. Product thesis

Early research on new Robinhood Chain plays is fragmented across explorers, launchpad UIs, docs, audits, GitHub, X accounts, and incident threads. Launch noise makes it hard to tell what is actually live, who can change the system, and which claims are verified.

Proofline turns that scatter into standardized, source-linked research profiles and dated change reports.

Standard: Bloomberg-like research discipline for new crypto projects — consistent coverage, traceable evidence, explicit uncertainty, accountable revisions, restrained language.

Not a price terminal. Not a smart-contract audit. Not a safety guarantee. Not an investment recommendation.

---

## 2. Universe (locked)

V1 covers **native plays on Robinhood Chain** — protocols, launchpads, and project tokens that were built for this chain and have a product, market, or control-plane story.

Robinhood Chain facts used by the product:

- Chain: Robinhood Chain, Arbitrum Orbit L2
- Chain ID: `4663`
- Gas: ETH
- Explorer: `https://robinhoodchain.blockscout.com`
- Mainnet: 2026-07-01
- Docs: `https://docs.robinhood.com/chain`

### 2.1 In scope

A name qualifies for V1 if **all** of the following are true:

1. It is deployed on, or officially launching on, Robinhood Chain (chain ID 4663).
2. It is a **native play**: a protocol, launchpad, vault, aggregator, NFT-gated product, or project token with its own market and documentation — not Robinhood’s issued Stock Token itself.
3. There is a public contract, official site, or official account that can be cited.
4. There is a user-fund, routing, launch, or control-plane story worth a research file.

Seed set (V1 directory, not a promise of equal depth):

| Slug | Name | Category | Why it is in |
|---|---|---|---|
| pons | Pons | Launchpad | Native launchpad. Current factory creates fixed-supply tokens directly in locked Uniswap V3 WETH pools; legacy deployment generations use different mechanics. |
| mancer | Mancer | Aggregator / order layer | Native DEX aggregator + resting orders. Chain Mancers NFT + $MANCER. Shield announced. |
| artificial-inu | Artificial Inu ($AI / NVDA) | Stock-paired project token | Flagship LONG launch. $AI paired to tokenized NVDA. Community vault. |
| longshot | Longshot | Launch / fee-routing protocol | Native RH Chain deployment. Fees split into a fixed Hyperliquid perp, holder rewards, protocol. |
| long | LONG | Stock-paired launchpad | Venue that made stock-paired tokens possible. Factory + Airlock. $AI launched here. |
| stonkbroker | StonkBroker | NFT / treasury play | ERC-6551 NFT that can hold Stock Tokens. Native cultural + product layer. |
| index | Index | RWA distributor | Pool tax buys a basket of Stock Tokens for holders. |
| arrow | Arrow Finance | CDP + launchpad | Native CDP / DeFi gateway. Launchpad live; CDP audit in flight. |
| bankr | Bankr | Agent / execution | Agent trading surface expanded onto RH Chain. |
| meridian | Meridian | Prediction / RWA | Native prediction-market launch partner. |
| statics-protocol | Statics Protocol | RWA baskets | Native redeemable multi-asset baskets, connected pools, self-backed credit. Genesis on mainnet 2026-08-27. Seven-day timelock target documented. |
| safehood | Safehood | Launchpad | Native launchpad creating Uniswap v3 pools. Project states all admin roles sit in one platform admin wallet. |
| robinhood-index-vaults | Robinhood Index Vaults | Index vault | ERC-4626 index vault for Stock Token baskets. Testnet-only, mock swap router, audit on roadmap. |
| vimen | Vimen | RWA baskets | Immutable in-kind index baskets for Stock Tokens, per-basket deposit caps, no admin keys over funds claimed. |

Add names only when they meet the four tests. Do not add every Pons graduation.

### 2.2 Out of scope for V1 research subjects

- Robinhood-issued Stock Tokens as standalone profiles (NVDA, AAPL, SPY, SPCX, …). They appear as **dependencies** and pair legs inside play profiles.
- Day-one infrastructure as primary subjects: Uniswap, Morpho, Lighter, Chainlink, Paxos/USDG, Alchemy, the canonical bridge. Cite them as dependencies.
- Pure memecoins with no protocol, vault, launchpad, or documented mechanism beyond a Uniswap pool.
- Tokens listed on the Robinhood brokerage app that do not live on Robinhood Chain.
- Ethereum / Solana coverage.

Stock-paired tokens like $AI are in because they are a **play** (vault, fee routing, pair design), not because they are a Stock Token.

### 2.3 Lifecycle labels (required on every file)

- `mainnet` — production contracts, users can interact now
- `beta` — restricted access (allowlist, invite, NFT gate)
- `announced` — public design, no verified production deployment
- `inactive` — deployed but abandoned, paused, or rugged
- `testnet-only` — no mainnet deployment

---

## 3. Sequence

Build in this order. Do not invert it.

1. **Content system** — schema, census files, one full research record, stubs.
2. **Publishing product** — public site that renders those files.
3. **Distribution** — Telegram digest after the first real publish path works.

The research file format is frozen only after the first full-depth record is written against a live project.

---

## 4. User

Primary user: crypto-native researcher, trader, or builder trying to answer:

- What does this play actually do today?
- Live, beta, announced, or dead?
- Which contracts and people can change or control it?
- What security work is verifiable?
- Is there evidence it is being built and maintained?
- What changed since the last review?
- Which lines are facts, claims, inferences, or unknowns?

V1 is publicly readable. Research approval and publication stay maintainer-controlled.

---

## 5. V1 product surface

### 5.1 Public website

- Sorted directory of qualifying RH Chain plays
- One full-depth profile (Pons)
- Thirteen stubs — every other seed-set name (all 14 seed names have a file)
- Methodology page
- Dated changelog
- Corrections contact on every profile
- Disclaimer on every page

No search, filters, accounts, prices-as-product, or charts-as-product in V1. A sorted list is enough for this universe. Market data may appear as cited snapshots with an as-of time; it is not a terminal.

Mobile and desktop. Static-friendly Next.js.

### 5.2 Full-depth record

Required sections:

1. Identity — name, one-line description, category, chain, lifecycle, official links
2. Deployment — addresses, dates, explorer links, verification status, proxies / implementations
3. Control — owners, admins, guardians, multisigs, timelocks, emergency paths, blast radius
4. Security — audits tied to commits/bytecode, remediation, bounty, incident history
5. Engineering — repos, activity, releases, tests, fork/copied-code evidence
6. Team — named or anonymous, verification status, relevant history, conflicts
7. Product / economics — what is live, user-fund path, oracles, redemptions, incentives, dependencies, concentration
8. Communications — material claims, discrepancies, deleted/changed claims when evidenced
9. Findings — positive, risk, missing, unresolved
10. Sources ledger
11. Review metadata — researcher, approver, methodology version, published at, confidence, risk, scores

Every material statement carries an evidence class and a source id.

### 5.3 Stub record

- Identity and official links
- Lifecycle stage
- Known addresses or explicit `not-verified`
- Discovery source
- Missing-evidence checklist
- Confidence below the numeric-rating threshold
- No public 0–100 evidence score — show `Research pending`

Stubs are honest incomplete files, not fake ratings.

---

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

## 8. Corrections

Every profile shows `Submit a correction`. Launch blocker: a real public destination.

Policy:

1. Submit the exact disputed statement plus evidence.
2. Acknowledge within three business days.
3. Material credible disputes get a `disputed` label on the profile while under review.
4. Accepted corrections update the profile and write a changelog entry (what changed, why).
5. Rejected corrections get a short evidence-based explanation when practical.
6. Prior published versions and score reasons stay in git history. No silent overwrite.
7. Factual correction ≠ disagreement with an analyst opinion.

V1 is contact + policy + dispute label + history. No community moderation.

Until a dedicated inbox exists, use the maintainer contact recorded in `content/site.yaml`.

---

## 9. Publication

### 9.1 File-based publish

No admin UI. No database in V1.

```
content/
  site.yaml
  methodology.md
  changelog.yaml
  projects/<slug>.yaml      # structured fields the site renders
  research/<slug>.md        # narrative research record
  sources/<slug>.yaml       # source ledger
```

Workflow:

1. Researcher writes `research/<slug>.md` + `sources/<slug>.yaml` + updates `projects/<slug>.yaml`
2. Pull request
3. Approver reviews evidence and rubric inputs in the diff
4. Merge publishes
5. Changelog entry required for any score, risk, stage, or material-finding change
6. Optional Telegram payload generated from the changelog entry

Git history is the audit log.

### 9.2 Telegram (after first merge-publish works)

- Digest only when something material published
- Combine multiple changes in a 12-hour window
- Each item links to the profile and names the change
- Optional weekly heartbeat; off by default
- No empty cadence messages
- No autonomous LLM research on consumer subscriptions as a publish path

Models may draft. Every scored point must cite a primary URL, explorer page, or commit the researcher opened.

---

## 10. Tech

- Next.js + TypeScript public site
- Content in Git as YAML + Markdown
- GitHub PRs for review
- Vercel or equivalent static hosting
- Telegram Bot API later
- Manual research using existing Claude / Grok / ChatGPT subscriptions, then import

No Postgres, no admin app, no metered LLM API in V1.

---

## 11. Non-goals

- Real-time prices, trading, execution
- Automated “safe” or “scam” labels
- ETH / SOL coverage
- Fully autonomous AI research
- Full contract audit or formal verification
- Search / filters
- Accounts, portfolios, payments, personalized alerts
- Community voting or reviewer reputation
- Custom admin UI
- Empty fixed-cadence Telegram
- Profiling Robinhood Stock Tokens as if they were native plays
- Covering every launchpad graduation

---

## 12. Acceptance

### Methodology

- Census file exists with qualifying criteria and lifecycle labels
- Pons researched at full depth before the schema is treated as frozen
- A second person can reproduce the security/control raw score from stored evidence
- Confidence thresholds and overrides demonstrated on at least one file

### Website

- One full profile + thirteen stubs readable on mobile and desktop
- Material statements labeled by evidence class and linked to a source
- Material sources have access time and minimum archive evidence
- Methodology, disclaimer, corrections path public
- Low-confidence stubs suppress the number
- Score changes keep prior value, reviewer, methodology version, reason

### Publication

- Maintainer can add/update research by editing files, not app code
- A PR can show the evidence and score change
- Telegram test channel can wait until the first real merge-publish exists

---

## 13. Decisions (locked for V1)

| Item | Decision |
|---|---|
| First full-depth project | **Pons** — busiest native protocol, public contracts, V1→V2 history, user-fund via launches, enough ambiguity to test the rubric |
| Next full-depth (V1.1) | **Mancer** — aggregator + non-custodial order claims + NFT fee claim + Shield |
| Research owner | Named on every file. V1 may ship with a single researcher if the approver field is `pending` and confidence stays < 70%. Two-person approval required before a numeric score displays at full weight. |
| Corrections | Field in `content/site.yaml`. Must be a real address before public launch. |
| Qualifying definition | Section 2. Locked. |
| Product name | Proofline until a final name is chosen. Does not block build. |
| Telegram | After file-publish works. |
| Weekly heartbeat | Off. |

---

## 14. V1 build order

1. Repo + schema + `site.yaml`
2. Census YAML for the seed set
3. Stub files for all thirteen non-Pons seed names
4. Full Pons research record + scores + sources
5. Next.js app that renders directory, profile, stub, methodology, changelog
6. Disclaimer + corrections + changelog wiring
7. Deploy
8. Telegram hook

---

## 15. Later (not V1)

- Ethereum and Solana discovery
- Automated repo / contract / role diffs
- Database editorial workflow
- Search and filters
- Watchlists and alerts
- Moderated community corrections
- Researcher signatures / reputation
- Rubric backtests against incidents
- Stock Token issuer series (separate product line)

---

## Appendix A — Official starting links

Use as discovery sources. Verify onchain before promoting a fact to `verified`.

- Pons: `https://ponsfamily.com` / Messari profile `pons-launchpad` / Bitquery Pons API docs
- Mancer: `https://mancer.xyz` / `https://mancer.xyz/docs` / `https://mancer.xyz/whitepaper.pdf` / `@MancerXYZ`
- Artificial Inu: `https://artificialinu.com` / CA `0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18` / pair vs NVDA on Uniswap
- LONG: `https://app.long.xyz` / `@longdotxyz` / factories `0x9c88…0845`, `0x22e9…eeED`
- Longshot: `https://www.uselongshot.xyz` / `@uselongshot` / RH Chain token `0x8701E2C87ade58325601f4F9bf37ADF46Cb75745`
- Arrow: `https://app.arrowfinance.io/docs`
- Robinhood Chain docs: `https://docs.robinhood.com/chain`
- Explorer: `https://robinhoodchain.blockscout.com`
- DefiLlama chain: `https://defillama.com/chain/robinhood-chain`

## Appendix B — Disclaimer copy (site-wide)

Proofline publishes research, not advice. Profiles are not audits, safety ratings, or recommendations to buy, sell, or use a protocol. Evidence scores measure documented posture at a point in time. They are not probabilities of success or loss. Contracts, teams, and markets change. Read the sources. Do your own verification onchain.
