import {
  CREATE_TRANSACTION,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILURE,
  UPDATE_TRANSACTION,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  GET_TRANSACTION,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_FAILURE,
  DELETE_TRANSACTION,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
} from "./../ActionTypes/TransactionTypes";

const initialState = {
  loading: true,
  data: [],
};

export const TransactionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //  CREATE TRANSACTION
    case CREATE_TRANSACTION:
      return { ...state, loading: true };
    case CREATE_TRANSACTION_SUCCESS:
      return { data: action?.payload?.data, loading: false };
    case CREATE_TRANSACTION_FAILURE:
      return { ...state, loading: false };

    //UPDATE TRANSACTION
    case UPDATE_TRANSACTION:
      return { ...state, loading: true };
    case UPDATE_TRANSACTION_SUCCESS:
      return { data: action?.payload?.data, loading: false };
    case UPDATE_TRANSACTION_FAILURE:
      return { ...state, loading: false };

    //GET TRANSACTION
    case GET_TRANSACTION:
      return { ...state, loading: true };
    case GET_TRANSACTION_SUCCESS:
      return { data: action?.payload?.data, loading: false };
    case GET_TRANSACTION_FAILURE:
      return { ...state, loading: false };

    //DELETE TRANSACTION
    case DELETE_TRANSACTION:
      return { ...state, loading: true };
    case DELETE_TRANSACTION_SUCCESS:
      return { data: action?.payload?.data, loading: false };
    case DELETE_TRANSACTION_FAILURE:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
