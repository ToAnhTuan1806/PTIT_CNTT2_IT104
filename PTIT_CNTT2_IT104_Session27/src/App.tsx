import React from 'react'
import Navbar from './components/Navbar'
import {Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar/>
    <hr />
      <Link to="/products">Product List</Link>
    <hr />  
      <Link to="/task">Task</Link>
    <hr />  
      <Link to="/productlist">Product List</Link>
    <hr />  

      <Outlet/>
    </>
  )
}
