import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='login'></img>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4 '>{isSignIn ? "Sign In" :"Sign Up"}</h1>
        { !isSignIn && (<input type='name' placeholder=' Full Name' className='p-4 my-4 w-full mb-5  bg-[#2C2C2C]'></input>)}
        <input type='email' placeholder='Email' className='p-4 my-4 w-full mb-5 bg-[#2C2C2C]'></input>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full mb-5  bg-[#2C2C2C]'></input>
        <button className='bg-red-600 p-4 my-4 w-full rounded-lg text-lg'>{isSignIn ? "Sign In" :"Sign Up"}</button>
        <h4 className='text-center my-4 text-base cursor-pointer'>{isSignIn ? "New To Netflix? " :"Already A Member? "} <span className='text-red-600' onClick={toggleSignInForm}>{isSignIn ? "Sign Up Now " :"Sign In Now "}</span></h4>
        </form>
       
    </div>
  )
}

export default Login;