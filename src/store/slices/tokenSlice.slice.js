import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenUser: "",
};

export const tokenSlice = new createSlice({
  name: "tokenSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.tokenUser = action.payload.tokenUser;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
