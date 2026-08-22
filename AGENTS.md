# AGENTS.md

Harness and language: `.cursor/rules/base.mdc`. This file is product and code only.

## Product

Invitation site for guests: couple, date, schedule, venue, dress code, how to reply.

## Stack

- Angular 22 standalone, TypeScript, npm
- Tailwind + shadcn/ui (New York). Spartan UI (`@spartan-ng/*`) if it supports this Angular version; otherwise the same primitives by hand (button, card, input, badge, separator)
- `npm start` → `http://localhost:4200/`; `npm test` (Vitest)
- No Material, Bootstrap, or CLI placeholder UI
- `index.html` `lang="ru"`

## Visual

| Token | Role | Hex |
|---|---|---|
| dusty-rose | primary accent | `#C4A4A5` |
| powder | background, soft fills | `#F4E8E1` |
| gold | highlights, rules, CTA | `#C6A15B` |

Editorial invitation look. Contrast on powder. Semantic HTML.

## Angular

Standalone, `inject()`, `input()` / `output()`, signals, `@if` `@for` `@switch`. Separate templates. No `any`. Guest strings in Russian in templates.
