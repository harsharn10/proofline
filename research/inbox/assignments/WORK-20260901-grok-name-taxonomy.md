# Grok assignment — expanded name inventory and taxonomy proposals

Status: assigned — draft PR remains open for Grok's commits.

```yaml
contract_version: proofline-research-v1
work_id: WORK-20260901-grok-name-taxonomy
producer: grok-bot
role: collector
base_sha: 7c06f090370e40734ed0efa7c0fe3ffd9e8e7826
as_of: 2026-09-01T19:30:25Z
packet_tier: seed
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/grok-2026-09-01/name-inventory.yaml
  - research/inbox/grok-2026-09-01/taxonomy-proposals.md
forbidden_paths:
  - content/**
  - docs/**
  - schema/**
  - ops/**
  - scripts/**
  - site/**
```

## Objective

Submit the names and research leads in Grok's larger Robinhood Chain corpus that are not yet cleanly
represented in Proofline's 49-row canonical census. At the same time, challenge Proofline's current
taxonomy and propose better labels where the current vocabulary is lossy, ambiguous, or missing.

This is a discovery and taxonomy-review round, not a publication round. Do not create or edit canonical
profiles, feed entries, changelog entries, review decisions, or Telegram copy. After controller review,
accepted names will be assigned to separate one-name research packets and validated intake dossiers.

## Required reading

Read these files from the assigned base before writing:

1. `docs/research-system.md`
2. `docs/taxonomy.md`
3. `docs/integrations/grok-bot.md`
4. `docs/templates/research-packet-v1.md`
5. `docs/templates/name-intake.yaml`
6. `content/census.yaml`
7. all existing files under `research/inbox/names/` and `research/inbox/packets/`

The shared research contract controls evidence, identity matching, conflicts, and field ownership. This
assignment narrows the writable paths further than the general Grok contract.

## Output 1 — name inventory

Create `research/inbox/grok-2026-09-01/name-inventory.yaml` using this shape:

```yaml
version: 1
work_id: WORK-20260901-grok-name-taxonomy
producer: grok-bot
base_sha: 7c06f090370e40734ed0efa7c0fe3ffd9e8e7826
observed_at: <ISO-8601 timestamp>
search_window:
  started_at: <ISO-8601 timestamp or null>
  ended_at: <ISO-8601 timestamp>
  surfaces_checked: [<Grok corpus, X list/search, official directories, ecosystem maps, other>]
  limitations: [<specific limitation>]

receipts:
  - id: R1
    publisher: <publisher or handle>
    title: <artifact/post/page description>
    url: <direct URL>
    published_at: <ISO-8601 timestamp or null>
    accessed_at: <ISO-8601 timestamp>
    kind: <official-site|docs|social|explorer|repository|third-party-data|news|other>
    authority: <onchain|primary|independent|aggregator|social|unknown>
    authenticity: <confirmed|unconfirmed|conflicted>
    supports: [<candidate slug or proposal id>]
    excerpt_or_result: <short attributable result; do not paste long copyrighted text>

candidates:
  - proposed_slug: <lowercase-kebab-case>
    name: <display name>
    aliases: []
    symbols: []
    official_domain: <URL or null>
    official_handle: <@handle or null>
    repository: <URL or null>
    discovery_source: <where Grok already had this name>
    first_seen_at: <ISO-8601 timestamp or null>
    match_status: <net-new|possible-match|already-canonical>
    possible_matches:
      - slug: <canonical or pending slug>
        signals: [<shared-domain|shared-handle|shared-address|shared-deployer|shared-repository|same-normalized-name|ticker-only|other>]
        contrary_signals: []
    robinhood_chain_basis:
      status: <reproduced-onchain|officially-documented|officially-claimed|third-party-claimed|unknown>
      note: <exact chain connection and its limits>
      receipt_ids: [R1]
    proposed_current_taxonomy:
      entity_kind: <protocol|application|token|infrastructure|tool|collection|unknown>
      chain_scope: <robinhood-native|multichain|cross-chain|unknown>
      flat_category: <current schema category or null>
      primary_domain: <current controlled domain or null>
      primary_leaf: <current documented leaf or null>
      secondary_leaves: []
      mechanism_tags: []
      ecosystem_role: <subject|dependency|observe|graduation>
      lifecycle: <mainnet|beta|testnet-only|announced|inactive|unknown>
      fit: <exact|lossy|no-fit|ambiguous>
      rationale: <mechanism-based classification with receipt ids>
    suggested_taxonomy:
      primary_leaf: <existing or proposed key>
      mechanism_tags: []
      proposal_ids: []
    research_depth: <lead-only|identity-checked|seed-ready|full-research-available>
    available_material: [<identity, product, deployment, control, security, team, economics, activity, communications>]
    material_conflicts: []
    gaps: []
    priority: <p0|p1|p2|observe>
    priority_rationale: <retail/materiality and evidence rationale, not hype>
    receipt_ids: [R1]

excluded_as_duplicates:
  - submitted_name: <name in Grok corpus>
    canonical_or_pending_slug: <slug>
    match_signals: []
    receipt_ids: [R1]

summary:
  corpus_names_reviewed: <integer>
  net_new: <integer>
  possible_matches: <integer>
  already_canonical_or_pending: <integer>
  exact_taxonomy_fit: <integer>
  lossy_or_no_fit: <integer>
```

