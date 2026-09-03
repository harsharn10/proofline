import type { ReactNode } from "react";

export function StatBox({
  stats,
  note,
}: {
  stats: Array<{ label: string; value: ReactNode; href?: string }>;
  note: ReactNode;
}) {
  return (
    <aside className="rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] px-3.5 py-3 text-xs text-[var(--t2)]">
      <div className="grid grid-cols-2 gap-x-3.5 gap-y-2">
        {stats.map((stat) => {
          const content = (
            <>
              <b className="block text-base font-semibold text-[var(--t1)]">{stat.value}</b>
              {stat.label}
            </>
          );
          return stat.href ? (
            <a key={stat.label} href={stat.href} className="hover:text-[var(--acc)]">
              {content}
            </a>
          ) : (
            <div key={stat.label}>{content}</div>
          );
        })}
      </div>
      <div className="mt-2 text-[11px] text-[var(--t3)]">{note}</div>
    </aside>
  );
}
