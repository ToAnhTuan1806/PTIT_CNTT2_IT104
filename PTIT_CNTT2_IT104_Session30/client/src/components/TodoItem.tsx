import React from 'react'
import type { Todo } from './TodoApp'

type Props={
    todo: Todo
    onRequestDelete: () => void
    onToggle: (id:number, completed:boolean)=> void
    onRequestEdit: () => void 
}

export default function TodoItem({todo, onRequestDelete, onToggle, onRequestEdit}: Props) {
  return (
    <div className="todo-row">
        <label className="todo-left">
            <input type="checkbox" checked={todo.completed} onChange={(e)=> onToggle(todo.id, e.target.checked)}/>
            <span className={`todo-text ${todo.completed ? "done" : ""}`}>
                {todo.title}
            </span>
        </label>

        <div className="todo-actions">
            <button className="icon-btn edit" onClick={onRequestEdit}>✏️</button>
            <button className="icon-btn delete" onClick={onRequestDelete}>🗑️</button>
        </div>
    </div>
  )
}
