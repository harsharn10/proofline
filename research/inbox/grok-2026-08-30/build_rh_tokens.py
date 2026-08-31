#!/usr/bin/env python3
"""Robinhood Chain DeFi / RWA token research workbook — Aug 30, 2026."""

from openpyxl import Workbook
from openpyxl.styles import Font, Fill, PatternFill, Alignment, Border, Side, NamedStyle
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import FormulaRule
from openpyxl.chart import BarChart, Reference
from openpyxl.worksheet.table import Table, TableStyleInfo
from datetime import datetime

wb = Workbook()

# Colors
NAVY = "0B1F3A"
GOLD = "C9A227"
GREEN = "1B5E20"
TEAL = "0D7377"
SLATE = "263238"
ROW_ALT = "F4F1EA"
HEADER_FG = "FFFFFF"
WHITE = "FFFFFF"
LIGHT_GOLD = "F8F1DE"
LIGHT_NAVY = "E8EEF4"
LIGHT_TEAL = "E6F3F3"
RED_SOFT = "FDECEA"
GREEN_SOFT = "E8F5E9"
AMBER = "FFF8E1"

thin = Border(
    left=Side(style="thin", color="D0D5DD"),
    right=Side(style="thin", color="D0D5DD"),
    top=Side(style="thin", color="D0D5DD"),
    bottom=Side(style="thin", color="D0D5DD"),
)
thick_bottom = Border(bottom=Side(style="medium", color=NAVY))

def fill(hex_color):
    return PatternFill("solid", fgColor=hex_color)

def font(name="Calibri", size=11, bold=False, color="1A1A1A", italic=False):
    return Font(name=name, size=size, bold=bold, color=color, italic=italic)

def header_row(ws, row, headers, fill_color=NAVY, font_color=HEADER_FG, height=22):
    ws.row_dimensions[row].height = height
    for col, h in enumerate(headers, 1):
        cell = ws.cell(row=row, column=col, value=h)
        cell.font = font(size=10, bold=True, color=font_color)
        cell.fill = fill(fill_color)
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin

def style_data_row(ws, row, ncols, alt=False, bg=None):
    bgc = bg or (ROW_ALT if alt else WHITE)
    for col in range(1, ncols + 1):
        cell = ws.cell(row=row, column=col)
        cell.font = font(size=10)
        cell.fill = fill(bgc)
        cell.alignment = Alignment(vertical="center", wrap_text=True)
        cell.border = thin

def set_widths(ws, widths):
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w

def freeze(ws, cell="A3"):
    ws.freeze_panes = cell
    ws.auto_filter.ref = None

def title_block(ws, title, subtitle, n_cols):
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=n_cols)
    c = ws.cell(1, 1, title)
    c.font = font(size=18, bold=True, color=WHITE)
    c.fill = fill(NAVY)
    c.alignment = Alignment(horizontal="left", vertical="center")
    ws.row_dimensions[1].height = 28
    ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=n_cols)
    c = ws.cell(2, 1, subtitle)
    c.font = font(size=10, italic=True, color=NAVY)
    c.fill = fill(LIGHT_GOLD)
    c.alignment = Alignment(horizontal="left", vertical="center")
    ws.row_dimensions[2].height = 20

# =============================================================================
# SHEET 0: README / Overview
# =============================================================================
ws = wb.active
ws.title = "00_Overview"

title_block(
    ws,
    "Robinhood Chain — DeFi & RWA Tokens Research List",
    "Compiled 30 Aug 2026  |  Chain ID 4663 (Arbitrum Orbit L2)  |  Mainnet live 1 Jul 2026  |  Not investment advice",
    8,
)

# Scope
ws.merge_cells("A4:H4")
ws["A4"] = "WHAT THIS IS"
ws["A4"].font = font(size=12, bold=True, color=WHITE)
ws["A4"].fill = fill(TEAL)

scope = [
    ("Universe", "Robinhood Chain L2 — not Robinhood brokerage app crypto listings, not Classic EU Stock Tokens on Arbitrum One."),
    ("Official RWAs", "Robinhood Stock Tokens: ERC-20 tokenized debt securities issued by Robinhood Assets (Jersey) Limited. Economic exposure only — no share ownership, no voting rights. Geo-blocked for US / UK / CA / CH / UAE persons."),
    ("DeFi tokens", "Native protocol tokens launched on the chain that touch RWAs: launchpads, aggregators, lending, yield vaults, NFT-wallet hybrids that hold or distribute stock tokens."),
    ("Not listed here", "The 50k–370k+ individual meme launches on Pons / Noxa / Flap / Bankr / bow.fun. Those are not DeFi/RWA tokens; only the pads themselves and notable stock-paired memes are included."),
    ("No chain token", "Robinhood Chain has no official gas/governance token. Gas is ETH. Sequencer is operated by Robinhood."),
    ("Legal structure", "Stock Tokens = tokenized debt securities under EU Prospectus Regulation, Jersey issuer. Backed 1:1 by underlying shares at a licensed custodian per RH disclosures. Dividends reinvested via ERC-8056 multiplier, not paid out."),
]

ws["A5"] = "Topic"
ws["B5"] = "Detail"
header_row(ws, 5, ["Topic", "Detail"] + [""] * 6, TEAL)
ws.merge_cells("B5:H5")
for i, (k, v) in enumerate(scope):
    r = 6 + i
    ws.cell(r, 1, k).font = font(size=10, bold=True)
    ws.merge_cells(start_row=r, start_column=2, end_row=r, end_column=8)
    ws.cell(r, 2, v).font = font(size=10)
    style_data_row(ws, r, 8, alt=i % 2 == 1)
    ws.cell(r, 1).fill = fill(LIGHT_TEAL if i % 2 == 0 else WHITE)
    ws.row_dimensions[r].height = 36

# Snapshot
r0 = 13
ws.merge_cells(start_row=r0, start_column=1, end_row=r0, end_column=8)
ws.cell(r0, 1, "CHAIN SNAPSHOT  —  ~30 AUG 2026  (figures move fast; treat as point-in-time)")
ws.cell(r0, 1).font = font(size=12, bold=True, color=WHITE)
ws.cell(r0, 1).fill = fill(NAVY)

metrics = [
    ("Metric", "Figure", "Source"),
    ("Chain mainnet launch", "1 Jul 2026", "Robinhood / The Defiant"),
    ("Official Stock Tokens on RH Chain", "~190–194 tickers (100 added 13 Aug)", "Robinhood Crypto X; RWA.xyz; docs.robinhood.com"),
    ("Distributed RWA value (RH platform)", "~$49M", "RWA.xyz 29–30 Aug 2026"),
    ("RWA active mcap (DefiLlama)", "~$150M", "DefiLlama chain page"),
    ("Stablecoin mcap on chain", "~$769M (USDG dominant)", "DefiLlama"),
    ("Chain DeFi TVL", "~$725M", "DefiLlama"),
    ("Morpho Blue TVL on chain", "~$489M", "DefiLlama"),
    ("DEX volume 24h", "~$1.2B", "DefiLlama / DexScreener"),
    ("RWA holders (RWA.xyz network)", "~770k–787k", "RWA.xyz"),
    ("Top official stock token by value", "NVDA ~$9.3M / ~79k holders", "RWA.xyz"),
    ("Top protocol token by mcap", "$PONS ~$210–270M (volatile)", "Blockscout / DexScreener 30 Aug"),
    ("US person access to Stock Tokens", "Not available", "Robinhood disclosures"),
]
header_row(ws, r0 + 1, ["Metric", "Figure", "Source"] + [""] * 5, GOLD, "1A1A1A")
ws.merge_cells(start_row=r0 + 1, start_column=3, end_row=r0 + 1, end_column=8)
for i, row in enumerate(metrics[1:]):
    r = r0 + 2 + i
    ws.cell(r, 1, row[0])
    ws.cell(r, 2, row[1])
    ws.merge_cells(start_row=r, start_column=3, end_row=r, end_column=8)
    ws.cell(r, 3, row[2])
    style_data_row(ws, r, 8, alt=i % 2 == 1)
    ws.row_dimensions[r].height = 18

# How to use
r1 = 29
ws.merge_cells(start_row=r1, start_column=1, end_row=r1, end_column=8)
ws.cell(r1, 1, "WORKBOOK MAP")
ws.cell(r1, 1).font = font(size=12, bold=True, color=WHITE)
ws.cell(r1, 1).fill = fill(TEAL)

sheets_guide = [
    ("01_Official_Stock_Tokens", "Canonical Robinhood Stock Tokens + ETFs pulled from docs.robinhood.com/chain/contracts. Verify CA, not ticker — fakes reuse tickers."),
    ("02_DeFi_Protocol_Tokens", "Native protocol tokens matching the examples (Pons, Arrow, Mancer, Earn, Longshot, Bow, Quotron, StonkBroker, Statics) plus INDEX and adjacent protocols."),
    ("03_RWA_Hybrids_NFTs", "NFT + token projects that hold, print, or distribute Stock Tokens (Quotrons, StonkBrokers, Chain Mancers, Statics Operators)."),
    ("04_Launchpads", "Token factories on the chain. Pons dominates volume. Long.xyz is the RWA-pair specialist (AI/NVDA etc.)."),
    ("05_Meme_RWA_Pairs", "Notable community tokens launched against official stock tokens. Category, not exhaustive."),
    ("06_Tokenless_Infra", "Products with no native token: Robinhood Earn / Morpho, Rialto, Meridian, Arcus, Uniswap, Lighter, Maple syrupUSDG."),
    ("07_Sources_Caveats", "Primary sources, copycat-CA warning, geo restrictions, legal structure."),
]
header_row(ws, r1 + 1, ["Sheet", "What's on it"] + [""] * 6, TEAL)
ws.merge_cells(start_row=r1 + 1, start_column=2, end_row=r1 + 1, end_column=8)
for i, (s, d) in enumerate(sheets_guide):
    r = r1 + 2 + i
    ws.cell(r, 1, s).font = font(size=10, bold=True)
    ws.merge_cells(start_row=r, start_column=2, end_row=r, end_column=8)
    ws.cell(r, 2, d)
    style_data_row(ws, r, 8, alt=i % 2 == 1)
    ws.row_dimensions[r].height = 28

