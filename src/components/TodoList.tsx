import { useState } from 'react'
import type { Todo } from '../types/todo'
import { filterTodos } from '../todoState'
import { TodoItem } from './TodoItem'

type TodoListProps = {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  const [showCompleted, setShowCompleted] = useState(true)

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(event) => setShowCompleted(event.target.checked)}
        />
        Show completed
      </label>
      <ul>
        {filterTodos(todos, showCompleted).map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
    </>
  )
}
