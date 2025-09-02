import React, { createContext, useState } from "react"
import type { ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

interface ThemeProvideProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}
})

export default function ThemeProvide(props: ThemeProvideProps) {
  const [theme, setTheme] = useState<Theme>("light")

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}
