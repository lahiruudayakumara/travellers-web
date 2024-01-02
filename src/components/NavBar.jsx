import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectUser } from '../stores/slices/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import DehazeIcon from '@mui/icons-material/Dehaze';

const NavBar = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const logoutHandle = () => {
      signOut(auth).then(() => {
        localStorage.removeItem('user');
        navigate('/');
      }).catch((error) => {
        console.log(error.messeage);
      });
      
    }

    const Links = [
      {name: "Home", link: "/"},
      {name: "Destination", link: "#destination"},
      {name: "Review", link: "#review"},
      {name: "Pricing", link: "/price"},
      {name: "About", link: "#about"}
    ]
    
  return (
    <div className=' flex justify-between md:px-20'>
      <div className='flex px-8 mt-2 text-blue justify-between items-center w-full'>
        <h1 className='text-4xl md:text-3xl font-bold text-brown'>Travellers</h1>
        <div className='hidden'>
        <DehazeIcon style={{ fontSize: '3rem' }} />
        </div>
      </div>
      <div className='md:flex flex-col hidden md:flex-row md:justify-between text-gray items-center font-semibold'>
        {
          Links.map((linksObj, index) => (
            <Link 
              key={index}
              to={linksObj.link}
              className='text-gray ml-5'
            >{linksObj.name}
            </Link>
          ))
        }
        {
          user ?
          <div className='ml-5 md:flex'>
            <Link to="/bookmarks">
            <button 
              className='bg-blue p-2 text-white rounded-md w-24 ml-2'
            >Bookmarks
            </button>
            </Link>
            <button 
              className='bg-blue p-2 text-white rounded-md w-24 ml-2'
              onClick={logoutHandle}
            >Logout
            </button>
          </div> :
          <div className='ml-5'>
            <button 
              className='bg-blue p-2 text-white rounded-md w-24 ml-2'
            >Sign In
            </button>
            <button 
              className='bg-blue p-2 text-white rounded-md w-24 ml-2'
            >Sign up
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default NavBar
