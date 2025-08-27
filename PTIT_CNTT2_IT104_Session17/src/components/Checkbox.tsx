import React, { useState } from 'react'

export default function Checkbox() {
    const [choice, setChoice] = useState<string[]>([])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const value =e.target.value

        if(choice.includes(value)){
            setChoice(choice.filter((item) => item !==value))
        }else{
            setChoice([...choice, value])
        }
    }

  return (
    <div>
        <label>
        <input type="checkbox" value="Đi chơi" onChange={handleChange} />Đi chơi
      </label>
      <br />
      <label>
        <input type="checkbox" value="Nghe nhạc" onChange={handleChange} /> Nghe nhạc
      </label>
      <br />
      <label>
        <input type="checkbox" value="Code" onChange={handleChange} /> Code
      </label>
      <br />
      <label>
        <input type="checkbox" value="Du lịch" onChange={handleChange} /> Du lịch
      </label>
      <p>Sở thích: {JSON.stringify(choice)}</p>
    </div>
  )
}
