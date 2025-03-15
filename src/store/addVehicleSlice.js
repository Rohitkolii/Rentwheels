import { createSlice } from '@reduxjs/toolkit'

const addVehicleSlice = createSlice({
    name: 'userlist',

    initialState : {
        data: [],
        status : 'idle'
    },

    reducers: {
        setVehicleList : (state, action) => {
            state.data = action.payload;
        },

        setVehicleLoadStatus: (state, action) => {
            state.status = action.payload;
        },
    }
})

export const { setVehicleList, setVehicleLoadStatus } = addVehicleSlice.actions;
export default addVehicleSlice.reducer;


// Thunk 

export const addVehicle = (data)=> {
    return async function addVehicleThunk(dispatch, getState) {
        dispatch(setVehicleLoadStatus('loading'))
        const formData = new FormData();
        formData.append("Vehicle_type", data.Vehicle_type);
        formData.append("Vehicle_name", data.Vehicle_name);
        formData.append("Vehicle_model", data.Vehicle_model);
        formData.append("Vehicle_rent", data.Vehicle_rent);
        formData.append("Vehicle_average", data.Vehicle_average);
        formData.append("image", data.image);
        try {
            const response = await fetch("http://localhost:5000/api/vehicle/add",{
                method: "POST",
                body:formData,
        
            });
            console.log(response);
            
            if(response.ok){
                const data = await response.json();
                dispatch(setVehicleLoadStatus('idle'));
                dispatch(setVehicleList(data));
                // console.log(data);
            }
        } catch (error) {
            console.log(error)
            dispatch(setVehicleLoadStatus('error'))
        }
    }
}