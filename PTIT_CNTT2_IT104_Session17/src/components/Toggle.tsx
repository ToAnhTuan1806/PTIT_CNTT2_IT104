import React, { useState } from 'react'

export default function Toggle() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const handleToggle= ()=>{
        setIsVisible(!isVisible)
    }
  return (
    <div>
    <button onClick={handleToggle}>
        {isVisible ? "Ẩn" : "Hiện"}
    </button>
         {isVisible && <p>Đây là tiêu đề</p>}
    </div>
  )
}
