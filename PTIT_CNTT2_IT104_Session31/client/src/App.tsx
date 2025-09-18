import React from 'react'
import PostManager from './pages/PostManager'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import "./style.css"
const router= createBrowserRouter([
  {
    path: "/",
    element: <Navigate to= "list-post" replace/>
  },
  {
    path: "list-post",
    element: <PostManager/>
  }
])
export default function App() {
  return <RouterProvider router={router} />
}
