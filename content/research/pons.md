---
slug: pons
coverage: stub
methodology_version: proofline-v1.0
---

# Pons — research record

## Identity

Pons (Pons Labs, LLC) is a launchpad on Robinhood Chain (chain id 4663) for launching and trading tokens from the user's own wallet; the site and both docs pages say the interface never holds user funds. Official surfaces are the site, the docs and the X account @ponsdotfamily. [claim S1 S13 S16 S2]

The docs describe two protocol generations that both operate today: v1, in which a fixed-supply token launches straight into a locked Uniswap V3 WETH pool, and v2, in which a launch sells from a bonding curve and graduates into a permanently locked Uniswap v4 pool. The v2 docs say the v1 protocol is documented separately and continues to operate, and that v2 public launches are closed to non-allowlisted creators for now. [claim S13 S16]

The project's reference token is PONS at `0x39dBED3a2bd333467115dE45665cC57F813C4571`: the v1 docs list it as the reference token, DefiLlama's adapter carries the same address, and Blockscout shows it as a verified-source ERC-20 named PonsLauncherToken with 58,927 holders and a fixed supply of one billion, created by the v1 legacy factory. [claim S13 S14] [verified S17]

## Deployment

The v1 docs publish an active factory `0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB` (start block 8991118) and active locker `0x736D76699C26D0d966744cAe304C000d471f7F35`, plus a legacy factory `0x0c37a24F5D23A486FA692d1500881d698B1F77a4` (start block 8600612) and legacy locker `0x31ca5E101941A93A7DD6d0497928700625CF54B5`, and state that deployed contracts are immutable and new versions ship as new factory and locker addresses. [claim S13]

The v2 docs publish nine contracts on chain 4663: launch factory `0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e`, meme hook `0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044`, fee escrow `0xd3AFEB2a57f70eF218Aa82451c51B2fb0416Ac9e`, buyback vault `0x42df2a798f82289E177311362e8f5ccC45c1219c`, launch locker `0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952`, launch-and-buy router `0xe33E9E479dF8802cb0866d5d05258bEc4cF62948`, launch deployer `0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42`, graduation executor `0xC7819B64A1dAECD7eC19856d026cb14EfBd89046` and graduation guard `0xf5695117b99B6f6401e67d4195BD653628176C6C`; each launch's bonding curve and token are created per launch and are to be resolved from the factory. The docs say a hook binds to one factory permanently, so a launchpad is replaced as a whole set rather than upgraded in place. [claim S16]

Proofline opened each of these addresses on Blockscout on 2026-08-31. All fifteen are contracts on chain 4663. The PONS token, the v1 active factory (PonsLaunchFactory) and locker (PonsLaunchLocker) and all nine v2 contracts (PonsV2LaunchFactory, V2MemeHook, V2FeeEscrow, V2BuybackVault, V2LaunchLocker, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, V2GraduationExecutor, PonsV2GraduationGuard) have verified source and no proxy, and their contract names match the docs' labels; the v1 legacy factory and locker exist but their source is not verified on the explorer. The v1 contracts were verified on 2026-07-13 and the v2 contracts on 2026-08-03/04. [verified S17 S18 S19 S20 S21 S22 S23 S24 S25 S26 S27 S28 S29 S30]

No EIP-1967 implementation or admin slot is set on any listed address and none of them exposes `paused()`, which is consistent with the docs' statement that deployed contracts are immutable and replaced as a whole set; per-launch curves, tokens and pools were not enumerated in this pass. [verified S33] [inference S13 S16 S33]

A second verified contract named Pons with the PONS symbol exists at `0xe306c19C72131B0a8f311648fa63FE8CeDf44571` (MIMEToken, 92 holders), created by `0xF193…7964` rather than by a Pons factory, and the Ethereum address circulating under the $PONS cashtag is not a contract on chain 4663 per the desk's explorer check. Only `0x39dB…4571` is treated as the project token. [verified S32] [claim S4 S6 S11]

## Control

v1: the docs say each token's creator/protocol fee split is snapshotted at launch and never changes (70/30 for the active factory, 90/10 for the legacy factory), that deployed contracts are immutable, and that unclaimed creator rewards may be claimed by Pons automation and routed to the creator payout wallet. [claim S13]

v2: the docs describe a factory owner who can edit or disable launch configs and approve pairing assets (approval is "owner-gated and closed by default"); Pons can turn a launch's buybacks off but never on, can propose a community-takeover fee recipient that executes after a three-day public delay and expires after a further three days, and can return collected funds from a launch stuck between the two graduation steps for seven full days. The docs say no privileged wallet, including Pons, can reach locked liquidity, mint, freeze or blacklist a wallet, or raise a launch's tax after creation. [claim S16]

