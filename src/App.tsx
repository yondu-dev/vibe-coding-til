import { useState } from 'react'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { addTodo, deleteTodo, toggleTodo } from './todoState'
import type { Todo } from './types/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <main>
      <h1>Todo</h1>
      <TodoInput onAdd={(text) => setTodos((current) => addTodo(current, text))} />
      <TodoList
        todos={todos}
        onToggle={(id) => setTodos((current) => toggleTodo(current, id))}
        onDelete={(id) => setTodos((current) => deleteTodo(current, id))}
      />
    </main>
  )
}

export default App
