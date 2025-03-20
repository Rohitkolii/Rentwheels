import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'userlist',

    initialState : {
        data: [],
        status : 'idle'
    },

    reducers: {
        setUserList : (state, action) => {
            state.data = action.payload;
        },

        setUserListStatus: (state, action) => {
            state.status = action.payload;
        },
    }
})

export const { setUserList, setUserListStatus } = userSlice.actions;
export default userSlice.reducer;


// Thunk 

export const fetchUserList = (token)=> {
    return async function fetchUserListThunk(dispatch, getState) {
        dispatch(setUserListStatus('loading'))
        
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/admin/users`,{
                method: "GET",
                headers : {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(response);
            
            if(response.ok){
                const data = await response.json();
                dispatch(setUserListStatus('idle'));
                dispatch(setUserList(data));
                // console.log(data);
            }
        } catch (error) {
            console.log(error)
            dispatch(setUserListStatus('error'))
        }
    }
}