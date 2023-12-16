import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: { toast: "" },
  reducers: {
    showToast(state, action) {
      state.toast = {
        message: action.payload.message,
      };
    },
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice;
