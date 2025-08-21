import React from "react";

export default function Input() {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = document.getElementById("result");
    if (result) {
      result.textContent = "Dữ liệu: " + e.target.value;
    }
  };

  return (
    <div>
      <h2 id="result">Dữ liệu:</h2>
      <input type="text" onInput={handleInput} placeholder="nhập dữ liệu" />
    </div>
  );
}
