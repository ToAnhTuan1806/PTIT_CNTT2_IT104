import React from "react";

type Props = {
  open: boolean;
  message: string;         
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ModelDelete({ open, message, onCancel, onConfirm }: Props) {
  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Xác nhận</h3>
          <button className="modal-close" onClick={onCancel}>✕</button>
        </div>

        <div className="modal-body">
          <p>
            Bạn có chắc chắn muốn xóa công việc <b>{message}</b> không?
          </p>
        </div>

        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onCancel}>Hủy</button>
          <button className="btn btn-danger" onClick={onConfirm}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
