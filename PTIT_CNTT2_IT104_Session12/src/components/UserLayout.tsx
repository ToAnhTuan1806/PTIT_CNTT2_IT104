import React from 'react'
import Header from './Bai7/Header'
import Navbar from './Bai7/Navbar'
import Menu from './Bai7/Menu'
import Main from './Bai7/Main'
import Article from './Bai7/Article'

export default function UserLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh"}}>
        <Header/>
        <Navbar/>
        <div style={{display: "flex", flex: 1}}>
            <Menu/>
            <Main/>
            <Article/>
        </div>
    </div>
  )
}
