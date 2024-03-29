//s change all

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import your combined reducers from a separate file

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production", // Redux DevTools will be disabled in production
});

export default store;
