import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const activeStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "4px",
    textDecoration: "none",
  };
   const normalStyle = {
    textDecoration: "none", 
  };

  return (
    <nav style={{  display: "flex", gap: "15px",  }}>
      <NavLink to="/bai6/home"  style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
        Home
      </NavLink>
      <NavLink to="/bai6/product" style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
        Product
      </NavLink>
      <NavLink to="/bai6/detail" style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
        Detail
      </NavLink>
    </nav>
  );
}
