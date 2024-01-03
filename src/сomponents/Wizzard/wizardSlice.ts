import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export  type WizardState = {
    step: number ;
}

const initialState: WizardState = {
step: 1,
}
export const wizardSlice = createSlice ({
    name: "personal",
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        }
    }
    });
    export const { setStep,} = wizardSlice.actions
export const wizardReducer = wizardSlice.reducer;