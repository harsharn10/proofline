---
slug: arrows
coverage: stub
methodology_version: proofline-v1.0
---

# Arrows — research record

## Identity

Arrows is classified as Options market.

Fully collateralized European calls and puts on Robinhood Stock Tokens and ETH, issued as transferable ERC-1155s. A user buys a long or deposits stock, WETH or USDG into a maturity writer vault that escrows maximum loss. Calls settle in-kind; puts settle in USDG. arrows.finance and @arrowsonhood run the surface. Distinct from Arrow Finance, the CDP.

Themes: options, rwa, vault, nft, stock-paired:NVDA

## Deployment

ARROWS token (PonsV2LauncherToken): 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e on robinhood-chain. [verified S10 S12 S13 S14]

Config: 0x410C428d7602EcB5B8C3255030e9852C2791445C on robinhood-chain. [verified S7 S14 S19]

SeriesFactory: 0xD03c98E93DF68BB5ADc9C27B3dD57863542A9D8f on robinhood-chain. [verified S7 S14 S16]

OptionToken: 0x9Af7485f5B8427C628E5F967aD9AA0f9289d015D on robinhood-chain. [verified S7 S14 S15]

CollateralVault: 0xd334f914544b570A5fd03b6956f997107dE9C840 on robinhood-chain. [verified S7 S14 S17]

VaultRouter: 0x09D965dD46Cc65fEbeea720295a18B798B4dF0ba on robinhood-chain. [verified S7 S14 S18]

FeeSplitter: 0xf5B9330931E5941e287d40237aDE0Bd6eacb8edc on robinhood-chain. [claim S7 S14 S30]

TokenStake: 0xFCda38304cF81E03ADeF0cb5BB26C171A93168b6 on robinhood-chain. [claim S7 S14 S31]

ETH MaturityCallVault: 0x277Ba3F49d550E031bD10E66E2deD624B20db2B4 on robinhood-chain. [claim S7 S14 S32]

ETH MaturityPutVault: 0x37D30B87050d65c28E67A97AE02e02c8Da2A0C3a on robinhood-chain. [claim S7 S14 S33]

## Control

owner() on Config, SeriesFactory, OptionToken, VaultRouter, FeeSplitter and TokenStake is EOA 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365. The same EOA created those cores and submitted the Pons launchAndBuy. README states the production V2 replacement has no timelock handoff. [verified S13 S14] [claim S11]

## Security

No third-party audit report URL was located on the site, docs, GitHub or X this pass. Whitepaper text treats audits as a launch requirement. ETH call and put vaults are unverified source. [unknown]

## Engineering

_Research pending._

## Team

@arrowsonhood bio names the site, the ARROWS token, and founder @iam0x00. The landing JS points at the same handle, app, docs and github.com/arrows0. github.com/arrows0/contracts README is Arrows V2 Contracts; the org homepage field is empty. [claim S10 S11]

## Product and economics

Vanilla European calls and puts. A short posts maximum-loss collateral at mint. Longs are ERC-1155s on OptionToken. V2 quotes come from a covered-call vault and a cash-secured-put vault per underlying, routed by VaultRouter. Call settlement is the underlying token; put settlement is USDG. [claim S6 S8 S15]

ARROWS is a Pons v2 launch token into Uniswap v4 against ETH. Docs list live maturity vaults for TSLA, NVDA, AAPL, GME, MU, SPCX and ETH. A 2 Sep post describes managed Uni v3/v4/UP range vaults as under construction. [verified S13 S20] [claim S7 S22]

DexScreener Uniswap v4 ARROWS/ETH 24h volume 75629.28 USD, liquidity 37074.54 USD, market cap 166632 USD at 2026-09-03T03:40:00Z. Blockscout holders_count 1048. Those figures are the token book, not writer-vault notional. [verified S12 S20]

@arrowsonhood posted week-1 volume 1234.53 USD and vault LP 12134.17 USD on 28 Aug, then 2 Sep challenge volume 3693 USD. Vault NAV was not reproduced. DefiLlama has no Arrows protocol row; ArrowPad and Arrow Markets are other names. [claim S21 S26]

## Communications

Trading Challenge recap: $3,693 volume, 501 trades [claim S21]

Managed range vaults across Uni v3, v4 and UP [claim S22]

Challenge recap: volume beyond $3,000; ETH options [claim S23]

ETH options vaults over $6K; total TVL $15.5K [claim S24]

Update live: trading is now available [claim S25]

Week 1 challenge: $1,234.53 volume, $12,134 LP [claim S26]

ETH options and settlement named for 31 Aug [claim S27]

## Findings

Core contracts are owned by one EOA with no timelock on the V2 replacement path described in the repository README, so parameter and upgrade-adjacent changes are not time-delayed on chain. ETH maturity vaults are unpublished source. Writer-vault NAV posted on X was not reproduced. Weekend oracle gaps are disclosed in the app copy. [claim S6]

- Live cores are owned by one EOA; README describes no timelock on the V2 replacement. [verified S14] [claim S11]
- ETH maturity vaults have code and unpublished source. [verified S32 S33]
- Posted writer-vault TVL was not reproduced on chain this pass. [claim S23]
- No audit report URL was located this pass. [unknown]
- Name collision with Arrow Finance (CDP) and with ArrowPad on Llama; token, domain and handle do not match. [verified S10 S12]

- Receipts: each URL above was opened on 2026-09-03 and the excerpt copied from the page, API or RPC result. [verified S6 S7 S12 S14 S20]
- Numbers: DexScreener volume and market cap are the ARROWS/ETH v4 pair, not an options-vault TVL; holders_count is the ERC-20. [claim S12 S20]
- Adversarial: the strongest contrary reading is that this slug is Arrow Finance (CDP) or ArrowPad. Domain arrows.finance, handle @arrowsonhood, token 0xD71b…4F0e and OptionToken ERC-1155 are a different product from arrowfinance.io / @ArrowFinanceio / 0xf291…9cD03. [inference S6 S10 S12 S15]

## Sources

- S6 — Arrows homepage.
- S7 — Contract addresses.
- S8 — Whitepaper.
- S10 — Arrows Finance profile.
- S11 — arrows0/contracts README.
- S12 — Address 0xD71b…4F0e ARROWS.
- S13 — ARROWS creation tx 0xa18d3b9d….
- S14 — eth_getCode, owner, name, totalSupply.
- S15 — Address 0x9Af7…015D OptionToken.
- S16 — Address 0xD03c…9D8f SeriesFactory.
- S17 — Address 0xd334…C840 CollateralVault.
- S18 — Address 0x09D9…F0ba VaultRouter.
- S19 — Address 0x410C…445C Config.
- S20 — ARROWS token pairs on robinhood.
- S21 — Arrows Trading Challenge Daily Recap 2 Sep.
- S22 — One position. Three liquidity engines..
- S23 — Arrows Trading Challenge Daily Recap 1 Sep.
- S24 — ETH options vault liquidity.
- S25 — Update is live! Trading is now available..
- S26 — Week 1 of the Arrows Trading Challenge.
- S27 — ETH options integration and settlement.
- S30 — Address 0xf5B9…8edc FeeSplitter.
- S31 — Address 0xFCda…68b6 TokenStake.
- S32 — Address 0x277B…b2B4 ETH MaturityCallVault.
- S33 — Address 0x37D3…0C3a ETH MaturityPutVault.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:55:00Z; methodology_version: proofline-v1.0.
