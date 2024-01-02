import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout'
import Sign from '../pages/Sign'
import Bookmark from "../pages/Bookmarks"
import Search from '../pages/Search'
import { Price } from '../pages/Price'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/bookmarks",
                element: <Bookmark />
            },
            {
                path: "/search/:query",
                element: <Search />
            },
            {
                path: "/price",
                element: <Price />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sign",
        element: <Sign />
    }
])

const MainRouter = () => {
  return <RouterProvider router={router} />
}

export default MainRouter
