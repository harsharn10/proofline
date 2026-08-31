import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { DeploymentGrid } from "@/components/deployment-grid";
import { EvidenceTag } from "@/components/evidence-tag";
import { Section } from "@/components/section";
import { getDependency } from "@/data/content-server";
import { DEPENDENCY_KIND_LABEL } from "@/data/types";

export const Route = createFileRoute("/d/$id")({
  loader: async ({ params }) => {
    const result = await getDependency({ data: params.id });
    if (!result.dependency) throw notFound();
    return result;
  },
  component: DependencyPage,
  notFoundComponent: () => (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Not on file</p>
        <h1 className="mt-2 text-2xl font-medium">That dependency is not in the file yet.</h1>
        <p className="mt-3 max-w-prose text-sm text-muted">
          Dependencies get their own card when a name's research pulls in a shared piece of
          infrastructure — an issuer asset, a DEX, an oracle, a venue.
        </p>
        <Link to="/" className="mt-6 inline-flex h-11 items-center text-sm text-accent hover:underline">
          Back to the file
        </Link>
      </div>
    </div>
  ),
});

function DependencyPage() {
  const { dependency, site } = Route.useLoaderData();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto max-w-3xl px-4 pt-4 sm:px-6">
        <Link to="/" className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" />
          All names
        </Link>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {DEPENDENCY_KIND_LABEL[dependency.kind]}
        </p>
        <h1 className="mt-2 font-mono text-2xl font-medium tracking-tight text-fg sm:text-3xl">
          {dependency.name}
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-fg">{dependency.summary}</p>

        <Section title="Controls">
          {dependency.controls.length > 0 ? (
            <div className="overflow-x-auto rounded-sm border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-3 py-2 text-left font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-subtle">
                      Power
                    </th>
                    <th className="px-3 py-2 text-left font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-subtle">
                      Holder
                    </th>
                    <th className="px-3 py-2 text-left font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-subtle">
                      Note
                    </th>
                    <th className="px-3 py-2 text-left font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-subtle">
                      Evidence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dependency.controls.map((c, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="px-3 py-2 align-top text-fg">{c.power}</td>
                      <td className="px-3 py-2 align-top text-muted">{c.holder}</td>
                      <td className="px-3 py-2 align-top text-muted">{c.note}</td>
                      <td className="px-3 py-2 align-top">
                        <EvidenceTag evidenceClass={c.class} sources={c.sources} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-muted">No controls recorded yet.</p>
          )}
        </Section>

        <Section title="Failure modes">
          {dependency.failure_modes.length > 0 ? (
            <ul className="space-y-2">
              {dependency.failure_modes.map((f, i) => (
                <li key={i} className="flex flex-wrap items-start gap-2">
                  <EvidenceTag evidenceClass={f.class} sources={f.sources} />
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">None recorded.</p>
          )}
        </Section>

        <Section title="Deployments">
          <DeploymentGrid deployments={dependency.deployments ?? []} explorerBase={site.chain.explorer} />
        </Section>

        <Section title="Sources">
          {dependency.sources.length > 0 ? (
            <ol className="space-y-3">
              {dependency.sources.map((s) => (
                <li key={s.id} className="rounded-sm border border-border bg-surface p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-accent">{s.id}</span>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="truncate text-sm text-fg hover:underline"
                    >
                      {s.publisher}
                    </a>
                    <span className="font-mono text-[10px] text-subtle">{s.accessed_at.slice(0, 10)}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{s.claim}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-muted">No sources recorded yet.</p>
          )}
        </Section>
      </article>
    </div>
  );
}
