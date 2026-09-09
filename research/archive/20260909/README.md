# Retired research intake — September 9, 2026

Owner-approved cleanup: [#113](https://github.com/harsharn10/proofline/issues/113). This is an evidence/disposition record, not another active assignment. `retired-branches.json` pins the audited PRs, branch heads and recovery tags. Only closed/merged PR branches are retired; open #62 (standing research), #92 (separate implementation proposal) and draft #95 (held research) are retained.

## Why PR #59 is retired

The September 3 batch's accepted packets are already represented on main. Only two unaccepted, newer/different candidate packet paths remain on its head `a5455e64eb8c4578b4cc8140becfe84c120eb943`: `dtf` and `bow`. They intentionally proposed token-only profiles beside existing protocols. The owner settled the model on September 9: a protocol and its own token belong to one canonical project. The separate-profile proposals are retired, not approved as new names.

| Archived proposal | Canonical destination | Exact own-token contract on robinhood-chain |
| --- | --- | --- |
| `dtf`, observed September 3 04:55 UTC | `downto` | `0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01` |
| `bow`, observed September 3 05:10 UTC | `longbow` | `0x451b42A15100C340CA12F7c66DE06fac5EA2D751` |

Both contracts already appear as own-token deployments on their canonical profiles; the packets also explicitly disclose the matching domains/handles and protocol names. No existing project identities are merged or renamed. Pons launch infrastructure remains a relationship. The BOW packet's SPY quote token must not become a second own-token deployment for Longbow. Its references to another BOW contract and bow.fun are contrary evidence, not aliases to merge.

## Evidence retained for the research-depth pass

Full original packets, receipt excerpts, reproduction records, timestamps, gaps and events are preserved under tag `archive/pr-59-20260909`, at their original `research/inbox/packets/{dtf,bow}/WORK-20260903-grok-heavy-icarus-research.md` paths. The other archival tags similarly retain each closed branch's complete tree, including non-packet work.

The canonical profiles already contain the own tokens and protocol research. These packets additionally contain historical launch/graduation details, pool/locker receipts, September 3 metric snapshots, social receipts and same-ticker contrary evidence. Raw URL differences alone are not new findings: address casing, address-vs-token views and query variants overlap existing receipts. No archived claim has been newly verified in this cleanup.

- For `downto`, review the Pons launch/graduation and locker evidence, DETF development posts and contrary DTF identity receipts against the canonical ledger.
- For `longbow`, review the Pons launch/curve-completion evidence, SPY quote-asset scope and distinct BOW-contract warnings against the canonical ledger.
- Preserve each original observation/event date. Do not copy old volume, reserves or holder counts into current machine-owned observations. Reproduce any mutable claim before presenting it as current.
- File genuinely additive evidence as a canonical-slug update with its own work id, cite the archived packet/receipt IDs, preserve unresolved caveats, and run normal packet/content gates. No token-only seed profile, bulk overwrite, inferred identity merge or channel decision is implied.

These are retained research leads for the existing depth work (#50), not recurring compiler failures. Accepted canonical content and historical evidence stay intact while the obsolete submissions leave the active queue.

## Recovery and steady state

Fetch the exact tag (for example `git fetch origin tag archive/pr-59-20260909`) and inspect with `git show archive/pr-59-20260909:<original-path>`. To resume useful work, create a new appropriately scoped branch/PR from current main; do not reopen the obsolete duplicate-profile proposal or restore its old branch into intake.

Scheduled compilation now uses GitHub open/ready PR state, not the existence of a remote branch. Draft means held; closed/merged means retired; unchanged accepted packets mean completed. API failures or changed snapshot heads fail closed. A manual branch override remains explicit recovery authority and cannot bypass identity/content validation. Nothing is permanently erased by removing the audited branch refs: their exact heads remain reachable through the published archive tags.
