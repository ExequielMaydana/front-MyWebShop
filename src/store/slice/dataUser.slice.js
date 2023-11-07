import { createSlice } from "@reduxjs/toolkit";

export const dataUserSlice = createSlice({
  name: "dataUser",
  initialState: null,
  reducers: {
    setDataUser: (state, action) => action.payload,
  },
});

export const { setDataUser, getDataUser } = dataUserSlice.actions;