ws.merge_cells("A40:H40")
ws["A40"] = "DISCLAIMER: Contract addresses were compiled from official docs, Blockscout, project sites, and secondary research on 30 Aug 2026. Always re-verify on docs.robinhood.com/chain/contracts and robinhoodchain.blockscout.com before interacting. Multiple fake contracts reuse the same tickers. Not financial advice. Stock Tokens are not available to US persons."
ws["A40"].font = font(size=9, italic=True, color="5D4037")
ws["A40"].alignment = Alignment(wrap_text=True, vertical="center")
ws["A40"].fill = fill(AMBER)
ws.row_dimensions[40].height = 48

set_widths(ws, [36, 28, 22, 16, 16, 16, 16, 22])
ws.sheet_view.showGridLines = False
ws.page_setup.orientation = "landscape"
ws.page_setup.fitToPage = True
ws.page_setup.fitToWidth = 1
ws.page_setup.fitToHeight = 0
ws.print_title_rows = "1:2"
ws.oddHeader.left.text = "Robinhood Chain DeFi/RWA Research"
ws.oddFooter.left.text = "Compiled 30 Aug 2026  |  Not financial advice"
ws.oddFooter.right.text = "Page &P of &N"

# =============================================================================
# SHEET 1: Official Stock Tokens
# =============================================================================
ws1 = wb.create_sheet("01_Official_Stock_Tokens")

