import React from 'react'
import ThemeProvide from "./ThemeProvider"
import Header from "./Header"
import Content from "./Content"
import "./Theme.css"

export default function Theme() {
  return (
    <ThemeProvide>
      <Header />
      <Content />
    </ThemeProvide>
  )
}
