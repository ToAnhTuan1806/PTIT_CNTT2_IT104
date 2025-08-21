import React, { Component } from 'react'

interface Product{
    id:number
    name:string
    price:number
    quantity:number
}
interface Props{
    product: Product
}
export default class ChildrenCpd extends Component<Props> {
  render() {
     const {id, name, price, quantity}= this.props.product
    return (
      <div>
        <h3>Dữ liệu trong component con</h3>
        <p>id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price} đ</p>
        <p>Quantity: {quantity}</p>
      </div>
    )
  }
}
