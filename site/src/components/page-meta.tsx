import { useRouterState } from "@tanstack/react-router";
import taxonomy from "../../../schema/taxonomy.json";

export function PageMeta({ title, description }: { title: string; description: string }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}

export function CategoryPageMeta() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const match = pathname.match(/^\/s\/([^/]+)\/?$/);
  if (!match) return null;
  const section = taxonomy.sections.find((item) => item.id === decodeURIComponent(match[1]!));
  if (!section) return null;
  return <PageMeta title={`${section.label} · Icarus`} description={section.description} />;
}
