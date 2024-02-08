import { InputForm } from "../../сomponents/InputForm";
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
  deleteInput: {
    id: number;
    value: string;
  };
  createInput: {
    id: number;
    value: string;
  };
  errors: {
    inputAbout?: string;
    inputForms?: [];
    checkbox?: string;
  };
};

const initialState: PreferenceState = {
  inputAbout: "",
  createInput: {
    id: 0,
    value: "",
  },
  deleteInput: {
    id: 0,
    value: "",
  },
  inputForms: [
    {
      label: "",
      type: "",
      value: "",
      name: "",
      placeholder: "",
      error: "",
      id: Date.now(),
      disabled: "",
    },
  ],
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
      const { id, value } = action.payload;
      state.inputForms = state.inputForms.map((inputForm) => {
        if (inputForm.id === id) {
          return { ...inputForm, value };
        }
        return inputForm;
      });
    },
    createInput: (state) => {
      state.inputForms = [
        ...state.inputForms,
        {
          id: Date.now(),
          label: "",
          type: "",
          value: "",
          name: "",
          placeholder: "",
          error: "",
          disabled: "",
        },
      ];
    },

    deleteInput: (state, action: PayloadAction<number>) => {
      state.inputForms = state.inputForms.filter(
        (inputForm) => inputForm.id !== action.payload
      );
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
export const {
  setInputAbout,
  setErrors,
  setInputForms,
  setCheckBox,
  createInput,
  deleteInput,
} = preferenceSlice.actions;
export const preferenceReducer = preferenceSlice.reducer;
