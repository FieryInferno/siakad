import {RETRIEVE_AGAMA} from './types';
import dataService from '../services/agamaService';

export const retrieveAgama = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_AGAMA,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
