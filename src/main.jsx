import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Register } from './pages/Register/Register'
import App from './App'

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "search-movie",
        element: <SearchMovie />,
      },
      {
        path: "/movie/:id",
        element: <MovieProfile />
      },
      {
        path: "/admin-profile",
        element: <AdminProfile />
      },
      {
        path: "/edit-user/:id",
        element: <EditUser />
      },
    ]
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
])
*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)

   

  
