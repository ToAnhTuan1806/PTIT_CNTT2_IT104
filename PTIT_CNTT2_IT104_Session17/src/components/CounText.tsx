import React, { useState } from 'react'

export default function CounText() {
    const [text, setText]= useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setText(e.target.value)
    }
  return (
    <div>
        <textarea placeholder='Nhập ký tự' value={text} onChange={handleChange}></textarea>
        <p>Số ký tự: {text.length}</p>
    </div>
  )
}
