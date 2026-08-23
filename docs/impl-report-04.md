# Отчёт о реализации 04

Полная перевёрстка гостевой страницы под макет Stitch (`docs/stitch_modern_material_redesign/code.html`) и `docs/DESIGN.md`. Тема Angular Material 3 из прогона 03 сохранена. Старые паттерны сняты: лонгрид `#time-line`, S-кривая weddingpost, блок «Жених и невеста».

## Реализованные истории

- US-01 — неон-герой, липкая шапка V&D, якоря, календарь
- US-02 — таймер дни / часы / минуты / секунды; старт 15:30 / 14:30 по `full`
- US-03 — «Наша история» `#story`, четыре карточки 2×2
- US-04 — короткая программа и короткий виджет карты
- US-05 — регистрация 14:30 и полный виджет при `?full=true`
- US-06 — `calendar_month` в шапке → Google Календарь (дата 2026-12-26, конец 22:30)
- US-07 — «Для гостей»: подарки, дресс-код, гардероб/этаж, Марина (tel / Telegram / VK)
- US-08 — RSVP: Имя, Фамилия, «Буду с парой», «Буду с ребенком», textarea, срок 15 ноября
- US-09 — POST JSON на Cloud Run (`token` из query, поля с формы)
- US-10 — две карточки локаций + iframe Яндекс.Карт
- US-11 — порядок блоков, якоря, меню на узкой ширине

## Порядок страницы

Шапка → герой `#home` → приветствие → `#story` → `#program` → `#details` → `#rsvp` → локации → подвал V&D.

## Файлы

| Файл | Роль |
|---|---|
| `src/app/layout/site-header.ts` / `.html` | Липкий TopAppBar: V&D, якоря, `calendar_month`, меню на mobile |
| `src/app/layout/site-footer.ts` / `.html` | Подвал V&D, «Связаться с нами» → `#details` |
| `src/app/sections/hero-section.html` | Неон «Вероника и Дмитрий», слоты `hero-desktop` / `hero-portrait`, стеклянный таймер |
| `src/app/sections/copy-section.*` | Приветствие FR-03 |
| `src/app/sections/love-story-section.*` | Четыре карточки истории |
| `src/app/sections/schedule-section.*` | Золотой вертикальный таймлайн `#program` |
| `src/app/sections/details-section.*` | «Для гостей» |
| `src/app/sections/rsvp-section.html` | Анкета: подписи и кнопка «Отправить» |
| `src/app/sections/map-section.*` | Локации + виджет |
| `src/app/ui/photo-slot.*` | Квадратный слот / заглушка камеры |
| `src/app/core/wedding.constants.ts` | Слоты программы, 4 карточки истории, локации, календарь |
| `src/styles.css` | Токены Stitch, неон, gilt-card, таймлайн |
| `src/app/invitation/invitation-page.*` | Сборка страницы |

Удалены: `couple-section`, `schedule-icon`, `scheduleWave` / зигзаг 2022–2026.

## Фото-слоты (`src/assets/photos/`)

Имена из `docs/DESIGN.md`: `hero-desktop`, `hero-portrait`, `story-meeting`, `story-first-date`, `story-travel`, `story-proposal` (+ `@2x`). Живые кадры под теми же именами не требуют смены вёрстки.

## Отложено

- URL Cloud Run в `RSVP_FUNCTION_URL` — плейсхолдер до деплоя функции
- Живые фото вместо части заглушек (слот «Знакомство» — явная рамка)
- Отдельная страница политики не делается (FR-12)
