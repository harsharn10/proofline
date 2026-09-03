---
slug: denar
coverage: stub
methodology_version: proofline-v1.0
---

# Denar — research record

## Identity

Denar is classified as Isolated lending market.

The chain's isolated money market for tokenized stocks. Lenders deposit USDG into an ERC-4626 vault that allocates behind per-market caps; borrowers post NVDA, AAPL, SPY or other listed tokens and draw USDG without selling. Equity books use Chainlink with market-hours guards; PONS uses a Uniswap TWAP and a separate vault. @DenarMarkets runs denar.markets.

Themes: lending, rwa, vault, stock-paired:NVDA

## Deployment

DENAR token (PonsV2LauncherToken): 0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508 on robinhood-chain. [verified S14 S15 S16]

Denar Morpho Blue (equity lending core): 0xf0A0a33729270586cDD66010B1cedE649745c3A5 on robinhood-chain. [verified S9 S19 S18]

AdaptiveCurveIrm (Denar instance): 0x9316E7eDAB60eF0f489b1E4D11DDcDaa560aCbfD on robinhood-chain. [claim S9 S18]

Denar USDG Vault (dnUSDG, MetaMorphoV1_1): 0xF0E6AD006080c48766ddb95b8c568D72bC059050 on robinhood-chain. [verified S9 S20 S21 S18]

MetaMorphoV1_1Factory: 0x99a0bD825beDA579794F3f715ab3984310C7226E on robinhood-chain. [claim S9 S22]

DenarLiquidator (equity): 0x4d61E8a7eF442eb077650D349781F2cc3Ebe42d1 on robinhood-chain. [claim S9 S23]

Denar Frontier USDG (dnFRONT): 0x338b2f252dae1deb00Afb700128e592a19F8918c on robinhood-chain. [verified S9 S18 S25]

Protocol owner / deployer: 0xdCB002787Fb86873051b838582063517FDc47c6F on robinhood-chain. [verified S9 S10 S24 S18]

Morpho Blue (canonical; not Denar-owned): 0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010 on robinhood-chain. [claim S9 S18]

## Control

`owner()` on Denar Morpho, dnUSDG, DenarLiquidator and Frontier returns EOA `0xdCB002787Fb86873051b838582063517FDc47c6F`, which also created those contracts. The address has no code. Docs name it the deploying address for the seed phase and list a later path through a dedicated bot key, a multisig, then a guardian. [verified S18 S19 S24] [claim S10]

dnUSDG `timelock()` is 86400 seconds. The constructor set `initialTimelock` to 0; the 1-day value is a later accept. `curator()` and `guardian()` return the zero address. `fee()` is 0; `feeRecipient()` is the same admin EOA. Frontier `timelock()` reverts, matching the docs line that the Frontier vault launched without a delay on cap increases. [verified S18 S21] [claim S10]

## Security

Docs attribute Morpho Blue's immutability and an internal adversarial review to the launch. No external audit report was linked from the site, docs, X bio or GitHub this pass. Canonical Morpho `0x9D53d5…` is Morpho's verified primitive, not a Denar-owned contract. [claim S12] [verified S18] [unknown]

## Engineering

_Research pending._

## Team

Public identity is the site, docs and `@DenarMarkets`. www.denar.markets links the X handle and the token explorer URL; the X bio URL field is denar.markets; the Pons `launchToken` socials field is `https://x.com/DenarMarkets`. No legal name appeared on those pages. github.com/denar-markets, github.com/DenarMarkets and github.com/denarmarkets returned 404. t.me/DenarMarkets and t.me/denarmarkets show 4 subscribers and are not linked from the site. The token launch transaction is from EOA `0xa6f3EEaa4841218Ba07B94deE9805f98276F513a`, a different key from the protocol deployer. [verified S7 S13 S16] [claim S37]

## Product and economics

Borrowers post listed collateral into isolated Morpho Blue markets and draw USDG. The site lists seven open markets plus one ERC-4626 vault: PONS/USDG at 38.5% LLTV, NVDA/AAPL/MSFT/TSLA at 62.5%, SPY/QQQ at 77%. Equity markets settle on Denar's Morpho `0xf0A0a33729270586cDD66010B1cedE649745c3A5` with DenarOracle wrappers on Chainlink. Docs state each market tuple is immutable at creation. [claim S7 S8 S9]

Lenders deposit USDG into Denar USDG Vault (`dnUSDG`) `0xF0E6AD006080c48766ddb95b8c568D72bC059050`, a verified MetaMorphoV1_1 whose asset is USDG `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`. `supplyQueueLength()` is 6. `totalAssets()` this pass is 28709.75 USDG. Direct market lending is documented as a path that skips the vault. [verified S18 S20 S21]

PONS is documented as a different stack: 5-minute Uniswap v3 TWAP (`DenarTwapOracle` `0x07a8b7c2…`, verified), canonical Morpho `0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010`, and Frontier vault `0x338b2f252dae1deb00Afb700128e592a19F8918c` (`dnFRONT`). RPC `name()`/`symbol()` decode Denar Frontier USDG / dnFRONT with 10 USDG `totalAssets()` this pass; Blockscout still reports that address as not a contract. [claim S9 S12] [verified S18 S39]

DENAR is a Pons v2 launch token. `creator_address_hash` is PonsV2LaunchDeployer `0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42`; the creation transaction is `launchToken` on PonsV2LaunchFactory `0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e` at 2026-08-30T21:37:55Z with `pairToken` the zero address. The deepest book this pass is Uniswap v4 DENAR/ETH (poolId `0x8e1a7add…`). [verified S14 S16 S17]

