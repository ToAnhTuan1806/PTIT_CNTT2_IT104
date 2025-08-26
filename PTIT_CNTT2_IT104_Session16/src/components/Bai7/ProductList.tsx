import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;  
}

export default function ProductList({ products, addToCart }: ProductListProps) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
