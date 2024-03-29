import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalState = {
  isOpen: boolean;
  status: "success" | "error" | null;

  // errors: {
  //   isOpen?: boolean;
  //   status: boolean;
  // };
};
const initialState: ModalState = {
  isOpen: false,
  status: null,

  // errors: {
  //   isOpen?: boolean;
  //   status?: boolean;
  // },
};
export const modalSlice = createSlice({
  name: " modal",
  initialState,

  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setStatus(state, action: PayloadAction<"success" | "error" | null>) {
      state.status = action.payload;
    },
  },
});
export const { setIsOpen, setStatus } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