# Compiled from docs.robinhood.com/chain/contracts across multiple pulls 30 Aug 2026
# Type: Stock or ETF. Sector is best-effort grouping.
stocks = [
    # ticker, name, type, sector, contract
    ("AAOI", "Applied Optoelectronics", "Stock", "Tech / Optics", "0x521Cf887E6531c6F667b5BC4D896E5d9bfE8EB2E"),
    ("AAPL", "Apple", "Stock", "Megacap Tech", "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9"),
    ("ABCL", "Abcellera Biologics", "Stock", "Biotech", "0x3139D77Ace0cbAA5bDfD38bD1F1911a794AF0B0e"),
    ("ADBE", "Adobe", "Stock", "Software", "0x232B8ed6377BE97813853B0Ac104c4Cda8378d1B"),
    ("AEHR", "Aehr Test Systems", "Stock", "Semis / Test", "0x5F604fBA1162193A4388A5DFa56F556f3E133cC2"),
    ("AEIS", "Advanced Energy", "Stock", "Industrials / Power", "0xfAf9cb261B5FCC1f404Bb10CD39C5c6C1974E612"),
    ("ALAB", "Astera Labs", "Stock", "Semis", "0x748c32c3ca24eDf31ea597Db1F3d330a7a6DA3Dc"),
    ("AMAT", "Applied Materials", "Stock", "Semis Equipment", "0x36046893810a7E7fCE501229d57dc3FC8c8716d0"),
    ("AMBA", "Ambarella", "Stock", "Semis", "0x99D9D8663545151603863C5AcbD6FC3218899009"),
    ("AMC", "AMC Entertainment", "Stock", "Consumer / Meme-equity", "0x05a3d1Cd21d0C88145E82600E62e7E496e0F222B"),
    ("AMD", "AMD", "Stock", "Semis", "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC"),
    ("AMKR", "Amkor Technology", "Stock", "Semis / OSAT", "0xDd356AA38F40A7b7076755aC854B6FBb1F0D305B"),
    ("AMZN", "Amazon", "Stock", "Megacap Tech", "0x12f190a9F9d7D37a250758b26824B97CE941bF54"),
    ("ANET", "Arista Networks", "Stock", "Networking", "0x28bABD556b60E53663B8615036479a29c2CDd1Bf"),
    ("APLD", "Applied Digital", "Stock", "Crypto Infra / HPC", "0xb8DBf92F9741c9ac1c32115E78581f23509916FD"),
    ("APP", "AppLovin", "Stock", "Adtech", "0xA249BAF1063Af884807C1E1400AEf7784836917E"),
    ("ASML", "ASML Holding", "Stock", "Semis Equipment", "0x47F93d52cBeC7C6D2CfC080e154002370a60dAEA"),
    ("ASTS", "AST SpaceMobile", "Stock", "Satellite / Space", "0x1AF6446f07eb1d97c546AFC8c9544cBDF3AD5137"),
    ("AUR", "Aurora Innovation", "Stock", "Autonomy", "0x373C06c4f7BDe527D7Dae4BA169E42b55E393CeD"),
    ("AVAV", "AeroVironment", "Stock", "Defense / Drones", "0xF6290b5e7C26502e2dA514C31509849718EA76A5"),
    ("AVGO", "Broadcom", "Stock", "Semis", "0x156E175DD063a8cE274C50654eF40e0032b3fbcF"),
    ("AXON", "Axon", "Stock", "Defense / Public safety", "0xC27dBD474aF5181c5A8777903690D8D262D12648"),
    ("AXTI", "AXT", "Stock", "Materials / Semis", "0x141eEa040c2250eEc0314e336975e81f85f6585e"),
    ("BA", "Boeing", "Stock", "Aerospace", "0x4D21483a44Bf67a86b77E3dA301411880797D452"),
    ("BABA", "Alibaba", "Stock", "China Tech", "0xad25Ac6C84D497db898fa1E8387bf6Af3532a1c4"),
    ("BB", "BlackBerry", "Stock", "Software / Security", "0x48E39E56aCdbA37b09020C0b734A613C9a2f100A"),
    ("BE", "Bloom Energy", "Stock", "Energy / Fuel cells", "0x822CC93fFD030293E9842c30BBD678F530701867"),
    ("BND", "Vanguard Total Bond Market ETF", "ETF", "Fixed Income", "0x2F62fC9fAbb470C690f141c28340eD832bB27020"),
    ("BULL", "Webull", "Stock", "Fintech / Brokerage", "0xceF9027c7d6985b85f0BA431125073529A947A68"),
    ("CBRS", "Cerebras Systems", "Stock", "AI Hardware", "0x5c90450Bbb4273D7b2f17CF6917AEB237A569679"),
    ("CCL", "Carnival", "Stock", "Consumer / Travel", "0x9651342CeA770aE9a2969Ba2A52611523146aef9"),
    ("CEG", "Constellation Energy", "Stock", "Power / Nuclear", "0xaE517A2903E68bd929Dfd15be875F8369D53e94a"),
    ("CELH", "Celsius Holdings", "Stock", "Consumer", "0x8cF07C5A878945185d327aAa6e33FAa95F95e7bF"),
    ("CIEN", "Ciena", "Stock", "Networking", "0x44f6D488021f8233B9416294d1FE9b1fEe28382d"),
    ("CLOV", "Clover Health", "Stock", "Healthcare", "0x62200915e7DEab1eC7f79fb246daDbB80eACdDd0"),
    ("CLS", "Celestica", "Stock", "EMS / AI infra", "0xBf449977089c718C004a66C554B26B94ef3Ad4De"),
    ("CLSK", "CleanSpark", "Stock", "Bitcoin Mining", "0xcBB95BBF36099d34dA091dc6Fa6F49EfA257Cee3"),
    ("COHR", "Coherent", "Stock", "Optics / Photonics", "0x92F9F459F1a9a5AD266b182BE7Bffd1C6c666894"),
    ("COIN", "Coinbase", "Stock", "Crypto Equity", "0x6330D8C3178a418788dF01a47479c0ce7CCF450b"),
    ("COST", "Costco", "Stock", "Consumer Staples", "0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2"),
    ("CRCL", "Circle Internet Group", "Stock", "Crypto Equity / Stablecoins", "0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5"),
    ("CRDO", "Credo Technology", "Stock", "Semis / Connectivity", "0x4D67253bc223e6b0e104F1084c1fb2b669dDC41b"),
    ("CRM", "Salesforce", "Stock", "Software", "0xd95B44124e475743a7589e68F3D74008A5536D44"),
    ("CRWD", "CrowdStrike", "Stock", "Cybersecurity", "0xea72Ecca2d0f6bFA1394DBBCff85b52CD4233931"),
    ("CRWV", "CoreWeave", "Stock", "AI Cloud / GPU", "0x5f10A1C971B69e47e059e1dC91901B59b3fB49C3"),
    ("CSCO", "Cisco Systems", "Stock", "Networking", "0xF543967EEBB6f1917992eF0E68De63ab07a5a0dA"),
    ("CTSH", "Cognizant", "Stock", "IT Services", "0x63D5a3b6939a33f1e75d8Bcd85759858239600DB"),
    ("CVNA", "Carvana", "Stock", "Consumer / Auto", "0xa4f319104089FE321dc8093C6E707d4fE190A988"),
    ("DDOG", "Datadog", "Stock", "Software / Observability", "0x27c99fBde9D0d2AA4f4Bfb4943f237843DdF6958"),
    ("DELL", "Dell Technologies", "Stock", "Hardware / AI servers", "0x941AE714EC6D8130c7B75d67160Ca08f1e7d11Dd"),
    ("DJT", "Trump Media & Technology Group", "Stock", "Media / Political", "0x1D11f0496982706C5e14A514D4E79F2e6BdE4516"),
    ("DOCN", "DigitalOcean", "Stock", "Cloud", "0xc02f12B9fe9E707079EC0d546f3050d3F6C1F8bD"),
    ("ELF", "e.l.f. Beauty", "Stock", "Consumer", "0x39EC44Bee4F6A116c6F9B8De566848a985C53C60"),
    ("EWT", "iShares MSCI Taiwan Capped ETF", "ETF", "Country / Semis", "0x1c690498150252222C275A5CEd69d3A6b1f52D5E"),
    ("EWY", "iShares MSCI South Korea ETF", "ETF", "Country", "0x7f0aBeF0C07280F82c6a08ead09dEd6BAE2C13Fc"),
    ("F", "Ford Motor", "Stock", "Auto", "0x25C288E6D899b9BC30160965aD9644c67e73bE0C"),
    ("FICO", "Fair Isaac", "Stock", "Software / Credit", "0xa48F22A46C0F1C46CA7D111CB6c137c271987180"),
    ("FIG", "Figma", "Stock", "Software / Design", "0x41F4267525a8AFf329540eF24fD83d9044758B33"),
    ("FISV", "Fiserv", "Stock", "Fintech", "0x9ECe29A4A2397C0a35fb5fA8EE2b9509130a98cc"),
    ("FIX", "Comfort Systems", "Stock", "Industrials", "0x93Dbb1d2Dc5D63F4abACFF30485273f538Df68Ac"),
    ("FLNC", "Fluence Energy", "Stock", "Energy Storage", "0x282e87451E10fA6679BC7D76C69BE44cD3fC777C"),
    ("FLY", "Firefly Aerospace", "Stock", "Space", "0x03BC731Ffb162cdd7B98D3C6542bFC291126075d"),
    ("FTNT", "Fortinet", "Stock", "Cybersecurity", "0x3FB8976980d486084b2eb4a404BD12e72823958f"),
    ("FUTU", "Futu Holdings", "Stock", "Fintech / Brokerage", "0xeB30663bDFf0622Ef4e4E5cBb4E975F19f33f51D"),
    ("GE", "General Electric", "Stock", "Industrials", "0x63b814DDBd6BF339f25Fed8c36158a008D5B373e"),
    ("GEV", "GE Vernova", "Stock", "Power / Energy", "0x94B8AAE43A1cCc08Aa64B7D1F29b4D920aF4a0C9"),
    ("GLD", "SPDR Gold Shares", "ETF", "Commodities / Gold", "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e"),
    ("GLW", "Corning", "Stock", "Materials / Optics", "0x7c04E6A3368F2A1DE3874f0e80d2e0A1a9915da6"),
    ("GLXY", "Galaxy Digital", "Stock", "Crypto Equity", "0x2D427692E928fa156ec22acfaBaFA0447C5805B7"),
    ("GME", "GameStop", "Stock", "Consumer / Meme-equity", "0x1b0E319c6A659F002271B69dB8A7df2F911c153E"),
    ("GOOGL", "Alphabet Class A", "Stock", "Megacap Tech", "0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3"),
    ("HII", "Huntington Ingalls", "Stock", "Defense / Shipbuilding", "0xEB61c0Ed490A367d4E3631cCf8a74B3bfc7E775D"),
    ("HIMS", "Hims & Hers Health", "Stock", "Healthcare / Consumer", "0xCceE82fE024c36fA15E1005edE3E9e4787e23D09"),
    ("HPE", "Hewlett Packard Enterprise", "Stock", "Hardware / AI servers", "0x59dd09d4900C2E4B5F75b7c0d4E6796fcc234Cb1"),
    ("HWM", "Howmet Aerospace", "Stock", "Aerospace", "0xAEa445c5F3DB1a462998ccC422A875A361ee5d99"),
    ("IBM", "IBM", "Stock", "Tech / Services", "0x980dcf6766FA79f5Cf0c4AAdb3ab477ff15a9619"),
    ("IBRX", "ImmunityBio", "Stock", "Biotech", "0x7c148F74ac7445D1F28366b7FcDC6792a9Fcd0Cf"),
    ("INDA", "iShares MSCI India ETF", "ETF", "Country", "0xACEF2e09adb47aD6aBeBAD9fF06689E60615C2B6"),
    ("INFQ", "Infleqtion", "Stock", "Quantum", "0xB853bC83a753342a4f8320ea680b4B1E84118D21"),
    ("INOD", "Innodata", "Stock", "AI Data / Services", "0xf1953DAB6FaD537488d5A022361FfAa8B4c95eC6"),
    ("INTC", "Intel", "Stock", "Semis", "0xc72b96e0E48ecd4DC75E1e45396e26300BC39681"),
    ("INTU", "Intuit", "Stock", "Software", "0x56d23beE5f41A7120170b0c603Dae30128e460e9"),
    ("IONQ", "IonQ", "Stock", "Quantum", "0x558378E000D634A36593E338eBacdd6207640EfE"),
    ("IREN", "IREN Limited", "Stock", "Bitcoin Mining / HPC", "0xF0AB0c93bE6F41369d302e55db1A96b3c430212D"),
    ("JBL", "Jabil", "Stock", "EMS", "0xEAf2512dFC1bEAc608F8794B3793CD4E02894Aa6"),
    ("JNJ", "Johnson & Johnson", "Stock", "Healthcare", "0x03DfbBE0AC4E7bCDaFd08eD41A400326B77D8c80"),
    ("JOBY", "Joby Aviation", "Stock", "eVTOL / Aviation", "0xb334C5cE741B80B5B671F47F5C269Cb193fe8E24"),
    ("KLAC", "KLA", "Stock", "Semis Equipment", "0x96b933C74eCB4A0926b9210cef7b743EF46be2E9"),
    ("KSS", "Kohl's", "Stock", "Retail", "0x12e3c047bf9AeCAF9dDC98c05C31BFD1dd043993"),
    ("KTOS", "Kratos Defense", "Stock", "Defense", "0x7FD06a4d81cCfA3F351394E144d5191874C31313"),
    ("LHX", "L3Harris", "Stock", "Defense", "0x48d60243c66437c6ac3c2495Be94747aEd5Dfe25"),
    ("LITE", "Lumentum", "Stock", "Optics", "0x8eF20885F94e3D9bc7eB3080279188Bd5ED7c08C"),
    ("LLY", "Eli Lilly", "Stock", "Pharma", "0x8005d266423c7ea827372c9c864491e5786600ea"),
    ("LMT", "Lockheed Martin", "Stock", "Defense", "0x329fcACEb9AD6F9580DD5F643fed0646900D043c"),
    ("LRCX", "Lam Research", "Stock", "Semis Equipment", "0x57b0030166DB0C31690d1A5aA167e2e26e2C29a4"),
    ("LULU", "Lululemon", "Stock", "Consumer", "0x4e62068525Ab11FE768e29dfD00ef909B9803016"),
    ("LUNR", "Intuitive Machines", "Stock", "Space", "0xa5D4968421bA94814Be3B136b15cf422101aC1a3"),
    ("MDB", "MongoDB", "Stock", "Software", "0xDdf2266b79abf0B48898959B0ed6E6adf512be74"),
    ("META", "Meta Platforms", "Stock", "Megacap Tech", "0xc0D6457C16Cc70d6790Dd43521C899C87ce02f35"),
    ("MOD", "Modine", "Stock", "Industrials / Thermal", "0xc6Cbad1016b38B797610c25E1dc7D95988B1f362"),
    ("MPWR", "Monolithic Power Systems", "Stock", "Semis / Power", "0x52D50D0280AD1054b43f052bD70a49a212A1b128"),
    ("MRNA", "Moderna", "Stock", "Biotech", "0x43B07D15cE533bEc5476d70C22a78a1B2B662155"),
    ("MRVL", "Marvell Technology", "Stock", "Semis", "0x62fd0668e10D8B72339BE2DCF7643001688ff13B"),
    ("MSFT", "Microsoft", "Stock", "Megacap Tech", "0xe93237C50D904957Cf27E7B1133b510C669c2e74"),
    ("MSTR", "Strategy Inc. (MicroStrategy)", "Stock", "Bitcoin Equity", "0xec262a75e413fAfD0dF80480274532C79D42da09"),
    ("MTSI", "MACOM", "Stock", "Semis / RF", "0xC93f4d80e268AB922e871bd169156C3CC41894e6"),
    ("MU", "Micron Technology", "Stock", "Semis / Memory", "0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD"),
    ("MXL", "MaxLinear", "Stock", "Semis", "0x48961813349333209994750ffA89b3c5C22eC969"),
    ("NAVN", "Navan", "Stock", "Software / Travel", "0xf7181b63Fdb858558A74ba96BC42732684cd7965"),
    ("NBIS", "Nebius Group", "Stock", "AI Cloud", "0x9D9c6684F596F66a64C030B93A886D51Fd4D7931"),
    ("NET", "Cloudflare", "Stock", "Internet Infra", "0x116F00968269B7bfbaD4109cE591d6E74c0601d4"),
    ("NFLX", "Netflix", "Stock", "Media", "0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8"),
    ("NNE", "Nano Nuclear Energy", "Stock", "Nuclear", "0xBEF75684C43c4ea7BD18Dd532a2244674Ee8b926"),
    ("NOW", "ServiceNow", "Stock", "Software", "0x0C3260aF4B8f13a69c4c2dFb84fD667890CDFa14"),
    ("NU", "Nu Holdings", "Stock", "Fintech / LatAm", "0x408c14038a04f7bD235329E26d2bf569ee20e250"),
    ("NVDA", "NVIDIA", "Stock", "Semis / AI", "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC"),
    ("NVTS", "Navitas Semiconductor", "Stock", "Semis / Power", "0xbE6702d7b70315376dC48a3293f24f0982F86386"),
    ("OKLO", "Oklo", "Stock", "Nuclear", "0x8B2f88497f15A18E9D4FFa1A8fFB8538399aE774"),
    ("ON", "ON Semiconductor", "Stock", "Semis", "0xbBD09F72b025360FeE5C928053Dca6248d35be54"),
    ("ONTO", "Onto Innovation", "Stock", "Semis Equipment", "0x8ff63eAeEe3fE54Ba450c4F5538064Ec5A893Aef"),
    ("ORCL", "Oracle", "Stock", "Software / Cloud", "0xb0992820E760d836549ba69BC7598b4af75dEE03"),
    ("OUST", "Ouster", "Stock", "Lidar / Autonomy", "0x40E7a279850e443f582059ae5dC1c3b6563E6395"),
    ("P", "Everpure (P ticker)", "Stock", "Other", "0x1Cdad396DB64BDa184d5182A97Dd9B3C62100b7D"),
    ("PANW", "Palo Alto Networks", "Stock", "Cybersecurity", "0xB039597eD45CBa7B6E2fb9E8BE51802969CEe5Be"),
    ("PATH", "UiPath", "Stock", "Software / Automation", "0xfb2664f07B6Aadd29ea7a59D8859b1AeB8645cDa"),
    ("PENG", "Penguin Solutions", "Stock", "Memory / HPC", "0x9b23573b156B52565012F5cE02CDF60AFBaa70Be"),
    ("PFE", "Pfizer", "Stock", "Pharma", "0x7066A64c24e4206CD62E83bf198c1E7EB361F51e"),
    ("PL", "Planet Labs", "Stock", "Satellite / Space", "0xAA4d64474c172010aB57719cb9951E6142a100d3"),
    ("PLTR", "Palantir Technologies", "Stock", "Software / Defense AI", "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A"),
    ("POET", "POET Technologies", "Stock", "Photonics", "0xcf6B2D875361be807EAfa57458c80f28521F9333"),
    ("POWL", "Powell Industries", "Stock", "Electrical equipment", "0x237c16D66590F67B886d978ACD362EAeaD8B18c7"),
    ("PR", "Permian Resources", "Stock", "Energy / E&P", "0x4189F0c66EBBB0bfeF1C31f763131361EF32f77C"),
    ("PWR", "Quanta Services", "Stock", "Infrastructure", "0x9Ab02Ead789b6903c3c44d0ED32F9c707CDF12FD"),
    ("QBTS", "D-Wave Quantum", "Stock", "Quantum", "0xC583c60aeF9Dc401Da72cEC1B404743a93cea1Cc"),
    ("QCOM", "Qualcomm", "Stock", "Semis", "0x0f17206447090e464C277571124dD2688E48AEA9"),
    ("QQQ", "Invesco QQQ Trust", "ETF", "Index / Nasdaq-100", "0xD5f3879160bc7c32ebb4dC785F8a4F505888de68"),
    ("QUBT", "Quantum Computing Inc.", "Stock", "Quantum", "0x59818904ab4cE163b3cE4FfB64f2D6Ca02c434B4"),
    ("RBLX", "Roblox", "Stock", "Gaming", "0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8"),
    ("RCAT", "Red Cat", "Stock", "Drones / Defense", "0xFDE6b5d9BB419B10C23268c74e369AbFF39C0460"),
    ("RDDT", "Reddit", "Stock", "Social / Media", "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C"),
    ("RDW", "Redwire", "Stock", "Space", "0x92Ef19E82bD8fF36661DE838D5eaE7e5CEF0EfFE"),
    ("RGTI", "Rigetti Computing", "Stock", "Quantum", "0x284358abc07F9359f19f4b5b4aC91901Be2597Ba"),
    ("RIVN", "Rivian Automotive", "Stock", "EV", "0xB1BF26c1D20ff267A4f93550d1E0d06ac40a114B"),
    ("RKLB", "Rocket Lab", "Stock", "Space", "0x3b14C39E89D60D627b42a1A4CA45b5bb45Fc12e2"),
    ("RUN", "Sunrun", "Stock", "Solar", "0x756Bc80af765C82da966a788858d65aDF14f3793"),
    ("SATS", "EchoStar", "Stock", "Satellite", "0x95052ddcd5DC25641657424A8Cf04834997E1730"),
    ("SCHD", "Schwab US Dividend Equity ETF", "ETF", "Equity Income", "0xd63ABB2C13d7a8421a8017a712802053568e3C1D"),
    ("SGOV", "iShares 0-3 Month Treasury Bond ETF", "ETF", "T-Bills / Cash", "0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5"),
    ("SHOP", "Shopify", "Stock", "E-commerce / Software", "0xF53F66751B1Eff985311b693531E3290F600c410"),
    ("SHY", "iShares 1-3 Year Treasury Bond ETF", "ETF", "Fixed Income", "0xBE274710Bf3d9567e1B290eF6a5F9f90CA016FD8"),
    ("SIMO", "Silicon Motion", "Stock", "Semis / Controllers", "0x77E655E37F4d913fB9540e0d541D824171a60e81"),
    ("SKHY", "SK hynix ADS", "Stock", "Semis / Memory", "0x84CAb63bc87912E71ad199ff14A0bA45de68FeF8"),
    ("SLS", "SELLAS Life Sciences", "Stock", "Biotech", "0x285b231728c7E4333799183DF1094d775246a535"),
    ("SLV", "iShares Silver Trust", "ETF", "Commodities / Silver", "0x411eFb0E7f985935DAec3D4C3ebaEa0d0AD7D89f"),
    ("SMCI", "Super Micro Computer", "Stock", "AI Servers", "0xc01aA1fECeC0605b13bc84874ff7256C0f5F562a"),
    ("SMH", "VanEck Semiconductor ETF", "ETF", "Semis Index", "0x072f979c2CAc8e1391B0162a87Fee094bF8744a0"),
    ("SMR", "NuScale Power", "Stock", "Nuclear / SMR", "0x1Eebee7F74517e0279dFb09d25B0407bEEc3FDd6"),
    ("SNAP", "Snap", "Stock", "Social", "0xF6589F11Bc40b669e584073F428B05562F568733"),
    ("SNDK", "Sandisk", "Stock", "Memory / Storage", "0xB90A19fF0Af67f7779afF50A882A9CfF42446400"),
    ("SNOW", "Snowflake", "Stock", "Software / Data", "0xBa0CAB75495255d0cB58E22B648bFED4ECD1F47E"),
    ("SOFI", "SoFi Technologies", "Stock", "Fintech", "0x98E75885157C80992A8D41b696D8c9C6Fb30A926"),
    ("SOUN", "SoundHound AI", "Stock", "AI Voice", "0x6E3Dfd9f7e1649BaA14D25cac18C94d62dB10A54"),
    ("SOXX", "iShares Semiconductor ETF", "ETF", "Semis Index", "0x75742c18BC1f1C5c5f448f4C9D9C6F66dafAAa38"),
    ("SPCX", "Space Exploration Technologies (SpaceX) Class A", "Stock", "Private / Space (tokenized)", "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa"),
    ("SPMO", "Invesco S&P 500 Momentum ETF", "ETF", "Factor / Index", "0xAd622320e520de39e72d41EF07438C3Fd3354875"),
    ("SPY", "SPDR S&P 500 ETF Trust", "ETF", "Index / S&P 500", "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C"),
    ("TE", "T1 Energy", "Stock", "Energy", "0xb1969f6604CA1AE7a2cD3F1827876e914594CA2D"),
    ("TEAM", "Atlassian", "Stock", "Software", "0x5B97476b922F3305131B8f0B9D333172E87f4aaE"),
    ("TEM", "Tempus AI", "Stock", "Healthcare AI", "0xB1CC0EC7Db69Cf43539119814df40071b9d61793"),
    ("TER", "Teradyne", "Stock", "Semis Test / Robotics", "0x2778C5024D5cA2CdB0f8eAD671ffc69963AdCD9C"),
    ("TSEM", "Tower Semiconductor", "Stock", "Semis Foundry", "0x89776d4Cd68193597A2fC132cfaC1fDe36CCeA8a"),
    ("TSLA", "Tesla", "Stock", "EV / Megacap", "0x322F0929c4625eD5bAd873c95208D54E1c003b2d"),
    ("TSM", "TSMC", "Stock", "Semis Foundry", "0x58FfE4a942d3885bAa22D7520691F611EF09e7AA"),
    ("TTD", "The Trade Desk", "Stock", "Adtech", "0x0b5fb4031cae9163db10B169Ee72685F0EdC8545"),
    ("TTWO", "Take-Two Interactive", "Stock", "Gaming", "0x5e81213613b6B86EaB4c6c50d718d34359459786"),
    ("UMC", "United Microelectronics", "Stock", "Semis Foundry", "0x0E6e67Ba88e7b5d9B67636A215c76779B948dE79"),
    ("UNH", "UnitedHealth", "Stock", "Healthcare", "0xcF364ea52787e289De6F32077834056E3E70D6A8"),
    ("UPS", "UPS", "Stock", "Logistics", "0xf23250dac154D05Bb671CB0d0eBEf3c635c79CE2"),
    ("USAR", "USA Rare Earth", "Stock", "Materials / Critical minerals", "0xd917B029C761D264c6A312BBbcDA868658eF86a6"),
    ("USO", "United States Oil Fund", "ETF", "Commodities / Oil", "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344"),
    ("VICR", "Vicor", "Stock", "Power electronics", "0x6006ed4B2F94110851ff7509D97D034f0EeD9226"),
    ("VRT", "Vertiv", "Stock", "Data center infra", "0xFA78C12E6488814A0262E4e802749a4a737d5fB7"),
    ("VSAT", "Viasat", "Stock", "Satellite", "0x26dCbfb34FC83CAbD6990f449674efDc6097fF85"),
    ("VST", "Vistra", "Stock", "Power", "0x561e2a49212b7cCF47f2744Ccb83e200722fADBc"),
    ("VTI", "Vanguard Total Stock Market ETF", "ETF", "Index / Total market", "0x0594134DF3f171a354D9C85eBD65b7A6148F6D09"),
    ("WDAY", "Workday", "Stock", "Software", "0x82DA4646242e1D962e96e932269Dc644c94a9CaA"),
    ("WDC", "Western Digital", "Stock", "Storage", "0xF52597345A8Edf418bc4071b4a35112472277D3e"),
    ("WULF", "TeraWulf", "Stock", "Bitcoin Mining", "0x348Be1A8663f15edDe5CDf8A96BB69078f7aB6Fd"),
    ("WYFI", "WhiteFiber", "Stock", "Other", "0x9e7ABD3C9139D14E4c86DcE0e455AAB7A0C2FB3E"),
    ("XLK", "Technology Select Sector SPDR ETF", "ETF", "Tech Sector", "0x15Cd20759CE7F3285c29A319dE2D1A2e098c6f43"),
    ("XNDU", "Xanadu Quantum", "Stock", "Quantum", "0xA8eB3BCcbf2017eE7CBfb652eB51CF2E1B153289"),
    ("XOM", "ExxonMobil", "Stock", "Energy", "0xf9B46d3D1B22199D4D1025a9cEDB540A33F1a2d5"),
    ("ZM", "Zoom", "Stock", "Software", "0x44c4F142009036cF477eD2d09932051843137CF1"),
    ("ZS", "Zscaler", "Stock", "Cybersecurity", "0x7dc013eB55e436f30d7ED1AFE4E36d6e45e3c3f7"),
    # Core assets
    ("WETH", "Wrapped Ether (gas / pair asset)", "Core", "Native / Infra", "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"),
    ("USDG", "Global Dollar (Paxos / GDN)", "Stablecoin", "Cash / Stable", "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168"),
]

