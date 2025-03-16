import { createSlice } from '@reduxjs/toolkit'

const getVehicleListSlice = createSlice({
    name: 'vehicle List',

    initialState : {
        data: [],
        status : 'idle'
    },

    reducers: {
        setVehicleList : (state, action) => {
            state.data = action.payload;
        },

        setVehicleListStatus: (state, action) => {
            state.status = action.payload;
        },
    }
})

export const { setVehicleList, setVehicleListStatus } = getVehicleListSlice.actions;
export default getVehicleListSlice.reducer;


// Thunk 

export const fetchVehicleList = ()=> {
    return async function fetchVehicleListThunk(dispatch, getState) {
        dispatch(setVehicleListStatus('loading'))
        
        try {
            const response = await fetch("http://localhost:5000/api/vehicle/get");
            // console.log(response);
            
            if(response.ok){
                const data = await response.json();
                dispatch(setVehicleListStatus('idle'));
                dispatch(setVehicleList(data));
                // console.log(data);
            }
        } catch (error) {
            console.log(error)
            dispatch(setVehicleListStatus('error'))
        }
    }
}