---
slug: nanami
coverage: stub
methodology_version: proofline-v1.0
---

# NANAMI — research record

## Identity

NANAMI is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against MSFT. LongLauncher.create deploys Windows chan (NANAMI) through DopplerERC20V1Factory and seeds the NANAMI/MSFT book. Traders buy and sell NANAMI against Microsoft • Robinhood Token. No official site was located this pass; @WindowschanRH posted the contract.

Themes: memecoin, stock-paired:MSFT, rwa

## Deployment

NANAMI token (EIP-1167 DopplerERC20V1 clone): 0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18 on robinhood-chain. [verified S1 S5 S14]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5 S6]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S3 S5 S6]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S6 S15]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [verified S5 S6 S17]

MSFT Microsoft • Robinhood Token (pair quote / rail): 0xe93237C50D904957Cf27E7B1133b510C669c2e74 on robinhood-chain. [verified S7 S12 S16]

## Control

_Research pending._

## Security

token owner() is Airlock. Launch EOA 0xb057…127e has no code and is the IPFS fee_receiver plus the 95% Lock beneficiary. DopplerERC20V1 and DopplerERC20V1Factory are partially verified (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher source is verified. No audit report URL was located this pass. [verified S2 S3 S5 S15] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info is null. Constructor IPFS lists https://x.com/WindowschanRH and a YouTube Windows 7 Madobe Nanami commercial as Website. @WindowschanRH bio is Windows chan with no CA; the account posted 0x2895ee0AbF…1E18 at 16:37:10Z, two minutes after create. Flag unconfirmed-official. [claim S7 S11 S13]

Blockscout search q=NANAMI also lists other Windows chan / NANAMI ERC-20s with holders_count 2–7. This packet owns only 0x2895ee0AbF…1E18 (holders_count 131). [claim S25]

## Product and economics

LongLauncher 0x22e9…eeED create from 0xb057…127e at 2026-09-02T16:34:59Z minted Windows chan / NANAMI supply 1e9*1e18 via DopplerERC20V1Factory 0x1B37…b69a (EIP-1167 impl 0x3Be8…C599). LaunchCreated normalizedTicker NANAMI, numeraire MSFT 0xe932…2e74, poolId 0x8185…4394, reservedUntil 2026-09-03T16:34:59Z. [verified S4 S5 S14]

Airlock 0xeb7C…0862 received OwnershipTransferred and the initial mint. DopplerHookInitializer locked LP with beneficiaries 5% 0x21E2…7A66 and 95% 0xb057…127e. PoolManager 0x8366…0951 is the venue. Secondary NANAMI/ETH and NANAMI/USDG Uniswap v4 books exist on DexScreener with far less liquidity than the MSFT book. [verified S7 S14 S17]

NANAMI/MSFT Uniswap v4 24h volume is 292280 USD and liquidity.usd is 34560.79 at 2026-09-03T04:50:00Z from DexScreener. fdv/marketCap is 36141. Pair created 2026-09-02T16:34:59Z. Blockscout holders_count 131. PoolManager holds about 760M of 1e9 supply. [claim S1 S7 S18]

Gecko pool volume_usd.h24 is 270990.2956 and fdv_usd is 35813.68754. Gecko reserve_in_usd is -785.059 and is not used as TVL. Gecko token fdv_usd 345850.49 / price_usd 0.0003458 is the NANAMI/USDG dust book, not the MSFT pair. [claim S8 S9 S24]

## Communications

@WindowschanRH posted hit or miss by Nanami [claim S22]

@WindowschanRH posted Calling the board before the print [claim S23]

@Timsic posted NANAMI Windows chan paired with MSFT [claim S19]

@WindowschanRH posted launch on longdotxyz vs MSFT [claim S10]

@WindowschanRH posted the NANAMI contract address [claim S11]

## Findings

USD liquidity on the NANAMI/MSFT book counts both sides, and the quote side is MSFT, not USDG. Gecko's token fdv follows a dust NANAMI/USDG pool, not the MSFT book. No official site was located; @WindowschanRH is unconfirmed-official. Several other Windows chan / NANAMI tickers exist on Blockscout. [claim S12]

- Quote token MSFT 0xe932…2e74 is a Robinhood Stock Token rail; NANAMI is not MSFT. [verified S12 S16]
- Pool USD reserve is NANAMI plus MSFT, not a USDG backstop. [claim S7 S18]
- Gecko token fdv follows a dust USDG pool; DexScreener MSFT book fdv is 36141. [claim S7 S9 S24]
- No official handle or domain this pass; @WindowschanRH is unconfirmed-official. [claim S7 S13]
- Multiple other NANAMI tickers exist on Blockscout. [claim S25]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/MSFT and create tx logs, RPC name/symbol/owner/getCode, DexScreener tokens and token-pairs, Gecko token/pool/pools (HTTP 200), /rhj/assets, constructor IPFS, YouTube oembed, and the X posts cited were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S12 S13]
- Numbers: 292280 is the DexScreener NANAMI/MSFT pool 24h volume, not Gecko token 270920.63. Liquidity 34560.79 is that pool. Gecko pool volume 270990.30 is the same pair, different aggregator. Gecko token fdv 345850.49 is the USDG dust book. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this is CLIPPY/MSFT, or a Pons v2 MSFT graduation (DIH / VERITY), or an official Microsoft product. CLIPPY is 0x85856F…1E18 with clippyrh.com / @ClippyMSFT. DIH/VERITY are Pons v2 CAs. This CA is LongLauncher Doppler 0x2895ee0AbF…1E18. GET /rhj/assets lists MSFT at 0xe932…2e74 as the rail, not NANAMI. [inference S1 S4 S12]

## Sources

- S1 — Token 0x2895ee0AbF…1E18 Windows chan / NANAMI.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — LongLauncher create tx 0xb11d842a…445a.
- S5 — eth_getCode, name, symbol, owner() on NANAMI.
- S6 — eth_getCode factory, impl, LongLauncher, Airlock, MSFT, launcher EOA.
- S7 — latest/dex/tokens NANAMI.
- S8 — NANAMI/MSFT Uniswap v4 pool.
- S9 — Windows chan token.
- S10 — Nanami Madobe aka Windows chan launched on longdotxyz.
- S11 — NANAMI contract address post.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Constructor metadata bafkreigwz6drbu5…gt2u.
- S14 — LaunchCreated and Initialize logs on create tx.
- S15 — Address 0x22e9…eeED LongLauncher.
- S16 — Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT.
- S17 — Address 0xeb7C…0862 Airlock.
- S18 — token-pairs/v1/robinhood NANAMI.
- S19 — NANAMI Windows chan paired with $MSFT.
- S22 — hit or miss by Nanami.
- S23 — Calling the board before the print.
- S24 — NANAMI token pools.
- S25 — api/v2/search q=NANAMI.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:54:00Z; methodology_version: proofline-v1.0.
