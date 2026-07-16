import githubIcon from "@/assets/images/github.svg";
import hhIcon from "@/assets/images/hh.svg";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Обо мне</a>
          </li>
          <li>
            <a href="#">Опыт работы</a>
          </li>
          <li>
            <a href="#">Проекты</a>
          </li>
          <li>
            <a href="#">Технологии</a>
          </li>
          <li>
            <a href="#">Контакты</a>
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
        <button>Связаться со мной</button>
      </div>
    </header>
  );
}
