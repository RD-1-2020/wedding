# AGENTS.md

Harness and language: `.cursor/rules/base.mdc`. This file is product and code only.

## Product

Invitation site for guests (Veronika and Dmitry, 26 December 2026): hero countdown, story, schedule, guest details, RSVP, locations. Brand: **Ethereal Union**. Visual and layout source of truth: `docs/DESIGN.md` and the mock in `docs/stitch_modern_material_redesign/` (`DESIGN.md`, `code.html`, `screen.png`). Do not implement the old shadcn / weddingpost-wave / Yami `#time-line` look.

## Stack

- Angular **22** standalone, TypeScript, npm
- **Angular Material (Material 3)** — theme tokens from `docs/DESIGN.md` / Stitch YAML
- Playfair Display + Inter; **Material Symbols Outlined**
- `npm start` → `http://localhost:4200/`; `npm test` (Vitest)
- No shadcn/ui, no Spartan (`@spartan-ng/*`), no Bootstrap, no CLI placeholder UI
- `index.html` `lang="ru"`

## Visual

| Token | Role | Hex |
|---|---|---|
| powder-pink | primary container / soft accent | `#F4C2C2` |
| real-gold | jewelry metal, rules, CTA, neon names | `#D4AF37` |
| charcoal-text | body and headlines | `#1B1C1B` |
| surface-warm | canvas | `#FBF9F7` |
| background | page | `#fff8f7` |
| neon-glow | name glow | `#FFF0F5` |

Gold must read as **real metal jewelry**, not mustard. `#C6A15B` is forbidden. Full M3 scale and type sizes: `docs/DESIGN.md`.

## Angular

Standalone, `inject()`, `input()` / `output()`, signals, `@if` `@for` `@switch`. Separate templates. No `any`. Guest strings in Russian in templates.
