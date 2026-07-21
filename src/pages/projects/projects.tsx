import Chip from "@/components/ui/chip/chip";
import ProjectModal from "@/components/projects/project-modal";
import { getProject, projects } from "@/content/projects";
import { useCallback } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link, useSearchParams } from "react-router";
import styles from "./projects.module.scss";

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedProject = getProject(searchParams.get("project") ?? undefined);
  const isModalOpen = Boolean(
    selectedProject && selectedProject.detailsVisible !== false,
  );
  const closeModal = useCallback(() => {
    setSearchParams((params) => {
      const nextParams = new URLSearchParams(params);
      nextParams.delete("project");
      return nextParams;
    });
  }, [setSearchParams]);

  return (
    <section className={styles.projects_page}>
      <header>
        <h1>Все проекты</h1>
      </header>
      <div className={styles.feed}>
        {projects.map((project, index) => (
          <article className={styles.project} key={`${project.title}-${index}`}>
            <button
              className={styles.preview}
              type="button"
              disabled={project.detailsVisible === false}
              onClick={() => {
                if (project.detailsVisible === false) return;

                setSearchParams((params) => {
                  const nextParams = new URLSearchParams(params);
                  nextParams.set("project", project.slug);
                  return nextParams;
                });
              }}
              aria-label={
                project.detailsVisible !== false
                  ? `Открыть проект «${project.title}»`
                  : `Описание проекта «${project.title}» скоро появится`
              }
            >
              {project.image && <img src={project.image} alt="" />}
            </button>
            <div className={styles.content}>
              <div className={styles.info}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className={styles.stack} aria-label="Технологии">
                {project.stack.map((technology) => (
                  <Chip variant="secondary" key={technology}>
                    {technology}
                  </Chip>
                ))}
              </div>
              {project.detailsVisible !== false && (
                <Link
                  className={styles.link}
                  to={`/projects/${project.slug}`}
                >
                  Открыть страницу
                  <HiArrowUpRight aria-hidden="true" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          open={isModalOpen}
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
