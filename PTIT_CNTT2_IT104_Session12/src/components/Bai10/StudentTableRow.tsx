import React from "react";

interface Props {
  id: number;
  code: string;
  name: string;
  age: number;
  gender: string;
}

export default function StudentTableRow({ id, code, name, age, gender }: Props) {
  return (
    <tr>
      <td>{id}</td>
      <td>{code}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>
        <div className="template-demo">
          <button type="button" className="btn btn-danger btn-icon-text">
            Xem
          </button>
          <button type="button" className="btn btn-warning btn-icon-text">
            Sửa
          </button>
          <button type="button" className="btn btn-success btn-icon-text">
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}
