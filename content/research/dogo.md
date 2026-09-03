---
slug: dogo
coverage: stub
methodology_version: proofline-v1.0
---

# DOGO — research record

## Identity

DogBull is classified as Launchpad-graduated token.

A 1.01-billion-supply ERC-20 named DogBull (ticker DOGO) on Robinhood Chain. An EOA deployed verified DogBull.sol and seeded a Uniswap v4 DOGO/ETH book. Holders trade DOGO against ETH. dogbull.xyz publishes contract 0x77b0AA38451ccDC1b42587E2f80B9879A7f82356. No live official handle was located this pass.

Themes: memecoin, eth-paired, native

## Deployment

DOGO token (verified DogBull.sol): 0x77b0AA38451ccDC1b42587E2f80B9879A7f82356 on robinhood-chain. [verified S1 S2 S4 S16]

Uniswap v4 PoolManager (DOGO/ETH LP holder): 0x8366a39CC670B4001A1121B8F6A443A643e40951 on robinhood-chain. [verified S15 S5 S7]

## Control

owner() reverts. Verified source has no Ownable, no tax, and no public mint after the constructor. dogoWallet() returns the deployer with no setter. The deployer is an EOA (eth_getCode 0x) and still holds about 53.8M DOGO (~5.33%). [verified S4 S15 S16]

## Security

DogBull.sol is fully verified on Blockscout (project/contracts/DogBull.sol, compiler v0.8.26, is_partially_verified false). No audit report URL was located this pass. [verified S16] [unknown]

## Engineering

_Research pending._

## Team

dogbull.xyz publishes the CA and links x.com/dogbullxyz and t.me/dogbullonhood. Verified source comments the same three URLs. GET x.com/dogbullxyz returned Account suspended. Site twitter:site is @dogo, which is D.O.G.O., not this token. t.me/dogbullonhood titles DogBull On Hood with 167 members and no contract in the public preview. Flag unconfirmed-official and third-party-link. No GitHub repository was located. [verified S9 S16] [claim S10 S11 S14]

## Product and economics

EOA 0x986260fd57204B0732b4e9ee678fb21fA5F76EEb deployed DogBull at 2026-08-08T17:49:30Z (tx 0xf1db…da35, block 31265843). Constructor minted 1_010_000_000 * 10^18 to the deployer and set dogoWallet. factory() reverts. RPC eth_getCode is 3649 bytes, not an EIP-1167 clone. [verified S3 S4 S16]

Uniswap v4 pool 0xbe05…b6b1 (DOGO/ETH) was created 2026-08-10T11:40:15Z. PoolManager 0x8366…0951 is the top holder at about 100.05M DOGO. A second Uniswap v4 DOGO/USDG pair exists with liquidity.usd 0.09. [verified S5 S7 S15]

Gecko DOGO/WETH Uniswap v4 24h volume is 385442.45 USD and reserve_in_usd is 988735.55 at 2026-09-03T04:32:48Z. fdv_usd / market_cap_usd is 10021808.32. Gecko token volume_usd.h24 is 385444.93; Gecko token total_reserve_in_usd is 0.0 this pass and is not the book. [claim S6 S7]

DexScreener same pair: liquidity.usd 995249.75, volume.h24 385129.98, fdv/marketCap 10035790. Blockscout holders_count 20555. Pair created 2026-08-10T11:40:15Z. [claim S1 S5]

## Communications

CoinMarketCap listings bot posted $DOGO [claim S12]

@zazXBT ranked dogbull ~$10m cap [claim S13]

Listed X handle @dogbullxyz is suspended [verified S11 S9]

## Findings

The listed X handle @dogbullxyz is suspended, so comms surfaces stay unconfirmed-official. Site copy says LP locked and contract renounced; Gecko locked_liquidity_percentage is null and the deployer still holds about 53.8M DOGO. The site how-to-buy path tells users to send 0.05–10 Robinhood Chain tokens, which is not the Uniswap v4 book. USD reserve on the flagship pair is DOGO plus ETH, not a stock token. [claim S9]

- Listed handle @dogbullxyz is suspended; no bidirectional live handle this pass. [verified S11]
- Site claims LP locked / contract renounced; Gecko locked_liquidity_percentage is null and the deployer still holds ~53.8M DOGO. [claim S7 S9 S15]
- Site how-to-buy is send-native-tokens, not the Uniswap v4 book. [claim S9]
- No audit report URL this pass. [unknown]
- Distinct from packed doggie / doge-1 / dogecoin-tsla; ticker-family collision only. [verified S1 S5]

- Receipts: Blockscout token/address/create tx/holders/source, RPC name/symbol/dogoWallet/eth_getCode, DexScreener, Gecko token/pool/info, dogbull.xyz, t.me/dogbullonhood, x.com/dogbullxyz, GitHub search, @cmclistings, and @zazXBT were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S5 S7 S9]
- Numbers: 385442.45 is the Gecko DOGO/WETH pool 24h volume, not the 0.0 token total_reserve. Reserve 988735.55 is that pool. DexScreener 385129.98 / 995249.75 is the same pair, different aggregator. Holders 20555 is Blockscout holders_count (Gecko info 20546). [claim S1 S5 S6 S7]
- Adversarial: the strongest contrary reading is that this is packed doggie/doge-1/dogecoin-tsla, or that @dogo / @dogbullxyz is a live official handle. Different CAs, quotes (ETH vs TSLA/SPCX), and sites; @dogbullxyz is suspended and @dogo is unrelated. [verified S1 S5 S11]

## Sources

- S1 — Token 0x77b0…2356 DogBull / DOGO.
- S2 — Address 0x77b0…2356 DogBull.
- S3 — Creation tx 0xf1db5a8b…da35.
- S4 — eth_getCode, name, symbol, dogoWallet() on DOGO.
- S5 — latest/dex/tokens DOGO.
- S6 — DogBull token.
- S7 — DOGO/WETH Uniswap v4 pool.
- S9 — dogbull.xyz home.
- S10 — t.me/dogbullonhood.
- S11 — x.com/dogbullxyz Account suspended.
- S12 — New CoinMarketCap Listing $DOGO.
- S13 — robinhood chain memes by cap.
- S14 — Search dogbull.xyz OR dogbullxyz.
- S15 — DOGO holders page 1.
- S16 — DogBull verified source.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:36:00Z; methodology_version: proofline-v1.0.
