/* eslint-disable no-lone-blocks */
import { message } from "antd";
import {
  GET_USER_DETAIL,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_FAILURE,
} from "../ActionTypes/UserDetailTypes";
import { getUserDetail } from "API/userDetailApi";

//create User
export const fetchUserDetail = () => async (dispatch: any, getState: any) => {
  console.log("hello user");
  dispatch({ type: GET_USER_DETAIL });
  await getUserDetail()
    .then((res) => {
      message.success("Users detail fetched successfully");
      {
        dispatch({ type: GET_USER_DETAIL_SUCCESS, payload: res?.data });
      }
    })
    .catch((err) => {
      dispatch({ type: GET_USER_DETAIL_FAILURE });
      message.error("Error while fetching users data");
    });
};
