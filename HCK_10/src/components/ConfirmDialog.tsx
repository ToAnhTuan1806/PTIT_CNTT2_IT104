    import React from "react";

    type Props = {
    open: boolean;
    title?: string;
    message?: string;
    onConfirm: () => void;
    onCancel: () => void;
    };

    export default function ConfirmDialog(props: Props) {
    if (!props.open) {
        return null;
    }

    return (
        <div className="modal__backdrop">
        <div className="modal">
            <h3 className="modal__title">{props.title || "Xác nhận"}</h3>
            <p className="modal__message">
            {props.message || "Bạn chắc chắn muốn xóa mục này?"}
            </p>
            <div className="modal__actions">
            <button type="submit" className="btn btn-danger" onClick={props.onConfirm}>
                Xóa
            </button>
            <button type="submit" className="btn btn-light" onClick={props.onCancel}>
                Hủy
            </button>
            </div>
        </div>
        </div>
    );
    }
