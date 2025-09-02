import React, { useState } from 'react'

export default function FormBasic() {
    const [formData, setFormData] = useState({
        name: "", email: "",
    })
    const [error, setError]= useState({
        name: "", email: "",
    })
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=> {
        const {name, value}= e.target

        setFormData({
            ...formData, [name]: value
        })
        let errorMes= ""
        if(value.trim()===""){
            errorMes= "Trường này là bắt buộc"
        }else if(name==="email" && !emailRegex.test(value)){
            errorMes= "Email không hợp lệ"
        }

        setError({
            ...error, [name]: errorMes
        })
    }
    const isFormValid = formData.name.trim() !== "" && formData.email.trim() !== "" && error.name === "" && error.email=== ""
    const handleSubmit = (e:React.FormEvent)=> {
        e.preventDefault()
        if(isFormValid){
            alert("Gửi thành công!")
        }
    }
  return (
    <div style={{maxWidth: "300px", padding: "20px", border: "1px solid gray"}}>
        <h2 style={{textAlign: "center"}}>Đăng ký thông tin</h2>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
                <label>Họ tên</label><br />
                <input type="text" name='name' placeholder='Nhập họ tên...' value={formData.name} onChange={handleChange} 
                style={{ display: "block", width: "95%", padding: "8px", marginTop: "5px", borderRadius: "5px"}}/>
                {error.name && <p style={{color: "red"}}>{error.name}</p>}
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label>Email</label><br />
                <input type="email" name='email' placeholder='example@gmail.com' value={formData.email} onChange={handleChange} 
                style={{ display: "block", width: "95%", padding: "8px", marginTop: "5px", borderRadius: "5px"}}/>
                {error.email && <p style={{color: "red"}}>{error.email}</p>}
            </div>
            <button type='submit' disabled={!isFormValid} 
                style={{ padding: "10px 20px", width: "100%", backgroundColor: isFormValid ? "blue" : "gray", color: "white", border: "none", borderRadius: "5px", cursor: isFormValid ? "pointer" : "not-allowed"}}>
                Gửi</button>
        </form>
        
    </div>
  )
}
