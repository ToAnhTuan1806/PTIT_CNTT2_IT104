import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Buttons() {
  return (
    <div style={{margin: "20px"}}>
      <Button variant="primary">Lưu</Button>{' '}
      <Button variant="secondary">Huỷ</Button>{' '}
      <Button variant="success">Thành công</Button>{' '}
      <Button variant="warning">Cảnh báo</Button>{' '}
      <Button variant="danger">Báo lỗi</Button>{' '}
      <Button variant="info">Thông tin</Button>{' '}
      <Button variant="link">Đường dẫn</Button>
    </div>
  )
}
