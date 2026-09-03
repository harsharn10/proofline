---
slug: vynex
coverage: stub
methodology_version: proofline-v1.0
---

# Vynex — research record

## Identity

Vynex is classified as Savings vault.

Vynex turns a Robinhood Chain deposit into a transferable ERC-20 YieldShare that redeems the underlying at any block. A user deposits a stock token or USDG and can sell, transfer, or burn the share. Factory vaults harvest pool fees into the share price; a routed USDG vault forwards deposits into steakUSDG on Morpho Blue. One EOA owns the factory. $VYNEX launched through Pons v2.

Themes: vault, lending, stock-paired:NVDA, rwa, hook

## Deployment

VYNEX token (PonsV2LauncherToken): 0x8cF33E3026604Bd85677e7Bc6E04d256571b6653 on robinhood-chain. [verified S6 S10 S11 S12 S13 S20]

VaultFactory (current registry): 0x6d48643d2438EbB75BB80cc6683360C1B9fC4C7b on robinhood-chain. [verified S6 S14 S15 S35]

VaultFactory implementation: 0xF9e012791490e555Dc6Fe101D556dd5D618A79CE on robinhood-chain. [claim S14 S30]

VaultFactory revision 1 (legacyFactory): 0xee57E1B9B87Ca4318E046FAE2C45923f61d8D199 on robinhood-chain. [claim S6 S31]

Routed ys-USDG (forwards into steakUSDG): 0x01680B41D61253a61c4C55e897a05D10F280cD2A on robinhood-chain. [verified S6 S7 S16 S17]

YieldShares NVDA: 0xf8670be5530f383ac7d8cf1b60d1814f0aa827ac on robinhood-chain. [claim S7 S18]

NVDA/USDG Morpho oracle (from config.js): 0xcf29960266420A42f12061699ec2daBd7eEa8D6e on robinhood-chain. [claim S6 S19]

StockZap (USDG in): 0xDCAAA4973180094751D74Ac1B0D8A48EA1e0FacE on robinhood-chain. [claim S6 S32]

Factory / vault owner EOA: 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208 on robinhood-chain. [claim S14 S15 S17 S18]

## Control

_Research pending._

## Security

_Research pending._

## Engineering

_Research pending._

## Team

_Research pending._

## Product and economics

_Research pending._

## Communications

@UseVynex: 18 addresses deposited, 13 still hold [claim S22]

@UseVynex posts five-day vault counts and fees [claim S21]

@UseVynex lists 29 new tokenized-stock vaults [claim S23]

@UseVynex: YieldShares are the main story [claim S25]

@UseVynex corrects first-NVDA-market claim [claim S26]

@UseVynex posts NVDA/USDG Morpho borrow market [claim S27]

## Findings

_Research pending._

## Sources

- S6 — config.js single source of truth.
- S7 — api/vaults.
- S10 — Address 0x8cF33E3026604Bd85677e7Bc6E04d256571b6653.
- S11 — Token 0x8cF33E30….
- S12 — Creation tx 0xcdd76854….
- S13 — eth_getCode and eth_call on VYNEX token.
- S14 — VaultFactory 0x6d48643d2438EbB75BB80cc6683360C1B9fC4C7b.
- S15 — VaultFactory owner() and eth_getCode.
- S16 — Routed ys-USDG 0x01680B41….
- S17 — eth_call on routed ys-USDG.
- S18 — eth_call on ys-NVDA.
- S19 — Oracle 0xcf29960266420A42f12061699ec2daBd7eEa8D6e.
- S20 — CA updated on site.
- S21 — Vynex, five days in, by the numbers.
- S22 — 18 addresses have deposited.
- S23 — 29 new vaults are now live.
- S25 — Lending isn't the main story. YieldShares are..
- S26 — Correction: not the first NVDA lending market.
- S27 — Borrow dollars against NVDA.
- S30 — Factory implementation 0xF9e01279….
- S31 — legacyFactory 0xee57E1B9….
- S32 — eth_getCode StockZap.
- S35 — VaultFactory creation tx 0x4dbdb2dc….

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:10:00Z; methodology_version: proofline-v1.0.
