import { clearUserData, setUserData } from '../utils.js';
import * as api from './api.js';

const endpoints = {
  login: '/users/login',
  register: '/users/register',
  logout: '/users/logout'
};

export const login = async (email, password) => {
  const result = await api.post(endpoints.login, { email, password });
  setUserData(result);

  return result;
};

export const register = async (email, password) => {
  const result = await api.post(endpoints.register, { email, password });
  setUserData(result);

  return result;
};

export const logout = async () => {
  api.post(endpoints.logout);
  clearUserData();
};
