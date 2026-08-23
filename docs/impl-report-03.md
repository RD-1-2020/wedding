# Отчёт о реализации 03

Прогон только про **дизайн-систему**: Spartan / helm заменены на **Angular Material 3**, токены — из `docs/DESIGN.md` и Stitch YAML. Секции **не** перекладывались под макет `code.html`. Страница может выглядеть наполовину мигрированной.

## Реализованные истории

Функционал прошлых прогонов сохранён (NFR-02, NFR-03):

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

## Тема и токены

| Файл | Роль |
|---|---|
| `src/theme.scss` | `mat.theme()` (M3, light): primary `mat.$rose-palette`, tertiary `mat.$spring-green-palette`; типографика Inter / Playfair Display; `$overrides` шкалы Stitch |
| `src/styles.css` | CSS-переменные бренда + Tailwind `@theme` (без Spartan preset) |
| `src/index.html` | `lang="ru"`; шрифты Playfair Display, Inter, Material Symbols Outlined |

Ключевые hex (горчица `#C6A15B` не используется):

| Токен | Hex |
|---|---|
| powder-pink / primary-container | `#F4C2C2` |
| real-gold | `#D4AF37` |
| charcoal-text | `#1B1C1B` |
| surface-warm | `#FBF9F7` |
| background / surface | `#fff8f7` |
| neon-glow | `#FFF0F5` |
| primary | `#7B5455` |
| secondary | `#735C00` |
| tertiary | `#486456` |

Material-переменные: `--mat-sys-primary`, `--mat-sys-primary-container`, `--mat-sys-secondary`, `--mat-sys-surface`, и остальные из шкалы. Фокус полей — real-gold (`form-field-overrides`). Filled-кнопка — secondary `#735C00`; outlined — обводка real-gold 1.5px; tonal — powder-pink.

## Пакеты

**Добавлено:** `@angular/material@^22.1.3` (CDK уже был `^22.1.3`).

**Снято:** `@spartan-ng/brain`, `@spartan-ng/cli`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`.

**Удалено:** `libs/ui/`, `components.json`, path-алиасы `@spartan-ng/helm/*`.

**Оставлено:** Tailwind 4 для сетки и утилит вёрстки (не как UI-kit). Bootstrap нет.

## Где helm сменён на `Mat*`

Кнопки, карточки, outlined-поля, slide-toggle, chips, divider — RSVP, «Для гостей», пара, карта, кнопка календаря в программе. Без полной перекомпозиции блоков.

## Отложено на restyle-проход

- Липкий TopAppBar V&D и якоря по `code.html`
- Неон имён, стеклянные плитки таймера, слоты героя Stitch
- Четыре карточки истории 2×2 вместо лонгрида `#time-line`
- Золотой вертикальный таймлайн вместо S-кривой weddingpost
- Карточки «Для гостей» с Material Symbols; две карточки локаций
- Footer V&D, ритм секций 120px / max 1200px
- URL Cloud Run в `RSVP_FUNCTION_URL` — плейсхолдер
- Живые фото в `src/assets/photos/`