title_block(
    ws1,
    "Official Robinhood Stock Tokens & Core Assets",
    f"Extracted from docs.robinhood.com/chain/contracts on 30 Aug 2026  |  {len([s for s in stocks if s[2] in ('Stock','ETF')])} instruments listed here  |  RH announced 190+ on 13 Aug — always re-check the live registry  |  VERIFY THE ADDRESS, NOT THE TICKER",
    6,
)

headers1 = ["#", "Ticker", "Name", "Type", "Sector / Theme", "Canonical Contract (Robinhood Chain)"]
header_row(ws1, 3, headers1, NAVY)

for i, (tkr, name, typ, sector, ca) in enumerate(stocks):
    r = 4 + i
    ws1.cell(r, 1, i + 1)
    ws1.cell(r, 2, tkr)
    ws1.cell(r, 3, name)
    ws1.cell(r, 4, typ)
    ws1.cell(r, 5, sector)
    ws1.cell(r, 6, ca)
    bg = None
    if typ == "ETF":
        bg = "E3F2FD"
    elif typ == "Core":
        bg = "FFF3E0"
    elif typ == "Stablecoin":
        bg = "E8F5E9"
    style_data_row(ws1, r, 6, alt=i % 2 == 1, bg=bg)
    ws1.cell(r, 2).font = font(size=10, bold=True)
    ws1.cell(r, 6).font = Font(name="Consolas", size=9)
    ws1.row_dimensions[r].height = 18

