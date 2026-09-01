# Proofline research system

Status: normative operating contract, version 1, 2026-09-01.

This document defines how collectors, verification agents, the orchestrator, controllers, and the
publisher work on the same corpus without overwriting one another. `PRD.md` remains the product and
editorial authority. The files under `schema/` are the currently enforced machine contract. When this
document describes a planned field that the current schemas do not yet accept, the packet retains it
until a reviewed schema migration and emitter can preserve it canonically.

Dated handoffs, `docs/superpowers/**`, and legacy dated artifacts under `research/inbox/**` are
historical evidence, not current operating instructions. The validated `research/inbox/names/**` queue
and new `research/inbox/packets/**` handoffs remain active. Agent-specific instructions, including
`docs/integrations/grok-bot.md`, are subordinate to this document.

## 1. The durable objects

Do not make one file answer every question. Proofline has five distinct objects:

| Object | Purpose | Writer |
| --- | --- | --- |
| Research packet | One agent run's evidence, reasoning, gaps, and proposed updates | Assigned collector or verifier |
| Canonical profile | Current reviewed identity, research, findings, metrics, and scoring inputs | One compiler for the slug |
| Event record | Append-only observation that may change a profile or feed | Collector proposes; compiler reconciles |
| Changelog publication | Reviewed statement of what changed in canonical coverage | Controller/compiler |
| Channel publication | Optional retail message derived from a changelog publication | Controller/publisher |

A profile merge never implies a Telegram post. An event can update the site feed without changing the
profile. A packet can be rejected without deleting the evidence it collected.

## 2. Field ownership

Every field has exactly one ownership class:

- **Entity-owned:** identity, product description, mechanics, deployments, control, security,
  economics, risks, narrative, gaps, and receipts. The canonical project profile is the single writer;
  packets propose changes to it.
- **Shared ecosystem fact:** facts read by several profiles, such as a dependency, common deployment,
  market rank, or chain-wide metric. Store once and reference it; do not make copied prose authoritative.
- **Machine-owned:** derived score, confidence, risk label, rank, trending state, and publication
  fingerprints. Agents never type these results into intake.
- **Editorial-owned:** approval, conflict resolution, correction disposition, channel eligibility, and
  channel copy. Collectors and verifiers may recommend but never decide these fields.

The compiler refuses a proposal that attempts to write a field outside its ownership class.

## 3. Roles

### Collector — Grok Bot or another scout

Collects discovery leads, official announcements, source artifacts, atomic claims, candidate events,
and possible identity matches. It may propose taxonomy and lifecycle values with rationale. It does not
set scoring inputs, approve research, resolve conflicts, edit canonical identity, or decide channel
publication.

### Verifier — SuperGrok or an independently assigned pass

Reproduces identity cross-links, deployments, contract roles, control paths, activity, and metrics.
It challenges the collector's classification and records counter-evidence. It writes a separate
verifier packet whose `prior_packet` points to the collector packet; it does not race the collector on
the same file, erase claims, or declare itself the approver.

### Compiler/reconciler — Codex or assigned controller agent

Owns exactly one canonical slug at a time. It rebases onto current `main`, deduplicates evidence and
events, maps packet fields into the current schemas, preserves conflicts, and prepares the canonical
diff. It never treats last write as strongest evidence.

### Controller — human owner or expressly delegated reviewer

Approves identity merges, material conflict resolutions, methodology/scoring judgments, corrections,
and final canonical publication. Approval must be attributable to a real controller action, not a
free-text placeholder supplied by a collector.

### Publisher

Reads reviewed changelog publications. It cannot create research conclusions. It sends only an exact,
fingerprinted channel item approved through the channel review controls.

## 4. Assignment and branch protocol

One assignment owns one or more explicitly listed slugs and allowed paths. Before research begins, its
packet header records:

- stable `work_id` and producer identity;
- role (`collector`, `verifier`, or `compiler`);
- base commit SHA and as-of time;
- owned slugs and allowed paths;
- packet tier (`seed`, `full`, or `update`);
- prior packet or event cursor, when applicable.

Branches are unique per producer and run:

```text
<producer>/<YYYYMMDD>/<work-id>
```

Examples: `grok/20260901/WORK-20260901-grok-pons` and
`supergrok/20260901/WORK-20260901-supergrok-pons-verify`.

Never share a daily branch between Grok, SuperGrok, or another agent. Use one PR per run. The
orchestrator serializes changes to global files and prevents two compilers from owning the same slug.
Collectors can work concurrently only when their packets and allowed paths do not overlap.

The PR body repeats the work ID, base SHA, producer, owned slugs, packet paths, sources added, conflicts,
and requested disposition. Empty runs do not create branches or PRs.

## 5. Packet contract

Copy `docs/templates/research-packet-v1.md` to:

