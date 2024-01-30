
import { Preference } from "./Preference";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InputForm } from "../../сomponents/InputForm";


export type InputForm = {
  label: string;
  type: string;
  value: string;
  name: string;
  placeholder: string;
  error: string;
  id: number;
  disabled: string;
};

export type PreferenceState = {
  inputAbout: string;
  inputForms:  [];
  checkbox: string;
  errors: {
    inputAbout?: string;
    inputForms?:  [];
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
    setInputAbout: (state, action: PayloadAction<{id:string, value:string}>) => {
      state.inputAbout = action.payload.value;;
    },
    setInputForms: (state, action: PayloadAction<InputForm[]>) => {
      state.inputForms = [...state.inputForms, ...action.payload];
    },

    setCheckBox:(state,action:PayloadAction<string>)=> {
      state.checkbox = action.payload;
    },
    setErrors: (state, action: PayloadAction<{ inputAbout?: string,  inputForms?:  InputForm[],checkbox?: string, }>) => {
      state.errors = action.payload;
    },
  },
});
export const { setInputAbout,setErrors,setInputForms,setCheckBox } = preferenceSlice.actions;
export const preferenceReducer = preferenceSlice.reducer;
