import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItemProps {
  item: Product;
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>{item.price.toLocaleString()} đ</p>
      </div>
    </div>
  );
}
