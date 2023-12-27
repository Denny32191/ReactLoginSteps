import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { LoginState, loginReducer } from '../features/Login/loginSlice';
import { PersonalState, personalReducer} from '../features/Stepper/personalSlice';



export const store = configureStore({
  reducer: {
    login: loginReducer,
    personal: personalReducer,

    
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  login:  LoginState,
  personal: PersonalState,

};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
