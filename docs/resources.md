# Полезные ссылки и ресурсы

Организация-партнёр, документация, инструменты и материалы, использованные командой в ходе разработки.

---

## Организация-партнёр

| Ресурс | Ссылка | Описание |
|--------|--------|----------|
| Сайт СПП | [psychohelp-mospoly.ru](https://psychohelp-mospoly.ru/) | Официальная платформа Службы Психологической Помощи |
| ВКонтакте СПП | [vk.com/spp_polytech](https://vk.com/spp_polytech) | Официальная группа Службы Психологической Помощи |
| Московский Политех | [mospolytech.ru](https://mospolytech.ru) | Официальный сайт Московского Политехнического Университета |
| GitHub — Frontend | [github.com/Berlkot/psycho-help](https://github.com/Berlkot/psycho-help/tree/deploy) | Исходный код фронтенда, ветка deploy |
| GitHub — Backend | [github.com/nikitabel0/mospoly-psychological-support](https://github.com/nikitabel0/mospoly-psychological-support) | FastAPI-бэкенд: модели, схемы, контроллеры, Docker |

---

## Документация по технологиям

### Frontend

| Технология | Ссылка | Зачем использовали |
|------------|--------|-------------------|
| React | [react.dev/learn](https://react.dev/learn) | Основной UI-фреймворк проекта |
| TypeScript | [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) | Типизация компонентов, пропсов, API-ответов |
| Vite | [vitejs.dev/guide](https://vitejs.dev/guide/) | Сборщик — мгновенный dev-сервер, продакшн-бандл |
| TanStack Query | [tanstack.com/query](https://tanstack.com/query/latest/docs/framework/react/overview) | Серверное состояние, кэширование, пагинация |
| Zustand | [zustand.docs.pmnd.rs](https://zustand.docs.pmnd.rs/) | Глобальное клиентское состояние (тема, сессия) |
| React Hook Form | [react-hook-form.com](https://react-hook-form.com/) | Управление формами с минимальным числом перерисовок |
| Zod | [zod.dev](https://zod.dev/) | Валидация схем данных на стороне клиента |
| Axios | [axios-http.com](https://axios-http.com/docs/intro) | HTTP-клиент для запросов к REST API |
| SCSS | [sass-lang.com/documentation](https://sass-lang.com/documentation/) | Стилизация: модули, миксины, переменные |

### Backend

| Технология | Ссылка | Зачем использовали |
|------------|--------|-------------------|
| FastAPI | [fastapi.tiangolo.com](https://fastapi.tiangolo.com/) | Фреймворк бэкенда, автодокументация Swagger |
| SQLAlchemy | [docs.sqlalchemy.org](https://docs.sqlalchemy.org/) | ORM для работы с PostgreSQL |
| PostgreSQL | [postgresql.org/docs](https://www.postgresql.org/docs/) | Основная СУБД проекта |
| Alembic | [alembic.sqlalchemy.org](https://alembic.sqlalchemy.org/en/latest/) | Миграции схемы базы данных |
| Pydantic | [docs.pydantic.dev](https://docs.pydantic.dev/) | Валидация данных и сериализация моделей |

---

## Инструменты разработки

| Инструмент | Ссылка | Описание |
|------------|--------|----------|
| Figma | [figma.com](https://www.figma.com/) | Прототипы всех страниц и дизайн-система |
| Docker | [docs.docker.com](https://docs.docker.com/) | Контейнеризация бэкенда, БД и Nginx |
| Vitest | [vitest.dev](https://vitest.dev/) | Юнит- и компонентные тесты фронтенда |
| Playwright | [playwright.dev](https://playwright.dev/) | E2e-тесты фронтенда (браузерная автоматизация) |
| Pytest | [docs.pytest.org](https://docs.pytest.org/) | Тесты бэкенда с поддержкой async |
| ESLint | [eslint.org](https://eslint.org/) | Статический анализ кода |
| Prettier | [prettier.io](https://prettier.io/docs/en/) | Единый стиль кода — TypeScript, SCSS, JSX |
| Husky | [typicode.github.io/husky](https://typicode.github.io/husky/) | Git-хуки: запуск линтера и тестов до коммита |
| GitHub Actions | [docs.github.com/actions](https://docs.github.com/en/actions) | CI/CD: автозапуск тестов при pull request |

---

## Архитектурные материалы

| Ресурс | Ссылка | Зачем |
|--------|--------|-------|
| Feature-Sliced Design | [feature-sliced.design](https://feature-sliced.design/) | Методология организации фронтенд-кода, применённая в проекте |
| FSD Tutorial | [feature-sliced.design/docs/get-started](https://feature-sliced.design/docs/get-started) | Введение в FSD: слои, срезы, сегменты |

---

## Статьи и руководства

| Статья | Ссылка | Зачем читали |
|--------|--------|-------------|
| Thinking in React | [react.dev/learn/thinking-in-react](https://react.dev/learn/thinking-in-react) | Базовая статья о компонентном мышлении |
| TypeScript Handbook | [typescriptlang.org/docs/handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | Типизация API-ответов и пропсов |
| Dark Mode Best Practices | [web.dev/patterns/theming/dark-mode](https://web.dev/patterns/theming/dark-mode) | Реализация тёмной темы через CSS-переменные |
| WCAG 2.1 Quick Reference | [w3.org/WAI/WCAG21/quickref](https://www.w3.org/WAI/WCAG21/quickref/) | Стандарт доступности при разработке модального окна |
| React Router v6 Guide | [reactrouter.com/en/main](https://reactrouter.com/en/main) | Клиентская маршрутизация, вложенные маршруты |
| SCSS Modules in React | [sass-lang.com/documentation/at-rules/use](https://sass-lang.com/documentation/at-rules/use/) | Изоляция стилей через CSS-модули |
