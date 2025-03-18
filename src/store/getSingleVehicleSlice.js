import { createSlice } from '@reduxjs/toolkit'

const SingleVehicleSlice = createSlice({
    name: 'single Vehicle',

    initialState : {
        data: [],
        status : 'idle',
        isAuthenticated : false
    },

    reducers: {
        setSingleVehicle : (state, action) => {
            state.data = action.payload;
        },

        setSingleVehicleStatus: (state, action) => {
            state.status = action.payload;
        },

        // setAuth: (state) => {
        //     state.isAuthenticated = true;
        //   },
    }
})

export const { setSingleVehicle, setSingleVehicleStatus, setAuth } = SingleVehicleSlice.actions;
export default SingleVehicleSlice.reducer;


// Thunk 

export const fetchSingleVehicle = (id)=> {
    return async function fetchSingleVehicleThunk(dispatch, getState) {
        dispatch(setSingleVehicleStatus('loading'))
        // console.log(token);
        
        
        try {
            const response = await fetch(`http://localhost:5000/api/vehicle/${id}`);
            // console.log(response);
            
            
            if(response.ok){
                const data = await response.json();
                dispatch(setSingleVehicleStatus('idle'));
                dispatch(setSingleVehicle(data));
                // console.log(data);
            }
        } catch (error) {
            console.log(error)
            dispatch(setSingleVehicleStatus('error'))
        }
    }
}