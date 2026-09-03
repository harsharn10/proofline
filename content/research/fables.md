---
slug: fables
coverage: stub
methodology_version: proofline-v1.0
---

# Fables — research record

## Identity

Fables is classified as Native AMM.

A Uniswap v4 DEX whose hooks set market-specific swap fees. On Robinhood Chain, a user deposits a concentrated range, collects fees, and withdraws through fables.fi. $PROLOGUE is the live claim token, launched via pools.trade; FABLES staking, voting, and emissions remain planned. Alphix Association in Zug operates the interface.

Themes: rwa, stock-paired:NVDA, hook

## Deployment

PROLOGUE token (UERC20; The Prologue): 0xb9972CA7188e511174947E3936a5315ac7073277 on robinhood-chain. [verified S15 S18 S19 S25]

FablesPoolRegistry (AccessManaged public pool index): 0x159A113E012593D9B3cC63ad45E30F0467e13Ef3 on robinhood-chain. [verified S13 S20 S26]

AccessManager (authority every hook asks): 0xA362D98B33A7bb5B5E2180a05f995A70FB404f30 on robinhood-chain. [verified S13 S21]

NVDA/USDG hook (FablesRWA fee schedule and ledger): 0x66622f77B797D506e5376F7798b67ab288966080 on robinhood-chain. [verified S13 S22]

SPY/USDG hook (FablesRWA fee schedule and ledger): 0xA0E8fBFf13E24Af2b5e61A72800E08a161bDe080 on robinhood-chain. [claim S13 S23]

ETH/USDG hook (FablesRampETH fee schedule and ledger): 0x06a889870C8f83640D6816319f72e2aA579b6080 on robinhood-chain. [claim S13 S24]

Creator fee distributor (weekly USDG): 0xC9EcC11728a4955B31f77c077B97FEC521D78760 on robinhood-chain. [claim S13 S32]

LiquidityLauncher v3.2.0 (created PROLOGUE; not a Fables contract): 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0 on robinhood-chain. [claim S25]

## Control

FablesPoolRegistry and the NVDA/USDG FablesRWA hook both return AccessManager 0xA362D98B33A7bb5B5E2180a05f995A70FB404f30 from authority(). That contract exists on 4663 with non-empty code and no verified source. It was created 2026-08-15 by 0x359856655934338d798F9ccE1f181486301D36a5 (layan.eth), which also created the registry and the creator-fee distributor. [verified S20 S21 S22 S32]

Docs: fast roles can place or clear bounded fee overrides and impose a temporary one-way pause; broader configuration uses delayed admin authority (example scripts use 86,400 seconds; the live AccessManager state is authoritative and was not eth_called). The ledger withdrawal path does not read pause or claim-fee state. An immutable absolute fee maximum and a 20% claim-fee ceiling remain after an authorised change. Uniswap's protocol-fee controller and each stock-token issuer sit outside this AccessManager. [claim S14]

## Security

Docs Security: no Fables-specific audit report with auditor, commit hash, scope and findings is linked. Development used unit, fuzz and invariant tests plus Olympix, Sherlock AI tooling and the open-source pashov workflow. No formal bug bounty is published. [claim S14]

## Engineering

_Research pending._

## Team

Official identity is bidirectional: www.fables.fi footer links https://x.com/fablesfi; @fablesfi bio links https://www.fables.fi/ and names CA 0xb9972CA7188e511174947E3936a5315ac7073277, which docs/addresses also lists. DexScreener token info repeats the site, docs, X, Telegram and Discord URLs. [verified S11 S13 S15 S29]

Legal copy on the docs site: the interface is operated by Alphix Association, a Swiss association with its seat in the Canton of Zug. @0xcs361's bio names @fablesfi; the official account quoted that handle on an MCG interview. No public contracts repository was linked from the site, docs or X bio. X search also returned @fablesfi_sup with the same CA in its bio; the site footer names @fablesfi only (handle-collision). [claim S30 S31 S34]

## Product and economics

Each listed Fables market is a Uniswap v4 pool whose PoolKey names a Fables hook. The hook sets the swap fee at execution and records each provider's share of a pooled price range. A user chooses a market and a tick range, deposits the required assets, monitors the position, claims accrued fees, and withdraws through the interface. Swap fees are market-specific: tokenised-equity pools use an on-chain trading calendar (open / overnight / closed floors around the cash-market bell); ETH/USDG uses FablesRampETH. An authorised off-chain keeper can place a bounded, expiring fee override. [claim S12 S13 S22]

Docs table nine live hooks plus a creator-fee distributor, AccessManager, and FablesPoolRegistry. The registry is append-only metadata for off-chain readers (Llama, the frontend); verified source says it holds no funds and is never called by the protocol. Llama volume is read from PoolManager Swap logs filtered to registered pool ids, and is not counted by the Uniswap v4 adapter. [verified S13 S20 S26 S27]

$PROLOGUE is a 1,000,000,000-supply UERC20 created through LiquidityLauncher v3.2.0 on 2026-08-17. The official 19 August post says it launched on pools.trade so FABLES could stay unlaunched until voting, emissions and staking exist, and that at TGE PROLOGUE redeems into a 25,000,000 FABLES reserve at a floor of 40:1. Docs list PROLOGUE/ETH as a static 2500-tier v4 pool with no Fables hook. Creator fees from that pool fund discretionary weekly USDG for eligible Fables LPs via a Merkle distributor. [verified S16 S25]

