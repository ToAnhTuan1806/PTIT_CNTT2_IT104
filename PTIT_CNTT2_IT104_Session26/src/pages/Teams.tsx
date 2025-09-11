import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Teams() {
  return (
    <div style={{padding: "20px"}}>
        <h2>Teams</h2>
        <ul>
          <li><Link to="mu">MU</Link></li>
          <li><Link to="real">REAL</Link></li>
          <li><Link to="ac">AC</Link></li>
        </ul>

        <Outlet />
    </div>
  )
}
