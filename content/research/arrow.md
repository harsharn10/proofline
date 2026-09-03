---
slug: arrow
coverage: stub
methodology_version: proofline-v1.0
---

# Arrow Finance — research record

## Identity

Arrow Finance is classified as Collateralized debt protocol.

An overcollateralized CDP on Robinhood Chain. A user deposits one approved asset into a vault, mints aUSD against it, and repays to release the collateral. Docs list WETH, USDG and Stock Tokens as collateral. The same brand also runs ArrowPad, a bonding-curve launchpad. Official site arrowfinance.io and handle @ArrowFinanceio. Distinct from Arrows, the options protocol.

Themes: lending, rwa, launchpad

## Deployment

ARROW token (ArrowToken): 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03 on robinhood-chain. [verified S22 S27 S28 S44]

aUSD (Arrow USD): 0x4f11d7603D1B0D0f021Db552D8A6d88d7fa38ecf on robinhood-chain. [verified S26 S29 S30]

ArrowPad launch factory (Launchpad): 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe on robinhood-chain. [verified S23 S31]

ARROW/WETH Uniswap v3 pool: 0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f on robinhood-chain. [claim S32 S34]

aUSD liquidity pool on up v3: 0x29e3f3d9891cacf213361bcbcb7728970d53baa8 on robinhood-chain. [claim S26 S33 S37]

CDP core (vault manager / stability pool): NULL — no vault-manager, stability-pool or liquidator address on docs, site, buy page, Linktree or explorer labels this pass on robinhood-chain. [claim S21 S23]

## Control

owner() on ArrowToken returns the zero address, so setBuyTax, setSellTax, setTaxWallet and the other onlyOwner paths cannot fire unless ownership is later accepted back — the verified source has no reclaim. Constructor tax is 1% buy and 1% sell, ceiling 15%. Live tax getters were not eth_called this pass. [verified S27 S44]

owner() on Launchpad returns EOA 0xcb962b93bdccc7156b683cc01ad34306c2d67929, the same address that created the factory. Verified source lets that owner set token/gauge implementations, curve, treasury, LP receiver, creation cost, fees and the access registry, with no timelock. [verified S31]

CDP admin, oracle, cap and listing keys were not located. Docs §6 say veARROW Governor plus Timelock is not live and that until governance launches the project manages parameters. [claim S21]

Official posts name a Sherlock / Blackthorn review of the CDP; site and docs do not link a report. In-app launchpad docs link a PeckShield report on original DegenX contracts and call the pad a permissioned fork of that code. [claim S21 S23 S39]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

Official identity is bidirectional through Linktree: @ArrowFinanceio bio links linktr.ee/arrowfinanceio, which lists https://www.arrowfinance.io, docs, the CDP app, Telegram, and both token addresses. The buy page repeats the ARROW address and a Blockscout token link. github.com/arrowfinanceio returned 404. [verified S20 S22 S25 S26]

ARROW and aUSD share creator 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f, an EOA. ArrowToken constructor names that address as ecosystemWallet. No named legal entity appeared on the pages opened this pass. [verified S27 S29 S44]

Census slug arrows is a different product: options at arrows.finance / @arrowsonhood / token 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e. DefiLlama ArrowPad twitter field is RobinArrowPad, not @ArrowFinanceio. [claim S27 S40]

## Product and economics

The documented CDP is one-asset, one-debt vaults. A user supplies an approved collateral, mints aUSD up to that market's LTV, and repays aUSD plus a stability fee to release collateral. aUSD is described as minted and burned only by Vault Managers. Docs list WETH, USDG, and two tiers of Stock Tokens and ETFs. [claim S20 S21 S23]

Liquidation, as documented, runs through a Stability Pool: depositors place aUSD, and when a vault's health factor falls below 1 the pool burns the debt and takes collateral at a discount. Docs §4.2 describe US cash-hours handling for Stock Token collateral as planned, not yet active. A market redemption path at par is also documented as not live. [claim S21]

ArrowPad is a separate factory at 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe. In-app docs describe a 1 billion fixed supply, 800 million sold on a bonding curve, 200 million seeding a Uniswap V3 position locked in LpHolder at graduation. The same page says creation is permissionless; verified Launchpad.sol requires AccessRegistry.isTokenCreationAllowed. The launchpad UI this pass showed Live trending — no tokens yet. [disputed S23 S31]

ARROW is not a pad graduate. It was created by EOA 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f. Verified ArrowToken.sol is a 10 million fixed-supply ERC-20 with owner-settable buy/sell tax; launch() seeds an ARROW/WETH Uniswap V2 pair. The buy page points DexScreener at that V2 pool; the deeper book this pass is Uniswap v3 pool 0xd1FA…. Pair asset is WETH. [verified S22 S27 S34 S44]

