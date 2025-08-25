import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
       <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
      <h2>Quản lý sinh viên</h2>
      <button style={{ background: "#007bff", color: "#fff", padding: "8px 12px", border: "none", borderRadius: "5px" }}>
        Thêm mới sinh viên
      </button>
    </header>
    )
  }
}
