import { projects } from "@/config";
import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import { Link } from "react-router";
import ProjectCard from "./project-card";
import styles from "./projects.module.scss";

export type ProjectsProps = HTMLAttributes<HTMLElement>;

export default function Projects({ className, ...props }: ProjectsProps) {
  return (
    <section className={cn(styles.projects, className)} {...props}>
      <header>
        <h2>Проекты</h2>
        <Link to="/projects">Все проекты →</Link>
      </header>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={`${project.title}-${index}`} />
        ))}
      </div>
    </section>
  );
}