last = 3 + len(stocks)
ws1.auto_filter.ref = f"A3:F{last + 1}"
ws1.freeze_panes = "A4"

# note row
note_r = last + 2
ws1.merge_cells(start_row=note_r, start_column=1, end_row=note_r, end_column=6)
ws1.cell(note_r, 1, "NOTES: (1) Official live registry: https://docs.robinhood.com/chain/contracts — table is generated from the on-chain asset registry and can add tickers. (2) A token with the same ticker at any OTHER address is not a Robinhood Stock Token. (3) Cross-check: hoodl2.com/stocks. (4) Top by on-chain value per RWA.xyz ~30 Aug: NVDA ~$9.3M / ~79k holders, SPY ~$5.8M, SPCX ~$4.9M, AAPL ~$2.2M, TSLA ~$1.9M. (5) SpaceX / private-company tokens have been legally contested (OpenAI publicly disavowed an earlier product). (6) Not available to US persons.")
ws1.cell(note_r, 1).font = font(size=9, italic=True)
ws1.cell(note_r, 1).alignment = Alignment(wrap_text=True, vertical="top")
ws1.cell(note_r, 1).fill = fill(AMBER)
ws1.row_dimensions[note_r].height = 60

set_widths(ws1, [6, 12, 48, 12, 28, 52])
ws1.sheet_view.showGridLines = False
ws1.page_setup.orientation = "landscape"
ws1.page_setup.fitToPage = True
ws1.page_setup.fitToWidth = 1
ws1.page_setup.fitToHeight = 0
ws1.print_title_rows = "1:3"
ws1.oddFooter.left.text = "Official Stock Tokens  |  Verify CA on docs.robinhood.com"
ws1.oddFooter.right.text = "Page &P of &N"

# =============================================================================
# SHEET 2: DeFi Protocol Tokens
# =============================================================================
ws2 = wb.create_sheet("02_DeFi_Protocol_Tokens")
title_block(
    ws2,
    "Native DeFi / RWA Protocol Tokens on Robinhood Chain",
    "User examples first, then adjacent protocols  |  Mcaps are point-in-time ~30 Aug 2026 and extremely volatile  |  Always verify CA on Blockscout",
    10,
)

headers2 = [
    "Token", "Project", "What it is", "RWA hook",
    "Status", "Approx mcap / FDV (30 Aug)", "Supply notes",
    "Canonical CA (chain 4663)", "Site / X", "Watch-outs",
]
header_row(ws2, 3, headers2, NAVY)

defi = [
    ("$PONS", "Pons", "Dominant token launchpad on RH Chain. Fixed-supply launches, locked Uni v3/v4 LP, creator fee split. Called 'pump.fun of Robinhood'.",
     "V2 quote assets include USDG and official stock tokens (NVDA, AAPL, TSLA, etc.). Stock-quoted memes settle against RWAs.",
     "LIVE — launched days after 1 Jul mainnet",
     "~$210–270M mcap (ripping 30 Aug); 24h vol multi-million",
     "1B fixed. Protocol buyback/burn from launchpad fees (~80% of protocol share). Multiple factory versions.",
     "0x39dBED3a2bd333467115dE45665cC57F813C4571",
     "pons.family / ponsfamily.com",
     "FAKE CA exists: 0xe306c19C72131B0a8f311648fa63FE8CeDf44571 (92 holders). Active factory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB."),
    ("$ARROW / Arrow Finance", "Arrow Finance (CDP)", "Collateralized-debt protocol: deposit stock tokens / ETFs / WETH / USDG, mint aUSD. Separate from the Arrow launchpad.",
     "Stock tokens as CDP collateral. aUSD is the stable minted against RWAs.",
     "LIVE — TVL still small pending broader listings / audit",
     "TVL cited ~$58k at one snapshot (conservative caps); token mcap reports vary ~$8M",
     "See project docs. aUSD: 0x4f11d7603D1B0D0f021Db552D8A6d88d7fa38ecf",
     "0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03",
     "arrows.finance / project docs",
     "NAME COLLISION: launcharrow.xyz and arrowapp.space are a different Solana→RH token launcher. $ARROWS options proto is a third thing (0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e)."),
    ("$MANCER", "Mancer", "DEX aggregator + order layer ('Jupiter of Robinhood Chain'). Self-custodial swaps and signed orders. Building Mancer Shield (private execution).",
     "Routes stock-token trades across venues. Tied to 5,000 Chain Mancers NFTs that claim a share of routed flow.",
     "LIVE — token + NFT mid-Aug 2026",
     "FDV ~$11–13M; 24h vol ~$1–2M",
     "2.5B supply. Each Chain Mancer backed by 500k MANCER. 3,750 NFTs burned-for-allowlist, 1,250 back Anvil LP.",
     "0xc72f232a6869e6cf34dc06129affd07f8a2a246a",
     "mancer.xyz  |  @MancerXYZ  |  chainmancer.xyz",
     "Built by Clutch Markets + Michael Hirsch (Blockhash). Anvil AMM links NFT ↔ token."),
    ("$EARN", "EARN Protocol (earnonhood.com)", "Yield layer for tokenized stocks: Uni v4 strategy vaults (NVDA/USDG, GME/USDG) + permissionless omnipools. Stake $EARN to receive buyback distributions.",
     "Vaults deploy official stock tokens into active markets; swap fees = yield. Omnipools can mix stocks + memes + USDG.",
     "LIVE",
     "~$2.5–3.1M FDV",
     "Protocol takes 10% of omnipool swap fees; 90% to LPs.",
     "0xa3b6aee90017b72c0812dc1e013de70eb2917ba3",
     "earnonhood.com  |  @EARNONHOOD",
     "NOT the same as official Robinhood Earn (Morpho USDG product, no token). Two different things share the word 'Earn'."),
    ("LONG / long.xyz", "LONG", "RWA-native launchpad: new tokens launch paired against official stock tokens. Pioneer of the meme×stock pair (AI/NVDA on 14 Jul).",
     "Core product IS the RWA pair. Dune: majority of stock-token pair volume on the chain has flowed through LONG pools at points. $AI/NVDA alone did ~$86M RWA-side volume.",
     "LIVE since 14 Jul 2026",
     "Protocol token not the main asset — the pairs are. LONG pools have held meaningful fractions of circulating stock-token supply.",
     "Factory / airlock deployments documented on Dune (TickerAirlockFactory).",
     "See app.long.xyz (verify factory on Dune dashboard)",
     "app.long.xyz  |  @longdotxyz",
     "Different from Longbow ($BOW), Longshot (uselongshot.xyz), and Hood Long (leveraged UI)."),
    ("LONGSHOT", "Longshot", "Multi-chain launch protocol. Trading fees fund one fixed directional Hyperliquid perp + holder rewards + protocol. Live on RH, Base, Solana, BNB, HyperEVM.",
     "Can launch against tokenized stocks on RH. Separate design from long.xyz pairs.",
     "LIVE on RH Chain",
     "Protocol-level; individual launched tokens vary",
     "Creator picks underlying, direction, leverage at launch — immutable.",
     "0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 (verify on Blockscout)",
     "uselongshot.xyz  |  @uselongshot",
     "Name-adjacent to long.xyz. Confirm which product you mean before sizing a bag."),
    ("$BOW", "Longbow", "Credit layer for the chain, built on Morpho Blue. Borrow USDG against tokenized stocks, RWAs, crypto, memes, NFTs. Isolated markets, Chainlink + Uni TWAP oracles. Zero-fee flash loans. $BOW stakers earn USDG from protocol revenue + borrow rebates.",
     "First on-chain leverage against official stock tokens. New listings include MRNA, RIVN as collateral. Pair often quoted vs SPY.",
     "LIVE — Aug 2026",
     "~$4–5M mcap; 1B supply",
     "Fee split (lending): 35% treasury, 30% USDG vault, 25% buyback/burn, 10% stakers. Trading fees also recycle.",
     "0x451b42A15100C340CA12F7c66DE06fac5EA2D751",
     "longbow.cash  |  @longbowlend",
     "Do not confuse with bow.fun launchpad or random $BOW memes launched on Bankr (different CA 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3)."),
    ("$QUOTRON", "Quotrons V2", "4,444 ERC-404 'stock terminals'. Burn the liquid token to hardwire an NFT that prints one of 10 official stock tokens from trading fees.",
     "Hardwired terminals earn NVDA, AAPL, TSLA, GME, SPCX, SPY, PLTR, NFLX, RDDT or MSTR. 3% fee: 2% stock rewards, 0.6375% locked LP, 0.2125% STONKBROKER buy/burn, 0.15% creator.",
     "LIVE — V2 collection + market",
     "Liquid mcap ~$13M / FDV ~$33M at one 29 Aug snapshot; ~60% supply burned into lit terminals",
     "4,444 units. Burn is permanent — lit terminals cannot re-enter float.",
     "0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F",
     "quotrons.cash",
     "Reward epochs / stock venue activity has lagged the burn narrative in some writeups — read current dashboard before assuming yield."),
    ("$STONKBROKER", "StonkBrokers (Clutch Markets)", "4,444 ERC-6551 pixel-broker NFTs. Each NFT owns a token-bound wallet preloaded with official stock tokens. $STONKBROKER is the ERC-20 used to buy/activate brokers on the Anvil AMM (666,666 tokens per NFT base).",
     "NFT wallets hold and accumulate tokenized stocks. Activation (paid in STONKBROKER, half burned) multiplies reward weight. Incubates MANCER, TickerYard ($YARD), Oakmont ($STRIKE).",
     "LIVE — minted 17 Jul 2026",
     "Token mcap has printed $40–100M range; NFT floor has printed high-single to mid-teens ETH. Very volatile.",
     "Many impostor CAs. Real token: CollectionToken at the CA below.",
     "0xe934e36a439c94017b64a3fece66af12099abf50",
     "stonkbrokers.cash / Clutch Markets",
     "At least four fake contracts share the name. Activation dies on transfer. Not affiliated with Robinhood the company."),
    ("$STATICS", "Statics Protocol", "DEX + basket-token + credit protocol. Fixed STATICS supply, 5,555 Operator NFTs backed by 180k STATICS each plus a compounding ETH reserve. Operators lock to access most of the backing.",
     "Baskets and credit designed around RH assets. Testnet used mock TSLA/PLTR/AMD. Genesis just went live on mainnet (pair ~2 days old as of 30 Aug).",
     "LIVE — Genesis epoch in progress",
     "~$7–9M FDV on a fresh pool (highly unstable)",
     "1B fixed. 800M across six Doppler curves at launch. 5,555 Operators.",
     "0x2d8d6f4a93acd7a916a5a654ec8b690ba3b3eadd",
     "staticsprotocol.com  |  docs.staticsprotocol.com",
     "Brand new. Treat as early-stage. Confirm Genesis addresses vs any leftover testnet addresses (chain 46630)."),
    ("$INDEX", "The Index", "RWA dividend primitive. 3% fee on $INDEX trades buys official stock tokens and auto-distributes them to holders every 15 minutes. Also ships rwa.wtf (levered RWA trading) and Indices (any token can point fees at a stock treasury).",
     "Has distributed >$1M of Stock Tokens to holders. Top-3 stock-token purchaser on the chain at points.",
     "LIVE since early Jul 2026",
     "~$33–36M mcap",
     "1B supply. Eligibility historically tied to holding a minimum (e.g. 10k INDEX).",
     "0x56910d4409f3a0c78c64dd8d0545ff0705389870",
     "theindex.finance  |  rwa.wtf  |  @TheIndexFi",
     "Distributes Stock Tokens, not brokerage shares — no voting/legal ownership."),
    ("$ARROWS", "Arrows Finance (options)", "Options on tokenized stocks: calls/puts on TSLA, NVDA, AAPL, SPY etc. as transferable ERC-1155s. Writer vaults earn premium.",
     "Underlyings are official RH Stock Tokens.",
     "Token + platform launching / live per site",
     "See arrows.finance for live mcap",
     "1B fixed. 80% public liquidity, 12% treasury vest, 3% airdrop to Stock Token EOAs.",
     "0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e (verify)",
     "arrows.finance",
     "Third 'Arrow' on the chain. Confirm product before trading."),
    ("$WOOD", "Sherwood Protocol", "AI-agent capital layer cited in ecosystem roundups.",
     "Agents operating on stock-token rails.",
     "LIVE (verify current status)",
     "Cited ~$9M in one roundup",
     "Confirm on DexScreener / Blockscout",
     "Verify on Blockscout before use",
     "Search Sherwood Protocol RH Chain",
     "Smaller / newer — higher impersonation risk."),
    ("$YARD", "TickerYard", "StonkBrokers-incubated ticker/launch product.",
     "Sits inside the Clutch / StonkBrokers RWA-NFT stack.",
     "Incubating / live",
     "See StonkBrokers ecosystem",
     "—",
     "Verify via StonkBrokers docs",
     "Clutch Markets",
     "Early."),
    ("$STRIKE", "Oakmont Vault", "StonkBrokers-incubated vault product.",
     "Same stack.",
     "Incubating / live",
     "See StonkBrokers ecosystem",
     "—",
     "Verify via StonkBrokers docs",
     "Clutch Markets",
     "Early."),
    ("$HOOD10", "Robinhood10 Index", "Index-style basket token appearing on DexScreener RH rankings.",
     "Basket of chain-native / stock exposure (verify composition on-chain).",
     "LIVE as a traded token",
     "Cited ~$6M in one DexBrief pull",
     "—",
     "Verify on DexScreener / Blockscout",
     "DexScreener RH",
     "Index tokens on this chain are easy to spoof. Read the basket contract."),
    ("$CASHCAT", "Cash Cat", "Flagship chain meme (not a DeFi protocol). Included because it is the liquidity + mindshare benchmark every RWA product trades against, and it sits in HOOD6-style baskets.",
     "Included in some crypto baskets next to stock tokens. Not itself an RWA.",
     "LIVE since first week of mainnet",
     "~$220–240M mcap (30 Aug range)",
     "Noxa launchpad origin. Highest meme volume on chain historically.",
     "0x020bfC650A365f8BB26819deAAbF3E21291018b4",
     "DexScreener / Noxa",
     "Meme. Not DeFi. Listed only as ecosystem context."),
]

