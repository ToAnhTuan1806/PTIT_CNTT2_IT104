import React from 'react'
import { productData } from './ProductData'
import {Link, useParams } from 'react-router-dom'

export default function ProductDetail() {
    const {id}= useParams<{id: string}>()
    const product = productData.find((p) => p.id === id)
  return (
    <div>
        <div style={{color: "white", background: "#007BFF", padding: "1px"}}>
            <h1 style={{textAlign: "center"}}>Trang chi tiết sản phẩm</h1>
            <p style={{textAlign: "center"}}>Danh sách sản phẩm</p>
        </div>

        {!product ? (
        <p>Sản phẩm không tồn tại.</p>) : (
        <div>
          <h2>Chi tiết sản phẩm</h2>
          <h3 style={{ marginTop: 0 }}>{product.name}</h3>
          <p><strong>Giá:</strong> {product.price.toLocaleString("vi-VN")} VND</p>
          <p style={{ maxWidth: 720 }}>{product.description}</p>

          <div style={{ marginTop: 16 }}>
            <Link to="/products" style={{color: "#007BFF", textDecoration: "none"}}>Quay lại danh sách sản phẩm</Link>
          </div>
        </div>
      )}
    </div>
  )
}
