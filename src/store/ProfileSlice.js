import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: 'profile',

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
            const response = await fetch(`${import.meta.env.VITE_URL}/api/auth/user`,{
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
                // dispatch(setProfileStatus('idle'))
            }
        } catch (error) {
            console.log(error)
            dispatch(setProfileStatus('error'))
        }
    }
}