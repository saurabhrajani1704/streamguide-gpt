import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const showGptSearch= useSelector(store=>store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
       navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    //This is to check if the user is already signed in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSearchClick =()=>{
    //toggle my gpt search button
    dispatch(toggleGptSearchView());
  }

  return (
    <div>
       <div className='absolute  w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
          <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>
          {user && (
            <div className='flex flex-row justify-between'>
              <button className=' bg-amber-700 text-white font-bold px-4 py-1 rounded-md absolute right-40 top-8 cursor-pointer' onClick={handleSearchClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button>
              <button  className='bg-red-600 text-white font-bold px-4 py-1 rounded-md absolute right-5 top-8 cursor-pointer' onClick={handleSignOut}>Sign Out</button>
        </div>
          )}
          
        </div>
        
    </div>
  )
};

export default Header;