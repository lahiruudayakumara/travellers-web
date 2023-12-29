import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
        <div className='px-20 pt-5'>
        <NavBar />
        <Outlet />
        </div>
        <Footer />
    </>
    
  )
}

export default MainLayout
