import {LOGIN, LOGOUT} from './types';
import dataService from '../services/loginService';

export const login = (payload) => async (dispatch) => {
  try {
    const res = await dataService.login(payload);
    localStorage.setItem('login', JSON.stringify(res.data));
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('login');
    dispatch({type: LOGOUT});
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
