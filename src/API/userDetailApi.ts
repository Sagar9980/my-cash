import { API } from "./api";

export const getUserDetail = () => {
  return API({
    url: "/user-detail",
    method: "GET",
  });
};
