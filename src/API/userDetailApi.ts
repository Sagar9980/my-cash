import { API } from './api';

export const getUserDetail = (data: any) => {
  return API({
    url: '/user-detail',
    method: 'GET',
    params: data,
  });
};
