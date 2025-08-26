import React, { Component } from 'react'

const subjects: string[]= ["Toán", "Văn", "Anh", "Hóa", "Sinh"]
export default class SubjectList extends Component {
  render() {
    return (
      <div>
        <h2>Danh sách môn học</h2>
        <ul style={{listStyle: "none"}}>
        {subjects.map((subject, index) => (
          <li key={index} >{subject} </li>
        ))}
      </ul>
      </div>
    )
  }
}
