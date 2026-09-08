export const TRENCHES_PAGE = "https://robinhoodtrenches.com/";
export const TRENCHES_TAPE_URL = `${TRENCHES_PAGE}api/tape?limit=120&stocks=true`;
const EXPLORER = "https://robinhoodchain.blockscout.com";
const DAY_MS = 24 * 60 * 60 * 1000;

const safeUrl = (value) => {
  const url = String(value ?? "");
  return /^https?:\/\/[^\s]+$/i.test(url) ? url : null;
};

// The public tape is an input, not an Icarus data model. Keep only clean, recent, priced rows and
// omit wallet addresses and follower counts before the site sees the data. The caller still has to
// match `token` against Icarus: an unknown token is research intake, never a public stream row.
export function normalizeTrenchTape(value, {
  now = Date.now(),
  minUsd = 250,
  maxAgeMs = DAY_MS,
} = {}) {
  if (!Array.isArray(value)) return [];
  return value.flatMap((row) => {
    if (!row || typeof row !== "object") return [];
    const atMs = Number(row.ts) * 1000;
    const side = String(row.side ?? "").toLowerCase();
    const usd = Number(row.usd);
    const token = String(row.token ?? "").toLowerCase();
    const symbol = String(row.symbol ?? "").trim();
    const trader = String(row.handle ?? "").replace(/^@/, "").trim();
    if (
      !Number.isFinite(atMs) || atMs <= 0 || atMs > now || now - atMs > maxAgeMs ||
      !["buy", "sell"].includes(side) || !Number.isFinite(usd) || usd < minUsd ||
      !/^0x[0-9a-f]{40}$/.test(token) || !symbol || !trader ||
      !Array.isArray(row.flags) || row.flags.length > 0
    ) return [];
    const pairUrl = safeUrl(row.pair_url);
    const tx = /^0x[0-9a-f]{64}$/i.test(String(row.tx ?? "")) ? String(row.tx) : null;
    const liquidity = Number(row.liquidity);
    return [{
      id: String(row.id ?? tx ?? `${token}:${atMs}`),
      at: new Date(atMs).toISOString(),
      side,
      symbol: symbol.slice(0, 32),
      name: String(row.name ?? symbol).slice(0, 80),
      token,
      pair: pairUrl?.split("/").filter(Boolean).at(-1) ?? null,
      usd,
      liquidityUsd: Number.isFinite(liquidity) ? liquidity : null,
      trader: trader.slice(0, 64),
      firstBuy: Boolean(row.new_position),
      stock: Boolean(row.is_stock),
      links: {
        source: TRENCHES_PAGE,
        dexscreener: pairUrl,
        explorer: `${EXPLORER}/token/${token}`,
        transaction: tx ? `${EXPLORER}/tx/${tx}` : null,
      },
    }];
  }).sort((a, b) => Date.parse(b.at) - Date.parse(a.at));
}

export function matchCoveredTrenchTape(tape, tokenSlugs, { now = Date.now(), limit = 8 } = {}) {
  const seen = new Set();
  const matched = [];
  for (const fill of tape) {
    const slug = tokenSlugs.get(String(fill.token).toLowerCase());
    const at = Date.parse(fill.at ?? "");
    if (!slug || !Number.isFinite(at) || seen.has(slug)) continue;
    seen.add(slug);
    matched.push({ ...fill, slug, ageMinutes: Math.max(0, Math.floor((now - at) / 60_000)) });
    if (matched.length >= limit) break;
  }
  return matched;
}
