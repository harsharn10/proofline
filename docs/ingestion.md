# Ingestion and website update contract

This is the shared operating policy for the four repository skills. The packet schema and
`docs/research-system.md` define evidence fields; `docs/daily-registry.md` and
`scripts/lib/refresh-policy.mjs` define relevance and budgets. Do not copy thresholds into agent prompts.
This policy supersedes old six-hour, mandatory-event and keep-looping prompts. It does not start a cycle.

## One canonical identity, four different jobs

| Job | Input and acceptance | Output |
| --- | --- | --- |
| Seed | Confirmed surfaces; census and **all pending PRs**, including drafts, checked for matches; seed evidence minimums | One seed packet for a genuinely new canonical project |
| Update | Existing canonical slug, prior packet and work ID; material sourced difference | Update packet with `update_reason` and `change_summary`; unchanged checks produce no packet |
| Backfill | Claimed stable task ID with explicit missing requirements | One full consolidated packet for that existing slug, reusing still-valid receipts honestly; no duplicate profile or fabricated new event |
| Machine refresh | Shared relevance plan, due measurements, provider quota | Machine-owned observations with actual field measurement dates; not research or a website announcement |

Own protocol tokens stay on the protocol profile. Independently launched projects are separate identities
with sourced relationships. Shared contracts flag investigation, not a license to merge names or claim
common ownership. Identity-held work goes to the controller before more harvesting.

## Update reasons and public output

An update declares `event`, `measurement`, `correction`, or `verification` in `update_reason`, and a
plain-language `change_summary`. It names `prior_packet` and `supersedes`. Copy unchanged identity and
classification fields from the accepted record; do not reclassify a project while reporting one event.
See [the worked update template](templates/research-update-v2.md). Full backfills use the full template
and preserve the original dates of reused observations. Include the task ID in Operations log and PR body.

| Website field | Standard |
| --- | --- |
| Profile summary | Mechanism-first What it is paragraph; keep existing summary on delta-only updates |
| Themes / thesis / risks | Existing compiler-mapped fields and evidence tags; do not invent marketing copy to fill a card |
| Update title | Factual, at most 80 characters |
| Update body | At most 600 characters: what changed, why it matters, and any material uncertainty; source claims attributed |
| Date | Actual event occurrence or measurement date, not when the agent reread the page |
| Source | Direct post/announcement/transaction/dated measurement URL and packet-local receipts |
| Kind | Company announcement, third-party talk, onchain observation, or evidence-backed risk note; compiler determines reader label |
| Placement | `feed`/`both` for material news; `profile` for durable evidence; `none` for internal/backfill-only history |

One new material event is sufficient; no event quota. A missing field is not news. Backfills may include
historical dated events required by the full contract, but mark them `none` unless they are genuinely new
to the site. Do not manufacture an announcement from a successful check. Scores and channel delivery
are separate approvals, not side effects of a packet.

## Replay and conflict behavior

The compiler preserves existing feed IDs. Replaying the same X/Twitter post under another work ID does
not create a new row; contradictory copy requires an explicit sourced correction. General docs/API/address
URLs can describe different events, so only matching date/kind/title/body is coalesced there. Semantic
paraphrase detection for general URLs is still a reviewer responsibility. Existing duplicate history is
not bulk-deleted. An `event` update with no new website row is rejected before canonical writes.
Measurement updates likewise reject older observations, changed values/windows at the same date, and
unchanged readings. A genuinely newer measurement can retain the same value. Corrections use the separate
sourced correction path; they do not masquerade as an ordinary refresh.

Other existing gates still apply: receipt/reproduction references, canonical collisions, ownership lanes,
schema validation, release checks, and immutable legacy fingerprints. These are structural safeguards,
not proof that the supplied source is true. Review old/new values and windows before compiling any metric
or correction. Do not silently overwrite conflicting evidence or resolve an identity collision.

## Backfill: flag, claim, collect, verify, close

`npm run research:backfill -- --open-prs <snapshot.json>` produces one row per canonical name. It uses the
latest seed/full packet, explicit P0/P1 open questions, shared refresh decisions and all pending producer
submissions. It also reports pending noncanonical seeds such as Alandale separately.

Use a fresh paginated GitHub REST open-PR snapshot, after fetching refs. Head mismatches and invalid
snapshots fail closed. The planner only writes the existing ignored `build/registry.json` projection;
JSON output is a report, never canonical data or an automatic refresh queue.

Task IDs hash canonical slug and sorted gap set, not today's date or a producer work ID. Store assignment
ownership/status in the linked GitHub work issue, not an open standing branch. Before assigning a batch,
the controller exports that issue's current task states as JSON and supplies `--task-state <file>`:

```json
{"task-id-from-plan": {"status": "claimed", "owner": "grok-heavy"}}
```

Supported statuses: `claimed`, `blocked`, `no-change`, `complete`, `released`. Claimed, blocked and
no-change work stays out of selection until the controller explicitly releases it. Marking a task complete
while its gap set remains produces `completion-needs-review`, not a false success. A missing state snapshot
means recommendations only (`assignment_ready:false`). An explicitly empty snapshot is valid only after
checking the GitHub issue has no claims. This is a controller-mediated claim protocol, not an atomic
distributed lock: one controller assigns a batch; producers must not self-claim concurrently.

Default batch size is ten. The planner excludes identity/version holds, pending submissions and dormant
or absent relevance decisions. Within eligible work, prioritize hot names, then protocols/applications/tools
(shared-infrastructure representatives first), before token-only dossiers. A missing machine measurement does not automatically justify research.
Do not repeatedly run the same query against an inaccessible source: record the attempted surface, error,
blocked task ID and the specific evidence that would unblock it. A full backfill must close or accurately
carry its named questions; a new work ID alone cannot reset a task.

## Submission lifecycle and rollout

1. Controller pins current main, task IDs, gaps, owner, paths, maximum batch and stopping condition in a GitHub issue/assignment.
2. Collector reads the repository skills, then confirms that same assignment and no pending duplicate.
3. One short-lived branch/PR contains a bounded batch. Draft means held. No-change means an issue note, no packet/PR.
4. Verifier independently checks the risky claims. Compiler lifts accepted packets through current gates; never merge a producer branch into main.
5. Confirm canonical diff, report and site deployment. Close the submission PR with accepted main SHA and a disposition for every held/rejected item. Preserve evidence; don't drop unresolved packets.

There is no automated PR-closing or agent-dispatch service in this change. The controller performs steps
1 and 5. Retire standing #62 only after this replacement is on main and a fresh diff confirms no uncompiled
work; preserve draft #95 until Alandale receives its own disposition. No schedules are resumed by rollout.
