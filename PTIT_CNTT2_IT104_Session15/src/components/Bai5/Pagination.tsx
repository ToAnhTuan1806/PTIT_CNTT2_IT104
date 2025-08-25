import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "end", gap: "5px", marginTop: "20px"}}>
        <button style={{ border: "1px solid #ddd", padding: "6px 12px", borderRadius: "50%", background: "#fff" }}>
          &lt;
        </button>
        <button
          style={{ border: "1px solid #ddd", padding: "6px 12px", borderRadius: "50%", cursor: "pointer", background: "#007bff", color: "#fff"}}>
          1
        </button>
        <button style={{ border: "1px solid #ddd", padding: "6px 12px", borderRadius: "50%", background: "#fff" }}>
          2
        </button>
        <button style={{ border: "1px solid #ddd", padding: "6px 12px", borderRadius: "50%", background: "#fff" }}>
          3
        </button>
        <button style={{ border: "1px solid #ddd", padding: "6px 12px", borderRadius: "50%", background: "#fff" }}>
          4
        </button>
        <button style={{ border: "1px solid #ddd", padding: "6px 12px", borderRadius: "50%", background: "#fff" }}>
          &gt;
        </button>
      </div>
    )
  }
}
