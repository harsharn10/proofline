export type ChartPoint = { at: string; value: number };
export type ChartWindow = "7d" | "30d" | "90d";

const windowDays: Record<ChartWindow, number> = { "7d": 7, "30d": 30, "90d": 90 };

export function pointsInWindow(points: ChartPoint[], window: ChartWindow): ChartPoint[] {
  const sorted = [...points]
    .filter((point) => Number.isFinite(point.value) && Number.isFinite(Date.parse(point.at)))
    .sort((a, b) => Date.parse(a.at) - Date.parse(b.at));
  const latest = sorted.at(-1);
  if (!latest) return [];
  const cutoff = Date.parse(latest.at) - windowDays[window] * 86_400_000;
  return sorted.filter((point) => Date.parse(point.at) >= cutoff);
}
