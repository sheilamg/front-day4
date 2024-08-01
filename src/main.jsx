import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Register } from './pages/Register/Register'
import App from './App'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'
import { Users } from './pages/Users/Users'
import { Profile } from './pages/Profile/Profile'
import { SearchMovie } from './components/SearchMovie/SearchMovie'
import MovieProfile from './components/SearchMovie/MovieProfile/MovieProfile'
import { AdminProfile } from './pages/AdminProfile/AdminProfile'
import { EditUser } from './pages/AdminProfile/EditUser/EditUser'
//import { AuthProvider } from 'contexs/AuthContext'

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

   

  
