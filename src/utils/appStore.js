//This is the redux store create to store the sign in information so that we can use it in other components

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
        }
    }
);

export default appStore;


