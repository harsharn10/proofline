import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Dossier } from "@/components/dossier";
import { getName } from "@/data/names";

export const Route = createFileRoute("/n/$slug")({
  loader: ({ params }) => {
    const name = getName(params.slug);
    if (!name) throw notFound();
    return name;
  },
  component: NamePage,
  notFoundComponent: () => (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Not on file</p>
        <h1 className="mt-2 text-2xl font-medium">That name is not in the file yet.</h1>
        <p className="mt-3 max-w-prose text-sm text-muted">
          Send the ticker and we will research it — overview, links, and a feed of company posts plus what people are saying.
        </p>
        <Link to="/" className="mt-6 inline-flex h-11 items-center text-sm text-accent hover:underline">
          Back to the file
        </Link>
      </div>
    </div>
  ),
});

function NamePage() {
  const name = Route.useLoaderData();
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 pt-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          All names
        </Link>
      </div>
      <Dossier name={name} />
    </div>
  );
}
