---
slug: index
coverage: stub
methodology_version: proofline-v1.0
---

# The Index — research record

## Identity

The Index is classified as Fee-funded RWA distributor.

A 3% ETH fee on Index/ETH pool trades buys a basket of Robinhood Stock Tokens and sends them to eligible holders. Users hold INDEX above a 10,000-token threshold, or Zap received stocks back into INDEX, to stay in the registry. @TheIndexFi runs theindex.finance, indices.theindex.finance and rwa.wtf. The Index is not a launchpad.

Themes: index, rwa, hook

## Deployment

INDEX token (ReflectionToken): 0x56910D4409F3a0C78C64DD8D0545FF0705389870 on robinhood-chain. [verified S12 S13 S14]

Uniswap v4 PoolManager (constructor poolManager; rewardsExcluded): 0x8366a39CC670B4001A1121B8F6A443A643e40951 on robinhood-chain. [claim S12 S15]

INDEX/WETH Uniswap v3 pair (DexScreener lead book): 0xD29893fFac8b29eC4Db2cfE0CDB3FE1377c028Ff on robinhood-chain. [claim S16]

Llama adapter legacy distributor 0x33B0…: 0x33B0095333e64bf375952eF197b6FDC3437dc014 on robinhood-chain. [claim S25]

Llama adapter legacy distributor 0x0224…: 0x02241379056fd5c2BDe0bDfc63D2b272C18A49bE on robinhood-chain. [claim S25]

Llama adapter legacy distributor 0x2459…: 0x2459DedB3012d1E929EdD17DF26620120bDF11bf on robinhood-chain. [claim S25]

Llama adapter legacy distributor 0x39AD…: 0x39ADB8acD07427D338b5f1AfAb436A04AbFdB7c4 on robinhood-chain. [claim S25]

Llama adapter Indices treasury factory 0x2950…: 0x29502Be73947fFf18343dcd98ccDa101e8E7ec49 on robinhood-chain. [claim S25]

Llama adapter reward vault V2: 0xEe7d053cE44D689455765CE1c3c64c5c28EA4088 on robinhood-chain. [claim S25]

## Control

owner() on ReflectionToken returns 0x02d9e763154977e2aae47a3a61d940ffe0238fd0, an address with empty code. The token is not a proxy. [verified S12]

Verified Ownable source lets that owner call setMinShareBalance, setRewardsExcluded and transferOwnership. No timelock sits in that path. IndexFeeHook owner and fee setters were not read because the hook address was not opened. [verified S12]

## Security

No audit report was located on the site, X profile, DexScreener token info or DefiLlama (audits 0). [unknown]

## Engineering

_Research pending._

## Team

@TheIndexFi bio names theindex.finance, indices.theindex.finance and rwa.wtf. DexScreener INDEX token metadata lists the same site and handle. The site SPA title matches The Index; the initial HTML did not embed the CA or the handle. No legal entity is named on those surfaces. [claim S10 S11 S16]

The deployer is EOA 0x89562Eb8979dB1E85A01E85120BFD6A7C47a39cb; the current owner is a different EOA. Named operators for those keys were not published. [verified S12 S13]

DefiLlama lists github.com/justintimecompilation. That org is not linked from the site or X bio (unconfirmed-official / third-party-link). github.com/blobsarp/indices, named in an adapter comment, returned 404. No Telegram or Discord was listed. [unknown]

Census Robindex (scanner, 0xd82f70…) and Robinhood Index Vaults (testnet ERC-4626) share index wording only. They do not share domain, handle or address. [inference S12]

## Product and economics

INDEX is a fixed-supply ERC-20 (1,000,000,000e18) named The Index / Index. Verified source says the 3% each-way tax is not in the token. IndexFeeHook takes it in native ETH on the Uniswap v4 Index/ETH pool. The token keeps a holder registry: every wallet with balance >= minShareBalance (10,000e18) is tracked for StockDistributor; Uniswap v4 PoolManager 0x8366a39C…0951 and 0xdead are rewardsExcluded. [verified S12 S15]

The site states a 3% ETH fee on trades funds stock distributions for eligible holders, treasury ETH buys each supported stock in equal parts, and eligible wallets receive pro-rata payouts. An X article dated 2026-07-18 adds a 15-minute cadence, a Zap that compounds stocks back into INDEX, and a 75/25 split of rwa.wtf fees toward stocks versus liquidity. [claim S10 S22]

The lead listed book is Uniswap v3 INDEX/WETH pair 0xD29893fFac8b29eC4Db2cfE0CDB3FE1377c028Ff (quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73). Extra books on DexScreener are Uniswap v4 INDEX/ETH and INDEX/USDG, including a USDG pool created 2026-09-02T16:32:50Z. Pair asset on the lead book is WETH; venue is Uniswap. The token was created by EOA 0x89562Eb8…39cb in a direct contract-creation transaction, not by a known launchpad factory. [verified S13 S16]

