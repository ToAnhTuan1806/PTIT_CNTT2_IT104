import React, { useEffect, useState } from 'react'

export default function PageTitle() {
    const [name, setName]= useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    useEffect(()=> {
        if(name){
            document.title= `Xin chào, ${name}`
        }    
    }, [name])
  return (
    <div style={{ maxWidth: "500px", padding: "20px", borderRadius: "12px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 12px rgba(0,0,0,0.1)"}}>
        <h2 style={{textAlign: "center"}}>Chào mừng bạn đến với trang của chúng tôi!</h2>
        <input type="text" value={name} placeholder='Nhập tên của bạn' onChange={handleChange} 
            style={{ width: "96%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", outline: "none"}}/>
        <p style={{textAlign: "center", color: "gray"}}>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên.</p>
    </div>
  )
}
