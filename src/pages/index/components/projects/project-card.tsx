import Chip from "@/components/ui/chip/chip";
import ProjectModal from "@/components/projects/project-modal";
import type { ProjectEntry } from "@/content/projects";
import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import { useCallback, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./project-card.module.scss";

export type ProjectCardProps = HTMLAttributes<HTMLElement> & {
  project: ProjectEntry;
};

export default function ProjectCard({
  className,
  project,
  ...props
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const hasContent =
    Boolean(project.title) ||
    Boolean(project.description) ||
    project.stack.length > 0;
  const preview = (
    <>
      {project.image && <img src={project.image} alt="" />}
      <span aria-hidden="true">
        <HiArrowUpRight />
      </span>
    </>
  );

  return (
    <>
      <article className={cn(styles.card, className)} {...props}>
        <button
          className={styles.preview}
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label={project.title}
        >
          {preview}
        </button>
        {hasContent && (
          <div className={styles.content}>
            {project.title && <h3>{project.title}</h3>}
            {project.description && <p>{project.description}</p>}
            {project.stack.length > 0 && (
              <div className={styles.stack} aria-label="Технологии">
                {project.stack.map((technology) => (
                  <Chip variant="secondary" key={technology}>
                    {technology}
                  </Chip>
                ))}
              </div>
            )}
          </div>
        )}
      </article>
      <ProjectModal
        open={isModalOpen}
        project={project}
        onClose={closeModal}
      />
    </>
  );
}
