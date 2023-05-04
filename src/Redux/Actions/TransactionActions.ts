/* eslint-disable no-lone-blocks */
import {
  CREATE_TRANSACTION,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILURE,
  UPDATE_TRANSACTION,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAILURE,
  GET_TRANSACTION,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_FAILURE,
  DELETE_TRANSACTION,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
} from "./../ActionTypes/TransactionTypes";
import { message } from "antd";
import {
  createTransaction,
  updateTransaction,
  getAllTransactions,
  getSingleTransaction,
  deleteTransaction,
} from "API/transactionApi";

//CREATE TRANSACTION
export const CreateTansaction =
  (data: any) => async (dispatch: any, getState: any) => {
    dispatch({ type: CREATE_TRANSACTION });
    await createTransaction(data)
      .then((res) => {
        message.success("Transaction created successfully");
        {
          dispatch({ type: CREATE_TRANSACTION_SUCCESS, payload: res?.data });
        }
      })
      .catch((err) => {
        dispatch({ type: CREATE_TRANSACTION_FAILURE });
        message.error("Error while creating transaction");
      });
  };

//UPDATE TRANSACTIONS
export const UpdateTransaction =
  (data: any, params: any) => async (dispatch: any, getState: any) => {
    dispatch({ type: UPDATE_TRANSACTION });
    await updateTransaction(data)
      .then((res) => {
        message.success("Transaction updated successfully");
        {
          dispatch({ type: UPDATE_TRANSACTION_SUCCESS, payload: res?.data });
        }
      })
      .catch((err) => {
        dispatch({ type: UPDATE_TRANSACTION_FAILURE });
        message.error("Error while updating transaction");
      });
  };

// FETCHING TRANSACTIONS
export const GetAllTransactions = (params: any) => async (dispatch: any) => {
  dispatch({ type: GET_TRANSACTIONS });
  await getAllTransactions(params)
    .then((res) => {
      message.success("Transactions fetched successfully");
      {
        dispatch({ type: GET_TRANSACTIONS_SUCCESS, payload: res?.data });
      }
    })
    .catch((err) => {
      dispatch({ type: GET_TRANSACTIONS_FAILURE });
      message.error("Error while fetching transactions");
    });
};

//GET SINGLE TRANSACTION
export const GetSingleTransaction = (params: any) => async (dispatch: any) => {
  dispatch({ type: GET_TRANSACTION });
  await getSingleTransaction(params)
    .then((res) => {
      {
        dispatch({ type: GET_TRANSACTION_SUCCESS, payload: res?.data });
      }
    })
    .catch((err) => {
      dispatch({ type: GET_TRANSACTION_FAILURE });
      message.error("Error while fetching transaction");
    });
};
//DELETING TRANSACTION
export const DeleteTransaction =
  (params: any) => async (dispatch: any, getState: any) => {
    dispatch({ type: DELETE_TRANSACTION });
    await deleteTransaction(params)
      .then((res) => {
        message.success("Transaction deleted successfully");
        {
          dispatch({ type: DELETE_TRANSACTION_SUCCESS, payload: params });
        }
      })
      .catch((err) => {
        dispatch({ type: DELETE_TRANSACTION_FAILURE });
        message.error("Error while deleting transaction");
      });
  };
