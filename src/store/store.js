// import cartReducer from './cartSlice';
// import productReducer from './productSlice'
import {configureStore} from '@reduxjs/toolkit'
import ProfileReducer from "./ProfileSlice"
import userListReducer from "./userlistSlice"
import VehicleListReducer from "./getVehicleSlice"
import SingleVehicleReducer from "./getSingleVehicleSlice"

const store = configureStore({
    reducer : {
        profileSlice : ProfileReducer,
        userListSlice : userListReducer,
        getVehicleSlice : VehicleListReducer,
        SingleVehicleSlice : SingleVehicleReducer
    }
})

export default store;