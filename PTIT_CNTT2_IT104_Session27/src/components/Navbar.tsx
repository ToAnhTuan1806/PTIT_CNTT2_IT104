import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header style={{background: "#007BFF"}}>
        <nav  style={{maxWidth: 1000, margin: "0 auto", height: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 30,}}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({ 
            textDecoration: isActive ? "none" : "none", color: "#fff", fontWeight: 600, padding: "8px 14px", borderRadius: "6px",
          })}>
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({ 
            textDecoration: isActive ? "underline" : "none", color: "#fff", fontWeight: 600, padding: "8px 14px", borderRadius: "6px",
          })}>
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({ 
            textDecoration: isActive ? "underline" : "none", color: "#fff", fontWeight: 600, padding: "8px 14px", borderRadius: "6px",
          })}>
          Contact
        </NavLink>
        </nav>
    </header>
  )
}
