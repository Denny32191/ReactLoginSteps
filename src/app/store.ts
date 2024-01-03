
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { LoginState, loginReducer } from "../features/Login/loginSlice";
import {
  PersonalState,
  personalReducer,
} from "../features/Personal/personalSlice";
import {WizardState,wizardReducer} from './../сomponents/Wizzard/wizardSlice'


export const store = configureStore({
  reducer: {
    login: loginReducer,
    personal: personalReducer,
    wizard: wizardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  login: LoginState;
  personal: PersonalState;
  wizard: WizardState;
};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
