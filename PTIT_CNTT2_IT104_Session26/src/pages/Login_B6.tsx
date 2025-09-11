import React, { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

type Role= "admin"| "user"

export default function Login_B6() {
    const navigate= useNavigate()
    const user= {
        email: "admin@gmail.com",
        password: "123456",
        role: "admin" as Role,
    }
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "" as "" | Role,
    })

      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit= (e: React.FormEvent)=> {
        e.preventDefault()
        const validLogin= form.email.trim()===user.email && form.password===user.password && form.role===user.role
        if(validLogin){
            localStorage.setItem("auth", "true")
            localStorage.setItem("role", form.role)
            localStorage.setItem("email", form.email)
            navigate("/accounts")
        }else{
            alert("Thông tin sai")
        }
    }
  return (
    <div style={{ maxWidth: "360px", textAlign: "center" }}>
      <h2>Đăng nhập</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <input type="email" name="email" placeholder="Nhập email" value={form.email} onChange={handleChange} style={{padding: "5px"}}/>

        <input type="password" name="password" placeholder="Nhập mật khẩu" value={form.password} onChange={handleChange} style={{padding: "5px"}}/>
        
        <select aria-label="Chọn quyền" name="role"  value={form.role} onChange={handleChange} style={{padding: "5px"}}>
          <option value="">-- Chọn quyền --</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
        </select>

        <button type="submit" style={{ padding: "8px 12px" }}>
          Đăng nhập
        </button>
      </form>
    </div>
  )
}
