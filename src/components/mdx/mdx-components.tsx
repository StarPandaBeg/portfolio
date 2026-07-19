import Chip from "@/components/ui/chip/chip";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";
import styles from "./mdx-components.module.scss";

export function ProjectNote({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className={styles.note}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

export function TechStack({ items }: { items: string[] }) {
  return (
    <div className={styles.stack}>
      {items.map((item) => (
        <Chip variant="secondary" key={item}>
          {item}
        </Chip>
      ))}
    </div>
  );
}

export function MediaImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className={styles.media}>
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function ImageGallery({
  images,
}: {
  images: { src: string; alt: string; caption?: string }[];
}) {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <MediaImage
          src={image.src}
          alt={image.alt}
          caption={image.caption}
          key={image.src}
        />
      ))}
    </div>
  );
}

export function VideoBlock({
  src,
  title,
  caption,
  poster,
}: {
  src: string;
  title: string;
  caption?: string;
  poster?: string;
}) {
  const isLocalVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

  return (
    <figure className={styles.video}>
      {isLocalVideo ? (
        <video src={src} poster={poster} controls preload="metadata" />
      ) : (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function LocalVideo({
  src,
  poster,
  caption,
}: {
  src: string;
  poster?: string;
  caption?: string;
}) {
  return (
    <VideoBlock
      src={src}
      title="Локальное видео"
      poster={poster}
      caption={caption}
    />
  );
}

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  caption,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <figure className={styles.compare}>
      <div className={styles.compare_frame}>
        <img src={before} alt={beforeAlt} />
        <div
          className={styles.compare_after}
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <img src={after} alt={afterAlt} />
        </div>
        <span className={styles.compare_label_before}>Было</span>
        <span className={styles.compare_label_after}>Стало</span>
        <span
          className={styles.compare_handle}
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label="Сравнить было и стало"
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function MdxGrid({
  columns = 2,
  children,
}: {
  columns?: 2 | 3;
  children: ReactNode;
}) {
  return (
    <div
      className={styles.grid}
      style={{ "--mdx-grid-columns": columns } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function MdxCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

export function TableOfContents({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav className={styles.toc} aria-label="Содержание статьи">
      <strong>Содержание</strong>
      <ol>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
