---
name: orchestrate
description: Runs the wedding-site harness pipeline (analyst → developer → tester). Use when the user invokes /orchestrate, asks to orchestrate, or wants the full analyze-build-test flow for the Angular wedding app.
argument-hint: '[task description]'
disable-model-invocation: true
---

# /orchestrate

Coordinate the three project subagents. Do not implement the website, write requirements, or drive Playwright in this parent chat.

## Language

Harness instructions: English. Everything you say to the user: Russian.

## Pipeline

```
analyst → developer → tester
```

One rework loop max: if tester reports failed user stories, send developer the failing items, then tester again. Stop after that and report remaining gaps.

## Artifacts

| Step | Agent | Output |
|---|---|---|
| 1 | `analyst` | `docs/requirements.md` only — update in place, never `requirements-NN` |
| 2 | `developer` | app code + new `docs/impl-report-NN.md` (next free `NN`) |
| 3 | `tester` | new `docs/test-report-NN.md` (next free `NN`); read latest `impl-report-*.md` |

Before delegating developer or tester, glob `docs/` and pass the exact next path in the Task prompt. Rework loop also gets a new numbered file. Never overwrite old reports.

## How to delegate

Use the Task tool, **one agent at a time**, `run_in_background: false`.

1. `subagent_type`: `analyst`, then `developer`, then `tester` (names of `.cursor/agents/*.md`).
2. If a custom type is rejected, use `generalPurpose` and tell the subagent to follow the matching `.cursor/agents/<name>.md` as its system prompt.
3. Each Task prompt must include:
   - the user request (or “build the wedding site from AGENTS.md” if empty)
   - “Read `AGENTS.md` first”
   - artifact files in Russian; **final reply = path links only** (see `base.mdc` Handoff)
   - paths of upstream artifacts (paths, not contents)
   - required output path
4. After each node, show the user **only the artifact path(s)**. Do not paste or summarize the file. If the subagent returned prose, reject and re-delegate.

Do not launch the three agents in parallel.

## Stop conditions

- Analyst produced no `docs/requirements.md` → stop and explain.
- Developer produced no UI beyond the CLI placeholder → do not run tester; send developer back.
- Tester cannot reach `http://localhost:4200/` → report that; do not fake pass.

## Final message (Russian)

Path links to artifacts only. No recap of file contents.
