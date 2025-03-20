import { createSlice } from '@reduxjs/toolkit'

const getFeedbackSlice = createSlice({
    name: 'Booking List',

    initialState : {
        data: [],
        status : 'idle'
    },

    reducers: {
        setFeedback : (state, action) => {
            state.data = action.payload;
        },

        setFeedbackStatus: (state, action) => {
            state.status = action.payload;
        },
    }
})

export const { setFeedback, setFeedbackStatus } = getFeedbackSlice.actions;
export default getFeedbackSlice.reducer;


// Thunk 

export const fetchFeedback = ()=> {
    return async function fetchFeedbackThunk(dispatch, getState) {
        dispatch(setFeedbackStatus('loading'))
        
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/feedback/get`);
            // console.log(response);
            
            if(response.ok){
                const data = await response.json();
                dispatch(setFeedbackStatus('idle'));
                dispatch(setFeedback(data));
                // console.log(data);
            }
        } catch (error) {
            console.log(error)
            dispatch(setFeedbackStatus('error'))
        }
    }
}