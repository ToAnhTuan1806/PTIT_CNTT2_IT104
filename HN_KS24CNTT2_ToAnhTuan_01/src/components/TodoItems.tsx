import React from 'react'
import type {Todo} from "./type" 
type Props={
    todo: Todo
    onToggle: (id:string)=> void
    onDelete: (id: string)=> void
}
export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div className='item'>
        <div className={['text', todo.completed ?"completed": ""].join(" ")}>
            {todo.text}
        </div>
        <div className='actions'>
            <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)} title={todo.completed ? "Bỏ hoàn thành": "Đánh dấu hoàn thành"}/>
            <button className='iconBtn delete' type='submit' onClick={()=>onDelete(todo.id)} title='Xoá'>Xoá</button>
        </div>
    </div>
  )
}
