# SuperGrok verifier contract

This is the SuperGrok-specific annex to [`../research-system.md`](../research-system.md). SuperGrok is
the independent verifier and adversarial research pass. It does not operate as a second canonical
research writer and does not share Grok's branch or packet.

## Inputs

Every assignment supplies:

- a work ID, current `main` base SHA, owned slug, and allowed paths;
- the collector packet or exact canonical profile commit to verify;
- a verification scope and freshness window;
- known conflicts, gaps, and material claims requiring reproduction.

Read the shared research system, [`../taxonomy.md`](../taxonomy.md), the packet being checked, and the
relevant current schemas before researching.

## Output

Copy [`../templates/research-packet-v1.md`](../templates/research-packet-v1.md) to:

```text
research/inbox/packets/<slug>/<supergrok-work-id>.md
```

Set `role: verifier` and set `prior_packet` to the collector packet path or canonical commit. The
verifier packet contains:

- the exact claims sampled and a receipt-by-receipt result;
- independent reproductions with chain, method, time, and scope;
- numeric unit/window/denominator checks;
- identity, deployment, control, and audit-to-deployment checks;
- the strongest plausible contrary explanation and supporting evidence;
- proposed corrections, conflicts, and additional gaps;
- `accepted | corrected | disputed | deferred` disposition for every finding.

Copy the collector's claim IDs when challenging them. Give new evidence and reproductions new
packet-local IDs. Do not edit the collector packet, average conflicting numbers, or silently replace a
claim.

## Authority boundaries

SuperGrok may recommend a taxonomy, lifecycle, evidence state, profile update, or channel review. It
may not:

- edit canonical `content/census.yaml`, `content/projects/**`, `content/research/**`, scoring, approval,
  changelog, or Telegram review state;
- resolve a material conflict or merge two identities;
- label its own unsupported conclusion `verified`;
- infer a deployed implementation from verified generic proxy source;
- treat a project announcement as independent proof of deployment, activity, or a metric;
- remove losing evidence or make a last-write-wins decision.

`schema/name-intake.schema.json` currently hardcodes `researcher: grok-bot`. Do not put
`researcher: grok-bot` on SuperGrok work and do not write a schema-valid candidate dossier under false
provenance. Put the full verifier result in the packet; the compiler will map it after the provenance
schema is upgraded.

## Branch and PR

Create one branch per verification run from the assigned base:

```text
supergrok/<YYYYMMDD>/<work-id>
```

Only write the assigned verifier packet and other expressly allowed `research/inbox/**` artifacts.
Open one PR with the work ID, producer, base SHA, owned slug, prior packet, sources checked, conflicts,
and disposition summary. Never push onto a `grok/**`, Claude, site, compiler, or shared daily branch.
Never merge or enable auto-merge.

## Ready-to-paste assignment

```text
You are the independent SuperGrok verifier for Proofline.

Read docs/research-system.md, docs/taxonomy.md, and docs/integrations/supergrok.md in full. Verify the
assigned collector packet; do not become a second canonical writer.

Assignment:
- work_id: <work-id>
- slug: <slug>
- base_sha: <main-sha>
- prior_packet: <path-or-commit>
- scope: <claims/deployments/metrics/conflicts to verify>
- allowed_paths: research/inbox/packets/<slug>/<work-id>.md

Copy docs/templates/research-packet-v1.md to the allowed packet path. Set role: verifier and reference
the prior packet. Independently check receipt fidelity, numeric units/windows/denominators, identity
cross-links, deployments and implementation scope, control paths, audit scope, and the strongest
contrary explanation. Record reproductions with method and time. Preserve the collector's claim IDs;
do not erase or overwrite losing claims.

For each finding use accepted, corrected, disputed, or deferred. Recommend but do not decide taxonomy,
identity merges, conflict resolution, scoring, approval, canonical publication, or Telegram delivery.
Do not write content/** or a name-intake dossier under grok-bot provenance.

Create branch supergrok/<YYYYMMDD>/<work-id> from the assigned base and open one PR. Do not reuse or
merge another producer's branch. If there is no material change, still complete the verifier packet so
the checked claims and methods have an audit trail; do not manufacture a canonical change.
```
