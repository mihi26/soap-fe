import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: Boolean(JSON.parse(localStorage.getItem("@token"))),
  userInfo: JSON.parse(localStorage.getItem("@user")),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserCredentials: (state, action) => {
      localStorage.setItem(
        "@token",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem("@user", JSON.stringify(action.payload.userInfo));
      state.isAuthenticated = true;
      state.userInfo = action.payload.userInfo;
    },
    logOut: (state) => {
      localStorage.removeItem("@token");
      localStorage.removeItem("@user");
      state.isAuthenticated = false;
    },
  },
});

export const { saveUserCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
