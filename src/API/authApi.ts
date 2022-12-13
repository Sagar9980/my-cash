import { API } from "./api";
import { LoginParams, RegisterParams } from "Redux/ActionTypes/AuthTypes";

export const userLogin = (data: LoginParams) => {
  return API({
    url: "/login",
    method: "POST",
    data: data,
    withCredentials: true,
  });
};

export const userRegister = (data: RegisterParams) => {
  return API({
    url: "/register",
    method: "POST",
    data: data,
    withCredentials: true,
  });
};

export const logoutUser = () => {
  return API({
    url: "/logout",
    method: "GET",
    withCredentials: true,
  });
};
