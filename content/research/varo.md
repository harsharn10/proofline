---
slug: varo
coverage: stub
methodology_version: proofline-v1.0
---

# Varo — research record

## Identity

Varo is classified as Uniswap-pool launchpad.

Varo is a Robinhood Chain token launchpad by Rialto. One transaction mints a fixed-supply ERC-20 into a locked Uniswap v3 1% pool quoted in WETH, USDG or a liquid Robinhood stock token, with no bonding curve and no graduation step. The pool fee is 1%; after 29 Jul 2026 new launches send 20% of that fee to the protocol and 80% to creators.

Themes: launchpad, amm, stock-paired

## Deployment

Launchpad factory (ERC1967 proxy): 0x851153fe84239C2dC55fa191aC2f099e20a6d0b8 on robinhood-chain. [verified S2 S10 S11 S13]

Launchpad implementation (ERC1967 slot): 0x95C4AB0Bb4557811d2642cb12ae5eFb7E82f15b7 on robinhood-chain. [verified S10]

## Control

Factory 0x851153fe…d0b8 is an ERC1967 proxy (141 bytes). The implementation slot reads 0x95C4AB0B…15b7 (17333 bytes). The ERC1967 admin slot is empty. owner() and getOwner() reverted on both addresses at block 53102341. Blockscout API v2 was Cloudflare 403, so the explorer verified-source flag was not copied. [verified S10 S11]

## Security

No audit report URL was located on the site, the JS bundle, @launchonvaro or docs.rialto.xyz. [unknown]

## Engineering

_Research pending._

## Team

@launchonvaro bio is "A launchpad by @rialto_xyz" and the profile URL is varo.rialto.xyz. The site title is Varo; the meta description is "Discover and create tokens on Rialto Launchpad"; the JS validates API config as this Rialto network. The HTML does not embed @launchonvaro. docs.rialto.xyz describes a prop-AMM spot exchange and does not mention Varo. No repository was located; github.com/rialto is an unrelated org. [claim S1 S3 S14] [verified S2]

## Product and economics

One transaction deploys an ERC-20, opens a Uniswap v3 pool at fee tier 10000, and seeds a single-sided position with the full supply. @launchonvaro said that supply is 100 million and that there is no bonding curve and no graduation. Quote assets include WETH (0x0Bd7D308…cAD73 reproduced), USDG, and Robinhood stock tokens the pad marks liquid; on 2 Sep the account added LMT, GME, RIVN, PFE and DJT. [claim S2 S5 S9] [verified S10]

The 1% pool fee is split. At launch the protocol share was 30% of that fee; from 29 Jul 2026 new launches keep 80% for creators and 20% for the protocol. On 27 Aug the account said protocol fees denominated in launched tokens were sent to 0xdEaD. JS accepts initial_protocol_fee_bps only in 0..3000. [claim S6 S8] [verified S2]

OKX Dune query 8080854 row launchpad=varo, opened 2026-09-03: 8,712 tokens launched, 1,820 traded, 209 RWA-paired, DEX volume $109,924,852.72, RWA volume $7,345,146.32, 29,065 traders, 545,885 trades. That is an aggregator reconstruction, not a Llama chain slice. Llama slugs varo and protocol/varo were not found. [claim S12]

@rialto_xyz on 29 Jul said @launchonvaro had crossed $50M from 14.5k+ traders since launch. That is a project post, not the Dune row. [claim S15]

## Communications

@launchonvaro posted varo.rialto.xyz [claim S4]

@launchonvaro: Uniswap v3 single-sided 100M LP [claim S5]

Protocol fee cut from 30% to 20% [claim S6]

Varo listed on Uniswap Launches [claim S7]

Protocol fees in launched tokens sent to 0xdEaD [claim S8]

Five new quote assets: LMT, GME, RIVN, PFE, DJT [claim S9]

## Findings

The factory is an ERC1967 proxy whose implementation is unverified and whose owner() call reverted, so the upgrade path is not named. Liquidity is locked in a Uniswap v3 position at launch, so a failed launch cannot be unwound by pulling LP. Quote-asset list and protocol fee bps are API-configured, not read from a verified getter this pass. [claim S1]

- Factory implementation 0x95C4AB0B…15b7 is unverified; owner() reverted, so the upgrade holder is unnamed. [verified S10]
- Liquidity is a locked Uniswap v3 position; a launch cannot pull LP. [claim S5]
- No audit report was located this pass. [unknown]
- Handle is one-sided: X points at the site; the site HTML does not cite @launchonvaro. [claim S1 S3]
- Name collision with a $VARO launched token and with unrelated varo.fun UI. [claim S13]

- Receipts: varo.rialto.xyz HTML and JS bundle, @launchonvaro profile and the six posts above, @rialto_xyz 2082592965990461774, docs.rialto.xyz/llms.txt, Blockscout HTML title, RPC eth_getCode/eth_getStorageAt/eth_call, and the two Dune pages were opened on 2026-09-03. [verified S1 S2 S10]
- Numbers: $109.92M is the OKX Dune varo row, not an all-chains total and not a 24h figure. Bytecode lengths are eth_getCode at block 53102341. [claim S12] [verified S10]
- Adversarial: the strongest contrary reading is that Varo is the Rialto prop-AMM, or that the factory is Dune-only. The pad is a Uniswap v3 issuance product on varo.rialto.xyz; the factory constant is in the official JS. rialto is not a census slug, so possible_matches is empty and the objects stay distinct. [claim S2 S10 S14]

## Sources

- S1 — varo.rialto.xyz home HTML.
- S2 — varo.rialto.xyz JS bundle index-B3vSkBR-.js.
- S3 — X profile.
- S4 — varo | varare, to launch.
- S5 — Building on Uniswap V3.
- S6 — Protocol fee 30% to 20%.
- S7 — Varo is now live on Uniswap Launches.
- S8 — Protocol fees in launched tokens burned.
- S9 — Five new quote assets.
- S10 — eth_getCode / eth_getStorageAt / eth_call factory.
- S11 — Address page 0x851153fe…d0b8.
- S12 — Robinhood Chain launchpads lifetime row varo.
- S13 — Varo (Rialto) Token Launches Decoded.
- S14 — docs.rialto.xyz introduction / llms.txt.
- S15 — launchonvaro volume since launch.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:33:00Z; methodology_version: proofline-v1.0.
