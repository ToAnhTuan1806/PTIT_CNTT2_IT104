import React, { useState } from 'react'

export default function InputValidate() {
    const [text, setText]= useState("")
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }
  return (
    <div style={{ maxWidth: "400px", padding: "20px", borderRadius: "12px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 12px rgba(0,0,0,0.1)"}}>
        <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
        <input type="text" placeholder='Nhập vào đây' value={text} onChange={handleChange} 
            style={{ width: "96%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", outline: "none", marginBottom: "15px"}}/>
        {text.length>5 && (
            <p style={{border: "1px solid #f5c6cb", borderRadius: "6px", backgroundColor: "#f8d7da", color: "red", textAlign: "center", padding: "7px",}}>
                Chuỗi nhập vào dài hơn 5 ký tự!</p>
        )}
    </div>
  )
}
