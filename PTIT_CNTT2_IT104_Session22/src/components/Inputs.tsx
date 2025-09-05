import React from "react";
import Form from "react-bootstrap/Form";

export default function Inputs() {
  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column", gap: "16px", width: "300px" }}>
      <Form.Control size="lg" type="text" placeholder="Input cỡ lớn" />
      <Form.Control type="text" placeholder="Input cỡ trung bình" />
      <Form.Control size="sm" type="text" placeholder="Input cỡ bé" />
    </div>
  );
}
