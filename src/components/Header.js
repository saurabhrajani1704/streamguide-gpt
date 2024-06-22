import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
       navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
       <div className='absolute  w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
          <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>
          <div className='flex flex-row justify-between'>
          <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='avatar' className='w-13 h-[52px] rounded-md absolute right-40 top-5 cursor-pointer '></img>
          <button  className='bg-violet-600 text-white font-bold px-4 py-1 rounded-md absolute right-5 top-8 cursor-pointer' onClick={handleSignOut}>Sign Out</button>
        </div>
        </div>
        
    </div>
  )
}

export default Header;