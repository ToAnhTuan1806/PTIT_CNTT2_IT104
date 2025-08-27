import React, { useState } from 'react'

export default function Form() {
    const [value, setValue]= useState<string>("")
    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Nhập nội dung' value={value} onChange={handleChange}/>
        <p>{value}</p>
    </div>
  )
}
