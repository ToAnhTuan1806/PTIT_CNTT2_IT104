import React, { useState } from 'react'

export default function Bai1() {
    const [name, setName] = useState("Tô Anh Tuấn")
  return (
    <div><b>Họ và tên: {name}</b></div>
  )
}
