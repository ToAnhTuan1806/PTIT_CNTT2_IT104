import React from 'react'
import { Link } from 'react-router-dom'
import { productData } from './ProductData'

export default function ProductList() {

  return (
    <div>
        <div style={{color: "white", background: "#007BFF", padding: "1px"}}>
        <h1 style={{ textAlign: "center", marginBottom: 24 }}>Trang Danh Sách Sản Phẩm</h1>
        <p style={{textAlign: "center"}}>Danh sách sản phẩm</p>
        </div>

            <h2>Danh sách sản phẩm</h2>
        <div
        style={{ display: "flex", flexWrap: "wrap", gap: 16}}>
        {productData.map((p) => (
          <div
            key={p.id}
            style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 12, background: "#fff"}}>
            <h3 style={{ margin: "8px 0 4px", fontSize: 16 }}>{p.name}</h3>
            <p style={{ margin: 0, color: "#374151" }}>
              Giá: {p.price.toLocaleString("vi-VN")} VND
            </p>
            <div style={{ marginTop: 8 }}>
              <Link to={`/products/${p.id}`} style={{color: "#007BFF", textDecoration: "none"}}>
                Xem chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
