import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import logSlice from "../features/logSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    log: logSlice,
  },
});

export default store;
