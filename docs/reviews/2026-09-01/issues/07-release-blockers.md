# Release blockers: owner decisions (an agent prepares, does not decide)

labels: owner-decision

`npm run validate:release` reports known errors on `main`. On 2026-09-01 all three groups are still
open on disk.

1. `content/site.yaml` `corrections.destination: TODO`. Needs a real email or form URL. Owner input
   required: the 2026-09-01 decision is to leave it `TODO` until the owner supplies one. Do not
   invent one.
2. `content/site.yaml` `chain.checked: null`. Set to the date the chain constants (`id`, `rpc`,
   `explorer`) were re-checked against `https://docs.robinhood.com`. An agent may do the check and set
   the date, quoting the docs page in the PR.
3. Ten qualifying-test failures on seven census rows: `robinhood-index-vaults` (deployed_on_chain),
   `virtuals` (native_play), `l4va` (deployed_on_chain, research_story), `squeeze` (deployed_on_chain,
   research_story), `agent-name-service` (deployed_on_chain), `foxpad` (native_play, research_story),
   `robindex` (research_story). For each: re-check the evidence today (explorer, DefiLlama chain
   slice, project docs). If the test now passes, flip `value: true` with a dated note and source. If it
   still fails, leave `value: false` and list it in the PR.

Owner decides: whether failing rows stay in the census (the current instruction is "everything
included, flagged honestly") or move to an observe list, and whether the release check should treat
`value: false` as a warning instead of an error.

Done when: the PR body lists each blocker with its status (fixed, evidence unchanged, needs owner).
