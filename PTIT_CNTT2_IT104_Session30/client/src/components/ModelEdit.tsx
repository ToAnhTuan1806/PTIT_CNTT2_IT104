import React from "react";

type Props = {
  open: boolean;
  value: string;                 // giá trị hiện tại của todo
  error?: string;                // thông báo lỗi (nếu có)
  saving?: boolean;              // trạng thái đang lưu
  onChange: (val: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ModalEdit({
  open,
  value,
  error,
  saving,
  onChange,
  onCancel,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Sửa công việc</h3>
          <button className="modal-close" onClick={onCancel}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <input
            className={`input ${error ? "input-error" : ""}`}
            type="text"
            placeholder="Nhập tên công việc"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {error && (
            <div className="error-text" style={{ marginTop: 8, color: "#ef4444" }}>
              {error}
            </div>
          )}
        </div>

        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onCancel}>
            Hủy
          </button>
          <button className="btn btn-primary" onClick={onConfirm} disabled={!!saving}>
            {saving ? "Đang lưu..." : "Cập nhật"}
          </button>
        </div>
      </div>
    </div>
  );
}
