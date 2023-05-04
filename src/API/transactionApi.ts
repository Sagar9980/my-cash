import { API } from "./api";

//create transaction
export const createTransaction = (data: any) => {
  return API({
    url: "/transaction/add",
    method: "POST",
    data: data,
  });
};

//update transaction
export const updateTransaction = (data: any) => {
  return API({
    url: "/transaction/update",
    method: "POST",
    data: data,
  });
};

//GetAllTransactions
export const getAllTransactions = (params: any) => {
  return API({
    url: "/transaction/all",
    method: "GET",
  });
};

//GetSingle trnasaction
export const getSingleTransaction = (params: any) => {
  return API({
    url: "/transaction/single",
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
  });
};

//Get dashboard data
export const getDashboardData = (params: any) => {
  return API({
    url: "transaction/dashboarddata",
    method: "GET",
  });
};
