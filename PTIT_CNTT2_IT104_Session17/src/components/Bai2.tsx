import React, { useState } from 'react'

export default function Bai2() {
    const [product, setProduct] = useState({
        id: 1,
        name: "Coca cola",
        price: 1000,
        quantity: 10
    })
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price} $</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}
