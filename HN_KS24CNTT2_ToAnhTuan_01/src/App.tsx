import React, { useMemo, useState } from 'react'
import type { Todo } from './components/type'
import TodoItem from './components/TodoItems'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import "./components/style.css"

const uid=()=> Math.random().toString(36).slice(2, 10)
export default function App() {
  const [todos, setTodos]= useState<Todo[]>([])
  const [doneToEnd, setDoneToEnd]= useState(true)
  const visible= useMemo(()=> {
    const list= [...todos]
    if(doneToEnd){
      list.sort((a,b)=>Number(a.completed)-Number(b.completed))
      return list
    }
  }, [todos, doneToEnd])
  const addTodo =(text: string) =>{
    setTodos((prev) => [
      ...prev,{ id: uid(), text, completed:false }
    ])
  }
  const toggleTodo= (id: string)=>{
    setTodos((prev) =>
      prev.map((td)=>(td.id ===id ?{ ...td, completed: !td.completed } :td))
    )
  }
  const deleteTodo=(id:string)=> {
    setTodos((prev)=> prev.filter((td)=>td.id!==id))
  }
  return (
    <div style={{maxWidth: "560px", margin: "48px auto", padding: "0 12px",position: "relative"}}>
      <div className='paperLayer'></div>
      <div className='card pinkCard'>
        <div style={{padding: "28px 28px 12px"}}>
          <h1 style={{color: "white", fontSize: "48px", lineHeight:  1.05, margin: "0 0 6px 0", fontWeight: "300"}}>Todo List</h1>
          <p style={{color: "#ffdfe1", margin: "0 0 14px 0", fontSize: "14px", fontWeight: "400"}}>Get things done, one item at a time.</p>
          <hr style={{border: "none", opacity: .65, height: "1px", color: "#ffc4c9"}} />
        </div>
          <section className="sections">
          <div className="sectionRow">
            <TodoList
              todos={visible}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>

          <div className="sectionRow toggleRow">
            <label className="toggleLabel">Move done items at the end?</label>
            <label className="switch">
              <input type="checkbox" placeholder="..." checked={doneToEnd} onChange={(e) => setDoneToEnd(e.target.checked)}/>
              <span className="slider"></span>
            </label>
          </div>

          <div className="sectionRow addRow">
            <label className="addLabel">Add to the todo list</label>
            <TodoInput onAdd={addTodo} />
          </div>
        </section>
      </div>
    </div>
  )
}
