import React, { useRef } from 'react'

export default function ScrollToSection() {
    const contentRef = useRef<HTMLDivElement | null>(null)
    const handleScroll = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div style={{maxWidth: "400px"}}>
         <div style={{ height: "200px", backgroundColor: "#0d6efd", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          Cuộn tới nội dung
        </h1>
        <button onClick={handleScroll} style={{ marginTop: "20px", padding: "12px 24px", fontSize: "16px", fontWeight: "bold", backgroundColor: "white", color: "#0d6efd", border: "2px solid #0d6efd", borderRadius: "8px"}}>
          Đi tới phần nội dung
        </button>
      </div>

      <div style={{ padding: "40px", backgroundColor: "#f8f9fa" }}>
        <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
        <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.</p>
        <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
      </div>

      <div ref={contentRef} style={{ height: "300px", backgroundColor: "#e9ecef", marginTop: "50px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "bold"}}>
         Đây là phần nội dung mục tiêu 
      </div>
    </div>
  )
}
