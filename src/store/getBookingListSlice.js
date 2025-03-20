import { createSlice } from '@reduxjs/toolkit'

const getBookingListSlice = createSlice({
    name: 'Booking List',

    initialState : {
        data: [],
        status : 'idle'
    },

    reducers: {
        setBookingList : (state, action) => {
            state.data = action.payload;
        },

        setBookingListStatus: (state, action) => {
            state.status = action.payload;
        },
    }
})

export const { setBookingList, setBookingListStatus } = getBookingListSlice.actions;
export default getBookingListSlice.reducer;


// Thunk 

export const fetchBookingList = ()=> {
    return async function fetchBookingListThunk(dispatch, getState) {
        dispatch(setBookingListStatus('loading'))
        
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/booking/get`);
            // console.log(response);
            
            if(response.ok){
                const data = await response.json();
                dispatch(setBookingListStatus('idle'));
                dispatch(setBookingList(data));
                // console.log(data);
            }
        } catch (error) {
            console.log(error)
            dispatch(setBookingListStatus('error'))
        }
    }
}