dUSD, the documented 1:1 USDG dollar and sdUSD staked share, is not deployed. Docs state the first minting window is reserved for Denar Points holders. [claim S38]

dnUSDG `totalAssets()` this pass: 28709.75 USDG (USDG 6 decimals). That is the vault's on-chain asset balance, not a DefiLlama chain slice. api.llama.fi/protocol/denar returned HTTP 400. Frontier `totalAssets()` is 10 USDG. dnUSDG has 19 holders. [verified S18] [claim S35]

DexScreener Uniswap v4 DENAR/ETH (not an all-pairs total): liquidity 81578.22 USD, 24h volume 606232.57 USD, price 0.0008140 USD, fdv 814036 USD. Blockscout token: 1374 holders, circulating_market_cap 862633.35 USD, total supply 1e9 DENAR. [verified S15 S17]

Official posts described a 10,000 USDG seed, per-market caps moving 2,500 → 5,000 → 30,000/60,000 USDG, a ~0.05% APR, and a CoinGecko listing. Those posts are not the same observation as `totalAssets()` 28709.75 USDG. [claim S27 S28 S31 S41]

## Communications

Official account posted stock and PONS deposit caps raised [claim S27]

$DENAR listed on CoinGecko, per the official account [claim S28]

Official account posted PONS 10,000 USDG cap nearly filled [claim S29]

Official account posted PONS as first on-chain-native market [claim S30]

Caps raised 2,500 to 5,000 USDG after the 1-day timelock [claim S31]

Official account posted the DENAR token address for DexScreener [claim S33]

## Findings

Admin roles sit on one EOA. The equity vault has no curator and no guardian; cap raises use a 1-day timelock that started at zero in the constructor. Docs say there has been no public sale while the token is a Pons v2 launch with a live DEX book. A listing vote tagged an Ethereum address that has no code on 4663. dUSD is not deployed. No external audit URL was located. [claim S7]

- Protocol owner, vault owner, liquidator owner, fee recipient and Frontier curator are one EOA with no code; equity vault curator and guardian are unset. [verified S18 S24]

- Token docs state there has been no public sale and that distribution publishes at generation; the token was created by Pons v2 `launchToken` and has 1374 holders plus a Uniswap v4 book. [disputed S11 S16 S17]

- The 31 Aug listing vote tagged `ethereum:0x07f5b682…`; that address has no code on 4663. Flag: wrong-chain, ca-collision. [verified S32 S40]

- No external audit report was located; docs cite an internal review and a planned external audit. [claim S10 S12] [unknown]

- dUSD is documented as not deployed. [claim S38]

- Frontier vault and adapter are not indexed as contracts on Blockscout this pass despite non-empty RPC code. [verified S18 S25]

- Receipts: www.denar.markets HTML, docs.denar.markets pages (how-it-works, contracts, governance, token, fees, changelog, dUSD), X profile and named status URLs, Blockscout address/token/tx/smart-contract APIs, DexScreener token-pairs, DefiLlama protocol/denar (400), GitHub org 404s, t.me previews, and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified S7 S9 S14 S17 S18]

- Numbers: 28709.75 USDG is `totalAssets()` on dnUSDG, not a DefiLlama row; 606232.57 USD is DexScreener Uniswap v4 DENAR/ETH volume.h24, not an all-pairs or all-chains total; 1374 is Blockscout holders_count; cap figures in events are official posts, not the vault print. [verified S15 S17 S18] [claim S27]

- Adversarial: the strongest contrary reading is that Denar is Longbow or Arrow, or that census `announced` still holds because Morpho marketIds were not eth_called, or that the Pons token is unrelated to the lending stack. Token name Denar Markets, site footer CA, docs CA, launchToken socials field, vault name Denar USDG Vault, and the site↔handle cross-link argue against a merge; the pool and contracts on 4663 meet the mainnet bar even while market-id params stay docs claims. Docs "no public sale" versus the Pons launch remains an open conflict. [inference S7 S11 S14 S16 S17]

## Sources

- S7 — denar.markets home HTML.
- S8 — What is Denar / How Denar works.
- S9 — Contracts.
- S10 — Governance & admin powers.
- S11 — $DENAR — the value engine.
- S12 — Changelog.
- S13 — @DenarMarkets profile.
- S14 — Address 0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508.
- S15 — Token Denar Markets (DENAR).
- S16 — DENAR creation tx launchToken.
- S17 — DENAR token-pairs on robinhood.
- S18 — eth_getCode / eth_call Denar stack.
- S19 — Denar Morpho 0xf0A0a337….
- S20 — dnUSDG MetaMorphoV1_1 0xF0E6AD00….
- S21 — dnUSDG verified source / constructor.
- S22 — MetaMorphoV1_1Factory 0x99a0bD82….
- S23 — DenarLiquidator 0x4d61E8a7….
- S24 — Admin 0xdCB00278….
- S25 — Frontier 0x338b2f25… address page.
- S27 — Deposit caps raised.
- S28 — CoinGecko listing post.
- S29 — PONS cap almost filled.
- S30 — PONS market listing thread.
- S31 — Caps up after 1-day timelock.
- S32 — Seventh-market vote ballot.
- S33 — DexScreener CA verify post.
- S35 — protocol/denar.
- S37 — t.me/DenarMarkets preview.
- S38 — dUSD — the Denar dollar.
- S39 — DenarTwapOracle 0x07a8b7c2….
- S40 — 0x07f5b682… on chain 4663.
- S41 — Vault seeded 10,000 USDG.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T00:45:00Z; methodology_version: proofline-v1.0.
