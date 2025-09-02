import React, { useMemo } from 'react'

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cartItems: CartItem[] = [
    {id: 1, name: 'Sản phẩm A', price: 10000, quantity: 2},
    {id: 2, name: 'Sản phẩm B', price: 20000, quantity: 1},
]

export default function ShoppingCart() {
    const totalPrice = useMemo(()=> {
        return cartItems.reduce(
            (sum, item)=> sum + item.price * item.quantity,0
        )
    }, [cartItems])
  return (
    <div>
          <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - {item.price * item.quantity}₫
            </li>
          ))}
        </ul>
      )}
      <p>Tổng cộng: {totalPrice}₫</p>
    </div>
  )  
}
