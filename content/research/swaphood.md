---
slug: swaphood
coverage: stub
methodology_version: proofline-v1.0
---

# SwapHood — research record

## Identity

SwapHood is classified as Native AMM.

A native AMM on Robinhood Chain with a SwapHood V2 constant-product factory and a PancakeV3Factory for concentrated liquidity. A user swaps or deposits into pools, stakes LP for HOOD, and can convert HOOD to xHOOD/h33 for fee buybacks. @SwapHoodFi runs it at swaphood.finance.

Themes: vault, rwa

## Deployment

HOOD token (SwapHood Token): 0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c on robinhood-chain. [verified S10 S20 S27]

xHOOD token: 0xd3125799EEcb4c9eB6b9d570d15a782808D9BDC3 on robinhood-chain. [verified S10 S26 S27]

h33 token (Hood Liquid Staking Token): 0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38 on robinhood-chain. [verified S10 S23 S27]

V2 factory (SwapHoodFactory): 0xE7206Ecac3A51afe7e6179182ad4130A26068dD1 on robinhood-chain. [verified S10 S22 S27]

V3 factory (explorer contract name PancakeV3Factory): 0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7 on robinhood-chain. [verified S10 S21 S27]

HOOD/WETH V2 pair (vAMM-WETH/HOOD): 0xeA7ba72BE3baaB20546bFdA880b7E285E5a51168 on robinhood-chain. [verified S24 S28 S35]

HOOD and V3 factory owner: 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb on robinhood-chain. [verified S25 S27]

## Control

`owner()` on HOOD and PancakeV3Factory returns `0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb`, an address with no code. The same address created HOOD, xHOOD, h33, both factories and the WETH/HOOD pair. `owner()` on SwapHoodFactory reverted. Gitbook states the contracts are non-upgradeable. No timelock or Safe was located. [verified S20 S21 S25 S27]

## Security

DefiLlama sets audits to 0 on SwapHood V2 and V3. No audit report was located in gitbook or Official Links. [claim S30 S31]

## Engineering

_Research pending._

## Team

swaphood.finance sets `twitter:site` to @SwapHoodFi. Gitbook Official Links lists swaphood.finance, @SwapHoodFi, Telegram SwapHood and Discord. The @SwapHoodFi bio links https://www.swaphood.finance/. No public repository URL was listed. [verified S8 S11 S15]

Census Native AMMs up (@uponrh) and Fables (@fablesfi) share a product leaf only. [claim S8 S11]

The HOOD ticker is also used by the Robinhood-issued HOOD Stock Token at a different address; this token is SwapHood Token `0x1FcBc77a…`. [claim S20]

## Product and economics

SwapHood documents V2 as a constant-product AMM that adds a 0.30% swap fee to reserves, and V3 as concentrated liquidity through a factory the explorer names PancakeV3Factory. Gitbook says LPs may deposit V2 or V3 positions into HOOD farms. [claim S9 S13] [verified S21]

Gitbook Revenue Sharing describes a path from protocol fees to HOOD buybacks that raise h33 backing for xHOOD stakers (95% to h33), with a 50% tax on xHOOD exit streamed to remaining h33 holders. Tokenomics separately says HOOD receives 50% of protocol revenue via buybacks. [claim S12 S14]

@SwapHoodFi posted the same flywheel: liquidity to fees to HOOD buybacks to h33 backing, and that the team owns no HOOD and no LP. [claim S17]

DefiLlama on 2026-09-03 lists parent SwapHood TVL 16,765 USD on Robinhood Chain (V2 3,284.93 + V3 13,481.19), parent fees 65.05 USD / 24h, V2 volume 2,494 USD / 24h and V3 volume 61,998 USD / 24h. Those rows list Robinhood Chain only. [claim S29 S30 S31 S32 S36 S37]

DexScreener's SwapHood v2 HOOD/WETH pair `0xeA7ba72B…` showed 2,743.22 USD liquidity, 2,081.61 USD 24h volume, price 0.1104 USD and FDV 16,177. Blockscout reports 407 HOOD holders and total supply about 146,417 HOOD of a documented 5,000,000 max. [claim S28] [verified S20]

Daily HOOD emissions are posted as about 2,375 on X, 2,500 on Tokenomics, and 5,000 as the sum of the Farms table. CON-1 is open. [claim S12 S13 S17]

## Communications

