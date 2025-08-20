import React from "react";
import StudentTableRow from "./StudentTableRow";

const students = [
  { id: 1, code: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
  { id: 2, code: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
  { id: 3, code: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
];

export default function StudentList() {
  return (
    <div className="card-body">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <StudentTableRow key={s.id} {...s} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
