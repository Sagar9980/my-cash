import axios from "axios";
import { environment } from "Config/environment";

export const baseUrl = environment.baseUrl;
export const API = axios.create({
  baseURL: baseUrl,
});

export const getToken = () => {
  return localStorage.getItem("token");
}

API.interceptors.request.use(
  async (config) => {
    config.headers = {
      "Content-Type": "application/json",
      "Authorization": getToken()
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
