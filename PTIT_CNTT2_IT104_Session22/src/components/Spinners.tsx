import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Spinners() {
  return (
    <div style={{margin: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </div>
  )
}
