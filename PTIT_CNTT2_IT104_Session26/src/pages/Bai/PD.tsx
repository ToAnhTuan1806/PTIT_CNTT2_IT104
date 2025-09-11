import React from "react";
import { useParams, Link } from "react-router-dom";
import "./style.css"

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");
  const product = products.find((p) => String(p.id) === id);

  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  return (
    <div>
      <img src={product.image} alt={product.name} width="200" />
      <p>Id: {product.id}</p>
      <p>ProductName: {product.name}</p>
      <p>Price: {product.price} VND</p>
      <Link to="/list-product" className="btn">Quay lại danh sách</Link>
    </div>
  );
}
