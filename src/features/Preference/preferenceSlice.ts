import { Preference } from "./Preference";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PreferenceState = {
  inputAbout: string;
  inputForms:  {label: string}[];
  checkbox: string;
  errors: {
    inputAbout?: string;
    inputForms?:  {label: string}[];
    checkbox?: string;
  };
};

const initialState: PreferenceState = {
  inputAbout: "",
  inputForms: [],
  checkbox: "",
  errors: {},
};
export const preferenceSlice = createSlice({
  name: "preference",
  initialState,

  reducers: {
    setInputAbout: (state, action: PayloadAction<string>) => {
      state.inputAbout = action.payload;
    },
    setInputForms: (state,action: PayloadAction< {label: string}[]>) => {
      state.inputForms.push(...action.payload);
    },

    setCheckBox:(state,action:PayloadAction<string>)=> {
      state.checkbox = action.payload;
    },
    setErrors: (state, action: PayloadAction<{ inputAbout?: string,  inputForms?:  {label: string}[],checkbox?: string, }>) => {
      state.errors = action.payload;
    },
  },
});
export const { setInputAbout,setErrors,setInputForms,setCheckBox } = preferenceSlice.actions;
export const preferenceReducer = preferenceSlice.reducer;
