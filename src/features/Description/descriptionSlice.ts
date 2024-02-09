import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DescriptionState = {
  selfInput: string;

  errors: {
    selfInput?: string
  }

}
const initialState: DescriptionState = {
  selfInput: "",
  errors: {},
  };
  export const descriptionSlice = createSlice({
    name: "description",
    initialState,
    reducers: {
   setSelfInput:(state, action: PayloadAction<string>) => {
    state.selfInput = action.payload;
      },
      setErrors: (state, action: PayloadAction<{selfInput?: string,}>) => {
        state.errors = action.payload;
      },
      
    }
    });
    export const { setSelfInput,setErrors } = descriptionSlice.actions;
    export const descriptionReducer = descriptionSlice.reducer;