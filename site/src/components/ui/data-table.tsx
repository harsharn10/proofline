import type { HTMLAttributes, ReactNode } from "react";

export type DataTableProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function DataTable({ children, className = "", ...props }: DataTableProps) {
  return (
    <div className={`ui-data-table ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
