import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Student_B3() {
    const [searchParmas]= useSearchParams()
    const navigate= useNavigate()
    const currentName= searchParmas.get("studentName") ||""
    const [studentName, setStudentName]= useState(currentName)

    const handleSearch= ()=>{
        if(studentName.trim()!==""){
            navigate(`/student?studentName=${studentName}`)
        }
    }
  return (
    <div style={{margin: "5px"}}>
        <input type="text" placeholder='Nhập từ khoá tìm kiếm' value={studentName} onChange={(e)=> setStudentName(e.target.value)} 
        style={{padding: "7px", borderRadius: "7px", border: "1px solid gray", marginRight: "5px"}}/>
        <button type='submit' onClick={handleSearch} style={{background: "#2563EB", color: "white", border: "none", padding:"7px", borderRadius: "7px"}}>Tìm kiếm</button>
    
      {currentName && (
        <p style={{ marginTop: "20px" }}>Kết quả : <b>{currentName}</b></p>
      )}
    </div>
  )
}
