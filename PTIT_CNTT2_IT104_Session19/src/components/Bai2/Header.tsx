import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>My Themed App</h1>
      <button className="btn" onClick={toggleTheme} style={{ padding: "10px 20px", borderRadius: "8px", cursor: "pointer", marginTop: "10px" }}>
        Toggle Theme
      </button>
    </div>
  )
}
