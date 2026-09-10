import { STATUS_LABEL, type ActivityStatus } from "@/data/types";

export type Status = ActivityStatus;

export type StatusPillProps = {
  status: Status;
  relativeTime?: string | null;
};

export function StatusPill({ status, relativeTime }: StatusPillProps) {
  return (
    <span className={`ui-status ui-status-${status}`}>
      <i aria-hidden="true" />
      <span>{STATUS_LABEL[status]}</span>
      {relativeTime ? <span className="ui-status-time">{relativeTime}</span> : null}
    </span>
  );
}
