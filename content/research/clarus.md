---
slug: clarus
coverage: stub
methodology_version: proofline-v1.0
---

# CLARUS — research record

## Identity

The Dogcow is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-08-28 minted The Dogcow (CLARUS) and seeded the CLARUS/AAPL book. Traders buy and sell CLARUS against AAPL. AAPL is the quote rail. clarus.lol and @Clarus_rh pin this contract.

Themes: memecoin, stock-paired:AAPL, rwa

## Deployment

CLARUS token (EIP-1167 DopplerERC20V1 clone): 0x22ea949763dB855880264A8FB689E07021661e18 on robinhood-chain. [verified S4 S5 S6]

DopplerERC20V1Factory (token creator): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S4 S6]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S4 S6 S14]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S5 S6]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

## Control

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. The create-tx Lock log lists beneficiaries 5% that Airlock owner and 95% the deployer EOA 0xBEE017…0A47, which has no code. factory() on the token reverts. [verified S5 S6]

## Security

DopplerERC20V1 is partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). The token is an EIP-1167 shell. No audit report URL was located this pass. [verified S4 S14] [unknown]

## Engineering

_Research pending._

## Team

clarus.lol titles CLARUS THE DOGCOW, prints CA 0x22ea9497…1e18, and links https://x.com/clarus_rh. @Clarus_rh bio reprints that CA. DexScreener websites and socials match. Flag confirmed-official for that pair. DexScreener also lists 512pixels.net/dogcow/ as thesis; that page has no contract. @ClarusRH is a different handle whose bio names 0x4Aceeee0…7777; flag handle-collision. [verified S7 S8] [claim S15 S16]

## Product and economics

LongLauncher.create from EOA 0xBEE017…0A47 at 2026-08-28T03:16:38Z cloned DopplerERC20V1 as The Dogcow / CLARUS, supply 1e9*1e18, numeraire AAPL 0xaF3D…93f9, tokenFactory 0x1B37…b69a. Airlock getAssetData returns that AAPL as numeraire and the token as word5; two slots are 0xdead. Uniswap v4 PoolManager 0x8366…0951 received nearly the full supply in the create transaction. LaunchCreated normalizedTicker is CLARUS. [verified S4 S5 S6]

DexScreener labels the primary book Uniswap v4 CLARUS/AAPL 0xc0eb…1841. Gecko names the same pool CLARUS / AAPL with dex bankr-robinhood. Secondary CLARUS/ETH Uniswap v4 books exist with far less liquidity. GET /rhj/assets lists AAPL as Apple • Robinhood Token at this quote address on chain 4663. [verified S1 S2 S12]

CLARUS/AAPL Uniswap v4 24h volume is 203407.04 USD and reserve_in_usd is 165931.65 at 2026-09-03T05:22:53Z from the Gecko pool endpoint. fdv_usd is 378929.60. Gecko token volume_usd.h24 is 232242.59 across all pools, not the AAPL book. [claim S2 S3]

DexScreener same pair: liquidity.usd 167560.59, volume.h24 191327.37, fdv/marketCap 386981. Blockscout holders_count 569. Pair created 2026-08-28T03:16:38Z. Assignment lead of liq ~$162,813 / vol ~$188,367 is the same book at an earlier print; live DexScreener is $167,561 / $191,327 this as_of. [claim S1 S4]

## Communications

@Clarus_rh posted buy on Robinhood Crypto via LONG [claim S9]

@Clarus_rh posted buying CLARUS buys Apple stock [claim S10]

@trenchfundbot posted CLARUS CA vs AAPL [claim S11]

@medonchain posted CLARUS as an AAPL runner [claim S17]

## Findings

USD liquidity on the CLARUS/AAPL book counts both CLARUS and AAPL. Gecko reserve and DexScreener liquidity for the same pool differ this pass. Token owner() is Airlock. Two other robinhood books also name The Dogcow / CLARUS against AAPL at other addresses. @ClarusRH is a different handle with a different CA. [claim S7]

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Stock Token rail; pool USD reserve is CLARUS plus AAPL, not a USDG backstop. [verified S12 S13]
- Token owner() is Airlock; 95% Lock beneficiary is the deployer EOA. [verified S5 S6]
- Same-name CLARUS/AAPL clones exist at other addresses on DexScreener. [claim S1]
- @ClarusRH is a handle-collision with a different CA. [claim S16]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/create tx, RPC name/symbol/owner/getAssetData, DexScreener tokens, Gecko pool/token, /rhj/assets, clarus.lol, @Clarus_rh profile and posts, @trenchfundbot, @medonchain, @ClarusRH, and 512pixels were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S7 S12]
- Numbers: 203407.04 is the Gecko CLARUS/AAPL pool 24h volume, not the 232242.59 token all-pools figure. Reserve 165931.65 is that pool. DexScreener 191327.37 / 167560.59 is the same pair, different aggregator. [claim S1 S2 S3]
- Adversarial: the strongest contrary reading is that CLARUS is census LONG, Bankr, or one of the packed AAPL twins (ICOIN/AP/AAPLCAT/AAPLDOG/JOBS/Appleseed). Create tx is LongLauncher.create for this CA only; those packed tokens use other addresses; Gecko dex id bankr-robinhood is the Doppler book label, not the Bankr agent. [inference S5 S7 S12]

## Sources

- S1 — CLARUS token pairs on Robinhood.
- S2 — CLARUS/AAPL pool on Bankr (Robinhood).
- S3 — The Dogcow token on Robinhood.
- S4 — CLARUS 0x22ea949763dB855880264A8FB689E07021661e18.
- S5 — CLARUS creation tx 0xd9caa24c….
- S6 — eth_getCode and ERC-20 / Airlock calls.
- S7 — clarus.lol shrine.
- S8 — Clarus The Dogcow profile.
- S9 — Buy on Robinhood Crypto via LONG.
- S10 — Everytime you buy me your buying apple stock.
- S11 — $clarus CA vs AAPL.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9.
- S14 — DopplerERC20V1 0x3Be8…C599.
- S15 — The History of Clarus the Dogcow.
- S16 — Clarus the Dogcow profile (other CA).
- S17 — AAPL runner / $CLARUS CA.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:28:00Z; methodology_version: proofline-v1.0.
