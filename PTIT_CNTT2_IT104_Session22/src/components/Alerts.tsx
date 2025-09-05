import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Alerts() {
  return (
   <div style={{minWidth: "500px", margin: 20, display: "flex", flexDirection: "column" }}>
      <Alert variant="success" dismissible style={{maxWidth: "500px"}}>
        Thêm tài khoản thành công.
      </Alert>

      <Alert variant="danger" dismissible style={{maxWidth: "500px"}}>
        Thêm mới tài khoản thất bại.
      </Alert>

      <Alert variant="warning" dismissible style={{maxWidth: "500px"}}>
        Tên không được để trống.
      </Alert>
    </div>
  )
}

