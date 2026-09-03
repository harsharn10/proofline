---
slug: downto
coverage: stub
methodology_version: proofline-v1.0
---

# Down to Finance — research record

## Identity

Down to Finance is classified as Redeemable RWA basket.

Down to Finance is a permissionless DETF (Decentralized ETF) on Robinhood Chain: a creator deploys one token as a claim on a basket of vault shares and Uniswap v4 pools; the first bond turns that DETF on, then holders mint, hold, or burn. The fee-accruing $DTF token at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 is a verified Pons v2 launch token. App explore lists no live DETF this pass; Protocol DETF staking is unconfigured.

## Deployment

DTF token (PonsV2LauncherToken): 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 on robinhood-chain. [verified S1 S3 S19]

Pons v2 bonding curve for the DTF token: 0x912467fc912f0f88df3b0d221946de78f38d4559 on robinhood-chain. [claim S3 S6]

DiamondPackageCallBackFactory (app JS chainId 4663 map): 0x976949aB55830fA4794bF40C88ea7D7567931003 on robinhood-chain. [claim S5 S8]

UniswapV4SingleStandardExchangeDETDFPkg (app JS chainId 4663 map): 0x961b4E050492E2744B8D20404Cd43A11D371577c on robinhood-chain. [verified S4 S8 S20]

Create3Factory (app JS chainId 4663 map): 0xD7786b10BC8Bc97dc7651CAb7B97086c8b227882 on robinhood-chain. [claim S9 S8]

UniswapV4HookDiamondPackageCallBackFactory (app JS chainId 4663 map): 0x8BB5FCC67e8CCa44DC41dd08A5e2b2B392C22945 on robinhood-chain. [claim S10 S8]

indexedexManager / vaultRegistry / vaultFeeOracle proxy (app JS chainId 4663 map): 0x09682b00D873D913ada0bB69B4D4c9631810d0bc on robinhood-chain. [claim S11 S8]

feeCollector proxy (app JS chainId 4663 map): 0x20af9A1e21a59a411cd3b0C40E70AF9084770b2E on robinhood-chain. [claim S12 S8]

App JS owner / deployer (EOA): 0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B on robinhood-chain. [claim S13 S8]

DTF/WETH Uniswap v3 pair (DexScreener lead book): 0x0F2CA1D996224a0c9dd140B865142aAD381A4287 on robinhood-chain. [claim S23]

## Control

owner() on Create3Factory and on the indexedexManager and feeCollector diamonds returns 0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B, an address with empty code. The same key is `owner` and `deployer` in the app's 4663 map. No timelock address was located. Both diamonds and the DETF package are EIP-2535; explorer source on the manager and fee collector is the MinimalDiamondCallBackProxy shell. [verified S8 S9 S11 S12 S13]

Verified PonsV2LauncherToken source states that `deployer` confers no privileges over DTF. owner() on the token reverts. [verified S3]

## Security

The app footer shows Audits: pending. No audit report URL was located. [claim S18]

## Engineering

_Research pending._

## Team

Site, DexScreener token info, and the verified token constructor all name @downto_finance. Constructor socials also list https://t.me/downtofinance. The app footer Docs link is https://github.com with no project path. github.com/cyotee/indexedex README names downto.finance as the DTF app; that link is one-sided this pass. Launch deployer 0xeD1FA213…d6D5 is an EOA on the Pons launchAndBuy transaction; diamond owner 0x72BeA6Fa…933B is a different EOA. [verified S3 S22 S23]

A second ERC-20 at 0x2ec89AFBa136119C5252FC47D14E2BD2144B10d2 is also named Down to Finance / DTF on chain 4663, with verified source pointing at downtofinance.cc and @downtofinancerh. DexScreener has no pairs for that address. Flag ca-collision. [verified S26]

## Product and economics

