//LOGIN USER
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

//REGISTER USER
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export interface LoginParams {
  email?: string;
  password?: string;
  rememberMe?: boolean;
}

export interface RegisterParams {
  name?: string;
  email?: string;
  password?: string;
}

interface LoginUser {
  type: typeof LOGIN_USER;
}
interface LoginUserSuccess {
  type: typeof LOGIN_USER_SUCCESS;
  payload?: string;
}
interface LoginUserFailure {
  type: typeof LOGIN_USER_FAILURE;
  error?: string | null;
}

export type LoginDispatchType = LoginUser | LoginUserSuccess | LoginUserFailure;
