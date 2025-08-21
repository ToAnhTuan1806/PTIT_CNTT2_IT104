import React, { useState } from "react";

export default function UpdateState() {
  const [company, setCompany] = useState("Rikkei Academy");

  const handleChange = () => {
    setCompany((prev) =>
      prev === "Rikkei Academy" ? "Rikkei Soft" : "Rikkei Academy"
    )
  }

  return (
    <div>
      <h2>Tên công ty: {company}</h2>
      <button onClick={handleChange}>Change</button>
    </div>
  );
}
