import { createSlice } from "@reduxjs/toolkit";

export const tokenUserSlice = createSlice({
  name: "tokenUser",
  initialState: "",
  reducers: {
    setTokenUser: (state, action) => action.payload,
    clearToken: (state) => {
      return null;
    },
  },
});

export const { setTokenUser, clearToken } = tokenUserSlice.actions;
