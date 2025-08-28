import React, { use, useCallback, useState } from 'react'

export default function ColorPicker() {
    const [color, setColor] = useState("")
    const handleChangeColor = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) =>{
            setColor(e.target.value)
        }, []
    )
  return (
    <div>
        <p><b>Màu người dùng chọn:</b></p>
        <input type="color" placeholder='...' value={color} onChange={handleChangeColor} />
        <p><b>Màu hiển thị:</b></p>

        <div style={{ width: "130px", height: "100px", backgroundColor: color, border: "1px solid #ccc"}}
        ></div>
    </div>
  )
}
