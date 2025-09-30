import React, { useState } from "react";
import UploadFile from "./components/UploadFile";
import UploadFileMultiple from "./components/UploadFileMultiple";
import ProductManager from "./components/ProductManager";

export default function App() {
  return (
    <div>
      <UploadFile />
      <hr />
      <UploadFileMultiple/>
      <hr />
      <ProductManager/>
    </div>
  );
}
