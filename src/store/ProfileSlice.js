import { createSlice } from "@reduxjs/toolkit";
import { AXIOS } from "../utils/axios";
import axios from "axios";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: null,
    status: "idle",
    isAuthenticated: false,
  },
  reducers: {
    setProfile: (state, action) => {
      state.data = action.payload;
    },
    setProfileStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setProfile, setProfileStatus } = profileSlice.actions;
export default profileSlice.reducer;

// ✅ Thunk
export const fetchUserProfile = () => {
  return async (dispatch) => {
    dispatch(setProfileStatus("loading"));
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/api/auth/user`,{
        headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}
      });
      if (response.status === 200) {
        dispatch(setProfile(response.data));
        dispatch(setProfileStatus("idle"));
      }
    } catch (error) {
      console.log("Profile Fetch Error:", error);
      dispatch(setProfileStatus("error"));
    }
  };
};
