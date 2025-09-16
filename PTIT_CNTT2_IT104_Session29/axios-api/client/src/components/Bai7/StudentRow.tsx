import React from "react";
import type { StudentType } from "../../api/api";

export default function StudentRow({ student }: { student: StudentType }) {
  return (
    <tr className="st-row">
      <td className="st-cell st-checkbox">
        <input type="checkbox" placeholder="..."/>
      </td>
      <td className="st-cell">{student.student_name}</td>
      <td className="st-cell">{student.email}</td>
      <td className="st-cell">{student.address}</td>
      <td className="st-cell">{student.phone}</td>
      <td className="st-cell st-actions">
        <button className="st-icon st-edit" title="Sửa">
          ✏️
        </button>
        <button className="st-icon st-delete" title="Xóa">
          🗑️
        </button>
      </td>
    </tr>
  );
}
