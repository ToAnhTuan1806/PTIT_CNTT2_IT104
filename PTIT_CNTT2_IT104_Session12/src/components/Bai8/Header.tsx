import React from 'react'

export default function Header() {
  return (
    <thead style={{background: "#f8fafc", textAlign: "center", color: "#a3acbf"}} >
        <tr>
            <th style={{ padding: "12px" }}>STT</th>
            <th style={{ padding: "12px" }}>Họ và tên</th>
            <th style={{ padding: "12px" }}>Ngày sinh</th>
            <th style={{ padding: "12px" }}>Giới tính</th>
            <th style={{ padding: "12px" }}>Địa chỉ</th>
            <th style={{ padding: "12px" }}>Hành động</th>
        </tr>
    </thead>
  )
}