A DETF is one token over a basket the creator picks. Create deploys the instance and issues an unredeemable creator bond. The first bond is the first real deposit and turns the DETF on. After that, mint pays accepted vault shares (or the type's input) for DETF tokens that can be moved; bond deposits one side and matching DETF is minted into the reserve; burn exits toward the vault shares when burn is allowed. Policy can pause mint and burn near a target price; Open never does. [claim S1 S25]

Baskets are meant to hold vault shares from Earn (Morpho and Uniswap v4 legs are the documented examples). Rate providers optionally re-mark those shares so mint, burn, and the shown price stay current. The DETF token also sits in Uniswap v4 market liquidity; bonding locks LP tokens rather than a second price. [claim S1 S25]

$DTF at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 is the site's official fee-accruing token. Verified source names it PonsV2LauncherToken: fixed-supply ERC-20, entire supply minted to bonding curve 0x912467fc912f0f88df3b0d221946de78f38d4559, launchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. It is a Pons v2 launch token, not a DETF diamond. [verified S3 S19]

The app's chain-4663 map names DiamondPackageCallBackFactory 0x976949…1003, UniswapV4SingleStandardExchangeDETDFPkg 0x961b4E…577c, Create3Factory 0xD7786b…7882, hook factory 0x8BB5FC…2945, and diamond proxies 0x09682b…d0bc and 0x20af9A…0b2E. Those addresses exist with explorer-verified source. The DETF package accepted fourteen deployVault calls on 2026-08-25 and 2026-08-26. Explore still lists no live DETF; staking has no Protocol DETF configured. [verified S8 S20]

Lead listed book for $DTF is Uniswap v3 DTF/WETH 0x0F2CA1…4287. Extra Uniswap v4 DTF/ETH and DTF/USDG books exist. [verified S23]

Blockscout holders_count on the official DTF token is 8785 as of 2026-09-02T23:16:00Z. That is token holders, not DETF basket holders. [claim S21]

DexScreener Uniswap v3 DTF/WETH 0x0F2CA1…4287: liquidity.usd 250351.54, volume.h24 2375773.21, marketCap 6554824, priceUsd 0.006554 as of 2026-09-02T23:21:00Z. Pair slice, not protocol TVL. [claim S23]

No DefiLlama protocol row named Down to Finance, DTF, DETF, or IndexedEx. Robinhood Chain chain-slice TVL is not a Down to Finance figure. [verified S24]

## Communications

Account posts delay in DETF creation and staking [claim S28]

Account posts tests as last step before deploying [claim S29]

Account posts DETF explainer [claim S30]

indexedex commit archives listed DETFs [claim S31]

## Findings

The DETF create and Protocol DETF fee path are not listed as open on the app, while the diamond layer is owned by one externally owned account and audits are marked pending. A second ERC-20 on the same chain uses the same name and ticker at a different address. [claim S1]

- Explore lists no live DETF and staking has no Protocol DETF configured, while the landing page still marks $DTF-DETF Live. [claim S1 S18 S27]
- The DETF package accepted fourteen deployVault calls, then package activity stopped; created DETF addresses and whether any was bonded are not reproduced. [verified S20]
- Diamond owner is one externally owned account with no timelock located; manager and fee collector source is the proxy shell. [verified S9 S11 S12 S13]
- App footer shows audits pending. [claim S18]
- A second DTF ticker exists at 0x2ec89A…10d2. [verified S26]

- Receipts: every URL above was opened on 2026-09-02 and its excerpt copied from the page or API body. [verified S1 S3 S23]
- Numbers: holders is the Blockscout token count; volume, liquidity and market cap are the Uniswap v3 DTF/WETH pair slice, not an all-pairs or all-chains total; Llama chain TVL was not filed as protocol TVL. [claim S21 S23]
- Adversarial: the strongest contrary reading is that Down to Finance is only a Pons-launched token with a marketing site, and the DETF machine is unused. The verified UniswapV4SingleStandardExchangeDETDFPkg name, the 4663 app map, and fourteen deployVault calls argue against unused bytecode; the empty explore list, unconfigured staking page, and the 2026-08-30 delay post argue against a user-open basket product. Classification stays announced with CON-1 open. [inference S18 S20 S28]

## Sources

- S1 — Landing page.
- S3 — DTF token 0xeE5576Fa….
- S4 — UniswapV4SingleStandardExchangeDETDFPkg.
- S5 — DiamondPackageCallBackFactory.
- S6 — PonsV2BondingCurve for DTF.
- S8 — App JS chainId 4663 address map.
- S9 — Create3Factory 0xD7786b10….
- S10 — UniswapV4HookDiamondPackageCallBackFactory.
- S11 — indexedexManager proxy 0x09682b00….
- S12 — feeCollector proxy 0x20af9A1e….
- S13 — Deployer EOA 0x72BeA6Fa….
- S18 — Explore DETFs.
- S19 — DTF creation tx 0xbebe5e0a….
- S20 — DETDFPkg transactions.
- S21 — DTF token holders_count.
- S22 — X profile @downto_finance.
- S23 — DTF token pairs on Robinhood.
- S24 — protocols API filter.
- S25 — DETFs: one token over a basket.
- S26 — Second DTF token 0x2ec89AFB….
- S27 — Protocol DETF staking.
- S28 — Delay in launching DETF creation and staking.
- S29 — Tests last step before deploying.
- S30 — DETF explainer post.
- S31 — cyotee/indexedex commits on main.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:30:00Z; methodology_version: proofline-v1.0.
