import type { Todo } from './types/todo'

export function addTodo(todos: Todo[], text: string): Todo[] {
  const trimmedText = text.trim()
  if (!trimmedText) return todos

  const id = Math.max(0, ...todos.map((todo) => todo.id)) + 1
  return [...todos, { id, text: trimmedText, completed: false }]
}

export function toggleTodo(todos: Todo[], id: number): Todo[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  )
}

export function deleteTodo(todos: Todo[], id: number): Todo[] {
  return todos.filter((todo) => todo.id !== id)
}

export function filterTodos(todos: Todo[], showCompleted: boolean): Todo[] {
  return showCompleted ? todos : todos.filter((todo) => !todo.completed)
}
