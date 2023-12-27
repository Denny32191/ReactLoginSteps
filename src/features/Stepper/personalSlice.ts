import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export  type PersonalState = {
    nickname: string;
    name: string;
    surname:string;
    gender:string;
    errors: {
        nickname?: string;
        name?: string;
        surname?:string;
        gender?:string;
}
}
const initialState: PersonalState = {
    nickname: '',
    name: '',
    surname: '',
    gender: "",
    errors: {},
};
export const personalSlice = createSlice ({
    name: "personal",
    initialState,

    reducers: {
        setNickName: (state, action: PayloadAction<string>) => {
            state.nickname = action.payload;
          },
          setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
          },
          setSurName: (state, action: PayloadAction<string>) => {
            state.surname = action.payload;
          },
          setGender:  (state, action: PayloadAction<string>) => {
            state.gender = action.payload
          },
          setErrors: (state, action: PayloadAction<{nickname?: string,name?: string, surname?: string, gender?: string }>) => {
            state.errors = action.payload
          }
        },
});
export const { setNickName, setName, setSurName,setGender, setErrors} = personalSlice.actions
export const personalReducer = personalSlice.reducer;