import { useSelector } from "react-redux";
import type { RootState } from "../store/reducers";

export default function ListUser() {
  const users = useSelector((state: RootState) => state.users.list);
  return (
    <div style={{ padding: 16 }}>
      <h2>Danh sách User</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Id</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Họ và tên</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Giới tính</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Ngày sinh</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Địa chỉ</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{u.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{u.userName}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{u.gender}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{u.dateBirth}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{u.address}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                <button style={{ marginRight: 8 }}>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
