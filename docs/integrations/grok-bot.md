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

Use [the operating map](../operating-flow.md) for ownership and timing,
[ingestion](../ingestion.md#submission-lifecycle-and-rollout) for packet disposition/replay, and
[the research contract](../research-system.md#unattended-compile) for compiler gates.
This integration document only owns the REST submission recipe; it does not redefine intake policy.

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

Evidence classes, lifecycle proof, conduct rules, role ownership and packet fields are defined in
docs/research-system.md, not repeated in this prompt. Follow the matching skill for this assignment.

Branch and PR (docs/integrations/grok-bot.md):
- POST /repos/harsharn10/proofline/git/refs: branch <producer>/<YYYYMMDD>/<work-id> from base_sha.
- PUT /repos/harsharn10/proofline/contents/<path> for the packet; commit message ends with the
  trailer "Producer: <producer>".
- POST /repos/harsharn10/proofline/pulls: title <work-id>, base main, body = the frontmatter header.
- Never merge or enable auto-merge. Nothing new this round: no branch, no PR.
```
