import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartInfo: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartInfo: (state, action) => {
      state.cartInfo = action.payload;
    },
  },
});

export const { setCartInfo } = cartSlice.actions;

export default cartSlice.reducer;
