// DefiLlama daily backfills. A per-chain response is sliced to Robinhood Chain; an aggregate series
// is accepted only when no chain breakdown exists. Points are sorted, deduplicated and capped.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const finite = (value) => (typeof value === "number" && Number.isFinite(value) ? value : null);

function sumValue(value) {
  const direct = finite(value);
  if (direct !== null) return direct;
  if (!value || typeof value !== "object") return null;
  const values = Object.values(value).map(finite).filter((item) => item !== null);
  return values.length ? values.reduce((a, b) => a + b, 0) : null;
}

const dateFromSeconds = (seconds) => {
  if (!Number.isFinite(seconds)) return null;
  const iso = new Date(seconds * 1000).toISOString();
  return iso.slice(0, 10);
};

export function revenueDaily(body, { chain = "Robinhood Chain", limit = 90 } = {}) {
  const breakdown = body?.totalDataChartBreakdown ?? body?.totalDataChart_breakdown;
  const aggregate = body?.totalDataChart;
  const input = Array.isArray(breakdown) ? breakdown : Array.isArray(aggregate) ? aggregate : [];
  const perChain = Array.isArray(breakdown);
  const byDate = new Map();
  for (const point of input) {
    if (!Array.isArray(point) || point.length < 2) continue;
    const date = dateFromSeconds(Number(point[0]));
    let raw = point[1];
    if (perChain) raw = raw?.[chain];
    const value = sumValue(raw);
    if (date && value !== null) byDate.set(date, value);
  }
  const sorted = [...byDate.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  if (sorted.length === 0) return [];
  const latest = Date.parse(`${sorted[sorted.length - 1][0]}T00:00:00.000Z`);
  const cutoff = latest - (limit - 1) * 24 * 60 * 60 * 1000;
  return sorted.filter(([date]) => Date.parse(`${date}T00:00:00.000Z`) >= cutoff).slice(-limit);
}

export async function writeSeries(slug, series, { dir = "content/pulled/series", dry = false } = {}) {
  const path = join(dir, `${slug}.json`);
  const text = `${JSON.stringify({ revenue_daily: series }, null, 2)}\n`;
  if (!dry) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, text, "utf8");
  }
  return { path, text, written: !dry };
}
