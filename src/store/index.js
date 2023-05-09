import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loading/loadingSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
  },
});