FABLES token, staking, voting and emissions are documented as Planned. The ve(3,3) system is a roadmap, not a live product. [claim S12]

DefiLlama protocol Fables (id 8481, category Dexs) lists only Robinhood Chain. currentChainTvls['Robinhood Chain'] is 6532113.77218 USD as of 2026-09-02T22:24:23Z — that is the chain slice, and because no other chain is listed it is also the protocol total. 24h volume 18380793 USD; 24h fees 19302 USD; 24h protocol revenue 0 (adapter: no protocol fee enabled yet). All-time DEX volume 71665480 USD. [verified S26 S27 S28]

Blockscout holders_count on PROLOGUE is 7688; circulating_market_cap 6497256.80 USD at the same fetch. DexScreener's primary PROLOGUE/ETH v4 pair showed liquidity 654540.72 USD and 24h volume 4262081.47 USD — a pair slice, not protocol TVL. The official account posted $5,000,000 in deposits on 2026-09-02 and Week 1 $29.7M traded / $28.3k to 342 LPs on 2026-08-31; those posts are not the Llama slice. [verified S19 S29]

## Communications

Official account quotes MCG interview with 0xcs361 [claim S36]

Official account posts Fables crossed $5,000,000 in deposits [claim S35]

Week 2 creator fee rewards set at 3,000 USDG [claim S17]

Week 1: $29.7M traded, $28.3k paid to 342 LPs [claim S37]

Official post: no FABLES TGE date announced [claim S16]

## Findings

Restricted calls go through an OpenZeppelin AccessManager whose source is unverified on the explorer, so role membership and delay are not reproduced here. Fast roles can place bounded fee overrides and a one-way pause; a keeper or a bad Merkle root can mis-set fees or weekly USDG inside those bounds. FABLES redemption has no deployed contract and no official date. Docs state there is no Fables-specific audit report. [claim S11]

- AccessManager source is unverified; live roles, delay and queued operations were not eth_called. [verified S21]
- Fast keeper/pause roles can change fees inside bytecode bounds and pause one way; docs say a bad Merkle root can allocate weekly USDG incorrectly within its cap. [claim S14]
- No Fables-specific audit report is linked. [claim S14]
- FABLES, voting, gauges and the PROLOGUE redemption contract are not deployed; official channel says no TGE date is announced. A third-party post names 5 October 2026. [claim S12 S16 S33]
- PROLOGUE/ETH is hookless; holder flow on that pair is not a read of hooked-market activity. [claim S13]
- Stock-token issuers and Uniswap's protocol-fee controller can restrict or fee the legs independently of Fables. [claim S14]

- Receipts: official site, docs routes (live features, addresses, security/permissions, legal), X profile and named status URLs, DexScreener token API, DefiLlama protocol/dexs/fees APIs, and Blockscout address/tx APIs plus RPC eth_getCode/eth_call were opened on 2026-09-02; excerpts are copied from those responses. [verified S11 S12 S13 S18 S26]
- Numbers: TVL 6532113.77 USD is currentChainTvls['Robinhood Chain'], not an all-chains mix (Llama lists only that chain). Volume 18380793 and fees 19302 are the same adapter's 24h totals on that chain. Holders 7688 and circulating_market_cap 6497256.80 are Blockscout token fields. DexScreener 654540.72 USD is the PROLOGUE/ETH pair slice. Official $5M deposits is a project post, not the Llama slice. [verified S19 S26 S27 S29]
- Adversarial: the strongest contrary reading is that Fables is not launched (workbook 30 Aug; TGE cited 5 Oct) or that it is up / SwapHood / Hookr / pools.trade. Docs and live hooks on 4663 argue the DEX is live and FABLES is what remains planned; official 19 Aug copy says no TGE date and names pools.trade only as the PROLOGUE launch path. Handles and domains do not match those other census rows. [inference S12 S16 S22]

## Sources

- S11 — fables.fi homepage.
- S12 — Docs — What is live now / live and planned features.
- S13 — Docs — Addresses.
- S14 — Docs — Security and Permissions.
- S15 — @fablesfi profile.
- S16 — What is $PROLOGUE / no TGE date.
- S17 — Creator Fee Rewards - Week 2.
- S18 — PROLOGUE token address 0xb997…3277.
- S19 — PROLOGUE token object.
- S20 — FablesPoolRegistry 0x159A…3Ef3.
- S21 — AccessManager 0xA362…4f30.
- S22 — NVDA/USDG FablesRWA hook 0x6662…6080.
- S23 — SPY/USDG FablesRWA hook 0xA0E8…e080.
- S24 — ETH/USDG FablesRampETH hook 0x06a8…6080.
- S25 — PROLOGUE creation tx 0x421c9f5b….
- S26 — api.llama.fi/protocol/fables.
- S27 — api.llama.fi/summary/dexs/fables dailyVolume.
- S28 — api.llama.fi/summary/fees/fables.
- S29 — PROLOGUE token pairs on Robinhood.
- S30 — Docs / legal — Who we are.
- S31 — Fable Log 003.
- S32 — Creator fee distributor 0xC9Ec…8760.
- S33 — Third-party TGE date 5 October.
- S34 — @fablesfi_sup profile.
- S35 — Fables crossed $5,000,000 in deposits.
- S36 — Thanks to @MCGlive interview.
- S37 — Week 1 of The Prologue.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:20:00Z; methodology_version: proofline-v1.0.
