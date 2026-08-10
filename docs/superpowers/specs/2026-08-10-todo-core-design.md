# Todo Core and Completed-Item Visibility Design

## Scope

Implement the remaining planned Todo learning flow: create Todo items, display them, toggle completion, delete items, and hide/show completed items. Keep all Todo data in React state in `src/App.tsx`; do not add persistence, a server, authentication, or unrelated features.

## Architecture

`App.tsx` owns `Todo[]` state and passes explicit callbacks to presentational components. `TodoInput` owns only its draft input, `TodoList` renders the current list and controls completed-item visibility, and `TodoItem` renders one item with a completion control and delete button. State updates use immutable array operations.

## Behavior

- A trimmed, non-empty input creates `{ id, text, completed: false }` and clears the input.
- Empty or whitespace-only input is ignored.
- Toggling an item changes only its `completed` field.
- Deleting an item removes it from the list.
- Completed items are visible by default; a native checkbox hides or shows them without deleting them.
- Controls have labels or usable button names, and the input submits from the keyboard.

## Testing

Add behavior tests for adding, toggling, deleting, and hiding/showing completed items. Keep the existing zero-dependency Node test command unless the repository already requires another test runner.
