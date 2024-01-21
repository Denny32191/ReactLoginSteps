import { Preference } from "./Preference";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PreferenceState = {
  inputAbout: string;
  inputForms: string[];
  errors: {
    inputAbout?: string;
    inputForms?: string[];
  };
};

const initialState: PreferenceState = {
  inputAbout: "",
  inputForms: [],
  errors: {},
};
export const preferenceSlice = createSlice({
  name: "preference",
  initialState,

  reducers: {
    setInputAbout: (state, action: PayloadAction<string>) => {
      state.inputAbout = action.payload;
    },
    setInputForms: (state,action: PayloadAction<string[]>) => {
      state.inputForms = action.payload;
    },
    setErrors: (state, action: PayloadAction<{ inputAbout?: string, inputAdd?: string[], }>) => {
      state.errors = action.payload;
    },
  },
});
export const { setInputAbout,setErrors,setInputForms } = preferenceSlice.actions;
export const preferenceReducer = preferenceSlice.reducer;
