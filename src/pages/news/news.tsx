import { Link, useParams } from "react-router";
import styles from "./news.module.scss";
import type { ComponentType } from "react";

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

function getArticle(slug?: string) {
  if (!slug) return null;

  return articles[`../../content/news/${slug}.mdx`] ?? null;
}

export default function NewsPage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <section className={styles.news}>
        <Link className={styles.back} to="/">
          ← На главную
        </Link>
        <h1>Статья не найдена</h1>
        <p>Проверь slug в адресной строке или создай MDX-файл в `src/content/news`.</p>
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
      <div className={styles.content}>
        <Article />
      </div>
    </article>
  );
}
