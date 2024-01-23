import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DescriptionState = {

}
const initialState: DescriptionState = {
 
  };
  export const descriptionSlice = createSlice({
    name: "description",
    initialState,
    reducers: {

      },
    });

    export const descriptionReducer = descriptionSlice.reducer;