```text
research/inbox/packets/<slug>/<work-id>.md
```

The packet is one file. Every required section is present. Use `NULL — <reason>` for an attempted field
that could not be established; absence is not completion. Every material claim points to a packet
receipt. Quantitative claims include value, unit, measurement window, as-of time, and methodology.

Packet tiers are cumulative:

- **Seed:** assignment, identity, taxonomy, lifecycle, product, official links, qualifying tests,
  atomic claims, conflicts, gaps, and receipts.
- **Full:** seed plus deployments, control/security, team/provenance, economics/activity,
  dependencies, material risks, and linked fresh verifier dispositions for all three passes.
- **Update:** declares the prior reviewed state and includes only new/superseded claims plus the full
  receipts, conflicts, verification, and update sections. It never silently rewrites a prior assertion.

A seed upgrades to full by adding evidence and sections, not by discarding the seed's history.

## 6. Research flow and hard gates

1. **Assign:** orchestrator checks canonical coverage and assigns one slug, tier, base SHA, and scope.
2. **Dedupe:** researcher checks canonical names, aliases, domains, handles, repositories, deployments,
   and other pending packets. Possible matches are recorded even when rejected.
3. **Collect:** collector fills the packet with atomic claims and receipts.
4. **Verify:** fresh verifier packets check receipts, numeric consistency, and the strongest adverse
   explanation without rewriting the collector packet.
5. **Reconcile:** one compiler maps supported fields into canonical files, remaps source IDs, and
   records every dropped or deferred proposal.
6. **Validate:** schema, cross-reference, scoring, site, release-policy, and stale-base checks run.
7. **Review:** controller resolves material conflicts and approves or requests changes on the exact head.
8. **Merge:** canonical content lands; the site may update.
9. **Channel decision:** an optional, separate editorial decision chooses publish, roundup, site-only,
   hold, or reset. No channel object means no Telegram candidate.

Hard stops:

- open material identity conflict;
- a `verified` claim without an independent reproduction;
- an address, metric, or event without evidence;
- a stale base that overlaps another merged change to the same slug or global file;
- unresolved same-ID/different-content collision;
- missing verifier dispositions for a full packet;
- collector-written scoring, approval, correction, or channel decision.

## 7. Evidence, authenticity, and conflicts

Evidence strength is field-specific. Use the strongest source capable of proving the exact field and
scope. A project post may prove that the project made a claim; it does not independently prove a live
deployment, contract role, metric, audit scope, or official identity.

Source identity is normalized URL plus an atomic-claim fingerprint. The same URL may support multiple
claims. Event identity is platform plus stable external event/post ID; when none exists, use a hash of
normalized source, subject, event type, and occurrence time. Positional IDs such as `<slug>-14` are not
stable identities.

Conflicting claims remain separate. Never average them, replace the older one, or select the newest PR.
While a material conflict is open, quarantine the affected identity, lifecycle, deployment, metric,
finding, score input, and channel publication. Resolution requires:

- winning claim IDs;
- at least one reproduction;
- field-specific evidence rationale;
- controller identity and timestamp;
- preservation of losing claims as disputed or superseded.

## 8. Updates, feed, and publication

Every proposed event records:

- stable event ID, subject slug, type, occurrence time, observation time, and source IDs;
- affected profile fields and whether this supersedes an earlier event or claim;
- evidence status (`verified`, `claim`, `disputed`, or `unknown`);
- impact (`routine`, `material`, `urgent`) with rationale;
- proposed site disposition and optional channel recommendation.

The compiler makes three independent decisions:

1. Does this change durable profile state?
2. Does this belong in the public site feed?
3. Is it eligible for channel review?

Routine source additions, wording changes, internal metadata, and ordinary stubs remain site-only.
Channel criteria and card format live in `docs/channel-publishing.md`.

## 9. Current transition constraints

The packet contract is immediately usable for all agents. Some structured storage still needs a schema
migration:

- `schema/name-intake.schema.json` currently hardcodes `researcher: grok-bot`; SuperGrok must submit a
  verifier packet rather than impersonating Grok in a candidate dossier.
- canonical census/project files do not yet preserve all mechanism tags, provenance, reproductions, or
  conflict records;
- feed IDs and source IDs are not yet fully idempotent.

`npm run validate` now checks every Markdown packet under `research/inbox/packets/**`: required
frontmatter and sections, full base SHA, work/date consistency, packet path, exact allowed paths,
owned-slug containment, producer/role boundaries, prior-packet requirements, consistent assignment
headers when a work ID spans multiple slugs, and collector/verifier attempts to set controller or
channel disposition. Evidence completeness and the truth of receipts still require the independent
verification and controller passes above.

Until those migrations land, the packet is the lossless handoff and the compiler records any field it
cannot safely emit under `Deferred canonical mappings` in the operations log.
