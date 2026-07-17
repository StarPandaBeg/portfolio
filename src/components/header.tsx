import githubIcon from "@/assets/images/github.svg";
import hhIcon from "@/assets/images/hh.svg";
import Button from "@/components/ui/button/button";
import { Link } from "react-router";
import hashNavigation from "../pages/index/hash-navigation";
import styles from "./header.module.scss";

export default function Header() {
  const pageUrl = (hash: string) => ({
    pathname: "/",
    hash: `#${hash}`,
  });

  return (
    <header className={styles.header}>
      <main>
        <nav aria-label="Основная навигация">
          <ul>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <Link to={pageUrl(hashNavigation["about"])}>Обо мне</Link>
            </li>
            <li>
              <Link to={pageUrl(hashNavigation["experience"])}>
                Опыт работы
              </Link>
            </li>
            <li>
              <Link to={pageUrl(hashNavigation["projects"])}>Проекты</Link>
            </li>
            <li>
              <Link to={pageUrl(hashNavigation["technologies"])}>
                Технологии
              </Link>
            </li>
            <li>
              <Link to={pageUrl(hashNavigation["contacts"])}>Контакты</Link>
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
