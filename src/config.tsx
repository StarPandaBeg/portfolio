import { HiTruck } from "react-icons/hi2";
import type { AchievementEntry } from "./pages/index/components/experience/achievement-card";
import type { JobEntry } from "./pages/index/components/experience/job-row";
import type { ProjectEntry } from "./pages/index/components/projects/project-card";

export const jobs: JobEntry[] = [
  {
    icon: HiTruck,
    post: "Младший разработчик",
    time: "2024 - настоящее время",
    project: "B2B-платформа учета логистических операций",
    responsibilities: [
      <>
        Разрабатываю основную <b>веб-платформу</b> для управления договорами,
        заявками, перевозками и маршрутами
      </>,
      <>
        Создаю <b>PWA-приложение и мобильное</b> для водителей: offline-режим,
        синхронизация, поддержка нескольких аккаунтов и работа со статусными
        цепочками
      </>,
      <>
        Интегрирую внешние сервисы, такие как <b>Apache Superset </b>и
        <b> Sentry</b>
      </>,
      <>Участвую в проектировании, оптимизации и поддержке проекта</>,
    ],
    stack: [
      "Angular",
      "NodeJS",
      "Express",
      "TypeScript",
      "RxJs",
      "Capacitor",
      "Ionic",
    ],
  },
];

export const achievements: AchievementEntry[] = [
  {
    icon: "🥉",
    date: "апрель 2025",
    title: "3 место",
    description:
      "Чемпионат профессионального мастерства Госкорпорации «Росатом» AtomSkills",
    link: {
      label: "Интервью",
      href: "https://vk.ru/wall-122531146_5367",
    },
  },
  {
    icon: "🥇",
    date: "апрель 2026",
    title: "1 место",
    description:
      "Чемпионат профессионального мастерства Госкорпорации «Росатом» AtomSkills",
    link: {
      label: "Подробнее",
      href: "https://vk.ru/wall-122531146_7949",
    },
  },
  {
    icon: "🏆",
    date: "2024–2026",
    title: "8+ призовых мест",
    description: "В других профессиональных соревнованиях разного уровня",
    modal: {
      label: "Подробнее",
      title: "Профессиональные достижения",
      description:
        "Призовые места в хакатонах и профессиональных соревнованиях:",
      items: [
        {
          name: "Greenskills - отборочный этап чемпионата Росатома - 2026",
          result: "2 место",
          resultColor: "silver",
          case: "Кейс: ML-система автоматического мониторинга инцидентов с камер наружного наблюдения",
        },
        {
          name: "Greenskills - отборочный этап чемпионата Росатома - 2025",
          result: "3 место",
          resultColor: "bronze",
          case: "Кейс: Интеллектуальная система генерации презентаций",
        },
        {
          name: "Продуктовое программирование - 2025",
          result: "3 место",
          resultColor: "bronze",
          case: "Кейс: Электронное табло очереди для нужд Почты Донбасса",
        },
        {
          name: "Продуктовое программирование - 2024",
          result: "3 место",
          resultColor: "bronze",
          case: "Кейс: Календарь спортивных мероприятий МинСпорта РФ",
        },
        {
          name: "Код мира - 2024",
          result: "3 место",
          resultColor: "bronze",
          case: "Кейс: Автоматическая система ранжирования кандидатов на вакансии",
        },
        {
          name: "Кубок Новых Регионов - 2024",
          result: "1 место",
          resultColor: "gold",
          case: "Кейс: CRM-система для учета командировочных расходов",
        },
        {
          name: "«Цифровой прорыв. Сезон: искусственный интеллект» - 2024",
          result: "2 место",
          resultColor: "silver",
          case: "Кейс: Интеллектуальный помощник техподдержки Rutube",
        },
      ],
    },
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "Платформа логистики",
    description: "B2B-платформа для управления логистическими операциями",
    stack: ["Angular", "TypeScript", "NodeJS"],
    href: "#",
  },
  {
    title: "Платформа логистики",
    description: "B2B-платформа для управления логистическими операциями",
    stack: ["Angular", "TypeScript", "NodeJS"],
    href: "#",
  },
  {
    title: "Платформа логистики",
    description: "B2B-платформа для управления логистическими операциями",
    stack: ["Angular", "TypeScript", "NodeJS"],
    href: "#",
  },
  {
    title: "Платформа логистики",
    description: "B2B-платформа для управления логистическими операциями",
    stack: ["Angular", "TypeScript", "NodeJS"],
    href: "#",
  },
];
