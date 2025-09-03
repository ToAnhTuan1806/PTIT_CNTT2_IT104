import React, { useEffect, useRef, useState } from 'react'

export default function Modal() {
  const [isOpen, setIsOpen]= useState(false)
  const inputRef= useRef<HTMLInputElement>(null)

  useEffect(()=> {
    if(isOpen && inputRef.current){
      inputRef.current.focus()
    }
  }, )
  return (
    <div style={{maxWidth: "500px", textAlign: "center", position: "relative", marginTop: "50px", marginBottom: "50px", border: "1px solid #ccc", padding: "30px",}}>
      <h2>Ứng dụng React với Modal và Focus Input</h2>
      <button onClick={() => setIsOpen(true)} style={{ padding: "10px 20px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "5px"}}>
        Mở Modal</button>

       {isOpen && (
        <div
          style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{background: "white", padding: "20px", borderRadius: "8px", minWidth: "300px"}}>
            <h2>Đăng nhập</h2>
            <input type="text" placeholder="Nhập tên người dùng" ref={inputRef} style={{ width: "90%", padding: "8px", marginBottom: "10px"}}/>
            <br />
            <button onClick={() => setIsOpen(false)}
              style={{padding: "8px 16px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px"}}>
              Đóng</button>
          </div>
        </div>
      )}  
    </div>
  )
}
