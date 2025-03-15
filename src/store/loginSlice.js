// import { createSlice } from '@reduxjs/toolkit'

// const loginSlice = createSlice({
//     name: 'register',

//     initialState : {
//         data: [],
//         status : 'idle'
//     },

//     reducers: {
//         setUser : (state, action) => {
//             state.data = action.payload;
//         },

//         setStatus: (state, action) => {
//             state.status = action.payload;
//         }
//     }
// })

// export const { setUser, setStatus } = loginSlice.actions;
// export default loginSlice.reducer;


// // Thunk 

// export const fetchProducts = ()=> {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus('loading'))
//         try {
//             const res = await fetch("http://localhost:5000/api/auth/register");
//             const data = await res.json();
//             dispatch(setUser(data));
//             dispatch(setStatus('idle'));
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus('error'))
//         }
//     }
// }