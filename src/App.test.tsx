// @ts-nocheck
import assert from 'node:assert/strict'
import test from 'node:test'
import type { Todo } from './types/todo'
import { addTodo, deleteTodo, toggleTodo } from './todoState'

test('adds a non-empty Todo', () => {
  const todos: Todo[] = []

  assert.deepEqual(addTodo(todos, ' Learn React '), [
    { id: 1, text: 'Learn React', completed: false },
  ])
  assert.deepEqual(addTodo(todos, '   '), [])
})

test('toggles a Todo completion state', () => {
  const todos: Todo[] = [{ id: 1, text: 'Learn React', completed: false }]

  assert.deepEqual(toggleTodo(todos, 1), [
    { id: 1, text: 'Learn React', completed: true },
  ])
})

test('deletes a Todo', () => {
  const todos: Todo[] = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Ship it', completed: false },
  ]

  assert.deepEqual(deleteTodo(todos, 1), [
    { id: 2, text: 'Ship it', completed: false },
  ])
})