for i, row in enumerate(defi):
    r = 4 + i
    for c, val in enumerate(row, 1):
        ws2.cell(r, c, val)
    bg = LIGHT_GOLD if i < 10 else None  # highlight user-example set
    style_data_row(ws2, r, 10, alt=i % 2 == 1, bg=bg)
    ws2.cell(r, 1).font = font(size=10, bold=True)
    ws2.cell(r, 8).font = Font(name="Consolas", size=8)
    ws2.row_dimensions[r].height = 78

ws2.freeze_panes = "A4"
set_widths(ws2, [22, 22, 42, 38, 22, 28, 32, 48, 28, 40])
ws2.sheet_view.showGridLines = False
ws2.page_setup.orientation = "landscape"
ws2.page_setup.fitToPage = True
ws2.page_setup.fitToWidth = 1
ws2.page_setup.fitToHeight = 0
ws2.print_title_rows = "1:3"
ws2.oddFooter.left.text = "DeFi protocol tokens  |  Highlighted rows = user example set"
ws2.oddFooter.right.text = "Page &P of &N"

note_r = 4 + len(defi) + 1
ws2.merge_cells(start_row=note_r, start_column=1, end_row=note_r, end_column=10)
ws2.cell(note_r, 1, "Gold-tinted rows = the names you listed (pons, arrow, mancer, earn, longshot, bow, quotron, stonkbroker, statics) plus INDEX which is the cleanest 'hold token, receive stocks' primitive. Mcaps are 30 Aug snapshots and can move 50%+ in a session.")
ws2.cell(note_r, 1).font = font(size=9, italic=True)
ws2.cell(note_r, 1).fill = fill(AMBER)
ws2.cell(note_r, 1).alignment = Alignment(wrap_text=True)
ws2.row_dimensions[note_r].height = 32

# =============================================================================
# SHEET 3: Hybrids / NFTs
# =============================================================================
ws3 = wb.create_sheet("03_RWA_Hybrids_NFTs")
title_block(
    ws3,
    "RWA Hybrid Tokens & NFT Collections",
    "Projects where the token or NFT is a wrapper, printer, or wallet for official Stock Tokens",
    7,
)
headers3 = ["Project", "Standard", "Supply / size", "How it touches RWAs", "Related token", "CA / collection", "Notes"]
header_row(ws3, 3, headers3, NAVY)
hybrids = [
    ("StonkBrokers", "ERC-721 + ERC-6551 TBA + ERC-20", "4,444 brokers",
     "Each NFT owns a wallet pre-seeded with Stock Tokens (TSLA, AMZN, PLTR, NFLX, AMD, later MSFT/COST/RDDT/META). Fees convert to more stocks. Activation in $STONKBROKER multiplies weight.",
     "$STONKBROKER", "Token 0xe934e36a439c94017b64a3fece66af12099abf50",
     "Minted 17 Jul 2026 by Clutch Markets. Burn-to-mint from prior Clutch collections. Floor has traded like a used car → mid-teens ETH. Activation resets on transfer."),
    ("Quotrons V2", "ERC-404", "4,444 terminals",
     "Burn liquid $QUOTRON to hardwire a terminal assigned to one of 10 stocks. Lit terminals print that stock from the 3% market fee.",
     "$QUOTRON", "0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F",
     "~60% supply already burned in some snapshots. Broker Boost: holding a StonkBroker multiplies hardwired terminal weight 1.25x."),
    ("Chain Mancers", "ERC-721 + ERC-20 backing", "5,000",
     "Does not hold stocks directly. Holds a claim on Mancer aggregator flow, which is the routing layer for stock-token swaps. 1,250 reserved to back $MANCER LP on Anvil.",
     "$MANCER", "See chainmancer.xyz / chainmancers.com",
     "Allowlist earned by burning HOODL / SLOP / Slonk. Free mint for allowlisted wallets."),
    ("Statics Operators", "NFT + ERC-20 backing", "5,555 Operators",
     "Each Operator backed by 180k STATICS + a compounding ETH reserve. Protocol is a DEX/basket/credit stack designed for RH assets.",
     "$STATICS", "0x2d8d6f4a93acd7a916a5a654ec8b690ba3b3eadd",
     "Genesis just launched. Lock Operator to borrow against STATICS backing (up to 95% cited)."),
    ("Vimen baskets", "Basket ERC-20s", "MAG7, AI6, HOOD6 + agentic baskets",
     "Fully backed baskets of official Stock Tokens (MAG7 = AAPL/MSFT/GOOGL/AMZN/META/NVDA/TSLA; AI6 = NVDA/AMD/MU/PLTR/GOOGL/SPCX). Redeem underlying.",
     "Basket tokens (not a single ticker)", "vimen.org",
     "HOOD6 is a crypto basket (CASHCAT, ARROW, HOODRAT, VIBECAT, VEX, VIRTUAL) — not stocks."),
    ("ATLAS", "Index factory", "User-created indices",
     "Permissionless factory to bundle official Stock Tokens into redeemable indices. Mint with ETH router or direct stock collateral.",
     "Index tokens per basket", "atlasprotocolrh.com",
     "Mainnet live per site. Verify factory CA on Blockscout."),
    ("RSTOCKS", "Fee→stock printer on Pons", "Pons-launched token",
     "Creator fees claimed every 5 min, swapped into HOOD stock token, distributed equally to holders.",
     "$RSTOCKS (when live)", "stockdrop.space",
     "Template for 'Pons launch that pays HOOD'. Status was 'awaiting Pons launch' on the site at one crawl."),
]
for i, row in enumerate(hybrids):
    r = 4 + i
    for c, val in enumerate(row, 1):
        ws3.cell(r, c, val)
    style_data_row(ws3, r, 7, alt=i % 2 == 1)
    ws3.row_dimensions[r].height = 72
    ws3.cell(r, 1).font = font(size=10, bold=True)
ws3.freeze_panes = "A4"
set_widths(ws3, [22, 28, 22, 50, 22, 42, 44])
ws3.sheet_view.showGridLines = False
ws3.page_setup.orientation = "landscape"
ws3.page_setup.fitToPage = True
ws3.page_setup.fitToWidth = 1
ws3.page_setup.fitToHeight = 0
ws3.print_title_rows = "1:3"

