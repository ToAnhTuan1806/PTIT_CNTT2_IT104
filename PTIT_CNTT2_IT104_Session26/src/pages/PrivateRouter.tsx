import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter() {
    const [isProtect] =useState<boolean>(true)
  return (
    isProtect ? <Outlet/> : <Navigate to="/login" replace/>
  )
}
