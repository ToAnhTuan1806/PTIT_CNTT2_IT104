import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/route'
import "./style.css"
export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
