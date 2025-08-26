import React, { Component } from 'react'

const subjects: string[]= ["Toán", "Văn", "Anh", "Hóa", "Sinh"]
export default class SubjectList extends Component {
  render() {
    return (
      <div style={{border: "1px solid black", maxWidth: "350px",padding: "20px", background: "black" }}>
        <h1 style={{textAlign: "center", color: "white"}}>Danh sách môn học</h1>
        <ul style={{listStyle: "none", padding: "0"}}>
        {subjects.map((subject, index) => (
          <li key={index} style={{ backgroundColor: "#e0f7fa", color: "#155b9b", margin: "8px 0", padding: "10px", borderRadius: "10px", textAlign: "center" }} >
            {subject} 
            </li>
        ))}
      </ul>
      </div>
    )
  }
}
