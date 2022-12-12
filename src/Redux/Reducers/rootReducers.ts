import { combineReducers } from 'redux';
import { UserDetailReducer } from './UserDetailReducer';
import { loginUserReducer, registerUserReducer } from './AuthReducer';

export const rootReducers = combineReducers({
  UserDetailReducer: UserDetailReducer,
  LoginUserRecucer: loginUserReducer,
  RegisterUserReducer: registerUserReducer,
});
