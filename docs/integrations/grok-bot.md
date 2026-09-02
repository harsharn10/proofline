# Grok desk

Grok Heavy runs (producer `grok-heavy`) and the scheduled Grok desk (producer `grok-bot`) collect
evidence for assigned slugs and hand it over as packets. The contract is `docs/research-system.md`.
The scheduled desk runs every 6 hours; a Grok Heavy run happens once per assignment.

## What the desk collects

- X posts by the handles in `content/accounts.yaml` (any tier) and each project's official handle.
- Official announcements: project sites, docs, GitBooks. Anything the project itself published.
- Onchain events: deployments, explorer data, DefiLlama chain-slice numbers, each with URL and date.
- Account-scoring proposals for X handles (tier, role, slug, note, neutral flags), and possible
  identity matches against `content/census.yaml` and pending packets.

## Where it writes

`research/inbox/packets/<slug>/<work-id>.md`, one per assigned slug, nothing else, nothing under
`content/`. Account proposals and address records live inside the packet. A discovery round writes
one packet with `slug: discovery-inventory` (research-system §5).

## Opening a PR (GitHub REST)

Base `https://api.github.com`, repo `harsharn10/proofline`, header `Authorization: Bearer <token>`.

1. `GET /repos/harsharn10/proofline/git/refs/heads/main` gives the `main` SHA. That is `base_sha`.
2. `POST /repos/harsharn10/proofline/git/refs` with `{ "ref": "refs/heads/<producer>/<YYYYMMDD>/<work-id>", "sha": "<base_sha>" }`.
3. `PUT /repos/harsharn10/proofline/contents/<packet path>` with `{ "message", "content" (base64), "branch" }`.
   To update a file already on the branch, `GET` the path with `?ref=<branch>` first and pass its blob
   `sha`. The message ends with a blank line and the trailer `Producer: <producer>`.
4. `POST /repos/harsharn10/proofline/pulls` with `{ "title": "<work-id>", "head": "<branch>", "base": "main", "body": "<packet frontmatter header>" }`.

Corrections for the same run update the same PR; a new assignment gets a new work id, branch and PR.
Never merge, never enable auto-merge. CI comments; a controller merges.

## Token scope

A fine-grained personal access token for `harsharn10/proofline` only: Contents read and write, Pull
requests read and write, nothing else, no classic token. Store it where the desk runs, not as a
GitHub Actions secret.

## Paste prompt

```text
You are the Proofline collector for Robinhood Chain (chain 4663). Read docs/research-system.md first.
It is the whole contract; this prompt only carries the assignment.

role: collector
producer: <grok-heavy | grok-bot>
work_id: WORK-<YYYYMMDD>-<producer>-<slug>
base_sha: <current main SHA, 40 characters>
slug(s): <slug> (name: <name>)
tier: <seed | full | update>            # update: also prior_packet: <path>
allowed_paths:
  - research/inbox/packets/<slug>/<work-id>.md

Three rules:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer, by
   RPC, or from a primary API and cite that reproduction; only then verified. Every claim carries a
   receipt id, a date, and the handle or URL it came from. No number without a source.
2. Mainnet bar. lifecycle: mainnet needs an explorer or RPC receipt, a DefiLlama chain-slice figure,
   or docs that publish live addresses. A project post alone is lifecycle: announced.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are
   handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain |
   ca-collision, each with a receipt. Describe what was posted, never intent.

Packet format: docs/research-system.md §5. One file at the allowed path: YAML frontmatter dossier plus
the body sections for the tier. Write "NULL — <reason>" for a field you tried and could not establish.
Record possible matches against content/census.yaml and pending packets; never merge them yourself.
Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with
the booleans null until checked. Do not set scores, approval, conflict resolution or channel decisions.
Do not write content/**.

Branch and PR (docs/integrations/grok-bot.md):
- POST /repos/harsharn10/proofline/git/refs: branch <producer>/<YYYYMMDD>/<work-id> from base_sha.
- PUT /repos/harsharn10/proofline/contents/<path> for the packet; commit message ends with the
  trailer "Producer: <producer>".
- POST /repos/harsharn10/proofline/pulls: title <work-id>, base main, body = the frontmatter header.
- Never merge or enable auto-merge. Nothing new this round: no branch, no PR.
```
