---
slug: pons
coverage: full
methodology_version: proofline-v1.0
---

# Pons — research record

## Identity

Pons is classified as Bonding-curve launchpad.

The chain's busiest launchpad by launches and volume today. Pons launches tokens on Robinhood Chain in two generations: v1 mints a fixed-supply token straight into a locked Uniswap V3 WETH pool; v2 sells from a bonding curve that graduates into a permanently locked Uniswap v4 pool and can pair against approved assets such as tokenised stocks. Users launch and trade from their own wallets. Pons Labs, LLC runs the site and @ponsdotfamily.

Themes: launchpad, memecoin, rwa, stock-paired, hook

## Deployment

PONS token (PonsLauncherToken), created by v1 legacy factory: 0x39dBED3a2bd333467115dE45665cC57F813C4571 on robinhood-chain. [verified S35 S41 S42 S54]

PONS/WETH Uniswap V3 pool (reference pool in v1 docs): 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA on robinhood-chain. [claim S35 S43 S56]

v1 active launch factory (PonsLaunchFactory): 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB on robinhood-chain. [claim S35 S49]

v1 active locker (PonsLaunchLocker): 0x736D76699C26D0d966744cAe304C000d471f7F35 on robinhood-chain. [claim S35 S58]

v1 legacy factory (created the PONS token; source not verified on the explorer): 0x0c37a24F5D23A486FA692d1500881d698B1F77a4 on robinhood-chain. [claim S35 S41 S50]

v1 legacy locker (source not verified on the explorer): 0x31ca5E101941A93A7DD6d0497928700625CF54B5 on robinhood-chain. [claim S35 S59]

v2 launch factory (PonsV2LaunchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S36 S48]

v2 Uniswap v4 hook (V2MemeHook): 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044 on robinhood-chain. [claim S36 S60]

v2 fee escrow (V2FeeEscrow): 0xd3AFEB2a57f70eF218Aa82451c51B2fb0416Ac9e on robinhood-chain. [claim S36 S61]

v2 buyback vault (V2BuybackVault): 0x42df2a798f82289E177311362e8f5ccC45c1219c on robinhood-chain. [claim S36 S62]

v2 launch locker (V2LaunchLocker): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S36 S63]

v2 launch-and-buy router (PonsV2LaunchAndBuy): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S36 S64]

v2 launch deployer (PonsV2LaunchDeployer): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S36 S65]

v2 graduation executor (V2GraduationExecutor): 0xC7819B64A1dAECD7eC19856d026cb14EfBd89046 on robinhood-chain. [claim S36 S66]

v2 graduation guard (PonsV2GraduationGuard): 0xf5695117b99B6f6401e67d4195BD653628176C6C on robinhood-chain. [claim S36 S67]

Owner Safe (SafeProxy / SafeL2): 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd on robinhood-chain. [verified S47 S51]

## Control

owner() on the v1 active factory and the v2 factory returns 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd, a verified SafeProxy (SafeL2 implementation 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762) with getThreshold 2 and three getOwners. [verified S47 S51]

No timelock contract sits between that Safe and those factories in the owner() result. [inference S47]

Documented v2 owner powers include launch-config edits, pairing-asset approval, a buyback off-switch, a three-day public delay on a Pons-proposed creator-fee takeover, and return of funds from a launch stuck between graduation steps for seven days. Whether those setters can reach a live curve was not read from source this pass. [claim S36]

## Security

v2 docs state that no audit has closed, name SB Security, Dingbats and Pashov Audit Group as reviews in progress, and tell readers to treat v2 as unaudited until reports are published; v1 docs do not mention an audit. Security contact in the docs is contact@ponsfamily.com. [claim S35 S36]

## Engineering

The v1 docs provide factory events, pool `Swap` events, viem examples, read methods for token and factory state, a graduation-status call and fee-split reads, and direct indexers to factory and pool events as the authoritative source. The v2 docs go further: launch-config enumeration, deterministic CREATE2 launch addresses, quote maths including the decaying snipe tax, curve state and fee-policy reads, a full event list and Uniswap v4 pool reconstruction. [claim S13 S16]

