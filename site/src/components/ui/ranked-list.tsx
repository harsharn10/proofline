export type RankedListRow = {
  rank: number;
  name: string;
  why?: string;
  value: string;
  change?: string | null;
  href: string;
};

export type RankedListProps = {
  rows: RankedListRow[];
};

export function RankedList({ rows }: RankedListProps) {
  return (
    <ol className="ui-ranked-list">
      {rows.map((row) => (
        <li key={`${row.rank}-${row.name}`}>
          <a href={row.href}>
            <span className="ui-rank">{row.rank}</span>
            <b>{row.name}</b>
            {row.why ? <span className="ui-ranked-why">{row.why}</span> : null}
            <span className="ui-ranked-value">{row.value}</span>
            {row.change ? (
              <span className={row.change.startsWith("+") ? "ui-change-up" : "ui-change-down"}>{row.change}</span>
            ) : null}
          </a>
        </li>
      ))}
    </ol>
  );
}
