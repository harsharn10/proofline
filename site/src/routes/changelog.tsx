import { useMemo } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { dejargon } from "@/lib/dejargon";
import { getChangelog } from "@/data/content-server";
import { type ChangelogEntry, type ChangelogSeverity, type Tone } from "@/data/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/changelog")({
  loader: () => getChangelog(),
  component: ChangelogPage,
});

function severityTone(severity: ChangelogSeverity): Tone {
  switch (severity) {
    case "Risk":
      return "risk";
    case "Material":
      return "warn";
    case "Review":
      return "default";
    case "Info":
    default:
      return "muted";
  }
}

function ChangelogPage() {
  const { names, changelog } = Route.useLoaderData();

  const dossierBySlug = useMemo(() => new Map(names.map((d) => [d.slug, d])), [names]);

  // Group newest-first: entries sort by date desc, then bucket by date preserving that order.
  const groups = useMemo(() => {
    const sorted = [...changelog].sort((a, b) => b.date.localeCompare(a.date));
    const byDate = new Map<string, ChangelogEntry[]>();
    for (const entry of sorted) {
      const bucket = byDate.get(entry.date);
      if (bucket) bucket.push(entry);
      else byDate.set(entry.date, [entry]);
    }
    return [...byDate.entries()];
  }, [changelog]);

  return (
    <main className="wrap narrow pb-10">
      <section className="hero">
        <p className="eyebrow">Changelog</p>
        <h1>Every material change, dated and reviewed.</h1>
        <p className="desc">
          Score, risk, and stage moves, new findings, corrections and new coverage — newest first.
        </p>
      </section>

      {groups.length === 0 ? (
        <p className="honest mt-8">No changelog entries yet.</p>
      ) : (
        groups.map(([date, entries]) => (
          <section key={date}>
            <h2 className="dategroup">{formatDate(date)}</h2>
            <ol className="m-0 list-none p-0">
              {entries.map((entry, i) => {
                const dossier = dossierBySlug.get(entry.slug);
                return (
                  <li key={i} className="evrow">
                    <div className="eh">
                      {dossier ? (
                        <Link to="/n/$slug" params={{ slug: dossier.slug }} className="etk">
                          {dossier.symbol ?? dossier.name}
                        </Link>
                      ) : (
                        <span className="etk" style={{ color: "var(--muted)" }}>
                          {entry.slug}
                        </span>
                      )}
                      <Badge tone="muted">{entry.type}</Badge>
                      <Badge tone={severityTone(entry.severity)}>{entry.severity}</Badge>
                    </div>
                    <h3 className="et">{dejargon(entry.title)}</h3>
                    <p className="edt">{dejargon(entry.detail)}</p>
                    <p className="erev">reviewed by {entry.reviewer}</p>
                  </li>
                );
              })}
            </ol>
          </section>
        ))
      )}
    </main>
  );
}
