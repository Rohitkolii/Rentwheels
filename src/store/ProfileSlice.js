import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: 'register',

    initialState : {
        data: [],
        status : 'idle',
        isAuthenticated : false
    },

    reducers: {
        setProfile : (state, action) => {
            state.data = action.payload;
        },

        setProfileStatus: (state, action) => {
            state.status = action.payload;
        },

        // setAuth: (state) => {
        //     state.isAuthenticated = true;
        //   },
    }
})

export const { setProfile, setProfileStatus, setAuth } = profileSlice.actions;
export default profileSlice.reducer;


// Thunk 

export const fetchUserProfile = (token)=> {
    return async function fetchUserProfileThunk(dispatch, getState) {
        dispatch(setProfileStatus('loading'))
        // console.log(token);
        
        
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method: "GET",
                headers : {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(response);
            
            
            if(response.ok){
                const data = await response.json();
                dispatch(setProfileStatus('idle'));
                dispatch(setProfile(data));
                // console.log(data);
                dispatch(setProfileStatus('loading'))
            }
        } catch (error) {
            console.log(error)
            dispatch(setProfileStatus('error'))
        }
    }
}