import React, { useState } from 'react'

export default function ChangeColor() {
  const [color, setColor] = useState<string>("black")
  const handleChange= ()=>{
    setColor(color === "black" ? "red" : "black")
  }
  return (
    <div >
      <p style={{color: color}}>Tiêu đề văn bản</p>
      <button onClick={handleChange}>Thay đổi màu</button>
    </div>
  )
}

