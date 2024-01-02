import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export  type PersonalState = {
    nickname: string;
    username: string;
    surname:string;
    gender:string;
    errors: {
        nickname?: string;
        username?: string;
        surname?:string;
        gender?:string;
}
}
const initialState: PersonalState = {
    nickname: '',
    username: '',
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
          setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
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
export const { setNickName, setUserName, setSurName,setGender, setErrors} = personalSlice.actions
export const personalReducer = personalSlice.reducer;