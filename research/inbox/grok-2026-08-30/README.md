# Intake: Grok "Chain File" research pass — 2026-08-30

Source: Grok App Builder workspace export (`erLQQjm9ZNBeMI7D-grok-workspace.zip`, SuperGrok research, 30 Aug 2026). Unverified intake — nothing here is `verified` until reproduced on Blockscout / docs.robinhood.com/chain/contracts.

| File | What it is |
|---|---|
| `Robinhood_Chain_DeFi_RWA_Tokens_2026-08-30.xlsx` | 7-sheet workbook: 196 official Stock Tokens w/ CAs, 15 DeFi protocol rows (with known-fake CAs), hybrids/NFTs, launchpads (Dune stats), meme×RWA pairs, tokenless infra, sources |
| `build_rh_tokens.py` | The openpyxl script that generated the workbook — the data lives here as Python lists |
| `chain-file.{md,json,csv}` | The 42 dossiers from the Chain File app (`site/src/data/names.ts`) |
| `app-builder-built.png`, `dossier-denar.png` | Screenshots of the app as delivered |

## Known issue — multiple addresses per official ticker
The workbook (sheet 01) and the app (`names.ts`) give different addresses for NVDA, SPY, SPCX and GME; only USAR agrees. Possible cause: different deployments/issuers (Robinhood Chain vs Arbitrum One "Classic EU" tokens — the Dune source the workbook cites covers both). Decision (owner, 2026-08-30): model **multiple deployments per token** (chain, issuer, address, source) rather than one canonical CA. Do not treat either set as canonical.

## Harvest plan
1. Census candidates (~25 new names): Denar, Longbow, The Index, Quotrons, EARN protocol, Arrows (options), L4VA, MaxFi, Squeeze, RSTOCKS, Atlas, Robindex, Fables/Prologue, Arcus, Rialto, Maple syrupUSDG, RoodFi, Sherwood/WOOD, TickerYard/YARD, Oakmont/STRIKE, HOOD10, plus culture names as `watch`.
2. Candidate addresses → `projects/<slug>.yaml addresses[]` with `verified: false`; known fakes → `findings.risk`.
3. Sheet 01 → `dependencies/stock-tokens.yaml` deployments list (after the deployment-model schema change).
4. Sources: Dune dashboards (okxweb3wallet launchpads, natan_benish2001 LONG, oclsanti stock tokens, lindyhan Earn), RWA.xyz, DefiLlama, hoodl2, DexScreener → source ledgers.
5. Feed items (dated) → changelog / evidence pointers.
