import React from "react";

export default function Todolist() {
  // Mảng công việc (không có useState)
  const tasks = [
    {
      id: 1,
      name: "Thiết kế giao diện Header",
      assign: "Nguyễn Văn A",
      status: false,
      created_at: new Date("2024-03-21T13:12:12"),
    },
    {
      id: 2,
      name: "Thiết kế giao diện Footer",
      assign: "Nguyễn Văn B",
      status: true,
      created_at: new Date("2024-03-21T15:10:50"),
    },
  ];

  // Hàm format ngày
  const formatDate = (date: Date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead style={{ color: "#a1a7ba" }}>
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Người thực hiện</th>
            <th>Trạng thái</th>
            <th>Thời gian tạo</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody style={{ color: "#8c9ea4" }}>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.assign}</td>
              <td>
                {task.status ? (<span style={{border: "1px solid green", color: "green", background: "#e2ffe0", borderRadius: "5px",padding: "5px"}}> Hoàn thành </span>) : (
                  <span
                    style={{border: "1px solid red", background: "#ffe1e0", color: "red", borderRadius: "5px", padding: "5px", }}>
                    Chưa hoàn thành
                  </span>
                )}
              </td>
              <td>{formatDate(task.created_at)}</td>
              <td>
                <button style={{border: "1px solid #8f5c28", background: "#fff7e6", borderRadius: "5px", color: "#db8b5e"}}>
                  Sửa
                </button>
                <button
                  style={{ border: "1px solid #793530", background: "#fff1f0", color: "red", borderRadius: "5px", marginLeft: "5px"}}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
