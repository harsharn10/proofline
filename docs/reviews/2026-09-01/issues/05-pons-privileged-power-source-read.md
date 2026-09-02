# Research: bound the Pons owner powers from source (the swing test)

labels: research

Still open on 2026-09-01: `scoring.security.privileged_power` in `content/projects/pons.yaml` is
`zero` because the owner Safe's setters are known only by name from the ABIs.

The question that moves it to `partial` (+4 raw points, score about 46): can any owner-callable
function reach a live launch's funds or a graduation in flight, and what bounds do the setters have?

## Work

This is a verifier packet (research-system §3, §5) for slug `pons`, tier `update`, followed by a
compiler change. Read the verified source on Blockscout for: v2 factory `PonsV2LaunchFactory`, hook
`V2MemeHook`, buyback vault `V2BuybackVault`, launch locker `V2LaunchLocker`, v1 active factory
`PonsLaunchFactory` and locker `PonsLaunchLocker` (addresses in `deployments[]`). For each owner-gated
write function record: parameter bounds (caps, `require`s), whether it applies to existing launches or
only future ones, and whether any path moves tokens out of a curve, pool position or escrow. Each
contract read is one receipt (`kind: explorer`, excerpt quoting the relevant `require` or modifier
lines, 500 characters or fewer).

Then, at compile:

- Setters bounded and unable to touch existing launches' funds: `privileged_power: partial` with the
  evidence ids and a note naming the functions read and what remains (rescue functions, for example).
  Any path that can move user funds at the owner's discretion: stays `zero`, and the finding becomes a
  `verified` risk finding naming the function.
- `timelock_exit_window` stays `zero` unless an enforced delay exists in code.
- Rewrite the Control paragraphs of `content/research/pons.md` to state what the source shows, with
  `[verified S#]` tags on reproduced facts.
- Changelog `score` entry with the prior line (`41 · 64 · Elevated · provisional`) and the new one.

Done when: `npm test` green and every new `verified` statement cites an explorer source whose excerpt
shows the code that was read.
Commit: `score: Pons privileged_power from a source read of the owner-gated functions`.
