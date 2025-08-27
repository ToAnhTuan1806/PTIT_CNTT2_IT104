

import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import products from "./products";
import "./Shop.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

export default function Shop() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        toggleCart={() => setIsCartOpen(!isCartOpen)} 
      />
      <ProductList products={products} addToCart={addToCart} />

      {isCartOpen && (
        <div className="cart-popup">
          <Cart cart={cart} 
          updateQuantity={() => {}} removeItem={() => {}} 
          />

          
        </div>
      )}
    </div>
  );
}

