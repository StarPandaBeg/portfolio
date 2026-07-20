import { getProject } from "@/content/projects";
import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./project-details.module.scss";

const defaultMeta = {
  title: "Константин Шмураков — Fullstack-разработчик",
  description:
    "Fullstack-разработчик с опытом создания B2B-продуктов, веб-приложений и сервисов на React, Angular и Node.js.",
};

function setMetaContent(selector: string, content: string) {
  document
    .querySelector<HTMLMetaElement>(selector)
    ?.setAttribute("content", content);
}

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const pageTitle = project?.title ?? "Проект не найден";
  const pageDescription =
    project?.description ??
    "Проверь slug в адресной строке или создай MDX-файл в src/content/projects/items.";

  useEffect(() => {
    document.title = pageTitle;
    setMetaContent("meta[name=\"description\"]", pageDescription);
    setMetaContent("meta[property=\"og:title\"]", pageTitle);
    setMetaContent("meta[property=\"og:description\"]", pageDescription);
    setMetaContent("meta[name=\"twitter:title\"]", pageTitle);
    setMetaContent("meta[name=\"twitter:description\"]", pageDescription);

    return () => {
      document.title = defaultMeta.title;
      setMetaContent("meta[name=\"description\"]", defaultMeta.description);
      setMetaContent("meta[property=\"og:title\"]", defaultMeta.title);
      setMetaContent("meta[property=\"og:description\"]", defaultMeta.description);
      setMetaContent("meta[name=\"twitter:title\"]", defaultMeta.title);
      setMetaContent("meta[name=\"twitter:description\"]", defaultMeta.description);
    };
  }, [pageDescription, pageTitle]);

  if (!project) {
    return (
      <section className={styles.not_found}>
        <span>404</span>
        <h1>Проект не найден</h1>
        <p>Похоже, такой проект ещё не описан или ссылка поменялась.</p>
        <div>
          <Link className={styles.back} to="/">
            ← На главную
          </Link>
          <Link className={styles.back} to="/projects">
            Все проекты
          </Link>
        </div>
      </section>
    );
  }

  const Details = project.Details;

  return (
    <article className={styles.project_page}>
      <header className={styles.hero}>
        <Link className={styles.back} to="/projects">
          ← Все проекты
        </Link>
        <div className={styles.hero_text}>
          <p className={styles.eyebrow}>Проект</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        {project.article && (
          <Link className={styles.article_link} to={project.article.href}>
            {project.article.label ?? "Читать статью"}
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        )}
      </header>
      <div className={styles.content}>{Details && <Details />}</div>
    </article>
  );
}
