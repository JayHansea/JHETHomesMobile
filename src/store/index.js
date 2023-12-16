import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import toastSlice from "./toast-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    toast: toastSlice.reducer,
  },
});
