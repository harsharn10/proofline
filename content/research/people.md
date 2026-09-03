---
slug: people
coverage: stub
methodology_version: proofline-v1.0
---

# people — research record

## Identity

people is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 cloned onto a Pons v2 bonding curve quoted against native ETH, then graduated into a Uniswap v4 people/ETH pool. peoplemust.work spends that token to mint a People ERC-721 (hirePrice 33,333) assigned to stock-token offices. Traders buy and sell people on Uniswap v4.

Themes: memecoin, bonding-curve, nft, graduation

## Deployment

people token (PonsV2LauncherToken): 0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18 on robinhood-chain. [verified S1 S5 S6]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S4 S5]

PonsV2BondingCurve (people launch curve): 0x1E99cf99910b8A586c803eDDcd7Aa76045f0a2f1 on robinhood-chain. [verified S4 S5 S6]

PonsV2LaunchDeployer (token creator_address_hash): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S16]

People ERC-721 (people online NFT): 0x2e5AC9353c3E30Ef7439124dE13aF8fc350AD836 on robinhood-chain. [verified S12 S17]

V2LaunchLocker: 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S6 S18]

Uniswap v4 PoolManager (people/ETH book): 0x8366a39CC670B4001A1121B8F6A443A643e40951 on robinhood-chain. [claim S1 S6]

## Control

Token owner() reverts. Verified PonsV2LauncherToken source says deployer is attribution-only. Deployer EOA 0x4CB47362…E6E6 has no code. Factory is Ownable2Step; launch fee landed on SafeProxy 0x263ed295…019Dd. Creator address in launch params / PoolRegistered is 0xd655C4ea…8E9c. [verified S2 S4 S5 S6]

## Security

PonsV2LauncherToken, PonsV2LaunchFactory, People.sol, and V2LaunchLocker are verified on Blockscout. No audit report URL was located this pass. [verified S2 S3 S17] [unknown]

## Engineering

_Research pending._

## Team

peoplemust.work, token socials(), and DexScreener info.websites / info.socials cross-link https://peoplemust.work/ and @peopleonline_. The handle bio reprints 0xd1efce…4f18. @peopleonline_ named @0xcurs as founder; that profile bio is @peopleonline_. Flag @0xcurs unconfirmed-official until a bidirectional CA post. [verified S7 S12 S13] [claim S21]

@peoplehoodx uses the same display word people and a 33,333 mint pitch but reprints 0xcdadb6…b7dF. CurvePump people 0x9f1B29…6Cd2 has more holders than this token and is a different deployment. [claim S19 S20]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x4CB47362…E6E6 at 2026-09-02T01:34:02Z minted people / people supply 1e9*1e18 onto curve 0x1E99…a2f1 with pairToken 0x0000…0000 and graduationThreshold 4.2 ETH. factory() on the token reverts; launchFactory() returns PonsV2LaunchFactory 0x7eD598…EC7e. [verified S4 S5 S6]

CurveCompleted 17 seconds later at 2026-09-02T01:34:19Z swept 4.2 ETH and ~2.857e26 tokens into Uniswap v4 PoolManager 0x8366…0951 pool 0x52d1…fbf1 via V2MemeHook 0xE5e7…Be044. GraduationTokensPermanentlyLocked ~8.16e25 to V2LaunchLocker; LP positionId 1467430 locked. Secondary people/USDG books exist on DexScreener with far less liquidity. [verified S6 S7 S18]

peoplemust.work deployments.json sets payToken to this ERC-20 and people NFT 0x2e5AC935…D836. RPC hirePrice 33333e18, totalMinted 600, hiringOpen true. Offices are AAPL/NVDA/GME/GOOGL/QQQ Robinhood Stock Tokens used as payroll rooms, not the pair quote. [verified S12 S17]

people/ETH Uniswap v4 24h volume is 1104020.2 USD and liquidity.usd is 32762.99 at 2026-09-03T05:41:00Z from DexScreener. fdv/marketCap 125554. [claim S7]

Gecko pool people/WETH volume_usd.h24 1098414.09 reserve_in_usd 29911.70 fdv_usd 129076.14. Gecko token volume_usd.h24 1208550.89 is all-pools, not the ETH book. Assignment lead of ~$1,523,087 vol / ~$30,202 liq was not reproduced at this as_of. [claim S8 S9 S10]

Blockscout holders_count 1661. RPC 0xdead balance ~3.99998% of supply; @peopleonline_ posted 3.99% burnt. Pair created 2026-09-02T01:34:19Z. [claim S1 S5 S14]

## Communications

@peopleonline_ posted 3.99% of supply burnt [verified S5 S14]

Netlify vote URL circulated for $PEOPLE [claim S15]

@peopleonline_ named @0xcurs as founder [claim S13 S21]

## Findings

USD liquidity on the people/ETH book counts both sides of a native-ETH pool, not WETH 0x0Bd7…AD73. Same-ticker people tokens (0xCDAdB6…b7dF, 0x9f1B29…6Cd2) share the name. A Netlify vote URL circulated off the official domain. [claim S12]

- Quote is native ETH 0x0000…0000, not WETH 0x0Bd7…AD73 and not a stock token; Gecko still labels the book people/WETH. [verified S7 S8]
- Same-ticker people tokens 0xCDAdB6…b7dF and 0x9f1B29…6Cd2 share the name. [claim S19 S20]
- Netlify vote URL is a third-party-link, not on peoplemust.work. [claim S15]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/curve/NFT and both launch/graduation txs, RPC name/symbol/curve/launchFactory/socials/dead/NFT views, DexScreener, Gecko token/pool/search, peoplemust.work + deployments.json, @peopleonline_ profile and burn/founder posts, @peoplehoodx, and the vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S12]
- Numbers: 1104020.2 is the DexScreener people/ETH v4 pool 24h volume, not Gecko token all-pools 1208550.89. Reserve 32762.99 is that Dex pair; Gecko reserve 29911.70 is the same pool, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that @peoplehoodx 0xCDAdB6…b7dF is the official people token and 0xD1efCE…4f18 is a copy. Token socials(), DexScreener profile, and peoplemust.work payToken all reprint 0xD1efCE…4f18; @peoplehoodx reprints a different CA. [inference S12 S19]

## Sources

- S1 — Token 0xD1efCE…4f18 people / people.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchAndBuy tx 0x8212d464…ed4a.
- S5 — eth_getCode, name, symbol, curve(), socials() on people.
- S6 — CurveCompleted / PoolGraduated tx 0x1687bfbe…b2c8.
- S7 — latest/dex/tokens people 0xD1efCE…4f18.
- S8 — people/WETH Uniswap v4 pool.
- S9 — people token.
- S10 — search/pools people network=robinhood.
- S12 — people online site + deployments.json.
- S13 — X profile people / tokenized people.
- S14 — 3.99% of supply has been burnt.
- S15 — Robinhood Top 100 Leaderboard vote URL.
- S16 — Address 0x3711ceA4…1A42 PonsV2LaunchDeployer.
- S17 — People ERC-721 0x2e5AC935…D836.
- S18 — V2LaunchLocker TokenSupplyLocked / PositionLocked.
- S19 — people | RobinHood bio reprints a different CA.
- S20 — Same-ticker people 0x9f1B29…6Cd2 CurvePumpERC1967Proxy.
- S21 — follow the founder of people @0xcurs.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:46:00Z; methodology_version: proofline-v1.0.
