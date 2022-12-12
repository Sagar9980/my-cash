import { LoginDispatchType } from "./../ActionTypes/AuthTypes";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "../../Redux/ActionTypes/AuthTypes";
interface LoginState {
  loading: boolean;
  response?: string;
  error?: string | null;
}

const loginState = {
  loading: false,
  response: "",
  error: null,
};

const registerState = {
  loading: false,
  response: "",
  error: null,
};

export const loginUserReducer = (
  state: LoginState = loginState,
  action: LoginDispatchType
) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
        error: null,
      };
    case LOGIN_USER_FAILURE:
      return { ...state, loading: false, error: action.error, response: "" };
    default:
      return { ...state };
  }
};

export const registerUserReducer = (
  state: any = registerState,
  action: any
) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { loading: false, response: action.payload, error: null };
    case REGISTER_USER_FAILURE:
      return { ...state, loading: false, error: action.error, response: "" };
    default:
      return { ...state };
  }
};
