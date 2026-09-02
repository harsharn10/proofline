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
