# Отчёт о реализации 01

## Палитра

Токены соответствуют **NFR-02** из `docs/requirements.md`, а не горчичному золоту `#C6A15B` из `AGENTS.md`.

| Токен | Hex | Роль в UI |
|---|---|---|
| dusty-rose | `#C4A4A5` | `--primary`, акцент |
| powder | `#F4E8E1` | `--background` |
| cream | `#F3E5C8` | `--card` |
| gold-highlight | `#F0D56A` | блик градиента |
| gold-mid | `#D4AF37` | `--ring`, металл CTA |
| gold-shadow | `#A68521` | глубина градиента |

CTA, линейки и орнаменты — тонкий градиент highlight → mid → shadow. Горчица не используется.

## UI-kit

Страница собрана на **Spartan UI** (`@spartan-ng/brain` + helm-копии через `@spartan-ng/cli`) — Angular-порт [shadcn/ui](https://ui.shadcn.com/), стиль **vega** (актуальный New York). Примитивы: button (`cva` + вариант `gold`), card, input, textarea, label, field, switch, badge, separator, alert. CSS-переменные shadcn переложены на палитру NFR-02.

## Реализованные истории

- US-01
- US-02
- US-03
- US-04
- US-05
- US-06
- US-07
- US-08
- US-09
- US-10
- US-11
- US-12
- US-13

## Ключевые файлы

- `src/app/invitation/invitation-page.ts`
- `src/app/sections/hero-section.ts`
- `src/app/sections/copy-section.ts`
- `src/app/sections/couple-section.ts`
- `src/app/sections/schedule-section.ts`
- `src/app/sections/rsvp-section.ts`
- `src/app/sections/love-story-section.ts`
- `src/app/sections/map-section.ts`
- `src/styles.css`
- `components.json`
- `libs/ui/`
- `functions/rsvp/index.js`
- `src/assets/photos/` (18 заглушек NFR-05, без пересборки)

## Отложено

- URL Cloud Run в `RSVP_FUNCTION_URL` — плейсхолдер до деплоя `functions/rsvp`; секреты Telegram только в env функции.
- Живые фото вместо JPEG-заглушек.
