import type { ReactNode } from "react";
import { Link, useLoaderData } from "@tanstack/react-router";
import { correctionsLink } from "@/data/types";

export const LEGAL_LAST_UPDATED = "September 2, 2026";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, summary, children }: LegalPageProps) {
  return (
    <main className="wrap narrow legal-page pb-10">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="legal-updated">Last updated {LEGAL_LAST_UPDATED}</p>
      <p className="legal-summary">{summary}</p>
      <div className="legal-body">{children}</div>
    </main>
  );
}

export function LegalContact() {
  const meta = useLoaderData({ from: "__root__" });
  const contact = correctionsLink(meta.corrections.destination);

  return contact.href ? (
    <p>
      Send legal, privacy, or correction requests through the{" "}
      <a href={contact.href}>published contact channel</a>. Do not include wallet secrets, private
      keys, seed phrases, passwords, or unnecessary sensitive information.
    </p>
  ) : (
    <p className="legal-launch-blocker">
      <strong>Before public launch:</strong> Icarus must publish a working private contact channel
      for legal, privacy, and correction requests. Until then, do not send personal information
      through public project channels.
    </p>
  );
}

export function LegalNav() {
  return (
    <nav className="legal-nav" aria-label="Legal pages">
      <Link to="/disclaimer" activeProps={{ "aria-current": "page" }}>
        Disclaimer
      </Link>
      <Link to="/terms" activeProps={{ "aria-current": "page" }}>
        Terms
      </Link>
      <Link to="/privacy" activeProps={{ "aria-current": "page" }}>
        Privacy
      </Link>
    </nav>
  );
}
