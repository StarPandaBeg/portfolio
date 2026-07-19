import { HiTruck } from "react-icons/hi2";
import type { ContactEntry } from "./components/contacts/contacts";
import type { AchievementEntry } from "./pages/index/components/experience/achievement-card";
import type { JobEntry } from "./pages/index/components/experience/job-row";
import type { ProjectEntry } from "./pages/index/components/projects/project-card";
import type { TechnologyGroup } from "./pages/index/components/technologies/technologies";

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
      ],
    },
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "Платформа логистики",
    description: "B2B-платформа для управления логистическими операциями",
    stack: ["Angular", "TypeScript", "NodeJS"],
    image: "/projects/web_1.png",
  },
  {
    title: "Мобильное приложение водителя",
    description: "PWA и Android-приложение для организации перевозки грузов",
    stack: ["Angular", "TypeScript", "Capacitor"],
    image: "/projects/dapp_1.png",
    href: "/news/driver-app",
  },
  {
    title: "Онлайн-редактор документов",
    description:
      "Редактор документов с совместным доступом и функционалом согласующих",
    stack: ["React", "TypeScript", "TipTap", "yJS", "NestJS"],
    image: "/projects/word_1.png",
  },
  {
    title: "ИИ-генератор презентаций",
    description: "Автоматический генератор и редактор презентаций на основе ИИ",
    stack: ["React", "TypeScript", "NestJS", "Express", "NATS"],
    image: "/projects/pai_1.png",
  },
  {
    title: "Система распределения задач",
    description:
      "Автоматический таск-трекер с распределением задач по множеству критерий",
    stack: ["React", "Zustand", "SCSS", "TypeScript", "NodeJS"],
    image: "/projects/plan_1.jpg",
  },
  {
    title: "Календарь мероприятий",
    description:
      "Календарь мероприятий МинСпорта с автоматическим парсингом официального PDF-расписания",
    stack: ["React", "SCSS", "TypeScript", "NestJS"],
    image: "/projects/calendar_1.png",
  },
  {
    title: "ИИ-анализ инцидентов",
    description: "Автоматический анализ инцидентов на видео в реальном времени",
    stack: ["React", "Zustand", "SCSS", "TypeScript", "NodeJS"],
    image: "/projects/incident_1.png",
  },
  {
    title: "Генератор случайных чисел",
    description:
      "Генерация лотерейных комбинаций, использующая видеопотоки в качестве элемента случайности",
    stack: ["React", "React Query", "Tailwind", "MotionJS"],
    image: "/projects/generator_1.jpg",
  },
  {
    title: "Генератор лотерейных механик",
    description:
      "Умная симуляция лотерейных билетов с возможностью тестирования тиражей и аналитики",
    stack: ["React", "React Query", "Tailwind", "MotionJS"],
    image: "/projects/lottery_1.png",
  },
];

export const technologies: TechnologyGroup[] = [
  {
    title: "Frontend",
    items: [
      "Angular",
      "React",
      "TypeScript",
      "RxJS",
      "SCSS",
      "Vite",
      "Ionic",
      "Capacitor",
    ],
  },
  {
    title: "Backend",
    items: [
      "NodeJS",
      "Express",
      "PostgreSQL",
      "REST API",
      "Docker",
      "Sentry",
      "Superset",
      "Git",
    ],
  },
];

export const contacts: ContactEntry[] = [
  {
    label: "E-Mail",
    value: "kostya.shmurakov@mail.ru",
    href: "mailto:kostya.shmurakov@mail.ru",
  },
  {
    label: "Telegram",
    value: "@k_shmurakov",
    href: "https://t.me/k_shmurakov",
  },
  {
    label: "hh.ru",
    value: "Резюме",
    href: import.meta.env.VITE_URL_HH,
  },
];
