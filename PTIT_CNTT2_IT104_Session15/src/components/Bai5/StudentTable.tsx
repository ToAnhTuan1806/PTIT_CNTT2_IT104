import React, { Component } from 'react'

const students = [
  { stt: 1, id: "SV001", name: "Nguyễn Văn A", dob: "21/12/2023", email: "nva@gmail.com", status: "Đang hoạt động" },
  { stt: 2, id: "SV002", name: "Nguyễn Thị B", dob: "21/11/2022", email: "ntb@gmail.com", status: "Ngừng hoạt động" }
]
export default class StudentTable extends Component {
  render() {
    return (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px", textAlign: "center", borderBottom: "1px solid #ccc"}}>
      <thead >
        <tr style={{ background: "#f1f1f1", borderBottom: "1px solid #ccc"}}>
          <th>STT</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.stt}</td>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.dob}</td>
            <td>{s.email}</td>
            <td>
              <span style={{
                padding: "4px 8px",
                borderRadius: "4px",
                color: s.status === "Đang hoạt động" ? "green" : "red",
                background: s.status === "Đang hoạt động" ? "#d4edda" : "#f8d7da",
              }}>
                {s.status}
              </span>
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                <button style={{ border: "none", padding: "5px 10px", borderRadius: "6px", marginRight: "5px", background: "#f3e8ff"}}>
                  Chặn</button>
                <button style={{ border: "none", padding: "5px 10px", borderRadius: "6px", marginRight: "5px", background: "#ffeeba"}}>
                  Sửa</button>
                <button style={{ border: "none", padding: "5px 10px", borderRadius: "6px", marginRight: "5px", background: "#f5c6cb"}}>
                  Xóa</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
  }
}
