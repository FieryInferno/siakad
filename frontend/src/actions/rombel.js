import {RETRIEVE_ROMBEL} from './types';
import dataService from '../services/rombelService';

export const retrieveRombel = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_ROMBEL,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
