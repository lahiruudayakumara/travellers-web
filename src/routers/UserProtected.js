import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../stores/slices/userSlice'
import Home from '../pages/Home';
import Login from '../pages/Login';

const UserProtected = () => {
    const user = useSelector(selectUser);
  return user ? <Home /> : <Login />;
}

export default UserProtected
