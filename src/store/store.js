import {configureStore} from '@reduxjs/toolkit'
import ProfileReducer from "./ProfileSlice"
import userListReducer from "./userlistSlice"
import VehicleListReducer from "./getVehicleSlice"
import SingleVehicleReducer from "./getSingleVehicleSlice"
import BookingListReducer from "./getBookingListSlice"
import FeedbackReducer from "./getFeedbackSlice"
import DashDataReducer from "./DashSlice"

const store = configureStore({
    reducer : {
        profileSlice : ProfileReducer,
        userListSlice : userListReducer,
        getVehicleSlice : VehicleListReducer,
        SingleVehicleSlice : SingleVehicleReducer,
        BookingListSlice : BookingListReducer,
        FeedbackSlice : FeedbackReducer,
        DashDataSlice : DashDataReducer,
    }
})

export default store;