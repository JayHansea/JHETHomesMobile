import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: { toast: null }, // Change initial state to null
  reducers: {
    showToast(state, action) {
      state.toast = action.payload; // Set entire payload as toast
    },
    hideToast(state) {
      state.toast = null; // Reset toast to null to hide it
    },
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice;
