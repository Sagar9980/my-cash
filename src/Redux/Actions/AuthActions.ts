import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LoginParams,
  RegisterParams,
} from 'Redux/ActionTypes/AuthTypes';
import { userLogin, userRegister } from 'API/authApi';
import { message } from 'antd';

export const loginUser =
  (params: LoginParams) => async (dispatch: any, getState: any) => {
    dispatch({ type: LOGIN_USER });
    await userLogin(params)
      .then((res) => {
        message.success(res?.data?.message);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res?.data?.message });
        localStorage.setItem('user', res?.data?.user);
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_USER_FAILURE,
          error: err?.response?.data?.msg,
        });
      });
  };
export const registerUser =
  (params: RegisterParams) => async (dispatch: any, getState: any) => {
    dispatch({ type: REGISTER_USER });
    await userRegister(params)
      .then((res) => {
        message.success(res?.data?.message);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res?.data?.message });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_USER_FAILURE,
          error: err?.response?.data?.msg,
        });
      });
  };
