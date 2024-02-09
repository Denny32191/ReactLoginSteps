


import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { LoginState, loginReducer } from "../features/Login/loginSlice";
import {
  PersonalState,
  personalReducer,
} from "../features/Personal/personalSlice";
import { PreferenceState , preferenceReducer } from '../features/Preference/preferenceSlice';
import { DescriptionState,descriptionReducer} from '../features/Description/descriptionSlice';
import { ModalState, modalReducer } from './../сomponents/Modal/modalSlice'




export const store = configureStore({
  reducer: {
    login: loginReducer,
    personal: personalReducer,
    preference: preferenceReducer,
    description: descriptionReducer,
    modal: modalReducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  login: LoginState;
  personal: PersonalState;
  preference: PreferenceState;
  description: DescriptionState;
  modal: ModalState;

};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
