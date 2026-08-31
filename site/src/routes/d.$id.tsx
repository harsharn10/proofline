import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { DeploymentGrid } from "@/components/deployment-grid";
import { EvidenceTag } from "@/components/evidence-tag";
import { Section } from "@/components/section";
import { dejargon, hostLabel } from "@/lib/dejargon";
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
    <main className="wrap narrow pb-10">
      <p className="eyebrow">Not on file</p>
      <h1 className="text-2xl font-bold tracking-tight">That dependency is not in the file yet.</h1>
      <p className="honest mt-3 max-w-prose">
        Dependencies get their own card when a name's research pulls in a shared piece of
        infrastructure — an issuer asset, a DEX, an oracle, a venue.
      </p>
      <Link to="/" className="backlink mt-6">
        ← back to the file
      </Link>
    </main>
  ),
});

function DependencyPage() {
  const { dependency, site } = Route.useLoaderData();

  return (
    <>
      <div className="wrap narrow pt-3">
        <Link to="/" className="backlink">
          ← all names
        </Link>
      </div>
      <article className="wrap narrow pb-10">
        <p className="eyebrow" style={{ marginTop: 8 }}>
          {DEPENDENCY_KIND_LABEL[dependency.kind]}
        </p>
        <h1 className="text-2xl font-bold tracking-tight">{dependency.name}</h1>
        <p className="lead mt-4">{dejargon(dependency.summary)}</p>

        <Section title="Controls" hint={dependency.controls.length > 0 ? "who holds which power" : undefined}>
          {dependency.controls.length > 0 ? (
            <div className="tblwrap">
              <table className="grid">
                <thead>
                  <tr>
                    <th>Power</th>
                    <th>Holder</th>
                    <th>Note</th>
                    <th>Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {dependency.controls.map((c, i) => (
                    <tr key={i}>
                      <td className="text-fg">{c.power}</td>
                      <td className="text-muted">{c.holder}</td>
                      <td className="text-muted">{dejargon(c.note)}</td>
                      <td>
                        <EvidenceTag evidenceClass={c.class} sources={c.sources} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="honest">No controls recorded yet.</p>
          )}
        </Section>

        <Section title="Failure modes">
          {dependency.failure_modes.length > 0 ? (
            <div className="atomlist">
              {dependency.failure_modes.map((f, i) => (
                <div key={i} className="atom">
                  <span className="kd">
                    {f.class}
                    {f.sources.length > 0 ? ` · ${f.sources.join(" ")}` : ""}
                  </span>
                  <p>{dejargon(f.text)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="honest">None recorded.</p>
          )}
        </Section>

        <Section title="Deployments">
          <DeploymentGrid deployments={dependency.deployments ?? []} explorerBase={site.chain.explorer} />
        </Section>

        <Section
          title="Sources"
          hint={dependency.sources.length > 0 ? `${dependency.sources.length} in the ledger` : undefined}
        >
          {dependency.sources.length > 0 ? (
            <ol className="m-0 list-none p-0">
              {dependency.sources.map((s) => (
                <li key={s.id} className="srcrow">
                  <span className="sid">{s.id}</span>
                  <div className="min-w-0">
                    <div className="sh">
                      <span className="spub">{s.publisher}</span>
                      <span className="sdate">{s.accessed_at.slice(0, 10)}</span>
                      <a className="receipt" href={s.url} target="_blank" rel="noreferrer">
                        {hostLabel(s.url)}
                      </a>
                    </div>
                    <p className="sclaim">{dejargon(s.claim)}</p>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="honest">No sources recorded yet.</p>
          )}
        </Section>
      </article>
    </>
  );
}
