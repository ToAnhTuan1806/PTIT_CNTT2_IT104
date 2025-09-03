import React, { useState } from 'react'

export default function UserProfile() {
    const [formData, setFormData]= useState({
        name: "", email: "",
    })
    const [submitted, setsubmitted]= useState(false)
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}= e.target
        setFormData((prev)=>({
            ...prev, [name]:value
        }))
    }
    const handleSubmit= (e:React.FormEvent)=>{
        e.preventDefault()
        setsubmitted(true)
    }
  return (
    <div style={{ maxWidth: "400px", padding: "20px", borderRadius: "12px", backgroundColor: "#f0f0f0", boxShadow: "0 4px 12px rgba(0,0,0,0.1)"}}>
        <h2>Thông tin người dùng</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Nhập tên' value={formData.name} onChange={handleChange} 
                style={{ width: "96%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", outline: "none", marginBottom: "15px"}}/>
            <input type="email" name='email' placeholder='Nhập email' value={formData.email} onChange={handleChange} 
                style={{ width: "96%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", outline: "none", marginBottom: "15px"}}/>
            <button type='submit' style={{background: '#4caf50', color: "white", padding: "7px 14px", border: "none", borderRadius: "5px"}}>
                Gửi</button>
            {submitted && (
                <div style={{ marginTop: "20px", padding: "15px", borderRadius: "5px", backgroundColor: "#e7f7e7"}}>
                    <p>Tên: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                </div>
            )}    
        </form>
        
    </div>
  )
}
