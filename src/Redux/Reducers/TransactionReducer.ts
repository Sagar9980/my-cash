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
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAILURE,
  DELETE_TRANSACTION,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
} from "./../ActionTypes/TransactionTypes";

const initialState = {
  loading: false,
  data: [],
  response: {},
};

export const TransactionReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    //  CREATE TRANSACTION
    case CREATE_TRANSACTION:
      return { ...state, loading: true };
    case CREATE_TRANSACTION_SUCCESS:
      state?.data?.push(action?.payload?.data);
      return {
        ...state,
        response: action?.payload?.message,
        loading: false,
      };
    case CREATE_TRANSACTION_FAILURE:
      return { ...state, loading: false };

    //UPDATE TRANSACTION
    case UPDATE_TRANSACTION:
      return { ...state, loading: true };
    case UPDATE_TRANSACTION_SUCCESS:
      const tempList = state?.data?.filter(
        (d: any) => d?.id !== action?.payload?.data.id
      );
      tempList.push(action?.payload?.data);
      return { ...state, loading: false, data: tempList };
    case UPDATE_TRANSACTION_FAILURE:
      return { ...state, loading: false };

    //GET ALL TRANSACTION
    case GET_TRANSACTIONS:
      return { ...state, loading: true };
    case GET_TRANSACTIONS_SUCCESS:
      return { data: action?.payload?.data, loading: false };
    case GET_TRANSACTIONS_FAILURE:
      return { ...state, loading: false };

    //GET SINGLE TRANSACTION
    case GET_TRANSACTION:
      return { ...state, loading: true };
    case GET_TRANSACTION_SUCCESS:
      return { ...state, response: action?.payload?.data, loading: false };
    case GET_TRANSACTION_FAILURE:
      return { ...state, loading: false };

    //DELETE TRANSACTION
    case DELETE_TRANSACTION:
      return { ...state, loading: true };
    case DELETE_TRANSACTION_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        response: action?.payload,
        loading: false,
        data: state.data.filter((d: any) => d?.id !== action?.payload?.id),
      };
    case DELETE_TRANSACTION_FAILURE:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
