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

Основной контент сайта редактируется в `src/config.tsx`: опыт, достижения, проекты, технологии и контакты.

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
