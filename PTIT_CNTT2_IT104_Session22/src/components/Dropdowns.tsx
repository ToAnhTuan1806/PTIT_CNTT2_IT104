import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Dropdowns() {
  return (
   <div style={{ margin: "20px" }}>
      <Dropdown>
        <Dropdown.Toggle id="user-menu" variant="white" className="border rounded-3 px-3 py-2 fw-semibold">
          Nguyễn Văn Nam
        </Dropdown.Toggle>

        <Dropdown.Menu className="rounded-3 shadow-sm " style={{ minWidth: 180 }}>
          <Dropdown.Item className="py-2">Cài đặt</Dropdown.Item>
          <Dropdown.Item className="py-2">Đổi mật khẩu</Dropdown.Item>
          <Dropdown.Item className="py-2">Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
