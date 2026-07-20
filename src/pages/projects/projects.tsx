import Chip from "@/components/ui/chip/chip";
import ProjectModal from "@/components/projects/project-modal";
import { projects } from "@/content/projects";
import { useCallback, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router";
import styles from "./projects.module.scss";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0] ?? null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

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
              onClick={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
              aria-label={project.title}
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
              <Link
                className={styles.link}
                to={`/projects/${project.slug}`}
              >
                Открыть страницу
                <HiArrowUpRight aria-hidden="true" />
              </Link>
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