# =============================================================================
# SHEET 4: Launchpads
# =============================================================================
ws4 = wb.create_sheet("04_Launchpads")
title_block(
    ws4,
    "Token Launchpads on Robinhood Chain",
    "Dune (okxweb3wallet dashboard) + ecosystem reporting  |  Figures are lifetime-since-1-Jul snapshots from late Jul / Aug and will have moved",
    8,
)
headers4 = ["Launchpad", "Model", "RWA-pair support", "Tokens launched (Dune snapshot)", "RWA-paired tokens", "RWA vol share (snapshot)", "Notes", "Token"]
header_row(ws4, 3, headers4, NAVY)
pads = [
    ("Pons / pons.family", "Fixed-supply, locked Uni v3 then v4. No bonding curve on v1; v2 adds curve + stock quotes.",
     "YES — V2 quote assets include official stocks",
     "~371k launched / ~270k traded (Dune mid-Aug row)",
     "310 in that snapshot",
     "~5% of its DEX vol was RWA-pair in that pull; later stock-quoted launches (microduck/NVDA, MARTIANS/SPCX) did $10M+ RWA-side each",
     "Clear volume leader. $PONS captures protocol fee via buybacks. 70/30 creator/protocol on current launches.",
     "$PONS"),
    ("long.xyz", "RWA-native. Token launches on top of a chosen stock token. Stock side is the floor/numeraire.",
     "YES — this is the product",
     "~10.6k launched / ~5.6k traded",
     "4,061 in that snapshot",
     "~70% of its volume was RWA-pair. $AI/NVDA $86M RWA-side. Pioneer since 14 Jul.",
     "Highest-signal RWA launchpad. Not the same as Longbow or Longshot.",
     "No single must-own pad token; the pairs are the market"),
    ("Bankr / bankr.bot", "Agent-native launchpad + Doppler-style markets. Added stock pairing ~20 Jul.",
     "YES after mid-Jul",
     "~85k launched / ~11k traded",
     "2,244",
     "~36% RWA vol share in snapshot. GME/GME pair $39M RWA-side.",
     "Also an agent infra play (fees pay API costs).",
     "Project-dependent"),
    ("Noxa / noxa.fun", "Launch straight into Uni v3 (no bonding curve). Drove $CASHCAT.",
     "NO in the Dune snapshot (0 RWA-paired)",
     "~60k launched / ~59k traded",
     "0",
     "0%",
     "Memecoin factory. $CASHCAT is the chain's signature meme.",
     "No canonical pad token widely cited"),
    ("bow.fun / bowfun", "Non-custodial. Standard V3/WETH or RWA V4 paired with a stock. LP locked forever.",
     "YES — explicit RWA launch mode",
     "~8.2k launched / ~8.1k traded",
     "0 in early snapshot; RWA mode exists on the site now",
     "Low in early data",
     "Do not confuse with $BOW (Longbow).",
     "None required"),
    ("pools.trade", "General pad",
     "Partial",
     "~71k / ~62k",
     "119",
     "~0.5%",
     "Mid-pack.",
     "—"),
    ("Flap", "Pure-USDG meme factory",
     "Essentially none",
     "~295k launched / 369 traded in one messy row — treat as high-launch low-graduation",
     "15",
     "~4%",
     "Launch spam factory.",
     "—"),
    ("varo / clanker / lunch.fun / circus.trade / virtuals / sushiswap / trench / klik / lemon.fun / dontblink / ape / fakenoxa",
     "Long tail of pads",
     "Varies (virtuals used for agent tokens e.g. Karma)",
     "Thousands each",
     "See Dune table",
     "Usually <10%",
     "Most are meme factories. Virtuals is the agent-token rail (e.g. $MONVERA AI broker wrapping stock tokens).",
     "Project-specific"),
]
for i, row in enumerate(pads):
    r = 4 + i
    for c, val in enumerate(row, 1):
        ws4.cell(r, c, val)
    style_data_row(ws4, r, 8, alt=i % 2 == 1)
    ws4.cell(r, 1).font = font(size=10, bold=True)
    ws4.row_dimensions[r].height = 64
ws4.freeze_panes = "A4"
set_widths(ws4, [28, 36, 28, 28, 18, 36, 42, 28])
ws4.sheet_view.showGridLines = False
ws4.page_setup.orientation = "landscape"
ws4.page_setup.fitToPage = True
ws4.page_setup.fitToWidth = 1
ws4.page_setup.fitToHeight = 0
ws4.print_title_rows = "1:3"

# =============================================================================
# SHEET 5: Meme-RWA pairs
# =============================================================================
ws5 = wb.create_sheet("05_Meme_RWA_Pairs")
title_block(
    ws5,
    "Notable Meme × Stock-Token Pairs",
    "Not exhaustive — these are the ones named in Dune / press / your example (AI/NVDA). New pairs print every day on long.xyz, Pons V2, Bankr, bow.fun.",
    7,
)
headers5 = ["Meme ticker", "Paired stock token", "Launchpad", "Why it matters", "RWA-side volume (reported)", "Launch window", "Notes"]
header_row(ws5, 3, headers5, NAVY)
pairs = [
    ("AI (Artificial Inu)", "NVDA", "long.xyz", "The pair that defined the category. 'Long compute.' Your example.",
     "~$86M RWA-side / ~$172M total in the Dune ranked table", "14 Jul 2026",
     "At one point ~$100M meme mcap. Fees designed to buy AI-related stocks + burns."),
    ("REAL", "NVDA", "Bankr", "Second-wave NVDA pair on Bankr after they added stock quoting.",
     "Listed in Dune ranked RWA-vol table", "~20 Jul 2026", "—"),
    ("GME (meme side)", "GME (stock token)", "Bankr", "Meme named after the stock, paired with the actual tokenized stock.",
     "~$39M RWA-side / ~$111M total", "~23 Jul 2026", "Recursive meme/RWA."),
    ("microduck", "NVDA", "Pons V2", "Pons proving stock-quoted launches can print size.",
     "~$13.5M RWA-side / ~$33M total", "27 Aug 2026", "Very recent."),
    ("MARTIANS", "SPCX", "Pons V2", "Space meme on tokenized SpaceX.",
     "~$11.1M RWA-side / ~$24M total", "23 Aug 2026", "—"),
    ("CINEMA / ABSOLUTE CINEMA", "AMC", "DexScreener-visible pair", "AMC stock token as the quote.",
     "Appeared in 30 Aug DexScreener top-volume", "Aug 2026", "Verify CA."),
    ("PAIR", "SPY", "DexScreener-visible pair", "SPY-quoted meme showing up in top volume.",
     "High 24h vol on 30 Aug DexScreener (~$12M cited)", "Aug 2026", "Generic ticker — easy to fake. Verify pool hooks / factory."),
    ("SHRUB / Lil' Shrub", "TSLA", "DexScreener-visible pair", "TSLA-quoted meme in 30 Aug top lists.",
     "Multi-million 24h prints", "Aug 2026", "Verify CA."),
    ("PONSDAQ", "QQQ", "Pons-adjacent", "QQQ-quoted, name is a joke on Nasdaq + Pons.",
     "Appeared in 30 Aug top volume", "Aug 2026", "Verify CA."),
    ("SPACEHOOD and other SPCX pairs", "SPCX", "long.xyz / others", "SpaceX is one of the three highest-value official tokens and a popular quote asset.",
     "Varies by token", "Jul–Aug 2026", "SPCX itself is a tokenized private-company claim — extra legal hair."),
]
for i, row in enumerate(pairs):
    r = 4 + i
    for c, val in enumerate(row, 1):
        ws5.cell(r, c, val)
    style_data_row(ws5, r, 7, alt=i % 2 == 1)
    ws5.cell(r, 1).font = font(size=10, bold=True)
    ws5.row_dimensions[r].height = 36
ws5.freeze_panes = "A4"
set_widths(ws5, [28, 22, 22, 44, 36, 16, 40])
ws5.sheet_view.showGridLines = False
ws5.page_setup.orientation = "landscape"
ws5.page_setup.fitToPage = True
ws5.page_setup.fitToWidth = 1
ws5.page_setup.fitToHeight = 0
ws5.print_title_rows = "1:3"

note_r = 15
ws5.merge_cells(start_row=note_r, start_column=1, end_row=note_r, end_column=7)
ws5.cell(note_r, 1, "How to find new ones: app.long.xyz, pons.family (filter quote asset = NVDA/SPY/TSLA/SPCX), DexScreener chain=robinhood sorted by volume, Dune dashboard 'Robinhood Chain Launchpads — RWA-Paired Meme Analysis'. Do not ape a ticker without checking the quote asset is the official Stock Token CA from sheet 01.")
ws5.cell(note_r, 1).font = font(size=9, italic=True)
ws5.cell(note_r, 1).fill = fill(AMBER)
ws5.cell(note_r, 1).alignment = Alignment(wrap_text=True)
ws5.row_dimensions[note_r].height = 40

