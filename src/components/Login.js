import React, { useState,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState();

    const email = useRef(null);
    const name= useRef(null);
    const password = useRef(null); 

    const handleButtonClick = () => {
      //Validate the form using validate.js
      //Inorder to bring the email and password we will use useRef hook to get the value of the input fields 
      const message=checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message){
          return;
      }
      if(!isSignIn){
        // sign up logic
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });    
      }
      else{
        // sign in logic
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/browse');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " : " + errorMessage);
          });
      }
        
      
      



    }
    //This function is to toggle between sign in and sign up form
    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='login'></img>
        </div>
        <form  onSubmit={(e) => e.preventDefault()}  className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4 '>{isSignIn ? "Sign In" :"Sign Up"}</h1>
        { !isSignIn && (<input type='name' ref={name} placeholder=' Full Name' className='p-4 my-4 w-full mb-5  bg-[#2C2C2C]'></input>)}
        <input ref={email} type='email' placeholder='Email' className='p-4 my-4 w-full mb-5 bg-[#2C2C2C]'></input>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full mb-5  bg-[#2C2C2C]'></input>
        <p className='text-red-600 text-center font-bold'>{errorMessage}</p>
        <button className='bg-red-600 p-4 my-4 w-full rounded-lg text-lg' onClick={handleButtonClick}>{isSignIn ? "Sign In" :"Sign Up"}</button>     
        <h4 className='text-center my-4 text-base cursor-pointer'>{isSignIn ? "New To Netflix? " :"Already A Member? "} <span className='text-red-600' onClick={toggleSignInForm}>{isSignIn ? "Sign Up Now " :"Sign In Now "}</span></h4>
        </form>
       
    </div>
  )
}

export default Login;