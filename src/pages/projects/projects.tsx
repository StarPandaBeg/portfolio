import Chip from "@/components/ui/chip/chip";
import { projects } from "@/config";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./projects.module.scss";

export default function ProjectsPage() {
  return (
    <section className={styles.projects_page}>
      <header>
        <h1>Все проекты</h1>
      </header>
      <div className={styles.feed}>
        {projects.map((project, index) => (
          <article className={styles.project} key={`${project.title}-${index}`}>
            {project.href ? (
              <a
                className={styles.preview}
                href={project.href}
                aria-label={project.title}
              >
                {project.image && <img src={project.image} alt="" />}
              </a>
            ) : (
              <div className={styles.preview}>
                {project.image && <img src={project.image} alt="" />}
              </div>
            )}
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
              {project.href && (
                <a className={styles.link} href={project.href}>
                  Перейти к проекту
                  <HiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
