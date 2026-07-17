import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";

import githubIcon from "@/assets/images/github_inverted.svg";
import meImg from "@/assets/images/me.jpg";
import placeholderImg from "@/assets/images/placeholder.jpg";
import Button from "@/components/ui/button/button";
import Chip from "@/components/ui/chip/chip";
import styles from "./info-introduction.module.scss";

export type InfoIntroductionProps = HTMLAttributes<HTMLDivElement>;

export default function InfoIntroduction({
  className,
  ...props
}: InfoIntroductionProps) {
  return (
    <section className={cn(styles.info, className)} {...props}>
      <div className={styles.info_filler}>
        <Chip dot variant="success" className={styles.info_filler_chip}>
          Ищу работу
        </Chip>
      </div>
      <main className={styles.info_main}>
        <div>
          <h2>Привет, я Костя:</h2>
          <h1>Fullstack-разработчик</h1>
        </div>
        <p>Создаю веб-приложения, которые решают реальные задачи</p>
        <div className={styles.info_btn_container}>
          <Button size="lg">Смотреть проекты →</Button>
          <Button
            as="a"
            href={import.meta.env.VITE_URL_GITHUB}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            size="lg"
          >
            GitHub&nbsp;&nbsp;
            <img src={githubIcon} width={16} alt="" />
          </Button>
        </div>
      </main>

      <picture className={styles.info_avatar}>
        <source media="(min-width: 1300px)" srcSet={placeholderImg} />
        <img src={meImg} alt="" />
      </picture>
    </section>
  );
}
