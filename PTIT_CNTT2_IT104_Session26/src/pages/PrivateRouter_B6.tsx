import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter_B6() {
    const isProtect =localStorage.getItem("auth") === "true"
  return (
    isProtect ? <Outlet/> : <Navigate to="/logins" replace/>
  )
}
