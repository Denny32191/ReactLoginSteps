import { Preference } from "./Preference";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InputFormType = {
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
  inputForms: InputFormType[];
  checkbox: string;
  errors: {
    inputAbout?: string;
    inputForms?: [];
    checkbox?: string;
  };
};

const initialState: PreferenceState = {
  inputAbout: "",
  inputForms: [{
    label: "",
    type: "",
    value: "",
    name: "",
    placeholder: "",
    error: "",
    id: 0,
    disabled: "",
  },],
  checkbox: "",
  errors: {},
};
export const preferenceSlice = createSlice({
  name: "preference",
  initialState,

  reducers: {
    setInputAbout: (
      state,
      action: PayloadAction<{ id: number; value: string }>
    ) => {
      const { id } = action.payload
      const index = state.inputForms.findIndex((inputForm) => inputForm.id === id);
      if (index !== -1) {
        state.inputForms[index].value = action.payload.value;
      }
  
      
    },
    setInputForms: (state, action: PayloadAction<InputFormType[]>) => {
      state.inputForms = [...state.inputForms, ...action.payload];
    },

    setCheckBox: (state, action: PayloadAction<string>) => {
      state.checkbox = action.payload;
    },
    setErrors: (
      state,
      action: PayloadAction<{
        inputAbout?: string;
        // inputForms?: InputFormType[];
        checkbox?: string;
      }>
    ) => {
      state.errors = action.payload;
    },
  },
});
export const { setInputAbout, setErrors, setInputForms, setCheckBox } =
  preferenceSlice.actions;
export const preferenceReducer = preferenceSlice.reducer;
