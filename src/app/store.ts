import { Description } from './../features/Description/Description';
import { Preference } from './../features/Preference/Preference';

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { LoginState, loginReducer } from "../features/Login/loginSlice";
import {
  PersonalState,
  personalReducer,
} from "../features/Personal/personalSlice";
import { PreferenceState , preferenceReducer } from '../features/Preference/preferenceSlice';
import { DescriptionState,descriptionReducer} from '../features/Description/descriptionSlice';




export const store = configureStore({
  reducer: {
    login: loginReducer,
    personal: personalReducer,
    preference: preferenceReducer,
    description: descriptionReducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  login: LoginState;
  personal: PersonalState;
  preference: PreferenceState;
  description: DescriptionState;

};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
