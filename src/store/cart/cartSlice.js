import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartId: "",
  cartItemsLength: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartInfo: (state, action) => {
      state.cartId = action.payload.cartId;
      state.cartItemsLength = action.payload.cartItemsLength;
    },
  },
});

export const { setCartInfo } = cartSlice.actions;

export default cartSlice.reducer;
