# Project Instructions

## Project

- This is a small Todo learning project built with React, TypeScript, and Vite.
- Keep the initial scope to adding todos, displaying the list, toggling completion, and deleting todos.
- Keep todo state in React state in `src/App.tsx`.
- Do not add a server, database, authentication, persistence, filtering, or drag-and-drop unless the plan or user explicitly requests it.

## Repository layout

- `src/App.tsx`: application state and composition
- `src/types/todo.ts`: the `Todo` type (`id`, `text`, `completed`)
- `src/components/`: small presentational Todo components
- `src/App.test.tsx`: behavior tests for the core Todo flow
- `docs/PLAN.md`: source of truth for the current implementation sequence

## Working process

Use this order for every change:

1. **Explore**: read `docs/PLAN.md`, inspect the existing files, and trace the affected behavior.
2. **Plan**: define the smallest file and behavior change that satisfies the request.
3. **Implement**: follow the existing structure and avoid speculative abstractions or dependencies.
4. **Verify**: run the commands below in order; fix the cause of failures before rerunning them.
5. **Review**: check the requirements, `git diff`, and `git status` before reporting completion.

## Coding rules

- Prefer the simplest React and TypeScript solution that fits the current code.
- Reuse existing helpers and patterns before introducing new ones.
- Keep components focused and props explicit; do not create wrappers or abstractions with only one use.
- Reject empty or whitespace-only Todo input.
- Preserve immutable React state updates.
- Keep accessibility basics: labels, keyboard-submit behavior, and usable button names.
- Do not change unrelated files or add libraries without a demonstrated need.
- If a simplification has a known ceiling, mark it with a `ponytail:` comment and name the upgrade path.

## Verification

Run all three commands after implementation:

```text
npm test
npm run lint
npm run build
```

The tests must cover adding a Todo, toggling completion, and deleting a Todo. A change is not complete until all required commands pass, or the remaining failure is explicitly reported with its cause.

## Git commits

- When a plan Task is complete and verified, commit that Task's changes immediately.
- Keep each commit limited to one completed Task; do not include unrelated or pre-existing changes.
- Use a short imperative commit message, for example: `Implement Todo add flow`.
- Before committing, review `git diff` and `git status`; after committing, confirm the commit with `git status`.

## Completion checklist

- The requested behavior and matching tests are implemented.
- No unnecessary files, dependencies, or features were added.
- `npm test`, `npm run lint`, and `npm run build` were run.
- `git diff` and `git status` were reviewed.
- The final summary names the changed files and verification result.
