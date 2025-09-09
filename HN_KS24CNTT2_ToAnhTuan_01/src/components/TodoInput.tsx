import React, { useState } from 'react'
type Props={
  onAdd: (text:string)=>void
}

export default function TodoInput({onAdd}: Props) {
  const [text, setText]= useState("")
  const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }
  const submit =() => {
    const td = text.trim()
    if (!td){
      return
    } 
    onAdd(td)
    setText('')
  }
  return (
    <div className="inputRow">
      <input type="text" value={text} onChange={handleChange} placeholder='Thêm công việc...' onKeyDown={(e)=> e.key=== "Enter" && submit()}/>
      <button type='submit' className='addBtn' onClick={submit} title="Thêm">ADD ITEM</button>
    </div>
  )
}