Twelve contracts carry explorer-verified source (Solidity 0.8.30 for v1, 0.8.35 for v2; the v1 factory's license field reads "none"), so their bytecode can be matched to readable source on Blockscout. [verified S17 S18 S19 S22 S23 S24 S25 S26 S27 S28 S29 S30] The two legacy v1 contracts are contracts on chain but have unverified source. [verified S20 S21] No public repository, test suite, CI or release history was linked from the site or docs, so engineering quality beyond the deployed code and the docs cannot be assessed. [inference S1 S13 S16]

## Team

The site footer names Pons Labs, LLC and links @ponsdotfamily; the X bio t.co expands to ponsfamily.com/launchpad. Named technical contributors and Safe-signer identities are not published on those surfaces. [claim S34 S55]

v1 contracts were created by 0xda4bCee76B29EFEc9697Fcf663601c2042043968 and v2 contracts by 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36 (the hook via the canonical CREATE2 deployer). No public repository is linked from the site, docs or X bio; github.com/PonsLabs has no public repositories. [claim S48 S49 S57]

t.me/ponsdotfamily carries the PONS CA and 15,233 members but is not linked from the site or docs HTML this pass (unconfirmed-official). [claim S53]

## Product and economics

v1: a create call mints a fixed-supply token and opens a locked Uniswap V3 WETH pool in the same transaction. There is no bonding curve and no later migration; trading continues in that pool after a WETH-threshold graduation. Default terms in the docs are 1% pool fee, 0.0005 ETH launch fee and a 4.2 ETH graduation threshold. [claim S35]

v2: the whole supply is minted to a per-launch bonding curve; a held-back share seeds a Uniswap v4 pool at graduation and that position is locked. Quote asset is native ETH or an owner-approved ERC-20, including tokenised stocks, and cannot change after create. Public creates are closed to non-allowlisted addresses. [claim S36]

The project token PONS at 0x39dBED3a2bd333467115dE45665cC57F813C4571 is a PonsLauncherToken created by the v1 legacy factory 0x0c37a24F5D23A486FA692d1500881d698B1F77a4. The v1 docs name Uniswap V3 pool 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA as its reference pool, quoted against WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. [verified S35 S41 S43 S56]

DefiLlama DEX adapter, Robinhood Chain slice, 2026-09-02T22:31:59Z: 24h volume $94,220,826; 30d $470,272,121; all-time $578,882,056. Fees 24h $4,557,472. Revenue 24h $909,887. [verified S44 S45 S46]

DexScreener Uniswap PONS/WETH pair 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA at 2026-09-02T22:31:59Z: liquidity $5,103,019.56; 24h volume $5,924,290.05; price $0.4924. Pair asset WETH; venue Uniswap. [verified S43]

Blockscout token page at 2026-09-02T22:31:11Z: 63,412 holders; circulating_market_cap $292,421,152. [verified S42]

@ponsdotfamily posted $4.54B lifetime volume on 1 Sep 2026 and $5B on 2 Sep 2026, plus $111,000,000 of RWA volume over 24 hours and new pairing assets LLY, WYFI, TSM, RBLX, SKYHY, DELL, USO. Those lifetime figures are not reproduced by the DefiLlama all-time adapter. [claim S37 S38 S39 S40] [verified S44]

## Communications

Pons posted $5B volume traded [claim S37]

New stock tokens listed for pairing [claim S38]

$111M RWA volume in 24 hours [claim S39]

$4.54B volume under two months [claim S40]

## Findings

The v1 and v2 factories' owner() is a 2-of-3 Safe with no timelock in that call path, so documented owner actions on fees, pairing assets, launch configs and graduation components execute as soon as two signers confirm. [verified S47] [claim S36]

v2 is deployed and its own docs tell integrators to treat it as unaudited until three named reviews close; public creates stay on an allowlist. [claim S36]

A launch paired against a tokenised stock or other approved asset carries that asset's price and transfer behaviour on top of the launch token, and graduation only records that the curve sold out or that a WETH threshold was reached. [claim S35 S36]

- Owner of the factories is a 2-of-3 Safe with no timelock in the owner() path; v2 docs describe owner-gated fee, pairing and graduation controls whose on-chain bounds were not re-read from source this pass. [verified S47] [claim S36]
- v2 is deployed and its docs say to treat it as unaudited until three named reviews publish reports; public creates are allowlisted. [claim S36]
- Official lifetime volume ($5B) disagrees with DefiLlama all-time DEX volume ($578,882,056). [claim S37] [verified S44]
- A second verified contract named Pons with symbol PONS exists at 0xe306c19C72131B0a8f311648fa63FE8CeDf44571 (MIMEToken); only 0x39dBED3a2bd333467115dE45665cC57F813C4571 is the project token (ca-collision). [verified S41 S52]
- Custom-pair v2 launches inherit the pairing asset's price and transfer behaviour; graduation is a threshold or curve-sold-out marker, not an exit guarantee. [claim S35 S36]
- v1 legacy factory and locker have no verified source on the explorer; that factory created the PONS token. [verified S41 S50 S59]

- Receipts: site, both docs pages, four official X posts, Blockscout api/v2 on the token and documented contracts, DexScreener pair API, Llama fees/volume APIs, and RPC owner()/getCode were opened on 2026-09-02 and excerpts copied from the responses. [verified S34 S35 S36 S37 S41 S43 S44 S47]
- Numbers: Llama figures are the Robinhood Chain adapter slice, not an all-chains total. DexScreener PONS/WETH liquidity and 24h volume are the Uniswap pair 0x10CC…26bA, not protocol volume. Official $5B / $4.54B / $111M remain class claim. [verified S43 S44] [claim S37 S39 S40]
- Adversarial: the strongest contrary reading of the $5B post is that it sums venues Llama's V2 adapter excludes (post-graduation Uniswap v4 swaps and v1 pool volume). The same-ticker MIMEToken is a second PONS symbol on 4663; creator and source name separate it from the project token. github.com/PonsLabs is an empty org and is not an official repository on the surfaces checked. [inference S36 S44 S52 S57]

## Sources

- S1 — Pons Labs operates a Robinhood Chain interface for fixed-supply token launches and wallet-submitted trades..
- S13 — v1 launches use locked Uniswap V3 WETH pools with no curve or migration; the v1 page publishes fees, revenue policy, contracts and integration methods..
- S16 — Pons v2 docs: a launch sells from a bonding curve and graduates into a permanently locked Uniswap v4 pool; launches can pair against owner-approved assets such as tokenised stocks; the factory owner gates launch configs and pairing assets; Pons-proposed fee-recipient takeovers wait three days; nine deployed addresses on chain 4663; three security reviews in progress and none closed; public launches closed to non-allowlisted creators..
- S17 — PONS at 0x39dB…4571 is a verified-source, non-proxy ERC-20 (PonsLauncherToken) on chain 4663, created by the v1 legacy factory 0x0c37…7a4, with 58,927 holders and a 1,000,000,000 total supply..
- S18 — The v1 active factory 0xA5aA…1feB is a verified-source, non-proxy contract named PonsLaunchFactory; write functions named in its ABI: addDexConfig, addLaunchConfig, updateLaunchConfig, setDexStatus, setLaunchEnabled, setLaunchFee, setWhitelistedLauncher, transferOwnership/acceptOwnership/renounceOwnership..
- S19 — The v1 active locker 0x736D…7F35 is a verified-source, non-proxy contract named PonsLaunchLocker; its ABI has no unlock or withdraw function; writes: lockPosition, collectFees, setFeeCollector, setFeeRedirect, setProtocolFeeRecipient, setProtocolFeeShare, initialize, ownership transfer..
- S20 — The v1 legacy factory 0x0c37…7a4 is a contract on chain 4663 whose source is not verified on the explorer; it is the creator of the PONS token contract..
- S21 — The v1 legacy locker 0x31ca…54B5 is a contract on chain 4663 whose source is not verified on the explorer..
- S22 — The v2 factory 0x7eD5…EC7e is a verified-source, non-proxy contract named PonsV2LaunchFactory; write functions named in its ABI include addLaunchConfig, updateLaunchConfig, setLaunchEnabled, setLaunchFee, setWhitelistedLauncher, setPairTokenApproved, setPairTokenEconomics, setSnipeTaxSeconds, setSnipeTaxStartBps, setMaxCreatorTaxBps, setGraduationExecutor, setLaunchDeployer, setLaunchForwarder, setBuybackEnabled, setCreatorFeeRecipient, transferCreatorFeeRecipient, executeCreatorFeeRecipientChange, cancelCreatorFeeRecipientChange, rescueCurveFees, rescueSweptGraduation, forceSweptGraduation, plus launchToken, launchTokenFor, graduate, createGraduatedPool and ownership transfer..
- S23 — The v2 hook 0xE5e7…e044 is a verified-source, non-proxy contract named V2MemeHook; write functions named in its ABI include setProtocolFeeRecipient, setProtocolFeeShareBps, setHookFeeBps, setCreatorFeeRecipient, setBuybackEnabled, setBuybackBurnBps, setBuybackVault, setFactory, setFeeSweepOperator, setMaxInternalPriceImpactBps, rescuePoolFees, sweepPoolFees, registerPool and ownership transfer, alongside the Uniswap v4 hook callbacks..
- S24 — The v2 fee escrow 0xd3AF…4c9e is a verified-source, non-proxy contract named V2FeeEscrow whose ABI exposes only claim, claimToken, credit and creditToken writes (no owner setters); it held about 723.6 ETH at access time..
- S25 — The v2 buyback vault 0x42df…219c is a verified-source, non-proxy contract named V2BuybackVault; ABI writes: lock, release, setFactory, an update function and ownership transfer..
- S26 — The v2 launch locker 0x2674…4952 is a verified-source, non-proxy contract named V2LaunchLocker whose ABI writes are lockPosition, lockTokenSupply, setFactory and ownership transfer — no unlock or withdraw function..
- S27 — The v2 launch-and-buy router 0xe33E…2948 is a verified-source, non-proxy contract named PonsV2LaunchAndBuy..
- S28 — The v2 launch deployer 0x3711…1A42 is a verified-source, non-proxy contract named PonsV2LaunchDeployer..
- S29 — The v2 graduation executor 0xC781…9046 is a verified-source, non-proxy contract named V2GraduationExecutor..
- S30 — The v2 graduation guard 0xf569…6C6C is a verified-source, non-proxy contract named PonsV2GraduationGuard, created by the v2 factory in the factory's own creation transaction..
- S34 — Pons site.
- S35 — v1 docs.
- S36 — v2 docs.
- S37 — Pons just passed $5B volume traded.
- S38 — New Stock Tokens have landed on Pons.
- S39 — $111,000,000 in RWA volume.
- S40 — $4.54B in volume under 2 months.
- S41 — PONS token address API.
- S42 — PONS token holders_count.
- S43 — PONS/WETH Uniswap pair.
- S44 — Pons DEX volume.
- S45 — Pons daily fees.
- S46 — Pons daily revenue.
- S47 — owner(), getOwners, getThreshold.
- S48 — v2 launch factory.
- S49 — v1 active factory.
- S50 — v1 legacy factory.
- S51 — Owner SafeProxy.
- S52 — Same-ticker MIMEToken PONS.
- S53 — @ponsdotfamily.
- S54 — eth_getCode PONS token.
- S55 — X bio t.co redirect.
- S56 — PONS/WETH UniswapV3Pool.
- S57 — PonsLabs organization.
- S58 — v1 active locker.
- S59 — v1 legacy locker.
- S60 — v2 Uniswap v4 hook.
- S61 — v2 fee escrow.
- S62 — v2 buyback vault.
- S63 — v2 launch locker.
- S64 — v2 launch-and-buy router.
- S65 — v2 launch deployer.
- S66 — v2 graduation executor.
- S67 — v2 graduation guard.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T22:36:00Z; methodology_version: proofline-v1.0.
