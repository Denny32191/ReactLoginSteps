import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalType = {
  success: boolean;
  errors: {
    selfInput?: string;
  };
};
export type ModalState = {
  success: false;
  errors: {};
};
const initialState: ModalState = {
  success: false,
  errors: {},
};
export const modalSlice = createSlice({
  name: " modal",
  initialState,

  reducers: {
    setSuccess(state, action) {
      state.success = action.payload;
    },
  },
});
export const { setSuccess } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
