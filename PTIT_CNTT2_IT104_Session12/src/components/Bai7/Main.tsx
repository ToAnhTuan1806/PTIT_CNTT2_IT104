import React from 'react'
import Cart from './Cart'

export default function Main() {
  return (
<main
      style={{ flex: 3, background: "#fef2f2", display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", padding: "20px",
      }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <Cart key={i} />
      ))}
    </main>
  )
}
