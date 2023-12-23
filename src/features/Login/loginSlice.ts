import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LoginState = {
  phone: string;
  email: string;
  errors: {
    phone?: string;
    email?: string;
  } 
};

const initialState: LoginState = {
  phone: "",
  email: "",
  errors: {},
};

export const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setErrors: (state, action: PayloadAction<{phone?: string, email?: string}>) => {
      state.errors = action.payload;
    },
  },
});

export const { setPhone, setEmail, setErrors } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
