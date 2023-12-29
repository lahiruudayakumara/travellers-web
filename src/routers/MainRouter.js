import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserProtected from './UserProtected'
import Login from '../pages/Login'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

const MainRouter = () => {
  return <RouterProvider router={router} />
}

export default MainRouter