@SwapHoodFi restates the HOOD fee-buyback flywheel [claim S17]

@SwapHoodFi posts a 633.93 HOOD buyback [claim S18]

@SwapHoodFi posts native farms for the HOOD flywheel [claim S19]

@SwapHoodFi posts SwapHood and HOOD live on chain 4663 [claim S16]

## Findings

HOOD and the V3 factory `owner()` resolve to one externally owned account with no timelock found in this pass. Gitbook describes a 50% tax on xHOOD exit. Daily HOOD emission figures on X and two gitbook pages do not agree. The HOOD ticker is also used by the Robinhood-issued HOOD Stock Token at a different address. [claim S8]

- HOOD and PancakeV3Factory `owner()` is one EOA; no timelock was found. [verified S25 S27]
- Gitbook describes a 50% tax on xHOOD exit. [claim S14]
- Daily HOOD emission figures conflict across X and two gitbook pages. [claim S12 S13 S17]
- No audit report was located; Llama audits flag is 0. [claim S30 S31]
- HOOD ticker collides with the Robinhood HOOD Stock Token at a different address. [claim S20]
- Gitbook Tokenomics 50% of revenue to HOOD buybacks is not the same split as Revenue Sharing 95% to h33. [claim S12 S14]

- Receipts: swaphood.finance HTML, gitbook Welcome / Contract Addresses / Official Links / Tokenomics / Farms / Revenue Sharing, @SwapHoodFi profile and four posts, Blockscout API v2 for seven addresses plus three creation transactions, RPC eth_getCode/owner() at block 53080144, DexScreener HOOD pairs, and DefiLlama parent/V2/V3 plus fee and volume summaries were opened on 2026-09-03; excerpts are copied from those pages. [verified S8 S9 S10 S11 S12 S13 S14 S15 S16 S17 S18 S19 S20 S21 S22 S23 S24 S25 S26 S27 S28 S29 S30 S31 S32 S33 S34 S35 S36 S37]
- Numbers: TVL, volume and fees are Llama Robinhood Chain slices, not all-chains totals. Holder count 407 is Blockscout `holders_count`. Bytecode lengths are eth_getCode at block 53080144. HOOD total supply 146,417 is `total_supply` / 1e18. [claim S29 S30 S31] [verified S20 S27]
- Adversarial: the strongest contrary reading is that this is imported PancakeSwap or the Robinhood HOOD Stock Token, or that it is census up / Fables. Explorer name PancakeV3Factory is a fork signal; creator and gitbook addresses are SwapHood's. HOOD here is SwapHood Token `0x1FcBc77a…`. up and Fables use different handles and tickers. [verified S20 S21] [claim S11]

## Sources

- S8 — SwapHood | MetaDEX on Robinhood.
- S9 — Welcome to SwapHood.
- S10 — Contract Addresses.
- S11 — Official Links.
- S12 — Tokenomics.
- S13 — Farms.
- S14 — Revenue Sharing.
- S15 — SwapHood profile.
- S16 — SwapHood and $HOOD are now fully LIVE.
- S17 — HOOD is designed around a flywheel fueled by protocol buybacks.
- S18 — Another buyback completed for SwapHoods' HOOD token.
- S19 — Native SwapHood farms are built to feed the $HOOD flywheel.
- S20 — Address 0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c.
- S21 — Address 0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7.
- S22 — Address 0xE7206Ecac3A51afe7e6179182ad4130A26068dD1.
- S23 — Address 0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38.
- S24 — Address 0xeA7ba72BE3baaB20546bFdA880b7E285E5a51168.
- S25 — Address 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb.
- S26 — Address 0xd3125799EEcb4c9eB6b9d570d15a782808D9BDC3.
- S27 — Robinhood Chain RPC eth_getCode and owner().
- S28 — HOOD token pairs on Robinhood.
- S29 — SwapHood parent protocol.
- S30 — SwapHood V2 protocol.
- S31 — SwapHood V3 protocol.
- S32 — SwapHood parent daily fees.
- S33 — HOOD creation transaction 0xb1f07a06….
- S34 — PancakeV3Factory creation transaction 0x103a9a73….
- S35 — WETH/HOOD pair creation transaction 0x3bcb690e….
- S36 — SwapHood V2 daily volume.
- S37 — SwapHood V3 daily volume.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:05:00Z; methodology_version: proofline-v1.0.
