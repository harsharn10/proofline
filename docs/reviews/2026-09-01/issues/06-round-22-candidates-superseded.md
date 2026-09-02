# Census: the 13 round-22 candidates (superseded by Grok Heavy assignment G3)

labels: research

Superseded. The original task graduated 13 rows from
`research/inbox/2026-08-31-census-candidates.yaml` (hedge, arc, scalar, bricks, floor, sluice,
twofold, v4fun, hooded-meme, canopy, mosaicetf, rallypad, robinpad) straight into
`content/census.yaml` with hand-written stubs. That file's aggregate format is retired
(research-system §9), and none of the 13 is in the census on 2026-09-01.

The replacement is Grok Heavy assignment G3 (review §6): one seed packet per name for these 13 plus
the 14 p0/p1 net-new names from the 2026-09-01 inventory, filed under
`research/inbox/packets/<slug>/<work-id>.md` and compiled by the compiler. Track G3 instead of this
issue. Close this one once G3's assignment file exists under `research/inbox/assignments/`.

Rules that carry over to G3, so they are not lost:

- Every candidate is included. A name that fails a qualifying test still gets a row with
  `value: false` and a note; the owner wants everything listed and flagged honestly.
- `lifecycle: mainnet` needs explorer, DefiLlama chain-slice or docs-with-addresses evidence.
  Otherwise `announced`, `beta` or `testnet-only`. `unknown` stays in the packet.
- `tree.primary` must be a leaf from `schema/taxonomy.json`; `handle` is the X account.
