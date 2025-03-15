// import cartReducer from './cartSlice';
// import productReducer from './productSlice'
import {configureStore} from '@reduxjs/toolkit'
import ProfileReducer from "./ProfileSlice"
import userListReducer from "./userlistSlice"

const store = configureStore({
    reducer : {
        profileSlice : ProfileReducer,
        userListSlice : userListReducer,
    }
})

export default store;