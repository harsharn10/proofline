export type Status = "live" | "quiet" | "dormant" | "announced" | "testnet";

const labels: Record<Status, string> = {
  live: "Live",
  quiet: "Quiet",
  dormant: "Dormant",
  announced: "Announced",
  testnet: "Testnet",
};

export type StatusPillProps = {
  status: Status;
  relativeTime?: string | null;
};

export function StatusPill({ status, relativeTime }: StatusPillProps) {
  return (
    <span className={`ui-status ui-status-${status}`}>
      <i aria-hidden="true" />
      <span>{labels[status]}</span>
      {relativeTime ? <span className="ui-status-time">{relativeTime}</span> : null}
    </span>
  );
}