`owner()` on the v1 active and legacy factories and lockers, the v2 factory, hook, buyback vault, launch locker and launch-and-buy router all return `0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd`, a verified SafeProxy on the canonical SafeL2 1.4.1 master copy with a threshold of 2 across three externally owned signers (`0x1320…818e`, `0x3825…f5b7`, `0xfa31…df50`). The Safe owns the contracts directly; there is no timelock contract in the ownership chain. [verified S33 S31]

The verified ABIs show what that owner can call. On the v2 factory: launch-config edits, pairing-asset approval and economics, the launch fee, allowlisted launchers, snipe-tax parameters, the maximum creator tax, the graduation executor, launch deployer and forwarder addresses, rescue functions for curve fees and swept graduations, and creator-fee-recipient changes. On the v2 hook: the protocol fee recipient and share, hook fee, buyback vault, fee-sweep operator and a pool-fee rescue. On the v1 locker: the protocol fee recipient and share, fee collector and fee redirect. Neither locker exposes an unlock or withdraw function, so locked liquidity has no owner exit path in the ABI, and the v2 fee escrow has no owner setters at all. [verified S22 S23 S19 S26 S24]

Whether those setters are bounded (caps, future-launches-only), and whether any owner action can reach reserves held by a live bonding curve or a graduation in flight, were not read from the source in this pass; the signers' identities and independence are unknown, and one signer has never sent a transaction. [unknown]

