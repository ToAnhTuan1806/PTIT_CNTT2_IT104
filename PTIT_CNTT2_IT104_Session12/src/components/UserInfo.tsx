import React from 'react'

export default function UserInfo() {
    const user = {
    name: "Nguyễn Văn A",
    gender: "Nam",
    birthDay: "06/03/2024",
    email: "vana@gmail.com",
    address: "Hà Nội, Việt Nam"
  }
  return (
    <div>
        <h2>Thông tin cá nhân</h2>
        <ul>
        <li>Họ và tên: <b>{user.name}</b></li>
        <li>Giới tính: <b>{user.gender}</b></li>
        <li>Ngày sinh: <b>{user.birthDay}</b></li>
        <li>Email: <b>{user.email}</b></li>
        <li>Địa chỉ: <b>{user.address}</b></li>
        </ul>
    </div>
  )
}