Inventory rules:

- Include every name Grok believes is in scope, including weak leads; use `priority: observe` and state
  the evidence limit instead of omitting it.
- A direct URL receipt is required for every candidate. A private Grok memory or unsourced model answer
  is not a receipt. If only a Grok-generated artifact exists, cite that artifact and classify its
  authority as `unknown`; do not promote its underlying claims.
- Deduplicate against canonical names, aliases, domains, handles, repositories, deployments, and all
  pending packets—not ticker alone. List excluded duplicates so the controller can audit coverage.
- Keep distinct products separate when they have separate control planes or independently addressable
  deployments. Record uncertain identity as `possible-match`; do not merge it yourself.
- `mainnet` requires explorer/RPC evidence, docs publishing a live address, or comparable independent
  chain evidence. An announcement alone is `announced`.
- Classify the demonstrated mechanism, not marketing language. A token paired with a stock or RWA does
  not automatically become an RWA product.
- Do not invent a current enum value to make a row fit. Use `null` plus `fit: no-fit` and link a taxonomy
  proposal.
- No conduct labels or accusations. Describe observable collisions and source discrepancies.

## Output 2 — taxonomy proposals

Create `research/inbox/grok-2026-09-01/taxonomy-proposals.md`. It must contain:

1. **Executive summary** — the three to seven highest-impact problems in the current taxonomy.
2. **Coverage matrix** — every candidate slug mapped to its current best leaf, fit status, and any
   proposal IDs.
3. **Proposal cards** — one section per proposed addition, rename, split, merge, or deprecation, using:

   ```text
   Proposal ID: TAX-GROK-###
   Change type: new-leaf | rename | split | merge | deprecate | mechanism-tag | entity-kind | mapping
   Proposed key and display label:
   Parent domain:
   Definition:
   Includes:
   Excludes:
   Distinguishing test:
   Motivating candidate slugs:
   Affected canonical slugs:
   Current fallback mapping:
   Migration impact:
   Conflicts or alternatives considered:
   Receipt IDs:
   Confidence: high | medium | low
   ```

4. **Canonical stress test** — identify current census rows whose existing labels appear inconsistent
   under the proposed definitions. Recommend review; do not rewrite them.
5. **Rejected labels** — marketing terms or overly broad labels considered and rejected, with reasons.
6. **Open questions** — choices that require controller judgment or stronger evidence.

Every proposal needs a positive definition, explicit exclusions, a distinguishing test, motivating
names, migration impact, and evidence. Prefer the smallest vocabulary that separates materially
different mechanisms. Do not propose one leaf per brand, and do not use popularity as a taxonomy rule.

## Completion and PR rules

Push both completed outputs to this branch and keep this PR in draft. In the PR body or a comment,
report:

- total corpus names reviewed, net-new candidates, possible matches, and duplicates;
- the count of exact, lossy, ambiguous, and no-fit classifications;
- proposal IDs and the candidate/canonical slugs each affects;
- all source limitations and unresolved identity conflicts;
- confirmation that only the two allowed output paths were added.

Do not merge, enable auto-merge, mark the PR ready, or touch the assignment file. Do not create feed,
changelog, channel-review, or Telegram artifacts. The controller will review the inventory and taxonomy
first, request corrections in this PR, then issue separate dossier assignments for accepted names.
