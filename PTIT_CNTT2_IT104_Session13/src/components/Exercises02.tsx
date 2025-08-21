import React, { Component } from 'react'

interface State{
    id:number
    name: string
    date: string
    address: string
}
export default class Exercises02 extends Component<{}, State> {
      constructor(props: {}) {
    super(props)
    this.state = {
      id: 1,
      name: "Tô Anh Tuấn",
      date: "18/06/2006",
      address: "Hà Nội, Việt Nam"
    }
}

  render() {
    return (
      <div>
         <h3>Thông tin cá nhân</h3>
        <p>ID: {this.state.id}</p>
        <p>Họ và tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.date}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}

