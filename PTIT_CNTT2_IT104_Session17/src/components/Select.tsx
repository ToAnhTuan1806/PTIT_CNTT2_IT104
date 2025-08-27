import React, { useState } from 'react'

export default function Select() {
    const [city, setCity]= useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setCity(e.target.value)
    }
  return (
    <div>
        <p>Thành phố: {city}</p>
        
        <select value={city} onChange={handleChange} title="Chọn thành phố">
            <option value="">--Chọn thành phố--</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Lạng Sơn">Lạng Sơn</option>
            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
            <option value="Nam Định">Nam Định</option>
        </select>
    </div>
  )
}
