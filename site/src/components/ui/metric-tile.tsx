import type { ReactNode } from "react";

export type MetricTileProps = {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  href?: string;
};

export function MetricTile({ label, value, sub, href }: MetricTileProps) {
  const contents = (
    <>
      <small>{label}</small>
      <b>{value}</b>
      {sub ? <span>{sub}</span> : null}
    </>
  );
  return href ? (
    <a className="ui-metric" href={href}>
      {contents}
    </a>
  ) : (
    <div className="ui-metric">{contents}</div>
  );
}
