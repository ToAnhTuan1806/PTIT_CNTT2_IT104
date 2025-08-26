import React from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  updateQuantity: (id: number, amount: number) => void;
  removeItem: (id: number) => void;
}

export default function Cart({ cart, updateQuantity, removeItem }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h3>🛒 Cart</h3>
      <hr />
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <p>{item.name}</p>
                <p>{item.price.toLocaleString()}₫</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>X</button>
            </div>
          ))}
          <hr />
          <h4>Tổng cộng: {total.toLocaleString()}₫</h4>
        </div>
      )}
    </div>
  );
}
