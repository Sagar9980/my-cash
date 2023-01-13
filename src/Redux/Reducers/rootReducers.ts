import { combineReducers } from "redux";
import { UserDetailReducer } from "./UserDetailReducer";
import { loginUserReducer, registerUserReducer } from "./AuthReducer";
import { TransactionReducer } from "./TransactionReducer";

export const rootReducers = combineReducers({
  UserDetailReducer: UserDetailReducer,
  LoginUserRecucer: loginUserReducer,
  RegisterUserReducer: registerUserReducer,
  TransactionReducer: TransactionReducer,
});
