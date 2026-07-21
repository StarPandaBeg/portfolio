import Chip from "@/components/ui/chip/chip";
import ProjectModal from "@/components/projects/project-modal";
import type { ProjectEntry } from "@/content/projects";
import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import { useCallback } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { useSearchParams } from "react-router";
import styles from "./project-card.module.scss";

export type ProjectCardProps = HTMLAttributes<HTMLElement> & {
  project: ProjectEntry;
};

export default function ProjectCard({
  className,
  project,
  ...props
}: ProjectCardProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const detailsVisible = project.detailsVisible !== false;
  const isModalOpen =
    detailsVisible && searchParams.get("project") === project.slug;
  const openModal = useCallback(() => {
    if (!detailsVisible) return;

    setSearchParams((params) => {
      const nextParams = new URLSearchParams(params);
      nextParams.set("project", project.slug);
      return nextParams;
    });
  }, [detailsVisible, project.slug, setSearchParams]);
  const closeModal = useCallback(() => {
    setSearchParams((params) => {
      const nextParams = new URLSearchParams(params);
      nextParams.delete("project");
      return nextParams;
    });
  }, [setSearchParams]);
  const hasContent =
    Boolean(project.title) ||
    Boolean(project.description) ||
    project.stack.length > 0;
  const preview = (
    <>
      {project.image && <img src={project.image} alt="" />}
      {detailsVisible && (
        <span aria-hidden="true">
          <HiArrowUpRight />
        </span>
      )}
    </>
  );

  return (
    <>
      <article className={cn(styles.card, className)} {...props}>
        <button
          className={styles.preview}
          type="button"
          onClick={openModal}
          disabled={!detailsVisible}
          aria-label={
            detailsVisible
              ? `Открыть проект «${project.title}»`
              : `Описание проекта «${project.title}» скоро появится`
          }
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
