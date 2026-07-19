import { Link, useParams } from "react-router";
import type { ComponentType } from "react";
import { useEffect } from "react";
import { HiArrowUp } from "react-icons/hi2";
import styles from "./news.module.scss";

type NewsModule = {
  default: ComponentType;
  frontmatter?: {
    title: string;
    description?: string;
    date?: string;
    cover?: {
      src: string;
      alt: string;
      caption?: string;
    };
  };
};

const articles = import.meta.glob<NewsModule>("../../content/news/*.mdx", {
  eager: true,
});

const defaultMeta = {
  title: "Константин Шмураков — Fullstack-разработчик",
  description:
    "Fullstack-разработчик с опытом создания B2B-продуктов, веб-приложений и сервисов на React, Angular и Node.js.",
};

function getArticle(slug?: string) {
  if (!slug) return null;

  return articles[`../../content/news/${slug}.mdx`] ?? null;
}

function setMetaContent(selector: string, content: string) {
  document
    .querySelector<HTMLMetaElement>(selector)
    ?.setAttribute("content", content);
}

export default function NewsPage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  const pageTitle = article?.frontmatter?.title ?? "Статья не найдена";
  const pageDescription =
    article?.frontmatter?.description ??
    "Проверь slug в адресной строке или создай MDX-файл в src/content/news.";

  useEffect(() => {
    document.title = pageTitle;
    setMetaContent('meta[name="description"]', pageDescription);
    setMetaContent('meta[property="og:title"]', pageTitle);
    setMetaContent('meta[property="og:description"]', pageDescription);
    setMetaContent('meta[name="twitter:title"]', pageTitle);
    setMetaContent('meta[name="twitter:description"]', pageDescription);

    return () => {
      document.title = defaultMeta.title;
      setMetaContent('meta[name="description"]', defaultMeta.description);
      setMetaContent('meta[property="og:title"]', defaultMeta.title);
      setMetaContent('meta[property="og:description"]', defaultMeta.description);
      setMetaContent('meta[name="twitter:title"]', defaultMeta.title);
      setMetaContent('meta[name="twitter:description"]', defaultMeta.description);
    };
  }, [pageDescription, pageTitle]);

  if (!article) {
    return (
      <section className={styles.not_found}>
        <span>404</span>
        <h1>Статья не найдена</h1>
        <p>
          Похоже, такой страницы нет.
        </p>
        <div>
          <Link className={styles.back} to="/">
            ← На главную
          </Link>
          <Link className={styles.back} to="/projects">
            Смотреть проекты
          </Link>
        </div>
      </section>
    );
  }

  const Article = article.default;

  return (
    <article className={styles.news}>
      <header className={styles.hero}>
        <Link className={styles.back} to="/">
          ← На главную
        </Link>
        {article.frontmatter?.date && (
          <time dateTime={article.frontmatter.date}>
            {article.frontmatter.date}
          </time>
        )}
        {article.frontmatter?.title && <h1>{article.frontmatter.title}</h1>}
        {article.frontmatter?.description && (
          <p className={styles.lead}>{article.frontmatter.description}</p>
        )}
        {article.frontmatter?.cover && (
          <figure className={styles.cover}>
            <img
              src={article.frontmatter.cover.src}
              alt={article.frontmatter.cover.alt}
            />
            {article.frontmatter.cover.caption && (
              <figcaption>{article.frontmatter.cover.caption}</figcaption>
            )}
          </figure>
        )}
      </header>
      <button
        className={styles.scroll_top}
        type="button"
        aria-label="Наверх"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HiArrowUp aria-hidden="true" />
      </button>
      <div className={styles.content}>
        <Article />
      </div>
    </article>
  );
}
