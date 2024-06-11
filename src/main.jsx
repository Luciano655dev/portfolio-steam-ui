import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from './pages/Home/Home.jsx'
import DefaultPage from './pages/Default.jsx'
import Page404 from './pages/Page404/Page404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultPage></DefaultPage>,
    children: [
      {
        path: `*`,
        element: <Page404></Page404>
      },
      {
        path: `/`,
        element: <Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
