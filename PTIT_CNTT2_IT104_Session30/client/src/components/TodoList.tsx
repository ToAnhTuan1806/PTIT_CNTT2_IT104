import React from 'react'
import type {Todo} from "./TodoApp"
import TodoItem from './TodoItem'

type Props={
    todos: Todo[]
    onRequestDelete: (todo:Todo) => void
    onToggle: (id: number, completed: boolean) => void 
    onRequestEdit: (todo: Todo) => void  
}
export default function TodoList({todos, onRequestDelete, onToggle, onRequestEdit}: Props) {
  return (
    <div>
        {todos.map((todo)=> (
            <TodoItem key={todo.id} todo={todo} onRequestDelete={()=> onRequestDelete(todo)} onToggle={onToggle} onRequestEdit={() => onRequestEdit(todo)}/>
        ))}
    </div>
  )
}
