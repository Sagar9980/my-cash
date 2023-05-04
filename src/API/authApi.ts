import { API } from "./api";
import { LoginParams, RegisterParams } from "Redux/ActionTypes/AuthTypes";

export const userLogin = (data: LoginParams) => {
  return API({
    url: "auth/login",
    method: "POST",
    data: data,
    withCredentials: true,
  });
};

export const userRegister = (data: RegisterParams) => {
  return API({
    url: "auth/register",
    method: "POST",
    data: data,
    withCredentials: true,
  });
};

export const logoutUser = () => {
  return API({
    url: "auth/logout",
    method: "GET",
    withCredentials: true,
  });
};