The ARROW/WETH Uniswap v3 pair 0xd1FA… showed liquidity 3787458.75 USD and 24h volume 100896.87 USD at fetch, with DexScreener marketCap 6199196 USD. The V2 pair linked from the buy page showed liquidity 296487.25 USD and 24h volume 422219.72 USD. Blockscout holders_count on ARROW was 7328. [verified S28 S34 S35]

The borrow app, no wallet connected, showed TVL 58257.41 USD, aUSD outstanding 30435.19, collateral ratio 191%, stability pool 22256.33 aUSD, with funded WETH, USDG and AAPL rows. aUSD totalSupply on Blockscout was 42332.58. Those two aUSD figures are not the same quantity. [claim S24 S30]

DefiLlama this pass had ArrowPad TVL about 1 USD and ArrowPad.fun about 532 USD on Robinhood Chain, and no Arrow Finance CDP protocol row. Llama launchpad TVL is not CDP TVL. [claim S40 S45]

## Communications

aUSD/USDG gauge approved on up [claim S37]

syrupUSDG listed as Arrow collateral [claim S38]

Rialto Swap API to be embedded in Arrow [claim S43]

Official account posted Arrow CDP v1 is Now Live [claim S36]

Sherlock review and 16-market open dated 8/31 [claim S39]

## Findings

CDP vault-manager and stability-pool addresses are unpublished, so liquidation, oracle and cap paths cannot be read on chain from official docs. Launchpad owner is a single EOA with no timelock. Docs, the borrow app and pre-open posts disagree on how many markets are live and at which LTV. [claim S20]

- CDP core contracts are unlabeled, so liquidation, oracle, pause and cap paths are not reproduced. [claim S21 S23]
- Launchpad owner is one EOA with no timelock on factory setters. [verified S31]
- Docs, the borrow app and the 8/30 post disagree on live market count and LTV. [disputed S21 S24 S39]
- aUSD explorer source is not verified; owner() on aUSD reverts. [verified S29]
- Sherlock is named in posts; no report is linked from official properties. [claim S21 S39]
- ArrowToken source documents a buy/sell tax; owner is now zero, so the last on-chain tax setting is frozen and was not re-read. [verified S44]

- Receipts: site, both docs pages, buy page, borrow app, X profile and named status URLs, Linktree, Telegram preview, GitHub 404, DexScreener pair and token APIs, DefiLlama protocol and chains APIs, and Blockscout address/token/source APIs were opened on 2026-09-02; excerpts are copied from those responses. [verified S20 S21 S22 S24 S27 S34]
- Numbers: holders 7328 is the Blockscout ARROW token field; 24h volume 100896.87 USD and liquidity 3787458.75 USD are the DexScreener ARROW/WETH Uniswap v3 pair slice, not an all-pairs or all-chains total; borrow-app TVL 58257.41 USD is a site readout, not an on-chain sum of vaults; DefiLlama ArrowPad TVL is the pad adapter, not CDP TVL. [claim S24 S28 S34 S40]
- Adversarial: the strongest contrary reading is that Arrow Finance is the launchpad (ArrowPad / ArrowPad.fun / Llama @RobinArrowPad) or that it is Arrows the options protocol. Official copy leads with the CDP; the Launchpad contract name is Launchpad, not a vault manager; token CAs, domain and handle do not match arrows.finance. [inference S20 S27 S31]

## Sources

- S20 — Homepage.
- S21 — Protocol documentation.
- S22 — Get $ARROW.
- S23 — In-app documentation (CDP and launchpad).
- S24 — Borrow app (read-only).
- S25 — X profile.
- S26 — Arrow Finance Official: X | Linktree.
- S27 — ARROW token 0xf2915d….
- S28 — ARROW token object.
- S29 — aUSD 0x4f11d760….
- S30 — aUSD token object.
- S31 — ArrowPad Launchpad 0x1Badc838….
- S32 — ARROW/WETH UniswapV3Pool 0xd1FA….
- S33 — aUSD up v3 pool 0x29e3….
- S34 — ARROW/WETH Uniswap v3 pair.
- S35 — ARROW token pairs.
- S36 — Arrow CDP v1 is Now Live.
- S37 — aUSD/USDG gauge approved on up.
- S38 — syrupUSDG is live on Arrow as collateral.
- S39 — Mainnet dated Monday 8/31 after Sherlock review.
- S40 — ArrowPad protocol.
- S43 — Rialto Swap API integration.
- S44 — ArrowToken verified source.
- S45 — Chains snapshot.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:15:00Z; methodology_version: proofline-v1.0.
