import { API } from "./api";

//create transaction
export const createTransaction = (data: any, params: any) => {
  return API({
    url: "/transaction/add",
    method: "POST",
    data: data,
    params: params,
  });
};

//update transaction
export const updateTransaction = (data: any, params: any) => {
  return API({
    url: "/transaction/update",
    method: "POST",
    data: data,
    params: params,
  });
};

//GetAllTransactions
export const getAllTransactions = (params: any) => {
  return API({
    url: "/transaction/all",
    method: "GET",
    params: params,
  });
};

//GetSingle trnasaction
export const getSingleTransaction = (params: any) => {
  return API({
    url: "/transaction",
    method: "GET",
    params: params,
  });
};

export const deleteTransaction = (params: any) => {
  return API({
    url: "/transaction/delete",
    method: "GET",
    params: params,
  });
};

//Get Line chart Data
export const getLineChartData = (params: any) => {
  return API({
    url: "transaction/linechartdata",
    method: "GET",
    params: params,
  });
};
