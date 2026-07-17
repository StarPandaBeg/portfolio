import githubIcon from "@/assets/images/github.svg";
import hhIcon from "@/assets/images/hh.svg";
import Button from "@/components/ui/button/button";
import hashNavigation from "../pages/index/hash-navigation";
import styles from "./header.module.scss";

export default function Header() {
  const pageUrl = (hash: string) => `${import.meta.env.BASE_URL}#${hash}`;

  return (
    <header className={styles.header}>
      <main>
        <nav>
          <ul>
            <li>
              <a href={pageUrl(hashNavigation["general"])}>Главная</a>
            </li>
            <li>
              <a href={pageUrl(hashNavigation["about"])}>Обо мне</a>
            </li>
            <li>
              <a href={pageUrl(hashNavigation["experience"])}>Опыт работы</a>
            </li>
            <li>
              <a href={pageUrl(hashNavigation["projects"])}>Проекты</a>
            </li>
            <li>
              <a href={pageUrl(hashNavigation["technologies"])}>Технологии</a>
            </li>
            <li>
              <a href={pageUrl(hashNavigation["contacts"])}>Контакты</a>
            </li>
          </ul>
        </nav>
        <div className={styles.header_additional}>
          <ul>
            <li>
              <a
                href={import.meta.env.VITE_URL_HH}
                target="_blank"
                rel="noreferrer"
              >
                <img src={hhIcon} alt="HeadHunter" />
              </a>
            </li>
            <li>
              <a
                href={import.meta.env.VITE_URL_GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
            </li>
          </ul>
          <Button variant="muted" size="sm">
            Связаться со мной
          </Button>
        </div>
      </main>
    </header>
  );
}
