import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { DeploymentGrid } from "@/components/deployment-grid";
import { EvidenceTag } from "@/components/evidence-tag";
import { Section } from "@/components/section";
import { dejargon, hostLabel } from "@/lib/dejargon";
import { getDependency } from "@/data/content-server";
import { DEPENDENCY_KIND_LABEL, NOT_VERIFIED } from "@/data/types";

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
        Dependencies get their own card when a name's research pulls in a shared piece of infrastructure:
        an issuer asset, a DEX, an oracle, a venue.
      </p>
      <Link to="/" className="backlink mt-6">
        ← back to the file
      </Link>
    </main>
  ),
});

// A dependency card. Sections render only when they hold something (rule 1); one honest line
// covers whatever is still empty.
function DependencyPage() {
  const { dependency, site } = Route.useLoaderData();
  const deployments = (dependency.deployments ?? []).filter((d) => d.address !== NOT_VERIFIED);
  const missing: string[] = [];
  if (dependency.controls.length === 0) missing.push("who controls it");
  if (dependency.failure_modes.length === 0) missing.push("how it can fail");
  if (deployments.length === 0) missing.push("its deployments");

  return (
    <>
      <div className="wrap narrow pt-3">
        <Link to="/" className="backlink">
          ← all names
        </Link>
      </div>
      <article className="wrap narrow pb-10">
        <p className="eyebrow" style={{ marginTop: 8 }}>
          Dependency · {DEPENDENCY_KIND_LABEL[dependency.kind]}
        </p>
        <h1 className="text-2xl font-bold tracking-tight">{dependency.name}</h1>
        <p className="lead mt-4">{dejargon(dependency.summary)}</p>

        {missing.length > 0 ? (
          <p className="honestpanel mt-5">
            <b>Shared infrastructure, not a research subject.</b> This card does not yet record {missing.join(", ")}.
            It is cited from the profiles that depend on it.
          </p>
        ) : null}

        {dependency.controls.length > 0 ? (
          <Section title="Controls" hint="who holds which power">
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
          </Section>
        ) : null}

        {dependency.failure_modes.length > 0 ? (
          <Section title="Failure modes" hint="what breaks for the plays that rely on it">
            <div className="atomlist">
              {dependency.failure_modes.map((f, i) => (
                <div key={i} className="atom">
                  <EvidenceTag evidenceClass={f.class} sources={f.sources} />
                  <p>{dejargon(f.text)}</p>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {deployments.length > 0 ? (
          <Section title="Deployments" hint="reproduced on the explorer unless marked claimed">
            <DeploymentGrid deployments={deployments} explorerBase={site.chain.explorer} />
          </Section>
        ) : null}

        {dependency.sources.length > 0 ? (
          <Section title="Sources" hint="what each claim rests on">
            <ol className="m-0 list-none p-0">
              {dependency.sources.map((s) => (
                <li key={s.id} id={s.id} className="srcrow">
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
          </Section>
        ) : null}
      </article>
    </>
  );
}
