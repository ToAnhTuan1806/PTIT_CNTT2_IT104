import React, { useEffect, useState } from 'react'

export default function KeyTracker() {
    const [keyPressed, setKeyPressed] = useState<string | null>(null)
    useEffect(()=>{
        const handleKeyDown= (e:KeyboardEvent)=>{
            setKeyPressed(e.key.toUpperCase())
        }
        window.addEventListener("keydown", handleKeyDown)
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown)
        }
    },[])
  return (
    <div style={{maxWidth: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h2 style={{ fontWeight: "bold" }}>
        Phím bạn vừa nhấn:
      </h2>

      <div style={{ marginTop: "20px", padding: "30px 50px", border: "2px dashed #333", borderRadius: "8px", fontSize: "24px", fontWeight: "bold", color: "#333", minWidth: "100px", textAlign: "center" }}>
        {keyPressed ? `[ ${keyPressed} ]` : "Chưa có phím nào"}
      </div>
    </div>
  )
}