Indices (indices.theindex.finance) lets another coin point its fees at an Index Treasury that buys a stock basket for that coin's holders. rwa.wtf is described as RWA perps on Lighter with a fee share back to INDEX holders. Those surfaces are linked from the @TheIndexFi bio. [claim S11 S22 S26]

DexScreener Uniswap v3 INDEX/WETH pair 0xD29893… at 2026-09-03T17:22:00Z: liquidity.usd 961107.71; volume.h24 4691680.21; marketCap 39500563; priceUsd 0.03950. Extra Uniswap v4 INDEX/ETH 0x00dd2d…: liq 935495.95 vol 695378.06. Uniswap v4 INDEX/USDG 0x51d1a4…: liq 115223.93 vol 459877.59. Newer v4 INDEX/USDG 0x2500e7… created 2026-09-02T16:32:50Z: liq 11645.21 vol 121899.12. Those are pair slices, not protocol TVL. [claim S16]

Blockscout token holders_count 21645. holderCount() on the registry was 3779, against the site's 3,732–3,759 eligible wallets above 10,000 INDEX. [claim S10 S14]

DefiLlama The Index, Robinhood Chain slice, 2026-09-03T17:28:00Z: fees 24h $30,462; revenue 24h $30,462; fees 7d $123,080; cumulative fees $1.68m; cumulative revenue $1.52m. Protocol TVL currentChainTvls is empty. [claim S17 S18]

Site: total value distributed $1,524,526.02; fees collected 748.04 ETH. @TheIndexFi posted over $1,500,000 distributed (2026-09-01) and $355,000 / $5,000,000 (2026-08-28). Those totals were not summed from Distributed logs this pass. [claim S10 S19 S21]

## Communications

Account posts over $1.5M RWAs distributed [claim S19]

HoodInsider repeats $1.5M distribution figure [claim S23]

Account calls product the dividend layer of Robinhood [claim S20]

HoodInsider cites $355K rewards and $5M RWA volume [claim S24]

Account posts $355K rewards and $5M RWA volume [claim S21]

Stocks for Everyone writeup names 3% tax [claim S22]

## Findings

Distributions scale with taxed volume. If the 3% ETH fee sits only on the Uniswap v4 Index/ETH pool, flow on the lead Uniswap v3 INDEX/WETH book would not buy stocks. [verified S12] [claim S16]

The token owner is one EOA with no timelock on setMinShareBalance and setRewardsExcluded, so eligibility for the registry can change at that key. [verified S12]

Site and account distribution totals were not summed from StockDistributor logs this pass. [claim S10 S19]

- IndexFeeHook address is unpublished in the token source; the 3% each-way ETH tax is described for the Uniswap v4 Index/ETH pool while the lead book is Uniswap v3 INDEX/WETH. [verified S12] [claim S16]

- Token owner is one EOA with no timelock on the holder-registry setters. [verified S12]

- Four Llama-listed distributors have code on 4663; which one is live, and whether its logs match the site total, was not opened on the explorer this pass. [claim S25]

- No audit report was located. [unknown]

- Distribution size follows taxed volume. [inference S10 S12]

- Receipts: theindex.finance, indices.theindex.finance, X profile and four posts, two HoodInsider posts, Blockscout address/token/tx/source and PoolManager, DexScreener token API, Llama protocol and fees APIs, and the Llama adapter file were opened on 2026-09-03 and excerpts copied from the responses. [verified S10 S11 S12 S13 S16 S18]

- Numbers: DexScreener liquidity and 24h volume are the Uniswap v3 INDEX/WETH pair 0xD29893…, not all INDEX pairs. Llama fees/revenue are the Robinhood Chain slice. Site $1,524,526.02 and X $1,500,000 / $355,000 remain class claim. Blockscout 21645 holders is all holders; registry holderCount is 3779. [claim S14 S16 S18]

- Adversarial: the strongest contrary reading is that INDEX is a generic tax token whose Stock Token story is marketing, or that it is a launchpad / Robindex / Robinhood Index Vaults. Verified source names IndexFeeHook and a StockDistributor registry, the creator is not a pad factory, and Robindex / robinhood-index-vaults do not share CA, domain or handle. The unresolved contrary point is which pool actually pays the 3% fee. [inference S12 S13 S16]

## Sources

- S10 — The Index — hold it, get paid in stocks.
- S11 — X profile @TheIndexFi.
- S12 — Address and verified source 0x56910D…89870.
- S13 — Creation tx 0xf3c73a….
- S14 — Token page INDEX.
- S15 — PoolManager 0x8366a39C…0951.
- S16 — INDEX token pairs on Robinhood.
- S17 — The Index protocol.
- S18 — The Index fees and revenue.
- S19 — Over $1,500,000 in RWAs distributed.
- S20 — The dividend layer of Robinhood.
- S21 — $355,000 in stock rewards.
- S22 — Stocks for Everyone: What We’re Building on Robinhood Chain.
- S23 — Over $1,500,000 in RWAs distributed.
- S24 — $355K in stock rewards.
- S25 — fees/the-index.ts adapter.
- S26 — Baskets · Indices.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T17:55:00Z; methodology_version: proofline-v1.0.
