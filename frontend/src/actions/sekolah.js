import {RETRIEVE_SEKOLAH, UPDATE_SEKOLAH} from './types';
import dataService from '../services/sekolahService';

export const retrieveSekolah = () => async (dispatch) => {
  try {
    const res = await dataService.get();
    dispatch({
      type: RETRIEVE_SEKOLAH,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateSekolah = (payload) => async (dispatch) => {
  try {
    const res = await dataService.update(payload);
    dispatch({
      type: UPDATE_SEKOLAH,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
