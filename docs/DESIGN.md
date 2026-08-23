# Дизайн

Источник правды по виду: бренд **Ethereal Union**, макет  
`docs/stitch_modern_material_redesign/` (`DESIGN.md`, `code.html`, `screen.png`).

Реализация на Angular — **Angular Material (Material 3)**. Не shadcn/ui, не Spartan, не weddingpost-волна, не лонгрид Yami-Buzzy `#time-line`. Старые токены dusty-rose `#C4A4A5`, powder `#F4E8E1`, cream `#F3E5C8` и горчица `#C6A15B` **сняты**.

Функционал (`full=true`, RSVP, виджеты карт) — `docs/requirements.md`.

## Бренд и принципы

Тихая роскошь: структура Material 3 + редакционная минималистика + **неоново-каллиграфическое золото** в героях (имена пары).

- Редакционный ритм: крупный serif, воздух, как в свадебном журнале.
- Светящиеся акценты: neon glow и металлический блик на именах и CTA.
- Материальная фактура: бумага, фольга, «стекло» (лёгкий blur), не плоский горчичный свотч.

## Палитра

Ключевой набор (Must):

| Токен | Hex | Роль |
|---|---|---|
| powder-pink | `#F4C2C2` | primary-container, мягкие акценты, контейнеры |
| real-gold | `#D4AF37` | ювелирное золото: иконки, линейки, CTA, каллиграфия |
| charcoal-text | `#1B1C1B` | основной текст |
| surface-warm | `#FBF9F7` | холст / elevation 0 |
| background | `#fff8f7` | фон страницы |
| neon-glow | `#FFF0F5` | внешнее свечение неонового текста |

**Золото — Must, высокий приоритет:** имитация **настоящего ювелирного металла**, не горчица, не хаки, не `#C6A15B`.

Шкала Material 3 (из YAML макета, использовать как токены темы):

| Токен | Hex |
|---|---|
| surface | `#fff8f7` |
| surface-dim | `#e1d8d7` |
| surface-bright | `#fff8f7` |
| surface-container-lowest | `#ffffff` |
| surface-container-low | `#fbf1f1` |
| surface-container | `#f5eceb` |
| surface-container-high | `#efe6e5` |
| surface-container-highest | `#e9e0e0` |
| on-surface | `#1f1b1b` |
| on-surface-variant | `#504444` |
| outline | `#827473` |
| outline-variant | `#d4c2c2` |
| primary | `#7b5455` |
| on-primary | `#ffffff` |
| primary-container | `#f4c2c2` |
| on-primary-container | `#734e4e` |
| secondary | `#735c00` |
| on-secondary | `#ffffff` |
| secondary-container | `#fed65b` |
| tertiary | `#486456` |
| on-tertiary | `#ffffff` |
| tertiary-container | `#b6d5c3` |
| error | `#ba1a1a` |

**Неон имён:** базовый цвет Real Gold (допустим italic); многослойный `text-shadow` с `#FFF0F5` (blur 10–20px, ~60% opacity) и мягким powder-pink.

## Типографика

- **Playfair Display** — display, headlines, неоновые имена.
- **Inter** — тело, навигация, форма, подписи.
- **Material Symbols Outlined** — иконки (календарь, камера-слот, подарки, гардероб, локации).

| Уровень | Шрифт | Размер / вес / интерлиньяж |
|---|---|---|
| display-lg | Playfair Display | 56 / 600 / 64, tracking −0.02em (mobile 40 / 48) |
| neon-invitation | Playfair Display | 48 / 500 / 56, tracking 0.05em |
| headline-lg | Playfair Display | 32 / 500 / 40 |
| headline-md | Playfair Display | 28 / 500 / 36 |
| body-lg | Inter | 18 / 400 / 28 |
| body-md | Inter | 16 / 400 / 24 |
| label-lg | Inter | 14 / 600 / 20, tracking 0.1em, caps для eyebrow |
| label-md | Inter | 12 / 500 / 16 |

Тело — charcoal / on-surface. Заголовки секций — Playfair, primary.

## Сетка и ритм

- Desktop: 12 колонок, max **1200px**, gutter 24px, боковые поля 64px.
- Mobile: 4 колонки, поля 16px, стек вертикально.
- `section-gap` ≈ 120px.
- Герой: desktop широкий кадр; mobile портрет **3:4**.
- Display и неоновые имена — по центру. Тело — по смыслу (часто центр в intro, левый в карточках и форме).

## Elevation и формы

- Фон: elevation 0, Surface Warm / background `#fff8f7`.
- Карточки: elevation 1, тень charcoal ~4% («бумага на льне»), радиус 8px (`rounded-lg`), внутренний «gilt» 1px real-gold ~5% opacity.
- Неоновые блоки: лёгкий backdrop-blur (~4px).
- Кнопки/chips: 4px (`rounded-sm`). Фото слотов: почти прямые углы (0–4px).
- Не агрессивные тени Material 2.

## Компоненты (M3)

- **Primary button:** powder-pink, текст charcoal; или secondary-filled `#735c00` / on-secondary для «Отправить» как в `code.html`.
- **Secondary:** обводка real-gold 1.5px, текст charcoal (календарь / RSVP).
- **TopAppBar:** sticky, surface/90, blur, нижняя граница powder-pink/30, без тяжёлой тени. Слева italic **V&D**, центр/справа nav, справа `calendar_month`.
- **Поля:** outlined, фокус — real-gold + мягкое свечение.
- **Чипы** невеста/жених: powder-pink, charcoal, pill — если появятся роли.
- **Таймлайн программы:** вертикальная линия real-gold 1px, узлы 8px круги real-gold, при скролле лёгкий pink bloom. Не S-кривая weddingpost и не буллеты в карточке.

