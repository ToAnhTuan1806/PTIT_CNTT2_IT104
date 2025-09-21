import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/reducers'

export default function Profile() {
    const user= useSelector((state: RootState)=> state.user)
    return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Id: {user.id}</p>
      <p>Họ và tên: {user.userName}</p>
      <p>Giới tính: {user.gender}</p>
      <p>Ngày sinh: {user.dateBirth}</p>
      <p>Địa chỉ: {user.address}</p>
    </div>
  )
}
