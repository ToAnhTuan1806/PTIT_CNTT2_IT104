import React from 'react'
import type { Todo } from './types'
import TodoItem from './TodoItem'

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (!todos.length) return <div className="empty">Chưa có công việc nào.</div>
  return (
    <div className="todoList">
      {todos.map(t => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
