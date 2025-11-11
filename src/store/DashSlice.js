import { createSlice } from '@reduxjs/toolkit'

const getDashboardDataSlice = createSlice({
    name: 'Dashboard Data',

    initialState : {
        data: {},
        status : 'idle'
    },

    reducers: {
        setDashboardData : (state, action) => {
            state.data = action.payload;
        },

        setDashboardDataStatus: (state, action) => {
            state.status = action.payload;
        },
    }
})

export const { setDashboardData, setDashboardDataStatus } = getDashboardDataSlice.actions;
export default getDashboardDataSlice.reducer;


// Thunk 

export const fetchDashboardData = ()=> {
    return async function fetchDashboardDataThunk(dispatch, getState) {
        dispatch(setDashboardDataStatus('loading'))
        
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/dashboard/dashboarddata`,{
                headers: {
                    "Authorization" : localStorage.getItem("token")
                }
            });
            // console.log(response);
            
            if(response.ok){
                const data = await response.json();
                dispatch(setDashboardDataStatus('idle'));
                dispatch(setDashboardData(data));
                console.log(data);
            }
        } catch (error) {
            console.log(error)
            dispatch(setDashboardDataStatus('error'))
        }
    }
}