# =============================================================================
# SHEET 6: Tokenless infra
# =============================================================================
ws6 = wb.create_sheet("06_Tokenless_Infra")
title_block(
    ws6,
    "Infrastructure & Products With No Robinhood-Native Token",
    "These are the actual rails the RWA tokens plug into",
    6,
)
headers6 = ["Product", "Category", "What it does on RH Chain", "Token?", "Key detail", "Source"]
header_row(ws6, 3, headers6, NAVY)
infra = [
    ("Robinhood Earn", "Official lending",
     "Self-custody USDG lending inside the Robinhood app for eligible US users. Curated Morpho vault (Steakhouse). Allocates into USDe/USDG, syrupUSDG/USDG, spUSDG/USDG markets. Advertised ~7% APY at launch.",
     "No. Do not confuse with $EARN on earnonhood.com.",
     "Morpho Blue TVL on the chain ~$489M. Combined RH Morpho markets have printed $300M+ borrowed.",
     "Robinhood launch post 1 Jul; Dune lindyhan / vectordotsol dashboards"),
    ("Morpho Blue", "Lending primitive",
     "Immutable isolated markets. Settlement layer under Robinhood Earn AND Longbow.",
     "MORPHO exists elsewhere; not RH-native.",
     "Largest TVL protocol on the chain.",
     "DefiLlama / app.morpho.org/robinhood-chain"),
    ("Maple syrupUSDG", "Yield-bearing RWA stable",
     "ERC-4626 receipt for USDG deposited into Maple Syrup institutional lending. Live on ETH + RH Chain from day one. Approved as Earn collateral.",
     "syrupUSDG receipt token (not a farm token)",
     "RH Chain market cap slice ~$96M in one DefiLlama pull. CA cited 0x40858070814a57FdF33a613ae84fE0a8b4a874f7 (verify).",
     "DefiLlama RWA page; Maple"),
    ("Paxos USDG", "Official stablecoin",
     "Global Dollar. Founding GDN participants include Robinhood, Kraken, Paxos. Primary quote + gas-adjacent asset after ETH.",
     "USDG itself",
     "CA 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168. Largest stable on the chain.",
     "Paxos / RWA.xyz"),
    ("Ethena USDe", "Synthetic dollar",
     "Used as Morpho collateral against USDG in the Earn stack.",
     "USDe (multi-chain)",
     "Largest single Earn allocation in some snapshots.",
     "Ethena / Morpho"),
    ("Uniswap v2/v3/v4", "DEX",
     "Default spot venue. Pons/LONG/bow.fun all settle here. v4 hooks power Pons V2 and several RWA products.",
     "UNI exists elsewhere",
     "~$1B of the chain's ~$1.2B 24h DEX vol in one DefiLlama pull.",
     "DefiLlama DEXs"),
    ("Rialto", "RFQ / stock spot",
     "Purpose-built RFQ venue for stock tokens, ETFs, commodities. Powers Index distributions.",
     "No widely cited RH token",
     "Official launch partner alongside Uniswap, Lighter, Arcus, 1inch.",
     "Robinhood launch materials"),
    ("Arcus", "Spot + perps DEX",
     "dYdX Labs × Robinhood Crypto. Stock-token spot and perps. pTokens (pBTC, pBTC3x, pHOOD3x) launched ~25 Aug.",
     "Token TBD; portion flagged for DYDX community in reporting",
     "Native perps venue on the chain.",
     "Launch coverage / DefiLlama"),
    ("Lighter", "ZK perps",
     "Perps inside Robinhood Wallet in selected jurisdictions. Stock tokens usable as margin/collateral ($SPY live as collateral). $11M LIT incentives targeted at RH users.",
     "$LIT is Lighter's token (not minted as an RH-native launch)",
     "Separate system that accepts RH collateral.",
     "Robinhood Wallet / Lighter"),
    ("Meridian", "RWA perps + prediction",
     "RWA perps and prediction markets, USDe settlement.",
     "No RH-native token widely cited",
     "Early.",
     "Ecosystem roundups"),
    ("Fables / Prologue", "ve(3,3) DEX for stocks",
     "Uni v4 hook DEX purpose-built for stock-token pairs (NVDA/USDG, SPY/USDG, GLD/USDG) with dynamic fees.",
     "$PROLOGUE TGE cited 5 Oct 2026",
     "Not launched as of 30 Aug — flagged as upcoming.",
     "Ecosystem articles"),
    ("RoodFi", "Alt RWA",
     "Tokenizes US local-government tax liens / tax deeds. Buy with USDG, hold to redemption or trade secondary.",
     "Project token TBD / verify",
     "Announced mainnet 13 Jul. Different RWA type than stocks.",
     "Bit.Fan / project announcements"),
    ("Fletcher / Collector Crypt", "Physical collectibles",
     "PSA/CGC/BGS-graded cards vaulted, 1:1 NFTs originally on Solana, mapped onto RH Chain via a gacha app.",
     "NFT collection, not a fungible DeFi token",
     "RWA but not securities.",
     "Project announcements ~11 Jul"),
    ("Fletch Finance", "Stock cash-flow split",
     "Pendle-style split of stock-token principal vs dividend/economic rights.",
     "Verify live status",
     "Early / reported in ecosystem lists.",
     "Ecosystem roundups"),
    ("Chainlink", "Oracles",
     "Per-asset price feeds for official Stock Tokens. Corporate actions via ERC-8056 multiplier.",
     "LINK exists elsewhere",
     "Do not price a stock token off a Uni pool if you are building risk — use the official feed.",
     "docs.robinhood.com"),
]
for i, row in enumerate(infra):
    r = 4 + i
    for c, val in enumerate(row, 1):
        ws6.cell(r, c, val)
    style_data_row(ws6, r, 6, alt=i % 2 == 1)
    ws6.cell(r, 1).font = font(size=10, bold=True)
    ws6.row_dimensions[r].height = 56
ws6.freeze_panes = "A4"
set_widths(ws6, [24, 22, 55, 36, 44, 36])
ws6.sheet_view.showGridLines = False
ws6.page_setup.orientation = "landscape"
ws6.page_setup.fitToPage = True
ws6.page_setup.fitToWidth = 1
ws6.page_setup.fitToHeight = 0
ws6.print_title_rows = "1:3"

# =============================================================================
# SHEET 7: Sources + caveats
# =============================================================================
ws7 = wb.create_sheet("07_Sources_Caveats")
title_block(
    ws7,
    "Sources, Caveats, How to Keep This Current",
    "Primary > secondary. Re-verify every CA before a transaction.",
    3,
)
headers7 = ["Type", "Item", "URL / pointer"]
header_row(ws7, 3, headers7, NAVY)
sources = [
    ("Official", "Robinhood Chain overview", "https://robinhood.com/us/en/chain/"),
    ("Official", "Stock Token docs", "https://docs.robinhood.com/chain/stock-tokens"),
    ("Official", "Live token contract registry", "https://docs.robinhood.com/chain/contracts/"),
    ("Official", "Robinhood Crypto X (listing announcements)", "@RobinhoodCrypto — 13 Aug 2026 post: +100 tokens, total 190+"),
    ("Registry mirror", "hoodl2.com verified CA list", "https://hoodl2.com/stocks"),
    ("Data", "RWA.xyz Robinhood network / platform", "https://app.rwa.xyz/networks/robinhood  and  /platforms/robinhood"),
    ("Data", "DefiLlama RH Chain + RWA platform", "https://defillama.com/chain/robinhood-chain"),
    ("Data", "DexScreener RH", "https://dexscreener.com/robinhood"),
    ("Data", "Dune: launchpads × RWA pairs", "https://dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis"),
    ("Data", "Dune: LONG analytics", "https://dune.com/natan_benish2001/long-on-robinhood-chain"),
    ("Data", "Dune: RH Stock Tokens directory (also covers older Arbitrum One deployments)", "https://dune.com/oclsanti/robinhood-stock-tokens"),
    ("Data", "Dune: Robinhood Earn / Morpho", "https://dune.com/lindyhan/robinhood-earn"),
    ("Explorer", "Blockscout", "https://robinhoodchain.blockscout.com"),
    ("Legal / explainer", "Asortino: what Stock Tokens legally are", "https://asortino.com/learn/what-are-robinhood-chain-and-robinhood-stock-tokens"),
    ("News", "Mainnet launch", "The Defiant, The Block — 1 Jul 2026"),
    ("News", "RWA volume inflection", "CoinDesk 25 Jul 2026"),
    ("Project", "Pons", "pons.family / Blockscout token page"),
    ("Project", "Mancer", "mancer.xyz / chainmancer.xyz"),
    ("Project", "EARN protocol", "earnonhood.com"),
    ("Project", "Longbow", "longbow.cash"),
    ("Project", "LONG pad", "app.long.xyz"),
    ("Project", "Longshot", "uselongshot.xyz"),
    ("Project", "Quotrons", "quotrons.cash"),
    ("Project", "StonkBrokers", "stonkbrokers.cash / yfarmx explainer"),
    ("Project", "Statics", "staticsprotocol.com / docs.staticsprotocol.com"),
    ("Project", "The Index", "theindex.finance / rwa.wtf"),
    ("Caveat", "US persons", "Stock Tokens are not offered to US persons. Geo-fence is at the distribution layer; the ERC-20 itself transfers like any other token once issued."),
    ("Caveat", "Legal form", "Tokenized debt securities. You are a creditor of RH Jersey, not a shareholder of NVDA/AAPL/etc. No voting. Dividends are economic equivalents via multiplier, not cash to wallet."),
    ("Caveat", "Copycat contracts", "PONS, STONKBROKER, ARROW, BOW all have impostors. Sheet 02 flags the known fakes. Always match the full 42-char CA."),
    ("Caveat", "Private-company tokens", "SPCX and earlier OpenAI-branded products drew issuer disavowals and regulator attention. Extra legal risk vs listed-equity tokens."),
    ("Caveat", "Scope limit", "Pons alone has launched hundreds of thousands of tokens. This workbook is every official Stock Token we could extract + every notable launched DeFi/RWA protocol token, not every meme."),
    ("Caveat", "Numbers rot fast", "Mcaps, TVL, holder counts are 29–30 Aug 2026 snapshots. Re-pull DexScreener / DefiLlama / RWA.xyz before using in a model."),
    ("How to update official list", "Re-scrape", "docs.robinhood.com/chain/contracts is generated live from the on-chain registry. That is the source of truth when RH adds the next 100."),
]
for i, row in enumerate(sources):
    r = 4 + i
    for c, val in enumerate(row, 1):
        ws7.cell(r, c, val)
    style_data_row(ws7, r, 3, alt=i % 2 == 1)
    if row[0] == "Caveat":
        ws7.cell(r, 1).fill = fill(RED_SOFT)
        ws7.cell(r, 2).fill = fill(RED_SOFT)
        ws7.cell(r, 3).fill = fill(RED_SOFT)
    elif row[0] == "Official":
        ws7.cell(r, 1).fill = fill(GREEN_SOFT)
    ws7.cell(r, 1).font = font(size=10, bold=True)
    ws7.row_dimensions[r].height = 28
ws7.freeze_panes = "A4"
set_widths(ws7, [22, 44, 88])
ws7.sheet_view.showGridLines = False
ws7.page_setup.orientation = "landscape"
ws7.page_setup.fitToPage = True
ws7.page_setup.fitToWidth = 1
ws7.page_setup.fitToHeight = 0
ws7.print_title_rows = "1:3"
ws7.oddFooter.left.text = "Sources & caveats"
ws7.oddFooter.right.text = "Page &P of &N"

# =============================================================================
# Print / freeze polish across sheets
# =============================================================================
for s in wb.worksheets:
    s.page_setup.horizontalCentered = True
    s.sheet_properties.pageSetUpPr.fitToPage = True
    s.page_setup.paperSize = s.PAPERSIZE_TABLOID
    s.page_margins.left = 0.4
    s.page_margins.right = 0.4
    s.page_margins.top = 0.6
    s.page_margins.bottom = 0.6
    s.page_margins.header = 0.25
    s.page_margins.footer = 0.25

out = "/home/workdir/artifacts/Robinhood_Chain_DeFi_RWA_Tokens_2026-08-30.xlsx"
wb.save(out)
print(f"Wrote {out}")
print(f"Official instruments: {len(stocks)}")
print(f"DeFi protocol rows: {len(defi)}")
