import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList() {
  return (
     <ul className="list-group mb-0">
      <TodoItem text="Cras justo odio" completed={true} />
      <TodoItem text="Cras justo odio" completed={false} />
    </ul>
  )
}
