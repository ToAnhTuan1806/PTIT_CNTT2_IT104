import React from "react";
import type { Contact } from "./Contact";

type Props = {
  data: Contact[];
  onEdit: (c: Contact) => void;
  onAskDelete: (c: Contact) => void;
  pagination?: React.ReactNode;   // ⬅️ THÊM
};

export default function ContactTable(props: Props) {
  return (
    <section className="card">
      <div className="card__title">
        <span className="title-icon">📋</span>
        <h2>Danh sách liên hệ</h2>
      </div>

      <div className="table__wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Tên liên hệ</th>
              <th>Số điện thoại</th>
              <th style={{ width: 220 }}>Hành động</th>
            </tr>
          </thead>

          <tbody>
            {props.data.length === 0 && (
              <tr>
                <td colSpan={3} className="table__empty">
                  Chưa có liên hệ nào
                </td>
              </tr>
            )}

            {props.data.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>
                  <button type="submit" className="btn btn-primary" onClick={() => props.onEdit(c)}>
                    Sửa
                  </button>

                  <button type="submit" className="btn btn-danger" onClick={() => props.onAskDelete(c)}>
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {props.pagination && (
        <div className="table__footer">
          {props.pagination}
        </div>
      )}
    </section>
  );
}
