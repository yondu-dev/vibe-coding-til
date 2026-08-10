import { useEffect, useState } from 'react'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { addTodo, deleteTodo, toggleTodo } from './todoState'
import type { Todo } from './types/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <main>
      <h1>Todo</h1>
      <p>
        현재 시간: <time dateTime={currentTime.toISOString()}>{currentTime.toLocaleTimeString()}</time>
      </p>
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
