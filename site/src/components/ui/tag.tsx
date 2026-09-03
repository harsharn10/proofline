import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";

export type TagProps = {
  icon: IconName;
  label?: string;
  value: ReactNode;
  href?: string;
};

export function Tag({ icon, label, value, href }: TagProps) {
  const contents = (
    <>
      <Icon name={icon} />
      {label ? <span>{label}</span> : null}
      <b>{value}</b>
    </>
  );
  return href ? (
    <a className="ui-tag" href={href}>
      {contents}
    </a>
  ) : (
    <span className="ui-tag">{contents}</span>
  );
}
