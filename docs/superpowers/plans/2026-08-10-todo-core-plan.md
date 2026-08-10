# Todo Core Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the planned Todo flow from Task 3 through Task 7.

**Architecture:** Keep `Todo[]` state and all mutations in `src/App.tsx`. Use small presentational components for input, list, and item rendering; use a local list visibility flag for completed-item display.

**Tech Stack:** React 19, TypeScript, Vite, Node built-in test runner.

## Global Constraints

- Keep the initial scope to adding, displaying, toggling, deleting, and hiding/showing completed todos.
- Keep Todo state in React state in `src/App.tsx`.
- Reject empty or whitespace-only input.
- Preserve immutable state updates and accessibility basics.
- Do not add a server, database, authentication, persistence, or new dependency.
- Run `npm test`, `npm run lint`, and `npm run build` in that order after implementation.

### Task 3: Todo Basic Functionality

**Files:**
- Create: `src/types/todo.ts`
- Create: `src/components/TodoInput.tsx`
- Create: `src/components/TodoList.tsx`
- Create: `src/components/TodoItem.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- `Todo`: `{ id: number; text: string; completed: boolean }`.
- `TodoInput` receives `onAdd: (text: string) => void`.
- `TodoList` receives `todos`, `onToggle`, and `onDelete` callbacks.
- `TodoItem` receives one `Todo`, `onToggle`, and `onDelete` callbacks.

- [ ] Write the minimal component behavior and test seam needed for add, toggle, and delete.
- [ ] Run the focused test and confirm the missing flow fails.
- [ ] Implement the components and immutable App state updates.
- [ ] Run type-check and build checks.
- [ ] Review diff/status and commit `Implement Todo basic functionality`.
- [ ] Merge the task branch into `main` and confirm status.

### Task 4: Basic Behavior Verification

**Files:**
- Create: `src/App.test.tsx`
- Modify: `package.json` only if the existing test command cannot execute the tests.

- [ ] Add tests covering add, toggle, and delete behavior.
- [ ] Run `npm test` and fix only the cause of failures.
- [ ] Run `npm run lint` and `npm run build`.
- [ ] Commit `Test Todo basic behavior`, merge into `main`, and verify status.

### Task 5: Completed-Item Visibility

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/TodoList.tsx`
- Modify: `src/App.test.tsx`

- [ ] Add a visibility control that filters only rendered completed items.
- [ ] Test hiding and showing a completed item without deleting it.
- [ ] Run `npm test`, `npm run lint`, and `npm run build`.
- [ ] Commit `Add completed Todo visibility`, merge into `main`, and verify status.

### Task 6: Verification Loop

**Files:**
- Review: `package.json`, `src/`, `src/App.test.tsx`

- [ ] Run test, lint, and build in the required order.
- [ ] If a command fails, identify its cause and make the smallest relevant correction.
- [ ] Re-run all three commands and commit any correction as one Task 6 commit.
- [ ] Merge into `main` and verify the merge result.

### Task 7: AI and Human Review

**Files:**
- Review: `AGENTS.md`, `package.json`, `src/`, `src/App.test.tsx`

- [ ] Check every Task 3-6 requirement against the current files and tests.
- [ ] Inspect `git diff`, `git status`, and recent commits for unrelated changes.
- [ ] Run the final verification commands and report any remaining issue.
