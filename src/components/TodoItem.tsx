import type { Todo } from '../types/todo'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark "${todo.text}" as complete`}
        />
        <span>{todo.text}</span>
      </label>
      <button type="button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  )
}
