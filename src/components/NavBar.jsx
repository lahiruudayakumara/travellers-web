import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' flex justify-between'>
      <div>
        <h1 className='text-2xl font-bold text-brown'>Travellers</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Sign in</Link>
        <button className='bg-blue p-2 text-white rounded-md w-20 ml-2'>Sign In</button>
        <button className='bg-blue p-2 text-white rounded-md w-20 ml-2'>Sign up</button>
      </div>
    </div>
  )
}

export default NavBar
