import { useState } from 'react'
import img from '../assets/place_holder.png'
import { auth, provider } from '../firebase/Firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Sign = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([{
        userName: "",
        password: "",
    }])

    const SignupHandle = () => {
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const users = userCredential.user;
            console.log(users);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }

    const googleHandle = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const activeUser = result.user;

          const userTokenString = JSON.stringify({ user: activeUser, token });

          localStorage.setItem('user', userTokenString);
          navigate('/');            
      }).catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <div className='flex p-10 md:p-0 flex-col md:flex-row h-screen items-center bg-hero-pattern'>
      <div className='md:w-1/2 flex items-center justify-center'>
        <div className='bg-blue bg-transparent p-5 rounded-md shadow-md flex flex-col w-[400px]'>
            <input 
                type="text" 
                placeholder='email'
                className='my-2 px-5 py-2'
                onChange={(e) => setUser({ ...user, email: e.target.value}) }
            />
            <input 
                type="password" 
                placeholder='password'
                className='my-2 px-5 py-2' 
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button className='bg-brown text-white rounded-sm my-2 px-5 py-2'
                onClick={SignupHandle}
            >Sign up</button><br/>
            
            <button 
              className='bg-white w-full text-gray py-2 px-5 m-auto rounded-full shadow-md'
              onClick={googleHandle}
            ><GoogleIcon /> Sign up with Google
            </button>

            <p className='text-center pt-5 text-white'>Don't have an account? 
               <Link 
                  className='text-yellow font-bold'
                  to="/login"> Sign up
               </Link>
            </p>
        </div>
      </div>
      <div className='md:w-1/2'>
        <img src={img} alt='place-holder' />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Sign
