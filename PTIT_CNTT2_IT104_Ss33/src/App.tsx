import React from "react";
import "./style.css";
import "./bootrsap.min.css";
import ListProduct from "./components/ListProduct";
import YourCart from "./components/YourCart";

export default function App() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="stylesheet" href="./css/bootstrap.min.css" />
        <div className="container">
          <div className="page-header">
            <h1>Shopping Cart</h1>
          </div>
          <div className="row">
            {/* danh sach san pham */}
            <ListProduct/>
            {/* Cart */}
            <YourCart/>
          </div>
        </div>
      </>
    </div>
  );
}
