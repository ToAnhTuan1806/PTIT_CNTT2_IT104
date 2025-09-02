import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function Content() {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>
        Theme hiện tại: <b>{theme.toUpperCase()}</b>
      </p>
    </div>
  )
}
