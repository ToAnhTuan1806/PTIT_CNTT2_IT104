import React from 'react'
import type { Todo } from './type'
import TodoItem from './TodoItems'

type Props={
  todos: Todo[]
  onToggle: (id:string)=> void
  onDelete: (id:string)=>void
}
export default function TodoList({todos, onToggle, onDelete}: Props) {
  if(!todos.length){
    return <div className='empty'>Chưa có công việc nào!</div>
  }
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {todos.map(td=>(
        <TodoItem 
        key={td.id}
        todo={td}
        onToggle={onToggle}
        onDelete={onDelete}>
        </TodoItem>
      ))}
    </div>
  )
}