Community takeovers on both generations are requested through a form and reviewed by the team; the docs say a takeover changes only the creator payout wallet (and on v2 the creator's buyback share), not the token, pool or locked liquidity. [claim S13 S16]

User-fund exposure differs by generation: on v1 a launch's liquidity sits in a locked Uniswap V3 position held by the locker from the first block; on v2 a buyer's quote asset sits in the launch's bonding curve until graduation, after which the position is locked in the v2 locker, and the docs' safety valve lets Pons return (not seize) a stalled launch's collected funds only after a seven-day stall. The locker ABIs support the "locked" half of that; the curve half rests on the docs and the unread factory source. [inference S13 S16 S19 S26 S22]

## Security

Both docs pages say the interface never holds user funds and that every launch and trade is submitted through the user's wallet; the risk disclosures cover smart-contract, wallet, RPC and indexer failure, copied names and symbols, and irreversible transactions. [claim S1 S13 S16]

v1 launch protections: only the creator's initial buy executes in the launch block, then per-wallet holding (5%) and buy (5.5%) caps apply for the rest of the window; selling and transfers are not restricted. v2 replaces this with an opening buy tax that starts at 99% and decays to zero over the first five seconds and is collected into the launch's fee pool, with the creator and named addresses exempt. [claim S13 S16]

The v2 docs name three security reviews in progress (SB Security, Dingbats, Pashov Audit Group), state that no audit has closed, commit to publishing the reports in full, and tell integrators to treat v2 as unaudited until then; the v1 docs do not mention an audit. The docs publish `contact@ponsfamily.com` for security reports. [claim S16 S13]

No audit report, bug bounty programme, monitoring commitment or incident-response process was found for either generation in this review. Explorer-verified source (v1 on 2026-07-13, v2 on 2026-08-03/04) lets anyone read the deployed code, but that is not an independent review. [verified S18 S22] [inference S13 S16 S18 S22]

No incident affecting Pons contracts was found in the sources reviewed; the two address confusions recorded under Deployment are communications issues on X, not contract incidents. [inference S6 S11 S5 S32]

## Engineering

The v1 docs provide factory events, pool `Swap` events, viem examples, read methods for token and factory state, a graduation-status call and fee-split reads, and direct indexers to factory and pool events as the authoritative source. The v2 docs go further: launch-config enumeration, deterministic CREATE2 launch addresses, quote maths including the decaying snipe tax, curve state and fee-policy reads, a full event list and Uniswap v4 pool reconstruction. [claim S13 S16]

Thirteen contracts carry explorer-verified source (Solidity 0.8.30 for v1, 0.8.35 for v2; the v1 factory's license field reads "none"), so their bytecode can be matched to readable source on Blockscout. No public repository, test suite, CI or release history was linked from the site or docs, and the two legacy v1 contracts are unverified, so engineering quality beyond the deployed code and the docs cannot be assessed. [verified S18 S19 S22 S23 S24 S25 S26 S27 S28 S29 S30 S20 S21] [inference S1 S13 S16]

## Team

The site and docs identify Pons Labs, LLC and publish `contact@ponsfamily.com` for integration, partnership, quote-asset proposals and security reports. Named technical contributors, the factory owner's signers and any governance participants are not identified in any reviewed source. [claim S1 S13 S16]

The v1 contracts were deployed by `0xda4b…3968` and the v2 contracts by `0xFdDE…CC36` (the hook through the canonical CREATE2 deployer); neither deployer nor any of the three Safe signers is linked to a named person in the sources reviewed. [inference S18 S22 S23 S33]

## Product and economics

v1 (live): each launch uses WETH as its sole quote asset, a 1% pool fee, a 0.0005 ETH launch fee and a default 4.2 ETH graduation threshold; graduation is a threshold indicator only. Trading fees split creator/protocol 70/30 (active factory) or 90/10 (legacy); the protocol says 80% of its fees currently fund a manual TWAP that buys and burns PONS and 20% fund infrastructure and the team, and that the 80% allocation is not immutable yet. [claim S13]

v2 (deployed; allowlisted creators only per the docs): the whole supply is minted to a bonding curve; a fixed held-back share seeds the Uniswap v4 pool at graduation; the pool charges no Uniswap fee of its own; a base trade fee plus an optional capped creator tax are fixed at launch; creator-elected buybacks lock repurchased tokens in a five-year vesting vault split between creator and protocol. Launches can be priced in ETH or any owner-approved ERC-20, including tokenised stocks, and the quote asset cannot change after creation. [claim S16]

Both generations sit on the chain's Uniswap deployment (V3 pools for v1, a v4 hook for v2). The project's 2026-08-20 post described pairing with any supported RWA, and the v2 docs describe stock-token pairing, so the stock-tokens and usdg dependency cards apply to v2 launches that pair against those assets, not to v1 launches, which are WETH-only. [claim S8 S16] [inference S8 S13 S16]

At access time on 2026-08-31, DefiLlama's APIs reported about $85.9M of 24-hour volume, $294.7M over 30 days, $5.34M of 24-hour fees and $26.5M over 30 days, and its protocol page listed Pons V2 with roughly $86.5M 24h volume and $4.7M 24h fees; DefiLlama lists separate Pons V1 and Pons V2 adapters. These are third-party adapter outputs, not reproduced onchain. [claim S14 S15 S7 S12]

Which docs generation each DefiLlama adapter tracks, and how the reported activity splits between v1 pools and v2 curves, was not established. [unknown]

## Communications

The seed description ("V2 bonding curve graduating to Uniswap v4; quote assets ETH, USDG and Stock Tokens") matches the docs' v2 generation, while the v1 docs alone describe a different, WETH-only, no-curve mechanism; read together, the two pages resolve the apparent contradiction, and Pons should be presented by generation rather than as one mechanism. [claim S13 S16] [inference S13 S16]

The official X account posted $4B in lifetime volume (31 Aug), $20.93M paid to token creators in 47 days (30 Aug) and 29% of PONS supply burned (29 Aug); none of these figures was reproduced. [claim S5]

Two accounts, including Longbow's official one, posted an Ethereum address under the $PONS cashtag that the desk's explorer check found is not a contract on chain 4663, and a third-party post claimed $PONS is live on Solana; neither is a Robinhood Chain explorer check. [claim S6 S11 S10]

## Findings

Strongest positive evidence: two docs generations with published addresses that reproduce on the explorer with verified source and no proxies, lockers whose ABIs have no unlock path, a 2-of-3 Safe rather than a single key as owner, fixed per-launch fee splits, and material third-party activity measurements. Strongest risks: the Safe's direct, undelayed owner rights over fee recipients and shares, pairing assets, launch configs and graduation components; unidentified signers; the v1 revenue policy that is "not immutable yet"; v2 running deployed and unaudited behind a creator allowlist; and team-mediated fee-recipient takeovers. Missing: a source read bounding the owner setters and rescue functions, audit reports, a bounty, an incident process, a repository and named contributors. Unresolved: the DefiLlama adapter-to-generation mapping, the identity of the v1 fee recipient and buyback wallet, and whether further factory generations exist. [inference S13 S16 S17 S19 S22 S23 S26 S31 S33 S14 S15 S6]

## Sources

- S1 — Pons site, reviewed by the desk on 2026-08-31 and re-read during intake the same day.
- S2 — @ponsdotfamily on X (census link).
- S3–S8, S12 — Grok desk intake artifacts and the DefiLlama protocol page as copied into them.
- S9–S11 — third-party X posts recorded by the desk.
- S13 — Pons docs, v1 page (docs.ponsfamily.com), reviewed 2026-08-31.
- S14 / S15 — DefiLlama fees and DEX volume APIs, accessed 2026-08-31.
- S16 — Pons docs, v2 page (docs.ponsfamily.com/docs/v2), read 2026-08-31 during intake.
- S17–S32 — Blockscout address pages for every documented Pons contract, the owner Safe and the same-ticker token, opened 2026-08-31.
- S33 — `owner()`, Safe threshold/signer and EIP-1967 slot reads against the chain's public RPC at block 51242016, 2026-08-31.

See `content/sources/pons.yaml` for every entry's accessed_at, claim and excerpt.

## Review metadata

Researcher: harsharn10 — research desk pass of 2026-08-31 (commit 5393021), reconciled onto main's ledger and extended during intake on 2026-08-31 with the v2 docs, a Blockscout reproduction of every documented address and RPC reads of the owner Safe. Approver: pending. Methodology: proofline-v1.0. Reviewed: 2026-08-31. Published: not yet.
