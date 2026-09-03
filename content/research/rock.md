---
slug: rock
coverage: stub
methodology_version: proofline-v1.0
---

# ROCK — research record

## Identity

ROCK is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against GLD. LongLauncher deploys ROCK in one create call and seeds the ROCK/GLD book. Traders buy and sell ROCK on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:GLD, rwa

## Deployment

ROCK token (EIP-1167 DopplerERC20V1 clone): 0xB6b5D146d89cDceD2E304389D08448E327c71E18 on robinhood-chain. [verified S1 S5 S15]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S3 S5]

LongLauncher (create target): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S15]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S15]

GLD SPDR Gold Trust Robinhood Token (pair quote / rail): 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e on robinhood-chain. [verified S7 S10 S13]

## Control

token owner() is Airlock. factory() reverts. Deployer EOA 0xe58F…3Afb has no code. DopplerHookInitializer Lock beneficiaries are 0x21E2…7A66 at 5% and the launcher EOA at 95%. [verified S5 S6 S15]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). No audit report URL was located this pass. [verified S2 S3] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. @justRock_RH names ROCK with bio Most Valuable Asset and no CA. @1xharsh posted i launched $ROCK on @longdotxyz and paid for DexScreener verification. Flag unconfirmed-official. [claim S7 S8 S11]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xe58F…3Afb at 2026-08-31T21:35:45Z minted ROCK supply 1e9*1e18 into Uniswap v4 poolId 0x028a…1d7e. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock 0xeb7C…0862. [verified S4 S5 S15]

Pair quote is GLD 0xC9a9…FC4e. PoolManager is 0x8366…0951. Secondary ROCK/ETH and ROCK/USDG books exist on DexScreener with far less liquidity than the GLD book. [verified S7 S13]

ROCK/GLD Uniswap v4 24h volume is 115262.98 USD and liquidity.usd is 113062.69 at 2026-09-03T05:06:11Z from DexScreener latest/dex/tokens. fdv/marketCap is 199919. Gecko was skipped after HTTP 429. [claim S7]

Blockscout holders_count 774. Pair created 2026-08-31T21:35:45Z. RPC totalSupply 998376280590820425261189213 versus create mint 1e27. [claim S1 S5]

DexScreener search listed packed UBIK/GLD, CASHBIRD/GLD, and SCHIFFY/GLD as separate books on the same GLD rail. [claim S12]

## Communications

@1xharsh posted ROCK launch on longdotxyz [claim S8]

@justRock_RH posted The next move is already written [claim S11]

@1xharsh posted ~1.6+ mil ROCK burnt [claim S17]

@Yourpop8 posted ROCK/GLD as meme vs tokenized gold [claim S9]

## Findings

USD liquidity figures on the ROCK/GLD book count both sides, and the quote side is GLD, not USDG. A second ROCK token 0x000AEc…9c5C is a PonsLauncherToken. No official handle was located, so comms surfaces stay unconfirmed-official. [claim S10]

- Quote token GLD 0xC9a9…FC4e is a rail in GET /rhj/assets; this subject is not that row. [verified S10 S13]
- Pool USD liquidity is ROCK plus GLD, not a USDG or WETH backstop. [claim S7]
- Ticker collision: PonsLauncherToken ROCK 0x000AEc…9c5C. [claim S14]
- No official handle or domain this pass; netlify vote/claim pages are copypasta-pattern. [claim S7 S11 S16]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/GLD/other ROCK and the create tx plus logs, RPC name/symbol/owner/code, DexScreener tokens and search, /rhj/assets, and X Latest posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S10]
- Numbers: 115262.98 is the DexScreener ROCK/GLD pair 24h volume, not an all-pools figure. Liquidity 113062.69 is that pool. Assignment lead of liq ~$107,570 vol ~$124,787 was not reproduced at this as_of. [claim S7]
- Adversarial: the strongest contrary reading is that ROCK is UBIK, CASHBIRD, or SCHIFFY, or that it is the Pons ROCK 0x000AEc…9c5C, or that @justRock_RH is official. UBIK is 0x8124…68Bd. CASHBIRD is 0x38C8…1e18. SCHIFFY is 0x42aF…1E18. The Pons token is a different CA. DexScreener socials are empty. [inference S12 S14 S11]

## Sources

- S1 — Token 0xB6b5…1E18 ROCK / ROCK.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x7d0d353b…d716.
- S5 — eth_getCode, name, symbol, owner() on ROCK.
- S6 — create tx logs OwnershipTransferred / mint.
- S7 — latest/dex/tokens ROCK.
- S8 — launched $ROCK on @longdotxyz.
- S9 — $ROCK / $GLD interesting pair.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — The next move is already written.
- S12 — search q=ROCK GLD.
- S13 — Token 0xC9a9…FC4e SPDR Gold Shares / GLD.
- S14 — Token 0x000AEc…9c5C ROCK PonsLauncherToken.
- S15 — LaunchCreated / Initialize logs for ROCK.
- S16 — ROCK vote listing on netlify.
- S17 — ~1.6+ mil $ROCK burnt.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:10:16Z; methodology_version: proofline-v1.0.
