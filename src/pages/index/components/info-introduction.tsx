import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";

import githubIcon from "@/assets/images/github_inverted.svg";
import placeholderImg from "@/assets/images/placeholder.jpg";
import styles from "./info-introduction.module.scss";

export type InfoIntroductionProps = HTMLAttributes<HTMLDivElement>;

export default function InfoIntroduction({
  className,
  ...props
}: InfoIntroductionProps) {
  return (
    <section className={cn(styles.info, className)} {...props}>
      <div className={styles.info_filler}>
        <div className={styles.info_chip}>• Ищу работу</div>
      </div>
      <main className={styles.info_main}>
        <div>
          <h2>Привет, я Костя:</h2>
          <h1>Fullstack-разработчик</h1>
        </div>
        <p>Создаю веб-приложения, которые решают реальные задачи</p>
        <div className={styles.info_btn_container}>
          <button className={styles.info_btn_projects}>
            Смотреть проекты →
          </button>
          <a
            href={import.meta.env.VITE_URL_GITHUB}
            target="_blank"
            rel="noreferrer"
            className={styles.info_btn_github}
          >
            GitHub&nbsp;&nbsp;
            <img src={githubIcon} width={16} />
          </a>
        </div>
      </main>

      <img src={placeholderImg} className={styles.info_avatar} />
    </section>
  );
}
