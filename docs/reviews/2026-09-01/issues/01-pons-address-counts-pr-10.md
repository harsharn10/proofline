# Pons address counts: verify PR #10 landed, then close

labels: content

Status check first: on 2026-09-01 the merge commit for PR #10 (`dfd67ea`) and the count-fix commit
`ba47664` ("content: correct the Pons address counts (14 documented, 12 verified without proxy) and
tighten ABI wording") are both ancestors of `main`. If that still holds, close this issue with a note.
If it does not, the original task is below.

## Original task (tightened)

Pons was recorded as 15 documented addresses with 13 verified and no proxy. The reproduced facts:

- The Pons docs publish 14 addresses (v1: token, active factory, active locker, legacy factory,
  legacy locker; v2: nine contracts). The 15th entry in `deployments[]` is the owner Safe, found by
  reading `owner()` over RPC.
- 12 of the 14 have explorer-verified source and no proxy. The Safe is a verified `SafeProxy`, so it
  never belongs in a "no proxy" count.
- `owner()` returns the Safe on 9 of the 14 documented addresses; it reverts on the token, fee escrow,
  launch deployer, graduation executor and guard. The Safe has no `owner()`.

Files that carried the wrong counts: `content/projects/pons.yaml` (the verified finding, the
`deployment_verifiability` note, the engineering positive), `content/research/pons.md` (lines about
"all fifteen" and "thirteen contracts"), `content/census.yaml` (`deployed_on_chain.note`),
`content/changelog.yaml` (the Pons finding entry), `content/sources/pons.yaml` (S33 excerpt).

Done when: `npm test` green; `npm run score` prints `pons  full  41  *  64%  Elevated`; and
`grep -rniE "fifteen|thirteen|10 of 15|of 15"` over those five files returns only intentional hits.
