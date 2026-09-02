import { useEffect, useMemo, useRef, useState } from "react";
import type { Chart } from "chart.js";
import { pointsInWindow, type ChartPoint, type ChartWindow } from "./chart-window";

export type GrowthSeries = {
  key: string;
  label: string;
  type: "line" | "bar";
  points: ChartPoint[];
  format: (value: number) => string;
};

export type GrowthChartProps = {
  series: GrowthSeries[];
  window: ChartWindow;
  active: string;
  onChange: (key: string) => void;
};

let chartRegistered = false;

function shortDate(value: string): string {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(value));
}

export function GrowthChart({ series, window, active, onChange }: GrowthChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [themeRevision, setThemeRevision] = useState(0);
  const activeSeries = series.find((item) => item.key === active) ?? series[0];
  const visiblePoints = useMemo(
    () => (activeSeries ? pointsInWindow(activeSeries.points, window) : []),
    [activeSeries, window],
  );

  useEffect(() => {
    const observer = new MutationObserver(() => setThemeRevision((value) => value + 1));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function renderChart() {
      if (!canvasRef.current || !activeSeries) return;
      const chartJs = await import("chart.js");
      if (cancelled || !canvasRef.current) return;
      if (!chartRegistered) {
        chartJs.Chart.register(
          chartJs.BarController,
          chartJs.LineController,
          chartJs.CategoryScale,
          chartJs.LinearScale,
          chartJs.BarElement,
          chartJs.LineElement,
          chartJs.PointElement,
          chartJs.Tooltip,
        );
        chartRegistered = true;
      }
      const styles = getComputedStyle(document.documentElement);
      const ink = styles.getPropertyValue("--t1").trim();
      const muted = styles.getPropertyValue("--t3").trim();
      const grid = styles.getPropertyValue("--line-soft").trim();
      const green = styles.getPropertyValue("--rh").trim();
      chartRef.current?.destroy();
      chartRef.current = new chartJs.Chart(canvasRef.current, {
        type: activeSeries.type,
        data: {
          labels: visiblePoints.map((point) => shortDate(point.at)),
          datasets: [
            {
              data: visiblePoints.map((point) => point.value),
              borderColor: activeSeries.type === "line" ? ink : green,
              backgroundColor: activeSeries.type === "bar" ? green : "transparent",
              borderWidth: 1.5,
              pointRadius: 0,
              tension: 0.3,
              borderRadius: activeSeries.type === "bar" ? 2 : undefined,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => activeSeries.format(Number(context.parsed.y)),
              },
            },
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: muted, maxTicksLimit: 6, font: { size: 10 } } },
            y: {
              grid: { color: grid },
              ticks: {
                color: muted,
                maxTicksLimit: 4,
                font: { size: 10 },
                callback: (value) => activeSeries.format(Number(value)),
              },
            },
          },
        },
      });
    }
    void renderChart();
    return () => {
      cancelled = true;
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [activeSeries, themeRevision, visiblePoints]);

  if (!activeSeries) return null;
  const first = visiblePoints[0];
  return (
    <section className="ui-growth-chart" aria-label="Growth snapshots">
      <div className="ui-chart-series" role="group" aria-label="Chart series">
        {series.map((item) => (
          <button
            type="button"
            key={item.key}
            className={item.key === activeSeries.key ? "on" : undefined}
            aria-pressed={item.key === activeSeries.key}
            onClick={() => onChange(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="ui-chart-canvas">
        <canvas ref={canvasRef} aria-label={`${activeSeries.label} over ${window}`} role="img" />
      </div>
      {visiblePoints.length < 14 && first ? (
        <p className="ui-chart-note">
          {visiblePoints.length} snapshots since {shortDate(first.at)}
        </p>
      ) : null}
    </section>
  );
}
