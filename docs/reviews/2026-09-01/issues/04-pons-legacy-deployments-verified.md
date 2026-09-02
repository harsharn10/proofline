# Content: the two Pons legacy contracts are reproduced, so mark them verified

labels: content

Still open on 2026-09-01: `content/projects/pons.yaml` carries `verified: false` on the v1 legacy
factory `0x0c37a24F5D23A486FA692d1500881d698B1F77a4` and the v1 legacy locker (the next entry).

They are `false` because their source is not verified on Blockscout. But `deployments[].verified`
means the address was reproduced on the explorer or onchain (README "Deployments", PRD §7.1), and both
were opened on Blockscout and confirmed to be contracts (ledger S20, S21). Keeping them `false` makes
`npm run validate:release` flag a full profile for the wrong reason.

## Change

Set both to `verified: true`, keep `sources: [S20]` and `[S21]`, keep "(source not verified on the
explorer)" in each `label` so the reader sees the distinction. Add an Info changelog entry for `pons`.
Do not change any scoring input; `deployment_verifiability` stays `partial` because its note already
says what full needs.

Under the research contract this is a compiler change on a verifier packet's evidence; the packet can
be the existing S20 and S21 reproductions.

Done when: `npm test` green; `npm run validate:release` no longer prints the two
`projects/pons: deployment "v1 legacy …" is not verified on a full profile` lines; `npm run score`
unchanged (41 · 64).
Commit: `content: legacy Pons contracts are reproduced on the explorer; mark deployments verified`.
