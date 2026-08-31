import type { Status } from "@/data/types";

export function statusTone(status: Status): "live" | "warn" | "risk" | "muted" | "default" {
  switch (status) {
    case "official":
    case "live":
      return "live";
    case "launching":
      return "warn";
    case "upcoming":
      return "risk";
    case "tokenless":
      return "muted";
    default:
      return "default";
  }
}
