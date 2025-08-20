import React from "react";

interface TodoItemProps {
  text: string;
  completed: boolean;
}

export default function TodoItem({ text, completed }: TodoItemProps) {
  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <div>
        <input
          className="form-check-input me-2"
          type="checkbox"
          defaultChecked={completed}
          aria-label={`Đánh dấu công việc: ${text}`} 
        />
        {completed ? <s>{text}</s> : text}
      </div>
      <div>
        <a href="#!" className="text-info me-3" title="Sửa công việc">
          <i className="fas fa-pencil-alt"></i>
        </a>
        <a href="#!" className="text-danger" title="Xóa công việc">
          <i className="fas fa-trash-alt"></i>
        </a>
      </div>
    </li>
  );
}
