
import React from "react";

interface HeaderProps {
  cartCount: number;
  toggleCart: () => void;
}

export default function Header({ cartCount, toggleCart }: HeaderProps) {
  return (
    <div className="header">
      <span>Trang chủ</span>
      <span >Danh sách sản phẩm</span>
      <div className="cart-icon" onClick={toggleCart}>
        🛒
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </div>
  );
}
