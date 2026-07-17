import Chip from "@/components/ui/chip/chip";
import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./project-card.module.scss";

export interface ProjectEntry {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  image?: string;
}

export type ProjectCardProps = HTMLAttributes<HTMLElement> & {
  project: ProjectEntry;
};

export default function ProjectCard({
  className,
  project,
  ...props
}: ProjectCardProps) {
  const preview = (
    <>
      {project.image && <img src={project.image} alt="" />}
      {project.href && (
        <span aria-hidden="true">
          <HiArrowUpRight />
        </span>
      )}
    </>
  );

  return (
    <article className={cn(styles.card, className)} {...props}>
      {project.href ? (
        <a
          className={styles.preview}
          href={project.href}
          aria-label={project.title}
        >
          {preview}
        </a>
      ) : (
        <div className={styles.preview}>{preview}</div>
      )}
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.stack} aria-label="Технологии">
          {project.stack.map((technology) => (
            <Chip variant="secondary" key={technology}>
              {technology}
            </Chip>
          ))}
        </div>
      </div>
    </article>
  );
}
