import { technologies } from "@/config";
import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import styles from "./technologies.module.scss";

export interface TechnologyGroup {
  title: string;
  items: string[];
}

export type TechnologiesProps = HTMLAttributes<HTMLElement>;

export default function Technologies({
  className,
  ...props
}: TechnologiesProps) {
  return (
    <section className={cn(styles.technologies, className)} {...props}>
      <h2>Технологии</h2>
      <div className={styles.groups}>
        {technologies.map((group) => (
          <section className={styles.group} key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