## Композиция страницы

Порядок как в `code.html` (Must):

1. Sticky TopAppBar — V&D; якоря История / Программа / Детали / RSVP; иконка календаря  
2. Hero `#home` — eyebrow «Приглашение на свадьбу», неон «Вероника и Дмитрий», дата, таймер  
3. Короткое приветствие  
4. «Наша история» `#story` — **четыре** карточки  
5. «Программа дня» `#program` — золотой вертикальный таймлайн  
6. «Для гостей» `#details` — подарки, дресс-код, гардероб/этаж, Марина  
7. RSVP `#rsvp`  
8. «Локации» — две карточки + виджет(ы) Яндекс.Карт  
9. Footer V&D  

## Герой

Полноэкранный блок: фото-слот + градиентный оверлей (primary/surface/powder-pink), поверх — invitation card.

- Eyebrow label-lg, real-gold, caps: «Приглашение на свадьбу»
- Имена: `neon-invitation`, неон (real-gold + neon-glow)
- Дата Playfair: «26 декабря 2026»
- Тонкая золотая линейка
- «До начала праздника» + четыре стеклянных плитки: Дни / Часы / Минуты / Секунды

## Наша история

Сетка 2×2 (desktop), 1 колонка (mobile). У каждой карточки **квадратный** фото-слот и заголовок + текст из `code.html`:

| Карточка | Текст |
|---|---|
| Знакомство | Все началось со случайной встречи в уютной кофейне, которая изменила нашу жизнь навсегда. |
| Первое свидание | Долгие разговоры под звездным небом и осознание того, что мы нашли друг друга. |
| Путешествия | Сотни километров вместе, новые города и страны, где каждый момент был наполнен счастьем. |
| Предложение | Тот самый день, когда 'Я' и 'Ты' окончательно стали 'Мы'. Идеальный момент, идеальное 'Да'. |

Не лонгрид с одним затемнённым фоном и не три даты 2022/2023/2026 зигзагом.

## Программа дня

Вертикальный золотой таймлайн по центру. Время крупным Playfair слева (desktop), название и подпись справа. Состав слотов — FR-04 (`full=true` прячет регистрацию). Адреса в подписях, когда слот виден: регистрация — Красный проспект 68; банкет — Новая Заря, 53А; торт — «Сладкий момент вечера»; окончание — «До новых встреч!».

## Для гостей

Карточки M3 с иконками Material Symbols. Тексты, пересекающиеся с `docs/user-requirements.md`, брать дословно оттуда (дресс-код, цветы/подарки, этаж, гардероб, Марина). Ссылки Telegram/VK — реальные URL, не `#`.

## RSVP

Карточка-форма: outlined fields, чекбоксы, кнопка «Отправить» secondary. Срок 15 ноября — рядом с формой (даже если в макете его нет).

## Локации и карта

Две карточки всегда: Регистрация (Красный проспект 68) и Банкет (Отель Slumo, ул. Новая Заря, 53А). Виджет Яндекс.Карт — рядом/под карточками; какой конструктор — по `full=true` (FR-03).

## Footer

V&D, копирайт 2026. Ссылки макета («Связаться с нами», политика) не требуют отдельных бэкендов: «Связаться» ведёт к `#details` / Марине.

## Ассеты фото

Каталог: **`src/assets/photos/`**. Новые слоты Stitch (старые `love-2022-*` / `love-story-bg` / карточки жениха-невесты **не** слоты этой спеки).

| Имя файла | Роль | Размер (px) |
|---|---|---|
| `hero-desktop.jpg` | Фон героя, desktop 16:9 | 1920×1080 |
| `hero-desktop@2x.jpg` | То же, retina | 3840×2160 |
| `hero-portrait.jpg` | Фон героя, tablet/mobile 3:4 | 768×1024 |
| `hero-portrait@2x.jpg` | То же, retina | 1536×2048 |
| `story-meeting.jpg` | История: Знакомство, квадрат | 512×512 |
| `story-meeting@2x.jpg` | То же, retina | 1024×1024 |
| `story-first-date.jpg` | История: Первое свидание | 512×512 |
| `story-first-date@2x.jpg` | То же, retina | 1024×1024 |
| `story-travel.jpg` | История: Путешествия | 512×512 |
| `story-travel@2x.jpg` | То же, retina | 1024×1024 |
| `story-proposal.jpg` | История: Предложение | 512×512 |
| `story-proposal@2x.jpg` | То же, retina | 1024×1024 |

Итого **12 файлов**. Пока нет живого кадра — явная заглушка слота (рамка, русская подпись роли), не CLI-картинка. `@2x` — та же композиция. Живое фото — то же имя.

## Адаптив

iPhone/Android портрет и desktop **1920×1080**. TopAppBar: на mobile nav можно спрятать в меню, V&D и календарь остаются. Горизонтального скролла нет. Карта 1280×720 конструктора вписывается в контейнер.

Контрольные ширины: 375 / 390 / 430 / 768 / 1024 / 1280 / **1920**.

## Контраст

Charcoal на surface-warm / `#fff8f7`. Неон имён читается на оверлее героя. Поведение a11y (фокус, `alt`, `lang`) — NFR в `docs/requirements.md`.
