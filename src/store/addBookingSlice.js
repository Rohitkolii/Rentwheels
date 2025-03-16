import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const addBookingSlice = createSlice({
    name: 'add Booking',

    initialState : {
        data: [],
        status : 'idle'
    },

    reducers: {
        setBooking : (state, action) => {
            state.data = action.payload;
        },

        setBookingLoadStatus: (state, action) => {
            state.status = action.payload;
        },
    }
})

export const { setBooking, setBookingLoadStatus } = addBookingSlice.actions;
export default addBookingSlice.reducer;


// Thunk 

export const addBooking = (data)=> {
    return async function addBookingThunk(dispatch, getState) {
        dispatch(setBookingLoadStatus('loading'))
        try {
            const response = await fetch("http://localhost:5000/api/booking/add",{
                method: "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(data),
        
            });
            console.log(response);
            
            if(response.ok){
                const data = await response.json();
                dispatch(setBookingLoadStatus('idle'));
                dispatch(setBooking(data));
                // console.log(data);

                toast.success('Vehicle Booked Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }else{
                    toast.error('Check all fields!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
        } catch (error) {
            console.log(error)
            dispatch(setBookingLoadStatus('error'))
            toast.error('Something went wrong!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
}