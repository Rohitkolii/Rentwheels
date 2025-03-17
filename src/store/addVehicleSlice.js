import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const addVehicleSlice = createSlice({
    name: 'add Vehicle',

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

export const addVehicle = (data, token)=> {
    return async function addVehicleThunk(dispatch, getState) {
        dispatch(setVehicleLoadStatus('loading'))
        const formData = new FormData();
        formData.append("Vehicle_type", data.Vehicle_type);
        formData.append("Vehicle_name", data.Vehicle_name);
        formData.append("Vehicle_model", data.Vehicle_model);
        formData.append("Vehicle_rent", data.Vehicle_rent);
        formData.append("Vehicle_average", data.Vehicle_average);
        formData.append("user_name", data.user_name);
        formData.append("user_id", data.user_id);
        formData.append("image", data.image);
        try {
            const response = await fetch("http://localhost:5000/api/vehicle/add",{
                method: "POST",
                headers : {
                    Authorization: `Bearer ${token}`,
                },
                body:formData,
        
            });
            console.log(response);
            
            if(response.ok){
                const data = await response.json();
                dispatch(setVehicleLoadStatus('idle'));
                dispatch(setVehicleList(data));
                // console.log(data);

                toast.success('Vehicle added Successfully', {
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
            dispatch(setVehicleLoadStatus('error'))
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