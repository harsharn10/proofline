import { useMemo } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { getContent } from "@/data/content-server";
import { type ChangelogEntry, type ChangelogSeverity, type Tone } from "@/data/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/changelog")({
  loader: () => getContent(),
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
  const { dossiers, changelog } = Route.useLoaderData();

  const dossierBySlug = useMemo(() => new Map(dossiers.map((d) => [d.slug, d])), [dossiers]);

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
    <div className="min-h-dvh bg-bg text-fg">
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">Changelog</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight text-fg sm:text-3xl">
          Every material change, dated and reviewed.
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
          Score, risk, and stage moves, new findings, corrections and new coverage — newest first.
        </p>

        {groups.length === 0 ? (
          <p className="mt-10 border border-dashed border-border px-4 py-10 text-sm text-muted">
            No changelog entries yet.
          </p>
        ) : (
          <div className="mt-8 space-y-8">
            {groups.map(([date, entries]) => (
              <section key={date}>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  {formatDate(date)}
                </h2>
                <ol className="mt-3 divide-y divide-border border border-border bg-surface">
                  {entries.map((entry, i) => {
                    const dossier = dossierBySlug.get(entry.slug);
                    return (
                      <li key={i} className="px-4 py-4 sm:px-5">
                        <div className="flex flex-wrap items-center gap-2">
                          {dossier ? (
                            <Link
                              to="/n/$slug"
                              params={{ slug: dossier.slug }}
                              className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent hover:underline"
                            >
                              {dossier.symbol ?? dossier.name}
                            </Link>
                          ) : (
                            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
                              {entry.slug}
                            </span>
                          )}
                          <Badge tone="muted">{entry.type}</Badge>
                          <Badge tone={severityTone(entry.severity)}>{entry.severity}</Badge>
                        </div>
                        <h3 className="mt-2 text-sm font-medium text-fg">{entry.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{entry.detail}</p>
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-subtle">
                          Reviewed by {entry.reviewer}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
