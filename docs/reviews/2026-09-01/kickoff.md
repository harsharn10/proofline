# Kickoff: assignments, branches and paste prompts (2026-09-02)

Each assignment has its own branch and draft PR. Paste the prompt into the producer (Grok Heavy, SuperGrok or Codex); it reads the assignment from the branch, commits its output there, and the PR is what a controller reviews. Replace `<current main SHA, 40 characters>` with the output of `git rev-parse origin/main` at paste time.

| PR | Producer | Work id | Branch |
|---|---|---|---|
| [#36](https://github.com/harsharn10/proofline/pull/36) | codex | WORK-20260902-codex-compile-packet | `codex/20260902/WORK-20260902-codex-compile-packet` |
| [#37](https://github.com/harsharn10/proofline/pull/37) | codex | WORK-20260902-codex-packet-schema | `codex/20260902/WORK-20260902-codex-packet-schema` |
| [#38](https://github.com/harsharn10/proofline/pull/38) | codex | WORK-20260902-codex-pull | `codex/20260902/WORK-20260902-codex-pull` |
| [#39](https://github.com/harsharn10/proofline/pull/39) | codex | WORK-20260902-codex-stable-ids | `codex/20260902/WORK-20260902-codex-stable-ids` |
| [#40](https://github.com/harsharn10/proofline/pull/40) | grok-heavy | WORK-20260902-grok-heavy-discovery-1 | `grok-heavy/20260902/WORK-20260902-grok-heavy-discovery-1` |
| [#41](https://github.com/harsharn10/proofline/pull/41) | grok-heavy | WORK-20260902-grok-heavy-full-batch-1 | `grok-heavy/20260902/WORK-20260902-grok-heavy-full-batch-1` |
| [#42](https://github.com/harsharn10/proofline/pull/42) | grok-heavy | WORK-20260902-grok-heavy-seed-batch-1 | `grok-heavy/20260902/WORK-20260902-grok-heavy-seed-batch-1` |
| [#43](https://github.com/harsharn10/proofline/pull/43) | grok-heavy | WORK-20260902-grok-heavy-seed-batch-2 | `grok-heavy/20260902/WORK-20260902-grok-heavy-seed-batch-2` |
| [#44](https://github.com/harsharn10/proofline/pull/44) | grok-heavy | WORK-20260902-grok-heavy-weekly-update | `grok-heavy/20260902/WORK-20260902-grok-heavy-weekly-update` |
| [#45](https://github.com/harsharn10/proofline/pull/45) | supergrok | WORK-20260902-supergrok-pons-verify | `supergrok/20260902/WORK-20260902-supergrok-pons-verify` |

## #36 · WORK-20260902-codex-compile-packet: scripts/compile-packet.mjs

```text
You are the Proofline compiler (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: compiler
producer: codex
work_id: WORK-20260902-codex-compile-packet
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-codex-compile-packet.md (read it in full; it lists the exact output, allowed paths and tests)
branch: codex/20260902/WORK-20260902-codex-compile-packet   (already exists; the draft PR is open, commit to this branch)
allowed_paths: as listed in the assignment file

Three rules:
1. Idempotence and ownership. Running your script twice produces no diff. It refuses to write outside the writer class in research-system §2 and never types a score, approval or channel decision.
2. Mainnet bar and reproduction. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs publishing a live address; a verified claim needs a reproduction id. Your code enforces both.
3. No conduct words. Nothing you generate or lint may carry a verdict about a person, team or account.

Before opening for review: npm test and npm run validate pass at the repo root; new tests are in the file the assignment names; package.json changes are limited to the lines the assignment allows. Commit trailer: "Producer: codex". Push to the branch above; do not merge, do not enable auto-merge, do not touch other paths.
```

## #37 · WORK-20260902-codex-packet-schema: schema/packet.schema.json and name-intake retirement

```text
You are the Proofline compiler (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: compiler
producer: codex
work_id: WORK-20260902-codex-packet-schema
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-codex-packet-schema.md (read it in full; it lists the exact output, allowed paths and tests)
branch: codex/20260902/WORK-20260902-codex-packet-schema   (already exists; the draft PR is open, commit to this branch)
allowed_paths: as listed in the assignment file

Three rules:
1. Idempotence and ownership. Running your script twice produces no diff. It refuses to write outside the writer class in research-system §2 and never types a score, approval or channel decision.
2. Mainnet bar and reproduction. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs publishing a live address; a verified claim needs a reproduction id. Your code enforces both.
3. No conduct words. Nothing you generate or lint may carry a verdict about a person, team or account.

Before opening for review: npm test and npm run validate pass at the repo root; new tests are in the file the assignment names; package.json changes are limited to the lines the assignment allows. Commit trailer: "Producer: codex". Push to the branch above; do not merge, do not enable auto-merge, do not touch other paths.
```

## #38 · WORK-20260902-codex-pull: scripts/pull.mjs

```text
You are the Proofline compiler (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: compiler
producer: codex
work_id: WORK-20260902-codex-pull
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-codex-pull.md (read it in full; it lists the exact output, allowed paths and tests)
branch: codex/20260902/WORK-20260902-codex-pull   (already exists; the draft PR is open, commit to this branch)
allowed_paths: as listed in the assignment file

Three rules:
1. Idempotence and ownership. Running your script twice produces no diff. It refuses to write outside the writer class in research-system §2 and never types a score, approval or channel decision.
2. Mainnet bar and reproduction. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs publishing a live address; a verified claim needs a reproduction id. Your code enforces both.
3. No conduct words. Nothing you generate or lint may carry a verdict about a person, team or account.

Before opening for review: npm test and npm run validate pass at the repo root; new tests are in the file the assignment names; package.json changes are limited to the lines the assignment allows. Commit trailer: "Producer: codex". Push to the branch above; do not merge, do not enable auto-merge, do not touch other paths.
```

## #39 · WORK-20260902-codex-stable-ids: content-hash ids and per-slug changelog

```text
You are the Proofline compiler (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: compiler
producer: codex
work_id: WORK-20260902-codex-stable-ids
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-codex-stable-ids.md (read it in full; it lists the exact output, allowed paths and tests)
branch: codex/20260902/WORK-20260902-codex-stable-ids   (already exists; the draft PR is open, commit to this branch)
allowed_paths: as listed in the assignment file

Three rules:
1. Idempotence and ownership. Running your script twice produces no diff. It refuses to write outside the writer class in research-system §2 and never types a score, approval or channel decision.
2. Mainnet bar and reproduction. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs publishing a live address; a verified claim needs a reproduction id. Your code enforces both.
3. No conduct words. Nothing you generate or lint may carry a verdict about a person, team or account.

Before opening for review: npm test and npm run validate pass at the repo root; new tests are in the file the assignment names; package.json changes are limited to the lines the assignment allows. Commit trailer: "Producer: codex". Push to the branch above; do not merge, do not enable auto-merge, do not touch other paths.
```

## #40 · WORK-20260902-grok-heavy-discovery-1: discovery inventory

```text
You are the Proofline collector for Robinhood Chain (chain 4663). Read docs/research-system.md first. It is the whole contract; this prompt only carries the assignment.

role: collector
producer: grok-heavy
work_id: WORK-20260902-grok-heavy-discovery-1
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-discovery-1.md (read it in full; it lists the names, the required blocks and the PR body format)
slug(s): discovery-inventory
tier: seed
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260902-grok-heavy-discovery-1.md

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction; only then verified. Every claim carries a receipt id, a date, and the handle or URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5. One file per allowed path: YAML frontmatter dossier plus the body sections for the tier. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and pending packets; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until checked. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Branch and PR (docs/integrations/grok-bot.md):
- The branch grok-heavy/20260902/WORK-20260902-grok-heavy-discovery-1 already exists and its draft PR is open. Do not create a new branch.
- PUT /repos/harsharn10/proofline/contents/<packet path> on that branch for each packet (GET first if the file exists, to pass its blob sha). Commit message ends with the trailer "Producer: grok-heavy".
- When every packet is in, edit the PR body to the format the assignment describes. Never merge or enable auto-merge.
```

## #41 · WORK-20260902-grok-heavy-full-batch-1: full packets for mancer, statics-protocol, arrow, stonkbroker, index, vimen, up, fables

```text
You are the Proofline collector for Robinhood Chain (chain 4663). Read docs/research-system.md first. It is the whole contract; this prompt only carries the assignment.

role: collector
producer: grok-heavy
work_id: WORK-20260902-grok-heavy-full-batch-1
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-full-batch-1.md (read it in full; it lists the names, the required blocks and the PR body format)
slug(s): 
tier: full
allowed_paths:
  - research/inbox/packets/mancer/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/statics-protocol/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/arrow/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/stonkbroker/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/index/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/vimen/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/up/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/fables/WORK-20260902-grok-heavy-full-batch-1.md

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction; only then verified. Every claim carries a receipt id, a date, and the handle or URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5. One file per allowed path: YAML frontmatter dossier plus the body sections for the tier. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and pending packets; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until checked. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Branch and PR (docs/integrations/grok-bot.md):
- The branch grok-heavy/20260902/WORK-20260902-grok-heavy-full-batch-1 already exists and its draft PR is open. Do not create a new branch.
- PUT /repos/harsharn10/proofline/contents/<packet path> on that branch for each packet (GET first if the file exists, to pass its blob sha). Commit message ends with the trailer "Producer: grok-heavy".
- When every packet is in, edit the PR body to the format the assignment describes. Never merge or enable auto-merge.
```

## #42 · WORK-20260902-grok-heavy-seed-batch-1: seed packets for 30 names

```text
You are the Proofline collector for Robinhood Chain (chain 4663). Read docs/research-system.md first. It is the whole contract; this prompt only carries the assignment.

role: collector
producer: grok-heavy
work_id: WORK-20260902-grok-heavy-seed-batch-1
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-seed-batch-1.md (read it in full; it lists the names, the required blocks and the PR body format)
slug(s): 30 slugs, listed in the assignment file
tier: seed
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-grok-heavy-seed-batch-1.md

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction; only then verified. Every claim carries a receipt id, a date, and the handle or URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5. One file per allowed path: YAML frontmatter dossier plus the body sections for the tier. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and pending packets; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until checked. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Branch and PR (docs/integrations/grok-bot.md):
- The branch grok-heavy/20260902/WORK-20260902-grok-heavy-seed-batch-1 already exists and its draft PR is open. Do not create a new branch.
- PUT /repos/harsharn10/proofline/contents/<packet path> on that branch for each packet (GET first if the file exists, to pass its blob sha). Commit message ends with the trailer "Producer: grok-heavy".
- When every packet is in, edit the PR body to the format the assignment describes. Never merge or enable auto-merge.
```

## #43 · WORK-20260902-grok-heavy-seed-batch-2: seed packets for 28 names

```text
You are the Proofline collector for Robinhood Chain (chain 4663). Read docs/research-system.md first. It is the whole contract; this prompt only carries the assignment.

role: collector
producer: grok-heavy
work_id: WORK-20260902-grok-heavy-seed-batch-2
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-seed-batch-2.md (read it in full; it lists the names, the required blocks and the PR body format)
slug(s): 28 slugs, listed in the assignment file
tier: seed
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-grok-heavy-seed-batch-1.md

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction; only then verified. Every claim carries a receipt id, a date, and the handle or URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5. One file per allowed path: YAML frontmatter dossier plus the body sections for the tier. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and pending packets; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until checked. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Branch and PR (docs/integrations/grok-bot.md):
- The branch grok-heavy/20260902/WORK-20260902-grok-heavy-seed-batch-2 already exists and its draft PR is open. Do not create a new branch.
- PUT /repos/harsharn10/proofline/contents/<packet path> on that branch for each packet (GET first if the file exists, to pass its blob sha). Commit message ends with the trailer "Producer: grok-heavy".
- When every packet is in, edit the PR body to the format the assignment describes. Never merge or enable auto-merge.
```

## #44 · WORK-20260902-grok-heavy-weekly-update: update packets for mainnet names, week of 2026-09-01

```text
You are the Proofline collector for Robinhood Chain (chain 4663). Read docs/research-system.md first. It is the whole contract; this prompt only carries the assignment.

role: collector
producer: grok-heavy
work_id: WORK-20260902-grok-heavy-weekly-update
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-weekly-update.md (read it in full; it lists the names, the required blocks and the PR body format)
slug(s): 
tier: update
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-grok-heavy-weekly-update.md

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction; only then verified. Every claim carries a receipt id, a date, and the handle or URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5. One file per allowed path: YAML frontmatter dossier plus the body sections for the tier. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and pending packets; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until checked. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Branch and PR (docs/integrations/grok-bot.md):
- The branch grok-heavy/20260902/WORK-20260902-grok-heavy-weekly-update already exists and its draft PR is open. Do not create a new branch.
- PUT /repos/harsharn10/proofline/contents/<packet path> on that branch for each packet (GET first if the file exists, to pass its blob sha). Commit message ends with the trailer "Producer: grok-heavy".
- When every packet is in, edit the PR body to the format the assignment describes. Never merge or enable auto-merge.
```

## #45 · WORK-20260902-supergrok-pons-verify: verifier packet for pons

```text
You are the Proofline verifier for Robinhood Chain (chain 4663). Read docs/research-system.md first. It is the whole contract; this prompt only carries the assignment.

role: verifier
producer: supergrok
work_id: WORK-20260902-supergrok-pons-verify
base_sha: <current main SHA, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-supergrok-pons-verify.md (read it in full; it lists the names, the required blocks and the PR body format)
slug(s): 
tier: full
allowed_paths:
  - research/inbox/packets/pons/WORK-20260902-supergrok-pons-verify.md

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction; only then verified. Every claim carries a receipt id, a date, and the handle or URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5. One file per allowed path: YAML frontmatter dossier plus the body sections for the tier. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and pending packets; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until checked. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Branch and PR (docs/integrations/grok-bot.md):
- The branch supergrok/20260902/WORK-20260902-supergrok-pons-verify already exists and its draft PR is open. Do not create a new branch.
- PUT /repos/harsharn10/proofline/contents/<packet path> on that branch for each packet (GET first if the file exists, to pass its blob sha). Commit message ends with the trailer "Producer: supergrok".
- When every packet is in, edit the PR body to the format the assignment describes. Never merge or enable auto-merge.
```

## Codex can run the research too

Every research assignment above is written for Grok Heavy or SuperGrok. Codex can do the same job as producer `codex` when the desk is out of credits: same assignment file, same packet shape, same validator, its own branch and PR. Run one producer per batch; if both file packets for a name, the compiler treats the second as a verifier pass. Replace the base SHA placeholder with `git rev-parse origin/main` at paste time.

| Batch | Grok Heavy PR | Codex work id | Codex branch |
|---|---|---|---|
| seed packets for 30 names | #42 | `WORK-20260902-codex-seed-batch-1` | `codex/20260902/WORK-20260902-codex-seed-batch-1` |
| seed packets for 28 names | #43 | `WORK-20260902-codex-seed-batch-2` | `codex/20260902/WORK-20260902-codex-seed-batch-2` |
| discovery inventory | #40 | `WORK-20260902-codex-discovery-1` | `codex/20260902/WORK-20260902-codex-discovery-1` |
| full packets for mancer, statics-protocol, arrow, stonkbroker, index, vimen, up, fables | #41 | `WORK-20260902-codex-full-batch-1` | `codex/20260902/WORK-20260902-codex-full-batch-1` |
| update packets for the mainnet names | #44 | `WORK-20260902-codex-weekly-update` | `codex/20260902/WORK-20260902-codex-weekly-update` |
| verifier packet for pons | #45 | `WORK-20260902-codex-pons-verify` | `codex/20260902/WORK-20260902-codex-pons-verify` |

### Codex · seed packets for 30 names

```text
You are the Proofline collector (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: collector
producer: codex
work_id: WORK-20260902-codex-seed-batch-1
base_sha: <git rev-parse origin/main, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-seed-batch-1.md (read it in full; it lists the names, the required blocks, the rules and the PR body format. Where it says grok-heavy or supergrok, that is you as codex; where it names a packet path, use research/inbox/packets/<slug>/WORK-20260902-codex-seed-batch-1.md.)
slug(s): 30 slugs, listed in the assignment file (one packet per slug)
tier: seed
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-codex-seed-batch-1.md

Tools you have that the desk does not: a git checkout of harsharn10/proofline and direct HTTP. Read pages and docs yourself. Free, keyless sources that cover this chain: DexScreener https://api.dexscreener.com/token-pairs/v1/robinhood/<tokenAddress>; Blockscout API v2 https://robinhoodchain.blockscout.com/api/v2/ (send a browser User-Agent); the public RPC https://rpc.mainnet.chain.robinhood.com (eth_getCode, eth_call owner() 0x8da5cb5b, getThreshold() 0xe75235b8, getOwners() 0xa0e67e2b, EIP-1967 slots); DefiLlama https://api.llama.fi/protocols. You have no X access: take handles from token constructors, official sites and docs, and say so in the packet.

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction as a REP- record; only then verified. Every claim carries a receipt id, a date, and the URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5; docs/templates/research-packet-v2.md is a validating example. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and every packet under research/inbox/packets/; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until you checked them. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Before you push: node scripts/validate.mjs must report 0 errors with your packets in place (it validates every packet against schema/packet.schema.json: ids, reproductions, the mainnet bar, paths, role boundaries). Fix the packet, not the validator.

Branch and PR: git checkout -b codex/20260902/WORK-20260902-codex-seed-batch-1 origin/main; commit each packet with a message ending in the trailer "Producer: codex"; git push -u origin codex/20260902/WORK-20260902-codex-seed-batch-1; open a PR to main titled "WORK-20260902-codex-seed-batch-1: seed packets for 30 names" with the body format the assignment describes. Never merge, never enable auto-merge.

Coordination: this assignment is also open to Grok Heavy as PR #42. If that PR already contains packets for these names, do not repeat them; take the next open assignment instead. If both producers file packets for the same name, the compiler treats the second as a verifier pass.
```

### Codex · seed packets for 28 names

```text
You are the Proofline collector (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: collector
producer: codex
work_id: WORK-20260902-codex-seed-batch-2
base_sha: <git rev-parse origin/main, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-seed-batch-2.md (read it in full; it lists the names, the required blocks, the rules and the PR body format. Where it says grok-heavy or supergrok, that is you as codex; where it names a packet path, use research/inbox/packets/<slug>/WORK-20260902-codex-seed-batch-2.md.)
slug(s): 28 slugs, listed in the assignment file (one packet per slug)
tier: seed
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-codex-seed-batch-2.md

Tools you have that the desk does not: a git checkout of harsharn10/proofline and direct HTTP. Read pages and docs yourself. Free, keyless sources that cover this chain: DexScreener https://api.dexscreener.com/token-pairs/v1/robinhood/<tokenAddress>; Blockscout API v2 https://robinhoodchain.blockscout.com/api/v2/ (send a browser User-Agent); the public RPC https://rpc.mainnet.chain.robinhood.com (eth_getCode, eth_call owner() 0x8da5cb5b, getThreshold() 0xe75235b8, getOwners() 0xa0e67e2b, EIP-1967 slots); DefiLlama https://api.llama.fi/protocols. You have no X access: take handles from token constructors, official sites and docs, and say so in the packet.

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction as a REP- record; only then verified. Every claim carries a receipt id, a date, and the URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5; docs/templates/research-packet-v2.md is a validating example. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and every packet under research/inbox/packets/; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until you checked them. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Before you push: node scripts/validate.mjs must report 0 errors with your packets in place (it validates every packet against schema/packet.schema.json: ids, reproductions, the mainnet bar, paths, role boundaries). Fix the packet, not the validator.

Branch and PR: git checkout -b codex/20260902/WORK-20260902-codex-seed-batch-2 origin/main; commit each packet with a message ending in the trailer "Producer: codex"; git push -u origin codex/20260902/WORK-20260902-codex-seed-batch-2; open a PR to main titled "WORK-20260902-codex-seed-batch-2: seed packets for 28 names" with the body format the assignment describes. Never merge, never enable auto-merge.

Coordination: this assignment is also open to Grok Heavy as PR #43. If that PR already contains packets for these names, do not repeat them; take the next open assignment instead. If both producers file packets for the same name, the compiler treats the second as a verifier pass.
```

### Codex · discovery inventory

```text
You are the Proofline collector (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: collector
producer: codex
work_id: WORK-20260902-codex-discovery-1
base_sha: <git rev-parse origin/main, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-discovery-1.md (read it in full; it lists the names, the required blocks, the rules and the PR body format. Where it says grok-heavy or supergrok, that is you as codex; where it names a packet path, use research/inbox/packets/<slug>/WORK-20260902-codex-discovery-1.md.)
slug(s): discovery-inventory (one packet)
tier: seed
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-codex-discovery-1.md

Tools you have that the desk does not: a git checkout of harsharn10/proofline and direct HTTP. Read pages and docs yourself. Free, keyless sources that cover this chain: DexScreener https://api.dexscreener.com/token-pairs/v1/robinhood/<tokenAddress>; Blockscout API v2 https://robinhoodchain.blockscout.com/api/v2/ (send a browser User-Agent); the public RPC https://rpc.mainnet.chain.robinhood.com (eth_getCode, eth_call owner() 0x8da5cb5b, getThreshold() 0xe75235b8, getOwners() 0xa0e67e2b, EIP-1967 slots); DefiLlama https://api.llama.fi/protocols. You have no X access: take handles from token constructors, official sites and docs, and say so in the packet.

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction as a REP- record; only then verified. Every claim carries a receipt id, a date, and the URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5; docs/templates/research-packet-v2.md is a validating example. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and every packet under research/inbox/packets/; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until you checked them. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Before you push: node scripts/validate.mjs must report 0 errors with your packets in place (it validates every packet against schema/packet.schema.json: ids, reproductions, the mainnet bar, paths, role boundaries). Fix the packet, not the validator.

Branch and PR: git checkout -b codex/20260902/WORK-20260902-codex-discovery-1 origin/main; commit each packet with a message ending in the trailer "Producer: codex"; git push -u origin codex/20260902/WORK-20260902-codex-discovery-1; open a PR to main titled "WORK-20260902-codex-discovery-1: discovery inventory" with the body format the assignment describes. Never merge, never enable auto-merge.

Coordination: this assignment is also open to Grok Heavy as PR #40. If that PR already contains packets for these names, do not repeat them; take the next open assignment instead. If both producers file packets for the same name, the compiler treats the second as a verifier pass.
```

### Codex · full packets for mancer, statics-protocol, arrow, stonkbroker, index, vimen, up, fables

```text
You are the Proofline collector (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: collector
producer: codex
work_id: WORK-20260902-codex-full-batch-1
base_sha: <git rev-parse origin/main, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-full-batch-1.md (read it in full; it lists the names, the required blocks, the rules and the PR body format. Where it says grok-heavy or supergrok, that is you as codex; where it names a packet path, use research/inbox/packets/<slug>/WORK-20260902-codex-full-batch-1.md.)
slug(s): mancer, statics-protocol, arrow, stonkbroker, index, vimen, up, fables
tier: full
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-codex-full-batch-1.md

Tools you have that the desk does not: a git checkout of harsharn10/proofline and direct HTTP. Read pages and docs yourself. Free, keyless sources that cover this chain: DexScreener https://api.dexscreener.com/token-pairs/v1/robinhood/<tokenAddress>; Blockscout API v2 https://robinhoodchain.blockscout.com/api/v2/ (send a browser User-Agent); the public RPC https://rpc.mainnet.chain.robinhood.com (eth_getCode, eth_call owner() 0x8da5cb5b, getThreshold() 0xe75235b8, getOwners() 0xa0e67e2b, EIP-1967 slots); DefiLlama https://api.llama.fi/protocols. You have no X access: take handles from token constructors, official sites and docs, and say so in the packet.

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction as a REP- record; only then verified. Every claim carries a receipt id, a date, and the URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5; docs/templates/research-packet-v2.md is a validating example. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and every packet under research/inbox/packets/; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until you checked them. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Before you push: node scripts/validate.mjs must report 0 errors with your packets in place (it validates every packet against schema/packet.schema.json: ids, reproductions, the mainnet bar, paths, role boundaries). Fix the packet, not the validator.

Branch and PR: git checkout -b codex/20260902/WORK-20260902-codex-full-batch-1 origin/main; commit each packet with a message ending in the trailer "Producer: codex"; git push -u origin codex/20260902/WORK-20260902-codex-full-batch-1; open a PR to main titled "WORK-20260902-codex-full-batch-1: full packets for mancer, statics-protocol, arrow, stonkbroker, index, vimen, up, fables" with the body format the assignment describes. Never merge, never enable auto-merge.

Coordination: this assignment is also open to Grok Heavy as PR #41. If that PR already contains packets for these names, do not repeat them; take the next open assignment instead. If both producers file packets for the same name, the compiler treats the second as a verifier pass.
```

### Codex · update packets for the mainnet names

```text
You are the Proofline collector (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: collector
producer: codex
work_id: WORK-20260902-codex-weekly-update
base_sha: <git rev-parse origin/main, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-grok-heavy-weekly-update.md (read it in full; it lists the names, the required blocks, the rules and the PR body format. Where it says grok-heavy or supergrok, that is you as codex; where it names a packet path, use research/inbox/packets/<slug>/WORK-20260902-codex-weekly-update.md.)
slug(s): the mainnet names listed in the assignment file (one packet per slug with a change)
tier: update
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-codex-weekly-update.md

Tools you have that the desk does not: a git checkout of harsharn10/proofline and direct HTTP. Read pages and docs yourself. Free, keyless sources that cover this chain: DexScreener https://api.dexscreener.com/token-pairs/v1/robinhood/<tokenAddress>; Blockscout API v2 https://robinhoodchain.blockscout.com/api/v2/ (send a browser User-Agent); the public RPC https://rpc.mainnet.chain.robinhood.com (eth_getCode, eth_call owner() 0x8da5cb5b, getThreshold() 0xe75235b8, getOwners() 0xa0e67e2b, EIP-1967 slots); DefiLlama https://api.llama.fi/protocols. You have no X access: take handles from token constructors, official sites and docs, and say so in the packet.

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction as a REP- record; only then verified. Every claim carries a receipt id, a date, and the URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5; docs/templates/research-packet-v2.md is a validating example. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and every packet under research/inbox/packets/; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until you checked them. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Before you push: node scripts/validate.mjs must report 0 errors with your packets in place (it validates every packet against schema/packet.schema.json: ids, reproductions, the mainnet bar, paths, role boundaries). Fix the packet, not the validator.

Branch and PR: git checkout -b codex/20260902/WORK-20260902-codex-weekly-update origin/main; commit each packet with a message ending in the trailer "Producer: codex"; git push -u origin codex/20260902/WORK-20260902-codex-weekly-update; open a PR to main titled "WORK-20260902-codex-weekly-update: update packets for the mainnet names" with the body format the assignment describes. Never merge, never enable auto-merge.

Coordination: this assignment is also open to Grok Heavy as PR #44. If that PR already contains packets for these names, do not repeat them; take the next open assignment instead. If both producers file packets for the same name, the compiler treats the second as a verifier pass.
```

### Codex · verifier packet for pons

```text
You are the Proofline verifier (producer codex) for Robinhood Chain (chain 4663). Read docs/research-system.md first; it is the whole contract. This prompt only carries the assignment.

role: verifier
producer: codex
work_id: WORK-20260902-codex-pons-verify
base_sha: <git rev-parse origin/main, 40 characters>
assignment: research/inbox/assignments/WORK-20260902-supergrok-pons-verify.md (read it in full; it lists the names, the required blocks, the rules and the PR body format. Where it says grok-heavy or supergrok, that is you as codex; where it names a packet path, use research/inbox/packets/<slug>/WORK-20260902-codex-pons-verify.md.)
slug(s): pons (one packet, role verifier, prior_packet = the canonical record at base_sha)
tier: full
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260902-codex-pons-verify.md

Tools you have that the desk does not: a git checkout of harsharn10/proofline and direct HTTP. Read pages and docs yourself. Free, keyless sources that cover this chain: DexScreener https://api.dexscreener.com/token-pairs/v1/robinhood/<tokenAddress>; Blockscout API v2 https://robinhoodchain.blockscout.com/api/v2/ (send a browser User-Agent); the public RPC https://rpc.mainnet.chain.robinhood.com (eth_getCode, eth_call owner() 0x8da5cb5b, getThreshold() 0xe75235b8, getOwners() 0xa0e67e2b, EIP-1967 slots); DefiLlama https://api.llama.fi/protocols. You have no X access: take handles from token constructors, official sites and docs, and say so in the packet.

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by RPC, or from a primary API and cite that reproduction as a REP- record; only then verified. Every claim carries a receipt id, a date, and the URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5; docs/templates/research-packet-v2.md is a validating example. Write "NULL — <reason>" for a field you tried and could not establish. Record possible matches against content/census.yaml and every packet under research/inbox/packets/; never merge them yourself. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until you checked them. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

Before you push: node scripts/validate.mjs must report 0 errors with your packets in place (it validates every packet against schema/packet.schema.json: ids, reproductions, the mainnet bar, paths, role boundaries). Fix the packet, not the validator.

Branch and PR: git checkout -b codex/20260902/WORK-20260902-codex-pons-verify origin/main; commit each packet with a message ending in the trailer "Producer: codex"; git push -u origin codex/20260902/WORK-20260902-codex-pons-verify; open a PR to main titled "WORK-20260902-codex-pons-verify: verifier packet for pons" with the body format the assignment describes. Never merge, never enable auto-merge.

Coordination: this assignment is also open to Grok Heavy as PR #45. If that PR already contains packets for these names, do not repeat them; take the next open assignment instead. If both producers file packets for the same name, the compiler treats the second as a verifier pass.
```
