# Portfolio

Личный сайт-портфолио fullstack-разработчика: опыт работы, достижения, проекты, технологии и контакты.

Проект собран как полностью клиентское приложение. После сборки результат лежит в `dist/` и может раздаваться как статические `html/css/js` файлы.

## Стек

- React
- TypeScript
- Vite
- React Router
- SCSS Modules
- GitHub Pages

## Запуск локально

```bash
npm ci
npm run dev
```

По умолчанию Vite поднимет dev-сервер и покажет локальный URL в терминале.

## Переменные окружения

Для клиентской сборки Vite читает только переменные с префиксом `VITE_`.

Создай `.env` по примеру `.env.example`:

```env
VITE_URL_GITHUB=https://github.com/username
VITE_URL_HH=https://hh.ru/resume/...
```

Эти значения подставляются во время `npm run build`, поэтому для GitHub Pages они должны быть заданы в GitHub Actions variables.

## Команды

```bash
npm run dev
```

Запуск проекта в режиме разработки.

```bash
npm run lint
```

Проверка ESLint.

```bash
npm run build
```

TypeScript-проверка и production-сборка в `dist/`.

```bash
npm run preview
```

Локальный просмотр production-сборки.

## Структура

```text
src/
  assets/
    images/
    scss/
  components/
    ui/
  pages/
    index/
    projects/
  config.tsx
```

Основной контент сайта редактируется в `src/config.tsx`: опыт, достижения, технологии и контакты.

Проекты лежат отдельно в `src/content/projects/items/`. Каждый проект — это `.ts` файл с типизированным описанием:

```ts
import type { ProjectEntry } from "../types";

const project: ProjectEntry = {
  slug: "driver-app",
  order: 2,
  title: "Мобильное приложение водителя",
  description: "PWA и Android-приложение для организации перевозки грузов",
  stack: ["Angular", "TypeScript", "Capacitor"],
  image: "/projects/dapp_1.png",
  role: "Что я делал в проекте",
  features: ["Offline-режим", "Синхронизация данных"],
  article: {
    href: "/news/driver-app",
    label: "Читать инженерную статью",
  },
};

export default project;
```

Порядок отображения управляется полем `order`.

## MDX-статьи

Проект поддерживает MDX: Markdown вместе с React-компонентами.

Статьи лежат в `src/content/news/` и открываются по URL:

```text
/news/<имя-файла-без-mdx>
```

Например:

```text
/news/logistics-platform
```

Внутри MDX можно экспортировать `frontmatter`:

```mdx
export const frontmatter = {
  title: "Название статьи",
  description: "Краткое описание",
  date: "2026-07-19",
};
```

React-компоненты для MDX лежат в `src/components/mdx/`.

Доступные компоненты:

- `ProjectNote` — выделенная заметка или блок «Кейс».
- `TechStack` — список технологий в виде чипов.
- `NoWrap` — запрещает перенос текста внутри обертки.
- `MediaImage` — одиночная картинка с подписью.
- `ImageGallery` — адаптивная галерея картинок.
- `VideoBlock` — embed-видео или локальное видео из `public`.
- `LocalVideo` — явная обертка для локального видео.
- `BeforeAfter` — интерактивное сравнение «было/стало».
- `MdxGrid` — сетка на 2 или 3 колонки.
- `MdxCard` — карточка внутри статьи.
- `TableOfContents` — ручное оглавление с якорными ссылками.

Картинки можно сделать открываемыми на весь экран:

```mdx
<MediaImage
  src="/projects/dapp_1.png"
  alt="Экран приложения"
  caption="Можно открыть по клику."
  zoomable
/>
```

Для галереи можно включить это сразу для всех картинок:

```mdx
<ImageGallery
  zoomable
  images={[
    { src: "/projects/dapp_1.png", alt: "Экран 1" },
    { src: "/projects/dapp_2.png", alt: "Экран 2" },
  ]}
/>
```

Локальное видео можно положить, например, в `public/videos/demo.mp4` и вставить:

```mdx
<LocalVideo
  src="/videos/demo.mp4"
  poster="/projects/dapp_1.png"
  caption="Демо проекта."
/>
```

## Деплой

Деплой настроен через GitHub Actions в `.github/workflows/build.yml`.

Workflow:

- устанавливает зависимости;
- запускает lint;
- проверяет обязательные env-переменные;
- собирает проект;
- добавляет `404.html` для SPA fallback;
- публикует `dist/` на GitHub Pages.

Сайт рассчитан на кастомный домен и собирается с `base: "/"`.
