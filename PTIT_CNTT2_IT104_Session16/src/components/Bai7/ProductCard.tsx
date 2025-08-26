import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()} đ</p>
      <button onClick={() => addToCart(product)}>🛒 Thêm vào giỏ hàng</button>
    </div>
  );
}
