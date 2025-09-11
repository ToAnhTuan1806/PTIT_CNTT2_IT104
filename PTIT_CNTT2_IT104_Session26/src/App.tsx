import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Link to="/product/12">Product Detail</Link>
      <hr />
      
      <Link to="/student/nam">Student</Link>
      <hr />

      <Link to="/student">Student</Link>
      <hr />

      <Link to="/login" style={{marginRight: "10px"}}>Login</Link>
      <Link to="/account">Account</Link>
      <hr />

      <Link to="/logins" style={{marginRight: "10px"}}>Login Form</Link>
      <Link to="/accounts">Account </Link>
      <hr />

      <Link to="/teams">Teams</Link>
      <hr />

      <Link to="/lazy">LazyLoadComp</Link>
      <hr />






      <Outlet></Outlet>
    </div>
  )
}
