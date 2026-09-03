// DefiLlama daily backfills, sliced to Robinhood Chain. Points are sorted, deduplicated and capped.
//
// Two rules, both about not destroying what is already true.
//
//   Only the chain slice is published. A response with no per-chain breakdown carries the
//   protocol's series across every chain it runs on, and writing that as the Robinhood Chain series
//   would credit this chain with Base's and Arbitrum's revenue. No breakdown, no series.
//
//   A read never shortens a committed series. content/pulled/series/<slug>.json is a 90-day backfill
//   rebuilt from scratch each run, so one 400 from DefiLlama used to replace 51 real days with `[]`
//   — a silent deletion that no later run could undo. A shorter or empty read now keeps the file
//   that is already there and records why.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

export const SERIES_DIR = "content/pulled/series";

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
  if (!Array.isArray(breakdown)) return [];
  const byDate = new Map();
  for (const point of breakdown) {
    if (!Array.isArray(point) || point.length < 2) continue;
    const date = dateFromSeconds(Number(point[0]));
    const value = sumValue(point[1]?.[chain]);
    if (date && value !== null) byDate.set(date, value);
  }
  const sorted = [...byDate.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  if (sorted.length === 0) return [];
  const latest = Date.parse(`${sorted[sorted.length - 1][0]}T00:00:00.000Z`);
  const cutoff = latest - (limit - 1) * 24 * 60 * 60 * 1000;
  return sorted.filter(([date]) => Date.parse(`${date}T00:00:00.000Z`) >= cutoff).slice(-limit);
}

/** The daily points already committed for a slug, or null when there is no file to protect. */
export async function readSeries(slug, { dir = SERIES_DIR } = {}) {
  try {
    const parsed = JSON.parse(await readFile(join(dir, `${slug}.json`), "utf8"));
    return Array.isArray(parsed?.revenue_daily) ? parsed.revenue_daily : null;
  } catch {
    return null;
  }
}

/**
 * Whether a freshly read series may replace the committed one, and the error to record when it may
 * not. An empty read is never written at all: a series file with no points says nothing the absence
 * of the file does not already say, and the card omits a series with no data either way.
 */
export async function seriesReplacement(slug, series, { dir = SERIES_DIR } = {}) {
  const next = Array.isArray(series) ? series : [];
  const existing = await readSeries(slug, { dir });
  if (next.length === 0) {
    return {
      write: false,
      next: 0,
      existing: existing?.length ?? 0,
      error: {
        step: "llama",
        message: existing?.length
          ? `revenue_daily ${slug}: the read returned no daily points; kept the ${existing.length} already committed`
          : `revenue_daily ${slug}: the read returned no daily points, so no series file was written`,
      },
    };
  }
  if (existing && next.length < existing.length) {
    return {
      write: false,
      next: next.length,
      existing: existing.length,
      error: {
        step: "llama",
        message: `revenue_daily ${slug}: the read returned ${next.length} daily points but ${existing.length} are already committed; kept the committed series`,
      },
    };
  }
  return { write: true, next: next.length, existing: existing?.length ?? 0, error: null };
}

/**
 * Writes content/pulled/series/<slug>.json, unless doing so would shorten or empty the committed
 * series. Returns what it did; the caller records `error` on the document so the null has a reason.
 */
export async function writeSeries(slug, series, { dir = SERIES_DIR, dry = false } = {}) {
  const path = join(dir, `${slug}.json`);
  const decision = await seriesReplacement(slug, series, { dir });
  if (!decision.write) return { path, text: null, written: false, kept: decision.existing, error: decision.error };
  const text = `${JSON.stringify({ revenue_daily: series }, null, 2)}\n`;
  if (!dry) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, text, "utf8");
  }
  return { path, text, written: !dry, kept: decision.existing, error: null };
}
