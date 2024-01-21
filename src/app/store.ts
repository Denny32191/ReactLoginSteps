import { Preference } from './../features/Preference/Preference';

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { LoginState, loginReducer } from "../features/Login/loginSlice";
import {
  PersonalState,
  personalReducer,
} from "../features/Personal/personalSlice";
import { PreferenceState , preferenceReducer } from '../features/Preference/preferenceSlice';



export const store = configureStore({
  reducer: {
    login: loginReducer,
    personal: personalReducer,
    preference: preferenceReducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  login: LoginState;
  personal: PersonalState;
  preference: PreferenceState

};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
