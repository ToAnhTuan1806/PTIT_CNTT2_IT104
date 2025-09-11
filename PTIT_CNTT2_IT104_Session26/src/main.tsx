import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/routers.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={routers}></RouterProvider>
  </StrictMode>,
)
