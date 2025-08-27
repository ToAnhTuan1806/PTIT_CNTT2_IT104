import React, { Component } from 'react'

// B1: Xay dung giao dien
// B2: Xasy dung ham de lay gia tri ng dung nhap
// B3: Xay dung ham de gui form (validate du lieu)
// B4: Cap nhat giao dien theo cac gia tri duoc luu
export default class ChuaBai5 extends Component {
  render() {
    return (
        <>
        <form action="">
          <h1>Nhập thông tin người dùng</h1>
          <input type="text" placeholder='Họ tên'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Tuổi'/>
          <button type='submit'>Gửi</button>
          <button>Xoá</button>
        </form>
        <p style={{color: "red"}}>Email k hop le</p>

        </>
    )
  }
}
