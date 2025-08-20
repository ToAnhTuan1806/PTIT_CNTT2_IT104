import React from 'react'

export default function Buttons() {
  return (
    <div style={{ display: "flex", gap: "8px",  justifyContent: "center",alignItems: "center"}}>
        <button style={{ padding: "6px 12px", border: "1px solid #d1d5db", 
            borderRadius: "4px", background: "white", cursor: "pointer", color: "#8b8bb6"}}>
                Sửa
        </button>
        <button
        style={{
          padding: "6px 12px", border: "none", borderRadius: "4px",
          background: "#ef4444", color: "white", cursor: "pointer"}}>
        Xóa
      </button>
    </div>

  )
}
