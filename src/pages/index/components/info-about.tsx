import catImg from "@/assets/images/cat.png";
import IconCard from "@/components/ui/icon-card/icon-card";
import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import {
  HiMiniBuildingOffice2,
  HiRectangleStack,
  HiTrophy,
} from "react-icons/hi2";
import styles from "./info-about.module.scss";

export type InfoAboutProps = HTMLAttributes<HTMLDivElement>;

export default function InfoAbout({ className, ...props }: InfoAboutProps) {
  return (
    <section className={cn(styles.about, className)} {...props}>
      <img className={styles.about_img} src={catImg} alt="" />
      <main className={styles.about_main}>
        <h2>Обо мне</h2>
        <p>
          Fullstack-разработчик с опытом разработки enterprise B2B-продуктов на
          Angular/NodeJS. Разрабатываю веб-приложения, интегрирую REST API,
          работаю с бизнес-логикой и уделяю особое внимание качеству кода и
          удобству интерфейсов.
        </p>
        <ul>
          <li>
            <IconCard
              icon={HiMiniBuildingOffice2}
              header="1.5+ года"
              content="коммерческого опыта"
            />
          </li>
          <li>
            <IconCard
              icon={HiRectangleStack}
              header="5+ проектов"
              content="в портфолио"
            />
          </li>
          <li>
            <IconCard
              icon={HiTrophy}
              header="10+ призовых мест"
              content="в хакатонах и соревнованиях"
            />
          </li>
          {/* <li>
            <IconCard
              icon={HiMiniBookOpen}
              header="Постоянно учусь"
              content="и развиваюсь"
            />
          </li> */}
        </ul>
      </main>
    </section>
  );
}
