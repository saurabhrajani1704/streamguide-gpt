import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter,} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useEffect} from 'react';
import {onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { auth} from '../utils/firebase';

const Body = () => {

    const dispatch = useDispatch();
    const appRouter=createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/browse',
            element: <Browse />,

        }

    ]);

    useEffect(() => {
        //This is to check if the user is already signed in
        onAuthStateChanged(auth, (user) => {
            if (user) {
               const {uid,email,displayName} = user;
               dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            } else {
                dispatch(removeUser());
            }
        });
    }, []);

    
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;
