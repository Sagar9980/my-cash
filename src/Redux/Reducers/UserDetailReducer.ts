import {
  GET_USER_DETAIL,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_FAILURE,
} from "../ActionTypes/UserDetailTypes";
const initialState = {
  loading: false,
  data: [],
};

export const UserDetailReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_DETAIL:
      return { ...state, loading: true };
    case GET_USER_DETAIL_SUCCESS:
      return { data: action?.payload?.data, loading: false };
    case GET_USER_DETAIL_FAILURE:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
