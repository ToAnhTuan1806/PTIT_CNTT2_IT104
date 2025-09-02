import React, { useState } from 'react'

export default function RandomQuote() {
     const quotes = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
  ]
  const [quote, setQuote] = useState("")
  const handleNewQuote= ()=>{
    const randomIndex= Math.floor(Math.random()* quotes.length)
    setQuote(quotes[randomIndex])
  }
  
  return (
    <div style={{ maxWidth: "400px",textAlign: "center", marginTop: "50px"}}>
      <h3 style={{ fontWeight: "bold" }}>
        Câu nói truyền cảm hứng hôm nay:
      </h3>
      <p style={{ fontSize: "18px", fontStyle: "italic", margin: "20px 0", color: "gray" }}>
        “{quote}”
      </p>
      <button onClick={handleNewQuote} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "6px", fontSize: "16px"}}>
        Lấy câu nói mới
      </button>
    </div>
  )
}
