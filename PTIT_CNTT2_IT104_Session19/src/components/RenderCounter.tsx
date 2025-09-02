import React, { useEffect, useRef, useState } from 'react'

export default function RenderCounter() {
    const [value, setValue] = useState("")
    const renderCounter= useRef(0)

    useEffect(()=> {
        renderCounter.current +=1
    })
    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }
  return (
    <div>
        <h2>Component Render Counter</h2>
        <input type="text" value={value} onChange={handleChange} placeholder='...'/>
        <p>Component đã nhập: {renderCounter.current} lần</p>
    </div>
  )
}
