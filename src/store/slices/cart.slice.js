import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductCart: (state, action) => action.payload,
  },
});

export const { addProductCart } = cartSlice.actions;

export default cartSlice.reducer;
