import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './Navigation'
import './index.css'
import Skills from './Skills'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bio from './Bio'
import Portfolio from './Portfolio'


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <Navigation />
    <Skills />
    <Bio />
    <Portfolio />
    </>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
