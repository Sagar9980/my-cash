import axios from "axios";
import Cookies from "js-cookie";
import { environment } from "Config/environment";

export const baseUrl = environment.baseUrl;
let token: any = false;
const getToken = () => {
  try {
    token = Cookies.get("token");
  } catch (error) {
    console.log(error);
    localStorage.setItem("loggedIn", "false");
  }
  return token;
};

export const API = axios.create({
  baseURL: baseUrl,
});

API.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
