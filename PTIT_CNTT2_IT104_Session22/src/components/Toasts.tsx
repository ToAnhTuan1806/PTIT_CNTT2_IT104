import React from 'react'
import Toast from 'react-bootstrap/Toast';

export default function Toasts() {
  return (
    <div style={{margin: "20px"}}>
    <Toast>
      <Toast.Header>
        <img src="" className="rounded me-2" alt="" />
        <strong className="me-auto">Cảnh báo</strong>
      </Toast.Header>
      <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
    </Toast>
    </div>
  )
}
