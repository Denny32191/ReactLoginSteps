import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { LoginState, loginReducer } from '../features/Login/loginSlice';



export const store = configureStore({
  reducer: {
    login: loginReducer,
    
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  login:  LoginState,

};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
