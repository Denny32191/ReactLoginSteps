import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DescriptionState = {
  selfInput: string;
  success: boolean;
  errors: {
    selfInput?: string
  }

}
const initialState: DescriptionState = {
  selfInput: "",
  success: false,
  errors: {},
  };
  export const descriptionSlice = createSlice({
    name: "description",
    initialState,
    reducers: {
   setSelfInput:(state, action: PayloadAction<string>) => {
    state.selfInput = action.payload;
      },
      setSuccess(state,action) {
        state.success = action.payload;
      },
      setErrors: (state, action: PayloadAction<{selfInput?: string,}>) => {
        state.errors = action.payload;
      },
      
    }
    });
    export const { setSelfInput,setErrors,setSuccess } = descriptionSlice.actions;
    export const descriptionReducer = descriptionSlice.reducer;