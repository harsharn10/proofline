# Grok desk

Grok Heavy runs (producer `grok-heavy`) and the scheduled Grok desk (producer `grok-bot`) collect
evidence for assigned slugs and hand it over as packets. The contract is `docs/research-system.md`.
Start at `AGENTS.md` and `docs/ingestion.md` on current main. Runs are bounded assignments under the
shared daily relevance policy; a stopped session stays stopped. The repository skills replace old standing prompts.

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
Never merge, never enable auto-merge. CI comments; the compile bot lifts the packets off the branch.

## What happens to a packet

A branch is single-assignment (`<producer>/<YYYYMMDD>/<work-id>`). Standing instructions live on main,
not in an open PR. The compiler reads open, ready, same-repository submissions and skips drafts/retired work.
After accepted output is confirmed on main, the controller closes the PR with each packet's disposition.

When workflows are enabled, these triggers inspect a filed packet; neither starts a Grok session.

- **Within minutes.** Validate runs on the branch, then the packet PR gate comments on the PR: either
  "waiting for controller" (every file is a packet or an assignment) or "needs controller review"
  (something renamed, deleted, or outside `research/inbox/packets/` and `research/inbox/assignments/`).
- **Daily, not a latency guarantee.** The compile workflow is configured for 11:47 UTC. It lifts every packet
  file that differs from main off the branch, validates it, compiles the valid ones into `content/`,
  runs the content gates and pushes to main; the site redeploys from main. The PR is not merged, and no
  bot will ever merge it — only the packet files move.

A packet that does not validate is skipped and reported in one comment on the PR, with each skipped
file's errors in a fenced block. So is a packet that validates but whose compiled prose fails the release
lint — a banned hype word in the "What it is" paragraph, a producer name in a finding — which is dropped
after the compile and named the same way. The rest of the batch still compiles: one bad packet never
blocks the others. To fix one, `PUT` the same path again on the same branch with the corrections — the
next compile picks up the new copy. A packet that supersedes one already compiled onto main must carry a newer
`as_of`, or it is left alone as an older copy of what main already has. A packet naming a possible match
that is being created in the same batch is skipped that round and compiles on the next one.

One skip has a different fix. A packet filed under a **new** slug that turns out to be a second name for
a name the registry already has — the same official handle or domain — is skipped as
`duplicate of <existing slug> on the official handle/domain; write an update packet for <existing slug>
instead of a new name`. Re-PUTting it will not help: the token and the protocol that issued it are one
entry. File the evidence as an update packet at `research/inbox/packets/<existing slug>/<work-id>.md`
instead. The established name always keeps the slug; the newcomer is the one dropped.

A discovery round (`slug: discovery-inventory`) is kept as a record and counted in the compile report as
`inventory: N candidates`. It is never compiled into a project: those names become assignments first.

## Token scope

A fine-grained personal access token for `harsharn10/proofline` only: Contents read and write, Pull
requests read and write, nothing else, no classic token. Store it where the desk runs, not as a
GitHub Actions secret.

## Paste prompt

```text
You are the Proofline collector for Robinhood Chain (chain 4663). Read current-main AGENTS.md,
docs/ingestion.md and the matching repository skill first, then the packet contract and template.
This prompt only carries one bounded assignment, never permission to loop.

role: collector
producer: <grok-heavy | grok-bot>
work_id: WORK-<YYYYMMDD>-<producer>-<slug>
base_sha: <current main SHA, 40 characters>
slug(s): <slug> (name: <name>)
tier: <seed | full | update>            # update: also prior_packet: <path>
allowed_paths:
  - research/inbox/packets/<slug>/<work-id>.md
task_ids: <stable IDs from the claimed GitHub work issue, if backfilling>
maximum_batch: <assigned cap>
stop_condition: finish the assigned batch, or report blocked/no-change without retrying

For updates, use docs/templates/research-update-v2.md: declare update_reason and change_summary,
name the prior packet/work ID, and apply the standardized website title/body/date/source/placement rules.
For backfills, use a full packet; do not re-announce historical evidence. Check pending PRs including drafts.

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
