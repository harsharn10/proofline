---
slug: semi
coverage: stub
methodology_version: proofline-v1.0
---

# SEMI — research record

## Identity

SEMI is classified as Stock-paired token.

SEMI is an ERC-20 that trades in one Uniswap v4 pool against Robinhood's tokenized Micron (MU). Swaps pay a 5% hook fee converted to MU; staking earns ratchet mints only when MU backing per token makes a new high; bonding sends MU into the locked book for discounted SEMI. SemiVault at semivault.xyz / @Semivaultxyz publishes the token 0x5F03…BaC8 and the verified contract set.

Themes: memecoin, stock-paired:MU

## Deployment

SEMI token (SemiToken): 0x5F038759F6DE38fD3A85C0440daff1240238BaC8 on robinhood-chain. [verified S2 S3 S5]

SemiMinter (token minter()): 0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC on robinhood-chain. [verified S5 S6]

SemiLauncher (site: owns the locked LP): 0xBae7Af495b74D2ee0f1824Dfd544933d83106DEB on robinhood-chain. [claim S1 S15]

SemiHook (site: harvest lives here): 0x7b89c56Da91425F35D07290eCFEcF4E58dc13088 on robinhood-chain. [claim S1 S16]

MU (Micron Technology • Robinhood Token): 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD on robinhood-chain. [claim S7 S8 S17]

## Control

owner() reverts. deployer() is 0x0D45…10aC. minter() is verified SemiMinter 0x033d…7BeC. Verified SemiToken source: setMinter is deployer-only, one-shot, then frozen; mint requires msg.sender == minter. EIP-1967 slots on the token are zero. [verified S3 S5 S6]

## Security

No third-party audit report URL was located this pass. The FAB post named 54/54 live checks and 60/60 unit tests. [unknown]

## Engineering

_Research pending._

## Team

www.semivault.xyz, token constants, and @Semivaultxyz name the same CA, Telegram, and site. @Semivaultxyz posted the CA on 2026-08-14. t.me/semivault og:title SemiVault, 361 members. GitHub search q=semivault returned 0 repositories. [verified S1 S5 S10] [unknown]

## Product and economics

SemiToken 0x5F03…BaC8 was created 2026-08-13T23:07:15Z in tx 0xb79fba5b…353a from EIP-7702 account 0x0D45…10aC. The SEMI/MU Uniswap v4 pool 0xe356…e121 quotes MU 0xfF08…4afD and was created 32 seconds later. [verified S2 S4 S7 S8]

Site JS and readme name a 5% hook fee that converts to MU, SemiRatchet emissions gated on a backing high-water mark, SemiBond MU-in for discounted vesting SEMI, and SemiLauncher as the LP holder with no withdraw. Verified SemiToken mints 10_000_000e18 at construction and then only through minter(). [claim S1 S3]

THE FAB is a later chip-stock elimination game the official account posted live on 2026-08-19; busts are described as feeding MU into the locked SEMI floor. [claim S14]

DexScreener SEMI/MU Uniswap v4: liquidity.usd 1111103.62, volume.h24 2404077.99, fdv/marketCap 3621189 at 2026-09-03T03:20Z. [claim S7]

Gecko same pool: reserve_in_usd 5617276.28, volume_usd.h24 2820873.18, fdv_usd 3680581.66, market_cap_usd 3670208.79 at 2026-09-03T03:32Z. Gecko token volume_usd.h24 2840325.89 matches the ~$2.8M window; token fdv_usd 34271598.25 and price_usd 0.6394 do not match the pool. [claim S8 S9]

Blockscout holders_count 1232. RPC totalSupply ~54.06M SEMI this pass versus 10M genesis. [claim S2 S5]

## Communications

@Semivaultxyz posted three-week stats [claim S11]

@Semivaultxyz posted an NFT mint for The Arrival [claim S12]

@Semivaultxyz posted $MU $1600 and liquidity reprice [claim S13]

@Semivaultxyz posted FAB losses market-buy SEMI [claim S21]

@Semivaultxyz posted THE FAB is live [claim S14]

@Semivaultxyz posted the SEMI contract address [claim S10]

## Findings

DexScreener liquidity.usd $1.11M and Gecko reserve_in_usd $5.62M describe the same pool id; a single liquidity figure would misstate the book. Supply is elastic through SemiMinter. MU is a Robinhood-issued tokenized stock, not a share in custody, and the pool marks through weekends. Other SEMI tickers exist on 4663 with a handful of holders. [claim S1]

- DexScreener and Gecko disagree on SEMI/MU liquidity for the same pool id. [verified S7 S8]
- Gecko token fdv/price disagree with the SEMI/MU pool fdv/price. [verified S8 S9]
- Supply is elastic through SemiMinter; live supply is not the 10M genesis figure. [verified S3 S5]
- Other SEMI tickers on 4663 are not this contract. [verified S20]
- No third-party audit report URL this pass. [unknown]

- Receipts: site HTML and JS, Blockscout token/source/create tx/minter/launcher/hook/MU/MOO/search, RPC eth_getCode and SemiToken calls, DexScreener token, Gecko pool and token, X posts, Telegram preview, GitHub search were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S2 S5 S7 S8]
- Numbers: 2820873.18 is the Gecko SEMI/MU pool 24h volume, not the Gecko token all-pools 2840325.89. Reserve 5617276.28 is that pool. DexScreener 2404077.99 / 1111103.62 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that SEMI is the same MU-paired book as MOO, or a LONG Doppler clone. MOO is 0xD9dB…1e18 created by DopplerERC20V1Factory 0x1B37…b69a with handle @memorycowmoo; SEMI is SemiToken 0x5F03…BaC8 created by 0x0D45…10aC with site semivault.xyz / @Semivaultxyz. [inference S2 S19 S20]

## Sources

- S1 — www.semivault.xyz home / v2.
- S2 — SEMI 0x5F038759F6DE38fD3A85C0440daff1240238BaC8.
- S3 — SemiToken verified source.
- S4 — SEMI creation tx 0xb79fba5b…353a.
- S5 — eth_getCode and SemiToken calls.
- S6 — SemiMinter 0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC.
- S7 — SEMI token pairs on Robinhood.
- S8 — SEMI / MU Uniswap v4 pool.
- S9 — semivault.xyz token.
- S10 — WHERE TO BUY $SEMI — AND WHERE YOU CAN'T.
- S11 — Latest stats just dropped.
- S12 — NFT mint to commemorate The Arrival.
- S13 — $MU $1600 coded.
- S14 — THE FAB is live.
- S15 — SemiLauncher 0xBae7Af495b74D2ee0f1824Dfd544933d83106DEB.
- S16 — SemiHook 0x7b89c56Da91425F35D07290eCFEcF4E58dc13088.
- S17 — MU 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD.
- S19 — MOO 0xD9dB30BB0D2b8d2eae3826A1372117E058791e18.
- S20 — Search Semi ticker collisions on 4663.
- S21 — FAB losses market-buy SEMI.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:35:00Z; methodology_version: proofline-v1.0.
