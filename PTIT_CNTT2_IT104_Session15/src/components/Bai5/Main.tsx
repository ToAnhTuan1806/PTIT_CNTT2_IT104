import React, { Component } from 'react'
import StudentTable from './StudentTable'
import Pagination from './Pagination'

export default class Main extends Component {
  render() {
    return (
      <main style={{ padding: "20px"}}>
      <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginBottom: "15px" }}>
        <select style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "6px" }}>
          <option>Sắp xếp theo tuổi</option>
          <option>Sắp xếp theo tên</option>
        </select>
        <input type="text" placeholder="Tìm kiếm từ khóa theo tên hoặc email" 
        style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "6px", width: "250px" }} />
      </div>
      <StudentTable />
      <Pagination />
    </main>
    )
  }
}
